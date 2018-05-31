!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}([function(e,t){e.exports="#define GLSLIFY 1\nattribute vec3 position;\n\nvoid main() {\n  gl_Position = vec4(position, 1.0);\n}\n"},function(e,t,n){e.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";t.__esModule=!0;var i=n(12),r=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.5.4"};"number"==typeof __e&&(__e=n)},function(e,t,n){var i=n(19),r=n(20),a=n(22),o=Object.defineProperty;t.f=n(1)?Object.defineProperty:function(e,t,n){if(i(e),t=a(t,!0),i(n),r)try{return o(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=n(11),a=n(34);i="sample",window[i]=window[i]||{},window.log=a.a,document.addEventListener("DOMContentLoaded",function(e){return new r.a})},function(e,t,n){"use strict";var i=n(2),r=n.n(i),a=n(3),o=n.n(a),s=n(25);window.glitch=window.glitch||{},t.a=function(){function e(){r()(this,e),this.resize=this.resize.bind(this),this.mouseMove=this.mouseMove.bind(this),this.touchMove=this.touchMove.bind(this),this.update=this.update.bind(this),this.initWebGL(),this.animationId=null,this.startTime=(new Date).getTime(),this.update()}return o()(e,[{key:"initWebGL",value:function(){return this.container=document.querySelector(".js-mainCanvas"),this.renderer=new THREE.WebGLRenderer({canvas:this.container.querySelector("canvas"),alpha:!0}),this.devicePixelRatio=1,this.renderer.setPixelRatio(this.devicePixelRatio),this.scene=new THREE.Scene,this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.camera=new THREE.OrthographicCamera(.5*-this.width,.5*this.width,.5*this.height,.5*-this.height,.1,100),this.camera.position.z=10,this.camera.lookAt(0,0,0),null==this.renderer.extensions.get("OES_texture_float")&&null==this.renderer.extensions.get("OES_texture_half_float")&&alert("not supported"),this.fluid=new s.a(this.devicePixelRatio,this.renderer,this.camera),this.scene.add(this.fluid.mesh),this.isMousePosInited=!1,this.beforePointerPos=new THREE.Vector2,this.pointerX=null,this.pointerY=null,window.addEventListener("resize",this.resize),this.resize()}},{key:"resize",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height),this.camera.top=.5*this.height,this.camera.bottom=.5*-this.height,this.camera.left=.5*-this.width,this.camera.right=.5*this.width,this.camera.updateProjectionMatrix(),this.fluid.resize(this.width,this.height)}},{key:"updatePointerPos",value:function(e,t){}},{key:"mouseMove",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.pointerX=e.clientX,this.pointerY=e.clientY}},{key:"touchMove",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e=t.touches[0],this.pointerX=e.clientX,this.pointerY=e.clientY}},{key:"update",value:function(){var e,t;this.animationId=requestAnimationFrame(this.update),t=(new Date).getTime()-this.startTime,e=new THREE.Vector2,null!=this.pointerX&&(this.isMousePosInited?e.set(this.pointerX,this.pointerY):(this.isMousePosInited=!0,e=this.beforePointerPos)),this.fluid.update(t,e,this.beforePointerPos),this.renderer.render(this.scene,this.camera),this.beforePointerPos=e}}]),e}()},function(e,t,n){e.exports={default:n(13),__esModule:!0}},function(e,t,n){n(14);var i=n(6).Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},function(e,t,n){var i=n(15);i(i.S+i.F*!n(1),"Object",{defineProperty:n(7).f})},function(e,t,n){var i=n(5),r=n(6),a=n(16),o=n(18),s=n(24),u=function(e,t,n){var l,f,c,d=e&u.F,h=e&u.G,p=e&u.S,v=e&u.P,x=e&u.B,m=e&u.W,y=h?r:r[t]||(r[t]={}),g=y.prototype,_=h?i:p?i[t]:(i[t]||{}).prototype;h&&(n=t);for(l in n)(f=!d&&_&&void 0!==_[l])&&s(y,l)||(c=f?_[l]:n[l],y[l]=h&&"function"!=typeof _[l]?n[l]:x&&f?a(c,i):m&&_[l]==c?function(e){var t=function(t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(c):v&&"function"==typeof c?a(Function.call,c):c,v&&((y.virtual||(y.virtual={}))[l]=c,e&u.R&&g&&!g[l]&&o(g,l,c)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},function(e,t,n){var i=n(17);e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var i=n(7),r=n(23);e.exports=n(1)?function(e,t,n){return i.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var i=n(4);e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){e.exports=!n(1)&&!n(8)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var i=n(4),r=n(5).document,a=i(r)&&i(r.createElement);e.exports=function(e){return a?r.createElement(e):{}}},function(e,t,n){var i=n(4);e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){"use strict";var i=n(2),r=n.n(i),a=n(3),o=n.n(a),s=n(26);n(27);t.a=function(){function e(t,i,a){var o=this;r()(this,e);var u,l,f;this.update=this.update.bind(this),this.resize=this.resize.bind(this),this.renderer=i,this.texPixelRatio=.4,this.solverIteration=20,this.attenuation=1,this.alpha=1,this.beta=1,this.viscosity=.99,this.forceRadius=10,this.forceCoefficient=1,this.velocityTimeScale=1,this.spirographVertices=3,this.spirographRadius=100,this.shaders={},this.shaders.render=new THREE.RawShaderMaterial({vertexShader:n(0),fragmentShader:n(28),depthTest:!1,depthWrite:!1,uniforms:{time:{type:"1f",value:0},texPixelRatio:{type:"1f",value:this.texPixelRatio},dataTex:{type:"t",value:null},resolution:{type:"2f",value:null},devicePixelRatio:{type:"1f",value:t}}}),this.shaders.updateDivergence=new THREE.RawShaderMaterial({vertexShader:n(0),fragmentShader:n(29),uniforms:{texPixelRatio:{type:"1f",value:this.texPixelRatio},resolution:{type:"2f",value:null},dataTex:{type:"t",value:null}}}),this.shaders.updatePressure=new THREE.RawShaderMaterial({vertexShader:n(0),fragmentShader:n(30),uniforms:{texPixelRatio:{type:"1f",value:this.texPixelRatio},resolution:{type:"2f",value:null},dataTex:{type:"t",value:0},alpha:{type:"1f",value:this.alpha},beta:{type:"1f",value:this.beta}}}),this.shaders.updateVelocity=new THREE.RawShaderMaterial({vertexShader:n(0),fragmentShader:n(31),uniforms:{time:{type:"1f",value:0},velocityTimeScale:{type:"1f",value:this.velocityTimeScale},texPixelRatio:{type:"1f",value:this.texPixelRatio},viscosity:{type:"1f",value:this.viscosity},forceRadius:{type:"1f",value:this.forceRadius},forceCoefficient:{type:"1f",value:this.forceCoefficient},resolution:{type:"2f",value:null},dataTex:{type:"t",value:null},spirographVertices:{type:"1f",value:this.spirographVertices},spirographRadius:{type:"1f",value:this.spirographRadius}}}),this.shaders.advectData=new THREE.RawShaderMaterial({vertexShader:n(0),fragmentShader:n(32),uniforms:{resolution:{type:"2f",value:null},texPixelRatio:{type:"1f",value:this.texPixelRatio},dataTex:{type:"t",value:null},attenuation:{type:"1f",value:this.attenuation}}}),f=new THREE.RawShaderMaterial({vertexShader:n(0),fragmentShader:n(33),depthTest:!1,depthWrite:!1}),this.dataTexture=new s.a(100,100,this.renderer,a,f,f.clone()),u=new THREE.PlaneGeometry(100,100),this.mesh=new THREE.Mesh(u,this.shaders.render),l=new dat.GUI,l.add(this,"texPixelRatio",.01,1).onChange(function(e){o.setShaderUniform("updateDivergence","texPixelRatio",e),o.setShaderUniform("updatePressure","texPixelRatio",e),o.setShaderUniform("updateVelocity","texPixelRatio",e),o.setShaderUniform("advectData","texPixelRatio",e),o.dataTexture.resize(Math.round(o.width*e),Math.round(o.height*e))}),l.add(this,"viscosity",.8,1).onChange(function(e){return o.setShaderUniform("updateVelocity","viscosity",e)}),l.add(this,"forceRadius",1,100).onChange(function(e){return o.setShaderUniform("updateVelocity","forceRadius",e)}),l.add(this,"forceCoefficient",.01,10).onChange(function(e){return o.setShaderUniform("updateVelocity","forceCoefficient",e)}),l.add(this,"spirographVertices",3,12).step(1).onChange(function(e){return o.setShaderUniform("updateVelocity","spirographVertices",Math.round(e))}),l.add(this,"spirographRadius",30,400).onChange(function(e){return o.setShaderUniform("updateVelocity","spirographRadius",e)}),l.add(this,"velocityTimeScale",0,3).onChange(function(e){return o.setShaderUniform("updateVelocity","velocityTimeScale",e)})}return o()(e,[{key:"setParameters",value:function(){this.setShaderUniform("updateDivergence","texPixelRatio",this.texPixelRatio),this.setShaderUniform("updatePressure","texPixelRatio",this.texPixelRatio),this.setShaderUniform("updateVelocity","texPixelRatio",this.texPixelRatio),this.setShaderUniform("advectData","texPixelRatio",this.texPixelRatio),this.setShaderUniform("advectData","attenuation",this.attenuation),this.setShaderUniform("updatePressure","alpha",this.alpha),this.setShaderUniform("updatePressure","beta",this.beta),this.setShaderUniform("updateVelocity","viscosity",this.viscosity),this.setShaderUniform("updateVelocity","forceRadius",this.forceRadius),this.setShaderUniform("updateVelocity","forceCoefficient",this.forceCoefficient),this.setShaderUniform("updateVelocity","autoforceCoefficient",this.autoforceCoefficient)}},{key:"updateData",value:function(e){this.setShaderUniform(e,"dataTex",this.dataTexture.getTexture()),this.dataTexture.swapTexture(),this.dataTexture.setMeshMaterial(this.shaders[e]),this.renderer.render(this.dataTexture.scene,this.dataTexture.camera,this.dataTexture.getRenderTarget())}},{key:"setShaderUniform",value:function(e,t,n){this.shaders[e].uniforms[t].value=n}},{key:"update",value:function(e){var t,n;for(this.updateData("updateDivergence"),t=0,n=this.solverIteration;0<=n?t<n:t>n;0<=n?++t:--t)this.updateData("updatePressure");this.setShaderUniform("updateVelocity","time",e),this.updateData("updateVelocity"),this.updateData("advectData"),this.setShaderUniform("render","time",e),this.setShaderUniform("render","dataTex",this.dataTexture.getTexture())}},{key:"resize",value:function(e,t){var n,i;this.width=e,this.height=t,i=this.shaders;for(n in i)i[n],this.setShaderUniform(n,"resolution",new THREE.Vector2(this.width,this.height));this.dataTexture.resize(Math.round(this.width*this.texPixelRatio),Math.round(this.height*this.texPixelRatio))}}]),e}()},function(e,t,n){"use strict";var i=n(2),r=n.n(i),a=n(3),o=n.n(a);t.a=function(){function e(t,n,i,a,o,s){r()(this,e);var u;this.renderer=i,this.camera=a,this.initShaderMaterial=o,this.updateShaderMaterial=s,this.currentTextureIndex=0,this.renderTargets=[new THREE.WebGLRenderTarget(t,n,{magFilter:THREE.NearestFilter,minFilter:THREE.NearestFilter,wrapS:THREE.ClampToEdgeWrapping,wrapT:THREE.ClampToEdgeWrapping,format:THREE.RGBAFormat,type:/(iPad|iPhone|iPod)/g.test(navigator.userAgent)?THREE.HalfFloatType:THREE.FloatType,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,shareDepthFrom:null})],this.renderTargets[1]=this.renderTargets[0].clone(),u=new THREE.PlaneGeometry(100,100),this.mesh=new THREE.Mesh(u,this.initShaderMaterial),this.scene=new THREE.Scene,this.scene.add(this.mesh),this.renderer.render(this.scene,this.camera,this.renderTargets[0]),this.renderer.render(this.scene,this.camera,this.renderTargets[1]),this.initShaderMaterial.dispose(),this.initShaderMaterial=null,this.mesh.material=this.updateShaderMaterial,this.renderTargets[0].texture.flipY=!1,this.renderTargets[1].texture.flipY=!1}return o()(e,[{key:"setDefine",value:function(e,t){this.updateShaderMaterial.defines[e]=t}},{key:"initUniforms",value:function(e){var t,n;for(t in e)n=e[t],this.updateShaderMaterial.uniforms[t]=n}},{key:"updateUniform",value:function(e,t){this.updateShaderMaterial.uniforms[e].value=t}},{key:"update",value:function(){this.updateShaderMaterial.uniforms.texture.value=this.getTexture(),this.swapTexture(),this.render()}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera,this.renderTargets[this.currentTextureIndex])}},{key:"setMeshMaterial",value:function(e){this.mesh.material=e,this.mesh.material.needsUpdate=!0}},{key:"swapTexture",value:function(){this.currentTextureIndex=(this.currentTextureIndex+1)%2}},{key:"getTexture",value:function(){return this.getRenderTarget().texture}},{key:"getRenderTarget",value:function(){return this.renderTargets[this.currentTextureIndex]}},{key:"resize",value:function(e,t){this.renderTargets[0].setSize(e,t),this.renderTargets[1].setSize(e,t)}}]),e}()},function(e,t,n){"use strict"},function(e,t){e.exports="precision highp float;\n#define GLSLIFY 1\n\nuniform float time;\nuniform float devicePixelRatio;\nuniform vec2 resolution;\nuniform sampler2D dataTex;\n\nconst float h1 = 0.1;\nconst float h2 = 0.6;\nconst float s1 = 0.4;\nconst float s2 = 1.0;\nconst float v1 = 0.7;\nconst float v2 = 0.9;\n\nfloat map_1_0(float value, float inputMin, float inputMax, float outputMin, float outputMax, bool clamp) {\n  if(clamp == true) {\n    if(value < inputMin) return outputMin;\n    if(value > inputMax) return outputMax;\n  }\n\n  float p = (outputMax - outputMin) / (inputMax - inputMin);\n  return ((value - inputMin) * p) + outputMin;\n}\n\n\nvec3 hsv2rgb_2_1(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\n\n\nvoid main(){\n  vec2 uv = gl_FragCoord.xy / resolution.xy / devicePixelRatio;\n  vec4 data = texture2D(dataTex, uv);\n  vec2 velocity = data.xy;\n  float pressure = data.z;\n\n  float vLength = length(velocity);\n\n  gl_FragColor = vec4(\n    hsv2rgb_2_1(vec3(\n      map_1_0(vLength * 0.3, 0.0, 1.0, h1, h2, true) + time * 0.00006,\n      map_1_0(pressure * vLength * 0.01, 0.0, 1.0, s1, s2, true),\n      map_1_0(1.0 - vLength * pressure * 0.1, 0.0, 1.0, v1, v2, true)\n    )), 1.0\n  );\n}\n"},function(e,t){e.exports="precision highp float;\n#define GLSLIFY 1\n\nuniform float texPixelRatio;\nuniform vec2 resolution;\nuniform sampler2D dataTex;\n\nvec2 sampleVelocity_1_0(sampler2D tex, vec2 uv, vec2 resolution){\n  vec2 cellOffset = vec2(0.0, 0.0);\n  vec2 multiplier = vec2(1.0, 1.0);\n\n  //free-slip boundary: the average flow across the boundary is restricted to 0\n  //avg(uA.xy, uB.xy) dot (boundary normal).xy = 0\n  //walls\n  if(uv.x < 0.0) {\n    cellOffset.x = 1.0;\n    multiplier.x = -1.0;\n\n  } else if(uv.x > 1.0) {\n    cellOffset.x = -1.0;\n    multiplier.x = -1.0;\n  }\n\n  if(uv.y < 0.0) {\n    cellOffset.y = 1.0;\n    multiplier.y = -1.0;\n\n  } else if(uv.y > 1.0) {\n    cellOffset.y = -1.0;\n    multiplier.y = -1.0;\n  }\n\n  return multiplier * texture2D(tex, uv + cellOffset / resolution).xy;\n}\n\n\n\n\nvoid main(){\n  vec2 r = resolution * texPixelRatio;\n  vec4 data = texture2D(dataTex, gl_FragCoord.xy / r);\n\n  vec2 offsetX = vec2(1.0, 0.0);\n  vec2 offsetY = vec2(0.0, 1.0);\n\n  // 上下左右の速度\n  vec2 vLeft   = sampleVelocity_1_0(dataTex, (gl_FragCoord.xy - offsetX) / r, r);\n  vec2 vRight  = sampleVelocity_1_0(dataTex, (gl_FragCoord.xy + offsetX) / r, r);\n  vec2 vTop    = sampleVelocity_1_0(dataTex, (gl_FragCoord.xy - offsetY) / r, r);\n  vec2 vBottom = sampleVelocity_1_0(dataTex, (gl_FragCoord.xy + offsetY) / r, r);\n\n  float divergence = ((vRight.x - vLeft.x) + (vBottom.y - vTop.y)) * 0.5;\n  gl_FragColor = vec4(data.xy, data.z, divergence);\n}\n"},function(e,t){e.exports="precision highp float;\n#define GLSLIFY 1\n\nuniform float texPixelRatio;\nuniform float alpha;\nuniform float beta;\nuniform vec2 resolution;\nuniform sampler2D dataTex;\n\nfloat samplePressure_1_0(sampler2D tex, vec2 uv, vec2 resolution){\n  vec2 cellOffset = vec2(0.0, 0.0);\n\n  //pure Neumann boundary conditions: 0 pressure gradient across the boundary\n  //dP/dx = 0\n  //walls\n  if(uv.x < 0.0) {\n    cellOffset.x = 1.0;\n\n  } else if(uv.x > 1.0) {\n    cellOffset.x = -1.0;\n\n  }\n\n  if(uv.y < 0.0) {\n    cellOffset.y = 1.0;\n\n  } else if(uv.y > 1.0) {\n    cellOffset.y = -1.0;\n\n  }\n\n  return texture2D(tex, uv + cellOffset / resolution).z;\n}\n\n\n\n\nvoid main(){\n  vec2 r = resolution * texPixelRatio;\n  vec4 data = texture2D(dataTex, gl_FragCoord.xy / r);\n\n  // 上下左右の圧力\n  float pLeft   = samplePressure_1_0(dataTex, (gl_FragCoord.xy - vec2(1.0, 0.0)) / r, r);\n  float pRight  = samplePressure_1_0(dataTex, (gl_FragCoord.xy + vec2(1.0, 0.0)) / r, r);\n  float pTop    = samplePressure_1_0(dataTex, (gl_FragCoord.xy - vec2(0.0, 1.0)) / r, r);\n  float pBottom = samplePressure_1_0(dataTex, (gl_FragCoord.xy + vec2(0.0, 1.0)) / r, r);\n\n  float divergence = data.w;\n  float pressure = (divergence * alpha + (pLeft + pRight + pTop + pBottom)) * 0.25 * beta;\n  gl_FragColor = vec4(data.xy, pressure, divergence);\n}\n"},function(e,t){e.exports="precision highp float;\n#define GLSLIFY 1\n\nuniform float time;\nuniform float velocityTimeScale;\nuniform float texPixelRatio;\nuniform float viscosity;\nuniform float forceRadius;\nuniform float forceCoefficient;\nuniform vec2 resolution;\nuniform sampler2D dataTex;\nuniform float spirographVertices;\nuniform float spirographRadius;\n\nconst float PI_1_0 = 3.1415926535897932384626433832795;\n\n\nfloat map_2_1(float value, float inputMin, float inputMax, float outputMin, float outputMax, bool clamp) {\n  if(clamp == true) {\n    if(value < inputMin) return outputMin;\n    if(value > inputMax) return outputMax;\n  }\n\n  float p = (outputMax - outputMin) / (inputMax - inputMin);\n  return ((value - inputMin) * p) + outputMin;\n}\n\n\nfloat samplePressure_3_2(sampler2D tex, vec2 uv, vec2 resolution){\n  vec2 cellOffset = vec2(0.0, 0.0);\n\n  //pure Neumann boundary conditions: 0 pressure gradient across the boundary\n  //dP/dx = 0\n  //walls\n  if(uv.x < 0.0) {\n    cellOffset.x = 1.0;\n\n  } else if(uv.x > 1.0) {\n    cellOffset.x = -1.0;\n\n  }\n\n  if(uv.y < 0.0) {\n    cellOffset.y = 1.0;\n\n  } else if(uv.y > 1.0) {\n    cellOffset.y = -1.0;\n\n  }\n\n  return texture2D(tex, uv + cellOffset / resolution).z;\n}\n\n\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_4_3(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_4_3(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute_4_4(vec3 x) {\n  return mod289_4_3(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_4_5(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289_4_3(i); // Avoid truncation effects in permutation\n  vec3 p = permute_4_4( permute_4_4( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n\n\n\nconst float PI_2 = PI_1_0 * 0.5;\n\nvec2 getSpirographPos(float t, float radius, float rOffset) {\n  float an = 2.0 * PI_1_0 / spirographVertices;\n  float t_an = t / an;\n  float an_2 = an * 0.5;\n  float c = cos(an_2) / cos(an * (t_an - floor(t_an)) - an_2);\n  return vec2(\n    radius * cos(t + rOffset) * c,\n    radius * sin(t + rOffset) * c\n  ) + resolution * 0.5;\n}\n\nvoid addForce(inout vec2 aforce, float t, float t2, float radius, vec2 offsetPos, float rOffset) {\n  float len, d;\n  vec2 pos = (getSpirographPos(t, radius, rOffset) + offsetPos) * texPixelRatio;\n  vec2 pos2 = (getSpirographPos(t2, radius, rOffset) + offsetPos) * texPixelRatio;\n  len = length(gl_FragCoord.xy - pos) / forceRadius / texPixelRatio;\n  d = clamp(1.0 - len, 0.0, 1.0) * forceCoefficient;\n  aforce += d * normalize(pos2 - pos);\n}\n\nvoid addForceGroup(inout vec2 aforce, vec2 offsetPos) {\n  float radius = spirographRadius;\n  float t, t2, rOffset;\n\n  for(int i = 0; i < 60; i++) {\n    t = time * 0.004 * velocityTimeScale + float(i) * PI_1_0 * 2.0 / 60.0;\n    t2 = t + 0.0001 * velocityTimeScale;\n    rOffset = PI_2 + time * 0.001 * velocityTimeScale;\n\n    addForce(aforce, t, t2, radius      , offsetPos,  rOffset);\n    addForce(aforce, t, t2, radius * 2.0, offsetPos, -rOffset);\n    addForce(aforce, t, t2, radius * 4.0, offsetPos,  rOffset);\n  }\n}\n\nvoid main(){\n  vec2 r = resolution * texPixelRatio;\n  vec2 uv = gl_FragCoord.xy / r;\n  vec4 data = texture2D(dataTex, uv);\n  vec2 v = data.xy;\n\n  vec2 offsetX = vec2(1.0, 0.0);\n  vec2 offsetY = vec2(0.0, 1.0);\n\n  // 上下左右の圧力\n  float pLeft   = samplePressure_3_2(dataTex, (gl_FragCoord.xy - offsetX) / r, r);\n  float pRight  = samplePressure_3_2(dataTex, (gl_FragCoord.xy + offsetX) / r, r);\n  float pTop    = samplePressure_3_2(dataTex, (gl_FragCoord.xy - offsetY) / r, r);\n  float pBottom = samplePressure_3_2(dataTex, (gl_FragCoord.xy + offsetY) / r, r);\n\n  // 自動\n  vec2 aforce = vec2(0.0);\n  addForceGroup(aforce, vec2( 0.0, 0.0));\n  addForceGroup(aforce, vec2(-0.4, 0.0) * resolution);\n  addForceGroup(aforce, vec2( 0.4, 0.0) * resolution);\n\n  v += vec2(pRight - pLeft, pBottom - pTop) * 0.5;\n  v += aforce;\n  v *= viscosity;\n  gl_FragColor = vec4(v, data.zw);\n}\n"},function(e,t){e.exports="precision highp float;\n#define GLSLIFY 1\n\nuniform float texPixelRatio;\nuniform float attenuation;\nuniform vec2 resolution;\nuniform sampler2D dataTex;\n\nvec2 sampleVelocity_1_0(sampler2D tex, vec2 uv, vec2 resolution){\n  vec2 cellOffset = vec2(0.0, 0.0);\n  vec2 multiplier = vec2(1.0, 1.0);\n\n  //free-slip boundary: the average flow across the boundary is restricted to 0\n  //avg(uA.xy, uB.xy) dot (boundary normal).xy = 0\n  //walls\n  if(uv.x < 0.0) {\n    cellOffset.x = 1.0;\n    multiplier.x = -1.0;\n\n  } else if(uv.x > 1.0) {\n    cellOffset.x = -1.0;\n    multiplier.x = -1.0;\n  }\n\n  if(uv.y < 0.0) {\n    cellOffset.y = 1.0;\n    multiplier.y = -1.0;\n\n  } else if(uv.y > 1.0) {\n    cellOffset.y = -1.0;\n    multiplier.y = -1.0;\n  }\n\n  return multiplier * texture2D(tex, uv + cellOffset / resolution).xy;\n}\n\n\n\nfloat samplePressure_2_1(sampler2D tex, vec2 uv, vec2 resolution){\n  vec2 cellOffset = vec2(0.0, 0.0);\n\n  //pure Neumann boundary conditions: 0 pressure gradient across the boundary\n  //dP/dx = 0\n  //walls\n  if(uv.x < 0.0) {\n    cellOffset.x = 1.0;\n\n  } else if(uv.x > 1.0) {\n    cellOffset.x = -1.0;\n\n  }\n\n  if(uv.y < 0.0) {\n    cellOffset.y = 1.0;\n\n  } else if(uv.y > 1.0) {\n    cellOffset.y = -1.0;\n\n  }\n\n  return texture2D(tex, uv + cellOffset / resolution).z;\n}\n\n\n\n\nvec2 bilerp(sampler2D tex, vec2 p, vec2 resolution) {\n    vec4 ij; // i0, j0, i1, j1\n    ij.xy = floor(p - 0.5) + 0.5;\n    ij.zw = ij.xy + 1.0;\n\n    vec4 uv = ij / resolution.xyxy;\n    vec2 d11 = sampleVelocity_1_0(tex, uv.xy, resolution);\n    vec2 d21 = sampleVelocity_1_0(tex, uv.zy, resolution);\n    vec2 d12 = sampleVelocity_1_0(tex, uv.xw, resolution);\n    vec2 d22 = sampleVelocity_1_0(tex, uv.zw, resolution);\n\n    vec2 a = p - ij.xy;\n\n    return mix(mix(d11, d21, a.x), mix(d12, d22, a.x), a.y);\n}\n\nvoid main(){\n  vec2 r = resolution * texPixelRatio;\n  vec2 p = gl_FragCoord.xy - sampleVelocity_1_0(dataTex, gl_FragCoord.xy / r, r);\n  gl_FragColor = vec4(bilerp(dataTex, p, r) * attenuation, samplePressure_2_1(dataTex, gl_FragCoord.xy / r, r), 0.0);\n  }\n"},function(e,t){e.exports="precision mediump float;\n#define GLSLIFY 1\n\nvoid main(){\n  gl_FragColor = vec4(0.0);\n}\n"},function(e,t,n){"use strict";t.a=function(){return null!=window.console?null!=window.console.log.bind?window.console.log.bind(window.console):window.console.log:window.alert}()}]);