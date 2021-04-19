import { setupWebGL, pointsToBuffer } from 'GLHelper';
import { vec4 } from 'gl-matrix';

import vertexShader from './shader.vert';
import fragmentShader from './shader.frag';

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
  for (let i = 0; i < indexs.length; i++) {
    points.push(vertices[indexs[i]]);
    colors.push(vertexColors[a]);
    // colors.push(vertexColors[a]);
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

const image = new Image();
image.src = '/chapter06/shadedCube/uv.png';// 设置图片路径
console.log(image);
image.onload = texture;// 图片加载成功后执行texture函数

console.log(points);
console.log(pointsToBuffer(points));
console.log(colors);
console.log(pointsToBuffer(colors));

const canvas = document.getElementById('gl-canvas');
const gl = setupWebGL(canvas);
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(1.0, 1.0, 1.0, 1.0);
gl.enable(gl.DEPTH_TEST);

function texture() {
  const texture = gl.createTexture(); // 创建纹理图像缓冲区
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); // 纹理图片上下反转
  gl.activeTexture(gl.TEXTURE0); // 激活0号纹理单元TEXTURE0
  gl.bindTexture(gl.TEXTURE_2D, texture); // 绑定纹理缓冲区
  // 设置纹理贴图填充方式(纹理贴图像素尺寸大于顶点绘制区域像素尺寸)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  // 设置纹理贴图填充方式(纹理贴图像素尺寸小于顶点绘制区域像素尺寸)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  // 设置纹素格式，jpg格式对应gl.RGB
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
  gl.uniform1i(u_Sampler, 0); // 纹理缓冲区单元TEXTURE0中的颜色数据传入片元着色器
  // 进行绘制
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

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

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, pointsToBuffer(points), gl.STATIC_DRAW);

const vPosition = gl.getAttribLocation(program, 'vPosition');
gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vPosition);

const thetaLoc = gl.getUniformLocation(program, 'theta');
// gl.uniform3fv(thetaLoc, theta);
const bufferColor = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, bufferColor);
gl.bufferData(gl.ARRAY_BUFFER, pointsToBuffer(colors), gl.STATIC_DRAW);

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
