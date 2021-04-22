// Blin-Phone光照模型
attribute vec4 vPosition;
attribute vec4 vNormal; // 法向量
uniform mat4 modelViewMatrix; // 模-视变换矩阵
uniform mat4 projectionMatrix; // 投影变换矩阵
uniform vec4 ambientProduct; // 环境光和材质的点积
uniform vec4 diffuseProduct; // 漫反射和材质的点积
uniform vec4 specularProduct; // 镜面反射和材质的点积
uniform vec4 lightPosition; // 光源位置
uniform float shininess; // 衰减参数

varying vec4 fColor;

void main ()
{
  vec4 ambient = ambientProduct; // 环境光就是常量

  vec3 L = normalize(lightPosition - vPosition).xyz; // 光源方向向量

  vec3 E = -normalize(vPosition.xyz); // 观察向量，由于观察点设为原点(0,0,0);

  vec3 H = normalize(L + E); // 半程向量

  vec3 N = normalize((modelViewMatrix * vNormal).xyz); // 法向量, 坐标通过模-视转换

  vec4 diffuse = diffuseProduct * max(dot(L, N), 0.0); // 漫反射光

  vec4 specular = specularProduct * pow(max(dot(N, H), 0.0), shininess); // 镜面反射分量: 

  if(dot(L, N) > 0.0) {
    specular = vec4(0.0, 0.0, 0.0, 1.0); // 如果光源在背面，则不没有镜面反射分量。
  }

  fColor = ambient + diffuse + specular;
  fColor.a = 1.0; // rgba的a, 不透明

  gl_Position = projectionMatrix * modelViewMatrix * vPosition;
}