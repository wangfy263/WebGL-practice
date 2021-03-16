import { setupWebGL, pointsToBuffer } from 'GLHelper';
import { vec2 } from 'gl-matrix';

import vertexShader from './shader.vert';
import fragmentShader from './shader.frag';

const verts = [vec2(0, 1), vec2(1, 0), vec2(-1, 0), vec2(0, -1)];

const canvas = document.getElementById('gl-canvas');
const gl = setupWebGL(canvas);

gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(1.0, 1.0, 1.0, 1.0);

const vertexShdr = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShdr, vertexShader);
gl.compileShader(vertexShdr);

const fragShdr = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragShdr, fragmentShader);
gl.compileShader(fragShdr);

const program = gl.createProgram();
gl.attachShader(program, vertexShdr);
gl.attachShader(program, fragShdr);

gl.linkProgram(program);
gl.useProgram(program);

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, pointsToBuffer(verts), gl.STATIC_DRAW);

const vPosition = gl.getAttribLocation(program, 'vPosition');
gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vPosition);

gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawArrays(gl.TRIANGLES_STRIP, 0, 4);
