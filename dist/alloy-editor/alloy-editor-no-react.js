/*
Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){if(window.CKEDITOR&&window.CKEDITOR.dom)return;window.CKEDITOR||(window.CKEDITOR=function(){var a=/(^|.*[\\\/])alloy-editor-no-react\.js(?:\?.*|;.*)?$/i,f={timestamp:"F0RD",version:"4.4.7",revision:"3a35b3d",rnd:Math.floor(900*Math.random())+100,_:{pending:[],basePathSrcPattern:a},status:"unloaded",basePath:function(){var e=window.CKEDITOR_BASEPATH||"";if(!e)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var b=d[c].src.match(a);if(b){e=b[1];break}}-1==e.indexOf(":/")&&"//"!=e.slice(0,2)&&(e=0===e.indexOf("/")?location.href.match(/^.*?:\/\/[^\/]*/)[0]+
e:location.href.match(/^[^\?]*\/(?:)/)[0]+e);if(!e)throw'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.';return e}(),getUrl:function(a){-1==a.indexOf(":/")&&0!==a.indexOf("/")&&(a=this.basePath+a);this.timestamp&&("/"!=a.charAt(a.length-1)&&!/[&?]t=/.test(a))&&(a+=(0<=a.indexOf("?")?"&":"?")+"t="+this.timestamp);return a},domReady:function(){function a(){try{document.addEventListener?(document.removeEventListener("DOMContentLoaded",
a,!1),d()):document.attachEvent&&"complete"===document.readyState&&(document.detachEvent("onreadystatechange",a),d())}catch(c){}}function d(){for(var a;a=c.shift();)a()}var c=[];return function(d){function b(){try{document.documentElement.doScroll("left")}catch(m){setTimeout(b,1);return}a()}c.push(d);"complete"===document.readyState&&setTimeout(a,1);if(1==c.length)if(document.addEventListener)document.addEventListener("DOMContentLoaded",a,!1),window.addEventListener("load",a,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",
a);window.attachEvent("onload",a);d=!1;try{d=!window.frameElement}catch(f){}document.documentElement.doScroll&&d&&b()}}}()},b=window.CKEDITOR_GETURL;if(b){var c=f.getUrl;f.getUrl=function(a){return b.call(f,a)||c.call(f,a)}}return f}());
CKEDITOR.event||(CKEDITOR.event=function(){},CKEDITOR.event.implementOn=function(a){var f=CKEDITOR.event.prototype,b;for(b in f)a[b]==null&&(a[b]=f[b])},CKEDITOR.event.prototype=function(){function a(a){var e=f(this);return e[a]||(e[a]=new b(a))}var f=function(a){a=a.getPrivate&&a.getPrivate()||a._||(a._={});return a.events||(a.events={})},b=function(a){this.name=a;this.listeners=[]};b.prototype={getListenerIndex:function(a){for(var e=0,d=this.listeners;e<d.length;e++)if(d[e].fn==a)return e;return-1}};
return{define:function(b,e){var d=a.call(this,b);CKEDITOR.tools.extend(d,e,true)},on:function(b,e,d,f,k){function j(a,m,y,s){a={name:b,sender:this,editor:a,data:m,listenerData:f,stop:y,cancel:s,removeListener:g};return e.call(d,a)===false?false:a.data}function g(){y.removeListener(b,e)}var m=a.call(this,b);if(m.getListenerIndex(e)<0){m=m.listeners;d||(d=this);isNaN(k)&&(k=10);var y=this;j.fn=e;j.priority=k;for(var s=m.length-1;s>=0;s--)if(m[s].priority<=k){m.splice(s+1,0,j);return{removeListener:g}}m.unshift(j)}return{removeListener:g}},
once:function(){var a=Array.prototype.slice.call(arguments),e=a[1];a[1]=function(a){a.removeListener();return e.apply(this,arguments)};return this.on.apply(this,a)},capture:function(){CKEDITOR.event.useCapture=1;var a=this.on.apply(this,arguments);CKEDITOR.event.useCapture=0;return a},fire:function(){var a=0,e=function(){a=1},d=0,b=function(){d=1};return function(k,j,g){var m=f(this)[k],k=a,y=d;a=d=0;if(m){var s=m.listeners;if(s.length)for(var s=s.slice(0),w,q=0;q<s.length;q++){if(m.errorProof)try{w=
s[q].call(this,g,j,e,b)}catch(t){}else w=s[q].call(this,g,j,e,b);w===false?d=1:typeof w!="undefined"&&(j=w);if(a||d)break}}j=d?false:typeof j=="undefined"?true:j;a=k;d=y;return j}}(),fireOnce:function(a,e,d){e=this.fire(a,e,d);delete f(this)[a];return e},removeListener:function(a,e){var d=f(this)[a];if(d){var b=d.getListenerIndex(e);b>=0&&d.listeners.splice(b,1)}},removeAllListeners:function(){var a=f(this),e;for(e in a)delete a[e]},hasListeners:function(a){return(a=f(this)[a])&&a.listeners.length>
0}}}());CKEDITOR.editor||(CKEDITOR.editor=function(){CKEDITOR._.pending.push([this,arguments]);CKEDITOR.event.call(this)},CKEDITOR.editor.prototype.fire=function(a,f){a in{instanceReady:1,loaded:1}&&(this[a]=true);return CKEDITOR.event.prototype.fire.call(this,a,f,this)},CKEDITOR.editor.prototype.fireOnce=function(a,f){a in{instanceReady:1,loaded:1}&&(this[a]=true);return CKEDITOR.event.prototype.fireOnce.call(this,a,f,this)},CKEDITOR.event.implementOn(CKEDITOR.editor.prototype));
CKEDITOR.env||(CKEDITOR.env=function(){var a=navigator.userAgent.toLowerCase(),f={ie:a.indexOf("trident/")>-1,webkit:a.indexOf(" applewebkit/")>-1,air:a.indexOf(" adobeair/")>-1,mac:a.indexOf("macintosh")>-1,quirks:document.compatMode=="BackCompat"&&(!document.documentMode||document.documentMode<10),mobile:a.indexOf("mobile")>-1,iOS:/(ipad|iphone|ipod)/.test(a),isCustomDomain:function(){if(!this.ie)return false;var a=document.domain,d=window.location.hostname;return a!=d&&a!="["+d+"]"},secure:location.protocol==
"https:"};f.gecko=navigator.product=="Gecko"&&!f.webkit&&!f.ie;if(f.webkit)a.indexOf("chrome")>-1?f.chrome=true:f.safari=true;var b=0;if(f.ie){b=f.quirks||!document.documentMode?parseFloat(a.match(/msie (\d+)/)[1]):document.documentMode;f.ie9Compat=b==9;f.ie8Compat=b==8;f.ie7Compat=b==7;f.ie6Compat=b<7||f.quirks}if(f.gecko){var c=a.match(/rv:([\d\.]+)/);if(c){c=c[1].split(".");b=c[0]*1E4+(c[1]||0)*100+(c[2]||0)*1}}f.air&&(b=parseFloat(a.match(/ adobeair\/(\d+)/)[1]));f.webkit&&(b=parseFloat(a.match(/ applewebkit\/(\d+)/)[1]));
f.version=b;f.isCompatible=f.iOS&&b>=534||!f.mobile&&(f.ie&&b>6||f.gecko&&b>=2E4||f.air&&b>=1||f.webkit&&b>=522||false);f.hidpi=window.devicePixelRatio>=2;f.needsBrFiller=f.gecko||f.webkit||f.ie&&b>10;f.needsNbspFiller=f.ie&&b<11;f.cssClass="cke_browser_"+(f.ie?"ie":f.gecko?"gecko":f.webkit?"webkit":"unknown");if(f.quirks)f.cssClass=f.cssClass+" cke_browser_quirks";if(f.ie)f.cssClass=f.cssClass+(" cke_browser_ie"+(f.quirks?"6 cke_browser_iequirks":f.version));if(f.air)f.cssClass=f.cssClass+" cke_browser_air";
if(f.iOS)f.cssClass=f.cssClass+" cke_browser_ios";if(f.hidpi)f.cssClass=f.cssClass+" cke_hidpi";return f}());
"unloaded"==CKEDITOR.status&&function(){CKEDITOR.event.implementOn(CKEDITOR);CKEDITOR.loadFullCore=function(){if(CKEDITOR.status!="basic_ready")CKEDITOR.loadFullCore._load=1;else{delete CKEDITOR.loadFullCore;var a=document.createElement("script");a.type="text/javascript";a.src=CKEDITOR.basePath+"alloy-editor-no-react.js";document.getElementsByTagName("head")[0].appendChild(a)}};CKEDITOR.loadFullCoreTimeout=0;CKEDITOR.add=function(a){(this._.pending||(this._.pending=[])).push(a)};(function(){CKEDITOR.domReady(function(){var a=
CKEDITOR.loadFullCore,f=CKEDITOR.loadFullCoreTimeout;if(a){CKEDITOR.status="basic_ready";a&&a._load?a():f&&setTimeout(function(){CKEDITOR.loadFullCore&&CKEDITOR.loadFullCore()},f*1E3)}})})();CKEDITOR.status="basic_loaded"}();CKEDITOR.dom={};
(function(){var a=[],f=CKEDITOR.env.gecko?"-moz-":CKEDITOR.env.webkit?"-webkit-":CKEDITOR.env.ie?"-ms-":"",b=/&/g,c=/>/g,e=/</g,d=/"/g,h=/&amp;/g,k=/&gt;/g,j=/&lt;/g,g=/&quot;/g;CKEDITOR.on("reset",function(){a=[]});CKEDITOR.tools={arrayCompare:function(a,e){if(!a&&!e)return true;if(!a||!e||a.length!=e.length)return false;for(var d=0;d<a.length;d++)if(a[d]!=e[d])return false;return true},clone:function(a){var e;if(a&&a instanceof Array){e=[];for(var d=0;d<a.length;d++)e[d]=CKEDITOR.tools.clone(a[d]);
return e}if(a===null||typeof a!="object"||a instanceof String||a instanceof Number||a instanceof Boolean||a instanceof Date||a instanceof RegExp||a.nodeType||a.window===a)return a;e=new a.constructor;for(d in a)e[d]=CKEDITOR.tools.clone(a[d]);return e},capitalize:function(a,e){return a.charAt(0).toUpperCase()+(e?a.slice(1):a.slice(1).toLowerCase())},extend:function(a){var e=arguments.length,d,b;if(typeof(d=arguments[e-1])=="boolean")e--;else if(typeof(d=arguments[e-2])=="boolean"){b=arguments[e-1];
e=e-2}for(var c=1;c<e;c++){var f=arguments[c],i;for(i in f)if(d===true||a[i]==null)if(!b||i in b)a[i]=f[i]}return a},prototypedCopy:function(a){var e=function(){};e.prototype=a;return new e},copy:function(a){var e={},d;for(d in a)e[d]=a[d];return e},isArray:function(a){return Object.prototype.toString.call(a)=="[object Array]"},isEmpty:function(a){for(var e in a)if(a.hasOwnProperty(e))return false;return true},cssVendorPrefix:function(a,e,d){if(d)return f+a+":"+e+";"+a+":"+e;d={};d[a]=e;d[f+a]=e;
return d},cssStyleToDomStyle:function(){var a=document.createElement("div").style,e=typeof a.cssFloat!="undefined"?"cssFloat":typeof a.styleFloat!="undefined"?"styleFloat":"float";return function(a){return a=="float"?e:a.replace(/-./g,function(a){return a.substr(1).toUpperCase()})}}(),buildStyleHtml:function(a){for(var a=[].concat(a),e,d=[],b=0;b<a.length;b++)if(e=a[b])/@import|[{}]/.test(e)?d.push("<style>"+e+"</style>"):d.push('<link type="text/css" rel=stylesheet href="'+e+'">');return d.join("")},
htmlEncode:function(a){return(""+a).replace(b,"&amp;").replace(c,"&gt;").replace(e,"&lt;")},htmlDecode:function(a){return a.replace(h,"&").replace(k,">").replace(j,"<")},htmlEncodeAttr:function(a){return a.replace(d,"&quot;").replace(e,"&lt;").replace(c,"&gt;")},htmlDecodeAttr:function(a){return a.replace(g,'"').replace(j,"<").replace(k,">")},getNextNumber:function(){var a=0;return function(){return++a}}(),getNextId:function(){return"cke_"+this.getNextNumber()},override:function(a,e){var d=e(a);d.prototype=
a.prototype;return d},setTimeout:function(a,e,d,b,c){c||(c=window);d||(d=c);return c.setTimeout(function(){b?a.apply(d,[].concat(b)):a.apply(d)},e||0)},trim:function(){var a=/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g;return function(e){return e.replace(a,"")}}(),ltrim:function(){var a=/^[ \t\n\r]+/g;return function(e){return e.replace(a,"")}}(),rtrim:function(){var a=/[ \t\n\r]+$/g;return function(e){return e.replace(a,"")}}(),indexOf:function(a,e){if(typeof e=="function")for(var d=0,b=a.length;d<b;d++){if(e(a[d]))return d}else{if(a.indexOf)return a.indexOf(e);
d=0;for(b=a.length;d<b;d++)if(a[d]===e)return d}return-1},search:function(a,e){var d=CKEDITOR.tools.indexOf(a,e);return d>=0?a[d]:null},bind:function(a,e){return function(){return a.apply(e,arguments)}},createClass:function(a){var e=a.$,d=a.base,b=a.privates||a._,c=a.proto,a=a.statics;!e&&(e=function(){d&&this.base.apply(this,arguments)});if(b)var f=e,e=function(){var a=this._||(this._={}),e;for(e in b){var d=b[e];a[e]=typeof d=="function"?CKEDITOR.tools.bind(d,this):d}f.apply(this,arguments)};if(d){e.prototype=
this.prototypedCopy(d.prototype);e.prototype.constructor=e;e.base=d;e.baseProto=d.prototype;e.prototype.base=function(){this.base=d.prototype.base;d.apply(this,arguments);this.base=arguments.callee}}c&&this.extend(e.prototype,c,true);a&&this.extend(e,a,true);return e},addFunction:function(e,d){return a.push(function(){return e.apply(d||this,arguments)})-1},removeFunction:function(e){a[e]=null},callFunction:function(e){var d=a[e];return d&&d.apply(window,Array.prototype.slice.call(arguments,1))},cssLength:function(){var a=
/^-?\d+\.?\d*px$/,e;return function(d){e=CKEDITOR.tools.trim(d+"")+"px";return a.test(e)?e:d||""}}(),convertToPx:function(){var a;return function(e){if(!a){a=CKEDITOR.dom.element.createFromHtml('<div style="position:absolute;left:-9999px;top:-9999px;margin:0px;padding:0px;border:0px;"></div>',CKEDITOR.document);CKEDITOR.document.getBody().append(a)}if(!/%$/.test(e)){a.setStyle("width",e);return a.$.clientWidth}return e}}(),repeat:function(a,e){return Array(e+1).join(a)},tryThese:function(){for(var a,
e=0,d=arguments.length;e<d;e++){var b=arguments[e];try{a=b();break}catch(c){}}return a},genKey:function(){return Array.prototype.slice.call(arguments).join("-")},defer:function(a){return function(){var e=arguments,d=this;window.setTimeout(function(){a.apply(d,e)},0)}},normalizeCssText:function(a,e){var d=[],b,c=CKEDITOR.tools.parseCssText(a,true,e);for(b in c)d.push(b+":"+c[b]);d.sort();return d.length?d.join(";")+";":""},convertRgbToHex:function(a){return a.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi,
function(a,e,d,b){a=[e,d,b];for(e=0;e<3;e++)a[e]=("0"+parseInt(a[e],10).toString(16)).slice(-2);return"#"+a.join("")})},parseCssText:function(a,e,d){var b={};if(d){d=new CKEDITOR.dom.element("span");d.setAttribute("style",a);a=CKEDITOR.tools.convertRgbToHex(d.getAttribute("style")||"")}if(!a||a==";")return b;a.replace(/&quot;/g,'"').replace(/\s*([^:;\s]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(a,d,m){if(e){d=d.toLowerCase();d=="font-family"&&(m=m.toLowerCase().replace(/["']/g,"").replace(/\s*,\s*/g,","));
m=CKEDITOR.tools.trim(m)}b[d]=m});return b},writeCssText:function(a,e){var d,b=[];for(d in a)b.push(d+":"+a[d]);e&&b.sort();return b.join("; ")},objectCompare:function(a,e,d){var b;if(!a&&!e)return true;if(!a||!e)return false;for(b in a)if(a[b]!=e[b])return false;if(!d)for(b in e)if(a[b]!=e[b])return false;return true},objectKeys:function(a){var e=[],d;for(d in a)e.push(d);return e},convertArrayToObject:function(a,e){var d={};arguments.length==1&&(e=true);for(var b=0,c=a.length;b<c;++b)d[a[b]]=e;
return d},fixDomain:function(){for(var a;;)try{a=window.parent.document.domain;break}catch(e){a=a?a.replace(/.+?(?:\.|$)/,""):document.domain;if(!a)break;document.domain=a}return!!a},eventsBuffer:function(a,e){function d(){c=(new Date).getTime();b=false;e()}var b,c=0;return{input:function(){if(!b){var e=(new Date).getTime()-c;e<a?b=setTimeout(d,a-e):d()}},reset:function(){b&&clearTimeout(b);b=c=0}}},enableHtml5Elements:function(a,e){for(var d=["abbr","article","aside","audio","bdi","canvas","data",
"datalist","details","figcaption","figure","footer","header","hgroup","mark","meter","nav","output","progress","section","summary","time","video"],b=d.length,c;b--;){c=a.createElement(d[b]);e&&a.appendChild(c)}},checkIfAnyArrayItemMatches:function(a,e){for(var d=0,b=a.length;d<b;++d)if(a[d].match(e))return true;return false},checkIfAnyObjectPropertyMatches:function(a,e){for(var d in a)if(d.match(e))return true;return false},transparentImageData:"data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="}})();
CKEDITOR.dtd=function(){var a=CKEDITOR.tools.extend,f=function(a,e){for(var d=CKEDITOR.tools.clone(a),b=1;b<arguments.length;b++){var e=arguments[b],c;for(c in e)delete d[c]}return d},b={},c={},e={address:1,article:1,aside:1,blockquote:1,details:1,div:1,dl:1,fieldset:1,figure:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,hr:1,main:1,menu:1,nav:1,ol:1,p:1,pre:1,section:1,table:1,ul:1},d={command:1,link:1,meta:1,noscript:1,script:1,style:1},h={},k={"#":1},j={center:1,dir:1,noframes:1};
a(b,{a:1,abbr:1,area:1,audio:1,b:1,bdi:1,bdo:1,br:1,button:1,canvas:1,cite:1,code:1,command:1,datalist:1,del:1,dfn:1,em:1,embed:1,i:1,iframe:1,img:1,input:1,ins:1,kbd:1,keygen:1,label:1,map:1,mark:1,meter:1,noscript:1,object:1,output:1,progress:1,q:1,ruby:1,s:1,samp:1,script:1,select:1,small:1,span:1,strong:1,sub:1,sup:1,textarea:1,time:1,u:1,"var":1,video:1,wbr:1},k,{acronym:1,applet:1,basefont:1,big:1,font:1,isindex:1,strike:1,style:1,tt:1});a(c,e,b,j);f={a:f(b,{a:1,button:1}),abbr:b,address:c,
area:h,article:c,aside:c,audio:a({source:1,track:1},c),b:b,base:h,bdi:b,bdo:b,blockquote:c,body:c,br:h,button:f(b,{a:1,button:1}),canvas:b,caption:c,cite:b,code:b,col:h,colgroup:{col:1},command:h,datalist:a({option:1},b),dd:c,del:b,details:a({summary:1},c),dfn:b,div:c,dl:{dt:1,dd:1},dt:c,em:b,embed:h,fieldset:a({legend:1},c),figcaption:c,figure:a({figcaption:1},c),footer:c,form:c,h1:b,h2:b,h3:b,h4:b,h5:b,h6:b,head:a({title:1,base:1},d),header:c,hgroup:{h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},hr:h,html:a({head:1,
body:1},c,d),i:b,iframe:k,img:h,input:h,ins:b,kbd:b,keygen:h,label:b,legend:b,li:c,link:h,main:c,map:c,mark:b,menu:a({li:1},c),meta:h,meter:f(b,{meter:1}),nav:c,noscript:a({link:1,meta:1,style:1},b),object:a({param:1},b),ol:{li:1},optgroup:{option:1},option:k,output:b,p:b,param:h,pre:b,progress:f(b,{progress:1}),q:b,rp:b,rt:b,ruby:a({rp:1,rt:1},b),s:b,samp:b,script:k,section:c,select:{optgroup:1,option:1},small:b,source:h,span:b,strong:b,style:k,sub:b,summary:b,sup:b,table:{caption:1,colgroup:1,thead:1,
tfoot:1,tbody:1,tr:1},tbody:{tr:1},td:c,textarea:k,tfoot:{tr:1},th:c,thead:{tr:1},time:f(b,{time:1}),title:k,tr:{th:1,td:1},track:h,u:b,ul:{li:1},"var":b,video:a({source:1,track:1},c),wbr:h,acronym:b,applet:a({param:1},c),basefont:h,big:b,center:c,dialog:h,dir:{li:1},font:b,isindex:h,noframes:c,strike:b,tt:b};a(f,{$block:a({audio:1,dd:1,dt:1,figcaption:1,li:1,video:1},e,j),$blockLimit:{article:1,aside:1,audio:1,body:1,caption:1,details:1,dir:1,div:1,dl:1,fieldset:1,figcaption:1,figure:1,footer:1,
form:1,header:1,hgroup:1,main:1,menu:1,nav:1,ol:1,section:1,table:1,td:1,th:1,tr:1,ul:1,video:1},$cdata:{script:1,style:1},$editable:{address:1,article:1,aside:1,blockquote:1,body:1,details:1,div:1,fieldset:1,figcaption:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,main:1,nav:1,p:1,pre:1,section:1},$empty:{area:1,base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1},$inline:b,$list:{dl:1,ol:1,
ul:1},$listItem:{dd:1,dt:1,li:1},$nonBodyContent:a({body:1,head:1,html:1},f.head),$nonEditable:{applet:1,audio:1,button:1,embed:1,iframe:1,map:1,object:1,option:1,param:1,script:1,textarea:1,video:1},$object:{applet:1,audio:1,button:1,hr:1,iframe:1,img:1,input:1,object:1,select:1,table:1,textarea:1,video:1},$removeEmpty:{abbr:1,acronym:1,b:1,bdi:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,mark:1,meter:1,output:1,q:1,ruby:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,
sub:1,sup:1,time:1,tt:1,u:1,"var":1},$tabIndex:{a:1,area:1,button:1,input:1,object:1,select:1,textarea:1},$tableContent:{caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1},$transparent:{a:1,audio:1,canvas:1,del:1,ins:1,map:1,noscript:1,object:1,video:1},$intermediate:{caption:1,colgroup:1,dd:1,dt:1,figcaption:1,legend:1,li:1,optgroup:1,option:1,rp:1,rt:1,summary:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1}});return f}();CKEDITOR.dom.event=function(a){this.$=a};
CKEDITOR.dom.event.prototype={getKey:function(){return this.$.keyCode||this.$.which},getKeystroke:function(){var a=this.getKey();if(this.$.ctrlKey||this.$.metaKey)a=a+CKEDITOR.CTRL;this.$.shiftKey&&(a=a+CKEDITOR.SHIFT);this.$.altKey&&(a=a+CKEDITOR.ALT);return a},preventDefault:function(a){var f=this.$;f.preventDefault?f.preventDefault():f.returnValue=false;a&&this.stopPropagation()},stopPropagation:function(){var a=this.$;a.stopPropagation?a.stopPropagation():a.cancelBubble=true},getTarget:function(){var a=
this.$.target||this.$.srcElement;return a?new CKEDITOR.dom.node(a):null},getPhase:function(){return this.$.eventPhase||2},getPageOffset:function(){var a=this.getTarget().getDocument().$;return{x:this.$.pageX||this.$.clientX+(a.documentElement.scrollLeft||a.body.scrollLeft),y:this.$.pageY||this.$.clientY+(a.documentElement.scrollTop||a.body.scrollTop)}}};CKEDITOR.CTRL=1114112;CKEDITOR.SHIFT=2228224;CKEDITOR.ALT=4456448;CKEDITOR.EVENT_PHASE_CAPTURING=1;CKEDITOR.EVENT_PHASE_AT_TARGET=2;
CKEDITOR.EVENT_PHASE_BUBBLING=3;CKEDITOR.dom.domObject=function(a){if(a)this.$=a};
CKEDITOR.dom.domObject.prototype=function(){var a=function(a,b){return function(c){typeof CKEDITOR!="undefined"&&a.fire(b,new CKEDITOR.dom.event(c))}};return{getPrivate:function(){var a;if(!(a=this.getCustomData("_")))this.setCustomData("_",a={});return a},on:function(f){var b=this.getCustomData("_cke_nativeListeners");if(!b){b={};this.setCustomData("_cke_nativeListeners",b)}if(!b[f]){b=b[f]=a(this,f);this.$.addEventListener?this.$.addEventListener(f,b,!!CKEDITOR.event.useCapture):this.$.attachEvent&&
this.$.attachEvent("on"+f,b)}return CKEDITOR.event.prototype.on.apply(this,arguments)},removeListener:function(a){CKEDITOR.event.prototype.removeListener.apply(this,arguments);if(!this.hasListeners(a)){var b=this.getCustomData("_cke_nativeListeners"),c=b&&b[a];if(c){this.$.removeEventListener?this.$.removeEventListener(a,c,false):this.$.detachEvent&&this.$.detachEvent("on"+a,c);delete b[a]}}},removeAllListeners:function(){var a=this.getCustomData("_cke_nativeListeners"),b;for(b in a){var c=a[b];this.$.detachEvent?
this.$.detachEvent("on"+b,c):this.$.removeEventListener&&this.$.removeEventListener(b,c,false);delete a[b]}CKEDITOR.event.prototype.removeAllListeners.call(this)}}}();
(function(a){var f={};CKEDITOR.on("reset",function(){f={}});a.equals=function(a){try{return a&&a.$===this.$}catch(c){return false}};a.setCustomData=function(a,c){var e=this.getUniqueId();(f[e]||(f[e]={}))[a]=c;return this};a.getCustomData=function(a){var c=this.$["data-cke-expando"];return(c=c&&f[c])&&a in c?c[a]:null};a.removeCustomData=function(a){var c=this.$["data-cke-expando"],c=c&&f[c],e,d;if(c){e=c[a];d=a in c;delete c[a]}return d?e:null};a.clearCustomData=function(){this.removeAllListeners();
var a=this.$["data-cke-expando"];a&&delete f[a]};a.getUniqueId=function(){return this.$["data-cke-expando"]||(this.$["data-cke-expando"]=CKEDITOR.tools.getNextNumber())};CKEDITOR.event.implementOn(a)})(CKEDITOR.dom.domObject.prototype);
CKEDITOR.dom.node=function(a){return a?new CKEDITOR.dom[a.nodeType==CKEDITOR.NODE_DOCUMENT?"document":a.nodeType==CKEDITOR.NODE_ELEMENT?"element":a.nodeType==CKEDITOR.NODE_TEXT?"text":a.nodeType==CKEDITOR.NODE_COMMENT?"comment":a.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT?"documentFragment":"domObject"](a):this};CKEDITOR.dom.node.prototype=new CKEDITOR.dom.domObject;CKEDITOR.NODE_ELEMENT=1;CKEDITOR.NODE_DOCUMENT=9;CKEDITOR.NODE_TEXT=3;CKEDITOR.NODE_COMMENT=8;CKEDITOR.NODE_DOCUMENT_FRAGMENT=11;
CKEDITOR.POSITION_IDENTICAL=0;CKEDITOR.POSITION_DISCONNECTED=1;CKEDITOR.POSITION_FOLLOWING=2;CKEDITOR.POSITION_PRECEDING=4;CKEDITOR.POSITION_IS_CONTAINED=8;CKEDITOR.POSITION_CONTAINS=16;
CKEDITOR.tools.extend(CKEDITOR.dom.node.prototype,{appendTo:function(a,f){a.append(this,f);return a},clone:function(a,f){var b=this.$.cloneNode(a),c=function(e){e["data-cke-expando"]&&(e["data-cke-expando"]=false);if(e.nodeType==CKEDITOR.NODE_ELEMENT){f||e.removeAttribute("id",false);if(a)for(var e=e.childNodes,d=0;d<e.length;d++)c(e[d])}};c(b);return new CKEDITOR.dom.node(b)},hasPrevious:function(){return!!this.$.previousSibling},hasNext:function(){return!!this.$.nextSibling},insertAfter:function(a){a.$.parentNode.insertBefore(this.$,
a.$.nextSibling);return a},insertBefore:function(a){a.$.parentNode.insertBefore(this.$,a.$);return a},insertBeforeMe:function(a){this.$.parentNode.insertBefore(a.$,this.$);return a},getAddress:function(a){for(var f=[],b=this.getDocument().$.documentElement,c=this.$;c&&c!=b;){var e=c.parentNode;e&&f.unshift(this.getIndex.call({$:c},a));c=e}return f},getDocument:function(){return new CKEDITOR.dom.document(this.$.ownerDocument||this.$.parentNode.ownerDocument)},getIndex:function(a){function f(a,e){var b=
e?a.nextSibling:a.previousSibling;return!b||b.nodeType!=CKEDITOR.NODE_TEXT?null:b.nodeValue?b:f(b,e)}var b=this.$,c=-1,e;if(!this.$.parentNode||a&&b.nodeType==CKEDITOR.NODE_TEXT&&!b.nodeValue&&!f(b)&&!f(b,true))return-1;do if(!a||!(b!=this.$&&b.nodeType==CKEDITOR.NODE_TEXT&&(e||!b.nodeValue))){c++;e=b.nodeType==CKEDITOR.NODE_TEXT}while(b=b.previousSibling);return c},getNextSourceNode:function(a,f,b){if(b&&!b.call)var c=b,b=function(a){return!a.equals(c)};var a=!a&&this.getFirst&&this.getFirst(),e;
if(!a){if(this.type==CKEDITOR.NODE_ELEMENT&&b&&b(this,true)===false)return null;a=this.getNext()}for(;!a&&(e=(e||this).getParent());){if(b&&b(e,true)===false)return null;a=e.getNext()}return!a||b&&b(a)===false?null:f&&f!=a.type?a.getNextSourceNode(false,f,b):a},getPreviousSourceNode:function(a,f,b){if(b&&!b.call)var c=b,b=function(a){return!a.equals(c)};var a=!a&&this.getLast&&this.getLast(),e;if(!a){if(this.type==CKEDITOR.NODE_ELEMENT&&b&&b(this,true)===false)return null;a=this.getPrevious()}for(;!a&&
(e=(e||this).getParent());){if(b&&b(e,true)===false)return null;a=e.getPrevious()}return!a||b&&b(a)===false?null:f&&a.type!=f?a.getPreviousSourceNode(false,f,b):a},getPrevious:function(a){var f=this.$,b;do b=(f=f.previousSibling)&&f.nodeType!=10&&new CKEDITOR.dom.node(f);while(b&&a&&!a(b));return b},getNext:function(a){var f=this.$,b;do b=(f=f.nextSibling)&&new CKEDITOR.dom.node(f);while(b&&a&&!a(b));return b},getParent:function(a){var f=this.$.parentNode;return f&&(f.nodeType==CKEDITOR.NODE_ELEMENT||
a&&f.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT)?new CKEDITOR.dom.node(f):null},getParents:function(a){var f=this,b=[];do b[a?"push":"unshift"](f);while(f=f.getParent());return b},getCommonAncestor:function(a){if(a.equals(this))return this;if(a.contains&&a.contains(this))return a;var f=this.contains?this:this.getParent();do if(f.contains(a))return f;while(f=f.getParent());return null},getPosition:function(a){var f=this.$,b=a.$;if(f.compareDocumentPosition)return f.compareDocumentPosition(b);if(f==
b)return CKEDITOR.POSITION_IDENTICAL;if(this.type==CKEDITOR.NODE_ELEMENT&&a.type==CKEDITOR.NODE_ELEMENT){if(f.contains){if(f.contains(b))return CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING;if(b.contains(f))return CKEDITOR.POSITION_IS_CONTAINED+CKEDITOR.POSITION_FOLLOWING}if("sourceIndex"in f)return f.sourceIndex<0||b.sourceIndex<0?CKEDITOR.POSITION_DISCONNECTED:f.sourceIndex<b.sourceIndex?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING}for(var f=this.getAddress(),a=a.getAddress(),
b=Math.min(f.length,a.length),c=0;c<=b-1;c++)if(f[c]!=a[c]){if(c<b)return f[c]<a[c]?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING;break}return f.length<a.length?CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_IS_CONTAINED+CKEDITOR.POSITION_FOLLOWING},getAscendant:function(a,f){var b=this.$,c,e;if(!f)b=b.parentNode;if(typeof a=="function"){e=true;c=a}else{e=false;c=function(e){e=typeof e.nodeName=="string"?e.nodeName.toLowerCase():"";return typeof a=="string"?e==
a:e in a}}for(;b;){if(c(e?new CKEDITOR.dom.node(b):b))return new CKEDITOR.dom.node(b);try{b=b.parentNode}catch(d){b=null}}return null},hasAscendant:function(a,f){var b=this.$;if(!f)b=b.parentNode;for(;b;){if(b.nodeName&&b.nodeName.toLowerCase()==a)return true;b=b.parentNode}return false},move:function(a,f){a.append(this.remove(),f)},remove:function(a){var f=this.$,b=f.parentNode;if(b){if(a)for(;a=f.firstChild;)b.insertBefore(f.removeChild(a),f);b.removeChild(f)}return this},replace:function(a){this.insertBefore(a);
a.remove()},trim:function(){this.ltrim();this.rtrim()},ltrim:function(){for(var a;this.getFirst&&(a=this.getFirst());){if(a.type==CKEDITOR.NODE_TEXT){var f=CKEDITOR.tools.ltrim(a.getText()),b=a.getLength();if(f){if(f.length<b){a.split(b-f.length);this.$.removeChild(this.$.firstChild)}}else{a.remove();continue}}break}},rtrim:function(){for(var a;this.getLast&&(a=this.getLast());){if(a.type==CKEDITOR.NODE_TEXT){var f=CKEDITOR.tools.rtrim(a.getText()),b=a.getLength();if(f){if(f.length<b){a.split(f.length);
this.$.lastChild.parentNode.removeChild(this.$.lastChild)}}else{a.remove();continue}}break}if(CKEDITOR.env.needsBrFiller)(a=this.$.lastChild)&&(a.type==1&&a.nodeName.toLowerCase()=="br")&&a.parentNode.removeChild(a)},isReadOnly:function(){var a=this;this.type!=CKEDITOR.NODE_ELEMENT&&(a=this.getParent());if(a&&typeof a.$.isContentEditable!="undefined")return!(a.$.isContentEditable||a.data("cke-editable"));for(;a;){if(a.data("cke-editable"))break;if(a.getAttribute("contentEditable")=="false")return true;
if(a.getAttribute("contentEditable")=="true")break;a=a.getParent()}return!a}});CKEDITOR.dom.window=function(a){CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.window.prototype=new CKEDITOR.dom.domObject;
CKEDITOR.tools.extend(CKEDITOR.dom.window.prototype,{focus:function(){this.$.focus()},getViewPaneSize:function(){var a=this.$.document,f=a.compatMode=="CSS1Compat";return{width:(f?a.documentElement.clientWidth:a.body.clientWidth)||0,height:(f?a.documentElement.clientHeight:a.body.clientHeight)||0}},getScrollPosition:function(){var a=this.$;if("pageXOffset"in a)return{x:a.pageXOffset||0,y:a.pageYOffset||0};a=a.document;return{x:a.documentElement.scrollLeft||a.body.scrollLeft||0,y:a.documentElement.scrollTop||
a.body.scrollTop||0}},getFrame:function(){var a=this.$.frameElement;return a?new CKEDITOR.dom.element.get(a):null}});CKEDITOR.dom.document=function(a){CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.document.prototype=new CKEDITOR.dom.domObject;
CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype,{type:CKEDITOR.NODE_DOCUMENT,appendStyleSheet:function(a){if(this.$.createStyleSheet)this.$.createStyleSheet(a);else{var f=new CKEDITOR.dom.element("link");f.setAttributes({rel:"stylesheet",type:"text/css",href:a});this.getHead().append(f)}},appendStyleText:function(a){if(this.$.createStyleSheet){var f=this.$.createStyleSheet("");f.cssText=a}else{var b=new CKEDITOR.dom.element("style",this);b.append(new CKEDITOR.dom.text(a,this));this.getHead().append(b)}return f||
b.$.sheet},createElement:function(a,f){var b=new CKEDITOR.dom.element(a,this);if(f){f.attributes&&b.setAttributes(f.attributes);f.styles&&b.setStyles(f.styles)}return b},createText:function(a){return new CKEDITOR.dom.text(a,this)},focus:function(){this.getWindow().focus()},getActive:function(){var a;try{a=this.$.activeElement}catch(f){return null}return new CKEDITOR.dom.element(a)},getById:function(a){return(a=this.$.getElementById(a))?new CKEDITOR.dom.element(a):null},getByAddress:function(a,f){for(var b=
this.$.documentElement,c=0;b&&c<a.length;c++){var e=a[c];if(f)for(var d=-1,h=0;h<b.childNodes.length;h++){var k=b.childNodes[h];if(!(f===true&&k.nodeType==3&&k.previousSibling&&k.previousSibling.nodeType==3)){d++;if(d==e){b=k;break}}}else b=b.childNodes[e]}return b?new CKEDITOR.dom.node(b):null},getElementsByTag:function(a,f){!(CKEDITOR.env.ie&&document.documentMode<=8)&&f&&(a=f+":"+a);return new CKEDITOR.dom.nodeList(this.$.getElementsByTagName(a))},getHead:function(){var a=this.$.getElementsByTagName("head")[0];
return a=a?new CKEDITOR.dom.element(a):this.getDocumentElement().append(new CKEDITOR.dom.element("head"),true)},getBody:function(){return new CKEDITOR.dom.element(this.$.body)},getDocumentElement:function(){return new CKEDITOR.dom.element(this.$.documentElement)},getWindow:function(){return new CKEDITOR.dom.window(this.$.parentWindow||this.$.defaultView)},write:function(a){this.$.open("text/html","replace");CKEDITOR.env.ie&&(a=a.replace(/(?:^\s*<!DOCTYPE[^>]*?>)|^/i,'$&\n<script data-cke-temp="1">('+
CKEDITOR.tools.fixDomain+")();<\/script>"));this.$.write(a);this.$.close()},find:function(a){return new CKEDITOR.dom.nodeList(this.$.querySelectorAll(a))},findOne:function(a){return(a=this.$.querySelector(a))?new CKEDITOR.dom.element(a):null},_getHtml5ShivFrag:function(){var a=this.getCustomData("html5ShivFrag");if(!a){a=this.$.createDocumentFragment();CKEDITOR.tools.enableHtml5Elements(a,true);this.setCustomData("html5ShivFrag",a)}return a}});CKEDITOR.dom.nodeList=function(a){this.$=a};
CKEDITOR.dom.nodeList.prototype={count:function(){return this.$.length},getItem:function(a){if(a<0||a>=this.$.length)return null;return(a=this.$[a])?new CKEDITOR.dom.node(a):null}};CKEDITOR.dom.element=function(a,f){typeof a=="string"&&(a=(f?f.$:document).createElement(a));CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.element.get=function(a){return(a=typeof a=="string"?document.getElementById(a)||document.getElementsByName(a)[0]:a)&&(a.$?a:new CKEDITOR.dom.element(a))};
CKEDITOR.dom.element.prototype=new CKEDITOR.dom.node;CKEDITOR.dom.element.createFromHtml=function(a,f){var b=new CKEDITOR.dom.element("div",f);b.setHtml(a);return b.getFirst().remove()};
CKEDITOR.dom.element.setMarker=function(a,f,b,c){var e=f.getCustomData("list_marker_id")||f.setCustomData("list_marker_id",CKEDITOR.tools.getNextNumber()).getCustomData("list_marker_id"),d=f.getCustomData("list_marker_names")||f.setCustomData("list_marker_names",{}).getCustomData("list_marker_names");a[e]=f;d[b]=1;return f.setCustomData(b,c)};CKEDITOR.dom.element.clearAllMarkers=function(a){for(var f in a)CKEDITOR.dom.element.clearMarkers(a,a[f],1)};
CKEDITOR.dom.element.clearMarkers=function(a,f,b){var c=f.getCustomData("list_marker_names"),e=f.getCustomData("list_marker_id"),d;for(d in c)f.removeCustomData(d);f.removeCustomData("list_marker_names");if(b){f.removeCustomData("list_marker_id");delete a[e]}};
(function(){function a(a){var d=true;if(!a.$.id){a.$.id="cke_tmp_"+CKEDITOR.tools.getNextNumber();d=false}return function(){d||a.removeAttribute("id")}}function f(a,d){return"#"+a.$.id+" "+d.split(/,\s*/).join(", #"+a.$.id+" ")}function b(a){for(var d=0,b=0,f=c[a].length;b<f;b++)d=d+(parseInt(this.getComputedStyle(c[a][b])||0,10)||0);return d}CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_ELEMENT,addClass:function(a){var d=this.$.className;d&&(RegExp("(?:^|\\s)"+a+"(?:\\s|$)",
"").test(d)||(d=d+(" "+a)));this.$.className=d||a;return this},removeClass:function(a){var d=this.getAttribute("class");if(d){a=RegExp("(?:^|\\s+)"+a+"(?=\\s|$)","i");if(a.test(d))(d=d.replace(a,"").replace(/^\s+/,""))?this.setAttribute("class",d):this.removeAttribute("class")}return this},hasClass:function(a){return RegExp("(?:^|\\s+)"+a+"(?=\\s|$)","").test(this.getAttribute("class"))},append:function(a,d){typeof a=="string"&&(a=this.getDocument().createElement(a));d?this.$.insertBefore(a.$,this.$.firstChild):
this.$.appendChild(a.$);return a},appendHtml:function(a){if(this.$.childNodes.length){var d=new CKEDITOR.dom.element("div",this.getDocument());d.setHtml(a);d.moveChildren(this)}else this.setHtml(a)},appendText:function(a){this.$.text!=null?this.$.text=this.$.text+a:this.append(new CKEDITOR.dom.text(a))},appendBogus:function(a){if(a||CKEDITOR.env.needsBrFiller){for(a=this.getLast();a&&a.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.rtrim(a.getText());)a=a.getPrevious();if(!a||!a.is||!a.is("br")){a=this.getDocument().createElement("br");
CKEDITOR.env.gecko&&a.setAttribute("type","_moz");this.append(a)}}},breakParent:function(a){var d=new CKEDITOR.dom.range(this.getDocument());d.setStartAfter(this);d.setEndAfter(a);a=d.extractContents();d.insertNode(this.remove());a.insertAfterNode(this)},contains:CKEDITOR.env.ie||CKEDITOR.env.webkit?function(a){var d=this.$;return a.type!=CKEDITOR.NODE_ELEMENT?d.contains(a.getParent().$):d!=a.$&&d.contains(a.$)}:function(a){return!!(this.$.compareDocumentPosition(a.$)&16)},focus:function(){function a(){try{this.$.focus()}catch(e){}}
return function(d){d?CKEDITOR.tools.setTimeout(a,100,this):a.call(this)}}(),getHtml:function(){var a=this.$.innerHTML;return CKEDITOR.env.ie?a.replace(/<\?[^>]*>/g,""):a},getOuterHtml:function(){if(this.$.outerHTML)return this.$.outerHTML.replace(/<\?[^>]*>/,"");var a=this.$.ownerDocument.createElement("div");a.appendChild(this.$.cloneNode(true));return a.innerHTML},getClientRect:function(){var a=CKEDITOR.tools.extend({},this.$.getBoundingClientRect());!a.width&&(a.width=a.right-a.left);!a.height&&
(a.height=a.bottom-a.top);return a},setHtml:CKEDITOR.env.ie&&CKEDITOR.env.version<9?function(a){try{var d=this.$;if(this.getParent())return d.innerHTML=a;var b=this.getDocument()._getHtml5ShivFrag();b.appendChild(d);d.innerHTML=a;b.removeChild(d);return a}catch(c){this.$.innerHTML="";d=new CKEDITOR.dom.element("body",this.getDocument());d.$.innerHTML=a;for(d=d.getChildren();d.count();)this.append(d.getItem(0));return a}}:function(a){return this.$.innerHTML=a},setText:function(){var a=document.createElement("p");
a.innerHTML="x";a=a.textContent;return function(d){this.$[a?"textContent":"innerText"]=d}}(),getAttribute:function(){var a=function(a){return this.$.getAttribute(a,2)};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(a){switch(a){case "class":a="className";break;case "http-equiv":a="httpEquiv";break;case "name":return this.$.name;case "tabindex":a=this.$.getAttribute(a,2);a!==0&&this.$.tabIndex===0&&(a=null);return a;case "checked":a=this.$.attributes.getNamedItem(a);
return(a.specified?a.nodeValue:this.$.checked)?"checked":null;case "hspace":case "value":return this.$[a];case "style":return this.$.style.cssText;case "contenteditable":case "contentEditable":return this.$.attributes.getNamedItem("contentEditable").specified?this.$.getAttribute("contentEditable"):null}return this.$.getAttribute(a,2)}:a}(),getChildren:function(){return new CKEDITOR.dom.nodeList(this.$.childNodes)},getComputedStyle:CKEDITOR.env.ie?function(a){return this.$.currentStyle[CKEDITOR.tools.cssStyleToDomStyle(a)]}:
function(a){var d=this.getWindow().$.getComputedStyle(this.$,null);return d?d.getPropertyValue(a):""},getDtd:function(){var a=CKEDITOR.dtd[this.getName()];this.getDtd=function(){return a};return a},getElementsByTag:CKEDITOR.dom.document.prototype.getElementsByTag,getTabIndex:CKEDITOR.env.ie?function(){var a=this.$.tabIndex;a===0&&(!CKEDITOR.dtd.$tabIndex[this.getName()]&&parseInt(this.getAttribute("tabindex"),10)!==0)&&(a=-1);return a}:CKEDITOR.env.webkit?function(){var a=this.$.tabIndex;if(a===void 0){a=
parseInt(this.getAttribute("tabindex"),10);isNaN(a)&&(a=-1)}return a}:function(){return this.$.tabIndex},getText:function(){return this.$.textContent||this.$.innerText||""},getWindow:function(){return this.getDocument().getWindow()},getId:function(){return this.$.id||null},getNameAtt:function(){return this.$.name||null},getName:function(){var a=this.$.nodeName.toLowerCase();if(CKEDITOR.env.ie&&document.documentMode<=8){var d=this.$.scopeName;d!="HTML"&&(a=d.toLowerCase()+":"+a)}this.getName=function(){return a};
return this.getName()},getValue:function(){return this.$.value},getFirst:function(a){var d=this.$.firstChild;(d=d&&new CKEDITOR.dom.node(d))&&(a&&!a(d))&&(d=d.getNext(a));return d},getLast:function(a){var d=this.$.lastChild;(d=d&&new CKEDITOR.dom.node(d))&&(a&&!a(d))&&(d=d.getPrevious(a));return d},getStyle:function(a){return this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)]},is:function(){var a=this.getName();if(typeof arguments[0]=="object")return!!arguments[0][a];for(var d=0;d<arguments.length;d++)if(arguments[d]==
a)return true;return false},isEditable:function(a){var d=this.getName();if(this.isReadOnly()||this.getComputedStyle("display")=="none"||this.getComputedStyle("visibility")=="hidden"||CKEDITOR.dtd.$nonEditable[d]||CKEDITOR.dtd.$empty[d]||this.is("a")&&(this.data("cke-saved-name")||this.hasAttribute("name"))&&!this.getChildCount())return false;if(a!==false){a=CKEDITOR.dtd[d]||CKEDITOR.dtd.span;return!(!a||!a["#"])}return true},isIdentical:function(a){var d=this.clone(0,1),a=a.clone(0,1);d.removeAttributes(["_moz_dirty",
"data-cke-expando","data-cke-saved-href","data-cke-saved-name"]);a.removeAttributes(["_moz_dirty","data-cke-expando","data-cke-saved-href","data-cke-saved-name"]);if(d.$.isEqualNode){d.$.style.cssText=CKEDITOR.tools.normalizeCssText(d.$.style.cssText);a.$.style.cssText=CKEDITOR.tools.normalizeCssText(a.$.style.cssText);return d.$.isEqualNode(a.$)}d=d.getOuterHtml();a=a.getOuterHtml();if(CKEDITOR.env.ie&&CKEDITOR.env.version<9&&this.is("a")){var b=this.getParent();if(b.type==CKEDITOR.NODE_ELEMENT){b=
b.clone();b.setHtml(d);d=b.getHtml();b.setHtml(a);a=b.getHtml()}}return d==a},isVisible:function(){var a=(this.$.offsetHeight||this.$.offsetWidth)&&this.getComputedStyle("visibility")!="hidden",d,b;if(a&&CKEDITOR.env.webkit){d=this.getWindow();if(!d.equals(CKEDITOR.document.getWindow())&&(b=d.$.frameElement))a=(new CKEDITOR.dom.element(b)).isVisible()}return!!a},isEmptyInlineRemoveable:function(){if(!CKEDITOR.dtd.$removeEmpty[this.getName()])return false;for(var a=this.getChildren(),d=0,b=a.count();d<
b;d++){var c=a.getItem(d);if(!(c.type==CKEDITOR.NODE_ELEMENT&&c.data("cke-bookmark"))&&(c.type==CKEDITOR.NODE_ELEMENT&&!c.isEmptyInlineRemoveable()||c.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(c.getText())))return false}return true},hasAttributes:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(){for(var a=this.$.attributes,d=0;d<a.length;d++){var b=a[d];switch(b.nodeName){case "class":if(this.getAttribute("class"))return true;case "data-cke-expando":continue;default:if(b.specified)return true}}return false}:
function(){var a=this.$.attributes,d=a.length,b={"data-cke-expando":1,_moz_dirty:1};return d>0&&(d>2||!b[a[0].nodeName]||d==2&&!b[a[1].nodeName])},hasAttribute:function(){function a(d){var e=this.$.attributes.getNamedItem(d);if(this.getName()=="input")switch(d){case "class":return this.$.className.length>0;case "checked":return!!this.$.checked;case "value":d=this.getAttribute("type");return d=="checkbox"||d=="radio"?this.$.value!="on":!!this.$.value}return!e?false:e.specified}return CKEDITOR.env.ie?
CKEDITOR.env.version<8?function(d){return d=="name"?!!this.$.name:a.call(this,d)}:a:function(a){return!!this.$.attributes.getNamedItem(a)}}(),hide:function(){this.setStyle("display","none")},moveChildren:function(a,d){var b=this.$,a=a.$;if(b!=a){var c;if(d)for(;c=b.lastChild;)a.insertBefore(b.removeChild(c),a.firstChild);else for(;c=b.firstChild;)a.appendChild(b.removeChild(c))}},mergeSiblings:function(){function a(d,b,e){if(b&&b.type==CKEDITOR.NODE_ELEMENT){for(var c=[];b.data("cke-bookmark")||b.isEmptyInlineRemoveable();){c.push(b);
b=e?b.getNext():b.getPrevious();if(!b||b.type!=CKEDITOR.NODE_ELEMENT)return}if(d.isIdentical(b)){for(var f=e?d.getLast():d.getFirst();c.length;)c.shift().move(d,!e);b.moveChildren(d,!e);b.remove();f&&f.type==CKEDITOR.NODE_ELEMENT&&f.mergeSiblings()}}}return function(d){if(d===false||CKEDITOR.dtd.$removeEmpty[this.getName()]||this.is("a")){a(this,this.getNext(),true);a(this,this.getPrevious())}}}(),show:function(){this.setStyles({display:"",visibility:""})},setAttribute:function(){var a=function(a,
b){this.$.setAttribute(a,b);return this};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(d,b){d=="class"?this.$.className=b:d=="style"?this.$.style.cssText=b:d=="tabindex"?this.$.tabIndex=b:d=="checked"?this.$.checked=b:d=="contenteditable"?a.call(this,"contentEditable",b):a.apply(this,arguments);return this}:CKEDITOR.env.ie8Compat&&CKEDITOR.env.secure?function(d,b){if(d=="src"&&b.match(/^http:\/\//))try{a.apply(this,arguments)}catch(c){}else a.apply(this,arguments);
return this}:a}(),setAttributes:function(a){for(var d in a)this.setAttribute(d,a[d]);return this},setValue:function(a){this.$.value=a;return this},removeAttribute:function(){var a=function(a){this.$.removeAttribute(a)};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(a){a=="class"?a="className":a=="tabindex"?a="tabIndex":a=="contenteditable"&&(a="contentEditable");this.$.removeAttribute(a)}:a}(),removeAttributes:function(a){if(CKEDITOR.tools.isArray(a))for(var b=0;b<
a.length;b++)this.removeAttribute(a[b]);else for(b in a)a.hasOwnProperty(b)&&this.removeAttribute(b)},removeStyle:function(a){var b=this.$.style;if(!b.removeProperty&&(a=="border"||a=="margin"||a=="padding")){var c=["top","left","right","bottom"],f;a=="border"&&(f=["color","style","width"]);for(var b=[],j=0;j<c.length;j++)if(f)for(var g=0;g<f.length;g++)b.push([a,c[j],f[g]].join("-"));else b.push([a,c[j]].join("-"));for(a=0;a<b.length;a++)this.removeStyle(b[a])}else{b.removeProperty?b.removeProperty(a):
b.removeAttribute(CKEDITOR.tools.cssStyleToDomStyle(a));this.$.style.cssText||this.removeAttribute("style")}},setStyle:function(a,b){this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)]=b;return this},setStyles:function(a){for(var b in a)this.setStyle(b,a[b]);return this},setOpacity:function(a){if(CKEDITOR.env.ie&&CKEDITOR.env.version<9){a=Math.round(a*100);this.setStyle("filter",a>=100?"":"progid:DXImageTransform.Microsoft.Alpha(opacity="+a+")")}else this.setStyle("opacity",a)},unselectable:function(){this.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select",
"none"));if(CKEDITOR.env.ie){this.setAttribute("unselectable","on");for(var a,b=this.getElementsByTag("*"),c=0,f=b.count();c<f;c++){a=b.getItem(c);a.setAttribute("unselectable","on")}}},getPositionedAncestor:function(){for(var a=this;a.getName()!="html";){if(a.getComputedStyle("position")!="static")return a;a=a.getParent()}return null},getDocumentPosition:function(a){var b=0,c=0,f=this.getDocument(),j=f.getBody(),g=CKEDITOR.env.quirks;if(document.documentElement.getBoundingClientRect){var m=this.$.getBoundingClientRect(),
y=f.$.documentElement,s=y.clientTop||j.$.clientTop||0,w=y.clientLeft||j.$.clientLeft||0,q=true;if(CKEDITOR.env.ie){q=f.getDocumentElement().contains(this);f=f.getBody().contains(this);q=g&&f||!g&&q}if(q){if(CKEDITOR.env.webkit){b=j.$.scrollLeft||y.scrollLeft;c=j.$.scrollTop||y.scrollTop}else{c=g?j.$:y;b=c.scrollLeft;c=c.scrollTop}b=m.left+b-w;c=m.top+c-s}}else{s=this;for(w=null;s&&!(s.getName()=="body"||s.getName()=="html");){b=b+(s.$.offsetLeft-s.$.scrollLeft);c=c+(s.$.offsetTop-s.$.scrollTop);if(!s.equals(this)){b=
b+(s.$.clientLeft||0);c=c+(s.$.clientTop||0)}for(;w&&!w.equals(s);){b=b-w.$.scrollLeft;c=c-w.$.scrollTop;w=w.getParent()}w=s;s=(m=s.$.offsetParent)?new CKEDITOR.dom.element(m):null}}if(a){m=this.getWindow();s=a.getWindow();if(!m.equals(s)&&m.$.frameElement){a=(new CKEDITOR.dom.element(m.$.frameElement)).getDocumentPosition(a);b=b+a.x;c=c+a.y}}if(!document.documentElement.getBoundingClientRect&&CKEDITOR.env.gecko&&!g){b=b+(this.$.clientLeft?1:0);c=c+(this.$.clientTop?1:0)}return{x:b,y:c}},scrollIntoView:function(a){var b=
this.getParent();if(b){do{(b.$.clientWidth&&b.$.clientWidth<b.$.scrollWidth||b.$.clientHeight&&b.$.clientHeight<b.$.scrollHeight)&&!b.is("body")&&this.scrollIntoParent(b,a,1);if(b.is("html")){var c=b.getWindow();try{var f=c.$.frameElement;f&&(b=new CKEDITOR.dom.element(f))}catch(j){}}}while(b=b.getParent())}},scrollIntoParent:function(a,b,c){var f,j,g,m;function y(b,d){if(/body|html/.test(a.getName()))a.getWindow().$.scrollBy(b,d);else{a.$.scrollLeft=a.$.scrollLeft+b;a.$.scrollTop=a.$.scrollTop+d}}
function s(a,b){var d={x:0,y:0};if(!a.is(q?"body":"html")){var c=a.$.getBoundingClientRect();d.x=c.left;d.y=c.top}c=a.getWindow();if(!c.equals(b)){c=s(CKEDITOR.dom.element.get(c.$.frameElement),b);d.x=d.x+c.x;d.y=d.y+c.y}return d}function w(a,b){return parseInt(a.getComputedStyle("margin-"+b)||0,10)||0}!a&&(a=this.getWindow());g=a.getDocument();var q=g.$.compatMode=="BackCompat";a instanceof CKEDITOR.dom.window&&(a=q?g.getBody():g.getDocumentElement());g=a.getWindow();j=s(this,g);var t=s(a,g),i=this.$.offsetHeight;
f=this.$.offsetWidth;var A=a.$.clientHeight,u=a.$.clientWidth;g=j.x-w(this,"left")-t.x||0;m=j.y-w(this,"top")-t.y||0;f=j.x+f+w(this,"right")-(t.x+u)||0;j=j.y+i+w(this,"bottom")-(t.y+A)||0;if(m<0||j>0)y(0,b===true?m:b===false?j:m<0?m:j);if(c&&(g<0||f>0))y(g<0?g:f,0)},setState:function(a,b,c){b=b||"cke";switch(a){case CKEDITOR.TRISTATE_ON:this.addClass(b+"_on");this.removeClass(b+"_off");this.removeClass(b+"_disabled");c&&this.setAttribute("aria-pressed",true);c&&this.removeAttribute("aria-disabled");
break;case CKEDITOR.TRISTATE_DISABLED:this.addClass(b+"_disabled");this.removeClass(b+"_off");this.removeClass(b+"_on");c&&this.setAttribute("aria-disabled",true);c&&this.removeAttribute("aria-pressed");break;default:this.addClass(b+"_off");this.removeClass(b+"_on");this.removeClass(b+"_disabled");c&&this.removeAttribute("aria-pressed");c&&this.removeAttribute("aria-disabled")}},getFrameDocument:function(){var a=this.$;try{a.contentWindow.document}catch(b){a.src=a.src}return a&&new CKEDITOR.dom.document(a.contentWindow.document)},
copyAttributes:function(a,b){for(var c=this.$.attributes,b=b||{},f=0;f<c.length;f++){var j=c[f],g=j.nodeName.toLowerCase(),m;if(!(g in b))if(g=="checked"&&(m=this.getAttribute(g)))a.setAttribute(g,m);else if(!CKEDITOR.env.ie||this.hasAttribute(g)){m=this.getAttribute(g);if(m===null)m=j.nodeValue;a.setAttribute(g,m)}}if(this.$.style.cssText!=="")a.$.style.cssText=this.$.style.cssText},renameNode:function(a){if(this.getName()!=a){var b=this.getDocument(),a=new CKEDITOR.dom.element(a,b);this.copyAttributes(a);
this.moveChildren(a);this.getParent()&&this.$.parentNode.replaceChild(a.$,this.$);a.$["data-cke-expando"]=this.$["data-cke-expando"];this.$=a.$;delete this.getName}},getChild:function(){function a(b,c){var e=b.childNodes;if(c>=0&&c<e.length)return e[c]}return function(b){var c=this.$;if(b.slice)for(;b.length>0&&c;)c=a(c,b.shift());else c=a(c,b);return c?new CKEDITOR.dom.node(c):null}}(),getChildCount:function(){return this.$.childNodes.length},disableContextMenu:function(){this.on("contextmenu",function(a){a.data.getTarget().hasClass("cke_enable_context_menu")||
a.data.preventDefault()})},getDirection:function(a){return a?this.getComputedStyle("direction")||this.getDirection()||this.getParent()&&this.getParent().getDirection(1)||this.getDocument().$.dir||"ltr":this.getStyle("direction")||this.getAttribute("dir")},data:function(a,b){a="data-"+a;if(b===void 0)return this.getAttribute(a);b===false?this.removeAttribute(a):this.setAttribute(a,b);return null},getEditor:function(){var a=CKEDITOR.instances,b,c;for(b in a){c=a[b];if(c.element.equals(this)&&c.elementMode!=
CKEDITOR.ELEMENT_MODE_APPENDTO)return c}return null},find:function(b){var c=a(this),b=new CKEDITOR.dom.nodeList(this.$.querySelectorAll(f(this,b)));c();return b},findOne:function(b){var c=a(this),b=this.$.querySelector(f(this,b));c();return b?new CKEDITOR.dom.element(b):null},forEach:function(a,b,c){if(!c&&(!b||this.type==b))var f=a(this);if(f!==false)for(var c=this.getChildren(),j=0;j<c.count();j++){f=c.getItem(j);f.type==CKEDITOR.NODE_ELEMENT?f.forEach(a,b):(!b||f.type==b)&&a(f)}}});var c={width:["border-left-width",
"border-right-width","padding-left","padding-right"],height:["border-top-width","border-bottom-width","padding-top","padding-bottom"]};CKEDITOR.dom.element.prototype.setSize=function(a,c,f){if(typeof c=="number"){if(f&&(!CKEDITOR.env.ie||!CKEDITOR.env.quirks))c=c-b.call(this,a);this.setStyle(a,c+"px")}};CKEDITOR.dom.element.prototype.getSize=function(a,c){var f=Math.max(this.$["offset"+CKEDITOR.tools.capitalize(a)],this.$["client"+CKEDITOR.tools.capitalize(a)])||0;c&&(f=f-b.call(this,a));return f}})();
CKEDITOR.dom.documentFragment=function(a){a=a||CKEDITOR.document;this.$=a.type==CKEDITOR.NODE_DOCUMENT?a.$.createDocumentFragment():a};
CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype,CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,insertAfterNode:function(a){a=a.$;a.parentNode.insertBefore(this.$,a.nextSibling)}},!0,{append:1,appendBogus:1,getFirst:1,getLast:1,getParent:1,getNext:1,getPrevious:1,appendTo:1,moveChildren:1,insertBefore:1,insertAfterNode:1,replace:1,trim:1,type:1,ltrim:1,rtrim:1,getDocument:1,getChildCount:1,getChild:1,getChildren:1});
(function(){function a(a,b){var c=this.range;if(this._.end)return null;if(!this._.start){this._.start=1;if(c.collapsed){this.end();return null}c.optimize()}var d,e=c.startContainer;d=c.endContainer;var m=c.startOffset,f=c.endOffset,h,o=this.guard,l=this.type,p=a?"getPreviousSourceNode":"getNextSourceNode";if(!a&&!this._.guardLTR){var r=d.type==CKEDITOR.NODE_ELEMENT?d:d.getParent(),n=d.type==CKEDITOR.NODE_ELEMENT?d.getChild(f):d.getNext();this._.guardLTR=function(a,b){return(!b||!r.equals(a))&&(!n||
!a.equals(n))&&(a.type!=CKEDITOR.NODE_ELEMENT||!b||!a.equals(c.root))}}if(a&&!this._.guardRTL){var g=e.type==CKEDITOR.NODE_ELEMENT?e:e.getParent(),C=e.type==CKEDITOR.NODE_ELEMENT?m?e.getChild(m-1):null:e.getPrevious();this._.guardRTL=function(a,b){return(!b||!g.equals(a))&&(!C||!a.equals(C))&&(a.type!=CKEDITOR.NODE_ELEMENT||!b||!a.equals(c.root))}}var j=a?this._.guardRTL:this._.guardLTR;h=o?function(a,b){return j(a,b)===false?false:o(a,b)}:j;if(this.current)d=this.current[p](false,l,h);else{if(a)d.type==
CKEDITOR.NODE_ELEMENT&&(d=f>0?d.getChild(f-1):h(d,true)===false?null:d.getPreviousSourceNode(true,l,h));else{d=e;if(d.type==CKEDITOR.NODE_ELEMENT&&!(d=d.getChild(m)))d=h(e,true)===false?null:e.getNextSourceNode(true,l,h)}d&&h(d)===false&&(d=null)}for(;d&&!this._.end;){this.current=d;if(!this.evaluator||this.evaluator(d)!==false){if(!b)return d}else if(b&&this.evaluator)return false;d=d[p](false,l,h)}this.end();return this.current=null}function f(b){for(var c,d=null;c=a.call(this,b);)d=c;return d}
function b(a){if(g(a))return false;if(a.type==CKEDITOR.NODE_TEXT)return true;if(a.type==CKEDITOR.NODE_ELEMENT){if(a.is(CKEDITOR.dtd.$inline)||a.is("hr")||a.getAttribute("contenteditable")=="false")return true;var b;if(b=!CKEDITOR.env.needsBrFiller)if(b=a.is(m))a:{b=0;for(var c=a.getChildCount();b<c;++b)if(!g(a.getChild(b))){b=false;break a}b=true}if(b)return true}return false}CKEDITOR.dom.walker=CKEDITOR.tools.createClass({$:function(a){this.range=a;this._={}},proto:{end:function(){this._.end=1},
next:function(){return a.call(this)},previous:function(){return a.call(this,1)},checkForward:function(){return a.call(this,0,1)!==false},checkBackward:function(){return a.call(this,1,1)!==false},lastForward:function(){return f.call(this)},lastBackward:function(){return f.call(this,1)},reset:function(){delete this.current;this._={}}}});var c={block:1,"list-item":1,table:1,"table-row-group":1,"table-header-group":1,"table-footer-group":1,"table-row":1,"table-column-group":1,"table-column":1,"table-cell":1,
"table-caption":1},e={absolute:1,fixed:1};CKEDITOR.dom.element.prototype.isBlockBoundary=function(a){return this.getComputedStyle("float")=="none"&&!(this.getComputedStyle("position")in e)&&c[this.getComputedStyle("display")]?true:!!(this.is(CKEDITOR.dtd.$block)||a&&this.is(a))};CKEDITOR.dom.walker.blockBoundary=function(a){return function(b){return!(b.type==CKEDITOR.NODE_ELEMENT&&b.isBlockBoundary(a))}};CKEDITOR.dom.walker.listItemBoundary=function(){return this.blockBoundary({br:1})};CKEDITOR.dom.walker.bookmark=
function(a,b){function c(a){return a&&a.getName&&a.getName()=="span"&&a.data("cke-bookmark")}return function(d){var e,m;e=d&&d.type!=CKEDITOR.NODE_ELEMENT&&(m=d.getParent())&&c(m);e=a?e:e||c(d);return!!(b^e)}};CKEDITOR.dom.walker.whitespaces=function(a){return function(b){var c;b&&b.type==CKEDITOR.NODE_TEXT&&(c=!CKEDITOR.tools.trim(b.getText())||CKEDITOR.env.webkit&&b.getText()=="​");return!!(a^c)}};CKEDITOR.dom.walker.invisible=function(a){var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.env.webkit?
1:0;return function(d){if(b(d))d=1;else{d.type==CKEDITOR.NODE_TEXT&&(d=d.getParent());d=d.$.offsetWidth<=c}return!!(a^d)}};CKEDITOR.dom.walker.nodeType=function(a,b){return function(c){return!!(b^c.type==a)}};CKEDITOR.dom.walker.bogus=function(a){function b(a){return!h(a)&&!k(a)}return function(c){var e=CKEDITOR.env.needsBrFiller?c.is&&c.is("br"):c.getText&&d.test(c.getText());if(e){e=c.getParent();c=c.getNext(b);e=e.isBlockBoundary()&&(!c||c.type==CKEDITOR.NODE_ELEMENT&&c.isBlockBoundary())}return!!(a^
e)}};CKEDITOR.dom.walker.temp=function(a){return function(b){b.type!=CKEDITOR.NODE_ELEMENT&&(b=b.getParent());b=b&&b.hasAttribute("data-cke-temp");return!!(a^b)}};var d=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,h=CKEDITOR.dom.walker.whitespaces(),k=CKEDITOR.dom.walker.bookmark(),j=CKEDITOR.dom.walker.temp();CKEDITOR.dom.walker.ignored=function(a){return function(b){b=h(b)||k(b)||j(b);return!!(a^b)}};var g=CKEDITOR.dom.walker.ignored(),m=function(a){var b={},c;for(c in a)CKEDITOR.dtd[c]["#"]&&(b[c]=1);return b}(CKEDITOR.dtd.$block);
CKEDITOR.dom.walker.editable=function(a){return function(c){return!!(a^b(c))}};CKEDITOR.dom.element.prototype.getBogus=function(){var a=this;do a=a.getPreviousSourceNode();while(k(a)||h(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.is(CKEDITOR.dtd.$inline)&&!a.is(CKEDITOR.dtd.$empty));return a&&(CKEDITOR.env.needsBrFiller?a.is&&a.is("br"):a.getText&&d.test(a.getText()))?a:false}})();
CKEDITOR.dom.range=function(a){this.endOffset=this.endContainer=this.startOffset=this.startContainer=null;this.collapsed=true;var f=a instanceof CKEDITOR.dom.document;this.document=f?a:a.getDocument();this.root=f?a.getBody():a};
(function(){function a(){var a=false,b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(true),e=CKEDITOR.dom.walker.bogus();return function(f){if(c(f)||b(f))return true;if(e(f)&&!a)return a=true;return f.type==CKEDITOR.NODE_TEXT&&(f.hasAscendant("pre")||CKEDITOR.tools.trim(f.getText()).length)||f.type==CKEDITOR.NODE_ELEMENT&&!f.is(d)?false:true}}function f(a){var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(1);return function(d){return c(d)||b(d)?true:!a&&h(d)||
d.type==CKEDITOR.NODE_ELEMENT&&d.is(CKEDITOR.dtd.$removeEmpty)}}function b(a){return function(){var b;return this[a?"getPreviousNode":"getNextNode"](function(a){!b&&g(a)&&(b=a);return j(a)&&!(h(a)&&a.equals(b))})}}var c=function(a){a.collapsed=a.startContainer&&a.endContainer&&a.startContainer.equals(a.endContainer)&&a.startOffset==a.endOffset},e=function(a,b,c,d){a.optimizeBookmark();var e=a.startContainer,f=a.endContainer,i=a.startOffset,A=a.endOffset,h,o;if(f.type==CKEDITOR.NODE_TEXT)f=f.split(A);
else if(f.getChildCount()>0)if(A>=f.getChildCount()){f=f.append(a.document.createText(""));o=true}else f=f.getChild(A);if(e.type==CKEDITOR.NODE_TEXT){e.split(i);e.equals(f)&&(f=e.getNext())}else if(i)if(i>=e.getChildCount()){e=e.append(a.document.createText(""));h=true}else e=e.getChild(i).getPrevious();else{e=e.append(a.document.createText(""),1);h=true}var i=e.getParents(),A=f.getParents(),l,p,r;for(l=0;l<i.length;l++){p=i[l];r=A[l];if(!p.equals(r))break}for(var n=c,g,C,j,F=l;F<i.length;F++){g=
i[F];n&&!g.equals(e)&&(C=n.append(g.clone()));for(g=g.getNext();g;){if(g.equals(A[F])||g.equals(f))break;j=g.getNext();if(b==2)n.append(g.clone(true));else{g.remove();b==1&&n.append(g)}g=j}n&&(n=C)}n=c;for(c=l;c<A.length;c++){g=A[c];b>0&&!g.equals(f)&&(C=n.append(g.clone()));if(!i[c]||g.$.parentNode!=i[c].$.parentNode)for(g=g.getPrevious();g;){if(g.equals(i[c])||g.equals(e))break;j=g.getPrevious();if(b==2)n.$.insertBefore(g.$.cloneNode(true),n.$.firstChild);else{g.remove();b==1&&n.$.insertBefore(g.$,
n.$.firstChild)}g=j}n&&(n=C)}if(b==2){p=a.startContainer;if(p.type==CKEDITOR.NODE_TEXT){p.$.data=p.$.data+p.$.nextSibling.data;p.$.parentNode.removeChild(p.$.nextSibling)}a=a.endContainer;if(a.type==CKEDITOR.NODE_TEXT&&a.$.nextSibling){a.$.data=a.$.data+a.$.nextSibling.data;a.$.parentNode.removeChild(a.$.nextSibling)}}else{if(p&&r&&(e.$.parentNode!=p.$.parentNode||f.$.parentNode!=r.$.parentNode)){b=r.getIndex();h&&r.$.parentNode==e.$.parentNode&&b--;if(d&&p.type==CKEDITOR.NODE_ELEMENT){d=CKEDITOR.dom.element.createFromHtml('<span data-cke-bookmark="1" style="display:none">&nbsp;</span>',
a.document);d.insertAfter(p);p.mergeSiblings(false);a.moveToBookmark({startNode:d})}else a.setStart(r.getParent(),b)}a.collapse(true)}h&&e.remove();o&&f.$.parentNode&&f.remove()},d={abbr:1,acronym:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},h=CKEDITOR.dom.walker.bogus(),k=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,j=CKEDITOR.dom.walker.editable(),g=CKEDITOR.dom.walker.ignored(true);CKEDITOR.dom.range.prototype=
{clone:function(){var a=new CKEDITOR.dom.range(this.root);a._setStartContainer(this.startContainer);a.startOffset=this.startOffset;a._setEndContainer(this.endContainer);a.endOffset=this.endOffset;a.collapsed=this.collapsed;return a},collapse:function(a){if(a){this._setEndContainer(this.startContainer);this.endOffset=this.startOffset}else{this._setStartContainer(this.endContainer);this.startOffset=this.endOffset}this.collapsed=true},cloneContents:function(){var a=new CKEDITOR.dom.documentFragment(this.document);
this.collapsed||e(this,2,a);return a},deleteContents:function(a){this.collapsed||e(this,0,null,a)},extractContents:function(a){var b=new CKEDITOR.dom.documentFragment(this.document);this.collapsed||e(this,1,b,a);return b},createBookmark:function(a){var b,c,d,e,f=this.collapsed;b=this.document.createElement("span");b.data("cke-bookmark",1);b.setStyle("display","none");b.setHtml("&nbsp;");if(a){d="cke_bm_"+CKEDITOR.tools.getNextNumber();b.setAttribute("id",d+(f?"C":"S"))}if(!f){c=b.clone();c.setHtml("&nbsp;");
a&&c.setAttribute("id",d+"E");e=this.clone();e.collapse();e.insertNode(c)}e=this.clone();e.collapse(true);e.insertNode(b);if(c){this.setStartAfter(b);this.setEndBefore(c)}else this.moveToPosition(b,CKEDITOR.POSITION_AFTER_END);return{startNode:a?d+(f?"C":"S"):b,endNode:a?d+"E":c,serializable:a,collapsed:f}},createBookmark2:function(){function a(c){var d=c.container,e=c.offset,f;f=d;var m=e;f=f.type!=CKEDITOR.NODE_ELEMENT||m===0||m==f.getChildCount()?0:f.getChild(m-1).type==CKEDITOR.NODE_TEXT&&f.getChild(m).type==
CKEDITOR.NODE_TEXT;if(f){d=d.getChild(e-1);e=d.getLength()}d.type==CKEDITOR.NODE_ELEMENT&&e>1&&(e=d.getChild(e-1).getIndex(true)+1);if(d.type==CKEDITOR.NODE_TEXT){f=d;for(m=0;(f=f.getPrevious())&&f.type==CKEDITOR.NODE_TEXT;)m=m+f.getLength();f=m;if(d.getText())e=e+f;else{m=d.getPrevious(b);if(f){e=f;d=m?m.getNext():d.getParent().getFirst()}else{d=d.getParent();e=m?m.getIndex(true)+1:0}}}c.container=d;c.offset=e}var b=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_TEXT,true);return function(b){var c=this.collapsed,
d={container:this.startContainer,offset:this.startOffset},e={container:this.endContainer,offset:this.endOffset};if(b){a(d);c||a(e)}return{start:d.container.getAddress(b),end:c?null:e.container.getAddress(b),startOffset:d.offset,endOffset:e.offset,normalized:b,collapsed:c,is2:true}}}(),moveToBookmark:function(a){if(a.is2){var b=this.document.getByAddress(a.start,a.normalized),c=a.startOffset,d=a.end&&this.document.getByAddress(a.end,a.normalized),a=a.endOffset;this.setStart(b,c);d?this.setEnd(d,a):
this.collapse(true)}else{b=(c=a.serializable)?this.document.getById(a.startNode):a.startNode;a=c?this.document.getById(a.endNode):a.endNode;this.setStartBefore(b);b.remove();if(a){this.setEndBefore(a);a.remove()}else this.collapse(true)}},getBoundaryNodes:function(){var a=this.startContainer,b=this.endContainer,c=this.startOffset,d=this.endOffset,e;if(a.type==CKEDITOR.NODE_ELEMENT){e=a.getChildCount();if(e>c)a=a.getChild(c);else if(e<1)a=a.getPreviousSourceNode();else{for(a=a.$;a.lastChild;)a=a.lastChild;
a=new CKEDITOR.dom.node(a);a=a.getNextSourceNode()||a}}if(b.type==CKEDITOR.NODE_ELEMENT){e=b.getChildCount();if(e>d)b=b.getChild(d).getPreviousSourceNode(true);else if(e<1)b=b.getPreviousSourceNode();else{for(b=b.$;b.lastChild;)b=b.lastChild;b=new CKEDITOR.dom.node(b)}}a.getPosition(b)&CKEDITOR.POSITION_FOLLOWING&&(a=b);return{startNode:a,endNode:b}},getCommonAncestor:function(a,b){var c=this.startContainer,d=this.endContainer,c=c.equals(d)?a&&c.type==CKEDITOR.NODE_ELEMENT&&this.startOffset==this.endOffset-
1?c.getChild(this.startOffset):c:c.getCommonAncestor(d);return b&&!c.is?c.getParent():c},optimize:function(){var a=this.startContainer,b=this.startOffset;a.type!=CKEDITOR.NODE_ELEMENT&&(b?b>=a.getLength()&&this.setStartAfter(a):this.setStartBefore(a));a=this.endContainer;b=this.endOffset;a.type!=CKEDITOR.NODE_ELEMENT&&(b?b>=a.getLength()&&this.setEndAfter(a):this.setEndBefore(a))},optimizeBookmark:function(){var a=this.startContainer,b=this.endContainer;a.is&&(a.is("span")&&a.data("cke-bookmark"))&&
this.setStartAt(a,CKEDITOR.POSITION_BEFORE_START);b&&(b.is&&b.is("span")&&b.data("cke-bookmark"))&&this.setEndAt(b,CKEDITOR.POSITION_AFTER_END)},trim:function(a,b){var c=this.startContainer,d=this.startOffset,e=this.collapsed;if((!a||e)&&c&&c.type==CKEDITOR.NODE_TEXT){if(d)if(d>=c.getLength()){d=c.getIndex()+1;c=c.getParent()}else{var f=c.split(d),d=c.getIndex()+1,c=c.getParent();if(this.startContainer.equals(this.endContainer))this.setEnd(f,this.endOffset-this.startOffset);else if(c.equals(this.endContainer))this.endOffset=
this.endOffset+1}else{d=c.getIndex();c=c.getParent()}this.setStart(c,d);if(e){this.collapse(true);return}}c=this.endContainer;d=this.endOffset;if(!b&&!e&&c&&c.type==CKEDITOR.NODE_TEXT){if(d){d>=c.getLength()||c.split(d);d=c.getIndex()+1}else d=c.getIndex();c=c.getParent();this.setEnd(c,d)}},enlarge:function(a,b){function c(a){return a&&a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("contenteditable")?null:a}var d=RegExp(/[^\s\ufeff]/);switch(a){case CKEDITOR.ENLARGE_INLINE:var e=1;case CKEDITOR.ENLARGE_ELEMENT:if(this.collapsed)break;
var f=this.getCommonAncestor(),i=this.root,h,g,o,l,p,r=false,n,j;n=this.startContainer;var C=this.startOffset;if(n.type==CKEDITOR.NODE_TEXT){if(C){n=!CKEDITOR.tools.trim(n.substring(0,C)).length&&n;r=!!n}if(n&&!(l=n.getPrevious()))o=n.getParent()}else{C&&(l=n.getChild(C-1)||n.getLast());l||(o=n)}for(o=c(o);o||l;){if(o&&!l){!p&&o.equals(f)&&(p=true);if(e?o.isBlockBoundary():!i.contains(o))break;if(!r||o.getComputedStyle("display")!="inline"){r=false;p?h=o:this.setStartBefore(o)}l=o.getPrevious()}for(;l;){n=
false;if(l.type==CKEDITOR.NODE_COMMENT)l=l.getPrevious();else{if(l.type==CKEDITOR.NODE_TEXT){j=l.getText();d.test(j)&&(l=null);n=/[\s\ufeff]$/.test(j)}else if((l.$.offsetWidth>(CKEDITOR.env.webkit?1:0)||b&&l.is("br"))&&!l.data("cke-bookmark"))if(r&&CKEDITOR.dtd.$removeEmpty[l.getName()]){j=l.getText();if(d.test(j))l=null;else for(var C=l.$.getElementsByTagName("*"),k=0,F;F=C[k++];)if(!CKEDITOR.dtd.$removeEmpty[F.nodeName.toLowerCase()]){l=null;break}l&&(n=!!j.length)}else l=null;n&&(r?p?h=o:o&&this.setStartBefore(o):
r=true);if(l){n=l.getPrevious();if(!o&&!n){o=l;l=null;break}l=n}else o=null}}o&&(o=c(o.getParent()))}n=this.endContainer;C=this.endOffset;o=l=null;p=r=false;var K=function(a,b){var c=new CKEDITOR.dom.range(i);c.setStart(a,b);c.setEndAt(i,CKEDITOR.POSITION_BEFORE_END);var c=new CKEDITOR.dom.walker(c),e;for(c.guard=function(a){return!(a.type==CKEDITOR.NODE_ELEMENT&&a.isBlockBoundary())};e=c.next();){if(e.type!=CKEDITOR.NODE_TEXT)return false;j=e!=a?e.getText():e.substring(b);if(d.test(j))return false}return true};
if(n.type==CKEDITOR.NODE_TEXT)if(CKEDITOR.tools.trim(n.substring(C)).length)r=true;else{r=!n.getLength();if(C==n.getLength()){if(!(l=n.getNext()))o=n.getParent()}else K(n,C)&&(o=n.getParent())}else(l=n.getChild(C))||(o=n);for(;o||l;){if(o&&!l){!p&&o.equals(f)&&(p=true);if(e?o.isBlockBoundary():!i.contains(o))break;if(!r||o.getComputedStyle("display")!="inline"){r=false;p?g=o:o&&this.setEndAfter(o)}l=o.getNext()}for(;l;){n=false;if(l.type==CKEDITOR.NODE_TEXT){j=l.getText();K(l,0)||(l=null);n=/^[\s\ufeff]/.test(j)}else if(l.type==
CKEDITOR.NODE_ELEMENT){if((l.$.offsetWidth>0||b&&l.is("br"))&&!l.data("cke-bookmark"))if(r&&CKEDITOR.dtd.$removeEmpty[l.getName()]){j=l.getText();if(d.test(j))l=null;else{C=l.$.getElementsByTagName("*");for(k=0;F=C[k++];)if(!CKEDITOR.dtd.$removeEmpty[F.nodeName.toLowerCase()]){l=null;break}}l&&(n=!!j.length)}else l=null}else n=1;n&&r&&(p?g=o:this.setEndAfter(o));if(l){n=l.getNext();if(!o&&!n){o=l;l=null;break}l=n}else o=null}o&&(o=c(o.getParent()))}if(h&&g){f=h.contains(g)?g:h;this.setStartBefore(f);
this.setEndAfter(f)}break;case CKEDITOR.ENLARGE_BLOCK_CONTENTS:case CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:o=new CKEDITOR.dom.range(this.root);i=this.root;o.setStartAt(i,CKEDITOR.POSITION_AFTER_START);o.setEnd(this.startContainer,this.startOffset);o=new CKEDITOR.dom.walker(o);var I,v,G=CKEDITOR.dom.walker.blockBoundary(a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?{br:1}:null),z=null,B=function(a){if(a.type==CKEDITOR.NODE_ELEMENT&&a.getAttribute("contenteditable")=="false")if(z){if(z.equals(a)){z=null;return}}else z=
a;else if(z)return;var b=G(a);b||(I=a);return b},e=function(a){var b=B(a);!b&&(a.is&&a.is("br"))&&(v=a);return b};o.guard=B;o=o.lastBackward();I=I||i;this.setStartAt(I,!I.is("br")&&(!o&&this.checkStartOfBlock()||o&&I.contains(o))?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_AFTER_END);if(a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS){o=this.clone();o=new CKEDITOR.dom.walker(o);var x=CKEDITOR.dom.walker.whitespaces(),E=CKEDITOR.dom.walker.bookmark();o.evaluator=function(a){return!x(a)&&!E(a)};if((o=o.previous())&&
o.type==CKEDITOR.NODE_ELEMENT&&o.is("br"))break}o=this.clone();o.collapse();o.setEndAt(i,CKEDITOR.POSITION_BEFORE_END);o=new CKEDITOR.dom.walker(o);o.guard=a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?e:B;I=z=v=null;o=o.lastForward();I=I||i;this.setEndAt(I,!o&&this.checkEndOfBlock()||o&&I.contains(o)?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_BEFORE_START);v&&this.setEndAfter(v)}},shrink:function(a,b,c){if(!this.collapsed){var a=a||CKEDITOR.SHRINK_TEXT,d=this.clone(),e=this.startContainer,f=this.endContainer,
i=this.startOffset,h=this.endOffset,g=1,o=1;if(e&&e.type==CKEDITOR.NODE_TEXT)if(i)if(i>=e.getLength())d.setStartAfter(e);else{d.setStartBefore(e);g=0}else d.setStartBefore(e);if(f&&f.type==CKEDITOR.NODE_TEXT)if(h)if(h>=f.getLength())d.setEndAfter(f);else{d.setEndAfter(f);o=0}else d.setEndBefore(f);var d=new CKEDITOR.dom.walker(d),l=CKEDITOR.dom.walker.bookmark();d.evaluator=function(b){return b.type==(a==CKEDITOR.SHRINK_ELEMENT?CKEDITOR.NODE_ELEMENT:CKEDITOR.NODE_TEXT)};var p;d.guard=function(b,d){if(l(b))return true;
if(a==CKEDITOR.SHRINK_ELEMENT&&b.type==CKEDITOR.NODE_TEXT||d&&b.equals(p)||c===false&&b.type==CKEDITOR.NODE_ELEMENT&&b.isBlockBoundary()||b.type==CKEDITOR.NODE_ELEMENT&&b.hasAttribute("contenteditable"))return false;!d&&b.type==CKEDITOR.NODE_ELEMENT&&(p=b);return true};if(g)(e=d[a==CKEDITOR.SHRINK_ELEMENT?"lastForward":"next"]())&&this.setStartAt(e,b?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_START);if(o){d.reset();(d=d[a==CKEDITOR.SHRINK_ELEMENT?"lastBackward":"previous"]())&&this.setEndAt(d,
b?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_END)}return!(!g&&!o)}},insertNode:function(a){this.optimizeBookmark();this.trim(false,true);var b=this.startContainer,c=b.getChild(this.startOffset);c?a.insertBefore(c):b.append(a);a.getParent()&&a.getParent().equals(this.endContainer)&&this.endOffset++;this.setStartBefore(a)},moveToPosition:function(a,b){this.setStartAt(a,b);this.collapse(true)},moveToRange:function(a){this.setStart(a.startContainer,a.startOffset);this.setEnd(a.endContainer,
a.endOffset)},selectNodeContents:function(a){this.setStart(a,0);this.setEnd(a,a.type==CKEDITOR.NODE_TEXT?a.getLength():a.getChildCount())},setStart:function(a,b){if(a.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[a.getName()]){b=a.getIndex();a=a.getParent()}this._setStartContainer(a);this.startOffset=b;if(!this.endContainer){this._setEndContainer(a);this.endOffset=b}c(this)},setEnd:function(a,b){if(a.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[a.getName()]){b=a.getIndex()+1;a=a.getParent()}this._setEndContainer(a);
this.endOffset=b;if(!this.startContainer){this._setStartContainer(a);this.startOffset=b}c(this)},setStartAfter:function(a){this.setStart(a.getParent(),a.getIndex()+1)},setStartBefore:function(a){this.setStart(a.getParent(),a.getIndex())},setEndAfter:function(a){this.setEnd(a.getParent(),a.getIndex()+1)},setEndBefore:function(a){this.setEnd(a.getParent(),a.getIndex())},setStartAt:function(a,b){switch(b){case CKEDITOR.POSITION_AFTER_START:this.setStart(a,0);break;case CKEDITOR.POSITION_BEFORE_END:a.type==
CKEDITOR.NODE_TEXT?this.setStart(a,a.getLength()):this.setStart(a,a.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:this.setStartBefore(a);break;case CKEDITOR.POSITION_AFTER_END:this.setStartAfter(a)}c(this)},setEndAt:function(a,b){switch(b){case CKEDITOR.POSITION_AFTER_START:this.setEnd(a,0);break;case CKEDITOR.POSITION_BEFORE_END:a.type==CKEDITOR.NODE_TEXT?this.setEnd(a,a.getLength()):this.setEnd(a,a.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:this.setEndBefore(a);break;
case CKEDITOR.POSITION_AFTER_END:this.setEndAfter(a)}c(this)},fixBlock:function(a,b){var c=this.createBookmark(),d=this.document.createElement(b);this.collapse(a);this.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS);this.extractContents().appendTo(d);d.trim();d.appendBogus();this.insertNode(d);this.moveToBookmark(c);return d},splitBlock:function(a){var b=new CKEDITOR.dom.elementPath(this.startContainer,this.root),c=new CKEDITOR.dom.elementPath(this.endContainer,this.root),d=b.block,e=c.block,f=null;if(!b.blockLimit.equals(c.blockLimit))return null;
if(a!="br"){if(!d){d=this.fixBlock(true,a);e=(new CKEDITOR.dom.elementPath(this.endContainer,this.root)).block}e||(e=this.fixBlock(false,a))}a=d&&this.checkStartOfBlock();b=e&&this.checkEndOfBlock();this.deleteContents();if(d&&d.equals(e))if(b){f=new CKEDITOR.dom.elementPath(this.startContainer,this.root);this.moveToPosition(e,CKEDITOR.POSITION_AFTER_END);e=null}else if(a){f=new CKEDITOR.dom.elementPath(this.startContainer,this.root);this.moveToPosition(d,CKEDITOR.POSITION_BEFORE_START);d=null}else{e=
this.splitElement(d);d.is("ul","ol")||d.appendBogus()}return{previousBlock:d,nextBlock:e,wasStartOfBlock:a,wasEndOfBlock:b,elementPath:f}},splitElement:function(a){if(!this.collapsed)return null;this.setEndAt(a,CKEDITOR.POSITION_BEFORE_END);var b=this.extractContents(),c=a.clone(false);b.appendTo(c);c.insertAfter(a);this.moveToPosition(a,CKEDITOR.POSITION_AFTER_END);return c},removeEmptyBlocksAtEnd:function(){function a(d){return function(a){return b(a)||(c(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.isEmptyInlineRemoveable())||
d.is("table")&&a.is("caption")?false:true}}var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(false);return function(b){for(var c=this.createBookmark(),d=this[b?"endPath":"startPath"](),e=d.block||d.blockLimit,f;e&&!e.equals(d.root)&&!e.getFirst(a(e));){f=e.getParent();this[b?"setEndAt":"setStartAt"](e,CKEDITOR.POSITION_AFTER_END);e.remove(1);e=f}this.moveToBookmark(c)}}(),startPath:function(){return new CKEDITOR.dom.elementPath(this.startContainer,this.root)},endPath:function(){return new CKEDITOR.dom.elementPath(this.endContainer,
this.root)},checkBoundaryOfElement:function(a,b){var c=b==CKEDITOR.START,d=this.clone();d.collapse(c);d[c?"setStartAt":"setEndAt"](a,c?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END);d=new CKEDITOR.dom.walker(d);d.evaluator=f(c);return d[c?"checkBackward":"checkForward"]()},checkStartOfBlock:function(){var b=this.startContainer,c=this.startOffset;if(CKEDITOR.env.ie&&c&&b.type==CKEDITOR.NODE_TEXT){b=CKEDITOR.tools.ltrim(b.substring(0,c));k.test(b)&&this.trim(0,1)}this.trim();b=new CKEDITOR.dom.elementPath(this.startContainer,
this.root);c=this.clone();c.collapse(true);c.setStartAt(b.block||b.blockLimit,CKEDITOR.POSITION_AFTER_START);b=new CKEDITOR.dom.walker(c);b.evaluator=a();return b.checkBackward()},checkEndOfBlock:function(){var b=this.endContainer,c=this.endOffset;if(CKEDITOR.env.ie&&b.type==CKEDITOR.NODE_TEXT){b=CKEDITOR.tools.rtrim(b.substring(c));k.test(b)&&this.trim(1,0)}this.trim();b=new CKEDITOR.dom.elementPath(this.endContainer,this.root);c=this.clone();c.collapse(false);c.setEndAt(b.block||b.blockLimit,CKEDITOR.POSITION_BEFORE_END);
b=new CKEDITOR.dom.walker(c);b.evaluator=a();return b.checkForward()},getPreviousNode:function(a,b,c){var d=this.clone();d.collapse(1);d.setStartAt(c||this.root,CKEDITOR.POSITION_AFTER_START);c=new CKEDITOR.dom.walker(d);c.evaluator=a;c.guard=b;return c.previous()},getNextNode:function(a,b,c){var d=this.clone();d.collapse();d.setEndAt(c||this.root,CKEDITOR.POSITION_BEFORE_END);c=new CKEDITOR.dom.walker(d);c.evaluator=a;c.guard=b;return c.next()},checkReadOnly:function(){function a(b,c){for(;b;){if(b.type==
CKEDITOR.NODE_ELEMENT){if(b.getAttribute("contentEditable")=="false"&&!b.data("cke-editable"))return 0;if(b.is("html")||b.getAttribute("contentEditable")=="true"&&(b.contains(c)||b.equals(c)))break}b=b.getParent()}return 1}return function(){var b=this.startContainer,c=this.endContainer;return!(a(b,c)&&a(c,b))}}(),moveToElementEditablePosition:function(a,b){if(a.type==CKEDITOR.NODE_ELEMENT&&!a.isEditable(false)){this.moveToPosition(a,b?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START);return true}for(var c=
0;a;){if(a.type==CKEDITOR.NODE_TEXT){b&&this.endContainer&&this.checkEndOfBlock()&&k.test(a.getText())?this.moveToPosition(a,CKEDITOR.POSITION_BEFORE_START):this.moveToPosition(a,b?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START);c=1;break}if(a.type==CKEDITOR.NODE_ELEMENT)if(a.isEditable()){this.moveToPosition(a,b?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_START);c=1}else if(b&&a.is("br")&&this.endContainer&&this.checkEndOfBlock())this.moveToPosition(a,CKEDITOR.POSITION_BEFORE_START);
else if(a.getAttribute("contenteditable")=="false"&&a.is(CKEDITOR.dtd.$block)){this.setStartBefore(a);this.setEndAfter(a);return true}var d=a,e=c,f=void 0;d.type==CKEDITOR.NODE_ELEMENT&&d.isEditable(false)&&(f=d[b?"getLast":"getFirst"](g));!e&&!f&&(f=d[b?"getPrevious":"getNext"](g));a=f}return!!c},moveToClosestEditablePosition:function(a,b){var c=new CKEDITOR.dom.range(this.root),d=0,e,f=[CKEDITOR.POSITION_AFTER_END,CKEDITOR.POSITION_BEFORE_START];c.moveToPosition(a,f[b?0:1]);if(a.is(CKEDITOR.dtd.$block)){if(e=
c[b?"getNextEditableNode":"getPreviousEditableNode"]()){d=1;if(e.type==CKEDITOR.NODE_ELEMENT&&e.is(CKEDITOR.dtd.$block)&&e.getAttribute("contenteditable")=="false"){c.setStartAt(e,CKEDITOR.POSITION_BEFORE_START);c.setEndAt(e,CKEDITOR.POSITION_AFTER_END)}else c.moveToPosition(e,f[b?1:0])}}else d=1;d&&this.moveToRange(c);return!!d},moveToElementEditStart:function(a){return this.moveToElementEditablePosition(a)},moveToElementEditEnd:function(a){return this.moveToElementEditablePosition(a,true)},getEnclosedNode:function(){var a=
this.clone();a.optimize();if(a.startContainer.type!=CKEDITOR.NODE_ELEMENT||a.endContainer.type!=CKEDITOR.NODE_ELEMENT)return null;var a=new CKEDITOR.dom.walker(a),b=CKEDITOR.dom.walker.bookmark(false,true),c=CKEDITOR.dom.walker.whitespaces(true);a.evaluator=function(a){return c(a)&&b(a)};var d=a.next();a.reset();return d&&d.equals(a.previous())?d:null},getTouchedStartNode:function(){var a=this.startContainer;return this.collapsed||a.type!=CKEDITOR.NODE_ELEMENT?a:a.getChild(this.startOffset)||a},getTouchedEndNode:function(){var a=
this.endContainer;return this.collapsed||a.type!=CKEDITOR.NODE_ELEMENT?a:a.getChild(this.endOffset-1)||a},getNextEditableNode:b(),getPreviousEditableNode:b(1),scrollIntoView:function(){var a=new CKEDITOR.dom.element.createFromHtml("<span>&nbsp;</span>",this.document),b,c,d,e=this.clone();e.optimize();if(d=e.startContainer.type==CKEDITOR.NODE_TEXT){c=e.startContainer.getText();b=e.startContainer.split(e.startOffset);a.insertAfter(e.startContainer)}else e.insertNode(a);a.scrollIntoView();if(d){e.startContainer.setText(c);
b.remove()}a.remove()},_setStartContainer:function(a){this.startContainer=a},_setEndContainer:function(a){this.endContainer=a}}})();CKEDITOR.POSITION_AFTER_START=1;CKEDITOR.POSITION_BEFORE_END=2;CKEDITOR.POSITION_BEFORE_START=3;CKEDITOR.POSITION_AFTER_END=4;CKEDITOR.ENLARGE_ELEMENT=1;CKEDITOR.ENLARGE_BLOCK_CONTENTS=2;CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS=3;CKEDITOR.ENLARGE_INLINE=4;CKEDITOR.START=1;CKEDITOR.END=2;CKEDITOR.SHRINK_ELEMENT=1;CKEDITOR.SHRINK_TEXT=2;"use strict";
(function(){function a(a){if(!(arguments.length<1)){this.range=a;this.forceBrBreak=0;this.enlargeBr=1;this.enforceRealBlocks=0;this._||(this._={})}}function f(a){var b=[];a.forEach(function(a){if(a.getAttribute("contenteditable")=="true"){b.push(a);return false}},CKEDITOR.NODE_ELEMENT,true);return b}function b(a,c,d,e){a:{e==null&&(e=f(d));for(var h;h=e.shift();)if(h.getDtd().p){e={element:h,remaining:e};break a}e=null}if(!e)return 0;if((h=CKEDITOR.filter.instances[e.element.data("cke-filter")])&&
!h.check(c))return b(a,c,d,e.remaining);c=new CKEDITOR.dom.range(e.element);c.selectNodeContents(e.element);c=c.createIterator();c.enlargeBr=a.enlargeBr;c.enforceRealBlocks=a.enforceRealBlocks;c.activeFilter=c.filter=h;a._.nestedEditable={element:e.element,container:d,remaining:e.remaining,iterator:c};return 1}function c(a,b,c){if(!b)return false;a=a.clone();a.collapse(!c);return a.checkBoundaryOfElement(b,c?CKEDITOR.START:CKEDITOR.END)}var e=/^[\r\n\t ]+$/,d=CKEDITOR.dom.walker.bookmark(false,true),
h=CKEDITOR.dom.walker.whitespaces(true),k=function(a){return d(a)&&h(a)},j={dd:1,dt:1,li:1};a.prototype={getNextParagraph:function(a){var f,h,s,w,q,a=a||"p";if(this._.nestedEditable){if(f=this._.nestedEditable.iterator.getNextParagraph(a)){this.activeFilter=this._.nestedEditable.iterator.activeFilter;return f}this.activeFilter=this.filter;if(b(this,a,this._.nestedEditable.container,this._.nestedEditable.remaining)){this.activeFilter=this._.nestedEditable.iterator.activeFilter;return this._.nestedEditable.iterator.getNextParagraph(a)}this._.nestedEditable=
null}if(!this.range.root.getDtd()[a])return null;if(!this._.started){var t=this.range.clone();h=t.startPath();var i=t.endPath(),A=!t.collapsed&&c(t,h.block),u=!t.collapsed&&c(t,i.block,1);t.shrink(CKEDITOR.SHRINK_ELEMENT,true);A&&t.setStartAt(h.block,CKEDITOR.POSITION_BEFORE_END);u&&t.setEndAt(i.block,CKEDITOR.POSITION_AFTER_START);h=t.endContainer.hasAscendant("pre",true)||t.startContainer.hasAscendant("pre",true);t.enlarge(this.forceBrBreak&&!h||!this.enlargeBr?CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:
CKEDITOR.ENLARGE_BLOCK_CONTENTS);if(!t.collapsed){h=new CKEDITOR.dom.walker(t.clone());i=CKEDITOR.dom.walker.bookmark(true,true);h.evaluator=i;this._.nextNode=h.next();h=new CKEDITOR.dom.walker(t.clone());h.evaluator=i;h=h.previous();this._.lastNode=h.getNextSourceNode(true,null,t.root);if(this._.lastNode&&this._.lastNode.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(this._.lastNode.getText())&&this._.lastNode.getParent().isBlockBoundary()){i=this.range.clone();i.moveToPosition(this._.lastNode,CKEDITOR.POSITION_AFTER_END);
if(i.checkEndOfBlock()){i=new CKEDITOR.dom.elementPath(i.endContainer,i.root);this._.lastNode=(i.block||i.blockLimit).getNextSourceNode(true)}}if(!this._.lastNode||!t.root.contains(this._.lastNode)){this._.lastNode=this._.docEndMarker=t.document.createText("");this._.lastNode.insertAfter(h)}t=null}this._.started=1;h=t}i=this._.nextNode;t=this._.lastNode;for(this._.nextNode=null;i;){var A=0,u=i.hasAscendant("pre"),o=i.type!=CKEDITOR.NODE_ELEMENT,l=0;if(o)i.type==CKEDITOR.NODE_TEXT&&e.test(i.getText())&&
(o=0);else{var p=i.getName();if(CKEDITOR.dtd.$block[p]&&i.getAttribute("contenteditable")=="false"){f=i;b(this,a,f);break}else if(i.isBlockBoundary(this.forceBrBreak&&!u&&{br:1})){if(p=="br")o=1;else if(!h&&!i.getChildCount()&&p!="hr"){f=i;s=i.equals(t);break}if(h){h.setEndAt(i,CKEDITOR.POSITION_BEFORE_START);if(p!="br")this._.nextNode=i}A=1}else{if(i.getFirst()){if(!h){h=this.range.clone();h.setStartAt(i,CKEDITOR.POSITION_BEFORE_START)}i=i.getFirst();continue}o=1}}if(o&&!h){h=this.range.clone();
h.setStartAt(i,CKEDITOR.POSITION_BEFORE_START)}s=(!A||o)&&i.equals(t);if(h&&!A)for(;!i.getNext(k)&&!s;){p=i.getParent();if(p.isBlockBoundary(this.forceBrBreak&&!u&&{br:1})){A=1;o=0;s||p.equals(t);h.setEndAt(p,CKEDITOR.POSITION_BEFORE_END);break}i=p;o=1;s=i.equals(t);l=1}o&&h.setEndAt(i,CKEDITOR.POSITION_AFTER_END);i=this._getNextSourceNode(i,l,t);if((s=!i)||A&&h)break}if(!f){if(!h){this._.docEndMarker&&this._.docEndMarker.remove();return this._.nextNode=null}f=new CKEDITOR.dom.elementPath(h.startContainer,
h.root);i=f.blockLimit;A={div:1,th:1,td:1};f=f.block;if(!f&&i&&!this.enforceRealBlocks&&A[i.getName()]&&h.checkStartOfBlock()&&h.checkEndOfBlock()&&!i.equals(h.root))f=i;else if(!f||this.enforceRealBlocks&&f.is(j)){f=this.range.document.createElement(a);h.extractContents().appendTo(f);f.trim();h.insertNode(f);w=q=true}else if(f.getName()!="li"){if(!h.checkStartOfBlock()||!h.checkEndOfBlock()){f=f.clone(false);h.extractContents().appendTo(f);f.trim();q=h.splitBlock();w=!q.wasStartOfBlock;q=!q.wasEndOfBlock;
h.insertNode(f)}}else if(!s)this._.nextNode=f.equals(t)?null:this._getNextSourceNode(h.getBoundaryNodes().endNode,1,t)}if(w)(w=f.getPrevious())&&w.type==CKEDITOR.NODE_ELEMENT&&(w.getName()=="br"?w.remove():w.getLast()&&w.getLast().$.nodeName.toLowerCase()=="br"&&w.getLast().remove());if(q)(w=f.getLast())&&w.type==CKEDITOR.NODE_ELEMENT&&w.getName()=="br"&&(!CKEDITOR.env.needsBrFiller||w.getPrevious(d)||w.getNext(d))&&w.remove();if(!this._.nextNode)this._.nextNode=s||f.equals(t)||!t?null:this._getNextSourceNode(f,
1,t);return f},_getNextSourceNode:function(a,b,c){function e(a){return!(a.equals(c)||a.equals(f))}for(var f=this.range.root,a=a.getNextSourceNode(b,null,e);!d(a);)a=a.getNextSourceNode(b,null,e);return a}};CKEDITOR.dom.range.prototype.createIterator=function(){return new a(this)}})();
CKEDITOR.command=function(a,f){this.uiItems=[];this.exec=function(b){if(this.state==CKEDITOR.TRISTATE_DISABLED||!this.checkAllowed())return false;this.editorFocus&&a.focus();return this.fire("exec")===false?true:f.exec.call(this,a,b)!==false};this.refresh=function(a,b){if(!this.readOnly&&a.readOnly)return true;if(this.context&&!b.isContextFor(this.context)){this.disable();return true}if(!this.checkAllowed(true)){this.disable();return true}this.startDisabled||this.enable();this.modes&&!this.modes[a.mode]&&
this.disable();return this.fire("refresh",{editor:a,path:b})===false?true:f.refresh&&f.refresh.apply(this,arguments)!==false};var b;this.checkAllowed=function(c){return!c&&typeof b=="boolean"?b:b=a.activeFilter.checkFeature(this)};CKEDITOR.tools.extend(this,f,{modes:{wysiwyg:1},editorFocus:1,contextSensitive:!!f.context,state:CKEDITOR.TRISTATE_DISABLED});CKEDITOR.event.call(this)};
CKEDITOR.command.prototype={enable:function(){this.state==CKEDITOR.TRISTATE_DISABLED&&this.checkAllowed()&&this.setState(!this.preserveState||typeof this.previousState=="undefined"?CKEDITOR.TRISTATE_OFF:this.previousState)},disable:function(){this.setState(CKEDITOR.TRISTATE_DISABLED)},setState:function(a){if(this.state==a||a!=CKEDITOR.TRISTATE_DISABLED&&!this.checkAllowed())return false;this.previousState=this.state;this.state=a;this.fire("state");return true},toggleState:function(){this.state==CKEDITOR.TRISTATE_OFF?
this.setState(CKEDITOR.TRISTATE_ON):this.state==CKEDITOR.TRISTATE_ON&&this.setState(CKEDITOR.TRISTATE_OFF)}};CKEDITOR.event.implementOn(CKEDITOR.command.prototype);CKEDITOR.ENTER_P=1;CKEDITOR.ENTER_BR=2;CKEDITOR.ENTER_DIV=3;
CKEDITOR.config={customConfig:"config.js",autoUpdateElement:!0,language:"",defaultLanguage:"en",contentsLangDirection:"",enterMode:CKEDITOR.ENTER_P,forceEnterMode:!1,shiftEnterMode:CKEDITOR.ENTER_BR,docType:"<!DOCTYPE html>",bodyId:"",bodyClass:"",fullPage:!1,height:200,extraPlugins:"",removePlugins:"",protectedSource:[],tabIndex:0,width:"",baseFloatZIndex:1E4,blockedKeystrokes:[CKEDITOR.CTRL+66,CKEDITOR.CTRL+73,CKEDITOR.CTRL+85]};
(function(){function a(a,b,c,d,e){var f,p,a=[];for(f in b){p=b[f];p=typeof p=="boolean"?{}:typeof p=="function"?{match:p}:K(p);if(f.charAt(0)!="$")p.elements=f;if(c)p.featureName=c.toLowerCase();var i=p;i.elements=h(i.elements,/\s+/)||null;i.propertiesOnly=i.propertiesOnly||i.elements===true;var l=/\s*,\s*/,r=void 0;for(r in z){i[r]=h(i[r],l)||null;var x=i,n=B[r],v=h(i[B[r]],l),q=i[r],E=[],g=true,o=void 0;v?g=false:v={};for(o in q)if(o.charAt(0)=="!"){o=o.slice(1);E.push(o);v[o]=true;g=false}for(;o=
E.pop();){q[o]=q["!"+o];delete q["!"+o]}x[n]=(g?false:v)||null}i.match=i.match||null;d.push(p);a.push(p)}for(var b=e.elements,e=e.generic,C,c=0,d=a.length;c<d;++c){f=K(a[c]);p=f.classes===true||f.styles===true||f.attributes===true;i=f;r=n=l=void 0;for(l in z)i[l]=A(i[l]);x=true;for(r in B){l=B[r];n=i[l];v=[];q=void 0;for(q in n)q.indexOf("*")>-1?v.push(RegExp("^"+q.replace(/\*/g,".*")+"$")):v.push(q);n=v;if(n.length){i[l]=n;x=false}}i.nothingRequired=x;i.noProperties=!(i.attributes||i.classes||i.styles);
if(f.elements===true||f.elements===null)e[p?"unshift":"push"](f);else{i=f.elements;delete f.elements;for(C in i)if(b[C])b[C][p?"unshift":"push"](f);else b[C]=[f]}}}function f(a,c,d,e){if(!a.match||a.match(c))if(e||k(a,c)){if(!a.propertiesOnly)d.valid=true;if(!d.allAttributes)d.allAttributes=b(a.attributes,c.attributes,d.validAttributes);if(!d.allStyles)d.allStyles=b(a.styles,c.styles,d.validStyles);if(!d.allClasses){a=a.classes;c=c.classes;e=d.validClasses;if(a)if(a===true)a=true;else{for(var f=0,
p=c.length,i;f<p;++f){i=c[f];e[i]||(e[i]=a(i))}a=false}else a=false;d.allClasses=a}}}function b(a,b,c){if(!a)return false;if(a===true)return true;for(var d in b)c[d]||(c[d]=a(d));return false}function c(a,b,c){if(!a.match||a.match(b)){if(a.noProperties)return false;c.hadInvalidAttribute=e(a.attributes,b.attributes)||c.hadInvalidAttribute;c.hadInvalidStyle=e(a.styles,b.styles)||c.hadInvalidStyle;a=a.classes;b=b.classes;if(a){for(var d=false,f=a===true,p=b.length;p--;)if(f||a(b[p])){b.splice(p,1);d=
true}a=d}else a=false;c.hadInvalidClass=a||c.hadInvalidClass}}function e(a,b){if(!a)return false;var c=false,d=a===true,e;for(e in b)if(d||a(e)){delete b[e];c=true}return c}function d(a,b,c){if(a.disabled||a.customConfig&&!c||!b)return false;a._.cachedChecks={};return true}function h(a,b){if(!a)return false;if(a===true)return a;if(typeof a=="string"){a=I(a);return a=="*"?true:CKEDITOR.tools.convertArrayToObject(a.split(b))}if(CKEDITOR.tools.isArray(a))return a.length?CKEDITOR.tools.convertArrayToObject(a):
false;var c={},d=0,e;for(e in a){c[e]=a[e];d++}return d?c:false}function k(a,b){if(a.nothingRequired)return true;var c,d,e,f;if(e=a.requiredClasses){f=b.classes;for(c=0;c<e.length;++c){d=e[c];if(typeof d=="string"){if(CKEDITOR.tools.indexOf(f,d)==-1)return false}else if(!CKEDITOR.tools.checkIfAnyArrayItemMatches(f,d))return false}}return j(b.styles,a.requiredStyles)&&j(b.attributes,a.requiredAttributes)}function j(a,b){if(!b)return true;for(var c=0,d;c<b.length;++c){d=b[c];if(typeof d=="string"){if(!(d in
a))return false}else if(!CKEDITOR.tools.checkIfAnyObjectPropertyMatches(a,d))return false}return true}function g(a){if(!a)return{};for(var a=a.split(/\s*,\s*/).sort(),b={};a.length;)b[a.shift()]=v;return b}function m(a){for(var b,c,d,e,f={},p=1,a=I(a);b=a.match(x);){if(c=b[2]){d=y(c,"styles");e=y(c,"attrs");c=y(c,"classes")}else d=e=c=null;f["$"+p++]={elements:b[1],classes:c,styles:d,attributes:e};a=a.slice(b[0].length)}return f}function y(a,b){var c=a.match(E[b]);return c?I(c[1]):null}function s(a){var b=
a.styleBackup=a.attributes.style,c=a.classBackup=a.attributes["class"];if(!a.styles)a.styles=CKEDITOR.tools.parseCssText(b||"",1);if(!a.classes)a.classes=c?c.split(/\s+/):[]}function w(a,b,d,e){var l=0,r;if(e.toHtml)b.name=b.name.replace($,"$1");if(e.doCallbacks&&a.elementCallbacks){a:for(var x=a.elementCallbacks,h=0,n=x.length,v;h<n;++h)if(v=x[h](b)){r=v;break a}if(r)return r}if(e.doTransform)if(r=a._.transformations[b.name]){s(b);for(x=0;x<r.length;++x)p(a,b,r[x]);t(b)}if(e.doFilter){a:{x=b.name;
h=a._;a=h.allowedRules.elements[x];r=h.allowedRules.generic;x=h.disallowedRules.elements[x];h=h.disallowedRules.generic;n=e.skipRequired;v={valid:false,validAttributes:{},validClasses:{},validStyles:{},allAttributes:false,allClasses:false,allStyles:false,hadInvalidAttribute:false,hadInvalidClass:false,hadInvalidStyle:false};var q,z;if(!a&&!r)a=null;else{s(b);if(x){q=0;for(z=x.length;q<z;++q)if(c(x[q],b,v)===false){a=null;break a}}if(h){q=0;for(z=h.length;q<z;++q)c(h[q],b,v)}if(a){q=0;for(z=a.length;q<
z;++q)f(a[q],b,v,n)}if(r){q=0;for(z=r.length;q<z;++q)f(r[q],b,v,n)}a=v}}if(!a){d.push(b);return F}if(!a.valid){d.push(b);return F}z=a.validAttributes;var E=a.validStyles;r=a.validClasses;var x=b.attributes,A=b.styles,h=b.classes,n=b.classBackup,o=b.styleBackup,g,B,C=[];v=[];var j=/^data-cke-/;q=false;delete x.style;delete x["class"];delete b.classBackup;delete b.styleBackup;if(!a.allAttributes)for(g in x)if(!z[g])if(j.test(g)){if(g!=(B=g.replace(/^data-cke-saved-/,""))&&!z[B]){delete x[g];q=true}}else{delete x[g];
q=true}if(!a.allStyles||a.hadInvalidStyle){for(g in A)a.allStyles||E[g]?C.push(g+":"+A[g]):q=true;if(C.length)x.style=C.sort().join("; ")}else if(o)x.style=o;if(!a.allClasses||a.hadInvalidClass){for(g=0;g<h.length;++g)(a.allClasses||r[h[g]])&&v.push(h[g]);v.length&&(x["class"]=v.sort().join(" "));n&&v.length<n.split(/\s+/).length&&(q=true)}else n&&(x["class"]=n);q&&(l=F);if(!e.skipFinalValidation&&!i(b)){d.push(b);return F}}if(e.toHtml)b.name=b.name.replace(aa,"cke:$1");return l}function q(a){var b=
[],c;for(c in a)c.indexOf("*")>-1&&b.push(c.replace(/\*/g,".*"));return b.length?RegExp("^(?:"+b.join("|")+")$"):null}function t(a){var b=a.attributes,c;delete b.style;delete b["class"];if(c=CKEDITOR.tools.writeCssText(a.styles,true))b.style=c;a.classes.length&&(b["class"]=a.classes.sort().join(" "))}function i(a){switch(a.name){case "a":if(!a.children.length&&!a.attributes.name)return false;break;case "img":if(!a.attributes.src)return false}return true}function A(a){if(!a)return false;if(a===true)return true;
var b=q(a);return function(c){return c in a||b&&c.match(b)}}function u(){return new CKEDITOR.htmlParser.element("br")}function o(a){return a.type==CKEDITOR.NODE_ELEMENT&&(a.name=="br"||L.$block[a.name])}function l(a,b,c){var d=a.name;if(L.$empty[d]||!a.children.length)if(d=="hr"&&b=="br")a.replaceWith(u());else{a.parent&&c.push({check:"it",el:a.parent});a.remove()}else if(L.$block[d]||d=="tr")if(b=="br"){if(a.previous&&!o(a.previous)){b=u();b.insertBefore(a)}if(a.next&&!o(a.next)){b=u();b.insertAfter(a)}a.replaceWithChildren()}else{var d=
a.children,e;b:{e=L[b];for(var f=0,p=d.length,i;f<p;++f){i=d[f];if(i.type==CKEDITOR.NODE_ELEMENT&&!e[i.name]){e=false;break b}}e=true}if(e){a.name=b;a.attributes={};c.push({check:"parent-down",el:a})}else{e=a.parent;for(var f=e.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT||e.name=="body",l,r,p=d.length;p>0;){i=d[--p];if(f&&(i.type==CKEDITOR.NODE_TEXT||i.type==CKEDITOR.NODE_ELEMENT&&L.$inline[i.name])){if(!l){l=new CKEDITOR.htmlParser.element(b);l.insertAfter(a);c.push({check:"parent-down",el:l})}l.add(i,
0)}else{l=null;r=L[e.name]||L.span;i.insertAfter(a);e.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT&&(i.type==CKEDITOR.NODE_ELEMENT&&!r[i.name])&&c.push({check:"el-up",el:i})}}a.remove()}}else if(d=="style")a.remove();else{a.parent&&c.push({check:"it",el:a.parent});a.replaceWithChildren()}}function p(a,b,c){var d,e;for(d=0;d<c.length;++d){e=c[d];if((!e.check||a.check(e.check,false))&&(!e.left||e.left(b))){e.right(b,ba);break}}}function r(a,b){var c=b.getDefinition(),d=c.attributes,e=c.styles,f,p,i,l;if(a.name!=
c.element)return false;for(f in d)if(f=="class"){c=d[f].split(/\s+/);for(i=a.classes.join("|");l=c.pop();)if(i.indexOf(l)==-1)return false}else if(a.attributes[f]!=d[f])return false;for(p in e)if(a.styles[p]!=e[p])return false;return true}function n(a,b){var c,d;if(typeof a=="string")c=a;else if(a instanceof CKEDITOR.style)d=a;else{c=a[0];d=a[1]}return[{element:c,left:d,right:function(a,c){c.transform(a,b)}}]}function P(a){return function(b){return r(b,a)}}function C(a){return function(b,c){c[a](b)}}
var L=CKEDITOR.dtd,F=1,K=CKEDITOR.tools.copy,I=CKEDITOR.tools.trim,v="cke-test",G=["","p","br","div"];CKEDITOR.FILTER_SKIP_TREE=2;CKEDITOR.filter=function(a){this.allowedContent=[];this.disallowedContent=[];this.elementCallbacks=null;this.disabled=false;this.editor=null;this.id=CKEDITOR.tools.getNextNumber();this._={allowedRules:{elements:{},generic:[]},disallowedRules:{elements:{},generic:[]},transformations:{},cachedTests:{}};CKEDITOR.filter.instances[this.id]=this;if(a instanceof CKEDITOR.editor){a=
this.editor=a;this.customConfig=true;var b=a.config.allowedContent;if(b===true)this.disabled=true;else{if(!b)this.customConfig=false;this.allow(b,"config",1);this.allow(a.config.extraAllowedContent,"extra",1);this.allow(G[a.enterMode]+" "+G[a.shiftEnterMode],"default",1);this.disallow(a.config.disallowedContent)}}else{this.customConfig=false;this.allow(a,"default",1)}};CKEDITOR.filter.instances={};CKEDITOR.filter.prototype={allow:function(b,c,e){if(!d(this,b,e))return false;var f,p;if(typeof b=="string")b=
m(b);else if(b instanceof CKEDITOR.style){if(b.toAllowedContentRules)return this.allow(b.toAllowedContentRules(this.editor),c,e);f=b.getDefinition();b={};e=f.attributes;b[f.element]=f={styles:f.styles,requiredStyles:f.styles&&CKEDITOR.tools.objectKeys(f.styles)};if(e){e=K(e);f.classes=e["class"]?e["class"].split(/\s+/):null;f.requiredClasses=f.classes;delete e["class"];f.attributes=e;f.requiredAttributes=e&&CKEDITOR.tools.objectKeys(e)}}else if(CKEDITOR.tools.isArray(b)){for(f=0;f<b.length;++f)p=
this.allow(b[f],c,e);return p}a(this,b,c,this.allowedContent,this._.allowedRules);return true},applyTo:function(a,b,c,d){if(this.disabled)return false;var e=this,f=[],p=this.editor&&this.editor.config.protectedSource,r,x=false,h={doFilter:!c,doTransform:true,doCallbacks:true,toHtml:b};a.forEach(function(a){if(a.type==CKEDITOR.NODE_ELEMENT){if(a.attributes["data-cke-filter"]=="off")return false;if(!b||!(a.name=="span"&&~CKEDITOR.tools.objectKeys(a.attributes).join("|").indexOf("data-cke-"))){r=w(e,
a,f,h);if(r&F)x=true;else if(r&2)return false}}else if(a.type==CKEDITOR.NODE_COMMENT&&a.value.match(/^\{cke_protected\}(?!\{C\})/)){var c;a:{var d=decodeURIComponent(a.value.replace(/^\{cke_protected\}/,""));c=[];var i,l,n;if(p)for(l=0;l<p.length;++l)if((n=d.match(p[l]))&&n[0].length==d.length){c=true;break a}d=CKEDITOR.htmlParser.fragment.fromHtml(d);d.children.length==1&&(i=d.children[0]).type==CKEDITOR.NODE_ELEMENT&&w(e,i,c,h);c=!c.length}c||f.push(a)}},null,true);f.length&&(x=true);for(var n,
a=[],d=G[d||(this.editor?this.editor.enterMode:CKEDITOR.ENTER_P)],q;c=f.pop();)c.type==CKEDITOR.NODE_ELEMENT?l(c,d,a):c.remove();for(;n=a.pop();){c=n.el;if(c.parent){q=L[c.parent.name]||L.span;switch(n.check){case "it":L.$removeEmpty[c.name]&&!c.children.length?l(c,d,a):i(c)||l(c,d,a);break;case "el-up":c.parent.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT&&!q[c.name]&&l(c,d,a);break;case "parent-down":c.parent.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT&&!q[c.name]&&l(c.parent,d,a)}}}return x},checkFeature:function(a){if(this.disabled||
!a)return true;a.toFeature&&(a=a.toFeature(this.editor));return!a.requiredContent||this.check(a.requiredContent)},disable:function(){this.disabled=true},disallow:function(b){if(!d(this,b,true))return false;typeof b=="string"&&(b=m(b));a(this,b,null,this.disallowedContent,this._.disallowedRules);return true},addContentForms:function(a){if(!this.disabled&&a){var b,c,d=[],e;for(b=0;b<a.length&&!e;++b){c=a[b];if((typeof c=="string"||c instanceof CKEDITOR.style)&&this.check(c))e=c}if(e){for(b=0;b<a.length;++b)d.push(n(a[b],
e));this.addTransformations(d)}}},addElementCallback:function(a){if(!this.elementCallbacks)this.elementCallbacks=[];this.elementCallbacks.push(a)},addFeature:function(a){if(this.disabled||!a)return true;a.toFeature&&(a=a.toFeature(this.editor));this.allow(a.allowedContent,a.name);this.addTransformations(a.contentTransformations);this.addContentForms(a.contentForms);return a.requiredContent&&(this.customConfig||this.disallowedContent.length)?this.check(a.requiredContent):true},addTransformations:function(a){var b,
c;if(!this.disabled&&a){var d=this._.transformations,e;for(e=0;e<a.length;++e){b=a[e];var f=void 0,p=void 0,i=void 0,l=void 0,r=void 0,x=void 0;c=[];for(p=0;p<b.length;++p){i=b[p];if(typeof i=="string"){i=i.split(/\s*:\s*/);l=i[0];r=null;x=i[1]}else{l=i.check;r=i.left;x=i.right}if(!f){f=i;f=f.element?f.element:l?l.match(/^([a-z0-9]+)/i)[0]:f.left.getDefinition().element}r instanceof CKEDITOR.style&&(r=P(r));c.push({check:l==f?null:l,left:r,right:typeof x=="string"?C(x):x})}b=f;d[b]||(d[b]=[]);d[b].push(c)}}},
check:function(a,b,c){if(this.disabled)return true;if(CKEDITOR.tools.isArray(a)){for(var d=a.length;d--;)if(this.check(a[d],b,c))return true;return false}var e,f;if(typeof a=="string"){f=a+"<"+(b===false?"0":"1")+(c?"1":"0")+">";if(f in this._.cachedChecks)return this._.cachedChecks[f];d=m(a).$1;e=d.styles;var i=d.classes;d.name=d.elements;d.classes=i=i?i.split(/\s*,\s*/):[];d.styles=g(e);d.attributes=g(d.attributes);d.children=[];i.length&&(d.attributes["class"]=i.join(" "));if(e)d.attributes.style=
CKEDITOR.tools.writeCssText(d.styles);e=d}else{d=a.getDefinition();e=d.styles;i=d.attributes||{};if(e){e=K(e);i.style=CKEDITOR.tools.writeCssText(e,true)}else e={};e={name:d.element,attributes:i,classes:i["class"]?i["class"].split(/\s+/):[],styles:e,children:[]}}var i=CKEDITOR.tools.clone(e),l=[],r;if(b!==false&&(r=this._.transformations[e.name])){for(d=0;d<r.length;++d)p(this,e,r[d]);t(e)}w(this,i,l,{doFilter:true,doTransform:b!==false,skipRequired:!c,skipFinalValidation:!c});b=l.length>0?false:
CKEDITOR.tools.objectCompare(e.attributes,i.attributes,true)?true:false;typeof a=="string"&&(this._.cachedChecks[f]=b);return b},getAllowedEnterMode:function(){var a=["p","div","br"],b={p:CKEDITOR.ENTER_P,div:CKEDITOR.ENTER_DIV,br:CKEDITOR.ENTER_BR};return function(c,d){var e=a.slice(),f;if(this.check(G[c]))return c;for(d||(e=e.reverse());f=e.pop();)if(this.check(f))return b[f];return CKEDITOR.ENTER_BR}}(),destroy:function(){delete CKEDITOR.filter.instances[this.id];delete this._;delete this.allowedContent;
delete this.disallowedContent}};var z={styles:1,attributes:1,classes:1},B={styles:"requiredStyles",attributes:"requiredAttributes",classes:"requiredClasses"},x=/^([a-z0-9\-*\s]+)((?:\s*\{[!\w\-,\s\*]+\}\s*|\s*\[[!\w\-,\s\*]+\]\s*|\s*\([!\w\-,\s\*]+\)\s*){0,3})(?:;\s*|$)/i,E={styles:/{([^}]+)}/,attrs:/\[([^\]]+)\]/,classes:/\(([^\)]+)\)/},$=/^cke:(object|embed|param)$/,aa=/^(object|embed|param)$/,ba=CKEDITOR.filter.transformationsTools={sizeToStyle:function(a){this.lengthToStyle(a,"width");this.lengthToStyle(a,
"height")},sizeToAttribute:function(a){this.lengthToAttribute(a,"width");this.lengthToAttribute(a,"height")},lengthToStyle:function(a,b,c){c=c||b;if(!(c in a.styles)){var d=a.attributes[b];if(d){/^\d+$/.test(d)&&(d=d+"px");a.styles[c]=d}}delete a.attributes[b]},lengthToAttribute:function(a,b,c){c=c||b;if(!(c in a.attributes)){var d=a.styles[b],e=d&&d.match(/^(\d+)(?:\.\d*)?px$/);e?a.attributes[c]=e[1]:d==v&&(a.attributes[c]=v)}delete a.styles[b]},alignmentToStyle:function(a){if(!("float"in a.styles)){var b=
a.attributes.align;if(b=="left"||b=="right")a.styles["float"]=b}delete a.attributes.align},alignmentToAttribute:function(a){if(!("align"in a.attributes)){var b=a.styles["float"];if(b=="left"||b=="right")a.attributes.align=b}delete a.styles["float"]},matchesStyle:r,transform:function(a,b){if(typeof b=="string")a.name=b;else{var c=b.getDefinition(),d=c.styles,e=c.attributes,f,i,p,l;a.name=c.element;for(f in e)if(f=="class"){c=a.classes.join("|");for(p=e[f].split(/\s+/);l=p.pop();)c.indexOf(l)==-1&&
a.classes.push(l)}else a.attributes[f]=e[f];for(i in d)a.styles[i]=d[i]}}}})();
(function(){CKEDITOR.focusManager=function(a){if(a.focusManager)return a.focusManager;this.hasFocus=false;this.currentActive=null;this._={editor:a};return this};CKEDITOR.focusManager._={blurDelay:200};CKEDITOR.focusManager.prototype={focus:function(a){this._.timer&&clearTimeout(this._.timer);if(a)this.currentActive=a;if(!this.hasFocus&&!this._.locked){(a=CKEDITOR.currentInstance)&&a.focusManager.blur(1);this.hasFocus=true;(a=this._.editor.container)&&a.addClass("cke_focus");this._.editor.fire("focus")}},
lock:function(){this._.locked=1},unlock:function(){delete this._.locked},blur:function(a){function f(){if(this.hasFocus){this.hasFocus=false;var a=this._.editor.container;a&&a.removeClass("cke_focus");this._.editor.fire("blur")}}if(!this._.locked){this._.timer&&clearTimeout(this._.timer);var b=CKEDITOR.focusManager._.blurDelay;a||!b?f.call(this):this._.timer=CKEDITOR.tools.setTimeout(function(){delete this._.timer;f.call(this)},b,this)}},add:function(a,f){var b=a.getCustomData("focusmanager");if(!b||
b!=this){b&&b.remove(a);var b="focus",c="blur";if(f)if(CKEDITOR.env.ie){b="focusin";c="focusout"}else CKEDITOR.event.useCapture=1;var e={blur:function(){a.equals(this.currentActive)&&this.blur()},focus:function(){this.focus(a)}};a.on(b,e.focus,this);a.on(c,e.blur,this);if(f)CKEDITOR.event.useCapture=0;a.setCustomData("focusmanager",this);a.setCustomData("focusmanager_handlers",e)}},remove:function(a){a.removeCustomData("focusmanager");var f=a.removeCustomData("focusmanager_handlers");a.removeListener("blur",
f.blur);a.removeListener("focus",f.focus)}}})();CKEDITOR.keystrokeHandler=function(a){if(a.keystrokeHandler)return a.keystrokeHandler;this.keystrokes={};this.blockedKeystrokes={};this._={editor:a};return this};
(function(){var a,f=function(b){var b=b.data,e=b.getKeystroke(),d=this.keystrokes[e],f=this._.editor;a=f.fire("key",{keyCode:e,domEvent:b})===false;if(!a){d&&(a=f.execCommand(d,{from:"keystrokeHandler"})!==false);a||(a=!!this.blockedKeystrokes[e])}a&&b.preventDefault(true);return!a},b=function(b){if(a){a=false;b.data.preventDefault(true)}};CKEDITOR.keystrokeHandler.prototype={attach:function(a){a.on("keydown",f,this);if(CKEDITOR.env.gecko&&CKEDITOR.env.mac)a.on("keypress",b,this)}}})();
(function(){CKEDITOR.lang={languages:{af:1,ar:1,bg:1,bn:1,bs:1,ca:1,cs:1,cy:1,da:1,de:1,el:1,"en-au":1,"en-ca":1,"en-gb":1,en:1,eo:1,es:1,et:1,eu:1,fa:1,fi:1,fo:1,"fr-ca":1,fr:1,gl:1,gu:1,he:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,ja:1,ka:1,km:1,ko:1,ku:1,lt:1,lv:1,mk:1,mn:1,ms:1,nb:1,nl:1,no:1,pl:1,"pt-br":1,pt:1,ro:1,ru:1,si:1,sk:1,sl:1,sq:1,"sr-latn":1,sr:1,sv:1,th:1,tr:1,tt:1,ug:1,uk:1,vi:1,"zh-cn":1,zh:1},rtl:{ar:1,fa:1,he:1,ku:1,ug:1},load:function(a,f,b){if(!a||!CKEDITOR.lang.languages[a])a=this.detect(f,
a);var c=this,f=function(){c[a].dir=c.rtl[a]?"rtl":"ltr";b(a,c[a])};this[a]?f():CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("lang/"+a+".js"),f,this)},detect:function(a,f){var b=this.languages,f=f||navigator.userLanguage||navigator.language||a,c=f.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/),e=c[1],c=c[2];b[e+"-"+c]?e=e+"-"+c:b[e]||(e=null);CKEDITOR.lang.detect=e?function(){return e}:function(a){return a};return e||a}}})();
CKEDITOR.scriptLoader=function(){var a={},f={};return{load:function(b,c,e,d){var h=typeof b=="string";h&&(b=[b]);e||(e=CKEDITOR);var k=b.length,j=[],g=[],m=function(a){c&&(h?c.call(e,a):c.call(e,j,g))};if(k===0)m(true);else{var y=function(a,b){(b?j:g).push(a);if(--k<=0){d&&CKEDITOR.document.getDocumentElement().removeStyle("cursor");m(b)}},s=function(b,c){a[b]=1;var d=f[b];delete f[b];for(var e=0;e<d.length;e++)d[e](b,c)},w=function(b){if(a[b])y(b,true);else{var d=f[b]||(f[b]=[]);d.push(y);if(!(d.length>
1)){var e=new CKEDITOR.dom.element("script");e.setAttributes({type:"text/javascript",src:b});if(c)if(CKEDITOR.env.ie&&CKEDITOR.env.version<11)e.$.onreadystatechange=function(){if(e.$.readyState=="loaded"||e.$.readyState=="complete"){e.$.onreadystatechange=null;s(b,true)}};else{e.$.onload=function(){setTimeout(function(){s(b,true)},0)};e.$.onerror=function(){s(b,false)}}e.appendTo(CKEDITOR.document.getHead())}}};d&&CKEDITOR.document.getDocumentElement().setStyle("cursor","wait");for(var q=0;q<k;q++)w(b[q])}},
queue:function(){function a(){var b;(b=c[0])&&this.load(b.scriptUrl,b.callback,CKEDITOR,0)}var c=[];return function(e,d){var f=this;c.push({scriptUrl:e,callback:function(){d&&d.apply(this,arguments);c.shift();a.call(f)}});c.length==1&&a.call(this)}}()}}();CKEDITOR.resourceManager=function(a,f){this.basePath=a;this.fileName=f;this.registered={};this.loaded={};this.externals={};this._={waitingList:{}}};
CKEDITOR.resourceManager.prototype={add:function(a,f){if(this.registered[a])throw'[CKEDITOR.resourceManager.add] The resource name "'+a+'" is already registered.';var b=this.registered[a]=f||{};b.name=a;b.path=this.getPath(a);CKEDITOR.fire(a+CKEDITOR.tools.capitalize(this.fileName)+"Ready",b);return this.get(a)},get:function(a){return this.registered[a]||null},getPath:function(a){var f=this.externals[a];return CKEDITOR.getUrl(f&&f.dir||this.basePath+a+"/")},getFilePath:function(a){var f=this.externals[a];
return CKEDITOR.getUrl(this.getPath(a)+(f?f.file:this.fileName+".js"))},addExternal:function(a,f,b){for(var a=a.split(","),c=0;c<a.length;c++){var e=a[c];b||(f=f.replace(/[^\/]+$/,function(a){b=a;return""}));this.externals[e]={dir:f,file:b||this.fileName+".js"}}},load:function(a,f,b){CKEDITOR.tools.isArray(a)||(a=a?[a]:[]);for(var c=this.loaded,e=this.registered,d=[],h={},k={},j=0;j<a.length;j++){var g=a[j];if(g)if(!c[g]&&!e[g]){var m=this.getFilePath(g);d.push(m);m in h||(h[m]=[]);h[m].push(g)}else k[g]=
this.get(g)}CKEDITOR.scriptLoader.load(d,function(a,d){if(d.length)throw'[CKEDITOR.resourceManager.load] Resource name "'+h[d[0]].join(",")+'" was not found at "'+d[0]+'".';for(var e=0;e<a.length;e++)for(var q=h[a[e]],g=0;g<q.length;g++){var i=q[g];k[i]=this.get(i);c[i]=1}f.call(b,k)},this)}};CKEDITOR.plugins=new CKEDITOR.resourceManager("plugins/","plugin");
CKEDITOR.plugins.load=CKEDITOR.tools.override(CKEDITOR.plugins.load,function(a){var f={};return function(b,c,e){var d={},h=function(b){a.call(this,b,function(a){CKEDITOR.tools.extend(d,a);var b=[],m;for(m in a){var k=a[m],s=k&&k.requires;if(!f[m]){if(k.icons)for(var w=k.icons.split(","),q=w.length;q--;)CKEDITOR.skin.addIcon(w[q],k.path+"icons/"+(CKEDITOR.env.hidpi&&k.hidpi?"hidpi/":"")+w[q]+".png");f[m]=1}if(s){s.split&&(s=s.split(","));for(k=0;k<s.length;k++)d[s[k]]||b.push(s[k])}}if(b.length)h.call(this,
b);else{for(m in d){k=d[m];if(k.onLoad&&!k.onLoad._called){k.onLoad()===false&&delete d[m];k.onLoad._called=1}}c&&c.call(e||window,d)}},this)};h.call(this,b)}});CKEDITOR.plugins.setLang=function(a,f,b){var c=this.get(a),a=c.langEntries||(c.langEntries={}),c=c.lang||(c.lang=[]);c.split&&(c=c.split(","));CKEDITOR.tools.indexOf(c,f)==-1&&c.push(f);a[f]=b};CKEDITOR.ui=function(a){if(a.ui)return a.ui;this.items={};this.instances={};this.editor=a;this._={handlers:{}};return this};
CKEDITOR.ui.prototype={add:function(a,f,b){b.name=a.toLowerCase();var c=this.items[a]={type:f,command:b.command||null,args:Array.prototype.slice.call(arguments,2)};CKEDITOR.tools.extend(c,b)},get:function(a){return this.instances[a]},create:function(a){var f=this.items[a],b=f&&this._.handlers[f.type],c=f&&f.command&&this.editor.getCommand(f.command),b=b&&b.create.apply(this,f.args);this.instances[a]=b;c&&c.uiItems.push(b);if(b&&!b.type)b.type=f.type;return b},addHandler:function(a,f){this._.handlers[a]=
f},space:function(a){return CKEDITOR.document.getById(this.spaceId(a))},spaceId:function(a){return this.editor.id+"_"+a}};CKEDITOR.event.implementOn(CKEDITOR.ui);
(function(){function a(a,c,d){CKEDITOR.event.call(this);a=a&&CKEDITOR.tools.clone(a);if(c!==void 0){if(c instanceof CKEDITOR.dom.element){if(!d)throw Error("One of the element modes must be specified.");}else throw Error("Expect element of type CKEDITOR.dom.element.");if(CKEDITOR.env.ie&&CKEDITOR.env.quirks&&d==CKEDITOR.ELEMENT_MODE_INLINE)throw Error("Inline element mode is not supported on IE quirks.");if(!(d==CKEDITOR.ELEMENT_MODE_INLINE?c.is(CKEDITOR.dtd.$editable)||c.is("textarea"):d==CKEDITOR.ELEMENT_MODE_REPLACE?
!c.is(CKEDITOR.dtd.$nonBodyContent):1))throw Error('The specified element mode is not supported on element: "'+c.getName()+'".');this.element=c;this.elementMode=d;this.name=this.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO&&(c.getId()||c.getNameAtt())}else this.elementMode=CKEDITOR.ELEMENT_MODE_NONE;this._={};this.commands={};this.templates={};this.name=this.name||f();this.id=CKEDITOR.tools.getNextId();this.status="unloaded";this.config=CKEDITOR.tools.prototypedCopy(CKEDITOR.config);this.ui=new CKEDITOR.ui(this);
this.focusManager=new CKEDITOR.focusManager(this);this.keystrokeHandler=new CKEDITOR.keystrokeHandler(this);this.on("readOnly",b);this.on("selectionChange",function(a){e(this,a.data.path)});this.on("activeFilterChange",function(){e(this,this.elementPath(),true)});this.on("mode",b);this.on("instanceReady",function(){this.config.startupFocus&&this.focus()});CKEDITOR.fire("instanceCreated",null,this);CKEDITOR.add(this);CKEDITOR.tools.setTimeout(function(){h(this,a)},0,this)}function f(){do var a="editor"+
++s;while(CKEDITOR.instances[a]);return a}function b(){var a=this.commands,b;for(b in a)c(this,a[b])}function c(a,b){b[b.startDisabled?"disable":a.readOnly&&!b.readOnly?"disable":b.modes[a.mode]?"enable":"disable"]()}function e(a,b,c){if(b){var d,e,f=a.commands;for(e in f){d=f[e];(c||d.contextSensitive)&&d.refresh(a,b)}}}function d(a){var b=a.config.customConfig;if(!b)return false;var b=CKEDITOR.getUrl(b),c=w[b]||(w[b]={});if(c.fn){c.fn.call(a,a.config);(CKEDITOR.getUrl(a.config.customConfig)==b||
!d(a))&&a.fireOnce("customConfigLoaded")}else CKEDITOR.scriptLoader.queue(b,function(){c.fn=CKEDITOR.editorConfig?CKEDITOR.editorConfig:function(){};d(a)});return true}function h(a,b){a.on("customConfigLoaded",function(){if(b){if(b.on)for(var c in b.on)a.on(c,b.on[c]);CKEDITOR.tools.extend(a.config,b,true);delete a.config.on}c=a.config;a.readOnly=!(!c.readOnly&&!(a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.element.is("textarea")?a.element.hasAttribute("disabled"):a.element.isReadOnly():a.elementMode==
CKEDITOR.ELEMENT_MODE_REPLACE&&a.element.hasAttribute("disabled")));a.blockless=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?!(a.element.is("textarea")||CKEDITOR.dtd[a.element.getName()].p):false;a.tabIndex=c.tabIndex||a.element&&a.element.getAttribute("tabindex")||0;a.activeEnterMode=a.enterMode=a.blockless?CKEDITOR.ENTER_BR:c.enterMode;a.activeShiftEnterMode=a.shiftEnterMode=a.blockless?CKEDITOR.ENTER_BR:c.shiftEnterMode;if(c.skin)CKEDITOR.skinName=c.skin;a.fireOnce("configLoaded");a.dataProcessor=
new CKEDITOR.htmlDataProcessor(a);a.filter=a.activeFilter=new CKEDITOR.filter(a);k(a)});if(b&&b.customConfig!=null)a.config.customConfig=b.customConfig;d(a)||a.fireOnce("customConfigLoaded")}function k(a){CKEDITOR.skin.loadPart("editor",function(){j(a)})}function j(a){CKEDITOR.lang.load(a.config.language,a.config.defaultLanguage,function(b,c){var d=a.config.title;a.langCode=b;a.lang=CKEDITOR.tools.prototypedCopy(c);a.title=typeof d=="string"||d===false?d:[a.lang.editor,a.name].join(", ");if(!a.config.contentsLangDirection)a.config.contentsLangDirection=
a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.element.getDirection(1):a.lang.dir;a.fire("langLoaded");g(a)})}function g(a){a.getStylesSet(function(b){a.once("loaded",function(){a.fire("stylesSet",{styles:b})},null,null,1);m(a)})}function m(a){var b=a.config,c=b.plugins,d=b.extraPlugins,e=b.removePlugins;if(d)var f=RegExp("(?:^|,)(?:"+d.replace(/\s*,\s*/g,"|")+")(?=,|$)","g"),c=c.replace(f,""),c=c+(","+d);if(e)var l=RegExp("(?:^|,)(?:"+e.replace(/\s*,\s*/g,"|")+")(?=,|$)","g"),c=c.replace(l,"");CKEDITOR.env.air&&
(c=c+",adobeair");CKEDITOR.plugins.load(c.split(","),function(c){var d=[],e=[],f=[];a.plugins=c;for(var i in c){var h=c[i],g=h.lang,o=null,A=h.requires,v;CKEDITOR.tools.isArray(A)&&(A=A.join(","));if(A&&(v=A.match(l)))for(;A=v.pop();)CKEDITOR.tools.setTimeout(function(a,b){throw Error('Plugin "'+a.replace(",","")+'" cannot be removed from the plugins list, because it\'s required by "'+b+'" plugin.');},0,null,[A,i]);if(g&&!a.lang[i]){g.split&&(g=g.split(","));if(CKEDITOR.tools.indexOf(g,a.langCode)>=
0)o=a.langCode;else{o=a.langCode.replace(/-.*/,"");o=o!=a.langCode&&CKEDITOR.tools.indexOf(g,o)>=0?o:CKEDITOR.tools.indexOf(g,"en")>=0?"en":g[0]}if(!h.langEntries||!h.langEntries[o])f.push(CKEDITOR.getUrl(h.path+"lang/"+o+".js"));else{a.lang[i]=h.langEntries[o];o=null}}e.push(o);d.push(h)}CKEDITOR.scriptLoader.load(f,function(){for(var c=["beforeInit","init","afterInit"],f=0;f<c.length;f++)for(var p=0;p<d.length;p++){var i=d[p];f===0&&(e[p]&&i.lang&&i.langEntries)&&(a.lang[i.name]=i.langEntries[e[p]]);
if(i[c[f]])i[c[f]](a)}a.fireOnce("pluginsLoaded");b.keystrokes&&a.setKeystroke(a.config.keystrokes);for(p=0;p<a.config.blockedKeystrokes.length;p++)a.keystrokeHandler.blockedKeystrokes[a.config.blockedKeystrokes[p]]=1;a.status="loaded";a.fireOnce("loaded");CKEDITOR.fire("instanceLoaded",null,a)})})}function y(){var a=this.element;if(a&&this.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO){var b=this.getData();this.config.htmlEncodeOutput&&(b=CKEDITOR.tools.htmlEncode(b));a.is("textarea")?a.setValue(b):
a.setHtml(b);return true}return false}a.prototype=CKEDITOR.editor.prototype;CKEDITOR.editor=a;var s=0,w={};CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{addCommand:function(a,b){b.name=a.toLowerCase();var d=new CKEDITOR.command(this,b);this.mode&&c(this,d);return this.commands[a]=d},_attachToForm:function(){function a(d){b.updateElement();b._.required&&(!c.getValue()&&b.fire("required")===false)&&d.data.preventDefault()}var b=this,c=b.element,d=new CKEDITOR.dom.element(c.$.form);if(c.is("textarea")&&
d){d.on("submit",a);if(d.$.submit&&d.$.submit.call&&d.$.submit.apply)d.$.submit=CKEDITOR.tools.override(d.$.submit,function(b){return function(){a();b.apply?b.apply(this):b()}});b.on("destroy",function(){d.removeListener("submit",a)})}},destroy:function(a){this.fire("beforeDestroy");!a&&y.call(this);this.editable(null);this.filter.destroy();delete this.filter;delete this.activeFilter;this.status="destroyed";this.fire("destroy");this.removeAllListeners();CKEDITOR.remove(this);CKEDITOR.fire("instanceDestroyed",
null,this)},elementPath:function(a){if(!a){a=this.getSelection();if(!a)return null;a=a.getStartElement()}return a?new CKEDITOR.dom.elementPath(a,this.editable()):null},createRange:function(){var a=this.editable();return a?new CKEDITOR.dom.range(a):null},execCommand:function(a,b){var c=this.getCommand(a),d={name:a,commandData:b,command:c};if(c&&c.state!=CKEDITOR.TRISTATE_DISABLED&&this.fire("beforeCommandExec",d)!==false){d.returnValue=c.exec(d.commandData);if(!c.async&&this.fire("afterCommandExec",
d)!==false)return d.returnValue}return false},getCommand:function(a){return this.commands[a]},getData:function(a){!a&&this.fire("beforeGetData");var b=this._.data;if(typeof b!="string")b=(b=this.element)&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE?b.is("textarea")?b.getValue():b.getHtml():"";b={dataValue:b};!a&&this.fire("getData",b);return b.dataValue},getSnapshot:function(){var a=this.fire("getSnapshot");if(typeof a!="string"){var b=this.element;b&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE&&
(a=b.is("textarea")?b.getValue():b.getHtml())}return a},loadSnapshot:function(a){this.fire("loadSnapshot",a)},setData:function(a,b,c){var d=true,e=b;if(b&&typeof b=="object"){c=b.internal;e=b.callback;d=!b.noSnapshot}!c&&d&&this.fire("saveSnapshot");if(e||!c)this.once("dataReady",function(a){!c&&d&&this.fire("saveSnapshot");e&&e.call(a.editor)});a={dataValue:a};!c&&this.fire("setData",a);this._.data=a.dataValue;!c&&this.fire("afterSetData",a)},setReadOnly:function(a){a=a==null||a;if(this.readOnly!=
a){this.readOnly=a;this.keystrokeHandler.blockedKeystrokes[8]=+a;this.editable().setReadOnly(a);this.fire("readOnly")}},insertHtml:function(a,b){this.fire("insertHtml",{dataValue:a,mode:b})},insertText:function(a){this.fire("insertText",a)},insertElement:function(a){this.fire("insertElement",a)},focus:function(){this.fire("beforeFocus")},checkDirty:function(){return this.status=="ready"&&this._.previousValue!==this.getSnapshot()},resetDirty:function(){this._.previousValue=this.getSnapshot()},updateElement:function(){return y.call(this)},
setKeystroke:function(){for(var a=this.keystrokeHandler.keystrokes,b=CKEDITOR.tools.isArray(arguments[0])?arguments[0]:[[].slice.call(arguments,0)],c,d,e=b.length;e--;){c=b[e];d=0;if(CKEDITOR.tools.isArray(c)){d=c[1];c=c[0]}d?a[c]=d:delete a[c]}},addFeature:function(a){return this.filter.addFeature(a)},setActiveFilter:function(a){if(!a)a=this.filter;if(this.activeFilter!==a){this.activeFilter=a;this.fire("activeFilterChange");a===this.filter?this.setActiveEnterMode(null,null):this.setActiveEnterMode(a.getAllowedEnterMode(this.enterMode),
a.getAllowedEnterMode(this.shiftEnterMode,true))}},setActiveEnterMode:function(a,b){a=a?this.blockless?CKEDITOR.ENTER_BR:a:this.enterMode;b=b?this.blockless?CKEDITOR.ENTER_BR:b:this.shiftEnterMode;if(this.activeEnterMode!=a||this.activeShiftEnterMode!=b){this.activeEnterMode=a;this.activeShiftEnterMode=b;this.fire("activeEnterModeChange")}}})})();CKEDITOR.ELEMENT_MODE_NONE=0;CKEDITOR.ELEMENT_MODE_REPLACE=1;CKEDITOR.ELEMENT_MODE_APPENDTO=2;CKEDITOR.ELEMENT_MODE_INLINE=3;
CKEDITOR.htmlParser=function(){this._={htmlPartsRegex:/<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)--\>)|(?:([^\/\s>]+)((?:\s+[\w\-:.]+(?:\s*=\s*?(?:(?:"[^"]*")|(?:'[^']*')|[^\s"'\/>]+))?)*)[\S\s]*?(\/?)>))/g}};
(function(){var a=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,f={checked:1,compact:1,declare:1,defer:1,disabled:1,ismap:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,selected:1};CKEDITOR.htmlParser.prototype={onTagOpen:function(){},onTagClose:function(){},onText:function(){},onCDATA:function(){},onComment:function(){},parse:function(b){for(var c,e,d=0,h;c=this._.htmlPartsRegex.exec(b);){e=c.index;if(e>d){d=b.substring(d,e);if(h)h.push(d);else this.onText(d)}d=
this._.htmlPartsRegex.lastIndex;if(e=c[1]){e=e.toLowerCase();if(h&&CKEDITOR.dtd.$cdata[e]){this.onCDATA(h.join(""));h=null}if(!h){this.onTagClose(e);continue}}if(h)h.push(c[0]);else if(e=c[3]){e=e.toLowerCase();if(!/="/.test(e)){var k={},j,g=c[4];c=!!c[5];if(g)for(;j=a.exec(g);){var m=j[1].toLowerCase();j=j[2]||j[3]||j[4]||"";k[m]=!j&&f[m]?m:CKEDITOR.tools.htmlDecodeAttr(j)}this.onTagOpen(e,k,c);!h&&CKEDITOR.dtd.$cdata[e]&&(h=[])}}else if(e=c[2])this.onComment(e)}if(b.length>d)this.onText(b.substring(d,
b.length))}}})();
CKEDITOR.htmlParser.basicWriter=CKEDITOR.tools.createClass({$:function(){this._={output:[]}},proto:{openTag:function(a){this._.output.push("<",a)},openTagClose:function(a,f){f?this._.output.push(" />"):this._.output.push(">")},attribute:function(a,f){typeof f=="string"&&(f=CKEDITOR.tools.htmlEncodeAttr(f));this._.output.push(" ",a,'="',f,'"')},closeTag:function(a){this._.output.push("</",a,">")},text:function(a){this._.output.push(a)},comment:function(a){this._.output.push("<\!--",a,"--\>")},write:function(a){this._.output.push(a)},
reset:function(){this._.output=[];this._.indent=false},getHtml:function(a){var f=this._.output.join("");a&&this.reset();return f}}});"use strict";
(function(){CKEDITOR.htmlParser.node=function(){};CKEDITOR.htmlParser.node.prototype={remove:function(){var a=this.parent.children,f=CKEDITOR.tools.indexOf(a,this),b=this.previous,c=this.next;b&&(b.next=c);c&&(c.previous=b);a.splice(f,1);this.parent=null},replaceWith:function(a){var f=this.parent.children,b=CKEDITOR.tools.indexOf(f,this),c=a.previous=this.previous,e=a.next=this.next;c&&(c.next=a);e&&(e.previous=a);f[b]=a;a.parent=this.parent;this.parent=null},insertAfter:function(a){var f=a.parent.children,
b=CKEDITOR.tools.indexOf(f,a),c=a.next;f.splice(b+1,0,this);this.next=a.next;this.previous=a;a.next=this;c&&(c.previous=this);this.parent=a.parent},insertBefore:function(a){var f=a.parent.children,b=CKEDITOR.tools.indexOf(f,a);f.splice(b,0,this);this.next=a;(this.previous=a.previous)&&(a.previous.next=this);a.previous=this;this.parent=a.parent},getAscendant:function(a){var f=typeof a=="function"?a:typeof a=="string"?function(b){return b.name==a}:function(b){return b.name in a},b=this.parent;for(;b&&
b.type==CKEDITOR.NODE_ELEMENT;){if(f(b))return b;b=b.parent}return null},wrapWith:function(a){this.replaceWith(a);a.add(this);return a},getIndex:function(){return CKEDITOR.tools.indexOf(this.parent.children,this)},getFilterContext:function(a){return a||{}}}})();"use strict";CKEDITOR.htmlParser.comment=function(a){this.value=a;this._={isBlockLike:false}};
CKEDITOR.htmlParser.comment.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_COMMENT,filter:function(a,f){var b=this.value;if(!(b=a.onComment(f,b,this))){this.remove();return false}if(typeof b!="string"){this.replaceWith(b);return false}this.value=b;return true},writeHtml:function(a,f){f&&this.filter(f);a.comment(this.value)}});"use strict";
(function(){CKEDITOR.htmlParser.text=function(a){this.value=a;this._={isBlockLike:false}};CKEDITOR.htmlParser.text.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_TEXT,filter:function(a,f){if(!(this.value=a.onText(f,this.value,this))){this.remove();return false}},writeHtml:function(a,f){f&&this.filter(f);a.text(this.value)}})})();"use strict";
(function(){CKEDITOR.htmlParser.cdata=function(a){this.value=a};CKEDITOR.htmlParser.cdata.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_TEXT,filter:function(){},writeHtml:function(a){a.write(this.value)}})})();"use strict";CKEDITOR.htmlParser.fragment=function(){this.children=[];this.parent=null;this._={isBlockLike:true,hasInlineStarted:false}};
(function(){function a(a){return a.attributes["data-cke-survive"]?false:a.name=="a"&&a.attributes.href||CKEDITOR.dtd.$removeEmpty[a.name]}var f=CKEDITOR.tools.extend({table:1,ul:1,ol:1,dl:1},CKEDITOR.dtd.table,CKEDITOR.dtd.ul,CKEDITOR.dtd.ol,CKEDITOR.dtd.dl),b={ol:1,ul:1},c=CKEDITOR.tools.extend({},{html:1},CKEDITOR.dtd.html,CKEDITOR.dtd.body,CKEDITOR.dtd.head,{style:1,script:1}),e={ul:"li",ol:"li",dl:"dd",table:"tbody",tbody:"tr",thead:"tr",tfoot:"tr",tr:"td"};CKEDITOR.htmlParser.fragment.fromHtml=
function(d,h,k){function j(a){var b;if(i.length>0)for(var c=0;c<i.length;c++){var d=i[c],e=d.name,f=CKEDITOR.dtd[e],l=u.name&&CKEDITOR.dtd[u.name];if((!l||l[e])&&(!a||!f||f[a]||!CKEDITOR.dtd[a])){if(!b){g();b=1}d=d.clone();d.parent=u;u=d;i.splice(c,1);c--}else if(e==u.name){y(u,u.parent,1);c--}}}function g(){for(;A.length;)y(A.shift(),u)}function m(a){if(a._.isBlockLike&&a.name!="pre"&&a.name!="textarea"){var b=a.children.length,c=a.children[b-1],d;if(c&&c.type==CKEDITOR.NODE_TEXT)(d=CKEDITOR.tools.rtrim(c.value))?
c.value=d:a.children.length=b-1}}function y(b,c,d){var c=c||u||t,e=u;if(b.previous===void 0){if(s(c,b)){u=c;q.onTagOpen(k,{});b.returnPoint=c=u}m(b);(!a(b)||b.children.length)&&c.add(b);b.name=="pre"&&(l=false);b.name=="textarea"&&(o=false)}if(b.returnPoint){u=b.returnPoint;delete b.returnPoint}else u=d?c:e}function s(a,b){if((a==t||a.name=="body")&&k&&(!a.name||CKEDITOR.dtd[a.name][k])){var c,d;return(c=b.attributes&&(d=b.attributes["data-cke-real-element-type"])?d:b.name)&&c in CKEDITOR.dtd.$inline&&
!(c in CKEDITOR.dtd.head)&&!b.isOrphan||b.type==CKEDITOR.NODE_TEXT}}function w(a,b){return a in CKEDITOR.dtd.$listItem||a in CKEDITOR.dtd.$tableContent?a==b||a=="dt"&&b=="dd"||a=="dd"&&b=="dt":false}var q=new CKEDITOR.htmlParser,t=h instanceof CKEDITOR.htmlParser.element?h:typeof h=="string"?new CKEDITOR.htmlParser.element(h):new CKEDITOR.htmlParser.fragment,i=[],A=[],u=t,o=t.name=="textarea",l=t.name=="pre";q.onTagOpen=function(d,e,h,m){e=new CKEDITOR.htmlParser.element(d,e);if(e.isUnknown&&h)e.isEmpty=
true;e.isOptionalClose=m;if(a(e))i.push(e);else{if(d=="pre")l=true;else{if(d=="br"&&l){u.add(new CKEDITOR.htmlParser.text("\n"));return}d=="textarea"&&(o=true)}if(d=="br")A.push(e);else{for(;;){m=(h=u.name)?CKEDITOR.dtd[h]||(u._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):c;if(!e.isUnknown&&!u.isUnknown&&!m[d])if(u.isOptionalClose)q.onTagClose(h);else if(d in b&&h in b){h=u.children;(h=h[h.length-1])&&h.name=="li"||y(h=new CKEDITOR.htmlParser.element("li"),u);!e.returnPoint&&(e.returnPoint=u);
u=h}else if(d in CKEDITOR.dtd.$listItem&&!w(d,h))q.onTagOpen(d=="li"?"ul":"dl",{},0,1);else if(h in f&&!w(d,h)){!e.returnPoint&&(e.returnPoint=u);u=u.parent}else{h in CKEDITOR.dtd.$inline&&i.unshift(u);if(u.parent)y(u,u.parent,1);else{e.isOrphan=1;break}}else break}j(d);g();e.parent=u;e.isEmpty?y(e):u=e}}};q.onTagClose=function(a){for(var b=i.length-1;b>=0;b--)if(a==i[b].name){i.splice(b,1);return}for(var c=[],d=[],e=u;e!=t&&e.name!=a;){e._.isBlockLike||d.unshift(e);c.push(e);e=e.returnPoint||e.parent}if(e!=
t){for(b=0;b<c.length;b++){var f=c[b];y(f,f.parent)}u=e;e._.isBlockLike&&g();y(e,e.parent);if(e==u)u=u.parent;i=i.concat(d)}a=="body"&&(k=false)};q.onText=function(a){if((!u._.hasInlineStarted||A.length)&&!l&&!o){a=CKEDITOR.tools.ltrim(a);if(a.length===0)return}var b=u.name,d=b?CKEDITOR.dtd[b]||(u._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):c;if(!o&&!d["#"]&&b in f){q.onTagOpen(e[b]||"");q.onText(a)}else{g();j();!l&&!o&&(a=a.replace(/[\t\r\n ]{2,}|[\t\r\n]/g," "));a=new CKEDITOR.htmlParser.text(a);
if(s(u,a))this.onTagOpen(k,{},0,1);u.add(a)}};q.onCDATA=function(a){u.add(new CKEDITOR.htmlParser.cdata(a))};q.onComment=function(a){g();j();u.add(new CKEDITOR.htmlParser.comment(a))};q.parse(d);for(g();u!=t;)y(u,u.parent,1);m(t);return t};CKEDITOR.htmlParser.fragment.prototype={type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,add:function(a,b){isNaN(b)&&(b=this.children.length);var c=b>0?this.children[b-1]:null;if(c){if(a._.isBlockLike&&c.type==CKEDITOR.NODE_TEXT){c.value=CKEDITOR.tools.rtrim(c.value);if(c.value.length===
0){this.children.pop();this.add(a);return}}c.next=a}a.previous=c;a.parent=this;this.children.splice(b,0,a);if(!this._.hasInlineStarted)this._.hasInlineStarted=a.type==CKEDITOR.NODE_TEXT||a.type==CKEDITOR.NODE_ELEMENT&&!a._.isBlockLike},filter:function(a,b){b=this.getFilterContext(b);a.onRoot(b,this);this.filterChildren(a,false,b)},filterChildren:function(a,b,c){if(this.childrenFilteredBy!=a.id){c=this.getFilterContext(c);if(b&&!this.parent)a.onRoot(c,this);this.childrenFilteredBy=a.id;for(b=0;b<this.children.length;b++)this.children[b].filter(a,
c)===false&&b--}},writeHtml:function(a,b){b&&this.filter(b);this.writeChildrenHtml(a)},writeChildrenHtml:function(a,b,c){var e=this.getFilterContext();if(c&&!this.parent&&b)b.onRoot(e,this);b&&this.filterChildren(b,false,e);b=0;c=this.children;for(e=c.length;b<e;b++)c[b].writeHtml(a)},forEach:function(a,b,c){if(!c&&(!b||this.type==b))var e=a(this);if(e!==false)for(var c=this.children,f=0;f<c.length;f++){e=c[f];e.type==CKEDITOR.NODE_ELEMENT?e.forEach(a,b):(!b||e.type==b)&&a(e)}},getFilterContext:function(a){return a||
{}}}})();"use strict";
(function(){function a(){this.rules=[]}function f(b,c,e,d){var f,k;for(f in c){(k=b[f])||(k=b[f]=new a);k.add(c[f],e,d)}}CKEDITOR.htmlParser.filter=CKEDITOR.tools.createClass({$:function(b){this.id=CKEDITOR.tools.getNextNumber();this.elementNameRules=new a;this.attributeNameRules=new a;this.elementsRules={};this.attributesRules={};this.textRules=new a;this.commentRules=new a;this.rootRules=new a;b&&this.addRules(b,10)},proto:{addRules:function(a,c){var e;if(typeof c=="number")e=c;else if(c&&"priority"in
c)e=c.priority;typeof e!="number"&&(e=10);typeof c!="object"&&(c={});a.elementNames&&this.elementNameRules.addMany(a.elementNames,e,c);a.attributeNames&&this.attributeNameRules.addMany(a.attributeNames,e,c);a.elements&&f(this.elementsRules,a.elements,e,c);a.attributes&&f(this.attributesRules,a.attributes,e,c);a.text&&this.textRules.add(a.text,e,c);a.comment&&this.commentRules.add(a.comment,e,c);a.root&&this.rootRules.add(a.root,e,c)},applyTo:function(a){a.filter(this)},onElementName:function(a,c){return this.elementNameRules.execOnName(a,
c)},onAttributeName:function(a,c){return this.attributeNameRules.execOnName(a,c)},onText:function(a,c,e){return this.textRules.exec(a,c,e)},onComment:function(a,c,e){return this.commentRules.exec(a,c,e)},onRoot:function(a,c){return this.rootRules.exec(a,c)},onElement:function(a,c){for(var e=[this.elementsRules["^"],this.elementsRules[c.name],this.elementsRules.$],d,f=0;f<3;f++)if(d=e[f]){d=d.exec(a,c,this);if(d===false)return null;if(d&&d!=c)return this.onNode(a,d);if(c.parent&&!c.name)break}return c},
onNode:function(a,c){var e=c.type;return e==CKEDITOR.NODE_ELEMENT?this.onElement(a,c):e==CKEDITOR.NODE_TEXT?new CKEDITOR.htmlParser.text(this.onText(a,c.value)):e==CKEDITOR.NODE_COMMENT?new CKEDITOR.htmlParser.comment(this.onComment(a,c.value)):null},onAttribute:function(a,c,e,d){return(e=this.attributesRules[e])?e.exec(a,d,c,this):d}}});CKEDITOR.htmlParser.filterRulesGroup=a;a.prototype={add:function(a,c,e){this.rules.splice(this.findIndex(c),0,{value:a,priority:c,options:e})},addMany:function(a,
c,e){for(var d=[this.findIndex(c),0],f=0,k=a.length;f<k;f++)d.push({value:a[f],priority:c,options:e});this.rules.splice.apply(this.rules,d)},findIndex:function(a){for(var c=this.rules,e=c.length-1;e>=0&&a<c[e].priority;)e--;return e+1},exec:function(a,c){var e=c instanceof CKEDITOR.htmlParser.node||c instanceof CKEDITOR.htmlParser.fragment,d=Array.prototype.slice.call(arguments,1),f=this.rules,k=f.length,j,g,m,y;for(y=0;y<k;y++){if(e){j=c.type;g=c.name}m=f[y];if(!(a.nonEditable&&!m.options.applyToAll||
a.nestedEditable&&m.options.excludeNestedEditable)){m=m.value.apply(null,d);if(m===false||e&&m&&(m.name!=g||m.type!=j))return m;m!=null&&(d[0]=c=m)}}return c},execOnName:function(a,c){for(var e=0,d=this.rules,f=d.length,k;c&&e<f;e++){k=d[e];!(a.nonEditable&&!k.options.applyToAll||a.nestedEditable&&k.options.excludeNestedEditable)&&(c=c.replace(k.value[0],k.value[1]))}return c}}})();
(function(){function a(a,f){function p(a){return a||CKEDITOR.env.needsNbspFiller?new CKEDITOR.htmlParser.text(" "):new CKEDITOR.htmlParser.element("br",{"data-cke-bogus":1})}function r(a,e){return function(f){if(f.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var i=[],l=b(f),x,r;if(l)for(v(l,1)&&i.push(l);l;){if(d(l)&&(x=c(l))&&v(x))if((r=c(x))&&!d(r))i.push(x);else{p(g).insertAfter(x);x.remove()}l=l.previous}for(l=0;l<i.length;l++)i[l].remove();if(i=!a||(typeof e=="function"?e(f):e)!==false)if(!g&&!CKEDITOR.env.needsBrFiller&&
f.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT)i=false;else if(!g&&!CKEDITOR.env.needsBrFiller&&(document.documentMode>7||f.name in CKEDITOR.dtd.tr||f.name in CKEDITOR.dtd.$listItem))i=false;else{i=b(f);i=!i||f.name=="form"&&i.name=="input"}i&&f.add(p(a))}}}function v(a,b){if((!g||CKEDITOR.env.needsBrFiller)&&a.type==CKEDITOR.NODE_ELEMENT&&a.name=="br"&&!a.attributes["data-cke-eol"])return true;var c;if(a.type==CKEDITOR.NODE_TEXT&&(c=a.value.match(i))){if(c.index){(new CKEDITOR.htmlParser.text(a.value.substring(0,
c.index))).insertBefore(a);a.value=c[0]}if(!CKEDITOR.env.needsBrFiller&&g&&(!b||a.parent.name in z))return true;if(!g)if((c=a.previous)&&c.name=="br"||!c||d(c))return true}return false}var n={elements:{}},g=f=="html",z=CKEDITOR.tools.extend({},l),o;for(o in z)"#"in u[o]||delete z[o];for(o in z)n.elements[o]=r(g,a.config.fillEmptyBlocks);n.root=r(g,false);n.elements.br=function(a){return function(b){if(b.parent.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var f=b.attributes;if("data-cke-bogus"in f||"data-cke-eol"in
f)delete f["data-cke-bogus"];else{for(f=b.next;f&&e(f);)f=f.next;var i=c(b);!f&&d(b.parent)?h(b.parent,p(a)):d(f)&&(i&&!d(i))&&p(a).insertBefore(f)}}}}(g);return n}function f(a,b){return a!=CKEDITOR.ENTER_BR&&b!==false?a==CKEDITOR.ENTER_DIV?"div":"p":false}function b(a){for(a=a.children[a.children.length-1];a&&e(a);)a=a.previous;return a}function c(a){for(a=a.previous;a&&e(a);)a=a.previous;return a}function e(a){return a.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(a.value)||a.type==CKEDITOR.NODE_ELEMENT&&
a.attributes["data-cke-bookmark"]}function d(a){return a&&(a.type==CKEDITOR.NODE_ELEMENT&&a.name in l||a.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT)}function h(a,b){var c=a.children[a.children.length-1];a.children.push(b);b.parent=a;if(c){c.next=b;b.previous=c}}function k(a){a=a.attributes;a.contenteditable!="false"&&(a["data-cke-editable"]=a.contenteditable?"true":1);a.contenteditable="false"}function j(a){a=a.attributes;switch(a["data-cke-editable"]){case "true":a.contenteditable="true";break;case "1":delete a.contenteditable}}
function g(a){return a.replace(C,function(a,b,c){return"<"+b+c.replace(L,function(a,b){return F.test(b)&&c.indexOf("data-cke-saved-"+b)==-1?" data-cke-saved-"+a+" data-cke-"+CKEDITOR.rnd+"-"+a:a})+">"})}function m(a,b){return a.replace(b,function(a,b,c){a.indexOf("<textarea")===0&&(a=b+w(c).replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</textarea>");return"<cke:encoded>"+encodeURIComponent(a)+"</cke:encoded>"})}function y(a){return a.replace(v,function(a,b){return decodeURIComponent(b)})}function s(a){return a.replace(/<\!--(?!{cke_protected})[\s\S]+?--\>/g,
function(a){return"<\!--"+A+"{C}"+encodeURIComponent(a).replace(/--/g,"%2D%2D")+"--\>"})}function w(a){return a.replace(/<\!--\{cke_protected\}\{C\}([\s\S]+?)--\>/g,function(a,b){return decodeURIComponent(b)})}function q(a,b){var c=b._.dataStore;return a.replace(/<\!--\{cke_protected\}([\s\S]+?)--\>/g,function(a,b){return decodeURIComponent(b)}).replace(/\{cke_protected_(\d+)\}/g,function(a,b){return c&&c[b]||""})}function t(a,b){for(var c=[],d=b.config.protectedSource,e=b._.dataStore||(b._.dataStore=
{id:1}),f=/<\!--\{cke_temp(comment)?\}(\d*?)--\>/g,d=[/<script[\s\S]*?<\/script>/gi,/<noscript[\s\S]*?<\/noscript>/gi,/<meta[\s\S]*?\/?>/gi].concat(d),a=a.replace(/<\!--[\s\S]*?--\>/g,function(a){return"<\!--{cke_tempcomment}"+(c.push(a)-1)+"--\>"}),i=0;i<d.length;i++)a=a.replace(d[i],function(a){a=a.replace(f,function(a,b,d){return c[d]});return/cke_temp(comment)?/.test(a)?a:"<\!--{cke_temp}"+(c.push(a)-1)+"--\>"});a=a.replace(f,function(a,b,d){return"<\!--"+A+(b?"{C}":"")+encodeURIComponent(c[d]).replace(/--/g,
"%2D%2D")+"--\>"});a=a.replace(/<\w+(?:\s+(?:(?:[^\s=>]+\s*=\s*(?:[^'"\s>]+|'[^']*'|"[^"]*"))|[^\s=>]+))+\s*>/g,function(a){return a.replace(/<\!--\{cke_protected\}([^>]*)--\>/g,function(a,b){e[e.id]=decodeURIComponent(b);return"{cke_protected_"+e.id++ +"}"})});return a=a.replace(/<(title|iframe|textarea)([^>]*)>([\s\S]*?)<\/\1>/g,function(a,c,d,e){return"<"+c+d+">"+q(w(e),b)+"</"+c+">"})}CKEDITOR.htmlDataProcessor=function(b){var c,d,e=this;this.editor=b;this.dataFilter=c=new CKEDITOR.htmlParser.filter;
this.htmlFilter=d=new CKEDITOR.htmlParser.filter;this.writer=new CKEDITOR.htmlParser.basicWriter;c.addRules(p);c.addRules(r,{applyToAll:true});c.addRules(a(b,"data"),{applyToAll:true});d.addRules(n);d.addRules(P,{applyToAll:true});d.addRules(a(b,"html"),{applyToAll:true});b.on("toHtml",function(a){var a=a.data,c=a.dataValue,d,c=t(c,b),c=m(c,I),c=g(c),c=m(c,K),c=c.replace(G,"$1cke:$2"),c=c.replace(B,"<cke:$1$2></cke:$1>"),c=c.replace(/(<pre\b[^>]*>)(\r\n|\n)/g,"$1$2$2"),c=c.replace(/([^a-z0-9<\-])(on\w{3,})(?!>)/gi,
"$1data-cke-"+CKEDITOR.rnd+"-$2");d=a.context||b.editable().getName();var e;if(CKEDITOR.env.ie&&CKEDITOR.env.version<9&&d=="pre"){d="div";c="<pre>"+c+"</pre>";e=1}d=b.document.createElement(d);d.setHtml("a"+c);c=d.getHtml().substr(1);c=c.replace(RegExp("data-cke-"+CKEDITOR.rnd+"-","ig"),"");e&&(c=c.replace(/^<pre>|<\/pre>$/gi,""));c=c.replace(z,"$1$2");c=y(c);c=w(c);d=a.fixForBody===false?false:f(a.enterMode,b.config.autoParagraph);c=CKEDITOR.htmlParser.fragment.fromHtml(c,a.context,d);if(d){e=c;
if(!e.children.length&&CKEDITOR.dtd[e.name][d]){d=new CKEDITOR.htmlParser.element(d);e.add(d)}}a.dataValue=c},null,null,5);b.on("toHtml",function(a){a.data.filter.applyTo(a.data.dataValue,true,a.data.dontFilter,a.data.enterMode)&&b.fire("dataFiltered")},null,null,6);b.on("toHtml",function(a){a.data.dataValue.filterChildren(e.dataFilter,true)},null,null,10);b.on("toHtml",function(a){var a=a.data,b=a.dataValue,c=new CKEDITOR.htmlParser.basicWriter;b.writeChildrenHtml(c);b=c.getHtml(true);a.dataValue=
s(b)},null,null,15);b.on("toDataFormat",function(a){var c=a.data.dataValue;a.data.enterMode!=CKEDITOR.ENTER_BR&&(c=c.replace(/^<br *\/?>/i,""));a.data.dataValue=CKEDITOR.htmlParser.fragment.fromHtml(c,a.data.context,f(a.data.enterMode,b.config.autoParagraph))},null,null,5);b.on("toDataFormat",function(a){a.data.dataValue.filterChildren(e.htmlFilter,true)},null,null,10);b.on("toDataFormat",function(a){a.data.filter.applyTo(a.data.dataValue,false,true)},null,null,11);b.on("toDataFormat",function(a){var c=
a.data.dataValue,d=e.writer;d.reset();c.writeChildrenHtml(d);c=d.getHtml(true);c=w(c);c=q(c,b);a.data.dataValue=c},null,null,15)};CKEDITOR.htmlDataProcessor.prototype={toHtml:function(a,b,c,d){var e=this.editor,f,i,l;if(b&&typeof b=="object"){f=b.context;c=b.fixForBody;d=b.dontFilter;i=b.filter;l=b.enterMode}else f=b;!f&&f!==null&&(f=e.editable().getName());return e.fire("toHtml",{dataValue:a,context:f,fixForBody:c,dontFilter:d,filter:i||e.filter,enterMode:l||e.enterMode}).dataValue},toDataFormat:function(a,
b){var c,d,e;if(b){c=b.context;d=b.filter;e=b.enterMode}!c&&c!==null&&(c=this.editor.editable().getName());return this.editor.fire("toDataFormat",{dataValue:a,filter:d||this.editor.filter,context:c,enterMode:e||this.editor.enterMode}).dataValue}};var i=/(?:&nbsp;|\xa0)$/,A="{cke_protected}",u=CKEDITOR.dtd,o=["caption","colgroup","col","thead","tfoot","tbody"],l=CKEDITOR.tools.extend({},u.$blockLimit,u.$block),p={elements:{input:k,textarea:k}},r={attributeNames:[[/^on/,"data-cke-pa-on"],[/^data-cke-expando$/,
""]]},n={elements:{embed:function(a){var b=a.parent;if(b&&b.name=="object"){var c=b.attributes.width,b=b.attributes.height;if(c)a.attributes.width=c;if(b)a.attributes.height=b}},a:function(a){if(!a.children.length&&!a.attributes.name&&!a.attributes["data-cke-saved-name"])return false}}},P={elementNames:[[/^cke:/,""],[/^\?xml:namespace$/,""]],attributeNames:[[/^data-cke-(saved|pa)-/,""],[/^data-cke-.*/,""],["hidefocus",""]],elements:{$:function(a){var b=a.attributes;if(b){if(b["data-cke-temp"])return false;
for(var c=["name","href","src"],d,e=0;e<c.length;e++){d="data-cke-saved-"+c[e];d in b&&delete b[c[e]]}}return a},table:function(a){a.children.slice(0).sort(function(a,b){var c,d;if(a.type==CKEDITOR.NODE_ELEMENT&&b.type==a.type){c=CKEDITOR.tools.indexOf(o,a.name);d=CKEDITOR.tools.indexOf(o,b.name)}if(!(c>-1&&d>-1&&c!=d)){c=a.parent?a.getIndex():-1;d=b.parent?b.getIndex():-1}return c>d?1:-1})},param:function(a){a.children=[];a.isEmpty=true;return a},span:function(a){a.attributes["class"]=="Apple-style-span"&&
delete a.name},html:function(a){delete a.attributes.contenteditable;delete a.attributes["class"]},body:function(a){delete a.attributes.spellcheck;delete a.attributes.contenteditable},style:function(a){var b=a.children[0];if(b&&b.value)b.value=CKEDITOR.tools.trim(b.value);if(!a.attributes.type)a.attributes.type="text/css"},title:function(a){var b=a.children[0];!b&&h(a,b=new CKEDITOR.htmlParser.text);b.value=a.attributes["data-cke-title"]||""},input:j,textarea:j},attributes:{"class":function(a){return CKEDITOR.tools.ltrim(a.replace(/(?:^|\s+)cke_[^\s]*/g,
""))||false}}};if(CKEDITOR.env.ie)P.attributes.style=function(a){return a.replace(/(^|;)([^\:]+)/g,function(a){return a.toLowerCase()})};var C=/<(a|area|img|input|source)\b([^>]*)>/gi,L=/([\w-]+)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi,F=/^(href|src|name)$/i,K=/(?:<style(?=[ >])[^>]*>[\s\S]*?<\/style>)|(?:<(:?link|meta|base)[^>]*>)/gi,I=/(<textarea(?=[ >])[^>]*>)([\s\S]*?)(?:<\/textarea>)/gi,v=/<cke:encoded>([^<]*)<\/cke:encoded>/gi,G=/(<\/?)((?:object|embed|param|html|body|head|title)[^>]*>)/gi,
z=/(<\/?)cke:((?:html|body|head|title)[^>]*>)/gi,B=/<cke:(param|embed)([^>]*?)\/?>(?!\s*<\/cke:\1)/gi})();"use strict";
CKEDITOR.htmlParser.element=function(a,f){this.name=a;this.attributes=f||{};this.children=[];var b=a||"",c=b.match(/^cke:(.*)/);c&&(b=c[1]);b=!(!CKEDITOR.dtd.$nonBodyContent[b]&&!CKEDITOR.dtd.$block[b]&&!CKEDITOR.dtd.$listItem[b]&&!CKEDITOR.dtd.$tableContent[b]&&!(CKEDITOR.dtd.$nonEditable[b]||b=="br"));this.isEmpty=!!CKEDITOR.dtd.$empty[a];this.isUnknown=!CKEDITOR.dtd[a];this._={isBlockLike:b,hasInlineStarted:this.isEmpty||!b}};
CKEDITOR.htmlParser.cssStyle=function(a){var f={};((a instanceof CKEDITOR.htmlParser.element?a.attributes.style:a)||"").replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(a,c,e){c=="font-family"&&(e=e.replace(/["']/g,""));f[c.toLowerCase()]=e});return{rules:f,populate:function(a){var c=this.toString();if(c)a instanceof CKEDITOR.dom.element?a.setAttribute("style",c):a instanceof CKEDITOR.htmlParser.element?a.attributes.style=c:a.style=c},toString:function(){var a=[],c;
for(c in f)f[c]&&a.push(c,":",f[c],";");return a.join("")}}};
(function(){function a(a){return function(b){return b.type==CKEDITOR.NODE_ELEMENT&&(typeof a=="string"?b.name==a:b.name in a)}}var f=function(a,b){a=a[0];b=b[0];return a<b?-1:a>b?1:0},b=CKEDITOR.htmlParser.fragment.prototype;CKEDITOR.htmlParser.element.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_ELEMENT,add:b.add,clone:function(){return new CKEDITOR.htmlParser.element(this.name,this.attributes)},filter:function(a,b){var d=this,f,k,b=d.getFilterContext(b);if(b.off)return true;
if(!d.parent)a.onRoot(b,d);for(;;){f=d.name;if(!(k=a.onElementName(b,f))){this.remove();return false}d.name=k;if(!(d=a.onElement(b,d))){this.remove();return false}if(d!==this){this.replaceWith(d);return false}if(d.name==f)break;if(d.type!=CKEDITOR.NODE_ELEMENT){this.replaceWith(d);return false}if(!d.name){this.replaceWithChildren();return false}}f=d.attributes;var j,g;for(j in f){g=j;for(k=f[j];;)if(g=a.onAttributeName(b,j))if(g!=j){delete f[j];j=g}else break;else{delete f[j];break}g&&((k=a.onAttribute(b,
d,g,k))===false?delete f[g]:f[g]=k)}d.isEmpty||this.filterChildren(a,false,b);return true},filterChildren:b.filterChildren,writeHtml:function(a,b){b&&this.filter(b);var d=this.name,h=[],k=this.attributes,j,g;a.openTag(d,k);for(j in k)h.push([j,k[j]]);a.sortAttributes&&h.sort(f);j=0;for(g=h.length;j<g;j++){k=h[j];a.attribute(k[0],k[1])}a.openTagClose(d,this.isEmpty);this.writeChildrenHtml(a);this.isEmpty||a.closeTag(d)},writeChildrenHtml:b.writeChildrenHtml,replaceWithChildren:function(){for(var a=
this.children,b=a.length;b;)a[--b].insertAfter(this);this.remove()},forEach:b.forEach,getFirst:function(b){if(!b)return this.children.length?this.children[0]:null;typeof b!="function"&&(b=a(b));for(var e=0,d=this.children.length;e<d;++e)if(b(this.children[e]))return this.children[e];return null},getHtml:function(){var a=new CKEDITOR.htmlParser.basicWriter;this.writeChildrenHtml(a);return a.getHtml()},setHtml:function(a){for(var a=this.children=CKEDITOR.htmlParser.fragment.fromHtml(a).children,b=0,
d=a.length;b<d;++b)a[b].parent=this},getOuterHtml:function(){var a=new CKEDITOR.htmlParser.basicWriter;this.writeHtml(a);return a.getHtml()},split:function(a){for(var b=this.children.splice(a,this.children.length-a),d=this.clone(),f=0;f<b.length;++f)b[f].parent=d;d.children=b;if(b[0])b[0].previous=null;if(a>0)this.children[a-1].next=null;this.parent.add(d,this.getIndex()+1);return d},addClass:function(a){if(!this.hasClass(a)){var b=this.attributes["class"]||"";this.attributes["class"]=b+(b?" ":"")+
a}},removeClass:function(a){var b=this.attributes["class"];if(b)(b=CKEDITOR.tools.trim(b.replace(RegExp("(?:\\s+|^)"+a+"(?:\\s+|$)")," ")))?this.attributes["class"]=b:delete this.attributes["class"]},hasClass:function(a){var b=this.attributes["class"];return!b?false:RegExp("(?:^|\\s)"+a+"(?=\\s|$)").test(b)},getFilterContext:function(a){var b=[];a||(a={off:false,nonEditable:false,nestedEditable:false});!a.off&&this.attributes["data-cke-processor"]=="off"&&b.push("off",true);!a.nonEditable&&this.attributes.contenteditable==
"false"?b.push("nonEditable",true):a.nonEditable&&(!a.nestedEditable&&this.attributes.contenteditable=="true")&&b.push("nestedEditable",true);if(b.length)for(var a=CKEDITOR.tools.copy(a),d=0;d<b.length;d=d+2)a[b[d]]=b[d+1];return a}},true)})();
(function(){var a={},f=/{([^}]+)}/g,b=/([\\'])/g,c=/\n/g,e=/\r/g;CKEDITOR.template=function(d){if(a[d])this.output=a[d];else{var h=d.replace(b,"\\$1").replace(c,"\\n").replace(e,"\\r").replace(f,function(a,b){return"',data['"+b+"']==undefined?'{"+b+"}':data['"+b+"'],'"});this.output=a[d]=Function("data","buffer","return buffer?buffer.push('"+h+"'):['"+h+"'].join('');")}}})();delete CKEDITOR.loadFullCore;CKEDITOR.instances={};CKEDITOR.document=new CKEDITOR.dom.document(document);
CKEDITOR.add=function(a){CKEDITOR.instances[a.name]=a;a.on("focus",function(){if(CKEDITOR.currentInstance!=a){CKEDITOR.currentInstance=a;CKEDITOR.fire("currentInstance")}});a.on("blur",function(){if(CKEDITOR.currentInstance==a){CKEDITOR.currentInstance=null;CKEDITOR.fire("currentInstance")}});CKEDITOR.fire("instance",null,a)};CKEDITOR.remove=function(a){delete CKEDITOR.instances[a.name]};
(function(){var a={};CKEDITOR.addTemplate=function(f,b){var c=a[f];if(c)return c;c={name:f,source:b};CKEDITOR.fire("template",c);return a[f]=new CKEDITOR.template(c.source)};CKEDITOR.getTemplate=function(f){return a[f]}})();(function(){var a=[];CKEDITOR.addCss=function(f){a.push(f)};CKEDITOR.getCss=function(){return a.join("\n")}})();CKEDITOR.on("instanceDestroyed",function(){CKEDITOR.tools.isEmpty(this.instances)&&CKEDITOR.fire("reset")});CKEDITOR.TRISTATE_ON=1;CKEDITOR.TRISTATE_OFF=2;
CKEDITOR.TRISTATE_DISABLED=0;
(function(){CKEDITOR.inline=function(a,f){if(!CKEDITOR.env.isCompatible)return null;a=CKEDITOR.dom.element.get(a);if(a.getEditor())throw'The editor instance "'+a.getEditor().name+'" is already attached to the provided element.';var b=new CKEDITOR.editor(f,a,CKEDITOR.ELEMENT_MODE_INLINE),c=a.is("textarea")?a:null;if(c){b.setData(c.getValue(),null,true);a=CKEDITOR.dom.element.createFromHtml('<div contenteditable="'+!!b.readOnly+'" class="cke_textarea_inline">'+c.getValue()+"</div>",CKEDITOR.document);
a.insertAfter(c);c.hide();c.$.form&&b._attachToForm()}else b.setData(a.getHtml(),null,true);b.on("loaded",function(){b.fire("uiReady");b.editable(a);b.container=a;b.setData(b.getData(1));b.resetDirty();b.fire("contentDom");b.mode="wysiwyg";b.fire("mode");b.status="ready";b.fireOnce("instanceReady");CKEDITOR.fire("instanceReady",null,b)},null,null,1E4);b.on("destroy",function(){if(c){b.container.clearCustomData();b.container.remove();c.show()}b.element.clearCustomData();delete b.element});return b};
CKEDITOR.inlineAll=function(){var a,f,b;for(b in CKEDITOR.dtd.$editable)for(var c=CKEDITOR.document.getElementsByTag(b),e=0,d=c.count();e<d;e++){a=c.getItem(e);if(a.getAttribute("contenteditable")=="true"){f={element:a,config:{}};CKEDITOR.fire("inline",f)!==false&&CKEDITOR.inline(a,f.config)}}};CKEDITOR.domReady(function(){!CKEDITOR.disableAutoInline&&CKEDITOR.inlineAll()})})();CKEDITOR.replaceClass="ckeditor";
(function(){function a(a,e,d,h){if(!CKEDITOR.env.isCompatible)return null;a=CKEDITOR.dom.element.get(a);if(a.getEditor())throw'The editor instance "'+a.getEditor().name+'" is already attached to the provided element.';var k=new CKEDITOR.editor(e,a,h);if(h==CKEDITOR.ELEMENT_MODE_REPLACE){a.setStyle("visibility","hidden");k._.required=a.hasAttribute("required");a.removeAttribute("required")}d&&k.setData(d,null,true);k.on("loaded",function(){b(k);h==CKEDITOR.ELEMENT_MODE_REPLACE&&(k.config.autoUpdateElement&&
a.$.form)&&k._attachToForm();k.setMode(k.config.startupMode,function(){k.resetDirty();k.status="ready";k.fireOnce("instanceReady");CKEDITOR.fire("instanceReady",null,k)})});k.on("destroy",f);return k}function f(){var a=this.container,b=this.element;if(a){a.clearCustomData();a.remove()}if(b){b.clearCustomData();if(this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE){b.show();this._.required&&b.setAttribute("required","required")}delete this.element}}function b(a){var b=a.name,d=a.element,f=a.elementMode,
k=a.fire("uiSpace",{space:"top",html:""}).html,j=a.fire("uiSpace",{space:"bottom",html:""}).html,g=new CKEDITOR.template('<{outerEl} id="cke_{name}" class="{id} cke cke_reset cke_chrome cke_editor_{name} cke_{langDir} '+CKEDITOR.env.cssClass+'"  dir="{langDir}" lang="{langCode}" role="application"'+(a.title?' aria-labelledby="cke_{name}_arialbl"':"")+">"+(a.title?'<span id="cke_{name}_arialbl" class="cke_voice_label">{voiceLabel}</span>':"")+'<{outerEl} class="cke_inner cke_reset" role="presentation">{topHtml}<{outerEl} id="{contentId}" class="cke_contents cke_reset" role="presentation"></{outerEl}>{bottomHtml}</{outerEl}></{outerEl}>'),
b=CKEDITOR.dom.element.createFromHtml(g.output({id:a.id,name:b,langDir:a.lang.dir,langCode:a.langCode,voiceLabel:a.title,topHtml:k?'<span id="'+a.ui.spaceId("top")+'" class="cke_top cke_reset_all" role="presentation" style="height:auto">'+k+"</span>":"",contentId:a.ui.spaceId("contents"),bottomHtml:j?'<span id="'+a.ui.spaceId("bottom")+'" class="cke_bottom cke_reset_all" role="presentation">'+j+"</span>":"",outerEl:CKEDITOR.env.ie?"span":"div"}));if(f==CKEDITOR.ELEMENT_MODE_REPLACE){d.hide();b.insertAfter(d)}else d.append(b);
a.container=b;k&&a.ui.space("top").unselectable();j&&a.ui.space("bottom").unselectable();d=a.config.width;f=a.config.height;d&&b.setStyle("width",CKEDITOR.tools.cssLength(d));f&&a.ui.space("contents").setStyle("height",CKEDITOR.tools.cssLength(f));b.disableContextMenu();CKEDITOR.env.webkit&&b.on("focus",function(){a.focus()});a.fireOnce("uiReady")}CKEDITOR.replace=function(b,e){return a(b,e,null,CKEDITOR.ELEMENT_MODE_REPLACE)};CKEDITOR.appendTo=function(b,e,d){return a(b,e,d,CKEDITOR.ELEMENT_MODE_APPENDTO)};
CKEDITOR.replaceAll=function(){for(var a=document.getElementsByTagName("textarea"),b=0;b<a.length;b++){var d=null,f=a[b];if(f.name||f.id){if(typeof arguments[0]=="string"){if(!RegExp("(?:^|\\s)"+arguments[0]+"(?:$|\\s)").test(f.className))continue}else if(typeof arguments[0]=="function"){d={};if(arguments[0](f,d)===false)continue}this.replace(f,d)}}};CKEDITOR.editor.prototype.addMode=function(a,b){(this._.modes||(this._.modes={}))[a]=b};CKEDITOR.editor.prototype.setMode=function(a,b){var d=this,f=
this._.modes;if(!(a==d.mode||!f||!f[a])){d.fire("beforeSetMode",a);if(d.mode){var k=d.checkDirty(),f=d._.previousModeData,j,g=0;d.fire("beforeModeUnload");d.editable(0);d._.previousMode=d.mode;d._.previousModeData=j=d.getData(1);if(d.mode=="source"&&f==j){d.fire("lockSnapshot",{forceUpdate:true});g=1}d.ui.space("contents").setHtml("");d.mode=""}else d._.previousModeData=d.getData(1);this._.modes[a](function(){d.mode=a;k!==void 0&&!k&&d.resetDirty();g?d.fire("unlockSnapshot"):a=="wysiwyg"&&d.fire("saveSnapshot");
setTimeout(function(){d.fire("mode");b&&b.call(d)},0)})}};CKEDITOR.editor.prototype.resize=function(a,b,d,f){var k=this.container,j=this.ui.space("contents"),g=CKEDITOR.env.webkit&&this.document&&this.document.getWindow().$.frameElement,f=f?this.container.getFirst(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasClass("cke_inner")}):k;f.setSize("width",a,true);g&&(g.style.width="1%");j.setStyle("height",Math.max(b-(d?0:(f.$.offsetHeight||0)-(j.$.clientHeight||0)),0)+"px");g&&(g.style.width=
"100%");this.fire("resize")};CKEDITOR.editor.prototype.getResizable=function(a){return a?this.ui.space("contents"):this.container};CKEDITOR.domReady(function(){CKEDITOR.replaceClass&&CKEDITOR.replaceAll(CKEDITOR.replaceClass)})})();CKEDITOR.config.startupMode="wysiwyg";
(function(){function a(a){var b=a.editor,d=a.data.path,e=d.blockLimit,l=a.data.selection,p=l.getRanges()[0],r;if(CKEDITOR.env.gecko||CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller)if(l=f(l,d)){l.appendBogus();r=CKEDITOR.env.ie}if(h(b,d.block,e)&&p.collapsed&&!p.getCommonAncestor().isReadOnly()){d=p.clone();d.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS);e=new CKEDITOR.dom.walker(d);e.guard=function(a){return!c(a)||a.type==CKEDITOR.NODE_COMMENT||a.isReadOnly()};if(!e.checkForward()||d.checkStartOfBlock()&&
d.checkEndOfBlock()){b=p.fixBlock(true,b.activeEnterMode==CKEDITOR.ENTER_DIV?"div":"p");if(!CKEDITOR.env.needsBrFiller)(b=b.getFirst(c))&&(b.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(b.getText()).match(/^(?:&nbsp;|\xa0)$/))&&b.remove();r=1;a.cancel()}}r&&p.select()}function f(a,b){if(a.isFake)return 0;var d=b.block||b.blockLimit,e=d&&d.getLast(c);if(d&&d.isBlockBoundary()&&(!e||!(e.type==CKEDITOR.NODE_ELEMENT&&e.isBlockBoundary()))&&!d.is("pre")&&!d.getBogus())return d}function b(a){var b=a.data.getTarget();
if(b.is("input")){b=b.getAttribute("type");(b=="submit"||b=="reset")&&a.data.preventDefault()}}function c(a){return s(a)&&w(a)}function e(a,b){return function(c){var d=CKEDITOR.dom.element.get(c.data.$.toElement||c.data.$.fromElement||c.data.$.relatedTarget);(!d||!b.equals(d)&&!b.contains(d))&&a.call(this,c)}}function d(a){function b(a){return function(b,e){e&&(b.type==CKEDITOR.NODE_ELEMENT&&b.is(f))&&(d=b);if(!e&&c(b)&&(!a||!m(b)))return false}}var d,e=a.getRanges()[0],a=a.root,f={table:1,ul:1,ol:1,
dl:1};if(e.startPath().contains(f)){var p=e.clone();p.collapse(1);p.setStartAt(a,CKEDITOR.POSITION_AFTER_START);a=new CKEDITOR.dom.walker(p);a.guard=b();a.checkBackward();if(d){p=e.clone();p.collapse();p.setEndAt(d,CKEDITOR.POSITION_AFTER_END);a=new CKEDITOR.dom.walker(p);a.guard=b(true);d=false;a.checkForward();return d}}return null}function h(a,b,c){return a.config.autoParagraph!==false&&a.activeEnterMode!=CKEDITOR.ENTER_BR&&a.editable().equals(c)&&!b||b&&b.getAttribute("contenteditable")=="true"}
function k(a){a.editor.focus();a.editor.fire("saveSnapshot")}function j(a){var b=a.editor;b.getSelection().scrollIntoView();setTimeout(function(){b.fire("saveSnapshot")},0)}function g(a,b,c){for(var d=a.getCommonAncestor(b),b=a=c?b:a;(a=a.getParent())&&!d.equals(a)&&a.getChildCount()==1;)b=a;b.remove()}CKEDITOR.editable=CKEDITOR.tools.createClass({base:CKEDITOR.dom.element,$:function(a,b){this.base(b.$||b);this.editor=a;this.status="unloaded";this.hasFocus=false;this.setup()},proto:{focus:function(){var a;
if(CKEDITOR.env.webkit&&!this.hasFocus){a=this.editor._.previousActive||this.getDocument().getActive();if(this.contains(a)){a.focus();return}}try{this.$[CKEDITOR.env.ie&&this.getDocument().equals(CKEDITOR.document)?"setActive":"focus"]()}catch(b){if(!CKEDITOR.env.ie)throw b;}if(CKEDITOR.env.safari&&!this.isInline()){a=CKEDITOR.document.getActive();a.equals(this.getWindow().getFrame())||this.getWindow().focus()}},on:function(a,b){var c=Array.prototype.slice.call(arguments,0);if(CKEDITOR.env.ie&&/^focus|blur$/.exec(a)){a=
a=="focus"?"focusin":"focusout";b=e(b,this);c[0]=a;c[1]=b}return CKEDITOR.dom.element.prototype.on.apply(this,c)},attachListener:function(a){!this._.listeners&&(this._.listeners=[]);var b=Array.prototype.slice.call(arguments,1),b=a.on.apply(a,b);this._.listeners.push(b);return b},clearListeners:function(){var a=this._.listeners;try{for(;a.length;)a.pop().removeListener()}catch(b){}},restoreAttrs:function(){var a=this._.attrChanges,b,c;for(c in a)if(a.hasOwnProperty(c)){b=a[c];b!==null?this.setAttribute(c,
b):this.removeAttribute(c)}},attachClass:function(a){var b=this.getCustomData("classes");if(!this.hasClass(a)){!b&&(b=[]);b.push(a);this.setCustomData("classes",b);this.addClass(a)}},changeAttr:function(a,b){var c=this.getAttribute(a);if(b!==c){!this._.attrChanges&&(this._.attrChanges={});a in this._.attrChanges||(this._.attrChanges[a]=c);this.setAttribute(a,b)}},insertHtml:function(a,b){k(this);q(this,b||"html",a)},insertText:function(a){k(this);var b=this.editor,c=b.getSelection().getStartElement().hasAscendant("pre",
true)?CKEDITOR.ENTER_BR:b.activeEnterMode,b=c==CKEDITOR.ENTER_BR,d=CKEDITOR.tools,a=d.htmlEncode(a.replace(/\r\n/g,"\n")),a=a.replace(/\t/g,"&nbsp;&nbsp; &nbsp;"),c=c==CKEDITOR.ENTER_P?"p":"div";if(!b){var e=/\n{2}/g;if(e.test(a))var f="<"+c+">",r="</"+c+">",a=f+a.replace(e,function(){return r+f})+r}a=a.replace(/\n/g,"<br>");b||(a=a.replace(RegExp("<br>(?=</"+c+">)"),function(a){return d.repeat(a,2)}));a=a.replace(/^ | $/g,"&nbsp;");a=a.replace(/(>|\s) /g,function(a,b){return b+"&nbsp;"}).replace(/ (?=<)/g,
"&nbsp;");q(this,"text",a)},insertElement:function(a,b){b?this.insertElementIntoRange(a,b):this.insertElementIntoSelection(a)},insertElementIntoRange:function(a,b){var c=this.editor,d=c.config.enterMode,e=a.getName(),f=CKEDITOR.dtd.$block[e];if(b.checkReadOnly())return false;b.deleteContents(1);b.startContainer.type==CKEDITOR.NODE_ELEMENT&&b.startContainer.is({tr:1,table:1,tbody:1,thead:1,tfoot:1})&&t(b);var r,n;if(f)for(;(r=b.getCommonAncestor(0,1))&&(n=CKEDITOR.dtd[r.getName()])&&(!n||!n[e]);)if(r.getName()in
CKEDITOR.dtd.span)b.splitElement(r);else if(b.checkStartOfBlock()&&b.checkEndOfBlock()){b.setStartBefore(r);b.collapse(true);r.remove()}else b.splitBlock(d==CKEDITOR.ENTER_DIV?"div":"p",c.editable());b.insertNode(a);return true},insertElementIntoSelection:function(a){k(this);var b=this.editor,d=b.activeEnterMode,b=b.getSelection(),e=b.getRanges()[0],f=a.getName(),f=CKEDITOR.dtd.$block[f];if(this.insertElementIntoRange(a,e)){e.moveToPosition(a,CKEDITOR.POSITION_AFTER_END);if(f)if((f=a.getNext(function(a){return c(a)&&
!m(a)}))&&f.type==CKEDITOR.NODE_ELEMENT&&f.is(CKEDITOR.dtd.$block))f.getDtd()["#"]?e.moveToElementEditStart(f):e.moveToElementEditEnd(a);else if(!f&&d!=CKEDITOR.ENTER_BR){f=e.fixBlock(true,d==CKEDITOR.ENTER_DIV?"div":"p");e.moveToElementEditStart(f)}}b.selectRanges([e]);j(this)},setData:function(a,b){b||(a=this.editor.dataProcessor.toHtml(a));this.setHtml(a);this.fixInitialSelection();if(this.status=="unloaded")this.status="ready";this.editor.fire("dataReady")},getData:function(a){var b=this.getHtml();
a||(b=this.editor.dataProcessor.toDataFormat(b));return b},setReadOnly:function(a){this.setAttribute("contenteditable",!a)},detach:function(){this.removeClass("cke_editable");this.status="detached";var a=this.editor;this._.detach();delete a.document;delete a.window},isInline:function(){return this.getDocument().equals(CKEDITOR.document)},fixInitialSelection:function(){function a(){var b=c.getDocument().$,d=b.getSelection(),e;if(d.anchorNode&&d.anchorNode==c.$)e=true;else if(CKEDITOR.env.webkit){var f=
c.getDocument().getActive();f&&(f.equals(c)&&!d.anchorNode)&&(e=true)}if(e){e=new CKEDITOR.dom.range(c);e.moveToElementEditStart(c);b=b.createRange();b.setStart(e.startContainer.$,e.startOffset);b.collapse(true);d.removeAllRanges();d.addRange(b)}}function b(){var a=c.getDocument().$,d=a.selection,e=c.getDocument().getActive();if(d.type=="None"&&e.equals(c)){d=new CKEDITOR.dom.range(c);a=a.body.createTextRange();d.moveToElementEditStart(c);d=d.startContainer;d.type!=CKEDITOR.NODE_ELEMENT&&(d=d.getParent());
a.moveToElementText(d.$);a.collapse(true);a.select()}}var c=this;if(CKEDITOR.env.ie&&(CKEDITOR.env.version<9||CKEDITOR.env.quirks)){if(this.hasFocus){this.focus();b()}}else if(this.hasFocus){this.focus();a()}else this.once("focus",function(){a()},null,null,-999)},setup:function(){var a=this.editor;this.attachListener(a,"beforeGetData",function(){var b=this.getData();this.is("textarea")||a.config.ignoreEmptyParagraph!==false&&(b=b.replace(y,function(a,b){return b}));a.setData(b,null,1)},this);this.attachListener(a,
"getSnapshot",function(a){a.data=this.getData(1)},this);this.attachListener(a,"afterSetData",function(){this.setData(a.getData(1))},this);this.attachListener(a,"loadSnapshot",function(a){this.setData(a.data,1)},this);this.attachListener(a,"beforeFocus",function(){var b=a.getSelection();(b=b&&b.getNative())&&b.type=="Control"||this.focus()},this);this.attachListener(a,"insertHtml",function(a){this.insertHtml(a.data.dataValue,a.data.mode)},this);this.attachListener(a,"insertElement",function(a){this.insertElement(a.data)},
this);this.attachListener(a,"insertText",function(a){this.insertText(a.data)},this);this.setReadOnly(a.readOnly);this.attachClass("cke_editable");this.attachClass(a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?"cke_editable_inline":a.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE||a.elementMode==CKEDITOR.ELEMENT_MODE_APPENDTO?"cke_editable_themed":"");this.attachClass("cke_contents_"+a.config.contentsLangDirection);a.keystrokeHandler.blockedKeystrokes[8]=+a.readOnly;a.keystrokeHandler.attach(this);this.on("blur",
function(){this.hasFocus=false},null,null,-1);this.on("focus",function(){this.hasFocus=true},null,null,-1);a.focusManager.add(this);if(this.equals(CKEDITOR.document.getActive())){this.hasFocus=true;a.once("contentDom",function(){a.focusManager.focus(this)},this)}this.isInline()&&this.changeAttr("tabindex",a.tabIndex);if(!this.is("textarea")){a.document=this.getDocument();a.window=this.getWindow();var e=a.document;this.changeAttr("spellcheck",!a.config.disableNativeSpellChecker);var f=a.config.contentsLangDirection;
this.getDirection(1)!=f&&this.changeAttr("dir",f);var h=CKEDITOR.getCss();if(h){f=e.getHead();if(!f.getCustomData("stylesheet")){h=e.appendStyleText(h);h=new CKEDITOR.dom.element(h.ownerNode||h.owningElement);f.setCustomData("stylesheet",h);h.data("cke-temp",1)}}f=e.getCustomData("stylesheet_ref")||0;e.setCustomData("stylesheet_ref",f+1);this.setCustomData("cke_includeReadonly",!a.config.disableReadonlyStyling);this.attachListener(this,"click",function(a){var a=a.data,b=(new CKEDITOR.dom.elementPath(a.getTarget(),
this)).contains("a");b&&(a.$.button!=2&&b.isReadOnly())&&a.preventDefault()});var l={8:1,46:1};this.attachListener(a,"key",function(b){if(a.readOnly)return true;var c=b.data.domEvent.getKey(),e;if(c in l){var b=a.getSelection(),f,h=b.getRanges()[0],g=h.startPath(),o,m,j,c=c==8;if(CKEDITOR.env.ie&&CKEDITOR.env.version<11&&(f=b.getSelectedElement())||(f=d(b))){a.fire("saveSnapshot");h.moveToPosition(f,CKEDITOR.POSITION_BEFORE_START);f.remove();h.select();a.fire("saveSnapshot");e=1}else if(h.collapsed)if((o=
g.block)&&(j=o[c?"getPrevious":"getNext"](s))&&j.type==CKEDITOR.NODE_ELEMENT&&j.is("table")&&h[c?"checkStartOfBlock":"checkEndOfBlock"]()){a.fire("saveSnapshot");h[c?"checkEndOfBlock":"checkStartOfBlock"]()&&o.remove();h["moveToElementEdit"+(c?"End":"Start")](j);h.select();a.fire("saveSnapshot");e=1}else if(g.blockLimit&&g.blockLimit.is("td")&&(m=g.blockLimit.getAscendant("table"))&&h.checkBoundaryOfElement(m,c?CKEDITOR.START:CKEDITOR.END)&&(j=m[c?"getPrevious":"getNext"](s))){a.fire("saveSnapshot");
h["moveToElementEdit"+(c?"End":"Start")](j);h.checkStartOfBlock()&&h.checkEndOfBlock()?j.remove():h.select();a.fire("saveSnapshot");e=1}else if((m=g.contains(["td","th","caption"]))&&h.checkBoundaryOfElement(m,c?CKEDITOR.START:CKEDITOR.END))e=1}return!e});a.blockless&&(CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller)&&this.attachListener(this,"keyup",function(b){if(b.data.getKeystroke()in l&&!this.getFirst(c)){this.appendBogus();b=a.createRange();b.moveToPosition(this,CKEDITOR.POSITION_AFTER_START);b.select()}});
this.attachListener(this,"dblclick",function(b){if(a.readOnly)return false;b={element:b.data.getTarget()};a.fire("doubleclick",b)});CKEDITOR.env.ie&&this.attachListener(this,"click",b);CKEDITOR.env.ie||this.attachListener(this,"mousedown",function(b){var c=b.data.getTarget();if(c.is("img","hr","input","textarea","select")&&!c.isReadOnly()){a.getSelection().selectElement(c);c.is("input","textarea","select")&&b.data.preventDefault()}});CKEDITOR.env.gecko&&this.attachListener(this,"mouseup",function(b){if(b.data.$.button==
2){b=b.data.getTarget();if(!b.getOuterHtml().replace(y,"")){var c=a.createRange();c.moveToElementEditStart(b);c.select(true)}}});if(CKEDITOR.env.webkit){this.attachListener(this,"click",function(a){a.data.getTarget().is("input","select")&&a.data.preventDefault()});this.attachListener(this,"mouseup",function(a){a.data.getTarget().is("input","textarea")&&a.data.preventDefault()})}CKEDITOR.env.webkit&&this.attachListener(a,"key",function(b){b=b.data.domEvent.getKey();if(b in l){var c=b==8,d=a.getSelection().getRanges()[0],
b=d.startPath();if(d.collapsed){var e;a:{var f=b.block;if(f)if(d[c?"checkStartOfBlock":"checkEndOfBlock"]())if(!d.moveToClosestEditablePosition(f,!c)||!d.collapsed)e=false;else{if(d.startContainer.type==CKEDITOR.NODE_ELEMENT){var h=d.startContainer.getChild(d.startOffset-(c?1:0));if(h&&h.type==CKEDITOR.NODE_ELEMENT&&h.is("hr")){a.fire("saveSnapshot");h.remove();e=true;break a}}if((d=d.startPath().block)&&(!d||!d.contains(f))){a.fire("saveSnapshot");var j;(j=(c?d:f).getBogus())&&j.remove();e=a.getSelection();
j=e.createBookmarks();(c?f:d).moveChildren(c?d:f,false);b.lastElement.mergeSiblings();g(f,d,!c);e.selectBookmarks(j);e=true}}else e=false;else e=false}if(!e)return}else{c=d;e=b.block;j=c.endPath().block;if(!e||!j||e.equals(j))b=false;else{a.fire("saveSnapshot");(f=e.getBogus())&&f.remove();c.deleteContents();if(j.getParent()){j.moveChildren(e,false);b.lastElement.mergeSiblings();g(e,j,true)}c=a.getSelection().getRanges()[0];c.collapse(1);c.select();b=true}if(!b)return}a.getSelection().scrollIntoView();
a.fire("saveSnapshot");return false}},this,null,100)}}},_:{detach:function(){this.editor.setData(this.editor.getData(),0,1);this.clearListeners();this.restoreAttrs();var a;if(a=this.removeCustomData("classes"))for(;a.length;)this.removeClass(a.pop());if(!this.is("textarea")){a=this.getDocument();var b=a.getHead();if(b.getCustomData("stylesheet")){var c=a.getCustomData("stylesheet_ref");if(--c)a.setCustomData("stylesheet_ref",c);else{a.removeCustomData("stylesheet_ref");b.removeCustomData("stylesheet").remove()}}}this.editor.fire("contentDomUnload");
delete this.editor}}});CKEDITOR.editor.prototype.editable=function(a){var b=this._.editable;if(b&&a)return 0;if(arguments.length)b=this._.editable=a?a instanceof CKEDITOR.editable?a:new CKEDITOR.editable(this,a):(b&&b.detach(),null);return b};var m=CKEDITOR.dom.walker.bogus(),y=/(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi,s=CKEDITOR.dom.walker.whitespaces(true),w=CKEDITOR.dom.walker.bookmark(false,true);CKEDITOR.on("instanceLoaded",
function(b){var c=b.editor;c.on("insertElement",function(a){a=a.data;if(a.type==CKEDITOR.NODE_ELEMENT&&(a.is("input")||a.is("textarea"))){a.getAttribute("contentEditable")!="false"&&a.data("cke-editable",a.hasAttribute("contenteditable")?"true":"1");a.setAttribute("contentEditable",false)}});c.on("selectionChange",function(b){if(!c.readOnly){var d=c.getSelection();if(d&&!d.isLocked){d=c.checkDirty();c.fire("lockSnapshot");a(b);c.fire("unlockSnapshot");!d&&c.resetDirty()}}})});CKEDITOR.on("instanceCreated",
function(a){var b=a.editor;b.on("mode",function(){var a=b.editable();if(a&&a.isInline()){var c=b.title;a.changeAttr("role","textbox");a.changeAttr("aria-label",c);c&&a.changeAttr("title",c);var d=b.fire("ariaEditorHelpLabel",{}).label;if(d)if(c=this.ui.space(this.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?"top":"contents")){var e=CKEDITOR.tools.getNextId(),d=CKEDITOR.dom.element.createFromHtml('<span id="'+e+'" class="cke_voice_label">'+d+"</span>");c.append(d);a.changeAttr("aria-describedby",e)}}})});
CKEDITOR.addCss(".cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}");var q=function(){function a(b){return b.type==CKEDITOR.NODE_ELEMENT}function b(c,d){var e,f,l,p,h=[],g=d.range.startContainer;e=d.range.startPath();for(var g=r[g.getName()],n=0,j=c.getChildren(),m=j.count(),o=-1,C=-1,k=0,q=e.contains(r.$list);n<m;++n){e=j.getItem(n);if(a(e)){l=e.getName();if(q&&l in CKEDITOR.dtd.$list)h=h.concat(b(e,d));else{p=!!g[l];if(l=="br"&&e.data("cke-eol")&&
(!n||n==m-1)){k=(f=n?h[n-1].node:j.getItem(n+1))&&(!a(f)||!f.is("br"));f=f&&a(f)&&r.$block[f.getName()]}o==-1&&!p&&(o=n);p||(C=n);h.push({isElement:1,isLineBreak:k,isBlock:e.isBlockBoundary(),hasBlockSibling:f,node:e,name:l,allowed:p});f=k=0}}else h.push({isElement:0,node:e,allowed:1})}if(o>-1)h[o].firstNotAllowed=1;if(C>-1)h[C].lastNotAllowed=1;return h}function d(b,c){var e=[],f=b.getChildren(),l=f.count(),p,h=0,g=r[c],n=!b.is(r.$inline)||b.is("br");for(n&&e.push(" ");h<l;h++){p=f.getItem(h);a(p)&&
!p.is(g)?e=e.concat(d(p,c)):e.push(p)}n&&e.push(" ");return e}function e(b){return b&&a(b)&&(b.is(r.$removeEmpty)||b.is("a")&&!b.isBlockBoundary())}function f(b,c,d,e){var p=b.clone(),h,r;p.setEndAt(c,CKEDITOR.POSITION_BEFORE_END);if((h=(new CKEDITOR.dom.walker(p)).next())&&a(h)&&g[h.getName()]&&(r=h.getPrevious())&&a(r)&&!r.getParent().equals(b.startContainer)&&d.contains(r)&&e.contains(h)&&h.isIdentical(r)){h.moveChildren(r);h.remove();f(b,c,d,e)}}function p(b,c){function d(b,c){if(c.isBlock&&c.isElement&&
!c.node.is("br")&&a(b)&&b.is("br")){b.remove();return 1}}var e=c.endContainer.getChild(c.endOffset),f=c.endContainer.getChild(c.endOffset-1);e&&d(e,b[b.length-1]);if(f&&d(f,b[0])){c.setEnd(c.endContainer,c.endOffset-1);c.collapse()}}var r=CKEDITOR.dtd,g={p:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,ul:1,ol:1,li:1,pre:1,dl:1,blockquote:1},m={p:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},C=CKEDITOR.tools.extend({},r.$inline);delete C.br;return function(g,n,k){var q=g.editor,v=q.getSelection().getRanges()[0],
G=false;if(n=="unfiltered_html"){n="html";G=true}if(!v.checkReadOnly()){var z=(new CKEDITOR.dom.elementPath(v.startContainer,v.root)).blockLimit||v.root,n={type:n,dontFilter:G,editable:g,editor:q,range:v,blockLimit:z,mergeCandidates:[],zombies:[]},q=n.range,G=n.mergeCandidates,B,x,E,s;if(n.type=="text"&&q.shrink(CKEDITOR.SHRINK_ELEMENT,true,false)){B=CKEDITOR.dom.element.createFromHtml("<span>&nbsp;</span>",q.document);q.insertNode(B);q.setStartAfter(B)}x=new CKEDITOR.dom.elementPath(q.startContainer);
n.endPath=E=new CKEDITOR.dom.elementPath(q.endContainer);if(!q.collapsed){var z=E.block||E.blockLimit,w=q.getCommonAncestor();z&&(!z.equals(w)&&!z.contains(w)&&q.checkEndOfBlock())&&n.zombies.push(z);q.deleteContents()}for(;(s=a(q.startContainer)&&q.startContainer.getChild(q.startOffset-1))&&a(s)&&s.isBlockBoundary()&&x.contains(s);)q.moveToPosition(s,CKEDITOR.POSITION_BEFORE_END);f(q,n.blockLimit,x,E);if(B){q.setEndBefore(B);q.collapse();B.remove()}B=q.startPath();if(z=B.contains(e,false,1)){q.splitElement(z);
n.inlineStylesRoot=z;n.inlineStylesPeak=B.lastElement}B=q.createBookmark();(z=B.startNode.getPrevious(c))&&a(z)&&e(z)&&G.push(z);(z=B.startNode.getNext(c))&&a(z)&&e(z)&&G.push(z);for(z=B.startNode;(z=z.getParent())&&e(z);)G.push(z);q.moveToBookmark(B);if(B=k){B=n.range;if(n.type=="text"&&n.inlineStylesRoot){s=n.inlineStylesPeak;q=s.getDocument().createText("{cke-peak}");for(G=n.inlineStylesRoot.getParent();!s.equals(G);){q=q.appendTo(s.clone());s=s.getParent()}k=q.getOuterHtml().split("{cke-peak}").join(k)}s=
n.blockLimit.getName();if(/^\s+|\s+$/.test(k)&&"span"in CKEDITOR.dtd[s])var y='<span data-cke-marker="1">&nbsp;</span>',k=y+k+y;k=n.editor.dataProcessor.toHtml(k,{context:null,fixForBody:false,dontFilter:n.dontFilter,filter:n.editor.activeFilter,enterMode:n.editor.activeEnterMode});s=B.document.createElement("body");s.setHtml(k);if(y){s.getFirst().remove();s.getLast().remove()}if((y=B.startPath().block)&&!(y.getChildCount()==1&&y.getBogus()))a:{var t;if(s.getChildCount()==1&&a(t=s.getFirst())&&t.is(m)){y=
t.getElementsByTag("*");B=0;for(G=y.count();B<G;B++){q=y.getItem(B);if(!q.is(C))break a}t.moveChildren(t.getParent(1));t.remove()}}n.dataWrapper=s;B=k}if(B){t=n.range;var y=t.document,D,k=n.blockLimit;B=0;var J;s=[];var H,Q,G=q=0,M,S;x=t.startContainer;var z=n.endPath.elements[0],T;E=z.getPosition(x);w=!!z.getCommonAncestor(x)&&E!=CKEDITOR.POSITION_IDENTICAL&&!(E&CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_IS_CONTAINED);x=b(n.dataWrapper,n);for(p(x,t);B<x.length;B++){E=x[B];if(D=E.isLineBreak){D=
t;M=k;var O=void 0,V=void 0;if(E.hasBlockSibling)D=1;else{O=D.startContainer.getAscendant(r.$block,1);if(!O||!O.is({div:1,p:1}))D=0;else{V=O.getPosition(M);if(V==CKEDITOR.POSITION_IDENTICAL||V==CKEDITOR.POSITION_CONTAINS)D=0;else{M=D.splitElement(O);D.moveToPosition(M,CKEDITOR.POSITION_AFTER_START);D=1}}}}if(D)G=B>0;else{D=t.startPath();if(!E.isBlock&&h(n.editor,D.block,D.blockLimit)&&(Q=n.editor.activeEnterMode!=CKEDITOR.ENTER_BR&&n.editor.config.autoParagraph!==false?n.editor.activeEnterMode==CKEDITOR.ENTER_DIV?
"div":"p":false)){Q=y.createElement(Q);Q.appendBogus();t.insertNode(Q);CKEDITOR.env.needsBrFiller&&(J=Q.getBogus())&&J.remove();t.moveToPosition(Q,CKEDITOR.POSITION_BEFORE_END)}if((D=t.startPath().block)&&!D.equals(H)){if(J=D.getBogus()){J.remove();s.push(D)}H=D}E.firstNotAllowed&&(q=1);if(q&&E.isElement){D=t.startContainer;for(M=null;D&&!r[D.getName()][E.name];){if(D.equals(k)){D=null;break}M=D;D=D.getParent()}if(D){if(M){S=t.splitElement(M);n.zombies.push(S);n.zombies.push(M)}}else{M=k.getName();
T=!B;D=B==x.length-1;M=d(E.node,M);for(var O=[],V=M.length,W=0,Y=void 0,Z=0,U=-1;W<V;W++){Y=M[W];if(Y==" "){if(!Z&&(!T||W)){O.push(new CKEDITOR.dom.text(" "));U=O.length}Z=1}else{O.push(Y);Z=0}}D&&U==O.length&&O.pop();T=O}}if(T){for(;D=T.pop();)t.insertNode(D);T=0}else t.insertNode(E.node);if(E.lastNotAllowed&&B<x.length-1){(S=w?z:S)&&t.setEndAt(S,CKEDITOR.POSITION_AFTER_START);q=0}t.collapse()}}n.dontMoveCaret=G;n.bogusNeededBlocks=s}J=n.range;var N;S=n.bogusNeededBlocks;for(T=J.createBookmark();H=
n.zombies.pop();)if(H.getParent()){Q=J.clone();Q.moveToElementEditStart(H);Q.removeEmptyBlocksAtEnd()}if(S)for(;H=S.pop();)CKEDITOR.env.needsBrFiller?H.appendBogus():H.append(J.document.createText(" "));for(;H=n.mergeCandidates.pop();)H.mergeSiblings();J.moveToBookmark(T);if(!n.dontMoveCaret){for(H=a(J.startContainer)&&J.startContainer.getChild(J.startOffset-1);H&&a(H)&&!H.is(r.$empty);){if(H.isBlockBoundary())J.moveToPosition(H,CKEDITOR.POSITION_BEFORE_END);else{if(e(H)&&H.getHtml().match(/(\s|&nbsp;)$/g)){N=
null;break}N=J.clone();N.moveToPosition(H,CKEDITOR.POSITION_BEFORE_END)}H=H.getLast(c)}N&&J.moveToRange(N)}v.select();j(g)}}}(),t=function(){function a(b){b=new CKEDITOR.dom.walker(b);b.guard=function(a,b){if(b)return false;if(a.type==CKEDITOR.NODE_ELEMENT)return a.is(CKEDITOR.dtd.$tableContent)};b.evaluator=function(a){return a.type==CKEDITOR.NODE_ELEMENT};return b}function b(a,c,d){c=a.getDocument().createElement(c);a.append(c,d);return c}function c(a){var b=a.count(),d;for(b;b-- >0;){d=a.getItem(b);
if(!CKEDITOR.tools.trim(d.getHtml())){d.appendBogus();CKEDITOR.env.ie&&(CKEDITOR.env.version<9&&d.getChildCount())&&d.getFirst().remove()}}}return function(d){var e=d.startContainer,f=e.getAscendant("table",1),h=false;c(f.getElementsByTag("td"));c(f.getElementsByTag("th"));f=d.clone();f.setStart(e,0);f=a(f).lastBackward();if(!f){f=d.clone();f.setEndAt(e,CKEDITOR.POSITION_BEFORE_END);f=a(f).lastForward();h=true}f||(f=e);if(f.is("table")){d.setStartAt(f,CKEDITOR.POSITION_BEFORE_START);d.collapse(true);
f.remove()}else{f.is({tbody:1,thead:1,tfoot:1})&&(f=b(f,"tr",h));f.is("tr")&&(f=b(f,f.getParent().is("thead")?"th":"td",h));(e=f.getBogus())&&e.remove();d.moveToPosition(f,h?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END)}}}()})();
(function(){function a(){var a=this._.fakeSelection,b;if(a){b=this.getSelection(1);if(!b||!b.isHidden()){a.reset();a=0}}if(!a){a=b||this.getSelection(1);if(!a||a.getType()==CKEDITOR.SELECTION_NONE)return}this.fire("selectionCheck",a);b=this.elementPath();if(!b.compare(this._.selectionPreviousPath)){if(CKEDITOR.env.webkit)this._.previousActive=this.document.getActive();this._.selectionPreviousPath=b;this.fire("selectionChange",{selection:a,path:b})}}function f(){q=true;if(!w){b.call(this);w=CKEDITOR.tools.setTimeout(b,
200,this)}}function b(){w=null;if(q){CKEDITOR.tools.setTimeout(a,0,this);q=false}}function c(a){return t(a)||a.type==CKEDITOR.NODE_ELEMENT&&!a.is(CKEDITOR.dtd.$empty)?true:false}function e(a){function b(c,d){return!c||c.type==CKEDITOR.NODE_TEXT?false:a.clone()["moveToElementEdit"+(d?"End":"Start")](c)}if(!(a.root instanceof CKEDITOR.editable))return false;var d=a.startContainer,e=a.getPreviousNode(c,null,d),f=a.getNextNode(c,null,d);return b(e)||b(f,1)||!e&&!f&&!(d.type==CKEDITOR.NODE_ELEMENT&&d.isBlockBoundary()&&
d.getBogus())?true:false}function d(a){return a.getCustomData("cke-fillingChar")}function h(a,b){var c=a&&a.removeCustomData("cke-fillingChar");if(c){if(b!==false){var d,e=a.getDocument().getSelection().getNative(),f=e&&e.type!="None"&&e.getRangeAt(0);if(c.getLength()>1&&f&&f.intersectsNode(c.$)){d=j(e);f=e.focusNode==c.$&&e.focusOffset>0;e.anchorNode==c.$&&e.anchorOffset>0&&d[0].offset--;f&&d[1].offset--}}c.setText(k(c.getText()));d&&g(a.getDocument().$,d)}}function k(a){return a.replace(/\u200B( )?/g,
function(a){return a[1]?" ":""})}function j(a){return[{node:a.anchorNode,offset:a.anchorOffset},{node:a.focusNode,offset:a.focusOffset}]}function g(a,b){var c=a.getSelection(),d=a.createRange();d.setStart(b[0].node,b[0].offset);d.collapse(true);c.removeAllRanges();c.addRange(d);c.extend(b[1].node,b[1].offset)}function m(a){var b=CKEDITOR.dom.element.createFromHtml('<div data-cke-hidden-sel="1" data-cke-temp="1" style="'+(CKEDITOR.env.ie?"display:none":"position:fixed;top:0;left:-1000px")+'">&nbsp;</div>',
a.document);a.fire("lockSnapshot");a.editable().append(b);var c=a.getSelection(1),d=a.createRange(),e=c.root.on("selectionchange",function(a){a.cancel()},null,null,0);d.setStartAt(b,CKEDITOR.POSITION_AFTER_START);d.setEndAt(b,CKEDITOR.POSITION_BEFORE_END);c.selectRanges([d]);e.removeListener();a.fire("unlockSnapshot");a._.hiddenSelectionContainer=b}function y(a){var b={37:1,39:1,8:1,46:1};return function(c){var d=c.data.getKeystroke();if(b[d]){var e=a.getSelection().getRanges(),f=e[0];if(e.length==
1&&f.collapsed)if((d=f[d<38?"getPreviousEditableNode":"getNextEditableNode"]())&&d.type==CKEDITOR.NODE_ELEMENT&&d.getAttribute("contenteditable")=="false"){a.getSelection().fake(d);c.data.preventDefault();c.cancel()}}}}function s(a){for(var b=0;b<a.length;b++){var c=a[b];c.getCommonAncestor().isReadOnly()&&a.splice(b,1);if(!c.collapsed){if(c.startContainer.isReadOnly())for(var d=c.startContainer,e;d;){if((e=d.type==CKEDITOR.NODE_ELEMENT)&&d.is("body")||!d.isReadOnly())break;e&&d.getAttribute("contentEditable")==
"false"&&c.setStartAfter(d);d=d.getParent()}d=c.startContainer;e=c.endContainer;var f=c.startOffset,h=c.endOffset,g=c.clone();d&&d.type==CKEDITOR.NODE_TEXT&&(f>=d.getLength()?g.setStartAfter(d):g.setStartBefore(d));e&&e.type==CKEDITOR.NODE_TEXT&&(h?g.setEndAfter(e):g.setEndBefore(e));d=new CKEDITOR.dom.walker(g);d.evaluator=function(d){if(d.type==CKEDITOR.NODE_ELEMENT&&d.isReadOnly()){var e=c.clone();c.setEndBefore(d);c.collapsed&&a.splice(b--,1);if(!(d.getPosition(g.endContainer)&CKEDITOR.POSITION_CONTAINS)){e.setStartAfter(d);
e.collapsed||a.splice(b+1,0,e)}return true}return false};d.next()}}return a}var w,q,t=CKEDITOR.dom.walker.invisible(1),i=function(){function a(b){return function(a){var c=a.editor.createRange();c.moveToClosestEditablePosition(a.selected,b)&&a.editor.getSelection().selectRanges([c]);return false}}function b(a){return function(b){var c=b.editor,d=c.createRange(),e;if(!(e=d.moveToClosestEditablePosition(b.selected,a)))e=d.moveToClosestEditablePosition(b.selected,!a);e&&c.getSelection().selectRanges([d]);
c.fire("saveSnapshot");b.selected.remove();if(!e){d.moveToElementEditablePosition(c.editable());c.getSelection().selectRanges([d])}c.fire("saveSnapshot");return false}}var c=a(),d=a(1);return{37:c,38:c,39:d,40:d,8:b(),46:b(1)}}();CKEDITOR.on("instanceCreated",function(b){function c(){var a=d.getSelection();a&&a.removeAllRanges()}var d=b.editor;d.on("contentDom",function(){function b(){z=new CKEDITOR.dom.selection(d.getSelection());z.lock()}function c(){l.removeListener("mouseup",c);i.removeListener("mouseup",
c);var a=CKEDITOR.document.$.selection,b=a.createRange();a.type!="None"&&b.parentElement().ownerDocument==e.$&&b.select()}var e=d.document,l=CKEDITOR.document,g=d.editable(),p=e.getBody(),i=e.getDocumentElement(),v=g.isInline(),j,z;CKEDITOR.env.gecko&&g.attachListener(g,"focus",function(a){a.removeListener();if(j!==0)if((a=d.getSelection().getNative())&&a.isCollapsed&&a.anchorNode==g.$){a=d.createRange();a.moveToElementEditStart(g);a.select()}},null,null,-2);g.attachListener(g,CKEDITOR.env.webkit?
"DOMFocusIn":"focus",function(){j&&CKEDITOR.env.webkit&&(j=d._.previousActive&&d._.previousActive.equals(e.getActive()));d.unlockSelection(j);j=0},null,null,-1);g.attachListener(g,"mousedown",function(){j=0});if(CKEDITOR.env.ie||v){A?g.attachListener(g,"beforedeactivate",b,null,null,-1):g.attachListener(d,"selectionCheck",b,null,null,-1);g.attachListener(g,CKEDITOR.env.webkit?"DOMFocusOut":"blur",function(){d.lockSelection(z);j=1},null,null,-1);g.attachListener(g,"mousedown",function(){j=0})}if(CKEDITOR.env.ie&&
!v){var B;g.attachListener(g,"mousedown",function(a){if(a.data.$.button==2){a=d.document.getSelection();if(!a||a.getType()==CKEDITOR.SELECTION_NONE)B=d.window.getScrollPosition()}});g.attachListener(g,"mouseup",function(a){if(a.data.$.button==2&&B){d.document.$.documentElement.scrollLeft=B.x;d.document.$.documentElement.scrollTop=B.y}B=null});if(e.$.compatMode!="BackCompat"){if(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)i.on("mousedown",function(a){function b(a){a=a.data.$;if(d){var c=p.$.createTextRange();
try{c.moveToPoint(a.clientX,a.clientY)}catch(e){}d.setEndPoint(f.compareEndPoints("StartToStart",c)<0?"EndToEnd":"StartToStart",c);d.select()}}function c(){i.removeListener("mousemove",b);l.removeListener("mouseup",c);i.removeListener("mouseup",c);d.select()}a=a.data;if(a.getTarget().is("html")&&a.$.y<i.$.clientHeight&&a.$.x<i.$.clientWidth){var d=p.$.createTextRange();try{d.moveToPoint(a.$.clientX,a.$.clientY)}catch(e){}var f=d.duplicate();i.on("mousemove",b);l.on("mouseup",c);i.on("mouseup",c)}});
if(CKEDITOR.env.version>7&&CKEDITOR.env.version<11)i.on("mousedown",function(a){if(a.data.getTarget().is("html")){l.on("mouseup",c);i.on("mouseup",c)}})}}g.attachListener(g,"selectionchange",a,d);g.attachListener(g,"keyup",f,d);g.attachListener(g,CKEDITOR.env.webkit?"DOMFocusIn":"focus",function(){d.forceNextSelectionCheck();d.selectionChange(1)});if(v&&(CKEDITOR.env.webkit||CKEDITOR.env.gecko)){var x;g.attachListener(g,"mousedown",function(){x=1});g.attachListener(e.getDocumentElement(),"mouseup",
function(){x&&f.call(d);x=0})}else g.attachListener(CKEDITOR.env.ie?g:e.getDocumentElement(),"mouseup",f,d);CKEDITOR.env.webkit&&g.attachListener(e,"keydown",function(a){switch(a.data.getKey()){case 13:case 33:case 34:case 35:case 36:case 37:case 39:case 8:case 45:case 46:h(g)}},null,null,-1);g.attachListener(g,"keydown",y(d),null,null,-1)});d.on("setData",function(){d.unlockSelection();CKEDITOR.env.webkit&&c()});d.on("contentDomUnload",function(){d.unlockSelection()});if(CKEDITOR.env.ie9Compat)d.on("beforeDestroy",
c,null,null,9);d.on("dataReady",function(){delete d._.fakeSelection;delete d._.hiddenSelectionContainer;d.selectionChange(1)});d.on("loadSnapshot",function(){var a=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT),b=d.editable().getLast(a);if(b&&b.hasAttribute("data-cke-hidden-sel")){b.remove();if(CKEDITOR.env.gecko)(a=d.editable().getFirst(a))&&(a.is("br")&&a.getAttribute("_moz_editor_bogus_node"))&&a.remove()}},null,null,100);d.on("key",function(a){if(d.mode=="wysiwyg"){var b=d.getSelection();
if(b.isFake){var c=i[a.data.keyCode];if(c)return c({editor:d,selected:b.getSelectedElement(),selection:b,keyEvent:a})}}})});CKEDITOR.on("instanceReady",function(a){function b(){var a=e.editable();if(a)if(a=d(a)){var c=e.document.$.getSelection();if(c.type!="None"&&(c.anchorNode==a.$||c.focusNode==a.$))i=j(c);f=a.getText();a.setText(k(f))}}function c(){var a=e.editable();if(a)if(a=d(a)){a.setText(f);if(i){g(e.document.$,i);i=null}}}var e=a.editor,f,i;if(CKEDITOR.env.webkit){e.on("selectionChange",
function(){var a=e.editable(),b=d(a);b&&(b.getCustomData("ready")?h(a):b.setCustomData("ready",1))},null,null,-1);e.on("beforeSetMode",function(){h(e.editable())},null,null,-1);e.on("beforeUndoImage",b);e.on("afterUndoImage",c);e.on("beforeGetData",b,null,null,0);e.on("getData",c)}});CKEDITOR.editor.prototype.selectionChange=function(b){(b?a:f).call(this)};CKEDITOR.editor.prototype.getSelection=function(a){if((this._.savedSelection||this._.fakeSelection)&&!a)return this._.savedSelection||this._.fakeSelection;
return(a=this.editable())&&this.mode=="wysiwyg"?new CKEDITOR.dom.selection(a):null};CKEDITOR.editor.prototype.lockSelection=function(a){a=a||this.getSelection(1);if(a.getType()!=CKEDITOR.SELECTION_NONE){!a.isLocked&&a.lock();this._.savedSelection=a;return true}return false};CKEDITOR.editor.prototype.unlockSelection=function(a){var b=this._.savedSelection;if(b){b.unlock(a);delete this._.savedSelection;return true}return false};CKEDITOR.editor.prototype.forceNextSelectionCheck=function(){delete this._.selectionPreviousPath};
CKEDITOR.dom.document.prototype.getSelection=function(){return new CKEDITOR.dom.selection(this)};CKEDITOR.dom.range.prototype.select=function(){var a=this.root instanceof CKEDITOR.editable?this.root.editor.getSelection():new CKEDITOR.dom.selection(this.root);a.selectRanges([this]);return a};CKEDITOR.SELECTION_NONE=1;CKEDITOR.SELECTION_TEXT=2;CKEDITOR.SELECTION_ELEMENT=3;var A=typeof window.getSelection!="function",u=1;CKEDITOR.dom.selection=function(a){if(a instanceof CKEDITOR.dom.selection)var b=
a,a=a.root;var c=a instanceof CKEDITOR.dom.element;this.rev=b?b.rev:u++;this.document=a instanceof CKEDITOR.dom.document?a:a.getDocument();this.root=c?a:this.document.getBody();this.isLocked=0;this._={cache:{}};if(b){CKEDITOR.tools.extend(this._.cache,b._.cache);this.isFake=b.isFake;this.isLocked=b.isLocked;return this}var a=this.getNative(),d,e;if(a)if(a.getRangeAt)d=(e=a.rangeCount&&a.getRangeAt(0))&&new CKEDITOR.dom.node(e.commonAncestorContainer);else{try{e=a.createRange()}catch(f){}d=e&&CKEDITOR.dom.element.get(e.item&&
e.item(0)||e.parentElement())}if(!d||!(d.type==CKEDITOR.NODE_ELEMENT||d.type==CKEDITOR.NODE_TEXT)||!this.root.equals(d)&&!this.root.contains(d)){this._.cache.type=CKEDITOR.SELECTION_NONE;this._.cache.startElement=null;this._.cache.selectedElement=null;this._.cache.selectedText="";this._.cache.ranges=new CKEDITOR.dom.rangeList}return this};var o={img:1,hr:1,li:1,table:1,tr:1,td:1,th:1,embed:1,object:1,ol:1,ul:1,a:1,input:1,form:1,select:1,textarea:1,button:1,fieldset:1,thead:1,tfoot:1};CKEDITOR.dom.selection.prototype=
{getNative:function(){return this._.cache.nativeSel!==void 0?this._.cache.nativeSel:this._.cache.nativeSel=A?this.document.$.selection:this.document.getWindow().$.getSelection()},getType:A?function(){var a=this._.cache;if(a.type)return a.type;var b=CKEDITOR.SELECTION_NONE;try{var c=this.getNative(),d=c.type;if(d=="Text")b=CKEDITOR.SELECTION_TEXT;if(d=="Control")b=CKEDITOR.SELECTION_ELEMENT;if(c.createRange().parentElement())b=CKEDITOR.SELECTION_TEXT}catch(e){}return a.type=b}:function(){var a=this._.cache;
if(a.type)return a.type;var b=CKEDITOR.SELECTION_TEXT,c=this.getNative();if(!c||!c.rangeCount)b=CKEDITOR.SELECTION_NONE;else if(c.rangeCount==1){var c=c.getRangeAt(0),d=c.startContainer;if(d==c.endContainer&&d.nodeType==1&&c.endOffset-c.startOffset==1&&o[d.childNodes[c.startOffset].nodeName.toLowerCase()])b=CKEDITOR.SELECTION_ELEMENT}return a.type=b},getRanges:function(){var a=A?function(){function a(b){return(new CKEDITOR.dom.node(b)).getIndex()}var b=function(b,c){b=b.duplicate();b.collapse(c);
var d=b.parentElement();if(!d.hasChildNodes())return{container:d,offset:0};for(var e=d.children,f,g,h=b.duplicate(),v=0,l=e.length-1,i=-1,j,x;v<=l;){i=Math.floor((v+l)/2);f=e[i];h.moveToElementText(f);j=h.compareEndPoints("StartToStart",b);if(j>0)l=i-1;else if(j<0)v=i+1;else return{container:d,offset:a(f)}}if(i==-1||i==e.length-1&&j<0){h.moveToElementText(d);h.setEndPoint("StartToStart",b);h=h.text.replace(/(\r\n|\r)/g,"\n").length;e=d.childNodes;if(!h){f=e[e.length-1];return f.nodeType!=CKEDITOR.NODE_TEXT?
{container:d,offset:e.length}:{container:f,offset:f.nodeValue.length}}for(d=e.length;h>0&&d>0;){g=e[--d];if(g.nodeType==CKEDITOR.NODE_TEXT){x=g;h=h-g.nodeValue.length}}return{container:x,offset:-h}}h.collapse(j>0?true:false);h.setEndPoint(j>0?"StartToStart":"EndToStart",b);h=h.text.replace(/(\r\n|\r)/g,"\n").length;if(!h)return{container:d,offset:a(f)+(j>0?0:1)};for(;h>0;)try{g=f[j>0?"previousSibling":"nextSibling"];if(g.nodeType==CKEDITOR.NODE_TEXT){h=h-g.nodeValue.length;x=g}f=g}catch(m){return{container:d,
offset:a(f)}}return{container:x,offset:j>0?-h:x.nodeValue.length+h}};return function(){var a=this.getNative(),c=a&&a.createRange(),d=this.getType();if(!a)return[];if(d==CKEDITOR.SELECTION_TEXT){a=new CKEDITOR.dom.range(this.root);d=b(c,true);a.setStart(new CKEDITOR.dom.node(d.container),d.offset);d=b(c);a.setEnd(new CKEDITOR.dom.node(d.container),d.offset);a.endContainer.getPosition(a.startContainer)&CKEDITOR.POSITION_PRECEDING&&a.endOffset<=a.startContainer.getIndex()&&a.collapse();return[a]}if(d==
CKEDITOR.SELECTION_ELEMENT){for(var d=[],e=0;e<c.length;e++){for(var f=c.item(e),h=f.parentNode,g=0,a=new CKEDITOR.dom.range(this.root);g<h.childNodes.length&&h.childNodes[g]!=f;g++);a.setStart(new CKEDITOR.dom.node(h),g);a.setEnd(new CKEDITOR.dom.node(h),g+1);d.push(a)}return d}return[]}}():function(){var a=[],b,c=this.getNative();if(!c)return a;for(var d=0;d<c.rangeCount;d++){var e=c.getRangeAt(d);b=new CKEDITOR.dom.range(this.root);b.setStart(new CKEDITOR.dom.node(e.startContainer),e.startOffset);
b.setEnd(new CKEDITOR.dom.node(e.endContainer),e.endOffset);a.push(b)}return a};return function(b){var c=this._.cache,d=c.ranges;if(!d)c.ranges=d=new CKEDITOR.dom.rangeList(a.call(this));return!b?d:s(new CKEDITOR.dom.rangeList(d.slice()))}}(),getStartElement:function(){var a=this._.cache;if(a.startElement!==void 0)return a.startElement;var b;switch(this.getType()){case CKEDITOR.SELECTION_ELEMENT:return this.getSelectedElement();case CKEDITOR.SELECTION_TEXT:var c=this.getRanges()[0];if(c){if(c.collapsed){b=
c.startContainer;b.type!=CKEDITOR.NODE_ELEMENT&&(b=b.getParent())}else{for(c.optimize();;){b=c.startContainer;if(c.startOffset==(b.getChildCount?b.getChildCount():b.getLength())&&!b.isBlockBoundary())c.setStartAfter(b);else break}b=c.startContainer;if(b.type!=CKEDITOR.NODE_ELEMENT)return b.getParent();b=b.getChild(c.startOffset);if(!b||b.type!=CKEDITOR.NODE_ELEMENT)b=c.startContainer;else for(c=b.getFirst();c&&c.type==CKEDITOR.NODE_ELEMENT;){b=c;c=c.getFirst()}}b=b.$}}return a.startElement=b?new CKEDITOR.dom.element(b):
null},getSelectedElement:function(){var a=this._.cache;if(a.selectedElement!==void 0)return a.selectedElement;var b=this,c=CKEDITOR.tools.tryThese(function(){return b.getNative().createRange().item(0)},function(){for(var a=b.getRanges()[0].clone(),c,d,e=2;e&&(!(c=a.getEnclosedNode())||!(c.type==CKEDITOR.NODE_ELEMENT&&o[c.getName()]&&(d=c)));e--)a.shrink(CKEDITOR.SHRINK_ELEMENT);return d&&d.$});return a.selectedElement=c?new CKEDITOR.dom.element(c):null},getSelectedText:function(){var a=this._.cache;
if(a.selectedText!==void 0)return a.selectedText;var b=this.getNative(),b=A?b.type=="Control"?"":b.createRange().text:b.toString();return a.selectedText=b},lock:function(){this.getRanges();this.getStartElement();this.getSelectedElement();this.getSelectedText();this._.cache.nativeSel=null;this.isLocked=1},unlock:function(a){if(this.isLocked){if(a)var b=this.getSelectedElement(),c=!b&&this.getRanges(),d=this.isFake;this.isLocked=0;this.reset();if(a)(a=b||c[0]&&c[0].getCommonAncestor())&&a.getAscendant("body",
1)&&(d?this.fake(b):b?this.selectElement(b):this.selectRanges(c))}},reset:function(){this._.cache={};this.isFake=0;var a=this.root.editor;if(a&&a._.fakeSelection&&this.rev==a._.fakeSelection.rev){delete a._.fakeSelection;var b=a._.hiddenSelectionContainer;if(b){var c=a.checkDirty();a.fire("lockSnapshot");b.remove();a.fire("unlockSnapshot");!c&&a.resetDirty()}delete a._.hiddenSelectionContainer}this.rev=u++},selectElement:function(a){var b=new CKEDITOR.dom.range(this.root);b.setStartBefore(a);b.setEndAfter(a);
this.selectRanges([b])},selectRanges:function(a){var b=this.root.editor,b=b&&b._.hiddenSelectionContainer;this.reset();if(b)for(var b=this.root,c,d=0;d<a.length;++d){c=a[d];if(c.endContainer.equals(b))c.endOffset=Math.min(c.endOffset,b.getChildCount())}if(a.length)if(this.isLocked){var f=CKEDITOR.document.getActive();this.unlock();this.selectRanges(a);this.lock();f&&!f.equals(this.root)&&f.focus()}else{var g;a:{var i,j;if(a.length==1&&!(j=a[0]).collapsed&&(g=j.getEnclosedNode())&&g.type==CKEDITOR.NODE_ELEMENT){j=
j.clone();j.shrink(CKEDITOR.SHRINK_ELEMENT,true);if((i=j.getEnclosedNode())&&i.type==CKEDITOR.NODE_ELEMENT)g=i;if(g.getAttribute("contenteditable")=="false")break a}g=void 0}if(g)this.fake(g);else{if(A){j=CKEDITOR.dom.walker.whitespaces(true);i=/\ufeff|\u00a0/;b={table:1,tbody:1,tr:1};if(a.length>1){g=a[a.length-1];a[0].setEnd(g.endContainer,g.endOffset)}g=a[0];var a=g.collapsed,m,k,v;if((c=g.getEnclosedNode())&&c.type==CKEDITOR.NODE_ELEMENT&&c.getName()in o&&(!c.is("a")||!c.getText()))try{v=c.$.createControlRange();
v.addElement(c.$);v.select();return}catch(q){}if(g.startContainer.type==CKEDITOR.NODE_ELEMENT&&g.startContainer.getName()in b||g.endContainer.type==CKEDITOR.NODE_ELEMENT&&g.endContainer.getName()in b){g.shrink(CKEDITOR.NODE_ELEMENT,true);a=g.collapsed}v=g.createBookmark();b=v.startNode;if(!a)f=v.endNode;v=g.document.$.body.createTextRange();v.moveToElementText(b.$);v.moveStart("character",1);if(f){i=g.document.$.body.createTextRange();i.moveToElementText(f.$);v.setEndPoint("EndToEnd",i);v.moveEnd("character",
-1)}else{m=b.getNext(j);k=b.hasAscendant("pre");m=!(m&&m.getText&&m.getText().match(i))&&(k||!b.hasPrevious()||b.getPrevious().is&&b.getPrevious().is("br"));k=g.document.createElement("span");k.setHtml("&#65279;");k.insertBefore(b);m&&g.document.createText("﻿").insertBefore(b)}g.setStartBefore(b);b.remove();if(a){if(m){v.moveStart("character",-1);v.select();g.document.$.selection.clear()}else v.select();g.moveToPosition(k,CKEDITOR.POSITION_BEFORE_START);k.remove()}else{g.setEndBefore(f);f.remove();
v.select()}}else{f=this.getNative();if(!f)return;this.removeAllRanges();for(v=0;v<a.length;v++){if(v<a.length-1){m=a[v];k=a[v+1];i=m.clone();i.setStart(m.endContainer,m.endOffset);i.setEnd(k.startContainer,k.startOffset);if(!i.collapsed){i.shrink(CKEDITOR.NODE_ELEMENT,true);g=i.getCommonAncestor();i=i.getEnclosedNode();if(g.isReadOnly()||i&&i.isReadOnly()){k.setStart(m.startContainer,m.startOffset);a.splice(v--,1);continue}}}g=a[v];k=this.document.$.createRange();if(g.collapsed&&CKEDITOR.env.webkit&&
e(g)){m=this.root;h(m,false);i=m.getDocument().createText("​");m.setCustomData("cke-fillingChar",i);g.insertNode(i);if((m=i.getNext())&&!i.getPrevious()&&m.type==CKEDITOR.NODE_ELEMENT&&m.getName()=="br"){h(this.root);g.moveToPosition(m,CKEDITOR.POSITION_BEFORE_START)}else g.moveToPosition(i,CKEDITOR.POSITION_AFTER_END)}k.setStart(g.startContainer.$,g.startOffset);try{k.setEnd(g.endContainer.$,g.endOffset)}catch(z){if(z.toString().indexOf("NS_ERROR_ILLEGAL_VALUE")>=0){g.collapse(1);k.setEnd(g.endContainer.$,
g.endOffset)}else throw z;}f.addRange(k)}}this.reset();this.root.fire("selectionchange")}}},fake:function(a){var b=this.root.editor;this.reset();m(b);var c=this._.cache,d=new CKEDITOR.dom.range(this.root);d.setStartBefore(a);d.setEndAfter(a);c.ranges=new CKEDITOR.dom.rangeList(d);c.selectedElement=c.startElement=a;c.type=CKEDITOR.SELECTION_ELEMENT;c.selectedText=c.nativeSel=null;this.isFake=1;this.rev=u++;b._.fakeSelection=this;this.root.fire("selectionchange")},isHidden:function(){var a=this.getCommonAncestor();
a&&a.type==CKEDITOR.NODE_TEXT&&(a=a.getParent());return!(!a||!a.data("cke-hidden-sel"))},createBookmarks:function(a){a=this.getRanges().createBookmarks(a);this.isFake&&(a.isFake=1);return a},createBookmarks2:function(a){a=this.getRanges().createBookmarks2(a);this.isFake&&(a.isFake=1);return a},selectBookmarks:function(a){for(var b=[],c=0;c<a.length;c++){var d=new CKEDITOR.dom.range(this.root);d.moveToBookmark(a[c]);b.push(d)}a.isFake?this.fake(b[0].getEnclosedNode()):this.selectRanges(b);return this},
getCommonAncestor:function(){var a=this.getRanges();return!a.length?null:a[0].startContainer.getCommonAncestor(a[a.length-1].endContainer)},scrollIntoView:function(){this.type!=CKEDITOR.SELECTION_NONE&&this.getRanges()[0].scrollIntoView()},removeAllRanges:function(){if(this.getType()!=CKEDITOR.SELECTION_NONE){var a=this.getNative();try{a&&a[A?"empty":"removeAllRanges"]()}catch(b){}this.reset()}}}})();"use strict";CKEDITOR.STYLE_BLOCK=1;CKEDITOR.STYLE_INLINE=2;CKEDITOR.STYLE_OBJECT=3;
(function(){function a(a,b){for(var c,d;a=a.getParent();){if(a.equals(b))break;if(a.getAttribute("data-nostyle"))c=a;else if(!d){var e=a.getAttribute("contentEditable");e=="false"?c=a:e=="true"&&(d=1)}}return c}function f(b){var d=b.document;if(b.collapsed){d=i(this,d);b.insertNode(d);b.moveToPosition(d,CKEDITOR.POSITION_BEFORE_END)}else{var e=this.element,g=this._.definition,h,j=g.ignoreReadonly,m=j||g.includeReadonly;m==null&&(m=b.root.getCustomData("cke_includeReadonly"));var k=CKEDITOR.dtd[e];
if(!k){h=true;k=CKEDITOR.dtd.span}b.enlarge(CKEDITOR.ENLARGE_INLINE,1);b.trim();var l=b.createBookmark(),q=l.startNode,o=l.endNode,n=q,p;if(!j){var s=b.getCommonAncestor(),j=a(q,s),s=a(o,s);j&&(n=j.getNextSourceNode(true));s&&(o=s)}for(n.getPosition(o)==CKEDITOR.POSITION_FOLLOWING&&(n=0);n;){j=false;if(n.equals(o)){n=null;j=true}else{var r=n.type==CKEDITOR.NODE_ELEMENT?n.getName():null,s=r&&n.getAttribute("contentEditable")=="false",t=r&&n.getAttribute("data-nostyle");if(r&&n.data("cke-bookmark")){n=
n.getNextSourceNode(true);continue}if(s&&m&&CKEDITOR.dtd.$block[r])for(var y=n,u=c(y),A=void 0,C=u.length,F=0,y=C&&new CKEDITOR.dom.range(y.getDocument());F<C;++F){var A=u[F],P=CKEDITOR.filter.instances[A.data("cke-filter")];if(P?P.check(this):1){y.selectNodeContents(A);f.call(this,y)}}u=r?!k[r]||t?0:s&&!m?0:(n.getPosition(o)|K)==K&&(!g.childRule||g.childRule(n)):1;if(u)if((u=n.getParent())&&((u.getDtd()||CKEDITOR.dtd.span)[e]||h)&&(!g.parentRule||g.parentRule(u))){if(!p&&(!r||!CKEDITOR.dtd.$removeEmpty[r]||
(n.getPosition(o)|K)==K)){p=b.clone();p.setStartBefore(n)}r=n.type;if(r==CKEDITOR.NODE_TEXT||s||r==CKEDITOR.NODE_ELEMENT&&!n.getChildCount()){for(var r=n,U;(j=!r.getNext(L))&&(U=r.getParent(),k[U.getName()])&&(U.getPosition(q)|I)==I&&(!g.childRule||g.childRule(U));)r=U;p.setEndAfter(r)}}else j=true;else j=true;n=n.getNextSourceNode(t||s)}if(j&&p&&!p.collapsed){for(var j=i(this,d),s=j.hasAttributes(),t=p.getCommonAncestor(),r={},u={},A={},C={},N,R,X;j&&t;){if(t.getName()==e){for(N in g.attributes)if(!C[N]&&
(X=t.getAttribute(R)))j.getAttribute(N)==X?u[N]=1:C[N]=1;for(R in g.styles)if(!A[R]&&(X=t.getStyle(R)))j.getStyle(R)==X?r[R]=1:A[R]=1}t=t.getParent()}for(N in u)j.removeAttribute(N);for(R in r)j.removeStyle(R);s&&!j.hasAttributes()&&(j=null);if(j){p.extractContents().appendTo(j);p.insertNode(j);w.call(this,j);j.mergeSiblings();CKEDITOR.env.ie||j.$.normalize()}else{j=new CKEDITOR.dom.element("span");p.extractContents().appendTo(j);p.insertNode(j);w.call(this,j);j.remove(true)}p=null}}b.moveToBookmark(l);
b.shrink(CKEDITOR.SHRINK_TEXT);b.shrink(CKEDITOR.NODE_ELEMENT,true)}}function b(a){function b(){for(var a=new CKEDITOR.dom.elementPath(d.getParent()),c=new CKEDITOR.dom.elementPath(j.getParent()),e=null,f=null,g=0;g<a.elements.length;g++){var h=a.elements[g];if(h==a.block||h==a.blockLimit)break;m.checkElementRemovable(h,true)&&(e=h)}for(g=0;g<c.elements.length;g++){h=c.elements[g];if(h==c.block||h==c.blockLimit)break;m.checkElementRemovable(h,true)&&(f=h)}f&&j.breakParent(f);e&&d.breakParent(e)}a.enlarge(CKEDITOR.ENLARGE_INLINE,
1);var c=a.createBookmark(),d=c.startNode;if(a.collapsed){for(var e=new CKEDITOR.dom.elementPath(d.getParent(),a.root),f,g=0,h;g<e.elements.length&&(h=e.elements[g]);g++){if(h==e.block||h==e.blockLimit)break;if(this.checkElementRemovable(h)){var i;if(a.collapsed&&(a.checkBoundaryOfElement(h,CKEDITOR.END)||(i=a.checkBoundaryOfElement(h,CKEDITOR.START)))){f=h;f.match=i?"start":"end"}else{h.mergeSiblings();h.is(this.element)?s.call(this,h):q(h,o(this)[h.getName()])}}}if(f){h=d;for(g=0;;g++){i=e.elements[g];
if(i.equals(f))break;else if(i.match)continue;else i=i.clone();i.append(h);h=i}h[f.match=="start"?"insertBefore":"insertAfter"](f)}}else{var j=c.endNode,m=this;b();for(e=d;!e.equals(j);){f=e.getNextSourceNode();if(e.type==CKEDITOR.NODE_ELEMENT&&this.checkElementRemovable(e)){e.getName()==this.element?s.call(this,e):q(e,o(this)[e.getName()]);if(f.type==CKEDITOR.NODE_ELEMENT&&f.contains(d)){b();f=d.getNext()}}e=f}}a.moveToBookmark(c);a.shrink(CKEDITOR.NODE_ELEMENT,true)}function c(a){var b=[];a.forEach(function(a){if(a.getAttribute("contenteditable")==
"true"){b.push(a);return false}},CKEDITOR.NODE_ELEMENT,true);return b}function e(a){var b=a.getEnclosedNode()||a.getCommonAncestor(false,true);(a=(new CKEDITOR.dom.elementPath(b,a.root)).contains(this.element,1))&&!a.isReadOnly()&&A(a,this)}function d(a){var b=a.getCommonAncestor(true,true);if(a=(new CKEDITOR.dom.elementPath(b,a.root)).contains(this.element,1)){var b=this._.definition,c=b.attributes;if(c)for(var d in c)a.removeAttribute(d,c[d]);if(b.styles)for(var e in b.styles)b.styles.hasOwnProperty(e)&&
a.removeStyle(e)}}function h(a){var b=a.createBookmark(true),c=a.createIterator();c.enforceRealBlocks=true;if(this._.enterMode)c.enlargeBr=this._.enterMode!=CKEDITOR.ENTER_BR;for(var d,e=a.document,f;d=c.getNextParagraph();)if(!d.isReadOnly()&&(c.activeFilter?c.activeFilter.check(this):1)){f=i(this,e,d);j(d,f)}a.moveToBookmark(b)}function k(a){var b=a.createBookmark(1),c=a.createIterator();c.enforceRealBlocks=true;c.enlargeBr=this._.enterMode!=CKEDITOR.ENTER_BR;for(var d,e;d=c.getNextParagraph();)if(this.checkElementRemovable(d))if(d.is("pre")){(e=
this._.enterMode==CKEDITOR.ENTER_BR?null:a.document.createElement(this._.enterMode==CKEDITOR.ENTER_P?"p":"div"))&&d.copyAttributes(e);j(d,e)}else s.call(this,d);a.moveToBookmark(b)}function j(a,b){var c=!b;if(c){b=a.getDocument().createElement("div");a.copyAttributes(b)}var d=b&&b.is("pre"),e=a.is("pre"),f=!d&&e;if(d&&!e){e=b;(f=a.getBogus())&&f.remove();f=a.getHtml();f=m(f,/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,"");f=f.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi,"$1");f=f.replace(/([ \t\n\r]+|&nbsp;)/g,
" ");f=f.replace(/<br\b[^>]*>/gi,"\n");if(CKEDITOR.env.ie){var h=a.getDocument().createElement("div");h.append(e);e.$.outerHTML="<pre>"+f+"</pre>";e.copyAttributes(h.getFirst());e=h.getFirst().remove()}else e.setHtml(f);b=e}else f?b=y(c?[a.getHtml()]:g(a),b):a.moveChildren(b);b.replace(a);if(d){var c=b,i;if((i=c.getPrevious(F))&&i.type==CKEDITOR.NODE_ELEMENT&&i.is("pre")){d=m(i.getHtml(),/\n$/,"")+"\n\n"+m(c.getHtml(),/^\n/,"");CKEDITOR.env.ie?c.$.outerHTML="<pre>"+d+"</pre>":c.setHtml(d);i.remove()}}else c&&
t(b)}function g(a){var b=[];m(a.getOuterHtml(),/(\S\s*)\n(?:\s|(<span[^>]+data-cke-bookmark.*?\/span>))*\n(?!$)/gi,function(a,b,c){return b+"</pre>"+c+"<pre>"}).replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi,function(a,c){b.push(c)});return b}function m(a,b,c){var d="",e="",a=a.replace(/(^<span[^>]+data-cke-bookmark.*?\/span>)|(<span[^>]+data-cke-bookmark.*?\/span>$)/gi,function(a,b,c){b&&(d=b);c&&(e=c);return""});return d+a.replace(b,c)+e}function y(a,b){var c;a.length>1&&(c=new CKEDITOR.dom.documentFragment(b.getDocument()));
for(var d=0;d<a.length;d++){var e=a[d],e=e.replace(/(\r\n|\r)/g,"\n"),e=m(e,/^[ \t]*\n/,""),e=m(e,/\n$/,""),e=m(e,/^[ \t]+|[ \t]+$/g,function(a,b){return a.length==1?"&nbsp;":b?" "+CKEDITOR.tools.repeat("&nbsp;",a.length-1):CKEDITOR.tools.repeat("&nbsp;",a.length-1)+" "}),e=e.replace(/\n/g,"<br>"),e=e.replace(/[ \t]{2,}/g,function(a){return CKEDITOR.tools.repeat("&nbsp;",a.length-1)+" "});if(c){var f=b.clone();f.setHtml(e);c.append(f)}else b.setHtml(e)}return c||b}function s(a,b){var c=this._.definition,
d=c.attributes,c=c.styles,e=o(this)[a.getName()],f=CKEDITOR.tools.isEmpty(d)&&CKEDITOR.tools.isEmpty(c),g;for(g in d)if(!((g=="class"||this._.definition.fullMatch)&&a.getAttribute(g)!=l(g,d[g]))&&!(b&&g.slice(0,5)=="data-")){f=a.hasAttribute(g);a.removeAttribute(g)}for(var h in c)if(!(this._.definition.fullMatch&&a.getStyle(h)!=l(h,c[h],true))){f=f||!!a.getStyle(h);a.removeStyle(h)}q(a,e,r[a.getName()]);f&&(this._.definition.alwaysRemoveElement?t(a,1):!CKEDITOR.dtd.$block[a.getName()]||this._.enterMode==
CKEDITOR.ENTER_BR&&!a.hasAttributes()?t(a):a.renameNode(this._.enterMode==CKEDITOR.ENTER_P?"p":"div"))}function w(a){for(var b=o(this),c=a.getElementsByTag(this.element),d,e=c.count();--e>=0;){d=c.getItem(e);d.isReadOnly()||s.call(this,d,true)}for(var f in b)if(f!=this.element){c=a.getElementsByTag(f);for(e=c.count()-1;e>=0;e--){d=c.getItem(e);d.isReadOnly()||q(d,b[f])}}}function q(a,b,c){if(b=b&&b.attributes)for(var d=0;d<b.length;d++){var e=b[d][0],f;if(f=a.getAttribute(e)){var g=b[d][1];(g===null||
g.test&&g.test(f)||typeof g=="string"&&f==g)&&a.removeAttribute(e)}}c||t(a)}function t(a,b){if(!a.hasAttributes()||b)if(CKEDITOR.dtd.$block[a.getName()]){var c=a.getPrevious(F),d=a.getNext(F);c&&(c.type==CKEDITOR.NODE_TEXT||!c.isBlockBoundary({br:1}))&&a.append("br",1);d&&(d.type==CKEDITOR.NODE_TEXT||!d.isBlockBoundary({br:1}))&&a.append("br");a.remove(true)}else{c=a.getFirst();d=a.getLast();a.remove(true);if(c){c.type==CKEDITOR.NODE_ELEMENT&&c.mergeSiblings();d&&(!c.equals(d)&&d.type==CKEDITOR.NODE_ELEMENT)&&
d.mergeSiblings()}}}function i(a,b,c){var d;d=a.element;d=="*"&&(d="span");d=new CKEDITOR.dom.element(d,b);c&&c.copyAttributes(d);d=A(d,a);b.getCustomData("doc_processing_style")&&d.hasAttribute("id")?d.removeAttribute("id"):b.setCustomData("doc_processing_style",1);return d}function A(a,b){var c=b._.definition,d=c.attributes,c=CKEDITOR.style.getStyleText(c);if(d)for(var e in d)a.setAttribute(e,d[e]);c&&a.setAttribute("style",c);return a}function u(a,b){for(var c in a)a[c]=a[c].replace(C,function(a,
c){return b[c]})}function o(a){if(a._.overrides)return a._.overrides;var b=a._.overrides={},c=a._.definition.overrides;if(c){CKEDITOR.tools.isArray(c)||(c=[c]);for(var d=0;d<c.length;d++){var e=c[d],f,g;if(typeof e=="string")f=e.toLowerCase();else{f=e.element?e.element.toLowerCase():a.element;g=e.attributes}e=b[f]||(b[f]={});if(g){var e=e.attributes=e.attributes||[],h;for(h in g)e.push([h.toLowerCase(),g[h]])}}}return b}function l(a,b,c){var d=new CKEDITOR.dom.element("span");d[c?"setStyle":"setAttribute"](a,
b);return d[c?"getStyle":"getAttribute"](a)}function p(a,b,c){for(var d=a.document,e=a.getRanges(),b=b?this.removeFromRange:this.applyToRange,f,g=e.createIterator();f=g.getNextRange();)b.call(this,f,c);a.selectRanges(e);d.removeCustomData("doc_processing_style")}var r={address:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,details:1,datagrid:1,datalist:1},n=
{a:1,blockquote:1,embed:1,hr:1,img:1,li:1,object:1,ol:1,table:1,td:1,tr:1,th:1,ul:1,dl:1,dt:1,dd:1,form:1,audio:1,video:1},P=/\s*(?:;\s*|$)/,C=/#\((.+?)\)/g,L=CKEDITOR.dom.walker.bookmark(0,1),F=CKEDITOR.dom.walker.whitespaces(1);CKEDITOR.style=function(a,b){if(typeof a.type=="string")return new CKEDITOR.style.customHandlers[a.type](a);var c=a.attributes;if(c&&c.style){a.styles=CKEDITOR.tools.extend({},a.styles,CKEDITOR.tools.parseCssText(c.style));delete c.style}if(b){a=CKEDITOR.tools.clone(a);u(a.attributes,
b);u(a.styles,b)}c=this.element=a.element?typeof a.element=="string"?a.element.toLowerCase():a.element:"*";this.type=a.type||(r[c]?CKEDITOR.STYLE_BLOCK:n[c]?CKEDITOR.STYLE_OBJECT:CKEDITOR.STYLE_INLINE);if(typeof this.element=="object")this.type=CKEDITOR.STYLE_OBJECT;this._={definition:a}};CKEDITOR.style.prototype={apply:function(a){if(a instanceof CKEDITOR.dom.document)return p.call(this,a.getSelection());if(this.checkApplicable(a.elementPath(),a)){var b=this._.enterMode;if(!b)this._.enterMode=a.activeEnterMode;
p.call(this,a.getSelection(),0,a);this._.enterMode=b}},remove:function(a){if(a instanceof CKEDITOR.dom.document)return p.call(this,a.getSelection(),1);if(this.checkApplicable(a.elementPath(),a)){var b=this._.enterMode;if(!b)this._.enterMode=a.activeEnterMode;p.call(this,a.getSelection(),1,a);this._.enterMode=b}},applyToRange:function(a){this.applyToRange=this.type==CKEDITOR.STYLE_INLINE?f:this.type==CKEDITOR.STYLE_BLOCK?h:this.type==CKEDITOR.STYLE_OBJECT?e:null;return this.applyToRange(a)},removeFromRange:function(a){this.removeFromRange=
this.type==CKEDITOR.STYLE_INLINE?b:this.type==CKEDITOR.STYLE_BLOCK?k:this.type==CKEDITOR.STYLE_OBJECT?d:null;return this.removeFromRange(a)},applyToObject:function(a){A(a,this)},checkActive:function(a,b){switch(this.type){case CKEDITOR.STYLE_BLOCK:return this.checkElementRemovable(a.block||a.blockLimit,true,b);case CKEDITOR.STYLE_OBJECT:case CKEDITOR.STYLE_INLINE:for(var c=a.elements,d=0,e;d<c.length;d++){e=c[d];if(!(this.type==CKEDITOR.STYLE_INLINE&&(e==a.block||e==a.blockLimit))){if(this.type==
CKEDITOR.STYLE_OBJECT){var f=e.getName();if(!(typeof this.element=="string"?f==this.element:f in this.element))continue}if(this.checkElementRemovable(e,true,b))return true}}}return false},checkApplicable:function(a,b,c){b&&b instanceof CKEDITOR.filter&&(c=b);if(c&&!c.check(this))return false;switch(this.type){case CKEDITOR.STYLE_OBJECT:return!!a.contains(this.element);case CKEDITOR.STYLE_BLOCK:return!!a.blockLimit.getDtd()[this.element]}return true},checkElementMatch:function(a,b){var c=this._.definition;
if(!a||!c.ignoreReadonly&&a.isReadOnly())return false;var d=a.getName();if(typeof this.element=="string"?d==this.element:d in this.element){if(!b&&!a.hasAttributes())return true;if(d=c._AC)c=d;else{var d={},e=0,f=c.attributes;if(f)for(var g in f){e++;d[g]=f[g]}if(g=CKEDITOR.style.getStyleText(c)){d.style||e++;d.style=g}d._length=e;c=c._AC=d}if(c._length){for(var h in c)if(h!="_length"){e=a.getAttribute(h)||"";if(h=="style")a:{d=c[h];typeof d=="string"&&(d=CKEDITOR.tools.parseCssText(d));typeof e==
"string"&&(e=CKEDITOR.tools.parseCssText(e,true));g=void 0;for(g in d)if(!(g in e&&(e[g]==d[g]||d[g]=="inherit"||e[g]=="inherit"))){d=false;break a}d=true}else d=c[h]==e;if(d){if(!b)return true}else if(b)return false}if(b)return true}else return true}return false},checkElementRemovable:function(a,b,c){if(this.checkElementMatch(a,b,c))return true;if(b=o(this)[a.getName()]){var d;if(!(b=b.attributes))return true;for(c=0;c<b.length;c++){d=b[c][0];if(d=a.getAttribute(d)){var e=b[c][1];if(e===null)return true;
if(typeof e=="string"){if(d==e)return true}else if(e.test(d))return true}}}return false},buildPreview:function(a){var b=this._.definition,c=[],d=b.element;d=="bdo"&&(d="span");var c=["<",d],e=b.attributes;if(e)for(var f in e)c.push(" ",f,'="',e[f],'"');(e=CKEDITOR.style.getStyleText(b))&&c.push(' style="',e,'"');c.push(">",a||b.name,"</",d,">");return c.join("")},getDefinition:function(){return this._.definition}};CKEDITOR.style.getStyleText=function(a){var b=a._ST;if(b)return b;var b=a.styles,c=
a.attributes&&a.attributes.style||"",d="";c.length&&(c=c.replace(P,";"));for(var e in b){var f=b[e],g=(e+":"+f).replace(P,";");f=="inherit"?d=d+g:c=c+g}c.length&&(c=CKEDITOR.tools.normalizeCssText(c,true));return a._ST=c+d};CKEDITOR.style.customHandlers={};CKEDITOR.style.addCustomHandler=function(a){var b=function(a){this._={definition:a};this.setup&&this.setup(a)};b.prototype=CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.style.prototype),{assignedTo:CKEDITOR.STYLE_OBJECT},a,true);
return this.customHandlers[a.type]=b};var K=CKEDITOR.POSITION_PRECEDING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED,I=CKEDITOR.POSITION_FOLLOWING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED})();CKEDITOR.styleCommand=function(a,f){this.requiredContent=this.allowedContent=this.style=a;CKEDITOR.tools.extend(this,f,true)};
CKEDITOR.styleCommand.prototype.exec=function(a){a.focus();this.state==CKEDITOR.TRISTATE_OFF?a.applyStyle(this.style):this.state==CKEDITOR.TRISTATE_ON&&a.removeStyle(this.style)};CKEDITOR.stylesSet=new CKEDITOR.resourceManager("","stylesSet");CKEDITOR.addStylesSet=CKEDITOR.tools.bind(CKEDITOR.stylesSet.add,CKEDITOR.stylesSet);CKEDITOR.loadStylesSet=function(a,f,b){CKEDITOR.stylesSet.addExternal(a,f,"");CKEDITOR.stylesSet.load(a,b)};
CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{attachStyleStateChange:function(a,f){var b=this._.styleStateChangeCallbacks;if(!b){b=this._.styleStateChangeCallbacks=[];this.on("selectionChange",function(a){for(var e=0;e<b.length;e++){var d=b[e],f=d.style.checkActive(a.data.path,this)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF;d.fn.call(this,f)}})}b.push({style:a,fn:f})},applyStyle:function(a){a.apply(this)},removeStyle:function(a){a.remove(this)},getStylesSet:function(a){if(this._.stylesDefinitions)a(this._.stylesDefinitions);
else{var f=this,b=f.config.stylesCombo_stylesSet||f.config.stylesSet;if(b===false)a(null);else if(b instanceof Array){f._.stylesDefinitions=b;a(b)}else{b||(b="default");var b=b.split(":"),c=b[0];CKEDITOR.stylesSet.addExternal(c,b[1]?b.slice(1).join(":"):CKEDITOR.getUrl("styles.js"),"");CKEDITOR.stylesSet.load(c,function(b){f._.stylesDefinitions=b[c];a(f._.stylesDefinitions)})}}}});
CKEDITOR.dom.comment=function(a,f){typeof a=="string"&&(a=(f?f.$:document).createComment(a));CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.comment.prototype=new CKEDITOR.dom.node;CKEDITOR.tools.extend(CKEDITOR.dom.comment.prototype,{type:CKEDITOR.NODE_COMMENT,getOuterHtml:function(){return"<\!--"+this.$.nodeValue+"--\>"}});"use strict";
(function(){var a={},f={},b;for(b in CKEDITOR.dtd.$blockLimit)b in CKEDITOR.dtd.$list||(a[b]=1);for(b in CKEDITOR.dtd.$block)b in CKEDITOR.dtd.$blockLimit||b in CKEDITOR.dtd.$empty||(f[b]=1);CKEDITOR.dom.elementPath=function(b,e){var d=null,h=null,k=[],j=b,g,e=e||b.getDocument().getBody();do if(j.type==CKEDITOR.NODE_ELEMENT){k.push(j);if(!this.lastElement){this.lastElement=j;if(j.is(CKEDITOR.dtd.$object)||j.getAttribute("contenteditable")=="false")continue}if(j.equals(e))break;if(!h){g=j.getName();
j.getAttribute("contenteditable")=="true"?h=j:!d&&f[g]&&(d=j);if(a[g]){var m;if(m=!d){if(g=g=="div"){a:{g=j.getChildren();m=0;for(var y=g.count();m<y;m++){var s=g.getItem(m);if(s.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$block[s.getName()]){g=true;break a}}g=false}g=!g}m=g}m?d=j:h=j}}}while(j=j.getParent());h||(h=e);this.block=d;this.blockLimit=h;this.root=e;this.elements=k}})();
CKEDITOR.dom.elementPath.prototype={compare:function(a){var f=this.elements,a=a&&a.elements;if(!a||f.length!=a.length)return false;for(var b=0;b<f.length;b++)if(!f[b].equals(a[b]))return false;return true},contains:function(a,f,b){var c;typeof a=="string"&&(c=function(b){return b.getName()==a});a instanceof CKEDITOR.dom.element?c=function(b){return b.equals(a)}:CKEDITOR.tools.isArray(a)?c=function(b){return CKEDITOR.tools.indexOf(a,b.getName())>-1}:typeof a=="function"?c=a:typeof a=="object"&&(c=
function(b){return b.getName()in a});var e=this.elements,d=e.length;f&&d--;if(b){e=Array.prototype.slice.call(e,0);e.reverse()}for(f=0;f<d;f++)if(c(e[f]))return e[f];return null},isContextFor:function(a){var f;if(a in CKEDITOR.dtd.$block){f=this.contains(CKEDITOR.dtd.$intermediate)||this.root.equals(this.block)&&this.block||this.blockLimit;return!!f.getDtd()[a]}return true},direction:function(){return(this.block||this.blockLimit||this.root).getDirection(1)}};
CKEDITOR.dom.text=function(a,f){typeof a=="string"&&(a=(f?f.$:document).createTextNode(a));this.$=a};CKEDITOR.dom.text.prototype=new CKEDITOR.dom.node;
CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype,{type:CKEDITOR.NODE_TEXT,getLength:function(){return this.$.nodeValue.length},getText:function(){return this.$.nodeValue},setText:function(a){this.$.nodeValue=a},split:function(a){var f=this.$.parentNode,b=f.childNodes.length,c=this.getLength(),e=this.getDocument(),d=new CKEDITOR.dom.text(this.$.splitText(a),e);if(f.childNodes.length==b)if(a>=c){d=e.createText("");d.insertAfter(this)}else{a=e.createText("");a.insertAfter(d);a.remove()}return d},substring:function(a,
f){return typeof f!="number"?this.$.nodeValue.substr(a):this.$.nodeValue.substring(a,f)}});
(function(){function a(a,c,e){var d=a.serializable,f=c[e?"endContainer":"startContainer"],k=e?"endOffset":"startOffset",j=d?c.document.getById(a.startNode):a.startNode,a=d?c.document.getById(a.endNode):a.endNode;if(f.equals(j.getPrevious())){c.startOffset=c.startOffset-f.getLength()-a.getPrevious().getLength();f=a.getNext()}else if(f.equals(a.getPrevious())){c.startOffset=c.startOffset-f.getLength();f=a.getNext()}f.equals(j.getParent())&&c[k]++;f.equals(a.getParent())&&c[k]++;c[e?"endContainer":"startContainer"]=
f;return c}CKEDITOR.dom.rangeList=function(a){if(a instanceof CKEDITOR.dom.rangeList)return a;a?a instanceof CKEDITOR.dom.range&&(a=[a]):a=[];return CKEDITOR.tools.extend(a,f)};var f={createIterator:function(){var a=this,c=CKEDITOR.dom.walker.bookmark(),e=[],d;return{getNextRange:function(f){d=d===void 0?0:d+1;var k=a[d];if(k&&a.length>1){if(!d)for(var j=a.length-1;j>=0;j--)e.unshift(a[j].createBookmark(true));if(f)for(var g=0;a[d+g+1];){for(var m=k.document,f=0,j=m.getById(e[g].endNode),m=m.getById(e[g+
1].startNode);;){j=j.getNextSourceNode(false);if(m.equals(j))f=1;else if(c(j)||j.type==CKEDITOR.NODE_ELEMENT&&j.isBlockBoundary())continue;break}if(!f)break;g++}for(k.moveToBookmark(e.shift());g--;){j=a[++d];j.moveToBookmark(e.shift());k.setEnd(j.endContainer,j.endOffset)}}return k}}},createBookmarks:function(b){for(var c=[],e,d=0;d<this.length;d++){c.push(e=this[d].createBookmark(b,true));for(var f=d+1;f<this.length;f++){this[f]=a(e,this[f]);this[f]=a(e,this[f],true)}}return c},createBookmarks2:function(a){for(var c=
[],e=0;e<this.length;e++)c.push(this[e].createBookmark2(a));return c},moveToBookmarks:function(a){for(var c=0;c<this.length;c++)this[c].moveToBookmark(a[c])}}})();
(function(){function a(){return CKEDITOR.getUrl(CKEDITOR.skinName.split(",")[1]||"skins/"+CKEDITOR.skinName.split(",")[0]+"/")}function f(b){var c=CKEDITOR.skin["ua_"+b],d=CKEDITOR.env;if(c)for(var c=c.split(",").sort(function(a,b){return a>b?-1:1}),e=0,f;e<c.length;e++){f=c[e];if(d.ie&&(f.replace(/^ie/,"")==d.version||d.quirks&&f=="iequirks"))f="ie";if(d[f]){b=b+("_"+c[e]);break}}return CKEDITOR.getUrl(a()+b+".css")}function b(a,b){if(!d[a]){CKEDITOR.document.appendStyleSheet(f(a));d[a]=1}b&&b()}
function c(a){var b=a.getById(h);if(!b){b=a.getHead().append("style");b.setAttribute("id",h);b.setAttribute("type","text/css")}return b}function e(a,b,c){var d,e,f;if(CKEDITOR.env.webkit){b=b.split("}").slice(0,-1);for(e=0;e<b.length;e++)b[e]=b[e].split("{")}for(var h=0;h<a.length;h++)if(CKEDITOR.env.webkit)for(e=0;e<b.length;e++){f=b[e][1];for(d=0;d<c.length;d++)f=f.replace(c[d][0],c[d][1]);a[h].$.sheet.addRule(b[e][0],f)}else{f=b;for(d=0;d<c.length;d++)f=f.replace(c[d][0],c[d][1]);CKEDITOR.env.ie&&
CKEDITOR.env.version<11?a[h].$.styleSheet.cssText=a[h].$.styleSheet.cssText+f:a[h].$.innerHTML=a[h].$.innerHTML+f}}var d={};CKEDITOR.skin={path:a,loadPart:function(c,d){CKEDITOR.skin.name!=CKEDITOR.skinName.split(",")[0]?CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(a()+"skin.js"),function(){b(c,d)}):b(c,d)},getPath:function(a){return CKEDITOR.getUrl(f(a))},icons:{},addIcon:function(a,b,c,d){a=a.toLowerCase();this.icons[a]||(this.icons[a]={path:b,offset:c||0,bgsize:d||"16px"})},getIconStyle:function(a,
b,c,d,e){var f;if(a){a=a.toLowerCase();b&&(f=this.icons[a+"-rtl"]);f||(f=this.icons[a])}a=c||f&&f.path||"";d=d||f&&f.offset;e=e||f&&f.bgsize||"16px";return a&&"background-image:url("+CKEDITOR.getUrl(a)+");background-position:0 "+d+"px;background-size:"+e+";"}};CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{getUiColor:function(){return this.uiColor},setUiColor:function(a){var b=c(CKEDITOR.document);return(this.setUiColor=function(a){this.uiColor=a;var c=CKEDITOR.skin.chameleon,d="",f="";if(typeof c==
"function"){d=c(this,"editor");f=c(this,"panel")}a=[[j,a]];e([b],d,a);e(k,f,a)}).call(this,a)}});var h="cke_ui_color",k=[],j=/\$color/g;CKEDITOR.on("instanceLoaded",function(a){if(!CKEDITOR.env.ie||!CKEDITOR.env.quirks){var b=a.editor,a=function(a){a=(a.data[0]||a.data).element.getElementsByTag("iframe").getItem(0).getFrameDocument();if(!a.getById("cke_ui_color")){a=c(a);k.push(a);var d=b.getUiColor();d&&e([a],CKEDITOR.skin.chameleon(b,"panel"),[[j,d]])}};b.on("panelShow",a);b.on("menuShow",a);b.config.uiColor&&
b.setUiColor(b.config.uiColor)}})})();
(function(){if(CKEDITOR.env.webkit)CKEDITOR.env.hc=false;else{var a=CKEDITOR.dom.element.createFromHtml('<div style="width:0;height:0;position:absolute;left:-10000px;border:1px solid;border-color:red blue"></div>',CKEDITOR.document);a.appendTo(CKEDITOR.document.getHead());try{var f=a.getComputedStyle("border-top-color"),b=a.getComputedStyle("border-right-color");CKEDITOR.env.hc=!!(f&&f==b)}catch(c){CKEDITOR.env.hc=false}a.remove()}if(CKEDITOR.env.hc)CKEDITOR.env.cssClass=CKEDITOR.env.cssClass+" cke_hc";
CKEDITOR.document.appendStyleText(".cke{visibility:hidden;}");CKEDITOR.status="loaded";CKEDITOR.fireOnce("loaded");if(a=CKEDITOR._.pending){delete CKEDITOR._.pending;for(f=0;f<a.length;f++){CKEDITOR.editor.prototype.constructor.apply(a[f][0],a[f][1]);CKEDITOR.add(a[f][0])}}})();/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.skin.name="moono";CKEDITOR.skin.ua_editor="ie,iequirks,ie7,ie8,gecko";CKEDITOR.skin.ua_dialog="ie,iequirks,ie7,ie8";
CKEDITOR.skin.chameleon=function(){var b=function(){return function(b,e){for(var a=b.match(/[^#]./g),c=0;3>c;c++){var f=a,h=c,d;d=parseInt(a[c],16);d=("0"+(0>e?0|d*(1+e):0|d+(255-d)*e).toString(16)).slice(-2);f[h]=d}return"#"+a.join("")}}(),c=function(){var b=new CKEDITOR.template("background:#{to};background-image:-webkit-gradient(linear,lefttop,leftbottom,from({from}),to({to}));background-image:-moz-linear-gradient(top,{from},{to});background-image:-webkit-linear-gradient(top,{from},{to});background-image:-o-linear-gradient(top,{from},{to});background-image:-ms-linear-gradient(top,{from},{to});background-image:linear-gradient(top,{from},{to});filter:progid:DXImageTransform.Microsoft.gradient(gradientType=0,startColorstr='{from}',endColorstr='{to}');");return function(c,
a){return b.output({from:c,to:a})}}(),f={editor:new CKEDITOR.template("{id}.cke_chrome [border-color:{defaultBorder};] {id} .cke_top [ {defaultGradient}border-bottom-color:{defaultBorder};] {id} .cke_bottom [{defaultGradient}border-top-color:{defaultBorder};] {id} .cke_resizer [border-right-color:{ckeResizer}] {id} .cke_dialog_title [{defaultGradient}border-bottom-color:{defaultBorder};] {id} .cke_dialog_footer [{defaultGradient}outline-color:{defaultBorder};border-top-color:{defaultBorder};] {id} .cke_dialog_tab [{lightGradient}border-color:{defaultBorder};] {id} .cke_dialog_tab:hover [{mediumGradient}] {id} .cke_dialog_contents [border-top-color:{defaultBorder};] {id} .cke_dialog_tab_selected, {id} .cke_dialog_tab_selected:hover [background:{dialogTabSelected};border-bottom-color:{dialogTabSelectedBorder};] {id} .cke_dialog_body [background:{dialogBody};border-color:{defaultBorder};] {id} .cke_toolgroup [{lightGradient}border-color:{defaultBorder};] {id} a.cke_button_off:hover, {id} a.cke_button_off:focus, {id} a.cke_button_off:active [{mediumGradient}] {id} .cke_button_on [{ckeButtonOn}] {id} .cke_toolbar_separator [background-color: {ckeToolbarSeparator};] {id} .cke_combo_button [border-color:{defaultBorder};{lightGradient}] {id} a.cke_combo_button:hover, {id} a.cke_combo_button:focus, {id} .cke_combo_on a.cke_combo_button [border-color:{defaultBorder};{mediumGradient}] {id} .cke_path_item [color:{elementsPathColor};] {id} a.cke_path_item:hover, {id} a.cke_path_item:focus, {id} a.cke_path_item:active [background-color:{elementsPathBg};] {id}.cke_panel [border-color:{defaultBorder};] "),
panel:new CKEDITOR.template(".cke_panel_grouptitle [{lightGradient}border-color:{defaultBorder};] .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menubutton:hover .cke_menubutton_icon, .cke_menubutton:focus .cke_menubutton_icon, .cke_menubutton:active .cke_menubutton_icon [background-color:{menubuttonIconHover};] .cke_menuseparator [background-color:{menubuttonIcon};] a:hover.cke_colorbox, a:focus.cke_colorbox, a:active.cke_colorbox [border-color:{defaultBorder};] a:hover.cke_colorauto, a:hover.cke_colormore, a:focus.cke_colorauto, a:focus.cke_colormore, a:active.cke_colorauto, a:active.cke_colormore [background-color:{ckeColorauto};border-color:{defaultBorder};] ")};
return function(g,e){var a=g.uiColor,a={id:"."+g.id,defaultBorder:b(a,-0.1),defaultGradient:c(b(a,0.9),a),lightGradient:c(b(a,1),b(a,0.7)),mediumGradient:c(b(a,0.8),b(a,0.5)),ckeButtonOn:c(b(a,0.6),b(a,0.7)),ckeResizer:b(a,-0.4),ckeToolbarSeparator:b(a,0.5),ckeColorauto:b(a,0.8),dialogBody:b(a,0.7),dialogTabSelected:c("#FFFFFF","#FFFFFF"),dialogTabSelectedBorder:"#FFF",elementsPathColor:b(a,-0.6),elementsPathBg:a,menubuttonIcon:b(a,0.5),menubuttonIconHover:b(a,0.3)};return f[e].output(a).replace(/\[/g,
"{").replace(/\]/g,"}")}}();CKEDITOR.plugins.add("basicstyles",{init:function(c){var e=0,d=function(g,d,b,a){if(a){var a=new CKEDITOR.style(a),f=h[b];f.unshift(a);c.attachStyleStateChange(a,function(a){!c.readOnly&&c.getCommand(b).setState(a)});c.addCommand(b,new CKEDITOR.styleCommand(a,{contentForms:f}));c.ui.addButton&&c.ui.addButton(g,{label:d,command:b,toolbar:"basicstyles,"+(e+=10)})}},h={bold:["strong","b",["span",function(a){a=a.styles["font-weight"];return"bold"==a||700<=+a}]],italic:["em","i",["span",function(a){return"italic"==
a.styles["font-style"]}]],underline:["u",["span",function(a){return"underline"==a.styles["text-decoration"]}]],strike:["s","strike",["span",function(a){return"line-through"==a.styles["text-decoration"]}]],subscript:["sub"],superscript:["sup"]},b=c.config,a=c.lang.basicstyles;d("Bold",a.bold,"bold",b.coreStyles_bold);d("Italic",a.italic,"italic",b.coreStyles_italic);d("Underline",a.underline,"underline",b.coreStyles_underline);d("Strike",a.strike,"strike",b.coreStyles_strike);d("Subscript",a.subscript,
"subscript",b.coreStyles_subscript);d("Superscript",a.superscript,"superscript",b.coreStyles_superscript);c.setKeystroke([[CKEDITOR.CTRL+66,"bold"],[CKEDITOR.CTRL+73,"italic"],[CKEDITOR.CTRL+85,"underline"]])}});CKEDITOR.config.coreStyles_bold={element:"strong",overrides:"b"};CKEDITOR.config.coreStyles_italic={element:"em",overrides:"i"};CKEDITOR.config.coreStyles_underline={element:"u"};CKEDITOR.config.coreStyles_strike={element:"s",overrides:"strike"};CKEDITOR.config.coreStyles_subscript={element:"sub"};
CKEDITOR.config.coreStyles_superscript={element:"sup"};(function(){var k={exec:function(g){var a=g.getCommand("blockquote").state,i=g.getSelection(),c=i&&i.getRanges()[0];if(c){var h=i.createBookmarks();if(CKEDITOR.env.ie){var e=h[0].startNode,b=h[0].endNode,d;if(e&&"blockquote"==e.getParent().getName())for(d=e;d=d.getNext();)if(d.type==CKEDITOR.NODE_ELEMENT&&d.isBlockBoundary()){e.move(d,!0);break}if(b&&"blockquote"==b.getParent().getName())for(d=b;d=d.getPrevious();)if(d.type==CKEDITOR.NODE_ELEMENT&&d.isBlockBoundary()){b.move(d);break}}var f=c.createIterator();
f.enlargeBr=g.config.enterMode!=CKEDITOR.ENTER_BR;if(a==CKEDITOR.TRISTATE_OFF){for(e=[];a=f.getNextParagraph();)e.push(a);1>e.length&&(a=g.document.createElement(g.config.enterMode==CKEDITOR.ENTER_P?"p":"div"),b=h.shift(),c.insertNode(a),a.append(new CKEDITOR.dom.text("﻿",g.document)),c.moveToBookmark(b),c.selectNodeContents(a),c.collapse(!0),b=c.createBookmark(),e.push(a),h.unshift(b));d=e[0].getParent();c=[];for(b=0;b<e.length;b++)a=e[b],d=d.getCommonAncestor(a.getParent());for(a={table:1,tbody:1,
tr:1,ol:1,ul:1};a[d.getName()];)d=d.getParent();for(b=null;0<e.length;){for(a=e.shift();!a.getParent().equals(d);)a=a.getParent();a.equals(b)||c.push(a);b=a}for(;0<c.length;)if(a=c.shift(),"blockquote"==a.getName()){for(b=new CKEDITOR.dom.documentFragment(g.document);a.getFirst();)b.append(a.getFirst().remove()),e.push(b.getLast());b.replace(a)}else e.push(a);c=g.document.createElement("blockquote");for(c.insertBefore(e[0]);0<e.length;)a=e.shift(),c.append(a)}else if(a==CKEDITOR.TRISTATE_ON){b=[];
for(d={};a=f.getNextParagraph();){for(e=c=null;a.getParent();){if("blockquote"==a.getParent().getName()){c=a.getParent();e=a;break}a=a.getParent()}c&&(e&&!e.getCustomData("blockquote_moveout"))&&(b.push(e),CKEDITOR.dom.element.setMarker(d,e,"blockquote_moveout",!0))}CKEDITOR.dom.element.clearAllMarkers(d);a=[];e=[];for(d={};0<b.length;)f=b.shift(),c=f.getParent(),f.getPrevious()?f.getNext()?(f.breakParent(f.getParent()),e.push(f.getNext())):f.remove().insertAfter(c):f.remove().insertBefore(c),c.getCustomData("blockquote_processed")||
(e.push(c),CKEDITOR.dom.element.setMarker(d,c,"blockquote_processed",!0)),a.push(f);CKEDITOR.dom.element.clearAllMarkers(d);for(b=e.length-1;0<=b;b--){c=e[b];a:{d=c;for(var f=0,k=d.getChildCount(),j=void 0;f<k&&(j=d.getChild(f));f++)if(j.type==CKEDITOR.NODE_ELEMENT&&j.isBlockBoundary()){d=!1;break a}d=!0}d&&c.remove()}if(g.config.enterMode==CKEDITOR.ENTER_BR)for(c=!0;a.length;)if(f=a.shift(),"div"==f.getName()){b=new CKEDITOR.dom.documentFragment(g.document);c&&(f.getPrevious()&&!(f.getPrevious().type==
CKEDITOR.NODE_ELEMENT&&f.getPrevious().isBlockBoundary()))&&b.append(g.document.createElement("br"));for(c=f.getNext()&&!(f.getNext().type==CKEDITOR.NODE_ELEMENT&&f.getNext().isBlockBoundary());f.getFirst();)f.getFirst().remove().appendTo(b);c&&b.append(g.document.createElement("br"));b.replace(f);c=!1}}i.selectBookmarks(h);g.focus()}},refresh:function(g,a){this.setState(g.elementPath(a.block||a.blockLimit).contains("blockquote",1)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)},context:"blockquote",
allowedContent:"blockquote",requiredContent:"blockquote"};CKEDITOR.plugins.add("blockquote",{init:function(g){g.blockless||(g.addCommand("blockquote",k),g.ui.addButton&&g.ui.addButton("Blockquote",{label:g.lang.blockquote.toolbar,command:"blockquote",toolbar:"blocks,10"}))}})})();CKEDITOR.plugins.add("dialogui",{onLoad:function(){var h=function(b){this._||(this._={});this._["default"]=this._.initValue=b["default"]||"";this._.required=b.required||!1;for(var a=[this._],d=1;d<arguments.length;d++)a.push(arguments[d]);a.push(!0);CKEDITOR.tools.extend.apply(CKEDITOR.tools,a);return this._},r={build:function(b,a,d){return new CKEDITOR.ui.dialog.textInput(b,a,d)}},l={build:function(b,a,d){return new CKEDITOR.ui.dialog[a.type](b,a,d)}},n={isChanged:function(){return this.getValue()!=
this.getInitValue()},reset:function(b){this.setValue(this.getInitValue(),b)},setInitValue:function(){this._.initValue=this.getValue()},resetInitValue:function(){this._.initValue=this._["default"]},getInitValue:function(){return this._.initValue}},o=CKEDITOR.tools.extend({},CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors,{onChange:function(b,a){this._.domOnChangeRegistered||(b.on("load",function(){this.getInputElement().on("change",function(){b.parts.dialog.isVisible()&&this.fire("change",{value:this.getValue()})},
this)},this),this._.domOnChangeRegistered=!0);this.on("change",a)}},!0),s=/^on([A-Z]\w+)/,p=function(b){for(var a in b)(s.test(a)||"title"==a||"type"==a)&&delete b[a];return b};CKEDITOR.tools.extend(CKEDITOR.ui.dialog,{labeledElement:function(b,a,d,f){if(!(4>arguments.length)){var c=h.call(this,a);c.labelId=CKEDITOR.tools.getNextId()+"_label";this._.children=[];var e={role:a.role||"presentation"};a.includeLabel&&(e["aria-labelledby"]=c.labelId);CKEDITOR.ui.dialog.uiElement.call(this,b,a,d,"div",null,
e,function(){var e=[],g=a.required?" cke_required":"";if(a.labelLayout!="horizontal")e.push('<label class="cke_dialog_ui_labeled_label'+g+'" ',' id="'+c.labelId+'"',c.inputId?' for="'+c.inputId+'"':"",(a.labelStyle?' style="'+a.labelStyle+'"':"")+">",a.label,"</label>",'<div class="cke_dialog_ui_labeled_content"',a.controlStyle?' style="'+a.controlStyle+'"':"",' role="presentation">',f.call(this,b,a),"</div>");else{g={type:"hbox",widths:a.widths,padding:0,children:[{type:"html",html:'<label class="cke_dialog_ui_labeled_label'+
g+'" id="'+c.labelId+'" for="'+c.inputId+'"'+(a.labelStyle?' style="'+a.labelStyle+'"':"")+">"+CKEDITOR.tools.htmlEncode(a.label)+"</span>"},{type:"html",html:'<span class="cke_dialog_ui_labeled_content"'+(a.controlStyle?' style="'+a.controlStyle+'"':"")+">"+f.call(this,b,a)+"</span>"}]};CKEDITOR.dialog._.uiElementBuilders.hbox.build(b,g,e)}return e.join("")})}},textInput:function(b,a,d){if(!(3>arguments.length)){h.call(this,a);var f=this._.inputId=CKEDITOR.tools.getNextId()+"_textInput",c={"class":"cke_dialog_ui_input_"+
a.type,id:f,type:a.type};a.validate&&(this.validate=a.validate);a.maxLength&&(c.maxlength=a.maxLength);a.size&&(c.size=a.size);a.inputStyle&&(c.style=a.inputStyle);var e=this,k=!1;b.on("load",function(){e.getInputElement().on("keydown",function(a){a.data.getKeystroke()==13&&(k=true)});e.getInputElement().on("keyup",function(a){if(a.data.getKeystroke()==13&&k){b.getButton("ok")&&setTimeout(function(){b.getButton("ok").click()},0);k=false}},null,null,1E3)});CKEDITOR.ui.dialog.labeledElement.call(this,
b,a,d,function(){var b=['<div class="cke_dialog_ui_input_',a.type,'" role="presentation"'];a.width&&b.push('style="width:'+a.width+'" ');b.push("><input ");c["aria-labelledby"]=this._.labelId;this._.required&&(c["aria-required"]=this._.required);for(var e in c)b.push(e+'="'+c[e]+'" ');b.push(" /></div>");return b.join("")})}},textarea:function(b,a,d){if(!(3>arguments.length)){h.call(this,a);var f=this,c=this._.inputId=CKEDITOR.tools.getNextId()+"_textarea",e={};a.validate&&(this.validate=a.validate);
e.rows=a.rows||5;e.cols=a.cols||20;e["class"]="cke_dialog_ui_input_textarea "+(a["class"]||"");"undefined"!=typeof a.inputStyle&&(e.style=a.inputStyle);a.dir&&(e.dir=a.dir);CKEDITOR.ui.dialog.labeledElement.call(this,b,a,d,function(){e["aria-labelledby"]=this._.labelId;this._.required&&(e["aria-required"]=this._.required);var a=['<div class="cke_dialog_ui_input_textarea" role="presentation"><textarea id="',c,'" '],b;for(b in e)a.push(b+'="'+CKEDITOR.tools.htmlEncode(e[b])+'" ');a.push(">",CKEDITOR.tools.htmlEncode(f._["default"]),
"</textarea></div>");return a.join("")})}},checkbox:function(b,a,d){if(!(3>arguments.length)){var f=h.call(this,a,{"default":!!a["default"]});a.validate&&(this.validate=a.validate);CKEDITOR.ui.dialog.uiElement.call(this,b,a,d,"span",null,null,function(){var c=CKEDITOR.tools.extend({},a,{id:a.id?a.id+"_checkbox":CKEDITOR.tools.getNextId()+"_checkbox"},true),e=[],d=CKEDITOR.tools.getNextId()+"_label",g={"class":"cke_dialog_ui_checkbox_input",type:"checkbox","aria-labelledby":d};p(c);if(a["default"])g.checked=
"checked";if(typeof c.inputStyle!="undefined")c.style=c.inputStyle;f.checkbox=new CKEDITOR.ui.dialog.uiElement(b,c,e,"input",null,g);e.push(' <label id="',d,'" for="',g.id,'"'+(a.labelStyle?' style="'+a.labelStyle+'"':"")+">",CKEDITOR.tools.htmlEncode(a.label),"</label>");return e.join("")})}},radio:function(b,a,d){if(!(3>arguments.length)){h.call(this,a);this._["default"]||(this._["default"]=this._.initValue=a.items[0][1]);a.validate&&(this.validate=a.valdiate);var f=[],c=this;a.role="radiogroup";
a.includeLabel=!0;CKEDITOR.ui.dialog.labeledElement.call(this,b,a,d,function(){for(var e=[],d=[],g=(a.id?a.id:CKEDITOR.tools.getNextId())+"_radio",i=0;i<a.items.length;i++){var j=a.items[i],h=j[2]!==void 0?j[2]:j[0],l=j[1]!==void 0?j[1]:j[0],m=CKEDITOR.tools.getNextId()+"_radio_input",n=m+"_label",m=CKEDITOR.tools.extend({},a,{id:m,title:null,type:null},true),h=CKEDITOR.tools.extend({},m,{title:h},true),o={type:"radio","class":"cke_dialog_ui_radio_input",name:g,value:l,"aria-labelledby":n},q=[];if(c._["default"]==
l)o.checked="checked";p(m);p(h);if(typeof m.inputStyle!="undefined")m.style=m.inputStyle;m.keyboardFocusable=true;f.push(new CKEDITOR.ui.dialog.uiElement(b,m,q,"input",null,o));q.push(" ");new CKEDITOR.ui.dialog.uiElement(b,h,q,"label",null,{id:n,"for":o.id},j[0]);e.push(q.join(""))}new CKEDITOR.ui.dialog.hbox(b,f,e,d);return d.join("")});this._.children=f}},button:function(b,a,d){if(arguments.length){"function"==typeof a&&(a=a(b.getParentEditor()));h.call(this,a,{disabled:a.disabled||!1});CKEDITOR.event.implementOn(this);
var f=this;b.on("load",function(){var a=this.getElement();(function(){a.on("click",function(a){f.click();a.data.preventDefault()});a.on("keydown",function(a){a.data.getKeystroke()in{32:1}&&(f.click(),a.data.preventDefault())})})();a.unselectable()},this);var c=CKEDITOR.tools.extend({},a);delete c.style;var e=CKEDITOR.tools.getNextId()+"_label";CKEDITOR.ui.dialog.uiElement.call(this,b,c,d,"a",null,{style:a.style,href:"javascript:void(0)",title:a.label,hidefocus:"true","class":a["class"],role:"button",
"aria-labelledby":e},'<span id="'+e+'" class="cke_dialog_ui_button">'+CKEDITOR.tools.htmlEncode(a.label)+"</span>")}},select:function(b,a,d){if(!(3>arguments.length)){var f=h.call(this,a);a.validate&&(this.validate=a.validate);f.inputId=CKEDITOR.tools.getNextId()+"_select";CKEDITOR.ui.dialog.labeledElement.call(this,b,a,d,function(){var c=CKEDITOR.tools.extend({},a,{id:a.id?a.id+"_select":CKEDITOR.tools.getNextId()+"_select"},true),e=[],d=[],g={id:f.inputId,"class":"cke_dialog_ui_input_select","aria-labelledby":this._.labelId};
e.push('<div class="cke_dialog_ui_input_',a.type,'" role="presentation"');a.width&&e.push('style="width:'+a.width+'" ');e.push(">");if(a.size!==void 0)g.size=a.size;if(a.multiple!==void 0)g.multiple=a.multiple;p(c);for(var i=0,j;i<a.items.length&&(j=a.items[i]);i++)d.push('<option value="',CKEDITOR.tools.htmlEncode(j[1]!==void 0?j[1]:j[0]).replace(/"/g,"&quot;"),'" /> ',CKEDITOR.tools.htmlEncode(j[0]));if(typeof c.inputStyle!="undefined")c.style=c.inputStyle;f.select=new CKEDITOR.ui.dialog.uiElement(b,
c,e,"select",null,g,d.join(""));e.push("</div>");return e.join("")})}},file:function(b,a,d){if(!(3>arguments.length)){void 0===a["default"]&&(a["default"]="");var f=CKEDITOR.tools.extend(h.call(this,a),{definition:a,buttons:[]});a.validate&&(this.validate=a.validate);b.on("load",function(){CKEDITOR.document.getById(f.frameId).getParent().addClass("cke_dialog_ui_input_file")});CKEDITOR.ui.dialog.labeledElement.call(this,b,a,d,function(){f.frameId=CKEDITOR.tools.getNextId()+"_fileInput";var b=['<iframe frameborder="0" allowtransparency="0" class="cke_dialog_ui_input_file" role="presentation" id="',
f.frameId,'" title="',a.label,'" src="javascript:void('];b.push(CKEDITOR.env.ie?"(function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+"})()":"0");b.push(')"></iframe>');return b.join("")})}},fileButton:function(b,a,d){var f=this;if(!(3>arguments.length)){h.call(this,a);a.validate&&(this.validate=a.validate);var c=CKEDITOR.tools.extend({},a),e=c.onClick;c.className=(c.className?c.className+" ":"")+"cke_dialog_ui_button";c.onClick=function(c){var d=
a["for"];if(!e||e.call(this,c)!==false){b.getContentElement(d[0],d[1]).submit();this.disable()}};b.on("load",function(){b.getContentElement(a["for"][0],a["for"][1])._.buttons.push(f)});CKEDITOR.ui.dialog.button.call(this,b,c,d)}},html:function(){var b=/^\s*<[\w:]+\s+([^>]*)?>/,a=/^(\s*<[\w:]+(?:\s+[^>]*)?)((?:.|\r|\n)+)$/,d=/\/$/;return function(f,c,e){if(!(3>arguments.length)){var k=[],g=c.html;"<"!=g.charAt(0)&&(g="<span>"+g+"</span>");var i=c.focus;if(i){var j=this.focus;this.focus=function(){("function"==
typeof i?i:j).call(this);this.fire("focus")};c.isFocusable&&(this.isFocusable=this.isFocusable);this.keyboardFocusable=!0}CKEDITOR.ui.dialog.uiElement.call(this,f,c,k,"span",null,null,"");k=k.join("").match(b);g=g.match(a)||["","",""];d.test(g[1])&&(g[1]=g[1].slice(0,-1),g[2]="/"+g[2]);e.push([g[1]," ",k[1]||"",g[2]].join(""))}}}(),fieldset:function(b,a,d,f,c){var e=c.label;this._={children:a};CKEDITOR.ui.dialog.uiElement.call(this,b,c,f,"fieldset",null,null,function(){var a=[];e&&a.push("<legend"+
(c.labelStyle?' style="'+c.labelStyle+'"':"")+">"+e+"</legend>");for(var b=0;b<d.length;b++)a.push(d[b]);return a.join("")})}},!0);CKEDITOR.ui.dialog.html.prototype=new CKEDITOR.ui.dialog.uiElement;CKEDITOR.ui.dialog.labeledElement.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{setLabel:function(b){var a=CKEDITOR.document.getById(this._.labelId);1>a.getChildCount()?(new CKEDITOR.dom.text(b,CKEDITOR.document)).appendTo(a):a.getChild(0).$.nodeValue=b;return this},getLabel:function(){var b=
CKEDITOR.document.getById(this._.labelId);return!b||1>b.getChildCount()?"":b.getChild(0).getText()},eventProcessors:o},!0);CKEDITOR.ui.dialog.button.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{click:function(){return!this._.disabled?this.fire("click",{dialog:this._.dialog}):!1},enable:function(){this._.disabled=!1;var b=this.getElement();b&&b.removeClass("cke_disabled")},disable:function(){this._.disabled=!0;this.getElement().addClass("cke_disabled")},isVisible:function(){return this.getElement().getFirst().isVisible()},
isEnabled:function(){return!this._.disabled},eventProcessors:CKEDITOR.tools.extend({},CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors,{onClick:function(b,a){this.on("click",function(){a.apply(this,arguments)})}},!0),accessKeyUp:function(){this.click()},accessKeyDown:function(){this.focus()},keyboardFocusable:!0},!0);CKEDITOR.ui.dialog.textInput.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,{getInputElement:function(){return CKEDITOR.document.getById(this._.inputId)},
focus:function(){var b=this.selectParentTab();setTimeout(function(){var a=b.getInputElement();a&&a.$.focus()},0)},select:function(){var b=this.selectParentTab();setTimeout(function(){var a=b.getInputElement();a&&(a.$.focus(),a.$.select())},0)},accessKeyUp:function(){this.select()},setValue:function(b){!b&&(b="");return CKEDITOR.ui.dialog.uiElement.prototype.setValue.apply(this,arguments)},keyboardFocusable:!0},n,!0);CKEDITOR.ui.dialog.textarea.prototype=new CKEDITOR.ui.dialog.textInput;CKEDITOR.ui.dialog.select.prototype=
CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,{getInputElement:function(){return this._.select.getElement()},add:function(b,a,d){var f=new CKEDITOR.dom.element("option",this.getDialog().getParentEditor().document),c=this.getInputElement().$;f.$.text=b;f.$.value=void 0===a||null===a?b:a;void 0===d||null===d?CKEDITOR.env.ie?c.add(f.$):c.add(f.$,null):c.add(f.$,d);return this},remove:function(b){this.getInputElement().$.remove(b);return this},clear:function(){for(var b=this.getInputElement().$;0<
b.length;)b.remove(0);return this},keyboardFocusable:!0},n,!0);CKEDITOR.ui.dialog.checkbox.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{getInputElement:function(){return this._.checkbox.getElement()},setValue:function(b,a){this.getInputElement().$.checked=b;!a&&this.fire("change",{value:b})},getValue:function(){return this.getInputElement().$.checked},accessKeyUp:function(){this.setValue(!this.getValue())},eventProcessors:{onChange:function(b,a){if(!CKEDITOR.env.ie||8<CKEDITOR.env.version)return o.onChange.apply(this,
arguments);b.on("load",function(){var a=this._.checkbox.getElement();a.on("propertychange",function(b){b=b.data.$;"checked"==b.propertyName&&this.fire("change",{value:a.$.checked})},this)},this);this.on("change",a);return null}},keyboardFocusable:!0},n,!0);CKEDITOR.ui.dialog.radio.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{setValue:function(b,a){for(var d=this._.children,f,c=0;c<d.length&&(f=d[c]);c++)f.getElement().$.checked=f.getValue()==b;!a&&this.fire("change",{value:b})},
getValue:function(){for(var b=this._.children,a=0;a<b.length;a++)if(b[a].getElement().$.checked)return b[a].getValue();return null},accessKeyUp:function(){var b=this._.children,a;for(a=0;a<b.length;a++)if(b[a].getElement().$.checked){b[a].getElement().focus();return}b[0].getElement().focus()},eventProcessors:{onChange:function(b,a){if(CKEDITOR.env.ie)b.on("load",function(){for(var a=this._.children,b=this,c=0;c<a.length;c++)a[c].getElement().on("propertychange",function(a){a=a.data.$;"checked"==a.propertyName&&
this.$.checked&&b.fire("change",{value:this.getAttribute("value")})})},this),this.on("change",a);else return o.onChange.apply(this,arguments);return null}}},n,!0);CKEDITOR.ui.dialog.file.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,n,{getInputElement:function(){var b=CKEDITOR.document.getById(this._.frameId).getFrameDocument();return 0<b.$.forms.length?new CKEDITOR.dom.element(b.$.forms[0].elements[0]):this.getElement()},submit:function(){this.getInputElement().getParent().$.submit();
return this},getAction:function(){return this.getInputElement().getParent().$.action},registerEvents:function(b){var a=/^on([A-Z]\w+)/,d,f=function(a,b,c,d){a.on("formLoaded",function(){a.getInputElement().on(c,d,a)})},c;for(c in b)if(d=c.match(a))this.eventProcessors[c]?this.eventProcessors[c].call(this,this._.dialog,b[c]):f(this,this._.dialog,d[1].toLowerCase(),b[c]);return this},reset:function(){function b(){d.$.open();var b="";f.size&&(b=f.size-(CKEDITOR.env.ie?7:0));var h=a.frameId+"_input";
d.$.write(['<html dir="'+g+'" lang="'+i+'"><head><title></title></head><body style="margin: 0; overflow: hidden; background: transparent;">','<form enctype="multipart/form-data" method="POST" dir="'+g+'" lang="'+i+'" action="',CKEDITOR.tools.htmlEncode(f.action),'"><label id="',a.labelId,'" for="',h,'" style="display:none">',CKEDITOR.tools.htmlEncode(f.label),'</label><input style="width:100%" id="',h,'" aria-labelledby="',a.labelId,'" type="file" name="',CKEDITOR.tools.htmlEncode(f.id||"cke_upload"),
'" size="',CKEDITOR.tools.htmlEncode(0<b?b:""),'" /></form></body></html><script>',CKEDITOR.env.ie?"("+CKEDITOR.tools.fixDomain+")();":"","window.parent.CKEDITOR.tools.callFunction("+e+");","window.onbeforeunload = function() {window.parent.CKEDITOR.tools.callFunction("+k+")}","<\/script>"].join(""));d.$.close();for(b=0;b<c.length;b++)c[b].enable()}var a=this._,d=CKEDITOR.document.getById(a.frameId).getFrameDocument(),f=a.definition,c=a.buttons,e=this.formLoadedNumber,k=this.formUnloadNumber,g=a.dialog._.editor.lang.dir,
i=a.dialog._.editor.langCode;e||(e=this.formLoadedNumber=CKEDITOR.tools.addFunction(function(){this.fire("formLoaded")},this),k=this.formUnloadNumber=CKEDITOR.tools.addFunction(function(){this.getInputElement().clearCustomData()},this),this.getDialog()._.editor.on("destroy",function(){CKEDITOR.tools.removeFunction(e);CKEDITOR.tools.removeFunction(k)}));CKEDITOR.env.gecko?setTimeout(b,500):b()},getValue:function(){return this.getInputElement().$.value||""},setInitValue:function(){this._.initValue=
""},eventProcessors:{onChange:function(b,a){this._.domOnChangeRegistered||(this.on("formLoaded",function(){this.getInputElement().on("change",function(){this.fire("change",{value:this.getValue()})},this)},this),this._.domOnChangeRegistered=!0);this.on("change",a)}},keyboardFocusable:!0},!0);CKEDITOR.ui.dialog.fileButton.prototype=new CKEDITOR.ui.dialog.button;CKEDITOR.ui.dialog.fieldset.prototype=CKEDITOR.tools.clone(CKEDITOR.ui.dialog.hbox.prototype);CKEDITOR.dialog.addUIElement("text",r);CKEDITOR.dialog.addUIElement("password",
r);CKEDITOR.dialog.addUIElement("textarea",l);CKEDITOR.dialog.addUIElement("checkbox",l);CKEDITOR.dialog.addUIElement("radio",l);CKEDITOR.dialog.addUIElement("button",l);CKEDITOR.dialog.addUIElement("select",l);CKEDITOR.dialog.addUIElement("file",l);CKEDITOR.dialog.addUIElement("fileButton",l);CKEDITOR.dialog.addUIElement("html",l);CKEDITOR.dialog.addUIElement("fieldset",{build:function(b,a,d){for(var f=a.children,c,e=[],h=[],g=0;g<f.length&&(c=f[g]);g++){var i=[];e.push(i);h.push(CKEDITOR.dialog._.uiElementBuilders[c.type].build(b,
c,i))}return new CKEDITOR.ui.dialog[a.type](b,h,e,d,a)}})}});CKEDITOR.DIALOG_RESIZE_NONE=0;CKEDITOR.DIALOG_RESIZE_WIDTH=1;CKEDITOR.DIALOG_RESIZE_HEIGHT=2;CKEDITOR.DIALOG_RESIZE_BOTH=3;
(function(){function t(){for(var a=this._.tabIdList.length,b=CKEDITOR.tools.indexOf(this._.tabIdList,this._.currentTabId)+a,c=b-1;c>b-a;c--)if(this._.tabs[this._.tabIdList[c%a]][0].$.offsetHeight)return this._.tabIdList[c%a];return null}function u(){for(var a=this._.tabIdList.length,b=CKEDITOR.tools.indexOf(this._.tabIdList,this._.currentTabId),c=b+1;c<b+a;c++)if(this._.tabs[this._.tabIdList[c%a]][0].$.offsetHeight)return this._.tabIdList[c%a];return null}function G(a,b){for(var c=a.$.getElementsByTagName("input"),
e=0,d=c.length;e<d;e++){var g=new CKEDITOR.dom.element(c[e]);"text"==g.getAttribute("type").toLowerCase()&&(b?(g.setAttribute("value",g.getCustomData("fake_value")||""),g.removeCustomData("fake_value")):(g.setCustomData("fake_value",g.getAttribute("value")),g.setAttribute("value","")))}}function P(a,b){var c=this.getInputElement();c&&(a?c.removeAttribute("aria-invalid"):c.setAttribute("aria-invalid",!0));a||(this.select?this.select():this.focus());b&&alert(b);this.fire("validated",{valid:a,msg:b})}
function Q(){var a=this.getInputElement();a&&a.removeAttribute("aria-invalid")}function R(a){var a=CKEDITOR.dom.element.createFromHtml(CKEDITOR.addTemplate("dialog",S).output({id:CKEDITOR.tools.getNextNumber(),editorId:a.id,langDir:a.lang.dir,langCode:a.langCode,editorDialogClass:"cke_editor_"+a.name.replace(/\./g,"\\.")+"_dialog",closeTitle:a.lang.common.close,hidpi:CKEDITOR.env.hidpi?"cke_hidpi":""})),b=a.getChild([0,0,0,0,0]),c=b.getChild(0),e=b.getChild(1);if(CKEDITOR.env.ie&&!CKEDITOR.env.quirks){var d=
"javascript:void(function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+"}())";CKEDITOR.dom.element.createFromHtml('<iframe frameBorder="0" class="cke_iframe_shim" src="'+d+'" tabIndex="-1"></iframe>').appendTo(b.getParent())}c.unselectable();e.unselectable();return{element:a,parts:{dialog:a.getChild(0),title:c,close:e,tabs:b.getChild(2),contents:b.getChild([3,0,0,0]),footer:b.getChild([3,0,1,0])}}}function H(a,b,c){this.element=b;this.focusIndex=c;this.tabIndex=
0;this.isFocusable=function(){return!b.getAttribute("disabled")&&b.isVisible()};this.focus=function(){a._.currentFocusIndex=this.focusIndex;this.element.focus()};b.on("keydown",function(a){a.data.getKeystroke()in{32:1,13:1}&&this.fire("click")});b.on("focus",function(){this.fire("mouseover")});b.on("blur",function(){this.fire("mouseout")})}function T(a){function b(){a.layout()}var c=CKEDITOR.document.getWindow();c.on("resize",b);a.on("hide",function(){c.removeListener("resize",b)})}function I(a,b){this._=
{dialog:a};CKEDITOR.tools.extend(this,b)}function U(a){function b(b){var c=a.getSize(),i=CKEDITOR.document.getWindow().getViewPaneSize(),o=b.data.$.screenX,j=b.data.$.screenY,n=o-e.x,l=j-e.y;e={x:o,y:j};d.x+=n;d.y+=l;a.move(d.x+h[3]<f?-h[3]:d.x-h[1]>i.width-c.width-f?i.width-c.width+("rtl"==g.lang.dir?0:h[1]):d.x,d.y+h[0]<f?-h[0]:d.y-h[2]>i.height-c.height-f?i.height-c.height+h[2]:d.y,1);b.data.preventDefault()}function c(){CKEDITOR.document.removeListener("mousemove",b);CKEDITOR.document.removeListener("mouseup",
c);if(CKEDITOR.env.ie6Compat){var a=q.getChild(0).getFrameDocument();a.removeListener("mousemove",b);a.removeListener("mouseup",c)}}var e=null,d=null,g=a.getParentEditor(),f=g.config.dialog_magnetDistance,h=CKEDITOR.skin.margins||[0,0,0,0];"undefined"==typeof f&&(f=20);a.parts.title.on("mousedown",function(f){e={x:f.data.$.screenX,y:f.data.$.screenY};CKEDITOR.document.on("mousemove",b);CKEDITOR.document.on("mouseup",c);d=a.getPosition();if(CKEDITOR.env.ie6Compat){var h=q.getChild(0).getFrameDocument();
h.on("mousemove",b);h.on("mouseup",c)}f.data.preventDefault()},a)}function V(a){var b,c;function e(d){var e="rtl"==h.lang.dir,j=o.width,C=o.height,D=j+(d.data.$.screenX-b)*(e?-1:1)*(a._.moved?1:2),n=C+(d.data.$.screenY-c)*(a._.moved?1:2),x=a._.element.getFirst(),x=e&&x.getComputedStyle("right"),y=a.getPosition();y.y+n>i.height&&(n=i.height-y.y);if((e?x:y.x)+D>i.width)D=i.width-(e?x:y.x);if(f==CKEDITOR.DIALOG_RESIZE_WIDTH||f==CKEDITOR.DIALOG_RESIZE_BOTH)j=Math.max(g.minWidth||0,D-m);if(f==CKEDITOR.DIALOG_RESIZE_HEIGHT||
f==CKEDITOR.DIALOG_RESIZE_BOTH)C=Math.max(g.minHeight||0,n-k);a.resize(j,C);a._.moved||a.layout();d.data.preventDefault()}function d(){CKEDITOR.document.removeListener("mouseup",d);CKEDITOR.document.removeListener("mousemove",e);j&&(j.remove(),j=null);if(CKEDITOR.env.ie6Compat){var a=q.getChild(0).getFrameDocument();a.removeListener("mouseup",d);a.removeListener("mousemove",e)}}var g=a.definition,f=g.resizable;if(f!=CKEDITOR.DIALOG_RESIZE_NONE){var h=a.getParentEditor(),m,k,i,o,j,n=CKEDITOR.tools.addFunction(function(f){o=
a.getSize();var h=a.parts.contents;h.$.getElementsByTagName("iframe").length&&(j=CKEDITOR.dom.element.createFromHtml('<div class="cke_dialog_resize_cover" style="height: 100%; position: absolute; width: 100%;"></div>'),h.append(j));k=o.height-a.parts.contents.getSize("height",!(CKEDITOR.env.gecko||CKEDITOR.env.ie&&CKEDITOR.env.quirks));m=o.width-a.parts.contents.getSize("width",1);b=f.screenX;c=f.screenY;i=CKEDITOR.document.getWindow().getViewPaneSize();CKEDITOR.document.on("mousemove",e);CKEDITOR.document.on("mouseup",
d);CKEDITOR.env.ie6Compat&&(h=q.getChild(0).getFrameDocument(),h.on("mousemove",e),h.on("mouseup",d));f.preventDefault&&f.preventDefault()});a.on("load",function(){var b="";f==CKEDITOR.DIALOG_RESIZE_WIDTH?b=" cke_resizer_horizontal":f==CKEDITOR.DIALOG_RESIZE_HEIGHT&&(b=" cke_resizer_vertical");b=CKEDITOR.dom.element.createFromHtml('<div class="cke_resizer'+b+" cke_resizer_"+h.lang.dir+'" title="'+CKEDITOR.tools.htmlEncode(h.lang.common.resize)+'" onmousedown="CKEDITOR.tools.callFunction('+n+', event )">'+
("ltr"==h.lang.dir?"◢":"◣")+"</div>");a.parts.footer.append(b,1)});h.on("destroy",function(){CKEDITOR.tools.removeFunction(n)})}}function E(a){a.data.preventDefault(1)}function J(a){var b=CKEDITOR.document.getWindow(),c=a.config,e=c.dialog_backgroundCoverColor||"white",d=c.dialog_backgroundCoverOpacity,g=c.baseFloatZIndex,c=CKEDITOR.tools.genKey(e,d,g),f=w[c];f?f.show():(g=['<div tabIndex="-1" style="position: ',CKEDITOR.env.ie6Compat?"absolute":"fixed","; z-index: ",g,"; top: 0px; left: 0px; ",!CKEDITOR.env.ie6Compat?
"background-color: "+e:"",'" class="cke_dialog_background_cover">'],CKEDITOR.env.ie6Compat&&(e="<html><body style=\\'background-color:"+e+";\\'></body></html>",g.push('<iframe hidefocus="true" frameborder="0" id="cke_dialog_background_iframe" src="javascript:'),g.push("void((function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.write( '"+e+"' );document.close();")+"})())"),g.push('" style="position:absolute;left:0;top:0;width:100%;height: 100%;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0)"></iframe>')),
g.push("</div>"),f=CKEDITOR.dom.element.createFromHtml(g.join("")),f.setOpacity(void 0!==d?d:0.5),f.on("keydown",E),f.on("keypress",E),f.on("keyup",E),f.appendTo(CKEDITOR.document.getBody()),w[c]=f);a.focusManager.add(f);q=f;var a=function(){var a=b.getViewPaneSize();f.setStyles({width:a.width+"px",height:a.height+"px"})},h=function(){var a=b.getScrollPosition(),c=CKEDITOR.dialog._.currentTop;f.setStyles({left:a.x+"px",top:a.y+"px"});if(c){do{a=c.getPosition();c.move(a.x,a.y)}while(c=c._.parentDialog)
}};F=a;b.on("resize",a);a();(!CKEDITOR.env.mac||!CKEDITOR.env.webkit)&&f.focus();if(CKEDITOR.env.ie6Compat){var m=function(){h();arguments.callee.prevScrollHandler.apply(this,arguments)};b.$.setTimeout(function(){m.prevScrollHandler=window.onscroll||function(){};window.onscroll=m},0);h()}}function K(a){q&&(a.focusManager.remove(q),a=CKEDITOR.document.getWindow(),q.hide(),a.removeListener("resize",F),CKEDITOR.env.ie6Compat&&a.$.setTimeout(function(){window.onscroll=window.onscroll&&window.onscroll.prevScrollHandler||
null},0),F=null)}var r=CKEDITOR.tools.cssLength,S='<div class="cke_reset_all {editorId} {editorDialogClass} {hidpi}" dir="{langDir}" lang="{langCode}" role="dialog" aria-labelledby="cke_dialog_title_{id}"><table class="cke_dialog '+CKEDITOR.env.cssClass+' cke_{langDir}" style="position:absolute" role="presentation"><tr><td role="presentation"><div class="cke_dialog_body" role="presentation"><div id="cke_dialog_title_{id}" class="cke_dialog_title" role="presentation"></div><a id="cke_dialog_close_button_{id}" class="cke_dialog_close_button" href="javascript:void(0)" title="{closeTitle}" role="button"><span class="cke_label">X</span></a><div id="cke_dialog_tabs_{id}" class="cke_dialog_tabs" role="tablist"></div><table class="cke_dialog_contents" role="presentation"><tr><td id="cke_dialog_contents_{id}" class="cke_dialog_contents_body" role="presentation"></td></tr><tr><td id="cke_dialog_footer_{id}" class="cke_dialog_footer" role="presentation"></td></tr></table></div></td></tr></table></div>';
CKEDITOR.dialog=function(a,b){function c(){var a=l._.focusList;a.sort(function(a,b){return a.tabIndex!=b.tabIndex?b.tabIndex-a.tabIndex:a.focusIndex-b.focusIndex});for(var b=a.length,c=0;c<b;c++)a[c].focusIndex=c}function e(a){var b=l._.focusList,a=a||0;if(!(1>b.length)){var c=l._.currentFocusIndex;try{b[c].getInputElement().$.blur()}catch(f){}for(var d=c=(c+a+b.length)%b.length;a&&!b[d].isFocusable()&&!(d=(d+a+b.length)%b.length,d==c););b[d].focus();"text"==b[d].type&&b[d].select()}}function d(b){if(l==
CKEDITOR.dialog._.currentTop){var c=b.data.getKeystroke(),d="rtl"==a.lang.dir;o=j=0;if(9==c||c==CKEDITOR.SHIFT+9)c=c==CKEDITOR.SHIFT+9,l._.tabBarMode?(c=c?t.call(l):u.call(l),l.selectPage(c),l._.tabs[c][0].focus()):e(c?-1:1),o=1;else if(c==CKEDITOR.ALT+121&&!l._.tabBarMode&&1<l.getPageCount())l._.tabBarMode=!0,l._.tabs[l._.currentTabId][0].focus(),o=1;else if((37==c||39==c)&&l._.tabBarMode)c=c==(d?39:37)?t.call(l):u.call(l),l.selectPage(c),l._.tabs[c][0].focus(),o=1;else if((13==c||32==c)&&l._.tabBarMode)this.selectPage(this._.currentTabId),
this._.tabBarMode=!1,this._.currentFocusIndex=-1,e(1),o=1;else if(13==c){c=b.data.getTarget();if(!c.is("a","button","select","textarea")&&(!c.is("input")||"button"!=c.$.type))(c=this.getButton("ok"))&&CKEDITOR.tools.setTimeout(c.click,0,c),o=1;j=1}else if(27==c)(c=this.getButton("cancel"))?CKEDITOR.tools.setTimeout(c.click,0,c):!1!==this.fire("cancel",{hide:!0}).hide&&this.hide(),j=1;else return;g(b)}}function g(a){o?a.data.preventDefault(1):j&&a.data.stopPropagation()}var f=CKEDITOR.dialog._.dialogDefinitions[b],
h=CKEDITOR.tools.clone(W),m=a.config.dialog_buttonsOrder||"OS",k=a.lang.dir,i={},o,j;("OS"==m&&CKEDITOR.env.mac||"rtl"==m&&"ltr"==k||"ltr"==m&&"rtl"==k)&&h.buttons.reverse();f=CKEDITOR.tools.extend(f(a),h);f=CKEDITOR.tools.clone(f);f=new L(this,f);h=R(a);this._={editor:a,element:h.element,name:b,contentSize:{width:0,height:0},size:{width:0,height:0},contents:{},buttons:{},accessKeyMap:{},tabs:{},tabIdList:[],currentTabId:null,currentTabIndex:null,pageCount:0,lastTab:null,tabBarMode:!1,focusList:[],
currentFocusIndex:0,hasFocus:!1};this.parts=h.parts;CKEDITOR.tools.setTimeout(function(){a.fire("ariaWidget",this.parts.contents)},0,this);h={position:CKEDITOR.env.ie6Compat?"absolute":"fixed",top:0,visibility:"hidden"};h["rtl"==k?"right":"left"]=0;this.parts.dialog.setStyles(h);CKEDITOR.event.call(this);this.definition=f=CKEDITOR.fire("dialogDefinition",{name:b,definition:f},a).definition;if(!("removeDialogTabs"in a._)&&a.config.removeDialogTabs){h=a.config.removeDialogTabs.split(";");for(k=0;k<
h.length;k++)if(m=h[k].split(":"),2==m.length){var n=m[0];i[n]||(i[n]=[]);i[n].push(m[1])}a._.removeDialogTabs=i}if(a._.removeDialogTabs&&(i=a._.removeDialogTabs[b]))for(k=0;k<i.length;k++)f.removeContents(i[k]);if(f.onLoad)this.on("load",f.onLoad);if(f.onShow)this.on("show",f.onShow);if(f.onHide)this.on("hide",f.onHide);if(f.onOk)this.on("ok",function(b){a.fire("saveSnapshot");setTimeout(function(){a.fire("saveSnapshot")},0);!1===f.onOk.call(this,b)&&(b.data.hide=!1)});if(f.onCancel)this.on("cancel",
function(a){!1===f.onCancel.call(this,a)&&(a.data.hide=!1)});var l=this,p=function(a){var b=l._.contents,c=!1,d;for(d in b)for(var f in b[d])if(c=a.call(this,b[d][f]))return};this.on("ok",function(a){p(function(b){if(b.validate){var c=b.validate(this),d="string"==typeof c||!1===c;d&&(a.data.hide=!1,a.stop());P.call(b,!d,"string"==typeof c?c:void 0);return d}})},this,null,0);this.on("cancel",function(b){p(function(c){if(c.isChanged())return!a.config.dialog_noConfirmCancel&&!confirm(a.lang.common.confirmCancel)&&
(b.data.hide=!1),!0})},this,null,0);this.parts.close.on("click",function(a){!1!==this.fire("cancel",{hide:!0}).hide&&this.hide();a.data.preventDefault()},this);this.changeFocus=e;var v=this._.element;a.focusManager.add(v,1);this.on("show",function(){v.on("keydown",d,this);if(CKEDITOR.env.gecko)v.on("keypress",g,this)});this.on("hide",function(){v.removeListener("keydown",d);CKEDITOR.env.gecko&&v.removeListener("keypress",g);p(function(a){Q.apply(a)})});this.on("iframeAdded",function(a){(new CKEDITOR.dom.document(a.data.iframe.$.contentWindow.document)).on("keydown",
d,this,null,0)});this.on("show",function(){c();if(a.config.dialog_startupFocusTab&&1<l._.pageCount)l._.tabBarMode=!0,l._.tabs[l._.currentTabId][0].focus();else if(!this._.hasFocus)if(this._.currentFocusIndex=-1,f.onFocus){var b=f.onFocus.call(this);b&&b.focus()}else e(1)},this,null,4294967295);if(CKEDITOR.env.ie6Compat)this.on("load",function(){var a=this.getElement(),b=a.getFirst();b.remove();b.appendTo(a)},this);U(this);V(this);(new CKEDITOR.dom.text(f.title,CKEDITOR.document)).appendTo(this.parts.title);
for(k=0;k<f.contents.length;k++)(i=f.contents[k])&&this.addPage(i);this.parts.tabs.on("click",function(a){var b=a.data.getTarget();b.hasClass("cke_dialog_tab")&&(b=b.$.id,this.selectPage(b.substring(4,b.lastIndexOf("_"))),this._.tabBarMode&&(this._.tabBarMode=!1,this._.currentFocusIndex=-1,e(1)),a.data.preventDefault())},this);k=[];i=CKEDITOR.dialog._.uiElementBuilders.hbox.build(this,{type:"hbox",className:"cke_dialog_footer_buttons",widths:[],children:f.buttons},k).getChild();this.parts.footer.setHtml(k.join(""));
for(k=0;k<i.length;k++)this._.buttons[i[k].id]=i[k]};CKEDITOR.dialog.prototype={destroy:function(){this.hide();this._.element.remove()},resize:function(){return function(a,b){if(!this._.contentSize||!(this._.contentSize.width==a&&this._.contentSize.height==b))CKEDITOR.dialog.fire("resize",{dialog:this,width:a,height:b},this._.editor),this.fire("resize",{width:a,height:b},this._.editor),this.parts.contents.setStyles({width:a+"px",height:b+"px"}),"rtl"==this._.editor.lang.dir&&this._.position&&(this._.position.x=
CKEDITOR.document.getWindow().getViewPaneSize().width-this._.contentSize.width-parseInt(this._.element.getFirst().getStyle("right"),10)),this._.contentSize={width:a,height:b}}}(),getSize:function(){var a=this._.element.getFirst();return{width:a.$.offsetWidth||0,height:a.$.offsetHeight||0}},move:function(a,b,c){var e=this._.element.getFirst(),d="rtl"==this._.editor.lang.dir,g="fixed"==e.getComputedStyle("position");CKEDITOR.env.ie&&e.setStyle("zoom","100%");if(!g||!this._.position||!(this._.position.x==
a&&this._.position.y==b))this._.position={x:a,y:b},g||(g=CKEDITOR.document.getWindow().getScrollPosition(),a+=g.x,b+=g.y),d&&(g=this.getSize(),a=CKEDITOR.document.getWindow().getViewPaneSize().width-g.width-a),b={top:(0<b?b:0)+"px"},b[d?"right":"left"]=(0<a?a:0)+"px",e.setStyles(b),c&&(this._.moved=1)},getPosition:function(){return CKEDITOR.tools.extend({},this._.position)},show:function(){var a=this._.element,b=this.definition;!a.getParent()||!a.getParent().equals(CKEDITOR.document.getBody())?a.appendTo(CKEDITOR.document.getBody()):
a.setStyle("display","block");this.resize(this._.contentSize&&this._.contentSize.width||b.width||b.minWidth,this._.contentSize&&this._.contentSize.height||b.height||b.minHeight);this.reset();this.selectPage(this.definition.contents[0].id);null===CKEDITOR.dialog._.currentZIndex&&(CKEDITOR.dialog._.currentZIndex=this._.editor.config.baseFloatZIndex);this._.element.getFirst().setStyle("z-index",CKEDITOR.dialog._.currentZIndex+=10);null===CKEDITOR.dialog._.currentTop?(CKEDITOR.dialog._.currentTop=this,
this._.parentDialog=null,J(this._.editor)):(this._.parentDialog=CKEDITOR.dialog._.currentTop,this._.parentDialog.getElement().getFirst().$.style.zIndex-=Math.floor(this._.editor.config.baseFloatZIndex/2),CKEDITOR.dialog._.currentTop=this);a.on("keydown",M);a.on("keyup",N);this._.hasFocus=!1;for(var c in b.contents)if(b.contents[c]){var a=b.contents[c],e=this._.tabs[a.id],d=a.requiredContent,g=0;if(e){for(var f in this._.contents[a.id]){var h=this._.contents[a.id][f];"hbox"==h.type||("vbox"==h.type||
!h.getInputElement())||(h.requiredContent&&!this._.editor.activeFilter.check(h.requiredContent)?h.disable():(h.enable(),g++))}!g||d&&!this._.editor.activeFilter.check(d)?e[0].addClass("cke_dialog_tab_disabled"):e[0].removeClass("cke_dialog_tab_disabled")}}CKEDITOR.tools.setTimeout(function(){this.layout();T(this);this.parts.dialog.setStyle("visibility","");this.fireOnce("load",{});CKEDITOR.ui.fire("ready",this);this.fire("show",{});this._.editor.fire("dialogShow",this);this._.parentDialog||this._.editor.focusManager.lock();
this.foreach(function(a){a.setInitValue&&a.setInitValue()})},100,this)},layout:function(){var a=this.parts.dialog,b=this.getSize(),c=CKEDITOR.document.getWindow().getViewPaneSize(),e=(c.width-b.width)/2,d=(c.height-b.height)/2;CKEDITOR.env.ie6Compat||(b.height+(0<d?d:0)>c.height||b.width+(0<e?e:0)>c.width?a.setStyle("position","absolute"):a.setStyle("position","fixed"));this.move(this._.moved?this._.position.x:e,this._.moved?this._.position.y:d)},foreach:function(a){for(var b in this._.contents)for(var c in this._.contents[b])a.call(this,
this._.contents[b][c]);return this},reset:function(){var a=function(a){a.reset&&a.reset(1)};return function(){this.foreach(a);return this}}(),setupContent:function(){var a=arguments;this.foreach(function(b){b.setup&&b.setup.apply(b,a)})},commitContent:function(){var a=arguments;this.foreach(function(b){CKEDITOR.env.ie&&this._.currentFocusIndex==b.focusIndex&&b.getInputElement().$.blur();b.commit&&b.commit.apply(b,a)})},hide:function(){if(this.parts.dialog.isVisible()){this.fire("hide",{});this._.editor.fire("dialogHide",
this);this.selectPage(this._.tabIdList[0]);var a=this._.element;a.setStyle("display","none");this.parts.dialog.setStyle("visibility","hidden");for(X(this);CKEDITOR.dialog._.currentTop!=this;)CKEDITOR.dialog._.currentTop.hide();if(this._.parentDialog){var b=this._.parentDialog.getElement().getFirst();b.setStyle("z-index",parseInt(b.$.style.zIndex,10)+Math.floor(this._.editor.config.baseFloatZIndex/2))}else K(this._.editor);if(CKEDITOR.dialog._.currentTop=this._.parentDialog)CKEDITOR.dialog._.currentZIndex-=
10;else{CKEDITOR.dialog._.currentZIndex=null;a.removeListener("keydown",M);a.removeListener("keyup",N);var c=this._.editor;c.focus();setTimeout(function(){c.focusManager.unlock();CKEDITOR.env.iOS&&c.window.focus()},0)}delete this._.parentDialog;this.foreach(function(a){a.resetInitValue&&a.resetInitValue()})}},addPage:function(a){if(!a.requiredContent||this._.editor.filter.check(a.requiredContent)){for(var b=[],c=a.label?' title="'+CKEDITOR.tools.htmlEncode(a.label)+'"':"",e=CKEDITOR.dialog._.uiElementBuilders.vbox.build(this,
{type:"vbox",className:"cke_dialog_page_contents",children:a.elements,expand:!!a.expand,padding:a.padding,style:a.style||"width: 100%;"},b),d=this._.contents[a.id]={},g=e.getChild(),f=0;e=g.shift();)!e.notAllowed&&("hbox"!=e.type&&"vbox"!=e.type)&&f++,d[e.id]=e,"function"==typeof e.getChild&&g.push.apply(g,e.getChild());f||(a.hidden=!0);b=CKEDITOR.dom.element.createFromHtml(b.join(""));b.setAttribute("role","tabpanel");e=CKEDITOR.env;d="cke_"+a.id+"_"+CKEDITOR.tools.getNextNumber();c=CKEDITOR.dom.element.createFromHtml(['<a class="cke_dialog_tab"',
0<this._.pageCount?" cke_last":"cke_first",c,a.hidden?' style="display:none"':"",' id="',d,'"',e.gecko&&!e.hc?"":' href="javascript:void(0)"',' tabIndex="-1" hidefocus="true" role="tab">',a.label,"</a>"].join(""));b.setAttribute("aria-labelledby",d);this._.tabs[a.id]=[c,b];this._.tabIdList.push(a.id);!a.hidden&&this._.pageCount++;this._.lastTab=c;this.updateStyle();b.setAttribute("name",a.id);b.appendTo(this.parts.contents);c.unselectable();this.parts.tabs.append(c);a.accessKey&&(O(this,this,"CTRL+"+
a.accessKey,Y,Z),this._.accessKeyMap["CTRL+"+a.accessKey]=a.id)}},selectPage:function(a){if(this._.currentTabId!=a&&!this._.tabs[a][0].hasClass("cke_dialog_tab_disabled")&&!1!==this.fire("selectPage",{page:a,currentPage:this._.currentTabId})){for(var b in this._.tabs){var c=this._.tabs[b][0],e=this._.tabs[b][1];b!=a&&(c.removeClass("cke_dialog_tab_selected"),e.hide());e.setAttribute("aria-hidden",b!=a)}var d=this._.tabs[a];d[0].addClass("cke_dialog_tab_selected");CKEDITOR.env.ie6Compat||CKEDITOR.env.ie7Compat?
(G(d[1]),d[1].show(),setTimeout(function(){G(d[1],1)},0)):d[1].show();this._.currentTabId=a;this._.currentTabIndex=CKEDITOR.tools.indexOf(this._.tabIdList,a)}},updateStyle:function(){this.parts.dialog[(1===this._.pageCount?"add":"remove")+"Class"]("cke_single_page")},hidePage:function(a){var b=this._.tabs[a]&&this._.tabs[a][0];b&&(1!=this._.pageCount&&b.isVisible())&&(a==this._.currentTabId&&this.selectPage(t.call(this)),b.hide(),this._.pageCount--,this.updateStyle())},showPage:function(a){if(a=this._.tabs[a]&&
this._.tabs[a][0])a.show(),this._.pageCount++,this.updateStyle()},getElement:function(){return this._.element},getName:function(){return this._.name},getContentElement:function(a,b){var c=this._.contents[a];return c&&c[b]},getValueOf:function(a,b){return this.getContentElement(a,b).getValue()},setValueOf:function(a,b,c){return this.getContentElement(a,b).setValue(c)},getButton:function(a){return this._.buttons[a]},click:function(a){return this._.buttons[a].click()},disableButton:function(a){return this._.buttons[a].disable()},
enableButton:function(a){return this._.buttons[a].enable()},getPageCount:function(){return this._.pageCount},getParentEditor:function(){return this._.editor},getSelectedElement:function(){return this.getParentEditor().getSelection().getSelectedElement()},addFocusable:function(a,b){if("undefined"==typeof b)b=this._.focusList.length,this._.focusList.push(new H(this,a,b));else{this._.focusList.splice(b,0,new H(this,a,b));for(var c=b+1;c<this._.focusList.length;c++)this._.focusList[c].focusIndex++}}};
CKEDITOR.tools.extend(CKEDITOR.dialog,{add:function(a,b){if(!this._.dialogDefinitions[a]||"function"==typeof b)this._.dialogDefinitions[a]=b},exists:function(a){return!!this._.dialogDefinitions[a]},getCurrent:function(){return CKEDITOR.dialog._.currentTop},isTabEnabled:function(a,b,c){a=a.config.removeDialogTabs;return!(a&&a.match(RegExp("(?:^|;)"+b+":"+c+"(?:$|;)","i")))},okButton:function(){var a=function(a,c){c=c||{};return CKEDITOR.tools.extend({id:"ok",type:"button",label:a.lang.common.ok,"class":"cke_dialog_ui_button_ok",
onClick:function(a){a=a.data.dialog;!1!==a.fire("ok",{hide:!0}).hide&&a.hide()}},c,!0)};a.type="button";a.override=function(b){return CKEDITOR.tools.extend(function(c){return a(c,b)},{type:"button"},!0)};return a}(),cancelButton:function(){var a=function(a,c){c=c||{};return CKEDITOR.tools.extend({id:"cancel",type:"button",label:a.lang.common.cancel,"class":"cke_dialog_ui_button_cancel",onClick:function(a){a=a.data.dialog;!1!==a.fire("cancel",{hide:!0}).hide&&a.hide()}},c,!0)};a.type="button";a.override=
function(b){return CKEDITOR.tools.extend(function(c){return a(c,b)},{type:"button"},!0)};return a}(),addUIElement:function(a,b){this._.uiElementBuilders[a]=b}});CKEDITOR.dialog._={uiElementBuilders:{},dialogDefinitions:{},currentTop:null,currentZIndex:null};CKEDITOR.event.implementOn(CKEDITOR.dialog);CKEDITOR.event.implementOn(CKEDITOR.dialog.prototype);var W={resizable:CKEDITOR.DIALOG_RESIZE_BOTH,minWidth:600,minHeight:400,buttons:[CKEDITOR.dialog.okButton,CKEDITOR.dialog.cancelButton]},z=function(a,
b,c){for(var e=0,d;d=a[e];e++)if(d.id==b||c&&d[c]&&(d=z(d[c],b,c)))return d;return null},A=function(a,b,c,e,d){if(c){for(var g=0,f;f=a[g];g++){if(f.id==c)return a.splice(g,0,b),b;if(e&&f[e]&&(f=A(f[e],b,c,e,!0)))return f}if(d)return null}a.push(b);return b},B=function(a,b,c){for(var e=0,d;d=a[e];e++){if(d.id==b)return a.splice(e,1);if(c&&d[c]&&(d=B(d[c],b,c)))return d}return null},L=function(a,b){this.dialog=a;for(var c=b.contents,e=0,d;d=c[e];e++)c[e]=d&&new I(a,d);CKEDITOR.tools.extend(this,b)};
L.prototype={getContents:function(a){return z(this.contents,a)},getButton:function(a){return z(this.buttons,a)},addContents:function(a,b){return A(this.contents,a,b)},addButton:function(a,b){return A(this.buttons,a,b)},removeContents:function(a){B(this.contents,a)},removeButton:function(a){B(this.buttons,a)}};I.prototype={get:function(a){return z(this.elements,a,"children")},add:function(a,b){return A(this.elements,a,b,"children")},remove:function(a){B(this.elements,a,"children")}};var F,w={},q,s=
{},M=function(a){var b=a.data.$.ctrlKey||a.data.$.metaKey,c=a.data.$.altKey,e=a.data.$.shiftKey,d=String.fromCharCode(a.data.$.keyCode);if((b=s[(b?"CTRL+":"")+(c?"ALT+":"")+(e?"SHIFT+":"")+d])&&b.length)b=b[b.length-1],b.keydown&&b.keydown.call(b.uiElement,b.dialog,b.key),a.data.preventDefault()},N=function(a){var b=a.data.$.ctrlKey||a.data.$.metaKey,c=a.data.$.altKey,e=a.data.$.shiftKey,d=String.fromCharCode(a.data.$.keyCode);if((b=s[(b?"CTRL+":"")+(c?"ALT+":"")+(e?"SHIFT+":"")+d])&&b.length)b=b[b.length-
1],b.keyup&&(b.keyup.call(b.uiElement,b.dialog,b.key),a.data.preventDefault())},O=function(a,b,c,e,d){(s[c]||(s[c]=[])).push({uiElement:a,dialog:b,key:c,keyup:d||a.accessKeyUp,keydown:e||a.accessKeyDown})},X=function(a){for(var b in s){for(var c=s[b],e=c.length-1;0<=e;e--)(c[e].dialog==a||c[e].uiElement==a)&&c.splice(e,1);0===c.length&&delete s[b]}},Z=function(a,b){a._.accessKeyMap[b]&&a.selectPage(a._.accessKeyMap[b])},Y=function(){};(function(){CKEDITOR.ui.dialog={uiElement:function(a,b,c,e,d,g,
f){if(!(4>arguments.length)){var h=(e.call?e(b):e)||"div",m=["<",h," "],k=(d&&d.call?d(b):d)||{},i=(g&&g.call?g(b):g)||{},o=(f&&f.call?f.call(this,a,b):f)||"",j=this.domId=i.id||CKEDITOR.tools.getNextId()+"_uiElement";b.requiredContent&&!a.getParentEditor().filter.check(b.requiredContent)&&(k.display="none",this.notAllowed=!0);i.id=j;var n={};b.type&&(n["cke_dialog_ui_"+b.type]=1);b.className&&(n[b.className]=1);b.disabled&&(n.cke_disabled=1);for(var l=i["class"]&&i["class"].split?i["class"].split(" "):
[],j=0;j<l.length;j++)l[j]&&(n[l[j]]=1);l=[];for(j in n)l.push(j);i["class"]=l.join(" ");b.title&&(i.title=b.title);n=(b.style||"").split(";");b.align&&(l=b.align,k["margin-left"]="left"==l?0:"auto",k["margin-right"]="right"==l?0:"auto");for(j in k)n.push(j+":"+k[j]);b.hidden&&n.push("display:none");for(j=n.length-1;0<=j;j--)""===n[j]&&n.splice(j,1);0<n.length&&(i.style=(i.style?i.style+"; ":"")+n.join("; "));for(j in i)m.push(j+'="'+CKEDITOR.tools.htmlEncode(i[j])+'" ');m.push(">",o,"</",h,">");
c.push(m.join(""));(this._||(this._={})).dialog=a;"boolean"==typeof b.isChanged&&(this.isChanged=function(){return b.isChanged});"function"==typeof b.isChanged&&(this.isChanged=b.isChanged);"function"==typeof b.setValue&&(this.setValue=CKEDITOR.tools.override(this.setValue,function(a){return function(c){a.call(this,b.setValue.call(this,c))}}));"function"==typeof b.getValue&&(this.getValue=CKEDITOR.tools.override(this.getValue,function(a){return function(){return b.getValue.call(this,a.call(this))}}));
CKEDITOR.event.implementOn(this);this.registerEvents(b);this.accessKeyUp&&(this.accessKeyDown&&b.accessKey)&&O(this,a,"CTRL+"+b.accessKey);var p=this;a.on("load",function(){var b=p.getInputElement();if(b){var c=p.type in{checkbox:1,ratio:1}&&CKEDITOR.env.ie&&CKEDITOR.env.version<8?"cke_dialog_ui_focused":"";b.on("focus",function(){a._.tabBarMode=false;a._.hasFocus=true;p.fire("focus");c&&this.addClass(c)});b.on("blur",function(){p.fire("blur");c&&this.removeClass(c)})}});CKEDITOR.tools.extend(this,
b);this.keyboardFocusable&&(this.tabIndex=b.tabIndex||0,this.focusIndex=a._.focusList.push(this)-1,this.on("focus",function(){a._.currentFocusIndex=p.focusIndex}))}},hbox:function(a,b,c,e,d){if(!(4>arguments.length)){this._||(this._={});var g=this._.children=b,f=d&&d.widths||null,h=d&&d.height||null,m,k={role:"presentation"};d&&d.align&&(k.align=d.align);CKEDITOR.ui.dialog.uiElement.call(this,a,d||{type:"hbox"},e,"table",{},k,function(){var a=['<tbody><tr class="cke_dialog_ui_hbox">'];for(m=0;m<c.length;m++){var b=
"cke_dialog_ui_hbox_child",e=[];0===m&&(b="cke_dialog_ui_hbox_first");m==c.length-1&&(b="cke_dialog_ui_hbox_last");a.push('<td class="',b,'" role="presentation" ');f?f[m]&&e.push("width:"+r(f[m])):e.push("width:"+Math.floor(100/c.length)+"%");h&&e.push("height:"+r(h));d&&void 0!==d.padding&&e.push("padding:"+r(d.padding));CKEDITOR.env.ie&&(CKEDITOR.env.quirks&&g[m].align)&&e.push("text-align:"+g[m].align);0<e.length&&a.push('style="'+e.join("; ")+'" ');a.push(">",c[m],"</td>")}a.push("</tr></tbody>");
return a.join("")})}},vbox:function(a,b,c,e,d){if(!(3>arguments.length)){this._||(this._={});var g=this._.children=b,f=d&&d.width||null,h=d&&d.heights||null;CKEDITOR.ui.dialog.uiElement.call(this,a,d||{type:"vbox"},e,"div",null,{role:"presentation"},function(){var b=['<table role="presentation" cellspacing="0" border="0" '];b.push('style="');d&&d.expand&&b.push("height:100%;");b.push("width:"+r(f||"100%"),";");CKEDITOR.env.webkit&&b.push("float:none;");b.push('"');b.push('align="',CKEDITOR.tools.htmlEncode(d&&
d.align||("ltr"==a.getParentEditor().lang.dir?"left":"right")),'" ');b.push("><tbody>");for(var e=0;e<c.length;e++){var i=[];b.push('<tr><td role="presentation" ');f&&i.push("width:"+r(f||"100%"));h?i.push("height:"+r(h[e])):d&&d.expand&&i.push("height:"+Math.floor(100/c.length)+"%");d&&void 0!==d.padding&&i.push("padding:"+r(d.padding));CKEDITOR.env.ie&&(CKEDITOR.env.quirks&&g[e].align)&&i.push("text-align:"+g[e].align);0<i.length&&b.push('style="',i.join("; "),'" ');b.push(' class="cke_dialog_ui_vbox_child">',
c[e],"</td></tr>")}b.push("</tbody></table>");return b.join("")})}}}})();CKEDITOR.ui.dialog.uiElement.prototype={getElement:function(){return CKEDITOR.document.getById(this.domId)},getInputElement:function(){return this.getElement()},getDialog:function(){return this._.dialog},setValue:function(a,b){this.getInputElement().setValue(a);!b&&this.fire("change",{value:a});return this},getValue:function(){return this.getInputElement().getValue()},isChanged:function(){return!1},selectParentTab:function(){for(var a=
this.getInputElement();(a=a.getParent())&&-1==a.$.className.search("cke_dialog_page_contents"););if(!a)return this;a=a.getAttribute("name");this._.dialog._.currentTabId!=a&&this._.dialog.selectPage(a);return this},focus:function(){this.selectParentTab().getInputElement().focus();return this},registerEvents:function(a){var b=/^on([A-Z]\w+)/,c,e=function(a,b,c,d){b.on("load",function(){a.getInputElement().on(c,d,a)})},d;for(d in a)if(c=d.match(b))this.eventProcessors[d]?this.eventProcessors[d].call(this,
this._.dialog,a[d]):e(this,this._.dialog,c[1].toLowerCase(),a[d]);return this},eventProcessors:{onLoad:function(a,b){a.on("load",b,this)},onShow:function(a,b){a.on("show",b,this)},onHide:function(a,b){a.on("hide",b,this)}},accessKeyDown:function(){this.focus()},accessKeyUp:function(){},disable:function(){var a=this.getElement();this.getInputElement().setAttribute("disabled","true");a.addClass("cke_disabled")},enable:function(){var a=this.getElement();this.getInputElement().removeAttribute("disabled");
a.removeClass("cke_disabled")},isEnabled:function(){return!this.getElement().hasClass("cke_disabled")},isVisible:function(){return this.getInputElement().isVisible()},isFocusable:function(){return!this.isEnabled()||!this.isVisible()?!1:!0}};CKEDITOR.ui.dialog.hbox.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{getChild:function(a){if(1>arguments.length)return this._.children.concat();a.splice||(a=[a]);return 2>a.length?this._.children[a[0]]:this._.children[a[0]]&&this._.children[a[0]].getChild?
this._.children[a[0]].getChild(a.slice(1,a.length)):null}},!0);CKEDITOR.ui.dialog.vbox.prototype=new CKEDITOR.ui.dialog.hbox;(function(){var a={build:function(a,c,e){for(var d=c.children,g,f=[],h=[],m=0;m<d.length&&(g=d[m]);m++){var k=[];f.push(k);h.push(CKEDITOR.dialog._.uiElementBuilders[g.type].build(a,g,k))}return new CKEDITOR.ui.dialog[c.type](a,h,f,e,c)}};CKEDITOR.dialog.addUIElement("hbox",a);CKEDITOR.dialog.addUIElement("vbox",a)})();CKEDITOR.dialogCommand=function(a,b){this.dialogName=a;
CKEDITOR.tools.extend(this,b,!0)};CKEDITOR.dialogCommand.prototype={exec:function(a){a.openDialog(this.dialogName)},canUndo:!1,editorFocus:1};(function(){var a=/^([a]|[^a])+$/,b=/^\d*$/,c=/^\d*(?:\.\d+)?$/,e=/^(((\d*(\.\d+))|(\d*))(px|\%)?)?$/,d=/^(((\d*(\.\d+))|(\d*))(px|em|ex|in|cm|mm|pt|pc|\%)?)?$/i,g=/^(\s*[\w-]+\s*:\s*[^:;]+(?:;|$))*$/;CKEDITOR.VALIDATE_OR=1;CKEDITOR.VALIDATE_AND=2;CKEDITOR.dialog.validate={functions:function(){var a=arguments;return function(){var b=this&&this.getValue?this.getValue():
a[0],c,d=CKEDITOR.VALIDATE_AND,e=[],g;for(g=0;g<a.length;g++)if("function"==typeof a[g])e.push(a[g]);else break;g<a.length&&"string"==typeof a[g]&&(c=a[g],g++);g<a.length&&"number"==typeof a[g]&&(d=a[g]);var j=d==CKEDITOR.VALIDATE_AND?!0:!1;for(g=0;g<e.length;g++)j=d==CKEDITOR.VALIDATE_AND?j&&e[g](b):j||e[g](b);return!j?c:!0}},regex:function(a,b){return function(c){c=this&&this.getValue?this.getValue():c;return!a.test(c)?b:!0}},notEmpty:function(b){return this.regex(a,b)},integer:function(a){return this.regex(b,
a)},number:function(a){return this.regex(c,a)},cssLength:function(a){return this.functions(function(a){return d.test(CKEDITOR.tools.trim(a))},a)},htmlLength:function(a){return this.functions(function(a){return e.test(CKEDITOR.tools.trim(a))},a)},inlineStyle:function(a){return this.functions(function(a){return g.test(CKEDITOR.tools.trim(a))},a)},equals:function(a,b){return this.functions(function(b){return b==a},b)},notEqual:function(a,b){return this.functions(function(b){return b!=a},b)}};CKEDITOR.on("instanceDestroyed",
function(a){if(CKEDITOR.tools.isEmpty(CKEDITOR.instances)){for(var b;b=CKEDITOR.dialog._.currentTop;)b.hide();for(var c in w)w[c].remove();w={}}var a=a.editor._.storedDialogs,d;for(d in a)a[d].destroy()})})();CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{openDialog:function(a,b){var c=null,e=CKEDITOR.dialog._.dialogDefinitions[a];null===CKEDITOR.dialog._.currentTop&&J(this);if("function"==typeof e)c=this._.storedDialogs||(this._.storedDialogs={}),c=c[a]||(c[a]=new CKEDITOR.dialog(this,a)),b&&b.call(c,
c),c.show();else{if("failed"==e)throw K(this),Error('[CKEDITOR.dialog.openDialog] Dialog "'+a+'" failed when loading definition.');"string"==typeof e&&CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(e),function(){"function"!=typeof CKEDITOR.dialog._.dialogDefinitions[a]&&(CKEDITOR.dialog._.dialogDefinitions[a]="failed");this.openDialog(a,b)},this,0,1)}CKEDITOR.skin.loadPart("dialog");return c}})})();
CKEDITOR.plugins.add("dialog",{requires:"dialogui",init:function(t){t.on("doubleclick",function(u){u.data.dialog&&t.openDialog(u.data.dialog)},null,null,999)}});(function(){function v(b){function a(){var e=b.editable();e.on(p,function(b){(!CKEDITOR.env.ie||!n)&&u(b)});CKEDITOR.env.ie&&e.on("paste",function(e){q||(g(),e.data.preventDefault(),u(e),h("paste")||b.openDialog("paste"))});CKEDITOR.env.ie&&(e.on("contextmenu",i,null,null,0),e.on("beforepaste",function(b){b.data&&(!b.data.$.ctrlKey&&!b.data.$.shiftKey)&&i()},null,null,0));e.on("beforecut",function(){!n&&j(b)});var a;e.attachListener(CKEDITOR.env.ie?e:b.document.getDocumentElement(),"mouseup",function(){a=
setTimeout(function(){r()},0)});b.on("destroy",function(){clearTimeout(a)});e.on("keyup",r)}function c(e){return{type:e,canUndo:"cut"==e,startDisabled:!0,exec:function(){"cut"==this.type&&j();var e;var a=this.type;if(CKEDITOR.env.ie)e=h(a);else try{e=b.document.$.execCommand(a,!1,null)}catch(d){e=!1}e||alert(b.lang.clipboard[this.type+"Error"]);return e}}}function d(){return{canUndo:!1,async:!0,exec:function(b,a){var d=function(a,d){a&&f(a.type,a.dataValue,!!d);b.fire("afterCommandExec",{name:"paste",
command:c,returnValue:!!a})},c=this;"string"==typeof a?d({type:"auto",dataValue:a},1):b.getClipboardData(d)}}}function g(){q=1;setTimeout(function(){q=0},100)}function i(){n=1;setTimeout(function(){n=0},10)}function h(e){var a=b.document,d=a.getBody(),c=!1,j=function(){c=!0};d.on(e,j);(7<CKEDITOR.env.version?a.$:a.$.selection.createRange()).execCommand(e);d.removeListener(e,j);return c}function f(e,a,d){e={type:e};if(d&&!1===b.fire("beforePaste",e)||!a)return!1;e.dataValue=a;return b.fire("paste",
e)}function j(){if(CKEDITOR.env.ie&&!CKEDITOR.env.quirks){var e=b.getSelection(),a,d,c;if(e.getType()==CKEDITOR.SELECTION_ELEMENT&&(a=e.getSelectedElement()))d=e.getRanges()[0],c=b.document.createText(""),c.insertBefore(a),d.setStartBefore(c),d.setEndAfter(a),e.selectRanges([d]),setTimeout(function(){a.getParent()&&(c.remove(),e.selectElement(a))},0)}}function l(a,d){var c=b.document,j=b.editable(),l=function(b){b.cancel()},g;if(!c.getById("cke_pastebin")){var i=b.getSelection(),s=i.createBookmarks();
CKEDITOR.env.ie&&i.root.fire("selectionchange");var k=new CKEDITOR.dom.element((CKEDITOR.env.webkit||j.is("body"))&&!CKEDITOR.env.ie?"body":"div",c);k.setAttributes({id:"cke_pastebin","data-cke-temp":"1"});var f=0,c=c.getWindow();CKEDITOR.env.webkit?(j.append(k),k.addClass("cke_editable"),j.is("body")||(f="static"!=j.getComputedStyle("position")?j:CKEDITOR.dom.element.get(j.$.offsetParent),f=f.getDocumentPosition().y)):j.getAscendant(CKEDITOR.env.ie?"body":"html",1).append(k);k.setStyles({position:"absolute",
top:c.getScrollPosition().y-f+10+"px",width:"1px",height:Math.max(1,c.getViewPaneSize().height-20)+"px",overflow:"hidden",margin:0,padding:0});CKEDITOR.env.safari&&k.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select","text"));(f=k.getParent().isReadOnly())?(k.setOpacity(0),k.setAttribute("contenteditable",!0)):k.setStyle("ltr"==b.config.contentsLangDirection?"left":"right","-1000px");b.on("selectionChange",l,null,null,0);if(CKEDITOR.env.webkit||CKEDITOR.env.gecko)g=j.once("blur",l,null,null,-100);
f&&k.focus();f=new CKEDITOR.dom.range(k);f.selectNodeContents(k);var h=f.select();CKEDITOR.env.ie&&(g=j.once("blur",function(){b.lockSelection(h)}));var m=CKEDITOR.document.getWindow().getScrollPosition().y;setTimeout(function(){if(CKEDITOR.env.webkit)CKEDITOR.document.getBody().$.scrollTop=m;g&&g.removeListener();CKEDITOR.env.ie&&j.focus();i.selectBookmarks(s);k.remove();var a;if(CKEDITOR.env.webkit&&(a=k.getFirst())&&a.is&&a.hasClass("Apple-style-span"))k=a;b.removeListener("selectionChange",l);
d(k.getHtml())},0)}}function s(){if(CKEDITOR.env.ie){b.focus();g();var a=b.focusManager;a.lock();if(b.editable().fire(p)&&!h("paste"))return a.unlock(),!1;a.unlock()}else try{if(b.editable().fire(p)&&!b.document.$.execCommand("Paste",!1,null))throw 0;}catch(d){return!1}return!0}function o(a){if("wysiwyg"==b.mode)switch(a.data.keyCode){case CKEDITOR.CTRL+86:case CKEDITOR.SHIFT+45:a=b.editable();g();!CKEDITOR.env.ie&&a.fire("beforepaste");break;case CKEDITOR.CTRL+88:case CKEDITOR.SHIFT+46:b.fire("saveSnapshot"),
setTimeout(function(){b.fire("saveSnapshot")},50)}}function u(a){var d={type:"auto"},c=b.fire("beforePaste",d);l(a,function(b){b=b.replace(/<span[^>]+data-cke-bookmark[^<]*?<\/span>/ig,"");c&&f(d.type,b,0,1)})}function r(){if("wysiwyg"==b.mode){var a=m("paste");b.getCommand("cut").setState(m("cut"));b.getCommand("copy").setState(m("copy"));b.getCommand("paste").setState(a);b.fire("pasteState",a)}}function m(a){if(t&&a in{paste:1,cut:1})return CKEDITOR.TRISTATE_DISABLED;if("paste"==a)return CKEDITOR.TRISTATE_OFF;
var a=b.getSelection(),d=a.getRanges();return a.getType()==CKEDITOR.SELECTION_NONE||1==d.length&&d[0].collapsed?CKEDITOR.TRISTATE_DISABLED:CKEDITOR.TRISTATE_OFF}var n=0,q=0,t=0,p=CKEDITOR.env.ie?"beforepaste":"paste";(function(){b.on("key",o);b.on("contentDom",a);b.on("selectionChange",function(b){t=b.data.selection.getRanges()[0].checkReadOnly();r()});b.contextMenu&&b.contextMenu.addListener(function(b,a){t=a.getRanges()[0].checkReadOnly();return{cut:m("cut"),copy:m("copy"),paste:m("paste")}})})();
(function(){function a(d,c,j,e,l){var g=b.lang.clipboard[c];b.addCommand(c,j);b.ui.addButton&&b.ui.addButton(d,{label:g,command:c,toolbar:"clipboard,"+e});b.addMenuItems&&b.addMenuItem(c,{label:g,command:c,group:"clipboard",order:l})}a("Cut","cut",c("cut"),10,1);a("Copy","copy",c("copy"),20,4);a("Paste","paste",d(),30,8)})();b.getClipboardData=function(a,d){function c(a){a.removeListener();a.cancel();d(a.data)}function j(a){a.removeListener();a.cancel();i=!0;d({type:f,dataValue:a.data})}function l(){this.customTitle=
a&&a.title}var g=!1,f="auto",i=!1;d||(d=a,a=null);b.on("paste",c,null,null,0);b.on("beforePaste",function(a){a.removeListener();g=true;f=a.data.type},null,null,1E3);!1===s()&&(b.removeListener("paste",c),g&&b.fire("pasteDialog",l)?(b.on("pasteDialogCommit",j),b.on("dialogHide",function(a){a.removeListener();a.data.removeListener("pasteDialogCommit",j);setTimeout(function(){i||d(null)},10)})):d(null))}}function w(b){if(CKEDITOR.env.webkit){if(!b.match(/^[^<]*$/g)&&!b.match(/^(<div><br( ?\/)?><\/div>|<div>[^<]*<\/div>)*$/gi))return"html"}else if(CKEDITOR.env.ie){if(!b.match(/^([^<]|<br( ?\/)?>)*$/gi)&&
!b.match(/^(<p>([^<]|<br( ?\/)?>)*<\/p>|(\r\n))*$/gi))return"html"}else if(CKEDITOR.env.gecko){if(!b.match(/^([^<]|<br( ?\/)?>)*$/gi))return"html"}else return"html";return"htmlifiedtext"}function x(b,a){function c(a){return CKEDITOR.tools.repeat("</p><p>",~~(a/2))+(1==a%2?"<br>":"")}a=a.replace(/\s+/g," ").replace(/> +</g,"><").replace(/<br ?\/>/gi,"<br>");a=a.replace(/<\/?[A-Z]+>/g,function(a){return a.toLowerCase()});if(a.match(/^[^<]$/))return a;CKEDITOR.env.webkit&&-1<a.indexOf("<div>")&&(a=a.replace(/^(<div>(<br>|)<\/div>)(?!$|(<div>(<br>|)<\/div>))/g,
"<br>").replace(/^(<div>(<br>|)<\/div>){2}(?!$)/g,"<div></div>"),a.match(/<div>(<br>|)<\/div>/)&&(a="<p>"+a.replace(/(<div>(<br>|)<\/div>)+/g,function(a){return c(a.split("</div><div>").length+1)})+"</p>"),a=a.replace(/<\/div><div>/g,"<br>"),a=a.replace(/<\/?div>/g,""));CKEDITOR.env.gecko&&b.enterMode!=CKEDITOR.ENTER_BR&&(CKEDITOR.env.gecko&&(a=a.replace(/^<br><br>$/,"<br>")),-1<a.indexOf("<br><br>")&&(a="<p>"+a.replace(/(<br>){2,}/g,function(a){return c(a.length/4)})+"</p>"));return o(b,a)}function y(){var b=
new CKEDITOR.htmlParser.filter,a={blockquote:1,dl:1,fieldset:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,ol:1,p:1,table:1,ul:1},c=CKEDITOR.tools.extend({br:0},CKEDITOR.dtd.$inline),d={p:1,br:1,"cke:br":1},g=CKEDITOR.dtd,i=CKEDITOR.tools.extend({area:1,basefont:1,embed:1,iframe:1,map:1,object:1,param:1},CKEDITOR.dtd.$nonBodyContent,CKEDITOR.dtd.$cdata),h=function(a){delete a.name;a.add(new CKEDITOR.htmlParser.text(" "))},f=function(a){for(var b=a,c;(b=b.next)&&b.name&&b.name.match(/^h\d$/);){c=new CKEDITOR.htmlParser.element("cke:br");
c.isEmpty=!0;for(a.add(c);c=b.children.shift();)a.add(c)}};b.addRules({elements:{h1:f,h2:f,h3:f,h4:f,h5:f,h6:f,img:function(a){var a=CKEDITOR.tools.trim(a.attributes.alt||""),b=" ";a&&!a.match(/(^http|\.(jpe?g|gif|png))/i)&&(b=" ["+a+"] ");return new CKEDITOR.htmlParser.text(b)},td:h,th:h,$:function(b){var f=b.name,h;if(i[f])return!1;b.attributes={};if("br"==f)return b;if(a[f])b.name="p";else if(c[f])delete b.name;else if(g[f]){h=new CKEDITOR.htmlParser.element("cke:br");h.isEmpty=!0;if(CKEDITOR.dtd.$empty[f])return h;
b.add(h,0);h=h.clone();h.isEmpty=!0;b.add(h);delete b.name}d[b.name]||delete b.name;return b}}},{applyToAll:!0});return b}function z(b,a,c){var a=new CKEDITOR.htmlParser.fragment.fromHtml(a),d=new CKEDITOR.htmlParser.basicWriter;a.writeHtml(d,c);var a=d.getHtml(),a=a.replace(/\s*(<\/?[a-z:]+ ?\/?>)\s*/g,"$1").replace(/(<cke:br \/>){2,}/g,"<cke:br />").replace(/(<cke:br \/>)(<\/?p>|<br \/>)/g,"$2").replace(/(<\/?p>|<br \/>)(<cke:br \/>)/g,"$1").replace(/<(cke:)?br( \/)?>/g,"<br>").replace(/<p><\/p>/g,
""),g=0,a=a.replace(/<\/?p>/g,function(a){if("<p>"==a){if(1<++g)return"</p><p>"}else if(0<--g)return"</p><p>";return a}).replace(/<p><\/p>/g,"");return o(b,a)}function o(b,a){b.enterMode==CKEDITOR.ENTER_BR?a=a.replace(/(<\/p><p>)+/g,function(a){return CKEDITOR.tools.repeat("<br>",2*(a.length/7))}).replace(/<\/?p>/g,""):b.enterMode==CKEDITOR.ENTER_DIV&&(a=a.replace(/<(\/)?p>/g,"<$1div>"));return a}CKEDITOR.plugins.add("clipboard",{requires:"dialog",init:function(b){var a;v(b);CKEDITOR.dialog.add("paste",
CKEDITOR.getUrl(this.path+"dialogs/paste.js"));b.on("paste",function(a){var b=a.data.dataValue,g=CKEDITOR.dtd.$block;-1<b.indexOf("Apple-")&&(b=b.replace(/<span class="Apple-converted-space">&nbsp;<\/span>/gi," "),"html"!=a.data.type&&(b=b.replace(/<span class="Apple-tab-span"[^>]*>([^<]*)<\/span>/gi,function(a,b){return b.replace(/\t/g,"&nbsp;&nbsp; &nbsp;")})),-1<b.indexOf('<br class="Apple-interchange-newline">')&&(a.data.startsWithEOL=1,a.data.preSniffing="html",b=b.replace(/<br class="Apple-interchange-newline">/,
"")),b=b.replace(/(<[^>]+) class="Apple-[^"]*"/gi,"$1"));if(b.match(/^<[^<]+cke_(editable|contents)/i)){var i,h,f=new CKEDITOR.dom.element("div");for(f.setHtml(b);1==f.getChildCount()&&(i=f.getFirst())&&i.type==CKEDITOR.NODE_ELEMENT&&(i.hasClass("cke_editable")||i.hasClass("cke_contents"));)f=h=i;h&&(b=h.getHtml().replace(/<br>$/i,""))}CKEDITOR.env.ie?b=b.replace(/^&nbsp;(?: |\r\n)?<(\w+)/g,function(b,d){if(d.toLowerCase()in g){a.data.preSniffing="html";return"<"+d}return b}):CKEDITOR.env.webkit?
b=b.replace(/<\/(\w+)><div><br><\/div>$/,function(b,d){if(d in g){a.data.endsWithEOL=1;return"</"+d+">"}return b}):CKEDITOR.env.gecko&&(b=b.replace(/(\s)<br>$/,"$1"));a.data.dataValue=b},null,null,3);b.on("paste",function(c){var c=c.data,d=c.type,g=c.dataValue,i,h=b.config.clipboard_defaultContentType||"html";i="html"==d||"html"==c.preSniffing?"html":w(g);"htmlifiedtext"==i?g=x(b.config,g):"text"==d&&"html"==i&&(g=z(b.config,g,a||(a=y(b))));c.startsWithEOL&&(g='<br data-cke-eol="1">'+g);c.endsWithEOL&&
(g+='<br data-cke-eol="1">');"auto"==d&&(d="html"==i||"html"==h?"html":"text");c.type=d;c.dataValue=g;delete c.preSniffing;delete c.startsWithEOL;delete c.endsWithEOL},null,null,6);b.on("paste",function(a){a=a.data;b.insertHtml(a.dataValue,a.type);setTimeout(function(){b.fire("afterPaste")},0)},null,null,1E3);b.on("pasteDialog",function(a){setTimeout(function(){b.openDialog("paste",a.data)},0)})}})})();(function(){function m(b,d,a){a=b.config.forceEnterMode||a;"wysiwyg"==b.mode&&(d||(d=b.activeEnterMode),b.elementPath().isContextFor("p")||(d=CKEDITOR.ENTER_BR,a=1),b.fire("saveSnapshot"),d==CKEDITOR.ENTER_BR?p(b,d,null,a):q(b,d,null,a),b.fire("saveSnapshot"))}function r(b){for(var b=b.getSelection().getRanges(!0),d=b.length-1;0<d;d--)b[d].deleteContents();return b[0]}function u(b){var d=b.startContainer.getAscendant(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&"true"==a.getAttribute("contenteditable")},
!0);if(b.root.equals(d))return b;d=new CKEDITOR.dom.range(d);d.moveToRange(b);return d}CKEDITOR.plugins.add("enterkey",{init:function(b){b.addCommand("enter",{modes:{wysiwyg:1},editorFocus:!1,exec:function(b){m(b)}});b.addCommand("shiftEnter",{modes:{wysiwyg:1},editorFocus:!1,exec:function(b){m(b,b.activeShiftEnterMode,1)}});b.setKeystroke([[13,"enter"],[CKEDITOR.SHIFT+13,"shiftEnter"]])}});var v=CKEDITOR.dom.walker.whitespaces(),w=CKEDITOR.dom.walker.bookmark();CKEDITOR.plugins.enterkey={enterBlock:function(b,
d,a,h){if(a=a||r(b)){var a=u(a),f=a.document,i=a.checkStartOfBlock(),k=a.checkEndOfBlock(),j=b.elementPath(a.startContainer),c=j.block,l=d==CKEDITOR.ENTER_DIV?"div":"p",e;if(i&&k){if(c&&(c.is("li")||c.getParent().is("li"))){c.is("li")||(c=c.getParent());a=c.getParent();e=a.getParent();var h=!c.hasPrevious(),n=!c.hasNext(),l=b.getSelection(),g=l.createBookmarks(),i=c.getDirection(1),k=c.getAttribute("class"),o=c.getAttribute("style"),m=e.getDirection(1)!=i,b=b.enterMode!=CKEDITOR.ENTER_BR||m||o||k;
if(e.is("li"))if(h||n)c[h?"insertBefore":"insertAfter"](e);else c.breakParent(e);else{if(b)if(j.block.is("li")?(e=f.createElement(d==CKEDITOR.ENTER_P?"p":"div"),m&&e.setAttribute("dir",i),o&&e.setAttribute("style",o),k&&e.setAttribute("class",k),c.moveChildren(e)):e=j.block,h||n)e[h?"insertBefore":"insertAfter"](a);else c.breakParent(a),e.insertAfter(a);else if(c.appendBogus(!0),h||n)for(;f=c[h?"getFirst":"getLast"]();)f[h?"insertBefore":"insertAfter"](a);else for(c.breakParent(a);f=c.getLast();)f.insertAfter(a);
c.remove()}l.selectBookmarks(g);return}if(c&&c.getParent().is("blockquote")){c.breakParent(c.getParent());c.getPrevious().getFirst(CKEDITOR.dom.walker.invisible(1))||c.getPrevious().remove();c.getNext().getFirst(CKEDITOR.dom.walker.invisible(1))||c.getNext().remove();a.moveToElementEditStart(c);a.select();return}}else if(c&&c.is("pre")&&!k){p(b,d,a,h);return}if(i=a.splitBlock(l)){d=i.previousBlock;c=i.nextBlock;j=i.wasStartOfBlock;b=i.wasEndOfBlock;if(c)g=c.getParent(),g.is("li")&&(c.breakParent(g),
c.move(c.getNext(),1));else if(d&&(g=d.getParent())&&g.is("li"))d.breakParent(g),g=d.getNext(),a.moveToElementEditStart(g),d.move(d.getPrevious());if(!j&&!b)c.is("li")&&(e=a.clone(),e.selectNodeContents(c),e=new CKEDITOR.dom.walker(e),e.evaluator=function(a){return!(w(a)||v(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.getName()in CKEDITOR.dtd.$inline&&!(a.getName()in CKEDITOR.dtd.$empty))},(g=e.next())&&(g.type==CKEDITOR.NODE_ELEMENT&&g.is("ul","ol"))&&(CKEDITOR.env.needsBrFiller?f.createElement("br"):f.createText(" ")).insertBefore(g)),
c&&a.moveToElementEditStart(c);else{if(d){if(d.is("li")||!s.test(d.getName())&&!d.is("pre"))e=d.clone()}else c&&(e=c.clone());e?h&&!e.is("li")&&e.renameNode(l):g&&g.is("li")?e=g:(e=f.createElement(l),d&&(n=d.getDirection())&&e.setAttribute("dir",n));if(f=i.elementPath){h=0;for(l=f.elements.length;h<l;h++){g=f.elements[h];if(g.equals(f.block)||g.equals(f.blockLimit))break;CKEDITOR.dtd.$removeEmpty[g.getName()]&&(g=g.clone(),e.moveChildren(g),e.append(g))}}e.appendBogus();e.getParent()||a.insertNode(e);
e.is("li")&&e.removeAttribute("value");if(CKEDITOR.env.ie&&j&&(!b||!d.getChildCount()))a.moveToElementEditStart(b?d:e),a.select();a.moveToElementEditStart(j&&!b?c:e)}a.select();a.scrollIntoView()}}},enterBr:function(b,d,a,h){if(a=a||r(b)){var f=a.document,i=a.checkEndOfBlock(),k=new CKEDITOR.dom.elementPath(b.getSelection().getStartElement()),j=k.block,c=j&&k.block.getName();!h&&"li"==c?q(b,d,a,h):(!h&&i&&s.test(c)?(i=j.getDirection())?(f=f.createElement("div"),f.setAttribute("dir",i),f.insertAfter(j),
a.setStart(f,0)):(f.createElement("br").insertAfter(j),CKEDITOR.env.gecko&&f.createText("").insertAfter(j),a.setStartAt(j.getNext(),CKEDITOR.env.ie?CKEDITOR.POSITION_BEFORE_START:CKEDITOR.POSITION_AFTER_START)):(b="pre"==c&&CKEDITOR.env.ie&&8>CKEDITOR.env.version?f.createText("\r"):f.createElement("br"),a.deleteContents(),a.insertNode(b),CKEDITOR.env.needsBrFiller?(f.createText("﻿").insertAfter(b),i&&(j||k.blockLimit).appendBogus(),b.getNext().$.nodeValue="",a.setStartAt(b.getNext(),CKEDITOR.POSITION_AFTER_START)):
a.setStartAt(b,CKEDITOR.POSITION_AFTER_END)),a.collapse(!0),a.select(),a.scrollIntoView())}}};var t=CKEDITOR.plugins.enterkey,p=t.enterBr,q=t.enterBlock,s=/^h[1-6]$/})();(function(){var b={canUndo:!1,exec:function(a){var b=a.document.createElement("hr");a.insertElement(b)},allowedContent:"hr",requiredContent:"hr"};CKEDITOR.plugins.add("horizontalrule",{init:function(a){a.blockless||(a.addCommand("horizontalrule",b),a.ui.addButton&&a.ui.addButton("HorizontalRule",{label:a.lang.horizontalrule.toolbar,command:"horizontalrule",toolbar:"insert,40"}))}})})();(function(){function k(a,b){var e,f;b.on("refresh",function(a){var b=[i],c;for(c in a.data.states)b.push(a.data.states[c]);this.setState(CKEDITOR.tools.search(b,m)?m:i)},b,null,100);b.on("exec",function(b){e=a.getSelection();f=e.createBookmarks(1);b.data||(b.data={});b.data.done=!1},b,null,0);b.on("exec",function(){a.forceNextSelectionCheck();e.selectBookmarks(f)},b,null,100)}var i=CKEDITOR.TRISTATE_DISABLED,m=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indent",{init:function(a){var b=CKEDITOR.plugins.indent.genericDefinition;
k(a,a.addCommand("indent",new b(!0)));k(a,a.addCommand("outdent",new b));a.ui.addButton&&(a.ui.addButton("Indent",{label:a.lang.indent.indent,command:"indent",directional:!0,toolbar:"indent,20"}),a.ui.addButton("Outdent",{label:a.lang.indent.outdent,command:"outdent",directional:!0,toolbar:"indent,10"}));a.on("dirChanged",function(b){var f=a.createRange(),j=b.data.node;f.setStartBefore(j);f.setEndAfter(j);for(var l=new CKEDITOR.dom.walker(f),c;c=l.next();)if(c.type==CKEDITOR.NODE_ELEMENT)if(!c.equals(j)&&
c.getDirection()){f.setStartAfter(c);l=new CKEDITOR.dom.walker(f)}else{var d=a.config.indentClasses;if(d)for(var g=b.data.dir=="ltr"?["_rtl",""]:["","_rtl"],h=0;h<d.length;h++)if(c.hasClass(d[h]+g[0])){c.removeClass(d[h]+g[0]);c.addClass(d[h]+g[1])}d=c.getStyle("margin-right");g=c.getStyle("margin-left");d?c.setStyle("margin-left",d):c.removeStyle("margin-left");g?c.setStyle("margin-right",g):c.removeStyle("margin-right")}})}});CKEDITOR.plugins.indent={genericDefinition:function(a){this.isIndent=
!!a;this.startDisabled=!this.isIndent},specificDefinition:function(a,b,e){this.name=b;this.editor=a;this.jobs={};this.enterBr=a.config.enterMode==CKEDITOR.ENTER_BR;this.isIndent=!!e;this.relatedGlobal=e?"indent":"outdent";this.indentKey=e?9:CKEDITOR.SHIFT+9;this.database={}},registerCommands:function(a,b){a.on("pluginsLoaded",function(){for(var a in b)(function(a,b){var e=a.getCommand(b.relatedGlobal),c;for(c in b.jobs)e.on("exec",function(d){d.data.done||(a.fire("lockSnapshot"),b.execJob(a,c)&&(d.data.done=
!0),a.fire("unlockSnapshot"),CKEDITOR.dom.element.clearAllMarkers(b.database))},this,null,c),e.on("refresh",function(d){d.data.states||(d.data.states={});d.data.states[b.name+"@"+c]=b.refreshJob(a,c,d.data.path)},this,null,c);a.addFeature(b)})(this,b[a])})}};CKEDITOR.plugins.indent.genericDefinition.prototype={context:"p",exec:function(){}};CKEDITOR.plugins.indent.specificDefinition.prototype={execJob:function(a,b){var e=this.jobs[b];if(e.state!=i)return e.exec.call(this,a)},refreshJob:function(a,
b,e){b=this.jobs[b];b.state=a.activeFilter.checkFeature(this)?b.refresh.call(this,a,e):i;return b.state},getContext:function(a){return a.contains(this.context)}}})();(function(){function s(c){function f(b){for(var e=d.startContainer,a=d.endContainer;e&&!e.getParent().equals(b);)e=e.getParent();for(;a&&!a.getParent().equals(b);)a=a.getParent();if(!e||!a)return!1;for(var g=e,e=[],i=!1;!i;)g.equals(a)&&(i=!0),e.push(g),g=g.getNext();if(1>e.length)return!1;g=b.getParents(!0);for(a=0;a<g.length;a++)if(g[a].getName&&m[g[a].getName()]){b=g[a];break}for(var g=j.isIndent?1:-1,a=e[0],e=e[e.length-1],i=CKEDITOR.plugins.list.listToArray(b,n),l=i[e.getCustomData("listarray_index")].indent,
a=a.getCustomData("listarray_index");a<=e.getCustomData("listarray_index");a++)if(i[a].indent+=g,0<g){var h=i[a].parent;i[a].parent=new CKEDITOR.dom.element(h.getName(),h.getDocument())}for(a=e.getCustomData("listarray_index")+1;a<i.length&&i[a].indent>l;a++)i[a].indent+=g;e=CKEDITOR.plugins.list.arrayToList(i,n,null,c.config.enterMode,b.getDirection());if(!j.isIndent){var f;if((f=b.getParent())&&f.is("li"))for(var g=e.listNode.getChildren(),o=[],k,a=g.count()-1;0<=a;a--)(k=g.getItem(a))&&(k.is&&
k.is("li"))&&o.push(k)}e&&e.listNode.replace(b);if(o&&o.length)for(a=0;a<o.length;a++){for(k=b=o[a];(k=k.getNext())&&k.is&&k.getName()in m;)CKEDITOR.env.needsNbspFiller&&!b.getFirst(t)&&b.append(d.document.createText(" ")),b.append(k);b.insertAfter(f)}e&&c.fire("contentDomInvalidated");return!0}for(var j=this,n=this.database,m=this.context,l=c.getSelection(),l=(l&&l.getRanges()).createIterator(),d;d=l.getNextRange();){for(var b=d.getCommonAncestor();b&&!(b.type==CKEDITOR.NODE_ELEMENT&&m[b.getName()]);)b=
b.getParent();b||(b=d.startPath().contains(m))&&d.setEndAt(b,CKEDITOR.POSITION_BEFORE_END);if(!b){var h=d.getEnclosedNode();h&&(h.type==CKEDITOR.NODE_ELEMENT&&h.getName()in m)&&(d.setStartAt(h,CKEDITOR.POSITION_AFTER_START),d.setEndAt(h,CKEDITOR.POSITION_BEFORE_END),b=h)}b&&(d.startContainer.type==CKEDITOR.NODE_ELEMENT&&d.startContainer.getName()in m)&&(h=new CKEDITOR.dom.walker(d),h.evaluator=p,d.startContainer=h.next());b&&(d.endContainer.type==CKEDITOR.NODE_ELEMENT&&d.endContainer.getName()in m)&&
(h=new CKEDITOR.dom.walker(d),h.evaluator=p,d.endContainer=h.previous());if(b)return f(b)}return 0}function p(c){return c.type==CKEDITOR.NODE_ELEMENT&&c.is("li")}function t(c){return u(c)&&v(c)}var u=CKEDITOR.dom.walker.whitespaces(!0),v=CKEDITOR.dom.walker.bookmark(!1,!0),q=CKEDITOR.TRISTATE_DISABLED,r=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indentlist",{requires:"indent",init:function(c){function f(c){j.specificDefinition.apply(this,arguments);this.requiredContent=["ul","ol"];c.on("key",function(f){if("wysiwyg"==
c.mode&&f.data.keyCode==this.indentKey){var l=this.getContext(c.elementPath());if(l&&(!this.isIndent||!CKEDITOR.plugins.indentList.firstItemInPath(this.context,c.elementPath(),l)))c.execCommand(this.relatedGlobal),f.cancel()}},this);this.jobs[this.isIndent?10:30]={refresh:this.isIndent?function(c,f){var d=this.getContext(f),b=CKEDITOR.plugins.indentList.firstItemInPath(this.context,f,d);return!d||!this.isIndent||b?q:r}:function(c,f){return!this.getContext(f)||this.isIndent?q:r},exec:CKEDITOR.tools.bind(s,
this)}}var j=CKEDITOR.plugins.indent;j.registerCommands(c,{indentlist:new f(c,"indentlist",!0),outdentlist:new f(c,"outdentlist")});CKEDITOR.tools.extend(f.prototype,j.specificDefinition.prototype,{context:{ol:1,ul:1}})}});CKEDITOR.plugins.indentList={};CKEDITOR.plugins.indentList.firstItemInPath=function(c,f,j){var n=f.contains(p);j||(j=f.contains(c));return j&&n&&n.equals(j.getFirst(p))}})();(function(){function E(b,k,e){function d(d){if((a=c[d?"getFirst":"getLast"]())&&(!a.is||!a.isBlockBoundary())&&(m=k.root[d?"getPrevious":"getNext"](CKEDITOR.dom.walker.invisible(!0)))&&(!m.is||!m.isBlockBoundary({br:1})))b.document.createElement("br")[d?"insertBefore":"insertAfter"](a)}for(var f=CKEDITOR.plugins.list.listToArray(k.root,e),g=[],i=0;i<k.contents.length;i++){var h=k.contents[i];if((h=h.getAscendant("li",!0))&&!h.getCustomData("list_item_processed"))g.push(h),CKEDITOR.dom.element.setMarker(e,
h,"list_item_processed",!0)}h=null;for(i=0;i<g.length;i++)h=g[i].getCustomData("listarray_index"),f[h].indent=-1;for(i=h+1;i<f.length;i++)if(f[i].indent>f[i-1].indent+1){g=f[i-1].indent+1-f[i].indent;for(h=f[i].indent;f[i]&&f[i].indent>=h;)f[i].indent+=g,i++;i--}var c=CKEDITOR.plugins.list.arrayToList(f,e,null,b.config.enterMode,k.root.getAttribute("dir")).listNode,a,m;d(!0);d();c.replace(k.root);b.fire("contentDomInvalidated")}function x(b,k){this.name=b;this.context=this.type=k;this.allowedContent=
k+" li";this.requiredContent=k}function A(b,k,e,d){for(var f,g;f=b[d?"getLast":"getFirst"](F);)(g=f.getDirection(1))!==k.getDirection(1)&&f.setAttribute("dir",g),f.remove(),e?f[d?"insertBefore":"insertAfter"](e):k.append(f,d)}function B(b){function k(e){var d=b[e?"getPrevious":"getNext"](q);d&&(d.type==CKEDITOR.NODE_ELEMENT&&d.is(b.getName()))&&(A(b,d,null,!e),b.remove(),b=d)}k();k(1)}function C(b){return b.type==CKEDITOR.NODE_ELEMENT&&(b.getName()in CKEDITOR.dtd.$block||b.getName()in CKEDITOR.dtd.$listItem)&&
CKEDITOR.dtd[b.getName()]["#"]}function y(b,k,e){b.fire("saveSnapshot");e.enlarge(CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS);var d=e.extractContents();k.trim(!1,!0);var f=k.createBookmark(),g=new CKEDITOR.dom.elementPath(k.startContainer),i=g.block,g=g.lastElement.getAscendant("li",1)||i,h=new CKEDITOR.dom.elementPath(e.startContainer),c=h.contains(CKEDITOR.dtd.$listItem),h=h.contains(CKEDITOR.dtd.$list);i?(i=i.getBogus())&&i.remove():h&&(i=h.getPrevious(q))&&v(i)&&i.remove();(i=d.getLast())&&(i.type==
CKEDITOR.NODE_ELEMENT&&i.is("br"))&&i.remove();(i=k.startContainer.getChild(k.startOffset))?d.insertBefore(i):k.startContainer.append(d);if(c&&(d=w(c)))g.contains(c)?(A(d,c.getParent(),c),d.remove()):g.append(d);for(;e.checkStartOfBlock()&&e.checkEndOfBlock();){h=e.startPath();d=h.block;if(!d)break;d.is("li")&&(g=d.getParent(),d.equals(g.getLast(q))&&d.equals(g.getFirst(q))&&(d=g));e.moveToPosition(d,CKEDITOR.POSITION_BEFORE_START);d.remove()}e=e.clone();d=b.editable();e.setEndAt(d,CKEDITOR.POSITION_BEFORE_END);
e=new CKEDITOR.dom.walker(e);e.evaluator=function(a){return q(a)&&!v(a)};(e=e.next())&&(e.type==CKEDITOR.NODE_ELEMENT&&e.getName()in CKEDITOR.dtd.$list)&&B(e);k.moveToBookmark(f);k.select();b.fire("saveSnapshot")}function w(b){return(b=b.getLast(q))&&b.type==CKEDITOR.NODE_ELEMENT&&b.getName()in r?b:null}var r={ol:1,ul:1},G=CKEDITOR.dom.walker.whitespaces(),D=CKEDITOR.dom.walker.bookmark(),q=function(b){return!(G(b)||D(b))},v=CKEDITOR.dom.walker.bogus();CKEDITOR.plugins.list={listToArray:function(b,
k,e,d,f){if(!r[b.getName()])return[];d||(d=0);e||(e=[]);for(var g=0,i=b.getChildCount();g<i;g++){var h=b.getChild(g);h.type==CKEDITOR.NODE_ELEMENT&&h.getName()in CKEDITOR.dtd.$list&&CKEDITOR.plugins.list.listToArray(h,k,e,d+1);if("li"==h.$.nodeName.toLowerCase()){var c={parent:b,indent:d,element:h,contents:[]};f?c.grandparent=f:(c.grandparent=b.getParent(),c.grandparent&&"li"==c.grandparent.$.nodeName.toLowerCase()&&(c.grandparent=c.grandparent.getParent()));k&&CKEDITOR.dom.element.setMarker(k,h,
"listarray_index",e.length);e.push(c);for(var a=0,m=h.getChildCount(),j;a<m;a++)j=h.getChild(a),j.type==CKEDITOR.NODE_ELEMENT&&r[j.getName()]?CKEDITOR.plugins.list.listToArray(j,k,e,d+1,c.grandparent):c.contents.push(j)}}return e},arrayToList:function(b,k,e,d,f){e||(e=0);if(!b||b.length<e+1)return null;for(var g,i=b[e].parent.getDocument(),h=new CKEDITOR.dom.documentFragment(i),c=null,a=e,m=Math.max(b[e].indent,0),j=null,n,l,p=d==CKEDITOR.ENTER_P?"p":"div";;){var o=b[a];g=o.grandparent;n=o.element.getDirection(1);
if(o.indent==m){if(!c||b[a].parent.getName()!=c.getName())c=b[a].parent.clone(!1,1),f&&c.setAttribute("dir",f),h.append(c);j=c.append(o.element.clone(0,1));n!=c.getDirection(1)&&j.setAttribute("dir",n);for(g=0;g<o.contents.length;g++)j.append(o.contents[g].clone(1,1));a++}else if(o.indent==Math.max(m,0)+1)o=b[a-1].element.getDirection(1),a=CKEDITOR.plugins.list.arrayToList(b,null,a,d,o!=n?n:null),!j.getChildCount()&&(CKEDITOR.env.needsNbspFiller&&7>=i.$.documentMode)&&j.append(i.createText(" ")),
j.append(a.listNode),a=a.nextIndex;else if(-1==o.indent&&!e&&g){r[g.getName()]?(j=o.element.clone(!1,!0),n!=g.getDirection(1)&&j.setAttribute("dir",n)):j=new CKEDITOR.dom.documentFragment(i);var c=g.getDirection(1)!=n,u=o.element,z=u.getAttribute("class"),v=u.getAttribute("style"),w=j.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&&(d!=CKEDITOR.ENTER_BR||c||v||z),s,x=o.contents.length,t;for(g=0;g<x;g++)if(s=o.contents[g],D(s)&&1<x)w?t=s.clone(1,1):j.append(s.clone(1,1));else if(s.type==CKEDITOR.NODE_ELEMENT&&
s.isBlockBoundary()){c&&!s.getDirection()&&s.setAttribute("dir",n);l=s;var y=u.getAttribute("style");y&&l.setAttribute("style",y.replace(/([^;])$/,"$1;")+(l.getAttribute("style")||""));z&&s.addClass(z);l=null;t&&(j.append(t),t=null);j.append(s.clone(1,1))}else w?(l||(l=i.createElement(p),j.append(l),c&&l.setAttribute("dir",n)),v&&l.setAttribute("style",v),z&&l.setAttribute("class",z),t&&(l.append(t),t=null),l.append(s.clone(1,1))):j.append(s.clone(1,1));t&&((l||j).append(t),t=null);j.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&&
a!=b.length-1&&(CKEDITOR.env.needsBrFiller&&(n=j.getLast())&&(n.type==CKEDITOR.NODE_ELEMENT&&n.is("br"))&&n.remove(),n=j.getLast(q),(!n||!(n.type==CKEDITOR.NODE_ELEMENT&&n.is(CKEDITOR.dtd.$block)))&&j.append(i.createElement("br")));n=j.$.nodeName.toLowerCase();("div"==n||"p"==n)&&j.appendBogus();h.append(j);c=null;a++}else return null;l=null;if(b.length<=a||Math.max(b[a].indent,0)<m)break}if(k)for(b=h.getFirst();b;){if(b.type==CKEDITOR.NODE_ELEMENT&&(CKEDITOR.dom.element.clearMarkers(k,b),b.getName()in
CKEDITOR.dtd.$listItem&&(e=b,i=f=d=void 0,d=e.getDirection()))){for(f=e.getParent();f&&!(i=f.getDirection());)f=f.getParent();d==i&&e.removeAttribute("dir")}b=b.getNextSourceNode()}return{listNode:h,nextIndex:a}}};var H=/^h[1-6]$/,F=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT);x.prototype={exec:function(b){this.refresh(b,b.elementPath());var k=b.config,e=b.getSelection(),d=e&&e.getRanges();if(this.state==CKEDITOR.TRISTATE_OFF){var f=b.editable();if(f.getFirst(q)){var g=1==d.length&&d[0];(k=
g&&g.getEnclosedNode())&&(k.is&&this.type==k.getName())&&this.setState(CKEDITOR.TRISTATE_ON)}else k.enterMode==CKEDITOR.ENTER_BR?f.appendBogus():d[0].fixBlock(1,k.enterMode==CKEDITOR.ENTER_P?"p":"div"),e.selectRanges(d)}for(var k=e.createBookmarks(!0),f=[],i={},d=d.createIterator(),h=0;(g=d.getNextRange())&&++h;){var c=g.getBoundaryNodes(),a=c.startNode,m=c.endNode;a.type==CKEDITOR.NODE_ELEMENT&&"td"==a.getName()&&g.setStartAt(c.startNode,CKEDITOR.POSITION_AFTER_START);m.type==CKEDITOR.NODE_ELEMENT&&
"td"==m.getName()&&g.setEndAt(c.endNode,CKEDITOR.POSITION_BEFORE_END);g=g.createIterator();for(g.forceBrBreak=this.state==CKEDITOR.TRISTATE_OFF;c=g.getNextParagraph();)if(!c.getCustomData("list_block")){CKEDITOR.dom.element.setMarker(i,c,"list_block",1);for(var j=b.elementPath(c),a=j.elements,m=0,j=j.blockLimit,n,l=a.length-1;0<=l&&(n=a[l]);l--)if(r[n.getName()]&&j.contains(n)){j.removeCustomData("list_group_object_"+h);(a=n.getCustomData("list_group_object"))?a.contents.push(c):(a={root:n,contents:[c]},
f.push(a),CKEDITOR.dom.element.setMarker(i,n,"list_group_object",a));m=1;break}m||(m=j,m.getCustomData("list_group_object_"+h)?m.getCustomData("list_group_object_"+h).contents.push(c):(a={root:m,contents:[c]},CKEDITOR.dom.element.setMarker(i,m,"list_group_object_"+h,a),f.push(a)))}}for(n=[];0<f.length;)if(a=f.shift(),this.state==CKEDITOR.TRISTATE_OFF)if(r[a.root.getName()]){d=b;h=a;a=i;g=n;m=CKEDITOR.plugins.list.listToArray(h.root,a);j=[];for(c=0;c<h.contents.length;c++)if(l=h.contents[c],(l=l.getAscendant("li",
!0))&&!l.getCustomData("list_item_processed"))j.push(l),CKEDITOR.dom.element.setMarker(a,l,"list_item_processed",!0);for(var l=h.root.getDocument(),p=void 0,o=void 0,c=0;c<j.length;c++){var u=j[c].getCustomData("listarray_index"),p=m[u].parent;p.is(this.type)||(o=l.createElement(this.type),p.copyAttributes(o,{start:1,type:1}),o.removeStyle("list-style-type"),m[u].parent=o)}a=CKEDITOR.plugins.list.arrayToList(m,a,null,d.config.enterMode);m=void 0;j=a.listNode.getChildCount();for(c=0;c<j&&(m=a.listNode.getChild(c));c++)m.getName()==
this.type&&g.push(m);a.listNode.replace(h.root);d.fire("contentDomInvalidated")}else{m=b;c=a;g=n;j=c.contents;d=c.root.getDocument();h=[];1==j.length&&j[0].equals(c.root)&&(a=d.createElement("div"),j[0].moveChildren&&j[0].moveChildren(a),j[0].append(a),j[0]=a);c=c.contents[0].getParent();for(l=0;l<j.length;l++)c=c.getCommonAncestor(j[l].getParent());p=m.config.useComputedState;m=a=void 0;p=void 0===p||p;for(l=0;l<j.length;l++)for(o=j[l];u=o.getParent();){if(u.equals(c)){h.push(o);!m&&o.getDirection()&&
(m=1);o=o.getDirection(p);null!==a&&(a=a&&a!=o?null:o);break}o=u}if(!(1>h.length)){j=h[h.length-1].getNext();l=d.createElement(this.type);g.push(l);for(p=g=void 0;h.length;)g=h.shift(),p=d.createElement("li"),g.is("pre")||H.test(g.getName())||"false"==g.getAttribute("contenteditable")?g.appendTo(p):(g.copyAttributes(p),a&&g.getDirection()&&(p.removeStyle("direction"),p.removeAttribute("dir")),g.moveChildren(p),g.remove()),p.appendTo(l);a&&m&&l.setAttribute("dir",a);j?l.insertBefore(j):l.appendTo(c)}}else this.state==
CKEDITOR.TRISTATE_ON&&r[a.root.getName()]&&E.call(this,b,a,i);for(l=0;l<n.length;l++)B(n[l]);CKEDITOR.dom.element.clearAllMarkers(i);e.selectBookmarks(k);b.focus()},refresh:function(b,k){var e=k.contains(r,1),d=k.blockLimit||k.root;e&&d.contains(e)?this.setState(e.is(this.type)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF):this.setState(CKEDITOR.TRISTATE_OFF)}};CKEDITOR.plugins.add("list",{requires:"indentlist",init:function(b){b.blockless||(b.addCommand("numberedlist",new x("numberedlist","ol")),b.addCommand("bulletedlist",
new x("bulletedlist","ul")),b.ui.addButton&&(b.ui.addButton("NumberedList",{label:b.lang.list.numberedlist,command:"numberedlist",directional:!0,toolbar:"list,10"}),b.ui.addButton("BulletedList",{label:b.lang.list.bulletedlist,command:"bulletedlist",directional:!0,toolbar:"list,20"})),b.on("key",function(k){var e=k.data.domEvent.getKey(),d;if(b.mode=="wysiwyg"&&e in{8:1,46:1}){var f=b.getSelection().getRanges()[0],g=f&&f.startPath();if(f&&f.collapsed){var i=e==8,h=b.editable(),c=new CKEDITOR.dom.walker(f.clone());
c.evaluator=function(a){return q(a)&&!v(a)};c.guard=function(a,b){return!(b&&a.type==CKEDITOR.NODE_ELEMENT&&a.is("table"))};e=f.clone();if(i){var a;if((a=g.contains(r))&&f.checkBoundaryOfElement(a,CKEDITOR.START)&&(a=a.getParent())&&a.is("li")&&(a=w(a))){d=a;a=a.getPrevious(q);e.moveToPosition(a&&v(a)?a:d,CKEDITOR.POSITION_BEFORE_START)}else{c.range.setStartAt(h,CKEDITOR.POSITION_AFTER_START);c.range.setEnd(f.startContainer,f.startOffset);if((a=c.previous())&&a.type==CKEDITOR.NODE_ELEMENT&&(a.getName()in
r||a.is("li"))){if(!a.is("li")){c.range.selectNodeContents(a);c.reset();c.evaluator=C;a=c.previous()}d=a;e.moveToElementEditEnd(d)}}if(d){y(b,e,f);k.cancel()}else if((e=g.contains(r))&&f.checkBoundaryOfElement(e,CKEDITOR.START)){d=e.getFirst(q);if(f.checkBoundaryOfElement(d,CKEDITOR.START)){a=e.getPrevious(q);if(w(d)){if(a){f.moveToElementEditEnd(a);f.select()}}else b.execCommand("outdent");k.cancel()}}}else if(d=g.contains("li")){c.range.setEndAt(h,CKEDITOR.POSITION_BEFORE_END);d=(g=d.getLast(q))&&
C(g)?g:d;h=0;if((a=c.next())&&a.type==CKEDITOR.NODE_ELEMENT&&a.getName()in r&&a.equals(g)){h=1;a=c.next()}else f.checkBoundaryOfElement(d,CKEDITOR.END)&&(h=1);if(h&&a){f=f.clone();f.moveToElementEditStart(a);y(b,e,f);k.cancel()}}else{c.range.setEndAt(h,CKEDITOR.POSITION_BEFORE_END);if((a=c.next())&&a.type==CKEDITOR.NODE_ELEMENT&&a.is(r)){a=a.getFirst(q);if(g.block&&f.checkStartOfBlock()&&f.checkEndOfBlock()){g.block.remove();f.moveToElementEditStart(a);f.select()}else if(w(a)){f.moveToElementEditStart(a);
f.select()}else{f=f.clone();f.moveToElementEditStart(a);y(b,e,f)}k.cancel()}}setTimeout(function(){b.selectionChange(1)})}}}))}})})();(function(){function h(a,d,f){var b=CKEDITOR.cleanWord;b?f():(a=CKEDITOR.getUrl(a.config.pasteFromWordCleanupFile||d+"filter/default.js"),CKEDITOR.scriptLoader.load(a,f,null,!0));return!b}function i(a){a.data.type="html"}CKEDITOR.plugins.add("pastefromword",{requires:"clipboard",init:function(a){var d=0,f=this.path;a.addCommand("pastefromword",{canUndo:!1,async:!0,exec:function(a){var e=this;d=1;a.once("beforePaste",i);a.getClipboardData({title:a.lang.pastefromword.title},function(c){c&&a.fire("paste",
{type:"html",dataValue:c.dataValue});a.fire("afterCommandExec",{name:"pastefromword",command:e,returnValue:!!c})})}});a.ui.addButton&&a.ui.addButton("PasteFromWord",{label:a.lang.pastefromword.toolbar,command:"pastefromword",toolbar:"clipboard,50"});a.on("pasteState",function(b){a.getCommand("pastefromword").setState(b.data)});a.on("paste",function(b){var e=b.data,c=e.dataValue;if(c&&(d||/(class=\"?Mso|style=\"[^\"]*\bmso\-|w:WordDocument)/.test(c))){var g=h(a,f,function(){if(g)a.fire("paste",e);
else if(!a.config.pasteFromWordPromptCleanup||d||confirm(a.lang.pastefromword.confirmCleanup))e.dataValue=CKEDITOR.cleanWord(c,a);d=0});g&&b.cancel()}},null,null,3)}})})();CKEDITOR.plugins.add("removeformat",{init:function(a){a.addCommand("removeFormat",CKEDITOR.plugins.removeformat.commands.removeformat);a.ui.addButton&&a.ui.addButton("RemoveFormat",{label:a.lang.removeformat.toolbar,command:"removeFormat",toolbar:"cleanup,10"})}});
CKEDITOR.plugins.removeformat={commands:{removeformat:{exec:function(a){for(var h=a._.removeFormatRegex||(a._.removeFormatRegex=RegExp("^(?:"+a.config.removeFormatTags.replace(/,/g,"|")+")$","i")),e=a._.removeAttributes||(a._.removeAttributes=a.config.removeFormatAttributes.split(",")),f=CKEDITOR.plugins.removeformat.filter,k=a.getSelection().getRanges(),l=k.createIterator(),m=function(a){return a.type==CKEDITOR.NODE_ELEMENT},c;c=l.getNextRange();){c.collapsed||c.enlarge(CKEDITOR.ENLARGE_ELEMENT);
var j=c.createBookmark(),b=j.startNode,d=j.endNode,i=function(b){for(var c=a.elementPath(b),e=c.elements,d=1,g;(g=e[d])&&!g.equals(c.block)&&!g.equals(c.blockLimit);d++)h.test(g.getName())&&f(a,g)&&b.breakParent(g)};i(b);if(d){i(d);for(b=b.getNextSourceNode(!0,CKEDITOR.NODE_ELEMENT);b&&!b.equals(d);)if(b.isReadOnly()){if(b.getPosition(d)&CKEDITOR.POSITION_CONTAINS)break;b=b.getNext(m)}else i=b.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT),!("img"==b.getName()&&b.data("cke-realelement"))&&f(a,b)&&(h.test(b.getName())?
b.remove(1):(b.removeAttributes(e),a.fire("removeFormatCleanup",b))),b=i}c.moveToBookmark(j)}a.forceNextSelectionCheck();a.getSelection().selectRanges(k)}}},filter:function(a,h){for(var e=a._.removeFormatFilters||[],f=0;f<e.length;f++)if(!1===e[f](h))return!1;return!0}};CKEDITOR.editor.prototype.addRemoveFormatFilter=function(a){this._.removeFormatFilters||(this._.removeFormatFilters=[]);this._.removeFormatFilters.push(a)};CKEDITOR.config.removeFormatTags="b,big,cite,code,del,dfn,em,font,i,ins,kbd,q,s,samp,small,span,strike,strong,sub,sup,tt,u,var";
CKEDITOR.config.removeFormatAttributes="class,style,lang,width,height,align,hspace,valign";(function(){var g=[CKEDITOR.CTRL+90,CKEDITOR.CTRL+89,CKEDITOR.CTRL+CKEDITOR.SHIFT+90],l={8:1,46:1};CKEDITOR.plugins.add("undo",{init:function(a){function b(a){d.enabled&&!1!==a.data.command.canUndo&&d.save()}function c(){d.enabled=a.readOnly?!1:"wysiwyg"==a.mode;d.onChange()}var d=a.undoManager=new e(a),j=d.editingHandler=new i(d),f=a.addCommand("undo",{exec:function(){d.undo()&&(a.selectionChange(),this.fire("afterUndo"))},startDisabled:!0,canUndo:!1}),h=a.addCommand("redo",{exec:function(){d.redo()&&
(a.selectionChange(),this.fire("afterRedo"))},startDisabled:!0,canUndo:!1});a.setKeystroke([[g[0],"undo"],[g[1],"redo"],[g[2],"redo"]]);d.onChange=function(){f.setState(d.undoable()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);h.setState(d.redoable()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)};a.on("beforeCommandExec",b);a.on("afterCommandExec",b);a.on("saveSnapshot",function(a){d.save(a.data&&a.data.contentOnly)});a.on("contentDom",j.attachListeners,j);a.on("instanceReady",function(){a.fire("saveSnapshot")});
a.on("beforeModeUnload",function(){"wysiwyg"==a.mode&&d.save(!0)});a.on("mode",c);a.on("readOnly",c);a.ui.addButton&&(a.ui.addButton("Undo",{label:a.lang.undo.undo,command:"undo",toolbar:"undo,10"}),a.ui.addButton("Redo",{label:a.lang.undo.redo,command:"redo",toolbar:"undo,20"}));a.resetUndo=function(){d.reset();a.fire("saveSnapshot")};a.on("updateSnapshot",function(){d.currentImage&&d.update()});a.on("lockSnapshot",function(a){a=a.data;d.lock(a&&a.dontUpdate,a&&a.forceUpdate)});a.on("unlockSnapshot",
d.unlock,d)}});CKEDITOR.plugins.undo={};var e=CKEDITOR.plugins.undo.UndoManager=function(a){this.strokesRecorded=[0,0];this.locked=null;this.previousKeyGroup=-1;this.limit=a.config.undoStackSize||20;this.strokesLimit=25;this.editor=a;this.reset()};e.prototype={type:function(a,b){var c=e.getKeyGroup(a),d=this.strokesRecorded[c]+1,b=b||d>=this.strokesLimit;this.typing||(this.hasUndo=this.typing=!0,this.hasRedo=!1,this.onChange());b?(d=0,this.editor.fire("saveSnapshot")):this.editor.fire("change");this.strokesRecorded[c]=
d;this.previousKeyGroup=c},keyGroupChanged:function(a){return e.getKeyGroup(a)!=this.previousKeyGroup},reset:function(){this.snapshots=[];this.index=-1;this.currentImage=null;this.hasRedo=this.hasUndo=!1;this.locked=null;this.resetType()},resetType:function(){this.strokesRecorded=[0,0];this.typing=!1;this.previousKeyGroup=-1},refreshState:function(){this.hasUndo=!!this.getNextImage(!0);this.hasRedo=!!this.getNextImage(!1);this.resetType();this.onChange()},save:function(a,b,c){var d=this.editor;if(this.locked||
"ready"!=d.status||"wysiwyg"!=d.mode)return!1;var e=d.editable();if(!e||"ready"!=e.status)return!1;e=this.snapshots;b||(b=new f(d));if(!1===b.contents)return!1;if(this.currentImage)if(b.equalsContent(this.currentImage)){if(a||b.equalsSelection(this.currentImage))return!1}else!1!==c&&d.fire("change");e.splice(this.index+1,e.length-this.index-1);e.length==this.limit&&e.shift();this.index=e.push(b)-1;this.currentImage=b;!1!==c&&this.refreshState();return!0},restoreImage:function(a){var b=this.editor,
c;a.bookmarks&&(b.focus(),c=b.getSelection());this.locked={level:999};this.editor.loadSnapshot(a.contents);a.bookmarks?c.selectBookmarks(a.bookmarks):CKEDITOR.env.ie&&(c=this.editor.document.getBody().$.createTextRange(),c.collapse(!0),c.select());this.locked=null;this.index=a.index;this.currentImage=this.snapshots[this.index];this.update();this.refreshState();b.fire("change")},getNextImage:function(a){var b=this.snapshots,c=this.currentImage,d;if(c)if(a)for(d=this.index-1;0<=d;d--){if(a=b[d],!c.equalsContent(a))return a.index=
d,a}else for(d=this.index+1;d<b.length;d++)if(a=b[d],!c.equalsContent(a))return a.index=d,a;return null},redoable:function(){return this.enabled&&this.hasRedo},undoable:function(){return this.enabled&&this.hasUndo},undo:function(){if(this.undoable()){this.save(!0);var a=this.getNextImage(!0);if(a)return this.restoreImage(a),!0}return!1},redo:function(){if(this.redoable()&&(this.save(!0),this.redoable())){var a=this.getNextImage(!1);if(a)return this.restoreImage(a),!0}return!1},update:function(a){if(!this.locked){a||
(a=new f(this.editor));for(var b=this.index,c=this.snapshots;0<b&&this.currentImage.equalsContent(c[b-1]);)b-=1;c.splice(b,this.index-b+1,a);this.index=b;this.currentImage=a}},updateSelection:function(a){if(!this.snapshots.length)return!1;var b=this.snapshots,c=b[b.length-1];return c.equalsContent(a)&&!c.equalsSelection(a)?(this.currentImage=b[b.length-1]=a,!0):!1},lock:function(a,b){if(this.locked)this.locked.level++;else if(a)this.locked={level:1};else{var c=null;if(b)c=!0;else{var d=new f(this.editor,
!0);this.currentImage&&this.currentImage.equalsContent(d)&&(c=d)}this.locked={update:c,level:1}}},unlock:function(){if(this.locked&&!--this.locked.level){var a=this.locked.update;this.locked=null;if(!0===a)this.update();else if(a){var b=new f(this.editor,!0);a.equalsContent(b)||this.update()}}}};e.navigationKeyCodes={37:1,38:1,39:1,40:1,36:1,35:1,33:1,34:1};e.keyGroups={PRINTABLE:0,FUNCTIONAL:1};e.isNavigationKey=function(a){return!!e.navigationKeyCodes[a]};e.getKeyGroup=function(a){var b=e.keyGroups;
return l[a]?b.FUNCTIONAL:b.PRINTABLE};e.getOppositeKeyGroup=function(a){var b=e.keyGroups;return a==b.FUNCTIONAL?b.PRINTABLE:b.FUNCTIONAL};e.ieFunctionalKeysBug=function(a){return CKEDITOR.env.ie&&e.getKeyGroup(a)==e.keyGroups.FUNCTIONAL};var f=CKEDITOR.plugins.undo.Image=function(a,b){this.editor=a;a.fire("beforeUndoImage");var c=a.getSnapshot();CKEDITOR.env.ie&&c&&(c=c.replace(/\s+data-cke-expando=".*?"/g,""));this.contents=c;b||(this.bookmarks=(c=c&&a.getSelection())&&c.createBookmarks2(!0));a.fire("afterUndoImage")},
h=/\b(?:href|src|name)="[^"]*?"/gi;f.prototype={equalsContent:function(a){var b=this.contents,a=a.contents;if(CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks))b=b.replace(h,""),a=a.replace(h,"");return b!=a?!1:!0},equalsSelection:function(a){var b=this.bookmarks,a=a.bookmarks;if(b||a){if(!b||!a||b.length!=a.length)return!1;for(var c=0;c<b.length;c++){var d=b[c],e=a[c];if(d.startOffset!=e.startOffset||d.endOffset!=e.endOffset||!CKEDITOR.tools.arrayCompare(d.start,e.start)||!CKEDITOR.tools.arrayCompare(d.end,
e.end))return!1}}return!0}};var i=CKEDITOR.plugins.undo.NativeEditingHandler=function(a){this.undoManager=a;this.ignoreInputEvent=!1;this.keyEventsStack=new k;this.lastKeydownImage=null};i.prototype={onKeydown:function(a){var b=a.data.getKey();if(229!==b)if(-1<CKEDITOR.tools.indexOf(g,a.data.getKeystroke()))a.data.preventDefault();else if(this.keyEventsStack.cleanUp(a),a=this.undoManager,this.keyEventsStack.getLast(b)||this.keyEventsStack.push(b),this.lastKeydownImage=new f(a.editor),e.isNavigationKey(b)||
this.undoManager.keyGroupChanged(b))if(a.strokesRecorded[0]||a.strokesRecorded[1])a.save(!1,this.lastKeydownImage,!1),a.resetType()},onInput:function(){if(this.ignoreInputEvent)this.ignoreInputEvent=!1;else{var a=this.keyEventsStack.getLast();a||(a=this.keyEventsStack.push(0));this.keyEventsStack.increment(a.keyCode);this.keyEventsStack.getTotalInputs()>=this.undoManager.strokesLimit&&(this.undoManager.type(a.keyCode,!0),this.keyEventsStack.resetInputs())}},onKeyup:function(a){var b=this.undoManager,
a=a.data.getKey(),c=this.keyEventsStack.getTotalInputs();this.keyEventsStack.remove(a);if(!e.ieFunctionalKeysBug(a)||!this.lastKeydownImage||!this.lastKeydownImage.equalsContent(new f(b.editor,!0)))if(0<c)b.type(a);else if(e.isNavigationKey(a))this.onNavigationKey(!0)},onNavigationKey:function(a){var b=this.undoManager;(a||!b.save(!0,null,!1))&&b.updateSelection(new f(b.editor));b.resetType()},ignoreInputEventListener:function(){this.ignoreInputEvent=!0},attachListeners:function(){var a=this.undoManager.editor,
b=a.editable(),c=this;b.attachListener(b,"keydown",function(a){c.onKeydown(a);if(e.ieFunctionalKeysBug(a.data.getKey()))c.onInput()},null,null,999);b.attachListener(b,CKEDITOR.env.ie?"keypress":"input",c.onInput,c,null,999);b.attachListener(b,"keyup",c.onKeyup,c,null,999);b.attachListener(b,"paste",c.ignoreInputEventListener,c,null,999);b.attachListener(b,"drop",c.ignoreInputEventListener,c,null,999);b.attachListener(b.isInline()?b:a.document.getDocumentElement(),"click",function(){c.onNavigationKey()},
null,null,999);b.attachListener(this.undoManager.editor,"blur",function(){c.keyEventsStack.remove(9)},null,null,999)}};var k=CKEDITOR.plugins.undo.KeyEventsStack=function(){this.stack=[]};k.prototype={push:function(a){return this.stack[this.stack.push({keyCode:a,inputs:0})-1]},getLastIndex:function(a){if("number"!=typeof a)return this.stack.length-1;for(var b=this.stack.length;b--;)if(this.stack[b].keyCode==a)return b;return-1},getLast:function(a){a=this.getLastIndex(a);return-1!=a?this.stack[a]:
null},increment:function(a){this.getLast(a).inputs++},remove:function(a){a=this.getLastIndex(a);-1!=a&&this.stack.splice(a,1)},resetInputs:function(a){if("number"==typeof a)this.getLast(a).inputs=0;else for(a=this.stack.length;a--;)this.stack[a].inputs=0},getTotalInputs:function(){for(var a=this.stack.length,b=0;a--;)b+=this.stack[a].inputs;return b},cleanUp:function(a){a=a.data.$;!a.ctrlKey&&!a.metaKey&&this.remove(17);a.shiftKey||this.remove(16);a.altKey||this.remove(18)}}})();(function(){function i(c){return{editorFocus:!1,canUndo:!1,modes:{wysiwyg:1},exec:function(d){if(d.editable().hasFocus){var e=d.getSelection(),b;if(b=(new CKEDITOR.dom.elementPath(e.getCommonAncestor(),e.root)).contains({td:1,th:1},1)){var e=d.createRange(),a=CKEDITOR.tools.tryThese(function(){var a=b.getParent().$.cells[b.$.cellIndex+(c?-1:1)];a.parentNode.parentNode;return a},function(){var a=b.getParent(),a=a.getAscendant("table").$.rows[a.$.rowIndex+(c?-1:1)];return a.cells[c?a.cells.length-1:
0]});if(!a&&!c){for(var f=b.getAscendant("table").$,a=b.getParent().$.cells,f=new CKEDITOR.dom.element(f.insertRow(-1),d.document),g=0,h=a.length;g<h;g++)f.append((new CKEDITOR.dom.element(a[g],d.document)).clone(!1,!1)).appendBogus();e.moveToElementEditStart(f)}else if(a)a=new CKEDITOR.dom.element(a),e.moveToElementEditStart(a),(!e.checkStartOfBlock()||!e.checkEndOfBlock())&&e.selectNodeContents(a);else return!0;e.select(!0);return!0}}return!1}}}var h={editorFocus:!1,modes:{wysiwyg:1,source:1}},
g={exec:function(c){c.container.focusNext(!0,c.tabIndex)}},f={exec:function(c){c.container.focusPrevious(!0,c.tabIndex)}};CKEDITOR.plugins.add("tab",{init:function(c){for(var d=!1!==c.config.enableTabKeyTools,e=c.config.tabSpaces||0,b="";e--;)b+=" ";if(b)c.on("key",function(a){9==a.data.keyCode&&(c.insertText(b),a.cancel())});if(d)c.on("key",function(a){(9==a.data.keyCode&&c.execCommand("selectNextCell")||a.data.keyCode==CKEDITOR.SHIFT+9&&c.execCommand("selectPreviousCell"))&&a.cancel()});c.addCommand("blur",
CKEDITOR.tools.extend(g,h));c.addCommand("blurBack",CKEDITOR.tools.extend(f,h));c.addCommand("selectNextCell",i());c.addCommand("selectPreviousCell",i(!0))}})})();
CKEDITOR.dom.element.prototype.focusNext=function(i,h){var g=void 0===h?this.getTabIndex():h,f,c,d,e,b,a;if(0>=g)for(b=this.getNextSourceNode(i,CKEDITOR.NODE_ELEMENT);b;){if(b.isVisible()&&0===b.getTabIndex()){d=b;break}b=b.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT)}else for(b=this.getDocument().getBody().getFirst();b=b.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT);){if(!f)if(!c&&b.equals(this)){if(c=!0,i){if(!(b=b.getNextSourceNode(!0,CKEDITOR.NODE_ELEMENT)))break;f=1}}else c&&!this.contains(b)&&
(f=1);if(b.isVisible()&&!(0>(a=b.getTabIndex()))){if(f&&a==g){d=b;break}a>g&&(!d||!e||a<e)?(d=b,e=a):!d&&0===a&&(d=b,e=a)}}d&&d.focus()};
CKEDITOR.dom.element.prototype.focusPrevious=function(i,h){for(var g=void 0===h?this.getTabIndex():h,f,c,d,e=0,b,a=this.getDocument().getBody().getLast();a=a.getPreviousSourceNode(!1,CKEDITOR.NODE_ELEMENT);){if(!f)if(!c&&a.equals(this)){if(c=!0,i){if(!(a=a.getPreviousSourceNode(!0,CKEDITOR.NODE_ELEMENT)))break;f=1}}else c&&!this.contains(a)&&(f=1);if(a.isVisible()&&!(0>(b=a.getTabIndex())))if(0>=g){if(f&&0===b){d=a;break}b>e&&(d=a,e=b)}else{if(f&&b==g){d=a;break}if(b<g&&(!d||b>e))d=a,e=b}}d&&d.focus()};CKEDITOR.config.plugins='basicstyles,blockquote,dialogui,dialog,clipboard,enterkey,horizontalrule,indent,indentlist,list,pastefromword,removeformat,undo,tab';CKEDITOR.config.skin='moono';(function() {var setIcons = function(icons, strip) {var path = CKEDITOR.getUrl( 'plugins/' + strip );icons = icons.split( ',' );for ( var i = 0; i < icons.length; i++ )CKEDITOR.skin.icons[ icons[ i ] ] = { path: path, offset: -icons[ ++i ], bgsize : icons[ ++i ] };};if (CKEDITOR.env.hidpi) setIcons('bold,0,,italic,24,,strike,48,,subscript,72,,superscript,96,,underline,120,,blockquote,144,,copy-rtl,168,,copy,192,,cut-rtl,216,,cut,240,,paste-rtl,264,,paste,288,,horizontalrule,312,,indent-rtl,336,,indent,360,,outdent-rtl,384,,outdent,408,,bulletedlist-rtl,432,,bulletedlist,456,,numberedlist-rtl,480,,numberedlist,504,,pastefromword-rtl,528,,pastefromword,552,,removeformat,576,,redo-rtl,600,,redo,624,,undo-rtl,648,,undo,672,','icons_hidpi.png');else setIcons('bold,0,auto,italic,24,auto,strike,48,auto,subscript,72,auto,superscript,96,auto,underline,120,auto,blockquote,144,auto,copy-rtl,168,auto,copy,192,auto,cut-rtl,216,auto,cut,240,auto,paste-rtl,264,auto,paste,288,auto,horizontalrule,312,auto,indent-rtl,336,auto,indent,360,auto,outdent-rtl,384,auto,outdent,408,auto,bulletedlist-rtl,432,auto,bulletedlist,456,auto,numberedlist-rtl,480,auto,numberedlist,504,auto,pastefromword-rtl,528,auto,pastefromword,552,auto,removeformat,576,auto,redo-rtl,600,auto,redo,624,auto,undo-rtl,648,auto,undo,672,auto','icons.png');})();CKEDITOR.lang.languages={"af":1,"ar":1,"bg":1,"bn":1,"bs":1,"ca":1,"cs":1,"cy":1,"da":1,"de":1,"el":1,"en":1,"en-au":1,"en-ca":1,"en-gb":1,"eo":1,"es":1,"et":1,"eu":1,"fa":1,"fi":1,"fo":1,"fr":1,"fr-ca":1,"gl":1,"gu":1,"he":1,"hi":1,"hr":1,"hu":1,"id":1,"is":1,"it":1,"ja":1,"ka":1,"km":1,"ko":1,"ku":1,"lt":1,"lv":1,"mk":1,"mn":1,"ms":1,"nb":1,"nl":1,"no":1,"pl":1,"pt":1,"pt-br":1,"ro":1,"ru":1,"si":1,"sk":1,"sl":1,"sq":1,"sr":1,"sr-latn":1,"sv":1,"th":1,"tr":1,"tt":1,"ug":1,"uk":1,"vi":1,"zh":1,"zh-cn":1};}());
/**
 * AlloyEditor v0.3.6.
 *
 * Copyright 2014-2015, Liferay, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the GNU LGPL-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

CKEDITOR.disableAutoInline = true;

(function() {
    if (window.AlloyEditor) {
        return;
    }

    'use strict';

(function () {
    'use strict';

    /**
     * CKEDITOR.tools class utility which adds additional methods to those of CKEditor.
     *
     * @class CKEDITOR.tools
     */

    /**
     * Debounce util function. If a function execution is expensive, it might be debounced. This means
     * that it will be executed after some amount of time after its last call. For example, if we attach a
     * a function on scroll event, it might be called hundreds times per second. In this case it may be
     * debounced with, let's say 100ms. The real execution of this function will happen 100ms after last
     * scroll event.
     *
     * @static
     * @method debounce
     * @param {Function} callback The callback which has to be called after given timeout.
     * @param {Number} timeout Timeout in milliseconds after which the callback will be called.
     * @param {Object} context The context in which the callback will be called. This argument is optional.
     * @param {Array} args An array of arguments which the callback will receive.
     */
    CKEDITOR.tools.debounce = CKEDITOR.tools.debounce || function (callback, timeout, context, args) {
        var debounceHandle;

        var callFn = function callFn() {
            var callContext = context || this;

            clearTimeout(debounceHandle);

            var result = [];

            for (var len = arguments.length, startIndex = 0; startIndex < len; ++startIndex) {
                result.push(arguments[startIndex]);
            }

            var callArgs = result.concat(args || []);

            debounceHandle = setTimeout(function () {
                callback.apply(callContext, callArgs);
            }, timeout);
        };

        callFn.detach = function () {
            clearTimeout(debounceHandle);
        };

        return callFn;
    };
})();
'use strict';

(function () {
    'use strict';

    var REGEX_URI_SCHEME = /^(?:[a-z][a-z0-9+\-.]*)\:|^\//i;

    /**
     * Link class utility. Provides methods for create, delete and update links.
     *
     * @class CKEDITOR.Link
     * @constructor
     * @param {Object} editor The CKEditor instance.
     */

    function Link(editor) {
        this._editor = editor;
    }

    Link.prototype = {
        constructor: Link,

        /**
         * Create a link with given URI as href.
         *
         * @method create
         * @param {String} URI The URI of the link.
         * @param {Object} attrs A config object with link attributes. These might be arbitrary DOM attributes.
         */
        create: function create(URI, attrs) {
            var selection = this._editor.getSelection();

            var range = selection.getRanges()[0];

            if (range.collapsed) {
                var text = new CKEDITOR.dom.text(URI, this._editor.document);
                range.insertNode(text);
                range.selectNodeContents(text);
            }

            URI = this._getCompleteURI(URI);

            var linkAttrs = CKEDITOR.tools.merge({
                'data-cke-saved-href': URI,
                href: URI
            }, attrs);

            var style = new CKEDITOR.style({
                attributes: linkAttrs,
                element: 'a'
            });

            style.type = CKEDITOR.STYLE_INLINE;
            style.applyToRange(range, this._editor);
            range.select();
        },

        /**
         * Retrieves a link from the current selection.
         *
         * @method getFromSelection
         * @return {CKEDITOR.dom.element} The retrieved link or null if not found.
         */
        getFromSelection: function getFromSelection() {
            var selection = this._editor.getSelection();

            var selectedElement = selection.getSelectedElement();

            if (selectedElement && selectedElement.is('a')) {
                return selectedElement;
            }

            var range = selection.getRanges()[0];

            if (range) {
                range.shrink(CKEDITOR.SHRINK_TEXT);

                return this._editor.elementPath(range.getCommonAncestor()).contains('a', 1);
            }

            return null;
        },

        /**
         * Removes a link from the editor.
         *
         * @param {CKEDITOR.dom.element} link The link element which link style should be removed.
         * @method remove
         */
        remove: function remove(link) {
            var editor = this._editor;

            if (link) {
                link.remove(editor);
            } else {
                var style = link || new CKEDITOR.style({
                    alwaysRemoveElement: 1,
                    element: 'a',
                    type: CKEDITOR.STYLE_INLINE
                });

                // 'removeStyle()' removes the style from the editor's current selection.
                //  We need to force the selection to be the whole link element
                //  to remove it properly.

                var selection = editor.getSelection();
                selection.selectElement(selection.getStartElement());

                editor.removeStyle(style);
            }
        },

        /**
         * Updates the href of an already existing link.
         *
         * @method update
         * @param {String} URI The new URI of the link.
         * @param {CKEDITOR.dom.element} link The link element which href should be removed.
         */
        update: function update(URI, link) {
            var style = link || this.getFromSelection();

            style.setAttributes({
                'data-cke-saved-href': URI,
                href: URI
            });
        },

        /**
         * Checks if the URI has a scheme. If not, the default 'http' scheme with
         * hierarchical path '//' is added to it.
         *
         * @protected
         * @method _getCompleteURI
         * @param {String} URI The URI of the link.
         * @return {String} The URI updated with the protocol.
         */
        _getCompleteURI: function _getCompleteURI(URI) {
            if (!REGEX_URI_SCHEME.test(URI)) {
                URI = 'http://' + URI;
            }

            return URI;
        }
    };

    CKEDITOR.Link = CKEDITOR.Link || Link;
})();
'use strict';

(function () {
    'use strict';

    if (CKEDITOR.plugins.get('selectionregion')) {
        return;
    }

    CKEDITOR.SELECTION_TOP_TO_BOTTOM = 0;
    CKEDITOR.SELECTION_BOTTOM_TO_TOP = 1;
    CKEDITOR.SELECTION_LEFT_TO_RIGHT = 2;
    CKEDITOR.SELECTION_RIGHT_TO_LEFT = 3;

    /**
     * SelectionRegion utility class which provides metadata about the selection. The metadata may be the start and end
     * rectangles, caret region, etc. **This class is not intended to be used standalone. Its functions will
     * be merged into each editor instance, so the developer may use them directly via the editor, without making
     * an instance of this class**.
     *
     * @class CKEDITOR.plugins.selectionregion
     * @constructor
     */
    function SelectionRegion() {}

    SelectionRegion.prototype = {
        constructor: SelectionRegion,

        /**
         * Creates selection from two points in page coordinates.
         *
         * @method createSelectionFromPoint
         * @param {Number} x X point in page coordinates.
         * @param {Number} y Y point in page coordinates.
         */
        createSelectionFromPoint: function createSelectionFromPoint(x, y) {
            this.createSelectionFromRange(x, y, x, y);
        },

        /**
         * Creates selection from range. A range consists from two points in page coordinates.
         *
         * @method createSelectionFromRange
         * @param {Number} startX X coordinate of the first point.
         * @param {Number} startY Y coordinate of the first point.
         * @param {Number} endX X coordinate of the second point.
         * @param {Number} endY Y coordinate of the second point.
         */
        createSelectionFromRange: function createSelectionFromRange(startX, startY, endX, endY) {
            var end;
            var endContainer;
            var endOffset;
            var range;
            var start;
            var startContainer;
            var startOffset;

            if (typeof document.caretPositionFromPoint === 'function') {
                start = document.caretPositionFromPoint(startX, startY);
                end = document.caretPositionFromPoint(endX, endY);

                startContainer = start.offsetNode;
                endContainer = end.offsetNode;

                startOffset = start.offset;
                endOffset = end.offset;

                range = this.createRange();
            } else if (typeof document.caretRangeFromPoint === 'function') {
                start = document.caretRangeFromPoint(startX, startY);
                end = document.caretRangeFromPoint(endX, endY);

                startContainer = start.startContainer;
                endContainer = end.startContainer;

                startOffset = start.startOffset;
                endOffset = end.startOffset;

                range = this.createRange();
            }

            if (range && document.getSelection) {
                range.setStart(new CKEDITOR.dom.node(startContainer), startOffset);
                range.setEnd(new CKEDITOR.dom.node(endContainer), endOffset);

                this.getSelection().selectRanges([range]);
            } else if (typeof document.body.createTextRange === 'function') {
                var selection = this.getSelection();

                selection.unlock();

                range = document.body.createTextRange();
                range.moveToPoint(startX, startY);

                var endRange = range.duplicate();
                endRange.moveToPoint(endX, endY);

                range.setEndPoint('EndToEnd', endRange);
                range.select();

                this.getSelection().lock();
            }
        },

        /**
         * Returns the region of the current position of the caret. The points are in page coordinates.
         *
         * @method getCaretRegion
         * @return {Object} Returns object with the following properties:
         * - bottom
         * - left
         * - right
         * - top
         */
        getCaretRegion: function getCaretRegion() {
            var selection = this.getSelection();

            var bookmarks = selection.createBookmarks();
            var bookmarkNodeEl = bookmarks[0].startNode.$;

            bookmarkNodeEl.style.display = 'inline-block';

            var region = new CKEDITOR.dom.element(bookmarkNodeEl).getClientRect();

            bookmarkNodeEl.parentNode.removeChild(bookmarkNodeEl);

            var scrollPos = new CKEDITOR.dom.window(window).getScrollPosition();

            return {
                bottom: scrollPos.y + region.bottom,
                left: scrollPos.x + region.left,
                right: scrollPos.x + region.right,
                top: scrollPos.y + region.top
            };
        },

        /**
         * Returns data for the current selection.
         *
         * @method getSelectionData
         * @return {Object} Returns object with the following data:
         * - element - The currently selected element, if any
         * - text - The selected text
         * - region - The data, returned from {{#crossLink "CKEDITOR.plugins.selectionregion/getSelectionRegion:method"}}{{/crossLink}}
         */
        getSelectionData: function getSelectionData() {
            var selection = this.getSelection();

            var result = {
                element: selection.getSelectedElement(),
                text: selection.getSelectedText()
            };

            result.region = this.getSelectionRegion(selection);

            return result;
        },

        /**
         * Returns the region of the current selection.
         *
         * @method getSelectionRegion
         * @return {Object} Returns object which is being returned from
         * {{#crossLink "CKEDITOR.plugins.selectionregion/getClientRectsRegion:method"}}{{/crossLink}} with three more properties:
         * - direction - the direction of the selection. Can be one of these:
         *   1. CKEDITOR.SELECTION_TOP_TO_BOTTOM
         *   2. CKEDITOR.SELECTION_BOTTOM_TO_TOP
         * - height - The height of the selection region
         * - width - The width of the selection region
         */
        getSelectionRegion: function getSelectionRegion() {
            var region = this.getClientRectsRegion();

            region.direction = this.getSelectionDirection();

            region.height = region.bottom - region.top;
            region.width = region.right - region.left;

            return region;
        },

        /**
         * Returns true if the current selection is empty, false otherwise.
         *
         * @method isSelectionEmpty
         * @return {Boolean} Returns true if the current selection is empty, false otherwise.
         */
        isSelectionEmpty: function isSelectionEmpty() {
            var ranges;

            var selection = this.getSelection();

            return selection.getType() === CKEDITOR.SELECTION_NONE || (ranges = selection.getRanges()) && ranges.length === 1 && ranges[0].collapsed;
        },

        /**
         * Returns object with data about the [client rectangles](https://developer.mozilla.org/en-US/docs/Web/API/Element.getClientRects) of the selection,
         * normalized across browses. All offsets below are in page coordinates.
         *
         * @method getClientRectsRegion
         * @return {Object} Returns object with the following data:
         * - bottom - bottom offset of all client rectangles
         * - left - left offset of all client rectangles
         * - right - right offset of all client rectangles
         * - top - top offset of all client rectangles
         * - startRect - An Object, which contains the following information:
         *     + bottom - bottom offset
         *     + height - the height of the rectangle
         *     + left - left offset of the selection
         *     + right - right offset of the selection
         *     + top - top offset of the selection
         *     + width - the width of the rectangle
         * - endRect - An Object, which contains the following information:
         *     + bottom - bottom offset
         *     + height - the height of the rectangle
         *     + left - left offset of the selection
         *     + right - right offset of the selection
         *     + top - top offset of the selection
         *     + width - the width of the rectangle
         */
        getClientRectsRegion: function getClientRectsRegion() {
            var selection = this.getSelection();
            var nativeSelection = selection.getNative();

            var rangeCount;
            var clientRects;

            if (nativeSelection.createRange) {
                var range = nativeSelection.createRange();
                clientRects = range.getClientRects();
            } else {
                rangeCount = nativeSelection.rangeCount;
                clientRects = nativeSelection.rangeCount > 0 ? nativeSelection.getRangeAt(0).getClientRects() : [];
            }

            var bottom = 0;
            var left = Infinity;
            var right = -Infinity;
            var top = Infinity;

            var region;

            if (clientRects.length === 0) {
                region = this.getCaretRegion();
            } else {
                for (var i = 0, length = clientRects.length; i < length; i++) {
                    var item = clientRects[i];

                    if (item.left < left) {
                        left = item.left;
                    }

                    if (item.right > right) {
                        right = item.right;
                    }

                    if (item.top < top) {
                        top = item.top;
                    }

                    if (item.bottom > bottom) {
                        bottom = item.bottom;
                    }
                }

                var scrollPos = new CKEDITOR.dom.window(window).getScrollPosition();

                region = {
                    bottom: scrollPos.y + bottom,
                    left: scrollPos.x + left,
                    right: scrollPos.x + right,
                    top: scrollPos.y + top
                };

                if (clientRects.length) {
                    var endRect = clientRects[clientRects.length - 1];
                    var startRect = clientRects[0];

                    region.endRect = {
                        bottom: scrollPos.y + endRect.bottom,
                        height: endRect.height,
                        left: scrollPos.x + endRect.left,
                        right: scrollPos.x + endRect.right,
                        top: scrollPos.y + endRect.top,
                        width: endRect.width
                    };

                    region.startRect = {
                        bottom: scrollPos.y + startRect.bottom,
                        height: startRect.height,
                        left: scrollPos.x + startRect.left,
                        right: scrollPos.x + startRect.right,
                        top: scrollPos.y + startRect.top,
                        width: startRect.width
                    };
                }
            }

            return region;
        },

        /**
         * Retrieves the direction of the selection. The direction is from top to bottom or from bottom to top.
         * For IE < 9 it is not possible, so the direction for these browsers will be always CKEDITOR.SELECTION_TOP_TO_BOTTOM.
         *
         * @method getSelectionDirection
         * @return {Number} Returns a number which represents selection direction. It might be one of these:
         * - CKEDITOR.SELECTION_TOP_TO_BOTTOM;
         * - CKEDITOR.SELECTION_BOTTOM_TO_TOP;
         */
        getSelectionDirection: function getSelectionDirection() {
            var selection = this.getSelection();
            var nativeSelection = selection.getNative();

            var direction = CKEDITOR.SELECTION_TOP_TO_BOTTOM;

            var anchorNode;

            if ((anchorNode = nativeSelection.anchorNode) && anchorNode.compareDocumentPosition) {
                var position = anchorNode.compareDocumentPosition(nativeSelection.focusNode);

                if (!position && nativeSelection.anchorOffset > nativeSelection.focusOffset || position === Node.DOCUMENT_POSITION_PRECEDING) {
                    direction = CKEDITOR.SELECTION_BOTTOM_TO_TOP;
                }
            }

            return direction;
        }
    };

    CKEDITOR.plugins.add('selectionregion', {
        /**
         * Initializer lifecycle implementation for the SelectionRegion plugin.
         *
         * @method init
         * @protected
         * @param {Object} editor The current CKEditor instance.
         */
        init: function init(editor) {
            var attr, hasOwnProperty;

            hasOwnProperty = Object.prototype.hasOwnProperty;

            for (attr in SelectionRegion.prototype) {
                if (hasOwnProperty.call(SelectionRegion.prototype, attr) && typeof editor[attr] === 'undefined') {
                    editor[attr] = SelectionRegion.prototype[attr];
                }
            }
        }
    });
})();
'use strict';

(function () {
    'use strict';

    /**
     * Table class utility. Provides methods for create, delete and update tables.
     *
     * @class CKEDITOR.Table
     * @constructor
     * @param {Object} editor The CKEditor instance.
     */

    function Table(editor) {
        this._editor = editor;
    }

    Table.HEADING_BOTH = 'Both';
    Table.HEADING_COL = 'Column';
    Table.HEADING_NONE = 'None';
    Table.HEADING_ROW = 'Row';

    Table.prototype = {
        constructor: Table,

        /**
         * Creates a table.
         *
         * @method create
         * @param {Object} config Table configuration object
         * @return {Object} The created table
         */
        create: function create(config) {
            var editor = this._editor;
            var table = this._createElement('table');

            config = config || {};

            // Generate the rows and cols.
            var tbody = table.append(this._createElement('tbody'));
            var rows = config.rows || 1;
            var cols = config.cols || 1;

            for (var i = 0; i < rows; i++) {
                var row = tbody.append(this._createElement('tr'));
                for (var j = 0; j < cols; j++) {
                    var cell = row.append(this._createElement('td'));

                    cell.appendBogus();
                }
            }

            this.setAttributes(table, config.attrs);
            this.setHeading(table, config.heading);

            // Insert the table element if we're creating one.
            editor.insertElement(table);

            var firstCell = new CKEDITOR.dom.element(table.$.rows[0].cells[0]);
            var range = editor.createRange();
            range.moveToPosition(firstCell, CKEDITOR.POSITION_AFTER_START);
            range.select();

            return table;
        },

        /**
         * Retrieves a table from the current selection.
         *
         * @method getFromSelection
         * @return {CKEDITOR.dom.element} The retrieved table or null if not found.
         */
        getFromSelection: function getFromSelection() {
            var table;
            var selection = this._editor.getSelection();
            var selected = selection.getSelectedElement();

            if (selected && selected.is('table')) {
                table = selected;
            } else {
                var ranges = selection.getRanges();

                if (ranges.length > 0) {
                    // Webkit could report the following range on cell selection (#4948):
                    // <table><tr><td>[&nbsp;</td></tr></table>]

                    /* istanbul ignore else */
                    if (CKEDITOR.env.webkit) {
                        ranges[0].shrink(CKEDITOR.NODE_ELEMENT);
                    }

                    table = this._editor.elementPath(ranges[0].getCommonAncestor(true)).contains('table', 1);
                }
            }

            return table;
        },

        /**
         * Returns which heading style is set for the given table.
         *
         * @method getHeading
         * @param {CKEDITOR.dom.element} table The table to gather the heading from. If null, it will be retrieved from the current selection.
         * @return {String} The heading of the table. Expected values are `CKEDITOR.Table.NONE`, `CKEDITOR.Table.ROW`, `CKEDITOR.Table.COL` and `CKEDITOR.Table.BOTH`.
         */
        getHeading: function getHeading(table) {
            table = table || this.getFromSelection();

            if (!table) {
                return null;
            }

            var rowHeadingSettings = table.$.tHead !== null;

            var colHeadingSettings = true;

            // Check if all of the first cells in every row are TH
            for (var row = 0; row < table.$.rows.length; row++) {
                // If just one cell isn't a TH then it isn't a header column
                var cell = table.$.rows[row].cells[0];

                if (cell && cell.nodeName.toLowerCase() !== 'th') {
                    colHeadingSettings = false;
                    break;
                }
            }

            var headingSettings = Table.HEADING_NONE;

            if (rowHeadingSettings) {
                headingSettings = Table.HEADING_ROW;
            }

            if (colHeadingSettings) {
                headingSettings = headingSettings === Table.HEADING_ROW ? Table.HEADING_BOTH : Table.HEADING_COL;
            }

            return headingSettings;
        },

        /**
         * Removes a table from the editor.
         *
         * @method remove
         * @param {CKEDITOR.dom.element} table The table element which table style should be removed.
         */
        remove: function remove(table) {
            var editor = this._editor;

            if (table) {
                table.remove();
            } else {
                table = editor.elementPath().contains('table', 1);

                if (table) {
                    // If the table's parent has only one child remove it as well (unless it's a table cell, or the editable element) (#5416, #6289, #12110)
                    var parent = table.getParent();
                    var editable = editor.editable();

                    if (parent.getChildCount() === 1 && !parent.is('td', 'th') && !parent.equals(editable)) {
                        table = parent;
                    }

                    var range = editor.createRange();
                    range.moveToPosition(table, CKEDITOR.POSITION_BEFORE_START);
                    table.remove();
                    range.select();
                }
            }
        },

        /**
         * Assigns provided attributes to a table.
         *
         * @method setAttributes
         * @param {Object} table The table to which the attributes should be assigned
         * @param {Object} attrs The attributes which have to be assigned to the table
         */
        setAttributes: function setAttributes(table, attrs) {
            if (attrs) {
                Object.keys(attrs).forEach(function (attr) {
                    table.setAttribute(attr, attrs[attr]);
                });
            }
        },

        /**
         * Sets the appropriate table heading style to a table.
         *
         * @method setHeading
         * @param {CKEDITOR.dom.element} table The table element to which the heading should be set. If null, it will be retrieved from the current selection.
         * @param {String} heading The table heading to be set. Accepted values are: `CKEDITOR.Table.NONE`, `CKEDITOR.Table.ROW`, `CKEDITOR.Table.COL` and `CKEDITOR.Table.BOTH`.
         */
        setHeading: function setHeading(table, heading) {
            table = table || this.getFromSelection();

            var i, newCell;
            var tableHead;
            var tableBody = table.getElementsByTag('tbody').getItem(0);

            var tableHeading = this.getHeading(table);
            var hadColHeading = tableHeading === Table.HEADING_COL || tableHeading === Table.HEADING_BOTH;

            var needColHeading = heading === Table.HEADING_COL || heading === Table.HEADING_BOTH;
            var needRowHeading = heading === Table.HEADING_ROW || heading === Table.HEADING_BOTH;

            // If we need row heading and don't have a <thead> element yet, move the
            // first row of the table to the head and convert the nodes to <th> ones.
            if (!table.$.tHead && needRowHeading) {
                var tableFirstRow = tableBody.getElementsByTag('tr').getItem(0);
                var tableFirstRowChildCount = tableFirstRow.getChildCount();

                // Change TD to TH:
                for (i = 0; i < tableFirstRowChildCount; i++) {
                    var cell = tableFirstRow.getChild(i);

                    // Skip bookmark nodes. (#6155)
                    if (cell.type === CKEDITOR.NODE_ELEMENT && !cell.data('cke-bookmark')) {
                        cell.renameNode('th');
                        cell.setAttribute('scope', 'col');
                    }
                }

                tableHead = this._createElement(table.$.createTHead());
                tableHead.append(tableFirstRow.remove());
            }

            // If we don't need row heading and we have a <thead> element, move the
            // row out of there and into the <tbody> element.
            if (table.$.tHead !== null && !needRowHeading) {
                // Move the row out of the THead and put it in the TBody:
                tableHead = this._createElement(table.$.tHead);

                var previousFirstRow = tableBody.getFirst();

                while (tableHead.getChildCount() > 0) {
                    var newFirstRow = tableHead.getFirst();
                    var newFirstRowChildCount = newFirstRow.getChildCount();

                    for (i = 0; i < newFirstRowChildCount; i++) {
                        newCell = newFirstRow.getChild(i);

                        if (newCell.type === CKEDITOR.NODE_ELEMENT) {
                            newCell.renameNode('td');
                            newCell.removeAttribute('scope');
                        }
                    }

                    newFirstRow.insertBefore(previousFirstRow);
                }

                tableHead.remove();
            }

            tableHeading = this.getHeading(table);
            var hasColHeading = tableHeading === Table.HEADING_COL || tableHeading === Table.HEADING_BOTH;

            // If we need column heading and the table doesn't have it, convert every first cell in
            // every row into a `<th scope="row">` element.
            if (!hasColHeading && needColHeading) {
                for (i = 0; i < table.$.rows.length; i++) {
                    if (table.$.rows[i].cells[0].nodeName.toLowerCase() !== 'th') {
                        newCell = new CKEDITOR.dom.element(table.$.rows[i].cells[0]);
                        newCell.renameNode('th');
                        newCell.setAttribute('scope', 'row');
                    }
                }
            }

            // If we don't need column heading but the table has it, convert every first cell in every
            // row back into a `<td>` element.
            if (hadColHeading && !needColHeading) {
                for (i = 0; i < table.$.rows.length; i++) {
                    var row = new CKEDITOR.dom.element(table.$.rows[i]);

                    if (row.getParent().getName() === 'tbody') {
                        newCell = new CKEDITOR.dom.element(row.$.cells[0]);
                        newCell.renameNode('td');
                        newCell.removeAttribute('scope');
                    }
                }
            }
        },

        /**
         * Creates a new CKEDITOR.dom.element using the passed tag name.
         *
         * @protected
         * @method _createElement
         * @param {String} name The tag name from which an element should be created
         * @return {CKEDITOR.dom.element} Instance of CKEDITOR DOM element class
         */
        _createElement: function _createElement(name) {
            return new CKEDITOR.dom.element(name, this._editor.document);
        }
    };

    CKEDITOR.on('instanceReady', function (event) {
        var headingCommands = [Table.HEADING_NONE, Table.HEADING_ROW, Table.HEADING_COL, Table.HEADING_BOTH];

        var tableUtils = new Table(event.editor);

        headingCommands.forEach(function (heading) {
            event.editor.addCommand('tableHeading' + heading, {
                exec: function exec(editor) {
                    tableUtils.setHeading(null, heading);
                }
            });
        });
    });

    CKEDITOR.Table = CKEDITOR.Table || Table;
})();
'use strict';

(function () {
    'use strict';

    /**
     * CKEDITOR.tools class utility which adds additional methods to those of CKEditor.
     *
     * @class CKEDITOR.tools
     */

    /**
     * Returns a new object containing all of the properties of all the supplied
     * objects. The properties from later objects will overwrite those in earlier
     * objects.
     *
     * Passing in a single object will create a shallow copy of it.
     *
     * @static
     * @method merge
     * @param {Object} objects* One or more objects to merge.
     * @return {Object} A new merged object.
     */
    CKEDITOR.tools.merge = CKEDITOR.tools.merge || function () {
        var result = {};

        for (var i = 0; i < arguments.length; ++i) {
            var obj = arguments[i];

            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    result[key] = obj[key];
                }
            }
        }

        return result;
    };

    /**
     * Simulates event on a DOM element.
     *
     * @static
     * @method simulate
     * @param {DOMElement} element The element on which the event shoud be simualted.
     * @param {String} event The name of the event which have to be simulated.
     */
    CKEDITOR.tools.simulate = function (element, event) {
        var eventInstance = document.createEvent('Events');
        eventInstance.initEvent(event, true, false);
        element.dispatchEvent(eventInstance);
    };
})();
'use strict';

(function () {
    'use strict';

    if (CKEDITOR.plugins.get('uicore')) {
        return;
    }

    /**
     * UICore class which will handle user interactions with the editor. These interactions
     * might be triggered via mouse, keyboard or touch devices. The class fill fire an event via
     * CKEditor's event system - "editorInteraction". The UI may listen to this event and
     * execute some actions - for example to show/hide toolbars.
     *
     * By default if user presses the Esc key, 'editorInteraction' event won't be fired. However, this behaviour can be changed
     * by setting {{#crossLink "CKEDITOR.plugins.uicore/allowEsc:attribute"}}{{/crossLink}} config property in editor's configuration to true.
     *
     * @class CKEDITOR.plugins.uicore
     */

    /**
     * Fired when user interacts somehow with the browser. This may be clicking with the mouse, pressing keyboard button,
     * or touching screen. This even will be not fired after each interaction. It will be debounced. By default the timeout
     * is 50ms. This value can be overwritten via {{#crossLink "CKEDITOR.plugins.uicore/timeout:attribute"}}{{/crossLink}}
     * property of editor's configuration, like: editor.config.uicore.timeout = 100
     *
     * @event editorInteraction
     * @param {Object} data An object which contains the following properties:
     * - nativeEvent - The event as received from CKEditor.
     * - selectionData - The data, returned from {{#crossLink "CKEDITOR.plugins.selectionregion/getSelectionData:method"}}{{/crossLink}}
     */

    /**
     * Fired by UI elements like Toolbars or Buttons when their state changes. The listener updates the live region with the provided data.
     *
     * @event ariaUpdate
     * @param {Object} data An object which contains the following properties:
     * - message - The provided message from the UI element.
     */

    /**
     * If set to true, the editor will still fire {{#crossLink "CKEDITOR.plugins.uicore/editorInteraction:event"}}{{/crossLink}} event,
     * if user presses Esc key.
     *
     * @attribute allowEsc
     * @default false
     * @type Boolean
     */

    /**
     * Specifies the default timeout after which the {{#crossLink "CKEDITOR.plugins.uicore/editorInteraction:event"}}{{/crossLink}} event
     * will be fired.
     *
     * @attribute timeout
     * @default 50 (ms)
     * @type Number
     */

    CKEDITOR.plugins.add('uicore', {
        /**
         * Initializer lifecycle implementation for the UICore plugin.
         *
         * @protected
         * @method init
         * @param {Object} editor The current CKEditor instance.
         */
        init: function init(editor) {
            var ariaState = [];

            var ariaElement = this._createAriaElement(editor.id);

            var uiTasksTimeout = editor.config.uicore ? editor.config.uicore.timeout : 50;

            var handleAria = CKEDITOR.tools.debounce(function (event) {
                ariaElement.innerHTML = ariaState.join('. ');
            }, uiTasksTimeout);

            var handleUI = CKEDITOR.tools.debounce(function (event) {
                ariaState = [];

                if (event.name !== 'keyup' || event.data.$.keyCode !== 27 || editor.config.allowEsc) {
                    editor.fire('editorInteraction', {
                        nativeEvent: event.data.$,
                        selectionData: editor.getSelectionData()
                    });
                }
            }, uiTasksTimeout);

            editor.on('ariaUpdate', function (event) {
                // handleAria is debounced function, so if it is being called multiple times, it will
                // be canceled until some time passes.
                // For that reason here we explicitly append the current message to the list of messages
                // and call handleAria. Since it is debounced, when some timeout passes,
                // all the messages will be applied to the live region and not only the last one.

                ariaState.push(event.data.message);

                handleAria();
            });

            editor.once('contentDom', function () {
                var editable = editor.editable();

                editable.attachListener(editable, 'mouseup', handleUI);
                editable.attachListener(editable, 'keyup', handleUI);
            });

            editor.on('destroy', function (event) {
                ariaElement.parentNode.removeChild(ariaElement);

                handleUI.detach();
            });
        },

        /**
         * Creates and applies an HTML element to the body of the document which will contain ARIA messages.
         *
         * @protected
         * @method _createAriaElement
         * @param {String} id The provided id of the element. It will be used as prefix for the final element Id.
         * @return {HTMLElement} The created and applied to DOM element.
         */
        _createAriaElement: function _createAriaElement(id) {
            var statusElement = document.createElement('div');

            statusElement.className = 'ae-sr-only';

            statusElement.setAttribute('aria-live', 'polite');
            statusElement.setAttribute('role', 'status');
            statusElement.setAttribute('id', id + 'LiveRegion');

            document.body.appendChild(statusElement);

            return statusElement;
        }
    });
})();
'use strict';

(function () {
    'use strict';

    var isIE = CKEDITOR.env.ie;

    if (CKEDITOR.plugins.get('addimages')) {
        return;
    }

    /**
     * CKEditor plugin which allows Drag&Drop of images directly into the editable area. The image will be encoded
     * as Data URI. An event `imageAdd` will be fired with the inserted element into the editable area.
     *
     * @class CKEDITOR.plugins.addimages
     */

    /**
     * Fired when an image is being added to the editor successfully.
     *
     * @event imageAdd
     * @param {CKEDITOR.dom.element} el The created image with src as Data URI
     */

    CKEDITOR.plugins.add('addimages', {
        /**
         * Initialization of the plugin, part of CKEditor plugin lifecycle.
         * The function registers a 'dragenter', 'dragover', 'drop' and `paste` events on the editing area.
         *
         * @method init
         * @param {Object} editor The current editor instance
         */
        init: function init(editor) {
            editor.once('contentDom', (function () {
                var editable = editor.editable();

                editable.attachListener(editable, 'dragenter', this._onDragEnter, this, {
                    editor: editor
                });

                editable.attachListener(editable, 'dragover', this._onDragOver, this, {
                    editor: editor
                });

                editable.attachListener(editable, 'drop', this._onDragDrop, this, {
                    editor: editor
                });

                editable.attachListener(editable, 'paste', this._onPaste, this, {
                    editor: editor
                });
            }).bind(this));
        },

        /**
         * Accepts an array of dropped files to the editor. Then, it filters the images and sends them for further
         * processing to {{#crossLink "CKEDITOR.plugins.addimages/_processFile:method"}}{{/crossLink}}
         *
         * @protected
         * @method _handleFiles
         * @param {Array} files Array of dropped files. Only the images from this list will be processed.
         * @param {Object} editor The current editor instance
         */
        _handleFiles: function _handleFiles(files, editor) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];

                if (file.type.indexOf('image') === 0) {
                    this._processFile(file, editor);
                }
            }

            return false;
        },

        /**
         * Handles drag enter event. In case of IE, this function will prevent the event.
         *
         * @protected
         * @method _onDragEnter
         * @param {DOM event} event dragenter event, as received natively from CKEditor
         */
        _onDragEnter: function _onDragEnter(event) {
            if (isIE) {
                this._preventEvent(event);
            }
        },

        /**
         * Handles drag over event. In case of IE, this function will prevent the event.
         *
         * @protected
         * @method _onDragOver
         * @param {DOM event} event dragover event, as received natively from CKEditor
         */
        _onDragOver: function _onDragOver(event) {
            if (isIE) {
                this._preventEvent(event);
            }
        },

        /**
         * Handles drag drop event. The function will create selection from the current points and
         * will send a list of files to be processed to
         * {{#crossLink "CKEDITOR.plugins.addimages/_handleFiles:method"}}{{/crossLink}}
         *
         * @protected
         * @method _onDragDrop
         * @param {CKEDITOR.dom.event} event dragdrop event, as received natively from CKEditor
         */
        _onDragDrop: function _onDragDrop(event) {
            var nativeEvent = event.data.$;

            new CKEDITOR.dom.event(nativeEvent).preventDefault();

            var editor = event.listenerData.editor;

            event.listenerData.editor.createSelectionFromPoint(nativeEvent.clientX, nativeEvent.clientY);

            this._handleFiles(nativeEvent.dataTransfer.files, editor);
        },

        /**
         * Checks if the pasted data is image and passes it to
         * {{#crossLink "CKEDITOR.plugins.addimages/_processFile:method"}}{{/crossLink}} for processing.
         *
         * @method _onPaste
         * @protected
         * @param {CKEDITOR.dom.event} event A `paste` event, as received natively from CKEditor
         */
        _onPaste: function _onPaste(event) {
            if (event.data.$.clipboardData) {
                var pastedData = event.data.$.clipboardData.items[0];

                if (pastedData.type.indexOf('image') === 0) {
                    var imageFile = pastedData.getAsFile();

                    this._processFile(imageFile, event.listenerData.editor);
                }
            }
        },

        /**
         * Prevents a native event.
         *
         * @protected
         * @method _preventEvent
         * @param {DOM event} event The event to be prevented.
         */
        _preventEvent: function _preventEvent(event) {
            event = new CKEDITOR.dom.event(event.data.$);

            event.preventDefault();
            event.stopPropagation();
        },

        /**
         * Processes an image file. The function creates an img element and sets as source
         * a Data URI, then fires an 'imageAdd' event via CKEditor's event system.
         *
         * @protected
         * @method _preventEvent
         * @param {DOM event} event The event to be prevented.
         */
        _processFile: function _processFile(file, editor) {
            var reader = new FileReader();

            reader.addEventListener('loadend', function () {
                var bin = reader.result;

                var el = CKEDITOR.dom.element.createFromHtml('<img src="' + bin + '">');

                editor.insertElement(el);

                var imageData = {
                    el: el,
                    file: file
                };

                editor.fire('imageAdd', imageData);
            });

            reader.readAsDataURL(file);
        }
    });
})();
'use strict';

(function () {
    'use strict';

    if (CKEDITOR.plugins.get('autolink')) {
        return;
    }

    // Disables the auto URL detection feature in IE, their lacks functionality:
    // They convert the links only on space. We do on space, comma, semicolon and Enter.
    if (/MSIE ([^;]*)|Trident.*; rv:([0-9.]+)/.test(navigator.userAgent)) {
        document.execCommand('AutoUrlDetect', false, false);
    }

    var KEY_BACK = 8;

    var KEY_COMMA = 188;

    var KEY_ENTER = 13;

    var KEY_SEMICOLON = 186;

    var KEY_SPACE = 32;

    var DELIMITERS = [KEY_COMMA, KEY_ENTER, KEY_SEMICOLON, KEY_SPACE];

    var REGEX_LAST_WORD = /[^\s]+/mg;

    var REGEX_URL = /(https?\:\/\/|www\.)(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$/i;

    /**
     * CKEditor plugin which automatically generates links when user types text which looks like URL.
     *
     * @class CKEDITOR.plugins.autolink
     * @constructor
     */
    CKEDITOR.plugins.add('autolink', {

        /**
         * Initialization of the plugin, part of CKEditor plugin lifecycle.
         * The function registers the `keyup` event on the editing area.
         *
         * @method init
         * @param {Object} editor The current editor instance
         */
        init: function init(editor) {
            editor.once('contentDom', (function () {
                var editable = editor.editable();

                editable.attachListener(editable, 'keyup', this._onKeyUp, this, {
                    editor: editor
                });
            }).bind(this));
        },

        /**
         * Retrieves the last word introduced by the user. Reads from the current
         * caret position backwards until it finds the first white space.
         *
         * @protected
         * @method _getLastWord
         * @return {String} The last word introduced by user
         */
        _getLastWord: function _getLastWord(editor) {
            var range = editor.getSelection().getRanges()[0];

            var offset = range.startOffset;

            var previousText = '';

            // The user pressed Enter, so we have to look on the previous node
            if (this._currentKeyCode === KEY_ENTER) {
                var previousNode = range.startContainer.getPrevious();

                var lastChild;

                if (previousNode) {
                    // If previous node is a SPACE, (it does not have 'getLast' method),
                    // ignore it and find the previous text node
                    while (!previousNode.getLast) {
                        previousNode = previousNode.getPrevious();
                    }

                    lastChild = previousNode.getLast();

                    // Depending on the browser, the last child node may be a <BR>
                    // (which does not have 'getText' method),
                    // so ignore it and find the previous text node
                    while (lastChild && !lastChild.getText()) {
                        lastChild = lastChild.getPrevious();
                    }
                }

                // Check if the lastChild is already a link
                if (!(lastChild && lastChild.$.href)) {
                    this._startContainer = lastChild;
                    previousText = lastChild ? lastChild.getText() : '';
                    this._offset = previousText.length;
                }
            } else {
                this._startContainer = range.startContainer;

                // Last character is the delimiter, ignore it
                previousText = this._startContainer.getText().substring(0, offset - 1);

                this._offset = offset - 1;
            }

            var lastWord = '';

            var match = previousText.match(REGEX_LAST_WORD);

            if (match) {
                lastWord = match.pop();
            }

            return lastWord;
        },

        /**
         * Checks if the given link is a valid URL.
         *
         * @protected
         * @method isValidURL
         * @param {String} link The link we want to know if it is a valid URL
         * @return {Boolean} Returns true if the link is a valid URL, false otherwise
         */
        _isValidURL: function _isValidURL(link) {
            return REGEX_URL.test(link);
        },

        /**
         * Listens to the `keydown` event and if the keycode is `Backspace`, removes the previously
         * created link.
         *
         * @protected
         * @method _onKeyDown
         * @param {EventFacade} event EventFacade object
         */
        _onKeyDown: function _onKeyDown(event) {
            var nativeEvent = event.data.$;

            var editor = event.listenerData.editor;

            var editable = editor.editable();

            editable.removeListener('keydown', this._onKeyDown);

            if (nativeEvent.keyCode === KEY_BACK) {
                event.cancel();
                event.data.preventDefault();

                this._removeLink(editor);
            }

            this._ckLink = null;
        },

        /**
         * Listens to the `Enter` and `Space` key events in order to check if the last word
         * introduced by the user should be replaced by a link element.
         *
         * @protected
         * @method _onKeyUp
         * @param {EventFacade} event EventFacade object
         */
        _onKeyUp: function _onKeyUp(event) {
            var nativeEvent = event.data.$;

            this._currentKeyCode = nativeEvent.keyCode;

            if (DELIMITERS.indexOf(this._currentKeyCode) !== -1) {
                var editor = event.listenerData.editor;

                var lastWord = this._getLastWord(editor);

                if (this._isValidURL(lastWord)) {
                    this._replaceContentByLink(editor, lastWord);
                }
            }
        },

        /**
         * Replaces content by a link element.
         *
         * @protected
         * @method _replaceContentByLink
         * @param {String} content The text that has to be replaced by an link element
         */
        _replaceContentByLink: function _replaceContentByLink(editor, content) {
            var range = editor.createRange();
            var node = CKEDITOR.dom.element.get(this._startContainer);
            var offset = this._offset;

            // Select the content, so CKEDITOR.Link can properly replace it
            range.setStart(node, offset - content.length);
            range.setEnd(node, offset);
            range.select();

            var ckLink = new CKEDITOR.Link(editor);
            ckLink.create(content);
            this._ckLink = ckLink;

            this._subscribeToKeyEvent(editor);

            // Now range is on the link and it is selected. We have to
            // return focus to the caret position.
            range = editor.getSelection().getRanges()[0];

            // If user pressed `Enter`, get the next editable node at position 0,
            // otherwise set the cursor at the next character of the link (the white space)
            if (this._currentKeyCode === KEY_ENTER) {
                var nextEditableNode = range.getNextEditableNode();

                range.setStart(nextEditableNode, 0);
                range.setEnd(nextEditableNode, 0);
            } else {
                var nextNode = range.getNextNode();

                range.setStart(nextNode, 1);
                range.setEnd(nextNode, 1);
            }

            range.select();
        },

        /**
         * Removes the created link element, and replaces it by its text.
         *
         * @protected
         * @method _removeLink
         */
        _removeLink: function _removeLink(editor) {
            var range = editor.getSelection().getRanges()[0];
            var caretOffset = range.startOffset;

            // Select the link, so CKEDITOR.Link can properly remove it
            var linkNode = this._startContainer.getNext() || this._startContainer;

            var newRange = editor.createRange();
            newRange.setStart(linkNode, 0);
            newRange.setEndAfter(linkNode);
            newRange.select();

            this._ckLink.remove();

            // Return focus to the caret position
            range.setEnd(range.startContainer, caretOffset);
            range.setStart(range.startContainer, caretOffset);

            range.select();
        },

        /**
         * Subscribe to a key event of the editable aria.
         *
         * @protected
         * @method _subscribeToKeyEvent
         */
        _subscribeToKeyEvent: function _subscribeToKeyEvent(editor) {
            var editable = editor.editable();

            // Change the priority of keydown listener - 1 means the highest priority.
            // In Chrome on pressing `Enter` the listener is not being invoked.
            // See http://dev.ckeditor.com/ticket/11861 for more information.
            editable.attachListener(editable, 'keydown', this._onKeyDown, this, {
                editor: editor
            }, 1);
        }
    });
})();
/**
 * CKEditor plugin: Dragable image resizing
 * https://github.com/sstur/ck-dragresize
 * - Shows semi-transparent overlay while resizing
 * - Enforces Aspect Ratio (unless holding shift)
 * - Snap to size of other images in editor
 * - Escape while dragging cancels resize
 */
'use strict';

(function () {
    'use strict';

    var PLUGIN_NAME = 'dragresize';
    var IMAGE_SNAP_TO_SIZE = 7;

    var isWebkit = ('WebkitAppearance' in document.documentElement.style);

    if (isWebkit) {
        // CSS is added in a compressed form
        CKEDITOR.addCss('img::selection{color:rgba(0,0,0,0)}img.ckimgrsz{outline:1px dashed #000}#ckimgrsz{position:absolute;width:0;height:0;cursor:default;z-index:10001}#ckimgrsz span{display:none;position:absolute;top:0;left:0;width:0;height:0;background-size:100% 100%;opacity:.65;outline:1px dashed #000}#ckimgrsz i{position:absolute;display:block;width:5px;height:5px;background:#fff;border:1px solid #000}#ckimgrsz i.active,#ckimgrsz i:hover{background:#000}#ckimgrsz i.br,#ckimgrsz i.tl{cursor:nwse-resize}#ckimgrsz i.bm,#ckimgrsz i.tm{cursor:ns-resize}#ckimgrsz i.bl,#ckimgrsz i.tr{cursor:nesw-resize}#ckimgrsz i.lm,#ckimgrsz i.rm{cursor:ew-resize}body.dragging-br,body.dragging-br *,body.dragging-tl,body.dragging-tl *{cursor:nwse-resize!important}body.dragging-bm,body.dragging-bm *,body.dragging-tm,body.dragging-tm *{cursor:ns-resize!important}body.dragging-bl,body.dragging-bl *,body.dragging-tr,body.dragging-tr *{cursor:nesw-resize!important}body.dragging-lm,body.dragging-lm *,body.dragging-rm,body.dragging-rm *{cursor:ew-resize!important}');
    }

    /**
     * Initializes the plugin
     */
    CKEDITOR.plugins.add(PLUGIN_NAME, {
        onLoad: function onLoad() {
            if (!isWebkit) {
                return;
            }
        },
        init: function init(editor) {
            if (!isWebkit) {
                return;
            }

            editor.once('contentDom', function (evt) {
                _init(editor);
            });
        }
    });

    function _init(editor) {
        var window = editor.window.$,
            document = editor.document.$;
        var snapToSize = typeof IMAGE_SNAP_TO_SIZE === 'undefined' ? null : IMAGE_SNAP_TO_SIZE;

        var resizer = new Resizer(editor, {
            snapToSize: snapToSize
        });

        document.addEventListener('mousedown', function (e) {
            if (resizer.isHandle(e.target)) {
                resizer.initDrag(e);
            }
        }, false);

        function selectionChange() {
            var selection = editor.getSelection();
            if (!selection) return;
            // If an element is selected and that element is an IMG
            if (selection.getType() !== CKEDITOR.SELECTION_NONE && selection.getStartElement().is('img')) {
                // And we're not right or middle clicking on the image
                if (!window.event || !window.event.button || window.event.button === 0) {
                    resizer.show(selection.getStartElement().$);
                }
            } else {
                resizer.hide();
            }
        }

        editor.on('selectionChange', selectionChange);

        editor.on('getData', function (e) {
            var html = e.data.dataValue || '';
            html = html.replace(/<div id="ckimgrsz"([\s\S]*?)<\/div>/i, '');
            html = html.replace(/\b(ckimgrsz)\b/g, '');
            e.data.dataValue = html;
        });

        editor.on('beforeUndoImage', function () {
            // Remove the handles before undo images are saved
            resizer.hide();
        });

        editor.on('afterUndoImage', function () {
            // Restore the handles after undo images are saved
            selectionChange();
        });

        editor.on('blur', function () {
            // Remove the handles when editor loses focus
            resizer.hide();
        });

        editor.on('beforeModeUnload', function self() {
            editor.removeListener('beforeModeUnload', self);
            resizer.hide();
        });

        // Update the selection when the browser window is resized
        var resizeTimeout;
        editor.window.on('resize', function () {
            // Cancel any resize waiting to happen
            clearTimeout(resizeTimeout);
            // Delay resize to "debounce"
            resizeTimeout = setTimeout(selectionChange, 50);
        });
    }

    function Resizer(editor, cfg) {
        this.editor = editor;
        this.window = editor.window.$;
        this.document = editor.document.$;
        this.cfg = cfg || {};
        this.init();
    }

    Resizer.prototype = {
        init: function init() {
            var container = this.container = this.document.createElement('div');
            container.id = 'ckimgrsz';
            this.preview = this.document.createElement('span');
            container.appendChild(this.preview);
            var handles = this.handles = {
                tl: this.createHandle('tl'),
                tm: this.createHandle('tm'),
                tr: this.createHandle('tr'),
                lm: this.createHandle('lm'),
                rm: this.createHandle('rm'),
                bl: this.createHandle('bl'),
                bm: this.createHandle('bm'),
                br: this.createHandle('br')
            };
            for (var n in handles) {
                container.appendChild(handles[n]);
            }
        },
        createHandle: function createHandle(name) {
            var el = this.document.createElement('i');
            el.classList.add(name);
            return el;
        },
        isHandle: function isHandle(el) {
            var handles = this.handles;
            for (var n in handles) {
                if (handles[n] === el) return true;
            }
            return false;
        },
        show: function show(el) {
            this.el = el;
            if (this.cfg.snapToSize) {
                this.otherImages = toArray(this.document.getElementsByTagName('img'));
                this.otherImages.splice(this.otherImages.indexOf(el), 1);
            }
            var box = this.box = getBoundingBox(this.window, el);
            positionElement(this.container, box.left, box.top);
            this.document.body.appendChild(this.container);
            this.el.classList.add('ckimgrsz');
            this.showHandles();
        },
        hide: function hide() {
            // Remove class from all img.ckimgrsz
            var elements = this.document.getElementsByClassName('ckimgrsz');
            for (var i = 0; i < elements.length; ++i) {
                elements[i].classList.remove('ckimgrsz');
            }
            this.hideHandles();
            if (this.container.parentNode) {
                this.container.parentNode.removeChild(this.container);
            }
        },
        initDrag: function initDrag(e) {
            if (e.button !== 0) {
                //right-click or middle-click
                return;
            }
            var resizer = this;
            var drag = new DragEvent(this.window, this.document);
            drag.onStart = function () {
                resizer.showPreview();
                resizer.isDragging = true;
                resizer.editor.getSelection().lock();
            };
            drag.onDrag = function () {
                resizer.calculateSize(this);
                resizer.updatePreview();
                var box = resizer.previewBox;
                resizer.updateHandles(box, box.left, box.top);
            };
            drag.onRelease = function () {
                resizer.isDragging = false;
                resizer.hidePreview();
                resizer.hide();
                resizer.editor.getSelection().unlock();
                // Save an undo snapshot before the image is permanently changed
                resizer.editor.fire('saveSnapshot');
            };
            drag.onComplete = function () {
                resizer.resizeComplete();
                // Save another snapshot after the image is changed
                resizer.editor.fire('saveSnapshot');
            };
            drag.start(e);
        },
        updateHandles: function updateHandles(box, left, top) {
            left = left || 0;
            top = top || 0;
            var handles = this.handles;
            positionElement(handles.tl, -3 + left, -3 + top);
            positionElement(handles.tm, Math.round(box.width / 2) - 3 + left, -3 + top);
            positionElement(handles.tr, box.width - 4 + left, -3 + top);
            positionElement(handles.lm, -3 + left, Math.round(box.height / 2) - 3 + top);
            positionElement(handles.rm, box.width - 4 + left, Math.round(box.height / 2) - 3 + top);
            positionElement(handles.bl, -3 + left, box.height - 4 + top);
            positionElement(handles.bm, Math.round(box.width / 2) - 3 + left, box.height - 4 + top);
            positionElement(handles.br, box.width - 4 + left, box.height - 4 + top);
        },
        showHandles: function showHandles() {
            var handles = this.handles;
            this.updateHandles(this.box);
            for (var n in handles) {
                handles[n].style.display = 'block';
            }
        },
        hideHandles: function hideHandles() {
            var handles = this.handles;
            for (var n in handles) {
                handles[n].style.display = 'none';
            }
        },
        showPreview: function showPreview() {
            this.preview.style.backgroundImage = 'url("' + this.el.src + '")';
            this.calculateSize();
            this.updatePreview();
            this.preview.style.display = 'block';
        },
        updatePreview: function updatePreview() {
            var box = this.previewBox;
            positionElement(this.preview, box.left, box.top);
            resizeElement(this.preview, box.width, box.height);
        },
        hidePreview: function hidePreview() {
            var box = getBoundingBox(this.window, this.preview);
            this.result = {
                width: box.width,
                height: box.height
            };
            this.preview.style.display = 'none';
        },
        calculateSize: function calculateSize(data) {
            var box = this.previewBox = {
                top: 0,
                left: 0,
                width: this.box.width,
                height: this.box.height
            };
            if (!data) return;
            var attr = data.target.className;
            if (~attr.indexOf('r')) {
                box.width = Math.max(32, this.box.width + data.delta.x);
            }
            if (~attr.indexOf('b')) {
                box.height = Math.max(32, this.box.height + data.delta.y);
            }
            if (~attr.indexOf('l')) {
                box.width = Math.max(32, this.box.width - data.delta.x);
            }
            if (~attr.indexOf('t')) {
                box.height = Math.max(32, this.box.height - data.delta.y);
            }
            //if dragging corner, enforce aspect ratio (unless shift key is being held)
            if (attr.indexOf('m') < 0 && !data.keys.shift) {
                var ratio = this.box.width / this.box.height;
                if (box.width / box.height > ratio) {
                    box.height = Math.round(box.width / ratio);
                } else {
                    box.width = Math.round(box.height * ratio);
                }
            }
            var snapToSize = this.cfg.snapToSize;
            if (snapToSize) {
                var others = this.otherImages;
                for (var i = 0; i < others.length; i++) {
                    var other = getBoundingBox(this.window, others[i]);
                    if (Math.abs(box.width - other.width) <= snapToSize && Math.abs(box.height - other.height) <= snapToSize) {
                        box.width = other.width;
                        box.height = other.height;
                        break;
                    }
                }
            }
            //recalculate left or top position
            if (~attr.indexOf('l')) {
                box.left = this.box.width - box.width;
            }
            if (~attr.indexOf('t')) {
                box.top = this.box.height - box.height;
            }
        },
        resizeComplete: function resizeComplete() {
            resizeElement(this.el, this.result.width, this.result.height);
        }
    };

    function DragEvent(window, document) {
        this.window = window;
        this.document = document;
        this.events = {
            mousemove: bind(this.mousemove, this),
            keydown: bind(this.keydown, this),
            mouseup: bind(this.mouseup, this)
        };
    }

    DragEvent.prototype = {
        start: function start(e) {
            e.preventDefault();
            e.stopPropagation();
            this.target = e.target;
            this.attr = e.target.className;
            this.startPos = {
                x: e.clientX,
                y: e.clientY
            };
            this.update(e);
            var events = this.events;
            this.document.addEventListener('mousemove', events.mousemove, false);
            this.document.addEventListener('keydown', events.keydown, false);
            this.document.addEventListener('mouseup', events.mouseup, false);
            this.document.body.classList.add('dragging-' + this.attr);
            this.onStart && this.onStart();
        },
        update: function update(e) {
            this.currentPos = {
                x: e.clientX,
                y: e.clientY
            };
            this.delta = {
                x: e.clientX - this.startPos.x,
                y: e.clientY - this.startPos.y
            };
            this.keys = {
                shift: e.shiftKey,
                ctrl: e.ctrlKey,
                alt: e.altKey
            };
        },
        mousemove: function mousemove(e) {
            this.update(e);
            this.onDrag && this.onDrag();
            if (e.which === 0) {
                //mouse button released outside window; mouseup wasn't fired (Chrome)
                this.mouseup(e);
            }
        },
        keydown: function keydown(e) {
            //escape key cancels dragging
            if (e.keyCode === 27) {
                this.release();
            }
        },
        mouseup: function mouseup(e) {
            this.update(e);
            this.release();
            this.onComplete && this.onComplete();
        },
        release: function release() {
            this.document.body.classList.remove('dragging-' + this.attr);
            var events = this.events;
            this.document.removeEventListener('mousemove', events.mousemove, false);
            this.document.removeEventListener('keydown', events.keydown, false);
            this.document.removeEventListener('mouseup', events.mouseup, false);
            this.onRelease && this.onRelease();
        }
    };

    //helper functions
    function toArray(obj) {
        var len = obj.length,
            arr = new Array(len);
        for (var i = 0; i < len; i++) {
            arr[i] = obj[i];
        }
        return arr;
    }

    function bind(fn, ctx) {
        if (fn.bind) {
            return fn.bind(ctx);
        }
        return function () {
            fn.apply(ctx, arguments);
        };
    }

    function positionElement(el, left, top) {
        el.style.left = String(left) + 'px';
        el.style.top = String(top) + 'px';
    }

    function resizeElement(el, width, height) {
        el.style.width = String(width) + 'px';
        el.style.height = String(height) + 'px';
    }

    function getBoundingBox(window, el) {
        var rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.pageXOffset,
            top: rect.top + window.pageYOffset,
            width: rect.width,
            height: rect.height
        };
    }
})();
'use strict';

(function () {
    'use strict';

    if (CKEDITOR.plugins.get('pasteimages')) {
        return;
    }

    /**
     * CKEditor plugin which allows pasting images directly into the editable area. The image will be encoded
     * as Data URI. An event `imageAdd` will be fired with the inserted element into the editable area.
     *
     * @class CKEDITOR.plugins.pasteimages
     */

    /**
     * Fired when an image is being added to the editor successfully.
     *
     * @event imageAdd
     * @param {CKEDITOR.dom.element} el The created image with src as Data URI
     */

    CKEDITOR.plugins.add('pasteimages', {
        /**
         * Initialization of the plugin, part of CKEditor plugin lifecycle.
         * The function registers a 'paste' event on the editing area.
         *
         * @method init
         * @param {Object} editor The current editor instance
         */
        init: function init(editor) {
            editor.once('contentDom', (function () {
                var editable = editor.editable();

                editable.attachListener(editable, 'paste', this._onPaste, this, {
                    editor: editor
                });
            }).bind(this));
        },

        /**
         * The function creates an img element with src the image data as Data URI.
         * Then, it fires an 'imageAdd' event via CKEditor's event system. The passed
         * params will be:
         * - `el` - the created img element
         * - `file` - the original pasted data
         *
         * @method _onPaste
         * @protected
         * @param {CKEDITOR.dom.event} event A `paste` event, as received natively from CKEditor
         */
        _onPaste: function _onPaste(event) {
            if (event.data.$.clipboardData) {
                var pastedData = event.data.$.clipboardData.items[0];
                var editor = event.listenerData.editor;

                if (pastedData.type.indexOf('image') === 0) {
                    var reader = new FileReader();
                    var imageFile = pastedData.getAsFile();

                    reader.onload = (function (event) {
                        var el = CKEDITOR.dom.element.createFromHtml('<img src="' + event.target.result + '">');

                        editor.insertElement(el);

                        var imageData = {
                            el: el,
                            file: imageFile
                        };

                        editor.fire('imageAdd', imageData);
                    }).bind(this);

                    reader.readAsDataURL(imageFile);
                }
            }
        }
    });
})();
'use strict';

(function () {
    'use strict';

    if (CKEDITOR.plugins.get('placeholder')) {
        return;
    }

    /**
     * CKEditor plugin which allows adding a placeholder to the editor. In this case, if there
     * is no content to the editor, there will be hint to the user.
     *
     * @class CKEDITOR.plugins.placeholder
     */

    /**
     * Specifies the placeholder class which have to be aded to editor when editor is not focuced.
     *
     * @attribute placeholderClass
     * @default ae-placeholder
     * @type String
     */

    CKEDITOR.plugins.add('placeholder', {

        /**
         * Initialization of the plugin, part of CKEditor plugin lifecycle.
         * The function registers a 'blur' and 'contentDom' event listeners.
         *
         * @method init
         * @param {Object} editor The current editor instance
         */
        init: function init(editor) {
            editor.on('blur', this._checkEmptyData, this);
            editor.once('contentDom', this._checkEmptyData, this);
        },

        /**
         * Removes any data from the content and adds a class,
         * specified by the "placeholderClass" config attribute.
         *
         * @protected
         * @method _checkEmptyData
         * @param {CKEDITOR.dom.event} editor event, fired from CKEditor
         */
        _checkEmptyData: function _checkEmptyData(event) {
            var editor = event.editor;

            if (editor.getData() === '') {
                var editorNode = new CKEDITOR.dom.element(editor.element.$);

                // Despite getData() returns empty string, the content still may have
                // data - an empty paragraph. This breaks the :empty selector in
                // placeholder's CSS and placeholder does not appear.
                // For that reason, we will intentionally remove any content from editorNode.
                editorNode.setHtml('');

                editorNode.addClass(editor.config.placeholderClass);
            }
        }
    });
})();
/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

'use strict';

(function () {
    var pxUnit = CKEDITOR.tools.cssLength;

    function getWidth(el) {
        return CKEDITOR.env.ie ? el.$.clientWidth : parseInt(el.getComputedStyle('width'), 10);
    }

    function getBorderWidth(element, side) {
        var computed = element.getComputedStyle('border-' + side + '-width'),
            borderMap = {
            thin: '0px',
            medium: '1px',
            thick: '2px'
        };

        if (computed.indexOf('px') < 0) {
            // look up keywords
            if (computed in borderMap && element.getComputedStyle('border-style') != 'none') {
                computed = borderMap[computed];
            } else {
                computed = 0;
            }
        }

        return parseInt(computed, 10);
    }

    // Gets the table row that contains the most columns.
    function getMasterPillarRow(table) {
        var $rows = table.$.rows,
            maxCells = 0,
            cellsCount,
            $elected,
            $tr;

        for (var i = 0, len = $rows.length; i < len; i++) {
            $tr = $rows[i];
            cellsCount = $tr.cells.length;

            if (cellsCount > maxCells) {
                maxCells = cellsCount;
                $elected = $tr;
            }
        }

        return $elected;
    }

    function buildTableColumnPillars(table) {
        var pillars = [],
            pillarIndex = -1,
            rtl = table.getComputedStyle('direction') === 'rtl';

        // Get the raw row element that cointains the most columns.
        var $tr = getMasterPillarRow(table);

        // Get the tbody element and position, which will be used to set the
        // top and bottom boundaries.
        var tbody = new CKEDITOR.dom.element(table.$.tBodies[0]),
            tbodyPosition = tbody.getDocumentPosition();

        // Loop thorugh all cells, building pillars after each one of them.
        for (var i = 0, len = $tr.cells.length; i < len; i++) {
            // Both the current cell and the successive one will be used in the
            // pillar size calculation.
            var td = new CKEDITOR.dom.element($tr.cells[i]),
                nextTd = $tr.cells[i + 1] && new CKEDITOR.dom.element($tr.cells[i + 1]);

            pillarIndex += td.$.colSpan || 1;

            // Calculate the pillar boundary positions.
            var pillarLeft, pillarRight, pillarWidth;

            var x = td.getDocumentPosition().x;

            // Calculate positions based on the current cell.
            rtl ? pillarRight = x + getBorderWidth(td, 'left') : pillarLeft = x + td.$.offsetWidth - getBorderWidth(td, 'right');

            // Calculate positions based on the next cell, if available.
            if (nextTd) {
                x = nextTd.getDocumentPosition().x;

                rtl ? pillarLeft = x + nextTd.$.offsetWidth - getBorderWidth(nextTd, 'right') : pillarRight = x + getBorderWidth(nextTd, 'left');
            }
            // Otherwise calculate positions based on the table (for last cell).
            else {
                x = table.getDocumentPosition().x;

                rtl ? pillarLeft = x : pillarRight = x + table.$.offsetWidth;
            }

            pillarWidth = Math.max(pillarRight - pillarLeft, 4);

            // The pillar should reflects exactly the shape of the hovered
            // column border line.
            pillars.push({
                table: table,
                index: pillarIndex,
                x: pillarLeft,
                y: tbodyPosition.y,
                width: pillarWidth,
                height: tbody.$.offsetHeight,
                rtl: rtl
            });
        }

        return pillars;
    }

    function getPillarAtPosition(pillars, positionX) {
        for (var i = 0, len = pillars.length; i < len; i++) {
            var pillar = pillars[i];

            if (positionX >= pillar.x && positionX <= pillar.x + pillar.width) {
                return pillar;
            }
        }

        return null;
    }

    function cancel(evt) {
        (evt.data || evt).preventDefault();
    }

    function columnResizer(editor) {
        var pillar, document, resizer, isResizing, startOffset, currentShift;

        var leftSideCells, rightSideCells, leftShiftBoundary, rightShiftBoundary;

        function detach() {
            pillar = null;
            currentShift = 0;
            isResizing = 0;

            document.removeListener('mouseup', onMouseUp);
            resizer.removeListener('mousedown', onMouseDown);
            resizer.removeListener('mousemove', onMouseMove);

            document.getBody().setStyle('cursor', 'auto');
        }

        function resizeStart() {
            // Before starting to resize, figure out which cells to change
            // and the boundaries of this resizing shift.

            var columnIndex = pillar.index,
                map = CKEDITOR.tools.buildTableMap(pillar.table),
                leftColumnCells = [],
                rightColumnCells = [],
                leftMinSize = Number.MAX_VALUE,
                rightMinSize = leftMinSize,
                rtl = pillar.rtl;

            for (var i = 0, len = map.length; i < len; i++) {
                var row = map[i],
                    leftCell = row[columnIndex + (rtl ? 1 : 0)],
                    rightCell = row[columnIndex + (rtl ? 0 : 1)];

                leftCell = leftCell && new CKEDITOR.dom.element(leftCell);
                rightCell = rightCell && new CKEDITOR.dom.element(rightCell);

                if (!leftCell || !rightCell || !leftCell.equals(rightCell)) {
                    leftCell && (leftMinSize = Math.min(leftMinSize, getWidth(leftCell)));
                    rightCell && (rightMinSize = Math.min(rightMinSize, getWidth(rightCell)));

                    leftColumnCells.push(leftCell);
                    rightColumnCells.push(rightCell);
                }
            }

            // Cache the list of cells to be resized.
            leftSideCells = leftColumnCells;
            rightSideCells = rightColumnCells;

            // Cache the resize limit boundaries.
            leftShiftBoundary = pillar.x - leftMinSize;
            rightShiftBoundary = pillar.x + rightMinSize;

            resizer.setOpacity(0.5);
            startOffset = parseInt(resizer.getStyle('left'), 10);
            currentShift = 0;
            isResizing = 1;

            resizer.on('mousemove', onMouseMove);

            // Prevent the native drag behavior otherwise 'mousemove' won't fire.
            document.on('dragstart', cancel);
        }

        function resizeEnd() {
            isResizing = 0;

            resizer.setOpacity(0);

            currentShift && resizeColumn();

            var table = pillar.table;
            setTimeout(function () {
                table.removeCustomData('_cke_table_pillars');
            }, 0);

            document.removeListener('dragstart', cancel);
        }

        function resizeColumn() {
            var rtl = pillar.rtl,
                cellsCount = rtl ? rightSideCells.length : leftSideCells.length;

            // Perform the actual resize to table cells, only for those by side of the pillar.
            for (var i = 0; i < cellsCount; i++) {
                var leftCell = leftSideCells[i],
                    rightCell = rightSideCells[i],
                    table = pillar.table;

                // Defer the resizing to avoid any interference among cells.
                CKEDITOR.tools.setTimeout(function (leftCell, leftOldWidth, rightCell, rightOldWidth, tableWidth, sizeShift) {
                    // 1px is the minimum valid width (#11626).
                    leftCell && leftCell.setStyle('width', pxUnit(Math.max(leftOldWidth + sizeShift, 1)));
                    rightCell && rightCell.setStyle('width', pxUnit(Math.max(rightOldWidth - sizeShift, 1)));

                    // If we're in the last cell, we need to resize the table as well
                    if (tableWidth) {
                        table.setStyle('width', pxUnit(tableWidth + sizeShift * (rtl ? -1 : 1)));
                    }
                }, 0, this, [leftCell, leftCell && getWidth(leftCell), rightCell, rightCell && getWidth(rightCell), (!leftCell || !rightCell) && getWidth(table) + getBorderWidth(table, 'left') + getBorderWidth(table, 'right'), currentShift]);
            }
        }

        function onMouseDown(evt) {
            cancel(evt);

            resizeStart();

            document.on('mouseup', onMouseUp, this);
        }

        function onMouseUp(evt) {
            evt.removeListener();

            resizeEnd();
        }

        function onMouseMove(evt) {
            move(evt.data.getPageOffset().x);
        }

        document = editor.document;

        resizer = CKEDITOR.dom.element.createFromHtml('<div data-cke-temp=1 contenteditable=false unselectable=on ' + 'style="position:absolute;cursor:col-resize;filter:alpha(opacity=0);opacity:0;' + 'padding:0;background-color:#004;background-image:none;border:0px none;z-index:10"></div>', document);

        // Clean DOM when editor is destroyed.
        editor.on('destroy', function () {
            resizer.remove();
        });

        // Place the resizer after body to prevent it
        // from being editable.
        document.getDocumentElement().append(resizer);

        this.attachTo = function (targetPillar) {
            // Accept only one pillar at a time.
            if (isResizing) {
                return;
            }

            pillar = targetPillar;

            resizer.setStyles({
                width: pxUnit(targetPillar.width),
                height: pxUnit(targetPillar.height),
                left: pxUnit(targetPillar.x),
                top: pxUnit(targetPillar.y)
            });

            resizer.on('mousedown', onMouseDown, this);

            document.getBody().setStyle('cursor', 'col-resize');

            // Display the resizer to receive events but don't show it,
            // only change the cursor to resizable shape.
            resizer.show();
        };

        var move = this.move = function (posX) {
            if (!pillar) {
                return 0;
            }

            if (!isResizing && (posX < pillar.x || posX > pillar.x + pillar.width)) {
                detach();
                return 0;
            }

            var resizerNewPosition = posX - Math.round(resizer.$.offsetWidth / 2);

            if (isResizing) {
                if (resizerNewPosition === leftShiftBoundary || resizerNewPosition === rightShiftBoundary) {
                    return 1;
                }

                resizerNewPosition = Math.max(resizerNewPosition, leftShiftBoundary);
                resizerNewPosition = Math.min(resizerNewPosition, rightShiftBoundary);

                currentShift = resizerNewPosition - startOffset;
            }

            resizer.setStyle('left', pxUnit(resizerNewPosition));

            return 1;
        };
    }

    function clearPillarsCache(evt) {
        var target = evt.data.getTarget();

        if (evt.name === 'mouseout') {
            // Bypass interal mouse move.
            if (!target.is('table')) {
                return;
            }

            var dest = new CKEDITOR.dom.element(evt.data.$.relatedTarget || evt.data.$.toElement);
            while (dest && dest.$ && !dest.equals(target) && !dest.is('body')) {
                dest = dest.getParent();
            }
            if (!dest || dest.equals(target)) {
                return;
            }
        }

        target.getAscendant('table', 1).removeCustomData('_cke_table_pillars');
        evt.removeListener();
    }

    CKEDITOR.plugins.add('tableresize', {
        requires: 'tabletools',

        init: function init(editor) {
            editor.on('contentDom', function () {
                var resizer,
                    editable = editor.editable();

                // In Classic editor it is better to use document
                // instead of editable so event will work below body.
                editable.attachListener(editable.isInline() ? editable : editor.document, 'mousemove', function (evt) {
                    evt = evt.data;

                    var target = evt.getTarget();

                    // FF may return document and IE8 some UFO (object with no nodeType property...)
                    // instead of an element (#11823).
                    if (target.type !== CKEDITOR.NODE_ELEMENT) {
                        return;
                    }

                    var pageX = evt.getPageOffset().x;

                    // If we're already attached to a pillar, simply move the
                    // resizer.
                    if (resizer && resizer.move(pageX)) {
                        cancel(evt);
                        return;
                    }

                    // Considering table, tr, td, tbody but nothing else.
                    var table, pillars;

                    if (!target.is('table') && !target.getAscendant('tbody', 1)) {
                        return;
                    }

                    table = target.getAscendant('table', 1);

                    // Make sure the table we found is inside the container
                    // (eg. we should not use tables the editor is embedded within)
                    if (!editor.editable().contains(table)) {
                        return;
                    }

                    if (!(pillars = table.getCustomData('_cke_table_pillars'))) {
                        // Cache table pillars calculation result.
                        table.setCustomData('_cke_table_pillars', pillars = buildTableColumnPillars(table));
                        table.on('mouseout', clearPillarsCache);
                        table.on('mousedown', clearPillarsCache);
                    }

                    var pillar = getPillarAtPosition(pillars, pageX);
                    if (pillar) {
                        !resizer && (resizer = new columnResizer(editor));
                        resizer.attachTo(pillar);
                    }
                });
            });
        }
    });
})();
/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

'use strict';

(function () {
	if (CKEDITOR.plugins.tabletools) return;

	var cellNodeRegex = /^(?:td|th)$/;

	function getSelectedCells(selection) {
		var ranges = selection.getRanges();
		var retval = [];
		var database = {};

		function moveOutOfCellGuard(node) {
			// Apply to the first cell only.
			if (retval.length > 0) return;

			// If we are exiting from the first </td>, then the td should definitely be
			// included.
			if (node.type == CKEDITOR.NODE_ELEMENT && cellNodeRegex.test(node.getName()) && !node.getCustomData('selected_cell')) {
				CKEDITOR.dom.element.setMarker(database, node, 'selected_cell', true);
				retval.push(node);
			}
		}

		for (var i = 0; i < ranges.length; i++) {
			var range = ranges[i];

			if (range.collapsed) {
				// Walker does not handle collapsed ranges yet - fall back to old API.
				var startNode = range.getCommonAncestor();
				var nearestCell = startNode.getAscendant('td', true) || startNode.getAscendant('th', true);
				if (nearestCell) retval.push(nearestCell);
			} else {
				var walker = new CKEDITOR.dom.walker(range);
				var node;
				walker.guard = moveOutOfCellGuard;

				while (node = walker.next()) {
					// If may be possible for us to have a range like this:
					// <td>^1</td><td>^2</td>
					// The 2nd td shouldn't be included.
					//
					// So we have to take care to include a td we've entered only when we've
					// walked into its children.

					if (node.type != CKEDITOR.NODE_ELEMENT || !node.is(CKEDITOR.dtd.table)) {
						var parent = node.getAscendant('td', true) || node.getAscendant('th', true);
						if (parent && !parent.getCustomData('selected_cell')) {
							CKEDITOR.dom.element.setMarker(database, parent, 'selected_cell', true);
							retval.push(parent);
						}
					}
				}
			}
		}

		CKEDITOR.dom.element.clearAllMarkers(database);

		return retval;
	}

	function getFocusElementAfterDelCells(cellsToDelete) {
		var i = 0,
		    last = cellsToDelete.length - 1,
		    database = {},
		    cell,
		    focusedCell,
		    tr;

		while (cell = cellsToDelete[i++]) CKEDITOR.dom.element.setMarker(database, cell, 'delete_cell', true);

		// 1.first we check left or right side focusable cell row by row;
		i = 0;
		while (cell = cellsToDelete[i++]) {
			if ((focusedCell = cell.getPrevious()) && !focusedCell.getCustomData('delete_cell') || (focusedCell = cell.getNext()) && !focusedCell.getCustomData('delete_cell')) {
				CKEDITOR.dom.element.clearAllMarkers(database);
				return focusedCell;
			}
		}

		CKEDITOR.dom.element.clearAllMarkers(database);

		// 2. then we check the toppest row (outside the selection area square) focusable cell
		tr = cellsToDelete[0].getParent();
		if (tr = tr.getPrevious()) return tr.getLast();

		// 3. last we check the lowerest  row focusable cell
		tr = cellsToDelete[last].getParent();
		if (tr = tr.getNext()) return tr.getChild(0);

		return null;
	}

	function insertRow(selection, insertBefore) {
		var cells = getSelectedCells(selection),
		    firstCell = cells[0],
		    table = firstCell.getAscendant('table'),
		    doc = firstCell.getDocument(),
		    startRow = cells[0].getParent(),
		    startRowIndex = startRow.$.rowIndex,
		    lastCell = cells[cells.length - 1],
		    endRowIndex = lastCell.getParent().$.rowIndex + lastCell.$.rowSpan - 1,
		    endRow = new CKEDITOR.dom.element(table.$.rows[endRowIndex]),
		    rowIndex = insertBefore ? startRowIndex : endRowIndex,
		    row = insertBefore ? startRow : endRow;

		var map = CKEDITOR.tools.buildTableMap(table),
		    cloneRow = map[rowIndex],
		    nextRow = insertBefore ? map[rowIndex - 1] : map[rowIndex + 1],
		    width = map[0].length;

		var newRow = doc.createElement('tr');
		for (var i = 0; cloneRow[i] && i < width; i++) {
			var cell;
			// Check whether there's a spanning row here, do not break it.
			if (cloneRow[i].rowSpan > 1 && nextRow && cloneRow[i] == nextRow[i]) {
				cell = cloneRow[i];
				cell.rowSpan += 1;
			} else {
				cell = new CKEDITOR.dom.element(cloneRow[i]).clone();
				cell.removeAttribute('rowSpan');
				cell.appendBogus();
				newRow.append(cell);
				cell = cell.$;
			}

			i += cell.colSpan - 1;
		}

		insertBefore ? newRow.insertBefore(row) : newRow.insertAfter(row);
	}

	function deleteRows(selectionOrRow) {
		if (selectionOrRow instanceof CKEDITOR.dom.selection) {
			var cells = getSelectedCells(selectionOrRow),
			    firstCell = cells[0],
			    table = firstCell.getAscendant('table'),
			    map = CKEDITOR.tools.buildTableMap(table),
			    startRow = cells[0].getParent(),
			    startRowIndex = startRow.$.rowIndex,
			    lastCell = cells[cells.length - 1],
			    endRowIndex = lastCell.getParent().$.rowIndex + lastCell.$.rowSpan - 1,
			    rowsToDelete = [];

			// Delete cell or reduce cell spans by checking through the table map.
			for (var i = startRowIndex; i <= endRowIndex; i++) {
				var mapRow = map[i],
				    row = new CKEDITOR.dom.element(table.$.rows[i]);

				for (var j = 0; j < mapRow.length; j++) {
					var cell = new CKEDITOR.dom.element(mapRow[j]),
					    cellRowIndex = cell.getParent().$.rowIndex;

					if (cell.$.rowSpan == 1) cell.remove();
					// Row spanned cell.
					else {
						// Span row of the cell, reduce spanning.
						cell.$.rowSpan -= 1;
						// Root row of the cell, root cell to next row.
						if (cellRowIndex == i) {
							var nextMapRow = map[i + 1];
							nextMapRow[j - 1] ? cell.insertAfter(new CKEDITOR.dom.element(nextMapRow[j - 1])) : new CKEDITOR.dom.element(table.$.rows[i + 1]).append(cell, 1);
						}
					}

					j += cell.$.colSpan - 1;
				}

				rowsToDelete.push(row);
			}

			var rows = table.$.rows;

			// Where to put the cursor after rows been deleted?
			// 1. Into next sibling row if any;
			// 2. Into previous sibling row if any;
			// 3. Into table's parent element if it's the very last row.
			var cursorPosition = new CKEDITOR.dom.element(rows[endRowIndex + 1] || (startRowIndex > 0 ? rows[startRowIndex - 1] : null) || table.$.parentNode);

			for (i = rowsToDelete.length; i >= 0; i--) deleteRows(rowsToDelete[i]);

			return cursorPosition;
		} else if (selectionOrRow instanceof CKEDITOR.dom.element) {
			table = selectionOrRow.getAscendant('table');

			if (table.$.rows.length == 1) table.remove();else selectionOrRow.remove();
		}

		return null;
	}

	function getCellColIndex(cell, isStart) {
		var row = cell.getParent(),
		    rowCells = row.$.cells;

		var colIndex = 0;
		for (var i = 0; i < rowCells.length; i++) {
			var mapCell = rowCells[i];
			colIndex += isStart ? 1 : mapCell.colSpan;
			if (mapCell == cell.$) break;
		}

		return colIndex - 1;
	}

	function getColumnsIndices(cells, isStart) {
		var retval = isStart ? Infinity : 0;
		for (var i = 0; i < cells.length; i++) {
			var colIndex = getCellColIndex(cells[i], isStart);
			if (isStart ? colIndex < retval : colIndex > retval) retval = colIndex;
		}
		return retval;
	}

	function insertColumn(selection, insertBefore) {
		var cells = getSelectedCells(selection),
		    firstCell = cells[0],
		    table = firstCell.getAscendant('table'),
		    startCol = getColumnsIndices(cells, 1),
		    lastCol = getColumnsIndices(cells),
		    colIndex = insertBefore ? startCol : lastCol;

		var map = CKEDITOR.tools.buildTableMap(table),
		    cloneCol = [],
		    nextCol = [],
		    height = map.length;

		for (var i = 0; i < height; i++) {
			cloneCol.push(map[i][colIndex]);
			var nextCell = insertBefore ? map[i][colIndex - 1] : map[i][colIndex + 1];
			nextCol.push(nextCell);
		}

		for (i = 0; i < height; i++) {
			var cell;

			if (!cloneCol[i]) continue;

			// Check whether there's a spanning column here, do not break it.
			if (cloneCol[i].colSpan > 1 && nextCol[i] == cloneCol[i]) {
				cell = cloneCol[i];
				cell.colSpan += 1;
			} else {
				cell = new CKEDITOR.dom.element(cloneCol[i]).clone();
				cell.removeAttribute('colSpan');
				cell.appendBogus();
				cell[insertBefore ? 'insertBefore' : 'insertAfter'].call(cell, new CKEDITOR.dom.element(cloneCol[i]));
				cell = cell.$;
			}

			i += cell.rowSpan - 1;
		}
	}

	function deleteColumns(selectionOrCell) {
		var cells = getSelectedCells(selectionOrCell),
		    firstCell = cells[0],
		    lastCell = cells[cells.length - 1],
		    table = firstCell.getAscendant('table'),
		    map = CKEDITOR.tools.buildTableMap(table),
		    startColIndex,
		    endColIndex,
		    rowsToDelete = [];

		// Figure out selected cells' column indices.
		for (var i = 0, rows = map.length; i < rows; i++) {
			for (var j = 0, cols = map[i].length; j < cols; j++) {
				if (map[i][j] == firstCell.$) startColIndex = j;
				if (map[i][j] == lastCell.$) endColIndex = j;
			}
		}

		// Delete cell or reduce cell spans by checking through the table map.
		for (i = startColIndex; i <= endColIndex; i++) {
			for (j = 0; j < map.length; j++) {
				var mapRow = map[j],
				    row = new CKEDITOR.dom.element(table.$.rows[j]),
				    cell = new CKEDITOR.dom.element(mapRow[i]);

				if (cell.$) {
					if (cell.$.colSpan == 1) cell.remove();
					// Reduce the col spans.
					else cell.$.colSpan -= 1;

					j += cell.$.rowSpan - 1;

					if (!row.$.cells.length) rowsToDelete.push(row);
				}
			}
		}

		var firstRowCells = table.$.rows[0] && table.$.rows[0].cells;

		// Where to put the cursor after columns been deleted?
		// 1. Into next cell of the first row if any;
		// 2. Into previous cell of the first row if any;
		// 3. Into table's parent element;
		var cursorPosition = new CKEDITOR.dom.element(firstRowCells[startColIndex] || (startColIndex ? firstRowCells[startColIndex - 1] : table.$.parentNode));

		// Delete table rows only if all columns are gone (do not remove empty row).
		if (rowsToDelete.length == rows) table.remove();

		return cursorPosition;
	}

	function insertCell(selection, insertBefore) {
		var startElement = selection.getStartElement();
		var cell = startElement.getAscendant('td', 1) || startElement.getAscendant('th', 1);

		if (!cell) return;

		// Create the new cell element to be added.
		var newCell = cell.clone();
		newCell.appendBogus();

		if (insertBefore) newCell.insertBefore(cell);else newCell.insertAfter(cell);
	}

	function deleteCells(selectionOrCell) {
		if (selectionOrCell instanceof CKEDITOR.dom.selection) {
			var cellsToDelete = getSelectedCells(selectionOrCell);
			var table = cellsToDelete[0] && cellsToDelete[0].getAscendant('table');
			var cellToFocus = getFocusElementAfterDelCells(cellsToDelete);

			for (var i = cellsToDelete.length - 1; i >= 0; i--) deleteCells(cellsToDelete[i]);

			if (cellToFocus) placeCursorInCell(cellToFocus, true);else if (table) table.remove();
		} else if (selectionOrCell instanceof CKEDITOR.dom.element) {
			var tr = selectionOrCell.getParent();
			if (tr.getChildCount() == 1) tr.remove();else selectionOrCell.remove();
		}
	}

	// Remove filler at end and empty spaces around the cell content.
	function trimCell(cell) {
		var bogus = cell.getBogus();
		bogus && bogus.remove();
		cell.trim();
	}

	function placeCursorInCell(cell, placeAtEnd) {
		var docInner = cell.getDocument(),
		    docOuter = CKEDITOR.document;

		// Fixing "Unspecified error" thrown in IE10 by resetting
		// selection the dirty and shameful way (#10308).
		// We can not apply this hack to IE8 because
		// it causes error (#11058).
		if (CKEDITOR.env.ie && CKEDITOR.env.version == 10) {
			docOuter.focus();
			docInner.focus();
		}

		var range = new CKEDITOR.dom.range(docInner);
		if (!range['moveToElementEdit' + (placeAtEnd ? 'End' : 'Start')](cell)) {
			range.selectNodeContents(cell);
			range.collapse(placeAtEnd ? false : true);
		}
		range.select(true);
	}

	function cellInRow(tableMap, rowIndex, cell) {
		var oRow = tableMap[rowIndex];
		if (typeof cell == 'undefined') return oRow;

		for (var c = 0; oRow && c < oRow.length; c++) {
			if (cell.is && oRow[c] == cell.$) return c;else if (c == cell) return new CKEDITOR.dom.element(oRow[c]);
		}
		return cell.is ? -1 : null;
	}

	function cellInCol(tableMap, colIndex) {
		var oCol = [];
		for (var r = 0; r < tableMap.length; r++) {
			var row = tableMap[r];
			oCol.push(row[colIndex]);

			// Avoid adding duplicate cells.
			if (row[colIndex].rowSpan > 1) r += row[colIndex].rowSpan - 1;
		}
		return oCol;
	}

	function mergeCells(selection, mergeDirection, isDetect) {
		var cells = getSelectedCells(selection);

		// Invalid merge request if:
		// 1. In batch mode despite that less than two selected.
		// 2. In solo mode while not exactly only one selected.
		// 3. Cells distributed in different table groups (e.g. from both thead and tbody).
		var commonAncestor;
		if ((mergeDirection ? cells.length != 1 : cells.length < 2) || (commonAncestor = selection.getCommonAncestor()) && commonAncestor.type == CKEDITOR.NODE_ELEMENT && commonAncestor.is('table')) return false;

		var cell,
		    firstCell = cells[0],
		    table = firstCell.getAscendant('table'),
		    map = CKEDITOR.tools.buildTableMap(table),
		    mapHeight = map.length,
		    mapWidth = map[0].length,
		    startRow = firstCell.getParent().$.rowIndex,
		    startColumn = cellInRow(map, startRow, firstCell);

		if (mergeDirection) {
			var targetCell;
			try {
				var rowspan = parseInt(firstCell.getAttribute('rowspan'), 10) || 1;
				var colspan = parseInt(firstCell.getAttribute('colspan'), 10) || 1;

				targetCell = map[mergeDirection == 'up' ? startRow - rowspan : mergeDirection == 'down' ? startRow + rowspan : startRow][mergeDirection == 'left' ? startColumn - colspan : mergeDirection == 'right' ? startColumn + colspan : startColumn];
			} catch (er) {
				return false;
			}

			// 1. No cell could be merged.
			// 2. Same cell actually.
			if (!targetCell || firstCell.$ == targetCell) return false;

			// Sort in map order regardless of the DOM sequence.
			cells[mergeDirection == 'up' || mergeDirection == 'left' ? 'unshift' : 'push'](new CKEDITOR.dom.element(targetCell));
		}

		// Start from here are merging way ignorance (merge up/right, batch merge).
		var doc = firstCell.getDocument(),
		    lastRowIndex = startRow,
		    totalRowSpan = 0,
		    totalColSpan = 0,
		   
		// Use a documentFragment as buffer when appending cell contents.
		frag = !isDetect && new CKEDITOR.dom.documentFragment(doc),
		    dimension = 0;

		for (var i = 0; i < cells.length; i++) {
			cell = cells[i];

			var tr = cell.getParent(),
			    cellFirstChild = cell.getFirst(),
			    colSpan = cell.$.colSpan,
			    rowSpan = cell.$.rowSpan,
			    rowIndex = tr.$.rowIndex,
			    colIndex = cellInRow(map, rowIndex, cell);

			// Accumulated the actual places taken by all selected cells.
			dimension += colSpan * rowSpan;
			// Accumulated the maximum virtual spans from column and row.
			totalColSpan = Math.max(totalColSpan, colIndex - startColumn + colSpan);
			totalRowSpan = Math.max(totalRowSpan, rowIndex - startRow + rowSpan);

			if (!isDetect) {
				// Trim all cell fillers and check to remove empty cells.
				if ((trimCell(cell), cell.getChildren().count())) {
					// Merge vertically cells as two separated paragraphs.
					if (rowIndex != lastRowIndex && cellFirstChild && !(cellFirstChild.isBlockBoundary && cellFirstChild.isBlockBoundary({ br: 1 }))) {
						var last = frag.getLast(CKEDITOR.dom.walker.whitespaces(true));
						if (last && !(last.is && last.is('br'))) frag.append('br');
					}

					cell.moveChildren(frag);
				}
				i ? cell.remove() : cell.setHtml('');
			}
			lastRowIndex = rowIndex;
		}

		if (!isDetect) {
			frag.moveChildren(firstCell);

			firstCell.appendBogus();

			if (totalColSpan >= mapWidth) firstCell.removeAttribute('rowSpan');else firstCell.$.rowSpan = totalRowSpan;

			if (totalRowSpan >= mapHeight) firstCell.removeAttribute('colSpan');else firstCell.$.colSpan = totalColSpan;

			// Swip empty <tr> left at the end of table due to the merging.
			var trs = new CKEDITOR.dom.nodeList(table.$.rows),
			    count = trs.count();

			for (i = count - 1; i >= 0; i--) {
				var tailTr = trs.getItem(i);
				if (!tailTr.$.cells.length) {
					tailTr.remove();
					count++;
					continue;
				}
			}

			return firstCell;
		}
		// Be able to merge cells only if actual dimension of selected
		// cells equals to the caculated rectangle.
		else {
			return totalRowSpan * totalColSpan == dimension;
		}
	}

	function verticalSplitCell(selection, isDetect) {
		var cells = getSelectedCells(selection);
		if (cells.length > 1) return false;else if (isDetect) return true;

		var cell = cells[0],
		    tr = cell.getParent(),
		    table = tr.getAscendant('table'),
		    map = CKEDITOR.tools.buildTableMap(table),
		    rowIndex = tr.$.rowIndex,
		    colIndex = cellInRow(map, rowIndex, cell),
		    rowSpan = cell.$.rowSpan,
		    newCell,
		    newRowSpan,
		    newCellRowSpan,
		    newRowIndex;

		if (rowSpan > 1) {
			newRowSpan = Math.ceil(rowSpan / 2);
			newCellRowSpan = Math.floor(rowSpan / 2);
			newRowIndex = rowIndex + newRowSpan;
			var newCellTr = new CKEDITOR.dom.element(table.$.rows[newRowIndex]),
			    newCellRow = cellInRow(map, newRowIndex),
			    candidateCell;

			newCell = cell.clone();

			// Figure out where to insert the new cell by checking the vitual row.
			for (var c = 0; c < newCellRow.length; c++) {
				candidateCell = newCellRow[c];
				// Catch first cell actually following the column.
				if (candidateCell.parentNode == newCellTr.$ && c > colIndex) {
					newCell.insertBefore(new CKEDITOR.dom.element(candidateCell));
					break;
				} else {
					candidateCell = null;
				}
			}

			// The destination row is empty, append at will.
			if (!candidateCell) newCellTr.append(newCell);
		} else {
			newCellRowSpan = newRowSpan = 1;

			newCellTr = tr.clone();
			newCellTr.insertAfter(tr);
			newCellTr.append(newCell = cell.clone());

			var cellsInSameRow = cellInRow(map, rowIndex);
			for (var i = 0; i < cellsInSameRow.length; i++) cellsInSameRow[i].rowSpan++;
		}

		newCell.appendBogus();

		cell.$.rowSpan = newRowSpan;
		newCell.$.rowSpan = newCellRowSpan;
		if (newRowSpan == 1) cell.removeAttribute('rowSpan');
		if (newCellRowSpan == 1) newCell.removeAttribute('rowSpan');

		return newCell;
	}

	function horizontalSplitCell(selection, isDetect) {
		var cells = getSelectedCells(selection);
		if (cells.length > 1) return false;else if (isDetect) return true;

		var cell = cells[0],
		    tr = cell.getParent(),
		    table = tr.getAscendant('table'),
		    map = CKEDITOR.tools.buildTableMap(table),
		    rowIndex = tr.$.rowIndex,
		    colIndex = cellInRow(map, rowIndex, cell),
		    colSpan = cell.$.colSpan,
		    newCell,
		    newColSpan,
		    newCellColSpan;

		if (colSpan > 1) {
			newColSpan = Math.ceil(colSpan / 2);
			newCellColSpan = Math.floor(colSpan / 2);
		} else {
			newCellColSpan = newColSpan = 1;
			var cellsInSameCol = cellInCol(map, colIndex);
			for (var i = 0; i < cellsInSameCol.length; i++) cellsInSameCol[i].colSpan++;
		}
		newCell = cell.clone();
		newCell.insertAfter(cell);
		newCell.appendBogus();

		cell.$.colSpan = newColSpan;
		newCell.$.colSpan = newCellColSpan;
		if (newColSpan == 1) cell.removeAttribute('colSpan');
		if (newCellColSpan == 1) newCell.removeAttribute('colSpan');

		return newCell;
	}

	CKEDITOR.plugins.tabletools = {
		init: function init(editor) {
			var lang = editor.lang.table;

			function createDef(def) {
				return CKEDITOR.tools.extend(def || {}, {
					contextSensitive: 1,
					refresh: function refresh(editor, path) {
						this.setState(path.contains({ td: 1, th: 1 }, 1) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED);
					}
				});
			}
			function addCmd(name, def) {
				var cmd = editor.addCommand(name, def);
				editor.addFeature(cmd);
			}

			addCmd('cellProperties', new CKEDITOR.dialogCommand('cellProperties', createDef({
				allowedContent: 'td th{width,height,border-color,background-color,white-space,vertical-align,text-align}[colspan,rowspan]',
				requiredContent: 'table'
			})));
			CKEDITOR.dialog.add('cellProperties', this.path + 'dialogs/tableCell.js');

			addCmd('rowDelete', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					placeCursorInCell(deleteRows(selection));
				}
			}));

			addCmd('rowInsertBefore', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					insertRow(selection, true);
				}
			}));

			addCmd('rowInsertAfter', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					insertRow(selection);
				}
			}));

			addCmd('columnDelete', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					var element = deleteColumns(selection);
					element && placeCursorInCell(element, true);
				}
			}));

			addCmd('columnInsertBefore', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					insertColumn(selection, true);
				}
			}));

			addCmd('columnInsertAfter', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					insertColumn(selection);
				}
			}));

			addCmd('cellDelete', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					deleteCells(selection);
				}
			}));

			addCmd('cellMerge', createDef({
				allowedContent: 'td[colspan,rowspan]',
				requiredContent: 'td[colspan,rowspan]',
				exec: function exec(editor) {
					placeCursorInCell(mergeCells(editor.getSelection()), true);
				}
			}));

			addCmd('cellMergeRight', createDef({
				allowedContent: 'td[colspan]',
				requiredContent: 'td[colspan]',
				exec: function exec(editor) {
					placeCursorInCell(mergeCells(editor.getSelection(), 'right'), true);
				}
			}));

			addCmd('cellMergeDown', createDef({
				allowedContent: 'td[rowspan]',
				requiredContent: 'td[rowspan]',
				exec: function exec(editor) {
					placeCursorInCell(mergeCells(editor.getSelection(), 'down'), true);
				}
			}));

			addCmd('cellVerticalSplit', createDef({
				allowedContent: 'td[rowspan]',
				requiredContent: 'td[rowspan]',
				exec: function exec(editor) {
					placeCursorInCell(verticalSplitCell(editor.getSelection()));
				}
			}));

			addCmd('cellHorizontalSplit', createDef({
				allowedContent: 'td[colspan]',
				requiredContent: 'td[colspan]',
				exec: function exec(editor) {
					placeCursorInCell(horizontalSplitCell(editor.getSelection()));
				}
			}));

			addCmd('cellInsertBefore', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					insertCell(selection, true);
				}
			}));

			addCmd('cellInsertAfter', createDef({
				requiredContent: 'table',
				exec: function exec(editor) {
					var selection = editor.getSelection();
					insertCell(selection);
				}
			}));

			// If the "menu" plugin is loaded, register the menu items.
			if (editor.addMenuItems) {
				editor.addMenuItems({
					tablecell: {
						label: lang.cell.menu,
						group: 'tablecell',
						order: 1,
						getItems: function getItems() {
							var selection = editor.getSelection(),
							    cells = getSelectedCells(selection);
							return {
								tablecell_insertBefore: CKEDITOR.TRISTATE_OFF,
								tablecell_insertAfter: CKEDITOR.TRISTATE_OFF,
								tablecell_delete: CKEDITOR.TRISTATE_OFF,
								tablecell_merge: mergeCells(selection, null, true) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED,
								tablecell_merge_right: mergeCells(selection, 'right', true) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED,
								tablecell_merge_down: mergeCells(selection, 'down', true) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED,
								tablecell_split_vertical: verticalSplitCell(selection, true) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED,
								tablecell_split_horizontal: horizontalSplitCell(selection, true) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED,
								tablecell_properties: cells.length > 0 ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED
							};
						}
					},

					tablecell_insertBefore: {
						label: lang.cell.insertBefore,
						group: 'tablecell',
						command: 'cellInsertBefore',
						order: 5
					},

					tablecell_insertAfter: {
						label: lang.cell.insertAfter,
						group: 'tablecell',
						command: 'cellInsertAfter',
						order: 10
					},

					tablecell_delete: {
						label: lang.cell.deleteCell,
						group: 'tablecell',
						command: 'cellDelete',
						order: 15
					},

					tablecell_merge: {
						label: lang.cell.merge,
						group: 'tablecell',
						command: 'cellMerge',
						order: 16
					},

					tablecell_merge_right: {
						label: lang.cell.mergeRight,
						group: 'tablecell',
						command: 'cellMergeRight',
						order: 17
					},

					tablecell_merge_down: {
						label: lang.cell.mergeDown,
						group: 'tablecell',
						command: 'cellMergeDown',
						order: 18
					},

					tablecell_split_horizontal: {
						label: lang.cell.splitHorizontal,
						group: 'tablecell',
						command: 'cellHorizontalSplit',
						order: 19
					},

					tablecell_split_vertical: {
						label: lang.cell.splitVertical,
						group: 'tablecell',
						command: 'cellVerticalSplit',
						order: 20
					},

					tablecell_properties: {
						label: lang.cell.title,
						group: 'tablecellproperties',
						command: 'cellProperties',
						order: 21
					},

					tablerow: {
						label: lang.row.menu,
						group: 'tablerow',
						order: 1,
						getItems: function getItems() {
							return {
								tablerow_insertBefore: CKEDITOR.TRISTATE_OFF,
								tablerow_insertAfter: CKEDITOR.TRISTATE_OFF,
								tablerow_delete: CKEDITOR.TRISTATE_OFF
							};
						}
					},

					tablerow_insertBefore: {
						label: lang.row.insertBefore,
						group: 'tablerow',
						command: 'rowInsertBefore',
						order: 5
					},

					tablerow_insertAfter: {
						label: lang.row.insertAfter,
						group: 'tablerow',
						command: 'rowInsertAfter',
						order: 10
					},

					tablerow_delete: {
						label: lang.row.deleteRow,
						group: 'tablerow',
						command: 'rowDelete',
						order: 15
					},

					tablecolumn: {
						label: lang.column.menu,
						group: 'tablecolumn',
						order: 1,
						getItems: function getItems() {
							return {
								tablecolumn_insertBefore: CKEDITOR.TRISTATE_OFF,
								tablecolumn_insertAfter: CKEDITOR.TRISTATE_OFF,
								tablecolumn_delete: CKEDITOR.TRISTATE_OFF
							};
						}
					},

					tablecolumn_insertBefore: {
						label: lang.column.insertBefore,
						group: 'tablecolumn',
						command: 'columnInsertBefore',
						order: 5
					},

					tablecolumn_insertAfter: {
						label: lang.column.insertAfter,
						group: 'tablecolumn',
						command: 'columnInsertAfter',
						order: 10
					},

					tablecolumn_delete: {
						label: lang.column.deleteColumn,
						group: 'tablecolumn',
						command: 'columnDelete',
						order: 15
					}
				});
			}

			// If the "contextmenu" plugin is laoded, register the listeners.
			if (editor.contextMenu) {
				editor.contextMenu.addListener(function (element, selection, path) {
					var cell = path.contains({ 'td': 1, 'th': 1 }, 1);
					if (cell && !cell.isReadOnly()) {
						return {
							tablecell: CKEDITOR.TRISTATE_OFF,
							tablerow: CKEDITOR.TRISTATE_OFF,
							tablecolumn: CKEDITOR.TRISTATE_OFF
						};
					}

					return null;
				});
			}
		},

		getSelectedCells: getSelectedCells

	};
	CKEDITOR.plugins.add('tabletools', CKEDITOR.plugins.tabletools);
})();

/**
 * Create a two-dimension array that reflects the actual layout of table cells,
 * with cell spans, with mappings to the original td elements.
 *
 * @param {CKEDITOR.dom.element} table
 * @member CKEDITOR.tools
 */
CKEDITOR.tools.buildTableMap = function (table) {
	var aRows = table.$.rows;

	// Row and Column counters.
	var r = -1;

	var aMap = [];

	for (var i = 0; i < aRows.length; i++) {
		r++;
		!aMap[r] && (aMap[r] = []);

		var c = -1;

		for (var j = 0; j < aRows[i].cells.length; j++) {
			var oCell = aRows[i].cells[j];

			c++;
			while (aMap[r][c]) c++;

			var iColSpan = isNaN(oCell.colSpan) ? 1 : oCell.colSpan;
			var iRowSpan = isNaN(oCell.rowSpan) ? 1 : oCell.rowSpan;

			for (var rs = 0; rs < iRowSpan; rs++) {
				if (!aMap[r + rs]) aMap[r + rs] = [];

				for (var cs = 0; cs < iColSpan; cs++) {
					aMap[r + rs][c + cs] = aRows[i].cells[j];
				}
			}

			c += iColSpan - 1;
		}
	}
	return aMap;
};
'use strict';

(function () {
    'use strict';

    window.AlloyEditor = {
        editable: function editable(node, config) {
            config = config || {};

            config.srcNode = node;

            return new AlloyEditor.Core(config);
        },

        Buttons: {},

        Toolbars: {}
    };
})();
'use strict';

(function () {
    'use strict';

    /**
     * Provides core language utilities.
     *
     * @class Lang
     */
    var Lang = {
        /**
         * Check if the passed value is an array.
         *
         * @static
         * @method isArray
         * @param {Any} value The value which have to be checked.
         * @return {Boolean} True if the passed value is an array, false otherwise.
         */
        isArray: function isArray(value) {
            return Object.prototype.toString.call(value) === '[object Array]';
        },

        /**
         * Check if the passed value is boolean.
         *
         * @static
         * @method isBoolean
         * @param {Any} value The value which have to be checked.
         * @return {Boolean} True if the passed value is boolean, false otherwise.
         */
        isBoolean: function isBoolean(value) {
            return typeof value === 'boolean';
        },

        /**
         * Check if the passed value is a function.
         *
         * @static
         * @method isFunction
         * @param {Any} value The value which have to be checked.
         * @return {Boolean} True if the passed value is a function, false otherwise.
         */
        isFunction: function isFunction(value) {
            return typeof value === 'function';
        },

        /**
         * Check if the passed value is NULL.
         *
         * @static
         * @method isNull
         * @param {Any} value The value which have to be checked.
         * @return {Boolean} True if the passed value is NULL, false otherwise.
         */
        isNull: function isNull(value) {
            return value === null;
        },

        /**
         * Check if the passed value is number.
         *
         * @static
         * @method isNumber
         * @param {Any} value The value which have to be checked.
         * @return {Boolean} True if the passed value is number, false otherwise.
         */
        isNumber: function isNumber(value) {
            return typeof value === 'number' && isFinite(value);
        },

        /**
         * Check if the passed value is an object
         *
         * @static
         * @method isObject
         * @param {Any} value The value which have to be checked.
         * @return {Boolean} True if the passed value is an object, false otherwise.
         */
        isObject: function isObject(value) {
            var valueType = typeof value;

            return value && (valueType === 'object' || Lang.isFunction(value));
        },

        /**
         * Check if the passed value is a string.
         *
         * @static
         * @method isString
         * @param {Any} value The value which have to be checked.
         * @return {Boolean} True if the passed value is a string, false otherwise.
         */
        isString: function isString(value) {
            return typeof value === 'string';
        },

        /**
         * Adds all properties from the supplier to the receiver.
         * The function will add all properties, not only these owned by the supplier.
         *
         * @static
         * @method mix
         * @param {Object} receiver The object which will receive properties.
         * @param {Object} supplier The object which provides properties.
         * @return {Object} The modified receiver.
         */
        mix: function mix(receiver, supplier) {
            var hasOwnProperty = Object.prototype.hasOwnProperty;

            for (var key in supplier) {
                if (hasOwnProperty.call(supplier, key)) {
                    receiver[key] = supplier[key];
                }
            }
        },

        /**
         * Converts value to Integer.
         *
         * @static
         * @method toInt
         * @param {Any} value The value which have to be converted to Integer.
         * @return {Integer} The converted value.
         */
        toInt: function toInt(value) {
            return parseInt(value, 10);
        }
    };

    AlloyEditor.Lang = Lang;
})();
'use strict';

(function () {
    'use strict';

    var OOP = {
        /**
         * Sets the prototype, constructor and superclass properties to support an inheritance strategy
         * that can chain constructors and methods. Static members will not be inherited.
         *
         * @static
         * @method extend
         * @param {Function} receiver The class which will extend another class.
         * @param {Function} supplier The class which will provide the properties the child class.
         * @param {Object} protoProps Prototype properties to add/override.
         * @param {Object} staticProps Static properties to add/overwrite.
         * @return {Function} The extended class.
         */
        extend: function extend(receiver, supplier, protoProps, staticProps) {
            if (!supplier || !receiver) {
                throw 'extend failed, verify dependencies';
            }

            var supplierProto = supplier.prototype,
                receiverProto = Object.create(supplierProto);
            receiver.prototype = receiverProto;

            receiverProto.constructor = receiver;
            receiver.superclass = supplierProto;

            // assign constructor property
            if (supplier !== Object && supplierProto.constructor === Object.prototype.constructor) {
                supplierProto.constructor = supplier;
            }

            // add prototype overrides
            if (protoProps) {
                AlloyEditor.Lang.mix(receiverProto, protoProps);
            }

            // add object overrides
            if (staticProps) {
                AlloyEditor.Lang.mix(receiver, staticProps);
            }

            return receiver;
        }
    };

    AlloyEditor.OOP = OOP;
})();
'use strict';

(function () {
    'use strict';

    /**
     * Attribute implementation.
     *
     * @class Attribute
     * @constructor
    */
    function Attribute(config) {
        this.__config__ = config || {};
        this.__ATTRS__ = {};
    }

    Attribute.prototype = {
        constructor: Attribute,

        /**
         * Retrieves the value of an attribute.
         *
         * @method get
         * @param {String} attr The attribute which value should be retrieved.
         * @return {Any} The value of the attribute.
         */
        get: function get(attr) {
            var currentAttr = this.constructor.ATTRS[attr];

            if (!currentAttr) {
                return;
            }

            if (!this._isInitialized(attr)) {
                this._init(attr);
            }

            var curValue = this.__ATTRS__[attr];

            if (currentAttr.getter) {
                curValue = this._callStringOrFunction(currentAttr.getter, curValue);
            }

            return curValue;
        },

        /**
         * Sets the value of an attribute.
         *
         * @method set
         * @param {String} attr The attribute which value should be set.
         * @param {Any} value The value which should be set to the attribute.
         */
        set: function set(attr, value) {
            var currentAttr = this.constructor.ATTRS[attr];

            if (!currentAttr) {
                return;
            }

            if (!this._isInitialized(attr)) {
                this._init(attr);
            }

            if (currentAttr.readOnly) {
                return;
            }

            if (currentAttr.writeOnce && this._isInitialized(attr)) {
                return;
            }

            if (currentAttr.validator && !this._callStringOrFunction(currentAttr.validator, value)) {
                return;
            }

            if (currentAttr.setter) {
                value = this._callStringOrFunction(currentAttr.setter, value);
            }

            this.__ATTRS__[attr] = value;
        },

        /**
         * Calls the provided param as function with the supplied arguments.
         * If param provided as string, a corresponding function in this object will
         * be called. If provided param is a function, it will be directly called.
         *
         * @protected
         * @method _callStringOrFunction
         * @param  {String|Function} stringOrFunction The function which should be called
         * @param  {Any|Array} args The arguments which will be provided to the called function
         * @return {Any} The returned value from the called function
         */
        _callStringOrFunction: function _callStringOrFunction(stringOrFunction, args) {
            var result = null;

            if (!AlloyEditor.Lang.isArray(args)) {
                args = [args];
            }

            if (AlloyEditor.Lang.isString(stringOrFunction) && AlloyEditor.Lang.isFunction(this[stringOrFunction])) {
                result = this[stringOrFunction].apply(this, args);
            } else if (AlloyEditor.Lang.isFunction(stringOrFunction)) {
                result = stringOrFunction.apply(this, args);
            }

            return result;
        },

        /**
         * Initializes an attribute. Sets its default value depending on the flags of the
         * attribute and the passed configuration object to the constructor.
         *
         * @protected
         * @method _init
         * @param {String} attr The name of the attribute which have to be initialized.
         */
        _init: function _init(attr) {
            var value;

            var currentAttr = this.constructor.ATTRS[attr];

            // Check if there is default value or passed one via configuration object
            var hasDefaultValue = Object.prototype.hasOwnProperty.call(currentAttr, 'value');
            var hasPassedValueViaConfig = Object.prototype.hasOwnProperty.call(this.__config__, attr);

            // If there is valueFn, set the value to be the result of invocation of this function
            if (currentAttr.valueFn) {
                value = this._callStringOrFunction(currentAttr.valueFn, value);

                this.__ATTRS__[attr] = value;
            }
            // else if the attribute has readOnly flag, set the default value from the attribute,
            // regardless if there is value or not
            else if (currentAttr.readOnly) {
                value = currentAttr.value;
            }
            // else if the attribute has writeOnce value, set it from the passed configuration or from the
            // default value, in this order. Otherwise, return miserable.
            else if (currentAttr.writeOnce) {
                if (hasDefaultValue) {
                    value = currentAttr.value;
                } else if (hasPassedValueViaConfig) {
                    value = this.__config__[attr];
                } else {
                    return;
                }
            }
            // These two cases below are easy - set the value to be from the passed config or
            // from the default value, in this order.
            else if (hasPassedValueViaConfig) {
                value = this.__config__[attr];
            } else if (hasDefaultValue) {
                value = currentAttr.value;
            }

            // If there is validator, and user passed config object - check the returned value.
            // If it is false, then set as initial value the default one.
            // However, if there is no default value, just return.
            if (currentAttr.validator && hasPassedValueViaConfig && !this._callStringOrFunction(currentAttr.validator, value)) {
                if (hasDefaultValue) {
                    value = currentAttr.value;
                } else {
                    return;
                }
            }

            // If there is setter and user passed config object - pass the value thought the setter.
            // The value might be one from defaultFn, default value or provided from the config.
            if (currentAttr.setter && hasPassedValueViaConfig) {
                value = this._callStringOrFunction(currentAttr.setter, value);
            }

            // Finally, set the value as initial value to the storage with values.
            this.__ATTRS__[attr] = value;
        },

        /**
         * Checks if an attribute is initialized. An attribute is considered as initialized
         * when there is an own property with this name in the local collection of attribute values
         * for the current instance.
         *
         * @protected
         * @method _isInitialized
         * @param {String} attr The attribute which should be checked if it is initialized.
         * @return {Boolean} Returns true if the attribute has been initialized, false otherwise.
         */
        _isInitialized: function _isInitialized(attr) {
            return Object.prototype.hasOwnProperty.call(this.__ATTRS__, attr);
        }
    };

    AlloyEditor.Attribute = Attribute;
})();
'use strict';

(function () {
    'use strict';

    /**
     * Quick and dirty impl of Base class.
     *
     * @class Base
     * @constructor
     */
    function Base(config) {
        Base.superclass.constructor.call(this, config);

        this.init(config);
    }

    AlloyEditor.OOP.extend(Base, AlloyEditor.Attribute, {
        /**
         * Calls the `initializer` method of each class which extends Base starting from the parent to the child.
         * Will pass the configuration object to each initializer method.
         *
         * @method init
         * @param {Object} config Configuration object
         */
        init: function init(config) {
            this._callChain('initializer', config);
        },

        /**
         * Calls the `destructor` method of each class which extends Base starting from the parent to the child.
         *
         * @method destroy
         */
        destroy: function destroy() {
            this._callChain('destructor');
        },

        /**
         * Calls a method of each class, which is being present in the hierarchy starting from parent to the child.
         *
         * @protected
         * @method _callChain
         * @param {String} wat  The method, which should be invoked
         * @param {Object|Array} args The arguments with which the method should be invoked
         */
        _callChain: function _callChain(wat, args) {
            var arr = [];

            var ctor = this.constructor;

            while (ctor) {
                if (AlloyEditor.Lang.isFunction(ctor.prototype[wat])) {
                    arr.push(ctor.prototype[wat]);
                }

                ctor = ctor.superclass ? ctor.superclass.constructor : null;
            }

            arr = arr.reverse();

            args = AlloyEditor.Lang.isArray(args) ? args : [args];

            for (var i = 0; i < arr.length; i++) {
                var item = arr[i];

                item.apply(this, args);
            }
        }
    });

    AlloyEditor.Base = Base;
})();
'use strict';

(function () {
    'use strict';

    var tableSelectionGetArrowBoxClasses = function tableSelectionGetArrowBoxClasses() {
        return 'ae-arrow-box ae-arrow-box-bottom';
    };

    AlloyEditor.SelectionGetArrowBoxClasses = {
        table: tableSelectionGetArrowBoxClasses
    };
})();
'use strict';

(function () {
    'use strict';

    var tableSelectionSetPosition = function tableSelectionSetPosition(payload) {
        var nativeEditor = payload.editor.get('nativeEditor');

        var table = new CKEDITOR.Table(nativeEditor).getFromSelection();
        var clientRect = table.getClientRect();

        var toolbarNode = this.getDOMNode();
        var halfToolbarWidth = toolbarNode.offsetWidth / 2;
        var scrollPos = new CKEDITOR.dom.window(window).getScrollPosition();

        var widgetXY = this.getWidgetXYPoint(clientRect.left + clientRect.width / 2 - scrollPos.x, clientRect.top + scrollPos.y, CKEDITOR.SELECTION_BOTTOM_TO_TOP);

        this.moveToPoint([widgetXY[0], widgetXY[1]], [clientRect.left + clientRect.width / 2 - halfToolbarWidth - scrollPos.x, clientRect.top - toolbarNode.offsetHeight + scrollPos.y]);

        return true;
    };

    AlloyEditor.SelectionSetPosition = {
        table: tableSelectionSetPosition
    };
})();
'use strict';

(function () {
    'use strict';

    var linkSelectionTest = function linkSelectionTest(payload) {
        var nativeEditor = payload.editor.get('nativeEditor');

        return !nativeEditor.isSelectionEmpty() && new CKEDITOR.Link(nativeEditor).getFromSelection();
    };

    var imageSelectionTest = function imageSelectionTest(payload) {
        var selectionData = payload.data.selectionData;

        return selectionData.element && selectionData.element.getName() === 'img';
    };

    var textSelectionTest = function textSelectionTest(payload) {
        var nativeEditor = payload.editor.get('nativeEditor');

        var selectionEmpty = nativeEditor.isSelectionEmpty();

        var selectionData = payload.data.selectionData;

        return !selectionData.element && selectionData.region && !selectionEmpty;
    };

    var tableSelectionTest = function tableSelectionTest(payload) {
        var nativeEditor = payload.editor.get('nativeEditor');

        return !!new CKEDITOR.Table(nativeEditor).getFromSelection();
    };

    AlloyEditor.SelectionTest = {
        image: imageSelectionTest,
        link: linkSelectionTest,
        table: tableSelectionTest,
        text: textSelectionTest
    };
})();
'use strict';

(function () {
    'use strict';

    var Selections = [{
        name: 'link',
        buttons: ['linkEdit'],
        test: AlloyEditor.SelectionTest.link
    }, {
        name: 'image',
        buttons: ['imageLeft', 'imageRight'],
        test: AlloyEditor.SelectionTest.image
    }, {
        name: 'text',
        buttons: ['styles', 'bold', 'italic', 'underline', 'link', 'twitter'],
        test: AlloyEditor.SelectionTest.text
    }, {
        name: 'table',
        buttons: ['tableHeading', 'tableRow', 'tableColumn', 'tableCell', 'tableRemove'],
        getArrowBoxClasses: AlloyEditor.SelectionGetArrowBoxClasses.table,
        setPosition: AlloyEditor.SelectionSetPosition.table,
        test: AlloyEditor.SelectionTest.table
    }];

    AlloyEditor.Selections = Selections;
})();
'use strict';

(function () {
    'use strict';

    /**
     * AlloyEditor main class. Creates instance of the editor and provides the user configuration
     * to the UI.
     *
     * @class Core
     * @constructor
     */
    function Core(config) {
        Core.superclass.constructor.call(this, config);
    }

    AlloyEditor.OOP.extend(Core, AlloyEditor.Base, {
        /**
         * Initializer lifecycle implementation for the AlloyEditor class. Creates a CKEditor
         * instance, passing it the provided configuration attributes.
         *
         * @protected
         * @method initializer
         * @param config {Object} Configuration object literal for the editor.
         */
        initializer: function initializer(config) {
            var node = this.get('srcNode');
            node.setAttribute('contenteditable', 'true');

            var editor = CKEDITOR.inline(node);

            editor.config.allowedContent = this.get('allowedContent');

            editor.config.toolbars = this.get('toolbars');

            editor.config.removePlugins = this.get('removePlugins');
            editor.config.extraPlugins = this.get('extraPlugins');
            editor.config.placeholderClass = this.get('placeholderClass');

            editor.config.pasteFromWordRemoveStyles = false;
            editor.config.pasteFromWordRemoveFontStyles = false;

            AlloyEditor.Lang.mix(editor.config, config);

            this._editor = editor;

            CKEDITOR.once('resourcesLoaded', this._renderUI.bind(this));

            editor.once('contentDom', function () {
                editor.editable().addClass('ae-editable');
            });

            this._loadLanguageFile();
        },

        /**
         * Destructor lifecycle implementation for the AlloyEdtor class. Destroys the CKEditor
         * instance and destroys all created toolbars.
         *
         * @protected
         * @method destructor
         */
        destructor: function destructor() {
            if (this._editorUIElement) {
                React.unmountComponentAtNode(this._editorUIElement);
                this._editorUIElement.parentNode.removeChild(this._editorUIElement);
            }

            var nativeEditor = this.get('nativeEditor');

            if (nativeEditor) {
                var editable = nativeEditor.editable();
                if (editable) {
                    editable.removeClass('ae-editable');
                }

                nativeEditor.destroy();
            }
        },

        /**
         * Retrieves the native CKEditor instance. Having this, the developer may use the API of CKEditor OOTB.
         *
         * @protected
         * @method _getNativeEditor
         * @return {Object} The current instance of CKEditor.
         */
        _getNativeEditor: function _getNativeEditor() {
            return this._editor;
        },

        /**
         * Detects and load the corresponding language file
         * if AlloyEditor language strings are not already present.
         *
         * @protected
         * @method _loadLanguageFile
         */
        _loadLanguageFile: function _loadLanguageFile() {
            var onLanguageFileLoad = function onLanguageFileLoad() {
                CKEDITOR.fire('resourcesLoaded');
            };

            if (!window.AlloyEditor.Strings) {
                var languages = ['af', 'ar', 'bg', 'bn', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en-au', 'en-ca', 'en-gb', 'en', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fo', 'fr-ca', 'fr', 'gl', 'gu', 'he', 'hi', 'hr', 'hu', 'id', 'is', 'it', 'ja', 'ka', 'km', 'ko', 'ku', 'lt', 'lv', 'mk', 'mn', 'ms', 'nb', 'nl', 'no', 'pl', 'pt-br', 'pt', 'ro', 'ru', 'si', 'sk', 'sl', 'sq', 'sr-latn', 'sr', 'sv', 'th', 'tr', 'tt', 'ug', 'uk', 'vi', 'zh-cn', 'zh'];

                var userLanguage = navigator.language || navigator.userLanguage || 'en';

                var parts = userLanguage.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/);
                var lang = parts[1];
                var locale = parts[2];

                if (languages[lang + '-' + locale]) {
                    lang = lang + '-' + locale;
                } else if (!languages.indexOf(lang)) {
                    lang = 'en';
                }

                CKEDITOR.scriptLoader.load(CKEDITOR.getUrl('lang/alloy-editor/' + lang + '.js'), onLanguageFileLoad, this);
            } else {
                setTimeout(onLanguageFileLoad.bind(this), 0);
            }
        },

        /**
         * Renders the specified from the user toolbars
         *
         * @protected
         * @method _renderUI
         */
        _renderUI: function _renderUI() {
            var editorUIElement = document.createElement('div');
            editorUIElement.className = 'alloy-editor-ui';

            var uiNode = this.get('uiNode') || document.body;

            uiNode.appendChild(editorUIElement);

            this._mainUI = React.render(React.createElement(AlloyEditor.UI, {
                editor: this,
                eventsDelay: this.get('eventsDelay'),
                toolbars: this.get('toolbars')
            }), editorUIElement);

            this._editorUIElement = editorUIElement;

            this.get('nativeEditor').fire('uiReady');
        },

        /**
         * The function returns an HTML element from the passed value. If the passed value is a string, it should be 
         * the Id of the element which have to be retrieved from the DOM.
         * If an HTML Element is passed, the element itself will be returned.
         *
         * @method _toElement
         * @protected
         * @param {!(String|HTMLElement)} value String, which have to correspond to an HTML element from the DOM,
         * or the HTML element itself. If Id is passed, the HTML element will be retrieved from the DOM.
         * @return {HTMLElement} An HTML element.
         */
        _toElement: function _toElement(value) {
            if (AlloyEditor.Lang.isString(value)) {
                value = document.getElementById(value);
            }

            return value;
        },

        /**
         * Validates the allowed content attribute. Look
         * [here](http://docs.ckeditor.com/#!/api/CKEDITOR.config-cfg-allowedContent) for more information about the
         * supported values.
         *
         * @protected
         * @method _validateAllowedContent
         * @param {Any} The value to be checked
         * @return {Boolean} True if the current value is valid configuration, false otherwise
         */
        _validateAllowedContent: function _validateAllowedContent(value) {
            return AlloyEditor.Lang.isString(value) || AlloyEditor.Lang.isObject(value) || AlloyEditor.Lang.isBoolean(value);
        },

        /**
         * Validates the value of toolbars attribute
         *
         * @protected
         * @method _validateToolbars
         * @param {Any} The value to be checked
         * @return {Boolean} True if the current value is valid toolbars configuration, false otherwise
         */
        _validateToolbars: function _validateToolbars(value) {
            return AlloyEditor.Lang.isObject(value) || AlloyEditor.Lang.isNull(value);
        }
    }, {
        ATTRS: {
            /**
             * Configures the allowed content for the current instance of AlloyEditor.
             * Look on the [official CKEditor API](http://docs.ckeditor.com/#!/api/CKEDITOR.config-cfg-allowedContent)
             * for more information about the valid values.
             *
             * @property allowedContent
             * @default true
             * @writeOnce
             * @type {Boolean, String, Object}
             */
            allowedContent: {
                validator: '_validateAllowedContent',
                value: true,
                writeOnce: true
            },

            /**
             * The delay (timeout), in ms, after which events such like key or mouse events will be processed.
             *
             * @property eventsDelay
             * @type {Number}
             */
            eventsDelay: {
                validator: AlloyEditor.Lang.isNumber,
                value: 100
            },

            /**
             * Specifies the extra plugins which have to be loaded to the current CKEditor instance in order to
             * make AlloyEditor to work properly.
             *
             * @property extraPlugins
             * @default 'uicore,selectionregion,dragresize,addimages,placeholder,tabletools,tableresize,autolink'
             * @writeOnce
             * @type {String}
             */
            extraPlugins: {
                validator: AlloyEditor.Lang.isString,
                value: 'uicore,selectionregion,dragresize,addimages,placeholder,tabletools,tableresize,autolink',
                writeOnce: true
            },

            /**
             * Retrieves the native CKEditor instance. Having this, the developer may use the full API of CKEditor.
             *
             * @property nativeEditor
             * @readOnly
             * @type {Object}
             */
            nativeEditor: {
                getter: '_getNativeEditor',
                readOnly: true
            },

            /**
             * Specifies the class, which should be added by Placeholder plugin
             * {{#crossLink "CKEDITOR.plugins.placeholder}}{{/crossLink}}
             * when editor is not focused.
             *
             * @property placeholderClass
             * @default 'ae-placeholder'
             * @writeOnce
             * @type {String}
             */
            placeholderClass: {
                validator: AlloyEditor.Lang.isString,
                value: 'ae-placeholder',
                writeOnce: true
            },

            /**
             * Specifies the plugins, which come by default with CKEditor, but which are not needed by AlloyEditor.
             * These plugins add the default UI for CKeditor, which is no more needed. Please note that AlloyEdtor
             * comes with its own highly optimized copy of CKEditor (just customized via their official download page).
             * This version does not come with the unneeded plugins, so the value of this property won't be needed.
             * However, if you decide to go with the OOTB version of CKEditor, you will have to remove some of the
             * plugins if you decide to use AlloyEditor. Keep in mind that removing these plugins doesn't remove them
             * entirely from CKEditor. It just removes them from its current instance, in which you will use different
             * UI - those of AlloyEditor. You will be fully able to use both OOTB CKEditor and AlloyEditor on the same
             * page!
             *
             * @property removePlugins
             * @default 'contextmenu,toolbar,elementspath,resize,liststyle,link'
             * @writeOnce
             * @type {String}
             */
            removePlugins: {
                validator: AlloyEditor.Lang.isString,
                value: 'contextmenu,toolbar,elementspath,resize,liststyle,link',
                writeOnce: true
            },

            /**
             * The Node ID or HTMl node, which should be turned to an instance of AlloyEditor.
             *
             * @property srcNode
             * @type String | Node
             * @writeOnce
             */
            srcNode: {
                setter: '_toElement',
                writeOnce: true
            },

            /**
             * The toolbars configuration for this editor instance
             *
             * @property {Object} toolbars
             */
            toolbars: {
                validator: '_validateToolbars',
                value: {
                    add: {
                        buttons: ['image', 'camera', 'hline', 'table'],
                        tabIndex: 2
                    },
                    styles: {
                        selections: AlloyEditor.Selections,
                        tabIndex: 1
                    }
                }
            },

            /**
             * The Node ID or HTMl node, where AlloyEditor's UI should be rendered.
             *
             * @property uiNode
             * @type String | Node
             * @writeOnce
             */
            uiNode: {
                setter: '_toElement',
                writeOnce: true
            }
        }
    });

    AlloyEditor.Core = Core;
})();
'use strict';

(function () {
    'use strict';

    /**
     * ButtonActionStyle is a mixin that provides applying style implementation for a
     * button based on the `applyStyle` and `removeStyle` API of CKEDITOR.
     *
     * To execute properly, the component has to expose the following methods which can be obtained
     * out of the box using the {{#crossLink "ButtonStyle"}}{{/crossLink}} mixin:
     * - `Function` {{#crossLink "ButtonStyle/isActive"}}{{/crossLink}} to check the active state
     * - `Function` {{#crossLink "ButtonStyle/getStyle"}}{{/crossLink}} to return the style that should be applied
     *
     * @class ButtonActionStyle
     */
    var ButtonActionStyle = {
        /**
         * Removes or applies the component style to the current selection.
         *
         * @method applyStyle
         */
        applyStyle: function applyStyle() {
            if (AlloyEditor.Lang.isFunction(this.isActive) && AlloyEditor.Lang.isFunction(this.getStyle)) {
                var editor = this.props.editor.get('nativeEditor');

                editor.getSelection().lock();

                if (this.isActive()) {
                    editor.removeStyle(this.getStyle());
                } else {
                    editor.applyStyle(this.getStyle());
                }

                editor.getSelection().unlock();

                editor.fire('actionPerformed', this);
            }
        }
    };

    AlloyEditor.ButtonActionStyle = ButtonActionStyle;
})();
'use strict';

(function () {
    'use strict';

    /**
     * ButtonCommand is a mixin that executes a command via CKEDITOR's API.
     *
     * @class ButtonCommand
     */
    var ButtonCommand = {
        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The command that should be executed.
             *
             * @property {String} command
             */
            command: React.PropTypes.string.isRequired,

            /**
             * Indicates that the command may cause the editor to have a different.
             *
             * @property {boolean} modifiesSelection
             */
            modifiesSelection: React.PropTypes.bool
        },

        /**
         * Executes a CKEditor command and fires `actionPerformed` event.
         *
         * @param {Object=} data Optional data to be passed to CKEDITOR's `execCommand` method.
         *
         * @method execCommand
         */
        execCommand: function execCommand(data) {
            var editor = this.props.editor.get('nativeEditor');

            editor.execCommand(this.props.command, data);

            if (this.props.modifiesSelection) {
                editor.selectionChange(true);
            }

            editor.fire('actionPerformed', this);
        }
    };

    AlloyEditor.ButtonCommand = ButtonCommand;
})();
'use strict';

(function () {
    'use strict';

    /**
     * ButtonStateClasses is a mixin that decorates the domElement of a component
     * with different CSS classes based on the current state of the element.
     *
     * To check for state, the component can expose the following methods:
     * - `Function` **isActive** to check the active state
     * - `Function` **isDisabled** to check the disabled state
     *
     * @class ButtonStateClasses
     */
    var ButtonStateClasses = {
        /**
         * Returns the list of state classes associated to the current element's state, according
         * to the results of the isActive and isDisabled methods.
         *
         * @method getStateClasses
         * @return {String} A string with the state CSS classes.
         */
        getStateClasses: function getStateClasses() {
            var stateClasses = '';

            // Check for active state
            if (AlloyEditor.Lang.isFunction(this.isActive) && this.isActive()) {
                stateClasses += 'ae-button-pressed';
            }

            // Check for disabled state
            if (AlloyEditor.Lang.isFunction(this.isDisabled) && this.isDisabled()) {
                stateClasses += ' ae-button-disabled';
            }

            return stateClasses;
        }
    };

    AlloyEditor.ButtonStateClasses = ButtonStateClasses;
})();
'use strict';

(function () {
    'use strict';

    /**
     * ButtonStyle is a mixin that provides a style prop and some methods to apply the resulting
     * style and checking if it is present in a given path or selection.
     *
     * @class ButtonStyle
     */
    var ButtonStyle = {
        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The style the button should handle as described by http://docs.ckeditor.com/#!/api/CKEDITOR.style
             *
             * @property {Object} style
             */
            style: React.PropTypes.object
        },

        /**
         * Lifecycle. Invoked once, both on the client and server, immediately before the initial rendering occurs.
         *
         * @method componentWillMount
         */
        componentWillMount: function componentWillMount() {
            this._style = new CKEDITOR.style(this.props.style);
        },

        /**
         * Lifecycle. Invoked immediately before a component is unmounted from the DOM.
         *
         * @method componentWillUnmount
         */
        componentWillUnmount: function componentWillUnmount() {
            this._style = null;
        },

        /**
         * Returns instance of CKEDITOR.style which represents the current button style.
         *
         * @method getStyle
         * @return {CKEDITOR.style} The current style representation.
         */
        getStyle: function getStyle() {
            return this._style;
        },

        /**
         * Checks if style is active in the current selection.
         *
         * @method isActive
         * @return {Boolean} True if style is active, false otherwise.
         */
        isActive: function isActive() {
            var result;

            var editor = this.props.editor.get('nativeEditor');

            var elementPath = editor.elementPath();

            result = this.getStyle().checkActive(elementPath, editor);

            return result;
        }
    };

    AlloyEditor.ButtonStyle = ButtonStyle;
})();
'use strict';

(function () {
    'use strict';

    /**
     * ToolbarButtons is a mixin which provides a list of buttons which have to be
     * displayed on the current toolbar depending on user preferences and given state.
     *
     * @class ToolbarButtons
     */
    var ToolbarButtons = {
        /**
         * Analyzes the current selection and the buttons exclusive mode value to figure out which
         * buttons should be present in a given state.
         *
         * @method getToolbarButtons
         * @param {Array} buttons The buttons could be shown, prior to the state filtering.
         * @param {Object} additionalProps Additional props that should be passed down to the buttons.
         * @return {Array} An Array which contains the buttons that should be rendered.
         */
        getToolbarButtons: function getToolbarButtons(buttons, additionalProps) {
            var buttonProps = {};

            var toolbarButtons = this.filterExclusive(buttons.filter(function (button) {
                return button && (AlloyEditor.Buttons[button] || AlloyEditor.Buttons[button.name]);
            }).map(function (button) {
                if (AlloyEditor.Lang.isString(button)) {
                    button = AlloyEditor.Buttons[button];
                } else if (AlloyEditor.Lang.isString(button.name)) {
                    buttonProps[AlloyEditor.Buttons[button.name].key] = button.cfg;
                    button = AlloyEditor.Buttons[button.name];
                }

                return button;
            })).map(function (button) {
                var props = this.mergeExclusiveProps({
                    editor: this.props.editor,
                    key: button.key,
                    tabKey: button.key,
                    tabIndex: this.props.trigger && this.props.trigger.props.tabKey === button.key ? 0 : -1,
                    trigger: this.props.trigger
                }, button.key);

                props = this.mergeDropdownProps(props, button.key);

                if (additionalProps) {
                    props = CKEDITOR.tools.merge(props, additionalProps, buttonProps[button.key]);
                }

                return React.createElement(button, props);
            }, this);

            return toolbarButtons;
        }
    };

    AlloyEditor.ToolbarButtons = ToolbarButtons;
})();
'use strict';

(function () {
    'use strict';

    /**
     * Provides functionality for displaying Widget Arrow box on top or on bottom of the widget
     * depending on the point of user interaction with the editor.
     *
     * @class WidgetArrowBox
     */
    var WidgetArrowBox = {
        /**
         * Returns the list of arrow box classes associated to the current element's state. It relies
         * on the getInteractionPoint method to calculate the selection direction.
         *
         * @method getArrowBoxClasses
         * @return {String} A string with the arrow box CSS classes.
         */
        getArrowBoxClasses: function getArrowBoxClasses() {
            var arrowBoxClasses = 'ae-arrow-box';

            if (AlloyEditor.Lang.isFunction(this.getInteractionPoint) && this.getInteractionPoint()) {
                if (this.getInteractionPoint().direction === CKEDITOR.SELECTION_TOP_TO_BOTTOM) {
                    arrowBoxClasses += ' ae-arrow-box-top';
                } else {
                    arrowBoxClasses += ' ae-arrow-box-bottom';
                }
            }

            return arrowBoxClasses;
        }
    };

    AlloyEditor.WidgetArrowBox = WidgetArrowBox;
})();
'use strict';

(function () {
    'use strict';

    /**
     * Provides functionality for managing different dropdowns inside a widget.
     *
     * @class WidgetDropdown
     */
    var WidgetDropdown = {
        /**
         * Lifecycle. Invoked when a component is receiving new props.
         * This method is not called for the initial render.
         *
         * @method componentWillReceiveProps
         */
        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
            this.setState({
                dropdownTrigger: null,
                itemDropdown: null
            });
        },

        /**
         * Lifecycle. Invoked once before the component is mounted.
         *
         * @method getInitialState
         */
        getInitialState: function getInitialState() {
            return {
                dropdownTrigger: null,
                itemDropdown: null
            };
        },

        /**
         * Merges the provided object with two more properties:
         * - expanded - boolean flag which indicates if an widget should be rendered exclusively.
         * - toggleDropdown - function, which can be used by an widget in order to obtain exclusive state.
         *
         * @method mergeDropdownProps
         * @param {Object} obj The properties container which should be merged with the properties, related
         *    to dropdown state.
         * @param {Object} itemKey They key of an React Widget which contains the dropdown.
         * @return {Object} The merged object.
         */
        mergeDropdownProps: function mergeDropdownProps(obj, itemKey) {
            return CKEDITOR.tools.merge(obj, {
                expanded: this.state.itemDropdown === itemKey ? true : false,
                tabIndex: this.state.dropdownTrigger === itemKey ? 0 : -1,
                toggleDropdown: this.toggleDropdown.bind(this, itemKey)
            });
        },

        /**
         * Sets the active dropdown of the widget or discards the toggled item from the state.
         *
         * @method toggleDropdown
         * @param {Object} itemDropdown The widget which requests to toggle its dropdown.
         * @param {Number} toggleDirection User movement direction when toggled via keyboard.
         */
        toggleDropdown: function toggleDropdown(itemDropdown, toggleDirection) {
            this.setState({
                dropdownTrigger: itemDropdown,
                itemDropdown: itemDropdown !== this.state.itemDropdown ? itemDropdown : null
            }, function () {
                if (!this.state.itemDropdown) {
                    if (this.moveFocus) {
                        this.moveFocus(toggleDirection);
                    } else {
                        React.findDOMNode(this).focus();
                    }
                }
            });
        }
    };

    AlloyEditor.WidgetDropdown = WidgetDropdown;
})();
'use strict';

(function () {
    'use strict';

    /**
     * Provides functionality for managing exclusive state of an widget.
     * The exclusive state means that a button may request to be the only rendered
     * widget in its parent container. WidgetExclusive will manage this state by
     * filtering and suppressing the other sibling widgets from displaying.
     *
     * @class WidgetExclusive
     */
    var WidgetExclusive = {
        /**
         * Cancels the exclusive state of an widget.
         *
         * @method cancelExclusive
         * @param {Object} itemExclusive The widget which exclusive state should be canceled.
         */
        cancelExclusive: function cancelExclusive(itemExclusive) {
            if (this.state.itemExclusive === itemExclusive) {
                this.setState({
                    itemExclusive: null
                });
            }
        },

        /**
         * Lifecycle. Invoked when a component is receiving new props.
         * This method is not called for the initial render.
         * Calling this.setState() within this function will not trigger an additional render.
         *
         * @method componentWillReceiveProps
         * @param {Object} nextProps Object containing the current set of properties.
         */
        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
            // Receiving properties means that the component is being re-rendered.
            // Re-rendering is triggered by editorInteraction, so we have to
            // reset the exclusive state and render the UI according to the new selection.
            this.setState({
                itemExclusive: null
            });
        },

        /**
         * Filters the items and returns only those with exclusive state.
         *
         * @method filterExclusive
         * @param {Array} items The widgets to be filtered.
         * @return {Array|Object} The item with executive state.
         */
        filterExclusive: function filterExclusive(items) {
            return items.filter((function (item) {
                if (this.state.itemExclusive) {
                    if (this.state.itemExclusive === item.key) {
                        return item;
                    }
                } else {
                    return item;
                }
            }).bind(this));
        },

        /**
         * Merges the provided object with three more properties:
         * - cancelExclusive - function, which can be used by a widget in order to cancel executive state.
         * - renderExclusive - boolean flag which indicates if an widget should be rendered exclusively.
         * - requestExclusive - function, which can be used by a widget in order to obtain exclusive state.
         *
         * @method mergeExclusiveProps
         * @param {Object} obj The properties container which should be merged with the properties, related
         *    to exclusive state.
         * @param {Object} itemKey They key of an React Widget which should be rendered exclusively.
         * @return {Object} The merged object.
         */
        mergeExclusiveProps: function mergeExclusiveProps(obj, itemKey) {
            return CKEDITOR.tools.merge(obj, {
                cancelExclusive: this.cancelExclusive.bind(this, itemKey),
                renderExclusive: this.state.itemExclusive === itemKey,
                requestExclusive: this.requestExclusive.bind(this, itemKey)
            });
        },

        /**
         * Requests and sets exclusive state of an widget.
         *
         * @method requestExclusive
         * @param {Object} itemExclusive The widget which requests exclusive state.
         */
        requestExclusive: function requestExclusive(itemExclusive) {
            this.setState({
                itemExclusive: itemExclusive
            });
        }
    };

    AlloyEditor.WidgetExclusive = WidgetExclusive;
})();
'use strict';

(function () {
    'use strict';

    var DIRECTION_NONE = 0;
    var DIRECTION_NEXT = 1;
    var DIRECTION_PREV = -1;

    var ACTION_NONE = 0;
    var ACTION_MOVE_FOCUS = 1;
    var ACTION_DISMISS_FOCUS = 2;

    /**
     * WidgetFocusManager is a mixin that provides keyboard navigation inside a widget. To do this,
     * it exposes the following props and methods:
     *
     * @class WidgetFocusManager
     */
    var WidgetFocusManager = {
        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * Callback method to be invoked when the focus manager is to be dismissed. This happens
             * in the following scenarios if a dismiss callback has been specified:
             * - A dismiss key has been pressed
             * - In a non-circular focus manager, when:
             *     - The active descendant is the first one and a prev key has been pressed.
             *     - The active descendant is the last one and a next key has been pressed.
             *
             * @property {Function} onDismiss
             */
            onDismiss: React.PropTypes.func,

            /**
             * Indicates if focus should be set to the first/last descendant when the limits are reached.
             *
             * @property {boolean} circular
             */
            circular: React.PropTypes.bool.isRequired,

            /**
             * String representing the CSS selector used to define the elements that should be handled.
             *
             * @property {String} descendants
             */
            descendants: React.PropTypes.string.isRequired,

            /**
             * Object representing the keys used to navigate between descendants. The format for the prop is:
             * `{dismiss: value, dismissNext: value, dismissPrev: value, next: value, prev: value}` where
             * value can be both a number or an array of numbers with the allowed keyCodes.
             *
             * @property {Object} keys
             */
            keys: React.PropTypes.object.isRequired
        },

        /**
         * Lifecycle. Invoked once, only on the client, immediately after the initial rendering occurs.
         *
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            this._refresh();
        },

        /**
         * Lifecycle. Invoked immediately after the component's updates are flushed to the DOM.
         * Refreshes the descendants list.
         *
         * @method componentDidUpdate
         */
        componentDidUpdate: function componentDidUpdate() {
            this._refresh();
        },

        /**
         * Focuses the current active descendant.
         *
         * Several Widgets can be nested in a component hierarchy by attaching this focus method to
         * the widget DOM node, transferring the DOM focus control to the inner FocusManager.
         *
         * @method focus
         */
        focus: function focus(event) {
            if (!event || this._isValidTarget(event.target)) {
                if (this._descendants) {
                    this._descendants[this._activeDescendant].focus();

                    if (event) {
                        event.stopPropagation();
                        event.preventDefault();
                    }
                }
            }
        },

        /**
         * Handles the key events on a DOM node to execute the appropriate navigation when needed.
         *
         * @param {Object} event The Keyboard event that was detected on the widget DOM node.
         * @method handleKey
         */
        handleKey: function handleKey(event) {
            if (this._isValidTarget(event.target) && this._descendants) {
                var action = this._getFocusAction(event);

                if (action.type) {
                    event.stopPropagation();
                    event.preventDefault();

                    if (action.type === ACTION_MOVE_FOCUS) {
                        this._moveFocus(action.direction);
                    }

                    if (action.type === ACTION_DISMISS_FOCUS) {
                        this.props.onDismiss(action.direction);
                    }
                }
            }
        },

        /**
         * Moves the focus among descendants in the especified direction.
         *
         * @method moveFocus
         * @param {number} direction The direction (1 or -1) of the focus movement among descendants.
         */
        moveFocus: function moveFocus(direction) {
            direction = AlloyEditor.Lang.isNumber(direction) ? direction : 0;

            this._moveFocus(direction);
        },

        /**
         * Returns the action, if any, that a keyboard event in the current focus manager state
         * should produce.
         *
         * @protected
         * @method _getFocusAction
         * @param {object} event The Keyboard event.
         * @return {Object} An action object with type and direction properties.
         */
        _getFocusAction: function _getFocusAction(event) {
            var action = {
                type: ACTION_NONE
            };

            if (this.props.keys) {
                var direction = this._getFocusMoveDirection(event);

                if (direction) {
                    action.direction = direction;
                    action.type = ACTION_MOVE_FOCUS;
                }

                var dismissAction = this._getFocusDismissAction(event, direction);

                if (dismissAction.dismiss) {
                    action.direction = dismissAction.direction;
                    action.type = ACTION_DISMISS_FOCUS;
                }
            }

            return action;
        },

        /**
         * Returns the dismiss action, if any, the focus manager should execute to yield the focus. This
         * will happen in any of these scenarios if a dismiss callback has been specified:
         * - A dismiss key has been pressed
         * - In a non-circular focus manager, when:
         *     - The active descendant is the first one and a prev key has been pressed.
         *     - The active descendant is the last one and a next key has been pressed.
         *
         * @protected
         * @method _getFocusDismissAction
         * @param {Object} event The Keyboard event.
         * @param {Number} focusMoveDirection The focus movement direction (if any).
         * @return {Object} A dismiss action with dismiss and direction properties.
         */
        _getFocusDismissAction: function _getFocusDismissAction(event, focusMoveDirection) {
            var dismissAction = {
                direction: focusMoveDirection,
                dismiss: false
            };

            if (this.props.onDismiss) {
                if (this._isValidKey(event.keyCode, this.props.keys.dismiss)) {
                    dismissAction.dismiss = true;
                }
                if (this._isValidKey(event.keyCode, this.props.keys.dismissNext)) {
                    dismissAction.dismiss = true;
                    dismissAction.direction = DIRECTION_NEXT;
                }
                if (this._isValidKey(event.keyCode, this.props.keys.dismissPrev)) {
                    dismissAction.dismiss = true;
                    dismissAction.direction = DIRECTION_PREV;
                }

                if (!dismissAction.dismiss && !this.props.circular && focusMoveDirection) {
                    dismissAction.dismiss = focusMoveDirection === DIRECTION_PREV && this._activeDescendant === 0 || focusMoveDirection === DIRECTION_NEXT && this._activeDescendant === this._descendants.length - 1;
                }
            }

            return dismissAction;
        },

        /**
         * Returns the direction, if any, in which the focus should be moved. In presence of the
         * shift key modifier, the direction of the movement is inverted.
         *
         * @protected
         * @method _getFocusMoveDirection
         * @param {Object} event The Keyboard event.
         * @return {Number} The computed direction of the expected focus movement.
         */
        _getFocusMoveDirection: function _getFocusMoveDirection(event) {
            var direction = DIRECTION_NONE;

            if (this._isValidKey(event.keyCode, this.props.keys.next)) {
                direction = DIRECTION_NEXT;
            }
            if (this._isValidKey(event.keyCode, this.props.keys.prev)) {
                direction = DIRECTION_PREV;
            }

            if (event.shifKey) {
                direction *= -1;
            }

            return direction;
        },

        /**
         * Indicates if a given keyCode is valid for the given set of keys.
         *
         * @param {Number} keyCode An event keyCode.
         * @param {Array|Number} keys A key set. Can be a number an array of numbers representing the allowed keyCodes.
         *
         * @protected
         * @method _isValidKey
         * @return {Boolean} A boolean value indicating if the key is valid.
         */
        _isValidKey: function _isValidKey(keyCode, keys) {
            return AlloyEditor.Lang.isArray(keys) ? keys.indexOf(keyCode) !== -1 : keyCode === keys;
        },

        /**
         * Indicates if a given element is valid for focus management. User input elements such as
         * input, select or textarea are excluded.
         *
         * @protected
         * @method _isValidKey
         * @param {DOMNode} element A DOM element.
         * @return {Boolean} A boolean value indicating if the element is valid.
         */
        _isValidTarget: function _isValidTarget(element) {
            var tagName = element.tagName.toLowerCase();

            return tagName !== 'input' && tagName !== 'select' && tagName !== 'textarea';
        },

        /**
         * Moves the focus among descendants in the especified direction.
         *
         * @protected
         * @method _moveFocus
         * @param {number} direction The direction (1 or -1) of the focus movement among descendants.
         */
        _moveFocus: function _moveFocus(direction) {
            var numDescendants = this._descendants.length;

            var descendant = this._descendants[this._activeDescendant];

            descendant.setAttribute('tabIndex', -1);

            this._activeDescendant += direction;

            if (this.props.circular) {
                // Calculate proper modulo result since remainder operator doesn't behave in the
                // same way for negative numbers
                this._activeDescendant = (this._activeDescendant % numDescendants + numDescendants) % numDescendants;
            } else {
                this._activeDescendant = Math.max(Math.min(this._activeDescendant, numDescendants - 1), 0);
            }

            descendant = this._descendants[this._activeDescendant];

            descendant.setAttribute('tabIndex', 0);
            descendant.focus();
        },

        /**
         * Refreshes the descendants list by executing the CSS selector again and resets the descendants tabIndex.
         *
         * @protected
         * @method _refresh
         */
        _refresh: function _refresh() {
            var domNode = React.findDOMNode(this);

            if (domNode) {
                var descendants = domNode.querySelectorAll(this.props.descendants);

                this._descendants = Array.prototype.map.call(descendants, function (item) {
                    return item;
                }).sort(function (a, b) {
                    return AlloyEditor.Lang.toInt(a.getAttribute('data-tabindex')) > AlloyEditor.Lang.toInt(b.getAttribute('data-tabindex'));
                });

                this._activeDescendant = 0;

                this._descendants.some((function (item, index) {
                    if (item.getAttribute('tabindex') === '0') {
                        this._activeDescendant = index;
                        this.focus();

                        return true;
                    }
                }).bind(this));
            }
        }
    };

    AlloyEditor.WidgetFocusManager = WidgetFocusManager;
})();
'use strict';

(function () {
    'use strict';

    /**
     * Provides functionality for calculating the point of interaction of the user with the Editor.
     *
     * @class WidgetInteractionPoint
     */
    var WidgetInteractionPoint = {
        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The provided editor event.
             *
             * @property {SyntheticEvent} editorEvent
             */
            editorEvent: React.PropTypes.object
        },

        /**
         * Returns the position, in page coordinates, according to which a widget should appear.
         * Depending on the direction of the selection, the wdiget may appear above of or on bottom of the selection.
         *
         * It depends on the props editorEvent to analyze the following user-interaction parameters:
         * - {Object} selectionData The data about the selection in the editor as returned from
         * {{#crossLink "CKEDITOR.plugins.selectionregion/getSelectionData:method"}}{{/crossLink}}
         * - {Number} pos Contains the coordinates of the position, considered as most appropriate.
         * This may be the point where the user released the mouse, or just the beginning or the end of
         * the selection.
         *
         * @method getInteractionPoint
         * @return {Object} An Object which contains the following properties:
         * direction, x, y, where x and y are in page coordinates and direction can be one of these:
         * CKEDITOR.SELECTION_BOTTOM_TO_TOP or CKEDITOR.SELECTION_TOP_TO_BOTTOM
         */
        getInteractionPoint: function getInteractionPoint() {
            var eventPayload = this.props.editorEvent ? this.props.editorEvent.data : null;

            if (!eventPayload) {
                return;
            }

            var selectionData = eventPayload.selectionData;
            var pos = {
                x: eventPayload.nativeEvent.pageX,
                y: eventPayload.nativeEvent.pageY
            };

            var direction = selectionData.region.direction;

            var endRect = selectionData.region.endRect;
            var startRect = selectionData.region.startRect;

            if (endRect && startRect && startRect.top === endRect.top) {
                direction = CKEDITOR.SELECTION_BOTTOM_TO_TOP;
            }

            var x;
            var y;

            // If we have the point where user released the mouse, show Toolbar at this point
            // otherwise show it on the middle of the selection.
            if (pos.x && pos.y) {
                x = this._getXPoint(selectionData, pos.x);

                if (direction === CKEDITOR.SELECTION_BOTTOM_TO_TOP) {
                    y = Math.min(pos.y, selectionData.region.top);
                } else {
                    y = Math.max(pos.y, selectionData.region.bottom);
                }
            } else {
                x = selectionData.region.left + selectionData.region.width / 2;

                if (direction === CKEDITOR.SELECTION_TOP_TO_BOTTOM) {
                    y = selectionData.region.bottom;
                } else {
                    y = selectionData.region.top;
                }
            }

            return {
                direction: direction,
                x: x,
                y: y
            };
        },

        /**
         * Returns the position of the Widget.
         *
         * @protected
         * @method _getXPoint
         * @param {Object} selectionData The data about the selection in the editor as
         * returned from {{#crossLink "CKEDITOR.plugins.selectionregion/getSelectionData:method"}}{{/crossLink}}
         * @param {Object} eventX The X coordinate received from the native event (mouseup).
         * @return {Number} The calculated X point in page coordinates.
         */
        _getXPoint: function _getXPoint(selectionData, eventX) {
            var region = selectionData.region;

            var left = region.startRect ? region.startRect.left : region.left;
            var right = region.endRect ? region.endRect.right : region.right;

            var x;

            if (left < eventX && right > eventX) {
                x = eventX;
            } else {
                var leftDist = Math.abs(left - eventX);
                var rightDist = Math.abs(right - eventX);

                if (leftDist < rightDist) {
                    // user raised the mouse on left on the selection
                    x = left;
                } else {
                    x = right;
                }
            }

            return x;
        }
    };

    AlloyEditor.WidgetInteractionPoint = WidgetInteractionPoint;
})();
'use strict';

(function () {
    'use strict';

    /**
     * Calculates the position where an Widget should be displayed based on the point
     * where user interacted with the editor.
     *
     * @uses WidgetInteractionPoint
     *
     * @class WidgetPosition
     */
    var WidgetPosition = {
        mixins: [AlloyEditor.WidgetInteractionPoint],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The gutter (vertical and horizontal) between the interaction point and where the widget
             * should be rendered.
             *
             * @property {Object} gutter
             */
            gutter: React.PropTypes.object
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         */
        getDefaultProps: function getDefaultProps() {
            return {
                gutter: {
                    left: 0,
                    top: 10
                }
            };
        },

        /**
         * Cancels an scheduled animation frame.
         *
         * @method cancelAnimation
         */
        cancelAnimation: function cancelAnimation() {
            if (window.cancelAnimationFrame) {
                window.cancelAnimationFrame(this._animationFrameId);
            }
        },

        /**
         * Returns the position of the Widget taking in consideration the
         * {{#crossLink "WidgetPosition/gutter:attribute"}}{{/crossLink}} attribute.
         *
         * @protected
         * @method  getWidgetXYPoint
         * @param {Number} left The left offset in page coordinates where Toolbar should be shown.
         * @param {Number} top The top offset in page coordinates where Toolbar should be shown.
         * @param {Number} direction The direction of the selection. May be one of the following:
         * CKEDITOR.SELECTION_BOTTOM_TO_TOP or CKEDITOR.SELECTION_TOP_TO_BOTTOM
         * @return {Array} An Array with left and top offsets in page coordinates.
         */
        getWidgetXYPoint: function getWidgetXYPoint(left, top, direction) {
            var domNode = React.findDOMNode(this);

            var gutter = this.props.gutter;

            if (direction === CKEDITOR.SELECTION_TOP_TO_BOTTOM || direction === CKEDITOR.SELECTION_BOTTOM_TO_TOP) {
                left = left - gutter.left - domNode.offsetWidth / 2;

                top = direction === CKEDITOR.SELECTION_TOP_TO_BOTTOM ? top + gutter.top : top - domNode.offsetHeight - gutter.top;
            } else if (direction === CKEDITOR.SELECTION_LEFT_TO_RIGHT || direction === CKEDITOR.SELECTION_RIGHT_TO_LEFT) {

                left = direction === CKEDITOR.SELECTION_LEFT_TO_RIGHT ? left + gutter.left + domNode.offsetHeight / 2 : left - 3 * domNode.offsetHeight / 2 - gutter.left;

                top = top - gutter.top - domNode.offsetHeight / 2;
            }

            if (left < 0) {
                left = 0;
            }

            if (top < 0) {
                top = 0;
            }

            return [left, top];
        },

        /**
         * Returns true if the widget is visible, false otherwise
         *
         * @method isVisible
         * @return {Boolean} True if the widget is visible, false otherwise
         */
        isVisible: function isVisible() {
            var domNode = this.getDOMNode();

            if (domNode) {
                var domElement = new CKEDITOR.dom.element(domNode);

                return domElement.hasClass('alloy-editor-visible');
            }

            return false;
        },

        /**
         * Moves a widget from a starting point to a destination point.
         *
         * @method moveToPoint
         * @param  {Object} startPoint The starting point for the movement.
         * @param  {Object} endPoint The destination point for the movement.
         */
        moveToPoint: function moveToPoint(startPoint, endPoint) {
            var domElement = new CKEDITOR.dom.element(this.getDOMNode());

            domElement.setStyles({
                left: startPoint[0] + 'px',
                top: startPoint[1] + 'px',
                opacity: 0
            });

            domElement.removeClass('alloy-editor-invisible');

            this._animate(function () {
                domElement.addClass('ae-toolbar-transition alloy-editor-visible');
                domElement.setStyles({
                    left: endPoint[0],
                    top: endPoint[1],
                    opacity: 1
                });
            });
        },

        /**
         * Shows the widget with the default animation transition.
         *
         * @method show
         */
        show: function show() {
            var domNode = React.findDOMNode(this);

            if (!this.isVisible() && domNode) {
                var interactionPoint = this.getInteractionPoint();

                if (interactionPoint) {
                    var domElement = new CKEDITOR.dom.element(domNode);

                    var finalX, finalY, initialX, initialY;

                    finalX = initialX = domElement.getStyle('left');
                    finalY = initialY = domElement.getStyle('top');

                    if (interactionPoint.direction === CKEDITOR.SELECTION_TOP_TO_BOTTOM) {
                        initialY = this.props.selectionData.region.bottom;
                    } else {
                        initialY = this.props.selectionData.region.top;
                    }

                    this.moveToPoint([initialX, initialY], [finalX, finalY]);
                }
            }
        },

        /**
         * Updates the widget position based on the current interaction point.
         *
         * @method updatePosition
         */
        updatePosition: function updatePosition() {
            var interactionPoint = this.getInteractionPoint();

            var domNode = React.findDOMNode(this);

            if (interactionPoint && domNode) {
                var xy = this.getWidgetXYPoint(interactionPoint.x, interactionPoint.y, interactionPoint.direction);

                var domElement = new CKEDITOR.dom.element(domNode);

                domElement.setStyles({
                    left: xy[0] + 'px',
                    top: xy[1] + 'px'
                });
            }
        },

        /**
         * Requests an animation frame, if possible, to simulate an animation.
         *
         * @protected
         * @method _animate
         * @param {Function} callback The function to be executed on the scheduled frame.
         */
        _animate: function _animate(callback) {
            if (window.requestAnimationFrame) {
                this._animationFrameId = window.requestAnimationFrame(callback);
            } else {
                callback();
            }
        }
    };

    AlloyEditor.WidgetPosition = WidgetPosition;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonBold class provides functionality for styling an selection with strong (bold) style.
     *
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonBold
     */
    var ButtonBold = React.createClass({
        displayName: 'ButtonBold',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default bold
             */
            key: 'bold'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'bold',
                style: {
                    element: 'strong'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.bold, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-bold', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.bold },
                React.createElement('span', { className: 'ae-icon-bold' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonBold.key] = AlloyEditor.ButtonBold = ButtonBold;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonCameraImage class takes photo from camera and inserts it to the content.
     *
     * @class ButtonCameraImage
     */
    var ButtonCameraImage = React.createClass({
        displayName: 'ButtonCameraImage',

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default cameraImage
             */
            key: 'cameraImage'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         */
        getDefaultProps: function getDefaultProps() {
            return {
                videoWidth: 320
            };
        },

        /**
         * Lifecycle. Invoked once, only on the client, immediately after the initial rendering occurs.
         *
         * Focuses the take photo button.
         *
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            React.findDOMNode(this.refs.buttonTakePhoto).focus();
        },

        /**
         * Lifecycle. Invoked immediately before a component is unmounted from the DOM.
         *
         * @method componentWillUnmount
         */
        componentWillUnmount: function componentWillUnmount() {
            if (this._stream) {
                this._stream.stop();
                this._stream = null;
            }
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

            getUserMedia.call(navigator, {
                video: true,
                audio: false
            }, this._handleStreamSuccess, this._handleStreamError);

            return React.createElement(
                'div',
                { className: 'ae-camera' },
                React.createElement(
                    'video',
                    { ref: 'videoContainer' },
                    'Video stream not available.'
                ),
                React.createElement(
                    'button',
                    { className: 'ae-camera-shoot', onClick: this.takePhoto, ref: 'buttonTakePhoto' },
                    'Take photo'
                ),
                React.createElement('canvas', { className: 'ae-camera-canvas', ref: 'canvasContainer' })
            );
        },

        /**
         * Takes photo from the video stream and inserts in into editor's content.
         *
         * @method takePhoto
         */
        takePhoto: function takePhoto() {
            var videoEl = React.findDOMNode(this.refs.videoContainer);
            var canvasEl = React.findDOMNode(this.refs.canvasContainer);

            var context = canvasEl.getContext('2d');

            var height = this._videoHeight;
            var width = this.props.videoWidth;

            if (width && height) {
                canvasEl.width = width;
                canvasEl.height = height;

                context.drawImage(videoEl, 0, 0, width, height);

                var imgURL = canvasEl.toDataURL('image/png');

                var el = CKEDITOR.dom.element.createFromHtml('<img src="' + imgURL + '">');

                var editor = this.props.editor.get('nativeEditor');

                editor.insertElement(el);

                this.props.cancelExclusive();

                editor.fire('actionPerformed', this);

                editor.fire('imageCameraAdd', el);
            }
        },

        /**
         * Displays error message in case of video stream capturing failure.
         *
         * @protected
         * @method _handleStreamError
         * @param {Event} error The fired event in case of error.
         */
        _handleStreamError: function _handleStreamError(error) {
            window.alert('An error occurred! ' + error);
        },

        /**
         * Starts streaming video in the video element and sets width/height to the video
         * and canvas elements.
         *
         * @method _handleStreamSuccess
         * @param {Object} stream The video stream
         */
        _handleStreamSuccess: function _handleStreamSuccess(stream) {
            var videoEl = React.findDOMNode(this.refs.videoContainer);
            var canvasEl = React.findDOMNode(this.refs.canvasContainer);

            videoEl.addEventListener('canplay', (function (event) {
                var height = videoEl.videoHeight / (videoEl.videoWidth / this.props.videoWidth);

                if (isNaN(height)) {
                    height = this.props.videoWidth / (4 / 3);
                }

                videoEl.setAttribute('width', this.props.videoWidth);
                videoEl.setAttribute('height', height);
                canvasEl.setAttribute('width', this.props.videoWidth);
                canvasEl.setAttribute('height', height);

                this._videoHeight = height;
            }).bind(this), false);

            this._stream = stream;

            if (navigator.mozGetUserMedia) {
                videoEl.mozSrcObject = stream;
            } else {
                videoEl.src = (window.URL || window.webkitURL).createObjectURL(stream);
            }

            videoEl.play();

            React.findDOMNode(this.refs.buttonTakePhoto).disabled = false;
        }

        /**
         * Fired when an image is being taken from the camera and added as an element to the editor.
         *
         * @event imageCameraAdd
         * @param {CKEDITOR.dom.element} el The created img element in editor.
         */
    });

    AlloyEditor.ButtonCameraImage = ButtonCameraImage;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonCamera class renders in two different ways:
     *
     * - Normal: Just a button that allows to switch to the edition mode.
     * - Exclusive: Renders ButtonCameraImage in order to take photo from the camera.
     *
     * @class ButtonCamera
     */
    var ButtonCamera = React.createClass({
        displayName: 'ButtonCamera',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default camera
             */
            key: 'camera'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            if (this.props.renderExclusive) {
                return React.createElement(AlloyEditor.ButtonCameraImage, this.props);
            } else {
                var disabled = !(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

                return React.createElement(
                    'button',
                    { 'aria-label': AlloyEditor.Strings.camera, className: 'ae-button', 'data-type': 'button-image-camera', disabled: disabled, onClick: this.props.requestExclusive.bind(ButtonCamera.key), tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.camera },
                    React.createElement('span', { className: 'ae-icon-camera' })
                );
            }
        }
    });

    AlloyEditor.Buttons[ButtonCamera.key] = AlloyEditor.ButtonCamera = ButtonCamera;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonCode class provides wraps a selection in `pre` element.
     *
     * @uses ButtonActionStyle
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonCode
     */
    var ButtonCode = React.createClass({
        displayName: 'ButtonCode',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default code
             */
            key: 'code'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                style: {
                    element: 'pre'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.code, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-code', onClick: this.applyStyle, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.code },
                React.createElement('span', { className: 'ae-icon-code' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonCode.key] = AlloyEditor.ButtonCode = ButtonCode;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonCommandListItem class is a UI class that renders a ButtonCommand that can be used inside
     * a list as an item, with a string representation of its behaviour.
     *
     * @uses ButtonCommand
     *
     * @class ButtonCommandListItem
     */
    var ButtonCommandListItem = React.createClass({
        displayName: 'ButtonCommandListItem',

        mixins: [AlloyEditor.ButtonCommand],

        propTypes: {
            /**
             * The command label or description to render in the list entry.
             *
             * @property {String} description
             */
            description: React.PropTypes.string.isRequired,

            /**
             * The command icon to render in the list entry.
             *
             * @property {String} icon
             */
            icon: React.PropTypes.string
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default buttonCommandListItem
             */
            key: 'buttonCommandListItem'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            return React.createElement(
                'button',
                { 'aria-label': this.props.description, className: this._getClassName(), onClick: this.execCommand, tabIndex: this.props.tabIndex },
                this.props.description
            );
        },

        /**
         * Returns the class name of Widget.
         *
         * @method _getClassName
         * @return {String} The class name of the Widget.
         */
        _getClassName: function _getClassName() {
            var className = 'ae-toolbar-element';

            if (this.props.icon) {
                className += ' ae-icon-' + this.props.icon;
            }

            return className;
        }
    });

    AlloyEditor.ButtonCommandListItem = ButtonCommandListItem;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonCommandsList class provides functionality for showing a list of commands that can be
     * executed to the current selection..
     *
     * @uses WidgetFocusManager
     *
     * @class ButtonCommandsList
     */
    var ButtonCommandsList = React.createClass({
        displayName: 'ButtonCommandsList',

        mixins: [AlloyEditor.WidgetFocusManager],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * List of the commands the button is able to handle.
             *
             * @property {Array} commands
             */
            commands: React.PropTypes.arrayOf(React.PropTypes.object),

            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * List id to be used for accessibility purposes such as aria-owns.
             *
             * @property {String} listId
             */
            listId: React.PropTypes.string
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default buttonCommandsList
             */
            key: 'buttonCommandsList'
        },

        /**
         * Lifecycle. Invoked once, only on the client, immediately after the initial rendering occurs.
         *
         * Focuses on the list node to allow keyboard interaction.
         *
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            React.findDOMNode(this).focus();
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                circular: false,
                descendants: '.ae-toolbar-element',
                keys: {
                    dismiss: [27],
                    dismissNext: [39],
                    dismissPrev: [37],
                    next: [40],
                    prev: [38]
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the list.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            return React.createElement(
                'div',
                { className: 'ae-dropdown', onFocus: this.focus, onKeyDown: this.handleKey, tabIndex: '0' },
                React.createElement(
                    'ul',
                    { className: 'ae-listbox', id: this.props.listId, role: 'listbox' },
                    this._renderActions(this.props.commands)
                )
            );
        },

        /**
         * Renders instances of ButtonCommandListItem with the description of the row action that will be executed.
         *
         * @protected
         * @method _renderActions
         * @return {Array} Rendered instances of ButtonCommandListItem class
         */
        _renderActions: function _renderActions(commands) {
            var editor = this.props.editor;
            var items;

            if (commands && commands.length) {
                items = commands.map(function (item) {
                    return React.createElement(
                        'li',
                        { key: item.command, role: 'option' },
                        React.createElement(AlloyEditor.ButtonCommandListItem, { command: item.command, description: typeof item.label === 'string' ? item.label : item.label(), editor: editor })
                    );
                });
            }

            return items;
        }
    });

    AlloyEditor.ButtonCommandsList = ButtonCommandsList;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonH1 class provides wraps a selection in `h1` element.
     *
     * @uses ButtonActionStyle
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonH1
     */
    var ButtonH1 = React.createClass({
        displayName: 'ButtonH1',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default h1
             */
            key: 'h1'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                style: {
                    element: 'h1'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.h1, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-h1', onClick: this.applyStyle, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.h1 },
                React.createElement('span', { className: 'ae-icon-h1' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonH1.key] = AlloyEditor.ButtonH1 = ButtonH1;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonH2 class provides wraps a selection in `h2` element.
     *
     * @uses ButtonActionStyle
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonH2
     */
    var ButtonH2 = React.createClass({
        displayName: 'ButtonH2',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default h2
             */
            key: 'h2'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                style: {
                    element: 'h2'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.h2, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-h2', onClick: this.applyStyle, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.h2 },
                React.createElement('span', { className: 'ae-icon-h2' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonH2.key] = AlloyEditor.ButtonH2 = ButtonH2;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonHline class provides inserts horizontal line.
     *
     * @uses ButtonCommand
     * @uses ButtonStyle
     *
     * @class ButtonHline
     */
    var ButtonHline = React.createClass({
        displayName: 'ButtonHline',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default hline
             */
            key: 'hline'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'horizontalrule',
                style: {
                    element: 'hr'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.horizontalrule, className: 'ae-button', 'data-type': 'button-hline', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.horizontalrule },
                React.createElement('span', { className: 'ae-icon-separator' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonHline.key] = AlloyEditor.ButtonHline = ButtonHline;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonImageAlignLeft class provides functionality for aligning an image on left.
     *
     * @uses ButtonActionStyle
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonImageAlignLeft
     */
    var ButtonImageAlignLeft = React.createClass({
        displayName: 'ButtonImageAlignLeft',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default imageLeft
             */
            key: 'imageLeft'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                style: {
                    element: 'img',
                    styles: {
                        'float': 'left'
                    }
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.alignLeft, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-image-align-left', onClick: this.applyStyle, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.alignLeft },
                React.createElement('span', { className: 'ae-icon-align-left' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonImageAlignLeft.key] = AlloyEditor.ButtonImageAlignLeft = ButtonImageAlignLeft;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonImageAlignRight class provides functionality for aligning an image on right.
     *
     * @uses ButtonActionStyle
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonImageAlignRight
     */
    var ButtonImageAlignRight = React.createClass({
        displayName: 'ButtonImageAlignRight',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default imageRight
             */
            key: 'imageRight'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                style: {
                    element: 'img',
                    styles: {
                        'float': 'right'
                    }
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.alignRight, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-image-align-right', onClick: this.applyStyle, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.alignRight },
                React.createElement('span', { className: 'ae-icon-align-right' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonImageAlignRight.key] = AlloyEditor.ButtonImageAlignRight = ButtonImageAlignRight;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonImage class inserts an image to the content.
     *
     * @class ButtonImage
     */
    var ButtonImage = React.createClass({
        displayName: 'ButtonImage',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default image
             */
            key: 'image'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var inputSyle = { display: 'none' };

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { 'aria-label': AlloyEditor.Strings.image, className: 'ae-button', 'data-type': 'button-image', onClick: this.handleClick, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.image },
                    React.createElement('span', { className: 'ae-icon-image' })
                ),
                React.createElement('input', { onChange: this._onInputChange, ref: 'fileInput', style: inputSyle, type: 'file' })
            );
        },

        /**
         * Simulates click on the input element. This will open browser's native file open dialog.
         *
         * @method handleClick
         * @param {SyntheticEvent} event The received click event on the button.
         */
        handleClick: function handleClick(event) {
            CKEDITOR.tools.simulate(React.findDOMNode(this.refs.fileInput), 'click');
        },

        /**
         * On input change, reads the chosen file and creates an img element with src the image data as Data URI.
         * Then, fires an {{#crossLink "ButtonImage/imageAdd:event"}}{{/crossLink}} via CKEditor's
         * message system. The passed params will be:
         * - `el` - the created img element
         * - `file` - the original image file from the input element
         *
         * @protected
         * @method _onInputChange
         */
        _onInputChange: function _onInputChange() {
            var reader = new FileReader();
            var inputEl = React.findDOMNode(this.refs.fileInput);

            reader.onload = (function (event) {
                var editor = this.props.editor.get('nativeEditor');

                var el = CKEDITOR.dom.element.createFromHtml('<img src="' + event.target.result + '">');

                editor.insertElement(el);

                editor.fire('actionPerformed', this);

                var imageData = {
                    el: el,
                    file: inputEl.files[0]
                };

                editor.fire('imageAdd', imageData);
            }).bind(this);

            reader.readAsDataURL(inputEl.files[0]);

            inputEl.value = '';
        }

        /**
         * Fired when an image file is added as an element to the editor.
         *
         * @event imageAdd
         * @param {CKEDITOR.dom.element} el The created image with src as Data URI.
         */
    });

    AlloyEditor.Buttons[ButtonImage.key] = AlloyEditor.ButtonImage = ButtonImage;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonItalic class provides functionality for styling an selection with italic (em) style.
     *
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonItalic
     */
    var ButtonItalic = React.createClass({
        displayName: 'ButtonItalic',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default italic
             */
            key: 'italic'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'italic',
                style: {
                    element: 'em'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.italic, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-italic', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.italic },
                React.createElement('span', { className: 'ae-icon-italic' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonItalic.key] = AlloyEditor.ButtonItalic = ButtonItalic;
})();
'use strict';

(function () {
    'use strict';

    var KEY_ENTER = 13;
    var KEY_ESC = 27;

    /**
     * The ButtonEditLink class provides functionality for creating and editing a link in a document.
     * Provides UI for creating, editing and removing a link.
     *
     * @class ButtonLinkEdit
     */
    var ButtonLinkEdit = React.createClass({
        displayName: 'ButtonLinkEdit',

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default linkEdit
             */
            key: 'linkEdit'
        },

        /**
         * Lifecycle. Invoked once, only on the client, immediately after the initial rendering occurs.
         *
         * Focuses on the link input to immediately allow editing.
         *
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            // We need to wait for the next rendering cycle before focusing to avoid undesired
            // scrolls on the page
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(this._focusLinkInput);
            } else {
                setTimeout(this._focusLinkInput, 0);
            }
        },

        /**
         * Lifecycle. Invoked once before the component is mounted.
         * The return value will be used as the initial value of this.state.
         *
         * @method getInitialState
         */
        getInitialState: function getInitialState() {
            var link = new CKEDITOR.Link(this.props.editor.get('nativeEditor')).getFromSelection();
            var href = link ? link.getAttribute('href') : '';

            return {
                element: link,
                linkHref: href
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var clearLinkStyle = {
                opacity: this.state.linkHref ? 1 : 0
            };

            return React.createElement(
                'div',
                { className: 'ae-container-edit-link' },
                React.createElement(
                    'button',
                    { 'aria-label': AlloyEditor.Strings.removeLink, className: 'ae-button', disabled: !this.state.element, onClick: this._removeLink, title: AlloyEditor.Strings.remove },
                    React.createElement('span', { className: 'ae-icon-unlink' })
                ),
                React.createElement(
                    'div',
                    { className: 'ae-container-input' },
                    React.createElement('input', { className: 'ae-input', onChange: this._handleLinkChange, onKeyDown: this._handleKeyDown, placeholder: AlloyEditor.Strings.editLink, ref: 'linkInput', type: 'text', value: this.state.linkHref }),
                    React.createElement('button', { 'aria-label': AlloyEditor.Strings.clearInput, className: 'ae-button ae-icon-remove', onClick: this._clearLink, style: clearLinkStyle, title: AlloyEditor.Strings.clear })
                ),
                React.createElement(
                    'button',
                    { 'aria-label': AlloyEditor.Strings.confirm, className: 'ae-button', disabled: !this.state.linkHref, onClick: this._updateLink, title: AlloyEditor.Strings.confirm },
                    React.createElement('span', { className: 'ae-icon-ok' })
                )
            );
        },

        /**
         * Clears the link input. This only changes the component internal state, but does not
         * affect the link element of the editor. Only the _removeLink and _updateLink methods
         * are translated to the editor element.
         *
         * @protected
         * @method _clearLink
         */
        _clearLink: function _clearLink() {
            this.setState({
                linkHref: ''
            });
        },

        /**
         * Focuses the user cursor on the widget's input.
         *
         * @protected
         * @method _focusLinkInput
         */
        _focusLinkInput: function _focusLinkInput() {
            React.findDOMNode(this.refs.linkInput).focus();
        },

        /**
         * Monitors key interaction inside the input element to respond to the keys:
         * - Enter: Creates/updates the link.
         * - Escape: Discards the changes.
         *
         * @protected
         * @method _handleKeyDown
         * @param {SyntheticEvent} event The keyboard event.
         */
        _handleKeyDown: function _handleKeyDown(event) {
            if (event.keyCode === KEY_ENTER || event.keyCode === KEY_ESC) {
                event.preventDefault();
            }

            if (event.keyCode === KEY_ENTER) {
                this._updateLink();
            } else if (event.keyCode === KEY_ESC) {
                this.props.cancelExclusive();

                this.props.editor.get('nativeEditor').focus();
            }
        },

        /**
         * Updates the component state when the link input changes on user interaction.
         *
         * @protected
         * @method _handleLinkChange
         * @param {SyntheticEvent} event The change event.
         */
        _handleLinkChange: function _handleLinkChange(event) {
            this.setState({
                linkHref: event.target.value
            });
        },

        /**
         * Removes the link in the editor element.
         *
         * @protected
         * @method _removeLink
         */
        _removeLink: function _removeLink() {
            var editor = this.props.editor.get('nativeEditor');
            var linkUtils = new CKEDITOR.Link(editor);
            var selection = editor.getSelection();
            var bookmarks = selection.createBookmarks();

            linkUtils.remove(this.state.element);

            selection.selectBookmarks(bookmarks);

            // We need to cancelExclusive with the bound parameters in case the button is used
            // inside another in exclusive mode (such is the case of the link button)
            this.props.cancelExclusive();

            editor.fire('actionPerformed', this);
        },

        /**
         * Updates the link in the editor element. If the element didn't exist previously, it will
         * create a new <a> element with the href specified in the link input.
         *
         * @protected
         * @method _updateLink
         */
        _updateLink: function _updateLink() {
            var editor = this.props.editor.get('nativeEditor');
            var linkUtils = new CKEDITOR.Link(editor);

            if (this.state.linkHref) {
                if (this.state.element) {
                    linkUtils.update(this.state.linkHref, this.state.element);
                } else {
                    linkUtils.create(this.state.linkHref);
                }

                editor.fire('actionPerformed', this);
            }

            // We need to cancelExclusive with the bound parameters in case the button is used
            // inside another in exclusive mode (such is the case of the link button)
            this.props.cancelExclusive();
        }
    });

    AlloyEditor.Buttons[ButtonLinkEdit.key] = AlloyEditor.ButtonLinkEdit = ButtonLinkEdit;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonLink class provides functionality for creating and editing a link in a document. ButtonLink
     * renders in two different modes:
     *
     * - Normal: Just a button that allows to switch to the edition mode
     * - Exclusive: The ButtonLinkEdit UI with all the link edition controls.
     *
     * @uses ButtonStateClasses
     *
     * @class ButtonLink
     */
    var ButtonLink = React.createClass({
        displayName: 'ButtonLink',

        mixins: [AlloyEditor.ButtonStateClasses],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default link
             */
            key: 'link'
        },

        /**
         * Checks if the current selection is contained within a link.
         *
         * @method isActive
         * @return {Boolean} True if the selection is inside a link, false otherwise.
         */
        isActive: function isActive() {
            return new CKEDITOR.Link(this.props.editor.get('nativeEditor')).getFromSelection() !== null;
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            if (this.props.renderExclusive) {
                return React.createElement(AlloyEditor.ButtonLinkEdit, this.props);
            } else {
                return React.createElement(
                    'button',
                    { 'aria-label': AlloyEditor.Strings.link, className: cssClass, 'data-type': 'button-link', onClick: this.props.requestExclusive.bind(ButtonLink.key), tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.link },
                    React.createElement('span', { className: 'ae-icon-link' })
                );
            }
        }
    });

    AlloyEditor.Buttons[ButtonLink.key] = AlloyEditor.ButtonLink = ButtonLink;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonOrderedList class provides functionality for creating ordered lists in an editor.
     *
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonOrderedList
     */
    var ButtonOrderedList = React.createClass({
        displayName: 'ButtonOrderedList',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default ol
             */
            key: 'ol'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'numberedlist',
                style: {
                    element: 'ol'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.numberedlist, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-ol', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.numberedlist },
                React.createElement('span', { className: 'ae-icon-numbered-list' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonOrderedList.key] = AlloyEditor.ButtonOrderedList = ButtonOrderedList;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonParagraphAlignLeft class provides functionality for aligning a paragraph on left.
     *
     * @uses ButtonActionStyle
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonParagraphAlignLeft
     */
    var ButtonParagraphAlignLeft = React.createClass({
        displayName: 'ButtonParagraphAlignLeft',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default paragraphLeft
             */
            key: 'paragraphLeft'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                style: {
                    element: 'p',
                    styles: {
                        'text-align': 'left'
                    }
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.alignLeft, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-paragraph-align-left', onClick: this.applyStyle, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.alignLeft },
                React.createElement('span', { className: 'ae-icon-align-left' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonParagraphAlignLeft.key] = AlloyEditor.ButtonParagraphAlignLeft = ButtonParagraphAlignLeft;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonParagraphAlignRight class provides functionality for aligning a paragraph on right.
     *
     * @uses ButtonActionStyle
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonParagraphAlignRight
     */
    var ButtonParagraphAlignRight = React.createClass({
        displayName: 'ButtonParagraphAlignRight',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default paragraphRight
             */
            key: 'paragraphRight'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                style: {
                    element: 'p',
                    styles: {
                        'text-align': 'right'
                    }
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.alignRight, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-paragraph-align-right', onClick: this.applyStyle, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.alignRight },
                React.createElement('span', { className: 'ae-icon-align-right' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonParagraphAlignRight.key] = AlloyEditor.ButtonParagraphAlignRight = ButtonParagraphAlignRight;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonParagraphCenter class provides functionality for centering a paragraph.
     *
     * @uses ButtonActionStyle
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonParagraphCenter
     */
    var ButtonParagraphCenter = React.createClass({
        displayName: 'ButtonParagraphCenter',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default paragraphCenter
             */
            key: 'paragraphCenter'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                style: {
                    element: 'p',
                    styles: {
                        'text-align': 'center'
                    }
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.alignCenter, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-paragraph-center', onClick: this.applyStyle, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.alignCenter },
                React.createElement('span', { className: 'ae-icon-align-center' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonParagraphCenter.key] = AlloyEditor.ButtonParagraphCenter = ButtonParagraphCenter;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonParagraphJustify class provides functionality for justfying a paragraph.
     *
     * @uses ButtonActionStyle
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonParagraphJustify
     */
    var ButtonParagraphJustify = React.createClass({
        displayName: 'ButtonParagraphJustify',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default paragraphJustify
             */
            key: 'paragraphJustify'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                style: {
                    element: 'p',
                    styles: {
                        'text-align': 'justify'
                    }
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.alignJustify, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-paragraph-justify', onClick: this.applyStyle, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.alignJustify },
                React.createElement('span', { className: 'ae-icon-align-justified' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonParagraphJustify.key] = AlloyEditor.ButtonParagraphJustify = ButtonParagraphJustify;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonQuote class wraps a selection in `blockquote` element.
     *
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonQuote
     */
    var ButtonQuote = React.createClass({
        displayName: 'ButtonQuote',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default quote
             */
            key: 'quote'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'blockquote',
                style: {
                    element: 'blockquote'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.quote, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-quote', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.quote },
                React.createElement('span', { className: 'ae-icon-quote' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonQuote.key] = AlloyEditor.ButtonQuote = ButtonQuote;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonRemoveFormat class removes style formatting.
     *
     * @uses ButtonCommand
     *
     * @class ButtonRemoveFormat
     */
    var ButtonRemoveFormat = React.createClass({
        displayName: 'ButtonRemoveFormat',

        mixins: [AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default removeFormat
             */
            key: 'removeFormat'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'removeFormat'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.removeformat, className: 'ae-button', 'data-type': 'button-removeformat', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.removeformat },
                React.createElement('span', { className: 'ae-icon-removeformat' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonRemoveFormat.key] = AlloyEditor.ButtonRemoveFormat = ButtonRemoveFormat;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonStrike class styles a selection with strike style.
     *
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonStrike
     */
    var ButtonStrike = React.createClass({
        displayName: 'ButtonStrike',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default strike
             */
            key: 'strike'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'strike',
                style: {
                    element: 's'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.strike, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-strike', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.strike },
                React.createElement('span', { className: 'ae-icon-strike' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonStrike.key] = AlloyEditor.ButtonStrike = ButtonStrike;
})();
"use strict";

(function () {
    "use strict";

    /**
     * The ButtonsStylesListHeader class provides the header of an list of style items.
     *
     * @class ButtonsStylesListHeader
     */
    var ButtonsStylesListHeader = React.createClass({
        displayName: "ButtonsStylesListHeader",

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            if (this.props.styles && this.props.styles.length) {
                return React.createElement(
                    "span",
                    { className: "ae-list-header" },
                    this.props.name
                );
            } else {
                return null;
            }
        }
    });

    AlloyEditor.ButtonsStylesListHeader = ButtonsStylesListHeader;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonStylesListItemRemove class provides functionality for previewing a style definition
     * inside a list and applying it to the current editor selection.
     *
     * @class ButtonStylesListItemRemove
     */
    var ButtonStylesListItemRemove = React.createClass({
        displayName: 'ButtonStylesListItemRemove',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * Block styles that should be removed in addition to all other inline styles
             *
             * @property {Array} removeBlocks
             * @default ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre']
             */
            removeBlocks: React.PropTypes.array,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        //Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default buttonStylesListItemRemove
             */
            key: 'buttonStylesListItemRemove'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                removeBlocks: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre']
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            return React.createElement(
                'li',
                { role: 'option' },
                React.createElement(
                    'button',
                    { className: 'ae-toolbar-element', onClick: this._removeStyles, tabIndex: this.props.tabIndex },
                    AlloyEditor.Strings.normal
                )
            );
        },

        /**
         * Removes all inline styles and configured block elements applied to the current selection.
         *
         * @protected
         * @method _removeStyles
         */
        _removeStyles: function _removeStyles() {
            var editor = this.props.editor.get('nativeEditor');

            editor.execCommand('removeFormat');

            this.props.removeBlocks.forEach(function (blockItem) {
                var blockStyle = new CKEDITOR.style({ element: blockItem });

                editor.removeStyle(blockStyle);
            });

            editor.fire('actionPerformed', this);
        }
    });

    AlloyEditor.ButtonStylesListItemRemove = ButtonStylesListItemRemove;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonStylesListItem class provides functionality for previewing a style definition
     * inside a list and applying it to the current editor selection.
     *
     * @uses ButtonActionStyle
     * @uses ButtonStyle
     *
     * @class ButtonStylesListItem
     */
    var ButtonStylesListItem = React.createClass({
        displayName: 'ButtonStylesListItem',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonActionStyle],

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default buttonStylesListItem
             */
            key: 'buttonStylesListItem'
        },

        /**
         * Lifecycle. Invoked once, both on the client and server, immediately before the initial rendering occurs.
         *
         * @method componentWillMount
         */
        componentWillMount: function componentWillMount() {
            // Styles with wildcard element (*) generate an empty tag in their preview < class="custom-class" />.
            // We default to element span and remove the margins to obtain a more consistent set of previews.
            var styleCfg = {
                element: 'span',
                styles: {
                    margin: 0
                }
            };

            styleCfg = CKEDITOR.tools.merge(styleCfg, this.props.style);

            this._preview = new CKEDITOR.style(styleCfg).buildPreview(this.props.name);
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            // We need to use dangerouselySetInnterHTML since we're not in control of the style
            // preview that is generated by CKEditor.
            return React.createElement('button', { className: 'ae-toolbar-element', dangerouslySetInnerHTML: { __html: this._preview }, onClick: this._onClick, tabIndex: this.props.tabIndex });
        },

        /**
         * Applies the item style to the editor selection.
         *
         * @protected
         * @method _onClick
         */
        _onClick: function _onClick() {
            // Typically, we want the style to be the only one applied to the current selection, so
            // we execute the 'removeFormat' command first. Note that block styles won't be cleaned.
            // However, this is consistent with other editors implementations of this feature.
            this.props.editor.get('nativeEditor').execCommand('removeFormat');

            this.applyStyle();
        }
    });

    AlloyEditor.ButtonStylesListItem = ButtonStylesListItem;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonStylesList class provides functionality for showing a list of styles that can be
     * applied to the current selection..
     *
     * @uses WidgetFocusManager
     *
     * @class ButtonStylesList
     */
    var ButtonStylesList = React.createClass({
        displayName: 'ButtonStylesList',

        mixins: [AlloyEditor.WidgetFocusManager],

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default buttonStylesList
             */
            key: 'buttonStylesList'
        },

        /**
         * Lifecycle. Invoked once, only on the client, immediately after the initial rendering occurs.
         *
         * Focuses on the list node to allow keyboard interaction.
         *
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            React.findDOMNode(this).focus();
        },

        /**
         * Lifecycle. Invoked once, both on the client and server, immediately before the initial rendering occurs.
         *
         * @method componentWillMount
         */
        componentWillMount: function componentWillMount() {
            var blockStyles = [];
            var inlineStyles = [];
            var objectStyles = [];

            this.props.styles.forEach(function (item) {
                var style = new CKEDITOR.style(item.style);

                if (style.type === CKEDITOR.STYLE_BLOCK) {
                    blockStyles.push(item);
                } else if (style.type === CKEDITOR.STYLE_INLINE) {
                    inlineStyles.push(item);
                } else if (style.type === CKEDITOR.STYLE_OBJECT) {
                    objectStyles.push(item);
                }
            });

            this._blockStyles = blockStyles;
            this._inlineStyles = inlineStyles;
            this._objectStyles = objectStyles;
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                circular: false,
                descendants: '.ae-toolbar-element',
                keys: {
                    dismiss: [27],
                    dismissNext: [39],
                    dismissPrev: [37],
                    next: [40],
                    prev: [38]
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the list.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            return React.createElement(
                'div',
                { className: 'ae-dropdown', onFocus: this.focus, onKeyDown: this.handleKey, tabIndex: '0' },
                React.createElement(
                    'ul',
                    { className: 'ae-listbox', role: 'listbox' },
                    React.createElement(AlloyEditor.ButtonStylesListItemRemove, { editor: this.props.editor }),
                    React.createElement(AlloyEditor.ButtonsStylesListHeader, { name: AlloyEditor.Strings.blockStyles, styles: this._blockStyles }),
                    this._renderStylesItems(this._blockStyles),
                    React.createElement(AlloyEditor.ButtonsStylesListHeader, { name: AlloyEditor.Strings.inlineStyles, styles: this._inlineStyles }),
                    this._renderStylesItems(this._inlineStyles),
                    React.createElement(AlloyEditor.ButtonsStylesListHeader, { name: AlloyEditor.Strings.objectStyles, styles: this._objectStyles }),
                    this._renderStylesItems(this._objectStyles)
                )
            );
        },

        /**
         * Renders instances of ButtonStylesListItem with the preview of the correspondent block, inline or object styles.
         *
         * @protected
         * @method _renderStylesItems
         * @param {Array} styles List of styles for which preview should be rendered.
         * @return {Array} Rendered instances of ButtonStylesListItem class
         */
        _renderStylesItems: function _renderStylesItems(styles) {
            var editor = this.props.editor;
            var items;

            if (styles && styles.length) {
                items = styles.map(function (item) {
                    return React.createElement(
                        'li',
                        { key: item.name, role: 'option' },
                        React.createElement(AlloyEditor.ButtonStylesListItem, { editor: editor, name: item.name, style: item.style })
                    );
                });
            }

            return items;
        }
    });

    AlloyEditor.ButtonStylesList = ButtonStylesList;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonStyles class provides functionality for styling a selection with a list of
     * configurable and customizable styles. The allowed styles follow CKEDITOR.Style configuration
     * (http://docs.ckeditor.com/#!/api/CKEDITOR.style)
     *
     * @class ButtonStyles
     */
    var ButtonStyles = React.createClass({
        displayName: 'ButtonStyles',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * Indicates whether the styles list is expanded or not.
             *
             * @property {Boolean} expanded
             */
            expanded: React.PropTypes.bool,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * List of the styles the button is able to handle.
             *
             * @property {Array} styles
             */
            styles: React.PropTypes.arrayOf(React.PropTypes.object),

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number,

            /**
             * Callback provided by the button host to notify when the styles list has been expanded.
             *
             * @property {Function} toggleDropdown
             */
            toggleDropdown: React.PropTypes.func
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default styles
             */
            key: 'styles'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var activeStyle = AlloyEditor.Strings.normal;

            var styles = this._getStyles();

            styles.forEach((function (item) {
                if (this._checkActive(item.style)) {
                    activeStyle = item.name;
                }
            }).bind(this));

            var buttonStylesList;

            if (this.props.expanded) {
                buttonStylesList = React.createElement(AlloyEditor.ButtonStylesList, { editor: this.props.editor, onDismiss: this.props.toggleDropdown, styles: styles });
            }

            return React.createElement(
                'div',
                { className: 'ae-container-dropdown ae-has-dropdown' },
                React.createElement(
                    'button',
                    { 'aria-expanded': this.props.expanded, 'aria-label': AlloyEditor.Strings.styles + ' ' + activeStyle, className: 'ae-toolbar-element', onClick: this.props.toggleDropdown, role: 'combobox', tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.styles + ' ' + activeStyle },
                    React.createElement(
                        'div',
                        { className: 'ae-container' },
                        React.createElement(
                            'span',
                            { className: 'ae-container-dropdown-selected-item' },
                            activeStyle
                        ),
                        React.createElement('span', { className: 'ae-icon-arrow' })
                    )
                ),
                buttonStylesList
            );
        },

        /**
         * Checks if the given style definition is applied to the current selection in the editor.
         *
         * @protected
         * @method _checkActive
         * @param {Object} styleConfig Style definition as per http://docs.ckeditor.com/#!/api/CKEDITOR.style.
         * @return {Boolean} Returns true if the style is applied to the selection, false otherwise.
         */
        _checkActive: function _checkActive(styleConfig) {
            var nativeEditor = this.props.editor.get('nativeEditor');

            // Styles with wildcard element (*) won't be considered active by CKEditor. Defaulting
            // to a 'span' element works for most of those cases with no defined element.
            styleConfig = CKEDITOR.tools.merge({ element: 'span' }, styleConfig);

            var style = new CKEDITOR.style(styleConfig);

            return style.checkActive(nativeEditor.elementPath(), nativeEditor);
        },

        /**
         * Returns an array of styles. Each style consists from two properties:
         * - name - the style name, for example "h1"
         * - style - an object with one property, called `element` which value
         * represents the style which have to be applied to the element.
         *
         * @method _getStyles
         * @protected
         * @return {Array<object>} An array of objects containing the styles.
         */
        _getStyles: function _getStyles() {
            return this.props.styles || [{
                name: AlloyEditor.Strings.h1,
                style: {
                    element: 'h1'
                }
            }, {
                name: AlloyEditor.Strings.h2,
                style: {
                    element: 'h2'
                }
            }, {
                name: AlloyEditor.Strings.formatted,
                style: {
                    element: 'pre'
                }
            }, {
                name: AlloyEditor.Strings.cite,
                style: {
                    element: 'cite'
                }
            }, {
                name: AlloyEditor.Strings.code,
                style: {
                    element: 'code'
                }
            }];
        }
    });

    AlloyEditor.Buttons[ButtonStyles.key] = AlloyEditor.ButtonStyles = ButtonStyles;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonSubscript class provides functionality for applying subscript style to a text selection.
     *
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonSubscript
     */
    var ButtonSubscript = React.createClass({
        displayName: 'ButtonSubscript',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default subscript
             */
            key: 'subscript'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'subscript',
                style: {
                    element: 'sub'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.subscript, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-subscript', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.subscript },
                React.createElement('span', { className: 'ae-icon-subscript' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonSubscript.key] = AlloyEditor.ButtonSubscript = ButtonSubscript;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonSuperscript class provides functionality for applying superscript style to a text selection.
     *
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonSuperscript
     */
    var ButtonSuperscript = React.createClass({
        displayName: 'ButtonSuperscript',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default superscript
             */
            key: 'superscript'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'superscript',
                style: {
                    element: 'sup'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.superscript, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-superscript', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.superscript },
                React.createElement('span', { className: 'ae-icon-superscript' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonSuperscript.key] = AlloyEditor.ButtonSuperscript = ButtonSuperscript;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonTableCell class provides functionality to work with table cells.
     *
     * @class ButtonTableCell
     */
    var ButtonTableCell = React.createClass({
        displayName: 'ButtonTableCell',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * List of the commands the button is able to handle.
             *
             * @property {Array} commands
             */
            commands: React.PropTypes.arrayOf(React.PropTypes.object),

            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * Indicates whether the styles list is expanded or not.
             *
             * @property {Boolean} expanded
             */
            expanded: React.PropTypes.bool,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number,

            /**
             * Callback provided by the button host to notify when the styles list has been expanded.
             *
             * @property {Function} toggleDropdown
             */
            toggleDropdown: React.PropTypes.func
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default tableCell
             */
            key: 'tableCell'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var buttonCommandsList;
            var buttonCommandsListId;

            if (this.props.expanded) {
                buttonCommandsListId = ButtonTableCell.key + 'List';
                buttonCommandsList = React.createElement(AlloyEditor.ButtonCommandsList, { commands: this._getCommands(), editor: this.props.editor, listId: buttonCommandsListId, onDismiss: this.props.toggleDropdown });
            }

            return React.createElement(
                'div',
                { className: 'ae-container ae-has-dropdown' },
                React.createElement(
                    'button',
                    { 'aria-expanded': this.props.expanded, 'aria-label': AlloyEditor.Strings.cell, 'aria-owns': buttonCommandsListId, className: 'ae-button', onClick: this.props.toggleDropdown, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.cell },
                    React.createElement('span', { className: 'ae-icon-cell' })
                ),
                buttonCommandsList
            );
        },

        /**
         * Returns a list of commands. If a list of commands was passed
         * as property `commands`, it will take a precedence over the default ones.
         *
         * @method _getCommands
         * @return {Array} The list of available commands.
         */
        _getCommands: function _getCommands() {
            return this.props.commands || [{
                command: 'cellInsertBefore',
                label: AlloyEditor.Strings.cellInsertBefore
            }, {
                command: 'cellInsertAfter',
                label: AlloyEditor.Strings.cellInsertAfter
            }, {
                command: 'cellDelete',
                label: AlloyEditor.Strings.cellDelete
            }, {
                command: 'cellMerge',
                label: AlloyEditor.Strings.cellMerge
            }, {
                command: 'cellMergeDown',
                label: AlloyEditor.Strings.cellMergeDown
            }, {
                command: 'cellMergeRight',
                label: AlloyEditor.Strings.cellMergeRight
            }, {
                command: 'cellHorizontalSplit',
                label: AlloyEditor.Strings.cellSplitHorizontal
            }, {
                command: 'cellVerticalSplit',
                label: AlloyEditor.Strings.cellSplitVertical
            }];
        }
    });

    AlloyEditor.Buttons[ButtonTableCell.key] = AlloyEditor.ButtonTableCell = ButtonTableCell;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonTableColumn class provides functionality to work with table columns.
     *
     * @class ButtonTableColumn
     */
    var ButtonTableColumn = React.createClass({
        displayName: 'ButtonTableColumn',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * List of the commands the button is able to handle.
             *
             * @property {Array} commands
             */
            commands: React.PropTypes.arrayOf(React.PropTypes.object),

            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * Indicates whether the styles list is expanded or not.
             *
             * @property {Boolean} expanded
             */
            expanded: React.PropTypes.bool,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number,

            /**
             * Callback provided by the button host to notify when the styles list has been expanded.
             *
             * @property {Function} toggleDropdown
             */
            toggleDropdown: React.PropTypes.func
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default tableColumn
             */
            key: 'tableColumn'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var buttonCommandsList, buttonCommandsListId;

            if (this.props.expanded) {
                buttonCommandsListId = ButtonTableColumn.key + 'List';
                buttonCommandsList = React.createElement(AlloyEditor.ButtonCommandsList, { commands: this._getCommands(), editor: this.props.editor, listId: buttonCommandsListId, onDismiss: this.props.toggleDropdown });
            }

            return React.createElement(
                'div',
                { className: 'ae-container ae-has-dropdown' },
                React.createElement(
                    'button',
                    { 'aria-expanded': this.props.expanded, 'aria-label': AlloyEditor.Strings.column, 'aria-owns': buttonCommandsListId, className: 'ae-button', onClick: this.props.toggleDropdown, role: 'listbox', tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.column },
                    React.createElement('span', { className: 'ae-icon-column' })
                ),
                buttonCommandsList
            );
        },

        /**
         * Returns a list of commands. If a list of commands was passed
         * as property `commands`, it will take a precedence over the default ones.
         *
         * @method _getCommands
         * @return {Array} The list of available commands.
         */
        _getCommands: function _getCommands() {
            return this.props.commands || [{
                command: 'columnInsertBefore',
                label: AlloyEditor.Strings.columnInsertBefore
            }, {
                command: 'columnInsertAfter',
                label: AlloyEditor.Strings.columnInsertAfter
            }, {
                command: 'columnDelete',
                label: AlloyEditor.Strings.columnDelete
            }];
        }
    });

    AlloyEditor.Buttons[ButtonTableColumn.key] = AlloyEditor.ButtonTableColumn = ButtonTableColumn;
})();
'use strict';

(function () {
    'use strict';

    var KEY_ENTER = 13;
    var KEY_ESC = 27;

    /**
     * The ButtonTableEdit class provides functionality for creating and editing a table in a document.
     * Provides UI for creating a table.
     *
     * @class ButtonTableEdit
     */
    var ButtonTableEdit = React.createClass({
        displayName: 'ButtonTableEdit',

        // Allows validating props being passed to the component.
        propTypes: {

            /**
             * Method to notify the button abandons the exclusive rendering mode.
             *
             * @property {Function} cancelExclusive
             */
            cancelExclusive: React.PropTypes.func.isRequired,

            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default tableEdit
             */
            key: 'tableEdit'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         */
        getDefaultProps: function getDefaultProps() {
            return {
                tableAttributes: {
                    border: 1,
                    cellPadding: 0,
                    cellSpacing: 0,
                    style: 'width: 100%'
                }
            };
        },

        /**
         * Lifecycle. Invoked once, only on the client (not on the server),
         * immediately after the initial rendering occurs.
         *
         * Focuses on the link input to immediately allow editing.
         *
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            React.findDOMNode(this.refs.rows).focus();
        },

        /**
         * Lifecycle. Invoked once before the component is mounted.
         *
         * @method getInitialState
         */
        getInitialState: function getInitialState() {
            return {
                cols: 3,
                rows: 3
            };
        },

        /**
         * Creates a table.
         *
         * @protected
         * @method _createTable
         */
        _createTable: function _createTable() {
            var editor = this.props.editor.get('nativeEditor');
            var tableUtils = new CKEDITOR.Table(editor);

            tableUtils.create({
                attrs: this.props.tableAttributes,
                cols: this.state.cols,
                rows: this.state.rows
            });

            this.props.cancelExclusive();

            editor.fire('actionPerformed', this);
        },

        /**
         * Handles a change in input value. Sets the provided value from the user back to the input.
         *
         * @protected
         * @method _handleChange
         * @param {String} inputName The name of the input which value should be updated.
         * @param {SyntheticEvent} event The provided event.
         */
        _handleChange: function _handleChange(inputName, event) {
            var state = {};
            state[inputName] = event.target.value;

            this.setState(state);
        },

        /**
         * Monitors key interaction inside the input element to respond to the keys:
         * - Enter: Creates the table.
         * - Escape: Discards the changes.
         *
         * @protected
         * @method _handleKeyDown
         * @param {SyntheticEvent} event The keyboard event.
         */
        _handleKeyDown: function _handleKeyDown(event) {
            if (event.keyCode === KEY_ENTER || event.keyCode === KEY_ESC) {
                event.preventDefault();
            }

            if (event.keyCode === KEY_ENTER) {
                this._createTable();
            } else if (event.keyCode === KEY_ESC) {
                this.props.cancelExclusive();
            }
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var time = Date.now();
            var rowsId = time + 'rows';
            var colsId = time + 'cols';

            return React.createElement(
                'div',
                { className: 'ae-container-edit-table' },
                React.createElement(
                    'label',
                    { htmlFor: rowsId },
                    'Rows'
                ),
                React.createElement(
                    'div',
                    { className: 'ae-container-input small' },
                    React.createElement('input', { className: 'ae-input', id: rowsId, onChange: this._handleChange.bind(this, 'rows'), min: '1', onKeyDown: this._handleKeyDown, placeholder: 'Rows', ref: 'rows', type: 'number', value: this.state.rows })
                ),
                React.createElement(
                    'label',
                    { htmlFor: colsId },
                    'Cols'
                ),
                React.createElement(
                    'div',
                    { className: 'ae-container-input small' },
                    React.createElement('input', { className: 'ae-input', id: colsId, onChange: this._handleChange.bind(this, 'cols'), min: '1', onKeyDown: this._handleKeyDown, placeholder: 'Colums', ref: 'cols', type: 'number', value: this.state.cols })
                ),
                React.createElement(
                    'button',
                    { 'aria-label': 'Confirm', className: 'ae-button', onClick: this._createTable },
                    React.createElement('span', { className: 'ae-icon-ok' })
                )
            );
        }
    });

    AlloyEditor.Buttons[ButtonTableEdit.key] = AlloyEditor.ButtonTableEdit = ButtonTableEdit;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonTableHeading class provides functionality to work with table heading.
     *
     * @class ButtonTableHeading
     */
    var ButtonTableHeading = React.createClass({
        displayName: 'ButtonTableHeading',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * List of the commands the button is able to handle.
             *
             * @property {Array} commands
             */
            commands: React.PropTypes.arrayOf(React.PropTypes.object),

            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * Indicates whether the styles list is expanded or not.
             *
             * @property {Boolean} expanded
             */
            expanded: React.PropTypes.bool,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number,

            /**
             * Callback provided by the button host to notify when the styles list has been expanded.
             *
             * @property {Function} toggleDropdown
             */
            toggleDropdown: React.PropTypes.func
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default tableRow
             */
            key: 'tableHeading'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var buttonCommandsList;
            var buttonCommandsListId;

            if (this.props.expanded) {
                buttonCommandsListId = ButtonTableHeading.key + 'List';
                buttonCommandsList = React.createElement(AlloyEditor.ButtonCommandsList, { commands: this._getCommands(), editor: this.props.editor, listId: buttonCommandsListId, onDismiss: this.props.toggleDropdown });
            }

            var activeHeading = new CKEDITOR.Table(this.props.editor.get('nativeEditor')).getHeading();
            var activeHeadingIntro = AlloyEditor.Strings.headers + ':';
            var activeHeadingLabel = AlloyEditor.Strings['headers' + activeHeading];

            return React.createElement(
                'div',
                { className: 'ae-container-dropdown-xl ae-has-dropdown' },
                React.createElement(
                    'button',
                    { 'aria-expanded': this.props.expanded, 'aria-label': '', className: 'ae-toolbar-element', onClick: this.props.toggleDropdown, role: 'combobox', tabIndex: this.props.tabIndex, title: '' },
                    React.createElement(
                        'div',
                        { className: 'ae-container' },
                        React.createElement(
                            'span',
                            { className: 'ae-container-dropdown-selected-item' },
                            activeHeadingIntro,
                            ' ',
                            React.createElement(
                                'strong',
                                null,
                                activeHeadingLabel
                            )
                        ),
                        React.createElement('span', { className: 'ae-icon-arrow' })
                    )
                ),
                buttonCommandsList
            );
        },

        /**
         * Returns a list of commands. If a list of commands was passed
         * as property `commands`, it will take a precedence over the default ones.
         *
         * @method _getCommands
         * @return {Array} The list of available commands.
         */
        _getCommands: function _getCommands() {
            return this.props.commands || [{
                command: 'tableHeadingNone',
                label: AlloyEditor.Strings.headersNone
            }, {
                command: 'tableHeadingRow',
                label: AlloyEditor.Strings.headersRow
            }, {
                command: 'tableHeadingColumn',
                label: AlloyEditor.Strings.headersColumn
            }, {
                command: 'tableHeadingBoth',
                label: AlloyEditor.Strings.headersBoth
            }];
        }
    });

    AlloyEditor.Buttons[ButtonTableHeading.key] = AlloyEditor.ButtonTableHeading = ButtonTableHeading;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonTableRemove class provides functionality for removing a table
     *
     * @class ButtonTableRemove
     */
    var ButtonTableRemove = React.createClass({
        displayName: 'ButtonTableRemove',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default tableRemove
             */
            key: 'tableRemove'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.deleteTable, className: 'ae-button', 'data-type': 'button-table-remove', onClick: this._removeTable, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.deleteTable },
                React.createElement('span', { className: 'ae-icon-close' })
            );
        },

        /**
         * Removes the table in the editor element.
         *
         * @protected
         * @method _removeTable
         */
        _removeTable: function _removeTable() {
            var editor = this.props.editor.get('nativeEditor');
            var tableUtils = new CKEDITOR.Table(editor);

            tableUtils.remove();

            editor.fire('actionPerformed', this);
        }
    });

    AlloyEditor.Buttons[ButtonTableRemove.key] = AlloyEditor.ButtonTableRemove = ButtonTableRemove;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonTableRow class provides functionality to work with table rows.
     *
     * @class ButtonTableRow
     */
    var ButtonTableRow = React.createClass({
        displayName: 'ButtonTableRow',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * List of the commands the button is able to handle.
             *
             * @property {Array} commands
             */
            commands: React.PropTypes.arrayOf(React.PropTypes.object),

            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * Indicates whether the styles list is expanded or not.
             *
             * @property {Boolean} expanded
             */
            expanded: React.PropTypes.bool,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number,

            /**
             * Callback provided by the button host to notify when the styles list has been expanded.
             *
             * @property {Function} toggleDropdown
             */
            toggleDropdown: React.PropTypes.func
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default tableRow
             */
            key: 'tableRow'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var buttonCommandsList;
            var buttonCommandsListId;

            if (this.props.expanded) {
                buttonCommandsListId = ButtonTableRow.key + 'List';
                buttonCommandsList = React.createElement(AlloyEditor.ButtonCommandsList, { commands: this._getCommands(), editor: this.props.editor, listId: buttonCommandsListId, onDismiss: this.props.toggleDropdown });
            }

            return React.createElement(
                'div',
                { className: 'ae-container ae-has-dropdown' },
                React.createElement(
                    'button',
                    { 'aria-expanded': this.props.expanded, 'aria-label': AlloyEditor.Strings.row, 'aria-owns': buttonCommandsListId, className: 'ae-button', onClick: this.props.toggleDropdown, role: 'combobox', tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.row },
                    React.createElement('span', { className: 'ae-icon-row' })
                ),
                buttonCommandsList
            );
        },

        /**
         * Returns a list of commands. If a list of commands was passed
         * as property `commands`, it will take a precedence over the default ones.
         *
         * @method _getCommands
         * @return {Array} The list of available commands.
         */
        _getCommands: function _getCommands() {
            return this.props.commands || [{
                command: 'rowInsertBefore',
                label: AlloyEditor.Strings.rowInsertBefore
            }, {
                command: 'rowInsertAfter',
                label: AlloyEditor.Strings.rowInsertAfter
            }, {
                command: 'rowDelete',
                label: AlloyEditor.Strings.rowDelete
            }];
        }
    });

    AlloyEditor.Buttons[ButtonTableRow.key] = AlloyEditor.ButtonTableRow = ButtonTableRow;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonTable class provides functionality for creating and editing a table in a document. ButtonTable
     * renders in two different modes:
     *
     * - Normal: Just a button that allows to switch to the edition mode
     * - Exclusive: The ButtonTableEdit UI with all the table edition controls.
     *
     * @class ButtonTable
     */
    var ButtonTable = React.createClass({
        displayName: 'ButtonTable',

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default table
             */
            key: 'table'
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            if (this.props.renderExclusive) {
                return React.createElement(AlloyEditor.ButtonTableEdit, this.props);
            } else {
                return React.createElement(
                    'button',
                    { 'aria-label': AlloyEditor.Strings.table, className: 'ae-button', 'data-type': 'button-table', onClick: this.props.requestExclusive, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.table },
                    React.createElement('span', { className: 'ae-icon-table' })
                );
            }
        }
    });

    AlloyEditor.Buttons[ButtonTable.key] = AlloyEditor.ButtonTable = ButtonTable;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonTwitter class provides functionality for creating a link which
     * allows people to tweet part of the content in the editor.
     *
     * @uses ButtonStateClasses
     *
     * @class ButtonTwitter
     */
    var ButtonTwitter = React.createClass({
        displayName: 'ButtonTwitter',

        mixins: [AlloyEditor.ButtonStateClasses],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default twitter
             */
            key: 'twitter'
        },

        /**
         * Creates or removes the twitter link on the selection.
         *
         * @method handleClick
         */
        handleClick: function handleClick() {
            var editor = this.props.editor.get('nativeEditor');

            var linkUtils = new CKEDITOR.Link(editor);

            if (this.isActive()) {
                linkUtils.remove(linkUtils.getFromSelection());
            } else {
                linkUtils.create(this._getHref(), {
                    'class': 'ae-twitter-link',
                    'target': '_blank'
                });
            }

            editor.fire('actionPerformed', this);
        },

        /**
         * Checks if the current selection is contained within a link that points to twitter.com/intent/tweet.
         *
         * @method isActive
         * @return {Boolean} True if the selection is inside a twitter link, false otherwise.
         */
        isActive: function isActive() {
            var link = new CKEDITOR.Link(this.props.editor.get('nativeEditor')).getFromSelection();

            return link && link.getAttribute('href').indexOf('twitter.com/intent/tweet') !== -1;
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.twitter, className: cssClass, 'data-type': 'button-twitter', onClick: this.handleClick, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.twitter },
                React.createElement('span', { className: 'ae-icon-twitter' })
            );
        },

        /**
         * Generates the appropriate twitter url based on the selected text and the configuration
         * options received via props.
         *
         * @protected
         * @method _getHref
         * @return {String} A valid twitter url with the selected text and given configuration.
         */
        _getHref: function _getHref() {
            var nativeEditor = this.props.editor.get('nativeEditor');
            var selectedText = nativeEditor.getSelection().getSelectedText();
            var url = this.props.url;
            var via = this.props.via;
            var twitterHref = 'https://twitter.com/intent/tweet?text=' + selectedText;

            if (url) {
                twitterHref += '&url=' + url;
            }

            if (via) {
                twitterHref += '&via=' + via;
            }

            return twitterHref;
        }
    });

    AlloyEditor.Buttons[ButtonTwitter.key] = AlloyEditor.ButtonTwitter = ButtonTwitter;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonUnorderedlist class provides functionality for creating unordered lists in an editor.
     *
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonUnorderedlist
     */
    var ButtonUnorderedlist = React.createClass({
        displayName: 'ButtonUnorderedlist',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default ul
             */
            key: 'ul'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'bulletedlist',
                style: {
                    element: 'ul'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.bulletedlist, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-ul', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.bulletedlist },
                React.createElement('span', { className: 'ae-icon-bulleted-list' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonUnorderedlist.key] = AlloyEditor.ButtonUnorderedlist = ButtonUnorderedlist;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ButtonUnderline class provides functionality for underlying a text selection.
     *
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonUnderline
     */
    var ButtonUnderline = React.createClass({
        displayName: 'ButtonUnderline',

        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default underline
             */
            key: 'underline'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                command: 'underline',
                style: {
                    element: 'u'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return React.createElement(
                'button',
                { 'aria-label': AlloyEditor.Strings.underline, 'aria-pressed': cssClass.indexOf('pressed') !== -1, className: cssClass, 'data-type': 'button-underline', onClick: this.execCommand, tabIndex: this.props.tabIndex, title: AlloyEditor.Strings.underline },
                React.createElement('span', { className: 'ae-icon-underline' })
            );
        }
    });

    AlloyEditor.Buttons[ButtonUnderline.key] = AlloyEditor.ButtonUnderline = ButtonUnderline;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ToolbarAdd class provides functionality for adding content to the editor.
     *
     * @uses WidgetDropdown
     * @uses WidgetExclusive
     * @uses WidgetFocusManager
     * @uses ToolbarButtons
     * @uses WidgetPosition
     * @uses WidgetArrowBox
     *
     * @class ToolbarAdd
     */
    var ToolbarAdd = React.createClass({
        displayName: 'ToolbarAdd',

        mixins: [AlloyEditor.WidgetDropdown, AlloyEditor.WidgetExclusive, AlloyEditor.WidgetFocusManager, AlloyEditor.ToolbarButtons, AlloyEditor.WidgetPosition, AlloyEditor.WidgetArrowBox],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The toolbar configuration.
             *
             * @property {Object} config
             */
            config: React.PropTypes.object,

            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The gutter to be applied to the widget when rendered in exclusive mode
             *
             * @property {Object} gutterExclusive
             */
            gutterExclusive: React.PropTypes.object,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The data, returned from {{#crossLink "CKEDITOR.plugins.selectionregion/getSelectionData:method"}}{{/crossLink}}
             *
             * @property {Object} selectionData
             */
            selectionData: React.PropTypes.object
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default add
             */
            key: 'add'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                circular: true,
                descendants: '.ae-button',
                gutterExclusive: {
                    left: 10,
                    top: 0
                },
                keys: {
                    dismiss: [27],
                    next: [39, 40],
                    prev: [37, 38]
                }
            };
        },

        /**
         * Lifecycle. Invoked once, only on the client (not on the server),
         * immediately after the initial rendering occurs.
         *
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            this._updatePosition();
        },

        /**
         * Lifecycle. Invoked immediately after the component's updates are flushed to the DOM.
         * This method is not called for the initial render.
         *
         * @method componentDidUpdate
         * @param {Object} prevProps The previous state of the component's properties.
         * @param {Object} prevState Component's previous state.
         */
        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
            this._updatePosition();

            // In case of exclusive rendering, focus the first descendant (button)
            // so the user will be able to start interacting with the buttons immediately.
            if (this.props.renderExclusive) {
                this.focus();
            }
        },

        /**
         * Lifecycle. Renders the buttons for adding content.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var buttons = this._getButtons();
            var className = this._getToolbarClassName();

            return React.createElement(
                'div',
                { 'aria-label': AlloyEditor.Strings.add, className: className, 'data-tabindex': this.props.config.tabIndex || 0, onFocus: this.focus, onKeyDown: this.handleKey, role: 'toolbar', tabIndex: '-1' },
                React.createElement(
                    'div',
                    { className: 'ae-container' },
                    buttons
                )
            );
        },

        /**
         * Returns a list of buttons that will eventually render to HTML.
         *
         * @protected
         * @method _getButtons
         * @return {Object} The buttons which have to be rendered.
         */
        _getButtons: function _getButtons() {
            var buttons;

            if (this.props.renderExclusive) {
                buttons = this.getToolbarButtons(this.props.config.buttons);
            } else {
                if (this.props.selectionData && this.props.selectionData.region) {
                    buttons = React.createElement(
                        'button',
                        { 'aria-label': AlloyEditor.Strings.add, className: 'ae-button ae-button-add', onClick: this.props.requestExclusive.bind(this, ToolbarAdd.key), title: AlloyEditor.Strings.add },
                        React.createElement('span', { className: 'ae-icon-add' })
                    );
                }
            }

            return buttons;
        },

        /**
         * Returns the class name of the toolbar in case of both exclusive and normal mode.
         *
         * @protected
         * @method _getToolbarClassName
         * @return {String} The class name which have to be applied to the DOM element.
         */
        _getToolbarClassName: function _getToolbarClassName() {
            var cssClass = 'ae-toolbar-add';

            if (this.props.renderExclusive) {
                cssClass = 'ae-toolbar ' + this.getArrowBoxClasses();
            }

            return cssClass;
        },

        /**
         * Calculates and sets the position of the toolbar in exclusive or normal mode.
         *
         * @protected
         * @method _updatePosition
         */
        _updatePosition: function _updatePosition() {
            var region;

            if (this.props.renderExclusive) {
                this.updatePosition();
                this.show();
            } else {
                if (this.props.selectionData) {
                    region = this.props.selectionData.region;
                }

                if (region) {
                    var domNode = React.findDOMNode(this);
                    var domElement = new CKEDITOR.dom.element(domNode);

                    var startRect = region.startRect || region;
                    var left = this.props.editor.get('nativeEditor').editable().getClientRect().left;

                    domNode.style.left = left - domNode.offsetWidth - this.props.gutterExclusive.left + 'px';
                    domNode.style.top = region.top - domNode.offsetHeight / 2 + startRect.height / 2 + 'px';
                    domNode.style.opacity = 1;

                    domElement.removeClass('ae-arrow-box');

                    this.cancelAnimation();
                }
            }
        }
    });

    AlloyEditor.Toolbars[ToolbarAdd.key] = AlloyEditor.ToolbarAdd = ToolbarAdd;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The ToolbarStyles class hosts the buttons for styling a text selection.
     *
     * @uses WidgetDropdown
     * @uses WidgetExclusive
     * @uses WidgetFocusManager
     * @uses ToolbarButtons
     * @uses WidgetPosition
     * @uses WidgetArrowBox
     *
     * @class ToolbarStyles
     */
    var ToolbarStyles = React.createClass({
        displayName: 'ToolbarStyles',

        mixins: [AlloyEditor.WidgetDropdown, AlloyEditor.WidgetExclusive, AlloyEditor.WidgetFocusManager, AlloyEditor.ToolbarButtons, AlloyEditor.WidgetPosition, AlloyEditor.WidgetArrowBox],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The toolbar configuration.
             *
             * @property {Object} config
             */
            config: React.PropTypes.object,

            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The data, returned from {{#crossLink "CKEDITOR.plugins.selectionregion/getSelectionData:method"}}{{/crossLink}}
             *
             * @property {Object} selectionData
             */
            selectionData: React.PropTypes.object
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {String} key
             * @default styles
             */
            key: 'styles'
        },

        /**
         * Lifecycle. Invoked once, only on the client (not on the server),
         * immediately after the initial rendering occurs.
         *
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            this._updatePosition();
        },

        /**
         * Lifecycle. Invoked immediately after the component's updates are flushed to the DOM.
         * This method is not called for the initial render.
         *
         * @method componentDidUpdate
         * @param {Object} prevProps The previous state of the component's properties.
         * @param {Object} prevState Component's previous state.
         */
        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
            this._updatePosition();
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                circular: true,
                descendants: '.ae-button, .ae-toolbar-element',
                keys: {
                    dismiss: [27],
                    next: [39, 40],
                    prev: [37, 38]
                }
            };
        },

        /**
         * Lifecycle. Renders the buttons in the toolbar according to the current selection.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            var currentSelection = this._getCurrentSelection();

            if (currentSelection) {
                var getArrowBoxClassesFn = this._getSelectionFunction(currentSelection.getArrowBoxClasses);
                var arrowBoxClasses;

                if (getArrowBoxClassesFn) {
                    arrowBoxClasses = getArrowBoxClassesFn();
                } else {
                    arrowBoxClasses = this.getArrowBoxClasses();
                }

                var cssClasses = 'ae-toolbar-styles ' + arrowBoxClasses;

                var buttons = this.getToolbarButtons(currentSelection.buttons, {
                    selectionType: currentSelection.name
                });

                return React.createElement(
                    'div',
                    { 'aria-label': AlloyEditor.Strings.styles, className: cssClasses, 'data-tabindex': this.props.config.tabIndex || 0, onFocus: this.focus, onKeyDown: this.handleKey, role: 'toolbar', tabIndex: '-1' },
                    React.createElement(
                        'div',
                        { className: 'ae-container' },
                        buttons
                    )
                );
            } else {
                return false;
            }
        },

        /**
         * Retrieve a function from String. It converts a fully qualified string into the mapped function.
         *
         * @method _getSelectionFunction
         * @protected
         * @param {Function|String} selectionFn A function, or a fully qualified string pointing to the
         * desired one (e.g. 'AlloyEditor.SelectionTest.image').
         * @return {Function} The mapped function.
         */
        _getSelectionFunction: function _getSelectionFunction(selectionFn) {
            var Lang = AlloyEditor.Lang;
            var selectionFunction;

            if (Lang.isFunction(selectionFn)) {
                selectionFunction = selectionFn;
            } else if (Lang.isString(selectionFn)) {
                var parts = selectionFn.split('.');
                var currentMember = window;
                var property = parts.shift();

                while (property && Lang.isObject(currentMember) && Lang.isObject(currentMember[property])) {
                    currentMember = currentMember[property];
                    property = parts.shift();
                }

                if (Lang.isFunction(currentMember)) {
                    selectionFunction = currentMember;
                }
            }

            return selectionFunction;
        },

        /**
         * Analyzes the current editor selection and returns the selection configuration that matches.
         *
         * @method _getCurrentSelection
         * @protected
         * @return {Object} The matched selection configuration.
         */
        _getCurrentSelection: function _getCurrentSelection() {
            var eventPayload = this.props.editorEvent ? this.props.editorEvent.data : null;
            var selection;

            if (eventPayload) {
                this.props.config.selections.some(function (item) {
                    var testFn = this._getSelectionFunction(item.test);
                    var result;

                    if (testFn) {
                        result = testFn({
                            data: eventPayload,
                            editor: this.props.editor
                        });
                    }

                    if (result) {
                        selection = item;
                    }

                    return result;
                }, this);
            }

            return selection;
        },

        /**
         * Calculates and sets the position of the toolbar.
         *
         * @protected
         * @method _updatePosition
         */
        _updatePosition: function _updatePosition() {
            var currentSelection = this._getCurrentSelection();
            var result;

            // If current selection has a function called `setPosition`, call it
            // and check the returned value. If false, fallback to the default positioning logic.
            if (currentSelection) {
                var setPositionFn = this._getSelectionFunction(currentSelection.setPosition);

                if (setPositionFn) {
                    result = setPositionFn.call(this, {
                        editor: this.props.editor,
                        editorEvent: this.props.editorEvent,
                        selectionData: this.props.selectionData
                    });
                }
            }

            if (!result) {
                this.updatePosition();
                this.show();
            }
        }
    });

    AlloyEditor.Toolbars[ToolbarStyles.key] = AlloyEditor.ToolbarStyles = ToolbarStyles;
})();
'use strict';

(function () {
    'use strict';

    /**
     * The main editor UI class manages a hierarchy of widgets (toolbars and buttons).
     *
     * @uses WidgetExclusive
     * @uses WidgetFocusManager
     *
     * @class UI
     */
    var UI = React.createClass({
        displayName: 'UI',

        mixins: [AlloyEditor.WidgetExclusive, AlloyEditor.WidgetFocusManager],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * Localized messages for live aria updates. Should include the following messages:
             * - noToolbar: Notification for no available toolbar in the editor.
             * - oneToolbar: Notification for just one available toolbar in the editor.
             * - manyToolbars: Notification for more than one available toolbar in the editor.
             *
             * @property {Object} ariaUpdates
             */
            ariaUpdates: React.PropTypes.object,

            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The delay (ms), after which key or mouse events will be processed.
             *
             * @property {Number} eventsDelay
             */
            eventsDelay: React.PropTypes.number,

            /**
             * The toolbars configuration for this editor instance
             *
             * @property {Object} toolbars
             */
            toolbars: React.PropTypes.object.isRequired
        },

        /**
         * Lifecycle. Invoked once before the component is mounted.
         *
         * @method getInitialState
         */
        getInitialState: function getInitialState() {
            return {
                hidden: false
            };
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function getDefaultProps() {
            return {
                circular: true,
                descendants: '[class^=ae-toolbar-]',
                eventsDelay: 0,
                keys: {
                    next: 9
                }
            };
        },

        /**
         * Lifecycle. Invoked once, only on the client, immediately after the initial rendering occurs.
         *
         * @method componentDidMount
         */
        componentDidMount: function componentDidMount() {
            var editor = this.props.editor.get('nativeEditor');

            editor.on('editorInteraction', this._onEditorInteraction, this);
            editor.on('actionPerformed', this._onActionPerformed, this);
            editor.on('key', this._onEditorKey, this);

            // Set up events for hiding the UI when user stops interacting with the editor.
            // This may happen when he just clicks outside of the editor. However,
            // this does not include a situation when he clicks on some button, part of
            // editor's UI.

            // It is not easy to debounce _setUIHidden on mousedown, because if we
            // debounce it, when the handler is being invoked, the target might be no more part
            // of the editor's UI - onActionPerformed causes re-render.
            this._mousedownListener = (function (event) {
                this._setUIHidden(event.target);
            }).bind(this);

            this._keyDownListener = CKEDITOR.tools.debounce(function (event) {
                this._setUIHidden(document.activeElement);
            }, this.props.eventsDelay, this);

            editor.once('contentDom', (function () {
                document.addEventListener('mousedown', this._mousedownListener);
                document.addEventListener('keydown', this._keyDownListener);
            }).bind(this));
        },

        /**
         * Lifecycle. Invoked immediately after the component's updates are flushed to the DOM.
         * Fires 'ariaUpdate' event passing ARIA related messages.
         *
         * @method componentDidUpdate
         */
        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
            var domNode = React.findDOMNode(this);

            if (domNode) {
                this.props.editor.get('nativeEditor').fire('ariaUpdate', {
                    message: this._getAvailableToolbarsMessage(domNode)
                });
            }
        },

        _getAriaUpdateTemplate: function _getAriaUpdateTemplate(ariaUpdate) {
            if (!this._ariaUpdateTemplates) {
                this._ariaUpdateTemplates = {};
            }

            if (!this._ariaUpdateTemplates[ariaUpdate]) {
                this._ariaUpdateTemplates[ariaUpdate] = new CKEDITOR.template(this._getAriaUpdates()[ariaUpdate]);
            }

            return this._ariaUpdateTemplates[ariaUpdate];
        },

        /**
         * Returns the templates for ARIA messages.
         *
         * @protected
         * @method _getAriaUpdates
         * @return {Object} ARIA relates messages. Default:
         * {
         *      noToolbar: AlloyEditor.Strings.ariaUpdateNoToolbar,
         *      oneToolbar: AlloyEditor.Strings.ariaUpdateOneToolbar,
         *      manyToolbars: AlloyEditor.Strings.ariaUpdateManyToolbars
         *  }
         */
        _getAriaUpdates: function _getAriaUpdates() {
            return this.props.ariaUpdates || {
                noToolbar: AlloyEditor.Strings.ariaUpdateNoToolbar,
                oneToolbar: AlloyEditor.Strings.ariaUpdateOneToolbar,
                manyToolbars: AlloyEditor.Strings.ariaUpdateManyToolbars
            };
        },

        /**
         * Returns an ARIA message which represents the number of currently available toolbars.
         *
         * @method _getAvailableToolbarsMessage
         * @protected
         * @param {CKEDITOR.dom.element} domNode The DOM node from which the available toolbars will be retrieved.
         * @return {String} The ARIA message for the number of available toolbars
         */
        _getAvailableToolbarsMessage: function _getAvailableToolbarsMessage(domNode) {
            var toolbarsNodeList = domNode.querySelectorAll('[role="toolbar"]');

            if (!toolbarsNodeList.length) {
                return this._getAriaUpdates().noToolbar;
            } else {
                var toolbarNames = Array.prototype.slice.call(toolbarsNodeList).map(function (toolbar) {
                    return toolbar.getAttribute('aria-label');
                });

                var ariaUpdate = toolbarNames.length === 1 ? 'oneToolbar' : 'manyToolbars';

                return this._getAriaUpdateTemplate(ariaUpdate).output({
                    toolbars: toolbarNames.join(',').replace(/,([^,]*)$/, ' and ' + '$1')
                });
            }
        },

        /**
         * Lifecycle. Invoked immediately before a component is unmounted from the DOM.
         *
         * @method componentWillUnmount
         */
        componentWillUnmount: function componentWillUnmount() {
            if (this._mousedownListener) {
                document.removeEventListener('mousedown', this._mousedownListener);
            }

            if (this._keyDownListener) {
                this._keyDownListener.detach();
                document.removeEventListener('keydown', this._keyDownListener);
            }
        },

        /**
         * Lifecycle. Renders the UI of the editor. This may include several toolbars and buttons.
         * The editor's UI also takes care of rendering the items in exclusive mode.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function render() {
            if (this.state.hidden) {
                return null;
            }

            var toolbars = Object.keys(this.props.toolbars).map(function (toolbar) {
                return AlloyEditor.Toolbars[toolbar] || window[toolbar];
            });

            toolbars = this.filterExclusive(toolbars).map((function (toolbar) {
                var props = this.mergeExclusiveProps({
                    config: this.props.toolbars[toolbar.key],
                    editor: this.props.editor,
                    editorEvent: this.state.editorEvent,
                    key: toolbar.key,
                    onDismiss: this._onDismissToolbarFocus,
                    selectionData: this.state.selectionData
                }, toolbar.key);

                return React.createElement(toolbar, props);
            }).bind(this));

            return React.createElement(
                'div',
                { className: 'ae-toolbars', onKeyDown: this.handleKey },
                toolbars
            );
        },

        /**
         * Listener to the editor's `actionPerformed` event. Sets state and redraws the UI of the editor.
         *
         * @protected
         * @method _onActionPerformed
         * @param {SynteticEvent} event The provided event
         */
        _onActionPerformed: function _onActionPerformed(event) {
            var editor = this.props.editor.get('nativeEditor');

            editor.focus();

            this.setState({
                itemExclusive: null,
                selectionData: editor.getSelectionData()
            });
        },

        /**
         * Executed when a dismiss key is pressed over a toolbar to return the focus to the editor.
         *
         * @protected
         * @method _onDismissToolbarFocus
         */
        _onDismissToolbarFocus: function _onDismissToolbarFocus() {
            var editor = this.props.editor.get('nativeEditor');

            editor.focus();
        },

        /**
         * Listener to the editor's `userInteraction` event. Retrieves the data about the user selection and
         * provides it via component's state property.
         *
         * @protected
         * @method _onEditorInteraction
         * @param {SynteticEvent} event The provided event
         */
        _onEditorInteraction: function _onEditorInteraction(event) {
            this.setState({
                editorEvent: event,
                hidden: false,
                itemExclusive: null,
                selectionData: event.data.selectionData
            });
        },

        /**
         * Focuses on the active toolbar when the combination ALT+F10 is pressed inside the editor.
         *
         * @protected
         * @method _onEditorKey
         */
        _onEditorKey: function _onEditorKey(event) {
            var nativeEvent = event.data.domEvent.$;

            if (nativeEvent.altKey && nativeEvent.keyCode === 121) {
                this.focus();
            }
        },

        /**
         * Checks if the target with which the user interacted is part of editor's UI or it is
         * the editable area. If none of these, sets the state of editor's UI to be hidden.
         *
         * @protected
         * @method _setUIHidden
         * @param {DOMElement} target The DOM element with which user interacted lastly.
         */
        _setUIHidden: function _setUIHidden(target) {
            var domNode = React.findDOMNode(this);

            if (domNode) {
                var editable = this.props.editor.get('nativeEditor').editable();
                var targetNode = new CKEDITOR.dom.node(target);

                var res = editable.$ === target || editable.contains(targetNode) || new CKEDITOR.dom.element(domNode).contains(targetNode);

                if (!res) {
                    this.setState({
                        hidden: true
                    });
                }
            }
        }
    });

    AlloyEditor.UI = UI;
})();
}());