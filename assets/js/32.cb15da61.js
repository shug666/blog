(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{369:function(t,i,e){},433:function(t,i,e){"use strict";e(369)},469:function(t,i,e){"use strict";e.r(i);var a={name:"particles",data:()=>({}),mounted(){this.init()},methods:{init(){let t=this.$refs.canvas,i=t.width=600,e=t.height=500,a=t.getContext("2d"),s={len:20,count:50,baseTime:10,addedTime:10,dieChance:.05,spawnChance:1,sparkChance:.1,sparkDist:10,sparkSize:2,color:"hsl(hue,100%,light%)",baseLight:50,addedLight:10,shadowToTimePropMult:6,baseLightInputMultiplier:.01,addedLightInputMultiplier:.02,cx:i/2,cy:e/2,repaintAlpha:.04,hueChange:.1},h=0,n=[],l=i/2/s.len,d=e/2/s.len,r=2*Math.PI/6;function o(){this.reset()}a.fillStyle="black",a.fillRect(0,0,i,e),o.prototype.reset=function(){this.x=0,this.y=0,this.addedX=0,this.addedY=0,this.rad=0,this.lightInputMultiplier=s.baseLightInputMultiplier+s.addedLightInputMultiplier*Math.random(),this.color=s.color.replace("hue",h*s.hueChange),this.cumulativeTime=0,this.beginPhase()},o.prototype.beginPhase=function(){this.x+=this.addedX,this.y+=this.addedY,this.time=0,this.targetTime=s.baseTime+s.addedTime*Math.random()|0,this.rad+=r*(Math.random()<.5?1:-1),this.addedX=Math.cos(this.rad),this.addedY=Math.sin(this.rad),(Math.random()<s.dieChance||this.x>l||this.x<-l||this.y>d||this.y<-d)&&this.reset()},o.prototype.step=function(){++this.time,++this.cumulativeTime,this.time>=this.targetTime&&this.beginPhase();var t=this.time/this.targetTime,i=Math.sin(t*Math.PI/2),e=this.addedX*i,h=this.addedY*i;a.shadowBlur=t*s.shadowToTimePropMult,a.fillStyle=a.shadowColor=this.color.replace("light",s.baseLight+s.addedLight*Math.sin(this.cumulativeTime*this.lightInputMultiplier)),a.fillRect(s.cx+(this.x+e)*s.len,s.cy+(this.y+h)*s.len,2,2),Math.random()<s.sparkChance&&a.fillRect(s.cx+(this.x+e)*s.len+Math.random()*s.sparkDist*(Math.random()<.5?1:-1)-s.sparkSize/2,s.cy+(this.y+h)*s.len+Math.random()*s.sparkDist*(Math.random()<.5?1:-1)-s.sparkSize/2,s.sparkSize,s.sparkSize)},function t(){window.requestAnimationFrame(t),++h,a.globalCompositeOperation="source-over",a.shadowBlur=0,a.fillStyle="rgba(0,0,0,alp)".replace("alp",s.repaintAlpha),a.fillRect(0,0,i,e),a.globalCompositeOperation="lighter",n.length<s.count&&Math.random()<s.spawnChance&&n.push(new o),n.map((function(t){t.step()}))}(),window.addEventListener("resize",(function(){i=t.width=window.innerWidth,e=t.height=window.innerHeight,a.fillStyle="black",a.fillRect(0,0,i,e),s.cx=i/2,s.cy=e/2,l=i/2/s.len,d=e/2/s.len}))}}},s=(e(433),e(0)),h=Object(s.a)(a,(function(){var t=this._self._c;return t("div",{staticClass:"particles"},[t("canvas",{ref:"canvas",staticStyle:{position:"absolute"},attrs:{id:"canvas"}})])}),[],!1,null,"41c8b014",null);i.default=h.exports}}]);