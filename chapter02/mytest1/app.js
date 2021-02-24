import {setupWebGL, pointsToBuffer} from "GLHelper";
import {vec3} from "gl-matrix";

import vertexShader from "./shader.vert";
import fragmentShader from "./shader.frag";

// 定义顶点
const vects = [
  // vec3(-0.5, -0.5, -0.5),
  // vec3(0.5, 0.5, 0.5),
  // vec3(0.0, 0.5, 0.0),
  // vec3(0.0, -0.5, 0.5),
  vec3(0.0000, 0.0000, -1.0000),
  vec3(0.0000, 0.9428, 0.3333),
  vec3(-0.8165, -0.4714, 0.3333),
  vec3(0.8165, -0.4714, 0.3333),
];

const points = [];
const colors = [];
const baseColors = [
  vec3(1.0, 0.0, 0.0),
  vec3(0.0, 1.0, 0.0),
  vec3(0.0, 0.0, 1.0),
  vec3(0.0, 0.0, 0.0),
];
// 按照四面体的顶点分为4个面
function tetra(a, b, c, d) {
  points.push(a, b, c);
  colors.push(baseColors[0], baseColors[0], baseColors[0]);
  points.push(a, b, d);
  colors.push(baseColors[1], baseColors[1], baseColors[1]);
  points.push(a, c, d);
  colors.push(baseColors[2], baseColors[2], baseColors[2]);
  points.push(b, c, d);
  colors.push(baseColors[3], baseColors[3], baseColors[3]);
}

const initNum = 1;
// 递归 三角剖分
function divideTetra(a, b, c, d, count = initNum) {
  if(count === 0) {
    tetra(a, b, c, d);
  } else {
    const ab = vec3.lerp(a, b, 0.5);
    const ac = vec3.lerp(a, c, 0.5);
    const ad = vec3.lerp(a, d, 0.5);
    const bc = vec3.lerp(b, c, 0.5);
    const bd = vec3.lerp(b, d, 0.5);
    const cd = vec3.lerp(c, d, 0.5);
    --count;
    divideTetra(a, ab, ac, ad, count);
    divideTetra(b, ab, bc, bd, count);
    divideTetra(c, bc, ac, cd, count);
    divideTetra(d, bd, cd, ad, count);
  }
}

divideTetra(...vects);

console.log(points);

const canvas = document.getElementById('gl-canvas');
const gl = setupWebGL(canvas);

gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(1.0, 1.0, 1.0, 1.0);

// 处理顶点着色器
const vertShdr = gl.createShader(gl.VERTEX_SHADER); // 创建着色器对象
gl.shaderSource(vertShdr, vertexShader); // 加载着色器代码
gl.compileShader(vertShdr); // 编译着色器

// 处理片元着色器
const fragShdr = gl.createShader(gl.FRAGMENT_SHADER); // 创建片元着色器
gl.shaderSource(fragShdr, fragmentShader);
gl.compileShader(fragShdr);

// 将着色器添加至应用程序对象
const program = gl.createProgram();
gl.attachShader(program, vertShdr);
gl.attachShader(program, fragShdr);

// 链接起来 链接给定的WebGLProgram，从而完成为程序的片元和顶点着色器准备GPU代码的过程。
gl.linkProgram(program);
gl.useProgram(program);
gl.enable(gl.DEPTH_TEST);

const bufferColor = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, bufferColor);
gl.bufferData(gl.ARRAY_BUFFER, pointsToBuffer(colors), gl.STATIC_DRAW);

const vColor = gl.getAttribLocation(program, 'vColor');
gl.vertexAttribPointer(vColor, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vColor);

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, pointsToBuffer(points), gl.STATIC_DRAW); // 转换成GPU的数据类型

const vPosition = gl.getAttribLocation(program, 'vPosition');
gl.vertexAttribPointer(vPosition, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vPosition);

// 绘制图形
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
gl.drawArrays(gl.TRIANGLES, 0, points.length);