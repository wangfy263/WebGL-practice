!function(n){var t={};function r(u){if(t[u])return t[u].exports;var a=t[u]={i:u,l:!1,exports:{}};return n[u].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=n,r.c=t,r.d=function(n,t,u){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:u})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var u=Object.create(null);if(r.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var a in n)r.d(u,a,function(t){return n[t]}.bind(null,a));return u},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="/",r(r.s=84)}({0:function(n,t,r){"use strict";var u={};r.r(u),r.d(u,"create",function(){return d}),r.d(u,"clone",function(){return h}),r.d(u,"copy",function(){return s}),r.d(u,"fromValues",function(){return M}),r.d(u,"set",function(){return l}),r.d(u,"identity",function(){return v}),r.d(u,"transpose",function(){return b}),r.d(u,"invert",function(){return m}),r.d(u,"adjoint",function(){return g}),r.d(u,"determinant",function(){return p}),r.d(u,"multiply",function(){return x}),r.d(u,"translate",function(){return y}),r.d(u,"scale",function(){return w}),r.d(u,"rotate",function(){return q}),r.d(u,"rotateX",function(){return A}),r.d(u,"rotateY",function(){return S}),r.d(u,"rotateZ",function(){return P}),r.d(u,"fromTranslation",function(){return T}),r.d(u,"fromScaling",function(){return I}),r.d(u,"fromRotation",function(){return F}),r.d(u,"fromXRotation",function(){return R}),r.d(u,"fromYRotation",function(){return L}),r.d(u,"fromZRotation",function(){return E}),r.d(u,"fromRotationTranslation",function(){return _}),r.d(u,"fromQuat2",function(){return O}),r.d(u,"getTranslation",function(){return D}),r.d(u,"getScaling",function(){return V}),r.d(u,"getRotation",function(){return j}),r.d(u,"fromRotationTranslationScale",function(){return C}),r.d(u,"fromRotationTranslationScaleOrigin",function(){return z}),r.d(u,"fromQuat",function(){return k}),r.d(u,"frustum",function(){return U}),r.d(u,"perspective",function(){return B}),r.d(u,"perspectiveFromFieldOfView",function(){return G}),r.d(u,"ortho",function(){return W}),r.d(u,"lookAt",function(){return Y}),r.d(u,"targetTo",function(){return N}),r.d(u,"str",function(){return Q}),r.d(u,"frob",function(){return X}),r.d(u,"add",function(){return H}),r.d(u,"subtract",function(){return Z}),r.d(u,"multiplyScalar",function(){return K}),r.d(u,"multiplyScalarAndAdd",function(){return J}),r.d(u,"exactEquals",function(){return $}),r.d(u,"equals",function(){return nn}),r.d(u,"mul",function(){return tn}),r.d(u,"sub",function(){return rn});var a={};r.r(a),r.d(a,"create",function(){return un}),r.d(a,"clone",function(){return an}),r.d(a,"fromValues",function(){return en}),r.d(a,"copy",function(){return on}),r.d(a,"set",function(){return cn}),r.d(a,"add",function(){return fn}),r.d(a,"subtract",function(){return dn}),r.d(a,"multiply",function(){return hn}),r.d(a,"divide",function(){return sn}),r.d(a,"ceil",function(){return Mn}),r.d(a,"floor",function(){return ln}),r.d(a,"min",function(){return vn}),r.d(a,"max",function(){return bn}),r.d(a,"round",function(){return mn}),r.d(a,"scale",function(){return gn}),r.d(a,"scaleAndAdd",function(){return pn}),r.d(a,"distance",function(){return xn}),r.d(a,"squaredDistance",function(){return yn}),r.d(a,"length",function(){return wn}),r.d(a,"squaredLength",function(){return qn}),r.d(a,"negate",function(){return An}),r.d(a,"inverse",function(){return Sn}),r.d(a,"normalize",function(){return Pn}),r.d(a,"dot",function(){return Tn}),r.d(a,"cross",function(){return In}),r.d(a,"lerp",function(){return Fn}),r.d(a,"random",function(){return Rn}),r.d(a,"transformMat2",function(){return Ln}),r.d(a,"transformMat2d",function(){return En}),r.d(a,"transformMat3",function(){return _n}),r.d(a,"transformMat4",function(){return On}),r.d(a,"rotate",function(){return Dn}),r.d(a,"angle",function(){return Vn}),r.d(a,"zero",function(){return jn}),r.d(a,"str",function(){return Cn}),r.d(a,"exactEquals",function(){return zn}),r.d(a,"equals",function(){return kn}),r.d(a,"len",function(){return Bn}),r.d(a,"sub",function(){return Gn}),r.d(a,"mul",function(){return Wn}),r.d(a,"div",function(){return Yn}),r.d(a,"dist",function(){return Nn}),r.d(a,"sqrDist",function(){return Qn}),r.d(a,"sqrLen",function(){return Xn}),r.d(a,"forEach",function(){return Hn});var e={};r.r(e),r.d(e,"create",function(){return Zn}),r.d(e,"clone",function(){return Kn}),r.d(e,"length",function(){return Jn}),r.d(e,"fromValues",function(){return $n}),r.d(e,"copy",function(){return nt}),r.d(e,"set",function(){return tt}),r.d(e,"add",function(){return rt}),r.d(e,"subtract",function(){return ut}),r.d(e,"multiply",function(){return at}),r.d(e,"divide",function(){return et}),r.d(e,"ceil",function(){return ot}),r.d(e,"floor",function(){return it}),r.d(e,"min",function(){return ct}),r.d(e,"max",function(){return ft}),r.d(e,"round",function(){return dt}),r.d(e,"scale",function(){return ht}),r.d(e,"scaleAndAdd",function(){return st}),r.d(e,"distance",function(){return Mt}),r.d(e,"squaredDistance",function(){return lt}),r.d(e,"squaredLength",function(){return vt}),r.d(e,"negate",function(){return bt}),r.d(e,"inverse",function(){return mt}),r.d(e,"normalize",function(){return gt}),r.d(e,"dot",function(){return pt}),r.d(e,"cross",function(){return xt}),r.d(e,"lerp",function(){return yt}),r.d(e,"hermite",function(){return wt}),r.d(e,"bezier",function(){return qt}),r.d(e,"random",function(){return At}),r.d(e,"transformMat4",function(){return St}),r.d(e,"transformMat3",function(){return Pt}),r.d(e,"transformQuat",function(){return Tt}),r.d(e,"rotateX",function(){return It}),r.d(e,"rotateY",function(){return Ft}),r.d(e,"rotateZ",function(){return Rt}),r.d(e,"angle",function(){return Lt}),r.d(e,"zero",function(){return Et}),r.d(e,"str",function(){return _t}),r.d(e,"exactEquals",function(){return Ot}),r.d(e,"equals",function(){return Dt}),r.d(e,"sub",function(){return Vt}),r.d(e,"mul",function(){return jt}),r.d(e,"div",function(){return Ct}),r.d(e,"dist",function(){return zt}),r.d(e,"sqrDist",function(){return kt}),r.d(e,"len",function(){return Ut}),r.d(e,"sqrLen",function(){return Bt}),r.d(e,"forEach",function(){return Gt});var o={};r.r(o),r.d(o,"create",function(){return Wt}),r.d(o,"clone",function(){return Yt}),r.d(o,"fromValues",function(){return Nt}),r.d(o,"copy",function(){return Qt}),r.d(o,"set",function(){return Xt}),r.d(o,"add",function(){return Ht}),r.d(o,"subtract",function(){return Zt}),r.d(o,"multiply",function(){return Kt}),r.d(o,"divide",function(){return Jt}),r.d(o,"ceil",function(){return $t}),r.d(o,"floor",function(){return nr}),r.d(o,"min",function(){return tr}),r.d(o,"max",function(){return rr}),r.d(o,"round",function(){return ur}),r.d(o,"scale",function(){return ar}),r.d(o,"scaleAndAdd",function(){return er}),r.d(o,"distance",function(){return or}),r.d(o,"squaredDistance",function(){return ir}),r.d(o,"length",function(){return cr}),r.d(o,"squaredLength",function(){return fr}),r.d(o,"negate",function(){return dr}),r.d(o,"inverse",function(){return hr}),r.d(o,"normalize",function(){return sr}),r.d(o,"dot",function(){return Mr}),r.d(o,"cross",function(){return lr}),r.d(o,"lerp",function(){return vr}),r.d(o,"random",function(){return br}),r.d(o,"transformMat4",function(){return mr}),r.d(o,"transformQuat",function(){return gr}),r.d(o,"zero",function(){return pr}),r.d(o,"str",function(){return xr}),r.d(o,"exactEquals",function(){return yr}),r.d(o,"equals",function(){return wr}),r.d(o,"sub",function(){return qr}),r.d(o,"mul",function(){return Ar}),r.d(o,"div",function(){return Sr}),r.d(o,"dist",function(){return Pr}),r.d(o,"sqrDist",function(){return Tr}),r.d(o,"len",function(){return Ir}),r.d(o,"sqrLen",function(){return Fr}),r.d(o,"forEach",function(){return Rr});var i=1e-6,c="undefined"!=typeof Float32Array?Float32Array:Array,f=Math.random;Math.PI;function d(){var n=new c(16);return c!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function h(n){var t=new c(16);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function s(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function M(n,t,r,u,a,e,o,i,f,d,h,s,M,l,v,b){var m=new c(16);return m[0]=n,m[1]=t,m[2]=r,m[3]=u,m[4]=a,m[5]=e,m[6]=o,m[7]=i,m[8]=f,m[9]=d,m[10]=h,m[11]=s,m[12]=M,m[13]=l,m[14]=v,m[15]=b,m}function l(n,t,r,u,a,e,o,i,c,f,d,h,s,M,l,v,b){return n[0]=t,n[1]=r,n[2]=u,n[3]=a,n[4]=e,n[5]=o,n[6]=i,n[7]=c,n[8]=f,n[9]=d,n[10]=h,n[11]=s,n[12]=M,n[13]=l,n[14]=v,n[15]=b,n}function v(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function b(n,t){if(n===t){var r=t[1],u=t[2],a=t[3],e=t[6],o=t[7],i=t[11];n[1]=t[4],n[2]=t[8],n[3]=t[12],n[4]=r,n[6]=t[9],n[7]=t[13],n[8]=u,n[9]=e,n[11]=t[14],n[12]=a,n[13]=o,n[14]=i}else n[0]=t[0],n[1]=t[4],n[2]=t[8],n[3]=t[12],n[4]=t[1],n[5]=t[5],n[6]=t[9],n[7]=t[13],n[8]=t[2],n[9]=t[6],n[10]=t[10],n[11]=t[14],n[12]=t[3],n[13]=t[7],n[14]=t[11],n[15]=t[15];return n}function m(n,t){var r=t[0],u=t[1],a=t[2],e=t[3],o=t[4],i=t[5],c=t[6],f=t[7],d=t[8],h=t[9],s=t[10],M=t[11],l=t[12],v=t[13],b=t[14],m=t[15],g=r*i-u*o,p=r*c-a*o,x=r*f-e*o,y=u*c-a*i,w=u*f-e*i,q=a*f-e*c,A=d*v-h*l,S=d*b-s*l,P=d*m-M*l,T=h*b-s*v,I=h*m-M*v,F=s*m-M*b,R=g*F-p*I+x*T+y*P-w*S+q*A;return R?(R=1/R,n[0]=(i*F-c*I+f*T)*R,n[1]=(a*I-u*F-e*T)*R,n[2]=(v*q-b*w+m*y)*R,n[3]=(s*w-h*q-M*y)*R,n[4]=(c*P-o*F-f*S)*R,n[5]=(r*F-a*P+e*S)*R,n[6]=(b*x-l*q-m*p)*R,n[7]=(d*q-s*x+M*p)*R,n[8]=(o*I-i*P+f*A)*R,n[9]=(u*P-r*I-e*A)*R,n[10]=(l*w-v*x+m*g)*R,n[11]=(h*x-d*w-M*g)*R,n[12]=(i*S-o*T-c*A)*R,n[13]=(r*T-u*S+a*A)*R,n[14]=(v*p-l*y-b*g)*R,n[15]=(d*y-h*p+s*g)*R,n):null}function g(n,t){var r=t[0],u=t[1],a=t[2],e=t[3],o=t[4],i=t[5],c=t[6],f=t[7],d=t[8],h=t[9],s=t[10],M=t[11],l=t[12],v=t[13],b=t[14],m=t[15];return n[0]=i*(s*m-M*b)-h*(c*m-f*b)+v*(c*M-f*s),n[1]=-(u*(s*m-M*b)-h*(a*m-e*b)+v*(a*M-e*s)),n[2]=u*(c*m-f*b)-i*(a*m-e*b)+v*(a*f-e*c),n[3]=-(u*(c*M-f*s)-i*(a*M-e*s)+h*(a*f-e*c)),n[4]=-(o*(s*m-M*b)-d*(c*m-f*b)+l*(c*M-f*s)),n[5]=r*(s*m-M*b)-d*(a*m-e*b)+l*(a*M-e*s),n[6]=-(r*(c*m-f*b)-o*(a*m-e*b)+l*(a*f-e*c)),n[7]=r*(c*M-f*s)-o*(a*M-e*s)+d*(a*f-e*c),n[8]=o*(h*m-M*v)-d*(i*m-f*v)+l*(i*M-f*h),n[9]=-(r*(h*m-M*v)-d*(u*m-e*v)+l*(u*M-e*h)),n[10]=r*(i*m-f*v)-o*(u*m-e*v)+l*(u*f-e*i),n[11]=-(r*(i*M-f*h)-o*(u*M-e*h)+d*(u*f-e*i)),n[12]=-(o*(h*b-s*v)-d*(i*b-c*v)+l*(i*s-c*h)),n[13]=r*(h*b-s*v)-d*(u*b-a*v)+l*(u*s-a*h),n[14]=-(r*(i*b-c*v)-o*(u*b-a*v)+l*(u*c-a*i)),n[15]=r*(i*s-c*h)-o*(u*s-a*h)+d*(u*c-a*i),n}function p(n){var t=n[0],r=n[1],u=n[2],a=n[3],e=n[4],o=n[5],i=n[6],c=n[7],f=n[8],d=n[9],h=n[10],s=n[11],M=n[12],l=n[13],v=n[14],b=n[15];return(t*o-r*e)*(h*b-s*v)-(t*i-u*e)*(d*b-s*l)+(t*c-a*e)*(d*v-h*l)+(r*i-u*o)*(f*b-s*M)-(r*c-a*o)*(f*v-h*M)+(u*c-a*i)*(f*l-d*M)}function x(n,t,r){var u=t[0],a=t[1],e=t[2],o=t[3],i=t[4],c=t[5],f=t[6],d=t[7],h=t[8],s=t[9],M=t[10],l=t[11],v=t[12],b=t[13],m=t[14],g=t[15],p=r[0],x=r[1],y=r[2],w=r[3];return n[0]=p*u+x*i+y*h+w*v,n[1]=p*a+x*c+y*s+w*b,n[2]=p*e+x*f+y*M+w*m,n[3]=p*o+x*d+y*l+w*g,p=r[4],x=r[5],y=r[6],w=r[7],n[4]=p*u+x*i+y*h+w*v,n[5]=p*a+x*c+y*s+w*b,n[6]=p*e+x*f+y*M+w*m,n[7]=p*o+x*d+y*l+w*g,p=r[8],x=r[9],y=r[10],w=r[11],n[8]=p*u+x*i+y*h+w*v,n[9]=p*a+x*c+y*s+w*b,n[10]=p*e+x*f+y*M+w*m,n[11]=p*o+x*d+y*l+w*g,p=r[12],x=r[13],y=r[14],w=r[15],n[12]=p*u+x*i+y*h+w*v,n[13]=p*a+x*c+y*s+w*b,n[14]=p*e+x*f+y*M+w*m,n[15]=p*o+x*d+y*l+w*g,n}function y(n,t,r){var u,a,e,o,i,c,f,d,h,s,M,l,v=r[0],b=r[1],m=r[2];return t===n?(n[12]=t[0]*v+t[4]*b+t[8]*m+t[12],n[13]=t[1]*v+t[5]*b+t[9]*m+t[13],n[14]=t[2]*v+t[6]*b+t[10]*m+t[14],n[15]=t[3]*v+t[7]*b+t[11]*m+t[15]):(u=t[0],a=t[1],e=t[2],o=t[3],i=t[4],c=t[5],f=t[6],d=t[7],h=t[8],s=t[9],M=t[10],l=t[11],n[0]=u,n[1]=a,n[2]=e,n[3]=o,n[4]=i,n[5]=c,n[6]=f,n[7]=d,n[8]=h,n[9]=s,n[10]=M,n[11]=l,n[12]=u*v+i*b+h*m+t[12],n[13]=a*v+c*b+s*m+t[13],n[14]=e*v+f*b+M*m+t[14],n[15]=o*v+d*b+l*m+t[15]),n}function w(n,t,r){var u=r[0],a=r[1],e=r[2];return n[0]=t[0]*u,n[1]=t[1]*u,n[2]=t[2]*u,n[3]=t[3]*u,n[4]=t[4]*a,n[5]=t[5]*a,n[6]=t[6]*a,n[7]=t[7]*a,n[8]=t[8]*e,n[9]=t[9]*e,n[10]=t[10]*e,n[11]=t[11]*e,n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function q(n,t,r,u){var a,e,o,c,f,d,h,s,M,l,v,b,m,g,p,x,y,w,q,A,S,P,T,I,F=u[0],R=u[1],L=u[2],E=Math.sqrt(F*F+R*R+L*L);return E<i?null:(F*=E=1/E,R*=E,L*=E,a=Math.sin(r),o=1-(e=Math.cos(r)),c=t[0],f=t[1],d=t[2],h=t[3],s=t[4],M=t[5],l=t[6],v=t[7],b=t[8],m=t[9],g=t[10],p=t[11],x=F*F*o+e,y=R*F*o+L*a,w=L*F*o-R*a,q=F*R*o-L*a,A=R*R*o+e,S=L*R*o+F*a,P=F*L*o+R*a,T=R*L*o-F*a,I=L*L*o+e,n[0]=c*x+s*y+b*w,n[1]=f*x+M*y+m*w,n[2]=d*x+l*y+g*w,n[3]=h*x+v*y+p*w,n[4]=c*q+s*A+b*S,n[5]=f*q+M*A+m*S,n[6]=d*q+l*A+g*S,n[7]=h*q+v*A+p*S,n[8]=c*P+s*T+b*I,n[9]=f*P+M*T+m*I,n[10]=d*P+l*T+g*I,n[11]=h*P+v*T+p*I,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n)}function A(n,t,r){var u=Math.sin(r),a=Math.cos(r),e=t[4],o=t[5],i=t[6],c=t[7],f=t[8],d=t[9],h=t[10],s=t[11];return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[4]=e*a+f*u,n[5]=o*a+d*u,n[6]=i*a+h*u,n[7]=c*a+s*u,n[8]=f*a-e*u,n[9]=d*a-o*u,n[10]=h*a-i*u,n[11]=s*a-c*u,n}function S(n,t,r){var u=Math.sin(r),a=Math.cos(r),e=t[0],o=t[1],i=t[2],c=t[3],f=t[8],d=t[9],h=t[10],s=t[11];return t!==n&&(n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[0]=e*a-f*u,n[1]=o*a-d*u,n[2]=i*a-h*u,n[3]=c*a-s*u,n[8]=e*u+f*a,n[9]=o*u+d*a,n[10]=i*u+h*a,n[11]=c*u+s*a,n}function P(n,t,r){var u=Math.sin(r),a=Math.cos(r),e=t[0],o=t[1],i=t[2],c=t[3],f=t[4],d=t[5],h=t[6],s=t[7];return t!==n&&(n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[0]=e*a+f*u,n[1]=o*a+d*u,n[2]=i*a+h*u,n[3]=c*a+s*u,n[4]=f*a-e*u,n[5]=d*a-o*u,n[6]=h*a-i*u,n[7]=s*a-c*u,n}function T(n,t){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function I(n,t){return n[0]=t[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=t[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=t[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function F(n,t,r){var u,a,e,o=r[0],c=r[1],f=r[2],d=Math.sqrt(o*o+c*c+f*f);return d<i?null:(o*=d=1/d,c*=d,f*=d,u=Math.sin(t),e=1-(a=Math.cos(t)),n[0]=o*o*e+a,n[1]=c*o*e+f*u,n[2]=f*o*e-c*u,n[3]=0,n[4]=o*c*e-f*u,n[5]=c*c*e+a,n[6]=f*c*e+o*u,n[7]=0,n[8]=o*f*e+c*u,n[9]=c*f*e-o*u,n[10]=f*f*e+a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n)}function R(n,t){var r=Math.sin(t),u=Math.cos(t);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=u,n[6]=r,n[7]=0,n[8]=0,n[9]=-r,n[10]=u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function L(n,t){var r=Math.sin(t),u=Math.cos(t);return n[0]=u,n[1]=0,n[2]=-r,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=r,n[9]=0,n[10]=u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function E(n,t){var r=Math.sin(t),u=Math.cos(t);return n[0]=u,n[1]=r,n[2]=0,n[3]=0,n[4]=-r,n[5]=u,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function _(n,t,r){var u=t[0],a=t[1],e=t[2],o=t[3],i=u+u,c=a+a,f=e+e,d=u*i,h=u*c,s=u*f,M=a*c,l=a*f,v=e*f,b=o*i,m=o*c,g=o*f;return n[0]=1-(M+v),n[1]=h+g,n[2]=s-m,n[3]=0,n[4]=h-g,n[5]=1-(d+v),n[6]=l+b,n[7]=0,n[8]=s+m,n[9]=l-b,n[10]=1-(d+M),n[11]=0,n[12]=r[0],n[13]=r[1],n[14]=r[2],n[15]=1,n}function O(n,t){var r=new c(3),u=-t[0],a=-t[1],e=-t[2],o=t[3],i=t[4],f=t[5],d=t[6],h=t[7],s=u*u+a*a+e*e+o*o;return s>0?(r[0]=2*(i*o+h*u+f*e-d*a)/s,r[1]=2*(f*o+h*a+d*u-i*e)/s,r[2]=2*(d*o+h*e+i*a-f*u)/s):(r[0]=2*(i*o+h*u+f*e-d*a),r[1]=2*(f*o+h*a+d*u-i*e),r[2]=2*(d*o+h*e+i*a-f*u)),_(n,t,r),n}function D(n,t){return n[0]=t[12],n[1]=t[13],n[2]=t[14],n}function V(n,t){var r=t[0],u=t[1],a=t[2],e=t[4],o=t[5],i=t[6],c=t[8],f=t[9],d=t[10];return n[0]=Math.sqrt(r*r+u*u+a*a),n[1]=Math.sqrt(e*e+o*o+i*i),n[2]=Math.sqrt(c*c+f*f+d*d),n}function j(n,t){var r=t[0]+t[5]+t[10],u=0;return r>0?(u=2*Math.sqrt(r+1),n[3]=.25*u,n[0]=(t[6]-t[9])/u,n[1]=(t[8]-t[2])/u,n[2]=(t[1]-t[4])/u):t[0]>t[5]&&t[0]>t[10]?(u=2*Math.sqrt(1+t[0]-t[5]-t[10]),n[3]=(t[6]-t[9])/u,n[0]=.25*u,n[1]=(t[1]+t[4])/u,n[2]=(t[8]+t[2])/u):t[5]>t[10]?(u=2*Math.sqrt(1+t[5]-t[0]-t[10]),n[3]=(t[8]-t[2])/u,n[0]=(t[1]+t[4])/u,n[1]=.25*u,n[2]=(t[6]+t[9])/u):(u=2*Math.sqrt(1+t[10]-t[0]-t[5]),n[3]=(t[1]-t[4])/u,n[0]=(t[8]+t[2])/u,n[1]=(t[6]+t[9])/u,n[2]=.25*u),n}function C(n,t,r,u){var a=t[0],e=t[1],o=t[2],i=t[3],c=a+a,f=e+e,d=o+o,h=a*c,s=a*f,M=a*d,l=e*f,v=e*d,b=o*d,m=i*c,g=i*f,p=i*d,x=u[0],y=u[1],w=u[2];return n[0]=(1-(l+b))*x,n[1]=(s+p)*x,n[2]=(M-g)*x,n[3]=0,n[4]=(s-p)*y,n[5]=(1-(h+b))*y,n[6]=(v+m)*y,n[7]=0,n[8]=(M+g)*w,n[9]=(v-m)*w,n[10]=(1-(h+l))*w,n[11]=0,n[12]=r[0],n[13]=r[1],n[14]=r[2],n[15]=1,n}function z(n,t,r,u,a){var e=t[0],o=t[1],i=t[2],c=t[3],f=e+e,d=o+o,h=i+i,s=e*f,M=e*d,l=e*h,v=o*d,b=o*h,m=i*h,g=c*f,p=c*d,x=c*h,y=u[0],w=u[1],q=u[2],A=a[0],S=a[1],P=a[2],T=(1-(v+m))*y,I=(M+x)*y,F=(l-p)*y,R=(M-x)*w,L=(1-(s+m))*w,E=(b+g)*w,_=(l+p)*q,O=(b-g)*q,D=(1-(s+v))*q;return n[0]=T,n[1]=I,n[2]=F,n[3]=0,n[4]=R,n[5]=L,n[6]=E,n[7]=0,n[8]=_,n[9]=O,n[10]=D,n[11]=0,n[12]=r[0]+A-(T*A+R*S+_*P),n[13]=r[1]+S-(I*A+L*S+O*P),n[14]=r[2]+P-(F*A+E*S+D*P),n[15]=1,n}function k(n,t){var r=t[0],u=t[1],a=t[2],e=t[3],o=r+r,i=u+u,c=a+a,f=r*o,d=u*o,h=u*i,s=a*o,M=a*i,l=a*c,v=e*o,b=e*i,m=e*c;return n[0]=1-h-l,n[1]=d+m,n[2]=s-b,n[3]=0,n[4]=d-m,n[5]=1-f-l,n[6]=M+v,n[7]=0,n[8]=s+b,n[9]=M-v,n[10]=1-f-h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function U(n,t,r,u,a,e,o){var i=1/(r-t),c=1/(a-u),f=1/(e-o);return n[0]=2*e*i,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=2*e*c,n[6]=0,n[7]=0,n[8]=(r+t)*i,n[9]=(a+u)*c,n[10]=(o+e)*f,n[11]=-1,n[12]=0,n[13]=0,n[14]=o*e*2*f,n[15]=0,n}function B(n,t,r,u,a){var e,o=1/Math.tan(t/2);return n[0]=o/r,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=o,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,null!=a&&a!==1/0?(e=1/(u-a),n[10]=(a+u)*e,n[14]=2*a*u*e):(n[10]=-1,n[14]=-2*u),n}function G(n,t,r,u){var a=Math.tan(t.upDegrees*Math.PI/180),e=Math.tan(t.downDegrees*Math.PI/180),o=Math.tan(t.leftDegrees*Math.PI/180),i=Math.tan(t.rightDegrees*Math.PI/180),c=2/(o+i),f=2/(a+e);return n[0]=c,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=f,n[6]=0,n[7]=0,n[8]=-(o-i)*c*.5,n[9]=(a-e)*f*.5,n[10]=u/(r-u),n[11]=-1,n[12]=0,n[13]=0,n[14]=u*r/(r-u),n[15]=0,n}function W(n,t,r,u,a,e,o){var i=1/(t-r),c=1/(u-a),f=1/(e-o);return n[0]=-2*i,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*c,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*f,n[11]=0,n[12]=(t+r)*i,n[13]=(a+u)*c,n[14]=(o+e)*f,n[15]=1,n}function Y(n,t,r,u){var a,e,o,c,f,d,h,s,M,l,b=t[0],m=t[1],g=t[2],p=u[0],x=u[1],y=u[2],w=r[0],q=r[1],A=r[2];return Math.abs(b-w)<i&&Math.abs(m-q)<i&&Math.abs(g-A)<i?v(n):(h=b-w,s=m-q,M=g-A,a=x*(M*=l=1/Math.sqrt(h*h+s*s+M*M))-y*(s*=l),e=y*(h*=l)-p*M,o=p*s-x*h,(l=Math.sqrt(a*a+e*e+o*o))?(a*=l=1/l,e*=l,o*=l):(a=0,e=0,o=0),c=s*o-M*e,f=M*a-h*o,d=h*e-s*a,(l=Math.sqrt(c*c+f*f+d*d))?(c*=l=1/l,f*=l,d*=l):(c=0,f=0,d=0),n[0]=a,n[1]=c,n[2]=h,n[3]=0,n[4]=e,n[5]=f,n[6]=s,n[7]=0,n[8]=o,n[9]=d,n[10]=M,n[11]=0,n[12]=-(a*b+e*m+o*g),n[13]=-(c*b+f*m+d*g),n[14]=-(h*b+s*m+M*g),n[15]=1,n)}function N(n,t,r,u){var a=t[0],e=t[1],o=t[2],i=u[0],c=u[1],f=u[2],d=a-r[0],h=e-r[1],s=o-r[2],M=d*d+h*h+s*s;M>0&&(d*=M=1/Math.sqrt(M),h*=M,s*=M);var l=c*s-f*h,v=f*d-i*s,b=i*h-c*d;return(M=l*l+v*v+b*b)>0&&(l*=M=1/Math.sqrt(M),v*=M,b*=M),n[0]=l,n[1]=v,n[2]=b,n[3]=0,n[4]=h*b-s*v,n[5]=s*l-d*b,n[6]=d*v-h*l,n[7]=0,n[8]=d,n[9]=h,n[10]=s,n[11]=0,n[12]=a,n[13]=e,n[14]=o,n[15]=1,n}function Q(n){return"mat4("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+", "+n[4]+", "+n[5]+", "+n[6]+", "+n[7]+", "+n[8]+", "+n[9]+", "+n[10]+", "+n[11]+", "+n[12]+", "+n[13]+", "+n[14]+", "+n[15]+")"}function X(n){return Math.sqrt(Math.pow(n[0],2)+Math.pow(n[1],2)+Math.pow(n[2],2)+Math.pow(n[3],2)+Math.pow(n[4],2)+Math.pow(n[5],2)+Math.pow(n[6],2)+Math.pow(n[7],2)+Math.pow(n[8],2)+Math.pow(n[9],2)+Math.pow(n[10],2)+Math.pow(n[11],2)+Math.pow(n[12],2)+Math.pow(n[13],2)+Math.pow(n[14],2)+Math.pow(n[15],2))}function H(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n[3]=t[3]+r[3],n[4]=t[4]+r[4],n[5]=t[5]+r[5],n[6]=t[6]+r[6],n[7]=t[7]+r[7],n[8]=t[8]+r[8],n[9]=t[9]+r[9],n[10]=t[10]+r[10],n[11]=t[11]+r[11],n[12]=t[12]+r[12],n[13]=t[13]+r[13],n[14]=t[14]+r[14],n[15]=t[15]+r[15],n}function Z(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n[3]=t[3]-r[3],n[4]=t[4]-r[4],n[5]=t[5]-r[5],n[6]=t[6]-r[6],n[7]=t[7]-r[7],n[8]=t[8]-r[8],n[9]=t[9]-r[9],n[10]=t[10]-r[10],n[11]=t[11]-r[11],n[12]=t[12]-r[12],n[13]=t[13]-r[13],n[14]=t[14]-r[14],n[15]=t[15]-r[15],n}function K(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n[4]=t[4]*r,n[5]=t[5]*r,n[6]=t[6]*r,n[7]=t[7]*r,n[8]=t[8]*r,n[9]=t[9]*r,n[10]=t[10]*r,n[11]=t[11]*r,n[12]=t[12]*r,n[13]=t[13]*r,n[14]=t[14]*r,n[15]=t[15]*r,n}function J(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n[2]=t[2]+r[2]*u,n[3]=t[3]+r[3]*u,n[4]=t[4]+r[4]*u,n[5]=t[5]+r[5]*u,n[6]=t[6]+r[6]*u,n[7]=t[7]+r[7]*u,n[8]=t[8]+r[8]*u,n[9]=t[9]+r[9]*u,n[10]=t[10]+r[10]*u,n[11]=t[11]+r[11]*u,n[12]=t[12]+r[12]*u,n[13]=t[13]+r[13]*u,n[14]=t[14]+r[14]*u,n[15]=t[15]+r[15]*u,n}function $(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]&&n[3]===t[3]&&n[4]===t[4]&&n[5]===t[5]&&n[6]===t[6]&&n[7]===t[7]&&n[8]===t[8]&&n[9]===t[9]&&n[10]===t[10]&&n[11]===t[11]&&n[12]===t[12]&&n[13]===t[13]&&n[14]===t[14]&&n[15]===t[15]}function nn(n,t){var r=n[0],u=n[1],a=n[2],e=n[3],o=n[4],c=n[5],f=n[6],d=n[7],h=n[8],s=n[9],M=n[10],l=n[11],v=n[12],b=n[13],m=n[14],g=n[15],p=t[0],x=t[1],y=t[2],w=t[3],q=t[4],A=t[5],S=t[6],P=t[7],T=t[8],I=t[9],F=t[10],R=t[11],L=t[12],E=t[13],_=t[14],O=t[15];return Math.abs(r-p)<=i*Math.max(1,Math.abs(r),Math.abs(p))&&Math.abs(u-x)<=i*Math.max(1,Math.abs(u),Math.abs(x))&&Math.abs(a-y)<=i*Math.max(1,Math.abs(a),Math.abs(y))&&Math.abs(e-w)<=i*Math.max(1,Math.abs(e),Math.abs(w))&&Math.abs(o-q)<=i*Math.max(1,Math.abs(o),Math.abs(q))&&Math.abs(c-A)<=i*Math.max(1,Math.abs(c),Math.abs(A))&&Math.abs(f-S)<=i*Math.max(1,Math.abs(f),Math.abs(S))&&Math.abs(d-P)<=i*Math.max(1,Math.abs(d),Math.abs(P))&&Math.abs(h-T)<=i*Math.max(1,Math.abs(h),Math.abs(T))&&Math.abs(s-I)<=i*Math.max(1,Math.abs(s),Math.abs(I))&&Math.abs(M-F)<=i*Math.max(1,Math.abs(M),Math.abs(F))&&Math.abs(l-R)<=i*Math.max(1,Math.abs(l),Math.abs(R))&&Math.abs(v-L)<=i*Math.max(1,Math.abs(v),Math.abs(L))&&Math.abs(b-E)<=i*Math.max(1,Math.abs(b),Math.abs(E))&&Math.abs(m-_)<=i*Math.max(1,Math.abs(m),Math.abs(_))&&Math.abs(g-O)<=i*Math.max(1,Math.abs(g),Math.abs(O))}var tn=x,rn=Z;function un(){var n=new c(2);return c!=Float32Array&&(n[0]=0,n[1]=0),n}function an(n){var t=new c(2);return t[0]=n[0],t[1]=n[1],t}function en(n,t){var r=new c(2);return r[0]=n,r[1]=t,r}function on(n,t){return n[0]=t[0],n[1]=t[1],n}function cn(n,t,r){return n[0]=t,n[1]=r,n}function fn(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n}function dn(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n}function hn(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n}function sn(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n}function Mn(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n}function ln(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n}function vn(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n}function bn(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n}function mn(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n}function gn(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n}function pn(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n}function xn(n,t){var r=t[0]-n[0],u=t[1]-n[1];return Math.sqrt(r*r+u*u)}function yn(n,t){var r=t[0]-n[0],u=t[1]-n[1];return r*r+u*u}function wn(n){var t=n[0],r=n[1];return Math.sqrt(t*t+r*r)}function qn(n){var t=n[0],r=n[1];return t*t+r*r}function An(n,t){return n[0]=-t[0],n[1]=-t[1],n}function Sn(n,t){return n[0]=1/t[0],n[1]=1/t[1],n}function Pn(n,t){var r=t[0],u=t[1],a=r*r+u*u;return a>0&&(a=1/Math.sqrt(a)),n[0]=t[0]*a,n[1]=t[1]*a,n}function Tn(n,t){return n[0]*t[0]+n[1]*t[1]}function In(n,t,r){var u=t[0]*r[1]-t[1]*r[0];return n[0]=n[1]=0,n[2]=u,n}function Fn(n,t,r,u){var a=t[0],e=t[1];return n[0]=a+u*(r[0]-a),n[1]=e+u*(r[1]-e),n}function Rn(n,t){t=t||1;var r=2*f()*Math.PI;return n[0]=Math.cos(r)*t,n[1]=Math.sin(r)*t,n}function Ln(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[2]*a,n[1]=r[1]*u+r[3]*a,n}function En(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[2]*a+r[4],n[1]=r[1]*u+r[3]*a+r[5],n}function _n(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[3]*a+r[6],n[1]=r[1]*u+r[4]*a+r[7],n}function On(n,t,r){var u=t[0],a=t[1];return n[0]=r[0]*u+r[4]*a+r[12],n[1]=r[1]*u+r[5]*a+r[13],n}function Dn(n,t,r,u){var a=t[0]-r[0],e=t[1]-r[1],o=Math.sin(u),i=Math.cos(u);return n[0]=a*i-e*o+r[0],n[1]=a*o+e*i+r[1],n}function Vn(n,t){var r=n[0],u=n[1],a=t[0],e=t[1],o=r*r+u*u;o>0&&(o=1/Math.sqrt(o));var i=a*a+e*e;i>0&&(i=1/Math.sqrt(i));var c=(r*a+u*e)*o*i;return c>1?0:c<-1?Math.PI:Math.acos(c)}function jn(n){return n[0]=0,n[1]=0,n}function Cn(n){return"vec2("+n[0]+", "+n[1]+")"}function zn(n,t){return n[0]===t[0]&&n[1]===t[1]}function kn(n,t){var r=n[0],u=n[1],a=t[0],e=t[1];return Math.abs(r-a)<=i*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(u-e)<=i*Math.max(1,Math.abs(u),Math.abs(e))}var Un,Bn=wn,Gn=dn,Wn=hn,Yn=sn,Nn=xn,Qn=yn,Xn=qn,Hn=(Un=un(),function(n,t,r,u,a,e){var o,i;for(t||(t=2),r||(r=0),i=u?Math.min(u*t+r,n.length):n.length,o=r;o<i;o+=t)Un[0]=n[o],Un[1]=n[o+1],a(Un,Un,e),n[o]=Un[0],n[o+1]=Un[1];return n});function Zn(){var n=new c(3);return c!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function Kn(n){var t=new c(3);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function Jn(n){var t=n[0],r=n[1],u=n[2];return Math.sqrt(t*t+r*r+u*u)}function $n(n,t,r){var u=new c(3);return u[0]=n,u[1]=t,u[2]=r,u}function nt(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function tt(n,t,r,u){return n[0]=t,n[1]=r,n[2]=u,n}function rt(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n}function ut(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n}function at(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n[2]=t[2]*r[2],n}function et(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n[2]=t[2]/r[2],n}function ot(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n[2]=Math.ceil(t[2]),n}function it(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n[2]=Math.floor(t[2]),n}function ct(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n[2]=Math.min(t[2],r[2]),n}function ft(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n[2]=Math.max(t[2],r[2]),n}function dt(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n[2]=Math.round(t[2]),n}function ht(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n}function st(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n[2]=t[2]+r[2]*u,n}function Mt(n,t){var r=t[0]-n[0],u=t[1]-n[1],a=t[2]-n[2];return Math.sqrt(r*r+u*u+a*a)}function lt(n,t){var r=t[0]-n[0],u=t[1]-n[1],a=t[2]-n[2];return r*r+u*u+a*a}function vt(n){var t=n[0],r=n[1],u=n[2];return t*t+r*r+u*u}function bt(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n}function mt(n,t){return n[0]=1/t[0],n[1]=1/t[1],n[2]=1/t[2],n}function gt(n,t){var r=t[0],u=t[1],a=t[2],e=r*r+u*u+a*a;return e>0&&(e=1/Math.sqrt(e)),n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n}function pt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function xt(n,t,r){var u=t[0],a=t[1],e=t[2],o=r[0],i=r[1],c=r[2];return n[0]=a*c-e*i,n[1]=e*o-u*c,n[2]=u*i-a*o,n}function yt(n,t,r,u){var a=t[0],e=t[1],o=t[2];return n[0]=a+u*(r[0]-a),n[1]=e+u*(r[1]-e),n[2]=o+u*(r[2]-o),n}function wt(n,t,r,u,a,e){var o=e*e,i=o*(2*e-3)+1,c=o*(e-2)+e,f=o*(e-1),d=o*(3-2*e);return n[0]=t[0]*i+r[0]*c+u[0]*f+a[0]*d,n[1]=t[1]*i+r[1]*c+u[1]*f+a[1]*d,n[2]=t[2]*i+r[2]*c+u[2]*f+a[2]*d,n}function qt(n,t,r,u,a,e){var o=1-e,i=o*o,c=e*e,f=i*o,d=3*e*i,h=3*c*o,s=c*e;return n[0]=t[0]*f+r[0]*d+u[0]*h+a[0]*s,n[1]=t[1]*f+r[1]*d+u[1]*h+a[1]*s,n[2]=t[2]*f+r[2]*d+u[2]*h+a[2]*s,n}function At(n,t){t=t||1;var r=2*f()*Math.PI,u=2*f()-1,a=Math.sqrt(1-u*u)*t;return n[0]=Math.cos(r)*a,n[1]=Math.sin(r)*a,n[2]=u*t,n}function St(n,t,r){var u=t[0],a=t[1],e=t[2],o=r[3]*u+r[7]*a+r[11]*e+r[15];return o=o||1,n[0]=(r[0]*u+r[4]*a+r[8]*e+r[12])/o,n[1]=(r[1]*u+r[5]*a+r[9]*e+r[13])/o,n[2]=(r[2]*u+r[6]*a+r[10]*e+r[14])/o,n}function Pt(n,t,r){var u=t[0],a=t[1],e=t[2];return n[0]=u*r[0]+a*r[3]+e*r[6],n[1]=u*r[1]+a*r[4]+e*r[7],n[2]=u*r[2]+a*r[5]+e*r[8],n}function Tt(n,t,r){var u=r[0],a=r[1],e=r[2],o=r[3],i=t[0],c=t[1],f=t[2],d=a*f-e*c,h=e*i-u*f,s=u*c-a*i,M=a*s-e*h,l=e*d-u*s,v=u*h-a*d,b=2*o;return d*=b,h*=b,s*=b,M*=2,l*=2,v*=2,n[0]=i+d+M,n[1]=c+h+l,n[2]=f+s+v,n}function It(n,t,r,u){var a=[],e=[];return a[0]=t[0]-r[0],a[1]=t[1]-r[1],a[2]=t[2]-r[2],e[0]=a[0],e[1]=a[1]*Math.cos(u)-a[2]*Math.sin(u),e[2]=a[1]*Math.sin(u)+a[2]*Math.cos(u),n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n}function Ft(n,t,r,u){var a=[],e=[];return a[0]=t[0]-r[0],a[1]=t[1]-r[1],a[2]=t[2]-r[2],e[0]=a[2]*Math.sin(u)+a[0]*Math.cos(u),e[1]=a[1],e[2]=a[2]*Math.cos(u)-a[0]*Math.sin(u),n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n}function Rt(n,t,r,u){var a=[],e=[];return a[0]=t[0]-r[0],a[1]=t[1]-r[1],a[2]=t[2]-r[2],e[0]=a[0]*Math.cos(u)-a[1]*Math.sin(u),e[1]=a[0]*Math.sin(u)+a[1]*Math.cos(u),e[2]=a[2],n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n}function Lt(n,t){var r=$n(n[0],n[1],n[2]),u=$n(t[0],t[1],t[2]);gt(r,r),gt(u,u);var a=pt(r,u);return a>1?0:a<-1?Math.PI:Math.acos(a)}function Et(n){return n[0]=0,n[1]=0,n[2]=0,n}function _t(n){return"vec3("+n[0]+", "+n[1]+", "+n[2]+")"}function Ot(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]}function Dt(n,t){var r=n[0],u=n[1],a=n[2],e=t[0],o=t[1],c=t[2];return Math.abs(r-e)<=i*Math.max(1,Math.abs(r),Math.abs(e))&&Math.abs(u-o)<=i*Math.max(1,Math.abs(u),Math.abs(o))&&Math.abs(a-c)<=i*Math.max(1,Math.abs(a),Math.abs(c))}var Vt=ut,jt=at,Ct=et,zt=Mt,kt=lt,Ut=Jn,Bt=vt,Gt=function(){var n=Zn();return function(t,r,u,a,e,o){var i,c;for(r||(r=3),u||(u=0),c=a?Math.min(a*r+u,t.length):t.length,i=u;i<c;i+=r)n[0]=t[i],n[1]=t[i+1],n[2]=t[i+2],e(n,n,o),t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2];return t}}();function Wt(){var n=new c(4);return c!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0,n[3]=0),n}function Yt(n){var t=new c(4);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function Nt(n,t,r,u){var a=new c(4);return a[0]=n,a[1]=t,a[2]=r,a[3]=u,a}function Qt(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function Xt(n,t,r,u,a){return n[0]=t,n[1]=r,n[2]=u,n[3]=a,n}function Ht(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n[3]=t[3]+r[3],n}function Zt(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n[3]=t[3]-r[3],n}function Kt(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n[2]=t[2]*r[2],n[3]=t[3]*r[3],n}function Jt(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n[2]=t[2]/r[2],n[3]=t[3]/r[3],n}function $t(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n[2]=Math.ceil(t[2]),n[3]=Math.ceil(t[3]),n}function nr(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n[2]=Math.floor(t[2]),n[3]=Math.floor(t[3]),n}function tr(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n[2]=Math.min(t[2],r[2]),n[3]=Math.min(t[3],r[3]),n}function rr(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n[2]=Math.max(t[2],r[2]),n[3]=Math.max(t[3],r[3]),n}function ur(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n[2]=Math.round(t[2]),n[3]=Math.round(t[3]),n}function ar(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n}function er(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n[2]=t[2]+r[2]*u,n[3]=t[3]+r[3]*u,n}function or(n,t){var r=t[0]-n[0],u=t[1]-n[1],a=t[2]-n[2],e=t[3]-n[3];return Math.sqrt(r*r+u*u+a*a+e*e)}function ir(n,t){var r=t[0]-n[0],u=t[1]-n[1],a=t[2]-n[2],e=t[3]-n[3];return r*r+u*u+a*a+e*e}function cr(n){var t=n[0],r=n[1],u=n[2],a=n[3];return Math.sqrt(t*t+r*r+u*u+a*a)}function fr(n){var t=n[0],r=n[1],u=n[2],a=n[3];return t*t+r*r+u*u+a*a}function dr(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n}function hr(n,t){return n[0]=1/t[0],n[1]=1/t[1],n[2]=1/t[2],n[3]=1/t[3],n}function sr(n,t){var r=t[0],u=t[1],a=t[2],e=t[3],o=r*r+u*u+a*a+e*e;return o>0&&(o=1/Math.sqrt(o)),n[0]=r*o,n[1]=u*o,n[2]=a*o,n[3]=e*o,n}function Mr(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function lr(n,t,r,u){var a=r[0]*u[1]-r[1]*u[0],e=r[0]*u[2]-r[2]*u[0],o=r[0]*u[3]-r[3]*u[0],i=r[1]*u[2]-r[2]*u[1],c=r[1]*u[3]-r[3]*u[1],f=r[2]*u[3]-r[3]*u[2],d=t[0],h=t[1],s=t[2],M=t[3];return n[0]=h*f-s*c+M*i,n[1]=-d*f+s*o-M*e,n[2]=d*c-h*o+M*a,n[3]=-d*i+h*e-s*a,n}function vr(n,t,r,u){var a=t[0],e=t[1],o=t[2],i=t[3];return n[0]=a+u*(r[0]-a),n[1]=e+u*(r[1]-e),n[2]=o+u*(r[2]-o),n[3]=i+u*(r[3]-i),n}function br(n,t){var r,u,a,e,o,i;t=t||1;do{o=(r=2*f()-1)*r+(u=2*f()-1)*u}while(o>=1);do{i=(a=2*f()-1)*a+(e=2*f()-1)*e}while(i>=1);var c=Math.sqrt((1-o)/i);return n[0]=t*r,n[1]=t*u,n[2]=t*a*c,n[3]=t*e*c,n}function mr(n,t,r){var u=t[0],a=t[1],e=t[2],o=t[3];return n[0]=r[0]*u+r[4]*a+r[8]*e+r[12]*o,n[1]=r[1]*u+r[5]*a+r[9]*e+r[13]*o,n[2]=r[2]*u+r[6]*a+r[10]*e+r[14]*o,n[3]=r[3]*u+r[7]*a+r[11]*e+r[15]*o,n}function gr(n,t,r){var u=t[0],a=t[1],e=t[2],o=r[0],i=r[1],c=r[2],f=r[3],d=f*u+i*e-c*a,h=f*a+c*u-o*e,s=f*e+o*a-i*u,M=-o*u-i*a-c*e;return n[0]=d*f+M*-o+h*-c-s*-i,n[1]=h*f+M*-i+s*-o-d*-c,n[2]=s*f+M*-c+d*-i-h*-o,n[3]=t[3],n}function pr(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=0,n}function xr(n){return"vec4("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}function yr(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]&&n[3]===t[3]}function wr(n,t){var r=n[0],u=n[1],a=n[2],e=n[3],o=t[0],c=t[1],f=t[2],d=t[3];return Math.abs(r-o)<=i*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(u-c)<=i*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(a-f)<=i*Math.max(1,Math.abs(a),Math.abs(f))&&Math.abs(e-d)<=i*Math.max(1,Math.abs(e),Math.abs(d))}var qr=Zt,Ar=Kt,Sr=Jt,Pr=or,Tr=ir,Ir=cr,Fr=fr,Rr=function(){var n=Wt();return function(t,r,u,a,e,o){var i,c;for(r||(r=4),u||(u=0),c=a?Math.min(a*r+u,t.length):t.length,i=u;i<c;i+=r)n[0]=t[i],n[1]=t[i+1],n[2]=t[i+2],n[3]=t[i+3],e(n,n,o),t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3];return t}}();r.d(t,"a",function(){return u}),r.d(t,"b",function(){return a}),r.d(t,"c",function(){return e}),r.d(t,"d",function(){return o})},1:function(n,t,r){"use strict";r.d(t,"d",function(){return o}),r.d(t,"a",function(){return i}),r.d(t,"c",function(){return c}),r.d(t,"b",function(){return d});var u=r(0);"undefined"!=typeof Float32Array?Float32Array:Array;var a='This page requires a browser that supports WebGL.<br/>\n<a href="http://get.webgl.org">Click here to upgrade your browser.</a>',e='It doesn\'t appear your computer can support WebGL.<br/>\n<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>';function o(n,t){function r(t){var r=n.parentNode;r&&(r.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>\n    <td align="center">\n    <div style="display: table-cell; vertical-align: middle;">\n    <div>'.concat(t,"</div>\n    </div>\n    </td></tr></table>"))}if(!window.WebGLRenderingContext)return r(a),null;var u=function(n,t){for(var r=["webgl","experimental-webgl","webkit-3d","moz-webgl"],u=null,a=0;a<r.length;++a){try{u=n.getContext(r[a],t)}catch(n){}if(u)break}return u}(n,t);return u||r(e),u}function i(n,t,r){var u=n.createShader(n.VERTEX_SHADER);if(n.shaderSource(u,t),n.compileShader(u),!n.getShaderParameter(u,n.COMPILE_STATUS)){var a="Vertex shader failed to compile.  The error log is:".concat(n.getShaderInfoLog(u));return console.error(a),-1}var e=n.createShader(n.FRAGMENT_SHADER);if(n.shaderSource(e,r),n.compileShader(e),!n.getShaderParameter(e,n.COMPILE_STATUS)){var o="Fragment shader failed to compile.  The error log is:".concat(n.getShaderInfoLog(e));return console.error(o),-1}var i=n.createProgram();if(n.attachShader(i,u),n.attachShader(i,e),n.linkProgram(i),!n.getProgramParameter(i,n.LINK_STATUS)){var c="Shader program failed to link.  The error log is:".concat(n.getProgramInfoLog(i));return console.error(c),-1}return i}function c(n){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Float32Array,r=n[0].length,u=n.length,a=new t(r*u),e=0,o=0;o<u;o++)for(var i=0;i<r;i++)a[e++]=n[o][i];return a}var f={fv3:{},fv4:{},uv3:{},uv4:{}};function d(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fv4";if(f[t][n])return f[t][n];var r,a=parseInt(n.charAt(1)+n.charAt(2),16),e=parseInt(n.charAt(3)+n.charAt(4),16),o=parseInt(n.charAt(5)+n.charAt(6),16);return r="fv3"===t?u.c.fromValues(a/255,e/255,o/255):"fv4"===t?u.d.fromValues(a/255,e/255,o/255,1):"uv3"===t?new Uint8Array([a,e,o]):new Uint8Array([a,e,o,255]),f[t][n]=r,f[t][n]}},47:function(n,t){n.exports="attribute vec4 vPosition;\nvoid main() {\n\tgl_PointSize = 1.0;\n\tgl_Position = vPosition;\n}\n"},48:function(n,t){n.exports="precision mediump float;\nvoid main() {\n\tgl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);\n}\n"},84:function(n,t,r){"use strict";r.r(t);var u,a=r(1),e=r(0),o=r(47),i=r.n(o),c=r(48),f=r.n(c),d="undefined"!=typeof Float32Array?Float32Array:Array,h=[],s=5;function M(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=e.b.lerp(d.of(0,0),n,t,1/3),a=e.b.lerp(d.of(0,0),n,t,2/3),o=e.b.rotate(d.of(0,0),a,u,Math.PI/3);r<s?(M(n,u,++r),M(u,o,r),M(o,a,r),M(a,t,r)):h.push(n,u,o,a,t)}!function(){var n=document.getElementById("gl-canvas");(u=Object(a.d)(n))||console.error("WebGL isn't available");var t=[e.b.fromValues(-.5,-.5),e.b.fromValues(0,.5),e.b.fromValues(.5,-.5)];(function(n,t,r){M(n,t),M(t,r),M(r,n)}).apply(void 0,t),u.viewport(0,0,n.width,n.height),u.clearColor(1,1,1,1);var r=Object(a.a)(u,i.a,f.a);u.useProgram(r);var o=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,o),u.bufferData(u.ARRAY_BUFFER,Object(a.c)(h),u.STATIC_DRAW);var c=u.getAttribLocation(r,"vPosition");u.vertexAttribPointer(c,2,u.FLOAT,!1,0,0),u.enableVertexAttribArray(c),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.LINE_STRIP,0,h.length)}()}});