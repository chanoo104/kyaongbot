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
*/
/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,r){"$:nomunge";function l(e){return e=e||location.href,"#"+e.replace(/^[^#]*#?(.*)$/,"$1")}var i="hashchange",s=n,o,u=e.event.special,a=s.documentMode,f="on"+i in t&&(a===r||a>7);e.fn[i]=function(e){return e?this.bind(i,e):this.trigger(i)},e.fn[i].delay=50,u[i]=e.extend(u[i],{setup:function(){if(f)return!1;e(o.start)},teardown:function(){if(f)return!1;e(o.stop)}}),o=function(){function p(){var n=l(),r=h(u);n!==u?(c(u=n,r),e(t).trigger(i)):r!==u&&(location.href=location.href.replace(/#.*/,"")+r),o=setTimeout(p,e.fn[i].delay)}var n={},o,u=l(),a=function(e){return e},c=a,h=a;return n.start=function(){o||p()},n.stop=function(){o&&clearTimeout(o),o=r},t.attachEvent&&!t.addEventListener&&!f&&function(){var t,r;n.start=function(){t||(r=e.fn[i].src,r=r&&r+l(),t=e('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||c(l()),p()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow,s.onpropertychange=function(){try{event.propertyName==="title"&&(t.document.title=s.title)}catch(e){}})},n.stop=a,h=function(){return l(t.location.href)},c=function(n,r){var o=t.document,u=e.fn[i].domain;n!==r&&(o.title=s.title,o.open(),u&&o.write('<script>document.domain="'+u+'"</script>'),o.close(),t.location.hash=n)}}(),n}()})(e,this),function(e){e.mobile={}}(e),function(e,t,n){e.extend(e.mobile,{version:"1.4.5",subPageUrlKey:"ui-page",hideUrlBar:!0,keepNative:":jqmData(role='none'), :jqmData(role='nojs')",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,minScrollBack:0,defaultDialogTransition:"pop",pageLoadErrorMessage:"Error Loading Page",pageLoadErrorMessageTheme:"a",phonegapNavigationEnabled:!1,autoInitializePage:!0,pushStateEnabled:!0,ignoreContentEnabled:!1,buttonMarkup:{hoverDelay:200},dynamicBaseEnabled:!0,pageContainer:e(),allowCrossDomainPages:!1,dialogHashKey:"&ui-state=dialog"})}(e,this),function(e,t,n){var r={},i=e.find,s=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,o=/:jqmData\(([^)]*)\)/g;e.extend(e.mobile,{ns:"",getAttribute:function(t,n){var r;t=t.jquery?t[0]:t,t&&t.getAttribute&&(r=t.getAttribute("data-"+e.mobile.ns+n));try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:s.test(r)?JSON.parse(r):r}catch(i){}return r},nsNormalizeDict:r,nsNormalize:function(t){return r[t]||(r[t]=e.camelCase(e.mobile.ns+t))},closestPageData:function(e){return e.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")}}),e.fn.jqmData=function(t,r){var i;return typeof t!="undefined"&&(t&&(t=e.mobile.nsNormalize(t)),arguments.length<2||r===n?i=this.data(t):i=this.data(t,r)),i},e.jqmData=function(t,n,r){var i;return typeof n!="undefined"&&(i=e.data(t,n?e.mobile.nsNormalize(n):n,r)),i},e.fn.jqmRemoveData=function(t){return this.removeData(e.mobile.nsNormalize(t))},e.jqmRemoveData=function(t,n){return e.removeData(t,e.mobile.nsNormalize(n))},e.find=function(t,n,r,s){return t.indexOf(":jqmData")>-1&&(t=t.replace(o,"[data-"+(e.mobile.ns||"")+"$1]")),i.call(this,t,n,r,s)},e.extend(e.find,i)}(e,this),function(e,t){function s(t,n){var r,i,s,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(s=e("img[usemap=#"+i+"]")[0],!!s&&o(s))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&o(t)}function o(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var r=0,i=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"c0ab71056b936627e8a7821f03c044aec6280a40",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(n,r){return typeof n=="number"?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),r&&r.call(t)},n)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(this[0].ownerDocument||n):t},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++r)})},removeUniqueId:function(){return this.each(function(){i.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return s(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&s(t,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in n.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(r){if(r!==t)return this.css("zIndex",r);if(this.length){var i=e(this[0]),s,o;while(i.length&&i[0]!==n){s=i.css("position");if(s==="absolute"||s==="relative"||s==="fixed"){o=parseInt(i.css("zIndex"),10);if(!isNaN(o)&&o!==0)return o}i=i.parent()}}return 0}}),e.ui.plugin={add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n,r){var i,s=e.plugins[t];if(!s)return;if(!r&&(!e.element[0].parentNode||e.element[0].parentNode.nodeType===11))return;for(i=0;i<s.length;i++)e.options[s[i][0]]&&s[i][1].apply(e.element,n)}}}(e),function(e,t,r){var i=function(t,n){var r=t.parent(),i=[],s=function(){var t=e(this),n=e.mobile.toolbar&&t.data("mobile-toolbar")?t.toolbar("option"):{position:t.attr("data-"+e.mobile.ns+"position"),updatePagePadding:t.attr("data-"+e.mobile.ns+"update-page-padding")!==!1};return n.position!=="fixed"||n.updatePagePadding!==!0},o=r.children(":jqmData(role='header')").filter(s),u=t.children(":jqmData(role='header')"),a=r.children(":jqmData(role='footer')").filter(s),f=t.children(":jqmData(role='footer')");return u.length===0&&o.length>0&&(i=i.concat(o.toArray())),f.length===0&&a.length>0&&(i=i.concat(a.toArray())),e.each(i,function(t,r){n-=e(r).outerHeight()}),Math.max(0,n)};e.extend(e.mobile,{window:e(t),document:e(n),keyCode:e.ui.keyCode,behaviors:{},silentScroll:function(n){e.type(n)!=="number"&&(n=e.mobile.defaultHomeScroll),e.event.special.scrollstart.enabled=!1,setTimeout(function(){t.scrollTo(0,n),e.mobile.document.trigger("silentscroll",{x:0,y:n})},20),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150)},getClosestBaseUrl:function(t){var n=e(t).closest(".ui-page").jqmData("url"),r=e.mobile.path.documentBase.hrefNoHash;if(!e.mobile.dynamicBaseEnabled||!n||!e.mobile.path.isPath(n))n=r;return e.mobile.path.makeUrlAbsolute(n,r)},removeActiveLinkClass:function(t){!!e.mobile.activeClickedLink&&(!e.mobile.activeClickedLink.closest("."+e.mobile.activePageClass).length||t)&&e.mobile.activeClickedLink.removeClass(e.mobile.activeBtnClass),e.mobile.activeClickedLink=null},getInheritedTheme:function(e,t){var n=e[0],r="",i=/ui-(bar|body|overlay)-([a-z])\b/,s,o;while(n){s=n.className||"";if(s&&(o=i.exec(s))&&(r=o[2]))break;n=n.parentNode}return r||t||"a"},enhanceable:function(e){return this.haveParents(e,"enhance")},hijackable:function(e){return this.haveParents(e,"ajax")},haveParents:function(t,n){if(!e.mobile.ignoreContentEnabled)return t;var r=t.length,i=e(),s,o,u,a,f;for(a=0;a<r;a++){o=t.eq(a),u=!1,s=t[a];while(s){f=s.getAttribute?s.getAttribute("data-"+e.mobile.ns+n):"";if(f==="false"){u=!0;break}s=s.parentNode}u||(i=i.add(o))}return i},getScreenHeight:function(){return t.innerHeight||e.mobile.window.height()},resetActivePageHeight:function(t){var n=e("."+e.mobile.activePageClass),r=n.height(),s=n.outerHeight(!0);t=i(n,typeof t=="number"?t:e.mobile.getScreenHeight()),n.css("min-height",""),n.height()<t&&n.css("min-height",t-(s-r))},loading:function(){var t=this.loading._widget||e(e.mobile.loader.prototype.defaultHtml).loader(),n=t.loader.apply(t,arguments);return this.loading._widget=t,n}}),e.addDependents=function(t,n){var r=e(t),i=r.jqmData("dependents")||e();r.jqmData("dependents",e(i).add(n))},e.fn.extend({removeWithDependents:function(){e.removeWithDependents(this)},enhanceWithin:function(){var t,n={},r=e.mobile.page.prototype.keepNativeSelector(),i=this;e.mobile.nojs&&e.mobile.nojs(this),e.mobile.links&&e.mobile.links(this),e.mobile.degradeInputsWithin&&e.mobile.degradeInputsWithin(this),e.fn.buttonMarkup&&this.find(e.fn.buttonMarkup.initSelector).not(r).jqmEnhanceable().buttonMarkup(),e.fn.fieldcontain&&this.find(":jqmData(role='fieldcontain')").not(r).jqmEnhanceable().fieldcontain(),e.each(e.mobile.widgets,function(t,s){if(s.initSelector){var o=e.mobile.enhanceable(i.find(s.initSelector));o.length>0&&(o=o.not(r)),o.length>0&&(n[s.prototype.widgetName]=o)}});for(t in n)n[t][t]();return this},addDependents:function(t){e.addDependents(this,t)},getEncodedText:function(){return e("<a>").text(this.text()).html()},jqmEnhanceable:function(){return e.mobile.enhanceable(this)},jqmHijackable:function(){return e.mobile.hijackable(this)}}),e.removeWithDependents=function(t){var n=e(t);(n.jqmData("dependents")||e()).remove(),n.remove()},e.addDependents=function(t,n){var r=e(t),i=r.jqmData("dependents")||e();r.jqmData("dependents",e(i).add(n))},e.find.matches=function(t,n){return e.find(t,null,null,n)},e.find.matchesSelector=function(t,n){return e.find(n,null,null,[t]).length>0}}(e,this),function(e,r){t.matchMedia=t.matchMedia||function(e,t){var n,r=e.documentElement,i=r.firstElementChild||r.firstChild,s=e.createElement("body"),o=e.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(o),function(e){return o.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',r.insertBefore(s,i),n=o.offsetWidth===42,r.removeChild(s),{matches:n,media:e}}}(n),e.mobile.media=function(e){return t.matchMedia(e).matches}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,n){e.extend(e.support,{orientation:"orientation"in t&&"onorientationchange"in t})}(e),function(e,r){function i(e){var t=e.charAt(0).toUpperCase()+e.substr(1),n=(e+" "+u.join(t+" ")+t).split(" "),i;for(i in n)if(o[n[i]]!==r)return!0}function h(){var n=t,r=!!n.document.createElementNS&&!!n.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&(!n.opera||navigator.userAgent.indexOf("Chrome")!==-1),i=function(t){(!t||!r)&&e("html").addClass("ui-nosvg")},s=new n.Image;s.onerror=function(){i(!1)},s.onload=function(){i(s.width===1&&s.height===1)},s.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}function p(){var i="transform-3d",o=e.mobile.media("(-"+u.join("-"+i+"),(-")+"-"+i+"),("+i+")"),a,f,l;if(o)return!!o;a=n.createElement("div"),f={MozTransform:"-moz-transform",transform:"transform"},s.append(a);for(l in f)a.style[l]!==r&&(a.style[l]="translate3d( 100px, 1px, 1px )",o=t.getComputedStyle(a).getPropertyValue(f[l]));return!!o&&o!=="none"}function d(){var t=location.protocol+"//"+location.host+location.pathname+"ui-dir/",n=e("head base"),r=null,i="",o,u;return n.length?i=n.attr("href"):n=r=e("<base>",{href:t}).appendTo("head"),o=e("<a href='testurl' />").prependTo(s),u=o[0].href,n[0].href=i||location.pathname,r&&r.remove(),u.indexOf(t)===0}function v(){var e=n.createElement("x"),r=n.documentElement,i=t.getComputedStyle,s;return"pointerEvents"in e.style?(e.style.pointerEvents="auto",e.style.pointerEvents="x",r.appendChild(e),s=i&&i(e,"").pointerEvents==="auto",r.removeChild(e),!!s):!1}function m(){var e=n.createElement("div");return typeof e.getBoundingClientRect!="undefined"}function g(){var e=t,n=navigator.userAgent,r=navigator.platform,i=n.match(/AppleWebKit\/([0-9]+)/),s=!!i&&i[1],o=n.match(/Fennec\/([0-9]+)/),u=!!o&&o[1],a=n.match(/Opera Mobi\/([0-9]+)/),f=!!a&&a[1];return(r.indexOf("iPhone")>-1||r.indexOf("iPad")>-1||r.indexOf("iPod")>-1)&&s&&s<534||e.operamini&&{}.toString.call(e.operamini)==="[object OperaMini]"||a&&f<7458||n.indexOf("Android")>-1&&s&&s<533||u&&u<6||"palmGetResource"in t&&s&&s<534||n.indexOf("MeeGo")>-1&&n.indexOf("NokiaBrowser/8.5.0")>-1?!1:!0}var s=e("<body>").prependTo("html"),o=s[0].style,u=["Webkit","Moz","O"],a="palmGetResource"in t,f=t.operamini&&{}.toString.call(t.operamini)==="[object OperaMini]",l=t.blackberry&&!i("-webkit-transform"),c;e.extend(e.mobile,{browser:{}}),e.mobile.browser.oldIE=function(){var e=3,t=n.createElement("div"),r=t.all||[];do t.innerHTML="<!--[if gt IE "+ ++e+"]><br><![endif]-->";while(r[0]);return e>4?e:!e}(),e.extend(e.support,{pushState:"pushState"in history&&"replaceState"in history&&!(t.navigator.userAgent.indexOf("Firefox")>=0&&t.top!==t)&&t.navigator.userAgent.search(/CriOS/)===-1,mediaquery:e.mobile.media("only all"),cssPseudoElement:!!i("content"),touchOverflow:!!i("overflowScrolling"),cssTransform3d:p(),boxShadow:!!i("boxShadow")&&!l,fixedPosition:g(),scrollTop:("pageXOffset"in t||"scrollTop"in n.documentElement||"scrollTop"in s[0])&&!a&&!f,dynamicBaseTag:d(),cssPointerEvents:v(),boundingRect:m(),inlineSVG:h}),s.remove(),c=function(){var e=t.navigator.userAgent;return e.indexOf("Nokia")>-1&&(e.indexOf("Symbian/3")>-1||e.indexOf("Series60/5")>-1)&&e.indexOf("AppleWebKit")>-1&&e.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}(),e.mobile.gradeA=function(){return(e.support.mediaquery&&e.support.cssPseudoElement||e.mobile.browser.oldIE&&e.mobile.browser.oldIE>=8)&&(e.support.boundingRect||e.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/)!==null)},e.mobile.ajaxBlacklist=t.blackberry&&!t.WebKitPoint||f||c,c&&e(function(){e("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")}),e.support.boxShadow||e("html").addClass("ui-noboxshadow")}(e),function(e,t){var n=e.mobile.window,r,i=function(){};e.event.special.beforenavigate={setup:function(){n.on("navigate",i)},teardown:function(){n.off("navigate",i)}},e.event.special.navigate=r={bound:!1,pushStateEnabled:!0,originalEventName:t,isPushStateEnabled:function(){return e.support.pushState&&e.mobile.pushStateEnabled===!0&&this.isHashChangeEnabled()},isHashChangeEnabled:function(){return e.mobile.hashListeningEnabled===!0},popstate:function(t){var r=new e.Event("navigate"),i=new e.Event("beforenavigate"),s=t.originalEvent.state||{};i.originalEvent=t,n.trigger(i);if(i.isDefaultPrevented())return;t.historyState&&e.extend(s,t.historyState),r.originalEvent=t,setTimeout(function(){n.trigger(r,{state:s})},0)},hashchange:function(t){var r=new e.Event("navigate"),i=new e.Event("beforenavigate");i.originalEvent=t,n.trigger(i);if(i.isDefaultPrevented())return;r.originalEvent=t,n.trigger(r,{state:t.hashchangeState||{}})},setup:function(){if(r.bound)return;r.bound=!0,r.isPushStateEnabled()?(r.originalEventName="popstate",n.bind("popstate.navigate",r.popstate)):r.isHashChangeEnabled()&&(r.originalEventName="hashchange",n.bind("hashchange.navigate",r.hashchange))}}}(e),function(e){e.event.special.throttledresize={setup:function(){e(this).bind("resize",n)},teardown:function(){e(this).unbind("resize",n)}};var t=250,n=function(){s=(new Date).getTime(),o=s-r,o>=t?(r=s,e(this).trigger("throttledresize")):(i&&clearTimeout(i),i=setTimeout(n,t-o))},r=0,i,s,o}(e),function(e,t){function p(){var e=s();e!==o&&(o=e,r.trigger(i))}var r=e(t),i="orientationchange",s,o,u,a,f={0:!0,180:!0},l,c,h;if(e.support.orientation){l=t.innerWidth||r.width(),c=t.innerHeight||r.height(),h=50,u=l>c&&l-c>h,a=f[t.orientation];if(u&&a||!u&&!a)f={"-90":!0,90:!0}}e.event.special.orientationchange=e.extend({},e.event.special.orientationchange,{setup:function(){if(e.support.orientation&&!e.event.special.orientationchange.disabled)return!1;o=s(),r.bind("throttledresize",p)},teardown:function(){if(e.support.orientation&&!e.event.special.orientationchange.disabled)return!1;r.unbind("throttledresize",p)},add:function(e){var t=e.handler;e.handler=function(e){return e.orientation=s(),t.apply(this,arguments)}}}),e.event.special.orientationchange.orientation=s=function(){var r=!0,i=n.documentElement;return e.support.orientation?r=f[t.orientation]:r=i&&i.clientWidth/i.clientHeight<1.1,r?"portrait":"landscape"},e.fn[i]=function(e){return e?this.bind(i,e):this.trigger(i)},e.attrFn&&(e.attrFn[i]=!0)}(e,this),function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)}(e,t,n),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this),function(e,t){var r={animation:{},transition:{}},i=n.createElement("a"),s=["","webkit-","moz-","o-"];e.each(["animation","transition"],function(n,o){var u=n===0?o+"-"+"name":o;e.each(s,function(n,s){if(i.style[e.camelCase(s+u)]!==t)return r[o].prefix=s,!1}),r[o].duration=e.camelCase(r[o].prefix+o+"-"+"duration"),r[o].event=e.camelCase(r[o].prefix+o+"-"+"end"),r[o].prefix===""&&(r[o].event=r[o].event.toLowerCase())}),e.support.cssTransitions=r.transition.prefix!==t,e.support.cssAnimations=r.animation.prefix!==t,e(i).remove(),e.fn.animationComplete=function(i,s,o){var u,a,f=this,l=function(){clearTimeout(u),i.apply(this,arguments)},c=!s||s==="animation"?"animation":"transition";if(e.support.cssTransitions&&c==="transition"||e.support.cssAnimations&&c==="animation"){if(o===t){e(this).context!==n&&(a=parseFloat(e(this).css(r[c].duration))*3e3);if(a===0||a===t||isNaN(a))a=e.fn.animationComplete.defaultDuration}return u=setTimeout(function(){e(f).off(r[c].event,l),i.apply(f)},a),e(this).one(r[c].event,l)}return setTimeout(e.proxy(i,this),0),e(this)},e.fn.animationComplete.defaultDuration=1e3}(e),function(e,n){var r,i,s="&ui-state=dialog";e.mobile.path=r={uiStateKey:"&ui-state",urlParseRE:/^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,getLocation:function(e){var t=this.parseUrl(e||location.href),n=e?t:location,r=t.hash;return r=r==="#"?"":r,n.protocol+t.doubleSlash+n.host+(n.protocol!==""&&n.pathname.substring(0,1)!=="/"?"/":"")+n.pathname+n.search+r},getDocumentUrl:function(t){return t?e.extend({},r.documentUrl):r.documentUrl.href},parseLocation:function(){return this.parseUrl(this.getLocation())},parseUrl:function(t){if(e.type(t)==="object")return t;var n=r.urlParseRE.exec(t||"")||[];return{href:n[0]||"",hrefNoHash:n[1]||"",hrefNoSearch:n[2]||"",domain:n[3]||"",protocol:n[4]||"",doubleSlash:n[5]||"",authority:n[6]||"",username:n[8]||"",password:n[9]||"",host:n[10]||"",hostname:n[11]||"",port:n[12]||"",pathname:n[13]||"",directory:n[14]||"",filename:n[15]||"",search:n[16]||"",hash:n[17]||""}},makePathAbsolute:function(e,t){var n,r,i,s;if(e&&e.charAt(0)==="/")return e;e=e||"",t=t?t.replace(/^\/|(\/[^\/]*|[^\/]+)$/g,""):"",n=t?t.split("/"):[],r=e.split("/");for(i=0;i<r.length;i++){s=r[i];switch(s){case".":break;case"..":n.length&&n.pop();break;default:n.push(s)}}return"/"+n.join("/")},isSameDomain:function(e,t){return r.parseUrl(e).domain.toLowerCase()===r.parseUrl(t).domain.toLowerCase()},isRelativeUrl:function(e){return r.parseUrl(e).protocol===""},isAbsoluteUrl:function(e){return r.parseUrl(e).protocol!==""},makeUrlAbsolute:function(e,t){if(!r.isRelativeUrl(e))return e;t===n&&(t=this.documentBase);var i=r.parseUrl(e),s=r.parseUrl(t),o=i.protocol||s.protocol,u=i.protocol?i.doubleSlash:i.doubleSlash||s.doubleSlash,a=i.authority||s.authority,f=i.pathname!=="",l=r.makePathAbsolute(i.pathname||s.filename,s.pathname),c=i.search||!f&&s.search||"",h=i.hash;return o+u+a+l+c+h},addSearchParams:function(t,n){var i=r.parseUrl(t),s=typeof n=="object"?e.param(n):n,o=i.search||"?";return i.hrefNoSearch+o+(o.charAt(o.length-1)!=="?"?"&":"")+s+(i.hash||"")},convertUrlToDataUrl:function(e){var n=e,i=r.parseUrl(e);return r.isEmbeddedPage(i)?n=i.hash.split(s)[0].replace(/^#/,"").replace(/\?.*$/,""):r.isSameDomain(i,this.documentBase)&&(n=i.hrefNoHash.replace(this.documentBase.domain,"").split(s)[0]),t.decodeURIComponent(n)},get:function(e){return e===n&&(e=r.parseLocation().hash),r.stripHash(e).replace(/[^\/]*\.[^\/*]+$/,"")},set:function(e){location.hash=e},isPath:function(e){return/\//.test(e)},clean:function(e){return e.replace(this.documentBase.domain,"")},stripHash:function(e){return e.replace(/^#/,"")},stripQueryParams:function(e){return e.replace(/\?.*$/,"")},cleanHash:function(e){return r.stripHash(e.replace(/\?.*$/,"").replace(s,""))},isHashValid:function(e){return/^#[^#]+$/.test(e)},isExternal:function(e){var t=r.parseUrl(e);return!!t.protocol&&t.domain.toLowerCase()!==this.documentUrl.domain.toLowerCase()},hasProtocol:function(e){return/^(:?\w+:)/.test(e)},isEmbeddedPage:function(e){var t=r.parseUrl(e);return t.protocol!==""?!this.isPath(t.hash)&&t.hash&&(t.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&t.hrefNoHash===this.documentBase.hrefNoHash):/^#/.test(t.href)},squash:function(e,t){var n,i,s,o,u,a=this.isPath(e),f=this.parseUrl(e),l=f.hash,c="";t||(a?t=r.getLocation():(u=r.getDocumentUrl(!0),r.isPath(u.hash)?t=r.squash(u.href):t=u.href)),i=a?r.stripHash(e):e,i=r.isPath(f.hash)?r.stripHash(f.hash):i,o=i.indexOf(this.uiStateKey),o>-1&&(c=i.slice(o),i=i.slice(0,o)),n=r.makeUrlAbsolute(i,t),s=this.parseUrl(n).search;if(a){if(r.isPath(l)||l.replace("#","").indexOf(this.uiStateKey)===0)l="";c&&l.indexOf(this.uiStateKey)===-1&&(l+=c),l.indexOf("#")===-1&&l!==""&&(l="#"+l),n=r.parseUrl(n),n=n.protocol+n.doubleSlash+n.host+n.pathname+s+l}else n+=n.indexOf("#")>-1?c:"#"+c;return n},isPreservableHash:function(e){return e.replace("#","").indexOf(this.uiStateKey)===0},hashToSelector:function(e){var t=e.substring(0,1)==="#";return t&&(e=e.substring(1)),(t?"#":"")+e.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,"\\$1")},getFilePath:function(e){return e&&e.split(s)[0]},isFirstPageUrl:function(t){var i=r.parseUrl(r.makeUrlAbsolute(t,this.documentBase)),s=i.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&i.hrefNoHash===this.documentBase.hrefNoHash,o=e.mobile.firstPage,u=o&&o[0]?o[0].id:n;return s&&(!i.hash||i.hash==="#"||u&&i.hash.replace(/^#/,"")===u)},isPermittedCrossDomainRequest:function(t,n){return e.mobile.allowCrossDomainPages&&(t.protocol==="file:"||t.protocol==="content:")&&n.search(/^https?:/)!==-1}},r.documentUrl=r.parseLocation(),i=e("head").find("base"),r.documentBase=i.length?r.parseUrl(r.makeUrlAbsolute(i.attr("href"),r.documentUrl.href)):r.documentUrl,r.documentBaseDiffers=r.documentUrl.hrefNoHash!==r.documentBase.hrefNoHash,r.getDocumentBase=function(t){return t?e.extend({},r.documentBase):r.documentBase.href},e.extend(e.mobile,{getDocumentUrl:r.getDocumentUrl,getDocumentBase:r.getDocumentBase})}(e),function(e,t){e.mobile.History=function(e,t){this.stack=e||[],this.activeIndex=t||0},e.extend(e.mobile.History.prototype,{getActive:function(){return this.stack[this.activeIndex]},getLast:function(){return this.stack[this.previousIndex]},getNext:function(){return this.stack[this.activeIndex+1]},getPrev:function(){return this.stack[this.activeIndex-1]},add:function(e,t){t=t||{},this.getNext()&&this.clearForward(),t.hash&&t.hash.indexOf("#")===-1&&(t.hash="#"+t.hash),t.url=e,this.stack.push(t),this.activeIndex=this.stack.length-1},clearForward:function(){this.stack=this.stack.slice(0,this.activeIndex+1)},find:function(e,t,n){t=t||this.stack;var r,i,s=t.length,o;for(i=0;i<s;i++){r=t[i];if(decodeURIComponent(e)===decodeURIComponent(r.url)||decodeURIComponent(e)===decodeURIComponent(r.hash)){o=i;if(n)return o}}return o},closest:function(e){var n,r=this.activeIndex;return n=this.find(e,this.stack.slice(0,r)),n===t&&(n=this.find(e,this.stack.slice(r),!0),n=n===t?n:n+r),n},direct:function(n){var r=this.closest(n.url),i=this.activeIndex;r!==t&&(this.activeIndex=r,this.previousIndex=i),r<i?(n.present||n.back||e.noop)(this.getActive(),"back"):r>i?(n.present||n.forward||e.noop)(this.getActive(),"forward"):r===t&&n.missing&&n.missing(this.getActive())}})}(e),function(e,r){var i=e.mobile.path,s=location.href;e.mobile.Navigator=function(t){this.history=t,this.ignoreInitialHashChange=!0,e.mobile.window.bind({"popstate.history":e.proxy(this.popstate,this),"hashchange.history":e.proxy(this.hashchange,this)})},e.extend(e.mobile.Navigator.prototype,{squash:function(r,s){var o,u,a=i.isPath(r)?i.stripHash(r):r;return u=i.squash(r),o=e.extend({hash:a,url:u},s),t.history.replaceState(o,o.title||n.title,u),o},hash:function(e,t){var n,r,s,o;return n=i.parseUrl(e),r=i.parseLocation(),r.pathname+r.search===n.pathname+n.search?s=n.hash?n.hash:n.pathname+n.search:i.isPath(e)?(o=i.parseUrl(t),s=o.pathname+o.search+(i.isPreservableHash(o.hash)?o.hash.replace("#",""):"")):s=e,s},go:function(r,s,o){var u,a,f,l,c=e.event.special.navigate.isPushStateEnabled();a=i.squash(r),f=this.hash(r,a),o&&f!==i.stripHash(i.parseLocation().hash)&&(this.preventNextHashChange=o),this.preventHashAssignPopState=!0,t.location.hash=f,this.preventHashAssignPopState=!1,u=e.extend({url:a,hash:f,title:n.title},s),c&&(l=new e.Event("popstate"),l.originalEvent={type:"popstate",state:null},this.squash(r,u),o||(this.ignorePopState=!0,e.mobile.window.trigger(l))),this.history.add(u.url,u)},popstate:function(t){var n,r;if(!e.event.special.navigate.isPushStateEnabled())return;if(this.preventHashAssignPopState){this.preventHashAssignPopState=!1,t.stopImmediatePropagation();return}if(this.ignorePopState){this.ignorePopState=!1;return}if(!t.originalEvent.state&&this.history.stack.length===1&&this.ignoreInitialHashChange){this.ignoreInitialHashChange=!1;if(location.href===s){t.preventDefault();return}}n=i.parseLocation().hash;if(!t.originalEvent.state&&n){r=this.squash(n),this.history.add(r.url,r),t.historyState=r;return}this.history.direct({url:(t.originalEvent.state||{}).url||n,present:function(n,r){t.historyState=e.extend({},n),t.historyState.direction=r}})},hashchange:function(t){var r,s;if(!e.event.special.navigate.isHashChangeEnabled()||e.event.special.navigate.isPushStateEnabled())return;if(this.preventNextHashChange){this.preventNextHashChange=!1,t.stopImmediatePropagation();return}r=this.history,s=i.parseLocation().hash,this.history.direct({url:s,present:function(n,r){t.hashchangeState=e.extend({},n),t.hashchangeState.direction=r},missing:function(){r.add(s,{hash:s,title:n.title})}})}})}(e),function(e,t){e.mobile.navigate=function(t,n,r){e.mobile.navigate.navigator.go(t,n,r)},e.mobile.navigate.history=new e.mobile.History,e.mobile.navigate.navigator=new e.mobile.Navigator(e.mobile.navigate.history);var n=e.mobile.path.parseLocation();e.mobile.navigate.history.add(n.href,{hash:n.hash})}(e),function(e,t){var n=e("head").children("base"),r={element:n.length?n:e("<base>",{href:e.mobile.path.documentBase.hrefNoHash}).prependTo(e("head")),linkSelector:"[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]",set:function(t){if(!e.mobile.dynamicBaseEnabled)return;e.support.dynamicBaseTag&&r.element.attr("href",e.mobile.path.makeUrlAbsolute(t,e.mobile.path.documentBase))},rewrite:function(t,n){var i=e.mobile.path.get(t);n.find(r.linkSelector).each(function(t,n){var r=e(n).is("[href]")?"href":e(n).is("[src]")?"src":"action",s=e.mobile.path.parseLocation(),o=e(n).attr(r);o=o.replace(s.protocol+s.doubleSlash+s.host+s.pathname,""),/^(\w+:|#|\/)/.test(o)||e(n).attr(r,i+o)})},reset:function(){r.element.attr("href",e.mobile.path.documentBase.hrefNoSearch)}};e.mobile.base=r}(e),function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];return t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix||t:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(o==="instance")return f=i,!1;if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}})}(e),function(e,t){var n=/[A-Z]/g,r=function(e){return"-"+e.toLowerCase()};e.extend(e.Widget.prototype,{_getCreateOptions:function(){var t,i,s=this.element[0],o={};if(!e.mobile.getAttribute(s,"defaults"))for(t in this.options)i=e.mobile.getAttribute(s,t.replace(n,r)),i!=null&&(o[t]=i);return o}}),e.mobile.widget=e.Widget}(e),function(e,t){e.mobile.widgets={};var n=e.widget,r=e.mobile.keepNative;e.widget=function(n){return function(){var r=n.apply(this,arguments),i=r.prototype.widgetName;return r.initSelector=r.prototype.initSelector!==t?r.prototype.initSelector:":jqmData(role='"+i+"')",e.mobile.widgets[i]=r,r}}(e.widget),e.extend(e.widget,n),e.mobile.document.on("create",function(t){e(t.target).enhanceWithin()}),e.widget("mobile.page",{options:{theme:"a",domCache:!1,keepNativeDefault:e.mobile.keepNative,contentTheme:null,enhanced:!1},_createWidget:function(){e.Widget.prototype._createWidget.apply(this,arguments),this._trigger("init")},_create:function(){if(this._trigger("beforecreate")===!1)return!1;this.options.enhanced||this._enhance(),this._on(this.element,{pagebeforehide:"removeContainerBackground",pagebeforeshow:"_handlePageBeforeShow"}),this.element.enhanceWithin(),e.mobile.getAttribute(this.element[0],"role")==="dialog"&&e.mobile.dialog&&this.element.dialog()},_enhance:function(){var n="data-"+e.mobile.ns,r=this;this.options.role&&this.element.attr("data-"+e.mobile.ns+"role",this.options.role),this.element.attr("tabindex","0").addClass("ui-page ui-page-theme-"+this.options.theme),this.element.find("["+n+"role='content']").each(function(){var i=e(this),s=this.getAttribute(n+"theme")||t;r.options.contentTheme=s||r.options.contentTheme||r.options.dialog&&r.options.theme||r.element.jqmData("role")==="dialog"&&r.options.theme,i.addClass("ui-content"),r.options.contentTheme&&i.addClass("ui-body-"+r.options.contentTheme),i.attr("role","main").addClass("ui-content")})},bindRemove:function(t){var n=this.element;!n.data("mobile-page").options.domCache&&n.is(":jqmData(external-page='true')")&&n.bind("pagehide.remove",t||function(t,n){if(!n.samePage){var r=e(this),i=new e.Event("pageremove");r.trigger(i),i.isDefaultPrevented()||r.removeWithDependents()}})},_setOptions:function(n){n.theme!==t&&this.element.removeClass("ui-page-theme-"+this.options.theme).addClass("ui-page-theme-"+n.theme),n.contentTheme!==t&&this.element.find("[data-"+e.mobile.ns+"='content']").removeClass("ui-body-"+this.options.contentTheme).addClass("ui-body-"+n.contentTheme)},_handlePageBeforeShow:function(){this.setContainerBackground()},removeContainerBackground:function(){this.element.closest(":mobile-pagecontainer").pagecontainer({theme:"none"})},setContainerBackground:function(e){this.element.parent().pagecontainer({theme:e||this.options.theme})},keepNativeSelector:function(){var t=this.options,n=e.trim(t.keepNative||""),i=e.trim(e.mobile.keepNative),s=e.trim(t.keepNativeDefault),o=r===i?"":i,u=o===""?s:"";return(n?[n]:[]).concat(o?[o]:[]).concat(u?[u]:[]).join(", ")}})}(e),function(e,t,n){e.mobile.Transition=function(){this.init.apply(this,arguments)},e.extend(e.mobile.Transition.prototype,{toPreClass:" ui-page-pre-in",init:function(t,n,r,i){e.extend(this,{name:t,reverse:n,$to:r,$from:i,deferred:new e.Deferred})},cleanFrom:function(){this.$from.removeClass(e.mobile.activePageClass+" out in reverse "+this.name).height("")},beforeDoneIn:function(){},beforeDoneOut:function(){},beforeStartOut:function(){},doneIn:function(){this.beforeDoneIn(),this.$to.removeClass("out in reverse "+this.name).height(""),this.toggleViewportClass(),e.mobile.window.scrollTop()!==this.toScroll&&this.scrollPage(),this.sequential||this.$to.addClass(e.mobile.activePageClass),this.deferred.resolve(this.name,this.reverse,this.$to,this.$from,!0)},doneOut:function(e,t,n,r){this.beforeDoneOut(),this.startIn(e,t,n,r)},hideIn:function(e){this.$to.css("z-index",-10),e.call(this),this.$to.css("z-index","")},scrollPage:function(){e.event.special.scrollstart.enabled=!1,(e.mobile.hideUrlBar||this.toScroll!==e.mobile.defaultHomeScroll)&&t.scrollTo(0,this.toScroll),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150)},startIn:function(t,n,r,i){this.hideIn(function(){this.$to.addClass(e.mobile.activePageClass+this.toPreClass),i||e.mobile.focusPage(this.$to),this.$to.height(t+this.toScroll),r||this.scrollPage()}),this.$to.removeClass(this.toPreClass).addClass(this.name+" in "+n),r?this.doneIn():this.$to.animationComplete(e.proxy(function(){this.doneIn()},this))},startOut:function(t,n,r){this.beforeStartOut(t,n,r),this.$from.height(t+e.mobile.window.scrollTop()).addClass(this.name+" out"+n)},toggleViewportClass:function(){e.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-"+this.name)},transition:function(){var t,n=this.reverse?" reverse":"",r=e.mobile.getScreenHeight(),i=e.mobile.maxTransitionWidth!==!1&&e.mobile.window.width()>e.mobile.maxTransitionWidth;return this.toScroll=e.mobile.navigate.history.getActive().lastScroll||e.mobile.defaultHomeScroll,t=!e.support.cssTransitions||!e.support.cssAnimations||i||!this.name||this.name==="none"||Math.max(e.mobile.window.scrollTop(),this.toScroll)>e.mobile.getMaxScrollForTransition(),this.toggleViewportClass(),this.$from&&!t?this.startOut(r,n,t):this.doneOut(r,n,t,!0),this.deferred.promise()}})}(e,this),function(e){e.mobile.SerialTransition=function(){this.init.apply(this,arguments)},e.extend(e.mobile.SerialTransition.prototype,e.mobile.Transition.prototype,{sequential:!0,beforeDoneOut:function(){this.$from&&this.cleanFrom()},beforeStartOut:function(t,n,r){this.$from.animationComplete(e.proxy(function(){this.doneOut(t,n,r)},this))}})}(e),function(e){e.mobile.ConcurrentTransition=function(){this.init.apply(this,arguments)},e.extend(e.mobile.ConcurrentTransition.prototype,e.mobile.Transition.prototype,{sequential:!1,beforeDoneIn:function(){this.$from&&this.cleanFrom()},beforeStartOut:function(e,t,n){this.doneOut(e,t,n)}})}(e),function(e){var t=function(){return e.mobile.getScreenHeight()*3};e.mobile.transitionHandlers={sequential:e.mobile.SerialTransition,simultaneous:e.mobile.ConcurrentTransition},e.mobile.defaultTransitionHandler=e.mobile.transitionHandlers.sequential,e.mobile.transitionFallbacks={},e.mobile._maybeDegradeTransition=function(t){return t&&!e.support.cssTransform3d&&e.mobile.transitionFallbacks[t]&&(t=e.mobile.transitionFallbacks[t]),t},e.mobile.getMaxScrollForTransition=e.mobile.getMaxScrollForTransition||t}(e),function(e,r){e.widget("mobile.pagecontainer",{options:{theme:"a"},initSelector:!1,_create:function(){this._trigger("beforecreate"),this.setLastScrollEnabled=!0,this._on(this.window,{navigate:"_disableRecordScroll",scrollstop:"_delayedRecordScroll"}),this._on(this.window,{navigate:"_filterNavigateEvents"}),this._on({pagechange:"_afterContentChange"}),this.window.one("navigate",e.proxy(function(){this.setLastScrollEnabled=!0},this))},_setOptions:function(e){e.theme!==r&&e.theme!=="none"?this.element.removeClass("ui-overlay-"+this.options.theme).addClass("ui-overlay-"+e.theme):e.theme!==r&&this.element.removeClass("ui-overlay-"+this.options.theme),this._super(e)},_disableRecordScroll:function(){this.setLastScrollEnabled=!1},_enableRecordScroll:function(){this.setLastScrollEnabled=!0},_afterContentChange:function(){this.setLastScrollEnabled=!0,this._off(this.window,"scrollstop"),this._on(this.window,{scrollstop:"_delayedRecordScroll"})},_recordScroll:function(){if(!this.setLastScrollEnabled)return;var e=this._getActiveHistory(),t,n,r;e&&(t=this._getScroll(),n=this._getMinScroll(),r=this._getDefaultScroll(),e.lastScroll=t<n?r:t)},_delayedRecordScroll:function(){setTimeout(e.proxy(this,"_recordScroll"),100)},_getScroll:function(){return this.window.scrollTop()},_getMinScroll:function(){return e.mobile.minScrollBack},_getDefaultScroll:function(){return e.mobile.defaultHomeScroll},_filterNavigateEvents:function(t,n){var r;if(t.originalEvent&&t.originalEvent.isDefaultPrevented())return;r=t.originalEvent.type.indexOf("hashchange")>-1?n.state.hash:n.state.url,r||(r=this._getHash());if(!r||r==="#"||r.indexOf("#"+e.mobile.path.uiStateKey)===0)r=location.href;this._handleNavigate(r,n.state)},_getHash:function(){return e.mobile.path.parseLocation().hash},getActivePage:function(){return this.activePage},_getInitialContent:function(){return e.mobile.firstPage},_getHistory:function(){return e.mobile.navigate.history},_getActiveHistory:function(){return this._getHistory().getActive()},_getDocumentBase:function(){return e.mobile.path.documentBase},back:function(){this.go(-1)},forward:function(){this.go(1)},go:function(n){if(e.mobile.hashListeningEnabled)t.history.go(n);else{var r=e.mobile.navigate.history.activeIndex,i=r+parseInt(n,10),s=e.mobile.navigate.history.stack[i].url,o=n>=1?"forward":"back";e.mobile.navigate.history.activeIndex=i,e.mobile.navigate.history.previousIndex=r,this.change(s,{direction:o,changeHash:!1,fromHashChange:!0})}},_handleDestination:function(t){var n;return e.type(t)==="string"&&(t=e.mobile.path.stripHash(t)),t&&(n=this._getHistory(),t=e.mobile.path.isPath(t)?t:e.mobile.path.makeUrlAbsolute("#"+t,this._getDocumentBase())),t||this._getInitialContent()},_transitionFromHistory:function(e,t){var n=this._getHistory(),r=e==="back"?n.getLast():n.getActive();return r&&r.transition||t},_handleDialog:function(t,n){var r,i,s=this.getActivePage();return s&&!s.data("mobile-dialog")?(n.direction==="back"?this.back():this.forward(),!1):(r=n.pageUrl,i=this._getActiveHistory(),e.extend(t,{role:i.role,transition:this._transitionFromHistory(n.direction,t.transition),reverse:n.direction==="back"}),r)},_handleNavigate:function(t,n){var r=e.mobile.path.stripHash(t),i=this._getHistory(),s=i.stack.length===0?"none":this._transitionFromHistory(n.direction),o={changeHash:!1,fromHashChange:!0,reverse:n.direction==="back"};e.extend(o,n,{transition:s});if(i.activeIndex>0&&r.indexOf(e.mobile.dialogHashKey)>-1){r=this._handleDialog(o,n);if(r===!1)return}this._changeContent(this._handleDestination(r),o)},_changeContent:function(t,n){e.mobile.changePage(t,n)},_getBase:function(){return e.mobile.base},_getNs:function(){return e.mobile.ns},_enhance:function(e,t){return e.page({role:t})},_include:function(e,t){e.appendTo(this.element),this._enhance(e,t.role),e.page("bindRemove")},_find:function(t){var n=this._createFileUrl(t),r=this._createDataUrl(t),i,s=this._getInitialContent();return i=this.element.children("[data-"+this._getNs()+"url='"+e.mobile.path.hashToSelector(r)+"']"),i.length===0&&r&&!e.mobile.path.isPath(r)&&(i=this.element.children(e.mobile.path.hashToSelector("#"+r)).attr("data-"+this._getNs()+"url",r).jqmData("url",r)),i.length===0&&e.mobile.path.isFirstPageUrl(n)&&s&&s.parent().length&&(i=e(s)),i},_getLoader:function(){return e.mobile.loading()},_showLoading:function(t,n,r,i){if(this._loadMsg)return;this._loadMsg=setTimeout(e.proxy(function(){this._getLoader().loader("show",n,r,i),this._loadMsg=0},this),t)},_hideLoading:function(){clearTimeout(this._loadMsg),this._loadMsg=0,this._getLoader().loader("hide")},_showError:function(){this._hideLoading(),this._showLoading(0,e.mobile.pageLoadErrorMessageTheme,e.mobile.pageLoadErrorMessage,!0),setTimeout(e.proxy(this,"_hideLoading"),1500)},_parse:function(t,n){var r,i=e("<div></div>");return i.get(0).innerHTML=t,r=i.find(":jqmData(role='page'), :jqmData(role='dialog')").first(),r.length||(r=e("<div data-"+this._getNs()+"role='page'>"+(t.split(/<\/?body[^>]*>/gmi)[1]||"")+"</div>")),r.attr("data-"+this._getNs()+"url",this._createDataUrl(n)).attr("data-"+this._getNs()+"external-page",!0),r},_setLoadedTitle:function(t,n){var r=n.match(/<title[^>]*>([^<]*)/)&&RegExp.$1;r&&!t.jqmData("title")&&(r=e("<div>"+r+"</div>").text(),t.jqmData("title",r))},_isRewritableBaseTag:function(){return e.mobile.dynamicBaseEnabled&&!e.support.dynamicBaseTag},_createDataUrl:function(t){return e.mobile.path.convertUrlToDataUrl(t)},_createFileUrl:function(t){return e.mobile.path.getFilePath(t)},_triggerWithDeprecated:function(t,n,r){var i=e.Event("page"+t),s=e.Event(this.widgetName+t);return(r||this.element).trigger(i,n),this._trigger(t,s,n),{deprecatedEvent:i,event:s}},_loadSuccess:function(t,n,i,s){var o=this._createFileUrl(t);return e.proxy(function(u,a,f){var l,c=new RegExp("(<[^>]+\\bdata-"+this._getNs()+"role=[\"']?page[\"']?[^>]*>)"),h=new RegExp("\\bdata-"+this._getNs()+"url=[\"']?([^\"'>]*)[\"']?");c.test(u)&&RegExp.$1&&h.test(RegExp.$1)&&RegExp.$1&&(o=e.mobile.path.getFilePath(e("<div>"+RegExp.$1+"</div>").text()),o=this.window[0].encodeURIComponent(o)),i.prefetch===r&&this._getBase().set(o),l=this._parse(u,o),this._setLoadedTitle(l,u),n.xhr=f,n.textStatus=a,n.page=l,n.content=l,n.toPage=l;if(this._triggerWithDeprecated("load",n).event.isDefaultPrevented())return;this._isRewritableBaseTag()&&l&&this._getBase().rewrite(o,l),this._include(l,i),i.showLoadMsg&&this._hideLoading(),s.resolve(t,i,l)},this)},_loadDefaults:{type:"get",data:r,reloadPage:!1,reload:!1,role:r,showLoadMsg:!1,loadMsgDelay:50},load:function(t,n){var i=n&&n.deferred||e.Deferred(),s=n&&n.reload===r&&n.reloadPage!==r?{reload:n.reloadPage}:{},o=e.extend({},this._loadDefaults,n,s),u=null,a=e.mobile.path.makeUrlAbsolute(t,this._findBaseWithDefault()),f,l,c,h;return o.data&&o.type==="get"&&(a=e.mobile.path.addSearchParams(a,o.data),o.data=r),o.data&&o.type==="post"&&(o.reload=!0),f=this._createFileUrl(a),l=this._createDataUrl(a),u=this._find(a),u.length===0&&e.mobile.path.isEmbeddedPage(f)&&!e.mobile.path.isFirstPageUrl(f)?(i.reject(a,o),i.promise()):(this._getBase().reset(),u.length&&!o.reload?(this._enhance(u,o.role),i.resolve(a,o,u),o.prefetch||this._getBase().set(t),i.promise()):(h={url:t,absUrl:a,toPage:t,prevPage:n?n.fromPage:r,dataUrl:l,deferred:i,options:o},c=this._triggerWithDeprecated("beforeload",h),c.deprecatedEvent.isDefaultPrevented()||c.event.isDefaultPrevented()?i.promise():(o.showLoadMsg&&this._showLoading(o.loadMsgDelay),o.prefetch===r&&this._getBase().reset(),!e.mobile.allowCrossDomainPages&&!e.mobile.path.isSameDomain(e.mobile.path.documentUrl,a)?(i.reject(a,o),i.promise()):(e.ajax({url:f,type:o.type,data:o.data,contentType:o.contentType,dataType:"html",success:this._loadSuccess(a,h,o,i),error:this._loadError(a,h,o,i)}),i.promise()))))},_loadError:function(t,n,r,i){return e.proxy(function(s,o,u){this._getBase().set(e.mobile.path.get()),n.xhr=s,n.textStatus=o,n.errorThrown=u;var a=this._triggerWithDeprecated("loadfailed",n);if(a.deprecatedEvent.isDefaultPrevented()||a.event.isDefaultPrevented())return;r.showLoadMsg&&this._showError(),i.reject(t,r)},this)},_getTransitionHandler:function(t){return t=e.mobile._maybeDegradeTransition(t),e.mobile.transitionHandlers[t]||e.mobile.defaultTransitionHandler},_triggerCssTransitionEvents:function(t,n,r){var i=!1;r=r||"",n&&(t[0]===n[0]&&(i=!0),this._triggerWithDeprecated(r+"hide",{nextPage:t,toPage:t,prevPage:n,samePage:i},n)),this._triggerWithDeprecated(r+"show",{prevPage:n||e(""),toPage:t},t)},_cssTransition:function(t,n,r){var i=r.transition,s=r.reverse,o=r.deferred,u,a;this._triggerCssTransitionEvents(t,n,"before"),this._hideLoading(),u=this._getTransitionHandler(i),a=(new u(i,s,t,n)).transition(),a.done(e.proxy(function(){this._triggerCssTransitionEvents(t,n)},this)),a.done(function(){o.resolve.apply(o,arguments)})},_releaseTransitionLock:function(){s=!1,i.length>0&&e.mobile.changePage.apply(null,i.pop())},_removeActiveLinkClass:function(t){e.mobile.removeActiveLinkClass(t)},_loadUrl:function(t,n,r){r.target=t,r.deferred=e.Deferred(),this.load(t,r),r.deferred.done(e.proxy(function(e,t,r){s=!1,t.absUrl=n.absUrl,this.transition(r,n,t)},this)),r.deferred.fail(e.proxy(function(){this._removeActiveLinkClass(!0),this._releaseTransitionLock(),this._triggerWithDeprecated("changefailed",n)},this))},_triggerPageBeforeChange:function(t,n,r){var i;return n.prevPage=this.activePage,e.extend(n,{toPage:t,options:r}),e.type(t)==="string"?n.absUrl=e.mobile.path.makeUrlAbsolute(t,this._findBaseWithDefault()):n.absUrl=r.absUrl,i=this._triggerWithDeprecated("beforechange",n),i.event.isDefaultPrevented()||i.deprecatedEvent.isDefaultPrevented()?!1:!0},change:function(t,n){if(s){i.unshift(arguments);return}var r=e.extend({},e.mobile.changePage.defaults,n),o={};r.fromPage=r.fromPage||this.activePage;if(!this._triggerPageBeforeChange(t,o,r))return;t=o.toPage,e.type(t)==="string"?(s=!0,this._loadUrl(t,o,r)):this.transition(t,o,r)},transition:function(t,o,u){var a,f,l,c,h,p,d,v,m,g,y,b,w,E;if(s){i.unshift([t,u]);return}if(!this._triggerPageBeforeChange(t,o,u))return;o.prevPage=u.fromPage,E=this._triggerWithDeprecated("beforetransition",o);if(E.deprecatedEvent.isDefaultPrevented()||E.event.isDefaultPrevented())return;s=!0,t[0]===e.mobile.firstPage[0]&&!u.dataUrl&&(u.dataUrl=e.mobile.path.documentUrl.hrefNoHash),a=u.fromPage,f=u.dataUrl&&e.mobile.path.convertUrlToDataUrl(u.dataUrl)||t.jqmData("url"),l=f,c=e.mobile.path.getFilePath(f),h=e.mobile.navigate.history.getActive(),p=e.mobile.navigate.history.activeIndex===0,d=0,v=n.title,m=(u.role==="dialog"||t.jqmData("role")==="dialog")&&t.jqmData("dialog")!==!0;if(a&&a[0]===t[0]&&!u.allowSamePageTransition){s=!1,this._triggerWithDeprecated("transition",o),this._triggerWithDeprecated("change",o),u.fromHashChange&&e.mobile.navigate.history.direct({url:f});return}t.page({role:u.role}),u.fromHashChange&&(d=u.direction==="back"?-1:1);try{n.activeElement&&n.activeElement.nodeName.toLowerCase()!=="body"?e(n.activeElement).blur():e("input:focus, textarea:focus, select:focus").blur()}catch(S){}g=!1,m&&h&&(h.url&&h.url.indexOf(e.mobile.dialogHashKey)>-1&&this.activePage&&!this.activePage.hasClass("ui-dialog")&&e.mobile.navigate.history.activeIndex>0&&(u.changeHash=!1,g=!0),f=h.url||"",!g&&f.indexOf("#")>-1?f+=e.mobile.dialogHashKey:f+="#"+e.mobile.dialogHashKey),y=h?t.jqmData("title")||t.children(":jqmData(role='header')").find(".ui-title").text():v,!!y&&v===n.title&&(v=y),t.jqmData("title")||t.jqmData("title",v),u.transition=u.transition||(d&&!p?h.transition:r)||(m?e.mobile.defaultDialogTransition:e.mobile.defaultPageTransition),!d&&g&&(e.mobile.navigate.history.getActive().pageUrl=l),f&&!u.fromHashChange&&(!e.mobile.path.isPath(f)&&f.indexOf("#")<0&&(f="#"+f),b={transition:u.transition,title:v,pageUrl:l,role:u.role},u.changeHash!==!1&&e.mobile.hashListeningEnabled?e.mobile.navigate(this.window[0].encodeURI(f),b,!0):t[0]!==e.mobile.firstPage[0]&&e.mobile.navigate.history.add(f,b)),n.title=v,e.mobile.activePage=t,this.activePage=t,u.reverse=u.reverse||d<0,w=e.Deferred(),this._cssTransition(t,a,{transition:u.transition,reverse:u.reverse,deferred:w}),w.done(e.proxy(function(n,r,i,s,a){e.mobile.removeActiveLinkClass(),u.duplicateCachedPage&&u.duplicateCachedPage.remove(),a||e.mobile.focusPage(t),this._releaseTransitionLock(),this._triggerWithDeprecated("transition",o),this._triggerWithDeprecated("change",o)},this))},_findBaseWithDefault:function(){var t=this.activePage&&e.mobile.getClosestBaseUrl(this.activePage);return t||e.mobile.path.documentBase.hrefNoHash}}),e.mobile.navreadyDeferred=e.Deferred();var i=[],s=!1}(e),function(e,r){function f(e){while(e){if(typeof e.nodeName=="string"&&e.nodeName.toLowerCase()==="a")break;e=e.parentNode}return e}var i=e.Deferred(),s=e.Deferred(),o=function(){s.resolve(),s=null},u=e.mobile.path.documentUrl,a=null;e.mobile.loadPage=function(t,n){var r;return n=n||{},r=n.pageContainer||e.mobile.pageContainer,n.deferred=e.Deferred(),r.pagecontainer("load",t,n),n.deferred.promise()},e.mobile.back=function(){var n=t.navigator;this.phonegapNavigationEnabled&&n&&n.app&&n.app.backHistory?n.app.backHistory():e.mobile.pageContainer.pagecontainer("back")},e.mobile.focusPage=function(e){var t=e.find("[autofocus]"),n=e.find(".ui-title:eq(0)");if(t.length){t.focus();return}n.length?n.focus():e.focus()},e.mobile._maybeDegradeTransition=e.mobile._maybeDegradeTransition||function(e){return e},e.mobile.changePage=function(t,n){e.mobile.pageContainer.pagecontainer("change",t,n)},e.mobile.changePage.defaults={transition:r,reverse:!1,changeHash:!0,fromHashChange:!1,role:r,duplicateCachedPage:r,pageContainer:r,showLoadMsg:!0,dataUrl:r,fromPage:r,allowSamePageTransition:!1},e.mobile._registerInternalEvents=function(){var n=function(t,n){var r,i=!0,s,o,f;return!e.mobile.ajaxEnabled||t.is(":jqmData(ajax='false')")||!t.jqmHijackable().length||t.attr("target")?!1:(r=a&&a.attr("formaction")||t.attr("action"),f=(t.attr("method")||"get").toLowerCase(),r||(r=e.mobile.getClosestBaseUrl(t),f==="get"&&(r=e.mobile.path.parseUrl(r).hrefNoSearch),r===e.mobile.path.documentBase.hrefNoHash&&(r=u.hrefNoSearch)),r=e.mobile.path.makeUrlAbsolute(r,e.mobile.getClosestBaseUrl(t)),e.mobile.path.isExternal(r)&&!e.mobile.path.isPermittedCrossDomainRequest(u,r)?!1:(n||(s=t.serializeArray(),a&&a[0].form===t[0]&&(o=a.attr("name"),o&&(e.each(s,function(e,t){if(t.name===o)return o="",!1}),o&&s.push({name:o,value:a.attr("value")}))),i={url:r,options:{type:f,data:e.param(s),transition:t.jqmData("transition"),reverse:t.jqmData("direction")==="reverse",reloadPage:!0}}),i))};e.mobile.document.delegate("form","submit",function(t){var r;t.isDefaultPrevented()||(r=n(e(this)),r&&(e.mobile.changePage(r.url,r.options),t.preventDefault()))}),e.mobile.document.bind("vclick",function(t){var r,i,s=t.target,o=!1;if(t.which>1||!e.mobile.linkBindingEnabled)return;a=e(s);if(e.data(s,"mobile-button")){if(!n(e(s).closest("form"),!0))return;s.parentNode&&(s=s.parentNode)}else{s=f(s);if(!s||e.mobile.path.parseUrl(s.getAttribute("href")||"#").hash==="#")return;if(!e(s).jqmHijackable().length)return}~s.className.indexOf("ui-link-inherit")?s.parentNode&&(i=e.data(s.parentNode,"buttonElements")):i=e.data(s,"buttonElements"),i?s=i.outer:o=!0,r=e(s),o&&(r=r.closest(".ui-btn")),r.length>0&&!r.hasClass("ui-state-disabled")&&(e.mobile.removeActiveLinkClass(!0),e.mobile.activeClickedLink=r,e.mobile.activeClickedLink.addClass(e.mobile.activeBtnClass))}),e.mobile.document.bind("click",function(n){if(!e.mobile.linkBindingEnabled||n.isDefaultPrevented())return;var i=f(n.target),s=e(i),o=function(){t.setTimeout(function(){e.mobile.removeActiveLinkClass(!0)},200)},a,l,c,h,p,d,v;e.mobile.activeClickedLink&&e.mobile.activeClickedLink[0]===n.target.parentNode&&o();if(!i||n.which>1||!s.jqmHijackable().length)return;if(s.is(":jqmData(rel='back')"))return e.mobile.back(),!1;a=e.mobile.getClosestBaseUrl(s),l=e.mobile.path.makeUrlAbsolute(s.attr("href")||"#",a);if(!e.mobile.ajaxEnabled&&!e.mobile.path.isEmbeddedPage(l)){o();return}if(l.search("#")!==-1&&(!e.mobile.path.isExternal(l)||!e.mobile.path.isAbsoluteUrl(l))){l=l.replace(/[^#]*#/,"");if(!l){n.preventDefault();return}e.mobile.path.isPath(l)?l=e.mobile.path.makeUrlAbsolute(l,a):l=e.mobile.path.makeUrlAbsolute("#"+l,u.hrefNoHash)}c=s.is("[rel='external']")||s.is(":jqmData(ajax='false')")||s.is("[target]"),h=c||e.mobile.path.isExternal(l)&&!e.mobile.path.isPermittedCrossDomainRequest(u,l);if(h){o();return}p=s.jqmData("transition"),d=s.jqmData("direction")==="reverse"||s.jqmData("back"),v=s.attr("data-"+e.mobile.ns+"rel")||r,e.mobile.changePage(l,{transition:p,reverse:d,role:v,link:s}),n.preventDefault()}),e.mobile.document.delegate(".ui-page","pageshow.prefetch",function(){var t=[];e(this).find("a:jqmData(prefetch)").each(function(){var n=e(this),r=n.attr("href");r&&e.inArray(r,t)===-1&&(t.push(r),e.mobile.loadPage(r,{role:n.attr("data-"+e.mobile.ns+"rel"),prefetch:!0}))})}),e.mobile.pageContainer.pagecontainer(),e.mobile.document.bind("pageshow",function(){s?s.done(e.mobile.resetActivePageHeight):e.mobile.resetActivePageHeight()}),e.mobile.window.bind("throttledresize",e.mobile.resetActivePageHeight)},e(function(){i.resolve()}),n.readyState==="complete"?o():e.mobile.window.load(o),e.when(i,e.mobile.navreadyDeferred).done(function(){e.mobile._registerInternalEvents()})}(e)});
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
