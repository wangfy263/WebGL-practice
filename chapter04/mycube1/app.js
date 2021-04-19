import { setupWebGL, pointsToBuffer } from "GLHelper";
import { vec4 } from "gl-matrix";

import vertexShader from "./shader.vert";
import fragmentShader from "./shader.frag";

const numVertices = 36;

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

const indices = [
  1,0,3,
  3,2,1,
  2,3,7,
  7,6,2,
  3,0,4,
  4,7,3,
  6,5,1,
  1,2,6,
  4,5,6,
  6,7,4,
  5,4,0,
  0,1,5
];

const canvas = document.getElementById();
const gl = setupWebGL(canvas);
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(1.0, 1.0, 1.0, 1.0);
gl.enable(gl.DEPTH_TEST);

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

const vBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
gl.bufferData(gl.ARRAY_BUFFER, pointsToBuffer(vertices), gl.STATIC_DRAW);
const vPosition = gl.getAttribLocation(program, 'vPosition');
gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vPosition);

console.log(gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE));
const cBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
gl.bufferData(gl.ARRAY_BUFFER, pointsToBuffer(vertexColors), gl.STATIC_DRAW);
const vColor = gl.getAttribLocation(program, 'vColor');
gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vColor);
console.log(gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE));

const thetaLoc = gl.getUniformLocation(program, 'theta');
// gl.uniform3fv(thetaLoc, theta);

const iBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iBuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(indices), gl.STATIC_DRAW);


function render() {
  theta[0] += 2.0;
  // theta[1] += 2.0;
  // theta[2] += 2.0;
  gl.uniform3fv(thetaLoc, theta);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  // gl.drawArrays(gl.TRIANGLES, 0, points.length);
  gl.drawElements(gl.TRIANGLES, numVertices, gl.UNSIGNED_BYTE, 0);
  requestAnimationFrame(render);
}

render();