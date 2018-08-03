"use strict";function unwrapExports(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var _core=createCommonjsModule(function(e){var t=e.exports={version:"2.5.3"};"number"==typeof __e&&(__e=t)}),_core_1=_core.version,$JSON=_core.JSON||(_core.JSON={stringify:JSON.stringify}),stringify$1=function(e){return $JSON.stringify.apply($JSON,arguments)},stringify=createCommonjsModule(function(e){e.exports={default:stringify$1,__esModule:!0}}),_JSON$stringify=unwrapExports(stringify),runtime=createCommonjsModule(function(R){!function(e){var c,t=Object.prototype,u=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",n=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag",a=e.regeneratorRuntime;if(a)R.exports=a;else{(a=e.regeneratorRuntime=R.exports).wrap=y;var f="suspendedStart",p="suspendedYield",_="executing",d="completed",h={},s={};s[o]=function(){return this};var l=Object.getPrototypeOf,m=l&&l(l($([])));m&&m!==t&&u.call(m,o)&&(s=m);var v=x.prototype=b.prototype=Object.create(s);O.prototype=v.constructor=x,x.constructor=O,x[i]=O.displayName="GeneratorFunction",a.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===O||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(v),e},a.awrap=function(e){return{__await:e}},w(E.prototype),E.prototype[n]=function(){return this},a.AsyncIterator=E,a.async=function(e,t,r,n){var o=new E(y(e,t,r,n));return a.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},w(v),v[i]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},a.keys=function(r){var n=[];for(var e in r)n.push(e);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=$,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&u.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=c)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(e,t){return i.type="throw",i.arg=r,n.next=e,t&&(n.method="next",n.arg=c),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),s=u.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:$(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=c),h}}}function y(e,t,r,n){var i,a,s,c,o=t&&t.prototype instanceof b?t:b,u=Object.create(o.prototype),l=new j(n||[]);return u._invoke=(i=e,a=r,s=l,c=f,function(e,t){if(c===_)throw new Error("Generator is already running");if(c===d){if("throw"===e)throw t;return M()}for(s.method=e,s.arg=t;;){var r=s.delegate;if(r){var n=T(r,s);if(n){if(n===h)continue;return n}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(c===f)throw c=d,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);c=_;var o=g(i,a,s);if("normal"===o.type){if(c=s.done?d:p,o.arg===h)continue;return{value:o.arg,done:s.done}}"throw"===o.type&&(c=d,s.method="throw",s.arg=o.arg)}}),u}function g(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function b(){}function O(){}function x(){}function w(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function E(c){var t;this._invoke=function(r,n){function e(){return new Promise(function(e,t){!function t(e,r,n,o){var i=g(c[e],c,r);if("throw"!==i.type){var a=i.arg,s=a.value;return s&&"object"==typeof s&&u.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,n,o)},function(e){t("throw",e,n,o)}):Promise.resolve(s).then(function(e){a.value=e,n(a)},o)}o(i.arg)}(r,n,e,t)})}return t=t?t.then(e,e):e()}}function T(e,t){var r=e.iterator[t.method];if(r===c){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=c,T(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=g(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=c),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function $(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(u.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=c,e.done=!0,e};return n.next=n}}return{next:M}}function M(){return{value:c,done:!0}}}(function(){return this}()||Function("return this")())}),g=function(){return this}()||Function("return this")(),hadRuntime=g.regeneratorRuntime&&0<=Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime"),oldRuntime=hadRuntime&&g.regeneratorRuntime;g.regeneratorRuntime=void 0;var runtimeModule=runtime;if(hadRuntime)g.regeneratorRuntime=oldRuntime;else try{delete g.regeneratorRuntime}catch(e){g.regeneratorRuntime=void 0}var regenerator=runtimeModule,_defined=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},_toObject=function(e){return Object(_defined(e))},hasOwnProperty={}.hasOwnProperty,_has=function(e,t){return hasOwnProperty.call(e,t)},toString={}.toString,_cof=function(e){return toString.call(e).slice(8,-1)},_iobject=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==_cof(e)?e.split(""):Object(e)},_toIobject=function(e){return _iobject(_defined(e))},ceil=Math.ceil,floor=Math.floor,_toInteger=function(e){return isNaN(e=+e)?0:(0<e?floor:ceil)(e)},min=Math.min,_toLength=function(e){return 0<e?min(_toInteger(e),9007199254740991):0},max=Math.max,min$1=Math.min,_toAbsoluteIndex=function(e,t){return(e=_toInteger(e))<0?max(e+t,0):min$1(e,t)},_arrayIncludes=function(s){return function(e,t,r){var n,o=_toIobject(e),i=_toLength(o.length),a=_toAbsoluteIndex(r,i);if(s&&t!=t){for(;a<i;)if((n=o[a++])!=n)return!0}else for(;a<i;a++)if((s||a in o)&&o[a]===t)return s||a||0;return!s&&-1}},_global=createCommonjsModule(function(e){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)}),SHARED="__core-js_shared__",store=_global[SHARED]||(_global[SHARED]={}),_shared=function(e){return store[e]||(store[e]={})},id=0,px=Math.random(),_uid=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++id+px).toString(36))},shared=_shared("keys"),_sharedKey=function(e){return shared[e]||(shared[e]=_uid(e))},arrayIndexOf=_arrayIncludes(!1),IE_PROTO=_sharedKey("IE_PROTO"),_objectKeysInternal=function(e,t){var r,n=_toIobject(e),o=0,i=[];for(r in n)r!=IE_PROTO&&_has(n,r)&&i.push(r);for(;t.length>o;)_has(n,r=t[o++])&&(~arrayIndexOf(i,r)||i.push(r));return i},_enumBugKeys="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),_objectKeys=Object.keys||function(e){return _objectKeysInternal(e,_enumBugKeys)},_aFunction=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e},_ctx=function(n,o,e){if(_aFunction(n),void 0===o)return n;switch(e){case 1:return function(e){return n.call(o,e)};case 2:return function(e,t){return n.call(o,e,t)};case 3:return function(e,t,r){return n.call(o,e,t,r)}}return function(){return n.apply(o,arguments)}},_isObject=function(e){return"object"==typeof e?null!==e:"function"==typeof e},_anObject=function(e){if(!_isObject(e))throw TypeError(e+" is not an object!");return e},_fails=function(e){try{return!!e()}catch(e){return!0}},_descriptors=!_fails(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),document$1=_global.document,is=_isObject(document$1)&&_isObject(document$1.createElement),_domCreate=function(e){return is?document$1.createElement(e):{}},_ie8DomDefine=!_descriptors&&!_fails(function(){return 7!=Object.defineProperty(_domCreate("div"),"a",{get:function(){return 7}}).a}),_toPrimitive=function(e,t){if(!_isObject(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!_isObject(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!_isObject(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!_isObject(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")},dP=Object.defineProperty,f=_descriptors?Object.defineProperty:function(e,t,r){if(_anObject(e),t=_toPrimitive(t,!0),_anObject(r),_ie8DomDefine)try{return dP(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e},_objectDp={f:f},_propertyDesc=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},_hide=_descriptors?function(e,t,r){return _objectDp.f(e,t,_propertyDesc(1,r))}:function(e,t,r){return e[t]=r,e},PROTOTYPE="prototype",$export=function(e,t,r){var n,o,i,a=e&$export.F,s=e&$export.G,c=e&$export.S,u=e&$export.P,l=e&$export.B,f=e&$export.W,p=s?_core:_core[t]||(_core[t]={}),_=p[PROTOTYPE],d=s?_global:c?_global[t]:(_global[t]||{})[PROTOTYPE];for(n in s&&(r=t),r)(o=!a&&d&&void 0!==d[n])&&n in p||(i=o?d[n]:r[n],p[n]=s&&"function"!=typeof d[n]?r[n]:l&&o?_ctx(i,_global):f&&d[n]==i?function(n){var e=function(e,t,r){if(this instanceof n){switch(arguments.length){case 0:return new n;case 1:return new n(e);case 2:return new n(e,t)}return new n(e,t,r)}return n.apply(this,arguments)};return e[PROTOTYPE]=n[PROTOTYPE],e}(i):u&&"function"==typeof i?_ctx(Function.call,i):i,u&&((p.virtual||(p.virtual={}))[n]=i,e&$export.R&&_&&!_[n]&&_hide(_,n,i)))};$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128;var _export=$export,_objectSap=function(e,t){var r=(_core.Object||{})[e]||Object[e],n={};n[e]=t(r),_export(_export.S+_export.F*_fails(function(){r(1)}),"Object",n)};_objectSap("keys",function(){return function(e){return _objectKeys(_toObject(e))}});var keys$1=_core.Object.keys,keys=createCommonjsModule(function(e){e.exports={default:keys$1,__esModule:!0}}),_Object$keys=unwrapExports(keys),_stringAt=function(s){return function(e,t){var r,n,o=String(_defined(e)),i=_toInteger(t),a=o.length;return i<0||a<=i?s?"":void 0:(r=o.charCodeAt(i))<55296||56319<r||i+1===a||(n=o.charCodeAt(i+1))<56320||57343<n?s?o.charAt(i):r:s?o.slice(i,i+2):n-56320+(r-55296<<10)+65536}},_library=!0,_redefine=_hide,_iterators={},_objectDps=_descriptors?Object.defineProperties:function(e,t){_anObject(e);for(var r,n=_objectKeys(t),o=n.length,i=0;i<o;)_objectDp.f(e,r=n[i++],t[r]);return e},document$2=_global.document,_html=document$2&&document$2.documentElement,IE_PROTO$1=_sharedKey("IE_PROTO"),Empty=function(){},PROTOTYPE$1="prototype",createDict=function(){var e,t=_domCreate("iframe"),r=_enumBugKeys.length;for(t.style.display="none",_html.appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),createDict=e.F;r--;)delete createDict[PROTOTYPE$1][_enumBugKeys[r]];return createDict()},_objectCreate=Object.create||function(e,t){var r;return null!==e?(Empty[PROTOTYPE$1]=_anObject(e),r=new Empty,Empty[PROTOTYPE$1]=null,r[IE_PROTO$1]=e):r=createDict(),void 0===t?r:_objectDps(r,t)},_wks=createCommonjsModule(function(e){var t=_shared("wks"),r=_global.Symbol,n="function"==typeof r;(e.exports=function(e){return t[e]||(t[e]=n&&r[e]||(n?r:_uid)("Symbol."+e))}).store=t}),def=_objectDp.f,TAG=_wks("toStringTag"),_setToStringTag=function(e,t,r){e&&!_has(e=r?e:e.prototype,TAG)&&def(e,TAG,{configurable:!0,value:t})},IteratorPrototype={};_hide(IteratorPrototype,_wks("iterator"),function(){return this});var _iterCreate=function(e,t,r){e.prototype=_objectCreate(IteratorPrototype,{next:_propertyDesc(1,r)}),_setToStringTag(e,t+" Iterator")},IE_PROTO$2=_sharedKey("IE_PROTO"),ObjectProto=Object.prototype,_objectGpo=Object.getPrototypeOf||function(e){return e=_toObject(e),_has(e,IE_PROTO$2)?e[IE_PROTO$2]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?ObjectProto:null},ITERATOR=_wks("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this},_iterDefine=function(e,t,r,n,o,i,a){_iterCreate(r,t,n);var s,c,u,l=function(e){if(!BUGGY&&e in d)return d[e];switch(e){case KEYS:case VALUES:return function(){return new r(this,e)}}return function(){return new r(this,e)}},f=t+" Iterator",p=o==VALUES,_=!1,d=e.prototype,h=d[ITERATOR]||d[FF_ITERATOR]||o&&d[o],m=!BUGGY&&h||l(o),v=o?p?l("entries"):m:void 0,y="Array"==t&&d.entries||h;if(y&&(u=_objectGpo(y.call(new e)))!==Object.prototype&&u.next&&(_setToStringTag(u,f,!0),_library||_has(u,ITERATOR)||_hide(u,ITERATOR,returnThis)),p&&h&&h.name!==VALUES&&(_=!0,m=function(){return h.call(this)}),_library&&!a||!BUGGY&&!_&&d[ITERATOR]||_hide(d,ITERATOR,m),_iterators[t]=m,_iterators[f]=returnThis,o)if(s={values:p?m:l(VALUES),keys:i?m:l(KEYS),entries:v},a)for(c in s)c in d||_redefine(d,c,s[c]);else _export(_export.P+_export.F*(BUGGY||_),t,s);return s},$at=_stringAt(!0);_iterDefine(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=$at(t,r),this._i+=e.length,{value:e,done:!1})});var _iterStep=function(e,t){return{value:t,done:!!e}},es6_array_iterator=_iterDefine(Array,"Array",function(e,t){this._t=_toIobject(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,_iterStep(1)):_iterStep(0,"keys"==t?r:"values"==t?e[r]:[r,e[r]])},"values");_iterators.Arguments=_iterators.Array;for(var TO_STRING_TAG=_wks("toStringTag"),DOMIterables="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),i=0;i<DOMIterables.length;i++){var NAME=DOMIterables[i],Collection=_global[NAME],proto=Collection&&Collection.prototype;proto&&!proto[TO_STRING_TAG]&&_hide(proto,TO_STRING_TAG,NAME),_iterators[NAME]=_iterators.Array}var defer,channel,port,TAG$1=_wks("toStringTag"),ARG="Arguments"==_cof(function(){return arguments}()),tryGet=function(e,t){try{return e[t]}catch(e){}},_classof=function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=tryGet(t=Object(e),TAG$1))?r:ARG?_cof(t):"Object"==(n=_cof(t))&&"function"==typeof t.callee?"Arguments":n},_anInstance=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e},_iterCall=function(t,e,r,n){try{return n?e(_anObject(r)[0],r[1]):e(r)}catch(e){var o=t.return;throw void 0!==o&&_anObject(o.call(t)),e}},ITERATOR$1=_wks("iterator"),ArrayProto=Array.prototype,_isArrayIter=function(e){return void 0!==e&&(_iterators.Array===e||ArrayProto[ITERATOR$1]===e)},ITERATOR$2=_wks("iterator"),core_getIteratorMethod=_core.getIteratorMethod=function(e){if(null!=e)return e[ITERATOR$2]||e["@@iterator"]||_iterators[_classof(e)]},_forOf=createCommonjsModule(function(e){var p={},_={},t=e.exports=function(e,t,r,n,o){var i,a,s,c,u=o?function(){return e}:core_getIteratorMethod(e),l=_ctx(r,n,t?2:1),f=0;if("function"!=typeof u)throw TypeError(e+" is not iterable!");if(_isArrayIter(u)){for(i=_toLength(e.length);f<i;f++)if((c=t?l(_anObject(a=e[f])[0],a[1]):l(e[f]))===p||c===_)return c}else for(s=u.call(e);!(a=s.next()).done;)if((c=_iterCall(s,l,a.value,t))===p||c===_)return c};t.BREAK=p,t.RETURN=_}),SPECIES=_wks("species"),_speciesConstructor=function(e,t){var r,n=_anObject(e).constructor;return void 0===n||null==(r=_anObject(n)[SPECIES])?t:_aFunction(r)},_invoke=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)},process$1=_global.process,setTask=_global.setImmediate,clearTask=_global.clearImmediate,MessageChannel=_global.MessageChannel,Dispatch=_global.Dispatch,counter=0,queue={},ONREADYSTATECHANGE="onreadystatechange",run=function(){var e=+this;if(queue.hasOwnProperty(e)){var t=queue[e];delete queue[e],t()}},listener=function(e){run.call(e.data)};setTask&&clearTask||(setTask=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return queue[++counter]=function(){_invoke("function"==typeof e?e:Function(e),t)},defer(counter),counter},clearTask=function(e){delete queue[e]},"process"==_cof(process$1)?defer=function(e){process$1.nextTick(_ctx(run,e,1))}:Dispatch&&Dispatch.now?defer=function(e){Dispatch.now(_ctx(run,e,1))}:MessageChannel?(port=(channel=new MessageChannel).port2,channel.port1.onmessage=listener,defer=_ctx(port.postMessage,port,1)):_global.addEventListener&&"function"==typeof postMessage&&!_global.importScripts?(defer=function(e){_global.postMessage(e+"","*")},_global.addEventListener("message",listener,!1)):defer=ONREADYSTATECHANGE in _domCreate("script")?function(e){_html.appendChild(_domCreate("script"))[ONREADYSTATECHANGE]=function(){_html.removeChild(this),run.call(e)}}:function(e){setTimeout(_ctx(run,e,1),0)});var _task={set:setTask,clear:clearTask},macrotask=_task.set,Observer=_global.MutationObserver||_global.WebKitMutationObserver,process$2=_global.process,Promise$1=_global.Promise,isNode$1="process"==_cof(process$2),_microtask=function(){var r,n,o,e=function(){var e,t;for(isNode$1&&(e=process$2.domain)&&e.exit();r;){t=r.fn,r=r.next;try{t()}catch(e){throw r?o():n=void 0,e}}n=void 0,e&&e.enter()};if(isNode$1)o=function(){process$2.nextTick(e)};else if(!Observer||_global.navigator&&_global.navigator.standalone)if(Promise$1&&Promise$1.resolve){var t=Promise$1.resolve();o=function(){t.then(e)}}else o=function(){macrotask.call(_global,e)};else{var i=!0,a=document.createTextNode("");new Observer(e).observe(a,{characterData:!0}),o=function(){a.data=i=!i}}return function(e){var t={fn:e,next:void 0};n&&(n.next=t),r||(r=t,o()),n=t}};function PromiseCapability(e){var r,n;this.promise=new e(function(e,t){if(void 0!==r||void 0!==n)throw TypeError("Bad Promise constructor");r=e,n=t}),this.resolve=_aFunction(r),this.reject=_aFunction(n)}var f$1=function(e){return new PromiseCapability(e)},_newPromiseCapability={f:f$1},_perform=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}},_promiseResolve=function(e,t){if(_anObject(e),_isObject(t)&&t.constructor===e)return t;var r=_newPromiseCapability.f(e);return(0,r.resolve)(t),r.promise},_redefineAll=function(e,t,r){for(var n in t)r&&e[n]?e[n]=t[n]:_hide(e,n,t[n]);return e},SPECIES$1=_wks("species"),_setSpecies=function(e){var t="function"==typeof _core[e]?_core[e]:_global[e];_descriptors&&t&&!t[SPECIES$1]&&_objectDp.f(t,SPECIES$1,{configurable:!0,get:function(){return this}})},ITERATOR$3=_wks("iterator"),SAFE_CLOSING=!1;try{var riter=[7][ITERATOR$3]();riter.return=function(){SAFE_CLOSING=!0}}catch(e){}var Internal,newGenericPromiseCapability,OwnPromiseCapability,Wrapper,_iterDetect=function(e,t){if(!t&&!SAFE_CLOSING)return!1;var r=!1;try{var n=[7],o=n[ITERATOR$3]();o.next=function(){return{done:r=!0}},n[ITERATOR$3]=function(){return o},e(n)}catch(e){}return r},task=_task.set,microtask=_microtask(),PROMISE="Promise",TypeError$1=_global.TypeError,process=_global.process,$Promise=_global[PROMISE],isNode="process"==_classof(process),empty=function(){},newPromiseCapability=newGenericPromiseCapability=_newPromiseCapability.f,USE_NATIVE=!!function(){try{var e=$Promise.resolve(1),t=(e.constructor={})[_wks("species")]=function(e){e(empty,empty)};return(isNode||"function"==typeof PromiseRejectionEvent)&&e.then(empty)instanceof t}catch(e){}}(),isThenable=function(e){var t;return!(!_isObject(e)||"function"!=typeof(t=e.then))&&t},notify=function(u,r){if(!u._n){u._n=!0;var n=u._c;microtask(function(){for(var s=u._v,c=1==u._s,e=0,t=function(e){var t,r,n=c?e.ok:e.fail,o=e.resolve,i=e.reject,a=e.domain;try{n?(c||(2==u._h&&onHandleUnhandled(u),u._h=1),!0===n?t=s:(a&&a.enter(),t=n(s),a&&a.exit()),t===e.promise?i(TypeError$1("Promise-chain cycle")):(r=isThenable(t))?r.call(t,o,i):o(t)):i(s)}catch(e){i(e)}};n.length>e;)t(n[e++]);u._c=[],u._n=!1,r&&!u._h&&onUnhandled(u)})}},onUnhandled=function(i){task.call(_global,function(){var e,t,r,n=i._v,o=isUnhandled(i);if(o&&(e=_perform(function(){isNode?process.emit("unhandledRejection",n,i):(t=_global.onunhandledrejection)?t({promise:i,reason:n}):(r=_global.console)&&r.error&&r.error("Unhandled promise rejection",n)}),i._h=isNode||isUnhandled(i)?2:1),i._a=void 0,o&&e.e)throw e.v})},isUnhandled=function(e){return 1!==e._h&&0===(e._a||e._c).length},onHandleUnhandled=function(t){task.call(_global,function(){var e;isNode?process.emit("rejectionHandled",t):(e=_global.onrejectionhandled)&&e({promise:t,reason:t._v})})},$reject=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),notify(t,!0))},$resolve=function(e){var r,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===e)throw TypeError$1("Promise can't be resolved itself");(r=isThenable(e))?microtask(function(){var t={_w:n,_d:!1};try{r.call(e,_ctx($resolve,t,1),_ctx($reject,t,1))}catch(e){$reject.call(t,e)}}):(n._v=e,n._s=1,notify(n,!1))}catch(e){$reject.call({_w:n,_d:!1},e)}}};USE_NATIVE||($Promise=function(e){_anInstance(this,$Promise,PROMISE,"_h"),_aFunction(e),Internal.call(this);try{e(_ctx($resolve,this,1),_ctx($reject,this,1))}catch(e){$reject.call(this,e)}},(Internal=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=_redefineAll($Promise.prototype,{then:function(e,t){var r=newPromiseCapability(_speciesConstructor(this,$Promise));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=isNode?process.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&notify(this,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),OwnPromiseCapability=function(){var e=new Internal;this.promise=e,this.resolve=_ctx($resolve,e,1),this.reject=_ctx($reject,e,1)},_newPromiseCapability.f=newPromiseCapability=function(e){return e===$Promise||e===Wrapper?new OwnPromiseCapability(e):newGenericPromiseCapability(e)}),_export(_export.G+_export.W+_export.F*!USE_NATIVE,{Promise:$Promise}),_setToStringTag($Promise,PROMISE),_setSpecies(PROMISE),Wrapper=_core[PROMISE],_export(_export.S+_export.F*!USE_NATIVE,PROMISE,{reject:function(e){var t=newPromiseCapability(this);return(0,t.reject)(e),t.promise}}),_export(_export.S+_export.F*(_library||!USE_NATIVE),PROMISE,{resolve:function(e){return _promiseResolve(_library&&this===Wrapper?$Promise:this,e)}}),_export(_export.S+_export.F*!(USE_NATIVE&&_iterDetect(function(e){$Promise.all(e).catch(empty)})),PROMISE,{all:function(e){var a=this,t=newPromiseCapability(a),s=t.resolve,c=t.reject,r=_perform(function(){var n=[],o=0,i=1;_forOf(e,!1,function(e){var t=o++,r=!1;n.push(void 0),i++,a.resolve(e).then(function(e){r||(r=!0,n[t]=e,--i||s(n))},c)}),--i||s(n)});return r.e&&c(r.v),t.promise},race:function(e){var t=this,r=newPromiseCapability(t),n=r.reject,o=_perform(function(){_forOf(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o.e&&n(o.v),r.promise}}),_export(_export.P+_export.R,"Promise",{finally:function(t){var r=_speciesConstructor(this,_core.Promise||_global.Promise),e="function"==typeof t;return this.then(e?function(e){return _promiseResolve(r,t()).then(function(){return e})}:t,e?function(e){return _promiseResolve(r,t()).then(function(){throw e})}:t)}}),_export(_export.S,"Promise",{try:function(e){var t=_newPromiseCapability.f(this),r=_perform(e);return(r.e?t.reject:t.resolve)(r.v),t.promise}});var promise$2=_core.Promise,promise=createCommonjsModule(function(e){e.exports={default:promise$2,__esModule:!0}});unwrapExports(promise);var asyncToGenerator=createCommonjsModule(function(e,t){t.__esModule=!0;var r,c=(r=promise)&&r.__esModule?r:{default:r};t.default=function(e){return function(){var s=e.apply(this,arguments);return new c.default(function(i,a){return function t(e,r){try{var n=s[e](r),o=n.value}catch(e){return void a(e)}if(!n.done)return c.default.resolve(o).then(function(e){t("next",e)},function(e){t("throw",e)});i(o)}("next")})}}}),_asyncToGenerator=unwrapExports(asyncToGenerator),getActions=function(e){var t,r,n,o,i,a,s,c=(t=_asyncToGenerator(regenerator.mark(function e(t){var r,n,o,i,a=t.state,s=t.commit,c=t.rootState;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s("reqStart"),!c.token||!a.active){e.next=22;break}return e.prev=2,void 0!==c.isLoading&&(c.isLoading=!0),e.next=6,h.connector.gw.getDevicesTelemetry(a.active);case 6:r=e.sent,y(n=r.data),o=[],(i=n.result&&n.result[0]&&n.result[0].telemetry?_Object$keys(n.result[0].telemetry):[]).includes("position")&&i.splice(i.indexOf("position"),1),i.length&&(o=i.reduce(function(e,t){return"timestamp"===t?e.unshift({name:t,width:190,display:!0}):e.push({name:t,width:150,display:!0}),e},[])),o.length?s("setCols",o):s("setCols",[]),void 0!==c.isLoading&&(c.isLoading=!1),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(2),m&&m(e.t0),DEV&&console.log(e.t0),void 0!==c.isLoading&&(c.isLoading=!1);case 22:case"end":return e.stop()}},e,this,[[2,17]])})),function(e){return t.apply(this,arguments)}),u=(r=_asyncToGenerator(regenerator.mark(function e(t){var i,a,s,c,u=t.state,l=t.commit,f=t.rootState;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!f.token||!u.active){e.next=20;break}return e.prev=1,void 0!==f.isLoading&&(f.isLoading=!0),i={reverse:!0,count:1,fields:"timestamp"},e.next=6,h.connector.gw.getDevicesMessages(u.active,{data:_JSON$stringify(i)});case 6:a=e.sent,y(s=a.data),c=Date.now(),s.result.length&&(c=Math.round(1e3*s.result[0].timestamp)),l("setDate",(t=c,void 0,void 0,void 0,r=t||Date.now(),n=new Date(r).setHours(0,0,0,0),o=n+864e5,{from:n,to:o}).from),void 0!==f.isLoading&&(f.isLoading=!1),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(1),m&&m(e.t0),DEV&&console.log(e.t0),void 0!==f.isLoading&&(f.isLoading=!1);case 20:case"end":return e.stop()}var t,r,n,o},e,this,[[1,15]])})),function(e){return r.apply(this,arguments)}),l=(n=_asyncToGenerator(regenerator.mark(function e(t,r){var n,o,i,a,s=t.state,c=t.commit,u=t.rootState;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c("reqStart"),r&&(n=r.name,o=r.payload,c("clearMessages"),c(n,o)),!u.token||!s.active){e.next=42;break}return e.prev=3,void 0===u.isLoading||s.timerId||(u.isLoading=!0),e.next=7,h.connector.gw.getDevicesMessages(s.active,{data:_JSON$stringify(v(s))});case 7:if(i=e.sent,y(a=i.data),!r){e.next=33;break}if(!a.result.length){e.next=16;break}c("setMessages",a.result),c("postaction"),e.next=31;break;case 16:c("postaction"),e.t0=r.name,e.next="paginationPrev"===e.t0?20:"paginationNext"===e.t0?26:29;break;case 20:return c("datePrev"),c("paginationPrev"),e.next=24,l({state:s,commit:c,rootState:u});case 24:return c("postaction"),e.abrupt("break",31);case 26:return l({state:s,commit:c,rootState:u},{name:"dateNext"}),c("postaction"),e.abrupt("break",31);case 29:c("setMessages",a.result),c("postaction");case 31:e.next=34;break;case 33:c("setMessages",a.result);case 34:void 0===u.isLoading||s.timerId||(u.isLoading=!1),e.next=42;break;case 37:e.prev=37,e.t1=e.catch(3),m&&m(e.t1),DEV&&console.log(e.t1),void 0===u.isLoading||s.timerId||(u.isLoading=!1);case 42:case"end":return e.stop()}},e,this,[[3,37]])})),function(e,t){return n.apply(this,arguments)}),f=(o=_asyncToGenerator(regenerator.mark(function e(t,r){var n,o,i=t.state,a=t.commit,s=t.rootState;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.limit,o=i.filter,a("setReverse",!0),a("setLimit",r),a("setFilter",""),e.next=6,l({state:i,commit:a,rootState:s});case 6:a("setReverse",!1),a("setLimit",n),a("setFilter",o);case 9:case"end":return e.stop()}},e,this)})),function(e,t){return o.apply(this,arguments)}),p=(i=_asyncToGenerator(regenerator.mark(function e(t){var r=t.state,n=t.commit;t.rootState;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.connector.subscribeMessagesDevices(r.active,function(e){1===r.mode?n("setMessages",[JSON.parse(e)]):n("setNewMessagesCount",r.newMessagesCount+1)},{rh:2});case 2:case"end":return e.stop()}},e,this)})),function(e){return i.apply(this,arguments)}),_=(a=_asyncToGenerator(regenerator.mark(function e(t){var r=t.state;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.connector.unsubscribeMessagesDevices(r.active);case 2:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)}),d=(s=_asyncToGenerator(regenerator.mark(function e(t){var r,n,o,i,a=t.state,s=t.commit,c=t.rootState;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.token||!a.active){e.next=19;break}return e.prev=1,void 0!==c.isLoading&&(c.isLoading=!0),r=a.messages.reduceRight(function(e,t,r){return e||("offline"===t.__connectionStatus&&(e=r),e)},0),n={from:r?Math.floor(a.messages[r-1].timestamp)+1:0,to:Math.floor(a.messages[r+1].timestamp)},e.next=7,h.connector.gw.getDevicesMessages(a.active,{data:_JSON$stringify(n)});case 7:o=e.sent,y(i=o.data),s("setMissingMessages",{data:i.result,index:r}),void 0!==c.isLoading&&(c.isLoading=!1),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(1),m&&m(e.t0),DEV&&console.log(e.t0),void 0!==c.isLoading&&(c.isLoading=!1);case 19:case"end":return e.stop()}},e,this,[[1,14]])})),function(e){return s.apply(this,arguments)}),h=e.Vue,m=e.errorHandler;function v(e){var t={};return e.limit&&(t.count=e.limit),e.filter&&e.sysFilter?1===e.mode?t.filter=""+e.sysFilter:t.filter=e.sysFilter+","+e.filter:e.sysFilter&&!e.filter?t.filter=""+e.sysFilter:!e.sysFilter&&e.filter&&0===e.mode&&(t.filter=""+e.filter),!e.from||e.reverse&&1!==e.mode||e.reverse||(t.from=Math.floor(e.from/1e3)),e.to&&(1===e.mode&&(e.to=Date.now()),t.to=Math.floor(e.to/1e3)),e.reverse&&(t.reverse=e.reverse),t}function y(e){e.errors&&e.errors.forEach(function(e){var t=new Error(e.reason);m&&m(t)})}return{get:l,pollingGet:p,getCols:c,getHistory:f,initTime:u,unsubscribePooling:_,getMissedMessages:d}};_export(_export.S+_export.F*!_descriptors,"Object",{defineProperty:_objectDp.f});var $Object=_core.Object,defineProperty$3=function(e,t,r){return $Object.defineProperty(e,t,r)},defineProperty$1=createCommonjsModule(function(e){e.exports={default:defineProperty$3,__esModule:!0}});unwrapExports(defineProperty$1);var defineProperty=createCommonjsModule(function(e,t){t.__esModule=!0;var r,n=(r=defineProperty$1)&&r.__esModule?r:{default:r};t.default=function(e,t,r){return t in e?(0,n.default)(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}}),_defineProperty=unwrapExports(defineProperty),_createProperty=function(e,t,r){t in e?_objectDp.f(e,t,_propertyDesc(0,r)):e[t]=r};_export(_export.S+_export.F*!_iterDetect(function(e){}),"Array",{from:function(e){var t,r,n,o,i=_toObject(e),a="function"==typeof this?this:Array,s=arguments.length,c=1<s?arguments[1]:void 0,u=void 0!==c,l=0,f=core_getIteratorMethod(i);if(u&&(c=_ctx(c,2<s?arguments[2]:void 0,2)),null==f||a==Array&&_isArrayIter(f))for(r=new a(t=_toLength(i.length));l<t;l++)_createProperty(r,l,u?c(i[l],l):i[l]);else for(o=f.call(i),r=new a;!(n=o.next()).done;l++)_createProperty(r,l,u?_iterCall(o,c,[n.value,l],!0):n.value);return r.length=l,r}});var from$2=_core.Array.from,from=createCommonjsModule(function(e){e.exports={default:from$2,__esModule:!0}});unwrapExports(from);var toConsumableArray=createCommonjsModule(function(e,t){t.__esModule=!0;var r,n=(r=from)&&r.__esModule?r:{default:r};t.default=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return(0,n.default)(e)}}),_toConsumableArray=unwrapExports(toConsumableArray),getMutations=function(e){var t,r=(t=_asyncToGenerator(regenerator.mark(function e(t){return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a(t),t.filter="",t.mode=null,t.from=0,t.to=0,t.limit=1e3,t.reverse=!1,e.next=9,l.connector.unsubscribeMessagesDevices(t.active);case 9:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)}),l=e.Vue,i=e.LocalStorage,f=e.filterHandler;function o(e){var t=e||Date.now(),r=new Date(t).setHours(0,0,0,0);return{from:r,to:r+864e5}}function n(e,t){if(t&&t.length){e.reverse&&(t.reverse(),1===e.mode&&(t[t.length-1].delimiter=!0)),1===e.mode&&(l.set(e,"from",Math.floor(1e3*(t[t.length-1].timestamp+1))),e.filter&&f&&(t=f(e.filter,t)));var r=e.messages;if(e.sortBy&&1===e.mode)if(1<t.length)r=r.concat(t);else{var n=t[0],o=e.sortBy,i=e.messages.length-1,a=null,s=!0;if(0<i)for(var c=i;0!==c||s;c--)r[c][o]>n[o]?0===(a=c)&&(s=!1):s=!1;a?r.splice(a,0,n):r.push(n)}else r=r.concat(t);if(e.limit&&1===e.mode&&r.length>=e.limit+.1*e.limit){var u=r.length-1-(e.limit-1);r=r.slice(u),l.set(e,"selected",e.selected-u)}l.set(e,"messages",r)}else 1===e.mode&&l.set(e,"from",e.to+1e3)}function a(e){l.set(e,"messages",[]),p(e)}function s(e,t){l.set(e,"from",t)}function c(e,t){l.set(e,"to",t)}function u(e,t){l.set(e,"reverse",t)}function p(e){l.set(e,"selected",null)}return{setOffline:function(e,t){t&&n(e,[{__connectionStatus:"offline",timestamp:Date.now()/1e3}]),e.offline=!0},setReconnected:function(e,t){t&&n(e,[{__connectionStatus:"reconnected",timestamp:Date.now()/1e3}]),e.offline=!1},setMissingMessages:function(e,t){var r,n=t.data,o=t.index;n.forEach(function(e){e.__status="missed"}),(r=e.messages).splice.apply(r,[o+1,0].concat(_toConsumableArray(n)))},setMessages:n,clearMessages:a,setLimit:function(e,t){l.set(e,"limit",t)},setFilter:function(e,t){e.filter!==t&&(1===e.mode&&(e.filter&&e.messages.push({"x-flespi-filter-prev":e.filter}),t&&e.messages.push({"x-flespi-filter-next":t})),l.set(e,"filter",t))},setMode:function(e,t){switch(t){case 0:var r=e.from?o(e.from):o();e.from=r.from,e.to=r.to,a(e);break;case 1:var n=Date.now()-4e3;e.from=n-1e3,e.to=n,a(e),e.newMessagesCount=0}l.set(e,"mode",t)},setFrom:s,setTo:c,reqStart:function(){DEV&&console.log("Start Request Devices messages")},setReverse:u,dateNext:function(e){var t=o(e.from+864e5);e.from=t.from,e.to=t.to},datePrev:function(e){var t=o(e.from-864e5);e.from=t.from,e.to=t.to},paginationPrev:function(e,t){e.reverse=!0,e.sysFilter+="timestamp>="+o(e.from).from/1e3,t&&(e.from=o(t).from,e.to=t-1e3)},paginationNext:function(e,t){e.sysFilter+="timestamp<="+e.to/1e3,t&&(e.to=o(t).to,e.from=t+1e3)},setDate:function(e,t){var r=o(t);if(r.from===t)return!1;e.from=t,e.to=r.to},postaction:function(e){var t=o(e.from);s(e,e.from||t.from),c(e,t.to),e.reverse&&u(e,!1),e.sysFilter=""},clear:r,setActive:function(e,t){e.newMessagesCount=0,l.set(e,"active",t)},setCols:function(n,e){var o=i.get.item(n.name);if(o){if(o[n.active]&&o[n.active].length)if(e.length>=o[n.active].length){var t=e.reduce(function(e,t,r){return o[n.active].find(function(e){return e.name===t.name})||e.push(t),e},[]);o[n.active]=[].concat(_toConsumableArray(o[n.active]),_toConsumableArray(t))}else o[n.active]=e.reduce(function(e,t){var r=o[n.active].find(function(e){return e.name===t.name});return r?e.push(r):e.push(t),e},[]);else o[n.active]=e;i.set(n.name,o),l.set(n,"cols",o[n.active])}else i.set(n.name,_defineProperty({},n.active,e)),l.set(n,"cols",e)},updateCols:function(e,t){var r=i.get.item(e.name);r&&(r[e.active]=t,i.set(e.name,r)),l.set(e,"cols",t)},setNewMessagesCount:function(e,t){l.set(e,"newMessagesCount",t)},setSelected:function(e,t){l.set(e,"selected",t)},clearSelected:p,setSortBy:function(e,t){l.set(e,"sortBy",t)},clearSortBy:function(e){l.set(e,"sortBy",null)}}},index=function(e){var t=e.Vue,r=e.LocalStorage,n=e.name,o=e.errorHandler,i=e.filterHandler;return{namespaced:!0,state:{name:n,active:0,messages:[],filter:"",sysFilter:"",mode:null,from:0,to:0,limit:1e3,reverse:!1,cols:[],newMessagesCount:0,offline:!1,selected:null,sortBy:null},actions:getActions({Vue:t,errorHandler:o}),mutations:getMutations({Vue:t,LocalStorage:r,filterHandler:i})}};module.exports=index;
