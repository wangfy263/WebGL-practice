import { pointsToBuffer } from 'GLHelper';
import { vec3, vec4, mat4 } from 'gl-matrix';
import { setupWebGL, createProgram, radians } from './util';

import vertexShader from './shader.vert';
import fragmentShader from './shader.frag';

const numVertices = 36;
const points = [];
// const colors = [];
const normalsArray = [];

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

const lightAmbient = vec4(0.2, 0.2, 0.2, 1.0); // 环境光强度
const lightDiffuse = vec4(1.0, 1.0, 1.0, 1.0); // 漫反射强度
const lightSpecular = vec4(1.0, 1.0, 1.0, 1.0); // 镜面反射强度

// 材质反射系数
const materialAmbient = vec4(1.0, 0.0, 1.0, 1.0); // 环境光反射系数
const materialDiffuse = vec4(1.0, 0.8, 0.0, 1.0); // 漫反射系数
const materialSpecular = vec4(1.0, 0.8, 0.0, 1.0); // 镜面反射系数
const materialShininess = 100.0; // 镜面反射高光系数

function quad(a, b, c, d) {
  const indexs = [a, b, c, a, c, d];
  const t1 = vec4.subtract(vertices[b], vertices[a]);
  const t2 = vec4.subtract(vertices[c], vertices[b]);
  console.log(t1);
  console.log(t2);
  let normal = vec3.cross(vec3(t1), vec3(t2));
  console.log(normal);
  normal = vec4(normal, 1.0);
  for(let i = 0; i < indexs.length; i++) {
    points.push(vertices[indexs[i]]);
    normalsArray.push(normal);
    // colors.push(vertexColors[indexs[i]]);
    // colors.push(vertexColors[c]);
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

const nBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, nBuffer);
gl.bufferData(gl.ARRAY_BUFFER, pointsToBuffer(normalsArray), gl.STATIC_DRAW);
const vNormal = gl.getAttribLocation(program, 'vNormal');
gl.vertexAttribPointer(vNormal, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vNormal);

const thetaLoc = gl.getUniformLocation(program, 'theta');
const modelViewMatrix = gl.getUniformLocation(program, 'modelViewMatrix');
const projectionMatrix = gl.getUniformLocation(program, 'projectionMatrix');

const ambientProduct = gl.getUniformLocation(program, 'ambientProduct');
const diffuseProduct = gl.getUniformLocation(program, 'diffuseProduct');
const specularProduct = gl.getUniformLocation(program, 'specularProduct');

const lightPos= gl.getUniformLocation(program, 'lightPosition');
const ambientProd = vec4.multiply(lightAmbient, materialAmbient);
const diffuseProd = vec4.multiply(lightDiffuse, materialDiffuse);
const specularProd = vec4.multiply(lightSpecular, materialSpecular);
const shininess = gl.getUniformLocation(program, 'shininess');

const angles = radians( theta );
  vec3 c = cos(angles);
  vec3 s = sin(angles);

  mat4 sc = mat4(0.5, 0.0, 0.0, 0.0,
                 0.0, 0.5, 0.0, 0.0,
                 0.0, 0.0, 0.5, 0.0,
                 0.0, 0.0, 0.0, 1.0);

  mat4 rx = mat4(1.0, 0.0, 0.0, 0.0,
                 0.0, c.x, s.x, 0.0,
                 0.0, -s.x, c.x, 0.0,
                 0.0, 0.0, 0.0, 1.0);
  
  mat4 ry = mat4(c.y, 0.0, s.y, 0.0,
                 0.0, 1.0, 0.0, 0.0,
                 s.y, 0.0, c.y, 0.0,
                 0.0, 0.0, 0.0, 1.0);

  mat4 rz = mat4(c.z, s.z, 0.0, 0.0,
                 -s.z, c.z, 0.0, 0.0,
                 0.0, 0.0, 1.0, 0.0,
                 0.0, 0.0, 0.0, 1.0);
  
  mat4 sm = mat4(0.5, 0.0, 0.0, 0.0,
                0.0, 0.5, 0.0, 0.0,
                0.0, 0.0, 0.5, 0.0,
                0.0, 0.0, 0.0, 1.0);

function render() {


  requestAnimationFrame(render);
}