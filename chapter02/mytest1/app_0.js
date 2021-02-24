import { setupWebGL, pointsToBuffer } from 'GLHelper';
import { vec2 } from 'gl-matrix';

import vertexShader from './shader.vert';
import fragmentShader from './shader.frag';

// 准备顶点数据
const vertices = [vec2(-1, -1), vec2(0, 1), vec2(1, -1)];

// p点
const u = vec2.add(vec2.create(), vertices[0], vertices[1]);
const v = vec2.add(vec2.create(), vertices[0], vertices[2]);
let p = vec2.add(vec2.create(), u, v);
p = vec2.scale(vec2.create(), p, 0.25);
console.log(u);
console.log(v);
console.log(p);
console.log(vertexShader);
console.log(fragmentShader);

const points = [p];

const numPoints = 5000;
// 生成5000个点
for(let i = 0; i < numPoints; i++) {
  const j = Math.floor(Math.random() * 3);
  let p1 = vec2.add(vec2.create(), points[i], vertices[j]);
  p1 = vec2.scale(vec2.create(), p1, 0.5);
  // console.log(p1);
  points.push(p1);
}

const canvas = document.getElementById('gl-canvas');
const gl = setupWebGL(canvas);
//
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(1.0, 1.0, 1.0, 1.0);

// 建立缓冲区
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
// 顶点数据放入缓冲区
gl.bufferData(gl.ARRAY_BUFFER, pointsToBuffer(points), gl.STATIC_DRAW);

// 处理顶点着色器
const vertShdr = gl.createShader(gl.VERTEX_SHADER); // 创建着色器对象
gl.shaderSource(vertShdr, vertexShader); // 加载着色器代码
gl.compileShader(vertShdr); // 编译着色器

// 处理片元着色器
const fragShdr = gl.createShader(gl.FRAGMENT_SHADER); // 创建片元着色器
gl.shaderSource(fragShdr, fragmentShader);
gl.compileShader(fragShdr);

// 将着色器挂载至应用程序对象
const program = gl.createProgram();
gl.attachShader(program, vertShdr);
gl.attachShader(program, fragShdr);

// 链接起来
gl.linkProgram(program);
gl.useProgram(program);

const vPosition = gl.getAttribLocation(program, 'vPosition');
gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vPosition);

// 绘制图形
gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawArrays(gl.POINTS, 0, numPoints);
