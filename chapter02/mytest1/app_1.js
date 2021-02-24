import {setupWebGL, pointsToBuffer} from 'GLHelper';
import {vec2} from 'gl-matrix';

import vertexShader from './shader.vert';
import fragmentShader from './shader.frag';

// 准备顶点数据
const verts = [vec2(-1, -1), vec2(0, 1), vec2(1, -1)];

const points = [];

const numTimesToSubdivide = 2;

function divideTriangle(a, b, c, count = numTimesToSubdivide) {
  if(count === 0) {
    points.push(a, b, c);
  } else {
    const ab = vec2.lerp(a, b, 0.5);
    const ac = vec2.lerp(a, c, 0.5);
    const bc = vec2.lerp(b, c, 0.5);

    --count;
    divideTriangle(a, ac, ab, count);
    divideTriangle(b, ab, bc, count);
    divideTriangle(c, ac, bc, count);
  }
}

divideTriangle(verts[0], verts[1], verts[2]);

console.log(points);

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
gl.drawArrays(gl.TRIANGLES, 0, points.length);