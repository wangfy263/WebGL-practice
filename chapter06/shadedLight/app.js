import { pointsToBuffer } from "GLHelper";
import { vec3, vec4, mat4 } from 'gl-matrix';
import { setupWebGL, createProgram, mult } from "./util";

import vertexShader from './shader.vert';
import fragmentShader from './shader.frag';

const numVertices = 36;
const points = [];
const colors = [];

const theta = [0, 30, 60];
// const theta = [0, 0, 0];

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

// const vertexColors = [
//   vec4(1, 0, 0, 1),
//   vec4(1, 1, 0, 1),
//   vec4(1, 1, 1, 1),
//   vec4(0, 0, 1, 1),
//   vec4(0, 1, 1, 1),
//   vec4(1, 0, 1, 1),
//   vec4(0, 1, 0, 1),
//   vec4(0, 0, 0, 1),
// ];

// 定义光源
const lightPosition = vec4(1.0, 1.0, 1.0, 0.0); // 点光源位置，第四个分量为0，表示远距离光源
const lightAmbient = vec4(0.2, 0.2, 0.2, 1.0); // 环境光
const lightDiffuse = vec4(1.0, 1.0, 1.0, 1.0); // 漫反射
const lightSpecular = vec4(1.0, 1.0, 1.0, 1.0); // 镜面反射

// 材质反射系数
const materialAmbient = vec4(1.0, 0.0, 1.0, 1.0); // 环境光反射系数
const materialDiffuse = vec4(1.0, 0.8, 0.0, 1.0); // 漫反射系数
const materialSpecular = vec4(1.0, 0.8, 0.0, 1.0); // 镜面反射系数
const materialShininess = 100.0; // 镜面反射高光系数

function quad(a, b, c, d) {
  const indexs = [a, b, c, a, c, d];
  for (let i = 0; i < indexs.length; i++) {
    points.push(vertices[indexs[i]]);
    // colors.push(vertexColors[indexs[i]]);
    colors.push(vertexColors[c]);
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

const canvas = document.getElementById('gl-canvas');
const gl = setupWebGL(canvas);
gl.clearColor(1.0, 1.0, 1.0, 1.0);
gl.enable(gl.DEPTH_TEST);

const program = createProgram(gl, vertexShader, fragmentShader);

const vBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
gl.bufferData(gl.ARRAY_BUFFER, pointsToBuffer(points), gl.STATIC_DRAW);
const vPosition = gl.getAttribLocation(program, 'vPosition');
gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vPosition);

const cBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
gl.bufferData(gl.ARRAY_BUFFER, pointsToBuffer(colors), gl.STATIC_DRAW);
const vColor = gl.getAttribLocation(program, 'vColor');
gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vColor);

const thetaLoc = gl.getUniformLocation(program, 'theta');
const txLoc = gl.getUniformLocation(program, 'tx');
const viewMatrix = gl.getUniformLocation(program, 'viewMatrix');
const perspectMatrix = gl.getUniformLocation(program, 'perspectMatrix');
const orthoMatrix = gl.getUniformLocation(program, 'orthoMatrix');

const tx1 = mat4(1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                -0.5, 0, 0, 1);

const tx2 = mat4(1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0.5, 0, 0, 1);

// 视图矩阵
const eye = vec3(0, 0, 2);
const center = vec3(0, 0, 0);
const up = vec3(0, 1, 0);
const view = mat4.lookAt(eye, center, up);
console.log(view);

const aspect = canvas.width / canvas.height;
const perspect = mat4.perspective(45, aspect, 0.3, 5); // 透视投影
const ortho = mat4.ortho(-3, 3, 3, -3, 0.3, 5); // 正交投影

function render() {
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  theta[0] += 2.0;
  gl.uniform3fv(thetaLoc, theta);
  gl.uniformMatrix4fv(viewMatrix, false, view);
  // gl.uniformMatrix4fv(perspectMatrix, false, perspect);
  gl.uniformMatrix4fv(orthoMatrix, false, ortho);
  gl.uniformMatrix4fv(txLoc, false, tx1);
  gl.drawArrays(gl.TRIANGLES, 0, numVertices);

  // gl.uniform3fv(thetaLoc, theta);
  // gl.uniformMatrix4fv(viewMatrix, false, view);
  // gl.uniformMatrix4fv(perspectMatrix, false, perspect);
  gl.uniformMatrix4fv(txLoc, false, tx2);
  gl.drawArrays(gl.TRIANGLES, 0, numVertices);
  requestAnimationFrame(render);
}
render();
