(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Dn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Jc(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ir={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},rr={duration:.5,overwrite:!1,delay:0},Eo,Pt,rt,Zt=1e8,He=1/Zt,$a=Math.PI*2,Ph=$a/4,Ih=0,Qc=Math.sqrt,Nh=Math.cos,Fh=Math.sin,bt=function(e){return typeof e=="string"},tt=function(e){return typeof e=="function"},zn=function(e){return typeof e=="number"},eu=function(e){return typeof e>"u"},xn=function(e){return typeof e=="object"},It=function(e){return e!==!1},tu=function(){return typeof window<"u"},ss=function(e){return tt(e)||bt(e)},nu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},St=Array.isArray,Ja=/(?:-?\.?\d|\.)+/gi,Oh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,iu=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ra=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Uh=/[+-]=-?[.\d]+/,ru=/[^,'"\[\]\s]+/gi,zh=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qe,qt,Qa,Ao,kt={},zs={},su,au=function(e){return(zs=Ri(e,kt))&&vn},ou=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Bs=function(e,t){return!t&&console.warn(e)},lu=function(e,t){return e&&(kt[e]=t)&&zs&&(zs[e]=t)||kt},Hr=function(){return 0},Bh={suppressEvents:!0,isStart:!0,kill:!1},Ds={suppressEvents:!0,kill:!1},kh={suppressEvents:!0},Co={},ii=[],eo={},cu,Yt={},sa={},tl=30,Ps=[],Ro="",Lo=function(e){var t=e[0],n,i;if(xn(t)||tt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ps.length;i--&&!Ps[i].targetTest(t););n=Ps[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new pd(e[i],n)))||e.splice(i,1);return e},Ur=function(e){return e._gsap||Lo($t(e))[0]._gsap},Vh=function(e,t,n){return(n=e[t])&&tt(n)?e[t]():eu(n)&&e.getAttribute&&e.getAttribute(t)||n},Vn=function(e,t){return(e=e.split(",")).forEach(t)||e},Gh=function(e){return Math.round(e*1e5)/1e5||0},_t=function(e){return Math.round(e*1e7)/1e7||0},uu=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Hh=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ks=function(){var e=ii.length,t=ii.slice(0),n,i;for(eo={},ii.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},hu=function(e,t,n,i){ii.length&&ks(),e.render(t,n,i||Pt&&t<0&&(e._initted||e._startAt)),ii.length&&ks()},du=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ru).length<2?t:bt(e)?e.trim():e},fu=function(e){return e},en=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Wh=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ri=function(e,t){for(var n in t)e[n]=t[n];return e},nl=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=xn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Vs=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},zr=function(e){var t=e.parent||Qe,n=e.keyframes?Wh(St(e.keyframes)):en;if(It(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},jh=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},pu=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Xs=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},ri=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Si=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},qh=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},to=function(e,t,n,i){return e._startAt&&(Pt?e._startAt.revert(Ds):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Xh=function s(e){return!e||e._ts&&s(e.parent)},il=function(e){return e._repeat?sr(e._tTime,e=e.duration()+e._rDelay)*e:0},sr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Gs=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ys=function(e){return e._end=_t(e._start+(e._tDur/Math.abs(e._ts||e._rts||He)||0))},Ks=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=_t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ys(e),n._dirty||Si(n,e)),e},mu=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Gs(e.rawTime(),t),(!t._dur||$r(0,t.totalDuration(),n)-t._tTime>He)&&t.render(n,!0)),Si(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-He}},mn=function(e,t,n,i){return t.parent&&ri(t),t._start=_t((zn(n)?n:n||e!==Qe?jt(e,n,t):e._time)+t._delay),t._end=_t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),pu(e,t,"_first","_last",e._sort?"_start":0),no(t)||(e._recent=t),i||mu(e,t),e._ts<0&&Ks(e,e._tTime),e},gu=function(e,t){return(kt.ScrollTrigger||ou("scrollTrigger",t))&&kt.ScrollTrigger.create(t,e)},_u=function(e,t,n,i,r){if(Io(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&cu!==cn.frame)return ii.push(e),e._lazy=[r,i],1},Yh=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},no=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Kh=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Yh(e)&&!(!e._initted&&no(e))||(e._ts<0||e._dp._ts<0)&&!no(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=$r(0,e._tDur,t),u=sr(l,o),e._yoyo&&u&1&&(a=1-a),u!==sr(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Pt||i||e._zTime===He||!t&&e._zTime){if(!e._initted&&_u(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?He:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&to(e,t,n,!0),e._onUpdate&&!n&&Jt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Jt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ri(e,1),!n&&!Pt&&(Jt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Zh=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ar=function(e,t,n,i){var r=e._repeat,a=_t(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:_t(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Ks(e,e._tTime=e._tDur*o),e.parent&&Ys(e),n||Si(e.parent,e),e},rl=function(e){return e instanceof Dt?Si(e):ar(e,e._dur)},$h={_start:0,endTime:Hr,totalDuration:Hr},jt=function s(e,t,n){var i=e.labels,r=e._recent||$h,a=e.duration()>=Zt?r.endTime(!1):e._dur,o,l,c;return bt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(St(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Br=function(e,t,n){var i=zn(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=It(l.vars.inherit)&&l.parent;a.immediateRender=It(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new lt(t[0],a,t[r+1])},oi=function(e,t){return e||e===0?t(e):t},$r=function(e,t,n){return n<e?e:n>t?t:n},si=function(e,t){return!bt(e)||!(t=zh.exec(e))?"":t[1]},Jh=function(e,t,n){return oi(n,function(i){return $r(e,t,i)})},io=[].slice,xu=function(e,t){return e&&xn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&xn(e[0]))&&!e.nodeType&&e!==qt},Qh=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return bt(i)&&!t||xu(i,1)?(r=n).push.apply(r,$t(i)):n.push(i)})||n},$t=function(e,t,n){return rt&&!t&&rt.selector?rt.selector(e):bt(e)&&!n&&(Qa||!or())?io.call((t||Ao).querySelectorAll(e),0):St(e)?Qh(e,n):xu(e)?io.call(e,0):e?[e]:[]},ro=function(e){return e=$t(e)[0]||Bs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return $t(t,n.querySelectorAll?n:n===e?Bs("Invalid scope")||Ao.createElement("div"):e)}},vu=function(e){return e.sort(function(){return .5-Math.random()})},yu=function(e){if(tt(e))return e;var t=xn(e)?e:{each:e},n=bi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return bt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,p,g){var m=(g||t).length,f=a[m],_,S,v,y,M,A,C,x,w;if(!f){if(w=t.grid==="auto"?0:(t.grid||[1,Zt])[1],!w){for(C=-Zt;C<(C=g[w++].getBoundingClientRect().left)&&w<m;);w--}for(f=a[m]=[],_=l?Math.min(w,m)*u-.5:i%w,S=w===Zt?0:l?m*h/w-.5:i/w|0,C=0,x=Zt,A=0;A<m;A++)v=A%w-_,y=S-(A/w|0),f[A]=M=c?Math.abs(c==="y"?y:v):Qc(v*v+y*y),M>C&&(C=M),M<x&&(x=M);i==="random"&&vu(f),f.max=C-x,f.min=x,f.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(w>m?m-1:c?c==="y"?m/w:w:Math.max(w,m/w))||0)*(i==="edges"?-1:1),f.b=m<0?r-m:r,f.u=si(t.amount||t.each)||0,n=n&&m<0?Au(n):n}return m=(f[d]-f.min)/f.max||0,_t(f.b+(n?n(m):m)*f.v)+f.u}},so=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=_t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(zn(n)?0:si(n))}},Mu=function(e,t){var n=St(e),i,r;return!n&&xn(e)&&(i=n=e.radius||Zt,e.values?(e=$t(e.values),(r=!zn(e[0]))&&(i*=i)):e=so(e.increment)),oi(t,n?tt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Zt,u=0,h=e.length,d,p;h--;)r?(d=e[h].x-o,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,r||u===a||zn(a)?u:u+si(a)}:so(e))},Su=function(e,t,n,i){return oi(St(e)?!t:n===!0?!!(n=0):!i,function(){return St(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ed=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},td=function(e,t){return function(n){return e(parseFloat(n))+(t||si(n))}},nd=function(e,t,n){return Tu(e,t,0,1,n)},bu=function(e,t,n){return oi(n,function(i){return e[~~t(i)]})},id=function s(e,t,n){var i=t-e;return St(e)?bu(e,s(0,e.length),t):oi(n,function(r){return(i+(r-e)%i)%i+e})},rd=function s(e,t,n){var i=t-e,r=i*2;return St(e)?bu(e,s(0,e.length-1),t):oi(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Do=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?ru:Ja),n+=e.substr(t,i-t)+Su(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Tu=function(e,t,n,i,r){var a=t-e,o=i-n;return oi(r,function(l){return n+((l-e)/a*o||0)})},sd=function s(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var a=bt(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(St(e)&&!St(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(g){g*=h;var m=Math.min(d,~~g);return u[m](g-m)},n=t}else i||(e=Ri(St(e)?[]:{},e));if(!u){for(l in t)Po.call(o,e,l,"get",t[l]);r=function(g){return Fo(g,o)||(a?e.p:e)}}}return oi(n,r)},sl=function(e,t,n){var i=e.labels,r=Zt,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Jt=function(e,t,n){var i=e.vars,r=i[t],a=rt,o=e._ctx,l,c,u;if(!!r)return l=i[t+"Params"],c=i.callbackScope||e,n&&ii.length&&ks(),o&&(rt=o),u=l?r.apply(c,l):r.call(c),rt=a,u},Ir=function(e){return ri(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Pt),e.progress()<1&&Jt(e,"onInterrupt"),e},Qi,ad=function(e){e=!e.name&&e.default||e;var t=e.name,n=tt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Hr,render:Fo,add:Po,kill:Ed,modifier:wd,rawVars:0},a={targetTest:0,get:0,getSetter:Iu,aliases:{},register:0};if(or(),e!==i){if(Yt[t])return;en(i,en(Vs(e,r),a)),Ri(i.prototype,Ri(r,Vs(e,a))),Yt[i.prop=t]=i,e.targetTest&&(Ps.push(i),Co[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}lu(t,i),e.register&&e.register(vn,i,gr)},je=255,Nr={aqua:[0,je,je],lime:[0,je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,je],navy:[0,0,128],white:[je,je,je],olive:[128,128,0],yellow:[je,je,0],orange:[je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[je,0,0],pink:[je,192,203],cyan:[0,je,je],transparent:[je,je,je,0]},aa=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*je+.5|0},wu=function(e,t,n){var i=e?zn(e)?[e>>16,e>>8&je,e&je]:0:Nr.black,r,a,o,l,c,u,h,d,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Nr[e])i=Nr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&je,i&je,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&je,e&je]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ja),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=aa(l+1/3,r,a),i[1]=aa(l,r,a),i[2]=aa(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Oh),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ja)||Nr.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/je,a=i[1]/je,o=i[2]/je,h=Math.max(r,a,o),d=Math.min(r,a,o),u=(h+d)/2,h===d?l=c=0:(p=h-d,c=u>.5?p/(2-h-d):p/(h+d),l=h===r?(a-o)/p+(a<o?6:0):h===a?(o-r)/p+2:(r-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Eu=function(e){var t=[],n=[],i=-1;return e.split(tr).forEach(function(r){var a=r.match(iu)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},al=function(e,t,n){var i="",r=(e+i).match(tr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=wu(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Eu(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(tr,"1").split(iu),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(tr),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},tr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Nr)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),od=/hsl[a]?\(/,ld=function(e){var t=e.join(" "),n;if(tr.lastIndex=0,tr.test(t))return n=od.test(t),e[1]=al(e[1],n),e[0]=al(e[0],n,Eu(e[1])),!0},Wr,cn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,d,p,g=function m(f){var _=s()-i,S=f===!0,v,y,M,A;if(_>e&&(n+=_-t),i+=_,M=i-n,v=M-a,(v>0||S)&&(A=++h.frame,d=M-h.time*1e3,h.time=M=M/1e3,a+=v+(v>=r?4:r-v),y=1),S||(l=c(m)),y)for(p=0;p<o.length;p++)o[p](M,d,A,f)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(f){return d/(1e3/(f||60))},wake:function(){su&&(!Qa&&tu()&&(qt=Qa=window,Ao=qt.document||{},kt.gsap=vn,(qt.gsapVersions||(qt.gsapVersions=[])).push(vn.version),au(zs||qt.GreenSockGlobals||!qt.gsap&&qt||{}),u=qt.requestAnimationFrame),l&&h.sleep(),c=u||function(f){return setTimeout(f,a-h.time*1e3+1|0)},Wr=1,g(2))},sleep:function(){(u?qt.cancelAnimationFrame:clearTimeout)(l),Wr=0,c=Hr},lagSmoothing:function(f,_){e=f||1/He,t=Math.min(_,e,0)},fps:function(f){r=1e3/(f||240),a=h.time*1e3+r},add:function(f,_,S){var v=_?function(y,M,A,C){f(y,M,A,C),h.remove(v)}:f;return h.remove(f),o[S?"unshift":"push"](v),or(),v},remove:function(f,_){~(_=o.indexOf(f))&&o.splice(_,1)&&p>=_&&p--},_listeners:o},h}(),or=function(){return!Wr&&cn.wake()},Ne={},cd=/^[\d.\-M][\d.\-,\s]/,ud=/["']/g,hd=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(ud,"").trim():+c,i=l.substr(o+1).trim();return t},dd=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},fd=function(e){var t=(e+"").split("("),n=Ne[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[hd(t[1])]:dd(e).split(",").map(du)):Ne._CE&&cd.test(e)?Ne._CE("",e):n},Au=function(e){return function(t){return 1-e(1-t)}},Cu=function s(e,t){for(var n=e._first,i;n;)n instanceof Dt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},bi=function(e,t){return e&&(tt(e)?e:Ne[e]||fd(e))||t},Pi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Vn(e,function(o){Ne[o]=kt[o]=r,Ne[a=o.toLowerCase()]=n;for(var l in r)Ne[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ne[o+"."+l]=r[l]}),r},Ru=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},oa=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/$a*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Fh((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Ru(o);return r=$a/r,l.config=function(c,u){return s(e,c,u)},l},la=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Ru(n);return i.config=function(r){return s(e,r)},i};Vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Pi(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ne.Linear.easeNone=Ne.none=Ne.Linear.easeIn;Pi("Elastic",oa("in"),oa("out"),oa());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Pi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Pi("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Pi("Circ",function(s){return-(Qc(1-s*s)-1)});Pi("Sine",function(s){return s===1?1:-Nh(s*Ph)+1});Pi("Back",la("in"),la("out"),la());Ne.SteppedEase=Ne.steps=kt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-He;return function(o){return((i*$r(0,a,o)|0)+r)*n}}};rr.ease=Ne["quad.out"];Vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ro+=s+","+s+"Params,"});var pd=function(e,t){this.id=Ih++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Vh,this.set=t?t.getSetter:Iu},lr=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ar(this,+t.duration,1,1),this.data=t.data,rt&&(this._ctx=rt,rt.data.push(this)),Wr||cn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ar(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(or(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ks(this,n),!r._dp||r.parent||mu(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===He||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hu(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+il(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+il(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?sr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-He?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Gs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-He?0:this._rts,this.totalTime($r(-this._delay,this._tDur,i),!0),Ys(this),qh(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(or(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==He&&(this._tTime-=He)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(It(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Gs(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=kh);var i=Pt;return Pt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Pt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,rl(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,rl(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(jt(this,n),It(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,It(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-He:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-He,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-He)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=tt(n)?n:fu,o=function(){var c=i.then;i.then=null,tt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Ir(this)},s}();en(lr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-He,_prom:0,_ps:!1,_rts:1});var Dt=function(s){Jc(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=It(n.sortChildren),Qe&&mn(n.parent||Qe,Dn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&gu(Dn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Br(0,arguments,this),this},t.from=function(i,r,a){return Br(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Br(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,zr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new lt(i,r,jt(this,a),1),this},t.call=function(i,r,a){return mn(this,lt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new lt(i,a,jt(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,zr(a).immediateRender=It(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,zr(o).immediateRender=It(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:_t(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,p,g,m,f,_,S,v,y,M,A,C;if(this!==Qe&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,y=this._start,v=this._ts,_=!v,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,f=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(f*100+i,r,a);if(d=_t(u%f),u===l?(m=this._repeat,d=c):(m=~~(u/f),m&&m===u/f&&(d=c,m--),d>c&&(d=c)),M=sr(this._tTime,f),!o&&this._tTime&&M!==m&&(M=m),A&&m&1&&(d=c-d,C=1),m!==M&&!this._lock){var x=A&&M&1,w=x===(A&&m&1);if(m<M&&(x=!x),o=x?0:c,this._lock=1,this.render(o||(C?0:_t(m*f)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Jt(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Cu(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Zh(this,_t(o),_t(d)),S&&(u-=d-(d=S._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!r&&(Jt(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,r,a),d!==this._time||!this._ts&&!_){S=0,g&&(u+=this._zTime=-He);break}}p=g}else{p=this._last;for(var I=i<0?i:d;p;){if(g=p._prev,(p._act||I<=p._end)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(I-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(I-p._start)*p._ts,r,a||Pt&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!_){S=0,g&&(u+=this._zTime=I?-He:He);break}}p=g}}if(S&&!r&&(this.pause(),S.render(d>=o?0:-He)._zTime=d>=o?1:-1,this._ts))return this._start=y,Ys(this),this.render(i,r,a);this._onUpdate&&!r&&Jt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ri(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(Jt(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(zn(r)||(r=jt(this,r,i)),!(i instanceof lr)){if(St(i))return i.forEach(function(o){return a.add(o,r)}),this;if(bt(i))return this.addLabel(i,r);if(tt(i))i=lt.delayedCall(0,i);else return this}return this!==i?mn(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Zt);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof lt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return bt(i)?this.removeLabel(i):tt(i)?this.killTweensOf(i):(Xs(this,i),i===this._recent&&(this._recent=this._last),Si(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_t(cn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=jt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=lt.delayedCall(0,r||Hr,a);return o.data="isPause",this._hasPause=1,mn(this,o,jt(this,i))},t.removePause=function(i){var r=this._first;for(i=jt(this,i);r;)r._start===i&&r.data==="isPause"&&ri(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ti!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=$t(i),l=this._first,c=zn(r),u;l;)l instanceof lt?Hh(l._targets,o)&&(c?(!ti||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=jt(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,p,g=lt.to(a,en({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||He,onStart:function(){if(a.pause(),!p){var f=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==f&&ar(g,f,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},r));return d?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,en({startAt:{time:jt(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),sl(this,jt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),sl(this,jt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+He)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Si(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Si(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=Zt,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,mn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;ar(a,a===Qe&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Qe._ts&&(hu(Qe,Gs(i,Qe)),cu=cn.frame),cn.frame>=tl){tl+=ir.autoSleep||120;var r=Qe._first;if((!r||!r._ts)&&ir.autoSleep&&cn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||cn.sleep()}}},e}(lr);en(Dt.prototype,{_lock:0,_hasPause:0,_forcing:0});var md=function(e,t,n,i,r,a,o){var l=new gr(this._pt,e,t,0,1,Td,null,r),c=0,u=0,h,d,p,g,m,f,_,S;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Do(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),d=n.match(ra)||[];h=ra.exec(i);)g=h[0],m=i.substring(c,h.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),g!==d[u++]&&(f=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:f,c:g.charAt(1)==="="?uu(f,g)-f:parseFloat(g)-f,m:p&&p<4?Math.round:0},c=ra.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Uh.test(i)||_)&&(l.e=0),this._pt=l,l},Po=function(e,t,n,i,r,a,o,l,c,u){tt(i)&&(i=i(r||0,e,a));var h=e[t],d=n!=="get"?n:tt(h)?c?e[t.indexOf("set")||!tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=tt(h)?c?Md:Pu:No,g;if(bt(i)&&(~i.indexOf("random(")&&(i=Do(i)),i.charAt(1)==="="&&(g=uu(d,i)+(si(d)||0),(g||g===0)&&(i=g))),!u||d!==i||ao)return!isNaN(d*i)&&i!==""?(g=new gr(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?bd:Nu,0,p),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&ou(t,i),md.call(this,e,t,d,i,p,l||ir.stringFilter,c))},gd=function(e,t,n,i,r){if(tt(e)&&(e=kr(e,r,t,n,i)),!xn(e)||e.style&&e.nodeType||St(e)||nu(e))return bt(e)?kr(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=kr(e[o],r,t,n,i);return a},_d=function(e,t,n,i,r,a){var o,l,c,u;if(Yt[e]&&(o=new Yt[e]).init(r,o.rawVars?t[e]:gd(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new gr(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Qi))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ti,ao,Io=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,d=i.runBackwards,p=i.yoyoEase,g=i.keyframes,m=i.autoRevert,f=e._dur,_=e._startAt,S=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:S,M=e._overwrite==="auto"&&!Eo,A=e.timeline,C,x,w,I,W,ee,O,D,z,X,Y,G,N;if(A&&(!g||!r)&&(r="none"),e._ease=bi(r,rr.ease),e._yEase=p?Au(bi(p===!0?r:p,rr.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!A&&!!i.runBackwards,!A||g&&!i.stagger){if(D=S[0]?Ur(S[0]).harness:0,G=D&&i[D.prop],C=Vs(i,Co),_&&(_._zTime<0&&_.progress(1),t<0&&d&&o&&!m?_.render(-1,!0):_.revert(d&&f?Ds:Bh),_._lazy=0),a){if(ri(e._startAt=lt.set(S,en({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:It(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,t<0&&(Pt||!o&&!m)&&e._startAt.revert(Ds),o&&f&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&f&&!_){if(t&&(o=!1),w=en({overwrite:!1,data:"isFromStart",lazy:o&&It(l),immediateRender:o,stagger:0,parent:v},C),G&&(w[D.prop]=G),ri(e._startAt=lt.set(S,w)),e._startAt._dp=0,t<0&&(Pt?e._startAt.revert(Ds):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,He,He);else if(!t)return}for(e._pt=e._ptCache=0,l=f&&It(l)||l&&!f,x=0;x<S.length;x++){if(W=S[x],O=W._gsap||Lo(S)[x]._gsap,e._ptLookup[x]=X={},eo[O.id]&&ii.length&&ks(),Y=y===S?x:y.indexOf(W),D&&(z=new D).init(W,G||C,e,Y,y)!==!1&&(e._pt=I=new gr(e._pt,W,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(U){X[U]=I}),z.priority&&(ee=1)),!D||G)for(w in C)Yt[w]&&(z=_d(w,C,e,Y,W,y))?z.priority&&(ee=1):X[w]=I=Po.call(e,W,w,"get",C[w],Y,y,0,i.stringFilter);e._op&&e._op[x]&&e.kill(W,e._op[x]),M&&e._pt&&(ti=e,Qe.killTweensOf(W,X,e.globalTime(t)),N=!e.parent,ti=0),e._pt&&l&&(eo[O.id]=1)}ee&&Cd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!N,g&&t<=0&&A.render(Zt,!0,!0)},xd=function(e,t,n,i,r,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,d;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(c=h[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return ao=1,e.vars[t]="+=0",Io(e,o),ao=0,1;l.push(c)}for(d=l.length;d--;)u=l[d],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Gh(n)+si(u.e)),u.b&&(u.b=c.s+si(u.b))},vd=function(e,t){var n=e[0]?Ur(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=Ri({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},yd=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(St(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},kr=function(e,t,n,i,r){return tt(e)?e.call(t,n,i,r):bt(e)&&~e.indexOf("random(")?Do(e):e},Lu=Ro+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Du={};Vn(Lu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Du[s]=1});var lt=function(s){Jc(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:zr(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,m=l.defaults,f=l.scrollTrigger,_=l.yoyoEase,S=i.parent||Qe,v=(St(n)||nu(n)?zn(n[0]):"length"in i)?[n]:$t(n),y,M,A,C,x,w,I,W;if(o._targets=v.length?Lo(v):Bs("GSAP target "+n+" not found. https://greensock.com",!ir.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||d||ss(c)||ss(u)){if(i=o.vars,y=o.timeline=new Dt({data:"nested",defaults:m||{},targets:S&&S.data==="nested"?S.vars.targets:v}),y.kill(),y.parent=y._dp=Dn(o),y._start=0,d||ss(c)||ss(u)){if(C=v.length,I=d&&yu(d),xn(d))for(x in d)~Lu.indexOf(x)&&(W||(W={}),W[x]=d[x]);for(M=0;M<C;M++)A=Vs(i,Du),A.stagger=0,_&&(A.yoyoEase=_),W&&Ri(A,W),w=v[M],A.duration=+kr(c,Dn(o),M,w,v),A.delay=(+kr(u,Dn(o),M,w,v)||0)-o._delay,!d&&C===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),y.to(w,A,I?I(M,w,v):0),y._ease=Ne.none;y.duration()?c=u=0:o.timeline=0}else if(g){zr(en(y.vars.defaults,{ease:"none"})),y._ease=bi(g.ease||i.ease||"none");var ee=0,O,D,z;if(St(g))g.forEach(function(X){return y.to(v,X,">")}),y.duration();else{A={};for(x in g)x==="ease"||x==="easeEach"||yd(x,g[x],A,g.easeEach);for(x in A)for(O=A[x].sort(function(X,Y){return X.t-Y.t}),ee=0,M=0;M<O.length;M++)D=O[M],z={ease:D.e,duration:(D.t-(M?O[M-1].t:0))/100*c},z[x]=D.v,y.to(v,z,ee),ee+=z.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return p===!0&&!Eo&&(ti=Dn(o),Qe.killTweensOf(v),ti=0),mn(S,Dn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===_t(S._time)&&It(h)&&Xh(Dn(o))&&S.data!=="nested")&&(o._tTime=-He,o.render(Math.max(0,-u)||0)),f&&gu(Dn(o),f),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-He&&!u?l:i<He?0:i,d,p,g,m,f,_,S,v,y;if(!c)Kh(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,v=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,r,a);if(d=_t(h%m),h===l?(g=this._repeat,d=c):(g=~~(h/m),g&&g===h/m&&(d=c,g--),d>c&&(d=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,d=c-d),f=sr(this._tTime,m),d===o&&!a&&this._initted)return this._tTime=h,this;g!==f&&(v&&this._yEase&&Cu(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(_t(m*g),!0).invalidate()._lock=0))}if(!this._initted){if(_u(this,u?i:d,a,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(d/c),this._from&&(this.ratio=S=1-S),d&&!o&&!r&&(Jt(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(S,p.d),p=p._next;v&&v.render(i<0?i:!d&&_?-He:v._dur*v._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&to(this,i,r,a),Jt(this,"onUpdate")),this._repeat&&g!==f&&this.vars.onRepeat&&!r&&this.parent&&Jt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&to(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ri(this,1),!r&&!(u&&!o)&&(h||o||_)&&(Jt(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o){Wr||cn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Io(this,l),c=this._ease(l/this._dur),xd(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(Ks(this,0),this.parent||pu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ir(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ti&&ti.vars.overwrite!==!0)._first||Ir(this),this.parent&&a!==this.timeline.totalDuration()&&ar(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?$t(i):o,c=this._ptLookup,u=this._pt,h,d,p,g,m,f,_;if((!r||r==="all")&&jh(o,l))return r==="all"&&(this._pt=0),Ir(this);for(h=this._op=this._op||[],r!=="all"&&(bt(r)&&(m={},Vn(r,function(S){return m[S]=1}),r=m),r=vd(o,r)),_=o.length;_--;)if(~l.indexOf(o[_])){d=c[_],r==="all"?(h[_]=r,g=d,p={}):(p=h[_]=h[_]||{},g=r);for(m in g)f=d&&d[m],f&&((!("kill"in f.d)||f.d.kill(m)===!0)&&Xs(this,f,"_pt"),delete d[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&u&&Ir(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Br(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Br(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Qe.killTweensOf(i,r,a)},e}(lr);en(lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vn("staggerTo,staggerFrom,staggerFromTo",function(s){lt[s]=function(){var e=new Dt,t=io.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var No=function(e,t,n){return e[t]=n},Pu=function(e,t,n){return e[t](n)},Md=function(e,t,n,i){return e[t](i.fp,n)},Sd=function(e,t,n){return e.setAttribute(t,n)},Iu=function(e,t){return tt(e[t])?Pu:eu(e[t])&&e.setAttribute?Sd:No},Nu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},bd=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Td=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Fo=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},wd=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},Ed=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Xs(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ad=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Cd=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},gr=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Nu,this.d=l||this,this.set=c||No,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Ad,this.m=n,this.mt=r,this.tween=i},s}();Vn(Ro+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Co[s]=1});kt.TweenMax=kt.TweenLite=lt;kt.TimelineLite=kt.TimelineMax=Dt;Qe=new Dt({sortChildren:!1,defaults:rr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ir.stringFilter=ld;var cr=[],Is={},Rd=[],ol=0,ca=function(e){return(Is[e]||Rd).map(function(t){return t()})},oo=function(){var e=Date.now(),t=[];e-ol>2&&(ca("matchMediaInit"),cr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=qt.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),ca("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),ol=e,ca("matchMedia"))},Fu=function(){function s(t,n){this.selector=n&&ro(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){tt(n)&&(r=i,i=n,n=tt);var a=this,o=function(){var c=rt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=ro(r)),rt=a,h=i.apply(a,arguments),tt(h)&&a._r.push(h),rt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===tt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=rt;rt=null,n(this),rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof lt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof lr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=cr.indexOf(this);~o&&cr.splice(o,1)}},e.revert=function(n){this.kill(n||{})},s}(),Ld=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){xn(n)||(n={matches:n});var a=new Fu(0,r||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=qt.matchMedia(n[c]),l&&(cr.indexOf(a)<0&&cr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(oo):l.addEventListener("change",oo)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Hs={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return ad(i)})},timeline:function(e){return new Dt(e)},getTweensOf:function(e,t){return Qe.getTweensOf(e,t)},getProperty:function(e,t,n,i){bt(e)&&(e=$t(e)[0]);var r=Ur(e||{}).get,a=n?fu:du;return n==="native"&&(n=""),e&&(t?a((Yt[t]&&Yt[t].get||r)(e,t,n,i)):function(o,l,c){return a((Yt[o]&&Yt[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=$t(e),e.length>1){var i=e.map(function(u){return vn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Yt[t],o=Ur(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Qi._pt=0,h.init(e,n?u+n:u,Qi,0,[e]),h.render(1,h),Qi._pt&&Fo(1,Qi)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=vn.to(e,Ri((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return Qe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=bi(e.ease,rr.ease)),nl(rr,e||{})},config:function(e){return nl(ir,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Yt[o]&&!kt[o]&&Bs(t+" effect requires "+o+" plugin.")}),sa[t]=function(o,l,c){return n($t(o),en(l||{},r),c)},a&&(Dt.prototype[t]=function(o,l,c){return this.add(sa[t](o,xn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ne[e]=bi(t)},parseEase:function(e,t){return arguments.length?bi(e,t):Ne},getById:function(e){return Qe.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Dt(e),i,r;for(n.smoothChildTiming=It(e.smoothChildTiming),Qe.remove(n),n._dp=0,n._time=n._tTime=Qe._time,i=Qe._first;i;)r=i._next,(t||!(!i._dur&&i instanceof lt&&i.vars.onComplete===i._targets[0]))&&mn(n,i,i._start-i._delay),i=r;return mn(Qe,n,0),n},context:function(e,t){return e?new Fu(e,t):rt},matchMedia:function(e){return new Ld(e)},matchMediaRefresh:function(){return cr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||oo()},addEventListener:function(e,t){var n=Is[e]||(Is[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Is[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:id,wrapYoyo:rd,distribute:yu,random:Su,snap:Mu,normalize:nd,getUnit:si,clamp:Jh,splitColor:wu,toArray:$t,selector:ro,mapRange:Tu,pipe:ed,unitize:td,interpolate:sd,shuffle:vu},install:au,effects:sa,ticker:cn,updateRoot:Dt.updateRoot,plugins:Yt,globalTimeline:Qe,core:{PropTween:gr,globals:lu,Tween:lt,Timeline:Dt,Animation:lr,getCache:Ur,_removeLinkedListItem:Xs,reverting:function(){return Pt},context:function(e){return e&&rt&&(rt.data.push(e),e._ctx=rt),rt},suppressOverwrites:function(e){return Eo=e}}};Vn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Hs[s]=lt[s]});cn.add(Dt.updateRoot);Qi=Hs.to({},{duration:0});var Dd=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Pd=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Dd(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},ua=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(bt(r)&&(l={},Vn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Pd(o,r)}}}},vn=Hs.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Pt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ua("roundProps",so),ua("modifiers"),ua("snap",Mu))||Hs;lt.version=Dt.version=vn.version="3.11.3";su=1;tu()&&or();Ne.Power0;Ne.Power1;Ne.Power2;Ne.Power3;Ne.Power4;Ne.Linear;Ne.Quad;Ne.Cubic;Ne.Quart;Ne.Quint;Ne.Strong;Ne.Elastic;Ne.Back;Ne.SteppedEase;Ne.Bounce;Ne.Sine;Ne.Expo;Ne.Circ;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jr="146",Id=0,ll=1,Nd=2,Ou=1,Fd=2,Fr=3,ai=0,Mt=1,Ut=2,gn=0,nr=1,cl=2,ul=3,hl=4,Od=5,Ji=100,Ud=101,zd=102,dl=103,fl=104,Bd=200,kd=201,Vd=202,Gd=203,Uu=204,zu=205,Hd=206,Wd=207,jd=208,qd=209,Xd=210,Yd=0,Kd=1,Zd=2,lo=3,$d=4,Jd=5,Qd=6,ef=7,Bu=0,tf=1,nf=2,On=0,rf=1,sf=2,af=3,of=4,lf=5,ku=300,ur=301,hr=302,co=303,uo=304,Zs=306,dr=1e3,Kt=1001,Ws=1002,Ke=1003,ho=1004,fo=1005,Ee=1006,Vu=1007,_r=1008,hn=1009,cf=1010,uf=1011,Gu=1012,hf=1013,ni=1014,Nn=1015,_n=1016,df=1017,ff=1018,Ti=1020,pf=1021,mf=1022,Rt=1023,gf=1024,_f=1025,wi=1026,Li=1027,xf=1028,vf=1029,yf=1030,Mf=1031,Sf=1033,ha=33776,da=33777,fa=33778,pa=33779,pl=35840,ml=35841,gl=35842,_l=35843,bf=36196,xl=37492,vl=37496,yl=37808,Ml=37809,Sl=37810,bl=37811,Tl=37812,wl=37813,El=37814,Al=37815,Cl=37816,Rl=37817,Ll=37818,Dl=37819,Pl=37820,Il=37821,Nl=36492,jr=2300,fr=2301,ma=2302,Fl=2400,Ol=2401,Ul=2402,Tf=2500,wf=1,Hu=2,Bn=3e3,Ce=3001,Qr=3200,Wu=3201,$s=0,Ef=1,Pn="srgb",xi="srgb-linear",ga=7680,Af=519,po=35044,mo="300 es",go=1035;class Gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zl=1234567;const Vr=Math.PI/180,qr=180/Math.PI;function un(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[s&255]+vt[s>>8&255]+vt[s>>16&255]+vt[s>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function Oo(s,e){return(s%e+e)%e}function Cf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Rf(s,e,t){return s!==e?(t-s)/(e-s):0}function Gr(s,e,t){return(1-t)*s+t*e}function Lf(s,e,t,n){return Gr(s,e,1-Math.exp(-t*n))}function Df(s,e=1){return e-Math.abs(Oo(s,e*2)-e)}function Pf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function If(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Nf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ff(s,e){return s+Math.random()*(e-s)}function Of(s){return s*(.5-Math.random())}function Uf(s){s!==void 0&&(zl=s);let e=zl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zf(s){return s*Vr}function Bf(s){return s*qr}function _o(s){return(s&s-1)===0&&s!==0}function ju(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function js(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function kf(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Vf=Object.freeze({__proto__:null,DEG2RAD:Vr,RAD2DEG:qr,generateUUID:un,clamp:Ct,euclideanModulo:Oo,mapLinear:Cf,inverseLerp:Rf,lerp:Gr,damp:Lf,pingpong:Df,smoothstep:Pf,smootherstep:If,randInt:Nf,randFloat:Ff,randFloatSpread:Of,seededRandom:Uf,degToRad:zf,radToDeg:Bf,isPowerOfTwo:_o,ceilPowerOfTwo:ju,floorPowerOfTwo:js,setQuaternionFromProperEuler:kf,normalize:qe,denormalize:Fn});class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],m=i[0],f=i[3],_=i[6],S=i[1],v=i[4],y=i[7],M=i[2],A=i[5],C=i[8];return r[0]=a*m+o*S+l*M,r[3]=a*f+o*v+l*A,r[6]=a*_+o*y+l*C,r[1]=c*m+u*S+h*M,r[4]=c*f+u*v+h*A,r[7]=c*_+u*y+h*C,r[2]=d*m+p*S+g*M,r[5]=d*f+p*v+g*A,r[8]=d*_+p*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(i*c-u*n)*m,e[2]=(o*n-i*a)*m,e[3]=d*m,e[4]=(u*t-i*l)*m,e[5]=(i*r-o*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*r+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function qu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ei(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const _a={[Pn]:{[xi]:Ei},[xi]:{[Pn]:Ns}},rn={legacyMode:!0,get workingColorSpace(){return xi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(_a[e]&&_a[e][t]!==void 0){const n=_a[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ot={r:0,g:0,b:0},sn={h:0,s:0,l:0},as={h:0,s:0,l:0};function xa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function os(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=xi){return this.r=e,this.g=t,this.b=n,rn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=xi){if(e=Oo(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xa(a,r,e+1/3),this.g=xa(a,r,e),this.b=xa(a,r,e-1/3)}return rn.toWorkingColorSpace(this,i),this}setStyle(e,t=Pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,rn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,rn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,rn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,rn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Pn){const n=Xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return rn.fromWorkingColorSpace(os(this,ot),e),Ct(ot.r*255,0,255)<<16^Ct(ot.g*255,0,255)<<8^Ct(ot.b*255,0,255)<<0}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xi){rn.fromWorkingColorSpace(os(this,ot),t);const n=ot.r,i=ot.g,r=ot.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xi){return rn.fromWorkingColorSpace(os(this,ot),t),e.r=ot.r,e.g=ot.g,e.b=ot.b,e}getStyle(e=Pn){return rn.fromWorkingColorSpace(os(this,ot),e),e!==Pn?`color(${e} ${ot.r} ${ot.g} ${ot.b})`:`rgb(${ot.r*255|0},${ot.g*255|0},${ot.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(sn),sn.h+=e,sn.s+=t,sn.l+=n,this.setHSL(sn.h,sn.s,sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(as);const n=Gr(sn.h,as.h,t),i=Gr(sn.s,as.s,t),r=Gr(sn.l,as.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}xe.NAMES=Xu;let zi;class Yu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=Xr("canvas")),zi.width=e.width,zi.height=e.height;const n=zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ei(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ei(t[n]/255)*255):t[n]=Ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ku{constructor(e=null){this.isSource=!0,this.uuid=un(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(va(i[a].image)):r.push(va(i[a]))}else r=va(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function va(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gf=0;class at extends Gn{constructor(e=at.DEFAULT_IMAGE,t=at.DEFAULT_MAPPING,n=Kt,i=Kt,r=Ee,a=_r,o=Rt,l=hn,c=1,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=un(),this.name="",this.source=new Ku(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dr:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dr:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}at.DEFAULT_IMAGE=null;at.DEFAULT_MAPPING=ku;class Xe{constructor(e=0,t=0,n=0,i=1){Xe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],m=l[2],f=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(p+1)/2,M=(_+1)/2,A=(u+d)/4,C=(h+m)/4,x=(g+f)/4;return v>y&&v>M?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=C/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=x/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=C/r,i=x/r),this.set(n,i,r,t),this}let S=Math.sqrt((f-g)*(f-g)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(h-m)/S,this.z=(d-u)/S,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ct extends Gn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new at(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ee,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ku(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zu extends at{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hf extends at{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wf extends ct{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const r=this.texture;this.texture=[];for(let a=0;a<n;a++)this.texture[a]=r.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class yn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],m=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==d||c!==p||u!==g){let f=1-o;const _=l*d+c*p+u*g+h*m,S=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const M=Math.sqrt(v),A=Math.atan2(M,_*S);f=Math.sin(f*A)/M,o=Math.sin(o*A)/M}const y=o*S;if(l=l*f+d*y,c=c*f+p*y,u=u*f+g*y,h=h*f+m*y,f===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-a*t,d=-r*t-a*n-o*i;return this.x=c*l+d*-r+u*-o-h*-a,this.y=u*l+d*-a+h*-r-c*-o,this.z=h*l+d*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new R,Bl=new yn;class xr{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)hi.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(hi)}else n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox),Ma.applyMatrix4(e.matrixWorld),this.union(Ma);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),ls.subVectors(this.max,wr),Bi.subVectors(e.a,wr),ki.subVectors(e.b,wr),Vi.subVectors(e.c,wr),Wn.subVectors(ki,Bi),jn.subVectors(Vi,ki),di.subVectors(Bi,Vi);let t=[0,-Wn.z,Wn.y,0,-jn.z,jn.y,0,-di.z,di.y,Wn.z,0,-Wn.x,jn.z,0,-jn.x,di.z,0,-di.x,-Wn.y,Wn.x,0,-jn.y,jn.x,0,-di.y,di.x,0];return!Sa(t,Bi,ki,Vi,ls)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,Bi,ki,Vi,ls))?!1:(cs.crossVectors(Wn,jn),t=[cs.x,cs.y,cs.z],Sa(t,Bi,ki,Vi,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return hi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new R,new R,new R,new R,new R,new R,new R,new R],hi=new R,Ma=new xr,Bi=new R,ki=new R,Vi=new R,Wn=new R,jn=new R,di=new R,wr=new R,ls=new R,cs=new R,fi=new R;function Sa(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){fi.fromArray(s,r);const o=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const jf=new xr,Er=new R,ba=new R;class vr{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Er,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(ba)),this.expandByPoint(Er.copy(e.center).sub(ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new R,Ta=new R,us=new R,qn=new R,wa=new R,hs=new R,Ea=new R;class Uo{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.direction).multiplyScalar(t).add(this.origin),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ta.copy(e).add(t).multiplyScalar(.5),us.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Ta);const r=e.distanceTo(t)*.5,a=-this.direction.dot(us),o=qn.dot(this.direction),l=-qn.dot(us),c=qn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const m=1/u;h*=m,d*=m,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(us).multiplyScalar(d).add(Ta),p}intersectSphere(e,t){En.subVectors(e.center,this.origin);const n=En.dot(this.direction),i=En.dot(En)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,i,r){wa.subVectors(t,e),hs.subVectors(n,e),Ea.crossVectors(wa,hs);let a=this.direction.dot(Ea),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);const l=o*this.direction.dot(hs.crossVectors(qn,hs));if(l<0)return null;const c=o*this.direction.dot(wa.cross(qn));if(c<0||l+c>a)return null;const u=-o*qn.dot(Ea);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,l,c,u,h,d,p,g,m,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=p,_[7]=g,_[11]=m,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,m=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,m=c*h;t[0]=d+m*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,m=c*h;t[0]=d-m*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,m=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+m,t[1]=l*h,t[5]=m*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,m=o*c;t[0]=l*u,t[4]=m-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-m*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,m=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+m,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qf,e,Xf)}lookAt(e,t,n){const i=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Xn.crossVectors(n,Ft),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Xn.crossVectors(n,Ft)),Xn.normalize(),ds.crossVectors(Ft,Xn),i[0]=Xn.x,i[4]=ds.x,i[8]=Ft.x,i[1]=Xn.y,i[5]=ds.y,i[9]=Ft.y,i[2]=Xn.z,i[6]=ds.z,i[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],m=n[6],f=n[10],_=n[14],S=n[3],v=n[7],y=n[11],M=n[15],A=i[0],C=i[4],x=i[8],w=i[12],I=i[1],W=i[5],ee=i[9],O=i[13],D=i[2],z=i[6],X=i[10],Y=i[14],G=i[3],N=i[7],U=i[11],Q=i[15];return r[0]=a*A+o*I+l*D+c*G,r[4]=a*C+o*W+l*z+c*N,r[8]=a*x+o*ee+l*X+c*U,r[12]=a*w+o*O+l*Y+c*Q,r[1]=u*A+h*I+d*D+p*G,r[5]=u*C+h*W+d*z+p*N,r[9]=u*x+h*ee+d*X+p*U,r[13]=u*w+h*O+d*Y+p*Q,r[2]=g*A+m*I+f*D+_*G,r[6]=g*C+m*W+f*z+_*N,r[10]=g*x+m*ee+f*X+_*U,r[14]=g*w+m*O+f*Y+_*Q,r[3]=S*A+v*I+y*D+M*G,r[7]=S*C+v*W+y*z+M*N,r[11]=S*x+v*ee+y*X+M*U,r[15]=S*w+v*O+y*Y+M*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],m=e[7],f=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*p-n*l*p)+m*(+t*l*p-t*c*d+r*a*d-i*a*p+i*c*u-r*l*u)+f*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+_*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],m=e[13],f=e[14],_=e[15],S=h*f*c-m*d*c+m*l*p-o*f*p-h*l*_+o*d*_,v=g*d*c-u*f*c-g*l*p+a*f*p+u*l*_-a*d*_,y=u*m*c-g*h*c+g*o*p-a*m*p-u*o*_+a*h*_,M=g*h*l-u*m*l-g*o*d+a*m*d+u*o*f-a*h*f,A=t*S+n*v+i*y+r*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=S*C,e[1]=(m*d*r-h*f*r-m*i*p+n*f*p+h*i*_-n*d*_)*C,e[2]=(o*f*r-m*l*r+m*i*c-n*f*c-o*i*_+n*l*_)*C,e[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*p-n*l*p)*C,e[4]=v*C,e[5]=(u*f*r-g*d*r+g*i*p-t*f*p-u*i*_+t*d*_)*C,e[6]=(g*l*r-a*f*r-g*i*c+t*f*c+a*i*_-t*l*_)*C,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*p+t*l*p)*C,e[8]=y*C,e[9]=(g*h*r-u*m*r-g*n*p+t*m*p+u*n*_-t*h*_)*C,e[10]=(a*m*r-g*o*r+g*n*c-t*m*c-a*n*_+t*o*_)*C,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*C,e[12]=M*C,e[13]=(u*m*i-g*h*i+g*n*d-t*m*d-u*n*f+t*h*f)*C,e[14]=(g*o*i-a*m*i-g*n*l+t*m*l+a*n*f-t*o*f)*C,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,g=r*h,m=a*u,f=a*h,_=o*h,S=l*c,v=l*u,y=l*h,M=n.x,A=n.y,C=n.z;return i[0]=(1-(m+_))*M,i[1]=(p+y)*M,i[2]=(g-v)*M,i[3]=0,i[4]=(p-y)*A,i[5]=(1-(d+_))*A,i[6]=(f+S)*A,i[7]=0,i[8]=(g+v)*C,i[9]=(f-S)*C,i[10]=(1-(d+m))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Gi.set(i[0],i[1],i[2]).length();const a=Gi.set(i[4],i[5],i[6]).length(),o=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],an.copy(this);const c=1/r,u=1/a,h=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,t.setFromRotationMatrix(an),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),h=(t+e)*l,d=(n+i)*c,p=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gi=new R,an=new Me,qf=new R(0,0,0),Xf=new R(1,1,1),Xn=new R,ds=new R,Ft=new R,kl=new Me,Vl=new yn;class es{constructor(e=0,t=0,n=0,i=es.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}es.DefaultOrder="XYZ";es.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class $u{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yf=0;const Gl=new R,Hi=new yn,An=new Me,fs=new R,Ar=new R,Kf=new R,Zf=new yn,Hl=new R(1,0,0),Wl=new R(0,1,0),jl=new R(0,0,1),$f={type:"added"},ql={type:"removed"};class Je extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DefaultUp.clone();const e=new R,t=new es,n=new yn,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new zt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Je.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Je.DefaultMatrixWorldAutoUpdate,this.layers=new $u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(Hl,e)}rotateY(e){return this.rotateOnAxis(Wl,e)}rotateZ(e){return this.rotateOnAxis(jl,e)}translateOnAxis(e,t){return Gl.copy(e).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hl,e)}translateY(e){return this.translateOnAxis(Wl,e)}translateZ(e){return this.translateOnAxis(jl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fs.copy(e):fs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Ar,fs,this.up):An.lookAt(fs,Ar,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(An),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($f)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ql)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ql)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Je.DefaultUp=new R(0,1,0);Je.DefaultMatrixAutoUpdate=!0;Je.DefaultMatrixWorldAutoUpdate=!0;const on=new R,Cn=new R,Aa=new R,Rn=new R,Wi=new R,ji=new R,Xl=new R,Ca=new R,Ra=new R,La=new R;class In{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),on.subVectors(e,t),i.cross(on);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){on.subVectors(i,t),Cn.subVectors(n,t),Aa.subVectors(e,t);const a=on.dot(on),o=on.dot(Cn),l=on.dot(Aa),c=Cn.dot(Cn),u=Cn.dot(Aa),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Rn),Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Rn),l.set(0,0),l.addScaledVector(r,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l}static isFrontFacing(e,t,n,i){return on.subVectors(n,t),Cn.subVectors(e,t),on.cross(Cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),on.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return In.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Wi.subVectors(i,n),ji.subVectors(r,n),Ca.subVectors(e,n);const l=Wi.dot(Ca),c=ji.dot(Ca);if(l<=0&&c<=0)return t.copy(n);Ra.subVectors(e,i);const u=Wi.dot(Ra),h=ji.dot(Ra);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Wi,a);La.subVectors(e,r);const p=Wi.dot(La),g=ji.dot(La);if(g>=0&&p<=g)return t.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ji,o);const f=u*g-p*h;if(f<=0&&h-u>=0&&p-g>=0)return Xl.subVectors(r,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Xl,o);const _=1/(f+m+d);return a=m*_,o=d*_,t.copy(n).addScaledVector(Wi,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Jf=0;class Qt extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=un(),this.name="",this.type="Material",this.blending=nr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Uu,this.blendDst=zu,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ga,this.stencilZFail=ga,this.stencilZPass=ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vi extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new R,ps=new ge;class st{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=po,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array),r=qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==po&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ju extends st{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qu extends st{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Un extends st{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qf=0;const Wt=new Me,Da=new Je,qi=new R,Ot=new xr,Cr=new xr,pt=new R;class tn extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qu(e)?Qu:Ju)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Ot.min,Cr.min),Ot.expandByPoint(pt),pt.addVectors(Ot.max,Cr.max),Ot.expandByPoint(pt)):(Ot.expandByPoint(Cr.min),Ot.expandByPoint(Cr.max))}Ot.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pt.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(e,c),pt.add(qi)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new st(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new R,u[I]=new R;const h=new R,d=new R,p=new R,g=new ge,m=new ge,f=new ge,_=new R,S=new R;function v(I,W,ee){h.fromArray(i,I*3),d.fromArray(i,W*3),p.fromArray(i,ee*3),g.fromArray(a,I*2),m.fromArray(a,W*2),f.fromArray(a,ee*2),d.sub(h),p.sub(h),m.sub(g),f.sub(g);const O=1/(m.x*f.y-f.x*m.y);!isFinite(O)||(_.copy(d).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(O),S.copy(p).multiplyScalar(m.x).addScaledVector(d,-f.x).multiplyScalar(O),c[I].add(_),c[W].add(_),c[ee].add(_),u[I].add(S),u[W].add(S),u[ee].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let I=0,W=y.length;I<W;++I){const ee=y[I],O=ee.start,D=ee.count;for(let z=O,X=O+D;z<X;z+=3)v(n[z+0],n[z+1],n[z+2])}const M=new R,A=new R,C=new R,x=new R;function w(I){C.fromArray(r,I*3),x.copy(C);const W=c[I];M.copy(W),M.sub(C.multiplyScalar(C.dot(W))).normalize(),A.crossVectors(x,W);const O=A.dot(u[I])<0?-1:1;l[I*4]=M.x,l[I*4+1]=M.y,l[I*4+2]=M.z,l[I*4+3]=O}for(let I=0,W=y.length;I<W;++I){const ee=y[I],O=ee.start,D=ee.count;for(let z=O,X=O+D;z<X;z+=3)w(n[z+0]),w(n[z+1]),w(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new st(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),m=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,f),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,f=l.length;m<f;m++){o.isInterleavedBufferAttribute?p=l[m]*o.data.stride+o.offset:p=l[m]*u;for(let _=0;_<u;_++)d[g++]=c[p++]}return new st(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yl=new Me,Xi=new Uo,Pa=new vr,Yn=new R,Kn=new R,Zn=new R,Ia=new R,Na=new R,Fa=new R,ms=new R,gs=new R,_s=new R,xs=new ge,vs=new ge,ys=new ge,Oa=new R,Ms=new R;class Bt extends Je{constructor(e=new tn,t=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(r),e.ray.intersectsSphere(Pa)===!1)||(Yl.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(Yl),n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const _=p[m],S=i[_.materialIndex],v=Math.max(_.start,g.start),y=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let M=v,A=y;M<A;M+=3){const C=o.getX(M),x=o.getX(M+1),w=o.getX(M+2);a=Ss(this,S,e,Xi,l,c,u,h,d,C,x,w),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),f=Math.min(o.count,g.start+g.count);for(let _=m,S=f;_<S;_+=3){const v=o.getX(_),y=o.getX(_+1),M=o.getX(_+2);a=Ss(this,i,e,Xi,l,c,u,h,d,v,y,M),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const _=p[m],S=i[_.materialIndex],v=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=v,A=y;M<A;M+=3){const C=M,x=M+1,w=M+2;a=Ss(this,S,e,Xi,l,c,u,h,d,C,x,w),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let _=m,S=f;_<S;_+=3){const v=_,y=_+1,M=_+2;a=Ss(this,i,e,Xi,l,c,u,h,d,v,y,M),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function ep(s,e,t,n,i,r,a,o){let l;if(e.side===Mt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side!==Ut,o),l===null)return null;Ms.copy(o),Ms.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ms);return c<t.near||c>t.far?null:{distance:c,point:Ms.clone(),object:s}}function Ss(s,e,t,n,i,r,a,o,l,c,u,h){Yn.fromBufferAttribute(i,c),Kn.fromBufferAttribute(i,u),Zn.fromBufferAttribute(i,h);const d=s.morphTargetInfluences;if(r&&d){ms.set(0,0,0),gs.set(0,0,0),_s.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const f=d[g],_=r[g];f!==0&&(Ia.fromBufferAttribute(_,c),Na.fromBufferAttribute(_,u),Fa.fromBufferAttribute(_,h),a?(ms.addScaledVector(Ia,f),gs.addScaledVector(Na,f),_s.addScaledVector(Fa,f)):(ms.addScaledVector(Ia.sub(Yn),f),gs.addScaledVector(Na.sub(Kn),f),_s.addScaledVector(Fa.sub(Zn),f)))}Yn.add(ms),Kn.add(gs),Zn.add(_s)}s.isSkinnedMesh&&(s.boneTransform(c,Yn),s.boneTransform(u,Kn),s.boneTransform(h,Zn));const p=ep(s,e,t,n,Yn,Kn,Zn,Oa);if(p){o&&(xs.fromBufferAttribute(o,c),vs.fromBufferAttribute(o,u),ys.fromBufferAttribute(o,h),p.uv=In.getUV(Oa,Yn,Kn,Zn,xs,vs,ys,new ge)),l&&(xs.fromBufferAttribute(l,c),vs.fromBufferAttribute(l,u),ys.fromBufferAttribute(l,h),p.uv2=In.getUV(Oa,Yn,Kn,Zn,xs,vs,ys,new ge));const g={a:c,b:u,c:h,normal:new R,materialIndex:0};In.getNormal(Yn,Kn,Zn,g.normal),p.face=g}return p}class ts extends tn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Un(c,3)),this.setAttribute("normal",new Un(u,3)),this.setAttribute("uv",new Un(h,2));function g(m,f,_,S,v,y,M,A,C,x,w){const I=y/C,W=M/x,ee=y/2,O=M/2,D=A/2,z=C+1,X=x+1;let Y=0,G=0;const N=new R;for(let U=0;U<X;U++){const Q=U*W-O;for(let $=0;$<z;$++){const Z=$*I-ee;N[m]=Z*S,N[f]=Q*v,N[_]=D,c.push(N.x,N.y,N.z),N[m]=0,N[f]=0,N[_]=A>0?1:-1,u.push(N.x,N.y,N.z),h.push($/C),h.push(1-U/x),Y+=1}}for(let U=0;U<x;U++)for(let Q=0;Q<C;Q++){const $=d+Q+z*U,Z=d+Q+z*(U+1),oe=d+(Q+1)+z*(U+1),Te=d+(Q+1)+z*U;l.push($,Z,Te),l.push(Z,oe,Te),G+=6}o.addGroup(p,G,w),p+=G,d+=Y}}static fromJSON(e){return new ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(s){const e={};for(let t=0;t<s.length;t++){const n=pr(s[t]);for(const i in n)e[i]=n[i]}return e}function tp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}const np={clone:pr,merge:At};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zo extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yt extends zo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=90,Ki=1;class eh extends Je{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new yt(Yi,Ki,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new R(1,0,0)),this.add(i);const r=new yt(Yi,Ki,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(-1,0,0)),this.add(r);const a=new yt(Yi,Ki,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new R(0,1,0)),this.add(a);const o=new yt(Yi,Ki,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new R(0,-1,0)),this.add(o);const l=new yt(Yi,Ki,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const c=new yt(Yi,Ki,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=On,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class th extends at{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ur,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bo extends ct{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new th(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ee}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ts(5,5,5),r=new Vt({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mt,blending:gn});r.uniforms.tEquirect.value=t;const a=new Bt(i,r),o=t.minFilter;return t.minFilter===_r&&(t.minFilter=Ee),new eh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Ua=new R,sp=new R,ap=new zt;class pi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ua.subVectors(n,t).cross(sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ua),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ap.getNormalMatrix(e),i=this.coplanarPoint(Ua).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new vr,bs=new R;class ko{constructor(e=new pi,t=new pi,n=new pi,i=new pi,r=new pi,a=new pi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],m=n[11],f=n[12],_=n[13],S=n[14],v=n[15];return t[0].setComponents(o-i,h-l,m-d,v-f).normalize(),t[1].setComponents(o+i,h+l,m+d,v+f).normalize(),t[2].setComponents(o+r,h+c,m+p,v+_).normalize(),t[3].setComponents(o-r,h-c,m-p,v-_).normalize(),t[4].setComponents(o-a,h-u,m-g,v-S).normalize(),t[5].setComponents(o+a,h+u,m+g,v+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(bs.x=i.normal.x>0?e.max.x:e.min.x,bs.y=i.normal.y>0?e.max.y:e.min.y,bs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nh(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function op(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=s.createBuffer();s.bindBuffer(u,p),s.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,p=u.updateRange;s.bindBuffer(h,c),p.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Vo extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],m=[],f=[];for(let _=0;_<u;_++){const S=_*d-a;for(let v=0;v<c;v++){const y=v*h-r;g.push(y,-S,0),m.push(0,0,1),f.push(v/o),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<o;S++){const v=S+c*_,y=S+c*(_+1),M=S+1+c*(_+1),A=S+1+c*_;p.push(v,y,A),p.push(y,M,A)}this.setIndex(p),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(m,3)),this.setAttribute("uv",new Un(f,2))}static fromJSON(e){return new Vo(e.width,e.height,e.widthSegments,e.heightSegments)}}var lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp="vec3 transformed = vec3( position );",mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,_p=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ap=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Zp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$p=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,nm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Sm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vm=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$m=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Jm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Qm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,eg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,tg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ng=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ig=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,rg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ag=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Og=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,zg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,de={alphamap_fragment:lp,alphamap_pars_fragment:cp,alphatest_fragment:up,alphatest_pars_fragment:hp,aomap_fragment:dp,aomap_pars_fragment:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:_p,bumpmap_pars_fragment:xp,clipping_planes_fragment:vp,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:Sp,color_fragment:bp,color_pars_fragment:Tp,color_pars_vertex:wp,color_vertex:Ep,common:Ap,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Lp,displacementmap_vertex:Dp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Ip,encodings_fragment:Np,encodings_pars_fragment:Fp,envmap_fragment:Op,envmap_common_pars_fragment:Up,envmap_pars_fragment:zp,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:$p,envmap_vertex:kp,fog_vertex:Vp,fog_pars_vertex:Gp,fog_fragment:Hp,fog_pars_fragment:Wp,gradientmap_pars_fragment:jp,lightmap_fragment:qp,lightmap_pars_fragment:Xp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:Kp,lights_pars_begin:Zp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:em,lights_phong_pars_fragment:tm,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:rm,lights_fragment_maps:sm,lights_fragment_end:am,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:um,map_fragment:hm,map_pars_fragment:dm,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphcolor_vertex:_m,morphnormal_vertex:xm,morphtarget_pars_vertex:vm,morphtarget_vertex:ym,normal_fragment_begin:Mm,normal_fragment_maps:Sm,normal_pars_fragment:bm,normal_pars_vertex:Tm,normal_vertex:wm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Lm,output_fragment:Dm,packing:Pm,premultiplied_alpha_fragment:Im,project_vertex:Nm,dithering_fragment:Fm,dithering_pars_fragment:Om,roughnessmap_fragment:Um,roughnessmap_pars_fragment:zm,shadowmap_pars_fragment:Bm,shadowmap_pars_vertex:km,shadowmap_vertex:Vm,shadowmask_pars_fragment:Gm,skinbase_vertex:Hm,skinning_pars_vertex:Wm,skinning_vertex:jm,skinnormal_vertex:qm,specularmap_fragment:Xm,specularmap_pars_fragment:Ym,tonemapping_fragment:Km,tonemapping_pars_fragment:Zm,transmission_fragment:$m,transmission_pars_fragment:Jm,uv_pars_fragment:Qm,uv_pars_vertex:eg,uv_vertex:tg,uv2_pars_fragment:ng,uv2_pars_vertex:ig,uv2_vertex:rg,worldpos_vertex:sg,background_vert:ag,background_frag:og,backgroundCube_vert:lg,backgroundCube_frag:cg,cube_vert:ug,cube_frag:hg,depth_vert:dg,depth_frag:fg,distanceRGBA_vert:pg,distanceRGBA_frag:mg,equirect_vert:gg,equirect_frag:_g,linedashed_vert:xg,linedashed_frag:vg,meshbasic_vert:yg,meshbasic_frag:Mg,meshlambert_vert:Sg,meshlambert_frag:bg,meshmatcap_vert:Tg,meshmatcap_frag:wg,meshnormal_vert:Eg,meshnormal_frag:Ag,meshphong_vert:Cg,meshphong_frag:Rg,meshphysical_vert:Lg,meshphysical_frag:Dg,meshtoon_vert:Pg,meshtoon_frag:Ig,points_vert:Ng,points_frag:Fg,shadow_vert:Og,shadow_frag:Ug,sprite_vert:zg,sprite_frag:Bg},ne={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zt},uv2Transform:{value:new zt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}}},pn={basic:{uniforms:At([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:At([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new xe(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:At([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:At([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:At([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new xe(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:At([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:At([ne.points,ne.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:At([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:At([ne.common,ne.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:At([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:At([ne.sprite,ne.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:At([ne.common,ne.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:At([ne.lights,ne.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};pn.physical={uniforms:At([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ge(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};function kg(s,e,t,n,i,r,a){const o=new xe(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(f,_){let S=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const y=s.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?m(o,l):v&&v.isColor&&(m(v,1),S=!0),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Zs)?(u===void 0&&(u=new Bt(new ts(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:pr(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(h!==v||d!==v.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=s.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Bt(new Vo(2,2),new Vt({name:"BackgroundMaterial",uniforms:pr(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,p=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function m(f,_){n.buffers.color.setClear(f.r,f.g,f.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(f,_=1){o.set(f),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,m(o,l)},render:g}}function Vg(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=f(null);let c=l,u=!1;function h(D,z,X,Y,G){let N=!1;if(a){const U=m(Y,X,z);c!==U&&(c=U,p(c.object)),N=_(D,Y,X,G),N&&S(D,Y,X,G)}else{const U=z.wireframe===!0;(c.geometry!==Y.id||c.program!==X.id||c.wireframe!==U)&&(c.geometry=Y.id,c.program=X.id,c.wireframe=U,N=!0)}G!==null&&t.update(G,34963),(N||u)&&(u=!1,x(D,z,X,Y),G!==null&&s.bindBuffer(34963,t.get(G).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function m(D,z,X){const Y=X.wireframe===!0;let G=o[D.id];G===void 0&&(G={},o[D.id]=G);let N=G[z.id];N===void 0&&(N={},G[z.id]=N);let U=N[Y];return U===void 0&&(U=f(d()),N[Y]=U),U}function f(D){const z=[],X=[],Y=[];for(let G=0;G<i;G++)z[G]=0,X[G]=0,Y[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:Y,object:D,attributes:{},index:null}}function _(D,z,X,Y){const G=c.attributes,N=z.attributes;let U=0;const Q=X.getAttributes();for(const $ in Q)if(Q[$].location>=0){const oe=G[$];let Te=N[$];if(Te===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(Te=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(Te=D.instanceColor)),oe===void 0||oe.attribute!==Te||Te&&oe.data!==Te.data)return!0;U++}return c.attributesNum!==U||c.index!==Y}function S(D,z,X,Y){const G={},N=z.attributes;let U=0;const Q=X.getAttributes();for(const $ in Q)if(Q[$].location>=0){let oe=N[$];oe===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor));const Te={};Te.attribute=oe,oe&&oe.data&&(Te.data=oe.data),G[$]=Te,U++}c.attributes=G,c.attributesNum=U,c.index=Y}function v(){const D=c.newAttributes;for(let z=0,X=D.length;z<X;z++)D[z]=0}function y(D){M(D,0)}function M(D,z){const X=c.newAttributes,Y=c.enabledAttributes,G=c.attributeDivisors;X[D]=1,Y[D]===0&&(s.enableVertexAttribArray(D),Y[D]=1),G[D]!==z&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,z),G[D]=z)}function A(){const D=c.newAttributes,z=c.enabledAttributes;for(let X=0,Y=z.length;X<Y;X++)z[X]!==D[X]&&(s.disableVertexAttribArray(X),z[X]=0)}function C(D,z,X,Y,G,N){n.isWebGL2===!0&&(X===5124||X===5125)?s.vertexAttribIPointer(D,z,X,G,N):s.vertexAttribPointer(D,z,X,Y,G,N)}function x(D,z,X,Y){if(n.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const G=Y.attributes,N=X.getAttributes(),U=z.defaultAttributeValues;for(const Q in N){const $=N[Q];if($.location>=0){let Z=G[Q];if(Z===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){const oe=Z.normalized,Te=Z.itemSize,q=t.get(Z);if(q===void 0)continue;const Ge=q.buffer,ye=q.type,we=q.bytesPerElement;if(Z.isInterleavedBufferAttribute){const ae=Z.data,Ye=ae.stride,Pe=Z.offset;if(ae.isInstancedInterleavedBuffer){for(let _e=0;_e<$.locationSize;_e++)M($.location+_e,ae.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let _e=0;_e<$.locationSize;_e++)y($.location+_e);s.bindBuffer(34962,Ge);for(let _e=0;_e<$.locationSize;_e++)C($.location+_e,Te/$.locationSize,ye,oe,Ye*we,(Pe+Te/$.locationSize*_e)*we)}else{if(Z.isInstancedBufferAttribute){for(let ae=0;ae<$.locationSize;ae++)M($.location+ae,Z.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ae=0;ae<$.locationSize;ae++)y($.location+ae);s.bindBuffer(34962,Ge);for(let ae=0;ae<$.locationSize;ae++)C($.location+ae,Te/$.locationSize,ye,oe,Te*we,Te/$.locationSize*ae*we)}}else if(U!==void 0){const oe=U[Q];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv($.location,oe);break;case 3:s.vertexAttrib3fv($.location,oe);break;case 4:s.vertexAttrib4fv($.location,oe);break;default:s.vertexAttrib1fv($.location,oe)}}}}A()}function w(){ee();for(const D in o){const z=o[D];for(const X in z){const Y=z[X];for(const G in Y)g(Y[G].object),delete Y[G];delete z[X]}delete o[D]}}function I(D){if(o[D.id]===void 0)return;const z=o[D.id];for(const X in z){const Y=z[X];for(const G in Y)g(Y[G].object),delete Y[G];delete z[X]}delete o[D.id]}function W(D){for(const z in o){const X=o[z];if(X[D.id]===void 0)continue;const Y=X[D.id];for(const G in Y)g(Y[G].object),delete Y[G];delete X[D.id]}}function ee(){O(),u=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ee,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:I,releaseStatesOfProgram:W,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function Gg(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,p;if(i)d=s,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Hg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),d=s.getParameter(35660),p=s.getParameter(3379),g=s.getParameter(34076),m=s.getParameter(34921),f=s.getParameter(36347),_=s.getParameter(36348),S=s.getParameter(36349),v=d>0,y=a||e.has("OES_texture_float"),M=v&&y,A=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:A}}function Wg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new pi,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,p){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,d,p){const g=h.clippingPlanes,m=h.clipIntersection,f=h.clipShadows,_=s.get(h);if(!i||g===null||g.length===0||r&&!f)r?u(null):c();else{const S=r?0:n,v=S*4;let y=_.clippingState||null;l.value=y,y=u(g,d,v,p);for(let M=0;M!==v;++M)y[M]=t[M];_.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const m=h!==null?h.length:0;let f=null;if(m!==0){if(f=l.value,g!==!0||f===null){const _=p+m*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<_)&&(f=new Float32Array(_));for(let v=0,y=p;v!==m;++v,y+=4)a.copy(h[v]).applyMatrix4(S,o),a.normal.toArray(f,y),f[y+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}}function jg(s){let e=new WeakMap;function t(a,o){return o===co?a.mapping=ur:o===uo&&(a.mapping=hr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===co||o===uo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Bo(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Go extends zo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const er=4,Kl=[.125,.215,.35,.446,.526,.582],_i=20,za=new Go,Zl=new xe;let Ba=null;const mi=(1+Math.sqrt(5))/2,$i=1/mi,$l=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,mi,$i),new R(0,mi,-$i),new R($i,0,mi),new R(-$i,0,mi),new R(mi,$i,0),new R(-mi,$i,0)];class xo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ba=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba),e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:_n,format:Rt,encoding:Bn,depthBuffer:!1},i=Jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qg(r)),this._blurMaterial=Xg(r,e,t)}return i}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,i){const o=new yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Zl),u.toneMapping=On,u.autoClear=!1;const p=new vi({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),g=new Bt(new ts,p);let m=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,m=!0):(p.color.copy(Zl),m=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):S===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const v=this._cubeSize;Ts(i,S*v,_>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ur||e.mapping===hr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ts(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=$l[(i-1)%$l.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Bt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_i-1),m=r/g,f=isFinite(r)?1+Math.floor(u*m):_i;f>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${_i}`);const _=[];let S=0;for(let C=0;C<_i;++C){const x=C/m,w=Math.exp(-x*x/2);_.push(w),C===0?S+=w:C<f&&(S+=2*w)}for(let C=0;C<_.length;C++)_[C]=_[C]/S;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[i],M=3*y*(i>v-er?i-v+er:0),A=4*(this._cubeSize-y);Ts(t,M,A,3*y,2*y),l.setRenderTarget(t),l.render(h,za)}}function qg(s){const e=[],t=[],n=[];let i=s;const r=s-er+1+Kl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-er?l=Kl[a-s+er-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,f=2,_=1,S=new Float32Array(m*g*p),v=new Float32Array(f*g*p),y=new Float32Array(_*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,x=A>2?0:-1,w=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];S.set(w,m*g*A),v.set(d,f*g*A);const I=[A,A,A,A,A,A];y.set(I,_*g*A)}const M=new tn;M.setAttribute("position",new st(S,m)),M.setAttribute("uv",new st(v,f)),M.setAttribute("faceIndex",new st(y,_)),e.push(M),i>er&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jl(s,e,t){const n=new ct(s,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Xg(s,e,t){const n=new Float32Array(_i),i=new R(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ql(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function ec(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ho(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===co||l===uo,u=l===ur||l===hr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new xo(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new xo(s));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Kg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zg(s,e,t,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let f=0,_=m.length;f<_;f++)e.update(m[f],34962)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const S=p.array;m=p.version;for(let v=0,y=S.length;v<y;v+=3){const M=S[v+0],A=S[v+1],C=S[v+2];d.push(M,A,A,C,C,M)}}else{const S=g.array;m=g.version;for(let v=0,y=S.length/3-1;v<y;v+=3){const M=v+0,A=v+1,C=v+2;d.push(M,A,A,C,C,M)}}const f=new(qu(d)?Qu:Ju)(d,1);f.version=m;const _=r.get(h);_&&e.remove(_),r.set(h,f)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function $g(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){s.drawElements(r,p,o,d*l),t.update(p,r,1)}function h(d,p,g){if(g===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,p,o,d*l,g),t.update(p,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Jg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qg(s,e){return s[0]-e[0]}function e_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function t_(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Xe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=m!==void 0?m.length:0;let _=r.get(u);if(_===void 0||_.count!==f){let X=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",X)};var g=X;_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let I=0;y===!0&&(I=1),M===!0&&(I=2),A===!0&&(I=3);let W=u.attributes.position.count*I,ee=1;W>e.maxTextureSize&&(ee=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const O=new Float32Array(W*ee*4*f),D=new Zu(O,W,ee,f);D.type=Nn,D.needsUpdate=!0;const z=I*4;for(let Y=0;Y<f;Y++){const G=C[Y],N=x[Y],U=w[Y],Q=W*ee*4*Y;for(let $=0;$<G.count;$++){const Z=$*z;y===!0&&(a.fromBufferAttribute(G,$),O[Q+Z+0]=a.x,O[Q+Z+1]=a.y,O[Q+Z+2]=a.z,O[Q+Z+3]=0),M===!0&&(a.fromBufferAttribute(N,$),O[Q+Z+4]=a.x,O[Q+Z+5]=a.y,O[Q+Z+6]=a.z,O[Q+Z+7]=0),A===!0&&(a.fromBufferAttribute(U,$),O[Q+Z+8]=a.x,O[Q+Z+9]=a.y,O[Q+Z+10]=a.z,O[Q+Z+11]=U.itemSize===4?a.w:1)}}_={count:f,texture:D,size:new ge(W,ee)},r.set(u,_),u.addEventListener("dispose",X)}let S=0;for(let y=0;y<p.length;y++)S+=p[y];const v=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",p),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let f=n[u.id];if(f===void 0||f.length!==m){f=[];for(let M=0;M<m;M++)f[M]=[M,0];n[u.id]=f}for(let M=0;M<m;M++){const A=f[M];A[0]=M,A[1]=p[M]}f.sort(e_);for(let M=0;M<8;M++)M<m&&f[M][1]?(o[M][0]=f[M][0],o[M][1]=f[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Qg);const _=u.morphAttributes.position,S=u.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const A=o[M],C=A[0],x=A[1];C!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+M)!==_[C]&&u.setAttribute("morphTarget"+M,_[C]),S&&u.getAttribute("morphNormal"+M)!==S[C]&&u.setAttribute("morphNormal"+M,S[C]),i[M]=x,v+=x):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),S&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const y=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(s,"morphTargetBaseInfluence",y),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function n_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const ih=new at,rh=new Zu,sh=new Hf,ah=new th,tc=[],nc=[],ic=new Float32Array(16),rc=new Float32Array(9),sc=new Float32Array(4);function yr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=tc[i];if(r===void 0&&(r=new Float32Array(i),tc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Js(s,e){let t=nc[e];t===void 0&&(t=new Int32Array(e),nc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function i_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function r_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2fv(this.addr,e),ht(t,e)}}function s_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;s.uniform3fv(this.addr,e),ht(t,e)}}function a_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4fv(this.addr,e),ht(t,e)}}function o_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;sc.set(n),s.uniformMatrix2fv(this.addr,!1,sc),ht(t,n)}}function l_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;rc.set(n),s.uniformMatrix3fv(this.addr,!1,rc),ht(t,n)}}function c_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;ic.set(n),s.uniformMatrix4fv(this.addr,!1,ic),ht(t,n)}}function u_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function h_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2iv(this.addr,e),ht(t,e)}}function d_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;s.uniform3iv(this.addr,e),ht(t,e)}}function f_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4iv(this.addr,e),ht(t,e)}}function p_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function m_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2uiv(this.addr,e),ht(t,e)}}function g_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;s.uniform3uiv(this.addr,e),ht(t,e)}}function __(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4uiv(this.addr,e),ht(t,e)}}function x_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ih,i)}function v_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||sh,i)}function y_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ah,i)}function M_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||rh,i)}function S_(s){switch(s){case 5126:return i_;case 35664:return r_;case 35665:return s_;case 35666:return a_;case 35674:return o_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return u_;case 35667:case 35671:return h_;case 35668:case 35672:return d_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return M_}}function b_(s,e){s.uniform1fv(this.addr,e)}function T_(s,e){const t=yr(e,this.size,2);s.uniform2fv(this.addr,t)}function w_(s,e){const t=yr(e,this.size,3);s.uniform3fv(this.addr,t)}function E_(s,e){const t=yr(e,this.size,4);s.uniform4fv(this.addr,t)}function A_(s,e){const t=yr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function C_(s,e){const t=yr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function R_(s,e){const t=yr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function L_(s,e){s.uniform1iv(this.addr,e)}function D_(s,e){s.uniform2iv(this.addr,e)}function P_(s,e){s.uniform3iv(this.addr,e)}function I_(s,e){s.uniform4iv(this.addr,e)}function N_(s,e){s.uniform1uiv(this.addr,e)}function F_(s,e){s.uniform2uiv(this.addr,e)}function O_(s,e){s.uniform3uiv(this.addr,e)}function U_(s,e){s.uniform4uiv(this.addr,e)}function z_(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ih,r[a])}function B_(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||sh,r[a])}function k_(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ah,r[a])}function V_(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||rh,r[a])}function G_(s){switch(s){case 5126:return b_;case 35664:return T_;case 35665:return w_;case 35666:return E_;case 35674:return A_;case 35675:return C_;case 35676:return R_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return P_;case 35669:case 35673:return I_;case 5125:return N_;case 36294:return F_;case 36295:return O_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return V_}}class H_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=S_(t.type)}}class W_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=G_(t.type)}}class j_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function ac(s,e){s.seq.push(e),s.map[e.id]=e}function q_(s,e,t){const n=s.name,i=n.length;for(ka.lastIndex=0;;){const r=ka.exec(n),a=ka.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ac(t,c===void 0?new H_(o,s,e):new W_(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new j_(o),ac(t,h)),t=h}}}class Fs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);q_(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function oc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let X_=0;function Y_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function K_(s){switch(s){case Bn:return["Linear","( value )"];case Ce:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function lc(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Y_(s.getShaderSource(e),a)}else return i}function Z_(s,e){const t=K_(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function $_(s,e){let t;switch(e){case rf:t="Linear";break;case sf:t="Reinhard";break;case af:t="OptimizedCineon";break;case of:t="ACESFilmic";break;case lf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function J_(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Or).join(`
`)}function Q_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function e0(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Or(s){return s!==""}function cc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(s){return s.replace(t0,n0)}function n0(s,e){const t=de[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return vo(t)}const i0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(s){return s.replace(i0,r0)}function r0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function dc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ou?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fr&&(e="SHADOWMAP_TYPE_VSM"),e}function a0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ur:case hr:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function l0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bu:e="ENVMAP_BLENDING_MULTIPLY";break;case tf:e="ENVMAP_BLENDING_MIX";break;case nf:e="ENVMAP_BLENDING_ADD";break}return e}function c0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function u0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=s0(t),c=a0(t),u=o0(t),h=l0(t),d=c0(t),p=t.isWebGL2?"":J_(t),g=Q_(r),m=i.createProgram();let f,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Or).join(`
`),f.length>0&&(f+=`
`),_=[p,g].filter(Or).join(`
`),_.length>0&&(_+=`
`)):(f=[dc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),_=[p,dc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?de.tonemapping_pars_fragment:"",t.toneMapping!==On?$_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",de.encodings_pars_fragment,Z_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),a=vo(a),a=cc(a,t),a=uc(a,t),o=vo(o),o=cc(o,t),o=uc(o,t),a=hc(a),o=hc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=S+f+a,y=S+_+o,M=oc(i,35633,v),A=oc(i,35632,y);if(i.attachShader(m,M),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),s.debug.checkShaderErrors){const w=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(M).trim(),W=i.getShaderInfoLog(A).trim();let ee=!0,O=!0;if(i.getProgramParameter(m,35714)===!1){ee=!1;const D=lc(i,M,"vertex"),z=lc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+w+`
`+D+`
`+z)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(I===""||W==="")&&(O=!1);O&&(this.diagnostics={runnable:ee,programLog:w,vertexShader:{log:I,prefix:f},fragmentShader:{log:W,prefix:_}})}i.deleteShader(M),i.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new Fs(i,m)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=e0(i,m)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=X_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=A,this}let h0=0;class d0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new f0(e),t.set(e,n)),n}}class f0{constructor(e){this.id=h0++,this.code=e,this.usedTimes=0}}function p0(s,e,t,n,i,r,a){const o=new $u,l=new d0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x,w,I,W,ee){const O=W.fog,D=ee.geometry,z=x.isMeshStandardMaterial?W.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||z),Y=!!X&&X.mapping===Zs?X.image.height:null,G=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const N=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,U=N!==void 0?N.length:0;let Q=0;D.morphAttributes.position!==void 0&&(Q=1),D.morphAttributes.normal!==void 0&&(Q=2),D.morphAttributes.color!==void 0&&(Q=3);let $,Z,oe,Te;if(G){const Ye=pn[G];$=Ye.vertexShader,Z=Ye.fragmentShader}else $=x.vertexShader,Z=x.fragmentShader,l.update(x),oe=l.getVertexShaderID(x),Te=l.getFragmentShaderID(x);const q=s.getRenderTarget(),Ge=x.alphaTest>0,ye=x.clearcoat>0,we=x.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:x.type,vertexShader:$,fragmentShader:Z,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:Te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:ee.isInstancedMesh===!0,instancingColor:ee.isInstancedMesh===!0&&ee.instanceColor!==null,supportsVertexTextures:d,outputEncoding:q===null?s.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:Bn,map:!!x.map,matcap:!!x.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:Y,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Ef,tangentSpaceNormalMap:x.normalMapType===$s,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ce,clearcoat:ye,clearcoatMap:ye&&!!x.clearcoatMap,clearcoatRoughnessMap:ye&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!x.clearcoatNormalMap,iridescence:we,iridescenceMap:we&&!!x.iridescenceMap,iridescenceThicknessMap:we&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===nr,alphaMap:!!x.alphaMap,alphaTest:Ge,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!O,useFog:x.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:ee.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:On,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ut,flipSided:x.side===Mt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)w.push(I),w.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(_(w,x),S(w,x),w.push(s.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.lightMap&&o.enable(7),w.aoMap&&o.enable(8),w.emissiveMap&&o.enable(9),w.bumpMap&&o.enable(10),w.normalMap&&o.enable(11),w.objectSpaceNormalMap&&o.enable(12),w.tangentSpaceNormalMap&&o.enable(13),w.clearcoat&&o.enable(14),w.clearcoatMap&&o.enable(15),w.clearcoatRoughnessMap&&o.enable(16),w.clearcoatNormalMap&&o.enable(17),w.iridescence&&o.enable(18),w.iridescenceMap&&o.enable(19),w.iridescenceThicknessMap&&o.enable(20),w.displacementMap&&o.enable(21),w.specularMap&&o.enable(22),w.roughnessMap&&o.enable(23),w.metalnessMap&&o.enable(24),w.gradientMap&&o.enable(25),w.alphaMap&&o.enable(26),w.alphaTest&&o.enable(27),w.vertexColors&&o.enable(28),w.vertexAlphas&&o.enable(29),w.vertexUvs&&o.enable(30),w.vertexTangents&&o.enable(31),w.uvsVertexOnly&&o.enable(32),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.physicallyCorrectLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.specularIntensityMap&&o.enable(15),w.specularColorMap&&o.enable(16),w.transmission&&o.enable(17),w.transmissionMap&&o.enable(18),w.thicknessMap&&o.enable(19),w.sheen&&o.enable(20),w.sheenColorMap&&o.enable(21),w.sheenRoughnessMap&&o.enable(22),w.decodeVideoTexture&&o.enable(23),w.opaque&&o.enable(24),x.push(o.mask)}function v(x){const w=g[x.type];let I;if(w){const W=pn[w];I=np.clone(W.uniforms)}else I=x.uniforms;return I}function y(x,w){let I;for(let W=0,ee=c.length;W<ee;W++){const O=c[W];if(O.cacheKey===w){I=O,++I.usedTimes;break}}return I===void 0&&(I=new u0(s,w,x,r),c.push(I)),I}function M(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:C}}function m0(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function g0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function fc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function pc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,p,g,m,f){let _=s[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:f},s[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=f),e++,_}function o(h,d,p,g,m,f){const _=a(h,d,p,g,m,f);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(h,d,p,g,m,f){const _=a(h,d,p,g,m,f);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||g0),n.length>1&&n.sort(d||fc),i.length>1&&i.sort(d||fc)}function u(){for(let h=e,d=s.length;h<d;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function _0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new pc,s.set(n,[a])):i>=r.length?(a=new pc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function x0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new xe};break;case"SpotLight":t={position:new R,direction:new R,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function v0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let y0=0;function M0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function S0(s,e){const t=new x0,n=v0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new R);const r=new R,a=new Me,o=new Me;function l(u,h){let d=0,p=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let m=0,f=0,_=0,S=0,v=0,y=0,M=0,A=0,C=0,x=0;u.sort(M0);const w=h!==!0?Math.PI:1;for(let W=0,ee=u.length;W<ee;W++){const O=u[W],D=O.color,z=O.intensity,X=O.distance,Y=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=D.r*z*w,p+=D.g*z*w,g+=D.b*z*w;else if(O.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(O.sh.coefficients[G],z);else if(O.isDirectionalLight){const G=t.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){const N=O.shadow,U=n.get(O);U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,i.directionalShadow[m]=U,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=O.shadow.matrix,y++}i.directional[m]=G,m++}else if(O.isSpotLight){const G=t.get(O);G.position.setFromMatrixPosition(O.matrixWorld),G.color.copy(D).multiplyScalar(z*w),G.distance=X,G.coneCos=Math.cos(O.angle),G.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),G.decay=O.decay,i.spot[_]=G;const N=O.shadow;if(O.map&&(i.spotLightMap[C]=O.map,C++,N.updateMatrices(O),O.castShadow&&x++),i.spotLightMatrix[_]=N.matrix,O.castShadow){const U=n.get(O);U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=Y,A++}_++}else if(O.isRectAreaLight){const G=t.get(O);G.color.copy(D).multiplyScalar(z),G.halfWidth.set(O.width*.5,0,0),G.halfHeight.set(0,O.height*.5,0),i.rectArea[S]=G,S++}else if(O.isPointLight){const G=t.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity*w),G.distance=O.distance,G.decay=O.decay,O.castShadow){const N=O.shadow,U=n.get(O);U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,U.shadowCameraNear=N.camera.near,U.shadowCameraFar=N.camera.far,i.pointShadow[f]=U,i.pointShadowMap[f]=Y,i.pointShadowMatrix[f]=O.shadow.matrix,M++}i.point[f]=G,f++}else if(O.isHemisphereLight){const G=t.get(O);G.skyColor.copy(O.color).multiplyScalar(z*w),G.groundColor.copy(O.groundColor).multiplyScalar(z*w),i.hemi[v]=G,v++}}S>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==m||I.pointLength!==f||I.spotLength!==_||I.rectAreaLength!==S||I.hemiLength!==v||I.numDirectionalShadows!==y||I.numPointShadows!==M||I.numSpotShadows!==A||I.numSpotMaps!==C)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=S,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,I.directionalLength=m,I.pointLength=f,I.spotLength=_,I.rectAreaLength=S,I.hemiLength=v,I.numDirectionalShadows=y,I.numPointShadows=M,I.numSpotShadows=A,I.numSpotMaps=C,i.version=y0++)}function c(u,h){let d=0,p=0,g=0,m=0,f=0;const _=h.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const y=u[S];if(y.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),d++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),o.identity(),a.copy(y.matrixWorld),a.premultiply(_),o.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),p++}else if(y.isHemisphereLight){const M=i.hemi[f];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),f++}}}return{setup:l,setupView:c,state:i}}function mc(s,e){const t=new S0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function b0(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new mc(s,e),t.set(r,[l])):a>=o.length?(l=new mc(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class oh extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class T0 extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const w0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function A0(s,e,t){let n=new ko;const i=new ge,r=new ge,a=new Xe,o=new oh({depthPacking:Wu}),l=new T0,c={},u=t.maxTextureSize,h={0:Mt,1:ai,2:Ut},d=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:w0,fragmentShader:E0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Bt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou,this.render=function(y,M,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;const C=s.getRenderTarget(),x=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),I=s.state;I.setBlending(gn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let W=0,ee=y.length;W<ee;W++){const O=y[W],D=O.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const z=D.getFrameExtents();if(i.multiply(z),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/z.x),i.x=r.x*z.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/z.y),i.y=r.y*z.y,D.mapSize.y=r.y)),D.map===null){const Y=this.type!==Fr?{minFilter:Ke,magFilter:Ke}:{};D.map=new ct(i.x,i.y,Y),D.map.texture.name=O.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const X=D.getViewportCount();for(let Y=0;Y<X;Y++){const G=D.getViewport(Y);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),I.viewport(a),D.updateMatrices(O,Y),n=D.getFrustum(),v(M,A,D.camera,O,this.type)}D.isPointLightShadow!==!0&&this.type===Fr&&_(D,A),D.needsUpdate=!1}f.needsUpdate=!1,s.setRenderTarget(C,x,w)};function _(y,M){const A=e.update(m);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ct(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(M,null,A,d,m,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(M,null,A,p,m,null)}function S(y,M,A,C,x,w){let I=null;const W=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(W!==void 0?I=W:I=A.isPointLight===!0?l:o,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const ee=I.uuid,O=M.uuid;let D=c[ee];D===void 0&&(D={},c[ee]=D);let z=D[O];z===void 0&&(z=I.clone(),D[O]=z),I=z}return I.visible=M.visible,I.wireframe=M.wireframe,w===Fr?I.side=M.shadowSide!==null?M.shadowSide:M.side:I.side=M.shadowSide!==null?M.shadowSide:h[M.side],I.alphaMap=M.alphaMap,I.alphaTest=M.alphaTest,I.clipShadows=M.clipShadows,I.clippingPlanes=M.clippingPlanes,I.clipIntersection=M.clipIntersection,I.displacementMap=M.displacementMap,I.displacementScale=M.displacementScale,I.displacementBias=M.displacementBias,I.wireframeLinewidth=M.wireframeLinewidth,I.linewidth=M.linewidth,A.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(A.matrixWorld),I.nearDistance=C,I.farDistance=x),I}function v(y,M,A,C,x){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===Fr)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const W=e.update(y),ee=y.material;if(Array.isArray(ee)){const O=W.groups;for(let D=0,z=O.length;D<z;D++){const X=O[D],Y=ee[X.materialIndex];if(Y&&Y.visible){const G=S(y,Y,C,A.near,A.far,x);s.renderBufferDirect(A,null,W,G,y,X)}}}else if(ee.visible){const O=S(y,ee,C,A.near,A.far,x);s.renderBufferDirect(A,null,W,O,y,null)}}const I=y.children;for(let W=0,ee=I.length;W<ee;W++)v(I[W],M,A,C,x)}}function C0(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const V=new Xe;let K=null;const se=new Xe(0,0,0,0);return{setMask:function(ue){K!==ue&&!L&&(s.colorMask(ue,ue,ue,ue),K=ue)},setLocked:function(ue){L=ue},setClear:function(ue,ze,ft,xt,li){li===!0&&(ue*=xt,ze*=xt,ft*=xt),V.set(ue,ze,ft,xt),se.equals(V)===!1&&(s.clearColor(ue,ze,ft,xt),se.copy(V))},reset:function(){L=!1,K=null,se.set(-1,0,0,0)}}}function r(){let L=!1,V=null,K=null,se=null;return{setTest:function(ue){ue?Ge(2929):ye(2929)},setMask:function(ue){V!==ue&&!L&&(s.depthMask(ue),V=ue)},setFunc:function(ue){if(K!==ue){switch(ue){case Yd:s.depthFunc(512);break;case Kd:s.depthFunc(519);break;case Zd:s.depthFunc(513);break;case lo:s.depthFunc(515);break;case $d:s.depthFunc(514);break;case Jd:s.depthFunc(518);break;case Qd:s.depthFunc(516);break;case ef:s.depthFunc(517);break;default:s.depthFunc(515)}K=ue}},setLocked:function(ue){L=ue},setClear:function(ue){se!==ue&&(s.clearDepth(ue),se=ue)},reset:function(){L=!1,V=null,K=null,se=null}}}function a(){let L=!1,V=null,K=null,se=null,ue=null,ze=null,ft=null,xt=null,li=null;return{setTest:function($e){L||($e?Ge(2960):ye(2960))},setMask:function($e){V!==$e&&!L&&(s.stencilMask($e),V=$e)},setFunc:function($e,Tn,Gt){(K!==$e||se!==Tn||ue!==Gt)&&(s.stencilFunc($e,Tn,Gt),K=$e,se=Tn,ue=Gt)},setOp:function($e,Tn,Gt){(ze!==$e||ft!==Tn||xt!==Gt)&&(s.stencilOp($e,Tn,Gt),ze=$e,ft=Tn,xt=Gt)},setLocked:function($e){L=$e},setClear:function($e){li!==$e&&(s.clearStencil($e),li=$e)},reset:function(){L=!1,V=null,K=null,se=null,ue=null,ze=null,ft=null,xt=null,li=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,m=[],f=null,_=!1,S=null,v=null,y=null,M=null,A=null,C=null,x=null,w=!1,I=null,W=null,ee=null,O=null,D=null;const z=s.getParameter(35661);let X=!1,Y=0;const G=s.getParameter(7938);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Y>=2);let N=null,U={};const Q=s.getParameter(3088),$=s.getParameter(2978),Z=new Xe().fromArray(Q),oe=new Xe().fromArray($);function Te(L,V,K){const se=new Uint8Array(4),ue=s.createTexture();s.bindTexture(L,ue),s.texParameteri(L,10241,9728),s.texParameteri(L,10240,9728);for(let ze=0;ze<K;ze++)s.texImage2D(V+ze,0,6408,1,1,0,6408,5121,se);return ue}const q={};q[3553]=Te(3553,3553,1),q[34067]=Te(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ge(2929),l.setFunc(lo),Tt(!1),dn(ll),Ge(2884),mt(gn);function Ge(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function ye(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function we(L,V){return p[L]!==V?(s.bindFramebuffer(L,V),p[L]=V,n&&(L===36009&&(p[36160]=V),L===36160&&(p[36009]=V)),!0):!1}function ae(L,V){let K=m,se=!1;if(L)if(K=g.get(V),K===void 0&&(K=[],g.set(V,K)),L.isWebGLMultipleRenderTargets){const ue=L.texture;if(K.length!==ue.length||K[0]!==36064){for(let ze=0,ft=ue.length;ze<ft;ze++)K[ze]=36064+ze;K.length=ue.length,se=!0}}else K[0]!==36064&&(K[0]=36064,se=!0);else K[0]!==1029&&(K[0]=1029,se=!0);se&&(t.isWebGL2?s.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Ye(L){return f!==L?(s.useProgram(L),f=L,!0):!1}const Pe={[Ji]:32774,[Ud]:32778,[zd]:32779};if(n)Pe[dl]=32775,Pe[fl]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(Pe[dl]=L.MIN_EXT,Pe[fl]=L.MAX_EXT)}const _e={[Bd]:0,[kd]:1,[Vd]:768,[Uu]:770,[Xd]:776,[jd]:774,[Hd]:772,[Gd]:769,[zu]:771,[qd]:775,[Wd]:773};function mt(L,V,K,se,ue,ze,ft,xt){if(L===gn){_===!0&&(ye(3042),_=!1);return}if(_===!1&&(Ge(3042),_=!0),L!==Od){if(L!==S||xt!==w){if((v!==Ji||A!==Ji)&&(s.blendEquation(32774),v=Ji,A=Ji),xt)switch(L){case nr:s.blendFuncSeparate(1,771,1,771);break;case cl:s.blendFunc(1,1);break;case ul:s.blendFuncSeparate(0,769,0,1);break;case hl:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case nr:s.blendFuncSeparate(770,771,1,771);break;case cl:s.blendFunc(770,1);break;case ul:s.blendFuncSeparate(0,769,0,1);break;case hl:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,M=null,C=null,x=null,S=L,w=xt}return}ue=ue||V,ze=ze||K,ft=ft||se,(V!==v||ue!==A)&&(s.blendEquationSeparate(Pe[V],Pe[ue]),v=V,A=ue),(K!==y||se!==M||ze!==C||ft!==x)&&(s.blendFuncSeparate(_e[K],_e[se],_e[ze],_e[ft]),y=K,M=se,C=ze,x=ft),S=L,w=null}function Lt(L,V){L.side===Ut?ye(2884):Ge(2884);let K=L.side===Mt;V&&(K=!K),Tt(K),L.blending===nr&&L.transparent===!1?mt(gn):mt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const se=L.stencilWrite;c.setTest(se),se&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),We(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ge(32926):ye(32926)}function Tt(L){I!==L&&(L?s.frontFace(2304):s.frontFace(2305),I=L)}function dn(L){L!==Id?(Ge(2884),L!==W&&(L===ll?s.cullFace(1029):L===Nd?s.cullFace(1028):s.cullFace(1032))):ye(2884),W=L}function gt(L){L!==ee&&(X&&s.lineWidth(L),ee=L)}function We(L,V,K){L?(Ge(32823),(O!==V||D!==K)&&(s.polygonOffset(V,K),O=V,D=K)):ye(32823)}function Sn(L){L?Ge(3089):ye(3089)}function bn(L){L===void 0&&(L=33984+z-1),N!==L&&(s.activeTexture(L),N=L)}function E(L,V,K){K===void 0&&(N===null?K=33984+z-1:K=N);let se=U[K];se===void 0&&(se={type:void 0,texture:void 0},U[K]=se),(se.type!==L||se.texture!==V)&&(N!==K&&(s.activeTexture(K),N=K),s.bindTexture(L,V||q[L]),se.type=L,se.texture=V)}function b(){const L=U[N];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function k(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(L){Z.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function he(L){oe.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),oe.copy(L))}function Oe(L,V){let K=h.get(V);K===void 0&&(K=new WeakMap,h.set(V,K));let se=K.get(L);se===void 0&&(se=s.getUniformBlockIndex(V,L.name),K.set(L,se))}function Ze(L,V){const se=h.get(V).get(L);u.get(L)!==se&&(s.uniformBlockBinding(V,se,L.__bindingPointIndex),u.set(L,se))}function dt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},N=null,U={},p={},g=new WeakMap,m=[],f=null,_=!1,S=null,v=null,y=null,M=null,A=null,C=null,x=null,w=!1,I=null,W=null,ee=null,O=null,D=null,Z.set(0,0,s.canvas.width,s.canvas.height),oe.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ge,disable:ye,bindFramebuffer:we,drawBuffers:ae,useProgram:Ye,setBlending:mt,setMaterial:Lt,setFlipSided:Tt,setCullFace:dn,setLineWidth:gt,setPolygonOffset:We,setScissorTest:Sn,activeTexture:bn,bindTexture:E,unbindTexture:b,compressedTexImage2D:k,compressedTexImage3D:J,texImage2D:ve,texImage3D:ce,updateUBOMapping:Oe,uniformBlockBinding:Ze,texStorage2D:j,texStorage3D:pe,texSubImage2D:te,texSubImage3D:ie,compressedTexSubImage2D:Se,compressedTexSubImage3D:re,scissor:me,viewport:he,reset:dt}}function R0(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,b){return _?new OffscreenCanvas(E,b):Xr("canvas")}function v(E,b,k,J){let te=1;if((E.width>J||E.height>J)&&(te=J/Math.max(E.width,E.height)),te<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ie=b?js:Math.floor,Se=ie(te*E.width),re=ie(te*E.height);m===void 0&&(m=S(Se,re));const j=k?S(Se,re):m;return j.width=Se,j.height=re,j.getContext("2d").drawImage(E,0,0,Se,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Se+"x"+re+")."),j}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function y(E){return _o(E.width)&&_o(E.height)}function M(E){return o?!1:E.wrapS!==Kt||E.wrapT!==Kt||E.minFilter!==Ke&&E.minFilter!==Ee}function A(E,b){return E.generateMipmaps&&b&&E.minFilter!==Ke&&E.minFilter!==Ee}function C(E){s.generateMipmap(E)}function x(E,b,k,J,te=!1){if(o===!1)return b;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ie=b;return b===6403&&(k===5126&&(ie=33326),k===5131&&(ie=33325),k===5121&&(ie=33321)),b===33319&&(k===5126&&(ie=33328),k===5131&&(ie=33327),k===5121&&(ie=33323)),b===6408&&(k===5126&&(ie=34836),k===5131&&(ie=34842),k===5121&&(ie=J===Ce&&te===!1?35907:32856),k===32819&&(ie=32854),k===32820&&(ie=32855)),(ie===33325||ie===33326||ie===33327||ie===33328||ie===34842||ie===34836)&&e.get("EXT_color_buffer_float"),ie}function w(E,b,k){return A(E,k)===!0||E.isFramebufferTexture&&E.minFilter!==Ke&&E.minFilter!==Ee?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function I(E){return E===Ke||E===ho||E===fo?9728:9729}function W(E){const b=E.target;b.removeEventListener("dispose",W),O(b),b.isVideoTexture&&g.delete(b)}function ee(E){const b=E.target;b.removeEventListener("dispose",ee),z(b)}function O(E){const b=n.get(E);if(b.__webglInit===void 0)return;const k=E.source,J=f.get(k);if(J){const te=J[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&D(E),Object.keys(J).length===0&&f.delete(k)}n.remove(E)}function D(E){const b=n.get(E);s.deleteTexture(b.__webglTexture);const k=E.source,J=f.get(k);delete J[b.__cacheKey],a.memory.textures--}function z(E){const b=E.texture,k=n.get(E),J=n.get(b);if(J.__webglTexture!==void 0&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)s.deleteFramebuffer(k.__webglFramebuffer[te]),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[te]);else{if(s.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let te=0;te<k.__webglColorRenderbuffer.length;te++)k.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[te]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let te=0,ie=b.length;te<ie;te++){const Se=n.get(b[te]);Se.__webglTexture&&(s.deleteTexture(Se.__webglTexture),a.memory.textures--),n.remove(b[te])}n.remove(b),n.remove(E)}let X=0;function Y(){X=0}function G(){const E=X;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),X+=1,E}function N(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.encoding),b.join()}function U(E,b){const k=n.get(E);if(E.isVideoTexture&&Sn(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){const J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(k,E,b);return}}t.bindTexture(3553,k.__webglTexture,33984+b)}function Q(E,b){const k=n.get(E);if(E.version>0&&k.__version!==E.version){ye(k,E,b);return}t.bindTexture(35866,k.__webglTexture,33984+b)}function $(E,b){const k=n.get(E);if(E.version>0&&k.__version!==E.version){ye(k,E,b);return}t.bindTexture(32879,k.__webglTexture,33984+b)}function Z(E,b){const k=n.get(E);if(E.version>0&&k.__version!==E.version){we(k,E,b);return}t.bindTexture(34067,k.__webglTexture,33984+b)}const oe={[dr]:10497,[Kt]:33071,[Ws]:33648},Te={[Ke]:9728,[ho]:9984,[fo]:9986,[Ee]:9729,[Vu]:9985,[_r]:9987};function q(E,b,k){if(k?(s.texParameteri(E,10242,oe[b.wrapS]),s.texParameteri(E,10243,oe[b.wrapT]),(E===32879||E===35866)&&s.texParameteri(E,32882,oe[b.wrapR]),s.texParameteri(E,10240,Te[b.magFilter]),s.texParameteri(E,10241,Te[b.minFilter])):(s.texParameteri(E,10242,33071),s.texParameteri(E,10243,33071),(E===32879||E===35866)&&s.texParameteri(E,32882,33071),(b.wrapS!==Kt||b.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,10240,I(b.magFilter)),s.texParameteri(E,10241,I(b.minFilter)),b.minFilter!==Ke&&b.minFilter!==Ee&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(b.type===Nn&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===_n&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(E,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Ge(E,b){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",W));const J=b.source;let te=f.get(J);te===void 0&&(te={},f.set(J,te));const ie=N(b);if(ie!==E.__cacheKey){te[ie]===void 0&&(te[ie]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),te[ie].usedTimes++;const Se=te[E.__cacheKey];Se!==void 0&&(te[E.__cacheKey].usedTimes--,Se.usedTimes===0&&D(b)),E.__cacheKey=ie,E.__webglTexture=te[ie].texture}return k}function ye(E,b,k){let J=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=35866),b.isData3DTexture&&(J=32879);const te=Ge(E,b),ie=b.source;t.bindTexture(J,E.__webglTexture,33984+k);const Se=n.get(ie);if(ie.version!==Se.__version||te===!0){t.activeTexture(33984+k),s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const re=M(b)&&y(b.image)===!1;let j=v(b.image,re,!1,u);j=bn(b,j);const pe=y(j)||o,ve=r.convert(b.format,b.encoding);let ce=r.convert(b.type),me=x(b.internalFormat,ve,ce,b.encoding,b.isVideoTexture);q(J,b,pe);let he;const Oe=b.mipmaps,Ze=o&&b.isVideoTexture!==!0,dt=Se.__version===void 0||te===!0,L=w(b,j,pe);if(b.isDepthTexture)me=6402,o?b.type===Nn?me=36012:b.type===ni?me=33190:b.type===Ti?me=35056:me=33189:b.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===wi&&me===6402&&b.type!==Gu&&b.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ni,ce=r.convert(b.type)),b.format===Li&&me===6402&&(me=34041,b.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ti,ce=r.convert(b.type))),dt&&(Ze?t.texStorage2D(3553,1,me,j.width,j.height):t.texImage2D(3553,0,me,j.width,j.height,0,ve,ce,null));else if(b.isDataTexture)if(Oe.length>0&&pe){Ze&&dt&&t.texStorage2D(3553,L,me,Oe[0].width,Oe[0].height);for(let V=0,K=Oe.length;V<K;V++)he=Oe[V],Ze?t.texSubImage2D(3553,V,0,0,he.width,he.height,ve,ce,he.data):t.texImage2D(3553,V,me,he.width,he.height,0,ve,ce,he.data);b.generateMipmaps=!1}else Ze?(dt&&t.texStorage2D(3553,L,me,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,ve,ce,j.data)):t.texImage2D(3553,0,me,j.width,j.height,0,ve,ce,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ze&&dt&&t.texStorage3D(35866,L,me,Oe[0].width,Oe[0].height,j.depth);for(let V=0,K=Oe.length;V<K;V++)he=Oe[V],b.format!==Rt?ve!==null?Ze?t.compressedTexSubImage3D(35866,V,0,0,0,he.width,he.height,j.depth,ve,he.data,0,0):t.compressedTexImage3D(35866,V,me,he.width,he.height,j.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(35866,V,0,0,0,he.width,he.height,j.depth,ve,ce,he.data):t.texImage3D(35866,V,me,he.width,he.height,j.depth,0,ve,ce,he.data)}else{Ze&&dt&&t.texStorage2D(3553,L,me,Oe[0].width,Oe[0].height);for(let V=0,K=Oe.length;V<K;V++)he=Oe[V],b.format!==Rt?ve!==null?Ze?t.compressedTexSubImage2D(3553,V,0,0,he.width,he.height,ve,he.data):t.compressedTexImage2D(3553,V,me,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(3553,V,0,0,he.width,he.height,ve,ce,he.data):t.texImage2D(3553,V,me,he.width,he.height,0,ve,ce,he.data)}else if(b.isDataArrayTexture)Ze?(dt&&t.texStorage3D(35866,L,me,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,ve,ce,j.data)):t.texImage3D(35866,0,me,j.width,j.height,j.depth,0,ve,ce,j.data);else if(b.isData3DTexture)Ze?(dt&&t.texStorage3D(32879,L,me,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,ve,ce,j.data)):t.texImage3D(32879,0,me,j.width,j.height,j.depth,0,ve,ce,j.data);else if(b.isFramebufferTexture){if(dt)if(Ze)t.texStorage2D(3553,L,me,j.width,j.height);else{let V=j.width,K=j.height;for(let se=0;se<L;se++)t.texImage2D(3553,se,me,V,K,0,ve,ce,null),V>>=1,K>>=1}}else if(Oe.length>0&&pe){Ze&&dt&&t.texStorage2D(3553,L,me,Oe[0].width,Oe[0].height);for(let V=0,K=Oe.length;V<K;V++)he=Oe[V],Ze?t.texSubImage2D(3553,V,0,0,ve,ce,he):t.texImage2D(3553,V,me,ve,ce,he);b.generateMipmaps=!1}else Ze?(dt&&t.texStorage2D(3553,L,me,j.width,j.height),t.texSubImage2D(3553,0,0,0,ve,ce,j)):t.texImage2D(3553,0,me,ve,ce,j);A(b,pe)&&C(J),Se.__version=ie.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function we(E,b,k){if(b.image.length!==6)return;const J=Ge(E,b),te=b.source;t.bindTexture(34067,E.__webglTexture,33984+k);const ie=n.get(te);if(te.version!==ie.__version||J===!0){t.activeTexture(33984+k),s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const Se=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,j=[];for(let V=0;V<6;V++)!Se&&!re?j[V]=v(b.image[V],!1,!0,c):j[V]=re?b.image[V].image:b.image[V],j[V]=bn(b,j[V]);const pe=j[0],ve=y(pe)||o,ce=r.convert(b.format,b.encoding),me=r.convert(b.type),he=x(b.internalFormat,ce,me,b.encoding),Oe=o&&b.isVideoTexture!==!0,Ze=ie.__version===void 0||J===!0;let dt=w(b,pe,ve);q(34067,b,ve);let L;if(Se){Oe&&Ze&&t.texStorage2D(34067,dt,he,pe.width,pe.height);for(let V=0;V<6;V++){L=j[V].mipmaps;for(let K=0;K<L.length;K++){const se=L[K];b.format!==Rt?ce!==null?Oe?t.compressedTexSubImage2D(34069+V,K,0,0,se.width,se.height,ce,se.data):t.compressedTexImage2D(34069+V,K,he,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+V,K,0,0,se.width,se.height,ce,me,se.data):t.texImage2D(34069+V,K,he,se.width,se.height,0,ce,me,se.data)}}}else{L=b.mipmaps,Oe&&Ze&&(L.length>0&&dt++,t.texStorage2D(34067,dt,he,j[0].width,j[0].height));for(let V=0;V<6;V++)if(re){Oe?t.texSubImage2D(34069+V,0,0,0,j[V].width,j[V].height,ce,me,j[V].data):t.texImage2D(34069+V,0,he,j[V].width,j[V].height,0,ce,me,j[V].data);for(let K=0;K<L.length;K++){const ue=L[K].image[V].image;Oe?t.texSubImage2D(34069+V,K+1,0,0,ue.width,ue.height,ce,me,ue.data):t.texImage2D(34069+V,K+1,he,ue.width,ue.height,0,ce,me,ue.data)}}else{Oe?t.texSubImage2D(34069+V,0,0,0,ce,me,j[V]):t.texImage2D(34069+V,0,he,ce,me,j[V]);for(let K=0;K<L.length;K++){const se=L[K];Oe?t.texSubImage2D(34069+V,K+1,0,0,ce,me,se.image[V]):t.texImage2D(34069+V,K+1,he,ce,me,se.image[V])}}}A(b,ve)&&C(34067),ie.__version=te.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function ae(E,b,k,J,te){const ie=r.convert(k.format,k.encoding),Se=r.convert(k.type),re=x(k.internalFormat,ie,Se,k.encoding);n.get(b).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,re,b.width,b.height,b.depth,0,ie,Se,null):t.texImage2D(te,0,re,b.width,b.height,0,ie,Se,null)),t.bindFramebuffer(36160,E),We(b)?d.framebufferTexture2DMultisampleEXT(36160,J,te,n.get(k).__webglTexture,0,gt(b)):(te===3553||te>=34069&&te<=34074)&&s.framebufferTexture2D(36160,J,te,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ye(E,b,k){if(s.bindRenderbuffer(36161,E),b.depthBuffer&&!b.stencilBuffer){let J=33189;if(k||We(b)){const te=b.depthTexture;te&&te.isDepthTexture&&(te.type===Nn?J=36012:te.type===ni&&(J=33190));const ie=gt(b);We(b)?d.renderbufferStorageMultisampleEXT(36161,ie,J,b.width,b.height):s.renderbufferStorageMultisample(36161,ie,J,b.width,b.height)}else s.renderbufferStorage(36161,J,b.width,b.height);s.framebufferRenderbuffer(36160,36096,36161,E)}else if(b.depthBuffer&&b.stencilBuffer){const J=gt(b);k&&We(b)===!1?s.renderbufferStorageMultisample(36161,J,35056,b.width,b.height):We(b)?d.renderbufferStorageMultisampleEXT(36161,J,35056,b.width,b.height):s.renderbufferStorage(36161,34041,b.width,b.height),s.framebufferRenderbuffer(36160,33306,36161,E)}else{const J=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0;te<J.length;te++){const ie=J[te],Se=r.convert(ie.format,ie.encoding),re=r.convert(ie.type),j=x(ie.internalFormat,Se,re,ie.encoding),pe=gt(b);k&&We(b)===!1?s.renderbufferStorageMultisample(36161,pe,j,b.width,b.height):We(b)?d.renderbufferStorageMultisampleEXT(36161,pe,j,b.width,b.height):s.renderbufferStorage(36161,j,b.width,b.height)}}s.bindRenderbuffer(36161,null)}function Pe(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),U(b.depthTexture,0);const J=n.get(b.depthTexture).__webglTexture,te=gt(b);if(b.depthTexture.format===wi)We(b)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,te):s.framebufferTexture2D(36160,36096,3553,J,0);else if(b.depthTexture.format===Li)We(b)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,te):s.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function _e(E){const b=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Pe(b.__webglFramebuffer,E)}else if(k){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]=s.createRenderbuffer(),Ye(b.__webglDepthbuffer[J],E,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Ye(b.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function mt(E,b,k){const J=n.get(E);b!==void 0&&ae(J.__webglFramebuffer,E,E.texture,36064,3553),k!==void 0&&_e(E)}function Lt(E){const b=E.texture,k=n.get(E),J=n.get(b);E.addEventListener("dispose",ee),E.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=b.version,a.memory.textures++);const te=E.isWebGLCubeRenderTarget===!0,ie=E.isWebGLMultipleRenderTargets===!0,Se=y(E)||o;if(te){k.__webglFramebuffer=[];for(let re=0;re<6;re++)k.__webglFramebuffer[re]=s.createFramebuffer()}else{if(k.__webglFramebuffer=s.createFramebuffer(),ie)if(i.drawBuffers){const re=E.texture;for(let j=0,pe=re.length;j<pe;j++){const ve=n.get(re[j]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&We(E)===!1){const re=ie?b:[b];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let j=0;j<re.length;j++){const pe=re[j];k.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(36161,k.__webglColorRenderbuffer[j]);const ve=r.convert(pe.format,pe.encoding),ce=r.convert(pe.type),me=x(pe.internalFormat,ve,ce,pe.encoding,E.isXRRenderTarget===!0),he=gt(E);s.renderbufferStorageMultisample(36161,he,me,E.width,E.height),s.framebufferRenderbuffer(36160,36064+j,36161,k.__webglColorRenderbuffer[j])}s.bindRenderbuffer(36161,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ye(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,J.__webglTexture),q(34067,b,Se);for(let re=0;re<6;re++)ae(k.__webglFramebuffer[re],E,b,36064,34069+re);A(b,Se)&&C(34067),t.unbindTexture()}else if(ie){const re=E.texture;for(let j=0,pe=re.length;j<pe;j++){const ve=re[j],ce=n.get(ve);t.bindTexture(3553,ce.__webglTexture),q(3553,ve,Se),ae(k.__webglFramebuffer,E,ve,36064+j,3553),A(ve,Se)&&C(3553)}t.unbindTexture()}else{let re=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?re=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,J.__webglTexture),q(re,b,Se),ae(k.__webglFramebuffer,E,b,36064,re),A(b,Se)&&C(re),t.unbindTexture()}E.depthBuffer&&_e(E)}function Tt(E){const b=y(E)||o,k=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let J=0,te=k.length;J<te;J++){const ie=k[J];if(A(ie,b)){const Se=E.isWebGLCubeRenderTarget?34067:3553,re=n.get(ie).__webglTexture;t.bindTexture(Se,re),C(Se),t.unbindTexture()}}}function dn(E){if(o&&E.samples>0&&We(E)===!1){const b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],k=E.width,J=E.height;let te=16384;const ie=[],Se=E.stencilBuffer?33306:36096,re=n.get(E),j=E.isWebGLMultipleRenderTargets===!0;if(j)for(let pe=0;pe<b.length;pe++)t.bindFramebuffer(36160,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+pe,36161,null),t.bindFramebuffer(36160,re.__webglFramebuffer),s.framebufferTexture2D(36009,36064+pe,3553,null,0);t.bindFramebuffer(36008,re.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,re.__webglFramebuffer);for(let pe=0;pe<b.length;pe++){ie.push(36064+pe),E.depthBuffer&&ie.push(Se);const ve=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(ve===!1&&(E.depthBuffer&&(te|=256),E.stencilBuffer&&(te|=1024)),j&&s.framebufferRenderbuffer(36008,36064,36161,re.__webglColorRenderbuffer[pe]),ve===!0&&(s.invalidateFramebuffer(36008,[Se]),s.invalidateFramebuffer(36009,[Se])),j){const ce=n.get(b[pe]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,ce,0)}s.blitFramebuffer(0,0,k,J,0,0,k,J,te,9728),p&&s.invalidateFramebuffer(36008,ie)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let pe=0;pe<b.length;pe++){t.bindFramebuffer(36160,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+pe,36161,re.__webglColorRenderbuffer[pe]);const ve=n.get(b[pe]).__webglTexture;t.bindFramebuffer(36160,re.__webglFramebuffer),s.framebufferTexture2D(36009,36064+pe,3553,ve,0)}t.bindFramebuffer(36009,re.__webglMultisampledFramebuffer)}}function gt(E){return Math.min(h,E.samples)}function We(E){const b=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Sn(E){const b=a.render.frame;g.get(E)!==b&&(g.set(E,b),E.update())}function bn(E,b){const k=E.encoding,J=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===go||k!==Bn&&(k===Ce?o===!1?e.has("EXT_sRGB")===!0&&J===Rt?(E.format=go,E.minFilter=Ee,E.generateMipmaps=!1):b=Yu.sRGBToLinear(b):(J!==Rt||te!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),b}this.allocateTextureUnit=G,this.resetTextureUnits=Y,this.setTexture2D=U,this.setTexture2DArray=Q,this.setTexture3D=$,this.setTextureCube=Z,this.rebindTextures=mt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=We}function L0(s,e,t){const n=t.isWebGL2;function i(r,a=null){let o;if(r===hn)return 5121;if(r===df)return 32819;if(r===ff)return 32820;if(r===cf)return 5120;if(r===uf)return 5122;if(r===Gu)return 5123;if(r===hf)return 5124;if(r===ni)return 5125;if(r===Nn)return 5126;if(r===_n)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===pf)return 6406;if(r===Rt)return 6408;if(r===gf)return 6409;if(r===_f)return 6410;if(r===wi)return 6402;if(r===Li)return 34041;if(r===xf)return 6403;if(r===mf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===go)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===vf)return 36244;if(r===yf)return 33319;if(r===Mf)return 33320;if(r===Sf)return 36249;if(r===ha||r===da||r===fa||r===pa)if(a===Ce)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ha)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ha)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===da)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pl||r===ml||r===gl||r===_l)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===pl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ml)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_l)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===xl||r===vl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===xl)return a===Ce?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===vl)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yl||r===Ml||r===Sl||r===bl||r===Tl||r===wl||r===El||r===Al||r===Cl||r===Rl||r===Ll||r===Dl||r===Pl||r===Il)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===yl)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ml)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sl)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bl)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Tl)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wl)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===El)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Al)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Cl)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rl)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ll)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Dl)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pl)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Il)return a===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Nl)return a===Ce?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Ti?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class D0 extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yi extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P0={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const f=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const S=new yi;S.matrixAutoUpdate=!1,S.visible=!1,c.joints[m.jointName]=S,c.add(S)}const _=c.joints[m.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(P0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class lh extends at{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:wi,u!==wi&&u!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===wi&&(n=ni),n===void 0&&u===Li&&(n=Ti),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1}}class I0 extends Gn{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=null,c=null,u=null,h=null,d=null,p=null;const g=t.getContextAttributes();let m=null,f=null;const _=[],S=[],v=new yt;v.layers.enable(1),v.viewport=new Xe;const y=new yt;y.layers.enable(2),y.viewport=new Xe;const M=[v,y],A=new D0;A.layers.enable(1),A.layers.enable(2);let C=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let U=_[N];return U===void 0&&(U=new Va,_[N]=U),U.getTargetRaySpace()},this.getControllerGrip=function(N){let U=_[N];return U===void 0&&(U=new Va,_[N]=U),U.getGripSpace()},this.getHand=function(N){let U=_[N];return U===void 0&&(U=new Va,_[N]=U),U.getHandSpace()};function w(N){const U=S.indexOf(N.inputSource);if(U===-1)return;const Q=_[U];Q!==void 0&&Q.dispatchEvent({type:N.type,data:N.inputSource})}function I(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",W);for(let N=0;N<_.length;N++){const U=S[N];U!==null&&(S[N]=null,_[N].disconnect(U))}C=null,x=null,e.setRenderTarget(m),d=null,h=null,u=null,i=null,f=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",I),i.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,U),i.updateRenderState({baseLayer:d}),f=new ct(d.framebufferWidth,d.framebufferHeight,{format:Rt,type:hn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let U=null,Q=null,$=null;g.depth&&($=g.stencil?35056:33190,U=g.stencil?Li:wi,Q=g.stencil?Ti:ni);const Z={colorFormat:32856,depthFormat:$,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(Z),i.updateRenderState({layers:[h]}),f=new ct(h.textureWidth,h.textureHeight,{format:Rt,type:hn,depthTexture:new lh(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const oe=e.properties.get(f);oe.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function W(N){for(let U=0;U<N.removed.length;U++){const Q=N.removed[U],$=S.indexOf(Q);$>=0&&(S[$]=null,_[$].dispatchEvent({type:"disconnected",data:Q}))}for(let U=0;U<N.added.length;U++){const Q=N.added[U];let $=S.indexOf(Q);if($===-1){for(let oe=0;oe<_.length;oe++)if(oe>=S.length){S.push(Q),$=oe;break}else if(S[oe]===null){S[oe]=Q,$=oe;break}if($===-1)break}const Z=_[$];Z&&Z.dispatchEvent({type:"connected",data:Q})}}const ee=new R,O=new R;function D(N,U,Q){ee.setFromMatrixPosition(U.matrixWorld),O.setFromMatrixPosition(Q.matrixWorld);const $=ee.distanceTo(O),Z=U.projectionMatrix.elements,oe=Q.projectionMatrix.elements,Te=Z[14]/(Z[10]-1),q=Z[14]/(Z[10]+1),Ge=(Z[9]+1)/Z[5],ye=(Z[9]-1)/Z[5],we=(Z[8]-1)/Z[0],ae=(oe[8]+1)/oe[0],Ye=Te*we,Pe=Te*ae,_e=$/(-we+ae),mt=_e*-we;U.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(mt),N.translateZ(_e),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Lt=Te+_e,Tt=q+_e,dn=Ye-mt,gt=Pe+($-mt),We=Ge*q/Tt*Lt,Sn=ye*q/Tt*Lt;N.projectionMatrix.makePerspective(dn,gt,We,Sn,Lt,Tt)}function z(N,U){U===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(U.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;A.near=y.near=v.near=N.near,A.far=y.far=v.far=N.far,(C!==A.near||x!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,x=A.far);const U=N.parent,Q=A.cameras;z(A,U);for(let Z=0;Z<Q.length;Z++)z(Q[Z],U);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),N.matrix.copy(A.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const $=N.children;for(let Z=0,oe=$.length;Z<oe;Z++)$[Z].updateMatrixWorld(!0);Q.length===2?D(A,v,y):A.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(N){h!==null&&(h.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)};let X=null;function Y(N,U){if(c=U.getViewerPose(l||a),p=U,c!==null){const Q=c.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let $=!1;Q.length!==A.cameras.length&&(A.cameras.length=0,$=!0);for(let Z=0;Z<Q.length;Z++){const oe=Q[Z];let Te=null;if(d!==null)Te=d.getViewport(oe);else{const Ge=u.getViewSubImage(h,oe);Te=Ge.viewport,Z===0&&(e.setRenderTargetTextures(f,Ge.colorTexture,h.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(f))}let q=M[Z];q===void 0&&(q=new yt,q.layers.enable(Z),q.viewport=new Xe,M[Z]=q),q.matrix.fromArray(oe.transform.matrix),q.projectionMatrix.fromArray(oe.projectionMatrix),q.viewport.set(Te.x,Te.y,Te.width,Te.height),Z===0&&A.matrix.copy(q.matrix),$===!0&&A.cameras.push(q)}}for(let Q=0;Q<_.length;Q++){const $=S[Q],Z=_[Q];$!==null&&Z!==void 0&&Z.update($,U,l||a)}X&&X(N,U),p=null}const G=new nh;G.setAnimationLoop(Y),this.setAnimationLoop=function(N){X=N},this.dispose=function(){}}}function N0(s,e){function t(m,f){m.fogColor.value.copy(f.color),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,_,S,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(m,f):f.isMeshToonMaterial?(i(m,f),u(m,f)):f.isMeshPhongMaterial?(i(m,f),c(m,f)):f.isMeshStandardMaterial?(i(m,f),h(m,f),f.isMeshPhysicalMaterial&&d(m,f,v)):f.isMeshMatcapMaterial?(i(m,f),p(m,f)):f.isMeshDepthMaterial?i(m,f):f.isMeshDistanceMaterial?(i(m,f),g(m,f)):f.isMeshNormalMaterial?i(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?o(m,f,_,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===Mt&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===Mt&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const y=s.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let S;f.map?S=f.map:f.specularMap?S=f.specularMap:f.displacementMap?S=f.displacementMap:f.normalMap?S=f.normalMap:f.bumpMap?S=f.bumpMap:f.roughnessMap?S=f.roughnessMap:f.metalnessMap?S=f.metalnessMap:f.alphaMap?S=f.alphaMap:f.emissiveMap?S=f.emissiveMap:f.clearcoatMap?S=f.clearcoatMap:f.clearcoatNormalMap?S=f.clearcoatNormalMap:f.clearcoatRoughnessMap?S=f.clearcoatRoughnessMap:f.iridescenceMap?S=f.iridescenceMap:f.iridescenceThicknessMap?S=f.iridescenceThicknessMap:f.specularIntensityMap?S=f.specularIntensityMap:f.specularColorMap?S=f.specularColorMap:f.transmissionMap?S=f.transmissionMap:f.thicknessMap?S=f.thicknessMap:f.sheenColorMap?S=f.sheenColorMap:f.sheenRoughnessMap&&(S=f.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uvTransform.value.copy(S.matrix));let v;f.aoMap?v=f.aoMap:f.lightMap&&(v=f.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uv2Transform.value.copy(v.matrix))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function o(m,f,_,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=S*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Mt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function F0(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(35375):0;function l(S,v){const y=v.program;n.uniformBlockBinding(S,y)}function c(S,v){let y=i[S.id];y===void 0&&(g(S),y=u(S),i[S.id]=y,S.addEventListener("dispose",f));const M=v.program;n.updateUBOMapping(S,M);const A=e.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function u(S){const v=h();S.__bindingPointIndex=v;const y=s.createBuffer(),M=S.__size,A=S.usage;return s.bindBuffer(35345,y),s.bufferData(35345,M,A),s.bindBuffer(35345,null),s.bindBufferBase(35345,v,y),y}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=i[S.id],y=S.uniforms,M=S.__cache;s.bindBuffer(35345,v);for(let A=0,C=y.length;A<C;A++){const x=y[A];if(p(x,A,M)===!0){const w=x.value,I=x.__offset;typeof w=="number"?(x.__data[0]=w,s.bufferSubData(35345,I,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):w.toArray(x.__data),s.bufferSubData(35345,I,x.__data))}}s.bindBuffer(35345,null)}function p(S,v,y){const M=S.value;if(y[v]===void 0)return typeof M=="number"?y[v]=M:y[v]=M.clone(),!0;if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const A=y[v];if(A.equals(M)===!1)return A.copy(M),!0}return!1}function g(S){const v=S.uniforms;let y=0;const M=16;let A=0;for(let C=0,x=v.length;C<x;C++){const w=v[C],I=m(w);if(w.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,C>0){A=y%M;const W=M-A;A!==0&&W-I.boundary<0&&(y+=M-A,w.__offset=y)}y+=I.storage}return A=y%M,A>0&&(y+=M-A),S.__size=y,S.__cache={},this}function m(S){const v=S.value,y={boundary:0,storage:0};return typeof v=="number"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function f(S){const v=S.target;v.removeEventListener("dispose",f);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function _(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:_}}function O0(){const s=Xr("canvas");return s.style.display="block",s}function ch(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:O0(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Bn,this.physicallyCorrectLights=!1,this.toneMapping=On,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let f=!1,_=0,S=0,v=null,y=-1,M=null;const A=new Xe,C=new Xe;let x=null,w=e.width,I=e.height,W=1,ee=null,O=null;const D=new Xe(0,0,w,I),z=new Xe(0,0,w,I);let X=!1;const Y=new ko;let G=!1,N=!1,U=null;const Q=new Me,$=new ge,Z=new R,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return v===null?W:1}let q=t;function Ge(T,F){for(let B=0;B<T.length;B++){const P=T[B],H=e.getContext(P,F);if(H!==null)return H}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jr}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),q===null){const F=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&F.shift(),q=Ge(F,T),q===null)throw Ge(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ye,we,ae,Ye,Pe,_e,mt,Lt,Tt,dn,gt,We,Sn,bn,E,b,k,J,te,ie,Se,re,j,pe;function ve(){ye=new Kg(q),we=new Hg(q,ye,s),ye.init(we),re=new L0(q,ye,we),ae=new C0(q,ye,we),Ye=new Jg,Pe=new m0,_e=new R0(q,ye,ae,Pe,we,re,Ye),mt=new jg(m),Lt=new Yg(m),Tt=new op(q,we),j=new Vg(q,ye,Tt,we),dn=new Zg(q,Tt,Ye,j),gt=new n_(q,dn,Tt,Ye),te=new t_(q,we,_e),b=new Wg(Pe),We=new p0(m,mt,Lt,ye,we,j,b),Sn=new N0(m,Pe),bn=new _0,E=new b0(ye,we),J=new kg(m,mt,Lt,ae,gt,u,a),k=new A0(m,gt,we),pe=new F0(q,Ye,we,ae),ie=new Gg(q,ye,Ye,we),Se=new $g(q,ye,Ye,we),Ye.programs=We.programs,m.capabilities=we,m.extensions=ye,m.properties=Pe,m.renderLists=bn,m.shadowMap=k,m.state=ae,m.info=Ye}ve();const ce=new I0(m,q);this.xr=ce,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(w,I,!1))},this.getSize=function(T){return T.set(w,I)},this.setSize=function(T,F,B){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,I=F,e.width=Math.floor(T*W),e.height=Math.floor(F*W),B!==!1&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(w*W,I*W).floor()},this.setDrawingBufferSize=function(T,F,B){w=T,I=F,W=B,e.width=Math.floor(T*B),e.height=Math.floor(F*B),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,F,B,P){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,F,B,P),ae.viewport(A.copy(D).multiplyScalar(W).floor())},this.getScissor=function(T){return T.copy(z)},this.setScissor=function(T,F,B,P){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,F,B,P),ae.scissor(C.copy(z).multiplyScalar(W).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(T){ae.setScissorTest(X=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){O=T},this.getClearColor=function(T){return T.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(T=!0,F=!0,B=!0){let P=0;T&&(P|=16384),F&&(P|=256),B&&(P|=1024),q.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),bn.dispose(),E.dispose(),Pe.dispose(),mt.dispose(),Lt.dispose(),gt.dispose(),j.dispose(),pe.dispose(),We.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",se),ce.removeEventListener("sessionend",ue),U&&(U.dispose(),U=null),ze.stop()};function me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const T=Ye.autoReset,F=k.enabled,B=k.autoUpdate,P=k.needsUpdate,H=k.type;ve(),Ye.autoReset=T,k.enabled=F,k.autoUpdate=B,k.needsUpdate=P,k.type=H}function Oe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ze(T){const F=T.target;F.removeEventListener("dispose",Ze),dt(F)}function dt(T){L(T),Pe.remove(T)}function L(T){const F=Pe.get(T).programs;F!==void 0&&(F.forEach(function(B){We.releaseProgram(B)}),T.isShaderMaterial&&We.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,B,P,H,fe){F===null&&(F=oe);const be=H.isMesh&&H.matrixWorld.determinant()<0,Re=Ch(T,F,B,P,H);ae.setMaterial(P,be);let Ae=B.index;const Be=B.attributes.position;if(Ae===null){if(Be===void 0||Be.count===0)return}else if(Ae.count===0)return;let Ie=1;P.wireframe===!0&&(Ae=dn.getWireframeAttribute(B),Ie=2),j.setup(H,P,Re,B,Ae);let Fe,et=ie;Ae!==null&&(Fe=Tt.get(Ae),et=Se,et.setIndex(Fe));const ci=Ae!==null?Ae.count:Be.count,Fi=B.drawRange.start*Ie,Oi=B.drawRange.count*Ie,fn=fe!==null?fe.start*Ie:0,ke=fe!==null?fe.count*Ie:1/0,Ui=Math.max(Fi,fn),nt=Math.min(ci,Fi+Oi,fn+ke)-1,Ht=Math.max(0,nt-Ui+1);if(Ht!==0){if(H.isMesh)P.wireframe===!0?(ae.setLineWidth(P.wireframeLinewidth*Te()),et.setMode(1)):et.setMode(4);else if(H.isLine){let Hn=P.linewidth;Hn===void 0&&(Hn=1),ae.setLineWidth(Hn*Te()),H.isLineSegments?et.setMode(1):H.isLineLoop?et.setMode(2):et.setMode(3)}else H.isPoints?et.setMode(0):H.isSprite&&et.setMode(4);if(H.isInstancedMesh)et.renderInstances(Ui,Ht,H.count);else if(B.isInstancedBufferGeometry){const Hn=Math.min(B.instanceCount,B._maxInstanceCount);et.renderInstances(Ui,Ht,Hn)}else et.render(Ui,Ht)}},this.compile=function(T,F){function B(P,H,fe){P.transparent===!0&&P.side===Ut?(P.side=Mt,P.needsUpdate=!0,Gt(P,H,fe),P.side=ai,P.needsUpdate=!0,Gt(P,H,fe),P.side=Ut):Gt(P,H,fe)}d=E.get(T),d.init(),g.push(d),T.traverseVisible(function(P){P.isLight&&P.layers.test(F.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),d.setupLights(m.physicallyCorrectLights),T.traverse(function(P){const H=P.material;if(H)if(Array.isArray(H))for(let fe=0;fe<H.length;fe++){const be=H[fe];B(be,T,P)}else B(H,T,P)}),g.pop(),d=null};let V=null;function K(T){V&&V(T)}function se(){ze.stop()}function ue(){ze.start()}const ze=new nh;ze.setAnimationLoop(K),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(T){V=T,ce.setAnimationLoop(T),T===null?ze.stop():ze.start()},ce.addEventListener("sessionstart",se),ce.addEventListener("sessionend",ue),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,F,v),d=E.get(T,g.length),d.init(),g.push(d),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(Q),N=this.localClippingEnabled,G=b.init(this.clippingPlanes,N,F),h=bn.get(T,p.length),h.init(),p.push(h),ft(T,F,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(ee,O),G===!0&&b.beginShadows();const B=d.state.shadowsArray;if(k.render(B,T,F),G===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(h,T),d.setupLights(m.physicallyCorrectLights),F.isArrayCamera){const P=F.cameras;for(let H=0,fe=P.length;H<fe;H++){const be=P[H];xt(h,T,be,be.viewport)}}else xt(h,T,F);v!==null&&(_e.updateMultisampleRenderTarget(v),_e.updateRenderTargetMipmap(v)),T.isScene===!0&&T.onAfterRender(m,T,F),j.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function ft(T,F,B,P){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){P&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const be=gt.update(T),Re=T.material;Re.visible&&h.push(T,be,Re,B,Z.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ye.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ye.render.frame),!T.frustumCulled||Y.intersectsObject(T))){P&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const be=gt.update(T),Re=T.material;if(Array.isArray(Re)){const Ae=be.groups;for(let Be=0,Ie=Ae.length;Be<Ie;Be++){const Fe=Ae[Be],et=Re[Fe.materialIndex];et&&et.visible&&h.push(T,be,et,B,Z.z,Fe)}}else Re.visible&&h.push(T,be,Re,B,Z.z,null)}}const fe=T.children;for(let be=0,Re=fe.length;be<Re;be++)ft(fe[be],F,B,P)}function xt(T,F,B,P){const H=T.opaque,fe=T.transmissive,be=T.transparent;d.setupLightsView(B),fe.length>0&&li(H,F,B),P&&ae.viewport(A.copy(P)),H.length>0&&$e(H,F,B),fe.length>0&&$e(fe,F,B),be.length>0&&$e(be,F,B),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function li(T,F,B){const P=we.isWebGL2;U===null&&(U=new ct(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?_n:hn,minFilter:_r,samples:P&&r===!0?4:0})),m.getDrawingBufferSize($),P?U.setSize($.x,$.y):U.setSize(js($.x),js($.y));const H=m.getRenderTarget();m.setRenderTarget(U),m.clear();const fe=m.toneMapping;m.toneMapping=On,$e(T,F,B),m.toneMapping=fe,_e.updateMultisampleRenderTarget(U),_e.updateRenderTargetMipmap(U),m.setRenderTarget(H)}function $e(T,F,B){const P=F.isScene===!0?F.overrideMaterial:null;for(let H=0,fe=T.length;H<fe;H++){const be=T[H],Re=be.object,Ae=be.geometry,Be=P===null?be.material:P,Ie=be.group;Re.layers.test(B.layers)&&Tn(Re,F,B,Ae,Be,Ie)}}function Tn(T,F,B,P,H,fe){T.onBeforeRender(m,F,B,P,H,fe),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(m,F,B,P,T,fe),H.transparent===!0&&H.side===Ut?(H.side=Mt,H.needsUpdate=!0,m.renderBufferDirect(B,F,P,H,T,fe),H.side=ai,H.needsUpdate=!0,m.renderBufferDirect(B,F,P,H,T,fe),H.side=Ut):m.renderBufferDirect(B,F,P,H,T,fe),T.onAfterRender(m,F,B,P,H,fe)}function Gt(T,F,B){F.isScene!==!0&&(F=oe);const P=Pe.get(T),H=d.state.lights,fe=d.state.shadowsArray,be=H.state.version,Re=We.getParameters(T,H.state,fe,F,B),Ae=We.getProgramCacheKey(Re);let Be=P.programs;P.environment=T.isMeshStandardMaterial?F.environment:null,P.fog=F.fog,P.envMap=(T.isMeshStandardMaterial?Lt:mt).get(T.envMap||P.environment),Be===void 0&&(T.addEventListener("dispose",Ze),Be=new Map,P.programs=Be);let Ie=Be.get(Ae);if(Ie!==void 0){if(P.currentProgram===Ie&&P.lightsStateVersion===be)return Qo(T,Re),Ie}else Re.uniforms=We.getUniforms(T),T.onBuild(B,Re,m),T.onBeforeCompile(Re,m),Ie=We.acquireProgram(Re,Ae),Be.set(Ae,Ie),P.uniforms=Re.uniforms;const Fe=P.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=b.uniform),Qo(T,Re),P.needsLights=Lh(T),P.lightsStateVersion=be,P.needsLights&&(Fe.ambientLightColor.value=H.state.ambient,Fe.lightProbe.value=H.state.probe,Fe.directionalLights.value=H.state.directional,Fe.directionalLightShadows.value=H.state.directionalShadow,Fe.spotLights.value=H.state.spot,Fe.spotLightShadows.value=H.state.spotShadow,Fe.rectAreaLights.value=H.state.rectArea,Fe.ltc_1.value=H.state.rectAreaLTC1,Fe.ltc_2.value=H.state.rectAreaLTC2,Fe.pointLights.value=H.state.point,Fe.pointLightShadows.value=H.state.pointShadow,Fe.hemisphereLights.value=H.state.hemi,Fe.directionalShadowMap.value=H.state.directionalShadowMap,Fe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Fe.spotShadowMap.value=H.state.spotShadowMap,Fe.spotLightMatrix.value=H.state.spotLightMatrix,Fe.spotLightMap.value=H.state.spotLightMap,Fe.pointShadowMap.value=H.state.pointShadowMap,Fe.pointShadowMatrix.value=H.state.pointShadowMatrix);const et=Ie.getUniforms(),ci=Fs.seqWithValue(et.seq,Fe);return P.currentProgram=Ie,P.uniformsList=ci,Ie}function Qo(T,F){const B=Pe.get(T);B.outputEncoding=F.outputEncoding,B.instancing=F.instancing,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function Ch(T,F,B,P,H){F.isScene!==!0&&(F=oe),_e.resetTextureUnits();const fe=F.fog,be=P.isMeshStandardMaterial?F.environment:null,Re=v===null?m.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:Bn,Ae=(P.isMeshStandardMaterial?Lt:mt).get(P.envMap||be),Be=P.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!P.normalMap&&!!B.attributes.tangent,Fe=!!B.morphAttributes.position,et=!!B.morphAttributes.normal,ci=!!B.morphAttributes.color,Fi=P.toneMapped?m.toneMapping:On,Oi=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,fn=Oi!==void 0?Oi.length:0,ke=Pe.get(P),Ui=d.state.lights;if(G===!0&&(N===!0||T!==M)){const Nt=T===M&&P.id===y;b.setState(P,T,Nt)}let nt=!1;P.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ui.state.version||ke.outputEncoding!==Re||H.isInstancedMesh&&ke.instancing===!1||!H.isInstancedMesh&&ke.instancing===!0||H.isSkinnedMesh&&ke.skinning===!1||!H.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Ae||P.fog===!0&&ke.fog!==fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==b.numPlanes||ke.numIntersection!==b.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==Ie||ke.morphTargets!==Fe||ke.morphNormals!==et||ke.morphColors!==ci||ke.toneMapping!==Fi||we.isWebGL2===!0&&ke.morphTargetsCount!==fn)&&(nt=!0):(nt=!0,ke.__version=P.version);let Ht=ke.currentProgram;nt===!0&&(Ht=Gt(P,F,H));let Hn=!1,Tr=!1,ta=!1;const wt=Ht.getUniforms(),ui=ke.uniforms;if(ae.useProgram(Ht.program)&&(Hn=!0,Tr=!0,ta=!0),P.id!==y&&(y=P.id,Tr=!0),Hn||M!==T){if(wt.setValue(q,"projectionMatrix",T.projectionMatrix),we.logarithmicDepthBuffer&&wt.setValue(q,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,Tr=!0,ta=!0),P.isShaderMaterial||P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshStandardMaterial||P.envMap){const Nt=wt.map.cameraPosition;Nt!==void 0&&Nt.setValue(q,Z.setFromMatrixPosition(T.matrixWorld))}(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&wt.setValue(q,"isOrthographic",T.isOrthographicCamera===!0),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial||P.isShadowMaterial||H.isSkinnedMesh)&&wt.setValue(q,"viewMatrix",T.matrixWorldInverse)}if(H.isSkinnedMesh){wt.setOptional(q,H,"bindMatrix"),wt.setOptional(q,H,"bindMatrixInverse");const Nt=H.skeleton;Nt&&(we.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),wt.setValue(q,"boneTexture",Nt.boneTexture,_e),wt.setValue(q,"boneTextureSize",Nt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const na=B.morphAttributes;if((na.position!==void 0||na.normal!==void 0||na.color!==void 0&&we.isWebGL2===!0)&&te.update(H,B,P,Ht),(Tr||ke.receiveShadow!==H.receiveShadow)&&(ke.receiveShadow=H.receiveShadow,wt.setValue(q,"receiveShadow",H.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(ui.envMap.value=Ae,ui.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Tr&&(wt.setValue(q,"toneMappingExposure",m.toneMappingExposure),ke.needsLights&&Rh(ui,ta),fe&&P.fog===!0&&Sn.refreshFogUniforms(ui,fe),Sn.refreshMaterialUniforms(ui,P,W,I,U),Fs.upload(q,ke.uniformsList,ui,_e)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Fs.upload(q,ke.uniformsList,ui,_e),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&wt.setValue(q,"center",H.center),wt.setValue(q,"modelViewMatrix",H.modelViewMatrix),wt.setValue(q,"normalMatrix",H.normalMatrix),wt.setValue(q,"modelMatrix",H.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){const Nt=P.uniformsGroups;for(let ia=0,Dh=Nt.length;ia<Dh;ia++)if(we.isWebGL2){const el=Nt[ia];pe.update(el,Ht),pe.bind(el,Ht)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ht}function Rh(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Lh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(T,F,B){Pe.get(T.texture).__webglTexture=F,Pe.get(T.depthTexture).__webglTexture=B;const P=Pe.get(T);P.__hasExternalTextures=!0,P.__hasExternalTextures&&(P.__autoAllocateDepthBuffer=B===void 0,P.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const B=Pe.get(T);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,B=0){v=T,_=F,S=B;let P=!0,H=null,fe=!1,be=!1;if(T){const Ae=Pe.get(T);Ae.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(36160,null),P=!1):Ae.__webglFramebuffer===void 0?_e.setupRenderTarget(T):Ae.__hasExternalTextures&&_e.rebindTextures(T,Pe.get(T.texture).__webglTexture,Pe.get(T.depthTexture).__webglTexture);const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(be=!0);const Ie=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(H=Ie[F],fe=!0):we.isWebGL2&&T.samples>0&&_e.useMultisampledRTT(T)===!1?H=Pe.get(T).__webglMultisampledFramebuffer:H=Ie,A.copy(T.viewport),C.copy(T.scissor),x=T.scissorTest}else A.copy(D).multiplyScalar(W).floor(),C.copy(z).multiplyScalar(W).floor(),x=X;if(ae.bindFramebuffer(36160,H)&&we.drawBuffers&&P&&ae.drawBuffers(T,H),ae.viewport(A),ae.scissor(C),ae.setScissorTest(x),fe){const Ae=Pe.get(T.texture);q.framebufferTexture2D(36160,36064,34069+F,Ae.__webglTexture,B)}else if(be){const Ae=Pe.get(T.texture),Be=F||0;q.framebufferTextureLayer(36160,36064,Ae.__webglTexture,B||0,Be)}y=-1},this.readRenderTargetPixels=function(T,F,B,P,H,fe,be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){ae.bindFramebuffer(36160,Re);try{const Ae=T.texture,Be=Ae.format,Ie=Ae.type;if(Be!==Rt&&re.convert(Be)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ie===_n&&(ye.has("EXT_color_buffer_half_float")||we.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ie!==hn&&re.convert(Ie)!==q.getParameter(35738)&&!(Ie===Nn&&(we.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-P&&B>=0&&B<=T.height-H&&q.readPixels(F,B,P,H,re.convert(Be),re.convert(Ie),fe)}finally{const Ae=v!==null?Pe.get(v).__webglFramebuffer:null;ae.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(T,F,B=0){const P=Math.pow(2,-B),H=Math.floor(F.image.width*P),fe=Math.floor(F.image.height*P);_e.setTexture2D(F,0),q.copyTexSubImage2D(3553,B,0,0,T.x,T.y,H,fe),ae.unbindTexture()},this.copyTextureToTexture=function(T,F,B,P=0){const H=F.image.width,fe=F.image.height,be=re.convert(B.format),Re=re.convert(B.type);_e.setTexture2D(B,0),q.pixelStorei(37440,B.flipY),q.pixelStorei(37441,B.premultiplyAlpha),q.pixelStorei(3317,B.unpackAlignment),F.isDataTexture?q.texSubImage2D(3553,P,T.x,T.y,H,fe,be,Re,F.image.data):F.isCompressedTexture?q.compressedTexSubImage2D(3553,P,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,be,F.mipmaps[0].data):q.texSubImage2D(3553,P,T.x,T.y,be,Re,F.image),P===0&&B.generateMipmaps&&q.generateMipmap(3553),ae.unbindTexture()},this.copyTextureToTexture3D=function(T,F,B,P,H=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=T.max.x-T.min.x+1,be=T.max.y-T.min.y+1,Re=T.max.z-T.min.z+1,Ae=re.convert(P.format),Be=re.convert(P.type);let Ie;if(P.isData3DTexture)_e.setTexture3D(P,0),Ie=32879;else if(P.isDataArrayTexture)_e.setTexture2DArray(P,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,P.flipY),q.pixelStorei(37441,P.premultiplyAlpha),q.pixelStorei(3317,P.unpackAlignment);const Fe=q.getParameter(3314),et=q.getParameter(32878),ci=q.getParameter(3316),Fi=q.getParameter(3315),Oi=q.getParameter(32877),fn=B.isCompressedTexture?B.mipmaps[0]:B.image;q.pixelStorei(3314,fn.width),q.pixelStorei(32878,fn.height),q.pixelStorei(3316,T.min.x),q.pixelStorei(3315,T.min.y),q.pixelStorei(32877,T.min.z),B.isDataTexture||B.isData3DTexture?q.texSubImage3D(Ie,H,F.x,F.y,F.z,fe,be,Re,Ae,Be,fn.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ie,H,F.x,F.y,F.z,fe,be,Re,Ae,fn.data)):q.texSubImage3D(Ie,H,F.x,F.y,F.z,fe,be,Re,Ae,Be,fn),q.pixelStorei(3314,Fe),q.pixelStorei(32878,et),q.pixelStorei(3316,ci),q.pixelStorei(3315,Fi),q.pixelStorei(32877,Oi),H===0&&P.generateMipmaps&&q.generateMipmap(Ie),ae.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?_e.setTextureCube(T,0):T.isData3DTexture?_e.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?_e.setTexture2DArray(T,0):_e.setTexture2D(T,0),ae.unbindTexture()},this.resetState=function(){_=0,S=0,v=null,ae.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class U0 extends ch{}U0.prototype.isWebGL1Renderer=!0;class yo extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class z0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=po,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Et=new R;class Wo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array),r=qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new st(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gc=new R,_c=new Xe,xc=new Xe,B0=new R,vc=new Me;class k0 extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Me,this.bindMatrixInverse=new Me}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Xe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;_c.fromBufferAttribute(i.attributes.skinIndex,e),xc.fromBufferAttribute(i.attributes.skinWeight,e),gc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=xc.getComponent(r);if(a!==0){const o=_c.getComponent(r);vc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(B0.copy(gc).applyMatrix4(vc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class uh extends Je{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hh extends at{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ke,u=Ke,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yc=new Me,V0=new Me;class jo{constructor(e=[],t=[]){this.uuid=un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Me)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Me;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:V0;yc.multiplyMatrices(o,t[r]),yc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new jo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=ju(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new hh(t,e,e,Rt,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new uh),this.bones.push(a),this.boneInverses.push(new Me().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Mc extends st{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Sc=new Me,bc=new Me,ws=[],G0=new Me,Rr=new Bt;class H0 extends Bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,G0)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Sc),bc.multiplyMatrices(n,Sc),Rr.matrixWorld=bc,Rr.raycast(e,ws);for(let a=0,o=ws.length;a<o;a++){const l=ws[a];l.instanceId=r,l.object=this,t.push(l)}ws.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class dh extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new R,wc=new R,Ec=new Me,Ga=new Uo,Es=new vr;class qo extends Je{constructor(e=new tn,t=new dh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Tc.fromBufferAttribute(t,i-1),wc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Tc.distanceTo(wc);e.setAttribute("lineDistance",new Un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(i),Es.radius+=r,e.ray.intersectsSphere(Es)===!1)return;Ec.copy(i).invert(),Ga.copy(e.ray).applyMatrix4(Ec);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,u=new R,h=new R,d=new R,p=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let v=_,y=S-1;v<y;v+=p){const M=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(f,M),u.fromBufferAttribute(f,A),Ga.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),S=Math.min(f.count,a.start+a.count);for(let v=_,y=S-1;v<y;v+=p){if(c.fromBufferAttribute(f,v),u.fromBufferAttribute(f,v+1),Ga.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Ac=new R,Cc=new R;class W0 extends qo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ac.fromBufferAttribute(t,i),Cc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ac.distanceTo(Cc);e.setAttribute("lineDistance",new Un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class j0 extends qo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class fh extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rc=new Me,Mo=new Uo,As=new vr,Cs=new R;class q0 extends Je{constructor(e=new tn,t=new fh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(i),As.radius+=r,e.ray.intersectsSphere(As)===!1)return;Rc.copy(i).invert(),Mo.copy(e.ray).applyMatrix4(Rc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,m=p;g<m;g++){const f=c.getX(g);Cs.fromBufferAttribute(h,f),Lc(Cs,f,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,m=p;g<m;g++)Cs.fromBufferAttribute(h,g),Lc(Cs,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Lc(s,e,t,n,i,r,a){const o=Mo.distanceSqToPoint(s);if(o<t){const l=new R;Mo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class X0 extends at{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Ee,this.magFilter=r!==void 0?r:Ee,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Dc extends at{constructor(e,t,n){super({width:e,height:t}),this.isFramebufferTexture=!0,this.format=n,this.magFilter=Ke,this.minFilter=Ke,this.generateMipmaps=!1,this.needsUpdate=!0}}class ns extends Qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ii extends ns{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function $n(s,e,t){return ph(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function Rs(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ph(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Y0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Pc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function mh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class is{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class K0 extends is{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fl,endingEnd:Fl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ol:r=e,o=2*t-n;break;case Ul:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ol:a=e,l=2*n-t;break;case Ul:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),m=g*g,f=m*g,_=-d*f+2*d*m-d*g,S=(1+d)*f+(-1.5-2*d)*m+(-.5+d)*g+1,v=(-1-p)*f+(1.5+p)*m+.5*g,y=p*f-p*m;for(let M=0;M!==o;++M)r[M]=_*a[u+M]+S*a[c+M]+v*a[l+M]+y*a[h+M];return r}}class Z0 extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class $0 extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rs(t,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rs(e.times,Array),values:Rs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Z0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new K0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case jr:t=this.InterpolantFactoryMethodDiscrete;break;case fr:t=this.InterpolantFactoryMethodLinear;break;case ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=$n(n,r,a),this.values=$n(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&ph(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=$n(this.times),t=$n(this.values),n=this.getValueSize(),i=this.getInterpolation()===ma,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[d+g]||m!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=$n(e,0,a),this.values=$n(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=$n(this.times,0),t=$n(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=fr;class Mr extends Mn{}Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=jr;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class gh extends Mn{}gh.prototype.ValueTypeName="color";class Yr extends Mn{}Yr.prototype.ValueTypeName="number";class J0 extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Di extends Mn{InterpolantFactoryMethodLinear(e){return new J0(this.times,this.values,this.getValueSize(),e)}}Di.prototype.ValueTypeName="quaternion";Di.prototype.DefaultInterpolation=fr;Di.prototype.InterpolantFactoryMethodSmooth=void 0;class Sr extends Mn{}Sr.prototype.ValueTypeName="string";Sr.prototype.ValueBufferType=Array;Sr.prototype.DefaultInterpolation=jr;Sr.prototype.InterpolantFactoryMethodLinear=void 0;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Kr extends Mn{}Kr.prototype.ValueTypeName="vector";class Q0{constructor(e,t=-1,n,i=Tf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=un(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(tx(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Mn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Y0(l);l=Pc(l,1,u),c=Pc(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Yr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,m){if(p.length!==0){const f=[],_=[];mh(p,f,_,g),f.length!==0&&m.push(new h(d,f,_))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let m=0;m<d[g].morphTargets.length;m++)p[d[g].morphTargets[m]]=-1;for(const m in p){const f=[],_=[];for(let S=0;S!==d[g].morphTargets.length;++S){const v=d[g];f.push(v.time),_.push(v.morphTarget===m?1:0)}i.push(new Yr(".morphTargetInfluence["+m+"]",f,_))}l=p.length*a}else{const p=".bones["+t[h].name+"]";n(Kr,p+".position",d,"pos",i),n(Di,p+".quaternion",d,"rot",i),n(Kr,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ex(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yr;case"vector":case"vector2":case"vector3":case"vector4":return Kr;case"color":return gh;case"quaternion":return Di;case"bool":case"boolean":return Mr;case"string":return Sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function tx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ex(s.type);if(s.times===void 0){const t=[],n=[];mh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const mr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class nx{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const ix=new nx;class br{constructor(e){this.manager=e!==void 0?e:ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Ln={};class rx extends Error{constructor(e,t){super(e),this.response=t}}class qs extends br{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=mr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ln[e]!==void 0){Ln[e].push({onLoad:t,onProgress:n,onError:i});return}Ln[e]=[],Ln[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ln[e],h=c.body.getReader(),d=c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let m=0;const f=new ReadableStream({start(_){S();function S(){h.read().then(({done:v,value:y})=>{if(v)_.close();else{m+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let A=0,C=u.length;A<C;A++){const x=u[A];x.onProgress&&x.onProgress(M)}_.enqueue(y),S()}})}}});return new Response(f)}else throw new rx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{mr.add(e,c);const u=Ln[e];delete Ln[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Ln[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ln[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class sx extends br{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=mr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Xr("img");function l(){u(),mr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class ax extends br{constructor(e){super(e)}load(e,t,n,i){const r=new at,a=new sx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Qs extends Je{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ha=new Me,Ic=new R,Nc=new R;class Xo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ic),Nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nc),t.updateMatrixWorld(),Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ox extends Xo{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=qr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lx extends Qs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Je.DefaultUp),this.updateMatrix(),this.target=new Je,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ox}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fc=new Me,Lr=new R,Wa=new R;class cx extends Xo{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Lr),Wa.copy(n.position),Wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wa),n.updateMatrixWorld(),i.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Fc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc)}}class _h extends Qs{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new cx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ux extends Xo{constructor(){super(new Go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hx extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DefaultUp),this.updateMatrix(),this.target=new Je,this.shadow=new ux}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dx extends Qs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ai{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class fx extends br{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=mr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){mr.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class px{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Oc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Oc(){return(typeof performance>"u"?Date:performance).now()}const Yo="\\[\\]\\.:\\/",mx=new RegExp("["+Yo+"]","g"),Ko="[^"+Yo+"]",gx="[^"+Yo.replace("\\.","")+"]",_x=/((?:WC+[\/:])*)/.source.replace("WC",Ko),xx=/(WCOD+)?/.source.replace("WCOD",gx),vx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ko),yx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ko),Mx=new RegExp("^"+_x+xx+vx+yx+"$"),Sx=["material","materials","bones","map"];class bx{constructor(e,t,n){const i=n||Ve.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ve{constructor(e,t,n){this.path=t,this.parsedPath=n||Ve.parseTrackName(t),this.node=Ve.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ve.Composite(e,t,n):new Ve(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mx,"")}static parseTrackName(e){const t=Mx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Sx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ve.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ve.Composite=bx;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class le{constructor(e){this.value=e}clone(){return new le(this.value.clone===void 0?this.value:this.value.clone())}}class Tx extends ct{constructor(e,t,n){console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'),super(e,t,n),this.samples=4}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jr);class wx extends br{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Lx(t)}),this.register(function(t){return new Ux(t)}),this.register(function(t){return new zx(t)}),this.register(function(t){return new Px(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new Nx(t)}),this.register(function(t){return new Fx(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new Ox(t)}),this.register(function(t){return new Dx(t)}),this.register(function(t){return new Ax(t)}),this.register(function(t){return new Bx(t)}),this.register(function(t){return new kx(t)})}load(e,t,n,i){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Ai.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new qs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Ai.decodeText(new Uint8Array(e,0,4))===xh){try{a[De.KHR_BINARY_GLTF]=new Vx(e)}catch(u){i&&i(u);return}r=JSON.parse(a[De.KHR_BINARY_GLTF].content)}else r=JSON.parse(Ai.decodeText(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new ev(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const u=r.extensionsUsed[c],h=r.extensionsRequired||[];switch(u){case De.KHR_MATERIALS_UNLIT:a[u]=new Cx;break;case De.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:a[u]=new Wx;break;case De.KHR_DRACO_MESH_COMPRESSION:a[u]=new Gx(r,this.dracoLoader);break;case De.KHR_TEXTURE_TRANSFORM:a[u]=new Hx;break;case De.KHR_MESH_QUANTIZATION:a[u]=new jx;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Ex(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const De={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ax{constructor(e){this.parser=e,this.name=De.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new xe(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new hx(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _h(u),c.distance=h;break;case"spot":c=new lx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Cx{constructor(){this.name=De.KHR_MATERIALS_UNLIT}getMaterialType(){return vi}extendParams(e,t,n){const i=[];e.color=new xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ce))}return Promise.all(i)}}class Rx{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Lx{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ge(o,o)}return Promise.all(r)}}class Dx{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Px{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ce)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Ix{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Nx{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new xe(o[0],o[1],o[2]),Promise.all(r)}}class Fx{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ox{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new xe(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ce)),Promise.all(r)}}class Ux{constructor(e){this.parser=e,this.name=De.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class zx{constructor(e){this.parser=e,this.name=De.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Bx{constructor(e){this.name=De.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class kx{constructor(e){this.name=De.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Xt.TRIANGLES&&c.mode!==Xt.TRIANGLE_STRIP&&c.mode!==Xt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of h){const m=new Me,f=new R,_=new yn,S=new R(1,1,1),v=new H0(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,y),l.SCALE&&S.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,m.compose(f,_,S));for(const y in l)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Je.prototype.copy.call(v,g),v.frustumCulled=!1,this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const xh="glTF",Dr=12,Uc={JSON:1313821514,BIN:5130562};class Vx{constructor(e){this.name=De.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Dr);if(this.header={magic:Ai.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Dr,i=new DataView(e,Dr);let r=0;for(;r<n;){const a=i.getUint32(r,!0);r+=4;const o=i.getUint32(r,!0);if(r+=4,o===Uc.JSON){const l=new Uint8Array(e,Dr+r,a);this.content=Ai.decodeText(l)}else if(o===Uc.BIN){const l=Dr+r;this.body=e.slice(l,l+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Gx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=De.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=bo[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=bo[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],p=Zr[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const g=d.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}h(d)},o,c)})})}}class Hx{constructor(){this.name=De.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class So extends ns{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),a=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new xe().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",a)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class Wx{constructor(){this.name=De.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return So}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new xe(1,1,1),e.opacity=1;const r=[];if(Array.isArray(i.diffuseFactor)){const a=i.diffuseFactor;e.color.fromArray(a),e.opacity=a[3]}if(i.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",i.diffuseTexture,Ce)),e.emissive=new xe(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new xe(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const a=i.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",a)),r.push(n.assignTexture(e,"specularMap",a,Ce))}return Promise.all(r)}createMaterial(e){const t=new So(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=$s,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class jx{constructor(){this.name=De.KHR_MESH_QUANTIZATION}}class vh extends is{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,g=e*c,m=g-c,f=-2*p+3*d,_=p-d,S=1-f,v=_-d+h;for(let y=0;y!==o;y++){const M=a[m+y+o],A=a[m+y+l]*u,C=a[g+y+o],x=a[g+y]*u;r[y]=S*M+v*A+f*C+_*x}return r}}const qx=new yn;class Xx extends vh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return qx.fromArray(r).normalize().toArray(r),r}}const Xt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zc={9728:Ke,9729:Ee,9984:ho,9985:Vu,9986:fo,9987:_r},Bc={33071:Kt,33648:Ws,10497:dr},kc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Yx={CUBICSPLINE:void 0,LINEAR:fr,STEP:jr},ja={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Kx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ns({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),s.DefaultMaterial}function Pr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function gi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Zx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function $x(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jx(s){const e=s.extensions&&s.extensions[De.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Vc(e.attributes):t=s.indices+":"+Vc(s.attributes)+":"+s.mode,t}function Vc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function To(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Qx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class ev{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ex,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new ax(this.options.manager):this.textureLoader=new fx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};Pr(r,o,i),gi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[De.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Ai.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=kc[i.type],c=Zr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let m,f;if(p&&p!==h){const _=Math.floor(d/p),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let v=t.cache.get(S);v||(m=new c(o,_*p,i.count*p/u),v=new z0(m,p/u),t.cache.add(S,v)),f=new Wo(v,l,d%p/u,g)}else o===null?m=new c(i.count*l):m=new c(o,d,i.count*l),f=new st(m,l,g);if(i.sparse!==void 0){const _=kc.SCALAR,S=Zr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new S(a[1],v,i.sparse.count*_),A=new c(a[2],y,i.sparse.count*l);o!==null&&(f=new st(f.array.slice(),f.itemSize,f.normalized));for(let C=0,x=M.length;C<x;C++){const w=M[C];if(f.setX(w,A[C*l]),l>=2&&f.setY(w,A[C*l+1]),l>=3&&f.setZ(w,A[C*l+2]),l>=4&&f.setW(w,A[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"";const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=zc[d.magFilter]||Ee,u.minFilter=zc[d.minFilter]||_r,u.wrapS=Bc[d.wrapS]||dr,u.wrapT=Bc[d.wrapT]||dr,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(m){const f=new at(m);f.needsUpdate=!0,d(f)}),t.load(Ai.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||Qx(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[De.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[De.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[De.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.encoding=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new fh,Qt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new dh,Qt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return ns}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[De.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=i[De.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else if(l[De.KHR_MATERIALS_UNLIT]){const h=i[De.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new xe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Ce)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ut);const u=r.alphaMode||ja.OPAQUE;if(u===ja.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ja.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==vi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ge(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&a!==vi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==vi&&(o.emissive=new xe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==vi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ce)),Promise.all(c).then(function(){let h;return a===So?h=i[De.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):h=new a(o),r.name&&(h.name=r.name),gi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Pr(i,h,r),h})}createUniqueName(e){const t=Ve.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[De.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Gc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Jx(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[De.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Gc(new tn,c,t),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Kx(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const m=u[p],f=a[p];let _;const S=c[p];if(f.mode===Xt.TRIANGLES||f.mode===Xt.TRIANGLE_STRIP||f.mode===Xt.TRIANGLE_FAN||f.mode===void 0)_=r.isSkinnedMesh===!0?new k0(m,S):new Bt(m,S),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),f.mode===Xt.TRIANGLE_STRIP?_.geometry=Hc(_.geometry,wf):f.mode===Xt.TRIANGLE_FAN&&(_.geometry=Hc(_.geometry,Hu));else if(f.mode===Xt.LINES)_=new W0(m,S);else if(f.mode===Xt.LINE_STRIP)_=new qo(m,S);else if(f.mode===Xt.LINE_LOOP)_=new j0(m,S);else if(f.mode===Xt.POINTS)_=new q0(m,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(_.geometry.morphAttributes).length>0&&$x(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),gi(_,r),f.extensions&&Pr(i,_,f),t.assignFinalMaterial(_),h.push(_)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const d=new yi;t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yt(Vf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Go(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],a=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],d=n.samplers[h.sampler],p=h.target,g=p.node,m=n.parameters!==void 0?n.parameters[d.input]:d.input,f=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",f)),o.push(d),l.push(p)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2],p=c[3],g=c[4],m=[];for(let _=0,S=u.length;_<S;_++){const v=u[_],y=h[_],M=d[_],A=p[_],C=g[_];if(v===void 0)continue;v.updateMatrix();let x;switch(Jn[C.path]){case Jn.weights:x=Yr;break;case Jn.rotation:x=Di;break;case Jn.position:case Jn.scale:default:x=Kr;break}const w=v.name?v.name:v.uuid,I=A.interpolation!==void 0?Yx[A.interpolation]:fr,W=[];Jn[C.path]===Jn.weights?v.traverse(function(O){O.morphTargetInfluences&&W.push(O.name?O.name:O.uuid)}):W.push(w);let ee=M.array;if(M.normalized){const O=To(ee.constructor),D=new Float32Array(ee.length);for(let z=0,X=ee.length;z<X;z++)D[z]=ee[z]*O;ee=D}for(let O=0,D=W.length;O<D;O++){const z=new x(W[O]+"."+Jn[C.path],y.array,ee,I);A.interpolation==="CUBICSPLINE"&&(z.createInterpolant=function(Y){const G=this instanceof Di?Xx:vh;return new G(this.times,this.values,this.getValueSize()/3,Y)},z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(z)}}const f=n.name?n.name:"animation_"+e;return new Q0(f,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(!!o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"";return function(){const o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(r.isBone===!0?l=new uh:o.length>1?l=new yi:o.length===1?l=o[0]:l=new Je,l!==o[0])for(let c=0,u=o.length;c<u;c++)l.add(o[c]);if(r.name&&(l.userData.name=r.name,l.name=a),gi(l,r),r.extensions&&Pr(n,l,r),r.matrix!==void 0){const c=new Me;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],r=this,a=new yi;i.name&&(a.name=r.createUniqueName(i.name)),gi(a,i),i.extensions&&Pr(n,a,i);const o=i.nodes||[],l=[];for(let c=0,u=o.length;c<u;c++)l.push(yh(o[c],a,t,r));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[d,p]of r.associations)(d instanceof Qt||d instanceof at)&&h.set(d,p);return u.traverse(d=>{const p=r.associations.get(d);p!=null&&h.set(d,p)}),h};return r.associations=c(a),a})}}function yh(s,e,t,n){const i=t.nodes[s];return n.getDependency("node",s).then(function(r){if(i.skin===void 0)return r;let a;return n.getDependency("skin",i.skin).then(function(o){a=o;const l=[];for(let c=0,u=a.joints.length;c<u;c++)l.push(n.getDependency("node",a.joints[c]));return Promise.all(l)}).then(function(o){return r.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,d=o.length;h<d;h++){const p=o[h];if(p){c.push(p);const g=new Me;a.inverseBindMatrices!==void 0&&g.fromArray(a.inverseBindMatrices.array,h*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',a.joints[h])}l.bind(new jo(c,u),l.matrixWorld)}),r})}).then(function(r){e.add(r);const a=[];if(i.children){const o=i.children;for(let l=0,c=o.length;l<c;l++){const u=o[l];a.push(yh(u,r,t,n))}}return Promise.all(a)})}function tv(s,e,t){const n=e.attributes,i=new xr;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){const u=To(Zr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new R,l=new R;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const m=To(Zr[d.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new vr;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Gc(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=bo[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return gi(s,e),tv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Zx(s,e.targets,t):s})}function Hc(s,e){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Hu)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r}/**
 * postprocessing v6.29.1 build Thu Oct 27 2022
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2022 Raoul van Rüschen
 * @license Zlib
 */var nv="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Le={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Ci={NONE:0,DEPTH:1,CONVOLUTION:2},Ue={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},iv=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <encodings_fragment>
#include <dithering_fragment>
}`,rv=class extends Vt{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new le(null),opacity:new le(1)},blending:gn,depthWrite:!1,depthTest:!1,fragmentShader:iv,vertexShader:nv}),this.toneMapped=!1}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.uniforms.inputBuffer.value=s}getOpacity(s){return this.uniforms.opacity.value}setOpacity(s){this.uniforms.opacity.value=s}},sv=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#if THREE_REVISION >= 137
vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEADvoid main(){FRAGMENT_MAIN_UVvec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGEgl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <encodings_fragment>
#endif
#include <dithering_fragment>
}`,av="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEADvoid main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORTgl_Position=vec4(position.xy,1.0,1.0);}",ov=class extends Vt{constructor(s,e,t,n,i=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Jr.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new le(null),depthBuffer:new le(null),resolution:new le(new ge),texelSize:new le(new ge),cameraNear:new le(.3),cameraFar:new le(1e3),aspect:new le(1),time:new le(0)},blending:gn,depthWrite:!1,depthTest:!1,dithering:i}),this.toneMapped=!1,s&&this.setShaderParts(s),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(n)}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.uniforms.inputBuffer.value=s}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(s){this.uniforms.depthBuffer.value=s}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(s){this.defines.DEPTH_PACKING=s.toFixed(0),this.needsUpdate=!0}setDepthBuffer(s,e=Qr){this.depthBuffer=s,this.depthPacking=e}setShaderData(s){this.setShaderParts(s.shaderParts),this.setDefines(s.defines),this.setUniforms(s.uniforms),this.setExtensions(s.extensions)}setShaderParts(s){var e,t,n,i,r;return this.fragmentShader=sv.replace(Ue.FRAGMENT_HEAD,(e=s.get(Ue.FRAGMENT_HEAD))!=null?e:"").replace(Ue.FRAGMENT_MAIN_UV,(t=s.get(Ue.FRAGMENT_MAIN_UV))!=null?t:"").replace(Ue.FRAGMENT_MAIN_IMAGE,(n=s.get(Ue.FRAGMENT_MAIN_IMAGE))!=null?n:""),this.vertexShader=av.replace(Ue.VERTEX_HEAD,(i=s.get(Ue.VERTEX_HEAD))!=null?i:"").replace(Ue.VERTEX_MAIN_SUPPORT,(r=s.get(Ue.VERTEX_MAIN_SUPPORT))!=null?r:""),this.needsUpdate=!0,this}setDefines(s){for(const e of s.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(s){for(const e of s.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(s){this.extensions={};for(const e of s)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(s){this.encodeOutput!==s&&(s?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(s){return this.encodeOutput}setOutputEncodingEnabled(s){this.encodeOutput=s}get time(){return this.uniforms.time.value}set time(s){this.uniforms.time.value=s}setDeltaTime(s){this.uniforms.time.value+=s}adoptCameraSettings(s){this.copyCameraSettings(s)}copyCameraSettings(s){s&&(this.uniforms.cameraNear.value=s.near,this.uniforms.cameraFar.value=s.far,s instanceof yt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(s,e){const t=this.uniforms;t.resolution.value.set(s,e),t.texelSize.value.set(1/s,1/e),t.aspect.value=s/e}static get Section(){return Ue}},lv=new zo,Qn=null;function cv(){if(Qn===null){const s=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]);Qn=new tn,Qn.setAttribute!==void 0?(Qn.setAttribute("position",new st(s,3)),Qn.setAttribute("uv",new st(e,2))):(Qn.addAttribute("position",new st(s,3)),Qn.addAttribute("uv",new st(e,2)))}return Qn}var nn=class{constructor(s="Pass",e=new yo,t=lv){this.name=s,this.renderer=null,this.scene=e,this.camera=t,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(s){if(this.rtt===s){const e=this.fullscreenMaterial;e!==null&&(e.needsUpdate=!0),this.rtt=!s}}set mainScene(s){}set mainCamera(s){}setRenderer(s){this.renderer=s}isEnabled(){return this.enabled}setEnabled(s){this.enabled=s}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(s){let e=this.screen;e!==null?e.material=s:(e=new Bt(cv(),s),e.frustumCulled=!1,this.scene===null&&(this.scene=new yo),this.scene.add(e),this.screen=e)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(s){this.fullscreenMaterial=s}getDepthTexture(){return null}setDepthTexture(s,e=Qr){}render(s,e,t,n,i){throw new Error("Render method not implemented!")}setSize(s,e){}initialize(s,e,t){}dispose(){for(const s of Object.keys(this)){const e=this[s];(e instanceof ct||e instanceof Qt||e instanceof at||e instanceof nn)&&this[s].dispose()}}},uv=class extends nn{constructor(s,e=!0){super("CopyPass"),this.fullscreenMaterial=new rv,this.needsSwap=!1,this.renderTarget=s,s===void 0&&(this.renderTarget=new ct(1,1,{minFilter:Ee,magFilter:Ee,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(s){this.autoResize=s}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(s){this.autoResize=s}render(s,e,t,n,i){this.fullscreenMaterial.inputBuffer=e.texture,s.setRenderTarget(this.renderToScreen?null:this.renderTarget),s.render(this.scene,this.camera)}setSize(s,e){this.autoResize&&this.renderTarget.setSize(s,e)}initialize(s,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==hn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":s.outputEncoding===Ce&&(this.renderTarget.texture.encoding=Ce))}},hv=class extends nn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(s,e,t,n,i){const r=s.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},Wc=new xe,Mh=class extends nn{constructor(s=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=s,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(s,e,t){this.color=s,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(s){this.overrideClearColor=s}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(s){this.overrideClearAlpha=s}render(s,e,t,n,i){const r=this.overrideClearColor,a=this.overrideClearAlpha,o=s.getClearAlpha(),l=r!==null,c=a>=0;l?(s.getClearColor(Wc),s.setClearColor(r,c?a:o)):c&&s.setClearAlpha(a),s.setRenderTarget(this.renderToScreen?null:e),s.clear(this.color,this.depth,this.stencil),l?s.setClearColor(Wc,o):c&&s.setClearAlpha(o)}},ei=-1,qa=class extends Gn{constructor(s,e=ei,t=ei,n=1){super(),this.resizable=s,this.baseSize=new ge(1,1),this.preferredSize=new ge(e,t),this.target=this.preferredSize,this.s=n,this.effectiveSize=new ge,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const s=this.baseSize,e=this.preferredSize,t=this.effectiveSize,n=this.scale;e.width!==ei?t.width=e.width:e.height!==ei?t.width=Math.round(e.height*(s.width/Math.max(s.height,1))):t.width=Math.round(s.width*n),e.height!==ei?t.height=e.height:e.width!==ei?t.height=Math.round(e.width/Math.max(s.width/Math.max(s.height,1),1)):t.height=Math.round(s.height*n)}get width(){return this.effectiveSize.width}set width(s){this.preferredWidth=s}get height(){return this.effectiveSize.height}set height(s){this.preferredHeight=s}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(s){this.s!==s&&(this.s=s,this.preferredSize.setScalar(ei),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(s){this.scale=s}get baseWidth(){return this.baseSize.width}set baseWidth(s){this.baseSize.width!==s&&(this.baseSize.width=s,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(s){this.baseWidth=s}get baseHeight(){return this.baseSize.height}set baseHeight(s){this.baseSize.height!==s&&(this.baseSize.height=s,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(s){this.baseHeight=s}setBaseSize(s,e){(this.baseSize.width!==s||this.baseSize.height!==e)&&(this.baseSize.set(s,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(s){this.preferredSize.width!==s&&(this.preferredSize.width=s,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(s){this.preferredWidth=s}get preferredHeight(){return this.preferredSize.height}set preferredHeight(s){this.preferredSize.height!==s&&(this.preferredSize.height=s,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(s){this.preferredHeight=s}setPreferredSize(s,e){(this.preferredSize.width!==s||this.preferredSize.height!==e)&&(this.preferredSize.set(s,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(s){this.s=s.scale,this.baseSize.set(s.baseWidth,s.baseHeight),this.preferredSize.set(s.preferredWidth,s.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return ei}},Xa=!1,jc=class{constructor(s=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(s),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Ut:t=this.materialsFlatShadedDoubleSide;break;case Mt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Ut:t=this.materialsDoubleSide;break;case Mt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}setMaterial(s){if(this.disposeMaterials(),this.material=s,s!==null){const e=this.materials=[s.clone(),s.clone(),s.clone()];for(const t of e)t.uniforms=Object.assign({},s.uniforms),t.side=ai;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const n=t.clone();return n.uniforms=Object.assign({},s.uniforms),n.side=Mt,n}),this.materialsDoubleSide=e.map(t=>{const n=t.clone();return n.uniforms=Object.assign({},s.uniforms),n.side=Ut,n}),this.materialsFlatShaded=e.map(t=>{const n=t.clone();return n.uniforms=Object.assign({},s.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=e.map(t=>{const n=t.clone();return n.uniforms=Object.assign({},s.uniforms),n.flatShading=!0,n.side=Mt,n}),this.materialsFlatShadedDoubleSide=e.map(t=>{const n=t.clone();return n.uniforms=Object.assign({},s.uniforms),n.flatShading=!0,n.side=Ut,n})}}render(s,e,t){const n=s.shadowMap.enabled;if(s.shadowMap.enabled=!1,Xa){const i=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),s.render(e,t);for(const r of i)r[0].material=r[1];this.meshCount!==i.size&&i.clear()}else{const i=e.overrideMaterial;e.overrideMaterial=this.material,s.render(e,t),e.overrideMaterial=i}s.shadowMap.enabled=n}disposeMaterials(){if(this.material!==null){const s=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of s)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Xa}static set workaroundEnabled(s){Xa=s}},Zo=class extends nn{constructor(s,e,t=null){super("RenderPass",s,e),this.needsSwap=!1,this.clearPass=new Mh,this.overrideMaterialManager=t===null?null:new jc(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get renderToScreen(){return super.renderToScreen}set renderToScreen(s){super.renderToScreen=s,this.clearPass.renderToScreen=s}get overrideMaterial(){const s=this.overrideMaterialManager;return s!==null?s.material:null}set overrideMaterial(s){const e=this.overrideMaterialManager;s!==null?e!==null?e.setMaterial(s):this.overrideMaterialManager=new jc(s):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(s){this.overrideMaterial=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getSelection(){return this.selection}setSelection(s){this.selection=s}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(s){this.ignoreBackground=s}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(s){this.skipShadowMapUpdate=s}getClearPass(){return this.clearPass}render(s,e,t,n,i){const r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,u=s.shadowMap.autoUpdate,h=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(s.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(s,e),s.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(s,r,a):s.render(r,a),a.layers.mask=l,r.background=c,s.shadowMap.autoUpdate=u}},dv=class extends nn{constructor(s,e,{renderTarget:t,resolutionScale:n=1,width:i=qa.AUTO_SIZE,height:r=qa.AUTO_SIZE,resolutionX:a=i,resolutionY:o=r}={}){super("DepthPass"),this.needsSwap=!1,this.renderPass=new Zo(s,e,new oh({depthPacking:Wu}));const l=this.renderPass;l.skipShadowMapUpdate=!0,l.ignoreBackground=!0;const c=l.getClearPass();c.overrideClearColor=new xe(16777215),c.overrideClearAlpha=1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new ct(1,1,{minFilter:Ke,magFilter:Ke}),this.renderTarget.texture.name="DepthPass.Target");const u=this.resolution=new qa(this,a,o,n);u.addEventListener("change",h=>this.setSize(u.baseWidth,u.baseHeight))}set mainScene(s){this.renderPass.mainScene=s}set mainCamera(s){this.renderPass.mainCamera=s}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(s){this.resolution.scale=s}render(s,e,t,n,i){const r=this.renderToScreen?null:this.renderTarget;this.renderPass.render(s,r)}setSize(s,e){const t=this.resolution;t.setBaseSize(s,e),this.renderTarget.setSize(t.width,t.height)}};function qc(s,e,t){for(const n of e){const i="$1"+s+n.charAt(0).toUpperCase()+n.slice(1),r=new RegExp("([^\\.])(\\b"+n+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,i))}}function fv(s,e,t){var n,i,r,a,o;let l=e.getFragmentShader(),c=e.getVertexShader();const u=l!==void 0&&/mainImage/.test(l),h=l!==void 0&&/mainUv/.test(l);if(t.attributes|=e.getAttributes(),l===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(h&&(t.attributes&Ci.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!u&&!h)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const d=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=t.shaderParts;let g=(n=p.get(Ue.FRAGMENT_HEAD))!=null?n:"",m=(i=p.get(Ue.FRAGMENT_MAIN_UV))!=null?i:"",f=(r=p.get(Ue.FRAGMENT_MAIN_IMAGE))!=null?r:"",_=(a=p.get(Ue.VERTEX_HEAD))!=null?a:"",S=(o=p.get(Ue.VERTEX_MAIN_SUPPORT))!=null?o:"";const v=new Set,y=new Set;if(h&&(m+=`	${s}MainUv(UV);
`,t.uvTransformation=!0),c!==null&&/mainSupport/.test(c)){const C=/mainSupport *\([\w\s]*?uv\s*?\)/.test(c);S+=`	${s}MainSupport(`,S+=C?`vUv);
`:`);
`;for(const x of c.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const w of x[1].split(/\s*,\s*/))t.varyings.add(w),v.add(w),y.add(w);for(const x of c.matchAll(d))y.add(x[1])}for(const C of l.matchAll(d))y.add(C[1]);for(const C of e.defines.keys())y.add(C.replace(/\([\w\s,]*\)/g,""));for(const C of e.uniforms.keys())y.add(C);y.delete("while"),y.delete("for"),y.delete("if"),e.uniforms.forEach((C,x)=>t.uniforms.set(s+x.charAt(0).toUpperCase()+x.slice(1),C)),e.defines.forEach((C,x)=>t.defines.set(s+x.charAt(0).toUpperCase()+x.slice(1),C));const M=new Map([["fragment",l],["vertex",c]]);qc(s,y,t.defines),qc(s,y,M),l=M.get("fragment"),c=M.get("vertex");const A=e.blendMode;if(t.blendModes.set(A.blendFunction,A),u){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(f+=e.inputColorSpace===Ce?`color0 = LinearTosRGB(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==null?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const C=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;f+=`${s}MainImage(color0, UV, `,(t.attributes&Ci.DEPTH)!==0&&C.test(l)&&(f+="depth, ",t.readDepth=!0),f+=`color1);
	`;const x=s+"BlendOpacity";t.uniforms.set(x,A.opacity),f+=`color0 = blend${A.blendFunction}(color0, color1, ${x});

	`,g+=`uniform float ${x};

`}if(g+=l+`
`,c!==null&&(_+=c+`
`),p.set(Ue.FRAGMENT_HEAD,g),p.set(Ue.FRAGMENT_MAIN_UV,m),p.set(Ue.FRAGMENT_MAIN_IMAGE,f),p.set(Ue.VERTEX_HEAD,_),p.set(Ue.VERTEX_MAIN_SUPPORT,S),e.extensions!==null)for(const C of e.extensions)t.extensions.add(C)}}var $o=class extends nn{constructor(s,...e){super("EffectPass"),this.fullscreenMaterial=new ov(null,null,null,s),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(s){for(const e of this.effects)e.mainScene=s}set mainCamera(s){this.fullscreenMaterial.copyCameraSettings(s);for(const e of this.effects)e.mainCamera=s}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(s){this.fullscreenMaterial.encodeOutput=s}get dithering(){return this.fullscreenMaterial.dithering}set dithering(s){const e=this.fullscreenMaterial;e.dithering=s,e.needsUpdate=!0}setEffects(s){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=s.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const s=new xv;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===Le.DST)s.attributes|=a.getAttributes()&Ci.DEPTH;else{if((s.attributes&a.getAttributes()&Ci.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);fv("e"+e++,a,s)}let t=s.shaderParts.get(Ue.FRAGMENT_HEAD),n=s.shaderParts.get(Ue.FRAGMENT_MAIN_IMAGE),i=s.shaderParts.get(Ue.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of s.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(s.attributes&Ci.DEPTH)!==0?(s.readDepth&&(n=`float depth = readDepth(UV);

	`+n),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,s.colorSpace===Ce&&(n+=`color0 = sRGBToLinear(color0);
	`),s.uvTransformation?(i=`vec2 transformedUv = vUv;
`+i,s.defines.set("UV","transformedUv")):s.defines.set("UV","vUv"),s.shaderParts.set(Ue.FRAGMENT_HEAD,t),s.shaderParts.set(Ue.FRAGMENT_MAIN_IMAGE,n),s.shaderParts.set(Ue.FRAGMENT_MAIN_UV,i),s.shaderParts.forEach((a,o,l)=>l.set(o,a==null?void 0:a.trim().replace(/^#/,`
#`))),this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(s)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(s,e=Qr){this.fullscreenMaterial.depthBuffer=s,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(s,e)}render(s,e,t,n,i){for(const r of this.effects)r.update(s,e,n);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=n*this.timeScale,s.setRenderTarget(this.renderToScreen?null:t),s.render(this.scene,this.camera)}}setSize(s,e){this.fullscreenMaterial.setSize(s,e);for(const t of this.effects)t.setSize(s,e)}initialize(s,e,t){this.renderer=s;for(const n of this.effects)n.initialize(s,e,t);this.updateMaterial(),t!==void 0&&t!==hn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const s of this.effects)s.removeEventListener("change",this.listener),s.dispose()}handleEvent(s){switch(s.type){case"change":this.recompile();break}}},pv=class extends nn{constructor(s,e){super("MaskPass",s,e),this.needsSwap=!1,this.clearPass=new Mh(!1,!1,!0),this.inverse=!1}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get inverted(){return this.inverse}set inverted(s){this.inverse=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(s){this.inverted=s}render(s,e,t,n,i){const r=s.getContext(),a=s.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,h=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,u,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(s,null):(c.render(s,e),c.render(s,t))),this.renderToScreen?(s.setRenderTarget(null),s.render(o,l)):(s.setRenderTarget(e),s.render(o,l),s.setRenderTarget(t),s.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},Ya=1/1e3,mv=1e3,gv=class{constructor(){this.previousTime=0,this.currentTime=0,this.delta=0,this.fixedDelta=1e3/60,this.elapsed=0,this.timescale=1,this.fixedDeltaEnabled=!1,this.autoReset=!1}setFixedDeltaEnabled(s){return this.fixedDeltaEnabled=s,this}isAutoResetEnabled(s){return this.autoReset}setAutoResetEnabled(s){return typeof document<"u"&&document.hidden!==void 0&&(s?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this.autoReset=s),this}getDelta(){return this.delta*Ya}getFixedDelta(){return this.fixedDelta*Ya}setFixedDelta(s){return this.fixedDelta=s*mv,this}getElapsed(){return this.elapsed*Ya}getTimescale(){return this.timescale}setTimescale(s){return this.timescale=s,this}update(s){return this.fixedDeltaEnabled?this.delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=s!==void 0?s:performance.now(),this.delta=this.currentTime-this.previousTime),this.delta*=this.timescale,this.elapsed+=this.delta,this}reset(){return this.delta=0,this.elapsed=0,this.currentTime=performance.now(),this}handleEvent(s){document.hidden||(this.currentTime=performance.now())}dispose(){this.setAutoResetEnabled(!1)}},_v=class{constructor(s=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:n=0,frameBufferType:i}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,i,n),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new uv,this.depthTexture=null,this.passes=[],this.timer=new gv,this.autoRenderToScreen=!0,this.setRenderer(s)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(s){const e=this.inputBuffer,t=this.multisampling;t>0&&s>0?(this.inputBuffer.samples=s,this.outputBuffer.samples=s,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==s&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,s),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(s){if(this.renderer=s,s!==null){const e=s.getSize(new ge),t=s.getContext().getContextAttributes().alpha,n=this.inputBuffer.texture.type;n===hn&&s.outputEncoding===Ce&&(this.inputBuffer.texture.encoding=Ce,this.outputBuffer.texture.encoding=Ce,this.inputBuffer.dispose(),this.outputBuffer.dispose()),s.autoClear=!1,this.setSize(e.width,e.height);for(const i of this.passes)i.initialize(s,t,n)}}replaceRenderer(s,e=!0){const t=this.renderer,n=t.domElement.parentNode;return this.setRenderer(s),e&&n!==null&&(n.removeChild(t.domElement),n.appendChild(s.domElement)),t}createDepthTexture(){const s=this.depthTexture=new lh;return this.inputBuffer.depthTexture=s,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(s.format=Li,s.type=Ti):s.type=ni,s}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const s of this.passes)s.setDepthTexture(null)}}createBuffer(s,e,t,n){const i=this.renderer,r=i===null?new ge:i.getDrawingBufferSize(new ge),a={minFilter:Ee,magFilter:Ee,stencilBuffer:e,depthBuffer:s,type:t};let o;return n>0?(o=Number(Jr.replace(/\D+/g,""))<138?new Tx(r.width,r.height,a):new ct(r.width,r.height,a),o.ignoreDepthForMultisampleCopy=!1,o.samples=n):o=new ct(r.width,r.height,a),t===hn&&i!==null&&i.outputEncoding===Ce&&(o.texture.encoding=Ce),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(s){for(const e of this.passes)e.mainScene=s}setMainCamera(s){for(const e of this.passes)e.mainCamera=s}addPass(s,e){const t=this.passes,n=this.renderer,i=n.getDrawingBufferSize(new ge),r=n.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(s.setRenderer(n),s.setSize(i.width,i.height),s.initialize(n,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),s.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,s):t.push(s),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),s.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(s of t)s.setDepthTexture(o)}else s.setDepthTexture(this.depthTexture)}removePass(s){const e=this.passes,t=e.indexOf(s);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const r=(o,l)=>o||l.needsDepthTexture;e.reduce(r,!1)||(s.getDepthTexture()===this.depthTexture&&s.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(s.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const s=this.passes;this.deleteDepthTexture(),s.length>0&&(this.autoRenderToScreen&&(s[s.length-1].renderToScreen=!1),this.passes=[])}render(s){const e=this.renderer,t=this.copyPass;let n=this.inputBuffer,i=this.outputBuffer,r=!1,a,o,l;s===void 0&&(s=this.timer.update().getDelta());for(const c of this.passes)c.enabled&&(c.render(e,n,i,s,r),c.needsSwap&&(r&&(t.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),t.render(e,n,i,s,r),o.setFunc(a.EQUAL,1,4294967295)),l=n,n=i,i=l),c instanceof pv?r=!0:c instanceof hv&&(r=!1))}setSize(s,e,t){const n=this.renderer,i=n.getSize(new ge);(s===void 0||e===void 0)&&(s=i.width,e=i.height),(i.width!==s||i.height!==e)&&n.setSize(s,e,t);const r=n.getDrawingBufferSize(new ge);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height);for(const a of this.passes)a.setSize(r.width,r.height)}reset(){const s=this.timer.isAutoResetEnabled();this.dispose(),this.autoRenderToScreen=!0,this.timer.setAutoResetEnabled(s)}dispose(){for(const s of this.passes)s.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}},xv=class{constructor(){this.shaderParts=new Map([[Ue.FRAGMENT_HEAD,null],[Ue.FRAGMENT_MAIN_UV,null],[Ue.FRAGMENT_MAIN_IMAGE,null],[Ue.VERTEX_HEAD,null],[Ue.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Ci.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Bn}},vv=class extends Set{constructor(s,e=10){super(),this.l=e,this.exclusive=!1,s!==void 0&&this.set(s)}get layer(){return this.l}set layer(s){const e=this.l;for(const t of this)t.layers.disable(e),t.layers.enable(s);this.l=s}getLayer(){return this.layer}setLayer(s){this.layer=s}isExclusive(){return this.exclusive}setExclusive(s){this.exclusive=s}clear(){const s=this.layer;for(const e of this)e.layers.disable(s);return super.clear()}set(s){this.clear();for(const e of s)this.add(e);return this}indexOf(s){return this.has(s)?0:-1}add(s){return this.exclusive?s.layers.set(this.layer):s.layers.enable(this.layer),super.add(s)}delete(s){return this.has(s)&&s.layers.disable(this.layer),super.delete(s)}toggle(s){let e;return this.has(s)?(this.delete(s),e=!1):(this.add(s),e=!0),e}setVisible(s){for(const e of this)s?e.layers.enable(0):e.layers.disable(0);return this}},yv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",Mv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",Sv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",bv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",Tv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",wv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",Ev="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",Av="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",Cv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",Rv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",Lv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",Dv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",Pv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",Iv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",Nv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",Fv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",Ov="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",Uv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",zv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",Bv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",kv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",Vv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",Gv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",Hv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",Wv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",jv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",qv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",Xv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",Yv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",Kv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",Zv="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",$v="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",Jv=new Map([[Le.ADD,yv],[Le.ALPHA,Mv],[Le.AVERAGE,Sv],[Le.COLOR,bv],[Le.COLOR_BURN,Tv],[Le.COLOR_DODGE,wv],[Le.DARKEN,Ev],[Le.DIFFERENCE,Av],[Le.DIVIDE,Cv],[Le.DST,null],[Le.EXCLUSION,Rv],[Le.HARD_LIGHT,Lv],[Le.HARD_MIX,Dv],[Le.HUE,Pv],[Le.INVERT,Iv],[Le.INVERT_RGB,Nv],[Le.LIGHTEN,Fv],[Le.LINEAR_BURN,Ov],[Le.LINEAR_DODGE,Uv],[Le.LINEAR_LIGHT,zv],[Le.LUMINOSITY,Bv],[Le.MULTIPLY,kv],[Le.NEGATION,Vv],[Le.NORMAL,Gv],[Le.OVERLAY,Hv],[Le.PIN_LIGHT,Wv],[Le.REFLECT,jv],[Le.SATURATION,qv],[Le.SCREEN,Xv],[Le.SOFT_LIGHT,Yv],[Le.SRC,Kv],[Le.SUBTRACT,Zv],[Le.VIVID_LIGHT,$v]]),Qv=class extends Gn{constructor(s,e=1){super(),this._blendFunction=s,this.opacity=new le(e)}getOpacity(){return this.opacity.value}setOpacity(s){this.opacity.value=s}get blendFunction(){return this._blendFunction}set blendFunction(s){this._blendFunction=s,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(s){this.blendFunction=s}getShaderCode(){return Jv.get(this.blendFunction)}},Jo=class extends Gn{constructor(s,e,{attributes:t=Ci.NONE,blendFunction:n=Le.NORMAL,defines:i=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=s,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=i,this.uniforms=r,this.extensions=a,this.blendMode=new Qv(n),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Bn,this._outputColorSpace=null}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(s){this._inputColorSpace=s,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(s){this._outputColorSpace=s,this.setChanged()}set mainScene(s){}set mainCamera(s){}getName(){return this.name}setRenderer(s){this.renderer=s}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(s){this.attributes=s,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(s){this.fragmentShader=s,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(s){this.vertexShader=s,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(s,e=Qr){}update(s,e,t){}setSize(s,e){}initialize(s,e,t){}dispose(){for(const s of Object.keys(this)){const e=this[s];(e instanceof ct||e instanceof Qt||e instanceof at||e instanceof nn)&&this[s].dispose()}}};new R;new Me;new xe;var ey=`void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*time));
#ifdef PREMULTIPLY
outputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);
#else
outputColor=vec4(noise,inputColor.a);
#endif
}`,ty=class extends Jo{constructor({blendFunction:s=Le.SCREEN,premultiply:e=!1}={}){super("NoiseEffect",ey,{blendFunction:s}),this.premultiply=e}get premultiply(){return this.defines.has("PREMULTIPLY")}set premultiply(s){this.premultiply!==s&&(s?this.defines.set("PREMULTIPLY","1"):this.defines.delete("PREMULTIPLY"),this.setChanged())}isPremultiplied(){return this.premultiply}setPremultiplied(s){this.premultiply=s}},ny=`uniform float count;
#ifdef SCROLL
uniform float scrollSpeed;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){float y=uv.y;
#ifdef SCROLL
y+=time*scrollSpeed;
#endif
vec2 sl=vec2(sin(y*count),cos(y*count));outputColor=vec4(sl.xyx,inputColor.a);}`,iy=class extends Jo{constructor({blendFunction:s=Le.OVERLAY,density:e=1.25,scrollSpeed:t=0}={}){super("ScanlineEffect",ny,{blendFunction:s,uniforms:new Map([["count",new le(0)],["scrollSpeed",new le(0)]])}),this.resolution=new ge,this.d=e,this.scrollSpeed=t}get density(){return this.d}set density(s){this.d=s,this.setSize(this.resolution.width,this.resolution.height)}getDensity(){return this.density}setDensity(s){this.density=s}get scrollSpeed(){return this.uniforms.get("scrollSpeed").value}set scrollSpeed(s){this.uniforms.get("scrollSpeed").value=s,s===0?this.defines.delete("SCROLL")&&this.setChanged():this.defines.has("SCROLL")||(this.defines.set("SCROLL","1"),this.setChanged())}setSize(s,e){this.resolution.set(s,e),this.uniforms.get("count").value=Math.round(e*this.density)}};new R;new R;function wo(){return wo=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n])}return s},wo.apply(this,arguments)}var ry=`#define GLSLIFY 1
uniform float blur;uniform float blurSharpness;uniform int blurKernel;vec3 denoise(vec3 center,sampler2D tex,vec2 uv,vec2 invTexSize,float blur,float blurSharpness,int blurKernel){vec3 color;float total;vec3 col;float weight;for(int x=-blurKernel;x<=blurKernel;x++){for(int y=-blurKernel;y<=blurKernel;y++){col=textureLod(tex,uv+vec2(x,y)*invTexSize,0.).rgb;weight=1.0-abs(dot(col-center,vec3(0.25)));weight=pow(weight,blurSharpness);color+=col*weight;total+=weight;}}return color/total;}`,sy=`#define GLSLIFY 1
#define MODE_DEFAULT 0
#define MODE_REFLECTIONS 1
#define MODE_RAW_REFLECTION 2
#define MODE_BLURRED_REFLECTIONS 3
#define MODE_INPUT 4
#define MODE_BLUR_MIX 5
#define FLOAT_EPSILON 0.00001
uniform sampler2D inputTexture;uniform sampler2D reflectionsTexture;uniform float samples;
#include <boxBlur>
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 reflectionsTexel=texture2D(reflectionsTexture,vUv);ivec2 size=textureSize(reflectionsTexture,0);vec2 invTexSize=1./vec2(size.x,size.y);vec3 reflectionClr=reflectionsTexel.xyz;if(blur>FLOAT_EPSILON){vec3 blurredReflectionsColor=denoise(reflectionsTexel.rgb,reflectionsTexture,vUv,invTexSize,blur,blurSharpness,blurKernel);reflectionClr=mix(reflectionClr,blurredReflectionsColor.rgb,blur);}
#if RENDER_MODE == MODE_DEFAULT
outputColor=vec4(inputColor.rgb+reflectionClr,1.0);
#endif
#if RENDER_MODE == MODE_REFLECTIONS
outputColor=vec4(reflectionClr,1.0);
#endif
#if RENDER_MODE == MODE_RAW_REFLECTION
outputColor=vec4(reflectionsTexel.xyz,1.0);
#endif
#if RENDER_MODE == MODE_BLURRED_REFLECTIONS
outputColor=vec4(blurredReflectionsTexel.xyz,1.0);
#endif
#if RENDER_MODE == MODE_INPUT
outputColor=vec4(inputColor.xyz,1.0);
#endif
#if RENDER_MODE == MODE_BLUR_MIX
outputColor=vec4(vec3(blur),1.0);
#endif
}`,Sh=`#define GLSLIFY 1
vec3 getViewPosition(const float depth){float clipW=_projectionMatrix[2][3]*depth+_projectionMatrix[3][3];vec4 clipPosition=vec4((vec3(vUv,depth)-0.5)*2.0,1.0);clipPosition*=clipW;return(_inverseProjectionMatrix*clipPosition).xyz;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 screenSpaceToWorldSpace(const vec2 uv,const float depth){vec4 ndc=vec4((uv.x-0.5)*2.0,(uv.y-0.5)*2.0,(depth-0.5)*2.0,1.0);vec4 clip=_inverseProjectionMatrix*ndc;vec4 view=cameraMatrixWorld*(clip/clip.w);return view.xyz;}
#define Scale (vec3(0.8, 0.8, 0.8))
#define K (19.19)
vec3 hash(vec3 a){a=fract(a*Scale);a+=dot(a,a.yxz+K);return fract((a.xxy+a.yxx)*a.zyx);}float fresnel_dielectric_cos(float cosi,float eta){float c=abs(cosi);float g=eta*eta-1.0+c*c;float result;if(g>0.0){g=sqrt(g);float A=(g-c)/(g+c);float B=(c*(g+c)-1.0)/(c*(g-c)+1.0);result=0.5*A*A*(1.0+B*B);}else{result=1.0;}return result;}float fresnel_dielectric(vec3 Incoming,vec3 Normal,float eta){float cosine=dot(Incoming,Normal);return min(1.0,5.0*fresnel_dielectric_cos(cosine,eta));}`,ay=`#define GLSLIFY 1
#define INV_EULER 0.36787944117144233
alpha=velocityDisocclusion<FLOAT_EPSILON ?(alpha+0.0075): 0.0;alpha=clamp(alpha,0.0,1.0);bool needsBlur=!didReproject||velocityDisocclusion>0.5;
#ifdef boxBlur
if(needsBlur)inputColor=boxBlurredColor;
#endif
if(alpha==1.0){outputColor=accumulatedColor;}else{float m=mix(alpha,1.0,blend);if(needsBlur)m=0.0;outputColor=accumulatedColor*m+inputColor*(1.0-m);}`;class oy extends Vt{constructor(){super({type:"MRTMaterial",defines:{USE_UV:"",TEMPORAL_RESOLVE:""},uniforms:{opacity:new le(1),normalMap:new le(null),normalScale:new le(new ge(1,1)),uvTransform:new le(new zt),roughness:new le(1),roughnessMap:new le(null)},vertexShader:`
                #ifdef USE_MRT
                 varying vec2 vHighPrecisionZW;
                #endif
                #define NORMAL
                #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
                    varying vec3 vViewPosition;
                #endif
                #include <common>
                #include <uv_pars_vertex>
                #include <displacementmap_pars_vertex>
                #include <normal_pars_vertex>
                #include <morphtarget_pars_vertex>
                #include <skinning_pars_vertex>
                #include <logdepthbuf_pars_vertex>
                #include <clipping_planes_pars_vertex>
                void main() {
                    #include <uv_vertex>
                    #include <beginnormal_vertex>
                    #include <morphnormal_vertex>
                    #include <skinbase_vertex>
                    #include <skinnormal_vertex>
                    #include <defaultnormal_vertex>
                    #include <normal_vertex>
                    #include <begin_vertex>
                    #include <morphtarget_vertex>
                    #include <skinning_vertex>
                    #include <displacementmap_vertex>
                    #include <project_vertex>
                    #include <logdepthbuf_vertex>
                    #include <clipping_planes_vertex>
                    #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
                        vViewPosition = - mvPosition.xyz;
                    #endif
                    #ifdef USE_MRT
                        vHighPrecisionZW = gl_Position.zw;
                    #endif 
                    #ifdef USE_UV
                        vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
                    #endif
                }
            `,fragmentShader:`
                 #define NORMAL
                #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
                    varying vec3 vViewPosition;
                #endif
                #include <packing>
                #include <uv_pars_fragment>
                #include <normal_pars_fragment>
                #include <bumpmap_pars_fragment>
                #include <normalmap_pars_fragment>
                #include <logdepthbuf_pars_fragment>
                #include <clipping_planes_pars_fragment>
                #include <roughnessmap_pars_fragment>
                
                #ifdef USE_MRT
                layout(location = 0) out vec4 gNormal;
                layout(location = 1) out vec4 gDepth;
                
                varying vec2 vHighPrecisionZW;
                #endif
                uniform float roughness;
                void main() {
                    #include <clipping_planes_fragment>
                    #include <logdepthbuf_fragment>
                    #include <normal_fragment_begin>
                    #include <normal_fragment_maps>

                    float roughnessFactor = roughness;
                    
                    if(roughness > 10.0e9){
                        roughnessFactor = 1.;
                    }else{
                        #ifdef useRoughnessMap
                            vec4 texelRoughness = texture2D( roughnessMap, vUv );
                            // reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
                            roughnessFactor *= texelRoughness.g;
                        #endif
                    }

                    vec3 normalColor = packNormalToRGB( normal );
                    #ifdef USE_MRT
                        float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
                        vec4 depthColor = packDepthToRGBA( fragCoordZ );
                        gNormal = vec4( normalColor, roughnessFactor );
                        gDepth = depthColor;
                    #else
                        gl_FragColor = vec4(normalColor, roughnessFactor);
                    #endif
                }
            `,toneMapped:!1}),this.normalMapType=$s,this.normalScale=new ge(1,1),Object.defineProperty(this,"glslVersion",{get(){return"USE_MRT"in this.defines?mo:null},set(e){}})}}var ly=`#define GLSLIFY 1
varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}`,cy=`#define GLSLIFY 1
varying vec2 vUv;uniform sampler2D inputTexture;uniform sampler2D accumulatedTexture;uniform sampler2D normalTexture;uniform sampler2D depthTexture;uniform sampler2D envMap;uniform mat4 _projectionMatrix;uniform mat4 _inverseProjectionMatrix;uniform mat4 cameraMatrixWorld;uniform float cameraNear;uniform float cameraFar;uniform float rayDistance;uniform float intensity;uniform float maxDepthDifference;uniform float roughnessFade;uniform float maxRoughness;uniform float fade;uniform float thickness;uniform float ior;uniform float samples;uniform float jitter;uniform float jitterRoughness;
#define INVALID_RAY_COORDS vec2(-1.0);
#define EARLY_OUT_COLOR vec4(0.0, 0.0, 0.0, 1.0)
#define FLOAT_EPSILON 0.00001
float nearMinusFar;float nearMulFar;float farMinusNear;
#include <packing>
#include <helperFunctions>
vec2 RayMarch(vec3 dir,inout vec3 hitPos,inout float rayHitDepthDifference);vec2 BinarySearch(in vec3 dir,inout vec3 hitPos,inout float rayHitDepthDifference);float fastGetViewZ(const in float depth);vec3 getIBLRadiance(const in vec3 viewDir,const in vec3 normal,const in float roughness);void main(){vec4 depthTexel=textureLod(depthTexture,vUv,0.0);if(dot(depthTexel.rgb,depthTexel.rgb)<FLOAT_EPSILON){gl_FragColor=EARLY_OUT_COLOR;return;}float unpackedDepth=unpackRGBAToDepth(depthTexel);vec4 normalTexel=textureLod(normalTexture,vUv,0.0);float roughness=normalTexel.a;float specular=1.0-roughness;nearMinusFar=cameraNear-cameraFar;nearMulFar=cameraNear*cameraFar;farMinusNear=cameraFar-cameraNear;normalTexel.rgb=unpackRGBToNormal(normalTexel.rgb);float depth=fastGetViewZ(unpackedDepth);vec3 viewPos=getViewPosition(depth);vec3 viewDir=normalize(viewPos);vec3 viewNormal=normalTexel.xyz;vec3 worldPos=screenSpaceToWorldSpace(vUv,unpackedDepth);vec3 jitt=vec3(0.0);if(jitterRoughness!=0.0||jitter!=0.0){vec3 randomJitter=hash(50.0*samples*worldPos)-0.5;float spread=((2.0-specular)+roughness*jitterRoughness);float jitterMix=jitter*0.25+jitterRoughness*roughness;if(jitterMix>1.0)jitterMix=1.0;jitt=mix(vec3(0.0),randomJitter*spread,jitterMix);}viewNormal+=jitt;float fresnelFactor=fresnel_dielectric(viewDir,viewNormal,ior);vec3 iblRadiance=getIBLRadiance(-viewDir,viewNormal,0.)*fresnelFactor;float lastFrameAlpha=textureLod(accumulatedTexture,vUv,0.0).a;if(roughness>maxRoughness||(roughness>1.0-FLOAT_EPSILON&&roughnessFade>1.0-FLOAT_EPSILON)){gl_FragColor=vec4(iblRadiance,lastFrameAlpha);return;}vec3 reflected=reflect(viewDir,viewNormal);vec3 rayDir=reflected*-viewPos.z;vec3 hitPos=viewPos;float rayHitDepthDifference;vec2 coords=RayMarch(rayDir,hitPos,rayHitDepthDifference);if(coords.x==-1.0){gl_FragColor=vec4(iblRadiance,lastFrameAlpha);return;}vec4 SSRTexel=textureLod(inputTexture,coords.xy,0.0);vec4 SSRTexelReflected=textureLod(accumulatedTexture,coords.xy,0.0);vec3 SSR=SSRTexel.rgb+SSRTexelReflected.rgb;float roughnessFactor=mix(specular,1.0,max(0.0,1.0-roughnessFade));vec2 coordsNDC=(coords.xy*2.0-1.0);float screenFade=0.1;float maxDimension=min(1.0,max(abs(coordsNDC.x),abs(coordsNDC.y)));float reflectionIntensity=1.0-(max(0.0,maxDimension-screenFade)/(1.0-screenFade));reflectionIntensity=max(0.,reflectionIntensity);vec3 finalSSR=mix(iblRadiance,SSR,reflectionIntensity)*roughnessFactor;if(fade!=0.0){vec3 hitWorldPos=screenSpaceToWorldSpace(coords,rayHitDepthDifference);float reflectionDistance=distance(hitWorldPos,worldPos)+1.0;float opacity=1.0/(reflectionDistance*fade*0.1);if(opacity>1.0)opacity=1.0;finalSSR*=opacity;}finalSSR*=fresnelFactor*intensity;finalSSR=min(vec3(1.0),finalSSR);float alpha=hitPos.z==1.0 ? 1.0 : SSRTexelReflected.a;alpha=min(lastFrameAlpha,alpha);gl_FragColor=vec4(finalSSR,alpha);}vec2 RayMarch(vec3 dir,inout vec3 hitPos,inout float rayHitDepthDifference){dir=normalize(dir);dir*=rayDistance/float(steps);float depth;vec4 projectedCoord;vec4 lastProjectedCoord;float unpackedDepth;vec4 depthTexel;for(int i=0;i<steps;i++){hitPos+=dir;projectedCoord=_projectionMatrix*vec4(hitPos,1.0);projectedCoord.xy/=projectedCoord.w;projectedCoord.xy=projectedCoord.xy*0.5+0.5;
#ifndef missedRays
if(projectedCoord.x<0.0||projectedCoord.x>1.0||projectedCoord.y<0.0||projectedCoord.y>1.0){return INVALID_RAY_COORDS;}
#endif
depthTexel=textureLod(depthTexture,projectedCoord.xy,0.0);unpackedDepth=unpackRGBAToDepth(depthTexel);depth=fastGetViewZ(unpackedDepth);rayHitDepthDifference=depth-hitPos.z;if(rayHitDepthDifference>=0.0&&rayHitDepthDifference<thickness){
#if refineSteps == 0
if(dot(depthTexel.rgb,depthTexel.rgb)<FLOAT_EPSILON)return INVALID_RAY_COORDS;
#else
return BinarySearch(dir,hitPos,rayHitDepthDifference);
#endif
}
#ifndef missedRays
if(hitPos.z>0.0){return INVALID_RAY_COORDS;}
#endif
lastProjectedCoord=projectedCoord;}hitPos.z=1.0;
#ifndef missedRays
return INVALID_RAY_COORDS;
#endif
rayHitDepthDifference=unpackedDepth;return projectedCoord.xy;}vec2 BinarySearch(in vec3 dir,inout vec3 hitPos,inout float rayHitDepthDifference){float depth;vec4 projectedCoord;vec2 lastMinProjectedCoordXY;float unpackedDepth;vec4 depthTexel;for(int i=0;i<refineSteps;i++){projectedCoord=_projectionMatrix*vec4(hitPos,1.0);projectedCoord.xy/=projectedCoord.w;projectedCoord.xy=projectedCoord.xy*0.5+0.5;depthTexel=textureLod(depthTexture,projectedCoord.xy,0.0);unpackedDepth=unpackRGBAToDepth(depthTexel);depth=fastGetViewZ(unpackedDepth);rayHitDepthDifference=depth-hitPos.z;dir*=0.5;if(rayHitDepthDifference>0.0){hitPos-=dir;}else{hitPos+=dir;}}if(dot(depthTexel.rgb,depthTexel.rgb)<FLOAT_EPSILON)return INVALID_RAY_COORDS;if(abs(rayHitDepthDifference)>maxDepthDifference)return INVALID_RAY_COORDS;projectedCoord=_projectionMatrix*vec4(hitPos,1.0);projectedCoord.xy/=projectedCoord.w;projectedCoord.xy=projectedCoord.xy*0.5+0.5;rayHitDepthDifference=unpackedDepth;return projectedCoord.xy;}float fastGetViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return nearMulFar/(farMinusNear*depth-cameraFar);
#else
return depth*nearMinusFar-cameraNear;
#endif
}
#include <common>
#include <cube_uv_reflection_fragment>
vec3 getIBLRadiance(const in vec3 viewDir,const in vec3 normal,const in float roughness){
#if defined(ENVMAP_TYPE_CUBE_UV)
vec3 reflectVec=reflect(-viewDir,normal);reflectVec=normalize(mix(reflectVec,normal,roughness*roughness));reflectVec=inverseTransformDirection(reflectVec,viewMatrix);vec4 envMapColor=textureCubeUV(envMap,reflectVec,roughness);return envMapColor.rgb*intensity;
#else
return vec3(0.0);
#endif
}`;class uy extends Vt{constructor(){super({type:"ReflectionsMaterial",uniforms:{inputTexture:new le(null),accumulatedTexture:new le(null),normalTexture:new le(null),depthTexture:new le(null),_projectionMatrix:new le(new Me),_inverseProjectionMatrix:new le(new Me),cameraMatrixWorld:new le(new Me),cameraNear:new le(0),cameraFar:new le(0),rayDistance:new le(0),intensity:new le(0),roughnessFade:new le(0),fade:new le(0),thickness:new le(0),ior:new le(0),maxDepthDifference:new le(0),jitter:new le(0),jitterRoughness:new le(0),maxRoughness:new le(0),samples:new le(0),envMap:new le(null),envMapPosition:new le(new R),envMapSize:new le(new R),viewMatrix:new le(new Me)},defines:{steps:20,refineSteps:5,CUBEUV_TEXEL_WIDTH:0,CUBEUV_TEXEL_HEIGHT:0,CUBEUV_MAX_MIP:0,vWorldPosition:"worldPos"},fragmentShader:cy.replace("#include <helperFunctions>",Sh),vertexShader:ly,toneMapped:!1,depthWrite:!1,depthTest:!1})}}const bh=s=>{const e=[s],t=[];for(;e.length!==0;){const n=e.shift();n.material&&t.push(n);for(const i of n.children)i.visible&&e.push(i)}return t},hy=s=>{const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}},Xc=(s,e,t)=>{s.uniforms.envMap.value=e;const n=hy({envMapCubeUVHeight:t});s.defines.ENVMAP_TYPE_CUBE_UV="",s.defines.CUBEUV_TEXEL_WIDTH=n.texelWidth,s.defines.CUBEUV_TEXEL_HEIGHT=n.texelHeight,s.defines.CUBEUV_MAX_MIP=n.maxMip+".0",s.needsUpdate=!0},dy=()=>{try{const s=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&s.getContext("webgl2"))}catch{return!1}};class fy extends nn{constructor(e,t={}){super("ReflectionsPass"),this.ssrEffect=void 0,this.cachedMaterials=new WeakMap,this.USE_MRT=!1,this.webgl1DepthPass=null,this.visibleMeshes=[],this.ssrEffect=e,this._scene=e._scene,this._camera=e._camera,this.fullscreenMaterial=new uy,e._camera.isPerspectiveCamera&&(this.fullscreenMaterial.defines.PERSPECTIVE_CAMERA="");const n=t.width||typeof window<"u"?window.innerWidth:2e3,i=t.height||typeof window<"u"?window.innerHeight:1e3;this.renderTarget=new ct(n,i,{minFilter:Ee,magFilter:Ee,type:_n,depthBuffer:!1}),this.renderPass=new Zo(this._scene,this._camera),this.USE_MRT=dy(),this.USE_MRT?(this.gBuffersRenderTarget=new Wf(n,i,2,{minFilter:Ee,magFilter:Ee}),this.normalTexture=this.gBuffersRenderTarget.texture[0],this.depthTexture=this.gBuffersRenderTarget.texture[1]):(this.webgl1DepthPass=new dv(this._scene,this._camera),this.webgl1DepthPass.renderTarget.minFilter=Ee,this.webgl1DepthPass.renderTarget.magFilter=Ee,this.webgl1DepthPass.renderTarget.texture.minFilter=Ee,this.webgl1DepthPass.renderTarget.texture.magFilter=Ee,this.webgl1DepthPass.setSize(typeof window<"u"?window.innerWidth:2e3,typeof window<"u"?window.innerHeight:1e3),this.gBuffersRenderTarget=new ct(n,i,{minFilter:Ee,magFilter:Ee}),this.normalTexture=this.gBuffersRenderTarget.texture,this.depthTexture=this.webgl1DepthPass.texture),this.fullscreenMaterial.uniforms.normalTexture.value=this.normalTexture,this.fullscreenMaterial.uniforms.depthTexture.value=this.depthTexture,this.fullscreenMaterial.uniforms.accumulatedTexture.value=this.ssrEffect.temporalResolvePass.accumulatedTexture,this.fullscreenMaterial.uniforms.cameraMatrixWorld.value=this._camera.matrixWorld,this.fullscreenMaterial.uniforms._projectionMatrix.value=this._camera.projectionMatrix,this.fullscreenMaterial.uniforms._inverseProjectionMatrix.value=this._camera.projectionMatrixInverse}setSize(e,t){this.renderTarget.setSize(e*this.ssrEffect.resolutionScale,t*this.ssrEffect.resolutionScale),this.gBuffersRenderTarget.setSize(e*this.ssrEffect.resolutionScale,t*this.ssrEffect.resolutionScale),this.fullscreenMaterial.uniforms.accumulatedTexture.value=this.ssrEffect.temporalResolvePass.accumulatedTexture,this.fullscreenMaterial.needsUpdate=!0}dispose(){this.renderTarget.dispose(),this.gBuffersRenderTarget.dispose(),this.renderPass.dispose(),this.USE_MRT||this.webgl1DepthPass.dispose(),this.fullscreenMaterial.dispose(),this.normalTexture=null,this.depthTexture=null,this.velocityTexture=null}keepMaterialMapUpdated(e,t,n,i){this.ssrEffect[i]?t[n]!==e[n]&&(e[n]=t[n],e.uniforms[n].value=t[n],t[n]?e.defines[i]="":delete e.defines[i],e.needsUpdate=!0):e[n]!==void 0&&(e[n]=void 0,e.uniforms[n].value=void 0,delete e.defines[i],e.needsUpdate=!0)}setMRTMaterialInScene(){this.visibleMeshes=bh(this._scene);for(const e of this.visibleMeshes)if(e.material){const t=e.material;let[n,i]=this.cachedMaterials.get(e)||[];if(t!==n){i&&i.dispose(),i=new oy,this.USE_MRT&&(i.defines.USE_MRT=""),i.normalScale=t.normalScale,i.uniforms.normalScale.value=t.normalScale;const r=t.map||t.normalMap||t.roughnessMap||t.metalnessMap;r&&(i.uniforms.uvTransform.value=r.matrix),this.cachedMaterials.set(e,[t,i])}this.keepMaterialMapUpdated(i,t,"normalMap","useNormalMap"),this.keepMaterialMapUpdated(i,t,"roughnessMap","useRoughnessMap"),i.uniforms.roughness.value=this.ssrEffect.selection.size===0||this.ssrEffect.selection.has(e)?t.roughness||0:1e11,e.material=i}}unsetMRTMaterialInScene(){for(const t of this.visibleMeshes){var e;if(((e=t.material)==null?void 0:e.type)==="MRTMaterial"){t.visible=!0;const[n]=this.cachedMaterials.get(t);t.material=n}}}render(e,t){this.setMRTMaterialInScene(),e.setRenderTarget(this.gBuffersRenderTarget),this.renderPass.render(e,this.gBuffersRenderTarget),this.unsetMRTMaterialInScene(),this.USE_MRT||this.webgl1DepthPass.renderPass.render(e,this.webgl1DepthPass.renderTarget),this.fullscreenMaterial.uniforms.inputTexture.value=t.texture,this.fullscreenMaterial.uniforms.samples.value=this.ssrEffect.temporalResolvePass.samples,this.fullscreenMaterial.uniforms.cameraNear.value=this._camera.near,this.fullscreenMaterial.uniforms.cameraFar.value=this._camera.far,this.fullscreenMaterial.uniforms.viewMatrix.value.copy(this._camera.matrixWorldInverse),e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera)}}const Yc={intensity:1,exponent:1,distance:10,fade:0,roughnessFade:1,thickness:10,ior:1.45,maxRoughness:1,maxDepthDifference:10,blend:.9,correction:1,correctionRadius:1,blur:.5,blurKernel:1,blurSharpness:10,jitter:0,jitterRoughness:0,steps:20,refineSteps:5,missedRays:!0,useNormalMap:!0,useRoughnessMap:!0,resolutionScale:1,velocityResolutionScale:1};var py=`#define GLSLIFY 1
varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}`,my=`#define GLSLIFY 1
uniform sampler2D inputTexture;uniform sampler2D accumulatedTexture;uniform sampler2D velocityTexture;uniform sampler2D lastVelocityTexture;uniform float blend;uniform float correction;uniform float exponent;uniform float samples;uniform vec2 invTexSize;uniform mat4 curInverseProjectionMatrix;uniform mat4 curCameraMatrixWorld;uniform mat4 prevInverseProjectionMatrix;uniform mat4 prevCameraMatrixWorld;varying vec2 vUv;
#define MAX_NEIGHBOR_DEPTH_DIFFERENCE 0.001
#define FLOAT_EPSILON 0.00001
#define FLOAT_ONE_MINUS_EPSILON 0.99999
vec3 transformexponent;vec3 undoColorTransformExponent;vec3 transformColor(vec3 color){if(exponent==1.0)return color;return pow(abs(color),transformexponent);}vec3 undoColorTransform(vec3 color){if(exponent==1.0)return color;return max(pow(abs(color),undoColorTransformExponent),vec3(0.0));}void main(){if(exponent!=1.0){transformexponent=vec3(1.0/exponent);undoColorTransformExponent=vec3(exponent);}vec4 inputTexel=textureLod(inputTexture,vUv,0.0);vec4 accumulatedTexel;vec3 inputColor=transformColor(inputTexel.rgb);vec3 accumulatedColor;float alpha=inputTexel.a;float velocityDisocclusion;bool didReproject=false;
#ifdef boxBlur
vec3 boxBlurredColor=inputTexel.rgb;
#endif
vec4 velocity=textureLod(velocityTexture,vUv,0.0);bool isMoving=alpha<1.0||dot(velocity.xy,velocity.xy)>0.0;if(isMoving){vec3 minNeighborColor=inputColor;vec3 maxNeighborColor=inputColor;vec3 col;vec2 neighborUv;vec2 reprojectedUv=vUv-velocity.xy;vec4 lastVelocity=textureLod(lastVelocityTexture,reprojectedUv,0.0);float depth=velocity.b;float closestDepth=depth;float lastClosestDepth=lastVelocity.b;float neighborDepth;float lastNeighborDepth;for(int x=-correctionRadius;x<=correctionRadius;x++){for(int y=-correctionRadius;y<=correctionRadius;y++){if(x!=0||y!=0){neighborUv=vUv+vec2(x,y)*invTexSize;vec4 neigborVelocity=textureLod(velocityTexture,neighborUv,0.0);neighborDepth=neigborVelocity.b;col=textureLod(inputTexture,neighborUv,0.0).xyz;int absX=abs(x);int absY=abs(y);
#ifdef dilation
if(absX==1&&absY==1){if(neighborDepth>closestDepth){velocity=neigborVelocity;closestDepth=neighborDepth;}vec4 lastNeighborVelocity=textureLod(velocityTexture,vUv+vec2(x,y)*invTexSize,0.0);lastNeighborDepth=lastNeighborVelocity.b;if(neighborDepth>closestDepth){lastVelocity=lastNeighborVelocity;lastClosestDepth=lastNeighborDepth;}}
#endif
if(abs(depth-neighborDepth)<MAX_NEIGHBOR_DEPTH_DIFFERENCE){
#ifdef boxBlur
if(absX<=2&&absY<=2)boxBlurredColor+=col;
#endif
col=transformColor(col);minNeighborColor=min(col,minNeighborColor);maxNeighborColor=max(col,maxNeighborColor);}}}}float velocityLength=length(lastVelocity.xy-velocity.xy);velocityDisocclusion=(velocityLength-0.000005)*10.0;velocityDisocclusion*=velocityDisocclusion;reprojectedUv=vUv-velocity.xy;
#ifdef boxBlur
float pxRadius=correctionRadius>5 ? 121.0 : pow(float(correctionRadius*2+1),2.0);boxBlurredColor/=pxRadius;boxBlurredColor=transformColor(boxBlurredColor);
#endif
if(reprojectedUv.x>=0.0&&reprojectedUv.x<=1.0&&reprojectedUv.y>=0.0&&reprojectedUv.y<=1.0){accumulatedTexel=textureLod(accumulatedTexture,reprojectedUv,0.0);accumulatedColor=transformColor(accumulatedTexel.rgb);vec3 clampedColor=clamp(accumulatedColor,minNeighborColor,maxNeighborColor);accumulatedColor=mix(accumulatedColor,clampedColor,correction);didReproject=true;}else{
#ifdef boxBlur
accumulatedColor=boxBlurredColor;
#else
accumulatedColor=inputColor;
#endif
}if(velocity.r>FLOAT_ONE_MINUS_EPSILON&&velocity.g>FLOAT_ONE_MINUS_EPSILON){alpha=0.0;velocityDisocclusion=1.0;}}else{accumulatedColor=transformColor(textureLod(accumulatedTexture,vUv,0.0).rgb);}vec3 outputColor=inputColor;
#include <custom_compose_shader>
gl_FragColor=vec4(undoColorTransform(outputColor),alpha);}`;class gy extends Vt{constructor(e){const t=my.replace("#include <custom_compose_shader>",e);super({type:"TemporalResolveMaterial",uniforms:{inputTexture:new le(null),accumulatedTexture:new le(null),velocityTexture:new le(null),lastVelocityTexture:new le(null),samples:new le(1),blend:new le(.5),correction:new le(1),exponent:new le(1),invTexSize:new le(new ge)},defines:{correctionRadius:1},vertexShader:py,fragmentShader:t})}}const _y=`
		#ifdef USE_SKINNING
		#ifdef BONE_TEXTURE
			uniform sampler2D prevBoneTexture;
			mat4 getPrevBoneMatrix( const in float i ) {
				float j = i * 4.0;
				float x = mod( j, float( boneTextureSize ) );
				float y = floor( j / float( boneTextureSize ) );
				float dx = 1.0 / float( boneTextureSize );
				float dy = 1.0 / float( boneTextureSize );
				y = dy * ( y + 0.5 );
				vec4 v1 = texture2D( prevBoneTexture, vec2( dx * ( x + 0.5 ), y ) );
				vec4 v2 = texture2D( prevBoneTexture, vec2( dx * ( x + 1.5 ), y ) );
				vec4 v3 = texture2D( prevBoneTexture, vec2( dx * ( x + 2.5 ), y ) );
				vec4 v4 = texture2D( prevBoneTexture, vec2( dx * ( x + 3.5 ), y ) );
				mat4 bone = mat4( v1, v2, v3, v4 );
				return bone;
			}
		#else
			uniform mat4 prevBoneMatrices[ MAX_BONES ];
			mat4 getPrevBoneMatrix( const in float i ) {
				mat4 bone = prevBoneMatrices[ int(i) ];
				return bone;
			}
		#endif
		#endif
`,xy=`
		vec3 transformed;

		// Get the normal
		${de.skinbase_vertex}
		${de.beginnormal_vertex}
		${de.skinnormal_vertex}
		${de.defaultnormal_vertex}

		// Get the current vertex position
		transformed = vec3( position );
		${de.skinning_vertex}
		newPosition = velocityMatrix * vec4( transformed, 1.0 );

		// Get the previous vertex position
		transformed = vec3( position );
		${de.skinbase_vertex.replace(/mat4 /g,"").replace(/getBoneMatrix/g,"getPrevBoneMatrix")}
		${de.skinning_vertex.replace(/vec4 /g,"")}
		prevPosition = prevVelocityMatrix * vec4( transformed, 1.0 );

		gl_Position = newPosition;
`;class vy extends Vt{constructor(){super({uniforms:{prevVelocityMatrix:{value:new Me},velocityMatrix:{value:new Me},prevBoneTexture:{value:null},interpolateGeometry:{value:0},intensity:{value:1},boneTexture:{value:null},alphaTest:{value:0},map:{value:null},alphaMap:{value:null},opacity:{value:1}},vertexShader:`
                    #define MAX_BONES 1024
                    
                    ${de.skinning_pars_vertex}
                    ${_y}
        
                    uniform mat4 velocityMatrix;
                    uniform mat4 prevVelocityMatrix;
                    uniform float interpolateGeometry;
                    varying vec4 prevPosition;
                    varying vec4 newPosition;
					varying vec2 vHighPrecisionZW;
        
                    void main() {
        
                        ${xy}

						vHighPrecisionZW = gl_Position.zw;
        
                    }`,fragmentShader:`
                    uniform float intensity;
                    varying vec4 prevPosition;
                    varying vec4 newPosition;
					varying vec2 vHighPrecisionZW;
        
                    void main() {
						#ifdef FULL_MOVEMENT
						gl_FragColor = vec4( 1., 1., 1. - gl_FragCoord.z, 0. );
						return;
						#endif

                        vec2 pos0 = (prevPosition.xy / prevPosition.w) * 0.5 + 0.5;
                        vec2 pos1 = (newPosition.xy / newPosition.w) * 0.5 + 0.5;
        
                        vec2 vel = pos1 - pos0;

						float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
                        
                        gl_FragColor = vec4( vel, 1. - fragCoordZ, 0. );
        
                    }`}),this.isVelocityMaterial=!0}}const yy=new xe(0),My=["visible","wireframe","side"];class Sy extends nn{constructor(e,t){var n,i;super("VelocityPass"),this.cachedMaterials=new WeakMap,this.lastCameraTransform={position:new R,quaternion:new yn},this.visibleMeshes=[],this.renderedMeshesThisFrame=0,this.renderedMeshesLastFrame=0,this._scene=e,this._camera=t,this.renderTarget=new ct(((n=window)==null?void 0:n.innerWidth)||1e3,((i=window)==null?void 0:i.innerHeight)||1e3,{type:_n})}setVelocityMaterialInScene(){this.renderedMeshesThisFrame=0,this.visibleMeshes=bh(this._scene);for(const n of this.visibleMeshes){var e;const i=n.material;let[r,a]=this.cachedMaterials.get(n)||[];if(i!==r){var t;a=new vy,a.lastMatrixWorld=new Me,n.material=a,(t=n.skeleton)!=null&&t.boneTexture&&this.saveBoneTexture(n),this.cachedMaterials.set(n,[i,a])}if(a.uniforms.velocityMatrix.value.multiplyMatrices(this._camera.projectionMatrix,n.modelViewMatrix),n.userData.needsUpdatedReflections||i.map instanceof X0?("FULL_MOVEMENT"in a.defines||(a.needsUpdate=!0),a.defines.FULL_MOVEMENT=""):"FULL_MOVEMENT"in a.defines&&(delete a.defines.FULL_MOVEMENT,a.needsUpdate=!0),n.visible=this.cameraMovedThisFrame||!n.matrixWorld.equals(a.lastMatrixWorld)||n.skeleton||"FULL_MOVEMENT"in a.defines,n.material=a,!!n.visible){this.renderedMeshesThisFrame++;for(const o of My)a[o]=i[o];(e=n.skeleton)!=null&&e.boneTexture&&(a.defines.USE_SKINNING="",a.defines.BONE_TEXTURE="",a.uniforms.boneTexture.value=n.skeleton.boneTexture)}}}saveBoneTexture(e){let t=e.material.uniforms.prevBoneTexture.value;if(t&&t.image.width===e.skeleton.boneTexture.width)t=e.material.uniforms.prevBoneTexture.value,t.image.data.set(e.skeleton.boneTexture.image.data);else{var n;(n=t)==null||n.dispose();const i=e.skeleton.boneTexture.image.data.slice(),r=e.skeleton.boneTexture.image.width;t=new hh(i,r,r,Rt,Nn),e.material.uniforms.prevBoneTexture.value=t,t.needsUpdate=!0}}unsetVelocityMaterialInScene(){for(const t of this.visibleMeshes)if(t.material.isVelocityMaterial){var e;t.visible=!0,t.material.lastMatrixWorld.copy(t.matrixWorld),t.material.uniforms.prevVelocityMatrix.value.multiplyMatrices(this._camera.projectionMatrix,t.modelViewMatrix),(e=t.skeleton)!=null&&e.boneTexture&&this.saveBoneTexture(t),t.material=this.cachedMaterials.get(t)[0]}}setSize(e,t){this.renderTarget.setSize(e,t)}renderVelocity(e){if(e.setRenderTarget(this.renderTarget),this.renderedMeshesThisFrame>0){const{background:t}=this._scene;this._scene.background=yy,e.render(this._scene,this._camera),this._scene.background=t}else e.clearColor()}checkCameraMoved(){const e=this.lastCameraTransform.position.distanceToSquared(this._camera.position),t=8*(1-this.lastCameraTransform.quaternion.dot(this._camera.quaternion));return e>1e-6||t>1e-6?(this.lastCameraTransform.position.copy(this._camera.position),this.lastCameraTransform.quaternion.copy(this._camera.quaternion),!0):!1}render(e){this.cameraMovedThisFrame=this.checkCameraMoved(),this.setVelocityMaterialInScene(),(this.renderedMeshesThisFrame>0||this.renderedMeshesLastFrame>0)&&this.renderVelocity(e),this.unsetVelocityMaterialInScene(),this.renderedMeshesLastFrame=this.renderedMeshesThisFrame}}const Kc=new ge;class by extends nn{constructor(e,t,n,i={}){super("TemporalResolvePass"),this.velocityPass=null,this.velocityResolutionScale=1,this.samples=1,this.lastCameraTransform={position:new R,quaternion:new yn},this._scene=e,this._camera=t,this.renderTarget=new ct(1,1,{minFilter:Ee,magFilter:Ee,type:_n,depthBuffer:!1}),this.velocityPass=new Sy(e,t),this.fullscreenMaterial=new gy(n),this.fullscreenMaterial.defines.correctionRadius=i.correctionRadius||1,i.dilation&&(this.fullscreenMaterial.defines.dilation=""),i.boxBlur&&(this.fullscreenMaterial.defines.boxBlur=""),this.setupFramebuffers(1,1),this.checkCanUseSharedVelocityTexture()}dispose(){this._scene.userData.velocityTexture===this.velocityPass.renderTarget.texture&&(delete this._scene.userData.velocityTexture,delete this._scene.userData.lastVelocityTexture),this.renderTarget.dispose(),this.accumulatedTexture.dispose(),this.fullscreenMaterial.dispose(),this.velocityPass.dispose()}setSize(e,t){this.renderTarget.setSize(e,t),this.velocityPass.setSize(e*this.velocityResolutionScale,t*this.velocityResolutionScale),this.velocityPass.renderTarget.texture.minFilter=this.velocityResolutionScale===1?Ke:Ee,this.velocityPass.renderTarget.texture.magFilter=this.velocityResolutionScale===1?Ke:Ee,this.velocityPass.renderTarget.texture.needsUpdate=!0,this.fullscreenMaterial.uniforms.invTexSize.value.set(1/e,1/t),this.setupFramebuffers(e,t)}setupFramebuffers(e,t){this.accumulatedTexture&&this.accumulatedTexture.dispose(),this.lastVelocityTexture&&this.lastVelocityTexture.dispose(),this.accumulatedTexture=new Dc(e,t,Rt),this.accumulatedTexture.minFilter=Ee,this.accumulatedTexture.magFilter=Ee,this.accumulatedTexture.type=_n,this.lastVelocityTexture=new Dc(e*this.velocityResolutionScale,t*this.velocityResolutionScale,Rt),this.lastVelocityTexture.minFilter=this.velocityResolutionScale===1?Ke:Ee,this.lastVelocityTexture.magFilter=this.velocityResolutionScale===1?Ke:Ee,this.lastVelocityTexture.type=_n,this.fullscreenMaterial.uniforms.accumulatedTexture.value=this.accumulatedTexture,this.fullscreenMaterial.uniforms.lastVelocityTexture.value=this.lastVelocityTexture,this.fullscreenMaterial.needsUpdate=!0}checkCanUseSharedVelocityTexture(){return this._scene.userData.velocityTexture&&this.velocityPass.renderTarget.texture!==this._scene.userData.velocityTexture?this.velocityPass.renderTarget.texture===this.fullscreenMaterial.uniforms.velocityTexture.value&&(this.fullscreenMaterial.uniforms.lastVelocityTexture.value=this._scene.userData.lastVelocityTexture,this.fullscreenMaterial.uniforms.velocityTexture.value=this._scene.userData.velocityTexture,this.fullscreenMaterial.needsUpdate=!0):this.velocityPass.renderTarget.texture!==this.fullscreenMaterial.uniforms.velocityTexture.value&&(this.fullscreenMaterial.uniforms.velocityTexture.value=this.velocityPass.renderTarget.texture,this.fullscreenMaterial.uniforms.lastVelocityTexture.value=this.lastVelocityTexture,this.fullscreenMaterial.needsUpdate=!0,this._scene.userData.velocityTexture||(this._scene.userData.velocityTexture=this.velocityPass.renderTarget.texture,this._scene.userData.lastVelocityTexture=this.lastVelocityTexture)),this.velocityPass.renderTarget.texture!==this.fullscreenMaterial.uniforms.velocityTexture.value}checkNeedsResample(){const e=this.lastCameraTransform.position.distanceToSquared(this._camera.position),t=8*(1-this.lastCameraTransform.quaternion.dot(this._camera.quaternion));(e>1e-6||t>1e-6)&&(this.samples=1,this.lastCameraTransform.position.copy(this._camera.position),this.lastCameraTransform.quaternion.copy(this._camera.quaternion))}render(e){this.samples++,this.checkNeedsResample(),this.fullscreenMaterial.uniforms.samples.value=this.samples,e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera),e.copyFramebufferToTexture(Kc,this.accumulatedTexture),e.setRenderTarget(this.velocityPass.renderTarget),e.copyFramebufferToTexture(Kc,this.lastVelocityTexture)}}const Zc=function(e,t){let n=1,i=0;for(;e>0;)n/=t,i+=n*(e%t),e=~~(e/t);return i},Ty=s=>{const e=[];let t=1;const n=t+s;for(;t<n;t++)e.push([Zc(t,2)-.5,Zc(t,3)-.5]);return e};function $c(s){return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const wy=`
#if defined( USE_ENVMAP ) || defined(  ) || defined ( USE_SHADOWMAP )
    vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );

    #ifdef BOX_PROJECTED_ENV_MAP
        vWorldPosition = worldPosition.xyz;
    #endif
#endif
`,Ey=`
#ifdef BOX_PROJECTED_ENV_MAP
    uniform vec3 envMapSize;
    uniform vec3 envMapPosition;
    varying vec3 vWorldPosition;
    
    vec3 parallaxCorrectNormal( vec3 v, vec3 cubeSize, vec3 cubePos ) {
        vec3 nDir = normalize( v );

        vec3 rbmax = ( .5 * cubeSize + cubePos - vWorldPosition ) / nDir;
        vec3 rbmin = ( -.5 * cubeSize + cubePos - vWorldPosition ) / nDir;

        vec3 rbminmax;

        rbminmax.x = ( nDir.x > 0. ) ? rbmax.x : rbmin.x;
        rbminmax.y = ( nDir.y > 0. ) ? rbmax.y : rbmin.y;
        rbminmax.z = ( nDir.z > 0. ) ? rbmax.z : rbmin.z;

        float correction = min( min( rbminmax.x, rbminmax.y ), rbminmax.z );
        vec3 boxIntersection = vWorldPosition + nDir * correction;
        
        return boxIntersection - cubePos;
    }
#endif
`,Ay=`
#ifdef BOX_PROJECTED_ENV_MAP
    worldNormal = parallaxCorrectNormal( worldNormal, envMapSize, envMapPosition );
#endif
`,Cy=`
#ifdef BOX_PROJECTED_ENV_MAP
    reflectVec = parallaxCorrectNormal( reflectVec, envMapSize, envMapPosition );
#endif
`;function Ry(s,e,t){s.defines.BOX_PROJECTED_ENV_MAP="",s.uniforms.envMapPosition={value:e},s.uniforms.envMapSize={value:t};const n=new RegExp($c("vec3 worldNormal = inverseTransformDirection ( normal , viewMatrix ) ;").replaceAll(" ","\\s*"),"g"),i=new RegExp($c("reflectVec = inverseTransformDirection ( reflectVec , viewMatrix ) ;").replaceAll(" ","\\s*"),"g");s.vertexShader=`varying vec3 vWorldPosition;
`+s.vertexShader.replace("#include <worldpos_vertex>",wy),s.fragmentShader=Ey+`
`+s.fragmentShader.replace("#include <envmap_physical_pars_fragment>",de.envmap_physical_pars_fragment).replace(n,`vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
                ${Ay}`).replace(i,`reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
                ${Cy}`)}const Ly=sy.replace("#include <helperFunctions>",Sh).replace("#include <boxBlur>",ry),Dy=["blur","blurSharpness","blurKernel"],Py=new Bo(1);let Ls;class Iy extends Jo{constructor(e,t,n=Yc){super("SSREffect",Ly,{type:"FinalSSRMaterial",uniforms:new Map([["reflectionsTexture",new le(null)],["blur",new le(0)],["blurSharpness",new le(0)],["blurKernel",new le(0)]]),defines:new Map([["RENDER_MODE","0"]])}),this.haltonSequence=Ty(1024),this.haltonIndex=0,this.selection=new vv,this.lastSize=void 0,this.cubeCamera=new eh(.001,1e3,Py),this.usingBoxProjectedEnvMap=!1,this._scene=e,this._camera=t,n=wo({},Yc,n,{boxBlur:!0,dilation:!0}),this.temporalResolvePass=new by(e,t,ay,n),this.uniforms.get("reflectionsTexture").value=this.temporalResolvePass.renderTarget.texture,this.reflectionsPass=new fy(this,n),this.temporalResolvePass.fullscreenMaterial.uniforms.inputTexture.value=this.reflectionsPass.renderTarget.texture,this.lastSize={width:n.width,height:n.height,resolutionScale:n.resolutionScale,velocityResolutionScale:n.velocityResolutionScale},this.setSize(n.width,n.height),this.makeOptionsReactive(n)}makeOptionsReactive(e){let t=!1;const n=this.reflectionsPass.fullscreenMaterial.uniforms,i=Object.keys(n);for(const r of Object.keys(e))Object.defineProperty(this,r,{get(){return e[r]},set(a){if(!(e[r]===a&&t))switch(e[r]=a,Dy.includes(r)||this.setSize(this.lastSize.width,this.lastSize.height,!0),r){case"resolutionScale":this.setSize(this.lastSize.width,this.lastSize.height);break;case"velocityResolutionScale":this.temporalResolvePass.velocityResolutionScale=a,this.setSize(this.lastSize.width,this.lastSize.height,!0);break;case"blur":this.uniforms.get("blur").value=a;break;case"blurSharpness":this.uniforms.get("blurSharpness").value=a;break;case"blurKernel":this.uniforms.get("blurKernel").value=a;break;case"steps":this.reflectionsPass.fullscreenMaterial.defines.steps=parseInt(a),this.reflectionsPass.fullscreenMaterial.needsUpdate=t;break;case"refineSteps":this.reflectionsPass.fullscreenMaterial.defines.refineSteps=parseInt(a),this.reflectionsPass.fullscreenMaterial.needsUpdate=t;break;case"missedRays":a?this.reflectionsPass.fullscreenMaterial.defines.missedRays="":delete this.reflectionsPass.fullscreenMaterial.defines.missedRays,this.reflectionsPass.fullscreenMaterial.needsUpdate=t;break;case"correctionRadius":this.temporalResolvePass.fullscreenMaterial.defines.correctionRadius=Math.round(a),this.temporalResolvePass.fullscreenMaterial.needsUpdate=t;break;case"blend":this.temporalResolvePass.fullscreenMaterial.uniforms.blend.value=a;break;case"correction":this.temporalResolvePass.fullscreenMaterial.uniforms.correction.value=a;break;case"exponent":this.temporalResolvePass.fullscreenMaterial.uniforms.exponent.value=a;break;case"distance":n.rayDistance.value=a;default:i.includes(r)&&(n[r].value=a)}}}),this[r]=e[r];t=!0}setSize(e,t,n=!1){!n&&e===this.lastSize.width&&t===this.lastSize.height&&this.resolutionScale===this.lastSize.resolutionScale&&this.velocityResolutionScale===this.lastSize.velocityResolutionScale||(this.temporalResolvePass.setSize(e,t),this.reflectionsPass.setSize(e,t),this.lastSize={width:e,height:t,resolutionScale:this.resolutionScale,velocityResolutionScale:this.velocityResolutionScale})}generateBoxProjectedEnvMapFallback(e,t=new R,n=new R,i=512){this.cubeCamera.renderTarget.dispose(),this.cubeCamera.renderTarget=new Bo(i),this.cubeCamera.position.copy(t),this.cubeCamera.updateMatrixWorld(),this.cubeCamera.update(e,this._scene),Ls||(Ls=new xo(e),Ls.compileCubemapShader());const r=Ls.fromCubemap(this.cubeCamera.renderTarget.texture).texture;r.minFilter=Ee,r.magFilter=Ee;const a=this.reflectionsPass.fullscreenMaterial;return Ry(a,t,n),a.fragmentShader=a.fragmentShader.replace("vec3 worldPos","worldPos").replace("varying vec3 vWorldPosition;","vec3 worldPos;"),a.uniforms.envMapPosition.value.copy(t),a.uniforms.envMapSize.value.copy(n),Xc(a,r,i),this.usingBoxProjectedEnvMap=!0,r}setIBLRadiance(e,t){this._scene.traverse(n=>{if(n.material){var i;const r=(i=t.properties.get(n.material))==null?void 0:i.uniforms;r&&"disableIBLRadiance"in r&&(r.disableIBLRadiance.value=e)}})}deleteBoxProjectedEnvMapFallback(){const e=this.reflectionsPass.fullscreenMaterial;e.uniforms.envMap.value=null,e.fragmentShader=e.fragmentShader.replace("worldPos = ","vec3 worldPos = "),delete e.defines.BOX_PROJECTED_ENV_MAP,e.needsUpdate=!0,this.usingBoxProjectedEnvMap=!1}dispose(){super.dispose(),this.reflectionsPass.dispose(),this.temporalResolvePass.dispose()}update(e,t){if(!this.usingBoxProjectedEnvMap&&this._scene.environment){const o=this.reflectionsPass.fullscreenMaterial;let l=null;if(this._scene.traverse(c=>{if(!l&&c.material&&!c.material.envMap){const u=e.properties.get(c.material);"envMap"in u&&u.envMap instanceof at&&(l=u.envMap)}}),l){const c=this._scene.environment.image.height;Xc(o,l,c)}}this.haltonIndex=(this.haltonIndex+1)%this.haltonSequence.length;const[n,i]=this.haltonSequence[this.haltonIndex],{width:r,height:a}=this.lastSize;this.temporalResolvePass.velocityPass.render(e),this._camera.setViewOffset&&this._camera.setViewOffset(r,a,n,i,r,a),this.reflectionsPass.render(e,t),this.temporalResolvePass.render(e),this._camera.clearViewOffset()}static patchDirectEnvIntensity(e=0){e===0?de.envmap_physical_pars_fragment=de.envmap_physical_pars_fragment.replace("vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {","vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) { return vec3(0.0);"):de.envmap_physical_pars_fragment=de.envmap_physical_pars_fragment.replace("vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );","vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness ) * "+e.toFixed(5)+";")}}const Ka=new WeakMap;class Ny extends br{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e,t){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new qs(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.decodeDracoFile(a,t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};return this.decodeGeometry(e,r).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Ka.has(e)){const l=Ka.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Ka.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new tn;e.index&&t.setIndex(new st(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,a=i.array,o=i.itemSize;t.setAttribute(r,new st(a,o))}return t}_loadLibrary(e,t,n){const i=new qs(this.manager);return i.setPath(this.decoderPath),i.setResponseType(n),i.setWithCredentials(this.withCredentials),new Promise((r,a)=>{i.load(e,r,void 0,()=>{i.load(t,r,void 0,()=>{a(new Error("THREE.DRACOLoader: Unable to load the decoder."))})})})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js.br","draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js.br","draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm.br","draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=Fy.toString(),a=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function Fy(){let s,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder,p=new h.DecoderBuffer;p.Init(new Int8Array(l),l.byteLength);try{const g=t(h,d,p,c),m=g.attributes.map(f=>f.array.buffer);g.index&&m.push(g.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:g},m)}catch(g){console.error(g),self.postMessage({type:"error",id:o.id,error:g.message})}finally{h.destroy(p),h.destroy(d)}});break}};function t(a,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,p;const g=o.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,p=o.DecodeBufferToMesh(l,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,p=o.DecodeBufferToPointCloud(l,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const m={index:null,attributes:[]};for(const f in u){const _=self[h[f]];let S,v;if(c.useUniqueIDs)v=u[f],S=o.GetAttributeByUniqueId(d,v);else{if(v=o.GetAttributeId(d,a[u[f]]),v===-1)continue;S=o.GetAttribute(d,v)}m.attributes.push(i(a,o,d,f,_,S))}return g===a.TRIANGULAR_MESH&&(m.index=n(a,o,d)),a.destroy(d),m}function n(a,o,l){const u=l.num_faces()*3,h=u*4,d=a._malloc(h);o.GetTrianglesUInt32Array(l,h,d);const p=new Uint32Array(a.HEAPF32.buffer,d,u).slice();return a._free(d),{array:p,itemSize:1}}function i(a,o,l,c,u,h){const d=h.num_components(),g=l.num_points()*d,m=g*u.BYTES_PER_ELEMENT,f=r(a,u),_=a._malloc(m);o.GetAttributeDataArrayForAllPoints(l,h,f,m,_);const S=new u(a.HEAPF32.buffer,_,g).slice();return a._free(_),{name:c,array:S,itemSize:d}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}const Oy="/assets/hermesalt.b661493e.glb";var Uy=`vec4 rgb_to_hsv(vec4 rgb){float cmax,cmin,h,s,v,cdelta;vec3 c;cmax=max(rgb[0],max(rgb[1],rgb[2]));cmin=min(rgb[0],min(rgb[1],rgb[2]));cdelta=cmax-cmin;v=cmax;if(cmax!=0.0){s=cdelta/cmax;}else{s=0.0;h=0.0;}if(s==0.0){h=0.0;}else{c=(vec3(cmax)-rgb.xyz)/cdelta;if(rgb.x==cmax){h=c[2]-c[1];}else if(rgb.y==cmax){h=2.0+c[0]-c[2];}else{h=4.0+c[1]-c[0];}h/=6.0;if(h<0.0){h+=1.0;}}return vec4(h,s,v,rgb.w);}vec4 hsv_to_rgb(vec4 hsv){float i,f,p,q,t,h,s,v;vec3 rgb;h=hsv[0];s=hsv[1];v=hsv[2];if(s==0.0){rgb=vec3(v,v,v);}else{if(h==1.0){h=0.0;}h*=6.0;i=floor(h);f=h-i;rgb=vec3(f,f,f);p=v*(1.0-s);q=v*(1.0-(s*f));t=v*(1.0-(s*(1.0-f)));if(i==0.0){rgb=vec3(v,t,p);}else if(i==1.0){rgb=vec3(q,v,p);}else if(i==2.0){rgb=vec3(p,v,t);}else if(i==3.0){rgb=vec3(p,q,v);}else if(i==4.0){rgb=vec3(t,p,v);}else{rgb=vec3(v,p,q);}}return vec4(rgb,hsv.w);}vec3 rgb_to_hsv(vec3 c){vec4 K=vec4(0.0,-1.0/3.0,2.0/3.0,-1.0);vec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g));vec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r));float d=q.x-min(q.w,q.y);float e=1.0e-10;return vec3(abs(q.z+(q.w-q.y)/(6.0*d+e)),d/(q.x+e),q.x);}vec3 hsv_to_rgb(vec3 c){vec4 K=vec4(1.0,2.0/3.0,1.0/3.0,3.0);vec3 p=abs(fract(c.xxx+K.xyz)*6.0-K.www);return c.z*mix(K.xxx,clamp(p-K.xxx,0.0,1.0),c.y);}vec3 linear_color_ramp(vec3 colors[3],float endpoints[3],float at){float prev=0.;vec3 prev_c=colors[0];float next=endpoints[0];vec3 next_c=colors[0];bool finishedLoop=false;for(int i=0;i<3;i++){float endpoint=endpoints[i];if(endpoint>at){next=endpoints[i];next_c=colors[i];if(i<1){prev=0.;prev_c=colors[0];}else{prev=endpoints[int(max(float(i-1),0.))];prev_c=colors[int(max(float(i-1),0.))];}finishedLoop=true;break;}}if(!finishedLoop){next=endpoints[2];prev=endpoints[1];next_c=colors[2];prev_c=colors[1];}float mix_val=(at-prev)*1./(next-prev);return mix(prev_c,next_c,mix_val);}vec3 random3(vec3 c){float j=4096.0*sin(dot(c,vec3(17.0,59.4,15.0)));vec3 r;r.z=fract(512.0*j);j*=.125;r.x=fract(512.0*j);j*=.125;r.y=fract(512.0*j);return r-0.5;}const float F3=0.3333333;const float G3=0.1666667;float simplex3d(vec3 p){vec3 s=floor(p+dot(p,vec3(F3)));vec3 x=p-s+dot(s,vec3(G3));vec3 e=step(vec3(0.0),x-x.yzx);vec3 i1=e*(1.0-e.zxy);vec3 i2=1.0-e.zxy*(1.0-e);vec3 x1=x-i1+G3;vec3 x2=x-i2+2.0*G3;vec3 x3=x-1.0+3.0*G3;vec4 w,d;w.x=dot(x,x);w.y=dot(x1,x1);w.z=dot(x2,x2);w.w=dot(x3,x3);w=max(0.6-w,0.0);d.x=dot(random3(s),x);d.y=dot(random3(s+i1),x1);d.z=dot(random3(s+i2),x2);d.w=dot(random3(s+1.0),x3);w*=w;w*=w;d*=w;return dot(d,vec4(52.0));}const mat3 rot1=mat3(-0.37,0.36,0.85,-0.14,-0.93,0.34,0.92,0.01,0.4);const mat3 rot2=mat3(-0.55,-0.39,0.74,0.33,-0.91,-0.24,0.77,0.12,0.63);const mat3 rot3=mat3(-0.71,0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);float simplex3d_fractal(vec3 m){return 0.5333333*simplex3d(m*rot1)+0.2666667*simplex3d(2.0*m*rot2)+0.1333333*simplex3d(4.0*m*rot3)+0.0666667*simplex3d(8.0*m);}float approxPowSinWave(float infloat){float x=sin(2.*infloat+1.5)*0.5+0.5;return mix(-30.*x+1.,0.0,step(0.03,x));}float sinNoise(vec3 pos,float a){return(0.5*sin(pos.x*a)+0.5)*(0.5*sin(pos.y*a)+0.5)*(0.5*sin(pos.z*a)+0.5);}vec3 sinNoiseVec(vec3 pos,float a){return vec3((0.5*sin(pos.x*a)+0.5),(0.5*sin(pos.y*a)+0.5),(0.5*sin(pos.z*a)+0.5));}vec3 glitchVertex(vec3 position,float time){float noise=simplex3d(position+time+20.);vec3 newPosition=position+vec3(noise,noise*-1.,noise)*approxPowSinWave(time*0.5+position.z*0.05)*3.;return newPosition;}varying vec2 vUv;uniform float time;uniform vec3 colorA;uniform vec3 colorB;uniform vec3 colorC;varying vec3 nNormal;
#define STANDARD
#ifdef PHYSICAL
#define IOR
#define SPECULAR
#endif
uniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;
#ifdef IOR
uniform float ior;
#endif
#ifdef SPECULAR
uniform float specularIntensity;uniform vec3 specularColor;
#ifdef USE_SPECULARINTENSITYMAP
uniform sampler2D specularIntensityMap;
#endif
#ifdef USE_SPECULARCOLORMAP
uniform sampler2D specularColorMap;
#endif
#endif
#ifdef USE_CLEARCOAT
uniform float clearcoat;uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
uniform float iridescence;uniform float iridescenceIOR;uniform float iridescenceThicknessMinimum;uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
uniform vec3 sheenColor;uniform float sheenRoughness;
#ifdef USE_SHEENCOLORMAP
uniform sampler2D sheenColorMap;
#endif
#ifdef USE_SHEENROUGHNESSMAP
uniform sampler2D sheenRoughnessMap;
#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
float endpoints[3];vec3 cols[3];void main(){
#include <clipping_planes_fragment>
vec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;
#include <logdepthbuf_fragment>
#include <map_fragment>
vec3 reflectionVec=vec3(0.324,0.186,-0.084);vec3 reflectedVec=reflect(vNormal,reflectionVec);vec3 crossProd=cross(reflectedVec,vec3(-0.695,0.324,0.094));vec3 other=vec3(length(crossProd),4.,2.);endpoints[0]=0.397;endpoints[1]=0.406;endpoints[2]=0.60;cols[0]=colorA;cols[1]=colorB;cols[2]=colorC;float rampFac=other.x;vec3 outRampCol=linear_color_ramp(cols,endpoints,rampFac);
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 totalDiffuse=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse;vec3 totalSpecular=reflectedLight.directSpecular+reflectedLight.indirectSpecular;
#include <transmission_fragment>
vec3 outgoingLight=totalDiffuse+totalSpecular+totalEmissiveRadiance;
#ifdef USE_SHEEN
float sheenEnergyComp=1.0-0.157*max3(material.sheenColor);outgoingLight=outgoingLight*sheenEnergyComp+sheenSpecular;
#endif
#ifdef USE_CLEARCOAT
float dotNVcc=saturate(dot(geometry.clearcoatNormal,geometry.viewDir));vec3 Fcc=F_Schlick(material.clearcoatF0,material.clearcoatF90,dotNVcc);outgoingLight=outgoingLight*(1.0-material.clearcoat*Fcc)+clearcoatSpecular*material.clearcoat;
#endif
outgoingLight*=hsv_to_rgb(vec4(rgb_to_hsv(vec4(outRampCol,1.)).r,1.0,2.0,1.0)).rgb;outgoingLight*=1.7;
#include <output_fragment>
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,zy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
varying vec3 vWorldPosition;
#endif
vec3 random3(vec3 c){float j=4096.0*sin(dot(c,vec3(17.0,59.4,15.0)));vec3 r;r.z=fract(512.0*j);j*=.125;r.x=fract(512.0*j);j*=.125;r.y=fract(512.0*j);return r-0.5;}const float F3=0.3333333;const float G3=0.1666667;float simplex3d(vec3 p){vec3 s=floor(p+dot(p,vec3(F3)));vec3 x=p-s+dot(s,vec3(G3));vec3 e=step(vec3(0.0),x-x.yzx);vec3 i1=e*(1.0-e.zxy);vec3 i2=1.0-e.zxy*(1.0-e);vec3 x1=x-i1+G3;vec3 x2=x-i2+2.0*G3;vec3 x3=x-1.0+3.0*G3;vec4 w,d;w.x=dot(x,x);w.y=dot(x1,x1);w.z=dot(x2,x2);w.w=dot(x3,x3);w=max(0.6-w,0.0);d.x=dot(random3(s),x);d.y=dot(random3(s+i1),x1);d.z=dot(random3(s+i2),x2);d.w=dot(random3(s+1.0),x3);w*=w;w*=w;d*=w;return dot(d,vec4(52.0));}const mat3 rot1=mat3(-0.37,0.36,0.85,-0.14,-0.93,0.34,0.92,0.01,0.4);const mat3 rot2=mat3(-0.55,-0.39,0.74,0.33,-0.91,-0.24,0.77,0.12,0.63);const mat3 rot3=mat3(-0.71,0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);float simplex3d_fractal(vec3 m){return 0.5333333*simplex3d(m*rot1)+0.2666667*simplex3d(2.0*m*rot2)+0.1333333*simplex3d(4.0*m*rot3)+0.0666667*simplex3d(8.0*m);}float approxPowSinWave(float infloat){float x=sin(2.*infloat+1.5)*0.5+0.5;return mix(-30.*x+1.,0.0,step(0.03,x));}float sinNoise(vec3 pos,float a){return(0.5*sin(pos.x*a)+0.5)*(0.5*sin(pos.y*a)+0.5)*(0.5*sin(pos.z*a)+0.5);}vec3 sinNoiseVec(vec3 pos,float a){return vec3((0.5*sin(pos.x*a)+0.5),(0.5*sin(pos.y*a)+0.5),(0.5*sin(pos.z*a)+0.5));}vec3 glitchVertex(vec3 position,float time){float noise=simplex3d(position+time+20.);vec3 newPosition=position+vec3(noise,noise*-1.,noise)*approxPowSinWave(time*0.5+position.z*0.05)*3.;return newPosition;}varying vec2 vUv;uniform float time;uniform float explode;varying vec3 nNormal;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){
#include <uv_vertex>
#include <uv2_vertex>
#include <color_vertex>
#include <morphcolor_vertex>
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
vec3 transformed=glitchVertex(position,time);transformed=transformed+normal*explode;nNormal=normal;vUv=uv;
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
vViewPosition=-mvPosition.xyz;
#include <worldpos_vertex>
#include <shadowmap_vertex>
#include <fog_vertex>
#ifdef USE_TRANSMISSION
vWorldPosition=worldPosition.xyz;
#endif
}`;let ln,Os,Us,Mi={modelOpacity:0,timeStep:.02,explode:0};const ea=new ch({antialias:!1,stencil:!1,depth:!1,canvas:document.querySelector("#renderCanvas")});ea.outputEncoding=Ce;ea.setSize(window.innerWidth,window.innerHeight);const Ni=new yo;Ni.background=new xe(16777215);const Th=new _h(16777215,4.8);Th.position.set(-10,1,-4);Ni.add(Th);const By=new dx(16777215,.005);Ni.add(By);const kn=new yt(23,window.innerWidth/window.innerHeight,.1,1e3);kn.position.set(0,0,15);Ni.add(kn);const wh=new wx,Eh=new Ny;Eh.setDecoderPath("./draco/");wh.setDRACOLoader(Eh);let Za=[[[0,1,.954],[.694,.032,.364],[.027,.016,.644]],[[1,.685,0],[.694,.004,0],[.644,0,.515]],[[0,1,1],[0,.004,.694],[0,1,1]],[[0,1,0],[.55,.694,0],[1,1,1]],[[57/255,0,153/255],[1,0,84/255],[1,189/255,0]],[[.9,.4,0],[.9,0,.6],[0,.2,.4]]][0];wh.load(Oy,s=>{ln=s.scene.children[0],ln.position.set(0,-2.3,0),ln.rotateZ(-.8);let e=.14;ln.scale.set(e,e,e),Os=new Je,Os.add(ln),Ni.add(Os);const t=new ns({transparent:!0,roughness:.01,metalness:.7});ln.material=t,ln.material.onBeforeCompile=n=>{n.uniforms.time={value:0},n.uniforms.explode={value:0},n.uniforms.colorA={value:Za[0],type:"vec3"},n.uniforms.colorB={value:Za[1],type:"vec3"},n.uniforms.colorC={value:Za[2],type:"vec3"},n.vertexShader=zy,n.fragmentShader=Uy,Us=n},ln.material.customProgramCacheKey=()=>"custom",vn.to(Mi,{duration:2,modelOpacity:1,ease:"cubic.inOut",repeat:0,startAt:{modelOpacity:0}})},()=>{},s=>{});const ky=()=>{kn.aspect=window.innerWidth/window.innerHeight,kn.updateProjectionMatrix(),ea.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",ky,!1);const rs=new _v(ea),Vy=new Zo(Ni,kn),Gy=new Iy(Ni,kn,{intensity:5,exponent:1.75,blend:.8,blur:0,jitter:0,steps:2,refineSteps:1,resolutionScale:1}),Hy=new $o(kn,Gy),Wy=new ty({premultiply:!0,blendFunction:Le.COLOR_DODGE}),jy=new $o(kn,Wy),qy=new iy({density:9,color:new xe(0,1,0)}),Xy=new $o(kn,qy);rs.addPass(Vy);rs.addPass(Hy);rs.addPass(Xy);rs.addPass(jy);let Yy=120*1e3;setInterval(()=>{vn.to(Mi,{duration:10,timeStep:2e-4,explode:45,ease:"power4",repeat:0}),setTimeout(()=>{vn.to(Mi,{duration:10,timeStep:.02,explode:0,ease:"power4.in",repeat:0})},1e4)},Yy);const Ky=new px,Ah=()=>{const s=Ky.getDelta()*60;ln&&(Os.rotation.y-=.003*Mi.timeStep*(1/.02)*s,Us&&(Us.uniforms.time.value+=Mi.timeStep*s,Us.uniforms.explode.value=Mi.explode),ln.material.opacity=Mi.modelOpacity,ln.material.uniformsNeedUpdate=!0,rs.render()),requestAnimationFrame(Ah)};Ah();
