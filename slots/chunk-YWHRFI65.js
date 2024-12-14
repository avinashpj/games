import{$ as ue,A as je,C as ve,D as _e,E as be,F as v,H as ye,I as le,K as b,M as $e,N as p,Q as qe,R as A,S as Ke,V as g,X as O,Y as Te,a as h,aa as ke,b as S,ba as de,c as re,f as T,g as l,h as k,i as I,j as _,k as Ne,ka as ce,l as x,ma as M,n as P,na as Ye,o as se,oa as Ce,pa as he,q as ne,qa as Xe,r as C,ra as Je,sa as we,t as ie,u as w,v as oe,y as Ve,z as ae}from"./chunk-C3IC3I66.js";var Se=[];k.handleByNamedList(l.Environment,Se);function Qe(s){return T(this,null,function*(){if(!s)for(let e=0;e<Se.length;e++){let t=Se[e];if(t.value.test()){yield t.value.load();return}}})}var D;function fe(){if(typeof D=="boolean")return D;try{D=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{D=!1}return D}var y=(s=>(s[s.NONE=0]="NONE",s[s.COLOR=16384]="COLOR",s[s.STENCIL=1024]="STENCIL",s[s.DEPTH=256]="DEPTH",s[s.COLOR_DEPTH=16640]="COLOR_DEPTH",s[s.COLOR_STENCIL=17408]="COLOR_STENCIL",s[s.DEPTH_STENCIL=1280]="DEPTH_STENCIL",s[s.ALL=17664]="ALL",s))(y||{});var R=class{constructor(e){this.items=[],this._name=e}emit(e,t,r,n,i,o,u,a){let{name:d,items:c}=this;for(let f=0,m=c.length;f<m;f++)c[f][d](e,t,r,n,i,o,u,a);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){let t=this.items.indexOf(e);return t!==-1&&this.items.splice(t,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}};var Rt=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Gt=(()=>{let s=class Ze extends I{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;let r=[...Rt,...this.config.runners??[]];this._addRunners(...r),this._unsafeEvalCheck()}init(){return T(this,arguments,function*(t={}){let r=t.skipExtensionImports===!0?!0:t.manageImports===!1;yield Qe(r),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(let n in this._systemsHash){let o=this._systemsHash[n].constructor.defaultOptions;t=h(h({},o),t)}t=h(h({},Ze.defaultOptions),t),this._roundPixels=t.roundPixels?1:0;for(let n=0;n<this.runners.init.items.length;n++)yield this.runners.init.items[n].init(t);this._initOptions=t})}render(t,r){let n=t;if(n instanceof v&&(n={container:n},r&&(ne(se,"passing a second argument is deprecated, please use render options instead"),n.target=r.renderTexture)),n.target||(n.target=this.view.renderTarget),n.target===this.view.renderTarget&&(this._lastObjectRendered=n.container,n.clearColor=this.background.colorRgba),n.clearColor){let i=Array.isArray(n.clearColor)&&n.clearColor.length===4;n.clearColor=i?n.clearColor:_.shared.setValue(n.clearColor).toArray()}n.transform||(n.container.updateLocalTransform(),n.transform=n.container.localTransform),this.runners.prerender.emit(n),this.runners.renderStart.emit(n),this.runners.render.emit(n),this.runners.renderEnd.emit(n),this.runners.postrender.emit(n)}resize(t,r,n){let i=this.view.resolution;this.view.resize(t,r,n),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),n!==void 0&&n!==i&&this.runners.resolutionChange.emit(n)}clear(t={}){let r=this;t.target||(t.target=r.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=y.ALL);let{clear:n,clearColor:i,target:o}=t;_.shared.setValue(i??this.background.colorRgba),r.renderTarget.clear(o,n,_.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(r=>{this.runners[r]=new R(r)})}_addSystems(t){let r;for(r in t){let n=t[r];this._addSystem(n.value,n.name)}}_addSystem(t,r){let n=new t(this);if(this[r])throw new Error(`Whoops! The name "${r}" is already in use`);this[r]=n,this._systemsHash[r]=n;for(let i in this.runners)this.runners[i].add(n);return this}_addPipes(t,r){let n=r.reduce((i,o)=>(i[o.name]=o.value,i),{});t.forEach(i=>{let o=i.value,u=i.name,a=n[u];this.renderPipes[u]=new o(this,a?new a:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(r=>{r.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!fe())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};return s.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1},s})(),or=Gt;var F=class{constructor(e){this._renderer=e}addRenderable(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){e.isRenderable&&e.render(this._renderer)}destroy(){this._renderer=null}};F.extension={type:[l.WebGLPipes,l.WebGPUPipes,l.CanvasPipes],name:"customRender"};function pe(s,e){let t=s.instructionSet,r=t.instructions;for(let n=0;n<t.instructionSize;n++){let i=r[n];e[i.renderPipeId].execute(i)}}var L=class{constructor(e){this._renderer=e}addRenderGroup(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){e.isRenderable&&(this._renderer.globalUniforms.push({worldTransformMatrix:e.worldTransform,worldColor:e.worldColorAlpha}),pe(e,this._renderer.renderPipes),this._renderer.globalUniforms.pop())}destroy(){this._renderer=null}};L.extension={type:[l.WebGLPipes,l.WebGPUPipes,l.CanvasPipes],name:"renderGroup"};function et(s,e){let t=s.root,r=s.instructionSet;r.reset();let n=e.renderPipes?e:e.batch.renderer,i=n.renderPipes;i.batch.buildStart(r),i.blendMode.buildStart(),i.colorMask.buildStart(),t.sortableChildren&&t.sortChildren(),tt(t,r,n,!0),i.batch.buildEnd(r),i.blendMode.buildEnd(r)}function G(s,e,t){let r=t.renderPipes?t:t.batch.renderer;s.globalDisplayStatus<7||!s.includeInBuild||(s.sortableChildren&&s.sortChildren(),s.isSimple?Bt(s,e,r):tt(s,e,r,!1))}function Bt(s,e,t){if(s.renderPipeId){let{renderPipes:r,renderableGC:n}=t;r.blendMode.setBlendMode(s,s.groupBlendMode,e),s.didViewUpdate=!1,r[s.renderPipeId].addRenderable(s,e),n.addRenderable(s,e)}if(!s.renderGroup){let r=s.children,n=r.length;for(let i=0;i<n;i++)G(r[i],e,t)}}function tt(s,e,t,r){let{renderPipes:n,renderableGC:i}=t;if(!r&&s.renderGroup)n.renderGroup.addRenderGroup(s.renderGroup,e);else{for(let a=0;a<s.effects.length;a++){let d=s.effects[a];n[d.pipe].push(d,s,e)}let o=s.renderPipeId;o&&(n.blendMode.setBlendMode(s,s.groupBlendMode,e),s.didViewUpdate=!1,n[o].addRenderable(s,e),i.addRenderable(s,e));let u=s.children;if(u.length)for(let a=0;a<u.length;a++)G(u[a],e,t);for(let a=s.effects.length-1;a>=0;a--){let d=s.effects[a];n[d.pipe].pop(d,s,e)}}}function H(s,e){e||(e=0);for(let t=e;t<s.length&&s[t];t++)s[t]=null}function Pe(s,e=[]){e.push(s);for(let t=0;t<s.renderGroupChildren.length;t++)Pe(s.renderGroupChildren[t],e);return e}function rt(s,e,t){let r=s>>16&255,n=s>>8&255,i=s&255,o=e>>16&255,u=e>>8&255,a=e&255,d=r+(o-r)*t,c=n+(u-n)*t,f=i+(a-i)*t;return(d<<16)+(c<<8)+f}var Me=16777215;function Re(s,e){return s===Me||e===Me?s+e-Me:rt(s,e,.5)}var Et=new v,st=be|ve|_e;function Ge(s,e=!1){Ut(s);let t=s.childrenToUpdate,r=s.updateTick++;for(let n in t){let i=Number(n),o=t[n],u=o.list,a=o.index;for(let d=0;d<a;d++){let c=u[d];c.parentRenderGroup===s&&c.relativeRenderGroupDepth===i&&it(c,r,0)}H(u,a),o.index=0}if(e)for(let n=0;n<s.renderGroupChildren.length;n++)Ge(s.renderGroupChildren[n],e)}function Ut(s){let e=s.root,t;if(s.renderGroupParent){let r=s.renderGroupParent;s.worldTransform.appendFrom(e.relativeGroupTransform,r.worldTransform),s.worldColor=Re(e.groupColor,r.worldColor),t=e.groupAlpha*r.worldAlpha}else s.worldTransform.copyFrom(e.localTransform),s.worldColor=e.localColor,t=e.localAlpha;t=t<0?0:t>1?1:t,s.worldAlpha=t,s.worldColorAlpha=s.worldColor+((t*255|0)<<24)}function it(s,e,t){if(e===s.updateTick)return;s.updateTick=e,s.didChange=!1;let r=s.localTransform;s.updateLocalTransform();let n=s.parent;if(n&&!n.renderGroup?(t=t|s._updateFlags,s.relativeGroupTransform.appendFrom(r,n.relativeGroupTransform),t&st&&nt(s,n,t)):(t=s._updateFlags,s.relativeGroupTransform.copyFrom(r),t&st&&nt(s,Et,t)),!s.renderGroup){let i=s.children,o=i.length;for(let a=0;a<o;a++)it(i[a],e,t);let u=s.parentRenderGroup;s.renderPipeId&&!u.structureDidChange&&u.updateRenderable(s)}}function nt(s,e,t){if(t&ve){s.groupColor=Re(s.localColor,e.groupColor);let r=s.localAlpha*e.groupAlpha;r=r<0?0:r>1?1:r,s.groupAlpha=r,s.groupColorAlpha=s.groupColor+((r*255|0)<<24)}t&_e&&(s.groupBlendMode=s.localBlendMode==="inherit"?e.groupBlendMode:s.localBlendMode),t&be&&(s.globalDisplayStatus=s.localDisplayStatus&e.globalDisplayStatus),s._updateFlags=0}function ot(s,e){let{list:t,index:r}=s.childrenRenderablesToUpdate,n=!1;for(let i=0;i<r;i++){let o=t[i];if(n=e[o.renderPipeId].validateRenderable(o),n)break}return s.structureDidChange=n,n}var It=new x,z=class{constructor(e){this._renderer=e}render({container:e,transform:t}){e.isRenderGroup=!0;let r=e.parent,n=e.renderGroup.renderGroupParent;e.parent=null,e.renderGroup.renderGroupParent=null;let i=this._renderer,o=Pe(e.renderGroup,[]),u=It;t&&(u=u.copyFrom(e.renderGroup.localTransform),e.renderGroup.localTransform.copyFrom(t));let a=i.renderPipes;for(let d=0;d<o.length;d++){let c=o[d];c.runOnRender(),c.instructionSet.renderPipes=a,c.structureDidChange?H(c.childrenRenderablesToUpdate.list,0):ot(c,a),Ge(c),c.structureDidChange?(c.structureDidChange=!1,et(c,i)):At(c),c.childrenRenderablesToUpdate.index=0,i.renderPipes.batch.upload(c.instructionSet)}i.globalUniforms.start({worldTransformMatrix:t?e.renderGroup.localTransform:e.renderGroup.worldTransform,worldColor:e.renderGroup.worldColorAlpha}),pe(e.renderGroup,a),a.uniformBatch&&a.uniformBatch.renderEnd(),t&&e.renderGroup.localTransform.copyFrom(u),e.parent=r,e.renderGroup.renderGroupParent=n}destroy(){this._renderer=null}};z.extension={type:[l.WebGLSystem,l.WebGPUSystem,l.CanvasSystem],name:"renderGroup"};function At(s){let{list:e,index:t}=s.childrenRenderablesToUpdate;for(let r=0;r<t;r++){let n=e[r];n.didViewUpdate&&s.updateRenderable(n)}H(e,t)}var W=class{constructor(e){this._gpuSpriteHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e}addRenderable(e,t){let r=this._getGpuSprite(e);e._didSpriteUpdate&&this._updateBatchableSprite(e,r),this._renderer.renderPipes.batch.addToBatch(r,t)}updateRenderable(e){let t=this._gpuSpriteHash[e.uid];e._didSpriteUpdate&&this._updateBatchableSprite(e,t),t._batcher.updateElement(t)}validateRenderable(e){let t=e._texture,r=this._getGpuSprite(e);return r.texture._source!==t._source?!r._batcher.checkAndUpdateTexture(r,t):!1}destroyRenderable(e){let t=this._gpuSpriteHash[e.uid];C.return(t),this._gpuSpriteHash[e.uid]=null,e.off("destroyed",this._destroyRenderableBound)}_updateBatchableSprite(e,t){e._didSpriteUpdate=!1,t.bounds=e.bounds,t.texture=e._texture}_getGpuSprite(e){return this._gpuSpriteHash[e.uid]||this._initGPUSprite(e)}_initGPUSprite(e){let t=C.get(Je);return t.renderable=e,t.transform=e.groupTransform,t.texture=e._texture,t.bounds=e.bounds,t.roundPixels=this._renderer._roundPixels|e._roundPixels,this._gpuSpriteHash[e.uid]=t,e._didSpriteUpdate=!1,e.on("destroyed",this._destroyRenderableBound),t}destroy(){for(let e in this._gpuSpriteHash)C.return(this._gpuSpriteHash[e]);this._gpuSpriteHash=null,this._renderer=null}};W.extension={type:[l.WebGLPipes,l.WebGPUPipes,l.CanvasPipes],name:"sprite"};var B="8.4.1";var Be=class{static init(){globalThis.__PIXI_APP_INIT__?.(this,B)}static destroy(){}};Be.extension=l.Application;var N=class{constructor(e){this._renderer=e}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,B)}destroy(){this._renderer=null}};N.extension={type:[l.WebGLSystem,l.WebGPUSystem],name:"initHook",priority:-10};var Ee=class at{constructor(e,t){this.state=he.for2d(),this._batchersByInstructionSet=Object.create(null),this._activeBatches=Object.create(null),this.renderer=e,this._adaptor=t,this._adaptor.init?.(this)}static getBatcher(e){return new this._availableBatchers[e]}buildStart(e){let t=this._batchersByInstructionSet[e.uid];t||(t=this._batchersByInstructionSet[e.uid]=Object.create(null),t.default||(t.default=new Ce)),this._activeBatches=t,this._activeBatch=this._activeBatches.default;for(let r in this._activeBatches)this._activeBatches[r].begin()}addToBatch(e,t){if(this._activeBatch.name!==e.batcherName){this._activeBatch.break(t);let r=this._activeBatches[e.batcherName];r||(r=this._activeBatches[e.batcherName]=at.getBatcher(e.batcherName),r.begin()),this._activeBatch=r}this._activeBatch.add(e)}break(e){this._activeBatch.break(e)}buildEnd(e){this._activeBatch.break(e);let t=this._activeBatches;for(let r in t){let n=t[r],i=n.geometry;i.indexBuffer.setDataWithSize(n.indexBuffer,n.indexSize,!0),i.buffers[0].setDataWithSize(n.attributeBuffer.float32View,n.attributeSize,!1)}}upload(e){let t=this._batchersByInstructionSet[e.uid];for(let r in t){let n=t[r],i=n.geometry;n.dirty&&(n.dirty=!1,i.buffers[0].update(n.attributeSize*4))}}execute(e){if(e.action==="startBatch"){let t=e.batcher,r=t.geometry,n=t.shader;this._adaptor.start(this,r,n)}this._adaptor.execute(this,e)}destroy(){this.state=null,this.renderer=null,this._adaptor=null;for(let e in this._activeBatches)this._activeBatches[e].destroy();this._activeBatches=null}};Ee.extension={type:[l.WebGLPipes,l.WebGPUPipes,l.CanvasPipes],name:"batch"};Ee._availableBatchers=Object.create(null);var Ue=Ee;k.handleByMap(l.Batcher,Ue._availableBatchers);k.add(Ce);var Ot=(()=>{let s=class Ie extends Ye{constructor(t){t=h(h({},Ie.defaultOptions),t),super(t),this.enabled=!0,this._state=he.for2d(),this.blendMode=t.blendMode,this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.addResource("uTexture",0,1)}apply(t,r,n,i){t.applyFilter(this,r,n,i)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){let a=t,{gpu:r,gl:n}=a,i=re(a,["gpu","gl"]),o,u;return r&&(o=de.from(r)),n&&(u=ue.from(n)),new Ie(h({gpuProgram:o,glProgram:u},i))}};return s.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1},s})(),lt=Ot;var ut=`in vec2 vMaskCoord;
in vec2 vTextureCoord;

uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;

uniform float uAlpha;
uniform vec4 uMaskClamp;

out vec4 finalColor;

void main(void)
{
    float clip = step(3.5,
        step(uMaskClamp.x, vMaskCoord.x) +
        step(uMaskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, uMaskClamp.z) +
        step(vMaskCoord.y, uMaskClamp.w));

    // TODO look into why this is needed
    float npmAlpha = uAlpha; 
    vec4 original = texture(uTexture, vTextureCoord);
    vec4 masky = texture(uMaskTexture, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * uAlpha * clip);

    finalColor = original;
}
`;var dt=`in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
uniform mat3 uFilterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
       
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}   

void main(void)
{
    gl_Position = filterVertexPosition(aPosition);
    vTextureCoord = filterTextureCoord(aPosition);
    vMaskCoord = getFilterCoord(aPosition);
}
`;var Ae=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,  
};

struct MaskUniforms {
  uFilterMatrix:mat3x3<f32>,
  uMaskClamp:vec4<f32>,
  uAlpha:f32,
};


@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{

  
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var maskClamp = filterUniforms.uMaskClamp;

     var clip = step(3.5,
        step(maskClamp.x, filterUv.x) +
        step(maskClamp.y, filterUv.y) +
        step(filterUv.x, maskClamp.z) +
        step(filterUv.y, maskClamp.w));

    var mask = textureSample(uMaskTexture, uSampler, filterUv);
    var source = textureSample(uTexture, uSampler, uv);
    
    var npmAlpha = 0.0;

    var alphaMul = 1.0 - npmAlpha * (1.0 - mask.a);

    var a = (alphaMul * mask.r) * clip;

    return vec4(source.rgb, source.a) * a;
}`;var me=class extends lt{constructor(e){let a=e,{sprite:t}=a,r=re(a,["sprite"]),n=new $e(t.texture),i=new ce({uFilterMatrix:{value:new x,type:"mat3x3<f32>"},uMaskClamp:{value:n.uClampFrame,type:"vec4<f32>"},uAlpha:{value:1,type:"f32"}}),o=de.from({vertex:{source:Ae,entryPoint:"mainVertex"},fragment:{source:Ae,entryPoint:"mainFragment"}}),u=ue.from({vertex:dt,fragment:ut,name:"mask-filter"});super(S(h({},r),{gpuProgram:o,glProgram:u,resources:{filterUniforms:i,uMaskTexture:t.texture.source}})),this.sprite=t,this._textureMatrix=n}apply(e,t,r,n){this._textureMatrix.texture=this.sprite.texture,e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix,this.sprite).prepend(this._textureMatrix.mapCoord),this.resources.uMaskTexture=this.sprite.texture.source,e.applyFilter(this,t,r,n)}};var Dt=new oe,Oe=class extends ie{constructor(){super(),this.filters=[new me({sprite:new qe(p.EMPTY),resolution:"inherit",antialias:"inherit"})]}get sprite(){return this.filters[0].sprite}set sprite(e){this.filters[0].sprite=e}},V=class{constructor(e){this._activeMaskStage=[],this._renderer=e}push(e,t,r){let n=this._renderer;if(n.renderPipes.batch.break(r),r.add({renderPipeId:"alphaMask",action:"pushMaskBegin",mask:e,canBundle:!1,maskedContainer:t}),e.renderMaskToTexture){let i=e.mask;i.includeInBuild=!0,G(i,r,n),i.includeInBuild=!1}n.renderPipes.batch.break(r),r.add({renderPipeId:"alphaMask",action:"pushMaskEnd",mask:e,maskedContainer:t,canBundle:!1})}pop(e,t,r){this._renderer.renderPipes.batch.break(r),r.add({renderPipeId:"alphaMask",action:"popMaskEnd",mask:e,canBundle:!1})}execute(e){let t=this._renderer,r=e.mask.renderMaskToTexture;if(e.action==="pushMaskBegin"){let n=C.get(Oe);if(r){e.mask.mask.measurable=!0;let i=Ve(e.mask.mask,!0,Dt);e.mask.mask.measurable=!1,i.ceil();let o=t.renderTarget.renderTarget.colorTexture.source,u=we.getOptimalTexture(i.width,i.height,o._resolution,o.antialias);t.renderTarget.push(u,!0),t.globalUniforms.push({offset:i,worldColor:4294967295});let a=n.sprite;a.texture=u,a.worldTransform.tx=i.minX,a.worldTransform.ty=i.minY,this._activeMaskStage.push({filterEffect:n,maskedContainer:e.maskedContainer,filterTexture:u})}else n.sprite=e.mask.mask,this._activeMaskStage.push({filterEffect:n,maskedContainer:e.maskedContainer})}else if(e.action==="pushMaskEnd"){let n=this._activeMaskStage[this._activeMaskStage.length-1];r&&(t.type===M.WEBGL&&t.renderTarget.finishRenderPass(),t.renderTarget.pop(),t.globalUniforms.pop()),t.filter.push({renderPipeId:"filter",action:"pushFilter",container:n.maskedContainer,filterEffect:n.filterEffect,canBundle:!1})}else if(e.action==="popMaskEnd"){t.filter.pop();let n=this._activeMaskStage.pop();r&&we.returnTexture(n.filterTexture),C.return(n.filterEffect)}}destroy(){this._renderer=null,this._activeMaskStage=null}};V.extension={type:[l.WebGLPipes,l.WebGPUPipes,l.CanvasPipes],name:"alphaMask"};var j=class{constructor(e){this._colorStack=[],this._colorStackIndex=0,this._currentColor=0,this._renderer=e}buildStart(){this._colorStack[0]=15,this._colorStackIndex=1,this._currentColor=15}push(e,t,r){this._renderer.renderPipes.batch.break(r);let i=this._colorStack;i[this._colorStackIndex]=i[this._colorStackIndex-1]&e.mask;let o=this._colorStack[this._colorStackIndex];o!==this._currentColor&&(this._currentColor=o,r.add({renderPipeId:"colorMask",colorMask:o,canBundle:!1})),this._colorStackIndex++}pop(e,t,r){this._renderer.renderPipes.batch.break(r);let i=this._colorStack;this._colorStackIndex--;let o=i[this._colorStackIndex-1];o!==this._currentColor&&(this._currentColor=o,r.add({renderPipeId:"colorMask",colorMask:o,canBundle:!1}))}execute(e){this._renderer.colorMask.setMask(e.colorMask)}destroy(){this._colorStack=null}};j.extension={type:[l.WebGLPipes,l.WebGPUPipes,l.CanvasPipes],name:"colorMask"};var $=class{constructor(e){this._maskStackHash={},this._maskHash=new WeakMap,this._renderer=e}push(e,t,r){var n;let i=e,o=this._renderer;o.renderPipes.batch.break(r),o.renderPipes.blendMode.setBlendMode(i.mask,"none",r),r.add({renderPipeId:"stencilMask",action:"pushMaskBegin",mask:e,canBundle:!1});let u=i.mask;u.includeInBuild=!0,this._maskHash.has(i)||this._maskHash.set(i,{instructionsStart:0,instructionsLength:0});let a=this._maskHash.get(i);a.instructionsStart=r.instructionSize,G(u,r,o),u.includeInBuild=!1,o.renderPipes.batch.break(r),r.add({renderPipeId:"stencilMask",action:"pushMaskEnd",mask:e,canBundle:!1});let d=r.instructionSize-a.instructionsStart-1;a.instructionsLength=d;let c=o.renderTarget.renderTarget.uid;(n=this._maskStackHash)[c]??(n[c]=0)}pop(e,t,r){let n=e,i=this._renderer;i.renderPipes.batch.break(r),i.renderPipes.blendMode.setBlendMode(n.mask,"none",r),r.add({renderPipeId:"stencilMask",action:"popMaskBegin",canBundle:!1});let o=this._maskHash.get(e);for(let u=0;u<o.instructionsLength;u++)r.instructions[r.instructionSize++]=r.instructions[o.instructionsStart++];r.add({renderPipeId:"stencilMask",action:"popMaskEnd",canBundle:!1})}execute(e){var t;let r=this._renderer,n=r.renderTarget.renderTarget.uid,i=(t=this._maskStackHash)[n]??(t[n]=0);e.action==="pushMaskBegin"?(r.renderTarget.ensureDepthStencil(),r.stencil.setStencilMode(g.RENDERING_MASK_ADD,i),i++,r.colorMask.setMask(0)):e.action==="pushMaskEnd"?(r.stencil.setStencilMode(g.MASK_ACTIVE,i),r.colorMask.setMask(15)):e.action==="popMaskBegin"?(r.colorMask.setMask(0),i!==0?r.stencil.setStencilMode(g.RENDERING_MASK_REMOVE,i):(r.renderTarget.clear(null,y.STENCIL),r.stencil.setStencilMode(g.DISABLED,i)),i--):e.action==="popMaskEnd"&&(r.stencil.setStencilMode(g.MASK_ACTIVE,i),r.colorMask.setMask(15)),this._maskStackHash[n]=i}destroy(){this._renderer=null,this._maskStackHash=null,this._maskHash=null}};$.extension={type:[l.WebGLPipes,l.WebGPUPipes,l.CanvasPipes],name:"stencilMask"};var De=class ct{constructor(){this.clearBeforeRender=!0,this._backgroundColor=new _(0),this.color=this._backgroundColor,this.alpha=1}init(e){e=h(h({},ct.defaultOptions),e),this.clearBeforeRender=e.clearBeforeRender,this.color=e.background||e.backgroundColor||this._backgroundColor,this.alpha=e.backgroundAlpha,this._backgroundColor.setAlpha(e.backgroundAlpha)}get color(){return this._backgroundColor}set color(e){this._backgroundColor.setValue(e)}get alpha(){return this._backgroundColor.alpha}set alpha(e){this._backgroundColor.setAlpha(e)}get colorRgba(){return this._backgroundColor.toArray()}destroy(){}};De.extension={type:[l.WebGLSystem,l.WebGPUSystem,l.CanvasSystem],name:"background",priority:0};De.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};var ht=De;var q={};k.handle(l.BlendMode,s=>{if(!s.name)throw new Error("BlendMode extension must have a name property");q[s.name]=s.ref},s=>{delete q[s.name]});var K=class{constructor(e){this._isAdvanced=!1,this._filterHash=Object.create(null),this._renderer=e}setBlendMode(e,t,r){if(this._activeBlendMode===t){this._isAdvanced&&this._renderableList.push(e);return}this._activeBlendMode=t,this._isAdvanced&&this._endAdvancedBlendMode(r),this._isAdvanced=!!q[t],this._isAdvanced&&(this._beginAdvancedBlendMode(r),this._renderableList.push(e))}_beginAdvancedBlendMode(e){this._renderer.renderPipes.batch.break(e);let t=this._activeBlendMode;if(!q[t]){ae(`Unable to assign BlendMode: '${t}'. You may want to include: import 'pixi.js/advanced-blend-modes'`);return}let r=this._filterHash[t];r||(r=this._filterHash[t]=new ie,r.filters=[new q[t]]);let n={renderPipeId:"filter",action:"pushFilter",renderables:[],filterEffect:r,canBundle:!1};this._renderableList=n.renderables,e.add(n)}_endAdvancedBlendMode(e){this._renderableList=null,this._renderer.renderPipes.batch.break(e),e.add({renderPipeId:"filter",action:"popFilter",canBundle:!1})}buildStart(){this._isAdvanced=!1}buildEnd(e){this._isAdvanced&&this._endAdvancedBlendMode(e)}destroy(){this._renderer=null,this._renderableList=null;for(let e in this._filterHash)this._filterHash[e].destroy();this._filterHash=null}};K.extension={type:[l.WebGLPipes,l.WebGPUPipes,l.CanvasPipes],name:"blendMode"};var Fe={png:"image/png",jpg:"image/jpeg",webp:"image/webp"},Le=class ft{constructor(e){this._renderer=e}_normalizeOptions(e,t={}){return e instanceof v||e instanceof p?h({target:e},t):h(h({},t),e)}image(e){return T(this,null,function*(){let t=new Image;return t.src=yield this.base64(e),t})}base64(e){return T(this,null,function*(){e=this._normalizeOptions(e,ft.defaultImageOptions);let{format:t,quality:r}=e,n=this.canvas(e);if(n.toBlob!==void 0)return new Promise((i,o)=>{n.toBlob(u=>{if(!u){o(new Error("ICanvas.toBlob failed!"));return}let a=new FileReader;a.onload=()=>i(a.result),a.onerror=o,a.readAsDataURL(u)},Fe[t],r)});if(n.toDataURL!==void 0)return n.toDataURL(Fe[t],r);if(n.convertToBlob!==void 0){let i=yield n.convertToBlob({type:Fe[t],quality:r});return new Promise((o,u)=>{let a=new FileReader;a.onload=()=>o(a.result),a.onerror=u,a.readAsDataURL(i)})}throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")})}canvas(e){e=this._normalizeOptions(e);let t=e.target,r=this._renderer;if(t instanceof p)return r.texture.generateCanvas(t);let n=r.textureGenerator.generateTexture(e),i=r.texture.generateCanvas(n);return n.destroy(),i}pixels(e){e=this._normalizeOptions(e);let t=e.target,r=this._renderer,n=t instanceof p?t:r.textureGenerator.generateTexture(e),i=r.texture.getPixels(n);return t instanceof v&&n.destroy(),i}texture(e){return e=this._normalizeOptions(e),e.target instanceof p?e.target:this._renderer.textureGenerator.generateTexture(e)}download(e){e=this._normalizeOptions(e);let t=this.canvas(e),r=document.createElement("a");r.download=e.filename??"image.png",r.href=t.toDataURL("image/png"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}log(e){let t=e.width??200;e=this._normalizeOptions(e);let r=this.canvas(e),n=r.toDataURL();console.log(`[Pixi Texture] ${r.width}px ${r.height}px`);let i=["font-size: 1px;",`padding: ${t}px 300px;`,`background: url(${n}) no-repeat;`,"background-size: contain;"].join(" ");console.log("%c ",i)}destroy(){this._renderer=null}};Le.extension={type:[l.WebGLSystem,l.WebGPUSystem],name:"extract"};Le.defaultImageOptions={format:"png",quality:1};var pt=Le;var xe=class s extends p{static create(e){return new s({source:new b(e)})}resize(e,t,r){return this.source.resize(e,t,r),this}};var Ft=new w,Lt=new oe,Ht=[0,0,0,0],Y=class{constructor(e){this._renderer=e}generateTexture(e){e instanceof v&&(e={target:e,frame:void 0,textureSourceOptions:{},resolution:void 0});let t=e.resolution||this._renderer.resolution,r=e.antialias||this._renderer.view.antialias,n=e.target,i=e.clearColor;i?i=Array.isArray(i)&&i.length===4?i:_.shared.setValue(i).toArray():i=Ht;let o=e.frame?.copyTo(Ft)||je(n,Lt).rectangle;o.width=Math.max(o.width,1/t)|0,o.height=Math.max(o.height,1/t)|0;let u=xe.create(S(h({},e.textureSourceOptions),{width:o.width,height:o.height,resolution:t,antialias:r})),a=x.shared.translate(-o.x,-o.y);return this._renderer.render({container:n,transform:a,target:u,clearColor:i}),u.source.updateMipmaps(),u}destroy(){this._renderer=null}};Y.extension={type:[l.WebGLSystem,l.WebGPUSystem],name:"textureGenerator"};var X=class{constructor(e){this._stackIndex=0,this._globalUniformDataStack=[],this._uniformsPool=[],this._activeUniforms=[],this._bindGroupPool=[],this._activeBindGroups=[],this._renderer=e}reset(){this._stackIndex=0;for(let e=0;e<this._activeUniforms.length;e++)this._uniformsPool.push(this._activeUniforms[e]);for(let e=0;e<this._activeBindGroups.length;e++)this._bindGroupPool.push(this._activeBindGroups[e]);this._activeUniforms.length=0,this._activeBindGroups.length=0}start(e){this.reset(),this.push(e)}bind({size:e,projectionMatrix:t,worldTransformMatrix:r,worldColor:n,offset:i}){let o=this._renderer.renderTarget.renderTarget,u=this._stackIndex?this._globalUniformDataStack[this._stackIndex-1]:{projectionData:o,worldTransformMatrix:new x,worldColor:4294967295,offset:new Ne},a={projectionMatrix:t||this._renderer.renderTarget.projectionMatrix,resolution:e||o.size,worldTransformMatrix:r||u.worldTransformMatrix,worldColor:n||u.worldColor,offset:i||u.offset,bindGroup:null},d=this._uniformsPool.pop()||this._createUniforms();this._activeUniforms.push(d);let c=d.uniforms;c.uProjectionMatrix=a.projectionMatrix,c.uResolution=a.resolution,c.uWorldTransformMatrix.copyFrom(a.worldTransformMatrix),c.uWorldTransformMatrix.tx-=a.offset.x,c.uWorldTransformMatrix.ty-=a.offset.y,Xe(a.worldColor,c.uWorldColorAlpha,0),d.update();let f;this._renderer.renderPipes.uniformBatch?f=this._renderer.renderPipes.uniformBatch.getUniformBindGroup(d,!1):(f=this._bindGroupPool.pop()||new Ke,this._activeBindGroups.push(f),f.setResource(d,0)),a.bindGroup=f,this._currentGlobalUniformData=a}push(e){this.bind(e),this._globalUniformDataStack[this._stackIndex++]=this._currentGlobalUniformData}pop(){this._currentGlobalUniformData=this._globalUniformDataStack[--this._stackIndex-1],this._renderer.type===M.WEBGL&&this._currentGlobalUniformData.bindGroup.resources[0].update()}get bindGroup(){return this._currentGlobalUniformData.bindGroup}get uniformGroup(){return this._currentGlobalUniformData.bindGroup.resources[0]}_createUniforms(){return new ce({uProjectionMatrix:{value:new x,type:"mat3x3<f32>"},uWorldTransformMatrix:{value:new x,type:"mat3x3<f32>"},uWorldColorAlpha:{value:new Float32Array(4),type:"vec4<f32>"},uResolution:{value:[0,0],type:"vec2<f32>"}},{isStatic:!0})}destroy(){this._renderer=null}};X.extension={type:[l.WebGLSystem,l.WebGPUSystem,l.CanvasSystem],name:"globalUniforms"};var zt=1,J=class{constructor(){this._tasks=[]}init(){ye.system.add(this._update,this)}repeat(e,t){let r=zt++;return this._tasks.push({func:e,duration:t,start:performance.now(),last:performance.now(),repeat:!0,id:r}),r}cancel(e){for(let t=0;t<this._tasks.length;t++)if(this._tasks[t].id===e){this._tasks.splice(t,1);return}}_update(){let e=performance.now();for(let t=0;t<this._tasks.length;t++){let r=this._tasks[t];if(e-r.last>=r.duration){let n=e-r.start;r.func(n),r.last=e}}}destroy(){ye.system.remove(this._update,this),this._tasks.length=0}};J.extension={type:[l.WebGLSystem,l.WebGPUSystem,l.CanvasSystem],name:"scheduler",priority:0};var mt=!1;function xt(s){if(!mt){if(le.get().getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){let e=[`%c  %c  %c  %c  %c PixiJS %c v${B} (${s}) http://www.pixijs.com/

`,"background: #E72264; padding:5px 0;","background: #6CA2EA; padding:5px 0;","background: #B5D33D; padding:5px 0;","background: #FED23F; padding:5px 0;","color: #FFFFFF; background: #E72264; padding:5px 0;","color: #E72264; background: #FFFFFF; padding:5px 0;"];globalThis.console.log(...e)}else globalThis.console&&globalThis.console.log(`PixiJS ${B} - ${s} - http://www.pixijs.com/`);mt=!0}}var E=class{constructor(e){this._renderer=e}init(e){if(e.hello){let t=this._renderer.name;this._renderer.type===M.WEBGL&&(t+=` ${this._renderer.context.webGLVersion}`),xt(t)}}};E.extension={type:[l.WebGLSystem,l.WebGPUSystem,l.CanvasSystem],name:"hello",priority:-2};E.defaultOptions={hello:!1};var He=class gt{constructor(e){this._managedRenderables=[],this._renderer=e}init(e){e=h(h({},gt.defaultOptions),e),this.maxUnusedTime=e.renderableGCMaxUnusedTime,this._frequency=e.renderableGCFrequency,this.enabled=e.renderableGCActive}get enabled(){return!!this._handler}set enabled(e){this.enabled!==e&&(e?this._handler=this._renderer.scheduler.repeat(()=>this.run(),this._frequency):this._renderer.scheduler.cancel(this._handler))}prerender(){this._now=performance.now()}addRenderable(e,t){this.enabled&&(e._lastUsed=this._now,e._lastInstructionTick===-1&&(this._managedRenderables.push(e),e.once("destroyed",this._removeRenderable,this)),e._lastInstructionTick=t.tick)}run(){let e=performance.now(),t=this._managedRenderables,r=this._renderer.renderPipes,n=0;for(let i=0;i<t.length;i++){let o=t[i];if(o===null){n++;continue}let a=(o.renderGroup??o.parentRenderGroup)?.instructionSet?.tick??-1;o._lastInstructionTick!==a&&e-o._lastUsed>this.maxUnusedTime?(o.destroyed||r[o.renderPipeId].destroyRenderable(o),o._lastInstructionTick=-1,n++,o.off("destroyed",this._removeRenderable,this)):t[i-n]=o}t.length=t.length-n}destroy(){this.enabled=!1,this._renderer=null,this._managedRenderables.length=0}_removeRenderable(e){let t=this._managedRenderables.indexOf(e);t>=0&&(e.off("destroyed",this._removeRenderable,this),this._managedRenderables[t]=null)}};He.extension={type:[l.WebGLSystem,l.WebGPUSystem],name:"renderableGC"};He.defaultOptions={renderableGCActive:!0,renderableGCMaxUnusedTime:6e4,renderableGCFrequency:3e4};var vt=He;var ze=class _t{constructor(e){this._renderer=e,this.count=0,this.checkCount=0}init(e){e=h(h({},_t.defaultOptions),e),this.checkCountMax=e.textureGCCheckCountMax,this.maxIdle=e.textureGCAMaxIdle??e.textureGCMaxIdle,this.active=e.textureGCActive}postrender(){this._renderer.renderingToScreen&&(this.count++,this.active&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))}run(){let e=this._renderer.texture.managedTextures;for(let t=0;t<e.length;t++){let r=e[t];r.autoGarbageCollect&&r.resource&&r._touched>-1&&this.count-r._touched>this.maxIdle&&(r._touched=-1,r.unload())}}destroy(){this._renderer=null}};ze.extension={type:[l.WebGLSystem,l.WebGPUSystem],name:"textureGC"};ze.defaultOptions={textureGCActive:!0,textureGCAMaxIdle:null,textureGCMaxIdle:60*60,textureGCCheckCountMax:600};var bt=ze;var Wt=(()=>{let s=class yt{constructor(t={}){if(this.uid=P("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,t=h(h({},yt.defaultOptions),t),this.stencil=t.stencil,this.depth=t.depth,this.isRoot=t.isRoot,typeof t.colorTextures=="number"){this._managedColorTextures=!0;for(let r=0;r<t.colorTextures;r++)this.colorTextures.push(new b({width:t.width,height:t.height,resolution:t.resolution,antialias:t.antialias}))}else{this.colorTextures=[...t.colorTextures.map(n=>n.source)];let r=this.colorTexture.source;this.resize(r.width,r.height,r._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(t.depthStencilTexture||this.stencil)&&(t.depthStencilTexture instanceof p||t.depthStencilTexture instanceof b?this.depthStencilTexture=t.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){let t=this._size;return t[0]=this.pixelWidth,t[1]=this.pixelHeight,t}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(t){this.resize(t.width,t.height,t._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new b({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(t,r,n=this.resolution,i=!1){this.dirtyId++,this.colorTextures.forEach((o,u)=>{i&&u===0||o.source.resize(t,r,n)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(t,r,n)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(t=>{t.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};return s.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1},s})(),Q=Wt;var Z=new Map;function ge(s,e){if(!Z.has(s)){let t=new p({source:new A(h({resource:s},e))}),r=()=>{Z.get(s)===t&&Z.delete(s)};t.once("destroy",r),t.source.once("destroy",r),Z.set(s,t)}return Z.get(s)}var We=class Tt{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(e){this.texture.source.autoDensity=e}get resolution(){return this.texture.source._resolution}set resolution(e){this.texture.source.resize(this.texture.source.width,this.texture.source.height,e)}init(e){e=h(h({},Tt.defaultOptions),e),e.view&&(ne(se,"ViewSystem.view has been renamed to ViewSystem.canvas"),e.canvas=e.view),this.screen=new w(0,0,e.width,e.height),this.canvas=e.canvas||le.get().createCanvas(),this.antialias=!!e.antialias,this.texture=ge(this.canvas,e),this.renderTarget=new Q({colorTextures:[this.texture],depth:!!e.depth,isRoot:!0}),this.texture.source.transparent=e.backgroundAlpha<1,this.resolution=e.resolution}resize(e,t,r){this.texture.source.resize(e,t,r),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(e=!1){(typeof e=="boolean"?e:!!e?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};We.extension={type:[l.WebGLSystem,l.WebGPUSystem,l.CanvasSystem],name:"view",priority:0};We.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};var kt=We;var hi=[ht,X,E,kt,z,bt,Y,pt,N,vt,J],fi=[K,Ue,W,L,V,$,j,F];var mi={name:"texture-bit",vertex:{header:`

        struct TextureUniforms {
            uTextureMatrix:mat3x3<f32>,
        }

        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;
        `,main:`
            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;

         
        `,main:`
            outColor = textureSample(uTexture, uSampler, vUV);
        `}},xi={name:"texture-bit",vertex:{header:`
            uniform mat3 uTextureMatrix;
        `,main:`
            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
        uniform sampler2D uTexture;

         
        `,main:`
            outColor = texture(uTexture, vUV);
        `}};var Ct=class{constructor(e){this._syncFunctionHash=Object.create(null),this._adaptor=e,this._systemCheck()}_systemCheck(){if(!fe())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}ensureUniformGroup(e){let t=this.getUniformGroupData(e);e.buffer||(e.buffer=new Te({data:new Float32Array(t.layout.size/4),usage:O.UNIFORM|O.COPY_DST}))}getUniformGroupData(e){return this._syncFunctionHash[e._signature]||this._initUniformGroup(e)}_initUniformGroup(e){let t=e._signature,r=this._syncFunctionHash[t];if(!r){let n=Object.keys(e.uniformStructures).map(u=>e.uniformStructures[u]),i=this._adaptor.createUboElements(n),o=this._generateUboSync(i.uboElements);r=this._syncFunctionHash[t]={layout:i,syncFunction:o}}return this._syncFunctionHash[t]}_generateUboSync(e){return this._adaptor.generateUboSync(e)}syncUniformGroup(e,t,r){let n=this.getUniformGroupData(e);return e.buffer||(e.buffer=new Te({data:new Float32Array(n.layout.size/4),usage:O.UNIFORM|O.COPY_DST})),t||(t=e.buffer.data),r||(r=0),n.syncFunction(e.uniforms,t,r),!0}updateUniformGroup(e){if(e.isStatic&&!e._dirtyId)return!1;e._dirtyId=0;let t=this.syncUniformGroup(e);return e.buffer.update(),t}destroy(){this._syncFunctionHash=null}};var wt=class extends I{constructor({buffer:e,offset:t,size:r}){super(),this.uid=P("buffer"),this._resourceType="bufferResource",this._touched=0,this._resourceId=P("resource"),this._bufferResource=!0,this.destroyed=!1,this.buffer=e,this.offset=t|0,this.size=r,this.buffer.on("change",this.onBufferChange,this)}onBufferChange(){this._resourceId=P("resource"),this.emit("change",this)}destroy(e=!1){this.destroyed=!0,e&&this.buffer.destroy(),this.emit("change",this),this.buffer=null}};function Pi(s,e){for(let t in s.attributes){let r=s.attributes[t],n=e[t];n?(r.format??(r.format=n.format),r.offset??(r.offset=n.offset),r.instance??(r.instance=n.instance)):ae(`Attribute ${t} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`)}Nt(s)}function Nt(s){let{buffers:e,attributes:t}=s,r={},n={};for(let i in e){let o=e[i];r[o.uid]=0,n[o.uid]=0}for(let i in t){let o=t[i];r[o.buffer.uid]+=ke(o.format).stride}for(let i in t){let o=t[i];o.stride??(o.stride=r[o.buffer.uid]),o.start??(o.start=n[o.buffer.uid]),n[o.buffer.uid]+=ke(o.format).stride}}var ee=[];ee[g.NONE]=void 0;ee[g.DISABLED]={stencilWriteMask:0,stencilReadMask:0};ee[g.RENDERING_MASK_ADD]={stencilFront:{compare:"equal",passOp:"increment-clamp"},stencilBack:{compare:"equal",passOp:"increment-clamp"}};ee[g.RENDERING_MASK_REMOVE]={stencilFront:{compare:"equal",passOp:"decrement-clamp"},stencilBack:{compare:"equal",passOp:"decrement-clamp"}};ee[g.MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:"equal",passOp:"keep"},stencilBack:{compare:"equal",passOp:"keep"}};function St(s,e,t,r,n,i){let o=i?1:-1;return s.identity(),s.a=1/r*2,s.d=o*(1/n*2),s.tx=-1-e*s.a,s.ty=-o-t*s.d,s}function Pt(s){let e=s.colorTexture.source.resource;return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement&&document.body.contains(e)}var Mt=class{constructor(e){this.rootViewPort=new w,this.viewport=new w,this.onRenderTargetChange=new R("onRenderTargetChange"),this.projectionMatrix=new x,this.defaultClearColor=[0,0,0,0],this._renderSurfaceToRenderTargetHash=new Map,this._gpuRenderTargetHash=Object.create(null),this._renderTargetStack=[],this._renderer=e}finishRenderPass(){this.adaptor.finishRenderPass(this.renderTarget)}renderStart({target:e,clear:t,clearColor:r,frame:n}){this._renderTargetStack.length=0,this.push(e,t,r,n),this.rootViewPort.copyFrom(this.viewport),this.rootRenderTarget=this.renderTarget,this.renderingToScreen=Pt(this.rootRenderTarget)}postrender(){this.adaptor.postrender?.(this.rootRenderTarget)}bind(e,t=!0,r,n){let i=this.getRenderTarget(e),o=this.renderTarget!==i;this.renderTarget=i,this.renderSurface=e;let u=this.getGpuRenderTarget(i);(i.pixelWidth!==u.width||i.pixelHeight!==u.height)&&(this.adaptor.resizeGpuRenderTarget(i),u.width=i.pixelWidth,u.height=i.pixelHeight);let a=i.colorTexture,d=this.viewport,c=a.pixelWidth,f=a.pixelHeight;if(!n&&e instanceof p&&(n=e.frame),n){let m=a._resolution;d.x=n.x*m+.5|0,d.y=n.y*m+.5|0,d.width=n.width*m+.5|0,d.height=n.height*m+.5|0}else d.x=0,d.y=0,d.width=c,d.height=f;return St(this.projectionMatrix,0,0,d.width/a.resolution,d.height/a.resolution,!i.isRoot),this.adaptor.startRenderPass(i,t,r,d),o&&this.onRenderTargetChange.emit(i),i}clear(e,t=y.ALL,r){t&&(e&&(e=this.getRenderTarget(e)),this.adaptor.clear(e||this.renderTarget,t,r,this.viewport))}contextChange(){this._gpuRenderTargetHash=Object.create(null)}push(e,t=y.ALL,r,n){let i=this.bind(e,t,r,n);return this._renderTargetStack.push({renderTarget:i,frame:n}),i}pop(){this._renderTargetStack.pop();let e=this._renderTargetStack[this._renderTargetStack.length-1];this.bind(e.renderTarget,!1,null,e.frame)}getRenderTarget(e){return e.isTexture&&(e=e.source),this._renderSurfaceToRenderTargetHash.get(e)??this._initRenderTarget(e)}copyToTexture(e,t,r,n,i){r.x<0&&(n.width+=r.x,i.x-=r.x,r.x=0),r.y<0&&(n.height+=r.y,i.y-=r.y,r.y=0);let{pixelWidth:o,pixelHeight:u}=e;return n.width=Math.min(n.width,o-r.x),n.height=Math.min(n.height,u-r.y),this.adaptor.copyToTexture(e,t,r,n,i)}ensureDepthStencil(){this.renderTarget.stencil||(this.renderTarget.stencil=!0,this.adaptor.startRenderPass(this.renderTarget,!1,null,this.viewport))}destroy(){this._renderer=null,this._renderSurfaceToRenderTargetHash.forEach((e,t)=>{e!==t&&e.destroy()}),this._renderSurfaceToRenderTargetHash.clear(),this._gpuRenderTargetHash=Object.create(null)}_initRenderTarget(e){let t=null;return A.test(e)&&(e=ge(e).source),e instanceof Q?t=e:e instanceof b&&(t=new Q({colorTextures:[e]}),A.test(e.source.resource)&&(t.isRoot=!0),e.once("destroy",()=>{t.destroy(),this._renderSurfaceToRenderTargetHash.delete(e);let r=this._gpuRenderTargetHash[t.uid];r&&(this._gpuRenderTargetHash[t.uid]=null,this.adaptor.destroyGpuRenderTarget(r))})),this._renderSurfaceToRenderTargetHash.set(e,t),t}getGpuRenderTarget(e){return this._gpuRenderTargetHash[e.uid]||(this._gpuRenderTargetHash[e.uid]=this.adaptor.initGpuRenderTarget(e))}};var te=[{type:"mat3x3<f32>",test:s=>s.value.a!==void 0,ubo:`
            var matrix = uv[name].toArray(true);
            data[offset] = matrix[0];
            data[offset + 1] = matrix[1];
            data[offset + 2] = matrix[2];
            data[offset + 4] = matrix[3];
            data[offset + 5] = matrix[4];
            data[offset + 6] = matrix[5];
            data[offset + 8] = matrix[6];
            data[offset + 9] = matrix[7];
            data[offset + 10] = matrix[8];
        `,uniform:`
            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));
        `},{type:"vec4<f32>",test:s=>s.type==="vec4<f32>"&&s.size===1&&s.value.width!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
            data[offset + 2] = v.width;
            data[offset + 3] = v.height;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {
                cv[0] = v.x;
                cv[1] = v.y;
                cv[2] = v.width;
                cv[3] = v.height;
                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);
            }
        `},{type:"vec2<f32>",test:s=>s.type==="vec2<f32>"&&s.size===1&&s.value.x!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y) {
                cv[0] = v.x;
                cv[1] = v.y;
                gl.uniform2f(ud[name].location, v.x, v.y);
            }
        `},{type:"vec4<f32>",test:s=>s.type==="vec4<f32>"&&s.size===1&&s.value.red!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
            data[offset + 3] = v.alpha;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                cv[3] = v.alpha;
                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);
            }
        `},{type:"vec3<f32>",test:s=>s.type==="vec3<f32>"&&s.size===1&&s.value.red!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);
            }
        `}];function qi(s,e,t,r){let n=[`
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
        var name = null;
        var arrayOffset = null;
    `],i=0;for(let u=0;u<s.length;u++){let a=s[u],d=a.data.name,c=!1,f=0;for(let m=0;m<te.length;m++)if(te[m].test(a.data)){f=a.offset/4,n.push(`name = "${d}";`,`offset += ${f-i};`,te[m][e]||te[m].ubo),c=!0;break}if(!c)if(a.data.size>1)f=a.offset/4,n.push(t(a,f-i));else{let m=r[a.data.type];f=a.offset/4,n.push(`
                    v = uv.${d};
                    offset += ${f-i};
                    ${m};
                `)}i=f}let o=n.join(`
`);return new Function("uv","data","offset",o)}function U(s,e){return`
        for (let i = 0; i < ${s*e}; i++) {
            data[offset + (((i / ${s})|0) * 4) + (i % ${s})] = v[i];
        }
    `}var Vt={f32:`
        data[offset] = v;`,i32:`
        data[offset] = v;`,"vec2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];`,"vec3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];`,"vec4<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];`,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 4] = v[2];
        data[offset + 5] = v[3];`,"mat3x3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];
        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];`,"mat4x4<f32>":`
        for (let i = 0; i < 16; i++) {
            data[offset + i] = v[i];
        }`,"mat3x2<f32>":U(3,2),"mat4x2<f32>":U(4,2),"mat2x3<f32>":U(2,3),"mat4x3<f32>":U(4,3),"mat2x4<f32>":U(2,4),"mat3x4<f32>":U(3,4)},Yi=S(h({},Vt),{"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];
    `});export{lt as a,y as b,or as c,mi as d,xi as e,B as f,Be as g,hi as h,fi as i,Ct as j,te as k,qi as l,Vt as m,Yi as n,wt as o,Pi as p,ee as q,Mt as r};
