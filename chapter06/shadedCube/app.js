import { setupWebGL, pointsToBuffer } from "GLHelper";
import { vec4 } from "gl-matrix";

import vertexShader from "./shader.vert";
import fragmentShader from "./shader.frag";

const numVertices = 36;
const points = [];
const colors = [];

const theta = [0, 30, 60];

const vertices = [
  vec4(-0.5, -0.5, 0.5, 1.0),
  vec4(-0.5, 0.5, 0.5, 1.0),
  vec4(0.5, 0.5, 0.5, 1.0),
  vec4(0.5, -0.5, 0.5, 1.0),
  vec4(-0.5, -0.5, -0.5, 1.0),
  vec4(-0.5, 0.5, -0.5, 1.0),
  vec4(0.5, 0.5, -0.5, 1.0),
  vec4(0.5, -0.5, -0.5, 1.0),
];

const vertexColors = [
  vec4(1.0, 0.0, 0.0, 1.0),
  vec4(1.0, 1.0, 0.0, 1.0),
  vec4(0.0, 1.0, 0.0, 1.0),
  vec4(1.0, 0.0, 1.0, 1.0),
  vec4(0.0, 1.0, 1.0, 1.0),
  vec4(0.0, 0.0, 1.0, 1.0),
  vec4(0.0, 0.0, 0.0, 1.0),
  vec4(1.0, 1.0, 1.0, 1.0),
];

function quad(a, b, c, d) {
  const indexs = [a, b, c, a, c, d];
  for(let i = 0; i < indexs.length; i++) {
    points.push(vertices[indexs[i]]);
    colors.push(vertexColors[indexs[i]]);
  }
}

const colorCube = () => {
  quad(1, 0, 3, 2);
  quad(2, 3, 7, 6);
  quad(3, 0, 4, 7);
  quad(6, 5, 1, 2);
  quad(4, 5, 6, 7);
  quad(5, 4, 0, 1);
};

colorCube();

console.log(points);
console.log(colors);

const canvas = document.getElementById('gl-canvas');
const gl = setupWebGL(canvas);
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(1.0, 1.0, 1.0, 1.0);
gl.enable(gl.DEPTH_TEST);

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, pointsToBuffer(points), gl.STATIC_DRAW);

const bufferColor = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, bufferColor);
gl.bufferData(gl.ARRAY_BUFFER, pointsToBuffer(colors), gl.STATIC_DRAW);

const vertShdr = gl.createShader(gl.VERTEX_SHADER);
const fragShdr = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(vertShdr, vertexShader);
gl.compileShader(vertShdr);
console.log(gl.getShaderParameter(vertShdr, gl.COMPILE_STATUS));
gl.shaderSource(fragShdr, fragmentShader);
gl.compileShader(fragShdr);
console.log(gl.getShaderParameter(fragShdr, gl.COMPILE_STATUS));
console.log(gl.getShaderInfoLog(fragShdr));

const program = gl.createProgram();
gl.attachShader(program, vertShdr);
gl.attachShader(program, fragShdr);
gl.linkProgram(program);
gl.useProgram(program);
console.log(gl.getProgramParameter(program, gl.LINK_STATUS));

const vPosition = gl.getAttribLocation(program, 'vPosition');
gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vPosition);

const thetaLoc = gl.getUniformLocation(program, 'theta');
// gl.uniform3fv(thetaLoc, theta);

const vColor = gl.getAttribLocation(program, 'vColor');
gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vColor);

function render() {
  theta[0] += 2.0;
  // theta[1] += 2.0;
  // theta[2] += 2.0;
  gl.uniform3fv(thetaLoc, theta);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, points.length);
  requestAnimationFrame(render);
}

render();