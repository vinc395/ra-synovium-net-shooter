(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Da="164",ah=0,io=1,oh=2,ic=1,sc=2,fn=3,Nn=0,Le=1,je=2,vn=0,Pi=1,Ce=2,so=3,ro=4,lh=5,$n=100,ch=101,hh=102,uh=103,dh=104,fh=200,ph=201,mh=202,gh=203,ya=204,Sa=205,vh=206,_h=207,xh=208,Mh=209,yh=210,Sh=211,bh=212,wh=213,Th=214,Eh=0,Ah=1,Ch=2,ar=3,Rh=4,Ph=5,Lh=6,Dh=7,rc=0,Ih=1,Uh=2,Un=0,ac=1,oc=2,lc=3,cc=4,Nh=5,hc=6,Ia=7,uc=300,Ni=301,Fi=302,ba=303,wa=304,vr=306,ei=1e3,jn=1001,Ta=1002,Pe=1003,Fh=1004,Ms=1005,Je=1006,Ar=1007,Jn=1008,Fn=1009,Oh=1010,Bh=1011,dc=1012,fc=1013,Oi=1014,mn=1015,_n=1016,pc=1017,mc=1018,ps=1020,zh=35902,kh=1021,Hh=1022,sn=1023,Vh=1024,Gh=1025,Li=1026,us=1027,gc=1028,vc=1029,Wh=1030,_c=1031,xc=1033,Cr=33776,Rr=33777,Pr=33778,Lr=33779,ao=35840,oo=35841,lo=35842,co=35843,ho=36196,uo=37492,fo=37496,po=37808,mo=37809,go=37810,vo=37811,_o=37812,xo=37813,Mo=37814,yo=37815,So=37816,bo=37817,wo=37818,To=37819,Eo=37820,Ao=37821,Dr=36492,Co=36494,Ro=36495,Xh=36283,Po=36284,Lo=36285,Do=36286,qh=3200,Yh=3201,Mc=0,$h=1,pn="",pe="srgb",Bn="srgb-linear",Ua="display-p3",_r="display-p3-linear",or="linear",jt="srgb",lr="rec709",cr="p3",ai=7680,Io=519,Kh=512,jh=513,Jh=514,yc=515,Zh=516,Qh=517,tu=518,eu=519,Ea=35044,ys=35048,Uo="300 es",gn=2e3,hr=2001;class Hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let No=1234567;const os=Math.PI/180,ds=180/Math.PI;function xn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[s&255]+Me[s>>8&255]+Me[s>>16&255]+Me[s>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function me(s,t,e){return Math.max(t,Math.min(e,s))}function Na(s,t){return(s%t+t)%t}function nu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function iu(s,t,e){return s!==t?(e-s)/(t-s):0}function ls(s,t,e){return(1-e)*s+e*t}function su(s,t,e,n){return ls(s,t,1-Math.exp(-e*n))}function ru(s,t=1){return t-Math.abs(Na(s,t*2)-t)}function au(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ou(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function lu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function cu(s,t){return s+Math.random()*(t-s)}function hu(s){return s*(.5-Math.random())}function uu(s){s!==void 0&&(No=s);let t=No+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function du(s){return s*os}function fu(s){return s*ds}function pu(s){return(s&s-1)===0&&s!==0}function mu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function gu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vu(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),u=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*d,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*u,o*c);break;case"YXY":s.set(l*u,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*u,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ze(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Wt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Qn={DEG2RAD:os,RAD2DEG:ds,generateUUID:xn,clamp:me,euclideanModulo:Na,mapLinear:nu,inverseLerp:iu,lerp:ls,damp:su,pingpong:ru,smoothstep:au,smootherstep:ou,randInt:lu,randFloat:cu,randFloatSpread:hu,seededRandom:uu,degToRad:du,radToDeg:fu,isPowerOfTwo:pu,ceilPowerOfTwo:mu,floorPowerOfTwo:gu,setQuaternionFromProperEuler:vu,normalize:Wt,denormalize:Ze};class Y{constructor(t=0,e=0){Y.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class At{constructor(t,e,n,i,r,a,o,l,c){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],g=n[8],v=i[0],m=i[3],p=i[6],M=i[1],_=i[4],y=i[7],R=i[2],E=i[5],A=i[8];return r[0]=a*v+o*M+l*R,r[3]=a*m+o*_+l*E,r[6]=a*p+o*y+l*A,r[1]=c*v+h*M+d*R,r[4]=c*m+h*_+d*E,r[7]=c*p+h*y+d*A,r[2]=f*v+u*M+g*R,r[5]=f*m+u*_+g*E,r[8]=f*p+u*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,u=c*r-a*l,g=e*d+n*f+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=f*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=u*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ir.makeScale(t,e)),this}rotate(t){return this.premultiply(Ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ir.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ir=new At;function Sc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _u(){const s=ur("canvas");return s.style.display="block",s}const Fo={};function bc(s){s in Fo||(Fo[s]=!0,console.warn(s))}const Oo=new At().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bo=new At().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ss={[Bn]:{transfer:or,primaries:lr,toReference:s=>s,fromReference:s=>s},[pe]:{transfer:jt,primaries:lr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[_r]:{transfer:or,primaries:cr,toReference:s=>s.applyMatrix3(Bo),fromReference:s=>s.applyMatrix3(Oo)},[Ua]:{transfer:jt,primaries:cr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Bo),fromReference:s=>s.applyMatrix3(Oo).convertLinearToSRGB()}},xu=new Set([Bn,_r]),Xt={enabled:!0,_workingColorSpace:Bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!xu.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Ss[t].toReference,i=Ss[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ss[s].primaries},getTransfer:function(s){return s===pn?or:Ss[s].transfer}};function Di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ur(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let oi;class Mu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=ur("canvas")),oi.width=t.width,oi.height=t.height;const n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Di(e[n]/255)*255):e[n]=Di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yu=0;class wc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=xn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Nr(i[a].image)):r.push(Nr(i[a]))}else r=Nr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Nr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Mu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Su=0;class we extends Hi{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=jn,i=jn,r=Je,a=Jn,o=sn,l=Fn,c=we.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=xn(),this.name="",this.source=new wc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ei:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ei:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=uc;we.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,i=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(u+1)/2,R=(p+1)/2,E=(h+f)/4,A=(d+v)/4,P=(g+m)/4;return _>y&&_>R?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=E/n,r=A/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=A/r,i=P/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-v)/M,this.z=(f-h)/M,this.w=Math.acos((c+u+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bu extends Hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new we(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class He extends bu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tc extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wu extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Be{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=r[a+0],u=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=u,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==f||c!==u||h!==g){let m=1-o;const p=l*f+c*u+h*g+d*v,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const R=Math.sqrt(_),E=Math.atan2(R,p*M);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}const y=o*M;if(l=l*m+f*y,c=c*m+u*y,h=h*m+g*y,d=d*m+v*y,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],f=r[a+1],u=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*u-c*f,t[e+1]=l*g+h*f+c*d-o*u,t[e+2]=c*g+h*u+o*f-l*d,t[e+3]=h*g-o*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),f=l(n/2),u=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-i)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+c)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(r-c)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fr.copy(this).projectOnVector(t),this.sub(Fr)}reflect(t){return this.sub(Fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fr=new T,zo=new Be;class ni{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,We):We.fromBufferAttribute(r,a),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bs.copy(n.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),ws.subVectors(this.max,qi),li.subVectors(t.a,qi),ci.subVectors(t.b,qi),hi.subVectors(t.c,qi),Tn.subVectors(ci,li),En.subVectors(hi,ci),kn.subVectors(li,hi);let e=[0,-Tn.z,Tn.y,0,-En.z,En.y,0,-kn.z,kn.y,Tn.z,0,-Tn.x,En.z,0,-En.x,kn.z,0,-kn.x,-Tn.y,Tn.x,0,-En.y,En.x,0,-kn.y,kn.x,0];return!Or(e,li,ci,hi,ws)||(e=[1,0,0,0,1,0,0,0,1],!Or(e,li,ci,hi,ws))?!1:(Ts.crossVectors(Tn,En),e=[Ts.x,Ts.y,Ts.z],Or(e,li,ci,hi,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new T,new T,new T,new T,new T,new T,new T,new T],We=new T,bs=new ni,li=new T,ci=new T,hi=new T,Tn=new T,En=new T,kn=new T,qi=new T,ws=new T,Ts=new T,Hn=new T;function Or(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Hn.fromArray(s,r);const o=i.x*Math.abs(Hn.x)+i.y*Math.abs(Hn.y)+i.z*Math.abs(Hn.z),l=t.dot(Hn),c=e.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Tu=new ni,Yi=new T,Br=new T;class ii{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yi.subVectors(t,this.center);const e=Yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Yi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yi.copy(t.center).add(Br)),this.expandByPoint(Yi.copy(t.center).sub(Br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new T,zr=new T,Es=new T,An=new T,kr=new T,As=new T,Hr=new T;class Fa{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){zr.copy(t).add(e).multiplyScalar(.5),Es.copy(e).sub(t).normalize(),An.copy(this.origin).sub(zr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Es),o=An.dot(this.direction),l=-An.dot(Es),c=An.lengthSq(),h=Math.abs(1-a*a);let d,f,u,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const v=1/h;d*=v,f*=v,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(zr).addScaledVector(Es,f),u}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const n=cn.dot(this.direction),i=cn.dot(cn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,n,i,r){kr.subVectors(e,t),As.subVectors(n,t),Hr.crossVectors(kr,As);let a=this.direction.dot(Hr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,t);const l=o*this.direction.dot(As.crossVectors(An,As));if(l<0)return null;const c=o*this.direction.dot(kr.cross(An));if(c<0||l+c>a)return null;const h=-o*An.dot(Hr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(t,e,n,i,r,a,o,l,c,h,d,f,u,g,v,m){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,f,u,g,v,m)}set(t,e,n,i,r,a,o,l,c,h,d,f,u,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ui.setFromMatrixColumn(t,0).length(),r=1/ui.setFromMatrixColumn(t,1).length(),a=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,u=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+u*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,g=c*h,v=c*d;e[0]=f+v*o,e[4]=g*o-u,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,g=c*h,v=c*d;e[0]=f-v*o,e[4]=-a*d,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,u=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-u,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=u*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,u=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*d,e[8]=g*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*d+g,e[10]=f-v*d}else if(t.order==="XZY"){const f=a*l,u=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+v,e[5]=a*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=o*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Eu,t,Au)}lookAt(t,e,n){const i=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),Cn.crossVectors(n,Ie),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),Cn.crossVectors(n,Ie)),Cn.normalize(),Cs.crossVectors(Ie,Cn),i[0]=Cn.x,i[4]=Cs.x,i[8]=Ie.x,i[1]=Cn.y,i[5]=Cs.y,i[9]=Ie.y,i[2]=Cn.z,i[6]=Cs.z,i[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],_=n[7],y=n[11],R=n[15],E=i[0],A=i[4],P=i[8],b=i[12],x=i[1],U=i[5],z=i[9],L=i[13],V=i[2],W=i[6],j=i[10],Z=i[14],k=i[3],Q=i[7],tt=i[11],dt=i[15];return r[0]=a*E+o*x+l*V+c*k,r[4]=a*A+o*U+l*W+c*Q,r[8]=a*P+o*z+l*j+c*tt,r[12]=a*b+o*L+l*Z+c*dt,r[1]=h*E+d*x+f*V+u*k,r[5]=h*A+d*U+f*W+u*Q,r[9]=h*P+d*z+f*j+u*tt,r[13]=h*b+d*L+f*Z+u*dt,r[2]=g*E+v*x+m*V+p*k,r[6]=g*A+v*U+m*W+p*Q,r[10]=g*P+v*z+m*j+p*tt,r[14]=g*b+v*L+m*Z+p*dt,r[3]=M*E+_*x+y*V+R*k,r[7]=M*A+_*U+y*W+R*Q,r[11]=M*P+_*z+y*j+R*tt,r[15]=M*b+_*L+y*Z+R*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*d-i*c*d-r*o*f+n*c*f+i*o*u-n*l*u)+v*(+e*l*u-e*c*f+r*a*f-i*a*u+i*c*h-r*l*h)+m*(+e*c*d-e*o*u-r*a*d+n*a*u+r*o*h-n*c*h)+p*(-i*o*h-e*l*d+e*o*f+i*a*d-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],g=t[12],v=t[13],m=t[14],p=t[15],M=d*m*c-v*f*c+v*l*u-o*m*u-d*l*p+o*f*p,_=g*f*c-h*m*c-g*l*u+a*m*u+h*l*p-a*f*p,y=h*v*c-g*d*c+g*o*u-a*v*u-h*o*p+a*d*p,R=g*d*l-h*v*l-g*o*f+a*v*f+h*o*m-a*d*m,E=e*M+n*_+i*y+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=M*A,t[1]=(v*f*r-d*m*r-v*i*u+n*m*u+d*i*p-n*f*p)*A,t[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*p+n*l*p)*A,t[3]=(d*l*r-o*f*r-d*i*c+n*f*c+o*i*u-n*l*u)*A,t[4]=_*A,t[5]=(h*m*r-g*f*r+g*i*u-e*m*u-h*i*p+e*f*p)*A,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*A,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*u+e*l*u)*A,t[8]=y*A,t[9]=(g*d*r-h*v*r-g*n*u+e*v*u+h*n*p-e*d*p)*A,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*u-e*o*u)*A,t[12]=R*A,t[13]=(h*v*i-g*d*i+g*n*f-e*v*f-h*n*m+e*d*m)*A,t[14]=(g*o*i-a*v*i-g*n*l+e*v*l+a*n*m-e*o*m)*A,t[15]=(a*d*i-h*o*i+h*n*l-e*d*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,u=r*h,g=r*d,v=a*h,m=a*d,p=o*d,M=l*c,_=l*h,y=l*d,R=n.x,E=n.y,A=n.z;return i[0]=(1-(v+p))*R,i[1]=(u+y)*R,i[2]=(g-_)*R,i[3]=0,i[4]=(u-y)*E,i[5]=(1-(f+p))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(g+_)*A,i[9]=(m-M)*A,i[10]=(1-(f+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ui.set(i[0],i[1],i[2]).length();const a=ui.set(i[4],i[5],i[6]).length(),o=ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Xe.copy(this);const c=1/r,h=1/a,d=1/o;return Xe.elements[0]*=c,Xe.elements[1]*=c,Xe.elements[2]*=c,Xe.elements[4]*=h,Xe.elements[5]*=h,Xe.elements[6]*=h,Xe.elements[8]*=d,Xe.elements[9]*=d,Xe.elements[10]*=d,e.setFromRotationMatrix(Xe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=gn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let u,g;if(o===gn)u=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===hr)u=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=gn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(a-r),f=(e+t)*c,u=(n+i)*h;let g,v;if(o===gn)g=(a+r)*d,v=-2*d;else if(o===hr)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ui=new T,Xe=new Vt,Eu=new T(0,0,0),Au=new T(1,1,1),Cn=new T,Cs=new T,Ie=new T,ko=new Vt,Ho=new Be;class Ge{constructor(t=0,e=0,n=0,i=Ge.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ko.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ko,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ho.setFromEuler(this),this.setFromQuaternion(Ho,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ge.DEFAULT_ORDER="XYZ";class Oa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cu=0;const Vo=new T,di=new Be,hn=new Vt,Rs=new T,$i=new T,Ru=new T,Pu=new Be,Go=new T(1,0,0),Wo=new T(0,1,0),Xo=new T(0,0,1),qo={type:"added"},Lu={type:"removed"},fi={type:"childadded",child:null},Vr={type:"childremoved",child:null};class ie extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ie.DEFAULT_UP.clone();const t=new T,e=new Ge,n=new Be,i=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Vt},normalMatrix:{value:new At}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(Go,t)}rotateY(t){return this.rotateOnAxis(Wo,t)}rotateZ(t){return this.rotateOnAxis(Xo,t)}translateOnAxis(t,e){return Vo.copy(t).applyQuaternion(this.quaternion),this.position.add(Vo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Go,t)}translateY(t){return this.translateOnAxis(Wo,t)}translateZ(t){return this.translateOnAxis(Xo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rs.copy(t):Rs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt($i,Rs,this.up):hn.lookAt(Rs,$i,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),di.setFromRotationMatrix(hn),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qo),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lu),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qo),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,t,Ru),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Pu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ie.DEFAULT_UP=new T(0,1,0);ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new T,un=new T,Gr=new T,dn=new T,pi=new T,mi=new T,Yo=new T,Wr=new T,Xr=new T,qr=new T;class Qe{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qe.subVectors(t,e),i.cross(qe);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){qe.subVectors(i,e),un.subVectors(n,e),Gr.subVectors(t,e);const a=qe.dot(qe),o=qe.dot(un),l=qe.dot(Gr),c=un.dot(un),h=un.dot(Gr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l)}static isFrontFacing(t,e,n,i){return qe.subVectors(n,e),un.subVectors(t,e),qe.cross(un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),un.subVectors(this.a,this.b),qe.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;pi.subVectors(i,n),mi.subVectors(r,n),Wr.subVectors(t,n);const l=pi.dot(Wr),c=mi.dot(Wr);if(l<=0&&c<=0)return e.copy(n);Xr.subVectors(t,i);const h=pi.dot(Xr),d=mi.dot(Xr);if(h>=0&&d<=h)return e.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(pi,a);qr.subVectors(t,r);const u=pi.dot(qr),g=mi.dot(qr);if(g>=0&&u<=g)return e.copy(r);const v=u*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(mi,o);const m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return Yo.subVectors(r,i),o=(d-h)/(d-h+(u-g)),e.copy(i).addScaledVector(Yo,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Yr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=Na(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Yr(a,r,t+1/3),this.g=Yr(a,r,t),this.b=Yr(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){const n=Ec[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=Ur(t.r),this.g=Ur(t.g),this.b=Ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return Xt.fromWorkingColorSpace(ye.copy(this),t),Math.round(me(ye.r*255,0,255))*65536+Math.round(me(ye.g*255,0,255))*256+Math.round(me(ye.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,i=ye.g,r=ye.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=pe){Xt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,i=ye.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Ps);const n=ls(Rn.h,Ps.h,e),i=ls(Rn.s,Ps.s,e),r=ls(Rn.l,Ps.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new pt;pt.NAMES=Ec;let Du=0;class si extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=Pi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ya,this.blendDst=Sa,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Io,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ya&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Io&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class On extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new T,Ls=new Y;class Qt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ea,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return bc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ze(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ze(e,this.array)),e}setX(t,e){return this.normalized&&(e=Wt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ze(e,this.array)),e}setY(t,e){return this.normalized&&(e=Wt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ze(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Wt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ze(e,this.array)),e}setW(t,e){return this.normalized&&(e=Wt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Wt(e,this.array),n=Wt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Wt(e,this.array),n=Wt(n,this.array),i=Wt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Wt(e,this.array),n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ea&&(t.usage=this.usage),t}}class Ac extends Qt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cc extends Qt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends Qt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Iu=0;const ke=new Vt,$r=new ie,gi=new T,Ue=new ni,Ki=new ni,fe=new T;class he extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sc(t)?Cc:Ac)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new At().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return $r.lookAt(t),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(fe.addVectors(Ue.min,Ki.min),Ue.expandByPoint(fe),fe.addVectors(Ue.max,Ki.max),Ue.expandByPoint(fe)):(Ue.expandByPoint(Ki.min),Ue.expandByPoint(Ki.max))}Ue.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fe.fromBufferAttribute(o,c),l&&(gi.fromBufferAttribute(t,c),fe.add(gi)),i=Math.max(i,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new T,l[P]=new T;const c=new T,h=new T,d=new T,f=new Y,u=new Y,g=new Y,v=new T,m=new T;function p(P,b,x){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,x),f.fromBufferAttribute(r,P),u.fromBufferAttribute(r,b),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),u.sub(f),g.sub(f);const U=1/(u.x*g.y-g.x*u.y);isFinite(U)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(U),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(U),o[P].add(v),o[b].add(v),o[x].add(v),l[P].add(m),l[b].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,b=M.length;P<b;++P){const x=M[P],U=x.start,z=x.count;for(let L=U,V=U+z;L<V;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const _=new T,y=new T,R=new T,E=new T;function A(P){R.fromBufferAttribute(i,P),E.copy(R);const b=o[P];_.copy(b),_.sub(R.multiplyScalar(R.dot(b))).normalize(),y.crossVectors(E,b);const U=y.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,U)}for(let P=0,b=M.length;P<b;++P){const x=M[P],U=x.start,z=x.count;for(let L=U,V=U+z;L<V;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,d=new T;if(t)for(let f=0,u=t.count;f<u;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let u=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[u++]}return new Qt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new he,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $o=new Vt,Vn=new Fa,Ds=new ii,Ko=new T,vi=new T,_i=new T,xi=new T,Kr=new T,Is=new T,Us=new Y,Ns=new Y,Fs=new Y,jo=new T,Jo=new T,Zo=new T,Os=new T,Bs=new T;class $t extends ie{constructor(t=new he,e=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Is.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Kr.fromBufferAttribute(d,t),a?Is.addScaledVector(Kr,h):Is.addScaledVector(Kr.sub(e),h))}e.add(Is)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(r),Vn.copy(t.ray).recast(t.near),!(Ds.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Ds,Ko)===null||Vn.origin.distanceToSquared(Ko)>(t.far-t.near)**2))&&($o.copy(r).invert(),Vn.copy(t.ray).applyMatrix4($o),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,u.start),_=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let y=M,R=_;y<R;y+=3){const E=o.getX(y),A=o.getX(y+1),P=o.getX(y+2);i=zs(this,p,t,n,c,h,d,E,A,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const M=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);i=zs(this,a,t,n,c,h,d,M,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,u.start),_=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=M,R=_;y<R;y+=3){const E=y,A=y+1,P=y+2;i=zs(this,p,t,n,c,h,d,E,A,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const M=m,_=m+1,y=m+2;i=zs(this,a,t,n,c,h,d,M,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Uu(s,t,e,n,i,r,a,o){let l;if(t.side===Le?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Nn,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Bs);return c<e.near||c>e.far?null:{distance:c,point:Bs.clone(),object:s}}function zs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,vi),s.getVertexPosition(l,_i),s.getVertexPosition(c,xi);const h=Uu(s,t,e,n,vi,_i,xi,Os);if(h){i&&(Us.fromBufferAttribute(i,o),Ns.fromBufferAttribute(i,l),Fs.fromBufferAttribute(i,c),h.uv=Qe.getInterpolation(Os,vi,_i,xi,Us,Ns,Fs,new Y)),r&&(Us.fromBufferAttribute(r,o),Ns.fromBufferAttribute(r,l),Fs.fromBufferAttribute(r,c),h.uv1=Qe.getInterpolation(Os,vi,_i,xi,Us,Ns,Fs,new Y)),a&&(jo.fromBufferAttribute(a,o),Jo.fromBufferAttribute(a,l),Zo.fromBufferAttribute(a,c),h.normal=Qe.getInterpolation(Os,vi,_i,xi,jo,Jo,Zo,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new T,materialIndex:0};Qe.getNormal(vi,_i,xi,d.normal),h.face=d}return h}class ms extends he{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,u=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(d,2));function g(v,m,p,M,_,y,R,E,A,P,b){const x=y/A,U=R/P,z=y/2,L=R/2,V=E/2,W=A+1,j=P+1;let Z=0,k=0;const Q=new T;for(let tt=0;tt<j;tt++){const dt=tt*U-L;for(let wt=0;wt<W;wt++){const Yt=wt*x-z;Q[v]=Yt*M,Q[m]=dt*_,Q[p]=V,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(wt/A),d.push(1-tt/P),Z+=1}}for(let tt=0;tt<P;tt++)for(let dt=0;dt<A;dt++){const wt=f+dt+W*tt,Yt=f+dt+W*(tt+1),G=f+(dt+1)+W*(tt+1),et=f+(dt+1)+W*tt;l.push(wt,Yt,et),l.push(Yt,G,et),k+=6}o.addGroup(u,k,b),u+=k,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ae(s){const t={};for(let e=0;e<s.length;e++){const n=Bi(s[e]);for(const i in n)t[i]=n[i]}return t}function Nu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Rc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const fs={clone:Bi,merge:Ae};var Fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ge extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fu,this.fragmentShader=Ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=Nu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Pc extends ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new T,Qo=new Y,tl=new Y;class Fe extends Pc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,Qo,tl),e.subVectors(tl,Qo)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(os*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,yi=1;class Bu extends ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fe(Mi,yi,t,e);i.layers=this.layers,this.add(i);const r=new Fe(Mi,yi,t,e);r.layers=this.layers,this.add(r);const a=new Fe(Mi,yi,t,e);a.layers=this.layers,this.add(a);const o=new Fe(Mi,yi,t,e);o.layers=this.layers,this.add(o);const l=new Fe(Mi,yi,t,e);l.layers=this.layers,this.add(l);const c=new Fe(Mi,yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lc extends we{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ni,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zu extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Lc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ms(5,5,5),r=new ge({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:vn});r.uniforms.tEquirect.value=e;const a=new $t(i,r),o=e.minFilter;return e.minFilter===Jn&&(e.minFilter=Je),new Bu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const jr=new T,ku=new T,Hu=new At;class Ln{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=jr.subVectors(n,e).cross(ku.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hu.getNormalMatrix(t),i=this.coplanarPoint(jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new ii,ks=new T;class Ba{constructor(t=new Ln,e=new Ln,n=new Ln,i=new Ln,r=new Ln,a=new Ln){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],f=i[7],u=i[8],g=i[9],v=i[10],m=i[11],p=i[12],M=i[13],_=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,m-u,y-p).normalize(),n[1].setComponents(l+r,f+c,m+u,y+p).normalize(),n[2].setComponents(l+a,f+h,m+g,y+M).normalize(),n[3].setComponents(l-a,f-h,m-g,y-M).normalize(),n[4].setComponents(l-o,f-d,m-v,y-_).normalize(),e===gn)n[5].setComponents(l+o,f+d,m+v,y+_).normalize();else if(e===hr)n[5].setComponents(o,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ks.x=i.normal.x>0?t.max.x:t.min.x,ks.y=i.normal.y>0?t.max.y:t.min.y,ks.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Vu(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l._updateRange,f=l.updateRanges;if(s.bindBuffer(c,o),d.count===-1&&f.length===0&&s.bufferSubData(c,0,h),f.length!==0){for(let u=0,g=f.length;u<g;u++){const v=f[u];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class yn extends he{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,f=e/l,u=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const M=p*f-a;for(let _=0;_<c;_++){const y=_*d-r;g.push(y,-M,0),v.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const _=M+c*p,y=M+c*(p+1),R=M+1+c*(p+1),E=M+1+c*p;u.push(_,y,E),u.push(y,R,E)}this.setIndex(u),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$u=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ku=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ju=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ju=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ed=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nd=`#ifdef USE_IRIDESCENCE
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
#endif`,id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dd=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Md=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,yd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,Ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pd=`#ifdef USE_GRADIENTMAP
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
}`,Ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ud=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Nd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Od=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Vd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ef=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sf=`#ifdef USE_MORPHNORMALS
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
#endif`,rf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
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
#endif`,af=`#ifdef USE_MORPHTARGETS
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
#endif`,of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,df=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_f=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Af=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Cf=`float getShadowMask() {
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
}`,Rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
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
#endif`,If=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ff=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Of=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bf=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,jf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Zf=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,lp=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,up=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,dp=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,pp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,gp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yp=`uniform float rotation;
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
}`,Sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Et={alphahash_fragment:Gu,alphahash_pars_fragment:Wu,alphamap_fragment:Xu,alphamap_pars_fragment:qu,alphatest_fragment:Yu,alphatest_pars_fragment:$u,aomap_fragment:Ku,aomap_pars_fragment:ju,batching_pars_vertex:Ju,batching_vertex:Zu,begin_vertex:Qu,beginnormal_vertex:td,bsdfs:ed,iridescence_fragment:nd,bumpmap_pars_fragment:id,clipping_planes_fragment:sd,clipping_planes_pars_fragment:rd,clipping_planes_pars_vertex:ad,clipping_planes_vertex:od,color_fragment:ld,color_pars_fragment:cd,color_pars_vertex:hd,color_vertex:ud,common:dd,cube_uv_reflection_fragment:fd,defaultnormal_vertex:pd,displacementmap_pars_vertex:md,displacementmap_vertex:gd,emissivemap_fragment:vd,emissivemap_pars_fragment:_d,colorspace_fragment:xd,colorspace_pars_fragment:Md,envmap_fragment:yd,envmap_common_pars_fragment:Sd,envmap_pars_fragment:bd,envmap_pars_vertex:wd,envmap_physical_pars_fragment:Nd,envmap_vertex:Td,fog_vertex:Ed,fog_pars_vertex:Ad,fog_fragment:Cd,fog_pars_fragment:Rd,gradientmap_pars_fragment:Pd,lightmap_pars_fragment:Ld,lights_lambert_fragment:Dd,lights_lambert_pars_fragment:Id,lights_pars_begin:Ud,lights_toon_fragment:Fd,lights_toon_pars_fragment:Od,lights_phong_fragment:Bd,lights_phong_pars_fragment:zd,lights_physical_fragment:kd,lights_physical_pars_fragment:Hd,lights_fragment_begin:Vd,lights_fragment_maps:Gd,lights_fragment_end:Wd,logdepthbuf_fragment:Xd,logdepthbuf_pars_fragment:qd,logdepthbuf_pars_vertex:Yd,logdepthbuf_vertex:$d,map_fragment:Kd,map_pars_fragment:jd,map_particle_fragment:Jd,map_particle_pars_fragment:Zd,metalnessmap_fragment:Qd,metalnessmap_pars_fragment:tf,morphinstance_vertex:ef,morphcolor_vertex:nf,morphnormal_vertex:sf,morphtarget_pars_vertex:rf,morphtarget_vertex:af,normal_fragment_begin:of,normal_fragment_maps:lf,normal_pars_fragment:cf,normal_pars_vertex:hf,normal_vertex:uf,normalmap_pars_fragment:df,clearcoat_normal_fragment_begin:ff,clearcoat_normal_fragment_maps:pf,clearcoat_pars_fragment:mf,iridescence_pars_fragment:gf,opaque_fragment:vf,packing:_f,premultiplied_alpha_fragment:xf,project_vertex:Mf,dithering_fragment:yf,dithering_pars_fragment:Sf,roughnessmap_fragment:bf,roughnessmap_pars_fragment:wf,shadowmap_pars_fragment:Tf,shadowmap_pars_vertex:Ef,shadowmap_vertex:Af,shadowmask_pars_fragment:Cf,skinbase_vertex:Rf,skinning_pars_vertex:Pf,skinning_vertex:Lf,skinnormal_vertex:Df,specularmap_fragment:If,specularmap_pars_fragment:Uf,tonemapping_fragment:Nf,tonemapping_pars_fragment:Ff,transmission_fragment:Of,transmission_pars_fragment:Bf,uv_pars_fragment:zf,uv_pars_vertex:kf,uv_vertex:Hf,worldpos_vertex:Vf,background_vert:Gf,background_frag:Wf,backgroundCube_vert:Xf,backgroundCube_frag:qf,cube_vert:Yf,cube_frag:$f,depth_vert:Kf,depth_frag:jf,distanceRGBA_vert:Jf,distanceRGBA_frag:Zf,equirect_vert:Qf,equirect_frag:tp,linedashed_vert:ep,linedashed_frag:np,meshbasic_vert:ip,meshbasic_frag:sp,meshlambert_vert:rp,meshlambert_frag:ap,meshmatcap_vert:op,meshmatcap_frag:lp,meshnormal_vert:cp,meshnormal_frag:hp,meshphong_vert:up,meshphong_frag:dp,meshphysical_vert:fp,meshphysical_frag:pp,meshtoon_vert:mp,meshtoon_frag:gp,points_vert:vp,points_frag:_p,shadow_vert:xp,shadow_frag:Mp,sprite_vert:yp,sprite_frag:Sp},it={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},nn={basic:{uniforms:Ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new pt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Ae([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Ae([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new pt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Ae([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Ae([it.points,it.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Ae([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Ae([it.common,it.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Ae([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Ae([it.sprite,it.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:Ae([it.common,it.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:Ae([it.lights,it.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};nn.physical={uniforms:Ae([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const Hs={r:0,b:0,g:0},Wn=new Ge,bp=new Vt;function wp(s,t,e,n,i,r,a){const o=new pt(0);let l=r===!0?0:1,c,h,d=null,f=0,u=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function v(M){let _=!1;const y=g(M);y===null?p(o,l):y&&y.isColor&&(p(y,1),_=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function m(M,_){const y=g(_);y&&(y.isCubeTexture||y.mapping===vr)?(h===void 0&&(h=new $t(new ms(1,1,1),new ge({name:"BackgroundCubeMaterial",uniforms:Bi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Wn.copy(_.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bp.makeRotationFromEuler(Wn)),h.material.toneMapped=Xt.getTransfer(y.colorSpace)!==jt,(d!==y||f!==y.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,d=y,f=y.version,u=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new $t(new yn(2,2),new ge({name:"BackgroundMaterial",uniforms:Bi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(y.colorSpace)!==jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,_){M.getRGB(Hs,Rc(s)),n.buffers.color.setClear(Hs.r,Hs.g,Hs.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:v,addToRenderList:m}}function Tp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(x,U,z,L,V){let W=!1;const j=d(L,z,U);r!==j&&(r=j,c(r.object)),W=u(x,L,z,V),W&&g(x,L,z,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(x,U,z,L),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function d(x,U,z){const L=z.wireframe===!0;let V=n[x.id];V===void 0&&(V={},n[x.id]=V);let W=V[U.id];W===void 0&&(W={},V[U.id]=W);let j=W[L];return j===void 0&&(j=f(l()),W[L]=j),j}function f(x){const U=[],z=[],L=[];for(let V=0;V<e;V++)U[V]=0,z[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:L,object:x,attributes:{},index:null}}function u(x,U,z,L){const V=r.attributes,W=U.attributes;let j=0;const Z=z.getAttributes();for(const k in Z)if(Z[k].location>=0){const tt=V[k];let dt=W[k];if(dt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor)),tt===void 0||tt.attribute!==dt||dt&&tt.data!==dt.data)return!0;j++}return r.attributesNum!==j||r.index!==L}function g(x,U,z,L){const V={},W=U.attributes;let j=0;const Z=z.getAttributes();for(const k in Z)if(Z[k].location>=0){let tt=W[k];tt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor));const dt={};dt.attribute=tt,tt&&tt.data&&(dt.data=tt.data),V[k]=dt,j++}r.attributes=V,r.attributesNum=j,r.index=L}function v(){const x=r.newAttributes;for(let U=0,z=x.length;U<z;U++)x[U]=0}function m(x){p(x,0)}function p(x,U){const z=r.newAttributes,L=r.enabledAttributes,V=r.attributeDivisors;z[x]=1,L[x]===0&&(s.enableVertexAttribArray(x),L[x]=1),V[x]!==U&&(s.vertexAttribDivisor(x,U),V[x]=U)}function M(){const x=r.newAttributes,U=r.enabledAttributes;for(let z=0,L=U.length;z<L;z++)U[z]!==x[z]&&(s.disableVertexAttribArray(z),U[z]=0)}function _(x,U,z,L,V,W,j){j===!0?s.vertexAttribIPointer(x,U,z,V,W):s.vertexAttribPointer(x,U,z,L,V,W)}function y(x,U,z,L){v();const V=L.attributes,W=z.getAttributes(),j=U.defaultAttributeValues;for(const Z in W){const k=W[Z];if(k.location>=0){let Q=V[Z];if(Q===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),Q!==void 0){const tt=Q.normalized,dt=Q.itemSize,wt=t.get(Q);if(wt===void 0)continue;const Yt=wt.buffer,G=wt.type,et=wt.bytesPerElement,ut=G===s.INT||G===s.UNSIGNED_INT||Q.gpuType===fc;if(Q.isInterleavedBufferAttribute){const st=Q.data,Ut=st.stride,Nt=Q.offset;if(st.isInstancedInterleavedBuffer){for(let N=0;N<k.locationSize;N++)p(k.location+N,st.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let N=0;N<k.locationSize;N++)m(k.location+N);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let N=0;N<k.locationSize;N++)_(k.location+N,dt/k.locationSize,G,tt,Ut*et,(Nt+dt/k.locationSize*N)*et,ut)}else{if(Q.isInstancedBufferAttribute){for(let st=0;st<k.locationSize;st++)p(k.location+st,Q.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let st=0;st<k.locationSize;st++)m(k.location+st);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let st=0;st<k.locationSize;st++)_(k.location+st,dt/k.locationSize,G,tt,dt*et,dt/k.locationSize*st*et,ut)}}else if(j!==void 0){const tt=j[Z];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(k.location,tt);break;case 3:s.vertexAttrib3fv(k.location,tt);break;case 4:s.vertexAttrib4fv(k.location,tt);break;default:s.vertexAttrib1fv(k.location,tt)}}}}M()}function R(){P();for(const x in n){const U=n[x];for(const z in U){const L=U[z];for(const V in L)h(L[V].object),delete L[V];delete U[z]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const U=n[x.id];for(const z in U){const L=U[z];for(const V in L)h(L[V].object),delete L[V];delete U[z]}delete n[x.id]}function A(x){for(const U in n){const z=n[U];if(z[x.id]===void 0)continue;const L=z[x.id];for(const V in L)h(L[V].object),delete L[V];delete z[x.id]}}function P(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Ep(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<d;u++)this.render(c[u],h[u]);else{f.multiDrawArraysWEBGL(n,c,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];e.update(u,n,1)}}function l(c,h,d,f){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v];for(let v=0;v<f.length;v++)e.update(g,n,f[v])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ap(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==sn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const A=E===_n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Fn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==mn&&!A)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:u,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:y,maxSamples:R}}function Cp(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Ln,o=new At,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,_=M*4;let y=p.clippingState||null;l.value=y,y=h(g,f,_,u);for(let R=0;R!==_;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=u+v*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=u;_!==v;++_,y+=4)a.copy(d[_]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Rp(s){let t=new WeakMap;function e(a,o){return o===ba?a.mapping=Ni:o===wa&&(a.mapping=Fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ba||o===wa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new zu(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class za extends Pc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ri=4,el=[.125,.215,.35,.446,.526,.582],Kn=20,Jr=new za,nl=new pt;let Zr=null,Qr=0,ta=0,ea=!1;const Yn=(1+Math.sqrt(5))/2,Si=1/Yn,il=[new T(-Yn,Si,0),new T(Yn,Si,0),new T(-Si,0,Yn),new T(Si,0,Yn),new T(0,Yn,-Si),new T(0,Yn,Si),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class sl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Zr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zr,Qr,ta),this._renderer.xr.enabled=ea,t.scissorTest=!1,Vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:_n,format:sn,colorSpace:Bn,depthBuffer:!1},i=rl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pp(r)),this._blurMaterial=Lp(r,t,e)}return i}_compileMaterial(t){const e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,Jr)}_sceneToCubeUV(t,e,n,i){const o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(nl),h.toneMapping=Un,h.autoClear=!1;const u=new On({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new $t(new ms,u);let v=!1;const m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,v=!0):(u.color.copy(nl),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const _=this._cubeSize;Vs(i,M*_,p>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ni||t.mapping===Fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=al());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Vs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=il[(i-r-1)%il.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new $t(this._lodPlanes[i],c),f=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Kn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Kn;m>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);const p=[];let M=0;for(let A=0;A<Kn;++A){const P=A/v,b=Math.exp(-P*P/2);p.push(b),A===0?M+=b:A<m&&(M+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const y=this._sizeLods[i],R=3*y*(i>_-Ri?i-_+Ri:0),E=4*(this._cubeSize-y);Vs(e,R,E,3*y,2*y),l.setRenderTarget(e),l.render(d,Jr)}}function Pp(s){const t=[],e=[],n=[];let i=s;const r=s-Ri+1+el.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ri?l=el[a-s+Ri-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*u),_=new Float32Array(m*g*u),y=new Float32Array(p*g*u);for(let E=0;E<u;E++){const A=E%3*2/3-1,P=E>2?0:-1,b=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];M.set(b,v*g*E),_.set(f,m*g*E);const x=[E,E,E,E,E,E];y.set(x,p*g*E)}const R=new he;R.setAttribute("position",new Qt(M,v)),R.setAttribute("uv",new Qt(_,m)),R.setAttribute("faceIndex",new Qt(y,p)),t.push(R),i>Ri&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rl(s,t,e){const n=new He(s,t,e);return n.texture.mapping=vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Lp(s,t,e){const n=new Float32Array(Kn),i=new T(0,1,0);return new ge({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ka(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function al(){return new ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function ol(){return new ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function ka(){return`

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
	`}function Dp(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ba||l===wa,h=l===Ni||l===Fi;if(c||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new sl(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const u=o.image;return c&&u&&u.height>0||h&&u&&i(u)?(e===null&&(e=new sl(s)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ip(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Up(s,t,e,n){const i={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",a),delete i[f.id];const u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const u=d.morphAttributes;for(const g in u){const v=u[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],s.ARRAY_BUFFER)}}function c(d){const f=[],u=d.index,g=d.attributes.position;let v=0;if(u!==null){const M=u.array;v=u.version;for(let _=0,y=M.length;_<y;_+=3){const R=M[_+0],E=M[_+1],A=M[_+2];f.push(R,E,E,A,A,R)}}else if(g!==void 0){const M=g.array;v=g.version;for(let _=0,y=M.length/3-1;_<y;_+=3){const R=_+0,E=_+1,A=_+2;f.push(R,E,E,A,A,R)}}else return;const m=new(Sc(f)?Cc:Ac)(f,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const f=r.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Np(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,g){g!==0&&(s.drawElementsInstanced(n,u,r,f*a,g),e.update(u,n,g))}function h(f,u,g){if(g===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g;m++)this.render(f[m]/a,u[m]);else{v.multiDrawElementsWEBGL(n,u,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}}function d(f,u,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,u[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=u[M];for(let M=0;M<v.length;M++)e.update(p,n,v[M])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Fp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Op(s,t,e){const n=new WeakMap,i=new ne;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let x=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var u=x;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let R=o.attributes.position.count*y,E=1;R>t.maxTextureSize&&(E=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const A=new Float32Array(R*E*4*d),P=new Tc(A,R,E,d);P.type=mn,P.needsUpdate=!0;const b=y*4;for(let U=0;U<d;U++){const z=p[U],L=M[U],V=_[U],W=R*E*4*U;for(let j=0;j<z.count;j++){const Z=j*b;g===!0&&(i.fromBufferAttribute(z,j),A[W+Z+0]=i.x,A[W+Z+1]=i.y,A[W+Z+2]=i.z,A[W+Z+3]=0),v===!0&&(i.fromBufferAttribute(L,j),A[W+Z+4]=i.x,A[W+Z+5]=i.y,A[W+Z+6]=i.z,A[W+Z+7]=0),m===!0&&(i.fromBufferAttribute(V,j),A[W+Z+8]=i.x,A[W+Z+9]=i.y,A[W+Z+10]=i.z,A[W+Z+11]=V.itemSize===4?i.w:1)}}f={count:d,texture:P,size:new Y(R,E)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Bp(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Ic extends we{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Li,h!==Li&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Li&&(n=Oi),n===void 0&&h===us&&(n=ps),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Uc=new we,Nc=new Ic(1,1);Nc.compareFunction=yc;const Fc=new Tc,Oc=new wu,Bc=new Lc,ll=[],cl=[],hl=new Float32Array(16),ul=new Float32Array(9),dl=new Float32Array(4);function Vi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ll[i];if(r===void 0&&(r=new Float32Array(i),ll[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function de(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function xr(s,t){let e=cl[t];e===void 0&&(e=new Int32Array(t),cl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function zp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;s.uniform2fv(this.addr,t),de(e,t)}}function Hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;s.uniform3fv(this.addr,t),de(e,t)}}function Vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;s.uniform4fv(this.addr,t),de(e,t)}}function Gp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;dl.set(n),s.uniformMatrix2fv(this.addr,!1,dl),de(e,n)}}function Wp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;ul.set(n),s.uniformMatrix3fv(this.addr,!1,ul),de(e,n)}}function Xp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;hl.set(n),s.uniformMatrix4fv(this.addr,!1,hl),de(e,n)}}function qp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Yp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;s.uniform2iv(this.addr,t),de(e,t)}}function $p(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;s.uniform3iv(this.addr,t),de(e,t)}}function Kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;s.uniform4iv(this.addr,t),de(e,t)}}function jp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Jp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;s.uniform2uiv(this.addr,t),de(e,t)}}function Zp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;s.uniform3uiv(this.addr,t),de(e,t)}}function Qp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;s.uniform4uiv(this.addr,t),de(e,t)}}function tm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Nc:Uc;e.setTexture2D(t||r,i)}function em(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Oc,i)}function nm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Bc,i)}function im(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Fc,i)}function sm(s){switch(s){case 5126:return zp;case 35664:return kp;case 35665:return Hp;case 35666:return Vp;case 35674:return Gp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return $p;case 35669:case 35673:return Kp;case 5125:return jp;case 36294:return Jp;case 36295:return Zp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}function rm(s,t){s.uniform1fv(this.addr,t)}function am(s,t){const e=Vi(t,this.size,2);s.uniform2fv(this.addr,e)}function om(s,t){const e=Vi(t,this.size,3);s.uniform3fv(this.addr,e)}function lm(s,t){const e=Vi(t,this.size,4);s.uniform4fv(this.addr,e)}function cm(s,t){const e=Vi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function hm(s,t){const e=Vi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function um(s,t){const e=Vi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function dm(s,t){s.uniform1iv(this.addr,t)}function fm(s,t){s.uniform2iv(this.addr,t)}function pm(s,t){s.uniform3iv(this.addr,t)}function mm(s,t){s.uniform4iv(this.addr,t)}function gm(s,t){s.uniform1uiv(this.addr,t)}function vm(s,t){s.uniform2uiv(this.addr,t)}function _m(s,t){s.uniform3uiv(this.addr,t)}function xm(s,t){s.uniform4uiv(this.addr,t)}function Mm(s,t,e){const n=this.cache,i=t.length,r=xr(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Uc,r[a])}function ym(s,t,e){const n=this.cache,i=t.length,r=xr(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Oc,r[a])}function Sm(s,t,e){const n=this.cache,i=t.length,r=xr(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Bc,r[a])}function bm(s,t,e){const n=this.cache,i=t.length,r=xr(e,i);ue(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Fc,r[a])}function wm(s){switch(s){case 5126:return rm;case 35664:return am;case 35665:return om;case 35666:return lm;case 35674:return cm;case 35675:return hm;case 35676:return um;case 5124:case 35670:return dm;case 35667:case 35671:return fm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return vm;case 36295:return _m;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return bm}}class Tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sm(e.type)}}class Em{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wm(e.type)}}class Am{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function fl(s,t){s.seq.push(t),s.map[t.id]=t}function Cm(s,t,e){const n=s.name,i=n.length;for(na.lastIndex=0;;){const r=na.exec(n),a=na.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){fl(e,c===void 0?new Tm(o,s,t):new Em(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Am(o),fl(e,d)),e=d}}}class rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Cm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function pl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Rm=37297;let Pm=0;function Lm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Dm(s){const t=Xt.getPrimaries(Xt.workingColorSpace),e=Xt.getPrimaries(s);let n;switch(t===e?n="":t===cr&&e===lr?n="LinearDisplayP3ToLinearSRGB":t===lr&&e===cr&&(n="LinearSRGBToLinearDisplayP3"),s){case Bn:case _r:return[n,"LinearTransferOETF"];case pe:case Ua:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ml(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Lm(s.getShaderSource(t),a)}else return i}function Im(s,t){const e=Dm(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Um(s,t){let e;switch(t){case ac:e="Linear";break;case oc:e="Reinhard";break;case lc:e="OptimizedCineon";break;case cc:e="ACESFilmic";break;case hc:e="AgX";break;case Ia:e="Neutral";break;case Nh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Nm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function Fm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Om(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function as(s){return s!==""}function gl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(s){return s.replace(Bm,km)}const zm=new Map;function km(s,t){let e=Et[t];if(e===void 0){const n=zm.get(t);if(n!==void 0)e=Et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Aa(e)}const Hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(s){return s.replace(Hm,Vm)}function Vm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ic?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===sc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ni:case Fi:t="ENVMAP_TYPE_CUBE";break;case vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function qm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case rc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ih:t="ENVMAP_BLENDING_MIX";break;case Uh:t="ENVMAP_BLENDING_ADD";break}return t}function Ym(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function $m(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Gm(e),c=Wm(e),h=Xm(e),d=qm(e),f=Ym(e),u=Nm(e),g=Fm(r),v=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),p.length>0&&(p+=`
`)):(m=[xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),p=[xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Et.tonemapping_pars_fragment:"",e.toneMapping!==Un?Um("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,Im("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(as).join(`
`)),a=Aa(a),a=gl(a,e),a=vl(a,e),o=Aa(o),o=gl(o,e),o=vl(o,e),a=_l(a),o=_l(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+m+a,y=M+p+o,R=pl(i,i.VERTEX_SHADER,_),E=pl(i,i.FRAGMENT_SHADER,y);i.attachShader(v,R),i.attachShader(v,E),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(U){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(v).trim(),L=i.getShaderInfoLog(R).trim(),V=i.getShaderInfoLog(E).trim();let W=!0,j=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,R,E);else{const Z=ml(i,R,"vertex"),k=ml(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+z+`
`+Z+`
`+k)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(L===""||V==="")&&(j=!1);j&&(U.diagnostics={runnable:W,programLog:z,vertexShader:{log:L,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(R),i.deleteShader(E),P=new rr(i,v),b=Om(i,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(v,Rm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=E,this}let Km=0;class jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Jm(t),e.set(t,n)),n}}class Jm{constructor(t){this.id=Km++,this.code=t,this.usedTimes=0}}function Zm(s,t,e,n,i,r,a){const o=new Oa,l=new jm,c=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,x,U,z,L){const V=z.fog,W=L.geometry,j=b.isMeshStandardMaterial?z.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||j),k=Z&&Z.mapping===vr?Z.image.height:null,Q=g[b.type];b.precision!==null&&(u=i.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));const tt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,dt=tt!==void 0?tt.length:0;let wt=0;W.morphAttributes.position!==void 0&&(wt=1),W.morphAttributes.normal!==void 0&&(wt=2),W.morphAttributes.color!==void 0&&(wt=3);let Yt,G,et,ut;if(Q){const Gt=nn[Q];Yt=Gt.vertexShader,G=Gt.fragmentShader}else Yt=b.vertexShader,G=b.fragmentShader,l.update(b),et=l.getVertexShaderID(b),ut=l.getFragmentShaderID(b);const st=s.getRenderTarget(),Ut=L.isInstancedMesh===!0,Nt=L.isBatchedMesh===!0,N=!!b.map,Jt=!!b.matcap,_t=!!Z,Kt=!!b.aoMap,yt=!!b.lightMap,Ot=!!b.bumpMap,Dt=!!b.normalMap,Bt=!!b.displacementMap,re=!!b.emissiveMap,C=!!b.metalnessMap,S=!!b.roughnessMap,H=b.anisotropy>0,q=b.clearcoat>0,K=b.dispersion>0,J=b.iridescence>0,vt=b.sheen>0,lt=b.transmission>0,ot=H&&!!b.anisotropyMap,Ct=q&&!!b.clearcoatMap,nt=q&&!!b.clearcoatNormalMap,gt=q&&!!b.clearcoatRoughnessMap,zt=J&&!!b.iridescenceMap,xt=J&&!!b.iridescenceThicknessMap,ht=vt&&!!b.sheenColorMap,Rt=vt&&!!b.sheenRoughnessMap,Ft=!!b.specularMap,oe=!!b.specularColorMap,Pt=!!b.specularIntensityMap,D=lt&&!!b.transmissionMap,$=lt&&!!b.thicknessMap,X=!!b.gradientMap,rt=!!b.alphaMap,ct=b.alphaTest>0,kt=!!b.alphaHash,Zt=!!b.extensions;let ae=Un;b.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ae=s.toneMapping);const ve={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:Yt,fragmentShader:G,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:ut,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:Nt,instancing:Ut,instancingColor:Ut&&L.instanceColor!==null,instancingMorph:Ut&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?s.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Bn,alphaToCoverage:!!b.alphaToCoverage,map:N,matcap:Jt,envMap:_t,envMapMode:_t&&Z.mapping,envMapCubeUVHeight:k,aoMap:Kt,lightMap:yt,bumpMap:Ot,normalMap:Dt,displacementMap:f&&Bt,emissiveMap:re,normalMapObjectSpace:Dt&&b.normalMapType===$h,normalMapTangentSpace:Dt&&b.normalMapType===Mc,metalnessMap:C,roughnessMap:S,anisotropy:H,anisotropyMap:ot,clearcoat:q,clearcoatMap:Ct,clearcoatNormalMap:nt,clearcoatRoughnessMap:gt,dispersion:K,iridescence:J,iridescenceMap:zt,iridescenceThicknessMap:xt,sheen:vt,sheenColorMap:ht,sheenRoughnessMap:Rt,specularMap:Ft,specularColorMap:oe,specularIntensityMap:Pt,transmission:lt,transmissionMap:D,thicknessMap:$,gradientMap:X,opaque:b.transparent===!1&&b.blending===Pi&&b.alphaToCoverage===!1,alphaMap:rt,alphaTest:ct,alphaHash:kt,combine:b.combine,mapUv:N&&v(b.map.channel),aoMapUv:Kt&&v(b.aoMap.channel),lightMapUv:yt&&v(b.lightMap.channel),bumpMapUv:Ot&&v(b.bumpMap.channel),normalMapUv:Dt&&v(b.normalMap.channel),displacementMapUv:Bt&&v(b.displacementMap.channel),emissiveMapUv:re&&v(b.emissiveMap.channel),metalnessMapUv:C&&v(b.metalnessMap.channel),roughnessMapUv:S&&v(b.roughnessMap.channel),anisotropyMapUv:ot&&v(b.anisotropyMap.channel),clearcoatMapUv:Ct&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:nt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&v(b.sheenRoughnessMap.channel),specularMapUv:Ft&&v(b.specularMap.channel),specularColorMapUv:oe&&v(b.specularColorMap.channel),specularIntensityMapUv:Pt&&v(b.specularIntensityMap.channel),transmissionMapUv:D&&v(b.transmissionMap.channel),thicknessMapUv:$&&v(b.thicknessMap.channel),alphaMapUv:rt&&v(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Dt||H),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!W.attributes.uv&&(N||rt),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:wt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,useLegacyLights:s._useLegacyLights,decodeVideoTexture:N&&b.map.isVideoTexture===!0&&Xt.getTransfer(b.map.colorSpace)===jt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===je,flipSided:b.side===Le,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Zt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Zt&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function p(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)x.push(U),x.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(M(x,b),_(x,b),x.push(s.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function M(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function _(b,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.useLegacyLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),b.push(o.mask)}function y(b){const x=g[b.type];let U;if(x){const z=nn[x];U=fs.clone(z.uniforms)}else U=b.uniforms;return U}function R(b,x){let U;for(let z=0,L=h.length;z<L;z++){const V=h[z];if(V.cacheKey===x){U=V,++U.usedTimes;break}}return U===void 0&&(U=new $m(s,x,b,r),h.push(U)),U}function E(b){if(--b.usedTimes===0){const x=h.indexOf(b);h[x]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:P}}function Qm(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function tg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ml(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function yl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,f,u,g,v,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function o(d,f,u,g,v,m){const p=a(d,f,u,g,v,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function l(d,f,u,g,v,m){const p=a(d,f,u,g,v,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,f){e.length>1&&e.sort(d||tg),n.length>1&&n.sort(f||Ml),i.length>1&&i.sort(f||Ml)}function h(){for(let d=t,f=s.length;d<f;d++){const u=s[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function eg(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new yl,s.set(n,[a])):i>=r.length?(a=new yl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function ng(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new pt};break;case"SpotLight":e={position:new T,direction:new T,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function ig(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let sg=0;function rg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ag(s){const t=new ng,e=ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const i=new T,r=new Vt,a=new Vt;function o(c,h){let d=0,f=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let g=0,v=0,m=0,p=0,M=0,_=0,y=0,R=0,E=0,A=0,P=0;c.sort(rg);const b=h===!0?Math.PI:1;for(let U=0,z=c.length;U<z;U++){const L=c[U],V=L.color,W=L.intensity,j=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=V.r*W*b,f+=V.g*W*b,u+=V.b*W*b;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],W);P++}else if(L.isDirectionalLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const Q=L.shadow,tt=e.get(L);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.directionalShadow[g]=tt,n.directionalShadowMap[g]=Z,n.directionalShadowMatrix[g]=L.shadow.matrix,_++}n.directional[g]=k,g++}else if(L.isSpotLight){const k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(V).multiplyScalar(W*b),k.distance=j,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[m]=k;const Q=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,Q.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[m]=Q.matrix,L.castShadow){const tt=e.get(L);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.spotShadow[m]=tt,n.spotShadowMap[m]=Z,R++}m++}else if(L.isRectAreaLight){const k=t.get(L);k.color.copy(V).multiplyScalar(W),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=k,p++}else if(L.isPointLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*b),k.distance=L.distance,k.decay=L.decay,L.castShadow){const Q=L.shadow,tt=e.get(L);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,n.pointShadow[v]=tt,n.pointShadowMap[v]=Z,n.pointShadowMatrix[v]=L.shadow.matrix,y++}n.point[v]=k,v++}else if(L.isHemisphereLight){const k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(W*b),k.groundColor.copy(L.groundColor).multiplyScalar(W*b),n.hemi[M]=k,M++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==g||x.pointLength!==v||x.spotLength!==m||x.rectAreaLength!==p||x.hemiLength!==M||x.numDirectionalShadows!==_||x.numPointShadows!==y||x.numSpotShadows!==R||x.numSpotMaps!==E||x.numLightProbes!==P)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=p,n.point.length=v,n.hemi.length=M,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=R+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,x.directionalLength=g,x.pointLength=v,x.spotLength=m,x.rectAreaLength=p,x.hemiLength=M,x.numDirectionalShadows=_,x.numPointShadows=y,x.numSpotShadows=R,x.numSpotMaps=E,x.numLightProbes=P,n.version=sg++)}function l(c,h){let d=0,f=0,u=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const _=c[p];if(_.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(_.isSpotLight){const y=n.spot[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(_.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Sl(s){const t=new ag(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(h){t.setup(e,h)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function og(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Sl(s),t.set(i,[o])):r>=a.length?(o=new Sl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class lg extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cg extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ug=`uniform sampler2D shadow_pass;
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
}`;function dg(s,t,e){let n=new Ba;const i=new Y,r=new Y,a=new ne,o=new lg({depthPacking:Yh}),l=new cg,c={},h=e.maxTextureSize,d={[Nn]:Le,[Le]:Nn,[je]:je},f=new ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:hg,fragmentShader:ug}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const g=new he;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $t(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ic;let p=this.type;this.render=function(E,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=s.getRenderTarget(),x=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),z=s.state;z.setBlending(vn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const L=p!==fn&&this.type===fn,V=p===fn&&this.type!==fn;for(let W=0,j=E.length;W<j;W++){const Z=E[W],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const Q=k.getFrameExtents();if(i.multiply(Q),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,k.mapSize.y=r.y)),k.map===null||L===!0||V===!0){const dt=this.type!==fn?{minFilter:Pe,magFilter:Pe}:{};k.map!==null&&k.map.dispose(),k.map=new He(i.x,i.y,dt),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const tt=k.getViewportCount();for(let dt=0;dt<tt;dt++){const wt=k.getViewport(dt);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),z.viewport(a),k.updateMatrices(Z,dt),n=k.getFrustum(),y(A,P,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===fn&&M(k,P),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,x,U)};function M(E,A){const P=t.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new He(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,P,f,v,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,P,u,v,null)}function _(E,A,P,b){let x=null;const U=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)x=U;else if(x=P.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=x.uuid,L=A.uuid;let V=c[z];V===void 0&&(V={},c[z]=V);let W=V[L];W===void 0&&(W=x.clone(),V[L]=W,A.addEventListener("dispose",R)),x=W}if(x.visible=A.visible,x.wireframe=A.wireframe,b===fn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=s.properties.get(x);z.light=P}return x}function y(E,A,P,b,x){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===fn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const L=t.update(E),V=E.material;if(Array.isArray(V)){const W=L.groups;for(let j=0,Z=W.length;j<Z;j++){const k=W[j],Q=V[k.materialIndex];if(Q&&Q.visible){const tt=_(E,Q,b,x);E.onBeforeShadow(s,E,A,P,L,tt,k),s.renderBufferDirect(P,null,L,tt,E,k),E.onAfterShadow(s,E,A,P,L,tt,k)}}}else if(V.visible){const W=_(E,V,b,x);E.onBeforeShadow(s,E,A,P,L,W,null),s.renderBufferDirect(P,null,L,W,E,null),E.onAfterShadow(s,E,A,P,L,W,null)}}const z=E.children;for(let L=0,V=z.length;L<V;L++)y(z[L],A,P,b,x)}function R(E){E.target.removeEventListener("dispose",R);for(const P in c){const b=c[P],x=E.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}function fg(s){function t(){let D=!1;const $=new ne;let X=null;const rt=new ne(0,0,0,0);return{setMask:function(ct){X!==ct&&!D&&(s.colorMask(ct,ct,ct,ct),X=ct)},setLocked:function(ct){D=ct},setClear:function(ct,kt,Zt,ae,ve){ve===!0&&(ct*=ae,kt*=ae,Zt*=ae),$.set(ct,kt,Zt,ae),rt.equals($)===!1&&(s.clearColor(ct,kt,Zt,ae),rt.copy($))},reset:function(){D=!1,X=null,rt.set(-1,0,0,0)}}}function e(){let D=!1,$=null,X=null,rt=null;return{setTest:function(ct){ct?ut(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function(ct){$!==ct&&!D&&(s.depthMask(ct),$=ct)},setFunc:function(ct){if(X!==ct){switch(ct){case Eh:s.depthFunc(s.NEVER);break;case Ah:s.depthFunc(s.ALWAYS);break;case Ch:s.depthFunc(s.LESS);break;case ar:s.depthFunc(s.LEQUAL);break;case Rh:s.depthFunc(s.EQUAL);break;case Ph:s.depthFunc(s.GEQUAL);break;case Lh:s.depthFunc(s.GREATER);break;case Dh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}X=ct}},setLocked:function(ct){D=ct},setClear:function(ct){rt!==ct&&(s.clearDepth(ct),rt=ct)},reset:function(){D=!1,$=null,X=null,rt=null}}}function n(){let D=!1,$=null,X=null,rt=null,ct=null,kt=null,Zt=null,ae=null,ve=null;return{setTest:function(Gt){D||(Gt?ut(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(Gt){$!==Gt&&!D&&(s.stencilMask(Gt),$=Gt)},setFunc:function(Gt,en,Te){(X!==Gt||rt!==en||ct!==Te)&&(s.stencilFunc(Gt,en,Te),X=Gt,rt=en,ct=Te)},setOp:function(Gt,en,Te){(kt!==Gt||Zt!==en||ae!==Te)&&(s.stencilOp(Gt,en,Te),kt=Gt,Zt=en,ae=Te)},setLocked:function(Gt){D=Gt},setClear:function(Gt){ve!==Gt&&(s.clearStencil(Gt),ve=Gt)},reset:function(){D=!1,$=null,X=null,rt=null,ct=null,kt=null,Zt=null,ae=null,ve=null}}}const i=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,f=[],u=null,g=!1,v=null,m=null,p=null,M=null,_=null,y=null,R=null,E=new pt(0,0,0),A=0,P=!1,b=null,x=null,U=null,z=null,L=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=j>=2);let k=null,Q={};const tt=s.getParameter(s.SCISSOR_BOX),dt=s.getParameter(s.VIEWPORT),wt=new ne().fromArray(tt),Yt=new ne().fromArray(dt);function G(D,$,X,rt){const ct=new Uint8Array(4),kt=s.createTexture();s.bindTexture(D,kt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Zt=0;Zt<X;Zt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D($,0,s.RGBA,1,1,rt,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D($+Zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return kt}const et={};et[s.TEXTURE_2D]=G(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=G(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[s.TEXTURE_2D_ARRAY]=G(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=G(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ut(s.DEPTH_TEST),r.setFunc(ar),Ot(!1),Dt(io),ut(s.CULL_FACE),Kt(vn);function ut(D){c[D]!==!0&&(s.enable(D),c[D]=!0)}function st(D){c[D]!==!1&&(s.disable(D),c[D]=!1)}function Ut(D,$){return h[D]!==$?(s.bindFramebuffer(D,$),h[D]=$,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=$),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=$),!0):!1}function Nt(D,$){let X=f,rt=!1;if(D){X=d.get($),X===void 0&&(X=[],d.set($,X));const ct=D.textures;if(X.length!==ct.length||X[0]!==s.COLOR_ATTACHMENT0){for(let kt=0,Zt=ct.length;kt<Zt;kt++)X[kt]=s.COLOR_ATTACHMENT0+kt;X.length=ct.length,rt=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,rt=!0);rt&&s.drawBuffers(X)}function N(D){return u!==D?(s.useProgram(D),u=D,!0):!1}const Jt={[$n]:s.FUNC_ADD,[ch]:s.FUNC_SUBTRACT,[hh]:s.FUNC_REVERSE_SUBTRACT};Jt[uh]=s.MIN,Jt[dh]=s.MAX;const _t={[fh]:s.ZERO,[ph]:s.ONE,[mh]:s.SRC_COLOR,[ya]:s.SRC_ALPHA,[yh]:s.SRC_ALPHA_SATURATE,[xh]:s.DST_COLOR,[vh]:s.DST_ALPHA,[gh]:s.ONE_MINUS_SRC_COLOR,[Sa]:s.ONE_MINUS_SRC_ALPHA,[Mh]:s.ONE_MINUS_DST_COLOR,[_h]:s.ONE_MINUS_DST_ALPHA,[Sh]:s.CONSTANT_COLOR,[bh]:s.ONE_MINUS_CONSTANT_COLOR,[wh]:s.CONSTANT_ALPHA,[Th]:s.ONE_MINUS_CONSTANT_ALPHA};function Kt(D,$,X,rt,ct,kt,Zt,ae,ve,Gt){if(D===vn){g===!0&&(st(s.BLEND),g=!1);return}if(g===!1&&(ut(s.BLEND),g=!0),D!==lh){if(D!==v||Gt!==P){if((m!==$n||_!==$n)&&(s.blendEquation(s.FUNC_ADD),m=$n,_=$n),Gt)switch(D){case Pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ce:s.blendFunc(s.ONE,s.ONE);break;case so:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ro:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ce:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case so:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ro:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,M=null,y=null,R=null,E.set(0,0,0),A=0,v=D,P=Gt}return}ct=ct||$,kt=kt||X,Zt=Zt||rt,($!==m||ct!==_)&&(s.blendEquationSeparate(Jt[$],Jt[ct]),m=$,_=ct),(X!==p||rt!==M||kt!==y||Zt!==R)&&(s.blendFuncSeparate(_t[X],_t[rt],_t[kt],_t[Zt]),p=X,M=rt,y=kt,R=Zt),(ae.equals(E)===!1||ve!==A)&&(s.blendColor(ae.r,ae.g,ae.b,ve),E.copy(ae),A=ve),v=D,P=!1}function yt(D,$){D.side===je?st(s.CULL_FACE):ut(s.CULL_FACE);let X=D.side===Le;$&&(X=!X),Ot(X),D.blending===Pi&&D.transparent===!1?Kt(vn):Kt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),i.setMask(D.colorWrite);const rt=D.stencilWrite;a.setTest(rt),rt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ut(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(D){b!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),b=D)}function Dt(D){D!==ah?(ut(s.CULL_FACE),D!==x&&(D===io?s.cullFace(s.BACK):D===oh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),x=D}function Bt(D){D!==U&&(W&&s.lineWidth(D),U=D)}function re(D,$,X){D?(ut(s.POLYGON_OFFSET_FILL),(z!==$||L!==X)&&(s.polygonOffset($,X),z=$,L=X)):st(s.POLYGON_OFFSET_FILL)}function C(D){D?ut(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function S(D){D===void 0&&(D=s.TEXTURE0+V-1),k!==D&&(s.activeTexture(D),k=D)}function H(D,$,X){X===void 0&&(k===null?X=s.TEXTURE0+V-1:X=k);let rt=Q[X];rt===void 0&&(rt={type:void 0,texture:void 0},Q[X]=rt),(rt.type!==D||rt.texture!==$)&&(k!==X&&(s.activeTexture(X),k=X),s.bindTexture(D,$||et[D]),rt.type=D,rt.texture=$)}function q(){const D=Q[k];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(D){wt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),wt.copy(D))}function Rt(D){Yt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Yt.copy(D))}function Ft(D,$){let X=l.get($);X===void 0&&(X=new WeakMap,l.set($,X));let rt=X.get(D);rt===void 0&&(rt=s.getUniformBlockIndex($,D.name),X.set(D,rt))}function oe(D,$){const rt=l.get($).get(D);o.get($)!==rt&&(s.uniformBlockBinding($,rt,D.__bindingPointIndex),o.set($,rt))}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},k=null,Q={},h={},d=new WeakMap,f=[],u=null,g=!1,v=null,m=null,p=null,M=null,_=null,y=null,R=null,E=new pt(0,0,0),A=0,P=!1,b=null,x=null,U=null,z=null,L=null,wt.set(0,0,s.canvas.width,s.canvas.height),Yt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ut,disable:st,bindFramebuffer:Ut,drawBuffers:Nt,useProgram:N,setBlending:Kt,setMaterial:yt,setFlipSided:Ot,setCullFace:Dt,setLineWidth:Bt,setPolygonOffset:re,setScissorTest:C,activeTexture:S,bindTexture:H,unbindTexture:q,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:zt,texImage3D:xt,updateUBOMapping:Ft,uniformBlockBinding:oe,texStorage2D:nt,texStorage3D:gt,texSubImage2D:vt,texSubImage3D:lt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Ct,scissor:ht,viewport:Rt,reset:Pt}}function pg(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Y,h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return u?new OffscreenCanvas(C,S):ur("canvas")}function v(C,S,H){let q=1;const K=re(C);if((K.width>H||K.height>H)&&(q=H/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(q*K.width),vt=Math.floor(q*K.height);d===void 0&&(d=g(J,vt));const lt=S?g(J,vt):d;return lt.width=J,lt.height=vt,lt.getContext("2d").drawImage(C,0,0,J,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+J+"x"+vt+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Pe&&C.minFilter!==Je}function p(C){s.generateMipmap(C)}function M(C,S,H,q,K=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=S;if(S===s.RED&&(H===s.FLOAT&&(J=s.R32F),H===s.HALF_FLOAT&&(J=s.R16F),H===s.UNSIGNED_BYTE&&(J=s.R8)),S===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.R8UI),H===s.UNSIGNED_SHORT&&(J=s.R16UI),H===s.UNSIGNED_INT&&(J=s.R32UI),H===s.BYTE&&(J=s.R8I),H===s.SHORT&&(J=s.R16I),H===s.INT&&(J=s.R32I)),S===s.RG&&(H===s.FLOAT&&(J=s.RG32F),H===s.HALF_FLOAT&&(J=s.RG16F),H===s.UNSIGNED_BYTE&&(J=s.RG8)),S===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RG8UI),H===s.UNSIGNED_SHORT&&(J=s.RG16UI),H===s.UNSIGNED_INT&&(J=s.RG32UI),H===s.BYTE&&(J=s.RG8I),H===s.SHORT&&(J=s.RG16I),H===s.INT&&(J=s.RG32I)),S===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),S===s.RGBA){const vt=K?or:Xt.getTransfer(q);H===s.FLOAT&&(J=s.RGBA32F),H===s.HALF_FLOAT&&(J=s.RGBA16F),H===s.UNSIGNED_BYTE&&(J=vt===jt?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Pe&&C.minFilter!==Je?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function y(C){const S=C.target;S.removeEventListener("dispose",y),E(S),S.isVideoTexture&&h.delete(S)}function R(C){const S=C.target;S.removeEventListener("dispose",R),P(S)}function E(C){const S=n.get(C);if(S.__webglInit===void 0)return;const H=C.source,q=f.get(H);if(q){const K=q[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&A(C),Object.keys(q).length===0&&f.delete(H)}n.remove(C)}function A(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const H=C.source,q=f.get(H);delete q[S.__cacheKey],a.memory.textures--}function P(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let K=0;K<S.__webglFramebuffer[q].length;K++)s.deleteFramebuffer(S.__webglFramebuffer[q][K]);else s.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)s.deleteFramebuffer(S.__webglFramebuffer[q]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=C.textures;for(let q=0,K=H.length;q<K;q++){const J=n.get(H[q]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(H[q])}n.remove(C)}let b=0;function x(){b=0}function U(){const C=b;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),b+=1,C}function z(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function L(C,S){const H=n.get(C);if(C.isVideoTexture&&Dt(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(H,C,S);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+S)}function V(C,S){const H=n.get(C);if(C.version>0&&H.__version!==C.version){wt(H,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+S)}function W(C,S){const H=n.get(C);if(C.version>0&&H.__version!==C.version){wt(H,C,S);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+S)}function j(C,S){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Yt(H,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+S)}const Z={[ei]:s.REPEAT,[jn]:s.CLAMP_TO_EDGE,[Ta]:s.MIRRORED_REPEAT},k={[Pe]:s.NEAREST,[Fh]:s.NEAREST_MIPMAP_NEAREST,[Ms]:s.NEAREST_MIPMAP_LINEAR,[Je]:s.LINEAR,[Ar]:s.LINEAR_MIPMAP_NEAREST,[Jn]:s.LINEAR_MIPMAP_LINEAR},Q={[Kh]:s.NEVER,[eu]:s.ALWAYS,[jh]:s.LESS,[yc]:s.LEQUAL,[Jh]:s.EQUAL,[tu]:s.GEQUAL,[Zh]:s.GREATER,[Qh]:s.NOTEQUAL};function tt(C,S){if(S.type===mn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Je||S.magFilter===Ar||S.magFilter===Ms||S.magFilter===Jn||S.minFilter===Je||S.minFilter===Ar||S.minFilter===Ms||S.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Z[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Z[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Z[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,k[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,k[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pe||S.minFilter!==Ms&&S.minFilter!==Jn||S.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function dt(C,S){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",y));const q=S.source;let K=f.get(q);K===void 0&&(K={},f.set(q,K));const J=z(S);if(J!==C.__cacheKey){K[J]===void 0&&(K[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),K[J].usedTimes++;const vt=K[C.__cacheKey];vt!==void 0&&(K[C.__cacheKey].usedTimes--,vt.usedTimes===0&&A(S)),C.__cacheKey=J,C.__webglTexture=K[J].texture}return H}function wt(C,S,H){let q=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=s.TEXTURE_3D);const K=dt(C,S),J=S.source;e.bindTexture(q,C.__webglTexture,s.TEXTURE0+H);const vt=n.get(J);if(J.version!==vt.__version||K===!0){e.activeTexture(s.TEXTURE0+H);const lt=Xt.getPrimaries(Xt.workingColorSpace),ot=S.colorSpace===pn?null:Xt.getPrimaries(S.colorSpace),Ct=S.colorSpace===pn||lt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let nt=v(S.image,!1,i.maxTextureSize);nt=Bt(S,nt);const gt=r.convert(S.format,S.colorSpace),zt=r.convert(S.type);let xt=M(S.internalFormat,gt,zt,S.colorSpace,S.isVideoTexture);tt(q,S);let ht;const Rt=S.mipmaps,Ft=S.isVideoTexture!==!0,oe=vt.__version===void 0||K===!0,Pt=J.dataReady,D=_(S,nt);if(S.isDepthTexture)xt=s.DEPTH_COMPONENT16,S.type===mn?xt=s.DEPTH_COMPONENT32F:S.type===Oi?xt=s.DEPTH_COMPONENT24:S.type===ps&&(xt=s.DEPTH24_STENCIL8),oe&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,xt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,xt,nt.width,nt.height,0,gt,zt,null));else if(S.isDataTexture)if(Rt.length>0){Ft&&oe&&e.texStorage2D(s.TEXTURE_2D,D,xt,Rt[0].width,Rt[0].height);for(let $=0,X=Rt.length;$<X;$++)ht=Rt[$],Ft?Pt&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,ht.width,ht.height,gt,zt,ht.data):e.texImage2D(s.TEXTURE_2D,$,xt,ht.width,ht.height,0,gt,zt,ht.data);S.generateMipmaps=!1}else Ft?(oe&&e.texStorage2D(s.TEXTURE_2D,D,xt,nt.width,nt.height),Pt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,gt,zt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,xt,nt.width,nt.height,0,gt,zt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,D,xt,Rt[0].width,Rt[0].height,nt.depth);for(let $=0,X=Rt.length;$<X;$++)ht=Rt[$],S.format!==sn?gt!==null?Ft?Pt&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ht.width,ht.height,nt.depth,gt,ht.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,xt,ht.width,ht.height,nt.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?Pt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ht.width,ht.height,nt.depth,gt,zt,ht.data):e.texImage3D(s.TEXTURE_2D_ARRAY,$,xt,ht.width,ht.height,nt.depth,0,gt,zt,ht.data)}else{Ft&&oe&&e.texStorage2D(s.TEXTURE_2D,D,xt,Rt[0].width,Rt[0].height);for(let $=0,X=Rt.length;$<X;$++)ht=Rt[$],S.format!==sn?gt!==null?Ft?Pt&&e.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,ht.width,ht.height,gt,ht.data):e.compressedTexImage2D(s.TEXTURE_2D,$,xt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?Pt&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,ht.width,ht.height,gt,zt,ht.data):e.texImage2D(s.TEXTURE_2D,$,xt,ht.width,ht.height,0,gt,zt,ht.data)}else if(S.isDataArrayTexture)Ft?(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,D,xt,nt.width,nt.height,nt.depth),Pt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,zt,nt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,xt,nt.width,nt.height,nt.depth,0,gt,zt,nt.data);else if(S.isData3DTexture)Ft?(oe&&e.texStorage3D(s.TEXTURE_3D,D,xt,nt.width,nt.height,nt.depth),Pt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,zt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,xt,nt.width,nt.height,nt.depth,0,gt,zt,nt.data);else if(S.isFramebufferTexture){if(oe)if(Ft)e.texStorage2D(s.TEXTURE_2D,D,xt,nt.width,nt.height);else{let $=nt.width,X=nt.height;for(let rt=0;rt<D;rt++)e.texImage2D(s.TEXTURE_2D,rt,xt,$,X,0,gt,zt,null),$>>=1,X>>=1}}else if(Rt.length>0){if(Ft&&oe){const $=re(Rt[0]);e.texStorage2D(s.TEXTURE_2D,D,xt,$.width,$.height)}for(let $=0,X=Rt.length;$<X;$++)ht=Rt[$],Ft?Pt&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,gt,zt,ht):e.texImage2D(s.TEXTURE_2D,$,xt,gt,zt,ht);S.generateMipmaps=!1}else if(Ft){if(oe){const $=re(nt);e.texStorage2D(s.TEXTURE_2D,D,xt,$.width,$.height)}Pt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,zt,nt)}else e.texImage2D(s.TEXTURE_2D,0,xt,gt,zt,nt);m(S)&&p(q),vt.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Yt(C,S,H){if(S.image.length!==6)return;const q=dt(C,S),K=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+H);const J=n.get(K);if(K.version!==J.__version||q===!0){e.activeTexture(s.TEXTURE0+H);const vt=Xt.getPrimaries(Xt.workingColorSpace),lt=S.colorSpace===pn?null:Xt.getPrimaries(S.colorSpace),ot=S.colorSpace===pn||vt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const Ct=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let X=0;X<6;X++)!Ct&&!nt?gt[X]=v(S.image[X],!0,i.maxCubemapSize):gt[X]=nt?S.image[X].image:S.image[X],gt[X]=Bt(S,gt[X]);const zt=gt[0],xt=r.convert(S.format,S.colorSpace),ht=r.convert(S.type),Rt=M(S.internalFormat,xt,ht,S.colorSpace),Ft=S.isVideoTexture!==!0,oe=J.__version===void 0||q===!0,Pt=K.dataReady;let D=_(S,zt);tt(s.TEXTURE_CUBE_MAP,S);let $;if(Ct){Ft&&oe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,D,Rt,zt.width,zt.height);for(let X=0;X<6;X++){$=gt[X].mipmaps;for(let rt=0;rt<$.length;rt++){const ct=$[rt];S.format!==sn?xt!==null?Ft?Pt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt,0,0,ct.width,ct.height,xt,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt,Rt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?Pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt,0,0,ct.width,ct.height,xt,ht,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt,Rt,ct.width,ct.height,0,xt,ht,ct.data)}}}else{if($=S.mipmaps,Ft&&oe){$.length>0&&D++;const X=re(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,D,Rt,X.width,X.height)}for(let X=0;X<6;X++)if(nt){Ft?Pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,gt[X].width,gt[X].height,xt,ht,gt[X].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Rt,gt[X].width,gt[X].height,0,xt,ht,gt[X].data);for(let rt=0;rt<$.length;rt++){const kt=$[rt].image[X].image;Ft?Pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt+1,0,0,kt.width,kt.height,xt,ht,kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt+1,Rt,kt.width,kt.height,0,xt,ht,kt.data)}}else{Ft?Pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,xt,ht,gt[X]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Rt,xt,ht,gt[X]);for(let rt=0;rt<$.length;rt++){const ct=$[rt];Ft?Pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt+1,0,0,xt,ht,ct.image[X]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt+1,Rt,xt,ht,ct.image[X])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),J.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function G(C,S,H,q,K,J){const vt=r.convert(H.format,H.colorSpace),lt=r.convert(H.type),ot=M(H.internalFormat,vt,lt,H.colorSpace);if(!n.get(S).__hasExternalTextures){const nt=Math.max(1,S.width>>J),gt=Math.max(1,S.height>>J);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,J,ot,nt,gt,S.depth,0,vt,lt,null):e.texImage2D(K,J,ot,nt,gt,0,vt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Ot(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,K,n.get(H).__webglTexture,0,yt(S)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,K,n.get(H).__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function et(C,S,H){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let q=s.DEPTH_COMPONENT24;if(H||Ot(S)){const K=S.depthTexture;K&&K.isDepthTexture&&(K.type===mn?q=s.DEPTH_COMPONENT32F:K.type===Oi&&(q=s.DEPTH_COMPONENT24));const J=yt(S);Ot(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,q,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,J,q,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,q,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const q=yt(S);H&&Ot(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,q,s.DEPTH24_STENCIL8,S.width,S.height):Ot(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,q,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const q=S.textures;for(let K=0;K<q.length;K++){const J=q[K],vt=r.convert(J.format,J.colorSpace),lt=r.convert(J.type),ot=M(J.internalFormat,vt,lt,J.colorSpace),Ct=yt(S);H&&Ot(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,ot,S.width,S.height):Ot(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,ot,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ot,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),L(S.depthTexture,0);const q=n.get(S.depthTexture).__webglTexture,K=yt(S);if(S.depthTexture.format===Li)Ot(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0);else if(S.depthTexture.format===us)Ot(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function st(C){const S=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ut(S.__webglFramebuffer,C)}else if(H){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]=s.createRenderbuffer(),et(S.__webglDepthbuffer[q],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),et(S.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(C,S,H){const q=n.get(C);S!==void 0&&G(q.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&st(C)}function Nt(C){const S=C.texture,H=n.get(C),q=n.get(S);C.addEventListener("dispose",R);const K=C.textures,J=C.isWebGLCubeRenderTarget===!0,vt=K.length>1;if(vt||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=S.version,a.memory.textures++),J){H.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[lt]=[];for(let ot=0;ot<S.mipmaps.length;ot++)H.__webglFramebuffer[lt][ot]=s.createFramebuffer()}else H.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)H.__webglFramebuffer[lt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(vt)for(let lt=0,ot=K.length;lt<ot;lt++){const Ct=n.get(K[lt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Ot(C)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let lt=0;lt<K.length;lt++){const ot=K[lt];H.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[lt]);const Ct=r.convert(ot.format,ot.colorSpace),nt=r.convert(ot.type),gt=M(ot.internalFormat,Ct,nt,ot.colorSpace,C.isXRRenderTarget===!0),zt=yt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,gt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,H.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),et(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),tt(s.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let ot=0;ot<S.mipmaps.length;ot++)G(H.__webglFramebuffer[lt][ot],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ot);else G(H.__webglFramebuffer[lt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let lt=0,ot=K.length;lt<ot;lt++){const Ct=K[lt],nt=n.get(Ct);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),tt(s.TEXTURE_2D,Ct),G(H.__webglFramebuffer,C,Ct,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),m(Ct)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,q.__webglTexture),tt(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let ot=0;ot<S.mipmaps.length;ot++)G(H.__webglFramebuffer[ot],C,S,s.COLOR_ATTACHMENT0,lt,ot);else G(H.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,lt,0);m(S)&&p(lt),e.unbindTexture()}C.depthBuffer&&st(C)}function N(C){const S=C.textures;for(let H=0,q=S.length;H<q;H++){const K=S[H];if(m(K)){const J=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,vt=n.get(K).__webglTexture;e.bindTexture(J,vt),p(J),e.unbindTexture()}}}const Jt=[],_t=[];function Kt(C){if(C.samples>0){if(Ot(C)===!1){const S=C.textures,H=C.width,q=C.height;let K=s.COLOR_BUFFER_BIT;const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(C),lt=S.length>1;if(lt)for(let ot=0;ot<S.length;ot++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ot=0;ot<S.length;ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[ot]);const Ct=n.get(S[ot]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ct,0)}s.blitFramebuffer(0,0,H,q,0,0,H,q,K,s.NEAREST),l===!0&&(Jt.length=0,_t.length=0,Jt.push(s.COLOR_ATTACHMENT0+ot),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Jt.push(J),_t.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,_t)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let ot=0;ot<S.length;ot++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,vt.__webglColorRenderbuffer[ot]);const Ct=n.get(S[ot]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,Ct,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function yt(C){return Math.min(i.maxSamples,C.samples)}function Ot(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Dt(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Bt(C,S){const H=C.colorSpace,q=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Bn&&H!==pn&&(Xt.getTransfer(H)===jt?(q!==sn||K!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=x,this.setTexture2D=L,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=Ut,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=G,this.useMultisampledRTT=Ot}function mg(s,t){function e(n,i=pn){let r;const a=Xt.getTransfer(i);if(n===Fn)return s.UNSIGNED_BYTE;if(n===pc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===mc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===zh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Oh)return s.BYTE;if(n===Bh)return s.SHORT;if(n===dc)return s.UNSIGNED_SHORT;if(n===fc)return s.INT;if(n===Oi)return s.UNSIGNED_INT;if(n===mn)return s.FLOAT;if(n===_n)return s.HALF_FLOAT;if(n===kh)return s.ALPHA;if(n===Hh)return s.RGB;if(n===sn)return s.RGBA;if(n===Vh)return s.LUMINANCE;if(n===Gh)return s.LUMINANCE_ALPHA;if(n===Li)return s.DEPTH_COMPONENT;if(n===us)return s.DEPTH_STENCIL;if(n===gc)return s.RED;if(n===vc)return s.RED_INTEGER;if(n===Wh)return s.RG;if(n===_c)return s.RG_INTEGER;if(n===xc)return s.RGBA_INTEGER;if(n===Cr||n===Rr||n===Pr||n===Lr)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===oo||n===lo||n===co)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ho||n===uo)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===po||n===mo||n===go||n===vo||n===_o||n===xo||n===Mo||n===yo||n===So||n===bo||n===wo||n===To||n===Eo||n===Ao)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===po)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_o)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dr||n===Co||n===Ro)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Dr)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ro)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xh||n===Po||n===Lo||n===Do)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class gg extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class tn extends ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vg={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _g=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Mg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new we,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new ge({vertexShader:_g,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $t(new yn(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class yg extends Hi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null;const v=new Mg,m=e.getContextAttributes();let p=null,M=null;const _=[],y=[],R=new Y;let E=null;const A=new Fe;A.layers.enable(1),A.viewport=new ne;const P=new Fe;P.layers.enable(2),P.viewport=new ne;const b=[A,P],x=new gg;x.layers.enable(1),x.layers.enable(2);let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let et=_[G];return et===void 0&&(et=new ia,_[G]=et),et.getTargetRaySpace()},this.getControllerGrip=function(G){let et=_[G];return et===void 0&&(et=new ia,_[G]=et),et.getGripSpace()},this.getHand=function(G){let et=_[G];return et===void 0&&(et=new ia,_[G]=et),et.getHandSpace()};function L(G){const et=y.indexOf(G.inputSource);if(et===-1)return;const ut=_[et];ut!==void 0&&(ut.update(G.inputSource,G.frame,c||a),ut.dispatchEvent({type:G.type,data:G.inputSource}))}function V(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",W);for(let G=0;G<_.length;G++){const et=y[G];et!==null&&(y[G]=null,_[G].disconnect(et))}U=null,z=null,v.reset(),t.setRenderTarget(p),u=null,f=null,d=null,i=null,M=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",V),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new He(u.framebufferWidth,u.framebufferHeight,{format:sn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,ut=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?us:Li,ut=m.stencil?ps:Oi);const Ut={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer(Ut),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new He(f.textureWidth,f.textureHeight,{format:sn,type:Fn,depthTexture:new Ic(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function W(G){for(let et=0;et<G.removed.length;et++){const ut=G.removed[et],st=y.indexOf(ut);st>=0&&(y[st]=null,_[st].disconnect(ut))}for(let et=0;et<G.added.length;et++){const ut=G.added[et];let st=y.indexOf(ut);if(st===-1){for(let Nt=0;Nt<_.length;Nt++)if(Nt>=y.length){y.push(ut),st=Nt;break}else if(y[Nt]===null){y[Nt]=ut,st=Nt;break}if(st===-1)break}const Ut=_[st];Ut&&Ut.connect(ut)}}const j=new T,Z=new T;function k(G,et,ut){j.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(ut.matrixWorld);const st=j.distanceTo(Z),Ut=et.projectionMatrix.elements,Nt=ut.projectionMatrix.elements,N=Ut[14]/(Ut[10]-1),Jt=Ut[14]/(Ut[10]+1),_t=(Ut[9]+1)/Ut[5],Kt=(Ut[9]-1)/Ut[5],yt=(Ut[8]-1)/Ut[0],Ot=(Nt[8]+1)/Nt[0],Dt=N*yt,Bt=N*Ot,re=st/(-yt+Ot),C=re*-yt;et.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(C),G.translateZ(re),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const S=N+re,H=Jt+re,q=Dt-C,K=Bt+(st-C),J=_t*Jt/H*S,vt=Kt*Jt/H*S;G.projectionMatrix.makePerspective(q,K,J,vt,S,H),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Q(G,et){et===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(et.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;v.texture!==null&&(G.near=v.depthNear,G.far=v.depthFar),x.near=P.near=A.near=G.near,x.far=P.far=A.far=G.far,(U!==x.near||z!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),U=x.near,z=x.far,A.near=U,A.far=z,P.near=U,P.far=z,A.updateProjectionMatrix(),P.updateProjectionMatrix(),G.updateProjectionMatrix());const et=G.parent,ut=x.cameras;Q(x,et);for(let st=0;st<ut.length;st++)Q(ut[st],et);ut.length===2?k(x,A,P):x.projectionMatrix.copy(A.projectionMatrix),tt(G,x,et)};function tt(G,et,ut){ut===null?G.matrix.copy(et.matrixWorld):(G.matrix.copy(ut.matrixWorld),G.matrix.invert(),G.matrix.multiply(et.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(et.projectionMatrix),G.projectionMatrixInverse.copy(et.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ds*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null};let dt=null;function wt(G,et){if(h=et.getViewerPose(c||a),g=et,h!==null){const ut=h.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let st=!1;ut.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let Nt=0;Nt<ut.length;Nt++){const N=ut[Nt];let Jt=null;if(u!==null)Jt=u.getViewport(N);else{const Kt=d.getViewSubImage(f,N);Jt=Kt.viewport,Nt===0&&(t.setRenderTargetTextures(M,Kt.colorTexture,f.ignoreDepthValues?void 0:Kt.depthStencilTexture),t.setRenderTarget(M))}let _t=b[Nt];_t===void 0&&(_t=new Fe,_t.layers.enable(Nt),_t.viewport=new ne,b[Nt]=_t),_t.matrix.fromArray(N.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(N.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Nt===0&&(x.matrix.copy(_t.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(_t)}const Ut=i.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Nt=d.getDepthInformation(ut[0]);Nt&&Nt.isValid&&Nt.texture&&v.init(t,Nt,i.renderState)}}for(let ut=0;ut<_.length;ut++){const st=y[ut],Ut=_[ut];st!==null&&Ut!==void 0&&Ut.update(st,et,c||a)}v.render(t,x),dt&&dt(G,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Yt=new Dc;Yt.setAnimationLoop(wt),this.setAnimationLoop=function(G){dt=G},this.dispose=function(){}}}const Xn=new Ge,Sg=new Vt;function bg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Rc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),_=M.envMap,y=M.envMapRotation;if(_&&(m.envMap.value=_,Xn.copy(y),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),m.envMapRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(Xn)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const R=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*R,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wg(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){const y=_.program;n.uniformBlockBinding(M,y)}function c(M,_){let y=i[M.id];y===void 0&&(g(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",m));const R=_.program;n.updateUBOMapping(M,R);const E=t.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function h(M){const _=d();M.__bindingPointIndex=_;const y=s.createBuffer(),R=M.__size,E=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=i[M.id],y=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let E=0,A=y.length;E<A;E++){const P=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,x=P.length;b<x;b++){const U=P[b];if(u(U,E,b,R)===!0){const z=U.__offset,L=Array.isArray(U.value)?U.value:[U.value];let V=0;for(let W=0;W<L.length;W++){const j=L[W],Z=v(j);typeof j=="number"||typeof j=="boolean"?(U.__data[0]=j,s.bufferSubData(s.UNIFORM_BUFFER,z+V,U.__data)):j.isMatrix3?(U.__data[0]=j.elements[0],U.__data[1]=j.elements[1],U.__data[2]=j.elements[2],U.__data[3]=0,U.__data[4]=j.elements[3],U.__data[5]=j.elements[4],U.__data[6]=j.elements[5],U.__data[7]=0,U.__data[8]=j.elements[6],U.__data[9]=j.elements[7],U.__data[10]=j.elements[8],U.__data[11]=0):(j.toArray(U.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(M,_,y,R){const E=M.value,A=_+"_"+y;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{const P=R[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return R[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(M){const _=M.uniforms;let y=0;const R=16;for(let A=0,P=_.length;A<P;A++){const b=Array.isArray(_[A])?_[A]:[_[A]];for(let x=0,U=b.length;x<U;x++){const z=b[x],L=Array.isArray(z.value)?z.value:[z.value];for(let V=0,W=L.length;V<W;V++){const j=L[V],Z=v(j),k=y%R;k!==0&&R-k<Z.boundary&&(y+=R-k),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=Z.storage}}}const E=y%R;return E>0&&(y+=R-E),M.__size=y,M.__cache={},this}function v(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Tg{constructor(t={}){const{canvas:e=_u(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const u=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;const _=this;let y=!1,R=0,E=0,A=null,P=-1,b=null;const x=new ne,U=new ne;let z=null;const L=new pt(0);let V=0,W=e.width,j=e.height,Z=1,k=null,Q=null;const tt=new ne(0,0,W,j),dt=new ne(0,0,W,j);let wt=!1;const Yt=new Ba;let G=!1,et=!1;const ut=new Vt,st=new T,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return A===null?Z:1}let N=n;function Jt(w,I){return e.getContext(w,I)}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Da}`),e.addEventListener("webglcontextlost",D,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",X,!1),N===null){const I="webgl2";if(N=Jt(I,w),N===null)throw Jt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let _t,Kt,yt,Ot,Dt,Bt,re,C,S,H,q,K,J,vt,lt,ot,Ct,nt,gt,zt,xt,ht,Rt,Ft;function oe(){_t=new Ip(N),_t.init(),ht=new mg(N,_t),Kt=new Ap(N,_t,t,ht),yt=new fg(N),Ot=new Fp(N),Dt=new Qm,Bt=new pg(N,_t,yt,Dt,Kt,ht,Ot),re=new Rp(_),C=new Dp(_),S=new Vu(N),Rt=new Tp(N,S),H=new Up(N,S,Ot,Rt),q=new Bp(N,H,S,Ot),gt=new Op(N,Kt,Bt),ot=new Cp(Dt),K=new Zm(_,re,C,_t,Kt,Rt,ot),J=new bg(_,Dt),vt=new eg,lt=new og(_t),nt=new wp(_,re,C,yt,q,f,l),Ct=new dg(_,q,Kt),Ft=new wg(N,Ot,Kt,yt),zt=new Ep(N,_t,Ot),xt=new Np(N,_t,Ot),Ot.programs=K.programs,_.capabilities=Kt,_.extensions=_t,_.properties=Dt,_.renderLists=vt,_.shadowMap=Ct,_.state=yt,_.info=Ot}oe();const Pt=new yg(_,N);this.xr=Pt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=_t.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=_t.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(W,j,!1))},this.getSize=function(w){return w.set(W,j)},this.setSize=function(w,I,B=!0){if(Pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,j=I,e.width=Math.floor(w*Z),e.height=Math.floor(I*Z),B===!0&&(e.style.width=w+"px",e.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(W*Z,j*Z).floor()},this.setDrawingBufferSize=function(w,I,B){W=w,j=I,Z=B,e.width=Math.floor(w*B),e.height=Math.floor(I*B),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(tt)},this.setViewport=function(w,I,B,F){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,I,B,F),yt.viewport(x.copy(tt).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(dt)},this.setScissor=function(w,I,B,F){w.isVector4?dt.set(w.x,w.y,w.z,w.w):dt.set(w,I,B,F),yt.scissor(U.copy(dt).multiplyScalar(Z).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(w){yt.setScissorTest(wt=w)},this.setOpaqueSort=function(w){k=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(w=!0,I=!0,B=!0){let F=0;if(w){let O=!1;if(A!==null){const at=A.texture.format;O=at===xc||at===_c||at===vc}if(O){const at=A.texture.type,ft=at===Fn||at===Oi||at===dc||at===ps||at===pc||at===mc,mt=nt.getClearColor(),Mt=nt.getClearAlpha(),St=mt.r,Tt=mt.g,It=mt.b;ft?(u[0]=St,u[1]=Tt,u[2]=It,u[3]=Mt,N.clearBufferuiv(N.COLOR,0,u)):(g[0]=St,g[1]=Tt,g[2]=It,g[3]=Mt,N.clearBufferiv(N.COLOR,0,g))}else F|=N.COLOR_BUFFER_BIT}I&&(F|=N.DEPTH_BUFFER_BIT),B&&(F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",D,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",X,!1),vt.dispose(),lt.dispose(),Dt.dispose(),re.dispose(),C.dispose(),q.dispose(),Rt.dispose(),Ft.dispose(),K.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Gt),Pt.removeEventListener("sessionend",en),Te.stop()};function D(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=Ot.autoReset,I=Ct.enabled,B=Ct.autoUpdate,F=Ct.needsUpdate,O=Ct.type;oe(),Ot.autoReset=w,Ct.enabled=I,Ct.autoUpdate=B,Ct.needsUpdate=F,Ct.type=O}function X(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rt(w){const I=w.target;I.removeEventListener("dispose",rt),ct(I)}function ct(w){kt(w),Dt.remove(w)}function kt(w){const I=Dt.get(w).programs;I!==void 0&&(I.forEach(function(B){K.releaseProgram(B)}),w.isShaderMaterial&&K.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,B,F,O,at){I===null&&(I=Ut);const ft=O.isMesh&&O.matrixWorld.determinant()<0,mt=nh(w,I,B,F,O);yt.setMaterial(F,ft);let Mt=B.index,St=1;if(F.wireframe===!0){if(Mt=H.getWireframeAttribute(B),Mt===void 0)return;St=2}const Tt=B.drawRange,It=B.attributes.position;let le=Tt.start*St,_e=(Tt.start+Tt.count)*St;at!==null&&(le=Math.max(le,at.start*St),_e=Math.min(_e,(at.start+at.count)*St)),Mt!==null?(le=Math.max(le,0),_e=Math.min(_e,Mt.count)):It!=null&&(le=Math.max(le,0),_e=Math.min(_e,It.count));const De=_e-le;if(De<0||De===1/0)return;Rt.setup(O,F,mt,B,Mt);let on,Ht=zt;if(Mt!==null&&(on=S.get(Mt),Ht=xt,Ht.setIndex(on)),O.isMesh)F.wireframe===!0?(yt.setLineWidth(F.wireframeLinewidth*Nt()),Ht.setMode(N.LINES)):Ht.setMode(N.TRIANGLES);else if(O.isLine){let bt=F.linewidth;bt===void 0&&(bt=1),yt.setLineWidth(bt*Nt()),O.isLineSegments?Ht.setMode(N.LINES):O.isLineLoop?Ht.setMode(N.LINE_LOOP):Ht.setMode(N.LINE_STRIP)}else O.isPoints?Ht.setMode(N.POINTS):O.isSprite&&Ht.setMode(N.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?Ht.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):Ht.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)Ht.renderInstances(le,De,O.count);else if(B.isInstancedBufferGeometry){const bt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Wi=Math.min(B.instanceCount,bt);Ht.renderInstances(le,De,Wi)}else Ht.render(le,De)};function Zt(w,I,B){w.transparent===!0&&w.side===je&&w.forceSinglePass===!1?(w.side=Le,w.needsUpdate=!0,xs(w,I,B),w.side=Nn,w.needsUpdate=!0,xs(w,I,B),w.side=je):xs(w,I,B)}this.compile=function(w,I,B=null){B===null&&(B=w),m=lt.get(B),m.init(I),M.push(m),B.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),w!==B&&w.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(_._useLegacyLights);const F=new Set;return w.traverse(function(O){const at=O.material;if(at)if(Array.isArray(at))for(let ft=0;ft<at.length;ft++){const mt=at[ft];Zt(mt,B,O),F.add(mt)}else Zt(at,B,O),F.add(at)}),M.pop(),m=null,F},this.compileAsync=function(w,I,B=null){const F=this.compile(w,I,B);return new Promise(O=>{function at(){if(F.forEach(function(ft){Dt.get(ft).currentProgram.isReady()&&F.delete(ft)}),F.size===0){O(w);return}setTimeout(at,10)}_t.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ae=null;function ve(w){ae&&ae(w)}function Gt(){Te.stop()}function en(){Te.start()}const Te=new Dc;Te.setAnimationLoop(ve),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(w){ae=w,Pt.setAnimationLoop(w),w===null?Te.stop():Te.start()},Pt.addEventListener("sessionstart",Gt),Pt.addEventListener("sessionend",en),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(I),I=Pt.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,I,A),m=lt.get(w,M.length),m.init(I),M.push(m),ut.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Yt.setFromProjectionMatrix(ut),et=this.localClippingEnabled,G=ot.init(this.clippingPlanes,et),v=vt.get(w,p.length),v.init(),p.push(v),Ka(w,I,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(k,Q);const B=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1;B&&nt.addToRenderList(v,w),this.info.render.frame++,G===!0&&ot.beginShadows();const F=m.state.shadowsArray;Ct.render(F,w,I),G===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=v.opaque,at=v.transmissive;if(m.setupLights(_._useLegacyLights),I.isArrayCamera){const ft=I.cameras;if(at.length>0)for(let mt=0,Mt=ft.length;mt<Mt;mt++){const St=ft[mt];Ja(O,at,w,St)}B&&nt.render(w);for(let mt=0,Mt=ft.length;mt<Mt;mt++){const St=ft[mt];ja(v,w,St,St.viewport)}}else at.length>0&&Ja(O,at,w,I),B&&nt.render(w),ja(v,w,I);A!==null&&(Bt.updateMultisampleRenderTarget(A),Bt.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(_,w,I),Rt.resetDefaultState(),P=-1,b=null,M.pop(),M.length>0?(m=M[M.length-1],G===!0&&ot.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Ka(w,I,B,F){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Yt.intersectsSprite(w)){F&&st.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ut);const ft=q.update(w),mt=w.material;mt.visible&&v.push(w,ft,mt,B,st.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Yt.intersectsObject(w))){const ft=q.update(w),mt=w.material;if(F&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),st.copy(w.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),st.copy(ft.boundingSphere.center)),st.applyMatrix4(w.matrixWorld).applyMatrix4(ut)),Array.isArray(mt)){const Mt=ft.groups;for(let St=0,Tt=Mt.length;St<Tt;St++){const It=Mt[St],le=mt[It.materialIndex];le&&le.visible&&v.push(w,ft,le,B,st.z,It)}}else mt.visible&&v.push(w,ft,mt,B,st.z,null)}}const at=w.children;for(let ft=0,mt=at.length;ft<mt;ft++)Ka(at[ft],I,B,F)}function ja(w,I,B,F){const O=w.opaque,at=w.transmissive,ft=w.transparent;m.setupLightsView(B),G===!0&&ot.setGlobalState(_.clippingPlanes,B),F&&yt.viewport(x.copy(F)),O.length>0&&_s(O,I,B),at.length>0&&_s(at,I,B),ft.length>0&&_s(ft,I,B),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Ja(w,I,B,F){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[F.id]===void 0&&(m.state.transmissionRenderTarget[F.id]=new He(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?_n:Fn,minFilter:Jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const at=m.state.transmissionRenderTarget[F.id],ft=F.viewport||x;at.setSize(ft.z,ft.w);const mt=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(L),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear();const Mt=_.toneMapping;_.toneMapping=Un;const St=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),m.setupLightsView(F),G===!0&&ot.setGlobalState(_.clippingPlanes,F),_s(w,B,F),Bt.updateMultisampleRenderTarget(at),Bt.updateRenderTargetMipmap(at),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let It=0,le=I.length;It<le;It++){const _e=I[It],De=_e.object,on=_e.geometry,Ht=_e.material,bt=_e.group;if(Ht.side===je&&De.layers.test(F.layers)){const Wi=Ht.side;Ht.side=Le,Ht.needsUpdate=!0,Za(De,B,F,on,Ht,bt),Ht.side=Wi,Ht.needsUpdate=!0,Tt=!0}}Tt===!0&&(Bt.updateMultisampleRenderTarget(at),Bt.updateRenderTargetMipmap(at))}_.setRenderTarget(mt),_.setClearColor(L,V),St!==void 0&&(F.viewport=St),_.toneMapping=Mt}function _s(w,I,B){const F=I.isScene===!0?I.overrideMaterial:null;for(let O=0,at=w.length;O<at;O++){const ft=w[O],mt=ft.object,Mt=ft.geometry,St=F===null?ft.material:F,Tt=ft.group;mt.layers.test(B.layers)&&Za(mt,I,B,Mt,St,Tt)}}function Za(w,I,B,F,O,at){w.onBeforeRender(_,I,B,F,O,at),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(_,I,B,F,w,at),O.transparent===!0&&O.side===je&&O.forceSinglePass===!1?(O.side=Le,O.needsUpdate=!0,_.renderBufferDirect(B,I,F,O,w,at),O.side=Nn,O.needsUpdate=!0,_.renderBufferDirect(B,I,F,O,w,at),O.side=je):_.renderBufferDirect(B,I,F,O,w,at),w.onAfterRender(_,I,B,F,O,at)}function xs(w,I,B){I.isScene!==!0&&(I=Ut);const F=Dt.get(w),O=m.state.lights,at=m.state.shadowsArray,ft=O.state.version,mt=K.getParameters(w,O.state,at,I,B),Mt=K.getProgramCacheKey(mt);let St=F.programs;F.environment=w.isMeshStandardMaterial?I.environment:null,F.fog=I.fog,F.envMap=(w.isMeshStandardMaterial?C:re).get(w.envMap||F.environment),F.envMapRotation=F.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,St===void 0&&(w.addEventListener("dispose",rt),St=new Map,F.programs=St);let Tt=St.get(Mt);if(Tt!==void 0){if(F.currentProgram===Tt&&F.lightsStateVersion===ft)return to(w,mt),Tt}else mt.uniforms=K.getUniforms(w),w.onBuild(B,mt,_),w.onBeforeCompile(mt,_),Tt=K.acquireProgram(mt,Mt),St.set(Mt,Tt),F.uniforms=mt.uniforms;const It=F.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=ot.uniform),to(w,mt),F.needsLights=sh(w),F.lightsStateVersion=ft,F.needsLights&&(It.ambientLightColor.value=O.state.ambient,It.lightProbe.value=O.state.probe,It.directionalLights.value=O.state.directional,It.directionalLightShadows.value=O.state.directionalShadow,It.spotLights.value=O.state.spot,It.spotLightShadows.value=O.state.spotShadow,It.rectAreaLights.value=O.state.rectArea,It.ltc_1.value=O.state.rectAreaLTC1,It.ltc_2.value=O.state.rectAreaLTC2,It.pointLights.value=O.state.point,It.pointLightShadows.value=O.state.pointShadow,It.hemisphereLights.value=O.state.hemi,It.directionalShadowMap.value=O.state.directionalShadowMap,It.directionalShadowMatrix.value=O.state.directionalShadowMatrix,It.spotShadowMap.value=O.state.spotShadowMap,It.spotLightMatrix.value=O.state.spotLightMatrix,It.spotLightMap.value=O.state.spotLightMap,It.pointShadowMap.value=O.state.pointShadowMap,It.pointShadowMatrix.value=O.state.pointShadowMatrix),F.currentProgram=Tt,F.uniformsList=null,Tt}function Qa(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=rr.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function to(w,I){const B=Dt.get(w);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function nh(w,I,B,F,O){I.isScene!==!0&&(I=Ut),Bt.resetTextureUnits();const at=I.fog,ft=F.isMeshStandardMaterial?I.environment:null,mt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Bn,Mt=(F.isMeshStandardMaterial?C:re).get(F.envMap||ft),St=F.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Tt=!!B.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),It=!!B.morphAttributes.position,le=!!B.morphAttributes.normal,_e=!!B.morphAttributes.color;let De=Un;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(De=_.toneMapping);const on=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ht=on!==void 0?on.length:0,bt=Dt.get(F),Wi=m.state.lights;if(G===!0&&(et===!0||w!==b)){const ze=w===b&&F.id===P;ot.setState(F,w,ze)}let te=!1;F.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Wi.state.version||bt.outputColorSpace!==mt||O.isBatchedMesh&&bt.batching===!1||!O.isBatchedMesh&&bt.batching===!0||O.isInstancedMesh&&bt.instancing===!1||!O.isInstancedMesh&&bt.instancing===!0||O.isSkinnedMesh&&bt.skinning===!1||!O.isSkinnedMesh&&bt.skinning===!0||O.isInstancedMesh&&bt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&bt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&bt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&bt.instancingMorph===!1&&O.morphTexture!==null||bt.envMap!==Mt||F.fog===!0&&bt.fog!==at||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==ot.numPlanes||bt.numIntersection!==ot.numIntersection)||bt.vertexAlphas!==St||bt.vertexTangents!==Tt||bt.morphTargets!==It||bt.morphNormals!==le||bt.morphColors!==_e||bt.toneMapping!==De||bt.morphTargetsCount!==Ht)&&(te=!0):(te=!0,bt.__version=F.version);let zn=bt.currentProgram;te===!0&&(zn=xs(F,I,O));let eo=!1,Xi=!1,wr=!1;const xe=zn.getUniforms(),wn=bt.uniforms;if(yt.useProgram(zn.program)&&(eo=!0,Xi=!0,wr=!0),F.id!==P&&(P=F.id,Xi=!0),eo||b!==w){xe.setValue(N,"projectionMatrix",w.projectionMatrix),xe.setValue(N,"viewMatrix",w.matrixWorldInverse);const ze=xe.map.cameraPosition;ze!==void 0&&ze.setValue(N,st.setFromMatrixPosition(w.matrixWorld)),Kt.logarithmicDepthBuffer&&xe.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&xe.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Xi=!0,wr=!0)}if(O.isSkinnedMesh){xe.setOptional(N,O,"bindMatrix"),xe.setOptional(N,O,"bindMatrixInverse");const ze=O.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),xe.setValue(N,"boneTexture",ze.boneTexture,Bt))}O.isBatchedMesh&&(xe.setOptional(N,O,"batchingTexture"),xe.setValue(N,"batchingTexture",O._matricesTexture,Bt));const Tr=B.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0)&&gt.update(O,B,zn),(Xi||bt.receiveShadow!==O.receiveShadow)&&(bt.receiveShadow=O.receiveShadow,xe.setValue(N,"receiveShadow",O.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(wn.envMap.value=Mt,wn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&I.environment!==null&&(wn.envMapIntensity.value=I.environmentIntensity),Xi&&(xe.setValue(N,"toneMappingExposure",_.toneMappingExposure),bt.needsLights&&ih(wn,wr),at&&F.fog===!0&&J.refreshFogUniforms(wn,at),J.refreshMaterialUniforms(wn,F,Z,j,m.state.transmissionRenderTarget[w.id]),rr.upload(N,Qa(bt),wn,Bt)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(rr.upload(N,Qa(bt),wn,Bt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&xe.setValue(N,"center",O.center),xe.setValue(N,"modelViewMatrix",O.modelViewMatrix),xe.setValue(N,"normalMatrix",O.normalMatrix),xe.setValue(N,"modelMatrix",O.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const ze=F.uniformsGroups;for(let Er=0,rh=ze.length;Er<rh;Er++){const no=ze[Er];Ft.update(no,zn),Ft.bind(no,zn)}}return zn}function ih(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function sh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,I,B){Dt.get(w.texture).__webglTexture=I,Dt.get(w.depthTexture).__webglTexture=B;const F=Dt.get(w);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=B===void 0,F.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const B=Dt.get(w);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,B=0){A=w,R=I,E=B;let F=!0,O=null,at=!1,ft=!1;if(w){const Mt=Dt.get(w);Mt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(N.FRAMEBUFFER,null),F=!1):Mt.__webglFramebuffer===void 0?Bt.setupRenderTarget(w):Mt.__hasExternalTextures&&Bt.rebindTextures(w,Dt.get(w.texture).__webglTexture,Dt.get(w.depthTexture).__webglTexture);const St=w.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(ft=!0);const Tt=Dt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Tt[I])?O=Tt[I][B]:O=Tt[I],at=!0):w.samples>0&&Bt.useMultisampledRTT(w)===!1?O=Dt.get(w).__webglMultisampledFramebuffer:Array.isArray(Tt)?O=Tt[B]:O=Tt,x.copy(w.viewport),U.copy(w.scissor),z=w.scissorTest}else x.copy(tt).multiplyScalar(Z).floor(),U.copy(dt).multiplyScalar(Z).floor(),z=wt;if(yt.bindFramebuffer(N.FRAMEBUFFER,O)&&F&&yt.drawBuffers(w,O),yt.viewport(x),yt.scissor(U),yt.setScissorTest(z),at){const Mt=Dt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Mt.__webglTexture,B)}else if(ft){const Mt=Dt.get(w.texture),St=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.__webglTexture,B||0,St)}P=-1},this.readRenderTargetPixels=function(w,I,B,F,O,at,ft){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt){yt.bindFramebuffer(N.FRAMEBUFFER,mt);try{const Mt=w.texture,St=Mt.format,Tt=Mt.type;if(!Kt.textureFormatReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-F&&B>=0&&B<=w.height-O&&N.readPixels(I,B,F,O,ht.convert(St),ht.convert(Tt),at)}finally{const Mt=A!==null?Dt.get(A).__webglFramebuffer:null;yt.bindFramebuffer(N.FRAMEBUFFER,Mt)}}},this.copyFramebufferToTexture=function(w,I,B=0){const F=Math.pow(2,-B),O=Math.floor(I.image.width*F),at=Math.floor(I.image.height*F);Bt.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,w.x,w.y,O,at),yt.unbindTexture()},this.copyTextureToTexture=function(w,I,B,F=0){const O=I.image.width,at=I.image.height,ft=ht.convert(B.format),mt=ht.convert(B.type);Bt.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,w.x,w.y,O,at,ft,mt,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,w.x,w.y,I.mipmaps[0].width,I.mipmaps[0].height,ft,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,F,w.x,w.y,ft,mt,I.image),F===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(w,I,B,F,O=0){const at=w.max.x-w.min.x,ft=w.max.y-w.min.y,mt=w.max.z-w.min.z,Mt=ht.convert(F.format),St=ht.convert(F.type);let Tt;if(F.isData3DTexture)Bt.setTexture3D(F,0),Tt=N.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Bt.setTexture2DArray(F,0),Tt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const It=N.getParameter(N.UNPACK_ROW_LENGTH),le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),_e=N.getParameter(N.UNPACK_SKIP_PIXELS),De=N.getParameter(N.UNPACK_SKIP_ROWS),on=N.getParameter(N.UNPACK_SKIP_IMAGES),Ht=B.isCompressedTexture?B.mipmaps[O]:B.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,w.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,w.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,w.min.z),B.isDataTexture||B.isData3DTexture?N.texSubImage3D(Tt,O,I.x,I.y,I.z,at,ft,mt,Mt,St,Ht.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Tt,O,I.x,I.y,I.z,at,ft,mt,Mt,Ht.data):N.texSubImage3D(Tt,O,I.x,I.y,I.z,at,ft,mt,Mt,St,Ht),N.pixelStorei(N.UNPACK_ROW_LENGTH,It),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_e),N.pixelStorei(N.UNPACK_SKIP_ROWS,De),N.pixelStorei(N.UNPACK_SKIP_IMAGES,on),O===0&&F.generateMipmaps&&N.generateMipmap(Tt),yt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Bt.setTextureCube(w,0):w.isData3DTexture?Bt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Bt.setTexture2DArray(w,0):Bt.setTexture2D(w,0),yt.unbindTexture()},this.resetState=function(){R=0,E=0,A=null,yt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ua?"display-p3":"srgb",e.unpackColorSpace=Xt.workingColorSpace===_r?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Ha{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(t),this.density=e}clone(){return new Ha(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Eg extends ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ag{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ea,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return bc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ee=new T;class dr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ze(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Wt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Wt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Wt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Wt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Wt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ze(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ze(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ze(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ze(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Wt(e,this.array),n=Wt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Wt(e,this.array),n=Wt(n,this.array),i=Wt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Wt(e,this.array),n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Qt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new dr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ti extends si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let bi;const ji=new T,wi=new T,Ti=new T,Ei=new Y,Ji=new Y,zc=new Vt,Gs=new T,Zi=new T,Ws=new T,bl=new Y,sa=new Y,wl=new Y;class Ii extends ie{constructor(t=new ti){if(super(),this.isSprite=!0,this.type="Sprite",bi===void 0){bi=new he;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ag(e,5);bi.setIndex([0,1,2,0,2,3]),bi.setAttribute("position",new dr(n,3,0,!1)),bi.setAttribute("uv",new dr(n,2,3,!1))}this.geometry=bi,this.material=t,this.center=new Y(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wi.setFromMatrixScale(this.matrixWorld),zc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wi.multiplyScalar(-Ti.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Xs(Gs.set(-.5,-.5,0),Ti,a,wi,i,r),Xs(Zi.set(.5,-.5,0),Ti,a,wi,i,r),Xs(Ws.set(.5,.5,0),Ti,a,wi,i,r),bl.set(0,0),sa.set(1,0),wl.set(1,1);let o=t.ray.intersectTriangle(Gs,Zi,Ws,!1,ji);if(o===null&&(Xs(Zi.set(-.5,.5,0),Ti,a,wi,i,r),sa.set(0,1),o=t.ray.intersectTriangle(Gs,Ws,Zi,!1,ji),o===null))return;const l=t.ray.origin.distanceTo(ji);l<t.near||l>t.far||e.push({distance:l,point:ji.clone(),uv:Qe.getInterpolation(ji,Gs,Zi,Ws,bl,sa,wl,new Y),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xs(s,t,e,n,i,r){Ei.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ji.x=r*Ei.x-i*Ei.y,Ji.y=i*Ei.x+r*Ei.y):Ji.copy(Ei),s.copy(t),s.x+=Ji.x,s.y+=Ji.y,s.applyMatrix4(zc)}class Cg extends we{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Pe,h=Pe,d,f){super(null,a,o,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tl extends Qt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ai=new Vt,El=new Vt,qs=[],Al=new ni,Rg=new Vt,Qi=new $t,ts=new ii;class Ci extends $t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ai),Al.copy(t.boundingBox).applyMatrix4(Ai),this.boundingBox.union(Al)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ai),ts.copy(t.boundingSphere).applyMatrix4(Ai),this.boundingSphere.union(ts)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Qi.geometry=this.geometry,Qi.material=this.material,Qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(n),t.ray.intersectsSphere(ts)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ai),El.multiplyMatrices(n,Ai),Qi.matrixWorld=El,Qi.raycast(t,qs);for(let a=0,o=qs.length;a<o;a++){const l=qs[a];l.instanceId=r,l.object=this,e.push(l)}qs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Tl(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cg(new Float32Array(i*this.count),i,this.count,gc,mn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Pg extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cl=new Vt,Ca=new Fa,Ys=new ii,$s=new T;class kc extends ie{constructor(t=new he,e=new Pg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(i),Ys.radius+=r,t.ray.intersectsSphere(Ys)===!1)return;Cl.copy(i).invert(),Ca.copy(t.ray).applyMatrix4(Cl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let g=f,v=u;g<v;g++){const m=c.getX(g);$s.fromBufferAttribute(d,m),Rl($s,m,l,i,t,e,this)}}else{const f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let g=f,v=u;g<v;g++)$s.fromBufferAttribute(d,g),Rl($s,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rl(s,t,e,n,i,r,a){const o=Ca.distanceSqToPoint(s);if(o<e){const l=new T;Ca.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class bn extends we{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,u=(a-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Y:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,i=[],r=[],a=[],o=new T,l=new Vt;for(let u=0;u<=t;u++){const g=u/t;i[u]=this.getTangentAt(g,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(me(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,g))}a[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(me(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],u*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Va extends rn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Y){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Lg extends Va{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ga(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,u*=h,i(a,o,f,u)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Ks=new T,ra=new Ga,aa=new Ga,oa=new Ga;class Zn extends rn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Ks.subVectors(i[0],i[1]).add(i[0]),c=Ks);const d=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ks.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ks),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ra.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,v,m),aa.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,v,m),oa.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ra.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),aa.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),oa.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(ra.calc(l),aa.calc(l),oa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Pl(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Dg(s,t){const e=1-s;return e*e*t}function Ig(s,t){return 2*(1-s)*s*t}function Ug(s,t){return s*s*t}function cs(s,t,e,n){return Dg(s,t)+Ig(s,e)+Ug(s,n)}function Ng(s,t){const e=1-s;return e*e*e*t}function Fg(s,t){const e=1-s;return 3*e*e*s*t}function Og(s,t){return 3*(1-s)*s*s*t}function Bg(s,t){return s*s*s*t}function hs(s,t,e,n,i){return Ng(s,t)+Fg(s,e)+Og(s,n)+Bg(s,i)}class Hc extends rn{constructor(t=new Y,e=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Y){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hs(t,i.x,r.x,a.x,o.x),hs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zg extends rn{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hs(t,i.x,r.x,a.x,o.x),hs(t,i.y,r.y,a.y,o.y),hs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vc extends rn{constructor(t=new Y,e=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Y){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kg extends rn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gc extends rn{constructor(t=new Y,e=new Y,n=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(cs(t,i.x,r.x,a.x),cs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wc extends rn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(cs(t,i.x,r.x,a.x),cs(t,i.y,r.y,a.y),cs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xc extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Y){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Pl(o,l.x,c.x,h.x,d.x),Pl(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Y().fromArray(i))}return this}}var Ra=Object.freeze({__proto__:null,ArcCurve:Lg,CatmullRomCurve3:Zn,CubicBezierCurve:Hc,CubicBezierCurve3:zg,EllipseCurve:Va,LineCurve:Vc,LineCurve3:kg,QuadraticBezierCurve:Gc,QuadraticBezierCurve3:Wc,SplineCurve:Xc});class Hg extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ra[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ra[i.type]().fromJSON(i))}return this}}class Vg extends Hg{constructor(t){super(),this.type="Path",this.currentPoint=new Y,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Vc(this.currentPoint.clone(),new Y(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Gc(this.currentPoint.clone(),new Y(t,e),new Y(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Hc(this.currentPoint.clone(),new Y(t,e),new Y(n,i),new Y(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Xc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new Va(t,e,n,i,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zi extends he{constructor(t=[new Y(0,-.5),new Y(.5,0),new Y(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=me(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,d=new T,f=new Y,u=new T,g=new T,v=new T;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,u.x=p*1,u.y=-m,u.z=p*0,v.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),l.push(u.x,u.y,u.z),v.copy(g)}for(let M=0;M<=e;M++){const _=n+M*h*i,y=Math.sin(_),R=Math.cos(_);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*y,d.y=t[E].y,d.z=t[E].x*R,a.push(d.x,d.y,d.z),f.x=M/e,f.y=E/(t.length-1),o.push(f.x,f.y);const A=l[3*E+0]*y,P=l[3*E+1],b=l[3*E+0]*R;c.push(A,P,b)}}for(let M=0;M<e;M++)for(let _=0;_<t.length-1;_++){const y=_+M*t.length,R=y,E=y+t.length,A=y+t.length+1,P=y+1;r.push(R,E,P),r.push(A,P,E)}this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("uv",new qt(o,2)),this.setAttribute("normal",new qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.points,t.segments,t.phiStart,t.phiLength)}}class Ui extends zi{constructor(t=1,e=1,n=4,i=8){const r=new Vg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Ui(t.radius,t.length,t.capSegments,t.radialSegments)}}class Wa extends he{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],u=[];let g=0;const v=[],m=n/2;let p=0;M(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(u,2));function M(){const y=new T,R=new T;let E=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const b=[],x=P/r,U=x*(e-t)+t;for(let z=0;z<=i;z++){const L=z/i,V=L*l+o,W=Math.sin(V),j=Math.cos(V);R.x=U*W,R.y=-x*n+m,R.z=U*j,d.push(R.x,R.y,R.z),y.set(W,A,j).normalize(),f.push(y.x,y.y,y.z),u.push(L,1-x),b.push(g++)}v.push(b)}for(let P=0;P<i;P++)for(let b=0;b<r;b++){const x=v[b][P],U=v[b+1][P],z=v[b+1][P+1],L=v[b][P+1];h.push(x,U,L),h.push(U,z,L),E+=6}c.addGroup(p,E,0),p+=E}function _(y){const R=g,E=new Y,A=new T;let P=0;const b=y===!0?t:e,x=y===!0?1:-1;for(let z=1;z<=i;z++)d.push(0,m*x,0),f.push(0,x,0),u.push(.5,.5),g++;const U=g;for(let z=0;z<=i;z++){const V=z/i*l+o,W=Math.cos(V),j=Math.sin(V);A.x=b*j,A.y=m*x,A.z=b*W,d.push(A.x,A.y,A.z),f.push(0,x,0),E.x=W*.5+.5,E.y=j*.5*x+.5,u.push(E.x,E.y),g++}for(let z=0;z<i;z++){const L=R+z,V=U+z;y===!0?h.push(V,V+1,L):h.push(V+1,V,L),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gs extends Wa{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new gs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vs extends he{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const _=new T,y=new T,R=new T;for(let E=0;E<e.length;E+=3)u(e[E+0],_),u(e[E+1],y),u(e[E+2],R),l(_,y,R,M)}function l(M,_,y,R){const E=R+1,A=[];for(let P=0;P<=E;P++){A[P]=[];const b=M.clone().lerp(y,P/E),x=_.clone().lerp(y,P/E),U=E-P;for(let z=0;z<=U;z++)z===0&&P===E?A[P][z]=b:A[P][z]=b.clone().lerp(x,z/U)}for(let P=0;P<E;P++)for(let b=0;b<2*(E-P)-1;b++){const x=Math.floor(b/2);b%2===0?(f(A[P][x+1]),f(A[P+1][x]),f(A[P][x])):(f(A[P][x+1]),f(A[P+1][x+1]),f(A[P+1][x]))}}function c(M){const _=new T;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(M),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){const M=new T;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];const y=m(M)/2/Math.PI+.5,R=p(M)/Math.PI+.5;a.push(y,1-R)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){const _=a[M+0],y=a[M+2],R=a[M+4],E=Math.max(_,y,R),A=Math.min(_,y,R);E>.9&&A<.1&&(_<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),R<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function u(M,_){const y=M*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){const M=new T,_=new T,y=new T,R=new T,E=new Y,A=new Y,P=new Y;for(let b=0,x=0;b<r.length;b+=9,x+=6){M.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),E.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),P.set(a[x+4],a[x+5]),R.copy(M).add(_).add(y).divideScalar(3);const U=m(R);v(E,x+0,M,U),v(A,x+2,_,U),v(P,x+4,y,U)}}function v(M,_,y,R){R<0&&M.x===1&&(a[_]=M.x-1),y.x===0&&y.z===0&&(a[_]=R/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.vertices,t.indices,t.radius,t.details)}}class Sn extends vs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sn(t.radius,t.detail)}}class Xa extends vs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xa(t.radius,t.detail)}}class fr extends he{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=t;const f=(e-t)/i,u=new T,g=new Y;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;u.x=d*Math.cos(p),u.y=d*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,h.push(g.x,g.y)}d+=f}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const M=p+m,_=M,y=M+n+1,R=M+n+2,E=M+1;o.push(_,y,E),o.push(y,R,E)}}this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ve extends he{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new T,f=new T,u=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const M=[],_=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const E=R/e;d.x=-t*Math.cos(i+E*r)*Math.sin(a+_*o),d.y=t*Math.cos(a+_*o),d.z=t*Math.sin(i+E*r)*Math.sin(a+_*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(E+y,1-_),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const _=h[p][M+1],y=h[p][M],R=h[p+1][M],E=h[p+1][M+1];(p!==0||a>0)&&u.push(_,y,E),(p!==n-1||l<Math.PI)&&u.push(y,R,E)}this.setIndex(u),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qa extends vs{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new qa(t.radius,t.detail)}}class In extends he{constructor(t=new Wc(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new T,l=new T,c=new Y;let h=new T;const d=[],f=[],u=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(u,2));function v(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),M(),p()}function m(_){h=t.getPointAt(_/e,h);const y=a.normals[_],R=a.binormals[_];for(let E=0;E<=i;E++){const A=E/i*Math.PI*2,P=Math.sin(A),b=-Math.cos(A);l.x=b*y.x+P*R.x,l.y=b*y.y+P*R.y,l.z=b*y.z+P*R.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let y=1;y<=i;y++){const R=(i+1)*(_-1)+(y-1),E=(i+1)*_+(y-1),A=(i+1)*_+y,P=(i+1)*(_-1)+y;g.push(R,E,P),g.push(E,A,P)}}function M(){for(let _=0;_<=e;_++)for(let y=0;y<=i;y++)c.x=_/e,c.y=y/i,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new In(new Ra[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Gg extends ge{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Se extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ya extends ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Wg extends Ya{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const la=new Vt,Ll=new T,Dl=new T;class qc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ll),Dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dl),e.updateMatrixWorld(),la.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(la)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Il=new Vt,es=new T,ca=new T;class Xg extends qc{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Y(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),es.setFromMatrixPosition(t.matrixWorld),n.position.copy(es),ca.copy(n.position),ca.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ca),n.updateMatrixWorld(),i.makeTranslation(-es.x,-es.y,-es.z),Il.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il)}}class Ul extends Ya{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class qg extends qc{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nl extends Ya{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.target=new ie,this.shadow=new qg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Yc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Fl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Fl(){return(typeof performance>"u"?Date:performance).now()}const Ol=new Vt;class Yg{constructor(t,e,n=0,i=1/0){this.ray=new Fa(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ol.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ol),this}intersectObject(t,e=!0,n=[]){return Pa(t,this,n,e),n.sort(Bl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Pa(t[i],this,n,e);return n.sort(Bl),n}}function Bl(s,t){return s.distance-t.distance}function Pa(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Pa(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);const se={wallRadius:36,playRadius:30,spawnRadius:31.5,cartilageRadius:4.4,escapeRadius:3.1},Lt={maxHealth:100,maxInflammation:100,maxNetBurden:100,startInflammation:25,stabiliseSeconds:150,winClears:55,clearsPerWave:10,netShotCost:3.4,netHitRelief:1.2,netDecayPerSecond:1.6,netOverloadThreshold:72,netOverloadInflammation:3.5,netOverloadDamage:2.8,burstCost:16,burstChargePerClear:.125,burstProjectiles:14,phagocytosisHealthCost:2,healthRegenDelay:3.2,healthRegenPerSecond:.8,fireCooldown:.22,comboWindow:2.6},Ke={speed:11,dashSpeed:30,dashDuration:.16,dashCooldown:1.5,dashInvulnerability:.3,hitInvulnerability:.6,surfaceOffset:1.35,engulfReach:1.3},Oe={speed:26,life:1.45,burstSpeed:20,burstLife:1.25,baseRadius:.6,radiusGrowth:1.1,wrapDuration:.45,verticalReach:3.2},Mr={complex:{label:"Immune complex",color:16767220,glow:16752352,radius:1.1,speedScale:1,hover:2.1,penalty:7,relief:8,points:100,hp:1,phagocytosable:!0,minWave:1,weight:3},platelet:{label:"Platelet microthrombus",color:15970381,glow:16754240,radius:1.25,speedScale:.75,hover:1.9,penalty:8,relief:5,points:120,hp:1,phagocytosable:!1,minWave:2,weight:2},debris:{label:"Citrullinated debris",color:16762426,glow:16766554,radius:.95,speedScale:1,hover:1.8,penalty:6,relief:7,points:90,hp:1,phagocytosable:!0,minWave:1,weight:3},cytokine:{label:"Cytokine cloud",color:16731546,glow:16727439,radius:1.35,speedScale:.6,hover:2.8,penalty:9,relief:10,points:140,hp:1,phagocytosable:!1,minWave:1,weight:2},synoviocyte:{label:"Invasive synoviocyte",color:11883959,glow:13855743,radius:1.4,speedScale:.8,hover:.55,penalty:10,relief:6,points:220,hp:2,phagocytosable:!1,minWave:3,weight:2},complement:{label:"Complement burst",color:10353663,glow:3470079,radius:.95,speedScale:1.55,hover:1.7,penalty:0,relief:7,points:160,hp:1,phagocytosable:!1,minWave:2,weight:1.4,contactDamage:16,lifetime:16}},zl={1:"Trap immune complexes, debris and cytokines before they reach the cartilage",2:"Platelet microthrombi and complement bursts join the infiltrate",3:"Invasive synoviocytes crawl in — they need two NET hits"},kl=["NETs are web-like strands of decondensed chromatin decorated with granule proteins such as neutrophil elastase and myeloperoxidase.","In RA, NETs are a source of citrullinated autoantigens that are recognised by anti-citrullinated protein antibodies (ACPAs).","PAD4 citrullinates histones during NET formation, helping chromatin decondense.","Fibroblast-like synoviocytes can internalise NET components and present citrullinated peptides to T cells.","Aggregated NETs can trap and degrade cytokines and chemokines, which may help inflammation resolve.","Pannus — invasive, hyperplastic synovial tissue — erodes cartilage and bone in RA.","The inflamed RA synovium grows new blood vessels, which recruit even more immune cells into the joint.","Neutrophils are the most abundant immune cells in RA synovial fluid."],Hl={high:{pixelRatio:2,shadows:!0,shadowMapSize:2048,bloom:!0,msaa:4,particles:700,villi:300,textureSize:512},medium:{pixelRatio:1.5,shadows:!0,shadowMapSize:1024,bloom:!0,msaa:0,particles:420,villi:200,textureSize:512},low:{pixelRatio:1,shadows:!1,shadowMapSize:512,bloom:!1,msaa:0,particles:220,villi:120,textureSize:256}},ns=["high","medium","low"];function Mn(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new he;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Vl(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let v=0;v<a[h].length;++v)u.push(a[h][v][f]);const g=Vl(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Vl(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Qt(a,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,u=h.count;f<u;f++)for(let g=0;g<e;g++){const v=h.getComponent(f,g);o.setComponent(f+d,g,v)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}function Ne(s,t,e){const n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)}function ee(s,t){const e=Math.sin(s*.35)*.9+Math.cos(t*.28)*.7+Math.sin((s+t)*.18)*.65,n=Math.hypot(s,t),i=1-Ne(se.cartilageRadius-.4,se.cartilageRadius+3,n),r=e+(1.05-e)*i,a=(1-Ne(0,se.cartilageRadius+.4,n))*.55,o=Ne(se.playRadius+1,se.wallRadius+1,n);return r+a+o*o*3.2}function pr(s,t,e){const i=ee(s+.35,t)-ee(s-.35,t),r=ee(s,t+.35)-ee(s,t-.35);return e.set(-i,2*.35,-r).normalize(),e}function ri(s){let t=s>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}class $c{constructor(t,e){this.period=t,this.values=new Float32Array(t*t);for(let n=0;n<this.values.length;n+=1)this.values[n]=e()}sample(t,e){const n=this.period,i=t*n,r=e*n,a=Math.floor(i),o=Math.floor(r),l=i-a,c=r-o,h=(a%n+n)%n,d=(o%n+n)%n,f=(h+1)%n,u=(d+1)%n,g=l*l*(3-2*l),v=c*c*(3-2*c),m=this.values[d*n+h],p=this.values[d*n+f],M=this.values[u*n+h],_=this.values[u*n+f];return m+(p-m)*g+(M-m)*v+(m-p-M+_)*g*v}}class $g{constructor(t,e){this.cells=t,this.points=new Float32Array(t*t*2),this.tones=new Float32Array(t*t),this.sizes=new Float32Array(t*t);for(let n=0;n<t*t;n+=1)this.points[n*2]=.18+e()*.64,this.points[n*2+1]=.18+e()*.64,this.tones[n]=e(),this.sizes[n]=e();this.result={f1:0,f2:0,id:0}}sample(t,e){const n=this.cells,i=t*n,r=e*n,a=Math.floor(i),o=Math.floor(r);let l=1e9,c=1e9,h=0;for(let d=-1;d<=1;d+=1)for(let f=-1;f<=1;f+=1){const u=a+f,g=o+d,v=(u%n+n)%n,p=(g%n+n)%n*n+v,M=u+this.points[p*2],_=g+this.points[p*2+1],y=Math.hypot(M-i,_-r);y<l?(c=l,l=y,h=p):y<c&&(c=y)}return this.result.f1=l,this.result.f2=c,this.result.id=h,this.result}}function ha(s,t,e){const n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)}function an(s,t=s){const e=document.createElement("canvas");return e.width=s,e.height=t,e}function Kc(s,t=1){const e=new bn(s);return e.colorSpace=pe,e.wrapS=ei,e.wrapT=ei,e.anisotropy=t,e}function Kg(s,t,e){const n=an(t),i=n.getContext("2d"),r=i.createImageData(t,t),a=r.data,o=(l,c)=>s[(c+t)%t*t+(l+t)%t];for(let l=0;l<t;l+=1)for(let c=0;c<t;c+=1){const h=-(o(c+1,l)-o(c-1,l))*e,d=(o(c,l+1)-o(c,l-1))*e,f=Math.hypot(h,d,1),u=(l*t+c)*4;a[u]=(h/f*.5+.5)*255,a[u+1]=(d/f*.5+.5)*255,a[u+2]=(1/f*.5+.5)*255,a[u+3]=255}return i.putImageData(r,0,0),n}function jc(s,t,e){for(let n=-1;n<=1;n+=1)for(let i=-1;i<=1;i+=1)s.save(),s.translate(i*t,n*t),e(s),s.restore()}function jg(s=512,t=4){const e=ri(1337),n=[6,12,24,48].map(p=>new $c(p,e)),i=new $g(14,e),r=new Float32Array(s*s),a=an(s),o=a.getContext("2d"),l=o.createImageData(s,s),c=l.data,h=[.5,.13,.27],d=[.88,.45,.6],f=[.38,.07,.2],u=[.36,.11,.4];for(let p=0;p<s;p+=1)for(let M=0;M<s;M+=1){const _=M/s,y=p/s;let R=0,E=.5,A=0;for(const Yt of n)R+=Yt.sample(_,y)*E,A+=E,E*=.5;R/=A;const P=i.sample(_,y),b=P.f2-P.f1,x=1-ha(0,.75,P.f1),U=1-ha(0,.13,b),z=i.tones[P.id],L=.13+i.sizes[P.id]*.09,V=1-ha(L*.7,L,P.f1),W=x*.55+R*.45-U*.28+V*.12;r[p*s+M]=W;const j=Math.min(1,Math.max(0,W*.85+(z-.5)*.22+.1));let Z=h[0]+(d[0]-h[0])*j,k=h[1]+(d[1]-h[1])*j,Q=h[2]+(d[2]-h[2])*j;const tt=U*.5;Z+=(f[0]-Z)*tt,k+=(f[1]-k)*tt,Q+=(f[2]-Q)*tt;const dt=V*.62;Z+=(u[0]-Z)*dt,k+=(u[1]-k)*dt,Q+=(u[2]-Q)*dt;const wt=(p*s+M)*4;c[wt]=Math.min(255,Z*255),c[wt+1]=Math.min(255,k*255),c[wt+2]=Math.min(255,Q*255),c[wt+3]=255}o.putImageData(l,0,0),o.lineCap="round",o.lineJoin="round";for(let p=0;p<9;p+=1){const M=[];let _=e()*s,y=e()*s,R=e()*Math.PI*2;const E=30+Math.floor(e()*40);for(let P=0;P<E;P+=1)R+=(e()-.5)*.7,_+=Math.cos(R)*s*.012,y+=Math.sin(R)*s*.012,M.push([_,y]);const A=(.8+e()*1.6)*(s/512);jc(o,s,P=>{P.strokeStyle="rgba(205, 22, 62, 0.42)",P.lineWidth=A*2.4,P.beginPath(),M.forEach(([b,x],U)=>U?P.lineTo(b,x):P.moveTo(b,x)),P.stroke(),P.strokeStyle="rgba(255, 92, 120, 0.35)",P.lineWidth=A,P.stroke()})}const g=Kc(a,t),v=Kg(r,s,s/64),m=new bn(v);return m.colorSpace=pn,m.wrapS=ei,m.wrapT=ei,m.anisotropy=t,{map:g,normalMap:m}}function Jg(s=256,t=4){const e=ri(4242),n=[4,8,16,32].map(l=>new $c(l,e)),i=an(s),r=i.getContext("2d"),a=r.createImageData(s,s),o=a.data;for(let l=0;l<s;l+=1)for(let c=0;c<s;c+=1){let h=0,d=.5;for(const u of n)h+=u.sample(c/s,l/s)*d,d*=.5;const f=(l*s+c)*4;o[f]=214+h*30,o[f+1]=224+h*22,o[f+2]=236+h*16,o[f+3]=255}r.putImageData(a,0,0);for(let l=0;l<46;l+=1){const c=e()*s,h=e()*s,d=e()>.55,f=e()*Math.PI;jc(r,s,u=>{for(let g=0;g<(d?2:1);g+=1){const v=d?Math.cos(f)*(g?4:-4):0,m=d?Math.sin(f)*(g?4:-4):0;u.save(),u.translate(c+v,h+m),u.rotate(f),u.fillStyle="rgba(150, 170, 205, 0.55)",u.beginPath(),u.ellipse(0,0,4.2,3,0,0,Math.PI*2),u.fill(),u.fillStyle="rgba(118, 92, 160, 0.7)",u.beginPath(),u.ellipse(0,0,1.8,1.4,0,0,Math.PI*2),u.fill(),u.restore()}})}return Kc(i,t)}function Zg(s=64){const t=an(s),e=t.getContext("2d"),n=e.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.75)"),n.addColorStop(.6,"rgba(255,255,255,0.18)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,s,s);const i=new bn(t);return i.colorSpace=pe,i}function Qg(s=128,t=.62,e=.92){const n=an(s),i=n.getContext("2d"),r=i.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);r.addColorStop(0,"rgba(255,255,255,0.06)"),r.addColorStop(Math.max(0,t-.12),"rgba(255,255,255,0.1)"),r.addColorStop(t,"rgba(255,255,255,0.55)"),r.addColorStop((t+e)/2,"rgba(255,255,255,1)"),r.addColorStop(e,"rgba(255,255,255,0.15)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,s,s);const a=new bn(n);return a.colorSpace=pe,a}function Gl(s=256,t=99){const e=ri(t),n=an(s),i=n.getContext("2d"),r=s/2,a=s*.46,o=11,l=[.28,.52,.76,.96],c=[];for(let g=0;g<o;g+=1){const v=g/o*Math.PI*2+(e()-.5)*.3,m=[];for(let p=0;p<l.length;p+=1){const M=v+(e()-.5)*.25,_=a*l[p]*(.88+e()*.2);m.push([r+Math.cos(M)*_,r+Math.sin(M)*_])}c.push(m)}i.lineCap="round",i.lineJoin="round";const h=(g,v,m)=>{i.strokeStyle=`rgba(225, 252, 255, ${m})`,i.lineWidth=v,i.beginPath(),i.moveTo(g[0][0],g[0][1]);for(let p=1;p<g.length;p+=1){const[M,_]=g[p-1],[y,R]=g[p],E=(M+y)/2+(e()-.5)*s*.04,A=(_+R)/2+(e()-.5)*s*.04;i.quadraticCurveTo(E,A,y,R)}i.stroke()};i.shadowColor="rgba(120, 240, 255, 0.95)",i.shadowBlur=s*.03;const d=s/256;for(const g of c)h([[r,r],...g],2.2*d,.95);for(let g=0;g<l.length;g+=1)for(let v=0;v<o;v+=1)e()<.18||h([c[v][g],c[(v+1)%o][g]],(1.6-g*.2)*d,.85);for(let g=0;g<14;g+=1){const v=Math.floor(e()*o),m=Math.floor(e()*(l.length-1));h([c[v][m],c[(v+2)%o][m+1]],1*d,.6)}i.shadowColor="rgba(255, 235, 160, 0.9)",i.shadowBlur=s*.025;for(const g of c)for(const[v,m]of g)i.fillStyle=e()>.4?"rgba(255, 246, 200, 1)":"rgba(200, 255, 255, 1)",i.beginPath(),i.arc(v,m,(1.6+e()*1.8)*d,0,Math.PI*2),i.fill();i.shadowBlur=0,i.fillStyle="rgba(255,255,255,1)",i.beginPath(),i.arc(r,r,4*d,0,Math.PI*2),i.fill(),i.globalCompositeOperation="destination-in";const f=i.createRadialGradient(r,r,a*.3,r,r,s/2);f.addColorStop(0,"rgba(0,0,0,1)"),f.addColorStop(.8,"rgba(0,0,0,0.75)"),f.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=f,i.fillRect(0,0,s,s),i.globalCompositeOperation="source-over";const u=new bn(n);return u.colorSpace=pe,u}function t0(s=128,t=7){const e=ri(t),n=an(s),i=n.getContext("2d");for(let a=0;a<14;a+=1){const o=s*(.28+e()*.44),l=s*(.28+e()*.44),c=s*(.12+e()*.22),h=i.createRadialGradient(o,l,0,o,l,c);h.addColorStop(0,"rgba(255,255,255,0.32)"),h.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=h,i.fillRect(0,0,s,s)}const r=new bn(n);return r.colorSpace=pe,r}function e0(s,t="#ffe3f1"){const e=an(256,96),n=e.getContext("2d");n.font="800 56px system-ui, -apple-system, 'Segoe UI', sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=10,n.strokeStyle="rgba(60, 4, 34, 0.85)",n.strokeText(s,128,50),n.fillStyle=t,n.fillText(s,128,50);const i=new bn(e);return i.colorSpace=pe,i}function n0(s=128){const t=an(s),e=t.getContext("2d");e.shadowColor="rgba(140, 245, 255, 1)",e.shadowBlur=s*.08,e.strokeStyle="rgba(230, 253, 255, 0.95)",e.lineWidth=s*.09,e.lineCap="round",e.lineJoin="round";for(let i=0;i<2;i+=1){const r=s*(.62-i*.26);e.globalAlpha=i?.55:1,e.beginPath(),e.moveTo(s*.24,r+s*.14),e.lineTo(s*.5,r-s*.06),e.lineTo(s*.76,r+s*.14),e.stroke()}const n=new bn(t);return n.colorSpace=pe,n}function i0(){const s=an(4,256),t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#1a0418"),e.addColorStop(.45,"#3d0d30"),e.addColorStop(1,"#7a2150"),t.fillStyle=e,t.fillRect(0,0,4,256);const n=new bn(s);return n.colorSpace=pe,n}const s0=`
  #include <emissivemap_fragment>
  {
    float rimFacing = 1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0);
    totalEmissiveRadiance += uRimColor * pow(rimFacing, uRimPower) * uRimStrength;
  }
`,r0=`
  uniform vec3 uRimColor;
  uniform float uRimPower;
  uniform float uRimStrength;
`;function yr(s){s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${r0}`).replace("#include <emissivemap_fragment>",s0)}function Sr(s,t,e){return{uRimColor:{value:new pt(s)},uRimPower:{value:t},uRimStrength:{value:e}}}function a0(s){Object.assign(s.uniforms,this.userData.uniforms),yr(s)}function Dn(s,{color:t=16777215,power:e=2.4,strength:n=.6}={}){return s.userData.uniforms=Sr(t,e,n),s.onBeforeCompile=a0,s.customProgramCacheKey=()=>"rim",s}function o0(s,t){const e=new Se(s);return e.userData.uniforms={...Sr(t.color,t.power,t.strength),uTime:{value:0},uMove:{value:new T},uRuffle:{value:1}},e.onBeforeCompile=function(i){Object.assign(i.uniforms,this.userData.uniforms),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        uniform float uTime;
        uniform vec3 uMove;
        uniform float uRuffle;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          vec3 dir = normalize(position);
          float ruffle = sin(dir.x * 7.0 + uTime * 3.1) * sin(dir.z * 6.0 - uTime * 2.3) * 0.07
            + sin(dir.y * 9.0 + uTime * 4.2) * 0.035;
          float speed = length(uMove);
          float lead = speed > 0.001 ? max(dot(dir, uMove / speed), 0.0) : 0.0;
          float extend = lead * lead * lead * speed * 0.5;
          transformed += dir * (ruffle * uRuffle + extend);
        }`),yr(i)},e.customProgramCacheKey=()=>"membrane",e}function l0(s,t){const e=new Se(s);return e.userData.uniforms={...Sr(t.color,t.power,t.strength),uTime:{value:0}},e.onBeforeCompile=function(i){Object.assign(i.uniforms,this.userData.uniforms),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          #ifdef USE_INSTANCING
            vec3 origin = vec3(instanceMatrix[3]);
          #else
            vec3 origin = vec3(0.0);
          #endif
          float phase = origin.x * 0.31 + origin.z * 0.23;
          float bend = position.y * position.y;
          transformed.x += sin(uTime * 1.25 + phase) * 0.22 * bend;
          transformed.z += cos(uTime * 1.05 + phase * 1.7) * 0.18 * bend;
        }`),yr(i)},e.customProgramCacheKey=()=>"villi",e}const Jc=`
  float tissueHash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float tissueNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(tissueHash(i), tissueHash(i + vec2(1.0, 0.0)), u.x),
      mix(tissueHash(i + vec2(0.0, 1.0)), tissueHash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }
`;function c0(s){const t=new Se(s);return t.userData.uniforms={uTime:{value:0},uInflammation:{value:.25},uNetBurden:{value:0},uPulse:{value:0}},t.onBeforeCompile=function(n){Object.assign(n.uniforms,this.userData.uniforms),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vTissueXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTissueXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vTissueXZ;
        uniform float uTime;
        uniform float uInflammation;
        uniform float uNetBurden;
        uniform float uPulse;
        ${Jc}`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          float broad = tissueNoise(vTissueXZ * 0.07) * 0.6 + tissueNoise(vTissueXZ * 0.19) * 0.4;
          diffuseColor.rgb *= 0.82 + broad * 0.36;
          float hypoxia = smoothstep(0.58, 0.82, tissueNoise(vTissueXZ * 0.055 + 11.0));
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.42, 0.3, 0.62),
            hypoxia * (0.25 + uNetBurden * 0.6));
          float flush = uInflammation * (0.55 + 0.45 * uPulse);
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.35, 0.72, 0.78), flush * 0.45);
        }`)},t.customProgramCacheKey=()=>"synovialFloor",t}function h0(s){const t=new Se(s);return t.userData.uniforms={...Sr(12576511,2.2,.12),uErosion:{value:0},uThreat:{value:0}},t.onBeforeCompile=function(n){Object.assign(n.uniforms,this.userData.uniforms),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vCartXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCartXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vCartXZ;
        uniform float uErosion;
        uniform float uThreat;
        ${Jc}`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          float n = tissueNoise(vCartXZ * 1.3) * 0.65 + tissueNoise(vCartXZ * 3.1) * 0.35;
          float pit = smoothstep(1.0 - uErosion, 1.0 - uErosion + 0.08, n);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.55, 0.16, 0.24), pit * 0.85);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.45, 0.55), uThreat * 0.18);
        }`),yr(n)},t.customProgramCacheKey=()=>"cartilage",t}const ua=300,is=700,da=14,Wl=new pt(6167109),u0=new pt(9050168),d0=new pt(3938898),Xl=new pt(10483455),f0=new pt(16727406);class p0{constructor(t,e=160){this.points=t.getSpacedPoints(e)}sample(t,e){const n=Qn.clamp(t,0,1)*(this.points.length-1),i=Math.floor(n),r=Math.min(this.points.length-1,i+1);return e.copy(this.points[i]).lerp(this.points[r],n-i)}}class m0{constructor(t,e,n){this.scene=t,this.group=new tn,this.group.name="synovium",t.add(this.group),this.random=ri(2026),this.time=0,this.spawnPoints=[],this.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy());const i=jg(n.textureSize,this.anisotropy);this.tissueMap=i.map,this.tissueNormal=i.normalMap,this.createAtmosphere(),this.createFloor(),this.createCartilage(),this.createCapsuleWall(),this.createVilli(),this.createVessels(),this.createResidentCells(),this.createCollagen(),this.createMotes(),this.createCytokineHaze(),this.setQuality(n)}rand(t=0,e=1){return t+(e-t)*this.random()}createAtmosphere(){this.scene.background=i0(),this.scene.fog=new Ha(Wl.getHex(),.0105)}createFloor(){const n=new yn(130,130,150,150);n.rotateX(-Math.PI/2);const i=n.attributes.position,r=n.attributes.uv,a=new Float32Array(i.count*3),o=130/16;for(let c=0;c<i.count;c+=1){const h=i.getX(c),d=i.getZ(c);i.setY(c,ee(h,d)),r.setXY(c,r.getX(c)*o,r.getY(c)*o);const f=Math.hypot(h,d),u=Ne(se.cartilageRadius,se.cartilageRadius+1.6,f)*(1-Ne(se.cartilageRadius+2.2,se.cartilageRadius+6,f)),g=1-Ne(27,38,f)*.3-Ne(37,44,f)*.35;a[c*3]=g,a[c*3+1]=g*(1-u*.28),a[c*3+2]=g*(1-u*.22)}n.setAttribute("color",new Qt(a,3)),n.computeVertexNormals(),this.floorMaterial=c0({map:this.tissueMap,normalMap:this.tissueNormal,normalScale:new Y(.9,.9),roughness:.48,metalness:0,vertexColors:!0});const l=new $t(n,this.floorMaterial);l.receiveShadow=!0,l.name="synovial-floor",this.group.add(l)}createCartilage(){const t=se.cartilageRadius,e=new fr(.001,t,72,12);e.rotateX(-Math.PI/2);const n=e.attributes.position,i=e.attributes.uv;for(let h=0;h<n.count;h+=1){const d=n.getX(h),f=n.getZ(h),u=Math.hypot(d,f),g=Ne(t-.45,t,u)*.12;n.setY(h,ee(d,f)+.06-g),i.setXY(h,d*.22,f*.22)}e.computeVertexNormals(),this.cartilageMaterial=h0({map:Jg(256,this.anisotropy),color:11846352,roughness:.4,metalness:0,emissive:527634});const r=new $t(e,this.cartilageMaterial);r.receiveShadow=!0,r.name="articular-cartilage",this.group.add(r);const a=new fr(t-.25,t+1.05,120,2);a.rotateX(-Math.PI/2);const o=a.attributes.position,l=new Float32Array(o.count*3);for(let h=0;h<o.count;h+=1){const d=o.getX(h),f=o.getZ(h),u=Math.hypot(d,f);o.setY(h,ee(d,f)+.14);const g=Math.abs(u-(t+.4))<.2?1:0;l[h*3]=g,l[h*3+1]=g,l[h*3+2]=g}a.setAttribute("color",new Qt(l,3)),this.zoneMaterial=new On({color:Xl,vertexColors:!0,transparent:!0,opacity:.22,depthWrite:!1,blending:Ce,side:je});const c=new $t(a,this.zoneMaterial);c.renderOrder=3,this.zone=c,this.group.add(c)}createCapsuleWall(){const n=[],i=[],r=[];for(let c=0;c<=22;c+=1){const h=c/22;for(let d=0;d<=180;d+=1){const f=d/180,u=f*Math.PI*2,g=Math.cos(u),v=Math.sin(u),m=Ne(-.2,.62,v),p=17.5-14.6*m,M=Math.sin(u*11+h*2.1)*.7+Math.sin(u*27-h*3.3)*.35+Math.cos(u*5+h*1.3)*.9,_=h*h*3.4*(1-m),y=se.wallRadius+M*(.4+h*.6)-_,R=ee(g*se.wallRadius,v*se.wallRadius)-.9;n.push(g*y,R+h*p,v*y),i.push(f*22,h*p/10)}}for(let c=0;c<22;c+=1)for(let h=0;h<180;h+=1){const d=c*181+h,f=d+1,u=d+181,g=u+1;r.push(d,f,u,f,g,u)}const a=new he;a.setAttribute("position",new qt(n,3)),a.setAttribute("uv",new qt(i,2)),a.setIndex(r),a.computeVertexNormals();const o=Dn(new Se({map:this.tissueMap,normalMap:this.tissueNormal,normalScale:new Y(1.2,1.2),color:14256810,roughness:.58,emissive:2754328,side:je}),{color:16752584,power:3,strength:.28}),l=new $t(a,o);l.receiveShadow=!0,l.name="joint-capsule",this.group.add(l)}createVilli(){const t=[[.5,0],[.56,.05],[.52,.22],[.47,.5],[.45,.72],[.41,.85],[.31,.94],[.17,.99],[0,1]].map(([c,h])=>new Y(c,h)),e=new zi(t,14),n=e.attributes.position,i=new Float32Array(n.count*3);for(let c=0;c<n.count;c+=1){const h=.62+n.getY(c)*.38;i[c*3]=h,i[c*3+1]=h*h,i[c*3+2]=h*h*.95}e.setAttribute("color",new Qt(i,3)),this.villiMaterial=l0({vertexColors:!0,color:16777215,roughness:.42,emissive:2754068},{color:16761566,power:2,strength:.55});const r=new Ci(e,this.villiMaterial,ua),a=new ie,o=new pt,l=[new pt(14247567),new pt(16095160),new pt(12734590)];for(let c=0;c<ua;c+=1){const h=this.rand(0,Math.PI*2),d=this.rand(30.9,34.6),f=Math.cos(h)*d,u=Math.sin(h)*d,g=Ne(-.2,.62,Math.sin(h)),v=Qn.lerp(this.rand(2.4,6.4),this.rand(.8,1.9),g),m=this.rand(.95,1.65);a.position.set(f,ee(f,u)-.35,u),a.rotation.set(0,0,0),a.lookAt(0,a.position.y,0),a.rotateX(this.rand(.08,.38)),a.rotateY(this.rand(0,Math.PI*2)),a.scale.set(m,v,m),a.updateMatrix(),r.setMatrixAt(c,a.matrix),o.copy(l[c%l.length]).lerp(l[(c+1)%l.length],this.random()),r.setColorAt(c,o)}r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,r.receiveShadow=!0,r.name="villi",this.villi=r,this.group.add(r)}createVessels(){this.vesselTables=[];const t=[],e=6;for(let c=0;c<e;c+=1){const h=c/e*Math.PI*2+.35+this.rand(-.15,.15),d=this.random()>.5?1:-1,f=[39,35,32,29.5,27.2,25.2],u=f.map((y,R)=>{const E=h+d*R*.07*(1+R*.25),A=Math.cos(E)*y,P=Math.sin(E)*y;let b=ee(A,P)+.12;return R===0&&(b+=2.2),R===f.length-1&&(b-=1.1),new T(A,b,P)}),g=new Zn(u);t.push(new In(g,72,.78,14,!1)),this.vesselTables.push(new p0(g));const v=u[3];this.spawnPoints.push(new T(v.x,0,v.z));const m=u[2],p=h+d*.3,M=[m.clone(),new T(Math.cos(p)*30.5,0,Math.sin(p)*30.5),new T(Math.cos(p+d*.12)*28.8,0,Math.sin(p+d*.12)*28.8)];M.forEach((y,R)=>{R>0&&(y.y=ee(y.x,y.z)+(R===2?-.7:.05))});const _=new Zn(M);t.push(new In(_,32,.42,10,!1))}for(let c=0;c<e;c+=1){const h=c/e*Math.PI*2+.35+Math.PI/e;this.spawnPoints.push(new T(Math.cos(h)*se.spawnRadius,0,Math.sin(h)*se.spawnRadius))}this.vesselMaterial=Dn(new Se({color:16723295,emissive:5898264,roughness:.28,transparent:!0,opacity:.58,depthWrite:!1}),{color:16743072,power:2,strength:.85});const n=new $t(Mn(t),this.vesselMaterial);n.renderOrder=2,n.name="vessels",this.group.add(n);const i=[[0,-.07],[.2,-.085],[.36,-.15],[.46,0],[.36,.15],[.2,.085],[0,.07]].map(([c,h])=>new Y(c,h)),r=new zi(i,14),a=new Se({color:13635630,emissive:3801096,roughness:.42});this.rbcs=new Ci(r,a,e*da),this.rbcState=[];for(let c=0;c<e*da;c+=1)this.rbcState.push({table:Math.floor(c/da),t:this.random(),speed:this.rand(.05,.085),offset:new T(this.rand(-.2,.2),this.rand(-.18,.18),this.rand(-.2,.2)),spin:this.rand(-3,3),tumble:new Ge(this.rand(0,6.28),this.rand(0,6.28),this.rand(0,6.28))});this.rbcs.frustumCulled=!1,this.rbcs.name="red-blood-cells",this.group.add(this.rbcs),this.rbcDummy=new ie,this.rbcPoint=new T;const o=[];for(let c=0;c<7;c+=1){const h=this.rand(Math.PI*1.08,Math.PI*1.92),d=[];for(let f=0;f<6;f+=1){const u=h+Math.sin(f*1.3+c)*.05+f*.012,g=se.wallRadius-.95-f*.32,v=ee(Math.cos(u)*se.wallRadius,Math.sin(u)*se.wallRadius);d.push(new T(Math.cos(u)*g,v+f*2.5,Math.sin(u)*g))}o.push(new In(new Zn(d),40,this.rand(.3,.5),8,!1))}this.wallVesselMaterial=Dn(new Se({color:14689370,emissive:6946848,roughness:.34}),{color:16747952,power:2.2,strength:.4});const l=new $t(Mn(o),this.wallVesselMaterial);l.name="capsule-vessels",this.group.add(l)}placeOnFloor(t,e,n=0){return new T(t,ee(t,e)-n,e)}randomFloorPoint(t,e,n=[]){for(let i=0;i<30;i+=1){const r=this.rand(0,Math.PI*2),a=this.rand(t,e),o=new Y(Math.cos(r)*a,Math.sin(r)*a);if(n.every(l=>l.distanceTo(o)>4.5))return o}return new Y(t,0)}createResidentCells(){const t=[],e=new ie,n=new Sn(1,3),i=n.attributes.position;for(let v=0;v<i.count;v+=1){const m=i.getX(v),p=i.getY(v),M=i.getZ(v),_=1+Math.sin(m*4.1+M*2.3)*.1+Math.cos(p*5.3+m*3.1)*.08;i.setXYZ(v,m*_,p*_,M*_)}n.computeVertexNormals();const r=Dn(new Se({color:12876468,emissive:2886186,roughness:.45}),{color:16763120,power:2.4,strength:.45}),a=new Ci(n,r,6);for(let v=0;v<6;v+=1){const m=this.randomFloorPoint(15,27,t);t.push(m),e.position.copy(this.placeOnFloor(m.x,m.y,.15)),e.rotation.set(0,this.rand(0,Math.PI*2),0),e.scale.set(this.rand(1.4,1.9),this.rand(.5,.65),this.rand(1.2,1.6)),e.updateMatrix(),a.setMatrixAt(v,e.matrix)}a.castShadow=!0,a.receiveShadow=!0,a.name="macrophages",this.group.add(a);const o=new Ve(1,18,12),l=Dn(new Se({color:10504854,emissive:2229794,roughness:.5}),{color:15771903,power:2.4,strength:.35}),c=new Ci(o,l,12);for(let v=0;v<12;v+=1){const m=this.randomFloorPoint(10,28,t);t.push(m),e.position.copy(this.placeOnFloor(m.x,m.y,.05)),e.rotation.set(0,this.rand(0,Math.PI*2),0),e.scale.set(this.rand(1.9,2.6),.3,this.rand(.5,.7)),e.updateMatrix(),c.setMatrixAt(v,e.matrix)}c.receiveShadow=!0,c.name="resident-synoviocytes",this.group.add(c);const h=new Ve(.34,14,10),d=Dn(new Se({color:15326463,emissive:1905208,roughness:.38}),{color:16777215,power:2.2,strength:.4}),f=24,u=new Ci(h,d,f*3),g=new pt;for(let v=0;v<3;v+=1){const m=this.randomFloorPoint(16,26,t);t.push(m);for(let p=0;p<f;p+=1){const M=this.rand(0,Math.PI*2),_=Math.sqrt(this.random())*1.9,y=m.x+Math.cos(M)*_,R=m.y+Math.sin(M)*_,E=(1-_/2)*.7;e.position.set(y,ee(y,R)+E*this.rand(.4,1),R),e.rotation.set(0,0,0),e.scale.setScalar(this.rand(.85,1.15)),e.updateMatrix(),u.setMatrixAt(v*f+p,e.matrix),u.setColorAt(v*f+p,g.setHSL(.74+this.rand(-.05,.05),.5,this.rand(.78,.9)))}}u.instanceColor.needsUpdate=!0,u.castShadow=!0,u.name="lymphoid-aggregates",this.group.add(u)}createCollagen(){const t=[],e=new pt(16765411),n=new pt(16246438);for(let a=0;a<52;a+=1){const o=this.randomFloorPoint(6.5,29),l=this.rand(0,Math.PI*2),c=this.rand(3,7),h=[];for(let g=0;g<=10;g+=1){const v=g/10,m=Math.sin(v*Math.PI*6+a)*.12,p=o.x+Math.cos(l)*c*v-Math.sin(l)*m,M=o.y+Math.sin(l)*c*v+Math.cos(l)*m;h.push(new T(p,ee(p,M)+.07,M))}const d=new In(new Zn(h),30,a%4===0?.045:.06,4,!1),f=a%4===0?n:e,u=new Float32Array(d.attributes.position.count*3);for(let g=0;g<d.attributes.position.count;g+=1)u[g*3]=f.r,u[g*3+1]=f.g,u[g*3+2]=f.b;d.setAttribute("color",new Qt(u,3)),t.push(d)}const i=new Se({vertexColors:!0,emissive:3805216,roughness:.6,transparent:!0,opacity:.6,depthWrite:!1}),r=new $t(Mn(t),i);r.renderOrder=1,r.name="ecm-fibres",this.group.add(r)}createMotes(){const t=new Float32Array(is*3),e=new Float32Array(is),n=new Float32Array(is);for(let r=0;r<is;r+=1){const a=this.rand(0,Math.PI*2),o=Math.sqrt(this.random())*34;t[r*3]=Math.cos(a)*o,t[r*3+1]=this.rand(1.2,13),t[r*3+2]=Math.sin(a)*o,e[r]=this.rand(0,Math.PI*2),n[r]=this.rand(.06,.2)}const i=new he;i.setAttribute("position",new Qt(t,3)),i.setAttribute("phase",new Qt(e,1)),i.setAttribute("size",new Qt(n,1)),this.moteMaterial=new ge({uniforms:{uTime:{value:0},uScale:{value:400},uColor:{value:new pt(16766698)}},vertexShader:`
        attribute float phase;
        attribute float size;
        uniform float uTime;
        uniform float uScale;
        varying float vFade;
        void main() {
          vec3 p = position + vec3(
            sin(uTime * 0.31 + phase) * 0.7,
            sin(uTime * 0.47 + phase * 2.0) * 0.45,
            cos(uTime * 0.27 + phase) * 0.7);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          float depth = -mv.z;
          vFade = clamp(1.0 - (depth - 12.0) / 60.0, 0.08, 1.0) * (0.55 + 0.45 * sin(uTime * 1.3 + phase * 3.0));
          gl_PointSize = size * uScale / max(0.1, depth);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying float vFade;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.0, d) * vFade * 0.7;
          gl_FragColor = vec4(uColor, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,transparent:!0,depthWrite:!1,blending:Ce}),this.motes=new kc(i,this.moteMaterial),this.motes.frustumCulled=!1,this.motes.name="synovial-fluid-motes",this.group.add(this.motes)}createCytokineHaze(){this.hazeMaterial=new ti({map:t0(128,11),color:16736162,transparent:!0,opacity:.2,depthWrite:!1,blending:Ce}),this.haze=[];for(let t=0;t<12;t+=1){const e=new Ii(this.hazeMaterial),n=this.rand(0,Math.PI*2),i=this.rand(7,29);e.userData={a:n,r:i,y:this.rand(3,9),speed:this.rand(-.03,.03)||.02},e.scale.setScalar(this.rand(5,10)),e.renderOrder=6,this.haze.push(e),this.group.add(e)}}setQuality(t){this.villi.count=Math.min(ua,t.villi),this.motes.geometry.setDrawRange(0,Math.min(is,t.particles))}setViewport(t,e){this.moteMaterial.uniforms.uScale.value=t/(2*Math.tan(Qn.degToRad(e)/2))}update(t,e,n){this.time+=t;const i=this.time,r=e.inflammation/100,a=e.netBurden/100,o=this.floorMaterial.userData.uniforms;o.uTime.value=i,o.uInflammation.value=r,o.uNetBurden.value=a,o.uPulse.value=n,this.villiMaterial.userData.uniforms.uTime.value=i,this.moteMaterial.uniforms.uTime.value=i;const l=this.cartilageMaterial.userData.uniforms;l.uErosion.value=Qn.clamp(e.erosion,0,.92),l.uThreat.value=e.threat,this.zoneMaterial.color.copy(Xl).lerp(f0,e.threat),this.zoneMaterial.opacity=.22+e.threat*.5+Math.sin(i*(3+e.threat*6))*.08,this.vesselMaterial.emissiveIntensity=.75+n*.9,this.wallVesselMaterial.emissiveIntensity=.8+n*.6;const c=.65+n*.9,h=this.rbcDummy;for(let f=0;f<this.rbcState.length;f+=1){const u=this.rbcState[f];u.t=(u.t+u.speed*c*t)%1,this.vesselTables[u.table].sample(u.t,this.rbcPoint),h.position.copy(this.rbcPoint).add(u.offset),h.rotation.copy(u.tumble),h.rotation.y+=i*u.spin,h.scale.setScalar(1),h.updateMatrix(),this.rbcs.setMatrixAt(f,h.matrix)}this.rbcs.instanceMatrix.needsUpdate=!0,this.hazeMaterial.opacity=.06+r*.32;for(const f of this.haze){const u=f.userData;u.a+=u.speed*t,f.position.set(Math.cos(u.a)*u.r,u.y+Math.sin(i*.4+u.r)*.6,Math.sin(u.a)*u.r)}this.scene.fog.color.copy(Wl).lerp(u0,r*.6).lerp(d0,a*.55)}}const g0=1.95,v0=new T;class _0{constructor(t,e){this.group=new tn,this.webMaterial=new ti({map:t,color:14285823,transparent:!0,depthWrite:!1,blending:Ce}),this.web=new Ii(this.webMaterial),this.web.renderOrder=11,this.coreMaterial=new ti({map:e,color:12582143,transparent:!0,depthWrite:!1,blending:Ce}),this.core=new Ii(this.coreMaterial),this.core.scale.setScalar(.9),this.core.renderOrder=12,this.group.add(this.web,this.core),this.group.visible=!1,this.velocity=new T,this.active=!1,this.age=0,this.life=Oe.life,this.radius=Oe.baseRadius,this.spin=0,this.target=null,this.wrapTimer=0,this.trailTimer=0}launch(t,e,n,i){this.active=!0,this.age=0,this.life=i,this.target=null,this.wrapTimer=0,this.trailTimer=0,this.spin=Math.random()*Math.PI*2,this.group.position.copy(t),this.velocity.copy(e).setY(0).normalize().multiplyScalar(n),this.group.visible=!0,this.webMaterial.opacity=1,this.coreMaterial.opacity=1,this.radius=Oe.baseRadius,this.updateScale()}updateScale(){const t=1.25+this.age*2.2;this.web.scale.setScalar(t),this.radius=Oe.baseRadius+this.age*Oe.radiusGrowth}wrap(t){this.target=t,this.wrapTimer=0,this.velocity.set(0,0,0)}update(t,e){if(!this.active)return;if(this.age+=t,this.spin+=t*4,this.webMaterial.rotation=this.spin,this.target){this.wrapTimer+=t;const a=Math.min(1,this.wrapTimer/Oe.wrapDuration);this.group.position.lerp(this.target.group.position,1-Math.exp(-18*t));const o=this.target.radius*3.1*(1-a*.55)+Math.sin(this.wrapTimer*22)*.12;this.web.scale.setScalar(o),this.webMaterial.rotation=this.spin*1.8,this.webMaterial.opacity=1-a*.6,this.coreMaterial.opacity=1-a,a>=1&&this.deactivate();return}this.group.position.addScaledVector(this.velocity,t);const n=this.group.position,i=ee(n.x,n.z)+g0;n.y+=(i-n.y)*(1-Math.exp(-12*t)),this.updateScale();const r=this.age/this.life;this.webMaterial.opacity=Math.max(0,1-r*r),this.coreMaterial.opacity=Math.max(0,1-r),this.trailTimer-=t,e&&this.trailTimer<=0&&(this.trailTimer=.028,e.emit(n,v0.copy(this.velocity).multiplyScalar(-.08),{color:9369087,size:.55,life:.32,drag:4})),(this.age>=this.life||Math.hypot(n.x,n.z)>40)&&this.deactivate()}deactivate(){this.active=!1,this.target=null,this.group.visible=!1}}class x0{constructor(t,e,n,i=56){this.items=[];for(let r=0;r<i;r+=1){const a=new _0(e,n);t.add(a.group),this.items.push(a)}}fire(t,e,{speed:n=Oe.speed,life:i=Oe.life}={}){let r=this.items.find(a=>!a.active);return r||(r=this.items.filter(a=>!a.target).sort((a,o)=>o.age-a.age)[0]),r?(r.launch(t,e,n,i),r):null}update(t,e){for(const n of this.items)n.update(t,e)}clear(){for(const t of this.items)t.deactivate()}}const fa=48,ss=new T(1.32,.74,1.12),js=.4,pa=new T(0,0,1),ql=new pt(12581119),M0=new pt(16726620),Yl=new T,y0=new T,Js=new T,Zs=new Be,$l=new Be;function S0(s,t,e,n){let i=t-s;return i=Math.atan2(Math.sin(i),Math.cos(i)),s+i*(1-Math.exp(-20*n))}class b0{constructor({ringTexture:t,chevronTexture:e}){this.group=new tn,this.group.name="player-neutrophil",this.visual=new tn,this.group.add(this.visual),this.decals=new tn,this.velocity=new T,this.facing=new T(0,0,-1),this.yaw=Math.PI,this.time=0,this.cooldown=0,this.dashTimer=0,this.dashCooldown=0,this.invulnerable=0,this.hitFlash=0,this.engulfPulse=0,this.healthRatio=1,this.dying=!1,this.deathTimer=0,this.deathDuration=1.6,this.createBody(),this.createDecals(t,e),this.reset()}createBody(){const t=new Sn(1.55,5);this.membraneMaterial=o0({color:14874879,emissive:795184,roughness:.34,metalness:0,transparent:!0,opacity:js,depthWrite:!1},{color:ql,power:2,strength:.75}),this.membrane=new $t(t,this.membraneMaterial),this.membrane.scale.copy(ss),this.membrane.renderOrder=9,this.visual.add(this.membrane),this.cytoplasmMaterial=new Se({color:16771574,emissive:3807786,roughness:.4,transparent:!0,opacity:.16,depthWrite:!1}),this.cytoplasm=new $t(new Ve(1.3,32,20),this.cytoplasmMaterial),this.cytoplasm.scale.set(1.24,.6,1.04),this.cytoplasm.renderOrder=8,this.visual.add(this.cytoplasm),this.nucleus=new tn,this.nucleusMaterial=Dn(new Se({color:9062104,emissive:3871599,roughness:.34,transparent:!0,opacity:1}),{color:14137087,power:2,strength:.65});const e=[new T(-.72,.12,-.18),new T(-.24,.22,.24),new T(.3,.18,-.12),new T(.72,.06,.22)],n=new Ve(.42,24,16);e.forEach((a,o)=>{const l=new $t(n,this.nucleusMaterial);l.position.copy(a),l.scale.set(1.18,.72,.98),l.rotation.set(.2*o,.5*o,-.15*o),l.castShadow=!0,this.nucleus.add(l)});const i=new $t(new In(new Zn(e),40,.11,8,!1),this.nucleusMaterial);this.nucleus.add(i),this.nucleus.position.y=.12,this.visual.add(this.nucleus);const r=ri(77);this.granuleMaterial=new Se({color:16048383,emissive:6964896,emissiveIntensity:.7,roughness:.3,transparent:!0,opacity:.95}),this.granules=new Ci(new Ve(.085,8,6),this.granuleMaterial,fa),this.granules.frustumCulled=!1,this.granuleData=[];for(let a=0;a<fa;a+=1){const o=r()*Math.PI*2,l=.45+r()*.75,c=new T(Math.cos(o)*l*1.15,(r()-.35)*.7,Math.sin(o)*l*.9);this.granuleData.push({home:c,phase:r()*Math.PI*2,speed:.8+r()*1.6,burst:c.clone().normalize().add(new T(0,r()*.8,0)).normalize()})}this.visual.add(this.granules),this.granuleDummy=new ie,this.muzzle=new ie,this.muzzle.position.set(0,.4,1.7),this.group.add(this.muzzle)}createDecals(t,e){this.auraMaterial=new On({map:t,color:9434111,transparent:!0,opacity:.5,depthWrite:!1,blending:Ce,polygonOffset:!0,polygonOffsetFactor:-4}),this.aura=new $t(new yn(1,1),this.auraMaterial),this.aura.scale.setScalar(4.4),this.aura.renderOrder=5,this.decals.add(this.aura),this.chevronMaterial=new On({map:e,color:13630463,transparent:!0,opacity:.85,depthWrite:!1,blending:Ce,polygonOffset:!0,polygonOffsetFactor:-4}),this.chevron=new $t(new yn(1,1),this.chevronMaterial),this.chevron.scale.setScalar(1.7),this.chevron.renderOrder=5,this.decals.add(this.chevron)}reset(){this.group.position.set(0,ee(0,9)+Ke.surfaceOffset,9),this.velocity.set(0,0,0),this.yaw=Math.PI,this.facing.set(0,0,-1),this.group.rotation.set(0,this.yaw,0),this.group.visible=!0,this.decals.visible=!0,this.cooldown=0,this.dashTimer=0,this.dashCooldown=0,this.invulnerable=0,this.hitFlash=0,this.engulfPulse=0,this.dying=!1,this.deathTimer=0,this.membrane.scale.copy(ss),this.membraneMaterial.opacity=js,this.cytoplasmMaterial.opacity=.16,this.nucleus.scale.setScalar(1),this.nucleus.rotation.set(0,0,0),this.nucleusMaterial.opacity=1,this.granuleMaterial.opacity=.95,this.updateGranules(0,0),this.updateDecals()}get position(){return this.group.position}get isDashing(){return this.dashTimer>0}canFire(){return!this.dying&&this.cooldown<=0}markFired(){this.cooldown=Lt.fireCooldown}dashReady(){return this.dashCooldown<=0}tryDash(t){if(this.dying||this.dashCooldown>0)return!1;const e=Yl.set(t.x,0,t.y);return e.lengthSq()<.01&&e.copy(this.facing),e.y=0,e.normalize(),this.velocity.copy(e).multiplyScalar(Ke.dashSpeed),this.dashTimer=Ke.dashDuration,this.dashCooldown=Ke.dashCooldown,this.invulnerable=Math.max(this.invulnerable,Ke.dashInvulnerability),!0}takeHit(){return this.dying||this.invulnerable>0?!1:(this.invulnerable=Ke.hitInvulnerability,this.hitFlash=.4,!0)}flash(t=.25){this.hitFlash=Math.max(this.hitFlash,t)}pulseEngulf(){this.engulfPulse=1}setHealthRatio(t){this.healthRatio=t}update(t,e,n){if(this.time+=t,this.dying){this.updateDeath(t);return}this.cooldown=Math.max(0,this.cooldown-t),this.dashCooldown=Math.max(0,this.dashCooldown-t),this.invulnerable=Math.max(0,this.invulnerable-t),this.hitFlash=Math.max(0,this.hitFlash-t),this.engulfPulse=Math.max(0,this.engulfPulse-t*3);const i=this.group.position;if(this.dashTimer>0)this.dashTimer-=t;else{const v=Yl.set(e.x,0,e.y);v.lengthSq()>1&&v.normalize(),v.multiplyScalar(Ke.speed),this.velocity.lerp(v,1-Math.exp(-12*t))}i.x+=this.velocity.x*t,i.z+=this.velocity.z*t;const r=Math.hypot(i.x,i.z);if(r>se.playRadius){const v=i.x/r,m=i.z/r;i.x=v*se.playRadius,i.z=m*se.playRadius;const p=this.velocity.x*v+this.velocity.z*m;p>0&&(this.velocity.x-=p*v,this.velocity.z-=p*m)}const a=ee(i.x,i.z)+Ke.surfaceOffset;i.y+=(a-i.y)*(1-Math.exp(-10*t)),n.lengthSq()>1e-4&&(this.facing.copy(n).setY(0).normalize(),this.yaw=S0(this.yaw,Math.atan2(this.facing.x,this.facing.z),20,t)),this.group.rotation.set(0,this.yaw,0);const o=Math.hypot(this.velocity.x,this.velocity.z),l=Math.min(1,o/Ke.speed);this.visual.rotation.z=Math.sin(this.time*11)*.09*l,this.visual.rotation.x=Math.cos(this.time*13)*.07*l,Zs.copy(this.group.quaternion).invert();const c=y0.copy(this.velocity).applyQuaternion(Zs);c.y=0,c.divide(ss).multiplyScalar(1/Ke.speed),c.lengthSq()>2.5&&c.setLength(1.58);const h=this.membraneMaterial.userData.uniforms;h.uTime.value=this.time,h.uMove.value.copy(c),h.uRuffle.value=1+this.engulfPulse*1.5;const d=Math.min(1,this.hitFlash/.25),f=this.healthRatio<.3?(.5+.5*Math.sin(this.time*9))*(1-this.healthRatio/.3)*.6:0;h.uRimColor.value.copy(ql).lerp(M0,Math.max(d,f)),h.uRimStrength.value=.75+d*1.2;const u=this.invulnerable>0&&this.hitFlash<=0&&!this.isDashing?.65+.35*Math.sin(this.time*40):1;this.membraneMaterial.opacity=js*u;const g=1+this.engulfPulse*.12;this.membrane.scale.copy(ss).multiplyScalar(g),this.nucleus.rotation.y=Math.sin(this.time*.8)*.18,this.nucleus.position.y=.12+Math.sin(this.time*2.1)*.03,this.updateGranules(this.time,0),this.updateDecals()}updateGranules(t,e){const n=this.granuleDummy;for(let i=0;i<fa;i+=1){const r=this.granuleData[i];n.position.copy(r.home),n.position.x+=Math.sin(t*r.speed+r.phase)*.07,n.position.y+=Math.cos(t*r.speed*1.3+r.phase)*.05,n.position.z+=Math.sin(t*r.speed*.7+r.phase*2)*.07,e>0&&n.position.addScaledVector(r.burst,e*4.6),n.scale.setScalar(1+e*1.4),n.updateMatrix(),this.granules.setMatrixAt(i,n.matrix)}this.granules.instanceMatrix.needsUpdate=!0}updateDecals(){const t=this.group.position,e=ee(t.x,t.z);pr(t.x,t.z,Js),this.aura.position.set(t.x,e+.1,t.z),this.aura.quaternion.setFromUnitVectors(pa,Js),this.auraMaterial.color.setHex(this.hitFlash>0?16734842:9434111),this.auraMaterial.opacity=.42+Math.sin(this.time*4)*.08;const n=t.x+this.facing.x*3.1,i=t.z+this.facing.z*3.1;pr(n,i,Js),this.chevron.position.set(n,ee(n,i)+.12,i),Zs.setFromUnitVectors(pa,Js);const r=Math.atan2(this.facing.x,-this.facing.z);$l.setFromAxisAngle(pa,-r),this.chevron.quaternion.copy(Zs).multiply($l),this.chevronMaterial.opacity=this.cooldown>0?.45:.85}beginDeathBurst(){this.dying||(this.dying=!0,this.deathTimer=0,this.velocity.set(0,0,0),this.decals.visible=!1)}updateDeath(t){this.deathTimer+=t;const e=Math.min(1,this.deathTimer/this.deathDuration),n=1-Math.pow(1-e,3);this.membrane.scale.copy(ss).multiplyScalar(1+n*2.2),this.membraneMaterial.opacity=Math.max(0,js*(1-e)),this.cytoplasmMaterial.opacity=Math.max(0,.16*(1-e)),this.nucleus.scale.setScalar(1+n*1.1),this.nucleus.rotation.y+=t*4,this.nucleusMaterial.opacity=Math.max(0,1-e*1.1),this.granuleMaterial.opacity=Math.max(0,.95*(1-e*.9)),this.updateGranules(this.time,n),this.membraneMaterial.userData.uniforms.uTime.value=this.time,e>=1&&(this.group.visible=!1)}deathFinished(){return this.dying&&this.deathTimer>=this.deathDuration}getMuzzleWorldPosition(t){return this.muzzle.getWorldPosition(t)}}const br=new T(0,1,0),mr=new Vt,w0=new Be,Kl=new T,Ye=new T;function be(s,t,{position:e=[0,0,0],quaternion:n=null,rotation:i=null,scale:r=[1,1,1]}={}){const a=s.index?s.toNonIndexed():s,o=n||(i?w0.setFromEuler(new Ge(...i)):new Be);mr.compose(new T(...e),o,new T(...r)),a.applyMatrix4(mr);const l=new pt(t),c=a.attributes.position.count,h=new Float32Array(c*3);for(let d=0;d<c;d+=1)h[d*3]=l.r,h[d*3+1]=l.g,h[d*3+2]=l.b;return a.setAttribute("color",new Qt(h,3)),a}function Zc(s,t,e,n=0){const i=s.attributes.position;for(let r=0;r<i.count;r+=1){const a=i.getX(r),o=i.getY(r),l=i.getZ(r),c=1+Math.sin(a*e+n)*Math.cos(l*e*1.3+n)*t+Math.sin(o*e*1.7+n*2)*t*.6;i.setXYZ(r,a*c,o*c,l*c)}return s.computeVertexNormals(),s}function La(s){const t=[],e=Math.PI*(3-Math.sqrt(5));for(let n=0;n<s;n+=1){const i=1-n/(s-1)*2,r=Math.sqrt(1-i*i),a=e*n;t.push(new T(Math.cos(a)*r,i,Math.sin(a)*r))}return t}function T0(s,t){const e=new Be().setFromUnitVectors(br,t);return[[new Ui(.07,.36,3,8),16773371,[0,.2,0],[0,0,0]],[new Ui(.06,.32,3,8),16769268,[.13,.54,0],[0,0,-.62]],[new Ui(.06,.32,3,8),16769268,[-.13,.54,0],[0,0,.62]],[new Ve(.075,10,8),16752352,[.25,.7,0],[0,0,0]],[new Ve(.075,10,8),16752352,[-.25,.7,0],[0,0,0]]].map(([i,r,a,o])=>{const l=be(i,r,{position:a,rotation:o});return mr.compose(s,e,new T(1,1,1)),l.applyMatrix4(mr),l})}function E0(){const s=[be(Zc(new Sn(.34,2),.12,6),16761834)];for(const t of La(7))s.push(...T0(t.clone().multiplyScalar(1.05),t.clone().negate()));for(const t of La(4))s.push(be(new Sn(.16,1),16756964,{position:t.multiplyScalar(1.25).toArray()}));return Mn(s)}function A0(s){const t=()=>new zi([[0,-.05],[.22,-.07],[.4,-.06],[.46,0],[.4,.06],[.22,.07],[0,.05]].map(([i,r])=>new Y(i,r)),14),e=[],n=[];for(let i=0;i<7;i+=1){const r=[(s()-.5)*1.5,(s()-.5)*.8,(s()-.5)*1.5];n.push(new T(...r));const a=[s()*Math.PI,s()*Math.PI,s()*Math.PI];e.push(be(t(),i%2?15970381:16761963,{position:r,rotation:a}));for(let o=0;o<3;o+=1){const l=new T(s()-.5,s()-.5,s()-.5).normalize(),c=new Be().setFromUnitVectors(br,l),h=new T(...r).addScaledVector(l,.48);e.push(be(new gs(.05,.36,5),16766346,{position:h.toArray(),quaternion:c}))}}for(let i=0;i<5;i+=1){const r=n[i%n.length],a=n[(i+3)%n.length],o=r.clone().lerp(a,.5).add(new T(0,.35,0)),l=new Zn([r.clone().multiplyScalar(1.3),o,a.clone().multiplyScalar(1.3)]);e.push(be(new In(l,14,.03,4,!1),16246438))}return Mn(e)}function C0(s){const t=[];for(let n=0;n<6;n+=1){const i=n%2?new Xa(.38):new qa(.44),r=[(s()-.5)*1.2,(s()-.5)*.9,(s()-.5)*1.2],a=[.6+s()*.6,.9+s()*.9,.5+s()*.5];t.push(be(i,n%3?16762426:16769162,{position:r,rotation:[s()*Math.PI,s()*Math.PI,s()*Math.PI],scale:a}));const o=new T(...r).add(new T(s()-.5,s()-.5,s()-.5).multiplyScalar(.5));t.push(be(new Sn(.08,1),16774850,{position:o.toArray()}))}const e=Mn(t);return e.computeVertexNormals(),e}function R0(s){const t=[],e=new Ve(.17,10,8);for(let n=0;n<9;n+=1){const i=new T(s()-.5,(s()-.5)*.8,s()-.5).normalize().multiplyScalar(.25+s()*.7),r=s()*Math.PI*2;for(let a=0;a<3;a+=1){const o=r+a/3*Math.PI*2,l=i.clone().add(new T(Math.cos(o)*.17,(s()-.5)*.08,Math.sin(o)*.17));t.push(be(e.clone(),a===0?16743096:16731546,{position:l.toArray()}))}}return Mn(t)}function P0(){const s=Zc(new Ve(1,30,18),.07,4.5,1.3),t=[be(s,11883959,{scale:[.85,.5,1.9]})];t.push(be(new Ve(.5,18,12),7023242,{position:[0,.2,.1],scale:[1.05,.62,1.45]}));const e=[[.25,0,1.6,.18,1.6,-.25],[-.3,0,1.5,.16,1.4,.3],[.75,-.05,.4,.12,1.2,-1.2],[-.75,-.05,.2,.12,1.1,1.35],[0,-.05,-1.75,.13,1,Math.PI]];for(const[n,i,r,a,o,l]of e){const c=new T(Math.sin(l),0,Math.cos(l)),h=new Be().setFromUnitVectors(br,c),d=new T(n,i,r).addScaledVector(c,o*.35);t.push(be(new gs(a,o,7),12872400,{position:d.toArray(),quaternion:h}))}return Mn(t)}function L0(){const s=[];for(let e=0;e<12;e+=1){const n=e/12*Math.PI*2;s.push(be(new Ui(.09,.44,3,6),e%2?6285567:10353663,{position:[Math.cos(n)*.5,0,Math.sin(n)*.5],rotation:[Math.sin(n)*.25,0,-Math.cos(n)*.25]}))}for(let e=0;e<4;e+=1){const n=.4+e*.35;s.push(be(new Sn(.15,1),13237759,{position:[Math.cos(n)*.72,.28,Math.sin(n)*.72]}))}s.push(be(new Sn(.26,1),15794175));const t=La(10);for(const e of t){const n=new Be().setFromUnitVectors(br,e);s.push(be(new gs(.06,.3,5),15269887,{position:e.clone().multiplyScalar(.3).toArray(),quaternion:n}))}return Mn(s)}const D0={complex:.3,platelet:.22,debris:.32,cytokine:.5,synoviocyte:.18,complement:.65};function I0({dotTexture:s,netTexture:t}){const e=ri(31337),n={complex:E0(),platelet:A0(e),debris:C0(e),cytokine:R0(e),synoviocyte:P0(),complement:L0()},i={};for(const[o,l]of Object.entries(Mr)){const c=Dn(new Se({vertexColors:!0,roughness:o==="debris"?.55:.32,metalness:0,emissive:l.glow,emissiveIntensity:D0[o],flatShading:o==="debris"}),{color:l.glow,power:2,strength:.9}),h=new ti({map:s,color:l.glow,transparent:!0,opacity:.5,depthWrite:!1,blending:Ce});i[o]={geometry:n[o],material:c,halo:h}}const r=["TNF","IL-6","IL-1β"].map(o=>new ti({map:e0(o),transparent:!0,opacity:.9,depthWrite:!1})),a=new ti({map:t,color:14285823,transparent:!0,opacity:.75,depthWrite:!1,blending:Ce});return{kinds:i,labels:r,partialNet:a}}class U0{constructor(t,e,n,i){this.kind=t,this.def=Mr[t],this.wave=n,this.radius=this.def.radius,this.hp=this.def.hp,this.speed=(1.2+n*.15+Math.random()*.7)*this.def.speedScale,this.phase=Math.random()*Math.PI*2,this.wobbleFrequency=.6+Math.random()*.6,this.age=0,this.state="active",this.stateTimer=0,this.destroyed=!1,this.punch=0,this.slowed=1,this.engulfTarget=null,this.separation=new T,this.heading=new T;const r=i.kinds[t];if(this.group=new tn,this.group.name=`target-${t}`,this.body=new $t(r.geometry,r.material),this.body.castShadow=!0,this.group.add(this.body),this.halo=new Ii(r.halo),this.halo.scale.setScalar(this.radius*3.4),this.halo.renderOrder=7,this.group.add(this.halo),t==="cytokine"){const c=new Ii(i.labels[Math.floor(Math.random()*i.labels.length)]);c.scale.set(2.3,.86,1),c.position.y=1.75,c.renderOrder=13,this.label=c,this.group.add(c)}this.partialNetMaterial=i.partialNet,this.netOverlay=null;const a=1.6,o=e.x+(Math.random()-.5)*a*2,l=e.z+(Math.random()-.5)*a*2;this.group.position.set(o,ee(o,l)-.6,l),this.group.rotation.y=Math.random()*Math.PI*2,this.group.scale.setScalar(.01)}get active(){return this.state==="active"}get captured(){return this.state==="captured"}get position(){return this.group.position}horizontalDistanceTo(t){return Math.hypot(this.group.position.x-t.x,this.group.position.z-t.z)}hit(){return this.active?(this.hp-=1,this.punch=1,this.hp>0?(this.slowed=.55,this.netOverlay||(this.netOverlay=new Ii(this.partialNetMaterial),this.netOverlay.scale.setScalar(this.radius*2.8),this.netOverlay.renderOrder=12,this.group.add(this.netOverlay)),"damaged"):(this.state="captured",this.stateTimer=0,"captured")):null}engulf(t){return this.active?(this.state="engulfed",this.stateTimer=0,this.engulfTarget=t,!0):!1}pop(){this.state="popped",this.stateTimer=0}update(t,e){this.age+=t,this.stateTimer+=t,this.punch=Math.max(0,this.punch-t*5);const n=this.group.position,i=Math.min(1,this.age/.6),r=(1-Math.pow(1-i,3))*(1+this.punch*.25);if(this.state==="captured"){const u=Math.max(.25,1-this.stateTimer*1.6);this.group.scale.setScalar(u),this.group.rotation.y+=t*9,this.stateTimer>=Oe.wrapDuration&&(this.destroyed=!0);return}if(this.state==="engulfed"){n.lerp(this.engulfTarget,1-Math.exp(-14*t)),this.group.scale.setScalar(Math.max(.05,1-this.stateTimer*3)),this.stateTimer>.32&&(this.destroyed=!0);return}if(this.state==="popped"){this.group.scale.setScalar(1+this.stateTimer*5),this.stateTimer>.12&&(this.destroyed=!0);return}const a=this.kind==="complement";a?(Ye.set(e.x-n.x,0,e.z-n.z),this.def.lifetime&&this.age>this.def.lifetime&&(this.pop(),this.expired=!0)):Ye.set(-n.x,0,-n.z),Ye.lengthSq()>1e-6&&Ye.normalize();const o=Math.sin(this.age*this.wobbleFrequency+this.phase)*(a?.25:.6);Kl.set(-Ye.z,0,Ye.x).multiplyScalar(o),Ye.add(Kl).add(this.separation),Ye.y=0,Ye.lengthSq()>1e-6&&Ye.normalize(),this.heading.lerp(Ye,1-Math.exp(-4*t)),this.slowed=Math.min(1,this.slowed+t*.08);const l=this.speed*this.slowed*Math.min(1,this.age/.6)*t;n.x+=this.heading.x*l,n.z+=this.heading.z*l;const c=ee(n.x,n.z),h=this.kind==="synoviocyte",d=h?0:Math.sin(this.age*2.1+this.phase)*.25,f=c+this.def.hover*(h?1:i)+d;if(n.y+=(f-n.y)*(1-Math.exp(-6*t)),h){let g=Math.atan2(this.heading.x,this.heading.z)-this.group.rotation.y;g=Math.atan2(Math.sin(g),Math.cos(g)),this.group.rotation.y+=g*(1-Math.exp(-5*t));const v=Math.sin(this.age*4+this.phase);this.group.scale.set(r*(1-v*.05),r,r*(1+v*.08))}else{this.group.rotation.y+=t*(.8+this.wave*.05),this.body.rotation.x=Math.sin(this.age*.9+this.phase)*.5;const u=a?1+Math.sin(this.age*9)*.08:1;this.group.scale.setScalar(r*u)}}escaped(){return!this.active||this.kind==="complement"?!1:Math.hypot(this.group.position.x,this.group.position.z)<se.escapeRadius}}class N0{constructor(t){this.assets=I0(t)}pickKind(t){const e=[];let n=0;for(const[r,a]of Object.entries(Mr)){if(a.minWave>t)continue;let o=a.weight;r==="complement"&&(o+=Math.max(0,t-2)*.25),r==="synoviocyte"&&(o+=Math.max(0,t-3)*.3),e.push([r,o]),n+=o}let i=Math.random()*n;for(const[r,a]of e)if(i-=a,i<=0)return r;return e[e.length-1][0]}create(t,e,n=this.pickKind(t)){return new U0(n,e,t,this.assets)}}const Qs={pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',soundOn:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',soundOff:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 9.5l5 5m0-5l-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',help:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.2 9a2.9 2.9 0 1 1 4.4 2.5c-.9.6-1.6 1.2-1.6 2.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="18" r="1.4"/></svg>'},jl={complex:{shape:"diamond",note:"ACPA / RF–antigen lattices. NET them or engulf by touch."},platelet:{shape:"disc",note:"NET-bound clots add extra NET burden."},debris:{shape:"diamond",note:"Citrullinated autoantigens. NET them or engulf by touch."},cytokine:{shape:"round",note:"TNF / IL-6 / IL-1β. Only NETs can trap them."},synoviocyte:{shape:"disc",note:"Pannus-forming FLS. Need two NET hits."},complement:{shape:"round",note:"C5a / MAC. Hunt you and burst on contact."}},F0={complex:"Immune complexes",platelet:"Platelets / microthrombi",debris:"Citrullinated debris",cytokine:"Cytokine clouds",synoviocyte:"Invasive synoviocytes",complement:"Complement bursts"},Qc=s=>`#${s.toString(16).padStart(6,"0")}`,$e=new T,ma=new T;function Jl(){return Object.entries(Mr).map(([s,t])=>{const e=Qc(t.color);return`<div class="legend-item">
        <span class="legend-swatch ${jl[s].shape}" style="color:${e};background:${e}"></span>
        <span><span class="legend-name">${F0[s]}</span><span class="legend-note">${jl[s].note}</span></span>
      </div>`}).join("")}function ga(s){const t=Math.max(0,Math.ceil(s)),e=Math.floor(t/60),n=t%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}class O0{constructor(t){this.handlers=t;const e=n=>document.getElementById(n);this.el={healthBar:e("healthBar"),inflammationBar:e("inflammationBar"),netBar:e("netBar"),healthValue:e("healthValue"),inflammationValue:e("inflammationValue"),netValue:e("netValue"),waveLabel:e("waveLabel"),clearedValue:e("clearedValue"),timeValue:e("timeValue"),scoreValue:e("scoreValue"),comboValue:e("comboValue"),burstFill:e("burstFill"),burstMeter:e("burstMeter"),burstButton:e("burstButton"),dashButton:e("dashButton"),warnings:e("warnings"),banner:e("banner"),toast:e("toast"),floaters:e("floaters"),indicators:e("indicators"),lockOn:e("lockOn"),damage:e("damageFx"),overlay:e("overlay"),card:e("card"),legend:e("legend"),legendBody:e("legendBody"),legendButton:e("legendButton"),muteButton:e("muteButton"),pauseButton:e("pauseButton"),hud:e("hud")},this.el.legendBody.innerHTML=Jl(),this.el.pauseButton.innerHTML=Qs.pause,this.el.legendButton.innerHTML=Qs.help,this.screen=null,this.returnTo="intro",this.cache={},this.damage=0,this.bannerTimer=0,this.toastTimer=0,this.floaterPool=[],this.indicatorPool=[],this.viewport={width:window.innerWidth,height:window.innerHeight};for(let n=0;n<18;n+=1){const i=document.createElement("span");i.className="floater",this.el.floaters.appendChild(i),this.floaterPool.push({node:i,active:!1,age:0,life:1,position:new T})}for(let n=0;n<10;n+=1){const i=document.createElement("span");i.className="indicator",i.innerHTML="<i></i>",this.el.indicators.appendChild(i),this.indicatorPool.push(i)}this.el.legendButton.addEventListener("click",()=>this.toggleLegend()),this.el.legend.addEventListener("click",n=>{(n.target.closest(".legend-close")||document.body.classList.contains("device-touch"))&&this.toggleLegend(!1)}),this.el.muteButton.addEventListener("click",()=>t.onToggleSound()),this.el.pauseButton.addEventListener("click",()=>t.onPause()),this.el.card.addEventListener("click",n=>{var r;const i=n.target.closest("[data-action]");i&&((r=t.onClick)==null||r.call(t),this.handleAction(i.dataset.action,i.dataset.value))})}setViewport(t,e){this.viewport.width=t,this.viewport.height=e}setDevice(t){const e=document.body;e.classList.toggle("device-touch",t==="touch"),e.classList.toggle("device-gamepad",t==="gamepad"),e.classList.toggle("device-desktop",t==="desktop")}setPlaying(t){document.body.classList.toggle("playing",t)}toggleLegend(t){const e=t??!document.body.classList.contains("legend-open");document.body.classList.toggle("legend-open",e),this.el.legendButton.setAttribute("aria-expanded",String(e))}setMuted(t){this.el.muteButton.innerHTML=t?Qs.soundOff:Qs.soundOn,this.el.muteButton.setAttribute("aria-label",t?"Unmute sound":"Mute sound"),this.el.muteButton.classList.toggle("off",t)}setMeter(t,e,n,i){const r=Math.round(n);this.cache[i]!==r&&(this.cache[i]=r,t.style.transform=`scaleX(${Math.max(0,Math.min(100,r))/100})`,e.textContent=String(r))}setText(t,e,n){this.cache[n]!==e&&(this.cache[n]=e,t.textContent=e)}update(t,e){const n=this.el;this.setMeter(n.healthBar,n.healthValue,e.health,"health"),this.setMeter(n.inflammationBar,n.inflammationValue,e.inflammation,"inflammation"),this.setMeter(n.netBar,n.netValue,e.netBurden,"net"),this.setText(n.waveLabel,`Wave ${e.wave}`,"wave"),this.setText(n.clearedValue,`Cleared ${e.cleared}/${Lt.winClears}`,"cleared"),this.setText(n.timeValue,ga(e.remainingSeconds),"time"),this.setText(n.scoreValue,e.score.toLocaleString(),"score");const i=e.multiplier>1?`×${e.multiplier.toFixed(1)} combo ${e.combo}`:"";this.setText(n.comboValue,i,"combo");const r=Math.round(e.burstCharge*100);if(this.cache.charge!==r){this.cache.charge=r,n.burstFill.style.transform=`scaleX(${r/100})`,n.burstButton.style.setProperty("--charge",`${r}%`);const c=r>=100;n.burstMeter.classList.toggle("ready",c),n.burstButton.classList.toggle("ready",c)}const a=e.dashReady;this.cache.dash!==a&&(this.cache.dash=a,n.dashButton.classList.toggle("cooling",!a));const o=[];e.netBurden>Lt.netOverloadThreshold&&o.push(["net","NET overload — webbing is damaging tissue"]),e.inflammation>82&&o.push(["inflammation","Inflammation critical"]),e.threat>.55&&o.push(["cartilage","Cartilage under attack"]),e.health<25&&o.push(["health","Neutrophil exhausted"]);const l=o.map(([c])=>c).join("|");this.cache.warnings!==l&&(this.cache.warnings=l,n.warnings.innerHTML=o.slice(0,2).map(([c,h])=>`<span class="warning ${c}">${h}</span>`).join("")),this.bannerTimer>0&&(this.bannerTimer-=t,this.bannerTimer<=0&&n.banner.classList.remove("show")),this.toastTimer>0&&(this.toastTimer-=t,this.toastTimer<=0&&n.toast.classList.remove("show")),this.damage=Math.max(0,this.damage-t*1.8),n.damage.style.opacity=this.damage.toFixed(3)}flashDamage(t=.6){this.damage=Math.min(1,Math.max(this.damage,t))}showBanner(t,e="",n=2.6){this.el.banner.innerHTML=`<strong>${t}</strong>${e?`<span>${e}</span>`:""}`,this.el.banner.classList.remove("show"),this.el.banner.offsetWidth,this.el.banner.classList.add("show"),this.bannerTimer=n}showToast(t,e=2.4){this.el.toast.textContent=t,this.el.toast.classList.add("show"),this.toastTimer=e}floater(t,e,n=""){const i=this.floaterPool.find(r=>!r.active)||this.floaterPool[0];i.active=!0,i.age=0,i.life=.95,i.position.copy(t),i.node.textContent=e,i.node.className=`floater show ${n}`}toScreen(t,e,n){return $e.copy(t).project(e),n.x=($e.x*.5+.5)*this.viewport.width,n.y=(-$e.y*.5+.5)*this.viewport.height,n.visible=$e.z>-1&&$e.z<1,n}updateWorldOverlays(t,e,{targets:n,lockTarget:i,showLock:r,cartilage:a}){const o={x:0,y:0,visible:!1};for(const u of this.floaterPool){if(!u.active)continue;if(u.age+=t,u.age>=u.life){u.active=!1,u.node.className="floater";continue}$e.copy(u.position),$e.y+=u.age*1.8,this.toScreen($e,e,o);const g=u.age/u.life;u.node.style.transform=`translate3d(${o.x}px, ${o.y}px, 0) translate(-50%, -50%) scale(${1+(1-g)*.25})`,u.node.style.opacity=String(1-g*g)}const l=this.el.lockOn;r&&i?(this.toScreen(i.position,e,o),l.style.transform=`translate3d(${o.x}px, ${o.y}px, 0) translate(-50%, -50%)`,l.classList.add("show")):l.classList.remove("show");const{width:c,height:h}=this.viewport;let d=0;const f=(u,g,v)=>{if(d>=this.indicatorPool.length)return;ma.copy(u).applyMatrix4(e.matrixWorldInverse),$e.copy(u).project(e);let m=$e.x,p=$e.y;ma.z>0&&(m=-m,p=-p);const M=.9;if(ma.z<0&&Math.abs(m)<=1&&Math.abs(p)<=1)return;const _=1/Math.max(Math.abs(m)/M,Math.abs(p)/(M-.04),1e-6),y=m*_,R=p*_,E=(y*.5+.5)*c,A=(-R*.5+.5)*h,P=Math.atan2(-R,y),b=this.indicatorPool[d];d+=1,b.className=`indicator show${v?" cartilage":""}`,b.style.setProperty("--c",g),b.style.transform=`translate3d(${E}px, ${A}px, 0) translate(-50%, -50%) rotate(${P}rad)`};a&&f(a,"#dff3ff",!0);for(const u of n)f(u.position,Qc(u.def.glow),!1);for(let u=d;u<this.indicatorPool.length;u+=1)this.indicatorPool[u].className!=="indicator"&&(this.indicatorPool[u].className="indicator")}clearWorldOverlays(){for(const t of this.floaterPool)t.active=!1,t.node.className="floater";for(const t of this.indicatorPool)t.className="indicator";this.el.lockOn.classList.remove("show"),this.el.banner.classList.remove("show"),this.bannerTimer=0}get overlayOpen(){return this.screen!==null}handleAction(t,e){const n=this.handlers;switch(t){case"start":n.onStart();break;case"resume":n.onResume();break;case"restart":n.onRestart();break;case"menu":n.onMenu();break;case"howto":this.returnTo=this.screen==="pause"?"pause":this.screen==="over"?"over":"intro",this.returnData=this.lastData,this.show("howto");break;case"settings":this.returnTo=this.screen==="pause"?"pause":"intro",this.returnData=this.lastData,this.show("settings");break;case"back":this.show(this.returnTo,this.returnData);break;case"quality":n.onQuality(e),this.show("settings");break;case"sound":n.onToggleSound(),this.show("settings");break;case"shake":n.onToggleShake(),this.show("settings");break;case"fullscreen":n.onFullscreen();break}}controlsHtml(){return`<div class="control-grid">
      <div class="control-block">
        <strong>Keyboard &amp; mouse</strong>
        <span><kbd>W A S D</kbd> / arrows move</span>
        <span>Mouse aims · click / hold or <kbd>Space</kbd> fires</span>
        <span><kbd>Shift</kbd> dash · <kbd>E</kbd> or right-click NET burst</span>
        <span><kbd>Esc</kbd> pause · <kbd>M</kbd> mute</span>
      </div>
      <div class="control-block">
        <strong>Touch</strong>
        <span>Left thumb: drag anywhere to move</span>
        <span>Hold <b>NET</b> to fire (auto-aims)</span>
        <span>Tap a target to shoot it</span>
        <span><b>Dash</b> and <b>Burst</b> buttons</span>
      </div>
      <div class="control-block">
        <strong>Gamepad</strong>
        <span>Left stick move</span>
        <span>Right stick aim &amp; fire · RT fire</span>
        <span>B / LB dash · Y / RB burst</span>
        <span>Start pause</span>
      </div>
    </div>`}show(t,e={}){this.screen=t,this.lastData=e;const n=this.el.card,i=this.handlers.getSettings();let r="";if(t==="intro")r=`
        <p class="eyebrow">Rheumatoid arthritis · innate immunity</p>
        <h1>RA Synovium <span>NET Shooter</span></h1>
        <p class="lead">Guide an activated neutrophil through inflamed rheumatoid synovium and stop inflammatory stimuli before they reach the articular cartilage at the centre.</p>
        <p>Each NET traps targets but leaves chromatin webbing behind — too much NET burden damages the tissue. Engulf small particles by touch when you can.</p>
        <div class="actions">
          <button class="btn primary" data-action="start" autofocus>Start</button>
          <button class="btn" data-action="howto">How to play</button>
          <button class="btn" data-action="settings">Settings</button>
        </div>
        ${this.controlsHtml()}
        <p class="meta">${i.best>0?`Best score <b>${i.best.toLocaleString()}</b> · `:""}Educational arcade model — simplified biology, not a clinical simulation.</p>`;else if(t==="howto")r=`
        <h2>How to play</h2>
        <div class="howto-grid">
          <div><b class="c-health">Neutrophil health</b> drops from complement bursts, invasive synoviocytes, engulfing particles and NET overload. It recovers slowly when you avoid damage.</div>
          <div><b class="c-inflammation">Inflammation</b> rises over time and whenever a stimulus reaches the cartilage. Every capture lowers it.</div>
          <div><b class="c-net">NET tissue damage</b> rises with every NET released. Above ${Lt.netOverloadThreshold} it harms you and the tissue — aim carefully.</div>
          <div><b>Win</b> by stabilising the synovium for ${ga(Lt.stabiliseSeconds)} or clearing ${Lt.winClears} stimuli. Lose if health hits 0 or another meter maxes out.</div>
          <div><b>Combo</b> captures in quick succession for a score multiplier. Each capture charges the radial <b>NET burst</b>.</div>
          <div><b>Phagocytosis</b>: touch immune complexes or debris to engulf them without releasing a NET.</div>
        </div>
        <h3>Targets</h3>
        <div class="legend-list">${Jl()}</div>
        <div class="actions sticky"><button class="btn primary" data-action="back" autofocus>Back</button></div>`;else if(t==="settings"){const o=["auto","high","medium","low"].map(l=>`<button class="seg ${i.quality===l?"on":""}" data-action="quality" data-value="${l}">${l[0].toUpperCase()}${l.slice(1)}</button>`).join("");r=`
        <h2>Settings</h2>
        <div class="setting"><span>Graphics<small>${i.quality==="auto"?`Auto (currently ${i.effectiveQuality})`:"Manual"}</small></span><div class="segmented">${o}</div></div>
        <div class="setting"><span>Sound</span><button class="seg on-off ${i.sound?"on":""}" data-action="sound">${i.sound?"On":"Off"}</button></div>
        <div class="setting"><span>Screen shake</span><button class="seg on-off ${i.shake?"on":""}" data-action="shake">${i.shake?"On":"Off"}</button></div>
        ${i.fullscreenAvailable?`<div class="setting"><span>Fullscreen</span><button class="seg on-off ${i.fullscreen?"on":""}" data-action="fullscreen">${i.fullscreen?"On":"Off"}</button></div>`:""}
        <div class="actions"><button class="btn primary" data-action="back" autofocus>Back</button></div>`}else if(t==="pause")r=`
        <h2>Paused</h2>
        <div class="actions vertical">
          <button class="btn primary" data-action="resume" autofocus>Resume</button>
          <button class="btn" data-action="restart">Restart</button>
          <button class="btn" data-action="howto">How to play</button>
          <button class="btn" data-action="settings">Settings</button>
          <button class="btn ghost" data-action="menu">Main menu</button>
        </div>`;else if(t==="over"){const o=e.stats||{};r=`
        <p class="eyebrow ${e.won?"good":"bad"}">${e.won?"Victory":"Game over"}</p>
        <h2>${e.title}</h2>
        <p class="lead">${e.text}</p>
        <div class="stats-grid">
          <div><span>Score</span><b>${(o.score||0).toLocaleString()}</b></div>
          <div><span>Best</span><b>${(o.best||0).toLocaleString()}${o.newBest?" <em>new!</em>":""}</b></div>
          <div><span>Cleared</span><b>${o.cleared||0}</b></div>
          <div><span>Wave</span><b>${o.wave||1}</b></div>
          <div><span>NET accuracy</span><b>${o.accuracy??0}%</b></div>
          <div><span>Engulfed</span><b>${o.engulfed||0}</b></div>
          <div><span>Best combo</span><b>${o.bestCombo||0}</b></div>
          <div><span>Time</span><b>${ga(o.time||0)}</b></div>
        </div>
        <div class="actions">
          <button class="btn primary" data-action="restart" autofocus>Play again</button>
          <button class="btn" data-action="howto">How to play</button>
          <button class="btn ghost" data-action="menu">Main menu</button>
        </div>
        <p class="fact"><b>Did you know?</b> ${e.fact}</p>`}n.innerHTML=r,n.dataset.screen=t,this.el.overlay.classList.add("show"),this.el.overlay.setAttribute("aria-hidden","false");const a=n.querySelector("[autofocus]");a&&!document.body.classList.contains("device-touch")&&a.focus({preventScroll:!0}),n.scrollTop=0}hideOverlay(){this.screen=null,this.el.overlay.classList.remove("show"),this.el.overlay.setAttribute("aria-hidden","true"),document.activeElement instanceof HTMLElement&&this.el.overlay.contains(document.activeElement)&&document.activeElement.blur()}}const Zl={KeyW:[0,-1],ArrowUp:[0,-1],KeyS:[0,1],ArrowDown:[0,1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]},B0={ShiftLeft:"dash",ShiftRight:"dash",KeyE:"burst",KeyQ:"burst",Escape:"pause",KeyP:"pause",KeyM:"mute",KeyR:"restart",Enter:"confirm"},va=58,z0=.18,k0=4;function _a(s,t){try{s.setPointerCapture(t)}catch{}}function H0(s){return s instanceof HTMLElement&&!!s.closest("button, input, select, textarea, a")}class V0{constructor({canvas:t,touch:e,onAction:n,onDeviceChange:i}){this.canvas=t,this.touch=e,this.onAction=n,this.onDeviceChange=i,this.keys=new Set,this.pointer=new Y,this.hasMouseAim=!1,this.pointerKind=window.matchMedia("(pointer: coarse)").matches?"touch":null,this.mouseFiring=!1,this.keyFiring=!1,this.touchFiring=!1,this.padFiring=!1,this.padMove=new Y,this.padAim=new Y,this.padLastUsed=-1/0,this.padPrevious=[],this.taps=[],this.joystick={pointerId:null,origin:new Y,vector:new Y},this.firePointer=null,this.bindKeyboard(),this.bindPointer(),this.bindTouchButtons(),window.addEventListener("blur",()=>this.releaseAll()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.releaseAll()})}get padActive(){return performance.now()/1e3-this.padLastUsed<k0}get device(){return this.padActive?"gamepad":this.pointerKind==="touch"?"touch":"desktop"}setPointerKind(t){var e;this.pointerKind!==t&&(this.pointerKind=t,(e=this.onDeviceChange)==null||e.call(this))}bindKeyboard(){window.addEventListener("keydown",t=>{const e=H0(t.target);if(Zl[t.code]){this.keys.add(t.code),e||t.preventDefault();return}if(t.code==="Space"){if(e)return;t.preventDefault(),this.keyFiring=!0;return}const n=B0[t.code];!n||t.repeat||e&&(n==="confirm"||n==="restart")||this.onAction(n,t)}),window.addEventListener("keyup",t=>{this.keys.delete(t.code),t.code==="Space"&&(this.keyFiring=!1)})}bindPointer(){const t=this.canvas;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{if(n.pointerType==="touch"){n.preventDefault(),this.setPointerKind("touch"),n.clientX<window.innerWidth*.5&&this.joystick.pointerId===null?this.startJoystick(n):this.taps.push({x:n.clientX,y:n.clientY});return}this.setPointerKind("mouse"),this.updatePointer(n),n.button===0?(this.mouseFiring=!0,_a(t,n.pointerId)):n.button===2&&this.onAction("burst",n)}),t.addEventListener("pointermove",n=>{if(n.pointerType==="touch"){n.pointerId===this.joystick.pointerId&&this.moveJoystick(n);return}this.pointerKind!=="mouse"&&this.setPointerKind("mouse"),this.updatePointer(n)});const e=n=>{if(n.pointerType==="touch"){n.pointerId===this.joystick.pointerId&&this.endJoystick();return}(n.button===0||n.type==="pointercancel")&&(this.mouseFiring=!1)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("lostpointercapture",n=>{n.pointerType!=="touch"&&(this.mouseFiring=!1)})}bindTouchButtons(){const{fire:t,dash:e,burst:n}=this.touch,i=(r,a,o)=>{r.addEventListener("pointerdown",c=>{c.preventDefault(),c.stopPropagation(),this.setPointerKind(c.pointerType==="mouse"?"mouse":"touch"),_a(r,c.pointerId),r.classList.add("pressed"),a(c)});const l=c=>{r.classList.remove("pressed"),o==null||o(c)};r.addEventListener("pointerup",l),r.addEventListener("pointercancel",l),r.addEventListener("lostpointercapture",l),r.addEventListener("contextmenu",c=>c.preventDefault())};i(t,r=>{this.firePointer=r.pointerId,this.touchFiring=!0},r=>{r.pointerId===this.firePointer&&(this.firePointer=null,this.touchFiring=!1)}),i(e,r=>this.onAction("dash",r)),i(n,r=>this.onAction("burst",r))}startJoystick(t){const{joystick:e,knob:n}=this.touch;this.joystick.pointerId=t.pointerId,this.joystick.origin.set(t.clientX,t.clientY),this.joystick.vector.set(0,0),_a(this.canvas,t.pointerId),e.style.transform=`translate3d(${t.clientX}px, ${t.clientY}px, 0)`,n.style.transform="translate3d(0px, 0px, 0)",e.classList.add("active")}moveJoystick(t){const e=this.joystick;let n=t.clientX-e.origin.x,i=t.clientY-e.origin.y,r=Math.hypot(n,i);const a=va*1.25;if(r>a){const f=r-a;e.origin.x+=n/r*f,e.origin.y+=i/r*f,n=t.clientX-e.origin.x,i=t.clientY-e.origin.y,r=a,this.touch.joystick.style.transform=`translate3d(${e.origin.x}px, ${e.origin.y}px, 0)`}const o=Math.min(r,va),l=r>0?n/r:0,c=r>0?i/r:0,h=o/va,d=h<.12?0:(h-.12)/.88;e.vector.set(l*d,c*d),this.touch.knob.style.transform=`translate3d(${l*o}px, ${c*o}px, 0)`}endJoystick(){this.joystick.pointerId=null,this.joystick.vector.set(0,0),this.touch.joystick.classList.remove("active"),this.touch.knob.style.transform="translate3d(0px, 0px, 0)"}updatePointer(t){this.pointer.set(t.clientX,t.clientY),this.hasMouseAim=!0}releaseAll(){this.keys.clear(),this.mouseFiring=!1,this.keyFiring=!1,this.touchFiring=!1,this.firePointer=null,this.taps.length=0,this.joystick.pointerId!==null&&this.endJoystick();for(const t of[this.touch.fire,this.touch.dash,this.touch.burst])t.classList.remove("pressed")}pollGamepad(){var o;const t=navigator.getGamepads?navigator.getGamepads():[];let e=null;for(const l of t)if(l&&l.connected){e=l;break}if(!e){this.padMove.set(0,0),this.padAim.set(0,0),this.padFiring=!1;return}const n=l=>{const c=e.axes[l]||0;return Math.abs(c)<z0?0:c};this.padMove.set(n(0),n(1)),this.padAim.set(n(2),n(3)),this.padMove.lengthSq()>1&&this.padMove.normalize();const i=l=>!!(e.buttons[l]&&e.buttons[l].pressed);if(e.buttons.some(l=>l&&l.pressed)||this.padMove.lengthSq()>0||this.padAim.lengthSq()>0){const l=this.padActive;this.padLastUsed=performance.now()/1e3,l||(o=this.onDeviceChange)==null||o.call(this)}this.padFiring=i(7)||i(6)||this.padAim.length()>.55;const a=[[0,"confirm"],[1,"dash"],[4,"dash"],[3,"burst"],[5,"burst"],[9,"pause"],[8,"pause"]];for(const[l,c]of a){const h=i(l);h&&!this.padPrevious[l]&&this.onAction(c,null),this.padPrevious[l]=h}}getMove(t){t.set(0,0);for(const e of this.keys){const n=Zl[e];n&&(t.x+=n[0],t.y+=n[1])}return t.lengthSq()>1&&t.normalize(),t.add(this.joystick.vector).add(this.padMove),t.lengthSq()>1&&t.normalize(),t}get firing(){return this.mouseFiring||this.keyFiring||this.touchFiring||this.padFiring}consumeTaps(){if(this.taps.length===0)return null;const t=this.taps.slice();return this.taps.length=0,t}}class G0{constructor(t=!0){this.enabled=t,this.ctx=null,this.master=null,this.noiseBuffer=null}unlock(){const t=window.AudioContext||window.webkitAudioContext;if(t)try{if(!this.ctx){this.ctx=new t;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-18,e.ratio.value=6,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.55:0,this.master.connect(e),e.connect(this.ctx.destination);const n=Math.floor(this.ctx.sampleRate*.6);this.noiseBuffer=this.ctx.createBuffer(1,n,this.ctx.sampleRate);const i=this.noiseBuffer.getChannelData(0);for(let r=0;r<n;r+=1)i[r]=Math.random()*2-1}this.ctx.state==="suspended"&&this.ctx.resume()}catch{this.ctx=null}}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setEnabled(t){this.enabled=t,this.master&&this.ctx&&this.master.gain.setTargetAtTime(t?.55:0,this.ctx.currentTime,.03)}get ready(){return!!(this.ctx&&this.enabled&&this.ctx.state==="running")}tone({type:t="sine",freq:e=440,to:n=null,duration:i=.2,gain:r=.2,attack:a=.005,delay:o=0}){if(!this.ready)return;const l=this.ctx.currentTime+o,c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type=t,c.frequency.setValueAtTime(e,l),n&&c.frequency.exponentialRampToValueAtTime(Math.max(20,n),l+i),h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(r,l+a),h.gain.exponentialRampToValueAtTime(1e-4,l+i),c.connect(h),h.connect(this.master),c.start(l),c.stop(l+i+.02)}noise({duration:t=.2,gain:e=.15,filter:n="bandpass",freq:i=1200,to:r=null,q:a=1,delay:o=0}){if(!this.ready)return;const l=this.ctx.currentTime+o,c=this.ctx.createBufferSource();c.buffer=this.noiseBuffer;const h=this.ctx.createBiquadFilter();h.type=n,h.Q.value=a,h.frequency.setValueAtTime(i,l),r&&h.frequency.exponentialRampToValueAtTime(Math.max(20,r),l+t);const d=this.ctx.createGain();d.gain.setValueAtTime(1e-4,l),d.gain.exponentialRampToValueAtTime(e,l+.01),d.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h),h.connect(d),d.connect(this.master),c.start(l),c.stop(l+t+.02)}fire(){this.noise({duration:.16,gain:.12,freq:2600,to:700,q:1.4}),this.tone({type:"triangle",freq:620,to:1180,duration:.1,gain:.06})}capture(t=0){const e=520*Math.pow(2,Math.min(t,12)/12);this.tone({type:"sine",freq:e,duration:.18,gain:.14}),this.tone({type:"sine",freq:e*1.5,duration:.22,gain:.08,delay:.05})}engulf(){this.tone({type:"sine",freq:300,to:110,duration:.24,gain:.2}),this.noise({duration:.18,gain:.05,filter:"lowpass",freq:900,to:200})}hitTough(){this.tone({type:"square",freq:220,to:160,duration:.09,gain:.05})}hurt(){this.tone({type:"sawtooth",freq:140,to:60,duration:.3,gain:.16}),this.noise({duration:.22,gain:.12,filter:"lowpass",freq:1400,to:200})}escape(){this.tone({type:"sawtooth",freq:180,to:120,duration:.35,gain:.08}),this.tone({type:"sawtooth",freq:190,to:127,duration:.35,gain:.08})}dash(){this.noise({duration:.22,gain:.1,freq:600,to:2400,q:.8})}burst(){this.tone({type:"sine",freq:90,to:40,duration:.6,gain:.32}),this.noise({duration:.55,gain:.18,freq:3e3,to:300,q:.7}),this.tone({type:"triangle",freq:440,to:1760,duration:.4,gain:.06})}wave(){[523.25,659.25,783.99,1046.5].forEach((t,e)=>this.tone({type:"triangle",freq:t,duration:.32,gain:.08,delay:e*.09}))}win(){[523.25,659.25,783.99,1046.5,1318.5].forEach((t,e)=>this.tone({type:"triangle",freq:t,duration:.6,gain:.09,delay:e*.12}))}lose(){[392,311.13,261.63,196].forEach((t,e)=>this.tone({type:"sawtooth",freq:t,duration:.5,gain:.06,delay:e*.16}))}click(){this.tone({type:"triangle",freq:880,duration:.05,gain:.05})}heartbeat(t){const e=.05+t/100*.09;this.tone({type:"sine",freq:62,to:40,duration:.18,gain:e}),this.tone({type:"sine",freq:55,to:38,duration:.16,gain:e*.7,delay:.17})}}const th={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Gi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const W0=new za(-1,1,1,-1,0,1);class X0 extends he{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}}const q0=new X0;class $a{constructor(t){this._mesh=new $t(q0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,W0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Y0 extends Gi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fs.clone(t.uniforms),this.material=new ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new $a(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ql extends Gi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class $0 extends Gi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class K0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Y);this._width=n.width,this._height=n.height,e=new He(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_n}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Y0(th),this.copyPass.material.blending=vn,this.clock=new Yc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ql!==void 0&&(a instanceof Ql?n=!0:a instanceof $0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Y);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class j0 extends Gi{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const J0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ki extends Gi{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Y(t.x,t.y):new Y(256,256),this.clearColor=new pt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new He(r,a,{type:_n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new He(r,a,{type:_n});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const u=new He(r,a,{type:_n});u.texture.name="UnrealBloomPass.v"+d,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=J0;this.highPassUniforms=fs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ge({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Y(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=th;this.copyUniforms=fs.clone(h.uniforms),this.blendMaterial=new ge({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ce,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new pt,this.oldClearAlpha=1,this.basic=new On,this.fsQuad=new $a(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Y(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ki.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ki.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Y(.5,.5)},direction:{value:new Y(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ki.BlurDirectionX=new Y(1,0);ki.BlurDirectionY=new Y(0,1);const Z0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Q0 extends Gi{constructor(){super();const t=Z0;this.uniforms=fs.clone(t.uniforms),this.material=new Gg({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new $a(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Xt.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ac?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===oc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===hc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ia&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class tv{constructor(t,e,n){this.renderer=t,this.scene=e,this.camera=n,this.enabled=!1,this.composer=null,this.samples=0}configure({bloom:t,msaa:e}){if(!!!t){this.enabled=!1;return}if(this.composer&&this.samples===e){this.enabled=!0,this.syncSize();return}this.disposeComposer();const i=this.renderer.getDrawingBufferSize(new Y),r=new He(i.x,i.y,{type:_n,samples:e});this.composer=new K0(this.renderer,r),this.samples=e,this.renderPass=new j0(this.scene,this.camera),this.bloomPass=new ki(new Y(i.x,i.y),.62,.55,.82),this.outputPass=new Q0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(this.outputPass),this.enabled=!0,this.syncSize()}setBloomStrength(t){this.bloomPass&&(this.bloomPass.strength=t)}syncSize(){if(!this.composer)return;const t=this.renderer.getSize(new Y);this.composer.setSize(t.x,t.y),this.composer.setPixelRatio(this.renderer.getPixelRatio())}render(t){this.enabled&&this.composer?this.composer.render(t):this.renderer.render(this.scene,this.camera)}disposeComposer(){var t,e;this.composer&&(this.bloomPass.dispose(),(e=(t=this.outputPass).dispose)==null||e.call(t),this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose(),this.composer=null,this.bloomPass=null,this.outputPass=null,this.renderPass=null)}}new T(0,1,0);const tr=new pt,gr=new T;class ev{constructor(t,e,n=1400){this.capacity=n,this.count=0,this.positions=new Float32Array(n*3),this.colors=new Float32Array(n*3),this.sizes=new Float32Array(n),this.alphas=new Float32Array(n),this.velocities=new Float32Array(n*3),this.life=new Float32Array(n),this.maxLife=new Float32Array(n),this.baseSize=new Float32Array(n),this.drag=new Float32Array(n),this.gravity=new Float32Array(n);const i=new he;this.positionAttr=new Qt(this.positions,3).setUsage(ys),this.colorAttr=new Qt(this.colors,3).setUsage(ys),this.sizeAttr=new Qt(this.sizes,1).setUsage(ys),this.alphaAttr=new Qt(this.alphas,1).setUsage(ys),i.setAttribute("position",this.positionAttr),i.setAttribute("color",this.colorAttr),i.setAttribute("size",this.sizeAttr),i.setAttribute("alpha",this.alphaAttr),i.setDrawRange(0,0),i.boundingSphere=new ii(new T,1e4),this.material=new ge({uniforms:{uMap:{value:e},uScale:{value:400}},vertexShader:`
        attribute float size;
        attribute float alpha;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float uScale;
        void main() {
          vColor = color;
          vAlpha = alpha;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * uScale / max(0.1, -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          gl_FragColor = vec4(vColor * 1.6, tex.a * vAlpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,transparent:!0,depthWrite:!1,blending:Ce}),this.points=new kc(i,this.material),this.points.frustumCulled=!1,this.points.renderOrder=10,t.add(this.points)}setViewport(t,e){this.material.uniforms.uScale.value=t/(2*Math.tan(Qn.degToRad(e)/2))}emit(t,e,{color:n=16777215,size:i=.4,life:r=.6,drag:a=2,gravity:o=0}={}){if(this.count>=this.capacity)return;const l=this.count;this.count+=1,this.positions[l*3]=t.x,this.positions[l*3+1]=t.y,this.positions[l*3+2]=t.z,this.velocities[l*3]=e.x,this.velocities[l*3+1]=e.y,this.velocities[l*3+2]=e.z,tr.set(n),this.colors[l*3]=tr.r,this.colors[l*3+1]=tr.g,this.colors[l*3+2]=tr.b,this.baseSize[l]=i,this.sizes[l]=i,this.alphas[l]=1,this.life[l]=r,this.maxLife[l]=r,this.drag[l]=a,this.gravity[l]=o}burst(t,{count:e=20,color:n=16777215,speed:i=6,size:r=.45,life:a=.7,spread:o=1,upward:l=.4,drag:c=3,gravity:h=-2}={}){const d=new T;for(let f=0;f<e;f+=1)d.set(Math.random()*2-1,(Math.random()*2-1)*o+l,Math.random()*2-1).normalize().multiplyScalar(i*(.35+Math.random()*.65)),this.emit(t,d,{color:n,size:r*(.6+Math.random()*.8),life:a*(.6+Math.random()*.6),drag:c,gravity:h})}clear(){this.count=0,this.points.geometry.setDrawRange(0,0)}copyParticle(t,e){for(let n=0;n<3;n+=1)this.positions[e*3+n]=this.positions[t*3+n],this.velocities[e*3+n]=this.velocities[t*3+n],this.colors[e*3+n]=this.colors[t*3+n];this.baseSize[e]=this.baseSize[t],this.sizes[e]=this.sizes[t],this.alphas[e]=this.alphas[t],this.life[e]=this.life[t],this.maxLife[e]=this.maxLife[t],this.drag[e]=this.drag[t],this.gravity[e]=this.gravity[t]}update(t){let e=0;for(;e<this.count;){if(this.life[e]-=t,this.life[e]<=0){this.count-=1,e!==this.count&&this.copyParticle(this.count,e);continue}const n=Math.exp(-this.drag[e]*t);this.velocities[e*3]*=n,this.velocities[e*3+1]=this.velocities[e*3+1]*n+this.gravity[e]*t,this.velocities[e*3+2]*=n,this.positions[e*3]+=this.velocities[e*3]*t,this.positions[e*3+1]+=this.velocities[e*3+1]*t,this.positions[e*3+2]+=this.velocities[e*3+2]*t;const i=this.life[e]/this.maxLife[e];this.alphas[e]=Math.min(1,i*1.6),this.sizes[e]=this.baseSize[e]*(.4+.6*i),e+=1}this.points.geometry.setDrawRange(0,this.count),this.count>0&&(this.positionAttr.needsUpdate=!0,this.colorAttr.needsUpdate=!0,this.sizeAttr.needsUpdate=!0,this.alphaAttr.needsUpdate=!0)}}class nv{constructor(t,e,n=14){this.items=[];const i=new yn(2,2);for(let r=0;r<n;r+=1){const a=new On({map:e,transparent:!0,depthWrite:!1,blending:Ce,color:16777215,polygonOffset:!0,polygonOffsetFactor:-4}),o=new $t(i,a);o.visible=!1,o.renderOrder=5,t.add(o),this.items.push({mesh:o,age:0,life:1,from:1,to:4,active:!1,opacity:1})}}spawn(t,{color:e=16777215,from:n=.5,to:i=5,life:r=.6,opacity:a=.9}={}){const o=this.items.find(c=>!c.active)||this.items[0];o.active=!0,o.age=0,o.life=r,o.from=n,o.to=i,o.opacity=a,o.mesh.visible=!0,o.mesh.material.color.set(e);const l=ee(t.x,t.z)+.12;o.mesh.position.set(t.x,l,t.z),pr(t.x,t.z,gr),o.mesh.quaternion.setFromUnitVectors(new T(0,0,1),gr),o.mesh.scale.setScalar(n)}update(t){for(const e of this.items){if(!e.active)continue;e.age+=t;const n=Math.min(1,e.age/e.life),i=1-Math.pow(1-n,3);e.mesh.scale.setScalar(e.from+(e.to-e.from)*i),e.mesh.material.opacity=e.opacity*(1-n),n>=1&&(e.active=!1,e.mesh.visible=!1)}}clear(){for(const t of this.items)t.active=!1,t.mesh.visible=!1}}class iv{constructor(t,e,n=26){this.items=[],this.cursor=0;const i=new yn(1,1);this.material=new On({map:e,transparent:!0,opacity:.4,depthWrite:!1,color:13235967,blending:Ce,polygonOffset:!0,polygonOffsetFactor:-2});for(let r=0;r<n;r+=1){const a=new $t(i,this.material);a.visible=!1,a.renderOrder=4,t.add(a),this.items.push(a)}}add(t,e=3){const n=this.items[this.cursor];this.cursor=(this.cursor+1)%this.items.length;const i=ee(t.x,t.z)+.08;n.position.set(t.x,i,t.z),pr(t.x,t.z,gr),n.quaternion.setFromUnitVectors(new T(0,0,1),gr),n.rotateZ(Math.random()*Math.PI*2),n.scale.setScalar(e*(.8+Math.random()*.5)),n.visible=!0}update(t){this.material.opacity=.12+t/100*.55}clear(){for(const t of this.items)t.visible=!1;this.cursor=0}}const eh="ra-net-shooter:";function er(s,t){try{const e=window.localStorage.getItem(eh+s);return e===null?t:JSON.parse(e)}catch{return t}}function nr(s,t){try{window.localStorage.setItem(eh+s,JSON.stringify(t))}catch{}}const sv=new T(0,16,21),tc=new T(-14,26,12),xa=new T(0,1,0),rv=new T(0,1.3,0),ir=new Y,Ma=new T,Re=new T,qn=new T,rs=new Y,sr={x:0,y:0,visible:!1};function ec(s){return 1+Math.min(3,Math.floor(Math.max(0,s-1)/4)*.5)}class av{constructor(t){this.host=t;const e=new URLSearchParams(window.location.search);this.debug=e.has("debug"),this.settings={quality:er("quality","auto"),sound:er("sound",!0),shake:er("shake",!0)},["auto",...ns].includes(this.settings.quality)||(this.settings.quality="auto");const n=e.get("quality");this.forcedQuality=ns.includes(n)?n:null,this.best=er("best",0),this.isTouchDevice=window.matchMedia("(pointer: coarse)").matches,this.renderer=new Tg({antialias:!0,powerPreference:"high-performance"}),this.renderer.toneMapping=Ia,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=sc,this.renderer.setSize(window.innerWidth,window.innerHeight),t.appendChild(this.renderer.domElement),this.renderer.domElement.addEventListener("webglcontextlost",r=>{r.preventDefault(),this.contextLost=!0}),this.renderer.domElement.addEventListener("webglcontextrestored",()=>{this.contextLost=!1,this.needsRender=!0}),this.scene=new Eg,this.camera=new Fe(55,window.innerWidth/window.innerHeight,.1,220),this.camera.position.set(0,24,40),this.cameraTarget=new T(0,0,0),this.raycaster=new Yg,this.aimPlane=new Ln(xa,0),this.aimPoint=new T,this.clock=new Yc,this.qualityName=this.resolveQuality();const i=Hl[this.qualityName];this.textures={dot:Zg(64),ring:Qg(128),net:Gl(256,99),residue:Gl(128,5),chevron:n0(128)},this.environment=new m0(this.scene,this.renderer,i),this.setupLights(),this.player=new b0({ringTexture:this.textures.ring,chevronTexture:this.textures.chevron}),this.scene.add(this.player.group,this.player.decals),this.targetFactory=new N0({dotTexture:this.textures.dot,netTexture:this.textures.net}),this.nets=new x0(this.scene,this.textures.net,this.textures.dot),this.particles=new ev(this.scene,this.textures.dot,1400),this.rings=new nv(this.scene,this.textures.ring),this.residue=new iv(this.scene,this.textures.residue),this.postfx=new tv(this.renderer,this.scene,this.camera),this.audio=new G0(this.settings.sound),this.targets=[],this.indicatorTargets=[],this.hud={},this.state="menu",this.lockTarget=null,this.aimMode="auto",this.pendingTap=null,this.shake=0,this.pulse=0,this.beatTimer=0,this.menuTime=0,this.toastCooldown=0,this.perf={frames:0,time:0,warmup:0},this.needsRender=!0,this.resetRun(),this.ui=new O0({onStart:()=>this.startGame(),onResume:()=>this.resume(),onRestart:()=>this.startGame(),onMenu:()=>this.toMenu(),onPause:()=>this.togglePause(),onToggleSound:()=>this.toggleSound(),onToggleShake:()=>{this.settings.shake=!this.settings.shake,nr("shake",this.settings.shake)},onQuality:r=>this.setQualitySetting(r),onFullscreen:()=>this.toggleFullscreen(),onClick:()=>{this.audio.unlock(),this.audio.click()},getSettings:()=>({quality:this.settings.quality,effectiveQuality:this.qualityName,sound:this.settings.sound,shake:this.settings.shake,best:this.best,fullscreenAvailable:!!(document.fullscreenEnabled||document.webkitFullscreenEnabled),fullscreen:!!(document.fullscreenElement||document.webkitFullscreenElement)})}),this.ui.setMuted(!this.settings.sound),this.input=new V0({canvas:this.renderer.domElement,touch:{joystick:document.getElementById("joystick"),knob:document.getElementById("joystickKnob"),fire:document.getElementById("fireButton"),dash:document.getElementById("dashButton"),burst:document.getElementById("burstButton")},onAction:r=>this.onAction(r),onDeviceChange:()=>this.ui.setDevice(this.input.device)}),this.ui.setDevice(this.input.device),!this.isTouchDevice&&window.innerWidth>1100&&this.ui.toggleLegend(!0),this.applyQuality(this.qualityName),this.prewarm(),this.bindWindowEvents(),this.debug&&(window.__game=this)}setupLights(){this.scene.add(new Wg(16761567,3803686,1.25)),this.keyLight=new Nl(16773622,2.6),this.keyLight.position.copy(tc);const t=this.keyLight.shadow.camera;t.left=-26,t.right=26,t.top=26,t.bottom=-26,t.near=1,t.far=80,this.keyLight.shadow.bias=-6e-4,this.keyLight.shadow.normalBias=.035,this.scene.add(this.keyLight,this.keyLight.target);const e=new Nl(9427199,.9);e.position.set(10,12,-24),this.scene.add(e),this.playerLight=new Ul(10482687,6,12,2),this.scene.add(this.playerLight);const n=new Ul(16726638,40,34,2);n.position.set(0,7,-27),this.scene.add(n)}prewarm(){const t=[];for(const n of["complex","platelet","debris","cytokine","synoviocyte","complement"]){const i=this.targetFactory.create(1,new T(0,0,-10),n);i.group.scale.setScalar(1),this.scene.add(i.group),t.push(i)}const e=this.nets.items[0];e.group.visible=!0,this.particles.emit(new T,new T,{life:.01}),this.particles.update(0),this.rings.items[0].mesh.visible=!0,this.residue.items[0].visible=!0;try{this.renderer.compile(this.scene,this.camera)}catch{}for(const n of t)this.scene.remove(n.group);e.group.visible=!1,this.rings.items[0].mesh.visible=!1,this.residue.items[0].visible=!1,this.particles.clear()}bindWindowEvents(){var n;const t=()=>this.onResize();window.addEventListener("resize",t),window.addEventListener("orientationchange",()=>setTimeout(t,150)),(n=window.visualViewport)==null||n.addEventListener("resize",t),document.addEventListener("visibilitychange",()=>{document.hidden?(this.state==="playing"&&this.pause(),this.audio.suspend()):this.state!=="paused"&&this.audio.resume()}),window.addEventListener("blur",()=>{this.state==="playing"&&this.pause()});const e=()=>{this.ui.screen==="settings"&&this.ui.show("settings"),setTimeout(t,100)};document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("gesturestart",i=>i.preventDefault()),document.addEventListener("dblclick",i=>i.preventDefault())}resolveQuality(){if(this.forcedQuality)return this.forcedQuality;if(this.settings.quality!=="auto")return this.settings.quality;const t=Math.min(window.screen.width,window.screen.height)<600;return this.isTouchDevice||t?"medium":"high"}applyQuality(t){const e=Hl[t];this.qualityName=t,this.quality=e,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e.pixelRatio)),this.keyLight.castShadow=e.shadows,this.keyLight.shadow.mapSize.x!==e.shadowMapSize&&(this.keyLight.shadow.mapSize.set(e.shadowMapSize,e.shadowMapSize),this.keyLight.shadow.map&&(this.keyLight.shadow.map.dispose(),this.keyLight.shadow.map=null)),this.environment.setQuality(e),this.postfx.configure({bloom:e.bloom,msaa:e.msaa}),this.onResize()}setQualitySetting(t){this.settings.quality=t,nr("quality",t),this.forcedQuality=null,this.applyQuality(this.resolveQuality()),this.perf={frames:0,time:0,warmup:0}}onResize(){var r;const t=window.innerWidth,e=window.innerHeight;if(t===0||e===0)return;this.renderer.setSize(t,e);const n=t/e;this.camera.aspect=n,this.camera.fov=n<1?Qn.lerp(72,56,Ne(.45,1,n)):55,this.camera.updateProjectionMatrix(),this.postfx.syncSize();const i=this.renderer.getDrawingBufferSize(rs).y;this.particles.setViewport(i,this.camera.fov),this.environment.setViewport(i,this.camera.fov),(r=this.ui)==null||r.setViewport(t,e),this.needsRender=!0}resetRun(){for(const t of this.targets)this.scene.remove(t.group);this.targets.length=0,this.nets.clear(),this.particles.clear(),this.rings.clear(),this.residue.clear(),this.player.reset(),this.health=Lt.maxHealth,this.inflammation=Lt.startInflammation,this.netBurden=0,this.wave=1,this.cleared=0,this.elapsed=0,this.spawnTimer=1.2,this.score=0,this.combo=0,this.comboTimer=0,this.bestCombo=0,this.shots=0,this.hits=0,this.engulfed=0,this.escapes=0,this.erosion=0,this.threat=0,this.burstCharge=0,this.lastDamageTime=-10,this.lockTarget=null,this.pendingTap=null,this.shake=0,this.endInfo=null}start(){this.ui.show("intro"),this.renderer.setAnimationLoop(()=>this.tick())}startGame(){this.audio.unlock(),this.resetRun(),this.ui.clearWorldOverlays(),this.ui.hideOverlay(),this.state="playing",document.body.classList.add("in-game"),this.ui.setPlaying(!0),this.input.releaseAll(),this.clock.getDelta(),this.perf={frames:0,time:0,warmup:0},this.ui.showBanner("Wave 1",zl[1],3.2),this.audio.wave()}toMenu(){this.resetRun(),this.ui.clearWorldOverlays(),this.state="menu",document.body.classList.remove("in-game"),this.ui.setPlaying(!1),this.audio.resume(),this.ui.show("intro")}pause(){this.state==="playing"&&(this.state="paused",this.input.releaseAll(),this.ui.setPlaying(!1),this.ui.show("pause"),this.audio.suspend(),this.needsRender=!0)}resume(){this.state==="paused"&&(this.audio.unlock(),this.ui.hideOverlay(),this.state="playing",this.ui.setPlaying(!0),this.input.releaseAll(),this.clock.getDelta())}togglePause(){this.state==="playing"?this.pause():this.state==="paused"&&(this.ui.screen==="pause"?this.resume():this.ui.show("pause"))}toggleSound(){this.settings.sound=!this.settings.sound,nr("sound",this.settings.sound),this.audio.unlock(),this.audio.setEnabled(this.settings.sound),this.ui.setMuted(!this.settings.sound)}toggleFullscreen(){const t=document,e=t.documentElement;try{if(t.fullscreenElement||t.webkitFullscreenElement)(t.exitFullscreen||t.webkitExitFullscreen).call(t);else{const n=e.requestFullscreen||e.webkitRequestFullscreen,i=n==null?void 0:n.call(e,{navigationUI:"hide"});i&&typeof i.catch=="function"&&i.catch(()=>{})}}catch{}}onAction(t){switch(t){case"dash":this.state==="playing"&&this.dash();break;case"burst":this.state==="playing"&&this.netBurst();break;case"pause":this.state==="playing"||this.state==="paused"?this.togglePause():this.state==="menu"&&this.ui.screen&&this.ui.screen!=="intro"?this.ui.show("intro"):this.state==="over"&&this.ui.screen==="howto"&&this.ui.handleAction("back");break;case"mute":this.toggleSound();break;case"restart":(this.state==="over"||this.state==="paused")&&this.startGame();break;case"confirm":this.confirm();break}}confirm(){if(!this.ui.overlayOpen)return;const t=document.activeElement;if(t instanceof HTMLButtonElement&&this.ui.el.card.contains(t)){t.click();return}const e=this.ui.el.card.querySelector(".btn.primary");e==null||e.click()}tick(){const t=Math.min(this.clock.getDelta(),.05);if(this.input.pollGamepad(),!this.contextLost){switch(this.state){case"playing":this.update(t);break;case"dying":this.updateDying(t);break;case"over":this.updateAmbient(t,.35);break;case"menu":this.updateMenu(t);break;case"paused":if(!this.needsRender)return;break}this.needsRender=!1,this.postfx.render(t)}}updateHeartbeat(t){this.beatTimer-=t,this.beatTimer<=0&&(this.beatTimer=60/(58+this.inflammation*.7),this.pulse=1,this.state==="playing"&&this.audio.heartbeat(this.inflammation)),this.pulse=Math.max(0,this.pulse-t*3.2)}environmentState(){return{inflammation:this.inflammation,netBurden:this.netBurden,erosion:this.erosion,threat:this.threat}}updateMenu(t){this.menuTime+=t,this.updateHeartbeat(t),this.environment.update(t,this.environmentState(),this.pulse),this.player.update(t,ir.set(0,0),Ma.set(Math.sin(this.menuTime*.4),0,-1).normalize()),this.particles.update(t),this.updateLights();const e=this.menuTime*.06+Math.PI*.5,n=Re.set(Math.cos(e)*30,21,Math.sin(e)*30);this.camera.position.lerp(n,1-Math.exp(-1.2*t)),this.cameraTarget.lerp(qn.set(0,0,0),1-Math.exp(-2*t)),this.camera.lookAt(this.cameraTarget)}updateAmbient(t,e=1){this.updateHeartbeat(t),this.environment.update(t*e,this.environmentState(),this.pulse),this.particles.update(t),this.rings.update(t),this.updateCamera(t),this.updateLights(),this.ui.update(t,this.collectHud()),this.ui.updateWorldOverlays(t,this.camera,{targets:[],lockTarget:null,showLock:!1,cartilage:null})}updateDying(t){if(this.player.update(t,ir.set(0,0),Ma.set(0,0,0)),this.updateAmbient(t),this.player.deathFinished()&&this.endInfo){const{won:e,title:n,text:i}=this.endInfo;this.finish(e,n,i)}}update(t){this.elapsed+=t,this.toastCooldown=Math.max(0,this.toastCooldown-t);const e=this.input.getMove(ir),n=this.computeAim(Ma,e);this.player.update(t,e,n),this.handleFiring(n,t),this.spawnTargets(t),this.nets.update(t,this.particles),this.resolveProjectileHits(),this.updateTargets(t),this.updateBiology(t),this.updateHeartbeat(t),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=0)),this.particles.update(t),this.rings.update(t),this.residue.update(this.netBurden),this.environment.update(t,this.environmentState(),this.pulse),this.updateCamera(t),this.updateLights(),this.ui.update(t,this.collectHud()),this.updateIndicators(t),this.checkEndConditions(),this.trackPerformance(t)}collectHud(){const t=this.hud;return t.health=this.health,t.inflammation=this.inflammation,t.netBurden=this.netBurden,t.wave=this.wave,t.cleared=this.cleared,t.remainingSeconds=Math.max(0,Lt.stabiliseSeconds-this.elapsed),t.score=this.score,t.combo=this.combo,t.multiplier=ec(this.combo),t.burstCharge=this.burstCharge,t.dashReady=this.player.dashReady(),t.threat=this.threat,t}updateIndicators(t){const e=this.indicatorTargets;e.length=0;for(const n of this.targets)n.active&&e.push(n);e.sort((n,i)=>Math.hypot(n.position.x,n.position.z)-Math.hypot(i.position.x,i.position.z)),e.length>9&&(e.length=9),this.ui.updateWorldOverlays(t,this.camera,{targets:e,lockTarget:this.lockTarget,showLock:this.aimMode==="auto"&&!!this.lockTarget,cartilage:rv})}computeAim(t,e){const n=this.player.position,i=this.input.padAim;if(i.lengthSq()>.09)return this.aimMode="stick",this.lockTarget=null,t.set(i.x,0,i.y).normalize();if(this.input.device==="desktop"&&this.input.pointerKind==="mouse"&&this.input.hasMouseAim){const a=this.input.pointer;if(rs.set(a.x/window.innerWidth*2-1,-(a.y/window.innerHeight)*2+1),this.raycaster.setFromCamera(rs,this.camera),this.aimPlane.set(xa,-(n.y+.6)),this.raycaster.ray.intersectPlane(this.aimPlane,this.aimPoint))return this.aimMode="mouse",this.lockTarget=null,t.set(this.aimPoint.x-n.x,0,this.aimPoint.z-n.z),t.lengthSq()<.25?t.copy(this.player.facing):t.normalize()}this.aimMode="auto";const r=this.pickAutoTarget();return this.lockTarget=r,r?this.leadTarget(r,t):e.lengthSq()>.01?t.set(e.x,0,e.y).normalize():t.copy(this.player.facing)}pickAutoTarget(){const t=this.player.position;let e=null,n=1/0,i=1/0;for(const r of this.targets){if(!r.active)continue;const a=r.horizontalDistanceTo(t);if(a>26)continue;const o=Math.hypot(r.position.x,r.position.z);let l=a;r.kind==="complement"&&a<12&&(l-=7),l-=Math.max(0,12-o)*.6,l<n&&(n=l,e=r),r===this.lockTarget&&(i=l)}return this.lockTarget&&this.lockTarget.active&&i-n<2.5?this.lockTarget:e}leadTarget(t,e){const n=this.player.position,r=t.horizontalDistanceTo(n)/Oe.speed,a=t.speed*t.slowed;return e.set(t.position.x+t.heading.x*a*r-n.x,0,t.position.z+t.heading.z*a*r-n.z),e.lengthSq()<1e-4?e.copy(this.player.facing):e.normalize()}handleFiring(t,e){const n=this.input.consumeTaps();if(n&&(this.pendingTap={...n[n.length-1],age:0}),this.pendingTap){if(this.pendingTap.age+=e,this.player.canFire()){const i=this.aimFromTap(this.pendingTap,Re);this.pendingTap=null,i&&this.fireNET(i);return}this.pendingTap.age>.3&&(this.pendingTap=null)}this.input.firing&&this.player.canFire()&&this.fireNET(t)}aimFromTap(t,e){const n=this.player.position;let i=null,r=110;for(const a of this.targets){if(!a.active||(this.ui.toScreen(a.position,this.camera,sr),!sr.visible))continue;const o=Math.hypot(sr.x-t.x,sr.y-t.y);o<r&&(r=o,i=a)}return i?(this.lockTarget=i,this.leadTarget(i,e)):(rs.set(t.x/window.innerWidth*2-1,-(t.y/window.innerHeight)*2+1),this.raycaster.setFromCamera(rs,this.camera),this.aimPlane.set(xa,-(n.y+.6)),!this.raycaster.ray.intersectPlane(this.aimPlane,qn)||(e.set(qn.x-n.x,0,qn.z-n.z),e.lengthSq()<.25)?null:e.normalize())}muzzleFor(t,e){const n=this.player.position;return e.set(n.x+t.x*1.7,n.y+.4,n.z+t.z*1.7)}fireNET(t){if(!this.player.canFire())return!1;const e=this.muzzleFor(t,qn),n=this.nets.fire(e,t);return n?(n.fromBurst=!1,this.player.facing.copy(t),this.player.markFired(),this.shots+=1,this.netBurden=Math.min(Lt.maxNetBurden,this.netBurden+Lt.netShotCost),this.particles.burst(e,{count:6,color:12582143,speed:3,size:.4,life:.3,gravity:0}),this.audio.fire(),!0):!1}dash(){this.player.tryDash(this.input.getMove(ir))&&(this.audio.dash(),this.rings.spawn(this.player.position,{color:9434111,from:1,to:4,life:.35,opacity:.7}),this.particles.burst(this.player.position,{count:14,color:12582143,speed:5,size:.5,life:.4,gravity:0}))}netBurst(){if(this.burstCharge<1){this.toastCooldown<=0&&(this.ui.showToast(`NET burst charging — ${Math.round(this.burstCharge*100)}%`),this.toastCooldown=1.5);return}this.burstCharge=0,this.netBurden=Math.min(Lt.maxNetBurden,this.netBurden+Lt.burstCost);const t=this.player.position;for(let e=0;e<Lt.burstProjectiles;e+=1){const n=e/Lt.burstProjectiles*Math.PI*2,i=Re.set(Math.cos(n),0,Math.sin(n)),r=this.muzzleFor(i,qn),a=this.nets.fire(r,i,{speed:Oe.burstSpeed,life:Oe.burstLife});a&&(a.fromBurst=!0)}this.rings.spawn(t,{color:12582143,from:1,to:14,life:.7,opacity:1}),this.particles.burst(t,{count:60,color:10483967,speed:14,size:.7,life:.8,spread:.4,gravity:0}),this.addShake(.55),this.audio.burst(),this.ui.floater(Re.copy(t).setY(t.y+2),"NET burst!","combo")}addShake(t){this.settings.shake&&(this.shake=Math.min(1.2,this.shake+t))}pickSpawnPoint(){const t=this.environment.spawnPoints,e=this.player.position;let n=t[0],i=-1;for(let r=0;r<3;r+=1){const a=t[Math.floor(Math.random()*t.length)],o=Math.hypot(a.x-e.x,a.z-e.z);o>i&&(i=o,n=a)}return n}spawnTargets(t){if(this.spawnTimer-=t,this.spawnTimer>0)return;this.spawnTimer=Math.max(2.2,5.3-this.wave*.28);let e=0;for(const r of this.targets)r.active&&(e+=1);const n=Math.min(26,14+this.wave*2),i=Math.min(2+Math.floor(this.wave/2),6,n-e);for(let r=0;r<i;r+=1){const a=this.pickSpawnPoint(),o=this.targetFactory.create(this.wave,a);this.targets.push(o),this.scene.add(o.group),this.rings.spawn(o.position,{color:o.def.glow,from:.4,to:2.8,life:.7,opacity:.8}),this.particles.burst(Re.copy(o.position).setY(o.position.y+.8),{count:10,color:o.def.glow,speed:3,size:.45,life:.6,upward:1,gravity:0})}}resolveProjectileHits(){for(const t of this.nets.items){if(!t.active||t.target)continue;const e=t.group.position;for(const n of this.targets){if(!n.active)continue;const i=n.position,r=n.radius+t.radius,a=e.x-i.x,o=e.z-i.z;if(a*a+o*o>r*r||Math.abs(e.y-i.y)>Oe.verticalReach)continue;const l=n.hit();t.fromBurst||(this.hits+=1),l==="captured"?(t.wrap(n),this.onCaptured(n,"net")):l==="damaged"&&(t.deactivate(),this.particles.burst(i,{count:14,color:14285823,speed:5,size:.45,life:.45}),this.ui.floater(Re.copy(i).setY(i.y+1.2),`NET ${n.def.hp-n.hp}/${n.def.hp}`,"good"),this.audio.hitTough());break}}}onCaptured(t,e){const n=t.def;this.cleared+=1,this.combo=this.comboTimer>0?this.combo+1:1,this.comboTimer=Lt.comboWindow,this.bestCombo=Math.max(this.bestCombo,this.combo);const i=ec(this.combo),r=1+(this.wave-1)*.1,a=Math.round(n.points*i*r*(e==="engulf"?.85:1));this.score+=a,this.inflammation=Math.max(0,this.inflammation-n.relief),this.burstCharge=Math.min(1,this.burstCharge+Lt.burstChargePerClear);const o=t.position;e==="net"?(t.kind==="platelet"?this.netBurden=Math.min(Lt.maxNetBurden,this.netBurden+2):t.kind==="debris"?this.netBurden=Math.min(Lt.maxNetBurden,this.netBurden+1):t.kind==="synoviocyte"?this.netBurden=Math.min(Lt.maxNetBurden,this.netBurden+1.5):this.netBurden=Math.max(0,this.netBurden-Lt.netHitRelief),this.residue.add(o,2.4+t.radius),this.ui.floater(Re.copy(o).setY(o.y+1.2),`+${a}`,"good")):this.ui.floater(Re.copy(o).setY(o.y+1.4),`Engulfed +${a}`,"engulf"),this.combo>1&&this.combo%4===1&&this.ui.floater(Re.copy(o).setY(o.y+2.6),`Combo ×${i.toFixed(1)}`,"combo"),this.particles.burst(o,{count:26,color:n.glow,speed:7,size:.55,life:.7}),this.rings.spawn(o,{color:n.glow,from:.5,to:3.4,life:.5,opacity:.8}),this.audio.capture(this.combo),this.cleared%Lt.clearsPerWave===0&&(this.wave+=1,this.ui.showBanner(`Wave ${this.wave}`,zl[this.wave]||"Inflammation intensifies — stimuli move faster"),this.audio.wave())}updateTargets(t){const e=this.player,n=e.position,i=this.targets;for(const o of i)o.separation.set(0,0,0);for(let o=0;o<i.length;o+=1){const l=i[o];if(l.active)for(let c=o+1;c<i.length;c+=1){const h=i[c];if(!h.active)continue;const d=l.position.x-h.position.x,f=l.position.z-h.position.z,u=(l.radius+h.radius)*1.1,g=d*d+f*f;if(g>=u*u||g<1e-6)continue;const v=Math.sqrt(g),m=(1-v/u)*1.4;l.separation.x+=d/v*m,l.separation.z+=f/v*m,h.separation.x-=d/v*m,h.separation.z-=f/v*m}}let r=0;for(const o of i){if(o.update(t,n),o.expired&&!o.fizzled&&(o.fizzled=!0,this.particles.burst(o.position,{count:12,color:o.def.glow,speed:3,size:.4,life:.5})),!o.active)continue;const l=o.def,c=o.horizontalDistanceTo(n),h=Math.abs(o.position.y-n.y);if(o.kind==="complement"){c<o.radius+1.5&&h<2.6&&e.takeHit()&&(this.health=Math.max(0,this.health-l.contactDamage),this.lastDamageTime=this.elapsed,o.pop(),this.particles.burst(o.position,{count:34,color:l.glow,speed:9,size:.6,life:.6}),this.rings.spawn(o.position,{color:16734842,from:.6,to:4,life:.45}),this.ui.floater(Re.copy(n).setY(n.y+2),`−${l.contactDamage}`,"bad"),this.ui.flashDamage(.75),this.addShake(.6),this.audio.hurt());continue}if(l.phagocytosable&&c<o.radius+Ke.engulfReach&&h<2.4){o.engulf(n),this.engulfed+=1,this.health=Math.max(0,this.health-Lt.phagocytosisHealthCost),this.lastDamageTime=this.elapsed,e.pulseEngulf(),this.audio.engulf(),this.onCaptured(o,"engulf");continue}if(o.kind==="synoviocyte"&&c<o.radius+1.3){this.health=Math.max(0,this.health-5*t),this.lastDamageTime=this.elapsed;const f=Re.set(n.x-o.position.x,0,n.z-o.position.z);f.lengthSq()>1e-4&&(f.normalize(),e.velocity.addScaledVector(f,30*t)),e.flash(.15),this.ui.flashDamage(.25)}if(o.escaped()){this.inflammation=Math.min(Lt.maxInflammation,this.inflammation+l.penalty),this.escapes+=1,this.combo=0,this.comboTimer=0,o.pop(),this.particles.burst(o.position,{count:30,color:16731501,speed:7,size:.6,life:.7}),this.rings.spawn(o.position,{color:16727406,from:1,to:6.5,life:.6}),this.ui.floater(Re.copy(o.position).setY(o.position.y+1.6),`Cartilage hit +${l.penalty}`,"bad"),this.ui.flashDamage(.3),this.addShake(.25),this.audio.escape();continue}const d=Math.hypot(o.position.x,o.position.z);r=Math.max(r,1-Ne(se.escapeRadius,12,d))}this.threat+=(r-this.threat)*(1-Math.exp(-6*t));let a=0;for(let o=0;o<i.length;o+=1){const l=i[o];if(l.destroyed){this.scene.remove(l.group),l===this.lockTarget&&(this.lockTarget=null);continue}i[a]=l,a+=1}i.length=a}updateBiology(t){this.inflammation=Math.min(Lt.maxInflammation,this.inflammation+(.9+this.wave*.12)*t),this.netBurden=Math.max(0,this.netBurden-Lt.netDecayPerSecond*t),this.netBurden>Lt.netOverloadThreshold?(this.inflammation=Math.min(Lt.maxInflammation,this.inflammation+Lt.netOverloadInflammation*t),this.health=Math.max(0,this.health-Lt.netOverloadDamage*t),this.lastDamageTime=this.elapsed,this.ui.flashDamage(.12)):this.health>0&&this.elapsed-this.lastDamageTime>Lt.healthRegenDelay&&(this.health=Math.min(Lt.maxHealth,this.health+Lt.healthRegenPerSecond*t)),this.erosion=Math.min(.92,this.escapes*.065+Math.max(0,this.inflammation-60)*.003),this.player.setHealthRatio(this.health/Lt.maxHealth)}checkEndConditions(){if(this.elapsed>=Lt.stabiliseSeconds||this.cleared>=Lt.winClears){const t=Math.round(this.health*10+(100-this.inflammation)*8+(100-this.netBurden)*6);this.score+=t,this.ui.showToast(`Stabilisation bonus +${t.toLocaleString()}`,3),this.finish(!0,"Synovium stabilised","Inflammatory stimuli have been contained without overwhelming NET-mediated tissue damage.")}else if(this.health<=0){this.health=0,this.state="dying",this.endInfo={won:!1,title:"Neutrophil exhausted",text:"Complement bursts and tissue stress overwhelmed the activated neutrophil — it underwent NETosis."},this.player.beginDeathBurst(),this.input.releaseAll(),this.ui.setPlaying(!1);const t=this.player.position;this.particles.burst(t,{count:90,color:14285823,speed:12,size:.8,life:1.2,spread:.5}),this.rings.spawn(t,{color:12582143,from:1,to:12,life:1});for(let e=0;e<6;e+=1){const n=e/6*Math.PI*2;this.residue.add(Re.set(t.x+Math.cos(n)*3,0,t.z+Math.sin(n)*3),4)}this.addShake(.9),this.audio.burst()}else this.inflammation>=Lt.maxInflammation?this.finish(!1,"Inflammation runaway","The RA synovial microenvironment exceeded control thresholds."):this.netBurden>=Lt.maxNetBurden&&this.finish(!1,"NET burden too high","Excess chromatin webbing increased tissue damage and autoimmunity risk.")}finish(t,e,n){this.state="over",this.input.releaseAll(),this.ui.setPlaying(!1);const i=this.score>this.best;i&&(this.best=this.score,nr("best",this.best));const r={score:this.score,best:this.best,newBest:i&&this.score>0,cleared:this.cleared,wave:this.wave,accuracy:this.shots?Math.min(100,Math.round(this.hits/this.shots*100)):0,engulfed:this.engulfed,bestCombo:this.bestCombo,time:Math.floor(Math.min(this.elapsed,Lt.stabiliseSeconds))};t?this.audio.win():this.audio.lose(),this.ui.show("over",{won:t,title:e,text:n,stats:r,fact:kl[Math.floor(Math.random()*kl.length)]})}updateCamera(t){const e=this.player.position,n=this.camera.aspect,i=n<1.25?Qn.lerp(1.45,1,Ne(.45,1.25,n)):1,r=this.aimMode==="mouse"&&this.state==="playing"?2.2:1.2,a=Re.copy(sv).multiplyScalar(i).add(e).addScaledVector(this.player.facing,r);this.camera.position.lerp(a,1-Math.exp(-5*t));const o=qn.set(e.x+this.player.facing.x*r,e.y-1,e.z-1+this.player.facing.z*r);if(this.cameraTarget.lerp(o,1-Math.exp(-6*t)),this.camera.lookAt(this.cameraTarget),this.shake>.001){const l=this.shake*.45;this.camera.position.x+=(Math.random()-.5)*l,this.camera.position.y+=(Math.random()-.5)*l,this.camera.position.z+=(Math.random()-.5)*l,this.shake*=Math.exp(-7*t)}}updateLights(){const t=this.player.position;this.keyLight.position.copy(t).add(tc),this.keyLight.target.position.copy(t),this.playerLight.position.set(t.x,t.y+1.6,t.z),this.playerLight.intensity=this.player.group.visible?6+this.pulse*1.5:0,this.postfx.setBloomStrength(.55+this.pulse*.12+this.inflammation*.002)}trackPerformance(t){if(this.settings.quality!=="auto"||this.forcedQuality)return;const e=this.perf;if(e.warmup+=t,e.warmup<2.5||(e.frames+=1,e.time+=t,e.time<3))return;const n=e.frames/e.time;e.frames=0,e.time=0;const i=ns.indexOf(this.qualityName);if(n<40&&i<ns.length-1){const r=ns[i+1];this.applyQuality(r),e.warmup=0,this.ui.showToast(`Graphics set to ${r} for smoother play`)}}}const ov=document.querySelector("#app");function nc(s){const t=document.getElementById("card");document.getElementById("overlay").classList.add("show"),t.innerHTML=`
    <h1>RA Synovium <span>NET Shooter</span></h1>
    <p class="lead">${s}</p>
    <p>Try an up-to-date version of Chrome, Edge, Firefox or Safari with hardware acceleration enabled.</p>`}function lv(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}lv()?requestAnimationFrame(()=>setTimeout(()=>{try{new av(ov).start()}catch(s){console.error(s),nc("Something went wrong while starting the game.")}},0)):nc("This game needs WebGL 2, which isn't available in this browser or device.");
