//이제 봇 코드 암호화 하겠습니다 너무 코드 도용이 심해서.. 지비님 원본코드는 카톡 간부방에 올리겠슴다.

/* [KyaongBot] */
var timeo = new Date().getTime();
var ver = "4.7.8.1"
var updatecode = "!순위, !캬옹봇, 복권 추가포인트!"
var error = false;
if (typeof DataBase.getDataBase("errorchk") == "undefined") DataBase.setDataBase(0, "errorchk")
var off = false

// AMD TR™은 아조시다 매우
/* 이게 작동할지 안할지 모르겠다면 일단 eval 기능을 이용해 작동을 확인후 적용 시켜주세요.
그리고 eval로 테스트가 전혀 안될거 같으면 제발 try기능을 써서 오류가 발생해도 예외처리를 해주셔야 손쉽게 오류를 고칠수 있습니다.
꼭 테스트하고 넣어주세요 제발 부탁입니다. 고치기 너무 귀찮아요;;;(특히 지비)
밑은 Jquery 라서 좀 김 ㅅㄱ
*/
/*! jQuery v1.6.4 http://jquery.com/ | http://jquery.org/license */
(function(a,b){function cu(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cr(a){if(!cg[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ch||(ch=c.createElement("iframe"),ch.frameBorder=ch.width=ch.height=0),b.appendChild(ch);if(!ci||!ch.createElement)ci=(ch.contentWindow||ch.contentDocument).document,ci.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),ci.close();d=ci.createElement(a),ci.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ch)}cg[a]=e}return cg[a]}function cq(a,b){var c={};f.each(cm.concat.apply([],cm.slice(0,b)),function(){c[this]=a});return c}function cp(){cn=b}function co(){setTimeout(cp,0);return cn=f.now()}function cf(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ce(){try{return new a.XMLHttpRequest}catch(b){}}function b$(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bZ(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bY(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bA.test(a)?d(a,e):bY(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)bY(a+"["+e+"]",b[e],c,d);else d(a,b)}function bX(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bW(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bP,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bW(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bW(a,c,d,e,"*",g));return l}function bV(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bL),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function by(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bt:bu;if(d>0){c!=="border"&&f.each(e,function(){c||(d-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?d+=parseFloat(f.css(a,c+this))||0:d-=parseFloat(f.css(a,"border"+this+"Width"))||0});return d+"px"}d=bv(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0,c&&f.each(e,function(){d+=parseFloat(f.css(a,"padding"+this))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+this+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+this))||0)});return d+"px"}function bl(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bd,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bk(a){f.nodeName(a,"input")?bj(a):"getElementsByTagName"in a&&f.grep(a.getElementsByTagName("input"),bj)}function bj(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bi(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bh(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bg(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bf(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function V(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(Q.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function U(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function M(a,b){return(a&&a!=="*"?a+".":"")+b.replace(y,"`").replace(z,"&")}function L(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(w,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function J(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function D(){return!0}function C(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function K(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(K,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=/-([a-z]|[0-9])/ig,x=/^-ms-/,y=function(a,b){return(b+"").toUpperCase()},z=d.userAgent,A,B,C,D=Object.prototype.toString,E=Object.prototype.hasOwnProperty,F=Array.prototype.push,G=Array.prototype.slice,H=String.prototype.trim,I=Array.prototype.indexOf,J={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.4",length:0,size:function(){return this.length},toArray:function(){return G.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?F.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),B.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(G.apply(this,arguments),"slice",G.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:F,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;B.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!B){B=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",C,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",C),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&K()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):J[D.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!E.call(a,"constructor")&&!E.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||E.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(x,"ms-").replace(w,y)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:H?function(a){return a==null?"":H.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?F.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(!b)return-1;if(I)return I.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=G.call(arguments,2),g=function(){return a.apply(c,f.concat(G.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){J["[object "+b+"]"]=b.toLowerCase()}),A=e.uaMatch(z),A.browser&&(e.browser[A.browser]=!0,e.browser.version=A.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?C=function(){c.removeEventListener("DOMContentLoaded",C,!1),e.ready()}:c.attachEvent&&(C=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",C),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g+"With"](this===b?d:this,[h])}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=a.getElementsByTagName("input")[0],k={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,k.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,k.optDisabled=!h.disabled;try{delete a.test}catch(v){k.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function(){k.noCloneEvent=!1}),a.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),k.radioValue=i.value==="t",i.setAttribute("checked","checked"),a.appendChild(i),l=c.createDocumentFragment(),l.appendChild(a.firstChild),k.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",m=c.getElementsByTagName("body")[0],o=c.createElement(m?"div":"body"),p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},m&&f.extend(p,{position:"absolute",left:"-1000px",top:"-1000px"});for(t in p)o.style[t]=p[t];o.appendChild(a),n=m||b,n.insertBefore(o,n.firstChild),k.appendChecked=i.checked,k.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,k.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",k.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",q=a.getElementsByTagName("td"),u=q[0].offsetHeight===0,q[0].style.display="",q[1].style.display="none",k.reliableHiddenOffsets=u&&q[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",a.appendChild(j),k.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0),o.innerHTML="",n.removeChild(o);if(a.attachEvent)for(t in{submit:1,change:1,focusin:1})s="on"+t,u=s in a,u||(a.setAttribute(s,"return;"),u=typeof a[s]=="function"),k[t+"Bubbles"]=u;o=l=g=h=m=j=a=i=null;return k}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i=f.expando,j=typeof c=="string",k=a.nodeType,l=k?f.cache:a,m=k?a[f.expando]:a[f.expando]&&f.expando;if((!m||e&&m&&l[m]&&!l[m][i])&&j&&d===b)return;m||(k?a[f.expando]=m=++f.uuid:m=f.expando),l[m]||(l[m]={},k||(l[m].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?l[m][i]=f.extend(l[m][i],c):l[m]=f.extend(l[m],c);g=l[m],e&&(g[i]||(g[i]={}),g=g[i]),d!==b&&(g[f.camelCase(c)]=d);if(c==="events"&&!g[c])return g[i]&&g[i].events;j?(h=g[c],h==null&&(h=g[f.camelCase(c)])):h=g;return h}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e=f.expando,g=a.nodeType,h=g?f.cache:a,i=g?a[f.expando]:f.expando;if(!h[i])return;if(b){d=c?h[i][e]:h[i];if(d){d[b]||(b=f.camelCase(b)),delete d[b];if(!l(d))return}}if(c){delete h[i][e];if(!l(h[i]))return}var j=h[i][e];f.support.deleteExpando||!h.setInterval?delete h[i]:h[i]=null,j?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=j):g&&(f.support.deleteExpando?delete a[f.expando]:a.removeAttribute?a.removeAttribute(f.expando):a[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u,v;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(o);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(o);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(n," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;d=e.value;return typeof d=="string"?d.replace(p,""):d==null?"":d}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);j&&(c=f.attrFix[c]||c,i=f.attrHooks[c],i||(t.test(c)?i=v:u&&(i=u)));if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j&&(h=i.get(a,c))!==null)return h;h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.attr(a,b,""),a.removeAttribute(b),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(u&&f.nodeName(a,"button"))return u.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(u&&f.nodeName(a,"button"))return u.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);i&&(c=f.propFix[c]||c,h=f.propHooks[c]);return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==null?g:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabIndex=f.propHooks.tabIndex,v={get:function(a,c){var d;return f.prop(a,c)===!0||(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},f.support.getSetAttribute||(u=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var w=/\.(.*)$/,x=/^(?:textarea|input|select)$/i,y=/\./g,z=/ /g,A=/[^\w\s.|`]/g,B=function(a){return a.replace(A,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=C;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=C);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),B).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete 
t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d!=null?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,M(a.origType,a.selector),f.extend({},a,{handler:L,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,M(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?D:C):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=D;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=D;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=D,this.stopPropagation()},isDefaultPrevented:C,isPropagationStopped:C,isImmediatePropagationStopped:C};var E=function(a){var b=a.relatedTarget,c=!1,d=a.type;a.type=a.data,b!==this&&(b&&(c=f.contains(this,b)),c||(f.event.handle.apply(this,arguments),a.type=d))},F=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?F:E,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?F:E)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")||f.nodeName(b,"button")?b.type:"";(c==="submit"||c==="image")&&f(b).closest("form").length&&J("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")||f.nodeName(b,"button")?b.type:"";(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&J("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var G,H=function(a){var b=f.nodeName(a,"input")?a.type:"",c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},I=function(c){var d=c.target,e,g;if(!!x.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=H(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:I,beforedeactivate:I,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&I.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&I.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",H(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in G)f.event.add(this,c+".specialChange",G[c]);return x.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return x.test(this.nodeName)}},G=f.event.special.change.filters,G.focus=G.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var K={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||C,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=w.exec(h),k="",j&&(k=j[0],h=h.replace(w,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,K[h]?(a.push(K[h]+k),h=h+k):h=(K[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+M(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+M(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var N=/Until$/,O=/^(?:parents|prevUntil|prevAll)/,P=/,/,Q=/^.[^:#\[\.,]*$/,R=Array.prototype.slice,S=f.expr.match.POS,T={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(V(this,a,!1),"not",a)},filter:function(a){return this.pushStack(V(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=S.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=S.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(U(c[0])||U(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=R.call(arguments);N.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!T[a]?f.unique(e):e,(this.length>1||P.test(d))&&O.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|object|embed|option|style)/i,bb=/checked\s*(?:[^=]|=\s*.checked.)/i,bc=/\/(java|ecma)script/i,bd=/^\s*<!(?:\[CDATA\[|\-\-)/,be={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};be.optgroup=be.option,be.tbody=be.tfoot=be.colgroup=be.caption=be.thead,be.th=be.td,f.support.htmlSerialize||(be._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!be[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bb.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bf(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bl)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i;b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!ba.test(a[0])&&(f.support.checkClone||!bb.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean
(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bh(a,d),e=bi(a),g=bi(d);for(h=0;e[h];++h)g[h]&&bh(e[h],g[h])}if(b){bg(a,d);if(c){e=bi(a),g=bi(d);for(h=0;e[h];++h)bg(e[h],g[h])}}e=g=null;return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=be[l]||be._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bk(k[i]);else bk(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||bc.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bm=/alpha\([^)]*\)/i,bn=/opacity=([^)]*)/,bo=/([A-Z]|^ms)/g,bp=/^-?\d+(?:px)?$/i,bq=/^-?\d/,br=/^([\-+])=([\-+.\de]+)/,bs={position:"absolute",visibility:"hidden",display:"block"},bt=["Left","Right"],bu=["Top","Bottom"],bv,bw,bx;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bv(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=br.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bv)return bv(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return by(a,b,d);f.swap(a,bs,function(){e=by(a,b,d)});return e}},set:function(a,b){if(!bp.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bn.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bm,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bm.test(g)?g.replace(bm,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bv(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bw=function(a,c){var d,e,g;c=c.replace(bo,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bx=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bp.test(d)&&bq.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bv=bw||bx,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bz=/%20/g,bA=/\[\]$/,bB=/\r?\n/g,bC=/#.*$/,bD=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bE=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bF=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bG=/^(?:GET|HEAD)$/,bH=/^\/\//,bI=/\?/,bJ=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bK=/^(?:select|textarea)/i,bL=/\s+/,bM=/([?&])_=[^&]*/,bN=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bO=f.fn.load,bP={},bQ={},bR,bS,bT=["*/"]+["*"];try{bR=e.href}catch(bU){bR=c.createElement("a"),bR.href="",bR=bR.href}bS=bN.exec(bR.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bO)return bO.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bJ,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bK.test(this.nodeName)||bE.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bB,"\r\n")}}):{name:b.name,value:c.replace(bB,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?bX(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),bX(a,b);return a},ajaxSettings:{url:bR,isLocal:bF.test(bS[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bT},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bV(bP),ajaxTransport:bV(bQ),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?bZ(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=b$(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bD.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bC,"").replace(bH,bS[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bL),d.crossDomain==null&&(r=bN.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bS[1]&&r[2]==bS[2]&&(r[3]||(r[1]==="http:"?80:443))==(bS[3]||(bS[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bW(bP,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bG.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bI.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bM,"$1_="+x);d.url=y+(y===d.url?(bI.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bT+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bW(bQ,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){s<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)bY(g,a[g],c,e);return d.join("&").replace(bz,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var b_=f.now(),ca=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+b_++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ca.test(b.url)||e&&ca.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ca,l),b.url===j&&(e&&(k=k.replace(ca,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cb=a.ActiveXObject?function(){for(var a in cd)cd[a](0,1)}:!1,cc=0,cd;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ce()||cf()}:ce,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cb&&delete cd[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cc,cb&&(cd||(cd={},f(a).unload(cb)),cd[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cg={},ch,ci,cj=/^(?:toggle|show|hide)$/,ck=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cl,cm=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cn;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cq("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cr(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cq("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cq("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cr(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cj.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=ck.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cq("show",1),slideUp:cq("hide",1),slideToggle:cq("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return d.step(a)}var d=this,e=f.fx;this.startTime=cn||co(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&f.timers.push(g)&&!cl&&(cl=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cn||co(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cl),cl=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cs=/^t(?:able|d|h)$/i,ct=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cu(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cs.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=ct.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!ct.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cu(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cu(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a&&a.style?parseFloat(f.css(a,d,"padding")):null},f.fn["outer"+c]=function(a){var b=this[0];return b&&b.style?parseFloat(f.css(b,d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNaN(j)?i:j}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);
DataBase.setDataBase(0, "errorchk")

if (DataBase.getDataBase("DB") == undefined) {
var DB1 = new Object();
DataBase.setDataBase(JSON.stringify(DB1), "DB");
}
var DB = JSON.parse(DataBase.getDataBase("DB"));


/*이건 리로드기능 안에 대체해서 삽입
DataBase.setDataBase(JSON.stringify(DB), "DB");
*/

var blank = "​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n" //이거 유니코드이니까 띄어쓰기로 고치지 마세요 제발 ;;
var admin = ["불여우", "AMD TR™", "rgb", "K'romium", "케이시", "DEBUG$MODE*NAME+", "Apz74", "GeForce", "핫산"]
DB.notice = ("<공지사항을 숙지해 주시기 바랍니다.>\n\n공지사항: goo.gl/iyP83B\n\n채팅/홍보 이벤트 진행중, 공지사항 참조해주세요!\n\n방장 카카오톡 id : rgbkakao\n\n공식업체: compury.com ('엘' 님)\n\n모바일 메뉴열고 우측상단\nPC 채팅창 방제아래 상단바\n♡->♥ 하트 부탁 드려요")
DB.ncommand = ("◇[캬옹봇 " + ver + "] 명령어 목록◇\n▼전체보기 클릭▼\n" + blank + "캬옹봇은 이용자가 첫 채팅을 올리면 자동으로 식별코드를 부여하고 데이터베이스를 생성합니다.\n명령어에서는 닉네임이 아닌 식별코드를 이용해 개인을 구별합니다.\n활동을 하면 컴퓨톡 포인트(cp)를 부여합니다.\n닉네임 변경시 나갔다 들어오신 후 이전 식별코드와 새로 발급된 식별코드를 각각 갠톡(rgbkakao) 또는 [!호출 9999 내용]으로 보내주셔야 데이터를 이전해드립니다.\n\n》채팅 1개당 1cp 부여\n》매일 리셋되는 출석체크시 순위에 따라 300~100cp 부여\n》채팅 시 1%의 확률로 4~100cp 부여\n》욕설 사용시 30cp씩 누적 차감\n\n아래 설명에서 <> 안에 들어있는 내용은 직접 채우시는 겁니다.\n\n\n◆[전체 / 개인]◆\n\n!공지\n》공지사항을 출력하고 공지 카운터를 초기화합니다.\n!캬옹봇\n》캬옹봇에 개한 설명을 출력합니다.\n!명령어\n》캬옹봇에서 사용 가능한 명령어 목록을 출력합니다.\n!닉네임\n》발신자의 닉네임을 출력합니다.\n!코드확인\n》발신자의 식별코드를 출력합니다.\n!코드목록\n》식별코드 목록을 전화번호부처럼 출력합니다.\n!코드변경\n》[비용:500cp]호출코드를 원하는 번호(1000~9999)로 변경합니다.\n!호출 <식별코드> <메세지>\n》식별코드에 해당하는 사람이 호출 이후 첫 메세지를 보낼 때 발신자가 자신을 찾고 있음을 메세지 내용과 함께 알려줍니다.\n!포인트\n》발신자의 포인트를 출력합니다.\n!순위\n》보유 포인트 순위를 출력합니다.\n!염탐 <식별코드>\n》[비용:50cp]식별코드에 해당하는 사람의 포인트를 염탐합니다.\n!상점 <식별코드> <포인트>\n》[VAT:20%]발신자의 계좌에서 수수료를 포함한 포인트를 차감하고, 수수료를 제외한 포인트를 식별코드에 해당하는 사람의 계좌에 보냅니다.\n!벌점 <식별코드> <포인트>\n》[VAT:50%|쿨타임:180초]상점과 같지만 식별코드의 해당하는 사람의 포인트를 차감합니다.\n!가위/바위/보 <포인트>\n》[일 5회 제한]해당 포인트를 걸고 봇과 가위바위보를 합니다.\n!복권\n》[일 1회 제한|비용:100cp]복권에 응모합니다. 당첨자는 매일 00시 정각에 발표됩니다. (당첨 금액:100+누적 금액, VAT:20%)\n\n\n◆[단어 포함 발동 방식]◆\n\nㅇㅈ? / ㅂㅇㄹ / 소라고둥 / 쓰읍\n\n\n◆[유틸리티]◆\n\n!견적생성<엔터키><키워드><엔터키><키워드>...\n》스페이스바가 아닌 엔터키를 사용해 각 키워드를 분리합니다. 부품 이름을 엔터키로 구분해 대충 입력하면 다나와 견적으로 만들어 반환합니다.\n!비교 <부품1,부품2>\n》(by 시공) 두 부품 이름을 대충 입력하면(되도록 영문으로만) userbenchmarks 사이트에서 비교한 링크를 출력합니다.\n!날씨\n》주요 지역의 날씨를 출력합니다.\n!지역날씨 <지역>\n》해당 지역의 날씨를 출력합니다.\n!실검\n》네이버 실시간 검색어 차트를 출력합니다.\n!비트코인\n》주요 암호화폐 시세를 출력합니다.\n!검색 <내용>\n》네이버에서 해당 내용을 검색합니다.\n!유튜브/구글/나무위키 <내용>\n》해당 사이트에서 해당 내용을 검색합니다.\n!배그서버\n》배틀그라운드 동접자 수와 서버 상태를 출력합니다.\n!롤전적 <닉네임>\n》정확한 닉네임을 입력하면 해당 닉네임의 전적을 출력합니다.\n!단어 <내용>\n》해당 단어를 검색합니다.\n!차트\n》네이버 뮤직 음원 순위를 출력합니다.\n!가사 <제목>\n》해당 노래의 가사를 출력합니다.\n!번역 <언어> <내용>\n》내용을 해당 언어로 번역합니다.\n!언어\n》번역에서 사용 가능한 언어를 출력합니다.\n\n\n◆[기타]◆\n\n!주사위\n》주사위를 굴려 결과값을 출력합니다.\n!시간\n》현재 시각을 출력합니다.\n!디지털시계\n》현재 시각을 디지털 시계 형식으로 출력합니다.\n!카운터 전체\n》DB 초기화 이후 올라온 모든 채팅 갯수를 출력합니다.\n!카운터 자신\n》DB 초기화 이후 자신이 보낸 모든 채팅 갯수를 출력합니다.\n!카운터 공지\n》공지가 출력되기까지 남은 채팅 갯수를 출력합니다. 공지가 출력될때 DB도 같이 저장됩니다.\n!응답속도\n》캬옹봇의 passive 코드 실행속도를 출력합니다.\n!동작시간\n》리로드 이후 현재까지 캬옹봇이 켜져있는 시간을 출력합니다.\n!불여우호출\n》불여우를 텔레그램으로 호출합니다.(봇이 죽었다던지 할때 사용)\n")
var startmsg = "▃▄▅▆|KyaongBot|▆▅▄▃"
var w = "D쥐고,D지고,jot같,tlqkf,wlfkf,ㅁㅈㅎ,ㅁㅊ,ㅁ친,ㅄ,ㅅㄲ네,ㅅㄲ들,ㅅㅋ,ㅅ발,ㅆㄺ,ㅆㅂ,ㅈㄹ,ㅉ질한,凸,가카,간민정음,간철수,갈보,갓치,강된장남,개간년,개같,개같이,개년,개념빠가,개뇬,개독,개독교,개련,개마이,개미친,개부랄,개불알,개빠구리,개뼉다구,개새,개새기,개새끼,개색,개섹,개셈,개쌍도,개쌍디언,개쌔끼,개자석,개자슥,개자식,개저씨,경상디언,계새끼,고무통,고무현,골1빈,골빈,골좁이,관종,괘새끼,구씹,규재찡,그따구,근혜찡,글러먹,기레기,기자레기,김치남,김치녀,까보전,꺼져,껒여,꼬춘쿠키,꼴갑,꼴값,꼴깝,꼴통,낙태충,냄져,넌씨눈,네다보,네다통,네다홍,년놈,노무노무,노미넴,노부엉,노시계,노알라,노운지,노인네,노짱,노친네,뇌물현,뇌텅,눈깔,눈새,느검마,느그애미,느그애비,느그엄마,느금마,늬믜,늬미,니기미,니년,니믜,니미럴,니애미,니애비,니어미,니엄마,닝기리,닥쳐라,닥치세,대가리,대갈,대갈빡,대갈통,대굴빡,덜떨어,도라이,도랏,도랐,도른,돌앗구만,돌앗나,돌앗네,돌았구만,돌았나,돌았네,뒈져,뒈진다,뒤져라,뒤져버,뒤져야,뒤져야지,뒤져요,뒤졌,뒤지겠,뒤지고싶,뒤지길,뒤진다,뒤질,등쉰,등신,디져라,디졌,디지고,디질,딴년,딸따뤼,딸따리,딸딸,딸딸이,또라이,또라인,똘아이,똘추,똥멍청,로류,맘충,매춘,머갈,멍청도,몸파는,무현RT,믜칀,믜친,미러링,미시친발,미쳣네,미쳤나,미쳤니,미췬,미칀,미친,미친개,미친새,미친색,박원숭,발정,배때지,별창,병신,병크,보라니,보력지원,보밍,보빨,보슬,보짓,보털,보테크,보혐,부랄,부랄발광,부럴,불알,붸충,븅딱,븅삼,븅쉰,븅신,빙딱,빙삼,빙시,빙신,빠구뤼,빠구리,빠꾸뤼,빠꾸리,빠순이,빠큐,빵즈,뻐규,뻐큐,뻑유,뻑큐,뻨큐,뼈큐,뽀르노,뽀오지,사까쉬,사까시,사새끼,삼일한,상노무,상놈,새1끼,새77ㅣ,새갸,새꺄,새뀌,새끼,새끼라,새끼야,새뤼,새리,새캬,새퀴,새킈,새키,색희,색히,샊기,샊히,생키,샹년,섀키,설라디언,섬숭이,성괴,섹하고,섹하구,섹하자,섹하장,소라넷,솔친,숨쉴한,쉬발,쉬버,쉬빨,쉬뻘,쉬뿔,쉬이바,쉬파,쉬팍,쉬팔,쉬팡,쉬펄,쉬퐁,쉬풀,슈1발,슈발,슈벌,슈우벌,스너프,스댕,스뎅,스발,스벌,스팔,스펄,슴가,싀발,싀밸,싀벌,싀벨,싀봉,싀팍,싀팔,싀펄,싑창,시1발,시미발친,시미친발,시바,시바라지,시바류,시바알,시바앙,시발,시방새,시벌탱,시볼탱,시부럴,시부렬,시부울,시뷰럴,시뷰렬,시빨,시새발끼,시이발,시친발미,시키가,시팔,시펄,십창,십팔,싸갈통,싸까시,싸물어,싸이코,싸카시,쌍너엄,쌍넌,쌍넘,쌍녀언,쌍년,쌍놈,쌍뇬,쌍눔,쌍늠,쌔끼,썅,썅넘,썅년,썅놈,썅뇬,썅눔,썅늠,썌끼,써글,썩을넘,썩을년,썩을놈,썩을뇬,썩을눔,썩을늠,쒸펄,쓰레기새,씌바,씌박,씌발,씌방,씌밸,씌벌,씌벙,씌벨,씌부랄,씌불,씌블,씌빌,씌빨,씌뻘,씌파,씌팍,씌팔,씌팡,씌펄,씌퐈,씌퐝,씝창,씨1발,씨바라,씨바알,씨발,씨방새,씨버럼,씨벌,씨벌탱,씨볼탱,씨부럴,씨부렬,씨뷰럴,씨뷰렬,씨빠빠,씨빨,씨뻘,씨새발끼,씨이발,씨팔,씹귀,씹못,씹뻐럴,씹새끼,씹선비,씹쌔,씹창,씹치,씹치남,씹팔,씹할,아가리,아가지,아갈이,아괄,아구리,아구지,아구창,아굴창,아닥,아오시바,암베,애미뒤,애미터,애비충,앰뒤,앰창,엠뷩신,엠븽신,엠빙신,엠생,엠창,염병,엿같,엿이나,예질,옘병,오유충,운지,욷높,원조가카,은새끼,응딩이,이새끼,일게이,일벤저스,일벤져스,일붸,자1지,자들자들,자릉내,자쥐,자즤,자취냄,자혐,재기찡,재기하다,전땅크,전라디언,절라,젖같,젗같,젠신병자,젼나,젼낰,졀라,졀리,졌같은,졏같,조까,조낸,조온나,조옷,족까,존나,존낙,존내,졸라,좁밥,좃,종나,좆,좆까,좇,좌고라,좌빨,좌음,좌좀,죠낸,죠온나,죤나,죤내,죵나,죶,주둥아리,주둥이,주절먹,죽여 버리고,죽여버리고,죽여불고,죽여뿌고,중력절,줬같은,쥐랄,쥰나,즤랄,지랄,지롤,지인지조,짱깨,짱께,쪽1바리,쪽국,쪽바리,쪽발,쯰질,찌질한,찝째끼,창녀,창년,창놈,챙놈,청웅,쳐먹,쳐받는,쳐발라,취ㅈ,취좃,탈김치,탈라도,통궈,투명애비,피떡갈비,핑좆남,한남,한남또,한남충,할아보지,핵대중,핵펭귄,행게이,호로새끼,호로잡,호뽑뽑요,혼외수,홍팍,화낭년,화냥년,후레,후려,후빨,후장,盧"
var words = w.split(",");
var notwords = ["도시바", "에이씨벨", "쉬바나", "화염병", "개 같", "빼애액"]
const preMsg = {};
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const UPDATE = {};
UPDATE.saveData = function(msg) { //파일에 내용을 저장하는 함수
  try {
    var file = new java.io.File(sdcard + "/kbot/response.js");
    var fos = new java.io.FileOutputStream(file);
    var str = new java.lang.String(msg);
    fos.write(str.getBytes());
    fos.close();
  } catch (e) {
    Log.debug(e + " At:" + e.lineNumber);
  }
};

function isInt(x) {
return !isNaN(x) && eval(x).toString().length == parseInt(eval(x)).toString().length
}

function getHtml(text) {
    var content = new java.io.ByteArrayOutputStream();
    android.net.http.AndroidHttpClient.newInstance("userAgent").execute(new org.apache.http.client.methods.HttpGet(text)).getEntity().writeTo(content);
    content.close();
    var str = String(content.toString());
    return str;
}

function wiki(query) {
    kiwi = Utils.getWebText('http://49.236.137.7/wiki/' + query)
    kiwi = kiwi.substring(32)
    kiwi = kiwi.substring(0, kiwi.length - 17)
    return kiwi.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "")
}






if ("pdata" in DB == false) DB.pdata = new Object()
if ("can" in DB == false) DB.can = new Array()
if ("intr" in DB == false) DB.intr = new Array()
if ("spe" in DB == false) DB.spe = new Array()
if ("vote" in DB == false) DB.vote = new Array()
if ("first" in DB == false) DB.first = new Array()
if ("first2" in DB == false) DB.first2 = new Array()






// 현재 DB 항목 (꼭! 작성해주세요!)
// DB.icode : 배열(스트링), 식별코드 DB
// DB.inick : 배열(스트링), 닉네임 DB
// DB.date : 숫자, 날짜
// DB.attendance : 숫자, 출석 인원 수
// DB.ncounter : 숫자, 공지카운터
// DB.notice : 스트링, 공지
// DB.ncommand : 스트링, 공지
// DB.lottery : 배열
// DB.p
// DB.p[scode] : 객체, 개인별 항목 구분
// DB.p[scode].attendance : 불린, 출석 여부 확인
// DB.p[scode].pt : 숫자, 개인별 현재 포인트
// DB.p[scode].warning : 숫자, 욕설 사용 경고 횟수
// DB.p[scode].counter : 숫자, 개인별 채팅 횟수
// DB.p[scode].date :  숫자, 개인별 DB 최종 업데이트 날짜
// DB.p[scode].rps[scode] : 숫자, 가위바위보 횟수
// DB.p[scode].call : 배열(스트링), scode를 호출한 사람
// DB.p[scode].callmsg : 배열(스트링), scode를 호출한 사람이 남기는 메시지
// DB.p[scode].lottery : 불린, 복권 응모 여부

// 원함수 내부에 배치할것과 외부에 배치할것 구분해서 배치!
// 최초 사용자 등록 시에만 개인별 데이터가 생성되도록 배치!

if ("icode" in DB == false) DB.icode = new Array()
if ("inick" in DB == false) DB.inick = new Array()

if ("date" in DB == false) DB.date = new Date().getDate() - 1
if ("attendance" in DB == false) DB.attendance = 0
if ("ncounter" in DB == false) DB.ncounter = 0
if ("acounter" in DB == false) DB.acounter = 0
if ("p" in DB == false) DB.p = new Object()
if ("lottery" in DB == false) DB.lottery = new Array()

function response(room, msg, sender, isGroupChat, replier, ImageDB) {
try {
var timea = new Date().getTime();

msg = msg.trim();
room = room.trim();
sender = sender.trim();

	
/* 도배 방지
if (preMsg[room] == msg) {
    return;
}
preMsg[room] = msg;
*/
if (room == "불여우") {
    if (msg == "!프사갱신") {
      DataBase.setDataBase(ImageDB.getProfileImage(), "image")
      replier.reply("프사갱신 완료!" + DataBase.getDataBase("image"))
      return;
    }
}


/////////////////////////////////////////////////////////////////
/*
패시브1 - 관리자 - 일반 - 패시브2 순으로 작성해 주세요
패시브1은 명령어 실행 이전에 체크되는게 좋은 스크립트
패시브2는 명령어 실행 이후에 체크되는게 좋은 스크립트
큰 스크립트 앞에 설명을 꼭 적어주세요
*/
/////////////////////////////////////////////////////////////////

if (room != "■컴퓨터 하드웨어 견적 잡담방■") {
// 식별코드 체크 - 등록 - [scode]변수할당
	

if (DB.inick.indexOf(sender) == -1) {
  while (true) {
    var n = Math.floor(Math.random() * 9000 + 1000);
    if (DB.icode.indexOf(String(n)) == -1) break;
}
      DB.inick.push(sender);
      DB.icode.push(String(n));
      var tb = escape(JSON.stringify(DB.inick));
      var ta2 = [];
      DB.inick.sort();
      var ta = JSON.parse(unescape(tb));
      for (var i = 0; i < DB.icode.length; i++) {
           ta2.push(DB.icode[ta.indexOf(DB.inick[i])])
       }
      DB.icode = ta2
      
      var scode = DB.icode[DB.inick.indexOf(sender)]; // scode: 전송자의 식별코드
      replier.reply(startmsg + "\n자유로운 컴퓨터 커뮤니티 컴퓨톡에 오신 것을 환영합니다.\n!명령어로 명령어를 확인하세요.\n[신규 코드 등록]\n" + sender + " - " + scode)

      DB.p[scode] = new Object()
      
      DB.p[scode].attendance = false
      // DB.p[scode].attendance[] : 아래에 있음
      DB.p[scode].pt = 0
      DB.p[scode].warning = 0
      DB.p[scode].counter = 0
      DB.p[scode].date = new Date().getDate() - 1
      DB.p[scode].rps = 0
      DB.p[scode].call = new Array()
      DB.p[scode].call[0] = "0000"
      DB.p[scode].callmsg = new Array()
      DB.p[scode].lottery = false
      DB.p[scode].pns = 0
      
     
    
  }
  

var scode = DB.icode[DB.inick.indexOf(sender)];

if (sender == "rgb" || sender == "불여우" || sender == "K'romium" || sender == "AMD TR™" || sender == "DEBUG$MODE*NAME+") {
if (msg.indexOf("!evalf ") == 0) {
    replier.reply(eval(msg.substring(7)))
}
}

// 포인트/카운터 증가
DB.p[scode].pt++;
DB.p[scode].counter++;
DB.ncounter++;
DB.acounter++;


if (msg == "!날짜변경") DB.date = new Date().getDate() - 1
// 날짜가 변함에 따라 광역 변수 초기화
if (new Date().getDate() != DB.date) {
    replier.reply("어제의 출석 인원수 : " + DB.attendance + "명")
    DB.attendance = 0;
    
    for (var y = 0; y < DB.icode.length; y++) {
	    var x = DB.icode[y]
        DB.p[x].attendance = false;
        DB.p[x].warning -= 5
        if (DB.p[x].warning < 0) DB.p[x].warning = 0
    }
    var n = Math.floor(Math.random() * DB.lottery.length);
    if (DB.lottery.length != 0) {
    replier.reply("복권 응모자 수 : " + DB.lottery.length + "명")
    var y = DB.lottery.length + 1
    var i = Math.round(y * 10000 / 120)
    if (DB.addpt == true) i += 4000
    DB.p[DB.lottery[n]].pt += i
    replier.reply("오늘의 복권 당첨자는\n" + DB.inick[DB.icode.indexOf(DB.lottery[n])] + "님입니다.\n당첨금 : " + i +"cp (20% VAT)")
    delete DB.lottery;
    DB.lottery = new Array();
    for (var k = 0; k < DB.icode.length; k++) {
        var x = DB.icode[k]
        delete DB.p[x].lottery
	DB.p[x].rps = 0
        DB.p[x].lottery = false;
    }
    }
}
DB.date = new Date().getDate();

// 출석체크
if (DB.p[scode].attendance == false) {
    DB.attendance++;
    if (DB.attendance == 1) {
        var cp = 300
        DB.p[scode].pt += cp
        replier.reply("[" + sender + "]\n" + DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
    } else if (DB.attendance == 2) {
        var cp = 250
        DB.p[scode].pt += cp
        replier.reply("[" + sender + "]\n" + DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
    } else if (DB.attendance > 2 && DB.attendance < 6) {
        var cp = 200
        DB.p[scode].pt += cp
        replier.reply("[" + sender + "]\n" + DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
    } else if (DB.attendance > 4 && DB.attendance < 11) {
        var cp = 150
        DB.p[scode].pt += cp
        replier.reply("[" + sender + "]\n" + DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
    } else {
        var cp = 100
        DB.p[scode].pt += cp
        replier.reply("[" + sender + "]\n" + DB.attendance + "등으로 출석체크!\n" + cp + "cp가 지급됩니다!")
    }
    DB.p[scode].attendance = true;
}


// 호출확인
if (DB.p[scode].call[0] != "0000") {
    var l = [];
    for (var i = 0; i < DB.p[scode].call.length; i++) {
        l.push("[");
        l.push(DB.inick[DB.icode.indexOf(DB.p[scode].call[i])]);
        l.push("]\n");
        l.push(unescape(DB.p[scode].callmsg[i]));
        l.push("\n\n");
    }
    r = l.join([separator = ""]);
    replier.reply("[" + sender + "]\n누군가 당신을 찾습니다.\n▼내용확인▼" + blank + "\n" + r);
    delete DB.p[scode].call
    delete DB.p[scode].callmsg
    DB.p[scode].call = new Array();
    DB.p[scode].call[0] = "0000"
    DB.p[scode].callmsg = new Array();
}

if (sender == "AMD TR™") {
var asdf = Math.floor(Math.random() * 100);
if (asdf == 50) replier.reply("아오 시끄러워요 아조시;")
}

var r = Math.floor(Math.random() * 100);
if (r == 50) {
	var p = Math.floor(Math.random() * 800 + 200) / 100;
	var q = Math.floor(Math.random() * 800 + 200) / 100;
	var i = Math.round(p * q);
	DB.p[scode].pt += i;
	replier.reply("[" + sender + "]\n럭키 포인트! " + i + "cp");
}


/////////////////////////////////////////////////////////////////
/*
var image = DataBase.getDataBase("image")
if (ImageDB.getProfileImage() == image) {
  if (msg.indexOf("!eval ") == 0) {
    replier.reply(eval(msg.substring(6)))
  }
} else if (ImageDB.getProfileImage() != image) {
  if (msg.indexOf("!eval") == 0) {
    replier.reply("관리자가 아닙니다.")
  }
}
*/

if (admin.indexOf(sender) != -1) {
if (msg == "!on") off = false
if (off == true) return
if (msg == "!off") off = true

if (msg == "!업데이트") {
    replier.reply("백업 진행중...");
    DataBase.setDataBase(JSON.stringify(DB), "DB");
    replier.reply("다운로드 진행중...");
    UPDATE.saveData(getHtml("https://raw.githubusercontent.com/chanoo104/kyaongbot/master/response.js"));
    replier.reply("[업데이트 코멘트]\n" + getHtml("https://github.com/chanoo104/kyaongbot/commit/master").split('<p class="commit-title">')[1].split("</p>")[0].trim());
    Api.reload();
    if (error == false) {
      replier.reply("업데이트 성공!")
    } else if (error == true) {
      replier.reply("업데이트 실패..")
    }
    replier.reply("ver. " + ver)
    replier.reply("com. " + updatecode);
    replier.reply(startmsg)
}
if (msg == "!리로드") {
    replier.reply("백업 진행중...");
    DataBase.setDataBase(JSON.stringify(DB), "DB");
    Api.reload();
    replier.reply(startmsg)
}

if (msg == "!로드") {
    replier.reply("백업 진행중...");
    DB = JSON.parse(DataBase.getDataBase("DB2"));
    replier.reply(startmsg)
}
if (msg == "!세이브") {
    replier.reply("진행중...");
    DataBase.setDataBase(JSON.stringify(DB), "DB2");
    replier.reply(startmsg)
}


if (msg == "!확인") {
    replier.reply(updatecode)
}

// 포인트가 별 의미있는 기능은 아닙니다.
// 하지만 그렇다고 포인트 관련 치트 기능을 넣지는 말아주세요. 부탁드려요.
// 관리용으로 넣었는데 절대 사적으로 쓰지 말아주세요. 문법검사없어서 잘못쓰면 DB폭파되니 조심.

if (msg.split(" ")[0] == "!ptmgmt") {
	DB.p[msg.split(" ")[1]].pt += Number(msg.split(" ")[2])
}
if (msg.split(" ")[0] == "!wrmgmt") {
	DB.p[msg.split(" ")[1]].warning += Number(msg.split(" ")[2])
}

// 작동됨
if (msg == "!DB삭제") {
	var DB1= new Object();
	replier.reply("진행중...");
    DataBase.setDataBase(JSON.stringify(DB1), "DB");
    Api.reload();
}
if (msg.split(" ")[0] == "!pDB이전") {
    var x = msg.split(" ")[1];
    var y = msg.split(" ")[2];
    delete DB.p[y];
    var z = DB.icode[DB.icode.indexOf(x)];
    DB.inick.splice(DB.icode.indexOf(x), 1);
    DB.icode.splice(DB.icode.indexOf(x), 1);
    DB.icode.splice(DB.icode.indexOf(y), 1, z);
    replier.reply(DB.icode[0]  + " " + DB.inick[0])
    replier.reply("완료!");
}

if (msg.split(" ")[0] == "!pDB삭제") {
	var x = msg.split(" ")[1]
    delete DB.p[x]
    DB.inick.splice(DB.icode.indexOf(x), 1);
    DB.icode.splice(DB.icode.indexOf(x), 1);
}
	
DB.code = new Object()
DB.preprice = new Object()
DB.price = new Object()
DB.cat = new String()

function getDB(name, link) {
	var data = Utils.getWebText(link);
	DB.code[name] = new Array();
	DB.preprice[name] = new Array();
	var a = data.split('<tr style="border-bottom:1px solid #eee;">');
	for (var i = 0; i < (a.length-1); i++) {
		DB.code[name][i] = link.split("SeqList=")[1].split("&quantity")[0].split(",")[i]
		var b = a[i+1].split('<td style="text-align:center;color:#666;">1</td>');
		var b = b[0].split('<td style="text-align:right;padding-right:5px;color:#666;">')
		var b = b[2].split("&nbsp")
		var b = b[0].replace(/,/g, "")
		if (b == 0) b = Infinity
		DB.preprice[name][i] = Number(b);
		DB.price[name] = new Array();
	}
	DB.cat = name
}

	if (msg.split(" ")[0] == "!견적") {
    DB.estreq= msg.split(" ")[1];
    
replier.reply("DB 파싱중...")
getDB("cpu", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=5530456,5530356,6020667,6020678,5530013&quantityList=1,1,1,1,1&marketPlaceSeq=16&type=print")
//5530456,5530356,6020667,6020678,5530013
var factor = [1,0.95,1,1.05,1];
for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i]/factor[i]);
getDB("mb", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=6024335,6016476,6014541,6020619,6020606,6013975,6023368,6015067&quantityList=1,1,1,1,1,1,1,1&marketPlaceSeq=16&type=print")
//6024335,6016476,6014541,6020619,6020606,6013975,6023368,6015067
var factor = [1.04,1.02,1,0.98,0.9,1,0.95,1];
for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i]/factor[i]);
getDB("ram", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=4343051,5937666&quantityList=1,1&marketPlaceSeq=16&type=print")
//4343051,5937666
var factor = [1,1.07];
for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i]/factor[i]);
getDB("50ti", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=4586507,5065115,4705488,4586604,4587231,4597633,4610900,4585828,4586410&quantityList=1,1,1,1,1,1,1,1,1&marketPlaceSeq=16&type=print")
//4586507,5065115,4705488,4586604,4587231,4597633,4610900,4585828,4586410
var factor = [1.02,1,0.98,0.97,1,1.01,1,1,0.99];
for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i]/factor[i]);
getDB("603", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=4360026,4387267,4362427,4360054,5078735&quantityList=1,1,1,1,1&marketPlaceSeq=16&type=print")
//4360026,4387267,4362427,4360054,5078735
var factor = [1,0.98,0.98,0.99,1]
for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i]/factor[i]);
getDB("606", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=4384735,4260053,5315858,4260892,4340985&quantityList=1,1,1,1,1&marketPlaceSeq=16&type=print")
//4384735,4260053,5315858,4260892,4340985
var factor = [0.98,0.98,1,1,0.99];
for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i]/factor[i]);
getDB("70", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=5900442,4157306,4218595,5613238,4157969,6020607,6076923,5222545,4347178,4129990,5078612&quantityList=1,1,1,1,1,1,1,1,1,1,1&marketPlaceSeq=16&type=print")
//5900442,4157306,4218595,5613238,4157969,6020607,6076923,5222545,4347178,4129990,5078612
var factor = [1,1,1,0.99,1.005,1,1,1,1,0.99,1.02];
for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i]/factor[i]);
getDB("70ti", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=5589466,5594464,5589437,5593383,5594444,5596803,5654372,5742583&quantityList=1,1,1,1,1,1,1,1&marketPlaceSeq=16&type=print")
//5589466,5594464,5589437,5593383,5594444,5596803,5654372,5742583
var factor = [0.98,1,1,1,1,1.01,0.99,1];
for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i]/factor[i]);
getDB("80", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=4137997,4370619,5629697,4128900,4096868,5629753,4347202,5964313,5329502,5081805&quantityList=1,1,1,1,1,1,1,1,1,1&marketPlaceSeq=16&type=print")
//4137997,4370619,5629697,4128900,4096868,5629753,4347202,5964313,5329502,5081805
var factor = [1,1,0.99,1.005,1,1,1,1.01,1,1.015];
for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i]/factor[i]);
getDB("80ti", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=5064255,5064306,5222571,5141068,5046674,5045456,5065092,5435682,5050866,5022642&quantityList=1,1,1,1,1,1,1,1,1,1&marketPlaceSeq=16&type=print")
//5064255,5064306,5222571,5141068,5046674,5045456,5065092,5435682,5050866,5022642
var factor = [0.94,0.95,1,1,1.01,1.01,1.01,1.03,1.02,1];
for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i]/factor[i]);
getDB("ssd", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=5791861,5834197,5791864,6096943&quantityList=1,1,1,1&marketPlaceSeq=16&type=print")
//5791861,5834197,5791864,6096943
var factor = [0.9,1,1,1.3];
for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i]/factor[i]);
getDB("hdd", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=1706996,4354440&quantityList=1,1&marketPlaceSeq=16&type=print")
//1706996,4354440
var factor = [1,1.2];
for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i]/factor[i]);
getDB("chassis","http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=3969924,4678115,6006452,4742536&quantityList=1,1,1,1&marketPlaceSeq=16&type=print")
//3969924,4678115,6006452,4742536
var factor = [1,1,1,1];
for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i]/factor[i]);
getDB("pwr", "http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=1928673,5129268,3272823,5615143&quantityList=1,1,1,1&marketPlaceSeq=16&type=print")
//1928673,5129268,3272823,5615143
var factor = [1,1,1,1,];
for (var i = 0; i < factor.length; i++) DB.price[DB.cat][i] = Math.round(DB.preprice[DB.cat][i]/factor[i]);

replier.reply("DB 후처리중...")
var tmp = ["code", "preprice", "price"]
for (var i = 0; i < 3; i++) {
DB[tmp[i]].cpu1 = DB[tmp[i]].cpu.slice(0,1);
DB[tmp[i]].cpu2 = DB[tmp[i]].cpu.slice(1,4);
DB[tmp[i]].cpu3 = DB[tmp[i]].cpu.slice(4,5);
}
for (var i = 0; i < 3; i++) {
DB[tmp[i]].mb1 = DB[tmp[i]].mb.slice(0,4);
DB[tmp[i]].mb2 = DB[tmp[i]].mb.slice(4,7);
DB[tmp[i]].mb3 = DB[tmp[i]].mb.slice(7,8);
}
for (var i = 0; i < 3; i++) {
DB[tmp[i]].ssd1 = DB[tmp[i]].ssd.slice(0,2);
DB[tmp[i]].ssd2 = DB[tmp[i]].ssd.slice(2,4);
}
for (var i = 0; i < 3; i++) {
DB[tmp[i]].pwr1 = DB[tmp[i]].pwr.slice(0,1);
DB[tmp[i]].pwr2 = DB[tmp[i]].pwr.slice(1,2);
DB[tmp[i]].pwr3 = DB[tmp[i]].pwr.slice(2,3);
DB[tmp[i]].pwr4 = DB[tmp[i]].pwr.slice(3,4);
}
for (var i = 0; i < 3; i++) {
DB[tmp[i]].chassis1 = DB[tmp[i]].chassis.slice(0,1);
DB[tmp[i]].chassis2 = DB[tmp[i]].chassis.slice(1,2);
DB[tmp[i]].chassis3 = DB[tmp[i]].chassis.slice(2,3);
DB[tmp[i]].chassis4 = DB[tmp[i]].chassis.slice(3,4);
}
	

//replier.reply(JSON.stringify(DB))
replier.reply("표준 견적 추출중...")

var est = new Object();
est.code = new Array();
est.quan = new Array();

function minprice(a) {
	return DB.preprice[a][DB.price[a].indexOf(Math.min.apply(null, DB.price[a]))]
}

function estimate(a, b, c, d, e, f, g, h, i) {
	var temp1 = [a,b,c,d,e,f,g,h,i]
	var temp2 = ["cpu","mb","ram","gpu","ssd","hdd","pwr","cool","chassis"]
	for (var i = 0; i < temp1.length; i++) {
		if (temp1[i] == 0) {
			est[temp2[i]] = 0
		} else {
			if (temp1[i].indexOf("2*") == 0) {
				var t = temp1[i].slice(2)
				est[temp2[i]] = 2*minprice(t)
				est.code.push(DB.code[t][DB.preprice[t].indexOf(minprice(t))])
				est.quan.push(2)
			} else {
				est[temp2[i]] = minprice(temp1[i])
				est.code.push(DB.code[temp1[i]][DB.preprice[temp1[i]].indexOf(minprice(temp1[i]))])
				est.quan.push(1)
			}
		}
	}
	return est.cpu+est.mb+est.ram+est.gpu+est.ssd+est.hdd+est.pwr+est.cool+est.chassis
}

{
/*
var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
var estbb = estimate("cpu1","mb1","2*ram","603","ssd1",0,"pwr1",0,"chassis1")
var estcb = estimate("cpu1","mb2","2*ram","606","ssd1",0,"pwr1",0,"chassis2")
var estdb = estimate("cpu2","mb2","2*ram","70","ssd1",0,"pwr2",0,"chassis2")
var esteb = estimate("cpu2","mb2","2*ram","70ti","ssd1",0,"pwr2",0,"chassis2")
var estfb = estimate("cpu3","mb2","2*ram","70ti","ssd1",0,"pwr2",0,"chassis3")
var estgb = estimate("cpu3","mb3","2*ram","80ti","ssd2",0,"pwr4",0,"chassis4")
var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
var estab = estimate("cpu1","mb1","ram","50ti","ssd1",0,"pwr1",0,"chassis1")
replier.reply(estab)
replier.reply(estbb)
replier.reply(estcb)
replier.reply(estdb)
replier.reply(esteb)
replier.reply(estfb)
replier.reply(estgb)
*/
eval("estimate("+DB.estreq+")")
//replier.reply("http://shop.danawa.com/virtualestimate/?controller=estimateMain&methods=estimateByExternalGoodsInfo&productSeqList=" + est.code.join([separator=',']) + "&quantityList=" + est.quan.join([separator=',']) + "&marketPlaceSeq=16&type=print")
replier.reply("http://micro.danawa.com/product/wishList?productSeq=" + est.code.join([separator=',']) + "&count=" + est.quan.join([separator=',']))
replier.reply(eval("estimate("+DB.estreq+")")+"₩")

}
}
	
	
	
// 작동안?됨
/*
try {
if (msg.split(" ")[0] == "!DBkey삭제") {
	eval('delete DB.' + msg.split(" ")[1])
	replier.reply("완료")
}
} catch (e) {
    replier.reply("사용자 DB가 존재하지 않습니다.");
}
try {
if (msg.split(" ")[0] == "!pDBkey삭제") {
	for (var n = 1000; n < 10000; n++) {
		eval('delete DB.p.' + n + 'msg.split(" ")[1]')
		replier.reply("완료")
	}
}
} catch (e) {
    replier.reply("해당 DB가 존재하지 않습니다.");
}
try {
if (msg.split(" ")[0] == "!pDB삭제") {
	eval('delete DB.p.' + msg.split(" ")[1])
	replier.reply("완료")
}
} catch (e) {
    replier.reply("사용자 DB가 존재하지 않습니다.");
}
*/
}

/////////////////////////////////////////////////////////////////
	//불여우호출
if (msg == "!불여우호출")
{
	Utils.getWebText("https://api.telegram.org/bot607216116:AAFhcn0ybpyCw_xwno2ga6pyA-9vF8dOdis/sendmessage?text=불여우님 컴퓨톡에서 " + sender + " 님이 찾고 있습니다.&chat_id=338145573")
        replier.reply("텔레그램으로 불여우를 호출하였습니다.")
}

if (msg == "!명령어") {
    replier.reply(DB.ncommand)
}
if (msg == "!공지") {
    DB.ncounter = 0
DB.noticetimea=new Date().getTime()
    replier.reply(DB.notice)
}

if (msg == "!캬옹봇") replier.reply("KyaongBot, a javascript autoresponse system\n©[Firefox & rgb] 2018. All rights reserved. KyaongBot is protected by GPL 3.0 LICENSE.\n캬옹봇은 카카오톡 오픈채팅방 '컴퓨톡' 만을 위해 개발된 전용 자바스크립트 기반 자동응답 시스템입니다. 다양한 일상 및 편의 기능, 견적 특화 기능, 포인트 시스템 등을 지원합니다. 핵심 개발자는 불여우, rgb이며 서버 호스팅 담당자는 불여우입니다.")

if (msg == "!카운터 전체") replier.reply(DB.acounter)
if (msg == "!카운터 공지") replier.reply(DB.ncounter + "/300")

if (msg == "!카운터 자신") replier.reply("[" + sender + "]\n" + DB.p[scode].counter)

if (msg == "!닉네임") {
    replier.reply(sender)
}
if (msg == "!프사") {
    var img = ImageDB.getProfileImage();
    replier.reply(img);
}

if (msg == "!포인트") replier.reply("[" + sender + "]\n" + DB.p[scode].pt + "cp")

if (msg == "!순위") {
var ctemp1 = DB.inick;
var ctemp2 = [];
for (i=0;i<DB.icode.length;i++) {
ctemp2.push(DB.p[DB.icode[i]].pt)
}
var ctemp3 = ctemp2.slice()
ctemp2.sort(function (f, s) { return s-f; });
ctemp2=ctemp2.splice(0, 15);
var out = [];
out.push("◇[포인트 순위]◇\n▼전체보기 클릭▼\n" + blank + "\n")
var ctemp = DB.inick.slice()
for (i=0;i<ctemp2.length;i++) {
out.push((i+1) + "위 - " + ctemp[ctemp3.indexOf(ctemp2[i])] + "\n")
ctemp.splice([ctemp3.indexOf(ctemp2[i])], 1)
ctemp3.splice([ctemp3.indexOf(ctemp2[i])], 1)
out.push(" 》" + ctemp2[i] + "cp\n\n")
}
replier.reply(out.join(""))
}
	
if (msg.indexOf("[다나와 PC견적]") >= 0) replier.reply("앱에서 견적 공유시 카카오톡으로 보내기 말고 URL 복사를 이용해 주시기 바랍니다. PC버전에서 안보여요.")

/*

if (msg.split("\n")[0] == "!후보등록") {
	if (DB.first.indexOf(sender) == -1) {
		replier.reply("!후보조건 명령어를 사용하여 자신이 조건에 맞는지, 부방장이 될 자격과 능력이 있는 지 확인 후 다시 등록해 주세요.")
	} else {
		if (DB.can.indexOf(sender) != -1) {
			replier.reply("이미 부방장 후보로 등록되었습니다.")
		} else {
			int = msg.split("\n")[1]
			spe = msg.split("\n")[2]
			DB.can.push(sender)
			DB.intr.push(int)
			DB.spe.push(spe)
			DB.vote.push(0)
			replier.reply("부방장 후보로 등록되었습니다.")
		}
	}
}

if (msg == "!후보조건") {
	replier.reply("《후보조건》\n▼내용확인▼" + blank + "[자격조건]\n현 중학교 1학년 이상, 접률 높음(캬옹봇 채팅수 기준 1000회 이상이면 좋음), 객관적인 판단을 할 자신이 있고 끝까지 방 관리를 책임지고 할 수 있는 사람, 컴퓨터에 대해 어느정도 아는 사람\n\n[주의사항]\n장난등록/무성의 등록(기준은 제맘이니 잘 적으세요) 시 투표 종료시까지 강퇴, 벌점 1000cp\n후보등록 이후 어떠한 선거유세도 금지, 위반시 후보자격 박탈, 투표 종료시까지 강퇴\n\n후보등록 취소,수정 불가능\n[후보등록방법]\n아래와 같이 입력(엔터로만 구분, 》》》》엔터 키 2번 이상 사용금지《《《《)\n》경고 문법 오류시 공란으로 표시될 수 있으니 엔터에 주의할것 특히 PC버전 실수로 안보내게 주의《\n\n!후보등록(엔터치고)\n(첫번째줄: 자신의 스펙, 활동이력, 자기가 방에 어떤 기여를 했는지 등 자기소개)(엔터치고)\n(두번째줄: 하고싶은말,다짐 등 한마디)")
	if (DB.first.indexOf(sender) == -1) DB.first.push(sender)
}
if (msg == "!선거?") {
	replier.reply("《선거?》\n▼내용확인▼" + blank + "\n\n차기 부방장 3명이 이 투표를 통해 결정됩니다.후보등록 기간과 투표 기간으로 나뉘며 후보등록 기간에는 투표가 불가능하지만 선거 기간에도 후보등록이 가능합니다. 부방장 출마에 관한 자세한 내용은 <!후보조건> 으로 확인하세요. 개인당 3개의 투표권이 자동으로 주어지며, 자신에게 투표와 중복 투표는 제한되어 있습니다. 투표권을 3장 모두 사용할 의무는 없으니 마음에 드는 사람이 없다면 뽑지 않으셔도 됩니다. 단 한표는 되도록 사용해 주시기 바랍니다. 부정행위는 엄격히 금합니다.\n\n\n\n!선거현황\n》현재 득표수와 후보별 정보 출력\n!투표 <기호(숫자만)>\n》해당 기호의 후보에게 투표(투표권 3회 제공)\n!후보등록\n》부방장 후보로 출마")
}


if (msg == "!선거현황") {
	DB.list = new Array;
	DB.list.push("\n\n\n차기 부방장을 뽑는 선거이니만큼 각 후보를 꼼꼼하게 확인 후 《!투표 <기호>》 로 투표하세요.(취소불가능) 일인당 3개의 투표권이 있습니다. 부정선거시 강력 제제가 가해집니다.\n\n<《득표현황》>\n")
	for (i=0; i<DB.vote.length; i++) {
		var v = new Array;
		var a = Math.floor(DB.vote[i] / 5)
		var b = DB.vote[i] % 5
		for (o=0; o<a; o++) {
			v.push("●")
		}
		for (o=0; o<b; o++) {
			v.push("○")
		}
		DB.list.push("\n\n[기호 " + (i+1) + "번]\n》득표수: " + DB.vote[i] + "\n" + v.join([separator = ""]))
	}
	DB.list.push("\n\n\n<《선거벽보》>\n")
	for (i=0; i<DB.vote.length; i++) {
		DB.list.push("\n\n[기호 " + (i+1) + "번]\n 》닉네임: " + DB.can[i] + "\n 》소개: " + DB.intr[i] + "\n 》다짐: " + DB.spe[i])
	}
	replier.reply("《선거현황》\n▼내용확인▼" + blank + DB.list.join([separator = ""]))
	if (DB.first2.indexOf(sender) == -1) DB.first2.push(sender)
}


loop: {

if (typeof DB.pdata[sender] === "undefined") DB.pdata[sender] = new Array();
if (msg.split(" ")[0] == "!투표") {
	if (typeof DB.startvote === "undefined") {
	replier.reply("지금은 후보 등록 기간입니다. 투표 기간 때 투표를 해주시기 바랍니다. 투표 기간이 되면 공지로 알려드리겠습니다.")
} else {
	if (DB.first2.indexOf(sender) == -1) {
		replier.reply("!선거현황 명령어를 사용하여 공지, 현 투표 상황과 각 후보의 말들을 꼼꼼히 확인한 후 다시 투표해 주세요.")
	} else {
	var v = Number(msg.split(" ")[1])-1
	if (DB.pdata[sender].length >= 3) {
		replier.reply("이미 투표 횟수를 초과하셨습니다.")
		break loop;
	} else {
		if (Number.isInteger(v) == true && v>=0 && v<DB.vote.length) {
			if (DB.pdata[sender].indexOf(v) != -1) {
				("이미 투표한 후보입니다.")
				break loop;
			} else {
				if (sender == DB.can[v]) {
					replier.reply("자기 자신에게는 투표할 수 없습니다.")
					break loop;
				} else {
					DB.pdata[sender].push(v)
					DB.vote[v]++
					replier.reply("투표하셨습니다.\n남은 투표권: " + (3-DB.pdata[sender].length) + "장")
				}
			}
		} else {
		replier.reply("잘못된 입력입니다.")
		}
	}
}
}
}
}
*/
	
loop:{
var m = msg.split (" ");
if (m[0]=="!비교"){
var char;
var s = msg.split ("비교 ");
var tt = s [1].split (","); 
if (typeof tt[1] == "undefined") {
	replier.reply(tt [0]+"을(를) 찾을수 없습니다.")
	break loop;
}
var u = tt[0].split(" ");
if (u [0]){
char = u [0];
}
for (var i=1;i < 100;i++){
if (u[i]){
char+="+";
char += u [i];
}
}
      var test = Utils.getWebText("https://www.google.co.kr/search?&q=userbenchmark+" + char);
      var t = test.split ("/Rating/");
if (!t [1]){
replier.reply(tt [0]+"을(를) 찾을수 없습니다.");
break loop;
}
      var p = t [1].split ('"');
      var s = p [0];
 var r = tt[1].split(" ");
if (r [0]){
char = r [0];
}
for (var i=1;i < 100;i++){
if (r[i]){
char+="+";
char += r [i];
}
}
       test = Utils.getWebText("https://www.google.co.kr/search?&q=userbenchmark+" + char);
       t = test.split ("/Rating/");
if (!t [1]){
replier.reply(tt [1]+"을(를) 찾을수 없습니다.");
break loop;
}
      p = t [1].split ('"');
      var s1 = p [0];
      replier.reply("http://cpu.userbenchmark.com/Compare/CompuTalk/"+s+"vs"+s1);
    }
   }

    loop:{
if (msg.split("\n")[0] == "!견적생성") {
var est = new Object();
est.code = new Array();
est.quan = new Array();

replier.reply("파싱 중...");
for (var i = 0; i < (msg.match(/\n/g) || []).length; i++) {
var input = msg.split("\n")[(i+1)].replace( / /gi, '+')
if (input.indexOf("*") == 1) {
	if (Number.isInteger(Number(input.split("*")[0])) == true) {
		est.quan.push(input.split("*")[0])
		input.slice(0, 2)
	} else {
		replier.reply("[" + (i+2) + "번째 줄] \n잘못된 입력입니다.")
		break loop;
	}
} else {
	est.quan.push("1")
}
var p = Utils.getWebText("https://www.google.co.kr/search?&q=site:prod.danawa.com/info/?pcode=+" + input).split('http://prod.danawa.com/info/?pcode=')[1]
	if (typeof p == "undefined") {
	replier.reply("[" + (i+2) + "번째 줄] \n잘못된 입력입니다.")
	break loop;
}
var p = p.split('"')[0].split("&")[0];
if (Number.isInteger(Number(p)) == true) {
	est.code.push(p)
} else {
	replier.reply("[" + (i+2) + "번째 줄] \n잘못된 입력입니다.")
	break loop;
}

}

replier.reply("http://micro.danawa.com/product/wishList?productSeq=" + est.code.join([separator=',']) + "&count=" + est.quan.join([separator=',']))

}
}

// 욕설인식
loop: {
for (var n = 0; n < notwords.length; n++) {
    if (msg.indexOf(notwords[n]) != -1) break loop;
}
var msg1 = msg.replace(/[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z)]/gi, "");
for (var n = 0; n < words.length; n++) {
  if (msg1.indexOf(words[n]) != -1) {
    DB.p[scode].warning++
    var i = DB.p[scode].warning * 30 - 30
    if (DB.p[scode].warning == 1) replier.reply("[" + sender + "]\n누적 경고: 1회")
    if (DB.p[scode].warning != 1) {
      replier.reply("[" + sender + "]\n누적 경고: " + DB.p[scode].warning + "회\n" + i + "cp 차감");
      DB.p[scode].pt -= i
   }
    if (DB.p[scode].warning > 10) {
      Api.replyRoom("간부방", "[" + sender + "]\n욕설 사용 횟수:" + DB.p[scode].warning + "회")
    }
    break;
  }
}
}

// 상벌점
loop: {
if (msg.split(" ")[0] == "!상점") {
    if (DB.icode.indexOf(msg.split(" ")[1]) == -1) {
        replier.reply("상대의 식별코드가 등록되지 않았습니다.");
        break loop;
    }
    var a = Number(msg.split(" ")[2])
    if (isInt(a) == false || a < 0) {
        replier.reply("사용할 포인트를 자연수로 입력해 주세요.");
        break loop;
    }
    if (a < 10) {
        replier.reply("10cp부터 이용 가능합니다.");
        break loop;
    }
    var i = Math.round(a * 1.2);
    if (DB.p[scode].pt - i < 0) {
        var x = i - DB.p[scode].pt;
        replier.reply("포인트가 " + x + "cp 부족합니다. VAT 20%를 유의해 주세요.");
        break loop;
    }
    DB.p[scode].pt -= i;
    DB.p[msg.split(" ")[1]].pt += a;
    replier.reply("[상점]\n" + sender + " → " + DB.inick[DB.icode.indexOf(msg.split(" ")[1])] + "\n+" + a + "cp (-" + i + "cp) (20% VAT)");
}
}
loop: {
if (msg.split(" ")[0] == "!벌점") {
    if (DB.icode.indexOf(msg.split(" ")[1]) == -1) {
        replier.reply("상대의 식별코드가 등록되지 않았습니다.");
        break loop;
    }
    var a = Number(msg.split(" ")[2])
    if (isInt(a) == false || a < 0) {
        replier.reply("사용할 포인트를 자연수로 입력해 주세요.");
        break loop;
    }
    if (a < 10) {
        replier.reply("10cp부터 이용 가능합니다.");
        break loop;
    }
  var t = timea - DB.p[scode].pns
    if (t < 180000) {
        var v = 180 - Math.round(t / 1000)
    	replier.reply("쿨타임 : " + v + "sec")
    break loop;
    }
    var i = Math.round(a * 1.5);
    if (DB.p[scode].pt - i < 0) {
        var x = i - DB.p[scode].pt;
        replier.reply("포인트가 " + x + "cp 부족합니다. VAT 50%를 유의해 주세요.");
        break loop;
    }
    DB.p[scode].pns = new Date().getTime();
    DB.p[scode].pt -= i;
    DB.p[msg.split(" ")[1]].pt -= a;
    replier.reply("[벌점]\n" + sender + " → " + DB.inick[DB.icode.indexOf(msg.split(" ")[1])] + "\n-" + a + "cp (-" + i + "cp) (50% VAT)");
}
}

if (msg == "!코드확인") replier.reply("[" + sender + "]\n식별코드 : " + scode)

// 식별코드 목록
if (msg == "!코드목록") {
      var ilist = [];
      for (var i = 0; i < DB.icode.length; i++) {
        ilist.push(DB.icode[i]);
        ilist.push(" - ");
        ilist.push(DB.inick[i]);
        ilist.push("\n");
      }
      rep = ilist.join([separator = '']);      
      replier.reply("식별코드 목록\n▼전체보기 클릭▼" + blank + "\n" + rep);
}


//코드변경
loop: {
if (msg.split(" ")[0] == "!코드변경") {
  var to = msg.split("!코드변경 ")[1]
  if (typeof to == "undefined") replier.reply("1000에서 9999까지의 자연수를 입력해 주십시오.");
  if (! /^[0-9]+$/.test(to) || to.indexOf("0") == 0 ) {
	  replier.reply("잘못된 입력입니다.");
	  break loop;
}
	
  if (DB.p[scode].pt > 499){
  if (isInt(Number(to)) == true && parseInt(to) > 999 && parseInt(to) < 10000) {
    if (DB.icode.indexOf(to) != -1) {
      replier.reply("이미 사용중인 식별코드입니다.");
    } else {
      DB.p[to] = DB.p[scode]
      delete DB.p[scode]
      DB.icode.splice(DB.icode.indexOf(scode), 1, to);
      DB.p[to].pt -= 500
      replier.reply("식별코드가 변경되었습니다. 500cp가 차감되었습니다.");
    }
  } else {
    replier.reply("1000에서 9999까지의 자연수를 입력해 주십시오.");
  }
} else {
var x = 500 - DB.p[scode].pt
replier.reply("포인트가 " + x + "cp 부족합니다.")
}
	
}
}

//코드검색
loop: {
    if (msg.split(" ")[0] == "!코드검색") {
    var key = msg.split(" ")[1];
    if (key.length <= 1) {
    replier.reply("2글자 이상 입력해 주세요.");
    break loop;
    }
    var list = new Array();
    list.push("[검색결과]");
    for (var i = 0; i < DB.icode.length; i++) {
        if (DB.inick[i].toLowerCase().indexOf(key.toLowerCase()) != -1) {
        list.push("\n" + DB.icode[i] + " - " + DB.inick[i]);
    }
    }
    if (list.length == 1) {
        replier.reply("검색 결과가 없습니다.");
        break loop;
    }
    replier.reply(list.join([separator = ""]));
    }
}
    
//호출
loop: {
    if (msg.split(" ")[0] == "!호출") {
            if (DB.icode.indexOf(msg.split(" ")[1]) == -1) {
        replier.reply("상대의 식별코드가 등록되지 않았습니다.");
        break loop;
    }
    var o = scode;
    var s = msg.split(" ")[1];
    if (DB.p[s].call.indexOf(o) != -1) {
        replier.reply("이미 상대를 호출했습니다.")
        break loop;
    }
        var s = msg.split(" ")[1];
        var m = msg.substr(9);
        if (DB.p[s].call[0] == "0000") DB.p[s].call = new Array();
        DB.p[s].call.push(o);
        DB.p[s].callmsg.push(escape(m));
    }
}

loop: {
    if (msg.split(" ")[0] == "!염탐") {
            if (DB.icode.indexOf(msg.split(" ")[1]) == -1) {
        replier.reply("상대의 식별코드가 등록되지 않았습니다.");
        break loop;
    }
    var x = 50 - DB.p[scode].pt
    if (x  > 0) {
            replier.reply("포인트가 " + x + "cp 부족합니다.");
            break loop;
    }
    DB.p[scode].pt -= 50
    replier.reply("50cp가 차감됩니다.\n[" + DB.inick[DB.icode.indexOf(msg.split(" ")[1])] + "] " + DB.p[msg.split(" ")[1]].pt + "cp")
    }
}

// 복권
loop : {
if (msg.split(" ")[0] == "!복권") {

	if (DB.p[scode].lottery == true) {
		replier.reply("이미 오늘은 복권에 응모하셨습니다.")
		break loop;
	}
    var x = 100 - DB.p[scode].pt
    if (x  > 0) {
            replier.reply("포인트가 " + x + "cp 부족합니다.");
            break loop;
    }
	replier.reply("복권에 응모하셨습니다.\n100cp가 차감됩니다.")
	DB.lottery.push(scode);
	DB.p[scode].lottery = true
	DB.p[scode].pt -= 100

}
}

if (msg.split(" ")[0] == "!가위" || msg.split(" ")[0] == "!바위" || msg.split(" ")[0] == "!보") {
if (new Date().getHours() == 12 || new Date().getHours() == 0 || new Date().getHours() == 7 || new Date().getHours() == 22) {
if (new Date().getMinutes() >= 30){
// 가위바위보
loop: {
if (msg.split(" ")[0] == "!가위") {
    var i = Number(msg.split(" ")[1]);
    if (isInt(i) == false) {
        replier.reply("사용할 포인트를 자연수로 입력해 주세요.");
        break loop;
    }
    if (i > 9 && i < 1001) {
    	var y = DB.p[scode].rps - 4
        var x = y * 10 + i - DB.p[scode].pt
    if (x  > 0) {
            replier.reply("포인트가 " + x + "cp 부족합니다.");
            break loop;
        }
        if (DB.p[scode].rps == 4) {
    	replier.reply("오늘의 마지막 기회입니다.");
    }
        if (DB.p[scode].rps > 4) {
break loop;
        }
        DB.p[scode].rps++
        var n = Math.floor(Math.random() * 3);
        if (n == 0) {
            replier.reply("보! 승리하셨습니다.\n" + i + "cp를 획득하셨습니다.")
            DB.p[scode].pt += i
        }
        if (n == 1) {
            replier.reply("가위! 비겼습니다. 포인트가 반환됩니다.")
        }
        if (n == 2) {
            replier.reply("바위! 이겨버린건가요 ㅋ\n이 포인트는 이제 제껍니다.")
            DB.p[scode].pt -= i
        }
    } else {
        replier.reply("10에서 1000 사이의 포인트를 입력해 주세요.");
    }
}
}
loop: {
if (msg.split(" ")[0] == "!바위") {
    var i = Number(msg.split(" ")[1])
    if (isInt(i) == false) {
        replier.reply("사용할 포인트를 자연수로 입력해 주세요.");
        break loop;
    }
    if (i > 9 && i < 1001) {
    	var y = DB.p[scode].rps - 4
        var x = y * 10 + i - DB.p[scode].pt
    if (x  > 0) {
            replier.reply("포인트가 " + x + "cp 부족합니다.");
            break loop;
        }
        if (DB.p[scode].rps == 4) {
    	replier.reply("오늘의 마지막 기회입니다.");
    }
        if (DB.p[scode].rps > 4) {
          break loop;  
        }
        DB.p[scode].rps++
        var n = Math.floor(Math.random() * 3);
        if (n == 0) {
            replier.reply("가위! 승리하셨습니다.\n" + i + "cp를 획득하셨습니다.")
            DB.p[scode].pt += i
        }
        if (n == 1) {
            replier.reply("바위! 비겼습니다. 포인트가 반환됩니다.")
        }
        if (n == 2) {
            replier.reply("보! 이겨버린건가요 ㅋ\n이 포인트는 이제 제껍니다.")
            DB.p[scode].pt -= i
        }
    } else {
        replier.reply("10에서 1000 사이의 포인트를 입력해 주세요.");
    }
}
}
loop: {
if (msg.split(" ")[0] == "!보") {
    var i = Number(msg.split(" ")[1])
    if (isInt(i) == false) {
        replier.reply("사용할 포인트를 자연수로 입력해 주세요.");
        break loop;
    }
    if (i > 9 && i < 1001) {
    	var y = DB.p[scode].rps - 4
        var x = y * 10 + i - DB.p[scode].pt
    if (x  > 0) {
            replier.reply("포인트가 " + x + "cp 부족합니다.");
            break loop;
        }
        if (DB.p[scode].rps == 4) {
    	replier.reply("오늘의 마지막 기회입니다.");
    }
        if (DB.p[scode].rps > 4) {
            break loop;
        }
        DB.p[scode].rps++
        var n = Math.floor(Math.random() * 3);
        if (n == 0) {
            replier.reply("바위! 승리하셨습니다.\n" + i + "cp를 획득하셨습니다.")
            DB.p[scode].pt += i
        }
        if (n == 1) {
            replier.reply("보! 비겼습니다. 포인트가 반환됩니다.")
        }
        if (n == 2) {
            replier.reply("가위! 이겨버린건가요 ㅋ\n이 포인트는 이제 제껍니다.")
            DB.p[scode].pt -= i
        }
    } else {
        replier.reply("10에서 1000 사이의 포인트를 입력해 주세요.");
    }
}
}
} else {
replier.reply("0, 7, 12, 22시 30~59분에만 사용 가능합니다.")
}
} else {
replier.reply("0, 7, 12, 22시 30~59분에만 사용 가능합니다.")
}
}	

if (msg == "!견적양식") {
	replier.reply("[rgb]\n견적 요청 전 생각해봐야할 것들" + blank + "\n\n》자기가 컴퓨터가 왜 필요한지 생각합니다.\n컴퓨터를 구매하는 필요성과 중요도를 파악하고 목적을 정합니다.\nex) 이제 피방 말고 집에서 배그를 하고싶어! 취미로 하던 영상편집도 좀 더 수월하게!\n\n》또 필요한게 없는지 생각해 봅니다. (윈도우, 모니터, 키보드/마우스, 스피커/헤드셋 등)\n운영 체제, 주변 기기와 특수 목적 장비(캡처보드 등)의 구입 필요성을 판단해 봅니다.\nex) 모니터도 144인가? 그걸로 사고, 키마도 지금쓰는 삼성키보드에서 벗어나야지. 윈도우는 내가 예산이 여유롭지 않으니 그냥 직접 설치해야겠어.\n\n》컴퓨터 구입에 사용할 예산과, 컴퓨터 실 구매 예정일을 정합니다.\n자기가 무리하지 않고 지출할 수 있는 적절한 예산과, 그에 연계되는 구매 예정일을 정합니다.\nex) 구매를 미루고 싶지는 않으니.. 일단 지금 수중에 돈이 130정도 있는데, 월말까지 30만원정도 더 모은 후 구매해야겠어.\n예상 구매 예정일이 너무 많이(1달 이상) 남았을 경우 견적은 구매 임박 일자에 짜는 것이 좋습니다. 돈 모으고 계세요.\n\n》자기가 컴퓨터에 바라는 점을 생각합니다.\n예를 들자면\n- 사양 좋게\n- 업글같은거 안하고 한번 사서 오래 쓰게\n이런 단순한 것부터\n- 저소음\n- 내부 부품 품질을 좋게\n이런거나\n- 플루이드 모션!\n이런 것까지 아주 단순한 것부터 복잡한 것까지 최대한 많이 생각해 봅니다.\n\n》견적 양식을 채웁니다.\n")
	replier.reply("[rgb]\n견적 양식(전체보기-꾹눌러 복사)" + blank + "\n\n1. 구매예정일(구체적!)\n\n2. 용도(자세히!)\n\n3. 구성품(모니터 마우스 헤드셋 등)\n\n3.1. 윈도우 포함 여부\n\n4. 컴퓨터에 바라는 점(최대한 많이)\n\n5. 본체 디자인 신경쓰세요?\n\n6. 예산(대충이라도)\n\n7. 기타 질문?\n")
}
// 실검
if (msg.trim() == "!실검") { //!실검 이면
    var 실검 = [];
    for (var abab = 1; abab < 21; abab++) {
      실검.push(abab + ". " + getHtml("http://rank.search.naver.net/rank.js").replace(/\"/g, "").split("keyword:")[abab].split(",")[0]); //파싱
    }
    replier.reply(실검.join("\n")); //합해서 보내기
}
// 날씨
if (msg == "!날씨") { //!날씨면
    var data = Utils.getWebText("https://m.search.naver.com/search.naver?query=날씨"); //네이버 검색에서 파싱
    var data2 = data.split("전국날씨</strong>"); // 자르기
    var data3 = data2[1].split("특보");
    var data4 = data3[0].replace(/(<([^>]+)>)/g, "");
    data4 = data4.trim();
    data4 = data4.replace(/  /g, ""); //태그 제거
    data4 = data4.replace(/도씨/g, "℃"); //화씨
    data4 = data4.replace(/ /g, ", "); //태그제거
    replier.reply("[현재 날씨]\n" + data4); //보내기
}
// 음원차트 순위 확인
if (msg == "!차트") { //!차트면
    var charts = [];
    for (var i = 1; i < 51; i++) {
      chart = Utils.getWebText("http://m.music.naver.com/listen/top100.nhn?domain=DOMESTIC")
      var a = chart.split("<span class=\"rank\">")[i].split("</span>")[0];
      var b = chart.split("<strong class=\"tit\"> ")[i].split("</strong>")[0];
      var c = chart.split("<span class=\"stit\">")[i].split("</span>")[0];
      charts.push("순위 : " + a + "\n제목 : " + b + "\n아티스트(앨범) : " + c);
    }
    replier.reply(charts.join("\n=============\n"))
}
// 암호화폐 시세 확인
if (msg == "!비트코인") { //만약 비트코인이라면
    var coinone = getHtml("http://api.coinone.co.kr/ticker?currency=all&format=json"); //코인원에서 파싱
    var last = coinone.split('"last":"'); // last:" 를 기준으로 자르기
    var currency = coinone.split('"currency":"'); //currenct": 를 기준으로 자르기
    var vmlist = []; //새로운 함수 생성
    for (var i = 1; i <= 9; i++) { //반복
      vmlist.push(currency[i].split('"')[0] + " : " + last[i].split('"')[0]); //변수 생성
    }
    replier.reply(vmlist.join("원\n") + "원"); // 보내기
}
// 단어 검색
try {
    if (msg.indexOf("!단어") == 0) {
      var u = Utils.getWebText("http://krdic.naver.com/search.nhn?query=" + msg.substr(3));
      var a = u.split("<ul class=\"lst3\">")
      var b = a[1].split("</ul>")
      var c = b[0].replace(/(<([^>]+)>)/g, "");
      c = c.replace(/발음재생/g, "")
      c = c.replace(/단어장 저장/g, "")
      c = c.replace(/매우중요/g, "")
      c = c.replace(/유의어/g, "\n\n유의어")
      c = c.trim()
      c = c.replace(/\n         /g, "")
      c = c.replace(/  /g, "\n")
      c = c.replace(/\n\n\n/g, "")
      replier.reply("[" + msg.substr(3) + " 검색 결과]\n\n" + c)
    }
  } catch (e) {
    replier.reply("단어 정보가 없습니다. 다시 입력해보세요.");
}
// 롤 전적
try {
    if (msg.indexOf("!롤전적") == 0) {
      msgi = msg.replace(/ /g, "+"); //메세지 부분에 공백부분을 +로 대체해줍니다 (그냥 띄어쓰기용)
      var u = Utils.getWebText("http://www.op.gg/summoner/userName=" + msgi.substr(4)); //변수 u는 이링크를 HTML파싱한 값이다
      var t = u.split("<span class=\"tierRank\">"); //변수 a는 변수 u에서 HTML에 <span class="tierRank"> 을 자른값 입니다 /이걸로 해서 tierRank부분을 자른겁니다
      var w = u.split("<span class=\"wins\">"); //나머지도 마찬가지입니다
      var l = u.split("<span class=\"losses\">");
      var win = u.split("<span class=\"winratio\">");
      replier.reply(msg.substr(5) + "님의 롤 전적 검색결과 입니다\n티어 : " + t[1].split("<")[0] + "\n승리 : " + w[1].split("<")[0] + "\n패배 : " + l[1].split("<")[0] + "\n승률 : " + win[1].split("<")[0]);
    }
  } catch (e) { //결과값을 찾을수 없으면
    replier.reply("롤전적 정보가 없습니다");
}
// 배그 서버 상태
if (msg == "!배그서버") {
    replier.reply("현재 배그 서버의 동접자는 " + Utils.getWebText("https://dak.gg/?hl=ko-KR").split('현재 배틀그라운드 동접자: ')[1].split('<a href="/statistics/playing">')[0].trim() + "이며, 서버는 " + Utils.getWebText("https://dak.gg/?hl=ko-KR").trim().split('서버:</strong> <span>')[1].split('</span>')[0] + "입니다.")
}
// 가사 정보
try {
    if (msg.split(" ")[0] == "!가사") {
      var u = Utils.getWebText("https://m.search.naver.com/search.naver?query=" + encodeURIComponent(msg.substr(4) + "가사"));
      u = u.replace(/   /g, "");
      u = u.replace(/<br>/g, "");
      u = u.replace(/<mark>/g, "");
      u = u.replace(/<\/mark>/g, "");
      var a = u.split("<div class=\"lyrics_txt\">");
      var b = u.split("<strong  class=\"tit\">");
      var c = u.split("<span class=\"name\">");
      replier.reply(msg.substr(4) + " 검색결과 입니다\n가수:" + c[2].split("<")[0] + "\n앨범 제목:" + c[1].split("<")[0] + "\n▼전체보기 클릭▼                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               \n가사정보:\n" + a[1].split("<")[0]);
    }
} catch (e) {
    replier.reply("가사 정보가 없습니다. 다시 입력해보세요.");
}
/////////////////////////////////////////////////////////////////

// 카운터 다차면 공지표시
DB.ncounter++;
if (DB.ncounter > 299) {
   DB.ncounter = 0
   replier.reply(DB.notice)
   DataBase.setDataBase(JSON.stringify(DB), "DB");
DB.noticetimeb=DB.noticetimea
DB.noticetimea=new Date().getTime()
var t = DB.noticetimea-DB.noticetimeb
replier.reply("FPN : " + Math.round(120000*3000/t) + "°C")

}

if (sender == "rgb" || sender == "불여우" || sender == "DEBUG$MODE*NAME+") {
try{
if (msg.indexOf("!eval ") == 0) {
    replier.reply(eval(msg.substring(6)))
    }
}
catch (e) {
replier.reply("eval 실행 중 오류 발생!\n오류 메시지 : " + e.message)
}
}


/////////////////////////////////////////////////////////////////


/////////////////////(크롬이 만든거)//////////////////////////////
if (msg.indexOf("8ball ") == 0) {
        var br = Math.floor(Math.random()*15)+1;
        if (br == 1){
            replier.reply("전망이 좋지 않습니다..");
        } 
        if (br == 2){
            replier.reply("아니요!");
        } 
        if (br == 3){
            replier.reply("제 직감으로 봐서는 아닐겁니다!");
        } 
        if (br == 4){
            replier.reply("제 답변은...아니오입니다!");
        } 
        if (br == 5){
            replier.reply("그렇지 않을겁니다..");
        }
        if (br == 6){
            replier.reply("앗..! 깜빡하고 졸아서 질문을 받지 못하였습니다..");
        } 
        if (br == 7){
            replier.reply("아앗..집중해서 다시 해보세요!");
        }
        if (br == 8){
            replier.reply("예측을..못하겠습니다..!");
        }
        if (br == 9){
            replier.reply("아마.. 그렇지 않을까요?");
        }
        if (br == 10){
            replier.reply("아마도 그럴겁니다!");
        }
        if (br == 11){
            replier.reply("저를 믿어도 좋습니다!");
        }
        if (br == 12){
            replier.reply("네!");
        }
        if (br == 13){
            replier.reply("의심할 여지 없이 당연합니다!");
        }
        if (br == 14){
            replier.reply("확실히 그렇습니다!");
        }
        if (br == 15){
            replier.reply("당연히 그럴겁니다!");
        }          
    }


if (msg == "!크롬") {
    replier.reply("코딩을 좋아한다 메우")
}
/////////////////////////////////////////////////////////////////

var timeb = new Date().getTime();
var t = timeb - timea;
if (msg == "!응답속도") replier.reply("응답속도 : " + t + "ms")
var tt = timea - timeo;
var ttt = Math.round(tt / 60000);
if (msg == "!동작시간") replier.reply("동작시간 : " + ttt + "min")

} else {
if (msg == "!견적양식") {
	replier.reply("[rgb]\n견적 요청 전 생각해봐야할 것들" + blank + "\n\n》자기가 컴퓨터가 왜 필요한지 생각합니다.\n컴퓨터를 구매하는 필요성과 중요도를 파악하고 목적을 정합니다.\nex) 이제 피방 말고 집에서 배그를 하고싶어! 취미로 하던 영상편집도 좀 더 수월하게!\n\n》또 필요한게 없는지 생각해 봅니다. (윈도우, 모니터, 키보드/마우스, 스피커/헤드셋 등)\n운영 체제, 주변 기기와 특수 목적 장비(캡처보드 등)의 구입 필요성을 판단해 봅니다.\nex) 모니터도 144인가? 그걸로 사고, 키마도 지금쓰는 삼성키보드에서 벗어나야지. 윈도우는 내가 예산이 여유롭지 않으니 그냥 직접 설치해야겠어.\n\n》컴퓨터 구입에 사용할 예산과, 컴퓨터 실 구매 예정일을 정합니다.\n자기가 무리하지 않고 지출할 수 있는 적절한 예산과, 그에 연계되는 구매 예정일을 정합니다.\nex) 구매를 미루고 싶지는 않으니.. 일단 지금 수중에 돈이 130정도 있는데, 월말까지 30만원정도 더 모은 후 구매해야겠어.\n예상 구매 예정일이 너무 많이(1달 이상) 남았을 경우 견적은 구매 임박 일자에 짜는 것이 좋습니다. 돈 모으고 계세요.\n\n》자기가 컴퓨터에 바라는 점을 생각합니다.\n예를 들자면\n- 사양 좋게\n- 업글같은거 안하고 한번 사서 오래 쓰게\n이런 단순한 것부터\n- 저소음\n- 내부 부품 품질을 좋게\n이런거나\n- 플루이드 모션!\n이런 것까지 아주 단순한 것부터 복잡한 것까지 최대한 많이 생각해 봅니다.\n\n》견적 양식을 채웁니다.\n")
	replier.reply("[rgb]\n견적 양식(전체보기-꾹눌러 복사)" + blank + "\n\n1. 구매예정일(구체적!)\n\n2. 용도(자세히!)\n\n3. 구성품(모니터 마우스 헤드셋 등)\n\n3.1. 윈도우 포함 여부\n\n4. 컴퓨터에 바라는 점(최대한 많이)\n\n5. 본체 디자인 신경쓰세요?\n\n6. 예산(대충이라도)\n\n7. 기타 질문?\n")
}
}
} catch (e) {
    var error = true;
    if (DataBase.getDataBase("errorchk") == 0) {
      Utils.getWebText("에러발생!\nhttps://api.telegram.org/bot607216116:AAFhcn0ybpyCw_xwno2ga6pyA-9vF8dOdis/sendmessage?text=ERROR!\nmessage : " + e.message + "\nline no. : " + Number(Number(e.lineNumber) + Number(1)))
      replier.reply("ERROR!\nmessage : " + e.message + "\nline no. : " + Number(Number(e.lineNumber) + Number(1)))
      DataBase.setDataBase(1, "errorchk")
      Api.reload();
    }
}
}
