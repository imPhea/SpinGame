System.register("chunks:///_virtual/AudioController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Sounds.ts"],(function(n){"use strict";var i,o,e,t,r,u,c,l,a,s;return{setters:[function(n){i=n.applyDecoratedDescriptor,o=n.inheritsLoose,e=n.initializerDefineProperty,t=n.assertThisInitialized},function(n){r=n.cclegacy,u=n._decorator,c=n.System,l=n.AudioSource,a=n.Component},function(n){s=n.default}],execute:function(){var f,p,d,S,y,m,h,b,g,v,F;r._RF.push({},"ac7fb8nFJ1BNrKX+dciT5z6","AudioController",void 0);var x=u.ccclass,z=u.property;c.Priority;n("default",(f=x("AudioController"),p=z(s),d=z(s),S=z(l),y=z(l),f((b=i((h=function(n){function i(){for(var i,o=arguments.length,r=new Array(o),u=0;u<o;u++)r[u]=arguments[u];return i=n.call.apply(n,[this].concat(r))||this,e(i,"musicSound",b,t(i)),e(i,"sfxSound",g,t(i)),e(i,"musicSource",v,t(i)),e(i,"sfxSource",F,t(i)),i}o(i,n);var r=i.prototype;return r.start=function(){this.PlaySFX("Bg")},r.update=function(n){},r.PlayMusic=function(n){var i=this.musicSound.find((function(i){return i.name==n}));null==i?console.log("Music Sound Not Found"):(this.musicSource.clip=i.clip,this.musicSource.play())},r.PlaySFX=function(n){var i=this.sfxSound.find((function(i){return i.name==n}));null==i?console.log("SFX Sound Not Found"):this.sfxSource.playOneShot(i.clip)},r.CoinSound=function(){this.PlaySFX("Coin")},i}(a)).prototype,"musicSound",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),g=i(h.prototype,"sfxSound",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),v=i(h.prototype,"musicSource",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=i(h.prototype,"sfxSource",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=h))||m));r._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,i,n,s,l,r,a,g,h,c,p,C,d,m,u,T;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,c=t.instantiate,p=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,T=t.Component}],execute:function(){var L,f,M,b,v,x,E,S,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(L=A("internal.DebugViewRuntimeControl"),f=y(r),M=y(r),b=y(r),L((E=e((x=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",E,n(e)),i(e,"singleModeToggle",S,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct TRT","Env TRT","TRT All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","TRT","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=c(s);l.parent=this.node,l.name="Buttons";var r=c(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var T=c(this.EnableAllCompositeModeButton.getChildByName("Label"));T.setPosition(i+(u>0?450:150),n,0),T.setScale(.75,.75,.75),T.parent=r;var L=T.getComponent(p);L.string=u?"----------Composite Mode----------":"----------Single Mode----------",L.color=a.WHITE,L.overflow=0,this.labelComponentList[this.labelComponentList.length]=L}n-=20;for(var f=0,M=0;M<this.strSingle.length;M++,f++){M===this.strSingle.length>>1&&(i+=200,f=0);var b=M?c(this.singleModeToggle):this.singleModeToggle;b.setPosition(i,n-20*f,0),b.setScale(.5,.5,.5),b.parent=this.singleModeToggle.parent;var v=b.getComponentInChildren(C);v.string=this.strSingle[M],this.textComponentList[this.textComponentList.length]=v,this.textContentList[this.textContentList.length]=v.string,b.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[M]=b}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var x=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=x;var E=c(this.EnableAllCompositeModeButton);E.setPosition(i+90,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.changeTextColor,this),E.parent=l,(x=E.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=x;var S=c(this.EnableAllCompositeModeButton);S.setPosition(i+200,n,0),S.setScale(.5,.5,.5),S.on(m.EventType.CLICK,this.hideUI,this),S.parent=this.node.parent,(x=S.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=x,this.hideButtonLabel=x,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=c(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?c(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(T)).prototype,"compositeModeToggle",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(x.prototype,"singleModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(x.prototype,"EnableAllCompositeModeButton",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=x))||v));s._RF.pop()}}}));

System.register("chunks:///_virtual/eykorban.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var r,n,i,o,t,u,l,c,s,a;return{setters:[function(e){r=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){t=e.cclegacy,u=e._decorator,l=e.SliderComponent,c=e.AudioSourceComponent,s=e.Slider,a=e.Component}],execute:function(){var d,p,S,h,m,f,b,y,g,v,C;t._RF.push({},"81b20SOu7ZGWIKcqA3672je","eykorban",void 0);var z=u.ccclass,_=u.property;e("eykorban",(d=z("eykorban"),p=_(l),S=_(l),h=_(c),m=_(c),d((y=r((b=function(e){function r(){for(var r,n=arguments.length,t=new Array(n),u=0;u<n;u++)t[u]=arguments[u];return r=e.call.apply(e,[this].concat(t))||this,i(r,"musicSlider",y,o(r)),i(r,"soundSlider",g,o(r)),i(r,"musicSource",v,o(r)),i(r,"soundSource",C,o(r)),r}n(r,e);var t=r.prototype;return t.start=function(){this.musicSlider.progress=this.musicSource.volume,this.soundSlider.progress=this.soundSource.volume,this.musicSlider.node.on(s.EventType.TOUCH_MOVE,this.onMusicSliderChange,this),this.soundSlider.node.on(s.EventType.TOUCH_MOVE,this.onSoundSliderChange,this)},t.onMusicSliderChange=function(e){this.musicSource.volume=e.getPercent()},t.onSoundSliderChange=function(e){this.soundSource.volume=e.getPercent()},r}(a)).prototype,"musicSlider",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=r(b.prototype,"soundSlider",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=r(b.prototype,"musicSource",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=r(b.prototype,"soundSource",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=b))||f));t._RF.pop()}}}));

System.register("chunks:///_virtual/Game.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Sounds.ts"],(function(i){"use strict";var t,e,n,o,s,r,a,l,h,u,c,p,m,C,g,b,S,f,k;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,n=i.initializerDefineProperty,o=i.assertThisInitialized},function(i){s=i.cclegacy,r=i._decorator,a=i.Node,l=i.AnimationComponent,h=i.Label,u=i.Sprite,c=i.SpriteFrame,p=i.Button,m=i.AudioSource,C=i.Tween,g=i.Vec3,b=i.game,S=i.director,f=i.Component},function(i){k=i.default}],execute:function(){var y,T,F,w,d,x,B,z,A,L,R,v,G,N,P,I,E,H,X,M,K,O,W,_,D,j,J,Q,V,q,U,Y,Z,$,ii,ti,ei,ni,oi,si,ri,ai,li,hi,ui,ci,pi,mi,Ci,gi,bi,Si,fi,ki,yi,Ti,Fi,wi,di,xi,Bi,zi,Ai,Li,Ri,vi,Gi,Ni,Pi,Ii,Ei,Hi,Xi,Mi,Ki,Oi,Wi,_i,Di,ji,Ji,Qi,Vi,qi,Ui,Yi,Zi,$i,it,tt,et,nt,ot,st,rt,at,lt,ht,ut,ct,pt,mt,Ct,gt,bt,St,ft;s._RF.push({},"11069fnnEJFwoDrtALI6yll","Game",void 0);var kt,yt=r.ccclass,Tt=r.property;!function(i){i[i.NONE=0]="NONE",i[i.TIGER=1]="TIGER",i[i.KLOK=2]="KLOK",i[i.FISH=3]="FISH",i[i.CHICKEN=4]="CHICKEN",i[i.CRAP=5]="CRAP",i[i.SHRIMP=6]="SHRIMP"}(kt||(kt={}));i("Game",(y=yt("Game"),T=Tt(a),F=Tt(l),w=Tt(l),d=Tt(h),x=Tt(u),B=Tt(u),z=Tt(u),A=Tt(u),L=Tt(u),R=Tt(u),v=Tt(c),G=Tt(c),N=Tt(u),P=Tt(u),I=Tt(u),E=Tt(u),H=Tt(u),X=Tt(u),M=Tt(c),K=Tt(c),O=Tt(h),W=Tt(h),_=Tt(h),D=Tt(h),j=Tt(h),J=Tt(h),Q=Tt(h),V=Tt(h),q=Tt(Number),U=Tt(p),Y=Tt(l),Z=Tt(l),$=Tt(l),ii=Tt(l),ti=Tt(l),ei=Tt(l),ni=Tt(l),oi=Tt(h),si=Tt(k),ri=Tt(k),ai=Tt(m),li=Tt(m),hi=Tt(u),ui=Tt(c),ci=Tt(c),pi=Tt(u),mi=Tt(c),Ci=Tt(c),gi=Tt(a),bi=Tt(a),Si=Tt(a),fi=Tt(a),y((Ti=t((yi=function(i){function t(){for(var t,e=arguments.length,s=new Array(e),r=0;r<e;r++)s[r]=arguments[r];return t=i.call.apply(i,[this].concat(s))||this,n(t,"wheel",Ti,o(t)),t.isSpinning=!1,t.spinResult=0,n(t,"WinAlert",Fi,o(t)),n(t,"AlertCoin",wi,o(t)),n(t,"timeText",di,o(t)),n(t,"tigerSpin",xi,o(t)),n(t,"klokSpin",Bi,o(t)),n(t,"fishSpin",zi,o(t)),n(t,"chickenSpin",Ai,o(t)),n(t,"crabSpin",Li,o(t)),n(t,"shrimpSpin",Ri,o(t)),n(t,"SpinNomaleSpriteFrame",vi,o(t)),n(t,"SpinResultSpriteFrame",Gi,o(t)),t.randomList=[],t.resultChoiceList=[],t.result=kt.SHRIMP,t.timeStart=0,t.timeAchive=!1,t.isRandom=!0,t.isTimeCount=!0,n(t,"tigerButton",Ni,o(t)),n(t,"klokButton",Pi,o(t)),n(t,"fishButton",Ii,o(t)),n(t,"chickenButton",Ei,o(t)),n(t,"crabButton",Hi,o(t)),n(t,"shrimpButton",Xi,o(t)),n(t,"buttonNomaleSpriteFrame",Mi,o(t)),n(t,"buttonResultSpriteFrame",Ki,o(t)),t.tigerChoice=void 0,t.tigerCoin=0,t.winCoin=0,t.klokChoice=void 0,t.klokCoin=0,n(t,"winCoinText",Oi,o(t)),t.fishChoice=void 0,t.fishCoin=0,t.chickenChoice=void 0,t.chickenCoin=0,t.crabChoice=void 0,t.crabCoin=0,t.shrimpChoice=void 0,t.shrimpCoin=0,n(t,"tigerCoinText",Wi,o(t)),n(t,"klokCoinText",_i,o(t)),n(t,"fishCoinText",Di,o(t)),n(t,"chickenCoinText",ji,o(t)),n(t,"crabCoinText",Ji,o(t)),n(t,"shrimpCoinText",Qi,o(t)),n(t,"totalCoinText",Vi,o(t)),n(t,"totalCoin",qi,o(t)),t.isGetChoice=!1,t.tigerTrueCoin=0,t.klokTrueCoin=0,t.fishTrueCoin=0,t.chickenTrueCoin=0,t.crabTrueCoin=0,t.shrimpTrueCoin=0,n(t,"spinButton",Ui,o(t)),n(t,"tigerAnimation",Yi,o(t)),n(t,"klokAnimation",Zi,o(t)),n(t,"fishAnimation",$i,o(t)),n(t,"chickenAnimation",it,o(t)),n(t,"crabAnimation",tt,o(t)),n(t,"shrimpAnimation",et,o(t)),n(t,"kkspinWheel",nt,o(t)),n(t,"guessCoinText",ot,o(t)),t.guessCoin=1e3,t.isOpen=!1,n(t,"musicSound",st,o(t)),n(t,"sfxSound",rt,o(t)),n(t,"musicSource",at,o(t)),n(t,"sfxSource",lt,o(t)),n(t,"sfxButtonSprite",ht,o(t)),n(t,"muteSfxButtonSpriteFrame",ut,o(t)),n(t,"sfxButtonSpriteFrame",ct,o(t)),n(t,"musicButtonSprite",pt,o(t)),n(t,"musicButtonSpriteFrame",mt,o(t)),n(t,"muteMusicButtonSpriteFrame",Ct,o(t)),t.state=!0,t.stack=!0,n(t,"gameScreen",gt,o(t)),n(t,"menuSceen",bt,o(t)),n(t,"gameController",St,o(t)),n(t,"gamesetting",ft,o(t)),t.isStart=!1,t}e(t,i);var s=t.prototype;return s.spinWheel=function(){var i=this;if(!this.isSpinning){this.spinResult=6e3+Math.floor(360*Math.random());var t=360*this.spinResult;new C(this.wheel).to(4,{eulerAngles:new g(0,0,t)}).call((function(){console.log("Spin result:",i.spinResult),i.isSpinning=!1})).start(),this.isSpinning=!0}},s.onLoad=function(){},s.start=function(){this.PlayMusic("Bg"),console.log("welcome to BauCua"),this.timeText.string=this.timeStart.toString(),this.totalCoinText.string=this.totalCoin.toString(),this.tigerCoinText.string=this.tigerCoin.toString(),this.klokCoinText.string=this.klokCoin.toString(),this.fishCoinText.string=this.fishCoin.toString(),this.chickenCoinText.string=this.chickenCoin.toString(),this.crabCoinText.string=this.crabCoin.toString(),this.shrimpCoinText.string=this.shrimpCoin.toString(),this.guessCoinText.string=this.guessCoin.toString()},s.update=function(i){var t=this;this.isStart&&(this.timeAchive&&(setTimeout((function(){t.timeStart-=i,t.timeText.string=Math.round(t.timeStart).toString()})),this.isTimeCount&&(this.TimeCountSoundEfect(),this.isTimeCount=!1)),this.timeStart<=0&&this.timeAchive&&(this.timeAchive=!1,this.isGetChoice=!1,this.isOpen=!1,this.ResultButtonChoiceImageChange(),this.CaculateGame(),this.EndGameAndStartNewGame()),this.timeStart<=10&&this.isRandom&&(this.isRandom=!1,this.StartingGameWithAnimation()))},s.RandomNumber=function(){this.randomList=[];for(var i=0;i<1;){i++;var t=Math.floor(6*Math.random());this.randomList.push(t)}for(var e=0;e<this.randomList.length;e++){switch(this.randomList[e]){case 0:this.result=kt.TIGER;break;case 1:this.result=kt.KLOK;break;case 2:this.result=kt.FISH;break;case 3:this.result=kt.CHICKEN;break;case 4:this.result=kt.CRAP;break;case 5:this.result=kt.SHRIMP}this.resultChoiceList.push(this.result)}console.log(this.randomList),console.log(this.randomList[2]),console.log("ResultList : "+this.resultChoiceList),console.log(this.resultChoiceList.length)},s.TigerButton=function(){this.isGetChoice&&this.totalCoin>0&&this.totalCoin>=this.guessCoin&&(this.PlaySFX("Coin"),this.tigerChoice=kt.TIGER,this.tigerCoin+=this.guessCoin,this.tigerCoinText.string=this.tigerCoin.toString(),this.totalCoin-=this.guessCoin,this.totalCoinText.string=this.totalCoin.toString())},s.KlokButton=function(){this.isGetChoice&&this.totalCoin>0&&this.totalCoin>=this.guessCoin&&(this.PlaySFX("Coin"),this.klokChoice=kt.KLOK,this.klokCoin+=this.guessCoin,this.klokCoinText.string=this.klokCoin.toString(),this.totalCoin-=this.guessCoin,this.totalCoinText.string=this.totalCoin.toString())},s.FishButton=function(){this.isGetChoice&&this.totalCoin>0&&this.totalCoin>=this.guessCoin&&(this.PlaySFX("Coin"),this.fishChoice=kt.FISH,this.fishCoin+=this.guessCoin,this.fishCoinText.string=this.fishCoin.toString(),this.totalCoin-=this.guessCoin,this.totalCoinText.string=this.totalCoin.toString())},s.ChickenButton=function(){this.isGetChoice&&this.totalCoin>0&&this.totalCoin>=this.guessCoin&&(this.PlaySFX("Coin"),this.chickenChoice=kt.CHICKEN,this.chickenCoin+=this.guessCoin,this.chickenCoinText.string=this.chickenCoin.toString(),this.totalCoin-=this.guessCoin,this.totalCoinText.string=this.totalCoin.toString())},s.CrabButton=function(){this.isGetChoice&&this.totalCoin>0&&this.totalCoin>=this.guessCoin&&(this.PlaySFX("Coin"),this.crabChoice=kt.CRAP,this.crabCoin+=this.guessCoin,this.crabCoinText.string=this.crabCoin.toString(),this.totalCoin-=this.guessCoin,this.totalCoinText.string=this.totalCoin.toString())},s.ShrimpButton=function(){this.isGetChoice&&this.totalCoin>0&&this.totalCoin>=this.guessCoin&&(this.PlaySFX("Coin"),this.shrimpChoice=kt.SHRIMP,this.shrimpCoin+=this.guessCoin,this.shrimpCoinText.string=this.shrimpCoin.toString(),this.totalCoin-=this.guessCoin,this.totalCoinText.string=this.totalCoin.toString())},s.CaculateGame=function(){for(var i=0;i<this.resultChoiceList.length;i++)this.resultChoiceList[i]==this.tigerChoice?(this.winCoin+=this.tigerCoin,this.tigerTrueCoin=this.tigerCoin):this.resultChoiceList[i]==this.klokChoice?(this.winCoin+=this.klokCoin,this.klokTrueCoin=this.klokCoin):this.resultChoiceList[i]==this.fishChoice?(this.winCoin+=this.fishCoin,this.fishTrueCoin=this.fishCoin):this.resultChoiceList[i]==this.chickenChoice?(this.winCoin+=this.chickenCoin,this.chickenTrueCoin=this.chickenCoin):this.resultChoiceList[i]==this.crabChoice?(this.winCoin+=this.crabCoin,this.crabTrueCoin=this.crabCoin):this.resultChoiceList[i]==this.shrimpChoice&&(this.winCoin+=this.shrimpCoin,this.shrimpTrueCoin=this.shrimpCoin);this.totalCoin=this.totalCoin+this.winCoin+this.tigerTrueCoin+this.klokTrueCoin+this.fishTrueCoin+this.chickenTrueCoin+this.crabTrueCoin+this.shrimpTrueCoin,this.totalCoinText.string=this.totalCoin.toString(),this.winCoinText.string=this.winCoin.toString()},s.ResetToDefualt=function(){this.tigerCoin=this.klokCoin=this.fishCoin=this.chickenCoin=this.crabCoin=this.shrimpCoin=0,this.tigerTrueCoin=this.klokTrueCoin=this.fishTrueCoin=this.chickenTrueCoin=this.crabTrueCoin=this.shrimpTrueCoin=0,this.winCoin=0,this.tigerChoice=this.klokChoice=this.fishChoice=this.chickenChoice=this.crabChoice=this.shrimpChoice=kt.NONE,this.tigerCoinText.string=this.klokCoinText.string=this.fishCoinText.string=this.chickenCoinText.string=this.crabCoinText.string=this.shrimpCoinText.string=this.winCoinText.string="0",this.tigerButton.spriteFrame=this.buttonNomaleSpriteFrame[0],this.klokButton.spriteFrame=this.buttonNomaleSpriteFrame[1],this.fishButton.spriteFrame=this.buttonNomaleSpriteFrame[2],this.chickenButton.spriteFrame=this.buttonNomaleSpriteFrame[3],this.crabButton.spriteFrame=this.buttonNomaleSpriteFrame[4],this.shrimpButton.spriteFrame=this.buttonNomaleSpriteFrame[5],this.tigerSpin.spriteFrame=this.SpinNomaleSpriteFrame[0],this.klokSpin.spriteFrame=this.SpinNomaleSpriteFrame[1],this.fishSpin.spriteFrame=this.SpinNomaleSpriteFrame[2],this.chickenSpin.spriteFrame=this.SpinNomaleSpriteFrame[3],this.crabSpin.spriteFrame=this.SpinNomaleSpriteFrame[4],this.shrimpSpin.spriteFrame=this.SpinNomaleSpriteFrame[5],this.tigerAnimation.play("t"),this.klokAnimation.play("t"),this.fishAnimation.play("t"),this.chickenAnimation.play("t"),this.crabAnimation.play("t"),this.shrimpAnimation.play("t")},s.SpinGame=function(){var i=this;this.spinButton.interactable=!1,this.PlaySFX("spin"),this.spinWheel(),setTimeout((function(){i.RandomNumber(),i.timeAchive=!0,i.isGetChoice=!0,i.isOpen=!0}),4e3)},s.StartingGameWithAnimation=function(){var i=this;setTimeout((function(){i.timeAchive=!1,i.isGetChoice=!0,i.isOpen=!0}),1e3)},s.EndGameAndStartNewGame=function(){var i=this;setTimeout((function(){i.ResultSpinChoiceImageChange(),setTimeout((function(){i.EndGameAndStartNewGame1(),i.spinButton.interactable=!0}),1e3)}))},s.EndGameAndStartNewGame1=function(){var i=this;this.PlaySFX("openCover"),setTimeout((function(){i.ResetToDefualt(),i.isRandom=!0,i.timeStart=0,i.randomList=[],i.resultChoiceList=[]}),1e3)},s.ResultButtonChoiceImageChange=function(){for(var i=0;i<this.resultChoiceList.length;i++)this.resultChoiceList[i]==kt.TIGER&&(this.tigerButton.spriteFrame=this.buttonResultSpriteFrame[0],this.tigerAnimation.play("tLoad")),this.resultChoiceList[i]==kt.KLOK&&(this.klokButton.spriteFrame=this.buttonResultSpriteFrame[1],this.klokAnimation.play("tLoad")),this.resultChoiceList[i]==kt.FISH&&(this.fishButton.spriteFrame=this.buttonResultSpriteFrame[2],this.fishAnimation.play("tLoad")),this.resultChoiceList[i]==kt.CHICKEN&&(this.chickenButton.spriteFrame=this.buttonResultSpriteFrame[3],this.chickenAnimation.play("tLoad")),this.resultChoiceList[i]==kt.CRAP&&(this.crabButton.spriteFrame=this.buttonResultSpriteFrame[4],this.crabAnimation.play("tLoad")),this.resultChoiceList[i]==kt.SHRIMP&&(this.shrimpButton.spriteFrame=this.buttonResultSpriteFrame[5],this.shrimpAnimation.play("tLoad"))},s.ResultSpinChoiceImageChange=function(){for(var i=0;i<this.resultChoiceList.length;i++)this.resultChoiceList[i]==kt.TIGER&&this.kkspinWheel.play("num1_stop"),this.resultChoiceList[i]==kt.KLOK&&this.kkspinWheel.play("num2_stop"),this.resultChoiceList[i]==kt.FISH&&this.kkspinWheel.play("num3_stop"),this.resultChoiceList[i]==kt.CHICKEN&&this.kkspinWheel.play("num4_stop"),this.resultChoiceList[i]==kt.CRAP&&this.kkspinWheel.play("num5_stop"),this.resultChoiceList[i]==kt.SHRIMP&&this.kkspinWheel.play("num6_stop")},s.IncreasGuessCoin=function(){this.guessCoin+=1e3,this.guessCoinText.string=this.guessCoin.toString()},s.DecreasGuessCoin=function(){this.guessCoin>1e3&&(this.guessCoin-=1e3,this.guessCoinText.string=this.guessCoin.toString())},s.OpenButton=function(){this.isOpen&&(this.tapSoundEfect(),this.timeAchive=!1,this.isGetChoice=!1,this.isOpen=!1,this.ResultButtonChoiceImageChange(),this.CaculateGame(),this.EndGameAndStartNewGame())},s.PlayMusic=function(i){var t=this.musicSound.find((function(t){return t.name==i}));null==t?console.log("Music Sound Not Found"):(this.musicSource.clip=t.clip,this.musicSource.play())},s.PlaySFX=function(i){var t=this.sfxSound.find((function(t){return t.name==i}));null==t?console.log("SFX Sound Not Found"):this.sfxSource.playOneShot(t.clip)},s.SFXButton=function(){this.PlaySFX("tap"),this.state=!this.state,this.state?(this.sfxSource.volume=1,this.sfxButtonSprite.spriteFrame=this.sfxButtonSpriteFrame):(this.sfxButtonSprite.spriteFrame=this.muteSfxButtonSpriteFrame,this.sfxSource.volume=0)},s.MusicButton=function(){this.PlaySFX("tap"),this.stack=!this.stack,this.stack?(this.musicButtonSprite.spriteFrame=this.musicButtonSpriteFrame,this.musicSource.volume=.2):(this.musicButtonSprite.spriteFrame=this.muteMusicButtonSpriteFrame,this.musicSource.volume=0)},s.tapSoundEfect=function(){this.PlaySFX("tap")},s.TimeCountSoundEfect=function(){var i=this;this.PlaySFX("time"),setTimeout((function(){i.isTimeCount=!0}),950)},s.PlayButton=function(){this.PlaySFX("tap"),this.isStart=!0,this.gameScreen.active=!0,this.menuSceen.active=!1,this.gameController.active=!0},s.StartGame=function(){this.PlaySFX("tap"),this.isStart=!1,this.gameScreen.active=!0,this.menuSceen.active=!1,this.gameController.active=!1},s.QuitButton=function(){this.PlaySFX("tap"),b.end()},s.HomeButton=function(){this.isStart=!0,this.PlaySFX("tap"),S.loadScene("LoadingScene")},s.Setting=function(){this.PlaySFX("tap"),this.gamesetting.setPosition(-464.293,42.658)},s.HiddenSetting=function(){this.PlaySFX("tap"),this.gamesetting.setPosition(8e4,932.136)},t}(f)).prototype,"wheel",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Fi=t(yi.prototype,"WinAlert",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),wi=t(yi.prototype,"AlertCoin",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),di=t(yi.prototype,"timeText",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),xi=t(yi.prototype,"tigerSpin",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Bi=t(yi.prototype,"klokSpin",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),zi=t(yi.prototype,"fishSpin",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ai=t(yi.prototype,"chickenSpin",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Li=t(yi.prototype,"crabSpin",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ri=t(yi.prototype,"shrimpSpin",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),vi=t(yi.prototype,"SpinNomaleSpriteFrame",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Gi=t(yi.prototype,"SpinResultSpriteFrame",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Ni=t(yi.prototype,"tigerButton",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Pi=t(yi.prototype,"klokButton",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ii=t(yi.prototype,"fishButton",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ei=t(yi.prototype,"chickenButton",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Hi=t(yi.prototype,"crabButton",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Xi=t(yi.prototype,"shrimpButton",[X],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Mi=t(yi.prototype,"buttonNomaleSpriteFrame",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Ki=t(yi.prototype,"buttonResultSpriteFrame",[K],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Oi=t(yi.prototype,"winCoinText",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Wi=t(yi.prototype,"tigerCoinText",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_i=t(yi.prototype,"klokCoinText",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Di=t(yi.prototype,"fishCoinText",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ji=t(yi.prototype,"chickenCoinText",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ji=t(yi.prototype,"crabCoinText",[J],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Qi=t(yi.prototype,"shrimpCoinText",[Q],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Vi=t(yi.prototype,"totalCoinText",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),qi=t(yi.prototype,"totalCoin",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1e4}}),Ui=t(yi.prototype,"spinButton",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Yi=t(yi.prototype,"tigerAnimation",[Y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Zi=t(yi.prototype,"klokAnimation",[Z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$i=t(yi.prototype,"fishAnimation",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),it=t(yi.prototype,"chickenAnimation",[ii],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),tt=t(yi.prototype,"crabAnimation",[ti],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),et=t(yi.prototype,"shrimpAnimation",[ei],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),nt=t(yi.prototype,"kkspinWheel",[ni],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ot=t(yi.prototype,"guessCoinText",[oi],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),st=t(yi.prototype,"musicSound",[si],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),rt=t(yi.prototype,"sfxSound",[ri],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),at=t(yi.prototype,"musicSource",[ai],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),lt=t(yi.prototype,"sfxSource",[li],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ht=t(yi.prototype,"sfxButtonSprite",[hi],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ut=t(yi.prototype,"muteSfxButtonSpriteFrame",[ui],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ct=t(yi.prototype,"sfxButtonSpriteFrame",[ci],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),pt=t(yi.prototype,"musicButtonSprite",[pi],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),mt=t(yi.prototype,"musicButtonSpriteFrame",[mi],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ct=t(yi.prototype,"muteMusicButtonSpriteFrame",[Ci],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),gt=t(yi.prototype,"gameScreen",[gi],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),bt=t(yi.prototype,"menuSceen",[bi],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),St=t(yi.prototype,"gameController",[Si],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ft=t(yi.prototype,"gamesetting",[fi],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ki=yi))||ki));s._RF.pop()}}}));

System.register("chunks:///_virtual/Loading.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,r,c;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.director,c=t.Component}],execute:function(){var i;n._RF.push({},"41c7a/eMqJOv7f5aCKZFRIS","Loading",void 0);var s=o.ccclass;o.property,t("Loading",s("Loading")(i=function(t){function n(){return t.apply(this,arguments)||this}return e(n,t),n.prototype.start=function(){setTimeout((function(){r.loadScene("Game")}),2e3)},n}(c))||i);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./AudioController.ts","./Game.ts","./Loading.ts","./SceneController.ts","./Sounds.ts","./Spin.ts","./eykorban.ts","./debug-view-runtime-control.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SceneController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,t,r,o,i,l,c,a,u,s;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,l=e._decorator,c=e.Node,a=e.game,u=e.director,s=e.Component}],execute:function(){var p,f,g,m,S,y,d,b,h;i._RF.push({},"89c3bFSlrdNu7BCeze9y+gC","SceneController",void 0);var v=l.ccclass,C=l.property;e("SceneController",(p=v("SceneController"),f=C(c),g=C(c),m=C(c),p((d=n((y=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return n=e.call.apply(e,[this].concat(i))||this,r(n,"gameScreen",d,o(n)),r(n,"menuSceen",b,o(n)),r(n,"gameController",h,o(n)),n}t(n,e);var i=n.prototype;return i.start=function(){},i.update=function(e){},i.PlayButton=function(){this.gameScreen.active=!0,this.menuSceen.active=!1,this.gameController.active=!0},i.QuitButton=function(){a.end()},i.HomeButton=function(){u.loadScene("LoadingScene")},n}(s)).prototype,"gameScreen",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=n(y.prototype,"menuSceen",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=n(y.prototype,"gameController",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=y))||S));i._RF.pop()}}}));

System.register("chunks:///_virtual/Sounds.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var i,t,r,n,o,c;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.initializerDefineProperty},function(e){r=e.cclegacy,n=e._decorator,o=e.System,c=e.AudioClip}],execute:function(){var u,l,s,a,p,f,d;r._RF.push({},"c9f60swfEJPeoNzTBP532r/","Sounds",void 0);var y=n.ccclass,g=n.property;o.Priority;e("default",(u=y("Sounds"),l=g(String),s=g(c),u((f=i((p=function(){t(this,"name",f,this),t(this,"clip",d,this)}).prototype,"name",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"gg"}}),d=i(p.prototype,"clip",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=p))||a));r._RF.pop()}}}));

System.register("chunks:///_virtual/Spin.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){"use strict";var e,n,t,r,l,o,a,u,s,c,p,b,h,g;return{setters:[function(i){e=i.applyDecoratedDescriptor,n=i.inheritsLoose,t=i.initializerDefineProperty,r=i.assertThisInitialized},function(i){l=i.cclegacy,o=i._decorator,a=i.Node,u=i.ButtonComponent,s=i.AnimationComponent,c=i.AudioClip,p=i.Button,b=i.Tween,h=i.Vec3,g=i.Component}],execute:function(){var f,d,y,S,w,m,M,k,z,B,C,A,v,R,E,L,W,_,N,D,P;l._RF.push({},"d4dabJoUbBExoaVPJEBGdn8","Spin",void 0);var x=o.ccclass,F=o.property;i("Spin",(f=x("Spin"),d=F(a),y=F(u),S=F(s),w=F(s),m=F(s),M=F(c),k=F(c),z=F(c),B=F(p),f((v=e((A=function(i){function e(){for(var e,n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return e=i.call.apply(i,[this].concat(l))||this,t(e,"wheel",v,r(e)),t(e,"buttonNode",R,r(e)),t(e,"AlertMessage",E,r(e)),t(e,"AlertCoin",L,r(e)),t(e,"LightEffect",W,r(e)),t(e,"SoundClick",_,r(e)),t(e,"BackgroundMusic",N,r(e)),t(e,"SoundWin",D,r(e)),e.isSpinning=!1,e.spinResult=0,t(e,"Spin1",P,r(e)),e}n(e,i);var l=e.prototype;return l.start=function(){this.BackgroundMusic.play(this.BackgroundMusic,this),this.buttonNode.on(a,this.spinWheel,this)},l.spinWheel=function(){var i=this;if(this.SoundClick.play(),!this.isSpinning){this.Spin1.interactable=!1,this.LightEffect.play("light-circle"),this.spinResult=1e4+Math.floor(360*Math.random());var e=60*this.spinResult;new b(this.wheel).to(2,{eulerAngles:new h(0,0,e)}).call((function(){console.log("Spin result:",i.spinResult),i.isSpinning=!1,i.AlertMessage.play("spin_alert"),i.AlertCoin.play("coin"),i.SoundClick.stop(),i.BackgroundMusic.stop(i.BackgroundMusic,i),i.SoundWin.play()})).start(),this.isSpinning=!0}},e}(g)).prototype,"wheel",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=e(A.prototype,"buttonNode",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(A.prototype,"AlertMessage",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=e(A.prototype,"AlertCoin",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=e(A.prototype,"LightEffect",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=e(A.prototype,"SoundClick",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=e(A.prototype,"BackgroundMusic",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=e(A.prototype,"SoundWin",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=e(A.prototype,"Spin1",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=A))||C));l._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});