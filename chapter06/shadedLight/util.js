function makeFailHTML(msg) {
  return `<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>
    <td align="center">
    <div style="display: table-cell; vertical-align: middle;">
    <div>${msg}</div>
    </div>
    </td></tr></table>`;
}

const GET_A_WEBGL_BROWSER = `This page requires a browser that supports WebGL.<br/>
<a href="http://get.webgl.org">Click here to upgrade your browser.</a>`;

const OTHER_PROBLEM = `It doesn't appear your computer can support WebGL.<br/>
<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>`;

/**
 * @param {HTMLCanvasElement} canvas
 * @param {WebGLContextAttributes} opt_attribs
 * @returns {WebGLRenderingContext}
 */
export function setupWebGL(canvas, opt_attribs) {
  function showLink(str) {
    const container = canvas.parentNode;
    if(container) {
      container.innerHTML = makeFailHTML(str);
    }
  }

  if(!window.WebGLRenderingContext) {
    showLink(GET_A_WEBGL_BROWSER);
    return null;
  }

  const context = initWebGL(canvas, opt_attribs);
  if(!context) {
    showLink(OTHER_PROBLEM);
  }
  return context;
}

function initWebGL(canvas, opt_attribs) {
  const names = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
  let context = null;
  for(let ii = 0; ii < names.length; ++ii) {
    try {
      context = canvas.getContext(names[ii], opt_attribs);
    } catch (e) {
      // no-empty
    }
    if(context) {
      break;
    }
  }
  context.viewport(0, 0, canvas.width, canvas.height);
  return context;
}

export function createProgram(gl, vertexShader, fragmentShader) {
  // 编译着色器
  const vertShdr = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertShdr, vertexShader);
  gl.compileShader(vertShdr);

  if(!gl.getShaderParameter(vertShdr, gl.COMPILE_STATUS)) {
    const msg = `Vertex shader failed to compile.  The error log is:${gl.getShaderInfoLog(
      vertShdr
    )}`;
    console.error(msg);
    return -1;
  }

  const fragShdr = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragShdr, fragmentShader);
  gl.compileShader(fragShdr);

  if(!gl.getShaderParameter(fragShdr, gl.COMPILE_STATUS)) {
    const msg = `Fragment shader failed to compile.  The error log is:${gl.getShaderInfoLog(
      fragShdr
    )}`;
    console.error(msg);
    return -1;
  }

  // 创建Program，挂载着色器
  const program = gl.createProgram();
  gl.attachShader(program, vertShdr);
  gl.attachShader(program, fragShdr);
  gl.linkProgram(program);
  gl.useProgram(program);

  if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const msg = `Shader program failed to link.  The error log is:${gl.getProgramInfoLog(
      program
    )}`;
    console.error(msg);
    return -1;
  }

  return program;
}

export function mult(u, v) {
  const result = [];

  if(u.matrix && v.matrix) {
    if(u.length !== v.length) {
      throw "mult(): trying to add matrices of different dimensions";
    }

    for(let i = 0; i < u.length; ++i) {
      if(u[i].length !==v[i].length) {
        throw "mult(): trying to add matrices of different dimensions";
      }
    }

    for(let i = 0; i < u.length; ++i) {
      result.push([]);

      for(let j = 0; j < v.length; ++j) {
        let sum = 0.0;
        for(let k = 0; k < u.length; ++k) {
          sum += u[i][k] * v[k][j];
        }
        result[i].push(sum);
      }
    }
    result.matrix = true;
    return result;
  }

  if(u.matrix && u.length === v.length) {
    for(let i = 0; i < v.length; i++) {
      let sum = 0.0;
      for(let j = 0; j < v.length; j++) {
        sum += u[i][j] * v[j];
      }
      result.push(sum);
    }
  } else {
    if(u.length !== v.length) {
      throw "mult(): vectors are not the same dimension";
    }
    for(let i = 0; i < u.length; ++i) {
      result.push(u[i] * v[i]);
    }
  }
  return result;
}