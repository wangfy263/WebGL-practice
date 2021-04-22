// 片元着色器
precision mediump float;
varying vec4 fColor;

void main()
{
  gl_FragColor = fColor;
}