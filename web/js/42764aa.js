/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.2",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.2",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.2",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.2",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.2",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.2",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.2",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.2",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.2",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.2",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()
}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.2",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
YUI 3.18.1 (build f7e7bcb)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

typeof YUI!="undefined"&&(YUI._YUI=YUI);var YUI=function(){var e=0,t=this,n=arguments,r=n.length,i=function(e,t){return e&&e.hasOwnProperty&&e instanceof t},s=typeof YUI_config!="undefined"&&YUI_config;i(t,YUI)?(t._init(),YUI.GlobalConfig&&t.applyConfig(YUI.GlobalConfig),s&&t.applyConfig(s),r||(t._afterConfig(),t._setup())):t=new YUI;if(r){for(;e<r;e++)t.applyConfig(n[e]);t._afterConfig(),t._setup()}return t.instanceOf=i,t};(function(){var e,t,n="3.18.1",r=".",i="http://yui.yahooapis.com/",s="yui3-js-enabled",o="yui3-css-stamp",u=function(){},a=Array.prototype.slice,f={"io.xdrReady":1,"io.xdrResponse":1,"SWF.eventHandler":1},l=typeof window!="undefined",c=l?window:null,h=l?c.document:null,p=h&&h.documentElement,d=p&&p.className,v={},m=(new Date).getTime(),g=function(e,t,n,r){e&&e.addEventListener?e.addEventListener(t,n,r):e&&e.attachEvent&&e.attachEvent("on"+t,n)},y=function(e,t,n,r){if(e&&e.removeEventListener)try{e.removeEventListener(t,n,r)}catch(i){}else e&&e.detachEvent&&e.detachEvent("on"+t,n)},b=function(){YUI.Env.DOMReady=!0,l&&y(h,"DOMContentLoaded",b)},w=function(){YUI.Env.windowLoaded=!0,YUI.Env.DOMReady=!0,l&&y(window,"load",w)},E=function(e,t){var n=e.Env._loader,r=["loader-base"],i=YUI.Env,s=i.mods;return n?(n.ignoreRegistered=!1,n.onEnd=null,n.data=null,n.required=[],n.loadType=null):(n=new e.Loader(e.config),e.Env._loader=n),s&&s.loader&&(r=[].concat(r,YUI.Env.loaderExtras)),YUI.Env.core=e.Array.dedupe([].concat(YUI.Env.core,r)),n},S=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},x={success:!0};p&&d.indexOf(s)==-1&&(d&&(d+=" "),d+=s,p.className=d),n.indexOf("@")>-1&&(n="3.5.0"),e={applyConfig:function(e){e=e||u;var t,n,r=this.config,i=r.modules,s=r.groups,o=r.aliases,a=this.Env._loader;for(n in e)e.hasOwnProperty(n)&&(t=e[n],i&&n=="modules"?S(i,t):o&&n=="aliases"?S(o,t):s&&n=="groups"?S(s,t):n=="win"?(r[n]=t&&t.contentWindow||t,r.doc=r[n]?r[n].document:null):n!="_yuid"&&(r[n]=t));a&&a._config(e)},_config:function(e){this.applyConfig(e)},_init:function(){var e,t,r=this,s=YUI.Env,u=r.Env,a;r.version=n;if(!u){r.Env={core:["get","features","intl-base","yui-log","yui-later","loader-base","loader-rollup","loader-yui3"],loaderExtras:["loader-rollup","loader-yui3"],mods:{},versions:{},base:i,cdn:i+n+"/",_idx:0,_used:{},_attached:{},_exported:{},_missed:[],_yidx:0,_uidx:0,_guidp:"y",_loaded:{},_BASE_RE:/(?:\?(?:[^&]*&)*([^&]*))?\b(yui(?:-\w+)?)\/\2(?:-(min|debug))?\.js/,parseBasePath:function(e,t){var n=e.match(t),r,i;return n&&(r=RegExp.leftContext||e.slice(0,e.indexOf(n[0])),i=n[3],n[1]&&(r+="?"+n[1]),r={filter:i,path:r}),r},getBase:s&&s.getBase||function(t){var n=h&&h.getElementsByTagName("script")||[],i=u.cdn,s,o,a,f;for(o=0,a=n.length;o<a;++o){f=n[o].src;if(f){s=r.Env.parseBasePath(f,t);if(s){e=s.filter,i=s.path;break}}}return i}},u=r.Env,u._loaded[n]={};if(s&&r!==YUI)u._yidx=++s._yidx,u._guidp=("yui_"+n+"_"+u._yidx+"_"+m).replace(/[^a-z0-9_]+/g,"_");else if(YUI._YUI){s=YUI._YUI.Env,u._yidx+=s._yidx,u._uidx+=s._uidx;for(a in s)a in u||(u[a]=s[a]);delete YUI._YUI}r.id=r.stamp(r),v[r.id]=r}r.constructor=YUI,r.config=r.config||{bootstrap:!0,cacheUse:!0,debug:!0,doc:h,fetchCSS:!0,throwFail:!0,useBrowserConsole:!0,useNativeES5:!0,win:c},h&&!h.getElementById(o)?(t=h.createElement("div"),t.innerHTML='<div id="'+o+'" style="position: absolute !important; visibility: hidden !important"></div>',YUI.Env.cssStampEl=t.firstChild,h.body?h.body.appendChild(YUI.Env.cssStampEl):p.insertBefore(YUI.Env.cssStampEl,p.firstChild)):h&&h.getElementById(o)&&!YUI.Env.cssStampEl&&(YUI.Env.cssStampEl=h.getElementById(o)),r.config.lang=r.config.lang||"en-US",r.config.base=YUI.config.base||YUI.config.defaultBase&&YUI.config.root&&YUI.config.defaultBase+YUI.config.root||r.Env.getBase(r.Env._BASE_RE);if(!e||!"mindebug".indexOf(e))e="min";e=e?"-"+e:e,r.config.loaderPath=YUI.config.loaderPath||"loader/loader"+e+".js"},_afterConfig:function(){var e=this;e.config.hasOwnProperty("global")||(e.config.global=Function("return this")())},_setup:function(){var e,t=this,n=[],r=YUI.Env.mods,i=t.config.extendedCore||[],s=t.config.core||[].concat(YUI.Env.core).concat(i);for(e=0;e<s.length;e++)r[s[e]]&&n.push(s[e]);t._attach(["yui-base"]),t._attach(n),t.Loader&&E(t)},applyTo:function(e,t,n){if(t in f){var r=v[e],i,s,o;if(r){i=t.split("."),s=r;for(o=0;o<i.length;o+=1)s=s[i[o]],s||this.log("applyTo not found: "+t,"warn","yui");return s&&s.apply(r,n)}return null}return this.log(t+": applyTo not allowed","warn","yui"),null},add:function(e,t,n,r){r=r||{};var i=YUI.Env,s={name:e,fn:t,version:n,details:r},o={},u,a,f,l,c=i.versions;i.mods[e]=s,c[n]=c[n]||{},c[n][e]=s;for(l in v)v.hasOwnProperty(l)&&(a=v[l],o[a.id]||(o[a.id]=!0,u=a.Env._loader,u&&(f=u.getModuleInfo(e),(!f||f.temp)&&u.addModule(r,e))));return this},_attach:function(e,t){var n,r,i,s,o,u,a,f=YUI.Env.mods,l=YUI.Env.aliases,c=this,h,p=YUI.Env._renderedMods,d=c.Env._loader,v=c.Env._attached,m=c.Env._exported,g=e.length,d,y,b,w=[],E,S,x,T,N,C,k;for(n=0;n<g;n++){r=e[n],i=f[r],w.push(r);if(d&&d.conditions[r])for(h in d.conditions[r])d.conditions[r].hasOwnProperty(h)&&(y=d.conditions[r][h],b=y&&(y.ua&&c.UA[y.ua]||y.test&&y.test(c)),b&&w.push(y.name))}e=w,g=e.length;for(n=0;n<g;n++)if(!v[e[n]]){r=e[n],i=f[r];if(l&&l[r]&&!i){c._attach(l[r]);continue}if(!i)T=d&&d.getModuleInfo(r),T&&(i=T,t=!0),!t&&r&&r.indexOf("skin-")===-1&&r.indexOf("css")===-1&&(c.Env._missed.push(r),c.Env._missed=c.Array.dedupe(c.Env._missed),c.message("NOT loaded: "+r,"warn","yui"));else{v[r]=!0;for(h=0;h<c.Env._missed.length;h++)c.Env._missed[h]===r&&(c.message("Found: "+r+" (was reported as missing earlier)","warn","yui"),c.Env._missed.splice(h,1));if(d&&!d._canBeAttached(r))return!0;if(d&&p&&p[r]&&p[r].temp){d.getRequires(p[r]),o=[],T=d.getModuleInfo(r);for(h in T.expanded_map)T.expanded_map.hasOwnProperty(h)&&o.push(h);c._attach(o)}s=i.details,o=s.requires,S=s.es,u=s.use,a=s.after,s.lang&&(o=o||[],o.unshift("intl"));if(o){x=o.length;for(h=0;h<x;h++)if(!v[o[h]]){if(!c._attach(o))return!1
;break}}if(a)for(h=0;h<a.length;h++)if(!v[a[h]]){if(!c._attach(a,!0))return!1;break}if(i.fn){E=[c,r];if(S){k={},C={},E.push(k,C);if(o){x=o.length;for(h=0;h<x;h++)k[o[h]]=m.hasOwnProperty(o[h])?m[o[h]]:c}}if(c.config.throwFail)C=i.fn.apply(S?undefined:i,E);else try{C=i.fn.apply(S?undefined:i,E)}catch(L){return c.error("Attach error: "+r,L,r),!1}S&&(m[r]=C,N=i.details.condition,N&&N.when==="instead"&&(m[N.trigger]=C))}if(u)for(h=0;h<u.length;h++)if(!v[u[h]]){if(!c._attach(u))return!1;break}}}return!0},_delayCallback:function(e,t){var n=this,r=["event-base"];return t=n.Lang.isObject(t)?t:{event:t},t.event==="load"&&r.push("event-synthetic"),function(){var i=arguments;n._use(r,function(){n.on(t.event,function(){i[1].delayUntil=t.event,e.apply(n,i)},t.args)})}},use:function(){var e=a.call(arguments,0),t=e[e.length-1],n=this,r=0,i,s=n.Env,o=!0;n.Lang.isFunction(t)?(e.pop(),n.config.delayUntil&&(t=n._delayCallback(t,n.config.delayUntil))):t=null,n.Lang.isArray(e[0])&&(e=e[0]);if(n.config.cacheUse){while(i=e[r++])if(!s._attached[i]){o=!1;break}if(o)return e.length,n._notify(t,x,e),n}return n._loading?(n._useQueue=n._useQueue||new n.Queue,n._useQueue.add([e,t])):n._use(e,function(n,r){n._notify(t,r,e)}),n},require:function(){var e=a.call(arguments),t;typeof e[e.length-1]=="function"&&(t=e.pop(),e.push(function(n){var r,i=e.length,s=n.Env._exported,o={};for(r=0;r<i;r++)s.hasOwnProperty(e[r])&&(o[e[r]]=s[e[r]]);t.call(undefined,n,o)})),this.use.apply(this,e)},_notify:function(e,t,n){if(!t.success&&this.config.loadErrorFn)this.config.loadErrorFn.call(this,this,e,t,n);else if(e){this.Env._missed&&this.Env._missed.length&&(t.msg="Missing modules: "+this.Env._missed.join(),t.success=!1);if(this.config.throwFail)e(this,t);else try{e(this,t)}catch(r){this.error("use callback error",r,n)}}},_use:function(e,t){this.Array||this._attach(["yui-base"]);var r,i,s,o=this,u=YUI.Env,a=u.mods,f=o.Env,l=f._used,c=u.aliases,h=u._loaderQueue,p=e[0],d=o.Array,v=o.config,m=v.bootstrap,g=[],y,b=[],w=!0,S=v.fetchCSS,x=function(e,t){var r=0,i=[],s,o,f,h,p;if(!e.length)return;if(c){o=e.length;for(r=0;r<o;r++)c[e[r]]&&!a[e[r]]?i=[].concat(i,c[e[r]]):i.push(e[r]);e=i}o=e.length;for(r=0;r<o;r++){s=e[r],t||b.push(s);if(l[s])continue;f=a[s],h=null,p=null,f?(l[s]=!0,h=f.details.requires,p=f.details.use):u._loaded[n][s]?l[s]=!0:g.push(s),h&&h.length&&x(h),p&&p.length&&x(p,1)}},T=function(n){var r=n||{success:!0,msg:"not dynamic"},i,s,u=!0,a=r.data;o._loading=!1,a&&(s=g,g=[],b=[],x(a),i=g.length,i&&[].concat(g).sort().join()==s.sort().join()&&(i=!1)),i&&a?(o._loading=!0,o._use(g,function(){o._attach(a)&&o._notify(t,r,a)})):(a&&(u=o._attach(a)),u&&o._notify(t,r,e)),o._useQueue&&o._useQueue.size()&&!o._loading&&o._use.apply(o,o._useQueue.next())};if(p==="*"){e=[];for(y in a)a.hasOwnProperty(y)&&e.push(y);return w=o._attach(e),w&&T(),o}return(a.loader||a["loader-base"])&&!o.Loader&&o._attach(["loader"+(a.loader?"":"-base")]),m&&o.Loader&&e.length&&(i=E(o),i.require(e),i.ignoreRegistered=!0,i._boot=!0,i.calculate(null,S?null:"js"),e=i.sorted,i._boot=!1),x(e),r=g.length,r&&(g=d.dedupe(g),r=g.length),m&&r&&o.Loader?(o._loading=!0,i=E(o),i.onEnd=T,i.context=o,i.data=e,i.ignoreRegistered=!1,i.require(g),i.insert(null,S?null:"js")):m&&r&&o.Get&&!f.bootstrapped?(o._loading=!0,s=function(){o._loading=!1,h.running=!1,f.bootstrapped=!0,u._bootstrapping=!1,o._attach(["loader"])&&o._use(e,t)},u._bootstrapping?h.add(s):(u._bootstrapping=!0,o.Get.script(v.base+v.loaderPath,{onEnd:s}))):(w=o._attach(e),w&&T()),o},namespace:function(){var e=arguments,t,n=0,i,s,o;for(;n<e.length;n++){t=this,o=e[n];if(o.indexOf(r)>-1){s=o.split(r);for(i=s[0]=="YAHOO"?1:0;i<s.length;i++)t[s[i]]=t[s[i]]||{},t=t[s[i]]}else t[o]=t[o]||{},t=t[o]}return t},log:u,message:u,dump:function(e){return""+e},error:function(e,t,n){var r=this,i;r.config.errorFn&&(i=r.config.errorFn.apply(r,arguments));if(!i)throw t||new Error(e);return r.message(e,"error",""+n),r},guid:function(e){var t=this.Env._guidp+"_"+ ++this.Env._uidx;return e?e+t:t},stamp:function(e,t){var n;if(!e)return e;e.uniqueID&&e.nodeType&&e.nodeType!==9?n=e.uniqueID:n=typeof e=="string"?e:e._yuid;if(!n){n=this.guid();if(!t)try{e._yuid=n}catch(r){n=null}}return n},destroy:function(){var e=this;e.Event&&e.Event._unload(),delete v[e.id],delete e.Env,delete e.config}},YUI.prototype=e;for(t in e)e.hasOwnProperty(t)&&(YUI[t]=e[t]);YUI.applyConfig=function(e){if(!e)return;YUI.GlobalConfig&&this.prototype.applyConfig.call(this,YUI.GlobalConfig),this.prototype.applyConfig.call(this,e),YUI.GlobalConfig=this.config},YUI._init(),l?(g(h,"DOMContentLoaded",b),g(window,"load",w)):(b(),w()),YUI.Env.add=g,YUI.Env.remove=y,typeof exports=="object"&&(exports.YUI=YUI,YUI.setLoadHook=function(e){YUI._getLoadHook=e},YUI._getLoadHook=null),YUI.Env[n]={}})(),YUI.add("yui-base",function(e,t){function m(e,t,n){var r,i;t||(t=0);if(n||m.test(e))try{return d.slice.call(e,t)}catch(s){i=[];for(r=e.length;t<r;++t)i.push(e[t]);return i}return[e]}function g(){this._init(),this.add.apply(this,arguments)}var n=e.Lang||(e.Lang={}),r=String.prototype,i=Object.prototype.toString,s={"undefined":"undefined",number:"number","boolean":"boolean",string:"string","[object Function]":"function","[object RegExp]":"regexp","[object Array]":"array","[object Date]":"date","[object Error]":"error"},o=/\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g,u="	\n\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff",a="[	-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+",f=new RegExp("^"+a),l=new RegExp(a+"$"),c=new RegExp(f.source+"|"+l.source,"g"),h=/\{\s*\[(?:native code|function)\]\s*\}/i;n._isNative=function(t){return!!(e.config.useNativeES5&&t&&h.test(t))},n.isArray=n._isNative(Array.isArray)?Array.isArray:function(e){return n.type(e)==="array"},n.isBoolean=function(e){return typeof e=="boolean"},n.isDate=function(e){return n.type(e)==="date"&&e.toString()!=="Invalid Date"&&!isNaN(e)},n.
isFunction=function(e){return n.type(e)==="function"},n.isNull=function(e){return e===null},n.isNumber=function(e){return typeof e=="number"&&isFinite(e)},n.isObject=function(e,t){var r=typeof e;return e&&(r==="object"||!t&&(r==="function"||n.isFunction(e)))||!1},n.isRegExp=function(e){return n.type(e)==="regexp"},n.isString=function(e){return typeof e=="string"},n.isUndefined=function(e){return typeof e=="undefined"},n.isValue=function(e){var t=n.type(e);switch(t){case"number":return isFinite(e);case"null":case"undefined":return!1;default:return!!t}},n.now=Date.now||function(){return(new Date).getTime()},n.sub=function(e,t){function n(e,t){var r;if(typeof e[t]!="undefined")return e[t];t=t.split("."),r=t.slice(1).join("."),t=t[0];if(r&&typeof e[t]=="object"&&e[t]!==null)return n(e[t],r)}return e.replace?e.replace(o,function(e,r){var i=r.indexOf(".")>-1?n(t,r):t[r];return typeof i=="undefined"?e:i}):e},n.trim=n._isNative(r.trim)&&!u.trim()?function(e){return e&&e.trim?e.trim():e}:function(e){try{return e.replace(c,"")}catch(t){return e}},n.trimLeft=n._isNative(r.trimLeft)&&!u.trimLeft()?function(e){return e.trimLeft()}:function(e){return e.replace(f,"")},n.trimRight=n._isNative(r.trimRight)&&!u.trimRight()?function(e){return e.trimRight()}:function(e){return e.replace(l,"")},n.type=function(e){return s[typeof e]||s[i.call(e)]||(e?"object":"null")};var p=e.Lang,d=Array.prototype,v=Object.prototype.hasOwnProperty;e.Array=m,m.dedupe=p._isNative(Object.create)?function(e){var t=Object.create(null),n=[],r,i,s;for(r=0,s=e.length;r<s;++r)i=e[r],t[i]||(t[i]=1,n.push(i));return n}:function(e){var t={},n=[],r,i,s;for(r=0,s=e.length;r<s;++r)i=e[r],v.call(t,i)||(t[i]=1,n.push(i));return n},m.each=m.forEach=p._isNative(d.forEach)?function(t,n,r){return d.forEach.call(t||[],n,r||e),e}:function(t,n,r){for(var i=0,s=t&&t.length||0;i<s;++i)i in t&&n.call(r||e,t[i],i,t);return e},m.hash=function(e,t){var n={},r=t&&t.length||0,i,s;for(i=0,s=e.length;i<s;++i)i in e&&(n[e[i]]=r>i&&i in t?t[i]:!0);return n},m.indexOf=p._isNative(d.indexOf)?function(e,t,n){return d.indexOf.call(e,t,n)}:function(e,t,n){var r=e.length;n=+n||0,n=(n>0||-1)*Math.floor(Math.abs(n)),n<0&&(n+=r,n<0&&(n=0));for(;n<r;++n)if(n in e&&e[n]===t)return n;return-1},m.numericSort=function(e,t){return e-t},m.some=p._isNative(d.some)?function(e,t,n){return d.some.call(e,t,n)}:function(e,t,n){for(var r=0,i=e.length;r<i;++r)if(r in e&&t.call(n,e[r],r,e))return!0;return!1},m.test=function(e){var t=0;if(p.isArray(e))t=1;else if(p.isObject(e))try{"length"in e&&!e.tagName&&(!e.scrollTo||!e.document)&&!e.apply&&(t=2)}catch(n){}return t},g.prototype={_init:function(){this._q=[]},next:function(){return this._q.shift()},last:function(){return this._q.pop()},add:function(){return this._q.push.apply(this._q,arguments),this},size:function(){return this._q.length}},e.Queue=g,YUI.Env._loaderQueue=YUI.Env._loaderQueue||new g;var y="__",v=Object.prototype.hasOwnProperty,b=e.Lang.isObject;e.cached=function(e,t,n){return t||(t={}),function(r){var i=arguments.length>1?Array.prototype.join.call(arguments,y):String(r);if(!(i in t)||n&&t[i]==n)t[i]=e.apply(e,arguments);return t[i]}},e.getLocation=function(){var t=e.config.win;return t&&t.location},e.merge=function(){var e=0,t=arguments.length,n={},r,i;for(;e<t;++e){i=arguments[e];for(r in i)v.call(i,r)&&(n[r]=i[r])}return n},e.mix=function(t,n,r,i,s,o){var u,a,f,l,c,h,p;if(!t||!n)return t||e;if(s){s===2&&e.mix(t.prototype,n.prototype,r,i,0,o),f=s===1||s===3?n.prototype:n,p=s===1||s===4?t.prototype:t;if(!f||!p)return t}else f=n,p=t;u=r&&!o;if(i)for(l=0,h=i.length;l<h;++l){c=i[l];if(!v.call(f,c))continue;a=u?!1:c in p;if(o&&a&&b(p[c],!0)&&b(f[c],!0))e.mix(p[c],f[c],r,null,0,o);else if(r||!a)p[c]=f[c]}else{for(c in f){if(!v.call(f,c))continue;a=u?!1:c in p;if(o&&a&&b(p[c],!0)&&b(f[c],!0))e.mix(p[c],f[c],r,null,0,o);else if(r||!a)p[c]=f[c]}e.Object._hasEnumBug&&e.mix(p,f,r,e.Object._forceEnum,s,o)}return t};var p=e.Lang,v=Object.prototype.hasOwnProperty,w,E=e.Object=p._isNative(Object.create)?function(e){return Object.create(e)}:function(){function e(){}return function(t){return e.prototype=t,new e}}(),S=E._forceEnum=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toString","toLocaleString","valueOf"],x=E._hasEnumBug=!{valueOf:0}.propertyIsEnumerable("valueOf"),T=E._hasProtoEnumBug=function(){}.propertyIsEnumerable("prototype"),N=E.owns=function(e,t){return!!e&&v.call(e,t)};E.hasKey=N,E.keys=p._isNative(Object.keys)&&!T?Object.keys:function(e){if(!p.isObject(e))throw new TypeError("Object.keys called on a non-object");var t=[],n,r,i;if(T&&typeof e=="function")for(r in e)N(e,r)&&r!=="prototype"&&t.push(r);else for(r in e)N(e,r)&&t.push(r);if(x)for(n=0,i=S.length;n<i;++n)r=S[n],N(e,r)&&t.push(r);return t},E.values=function(e){var t=E.keys(e),n=0,r=t.length,i=[];for(;n<r;++n)i.push(e[t[n]]);return i},E.size=function(e){try{return E.keys(e).length}catch(t){return 0}},E.hasValue=function(t,n){return e.Array.indexOf(E.values(t),n)>-1},E.each=function(t,n,r,i){var s;for(s in t)(i||N(t,s))&&n.call(r||e,t[s],s,t);return e},E.some=function(t,n,r,i){var s;for(s in t)if(i||N(t,s))if(n.call(r||e,t[s],s,t))return!0;return!1},E.getValue=function(t,n){if(!p.isObject(t))return w;var r,i=e.Array(n),s=i.length;for(r=0;t!==w&&r<s;r++)t=t[i[r]];return t},E.setValue=function(t,n,r){var i,s=e.Array(n),o=s.length-1,u=t;if(o>=0){for(i=0;u!==w&&i<o;i++)u=u[s[i]];if(u===w)return w;u[s[i]]=r}return t},E.isEmpty=function(e){return!E.keys(Object(e)).length},YUI.Env.parseUA=function(t){var n=function(e){var t=0;return parseFloat(e.replace(/\./g,function(){return t++===1?"":"."}))},r=e.config.win,i=r&&r.navigator,s={ie:0,opera:0,gecko:0,webkit:0,safari:0,chrome:0,mobile:null,air:0,phantomjs:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,silk:0,ubuntu:0,accel:!1,webos:0,caja:i&&i.cajaVersion,secure:!1,os:null,nodejs:0,winjs:typeof Windows!="undefined"&&!!Windows.System,touchEnabled:!1},o=t||i&&i.userAgent,u=r&&r.location,a=u&&u.href,f;return s.userAgent=
o,s.secure=a&&a.toLowerCase().indexOf("https")===0,o&&(/windows|win32/i.test(o)?s.os="windows":/macintosh|mac_powerpc/i.test(o)?s.os="macintosh":/android/i.test(o)?s.os="android":/symbos/i.test(o)?s.os="symbos":/linux/i.test(o)?s.os="linux":/rhino/i.test(o)&&(s.os="rhino"),/KHTML/.test(o)&&(s.webkit=1),/IEMobile|XBLWP7/.test(o)&&(s.mobile="windows"),/Fennec/.test(o)&&(s.mobile="gecko"),f=o.match(/AppleWebKit\/([^\s]*)/),f&&f[1]&&(s.webkit=n(f[1]),s.safari=s.webkit,/PhantomJS/.test(o)&&(f=o.match(/PhantomJS\/([^\s]*)/),f&&f[1]&&(s.phantomjs=n(f[1]))),/ Mobile\//.test(o)||/iPad|iPod|iPhone/.test(o)?(s.mobile="Apple",f=o.match(/OS ([^\s]*)/),f&&f[1]&&(f=n(f[1].replace("_","."))),s.ios=f,s.os="ios",s.ipad=s.ipod=s.iphone=0,f=o.match(/iPad|iPod|iPhone/),f&&f[0]&&(s[f[0].toLowerCase()]=s.ios)):(f=o.match(/NokiaN[^\/]*|webOS\/\d\.\d/),f&&(s.mobile=f[0]),/webOS/.test(o)&&(s.mobile="WebOS",f=o.match(/webOS\/([^\s]*);/),f&&f[1]&&(s.webos=n(f[1]))),/ Android/.test(o)&&(s.mobile="Android",f=o.match(/Android ([^\s]*);/),f&&f[1]&&(s.android=n(f[1]))),/Silk/.test(o)&&(f=o.match(/Silk\/([^\s]*)/),f&&f[1]&&(s.silk=n(f[1])),s.android||(s.android=2.34,s.os="Android"),/Accelerated=true/.test(o)&&(s.accel=!0))),f=o.match(/OPR\/(\d+\.\d+)/),f&&f[1]?s.opera=n(f[1]):(f=o.match(/(Chrome|CrMo|CriOS)\/([^\s]*)/),f&&f[1]&&f[2]?(s.chrome=n(f[2]),s.safari=0,f[1]==="CrMo"&&(s.mobile="chrome")):(f=o.match(/AdobeAIR\/([^\s]*)/),f&&(s.air=f[0])))),f=o.match(/Ubuntu\ (\d+\.\d+)/),f&&f[1]&&(s.os="linux",s.ubuntu=n(f[1]),f=o.match(/\ WebKit\/([^\s]*)/),f&&f[1]&&(s.webkit=n(f[1])),f=o.match(/\ Chromium\/([^\s]*)/),f&&f[1]&&(s.chrome=n(f[1])),/ Mobile$/.test(o)&&(s.mobile="Ubuntu")),s.webkit||(/Opera/.test(o)?(f=o.match(/Opera[\s\/]([^\s]*)/),f&&f[1]&&(s.opera=n(f[1])),f=o.match(/Version\/([^\s]*)/),f&&f[1]&&(s.opera=n(f[1])),/Opera Mobi/.test(o)&&(s.mobile="opera",f=o.replace("Opera Mobi","").match(/Opera ([^\s]*)/),f&&f[1]&&(s.opera=n(f[1]))),f=o.match(/Opera Mini[^;]*/),f&&(s.mobile=f[0])):(f=o.match(/MSIE ([^;]*)|Trident.*; rv:([0-9.]+)/),f&&(f[1]||f[2])?s.ie=n(f[1]||f[2]):(f=o.match(/Gecko\/([^\s]*)/),f&&(s.gecko=1,f=o.match(/rv:([^\s\)]*)/),f&&f[1]&&(s.gecko=n(f[1]),/Mobile|Tablet/.test(o)&&(s.mobile="ffos"))))))),r&&i&&!(s.chrome&&s.chrome<6)&&(s.touchEnabled="ontouchstart"in r||"msMaxTouchPoints"in i&&i.msMaxTouchPoints>0),t||(typeof process=="object"&&process.versions&&process.versions.node&&(s.os=process.platform,s.nodejs=n(process.versions.node)),YUI.Env.UA=s),s},e.UA=YUI.Env.UA||YUI.Env.parseUA(),e.UA.compareVersions=function(e,t){var n,r,i,s,o,u;if(e===t)return 0;r=(e+"").split("."),s=(t+"").split(".");for(o=0,u=Math.max(r.length,s.length);o<u;++o){n=parseInt(r[o],10),i=parseInt(s[o],10),isNaN(n)&&(n=0),isNaN(i)&&(i=0);if(n<i)return-1;if(n>i)return 1}return 0},YUI.Env.aliases={anim:["anim-base","anim-color","anim-curve","anim-easing","anim-node-plugin","anim-scroll","anim-xy"],"anim-shape-transform":["anim-shape"],app:["app-base","app-content","app-transitions","lazy-model-list","model","model-list","model-sync-rest","model-sync-local","router","view","view-node-map"],attribute:["attribute-base","attribute-complex"],"attribute-events":["attribute-observable"],autocomplete:["autocomplete-base","autocomplete-sources","autocomplete-list","autocomplete-plugin"],axes:["axis-numeric","axis-category","axis-time","axis-stacked"],"axes-base":["axis-numeric-base","axis-category-base","axis-time-base","axis-stacked-base"],base:["base-base","base-pluginhost","base-build"],cache:["cache-base","cache-offline","cache-plugin"],charts:["charts-base"],collection:["array-extras","arraylist","arraylist-add","arraylist-filter","array-invoke"],color:["color-base","color-hsl","color-harmony"],controller:["router"],dataschema:["dataschema-base","dataschema-json","dataschema-xml","dataschema-array","dataschema-text"],datasource:["datasource-local","datasource-io","datasource-get","datasource-function","datasource-cache","datasource-jsonschema","datasource-xmlschema","datasource-arrayschema","datasource-textschema","datasource-polling"],datatable:["datatable-core","datatable-table","datatable-head","datatable-body","datatable-base","datatable-column-widths","datatable-message","datatable-mutable","datatable-sort","datatable-datasource"],datatype:["datatype-date","datatype-number","datatype-xml"],"datatype-date":["datatype-date-parse","datatype-date-format","datatype-date-math"],"datatype-number":["datatype-number-parse","datatype-number-format"],"datatype-xml":["datatype-xml-parse","datatype-xml-format"],dd:["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-proxy","dd-constrain","dd-drop","dd-scroll","dd-delegate"],dom:["dom-base","dom-screen","dom-style","selector-native","selector"],editor:["frame","editor-selection","exec-command","editor-base","editor-para","editor-br","editor-bidi","editor-tab","createlink-base"],event:["event-base","event-delegate","event-synthetic","event-mousewheel","event-mouseenter","event-key","event-focus","event-resize","event-hover","event-outside","event-touch","event-move","event-flick","event-valuechange","event-tap"],"event-custom":["event-custom-base","event-custom-complex"],"event-gestures":["event-flick","event-move"],handlebars:["handlebars-compiler"],highlight:["highlight-base","highlight-accentfold"],history:["history-base","history-hash","history-html5"],io:["io-base","io-xdr","io-form","io-upload-iframe","io-queue"],json:["json-parse","json-stringify"],loader:["loader-base","loader-rollup","loader-yui3"],"loader-pathogen-encoder":["loader-base","loader-rollup","loader-yui3","loader-pathogen-combohandler"],node:["node-base","node-event-delegate","node-pluginhost","node-screen","node-style"],pluginhost:["pluginhost-base","pluginhost-config"],querystring:["querystring-parse","querystring-stringify"],recordset:["recordset-base","recordset-sort","recordset-filter","recordset-indexer"],resize:["resize-base","resize-proxy","resize-constrain"],slider:["slider-base","slider-value-range","clickable-rail","range-slider"
],template:["template-base","template-micro"],text:["text-accentfold","text-wordbreak"],widget:["widget-base","widget-htmlparser","widget-skin","widget-uievents"]}},"3.18.1",{use:["yui-base","get","features","intl-base","yui-log","yui-later","loader-base","loader-rollup","loader-yui3"]}),YUI.add("get",function(e,t){var n=e.Lang,r,i,s;e.Get=i={cssOptions:{attributes:{rel:"stylesheet"},doc:e.config.linkDoc||e.config.doc,pollInterval:50},jsOptions:{autopurge:!0,doc:e.config.scriptDoc||e.config.doc},options:{attributes:{charset:"utf-8"},purgethreshold:20},REGEX_CSS:/\.css(?:[?;].*)?$/i,REGEX_JS:/\.js(?:[?;].*)?$/i,_insertCache:{},_pending:null,_purgeNodes:[],_queue:[],abort:function(e){var t,n,r,i,s;if(!e.abort){n=e,s=this._pending,e=null;if(s&&s.transaction.id===n)e=s.transaction,this._pending=null;else for(t=0,i=this._queue.length;t<i;++t){r=this._queue[t].transaction;if(r.id===n){e=r,this._queue.splice(t,1);break}}}e&&e.abort()},css:function(e,t,n){return this._load("css",e,t,n)},js:function(e,t,n){return this._load("js",e,t,n)},load:function(e,t,n){return this._load(null,e,t,n)},_autoPurge:function(e){e&&this._purgeNodes.length>=e&&this._purge(this._purgeNodes)},_getEnv:function(){var t=e.config.doc,n=e.UA;return this._env={async:t&&t.createElement("script").async===!0||n.ie>=10,cssFail:n.gecko>=9||n.compareVersions(n.webkit,535.24)>=0,cssLoad:(!n.gecko&&!n.webkit||n.gecko>=9||n.compareVersions(n.webkit,535.24)>=0)&&!(n.chrome&&n.chrome<=18),preservesScriptOrder:!!(n.gecko||n.opera||n.ie&&n.ie>=10)}},_getTransaction:function(t,r){var i=[],o,u,a,f;n.isArray(t)||(t=[t]),r=e.merge(this.options,r),r.attributes=e.merge(this.options.attributes,r.attributes);for(o=0,u=t.length;o<u;++o){f=t[o],a={attributes:{}};if(typeof f=="string")a.url=f;else{if(!f.url)continue;e.mix(a,f,!1,null,0,!0),f=f.url}e.mix(a,r,!1,null,0,!0),a.type||(this.REGEX_CSS.test(f)?a.type="css":(!this.REGEX_JS.test(f),a.type="js")),e.mix(a,a.type==="js"?this.jsOptions:this.cssOptions,!1,null,0,!0),a.attributes.id||(a.attributes.id=e.guid()),a.win?a.doc=a.win.document:a.win=a.doc.defaultView||a.doc.parentWindow,a.charset&&(a.attributes.charset=a.charset),i.push(a)}return new s(i,r)},_load:function(e,t,n,r){var s;return typeof n=="function"&&(r=n,n={}),n||(n={}),n.type=e,n._onFinish=i._onTransactionFinish,this._env||this._getEnv(),s=this._getTransaction(t,n),this._queue.push({callback:r,transaction:s}),this._next(),s},_onTransactionFinish:function(){i._pending=null,i._next()},_next:function(){var e;if(this._pending)return;e=this._queue.shift(),e&&(this._pending=e,e.transaction.execute(e.callback))},_purge:function(t){var n=this._purgeNodes,r=t!==n,i,s;while(s=t.pop()){if(!s._yuiget_finished)continue;s.parentNode&&s.parentNode.removeChild(s),r&&(i=e.Array.indexOf(n,s),i>-1&&n.splice(i,1))}}},i.script=i.js,i.Transaction=s=function(t,n){var r=this;r.id=s._lastId+=1,r.data=n.data,r.errors=[],r.nodes=[],r.options=n,r.requests=t,r._callbacks=[],r._queue=[],r._reqsWaiting=0,r.tId=r.id,r.win=n.win||e.config.win},s._lastId=0,s.prototype={_state:"new",abort:function(e){this._pending=null,this._pendingCSS=null,this._pollTimer=clearTimeout(this._pollTimer),this._queue=[],this._reqsWaiting=0,this.errors.push({error:e||"Aborted"}),this._finish()},execute:function(e){var t=this,n=t.requests,r=t._state,i,s,o,u;if(r==="done"){e&&e(t.errors.length?t.errors:null,t);return}e&&t._callbacks.push(e);if(r==="executing")return;t._state="executing",t._queue=o=[],t.options.timeout&&(t._timeout=setTimeout(function(){t.abort("Timeout")},t.options.timeout)),t._reqsWaiting=n.length;for(i=0,s=n.length;i<s;++i)u=n[i],u.async||u.type==="css"?t._insert(u):o.push(u);t._next()},purge:function(){i._purge(this.nodes)},_createNode:function(e,t,n){var i=n.createElement(e),s,o;r||(o=n.createElement("div"),o.setAttribute("class","a"),r=o.className==="a"?{}:{"for":"htmlFor","class":"className"});for(s in t)t.hasOwnProperty(s)&&i.setAttribute(r[s]||s,t[s]);return i},_finish:function(){var e=this.errors.length?this.errors:null,t=this.options,n=t.context||this,r,i,s;if(this._state==="done")return;this._state="done";for(i=0,s=this._callbacks.length;i<s;++i)this._callbacks[i].call(n,e,this);r=this._getEventData(),e?(t.onTimeout&&e[e.length-1].error==="Timeout"&&t.onTimeout.call(n,r),t.onFailure&&t.onFailure.call(n,r)):t.onSuccess&&t.onSuccess.call(n,r),t.onEnd&&t.onEnd.call(n,r),t._onFinish&&t._onFinish()},_getEventData:function(t){return t?e.merge(this,{abort:this.abort,purge:this.purge,request:t,url:t.url,win:t.win}):this},_getInsertBefore:function(t){var n=t.doc,r=t.insertBefore,s,o;return r?typeof r=="string"?n.getElementById(r):r:(s=i._insertCache,o=e.stamp(n),(r=s[o])?r:(r=n.getElementsByTagName("base")[0])?s[o]=r:(r=n.head||n.getElementsByTagName("head")[0],r?(r.appendChild(n.createTextNode("")),s[o]=r.lastChild):s[o]=n.getElementsByTagName("script")[0]))},_insert:function(t){function c(){u._progress("Failed to load "+t.url,t)}function h(){f&&clearTimeout(f),u._progress(null,t)}var n=i._env,r=this._getInsertBefore(t),s=t.type==="js",o=t.node,u=this,a=e.UA,f,l;o||(s?l="script":!n.cssLoad&&a.gecko?l="style":l="link",o=t.node=this._createNode(l,t.attributes,t.doc)),s?(o.setAttribute("src",t.url),t.async?o.async=!0:(n.async&&(o.async=!1),n.preservesScriptOrder||(this._pending=t))):!n.cssLoad&&a.gecko?o.innerHTML=(t.attributes.charset?'@charset "'+t.attributes.charset+'";':"")+'@import "'+t.url+'";':o.setAttribute("href",t.url),s&&a.ie&&(a.ie<9||document.documentMode&&document.documentMode<9)?o.onreadystatechange=function(){/loaded|complete/.test(o.readyState)&&(o.onreadystatechange=null,h())}:!s&&!n.cssLoad?this._poll(t):(a.ie>=10?(o.onerror=function(){setTimeout(c,0)},o.onload=function(){setTimeout(h,0)}):(o.onerror=c,o.onload=h),!n.cssFail&&!s&&(f=setTimeout(c,t.timeout||3e3))),this.nodes.push(o),r.parentNode.insertBefore(o,r)},_next:function(){if(this._pending)return;this._queue.length?this._insert(this._queue.shift()):this._reqsWaiting||this._finish()},_poll:function(t){
var n=this,r=n._pendingCSS,i=e.UA.webkit,s,o,u,a,f,l;if(t){r||(r=n._pendingCSS=[]),r.push(t);if(n._pollTimer)return}n._pollTimer=null;for(s=0;s<r.length;++s){f=r[s];if(i){l=f.doc.styleSheets,u=l.length,a=f.node.href;while(--u>=0)if(l[u].href===a){r.splice(s,1),s-=1,n._progress(null,f);break}}else try{o=!!f.node.sheet.cssRules,r.splice(s,1),s-=1,n._progress(null,f)}catch(c){}}r.length&&(n._pollTimer=setTimeout(function(){n._poll.call(n)},n.options.pollInterval))},_progress:function(e,t){var n=this.options;e&&(t.error=e,this.errors.push({error:e,request:t})),t.node._yuiget_finished=t.finished=!0,n.onProgress&&n.onProgress.call(n.context||this,this._getEventData(t)),t.autopurge&&(i._autoPurge(this.options.purgethreshold),i._purgeNodes.push(t.node)),this._pending===t&&(this._pending=null),this._reqsWaiting-=1,this._next()}}},"3.18.1",{requires:["yui-base"]}),YUI.add("features",function(e,t){var n={};e.mix(e.namespace("Features"),{tests:n,add:function(e,t,r){n[e]=n[e]||{},n[e][t]=r},all:function(t,r){var i=n[t],s=[];return i&&e.Object.each(i,function(n,i){s.push(i+":"+(e.Features.test(t,i,r)?1:0))}),s.length?s.join(";"):""},test:function(t,r,i){i=i||[];var s,o,u,a=n[t],f=a&&a[r];return!f||(s=f.result,e.Lang.isUndefined(s)&&(o=f.ua,o&&(s=e.UA[o]),u=f.test,u&&(!o||s)&&(s=u.apply(e,i)),f.result=s)),s}});var r=e.Features.add;r("load","0",{name:"app-transitions-native",test:function(e){var t=e.config.doc,n=t?t.documentElement:null;return n&&n.style?"MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style:!1},trigger:"app-transitions"}),r("load","1",{name:"autocomplete-list-keys",test:function(e){return!e.UA.ios&&!e.UA.android},trigger:"autocomplete-list"}),r("load","2",{name:"dd-gestures",trigger:"dd-drag",ua:"touchEnabled"}),r("load","3",{name:"dom-style-ie",test:function(e){var t=e.Features.test,n=e.Features.add,r=e.config.win,i=e.config.doc,s="documentElement",o=!1;return n("style","computedStyle",{test:function(){return r&&"getComputedStyle"in r}}),n("style","opacity",{test:function(){return i&&"opacity"in i[s].style}}),o=!t("style","opacity")&&!t("style","computedStyle"),o},trigger:"dom-style"}),r("load","4",{name:"editor-para-ie",trigger:"editor-para",ua:"ie",when:"instead"}),r("load","5",{name:"event-base-ie",test:function(e){var t=e.config.doc&&e.config.doc.implementation;return t&&!t.hasFeature("Events","2.0")},trigger:"node-base"}),r("load","6",{name:"graphics-canvas",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}),r("load","7",{name:"graphics-canvas-default",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}),r("load","8",{name:"graphics-svg",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}),r("load","9",{name:"graphics-svg-default",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}),r("load","10",{name:"graphics-vml",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}),r("load","11",{name:"graphics-vml-default",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}),r("load","12",{name:"history-hash-ie",test:function(e){var t=e.config.doc&&e.config.doc.documentMode;return e.UA.ie&&(!("onhashchange"in e.config.win)||!t||t<8)},trigger:"history-hash"}),r("load","13",{name:"io-nodejs",trigger:"io-base",ua:"nodejs"}),r("load","14",{name:"json-parse-shim",test:function(e){function i(e,t){return e==="ok"?!0:t}var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONParse!==!1&&!!n;if(r)try{r=n.parse('{"ok":false}',i).ok}catch(s){r=!1}return!r},trigger:"json-parse"}),r("load","15",{name:"json-stringify-shim",test:function(e){var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONStringify!==!1&&!!n;if(r)try{r="0"===n.stringify(0)}catch(i){r=!1}return!r},trigger:"json-stringify"}),r("load","16",{name:"scrollview-base-ie",trigger:"scrollview-base",ua:"ie"}),r("load","17",{name:"selector-css2",test:function(e){var t=e.config.doc,n=t&&!("querySelectorAll"in t);return n},trigger:"selector"}),r("load","18",{name:"transition-timer",test:function(e){var t=e.config.doc,n=t?t.documentElement:null,r=!0;return n&&n.style&&(r=!("MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style)),r},trigger:"transition"}),r("load","19",{name:"widget-base-ie",trigger:"widget-base",ua:"ie"}),r("load","20",{name:"yql-jsonp",test:function(e){return!e.UA.nodejs&&!e.UA.winjs},trigger:"yql"}),r("load","21",{name:"yql-nodejs",trigger:"yql",ua:"nodejs"}),r("load","22",{name:"yql-winjs",trigger:"yql",ua:"winjs"})},"3.18.1",{requires:["yui-base"]}),YUI.add("intl-base",function(e,t){var n=/[, ]/;e.mix(e.namespace("Intl"),{lookupBestLang:function(t,r){function a(e){var t;for(t=0;t<r.length;t+=1)if(e.toLowerCase
()===r[t].toLowerCase())return r[t]}var i,s,o,u;e.Lang.isString(t)&&(t=t.split(n));for(i=0;i<t.length;i+=1){s=t[i];if(!s||s==="*")continue;while(s.length>0){o=a(s);if(o)return o;u=s.lastIndexOf("-");if(!(u>=0))break;s=s.substring(0,u),u>=2&&s.charAt(u-2)==="-"&&(s=s.substring(0,u-2))}}return""}})},"3.18.1",{requires:["yui-base"]}),YUI.add("yui-log",function(e,t){var n=e,r="yui:log",i="undefined",s={debug:1,info:2,warn:4,error:8};n.log=function(e,t,o,u){var a,f,l,c,h,p,d=n,v=d.config,m=d.fire?d:YUI.Env.globalEvents;return v.debug&&(o=o||"",typeof o!="undefined"&&(f=v.logExclude,l=v.logInclude,!l||o in l?l&&o in l?a=!l[o]:f&&o in f&&(a=f[o]):a=1,typeof t=="undefined"&&(t="info"),d.config.logLevel=d.config.logLevel||"debug",p=s[d.config.logLevel.toLowerCase()],t in s&&s[t]<p&&(a=1)),a||(v.useBrowserConsole&&(c=o?o+": "+e:e,d.Lang.isFunction(v.logFn)?v.logFn.call(d,e,t,o):typeof console!==i&&console.log?(h=t&&console[t]&&t in s?t:"log",console[h](c)):typeof opera!==i&&opera.postError(c)),m&&!u&&(m===d&&!m.getEvent(r)&&m.publish(r,{broadcast:2}),m.fire(r,{msg:e,cat:t,src:o})))),d},n.message=function(){return n.log.apply(n,arguments)}},"3.18.1",{requires:["yui-base"]}),YUI.add("yui-later",function(e,t){var n=[];e.later=function(t,r,i,s,o){t=t||0,s=e.Lang.isUndefined(s)?n:e.Array(s),r=r||e.config.win||e;var u=!1,a=r&&e.Lang.isString(i)?r[i]:i,f=function(){u||(a.apply?a.apply(r,s||n):a(s[0],s[1],s[2],s[3]))},l=o?setInterval(f,t):setTimeout(f,t);return{id:l,interval:o,cancel:function(){u=!0,this.interval?clearInterval(l):clearTimeout(l)}}},e.Lang.later=e.later},"3.18.1",{requires:["yui-base"]}),YUI.add("loader-base",function(e,t){(function(){var t=e.version,n="/build/",r=t+"/",i=e.Env.base,s="gallery-2014.07.31-18-26",o="2in3",u="4",a="2.9.0",f=i+"combo?",l={version:t,root:r,base:e.Env.base,comboBase:f,skin:{defaultSkin:"sam",base:"assets/skins/",path:"skin.css",after:["cssreset","cssfonts","cssgrids","cssbase","cssreset-context","cssfonts-context"]},groups:{},patterns:{}},c=l.groups,h=function(e,t,r){var s=o+"."+(e||u)+"/"+(t||a)+n,l=r&&r.base?r.base:i,h=r&&r.comboBase?r.comboBase:f;c.yui2.base=l+s,c.yui2.root=s,c.yui2.comboBase=h},p=function(e,t){var r=(e||s)+n,o=t&&t.base?t.base:i,u=t&&t.comboBase?t.comboBase:f;c.gallery.base=o+r,c.gallery.root=r,c.gallery.comboBase=u};c[t]={},c.gallery={ext:!1,combine:!0,comboBase:f,update:p,patterns:{"gallery-":{},"lang/gallery-":{},"gallerycss-":{type:"css"}}},c.yui2={combine:!0,ext:!1,comboBase:f,update:h,patterns:{"yui2-":{configFn:function(e){/-skin|reset|fonts|grids|base/.test(e.name)&&(e.type="css",e.path=e.path.replace(/\.js/,".css"),e.path=e.path.replace(/\/yui2-skin/,"/assets/skins/sam/yui2-skin"))}}}},p(),h(),YUI.Env[t]&&e.mix(l,YUI.Env[t],!1,["modules","groups","skin"],0,!0),YUI.Env[t]=l})();var n={},r=[],i=1024,s=YUI.Env,o=s._loaded,u="css",a="js",f="intl",l="sam",c=e.version,h="",p=e.Object,d=p.each,v=e.Array,m=s._loaderQueue,g=s[c],y="skin-",b=e.Lang,w=s.mods,E,S=function(e,t,n,r){var i=e+"/"+t;return r||(i+="-min"),i+="."+(n||u),i};YUI.Env._cssLoaded||(YUI.Env._cssLoaded={}),e.Env.meta=g,e.Loader=function(t){var n=this;t=t||{},E=g.md5,n.context=e,t.doBeforeLoader&&t.doBeforeLoader.apply(n,arguments),n.base=e.Env.meta.base+e.Env.meta.root,n.comboBase=e.Env.meta.comboBase,n.combine=t.base&&t.base.indexOf(n.comboBase.substr(0,20))>-1,n.comboSep="&",n.maxURLLength=i,n.ignoreRegistered=t.ignoreRegistered,n.root=e.Env.meta.root,n.timeout=0,n.forceMap={},n.allowRollup=!1,n.filters={},n.required={},n.patterns={},n.moduleInfo={},n.groups=e.merge(e.Env.meta.groups),n.skin=e.merge(e.Env.meta.skin),n.conditions={},n.config=t,n._internal=!0,n._populateConditionsCache(),n.loaded=o[c],n.async=!0,n._inspectPage(),n._internal=!1,n._config(t),n.forceMap=n.force?e.Array.hash(n.force):{},n.testresults=null,e.config.tests&&(n.testresults=e.config.tests),n.sorted=[],n.dirty=!0,n.inserted={},n.skipped={},n.tested={},n.ignoreRegistered&&n._resetModules()},e.Loader.prototype={getModuleInfo:function(t){var n=this.moduleInfo[t],r,i,o,a;return n?n:(r=g.modules,i=s._renderedMods,o=this._internal,i&&i.hasOwnProperty(t)&&!this.ignoreRegistered?this.moduleInfo[t]=e.merge(i[t]):r.hasOwnProperty(t)&&(this._internal=!0,a=this.addModule(r[t],t),a&&a.type===u&&this.isCSSLoaded(a.name,!0)&&(this.loaded[a.name]=!0),this._internal=o),this.moduleInfo[t])},_expandAliases:function(t){var n=[],r=YUI.Env.aliases,i,s;t=e.Array(t);for(i=0;i<t.length;i+=1)s=t[i],n.push.apply(n,r[s]?r[s]:[s]);return n},_populateConditionsCache:function(){var t=g.modules,n=s._conditions,r,i,o,u;if(n&&!this.ignoreRegistered)for(r in n)n.hasOwnProperty(r)&&(this.conditions[r]=e.merge(n[r]));else{for(r in t)if(t.hasOwnProperty(r)&&t[r].condition){o=this._expandAliases(t[r].condition.trigger);for(i=0;i<o.length;i+=1)u=o[i],this.conditions[u]=this.conditions[u]||{},this.conditions[u][t[r].name||r]=t[r].condition}s._conditions=this.conditions}},_resetModules:function(){var e=this,t,n,r,i,s;for(t in e.moduleInfo)if(e.moduleInfo.hasOwnProperty(t)&&e.moduleInfo[t]){r=e.moduleInfo[t],i=r.name,s=YUI.Env.mods[i]?YUI.Env.mods[i].details:null,s&&(e.moduleInfo[i]._reset=!0,e.moduleInfo[i].requires=s.requires||[],e.moduleInfo[i].optional=s.optional||[],e.moduleInfo[i].supersedes=s.supercedes||[]);if(r.defaults)for(n in r.defaults)r.defaults.hasOwnProperty(n)&&r[n]&&(r[n]=r.defaults[n]);r.langCache=undefined,r.skinCache=undefined,r.skinnable&&e._addSkin(e.skin.defaultSkin,r.name)}},REGEX_CSS:/\.css(?:[?;].*)?$/i,FILTER_DEFS:{RAW:{searchExp:"-min\\.js",replaceStr:".js"},DEBUG:{searchExp:"-min\\.js",replaceStr:"-debug.js"},COVERAGE:{searchExp:"-min\\.js",replaceStr:"-coverage.js"}},_inspectPage:function(){var e=this,t,n,r,i,s;for(s in w)w.hasOwnProperty(s)&&(t=w[s],t.details&&(n=e.getModuleInfo(t.name),r=t.details.requires,i=n&&n.requires,n?!n._inspected&&r&&i.length!==r.length&&delete n.expanded:n=e.addModule(t.details,s),n._inspected=!0))},_requires:function(e,t){var n,r,i,s,o=this.getModuleInfo(e),a=this.getModuleInfo(t);if(!
o||!a)return!1;r=o.expanded_map,i=o.after_map;if(i&&t in i)return!0;i=a.after_map;if(i&&e in i)return!1;s=a.supersedes;if(s)for(n=0;n<s.length;n++)if(this._requires(e,s[n]))return!0;s=o.supersedes;if(s)for(n=0;n<s.length;n++)if(this._requires(t,s[n]))return!1;return r&&t in r?!0:o.ext&&o.type===u&&!a.ext&&a.type===u?!0:!1},_config:function(t){var n,r,i,s,o,u,a,f=this,l=[],c,h;if(t)for(n in t)if(t.hasOwnProperty(n)){i=t[n];if(n==="require")f.require(i);else if(n==="skin")typeof i=="string"&&(f.skin.defaultSkin=t.skin,i={defaultSkin:i}),e.mix(f.skin,i,!0);else if(n==="groups"){for(r in i)if(i.hasOwnProperty(r)){a=r,u=i[r],f.addGroup(u,a);if(u.aliases)for(s in u.aliases)u.aliases.hasOwnProperty(s)&&f.addAlias(u.aliases[s],s)}}else if(n==="modules")for(r in i)i.hasOwnProperty(r)&&f.addModule(i[r],r);else if(n==="aliases")for(r in i)i.hasOwnProperty(r)&&f.addAlias(i[r],r);else n==="gallery"?this.groups.gallery.update&&this.groups.gallery.update(i,t):n==="yui2"||n==="2in3"?this.groups.yui2.update&&this.groups.yui2.update(t["2in3"],t.yui2,t):f[n]=i}o=f.filter,b.isString(o)&&(o=o.toUpperCase(),f.filterName=o,f.filter=f.FILTER_DEFS[o],o==="DEBUG"&&f.require("yui-log","dump"));if(f.filterName&&f.coverage&&f.filterName==="COVERAGE"&&b.isArray(f.coverage)&&f.coverage.length){for(n=0;n<f.coverage.length;n++)c=f.coverage[n],h=f.getModuleInfo(c),h&&h.use?l=l.concat(h.use):l.push(c);f.filters=f.filters||{},e.Array.each(l,function(e){f.filters[e]=f.FILTER_DEFS.COVERAGE}),f.filterName="RAW",f.filter=f.FILTER_DEFS[f.filterName]}},formatSkin:function(e,t){var n=y+e;return t&&(n=n+"-"+t),n},_addSkin:function(e,t,n){var r,i,s,o=this.skin,u=t&&this.getModuleInfo(t),a=u&&u.ext;return t&&(i=this.formatSkin(e,t),this.getModuleInfo(i)||(r=u.pkg||t,s={skin:!0,name:i,group:u.group,type:"css",after:o.after,path:(n||r)+"/"+o.base+e+"/"+t+".css",ext:a},u.base&&(s.base=u.base),u.configFn&&(s.configFn=u.configFn),this.addModule(s,i))),i},addAlias:function(e,t){YUI.Env.aliases[t]=e,this.addModule({name:t,use:e})},addGroup:function(t,n){var r=t.modules,i=this,s=t.defaultBase||e.config.defaultBase,o,u;n=n||t.name,t.name=n,i.groups[n]=t,!t.base&&s&&t.root&&(t.base=s+t.root);if(t.patterns)for(o in t.patterns)t.patterns.hasOwnProperty(o)&&(t.patterns[o].group=n,i.patterns[o]=t.patterns[o]);if(r)for(o in r)r.hasOwnProperty(o)&&(u=r[o],typeof u=="string"&&(u={name:o,fullpath:u}),u.group=n,i.addModule(u,o))},addModule:function(t,n){n=n||t.name,typeof t=="string"&&(t={name:n,fullpath:t});var r,i,o,f,l,c,p,d,m,g,y,b,w,E,x,T,N,C,k,L,A,O,M=this.moduleInfo[n],_=this.conditions,D;M&&M.temp&&(t=e.merge(M,t)),t.name=n;if(!t||!t.name)return null;t.type||(t.type=a,O=t.path||t.fullpath,O&&this.REGEX_CSS.test(O)&&(t.type=u)),!t.path&&!t.fullpath&&(t.path=S(n,n,t.type)),t.supersedes=t.supersedes||t.use,t.ext="ext"in t?t.ext:this._internal?!1:!0,r=t.submodules,this.moduleInfo[n]=t,t.requires=t.requires||[];if(this.requires)for(i=0;i<this.requires.length;i++)t.requires.push(this.requires[i]);if(t.group&&this.groups&&this.groups[t.group]){A=this.groups[t.group];if(A.requires)for(i=0;i<A.requires.length;i++)t.requires.push(A.requires[i])}t.defaults||(t.defaults={requires:t.requires?[].concat(t.requires):null,supersedes:t.supersedes?[].concat(t.supersedes):null,optional:t.optional?[].concat(t.optional):null}),t.skinnable&&t.ext&&t.temp&&(k=this._addSkin(this.skin.defaultSkin,n),t.requires.unshift(k)),t.requires.length&&(t.requires=this.filterRequires(t.requires)||[]);if(!t.langPack&&t.lang){y=v(t.lang);for(g=0;g<y.length;g++)T=y[g],b=this.getLangPackName(T,n),p=this.getModuleInfo(b),p||(p=this._addLangPack(T,t,b))}if(r){l=t.supersedes||[],o=0;for(i in r)if(r.hasOwnProperty(i)){c=r[i],c.path=c.path||S(n,i,t.type),c.pkg=n,c.group=t.group,c.supersedes&&(l=l.concat(c.supersedes)),p=this.addModule(c,i),l.push(i);if(p.skinnable){t.skinnable=!0,C=this.skin.overrides;if(C&&C[i])for(g=0;g<C[i].length;g++)k=this._addSkin(C[i][g],i,n),l.push(k);k=this._addSkin(this.skin.defaultSkin,i,n),l.push(k)}if(c.lang&&c.lang.length){y=v(c.lang);for(g=0;g<y.length;g++)T=y[g],b=this.getLangPackName(T,n),w=this.getLangPackName(T,i),p=this.getModuleInfo(b),p||(p=this._addLangPack(T,t,b)),E=E||v.hash(p.supersedes),w in E||p.supersedes.push(w),t.lang=t.lang||[],x=x||v.hash(t.lang),T in x||t.lang.push(T),b=this.getLangPackName(h,n),w=this.getLangPackName(h,i),p=this.getModuleInfo(b),p||(p=this._addLangPack(T,t,b)),w in E||p.supersedes.push(w)}o++}t.supersedes=v.dedupe(l),this.allowRollup&&(t.rollup=o<4?o:Math.min(o-1,4))}d=t.plugins;if(d)for(i in d)d.hasOwnProperty(i)&&(m=d[i],m.pkg=n,m.path=m.path||S(n,i,t.type),m.requires=m.requires||[],m.group=t.group,this.addModule(m,i),t.skinnable&&this._addSkin(this.skin.defaultSkin,i,n));if(t.condition){f=this._expandAliases(t.condition.trigger);for(i=0;i<f.length;i++)D=f[i],L=t.condition.when,_[D]=_[D]||{},_[D][n]=t.condition,L&&L!=="after"?L==="instead"&&(t.supersedes=t.supersedes||[],t.supersedes.push(D)):(t.after=t.after||[],t.after.push(D))}return t.supersedes&&(t.supersedes=this.filterRequires(t.supersedes)),t.after&&(t.after=this.filterRequires(t.after),t.after_map=v.hash(t.after)),t.configFn&&(N=t.configFn(t),N===!1&&(delete this.moduleInfo[n],delete s._renderedMods[n],t=null)),t&&(s._renderedMods||(s._renderedMods={}),s._renderedMods[n]=e.mix(s._renderedMods[n]||{},t),s._conditions=_),t},require:function(t){var n=typeof t=="string"?v(arguments):t;this.dirty=!0,this.required=e.merge(this.required,v.hash(this.filterRequires(n))),this._explodeRollups()},_explodeRollups:function(){var e=this,t,n,r,i,s,o,u,a=e.required;if(!e.allowRollup){for(r in a)if(a.hasOwnProperty(r)){t=e.getModule(r);if(t&&t.use){o=t.use.length;for(i=0;i<o;i++){n=e.getModule(t.use[i]);if(n&&n.use){u=n.use.length;for(s=0;s<u;s++)a[n.use[s]]=!0}else a[t.use[i]]=!0}}}e.required=a}},filterRequires:function(t){if(t){e.Lang.isArray(t)||(t=[t]),t=e.Array(t);var n=[],r,i,s,o;for(r=0;r<t.length;r++){i=this.getModule(t[r]);if(i&&i.use)for(s=0;s<i.use.length;s++)o=this.getModule
(i.use[s]),o&&o.use&&o.name!==i.name?n=e.Array.dedupe([].concat(n,this.filterRequires(o.use))):n.push(i.use[s]);else n.push(t[r])}t=n}return t},_canBeAttached:function(t){return t=this.getModule(t),t&&t.test?(t.hasOwnProperty("_testResult")||(t._testResult=t.test(e)),t._testResult):!0},getRequires:function(t){if(!t)return r;if(t._parsed)return t.expanded||r;var n,i,s,o,u,a,l,c=this.testresults,m=t.name,g,y=w[m]&&w[m].details,b=t.optionalRequires,E,S,x,T,N,C,k,L,A,O,M=t.lang||t.intl,_=e.Features&&e.Features.tests.load,D,P;t.temp&&y&&(N=t,t=this.addModule(y,m),t.group=N.group,t.pkg=N.pkg,delete t.expanded),P=!!this.lang&&t.langCache!==this.lang||t.skinCache!==this.skin.defaultSkin;if(t.expanded&&!P)return t.expanded;if(b)for(n=0,o=b.length;n<o;n++)this._canBeAttached(b[n])&&t.requires.push(b[n]);E=[],D={},T=this.filterRequires(t.requires),t.lang&&(E.unshift("intl"),T.unshift("intl"),M=!0),C=this.filterRequires(t.optional),t._parsed=!0,t.langCache=this.lang,t.skinCache=this.skin.defaultSkin;for(n=0;n<T.length;n++)if(!D[T[n]]){E.push(T[n]),D[T[n]]=!0,i=this.getModule(T[n]);if(i){u=this.getRequires(i),M=M||i.expanded_map&&f in i.expanded_map;for(s=0;s<u.length;s++)E.push(u[s])}}T=this.filterRequires(t.supersedes);if(T)for(n=0;n<T.length;n++)if(!D[T[n]]){t.submodules&&E.push(T[n]),D[T[n]]=!0,i=this.getModule(T[n]);if(i){u=this.getRequires(i),M=M||i.expanded_map&&f in i.expanded_map;for(s=0;s<u.length;s++)E.push(u[s])}}if(C&&this.loadOptional)for(n=0;n<C.length;n++)if(!D[C[n]]){E.push(C[n]),D[C[n]]=!0,i=this.getModuleInfo(C[n]);if(i){u=this.getRequires(i),M=M||i.expanded_map&&f in i.expanded_map;for(s=0;s<u.length;s++)E.push(u[s])}}g=this.conditions[m];if(g){t._parsed=!1;if(c&&_)d(c,function(e,t){var n=_[t].name;!D[n]&&_[t].trigger===m&&e&&_[t]&&(D[n]=!0,E.push(n))});else for(n in g)if(g.hasOwnProperty(n)&&!D[n]){x=g[n],S=x&&(!x.ua&&!x.test||x.ua&&e.UA[x.ua]||x.test&&x.test(e,T));if(S){D[n]=!0,E.push(n),i=this.getModule(n);if(i){u=this.getRequires(i);for(s=0;s<u.length;s++)E.push(u[s])}}}}if(t.skinnable){L=this.skin.overrides;for(n in YUI.Env.aliases)YUI.Env.aliases.hasOwnProperty(n)&&e.Array.indexOf(YUI.Env.aliases[n],m)>-1&&(A=n);if(L&&(L[m]||A&&L[A])){O=m,L[A]&&(O=A);for(n=0;n<L[O].length;n++)k=this._addSkin(L[O][n],m),this.isCSSLoaded(k,this._boot)||E.push(k)}else k=this._addSkin(this.skin.defaultSkin,m),this.isCSSLoaded(k,this._boot)||E.push(k)}return t._parsed=!1,M&&(t.lang&&!t.langPack&&e.Intl&&(l=e.Intl.lookupBestLang(this.lang||h,t.lang),a=this.getLangPackName(l,m),a&&E.unshift(a)),E.unshift(f)),t.expanded_map=v.hash(E),t.expanded=p.keys(t.expanded_map),t.expanded},isCSSLoaded:function(t,n){if(!t||!YUI.Env.cssStampEl||!n&&this.ignoreRegistered)return!1;var r=YUI.Env.cssStampEl,i=!1,s=YUI.Env._cssLoaded[t],o=r.currentStyle;return s!==undefined?s:(r.className=t,o||(o=e.config.doc.defaultView.getComputedStyle(r,null)),o&&o.display==="none"&&(i=!0),r.className="",YUI.Env._cssLoaded[t]=i,i)},getProvides:function(t){var r=this.getModule(t),i,s;return r?(r&&!r.provides&&(i={},s=r.supersedes,s&&v.each(s,function(t){e.mix(i,this.getProvides(t))},this),i[t]=!0,r.provides=i),r.provides):n},calculate:function(e,t){if(e||t||this.dirty)e&&this._config(e),this._init||this._setup(),this._explode(),this.allowRollup?this._rollup():this._explodeRollups(),this._reduce(),this._sort()},_addLangPack:function(t,n,r){var i=n.name,s,o,u=this.getModuleInfo(r);return u||(s=S(n.pkg||i,r,a,!0),o={path:s,intl:!0,langPack:!0,ext:n.ext,group:n.group,supersedes:[]},n.root&&(o.root=n.root),n.base&&(o.base=n.base),n.configFn&&(o.configFn=n.configFn),this.addModule(o,r),t&&(e.Env.lang=e.Env.lang||{},e.Env.lang[t]=e.Env.lang[t]||{},e.Env.lang[t][i]=!0)),this.getModuleInfo(r)},_setup:function(){var t=this.moduleInfo,n,r,i,o,u,a;for(n in t)t.hasOwnProperty(n)&&(o=t[n],o&&(o.requires=v.dedupe(o.requires),o.lang&&(a=this.getLangPackName(h,n),this._addLangPack(null,o,a))));u={},this.ignoreRegistered||e.mix(u,s.mods),this.ignore&&e.mix(u,v.hash(this.ignore));for(i in u)u.hasOwnProperty(i)&&e.mix(u,this.getProvides(i));if(this.force)for(r=0;r<this.force.length;r++)this.force[r]in u&&delete u[this.force[r]];e.mix(this.loaded,u),this._init=!0},getLangPackName:function(e,t){return"lang/"+t+(e?"_"+e:"")},_explode:function(){var t=this.required,n,r,i={},s=this,o,u;s.dirty=!1,s._explodeRollups(),t=s.required;for(o in t)t.hasOwnProperty(o)&&(i[o]||(i[o]=!0,n=s.getModule(o),n&&(u=n.expound,u&&(t[u]=s.getModule(u),r=s.getRequires(t[u]),e.mix(t,v.hash(r))),r=s.getRequires(n),e.mix(t,v.hash(r)))))},_patternTest:function(e,t){return e.indexOf(t)>-1},getModule:function(t){if(!t)return null;var n,r,i,s=this.getModuleInfo(t),o=this.patterns;if(!s||s&&s.ext)for(i in o)if(o.hasOwnProperty(i)){n=o[i],n.test||(n.test=this._patternTest);if(n.test(t,i)){r=n;break}}return s?r&&s&&r.configFn&&!s.configFn&&(s.configFn=r.configFn,s.configFn(s)):r&&(n.action?n.action.call(this,t,i):(s=this.addModule(e.merge(r,{test:void 0,temp:!0}),t),s&&r.configFn&&(s.configFn=r.configFn))),s},_rollup:function(){},_reduce:function(e){e=e||this.required;var t,n,r,i,s=this.loadType,o=this.ignore?v.hash(this.ignore):!1;for(t in e)if(e.hasOwnProperty(t)){i=this.getModule(t),((this.loaded[t]||w[t])&&!this.forceMap[t]&&!this.ignoreRegistered||s&&i&&i.type!==s)&&delete e[t],o&&o[t]&&delete e[t],r=i&&i.supersedes;if(r)for(n=0;n<r.length;n++)r[n]in e&&delete e[r[n]]}return e},_finish:function(e,t){m.running=!1;var n=this.onEnd;n&&n.call(this.context,{msg:e,data:this.data,success:t}),this._continue()},_onSuccess:function(){var t=this,n=e.merge(t.skipped),r,i=[],s=t.requireRegistration,o,u,f,l;for(f in n)n.hasOwnProperty(f)&&delete t.inserted[f];t.skipped={};for(f in t.inserted)t.inserted.hasOwnProperty(f)&&(l=t.getModule(f),!l||!s||l.type!==a||f in YUI.Env.mods?e.mix(t.loaded,t.getProvides(f)):i.push(f));r=t.onSuccess,u=i.length?"notregistered":"success",o=!i.length,r&&r.call(t.context,{msg:u,data:t.data,success:o,failed:i,skipped:n}),t._finish(u,o)},_onProgress:function(e){var t=this
,n;if(e.data&&e.data.length)for(n=0;n<e.data.length;n++)e.data[n]=t.getModule(e.data[n].name);t.onProgress&&t.onProgress.call(t.context,{name:e.url,data:e.data})},_onFailure:function(e){var t=this.onFailure,n=[],r=0,i=e.errors.length;for(r;r<i;r++)n.push(e.errors[r].error);n=n.join(","),t&&t.call(this.context,{msg:n,data:this.data,success:!1}),this._finish(n,!1)},_onTimeout:function(e){var t=this.onTimeout;t&&t.call(this.context,{msg:"timeout",data:this.data,success:!1,transaction:e})},_sort:function(){var e,t=this.required,n={};this.sorted=[];for(e in t)!n[e]&&t.hasOwnProperty(e)&&this._visit(e,n)},_visit:function(e,t){var n,r,i,s,o,u,a,f,l;t[e]=!0,n=this.required,i=this.moduleInfo[e],r=this.conditions[e]||{};if(i){o=i.expanded||i.requires;for(f=0,l=o.length;f<l;++f)s=o[f],u=r[s],a=u&&(!u.when||u.when==="after"),n[s]&&!t[s]&&!a&&this._visit(s,t)}this.sorted.push(e)},_insert:function(t,n,r,i){t&&this._config(t);var s=this.resolve(!i),o=this,f=0,l=0,c={},h,p;o._refetch=[],r&&(s[r===a?u:a]=[]),o.fetchCSS||(s.css=[]),s.js.length&&f++,s.css.length&&f++,p=function(t){l++;var n={},r=0,i=0,s="",u,a,p;if(t&&t.errors)for(r=0;r<t.errors.length;r++)t.errors[r].request?s=t.errors[r].request.url:s=t.errors[r],n[s]=s;if(t&&t.data&&t.data.length&&t.type==="success")for(r=0;r<t.data.length;r++){o.inserted[t.data[r].name]=!0;if(t.data[r].lang||t.data[r].skinnable)delete o.inserted[t.data[r].name],o._refetch.push(t.data[r].name)}if(l===f){o._loading=null;if(o._refetch.length){for(r=0;r<o._refetch.length;r++){h=o.getRequires(o.getModule(o._refetch[r]));for(i=0;i<h.length;i++)o.inserted[h[i]]||(c[h[i]]=h[i])}c=e.Object.keys(c);if(c.length){o.require(c),p=o.resolve(!0);if(p.cssMods.length){for(r=0;r<p.cssMods.length;r++)a=p.cssMods[r].name,delete YUI.Env._cssLoaded[a],o.isCSSLoaded(a)&&(o.inserted[a]=!0,delete o.required[a]);o.sorted=[],o._sort()}t=null,o._insert()}}t&&t.fn&&(u=t.fn,delete t.fn,u.call(o,t))}},this._loading=!0;if(!s.js.length&&!s.css.length){l=-1,p({fn:o._onSuccess});return}s.css.length&&e.Get.css(s.css,{data:s.cssMods,attributes:o.cssAttributes,insertBefore:o.insertBefore,charset:o.charset,timeout:o.timeout,context:o,onProgress:function(e){o._onProgress.call(o,e)},onTimeout:function(e){o._onTimeout.call(o,e)},onSuccess:function(e){e.type="success",e.fn=o._onSuccess,p.call(o,e)},onFailure:function(e){e.type="failure",e.fn=o._onFailure,p.call(o,e)}}),s.js.length&&e.Get.js(s.js,{data:s.jsMods,insertBefore:o.insertBefore,attributes:o.jsAttributes,charset:o.charset,timeout:o.timeout,autopurge:!1,context:o,async:o.async,onProgress:function(e){o._onProgress.call(o,e)},onTimeout:function(e){o._onTimeout.call(o,e)},onSuccess:function(e){e.type="success",e.fn=o._onSuccess,p.call(o,e)},onFailure:function(e){e.type="failure",e.fn=o._onFailure,p.call(o,e)}})},_continue:function(){!m.running&&m.size()>0&&(m.running=!0,m.next()())},insert:function(t,n,r){var i=this,s=e.merge(this);delete s.require,delete s.dirty,m.add(function(){i._insert(s,t,n,r)}),this._continue()},loadNext:function(){return},_filter:function(e,t,n){var r=this.filter,i=t&&t in this.filters,s=i&&this.filters[t],o=n||(this.getModuleInfo(t)||{}).group||null;return o&&this.groups[o]&&this.groups[o].filter&&(s=this.groups[o].filter,i=!0),e&&(i&&(r=b.isString(s)?this.FILTER_DEFS[s.toUpperCase()]||null:s),r&&(e=e.replace(new RegExp(r.searchExp,"g"),r.replaceStr))),e},_url:function(e,t,n){return this._filter((n||this.base||"")+e,t)},resolve:function(t,r){var i=this,s={js:[],jsMods:[],css:[],cssMods:[]},o,f=e.config.comboLoader&&e.config.customComboBase;(i.skin.overrides||i.skin.defaultSkin!==l||i.ignoreRegistered)&&i._resetModules(),t&&i.calculate(),r=r||i.sorted,o=function(e){if(e){var t=e.group&&i.groups[e.group]||n,r;t.async===!1&&(e.async=t.async),r=e.fullpath?i._filter(e.fullpath,e.name):i._url(e.path,e.name,t.base||e.base);if(e.attributes||e.async===!1)r={url:r,async:e.async},e.attributes&&(r.attributes=e.attributes);s[e.type].push(r),s[e.type+"Mods"].push(e)}};var c=i.ignoreRegistered?{}:i.inserted,h,p,d,v,m,g,y,b,w,E=!1;for(w=0,b=r.length;w<b;w++){y=i.getModule(r[w]);if(!y||c[y.name])continue;g=i.groups[y.group],v=i.comboBase;if(g){if(!g.combine||y.fullpath){o(y);continue}y.combine=!0,typeof g.root=="string"&&(y.root=g.root),v=g.comboBase||v,m=g.comboSep,p=g.maxURLLength}else if(!i.combine){o(y);continue}if(!y.combine&&y.ext){o(y);continue}E=!0,h=h||{},h[v]=h[v]||{js:[],jsMods:[],css:[],cssMods:[]},d=h[v],d.group=y.group,d.comboSep=m||i.comboSep,d.maxURLLength=p||i.maxURLLength,d[y.type+"Mods"].push(y),(y.type===a||y.type===u)&&s[y.type+"Mods"].push(y)}return E&&(f?s=this._pathogenEncodeComboSources(s):s=this._encodeComboSources(s,h)),s},_encodeComboSources:function(e,t){var n,r,s,o,f,l,c,h,p,d,v,m,g,y,b=this;for(d in t)if(t.hasOwnProperty(d)){v=t[d],m=v.comboSep,p=v.maxURLLength;for(c in v)if(c===a||c===u){r=v[c+"Mods"],f=[];for(g=0,y=r.length;g<y;g+=1)h=r[g],l=(typeof h.root=="string"?h.root:b.root)+(h.path||h.fullpath),f.push(b._filter(l,h.name));s=d+f.join(m),o=s.length,p<=d.length&&(p=i);if(f.length)if(o>p){n=[];for(g=0,y=f.length;g<y;g++)n.push(f[g]),s=d+n.join(m),s.length>p&&(l=n.pop(),s=d+n.join(m),e[c].push(b._filter(s,null,v.group)),n=[],l&&n.push(l));n.length&&(s=d+n.join(m),e[c].push(b._filter(s,null,v.group)))}else e[c].push(b._filter(s,null,v.group))}}return e},load:function(e){if(!e)return;var t=this,n=t.resolve(!0);t.data=n,t.onEnd=function(){e.apply(t.context||t,arguments)},t.insert()}}},"3.18.1",{requires:["get","features"]}),YUI.add("loader-rollup",function(e,t){e.Loader.prototype._rollup=function(){var e,t,n,r,i=this.required,s,o=this.moduleInfo,u,a,f;if(this.dirty||!this.rollups){this.rollups={};for(e in o)o.hasOwnProperty(e)&&(n=this.getModule(e),n&&n.rollup&&(this.rollups[e]=n))}for(;;){u=!1;for(e in this.rollups)if(this.rollups.hasOwnProperty(e)&&!i[e]&&(!this.loaded[e]||this.forceMap[e])){n=this.getModule(e),r=n.supersedes||[],s=!1;if(!n.rollup)continue;a=0;for(t=0;t<r.length;t++){f=o[r[t]];if(this.loaded[r[t]]&&!
this.forceMap[r[t]]){s=!1;break}if(i[r[t]]&&n.type===f.type){a++,s=a>=n.rollup;if(s)break}}s&&(i[e]=!0,u=!0,this.getRequires(n))}if(!u)break}}},"3.18.1",{requires:["loader-base"]}),YUI.add("loader-yui3",function(e,t){YUI.Env[e.version].modules=YUI.Env[e.version].modules||{},e.mix(YUI.Env[e.version].modules,{"align-plugin":{requires:["node-screen","node-pluginhost"]},anim:{use:["anim-base","anim-color","anim-curve","anim-easing","anim-node-plugin","anim-scroll","anim-xy"]},"anim-base":{requires:["base-base","node-style","color-base"]},"anim-color":{requires:["anim-base"]},"anim-curve":{requires:["anim-xy"]},"anim-easing":{requires:["anim-base"]},"anim-node-plugin":{requires:["node-pluginhost","anim-base"]},"anim-scroll":{requires:["anim-base"]},"anim-shape":{requires:["anim-base","anim-easing","anim-color","matrix"]},"anim-shape-transform":{use:["anim-shape"]},"anim-xy":{requires:["anim-base","node-screen"]},app:{use:["app-base","app-content","app-transitions","lazy-model-list","model","model-list","model-sync-rest","model-sync-local","router","view","view-node-map"]},"app-base":{requires:["classnamemanager","pjax-base","router","view"]},"app-content":{requires:["app-base","pjax-content"]},"app-transitions":{requires:["app-base"]},"app-transitions-css":{type:"css"},"app-transitions-native":{condition:{name:"app-transitions-native",test:function(e){var t=e.config.doc,n=t?t.documentElement:null;return n&&n.style?"MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style:!1},trigger:"app-transitions"},requires:["app-transitions","app-transitions-css","parallel","transition"]},"array-extras":{requires:["yui-base"]},"array-invoke":{requires:["yui-base"]},arraylist:{requires:["yui-base"]},"arraylist-add":{requires:["arraylist"]},"arraylist-filter":{requires:["arraylist"]},arraysort:{requires:["yui-base"]},"async-queue":{requires:["event-custom"]},attribute:{use:["attribute-base","attribute-complex"]},"attribute-base":{requires:["attribute-core","attribute-observable","attribute-extras"]},"attribute-complex":{requires:["attribute-base"]},"attribute-core":{requires:["oop"]},"attribute-events":{use:["attribute-observable"]},"attribute-extras":{requires:["oop"]},"attribute-observable":{requires:["event-custom"]},autocomplete:{use:["autocomplete-base","autocomplete-sources","autocomplete-list","autocomplete-plugin"]},"autocomplete-base":{optional:["autocomplete-sources"],requires:["array-extras","base-build","escape","event-valuechange","node-base"]},"autocomplete-filters":{requires:["array-extras","text-wordbreak"]},"autocomplete-filters-accentfold":{requires:["array-extras","text-accentfold","text-wordbreak"]},"autocomplete-highlighters":{requires:["array-extras","highlight-base"]},"autocomplete-highlighters-accentfold":{requires:["array-extras","highlight-accentfold"]},"autocomplete-list":{after:["autocomplete-sources"],lang:["en","es","hu","it"],requires:["autocomplete-base","event-resize","node-screen","selector-css3","shim-plugin","widget","widget-position","widget-position-align"],skinnable:!0},"autocomplete-list-keys":{condition:{name:"autocomplete-list-keys",test:function(e){return!e.UA.ios&&!e.UA.android},trigger:"autocomplete-list"},requires:["autocomplete-list","base-build"]},"autocomplete-plugin":{requires:["autocomplete-list","node-pluginhost"]},"autocomplete-sources":{optional:["io-base","json-parse","jsonp","yql"],requires:["autocomplete-base"]},axes:{use:["axis-numeric","axis-category","axis-time","axis-stacked"]},"axes-base":{use:["axis-numeric-base","axis-category-base","axis-time-base","axis-stacked-base"]},axis:{requires:["dom","widget","widget-position","widget-stack","graphics","axis-base"]},"axis-base":{requires:["classnamemanager","datatype-number","datatype-date","base","event-custom"]},"axis-category":{requires:["axis","axis-category-base"]},"axis-category-base":{requires:["axis-base"]},"axis-numeric":{requires:["axis","axis-numeric-base"]},"axis-numeric-base":{requires:["axis-base"]},"axis-stacked":{requires:["axis-numeric","axis-stacked-base"]},"axis-stacked-base":{requires:["axis-numeric-base"]},"axis-time":{requires:["axis","axis-time-base"]},"axis-time-base":{requires:["axis-base"]},base:{use:["base-base","base-pluginhost","base-build"]},"base-base":{requires:["attribute-base","base-core","base-observable"]},"base-build":{requires:["base-base"]},"base-core":{requires:["attribute-core"]},"base-observable":{requires:["attribute-observable","base-core"]},"base-pluginhost":{requires:["base-base","pluginhost"]},button:{requires:["button-core","cssbutton","widget"]},"button-core":{requires:["attribute-core","classnamemanager","node-base","escape"]},"button-group":{requires:["button-plugin","cssbutton","widget"]},"button-plugin":{requires:["button-core","cssbutton","node-pluginhost"]},cache:{use:["cache-base","cache-offline","cache-plugin"]},"cache-base":{requires:["base"]},"cache-offline":{requires:["cache-base","json"]},"cache-plugin":{requires:["plugin","cache-base"]},calendar:{requires:["calendar-base","calendarnavigator"],skinnable:!0},"calendar-base":{lang:["de","en","es","es-AR","fr","hu","it","ja","nb-NO","nl","pt-BR","ru","zh-Hans","zh-Hans-CN","zh-Hant","zh-Hant-HK","zh-HANT-TW"],requires:["widget","datatype-date","datatype-date-math","cssgrids"],skinnable:!0},calendarnavigator:{requires:["plugin","classnamemanager","datatype-date","node"],skinnable:!0},charts:{use:["charts-base"]},"charts-base":{requires:["dom","event-mouseenter","event-touch","graphics-group","axes","series-pie","series-line","series-marker","series-area","series-spline","series-column","series-bar","series-areaspline","series-combo","series-combospline","series-line-stacked","series-marker-stacked","series-area-stacked","series-spline-stacked","series-column-stacked","series-bar-stacked","series-areaspline-stacked","series-combo-stacked","series-combospline-stacked"]},"charts-legend":{requires:["charts-base"]},classnamemanager:{requires:["yui-base"]},"clickable-rail":{requires
:["slider-base"]},collection:{use:["array-extras","arraylist","arraylist-add","arraylist-filter","array-invoke"]},color:{use:["color-base","color-hsl","color-harmony"]},"color-base":{requires:["yui-base"]},"color-harmony":{requires:["color-hsl"]},"color-hsl":{requires:["color-base"]},"color-hsv":{requires:["color-base"]},console:{lang:["en","es","hu","it","ja"],requires:["yui-log","widget"],skinnable:!0},"console-filters":{requires:["plugin","console"],skinnable:!0},"content-editable":{requires:["node-base","editor-selection","stylesheet","plugin"]},controller:{use:["router"]},cookie:{requires:["yui-base"]},"createlink-base":{requires:["editor-base"]},cssbase:{after:["cssreset","cssfonts","cssgrids","cssreset-context","cssfonts-context","cssgrids-context"],type:"css"},"cssbase-context":{after:["cssreset","cssfonts","cssgrids","cssreset-context","cssfonts-context","cssgrids-context"],type:"css"},cssbutton:{type:"css"},cssfonts:{type:"css"},"cssfonts-context":{type:"css"},cssgrids:{optional:["cssnormalize"],type:"css"},"cssgrids-base":{optional:["cssnormalize"],type:"css"},"cssgrids-responsive":{optional:["cssnormalize"],requires:["cssgrids","cssgrids-responsive-base"],type:"css"},"cssgrids-units":{optional:["cssnormalize"],requires:["cssgrids-base"],type:"css"},cssnormalize:{type:"css"},"cssnormalize-context":{type:"css"},cssreset:{type:"css"},"cssreset-context":{type:"css"},dataschema:{use:["dataschema-base","dataschema-json","dataschema-xml","dataschema-array","dataschema-text"]},"dataschema-array":{requires:["dataschema-base"]},"dataschema-base":{requires:["base"]},"dataschema-json":{requires:["dataschema-base","json"]},"dataschema-text":{requires:["dataschema-base"]},"dataschema-xml":{requires:["dataschema-base"]},datasource:{use:["datasource-local","datasource-io","datasource-get","datasource-function","datasource-cache","datasource-jsonschema","datasource-xmlschema","datasource-arrayschema","datasource-textschema","datasource-polling"]},"datasource-arrayschema":{requires:["datasource-local","plugin","dataschema-array"]},"datasource-cache":{requires:["datasource-local","plugin","cache-base"]},"datasource-function":{requires:["datasource-local"]},"datasource-get":{requires:["datasource-local","get"]},"datasource-io":{requires:["datasource-local","io-base"]},"datasource-jsonschema":{requires:["datasource-local","plugin","dataschema-json"]},"datasource-local":{requires:["base"]},"datasource-polling":{requires:["datasource-local"]},"datasource-textschema":{requires:["datasource-local","plugin","dataschema-text"]},"datasource-xmlschema":{requires:["datasource-local","plugin","datatype-xml","dataschema-xml"]},datatable:{use:["datatable-core","datatable-table","datatable-head","datatable-body","datatable-base","datatable-column-widths","datatable-message","datatable-mutable","datatable-sort","datatable-datasource"]},"datatable-base":{requires:["datatable-core","datatable-table","datatable-head","datatable-body","base-build","widget"],skinnable:!0},"datatable-body":{requires:["datatable-core","view","classnamemanager"]},"datatable-column-widths":{requires:["datatable-base"]},"datatable-core":{requires:["escape","model-list","node-event-delegate"]},"datatable-datasource":{requires:["datatable-base","plugin","datasource-local"]},"datatable-foot":{requires:["datatable-core","view"]},"datatable-formatters":{requires:["datatable-body","datatype-number-format","datatype-date-format","escape"]},"datatable-head":{requires:["datatable-core","view","classnamemanager"]},"datatable-highlight":{requires:["datatable-base","event-hover"],skinnable:!0},"datatable-keynav":{requires:["datatable-base"]},"datatable-message":{lang:["en","fr","es","hu","it"],requires:["datatable-base"],skinnable:!0},"datatable-mutable":{requires:["datatable-base"]},"datatable-paginator":{lang:["en","fr"],requires:["model","view","paginator-core","datatable-foot","datatable-paginator-templates"],skinnable:!0},"datatable-paginator-templates":{requires:["template"]},"datatable-scroll":{requires:["datatable-base","datatable-column-widths","dom-screen"],skinnable:!0},"datatable-sort":{lang:["en","fr","es","hu"],requires:["datatable-base"],skinnable:!0},"datatable-table":{requires:["datatable-core","datatable-head","datatable-body","view","classnamemanager"]},datatype:{use:["datatype-date","datatype-number","datatype-xml"]},"datatype-date":{use:["datatype-date-parse","datatype-date-format","datatype-date-math"]},"datatype-date-format":{lang:["ar","ar-JO","ca","ca-ES","da","da-DK","de","de-AT","de-DE","el","el-GR","en","en-AU","en-CA","en-GB","en-IE","en-IN","en-JO","en-MY","en-NZ","en-PH","en-SG","en-US","es","es-AR","es-BO","es-CL","es-CO","es-EC","es-ES","es-MX","es-PE","es-PY","es-US","es-UY","es-VE","fi","fi-FI","fr","fr-BE","fr-CA","fr-FR","hi","hi-IN","hu","id","id-ID","it","it-IT","ja","ja-JP","ko","ko-KR","ms","ms-MY","nb","nb-NO","nl","nl-BE","nl-NL","pl","pl-PL","pt","pt-BR","ro","ro-RO","ru","ru-RU","sv","sv-SE","th","th-TH","tr","tr-TR","vi","vi-VN","zh-Hans","zh-Hans-CN","zh-Hant","zh-Hant-HK","zh-Hant-TW"]},"datatype-date-math":{requires:["yui-base"]},"datatype-date-parse":{},"datatype-number":{use:["datatype-number-parse","datatype-number-format"]},"datatype-number-format":{},"datatype-number-parse":{requires:["escape"]},"datatype-xml":{use:["datatype-xml-parse","datatype-xml-format"]},"datatype-xml-format":{},"datatype-xml-parse":{},dd:{use:["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-proxy","dd-constrain","dd-drop","dd-scroll","dd-delegate"]},"dd-constrain":{requires:["dd-drag"]},"dd-ddm":{requires:["dd-ddm-base","event-resize"]},"dd-ddm-base":{requires:["node","base","yui-throttle","classnamemanager"]},"dd-ddm-drop":{requires:["dd-ddm"]},"dd-delegate":{requires:["dd-drag","dd-drop-plugin","event-mouseenter"]},"dd-drag":{requires:["dd-ddm-base","selector-css2"]},"dd-drop":{requires:["dd-drag","dd-ddm-drop"]},"dd-drop-plugin":{requires:["dd-drop"]},"dd-gestures":{condition:{name:"dd-gestures",trigger:"dd-drag",ua:"touchEnabled"
},requires:["dd-drag","event-synthetic","event-gestures"]},"dd-plugin":{optional:["dd-constrain","dd-proxy"],requires:["dd-drag"]},"dd-proxy":{requires:["dd-drag"]},"dd-scroll":{requires:["dd-drag"]},dial:{lang:["en","es","hu"],requires:["widget","dd-drag","event-mouseenter","event-move","event-key","transition","intl"],skinnable:!0},dom:{use:["dom-base","dom-screen","dom-style","selector-native","selector"]},"dom-base":{requires:["dom-core"]},"dom-core":{requires:["oop","features"]},"dom-screen":{requires:["dom-base","dom-style"]},"dom-style":{requires:["dom-base"]},"dom-style-ie":{condition:{name:"dom-style-ie",test:function(e){var t=e.Features.test,n=e.Features.add,r=e.config.win,i=e.config.doc,s="documentElement",o=!1;return n("style","computedStyle",{test:function(){return r&&"getComputedStyle"in r}}),n("style","opacity",{test:function(){return i&&"opacity"in i[s].style}}),o=!t("style","opacity")&&!t("style","computedStyle"),o},trigger:"dom-style"},requires:["dom-style","color-base"]},dump:{requires:["yui-base"]},editor:{use:["frame","editor-selection","exec-command","editor-base","editor-para","editor-br","editor-bidi","editor-tab","createlink-base"]},"editor-base":{requires:["base","frame","node","exec-command","editor-selection"]},"editor-bidi":{requires:["editor-base"]},"editor-br":{requires:["editor-base"]},"editor-inline":{requires:["editor-base","content-editable"]},"editor-lists":{requires:["editor-base"]},"editor-para":{requires:["editor-para-base"]},"editor-para-base":{requires:["editor-base"]},"editor-para-ie":{condition:{name:"editor-para-ie",trigger:"editor-para",ua:"ie",when:"instead"},requires:["editor-para-base"]},"editor-selection":{requires:["node"]},"editor-tab":{requires:["editor-base"]},escape:{requires:["yui-base"]},event:{after:["node-base"],use:["event-base","event-delegate","event-synthetic","event-mousewheel","event-mouseenter","event-key","event-focus","event-resize","event-hover","event-outside","event-touch","event-move","event-flick","event-valuechange","event-tap"]},"event-base":{after:["node-base"],requires:["event-custom-base"]},"event-base-ie":{after:["event-base"],condition:{name:"event-base-ie",test:function(e){var t=e.config.doc&&e.config.doc.implementation;return t&&!t.hasFeature("Events","2.0")},trigger:"node-base"},requires:["node-base"]},"event-contextmenu":{requires:["event-synthetic","dom-screen"]},"event-custom":{use:["event-custom-base","event-custom-complex"]},"event-custom-base":{requires:["oop"]},"event-custom-complex":{requires:["event-custom-base"]},"event-delegate":{requires:["node-base"]},"event-flick":{requires:["node-base","event-touch","event-synthetic"]},"event-focus":{requires:["event-synthetic"]},"event-gestures":{use:["event-flick","event-move"]},"event-hover":{requires:["event-mouseenter"]},"event-key":{requires:["event-synthetic"]},"event-mouseenter":{requires:["event-synthetic"]},"event-mousewheel":{requires:["node-base"]},"event-move":{requires:["node-base","event-touch","event-synthetic"]},"event-outside":{requires:["event-synthetic"]},"event-resize":{requires:["node-base","event-synthetic"]},"event-simulate":{requires:["event-base"]},"event-synthetic":{requires:["node-base","event-custom-complex"]},"event-tap":{requires:["node-base","event-base","event-touch","event-synthetic"]},"event-touch":{requires:["node-base"]},"event-valuechange":{requires:["event-focus","event-synthetic"]},"exec-command":{requires:["frame"]},features:{requires:["yui-base"]},file:{requires:["file-flash","file-html5"]},"file-flash":{requires:["base"]},"file-html5":{requires:["base"]},frame:{requires:["base","node","plugin","selector-css3","yui-throttle"]},"gesture-simulate":{requires:["async-queue","event-simulate","node-screen"]},get:{requires:["yui-base"]},graphics:{requires:["node","event-custom","pluginhost","matrix","classnamemanager"]},"graphics-canvas":{condition:{name:"graphics-canvas",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"},requires:["graphics","color-base"]},"graphics-canvas-default":{condition:{name:"graphics-canvas-default",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}},"graphics-group":{requires:["graphics"]},"graphics-svg":{condition:{name:"graphics-svg",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"},requires:["graphics"]},"graphics-svg-default":{condition:{name:"graphics-svg-default",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}},"graphics-vml":{condition:{name:"graphics-vml",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"},requires:["graphics","color-base"]},"graphics-vml-default":{condition:{name:"graphics-vml-default",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}},handlebars:{use:["handlebars-compiler"]},"handlebars-base"
:{requires:[]},"handlebars-compiler":{requires:["handlebars-base"]},highlight:{use:["highlight-base","highlight-accentfold"]},"highlight-accentfold":{requires:["highlight-base","text-accentfold"]},"highlight-base":{requires:["array-extras","classnamemanager","escape","text-wordbreak"]},history:{use:["history-base","history-hash","history-html5"]},"history-base":{requires:["event-custom-complex"]},"history-hash":{after:["history-html5"],requires:["event-synthetic","history-base","yui-later"]},"history-hash-ie":{condition:{name:"history-hash-ie",test:function(e){var t=e.config.doc&&e.config.doc.documentMode;return e.UA.ie&&(!("onhashchange"in e.config.win)||!t||t<8)},trigger:"history-hash"},requires:["history-hash","node-base"]},"history-html5":{optional:["json"],requires:["event-base","history-base","node-base"]},imageloader:{requires:["base-base","node-style","node-screen"]},intl:{requires:["intl-base","event-custom"]},"intl-base":{requires:["yui-base"]},io:{use:["io-base","io-xdr","io-form","io-upload-iframe","io-queue"]},"io-base":{requires:["event-custom-base","querystring-stringify-simple"]},"io-form":{requires:["io-base","node-base"]},"io-nodejs":{condition:{name:"io-nodejs",trigger:"io-base",ua:"nodejs"},requires:["io-base"]},"io-queue":{requires:["io-base","queue-promote"]},"io-upload-iframe":{requires:["io-base","node-base"]},"io-xdr":{requires:["io-base","datatype-xml-parse"]},json:{use:["json-parse","json-stringify"]},"json-parse":{requires:["yui-base"]},"json-parse-shim":{condition:{name:"json-parse-shim",test:function(e){function i(e,t){return e==="ok"?!0:t}var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONParse!==!1&&!!n;if(r)try{r=n.parse('{"ok":false}',i).ok}catch(s){r=!1}return!r},trigger:"json-parse"},requires:["json-parse"]},"json-stringify":{requires:["yui-base"]},"json-stringify-shim":{condition:{name:"json-stringify-shim",test:function(e){var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONStringify!==!1&&!!n;if(r)try{r="0"===n.stringify(0)}catch(i){r=!1}return!r},trigger:"json-stringify"},requires:["json-stringify"]},jsonp:{requires:["get","oop"]},"jsonp-url":{requires:["jsonp"]},"lazy-model-list":{requires:["model-list"]},loader:{use:["loader-base","loader-rollup","loader-yui3"]},"loader-base":{requires:["get","features"]},"loader-pathogen-combohandler":{},"loader-pathogen-encoder":{use:["loader-base","loader-rollup","loader-yui3","loader-pathogen-combohandler"]},"loader-rollup":{requires:["loader-base"]},"loader-yui3":{requires:["loader-base"]},matrix:{requires:["yui-base"]},model:{requires:["base-build","escape","json-parse"]},"model-list":{requires:["array-extras","array-invoke","arraylist","base-build","escape","json-parse","model"]},"model-sync-local":{requires:["model","json-stringify"]},"model-sync-rest":{requires:["model","io-base","json-stringify"]},node:{use:["node-base","node-event-delegate","node-pluginhost","node-screen","node-style"]},"node-base":{requires:["event-base","node-core","dom-base","dom-style"]},"node-core":{requires:["dom-core","selector"]},"node-event-delegate":{requires:["node-base","event-delegate"]},"node-event-html5":{requires:["node-base"]},"node-event-simulate":{requires:["node-base","event-simulate","gesture-simulate"]},"node-flick":{requires:["classnamemanager","transition","event-flick","plugin"],skinnable:!0},"node-focusmanager":{requires:["attribute","node","plugin","node-event-simulate","event-key","event-focus"]},"node-load":{requires:["node-base","io-base"]},"node-menunav":{requires:["node","classnamemanager","plugin","node-focusmanager"],skinnable:!0},"node-pluginhost":{requires:["node-base","pluginhost"]},"node-screen":{requires:["dom-screen","node-base"]},"node-scroll-info":{requires:["array-extras","base-build","event-resize","node-pluginhost","plugin","selector"]},"node-style":{requires:["dom-style","node-base"]},oop:{requires:["yui-base"]},overlay:{requires:["widget","widget-stdmod","widget-position","widget-position-align","widget-stack","widget-position-constrain"],skinnable:!0},paginator:{requires:["paginator-core"]},"paginator-core":{requires:["base"]},"paginator-url":{requires:["paginator"]},panel:{requires:["widget","widget-autohide","widget-buttons","widget-modality","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod"],skinnable:!0},parallel:{requires:["yui-base"]},pjax:{requires:["pjax-base","pjax-content"]},"pjax-base":{requires:["classnamemanager","node-event-delegate","router"]},"pjax-content":{requires:["io-base","node-base","router"]},"pjax-plugin":{requires:["node-pluginhost","pjax","plugin"]},plugin:{requires:["base-base"]},pluginhost:{use:["pluginhost-base","pluginhost-config"]},"pluginhost-base":{requires:["yui-base"]},"pluginhost-config":{requires:["pluginhost-base"]},promise:{requires:["timers"]},querystring:{use:["querystring-parse","querystring-stringify"]},"querystring-parse":{requires:["yui-base","array-extras"]},"querystring-parse-simple":{requires:["yui-base"]},"querystring-stringify":{requires:["yui-base"]},"querystring-stringify-simple":{requires:["yui-base"]},"queue-promote":{requires:["yui-base"]},"range-slider":{requires:["slider-base","slider-value-range","clickable-rail"]},recordset:{use:["recordset-base","recordset-sort","recordset-filter","recordset-indexer"]},"recordset-base":{requires:["base","arraylist"]},"recordset-filter":{requires:["recordset-base","array-extras","plugin"]},"recordset-indexer":{requires:["recordset-base","plugin"]},"recordset-sort":{requires:["arraysort","recordset-base","plugin"]},resize:{use:["resize-base","resize-proxy","resize-constrain"]},"resize-base":{requires:["base","widget","event","oop","dd-drag","dd-delegate","dd-drop"],skinnable:!0},"resize-constrain":{requires:["plugin","resize-base"]},"resize-plugin":{optional:["resize-constrain"],requires:["resize-base","plugin"]},"resize-proxy":{requires
:["plugin","resize-base"]},router:{optional:["querystring-parse"],requires:["array-extras","base-build","history"]},scrollview:{requires:["scrollview-base","scrollview-scrollbars"]},"scrollview-base":{requires:["widget","event-gestures","event-mousewheel","transition"],skinnable:!0},"scrollview-base-ie":{condition:{name:"scrollview-base-ie",trigger:"scrollview-base",ua:"ie"},requires:["scrollview-base"]},"scrollview-list":{requires:["plugin","classnamemanager"],skinnable:!0},"scrollview-paginator":{requires:["plugin","classnamemanager"]},"scrollview-scrollbars":{requires:["classnamemanager","transition","plugin"],skinnable:!0},selector:{requires:["selector-native"]},"selector-css2":{condition:{name:"selector-css2",test:function(e){var t=e.config.doc,n=t&&!("querySelectorAll"in t);return n},trigger:"selector"},requires:["selector-native"]},"selector-css3":{requires:["selector-native","selector-css2"]},"selector-native":{requires:["dom-base"]},"series-area":{requires:["series-cartesian","series-fill-util"]},"series-area-stacked":{requires:["series-stacked","series-area"]},"series-areaspline":{requires:["series-area","series-curve-util"]},"series-areaspline-stacked":{requires:["series-stacked","series-areaspline"]},"series-bar":{requires:["series-marker","series-histogram-base"]},"series-bar-stacked":{requires:["series-stacked","series-bar"]},"series-base":{requires:["graphics","axis-base"]},"series-candlestick":{requires:["series-range"]},"series-cartesian":{requires:["series-base"]},"series-column":{requires:["series-marker","series-histogram-base"]},"series-column-stacked":{requires:["series-stacked","series-column"]},"series-combo":{requires:["series-cartesian","series-line-util","series-plot-util","series-fill-util"]},"series-combo-stacked":{requires:["series-stacked","series-combo"]},"series-combospline":{requires:["series-combo","series-curve-util"]},"series-combospline-stacked":{requires:["series-combo-stacked","series-curve-util"]},"series-curve-util":{},"series-fill-util":{},"series-histogram-base":{requires:["series-cartesian","series-plot-util"]},"series-line":{requires:["series-cartesian","series-line-util"]},"series-line-stacked":{requires:["series-stacked","series-line"]},"series-line-util":{},"series-marker":{requires:["series-cartesian","series-plot-util"]},"series-marker-stacked":{requires:["series-stacked","series-marker"]},"series-ohlc":{requires:["series-range"]},"series-pie":{requires:["series-base","series-plot-util"]},"series-plot-util":{},"series-range":{requires:["series-cartesian"]},"series-spline":{requires:["series-line","series-curve-util"]},"series-spline-stacked":{requires:["series-stacked","series-spline"]},"series-stacked":{requires:["axis-stacked"]},"shim-plugin":{requires:["node-style","node-pluginhost"]},slider:{use:["slider-base","slider-value-range","clickable-rail","range-slider"]},"slider-base":{requires:["widget","dd-constrain","event-key"],skinnable:!0},"slider-value-range":{requires:["slider-base"]},sortable:{requires:["dd-delegate","dd-drop-plugin","dd-proxy"]},"sortable-scroll":{requires:["dd-scroll","sortable"]},stylesheet:{requires:["yui-base"]},substitute:{optional:["dump"],requires:["yui-base"]},swf:{requires:["event-custom","node","swfdetect","escape"]},swfdetect:{requires:["yui-base"]},tabview:{requires:["widget","widget-parent","widget-child","tabview-base","node-pluginhost","node-focusmanager"],skinnable:!0},"tabview-base":{requires:["node-event-delegate","classnamemanager"]},"tabview-plugin":{requires:["tabview-base"]},template:{use:["template-base","template-micro"]},"template-base":{requires:["yui-base"]},"template-micro":{requires:["escape"]},test:{requires:["event-simulate","event-custom","json-stringify"]},"test-console":{requires:["console-filters","test","array-extras"],skinnable:!0},text:{use:["text-accentfold","text-wordbreak"]},"text-accentfold":{requires:["array-extras","text-data-accentfold"]},"text-data-accentfold":{requires:["yui-base"]},"text-data-wordbreak":{requires:["yui-base"]},"text-wordbreak":{requires:["array-extras","text-data-wordbreak"]},timers:{requires:["yui-base"]},transition:{requires:["node-style"]},"transition-timer":{condition:{name:"transition-timer",test:function(e){var t=e.config.doc,n=t?t.documentElement:null,r=!0;return n&&n.style&&(r=!("MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style)),r},trigger:"transition"},requires:["transition"]},tree:{requires:["base-build","tree-node"]},"tree-labelable":{requires:["tree"]},"tree-lazy":{requires:["base-pluginhost","plugin","tree"]},"tree-node":{},"tree-openable":{requires:["tree"]},"tree-selectable":{requires:["tree"]},"tree-sortable":{requires:["tree"]},uploader:{requires:["uploader-html5","uploader-flash"]},"uploader-flash":{requires:["swfdetect","escape","widget","base","cssbutton","node","event-custom","uploader-queue"]},"uploader-html5":{requires:["widget","node-event-simulate","file-html5","uploader-queue"]},"uploader-queue":{requires:["base"]},view:{requires:["base-build","node-event-delegate"]},"view-node-map":{requires:["view"]},widget:{use:["widget-base","widget-htmlparser","widget-skin","widget-uievents"]},"widget-anim":{requires:["anim-base","plugin","widget"]},"widget-autohide":{requires:["base-build","event-key","event-outside","widget"]},"widget-base":{requires:["attribute","base-base","base-pluginhost","classnamemanager","event-focus","node-base","node-style"],skinnable:!0},"widget-base-ie":{condition:{name:"widget-base-ie",trigger:"widget-base",ua:"ie"},requires:["widget-base"]},"widget-buttons":{requires:["button-plugin","cssbutton","widget-stdmod"]},"widget-child":{requires:["base-build","widget"]},"widget-htmlparser":{requires:["widget-base"]},"widget-modality":{requires:["base-build","event-outside","widget"],skinnable:!0},"widget-parent":{requires:["arraylist","base-build","widget"]},"widget-position":{requires:["base-build","node-screen","widget"]},"widget-position-align":{requires:["widget-position"]},"widget-position-constrain"
:{requires:["widget-position"]},"widget-skin":{requires:["widget-base"]},"widget-stack":{requires:["base-build","widget"],skinnable:!0},"widget-stdmod":{requires:["base-build","widget"]},"widget-uievents":{requires:["node-event-delegate","widget-base"]},yql:{requires:["oop"]},"yql-jsonp":{condition:{name:"yql-jsonp",test:function(e){return!e.UA.nodejs&&!e.UA.winjs},trigger:"yql"},requires:["yql","jsonp","jsonp-url"]},"yql-nodejs":{condition:{name:"yql-nodejs",trigger:"yql",ua:"nodejs"},requires:["yql"]},"yql-winjs":{condition:{name:"yql-winjs",trigger:"yql",ua:"winjs"},requires:["yql"]},yui:{},"yui-base":{},"yui-later":{requires:["yui-base"]},"yui-log":{requires:["yui-base"]},"yui-throttle":{requires:["yui-base"]}}),YUI.Env[e.version].md5="2fd2be6b12ee9f999b4367499ae61aae"},"3.18.1",{requires:["loader-base"]}),YUI.add("yui",function(e,t){},"3.18.1",{use:["yui-base","get","features","intl-base","yui-log","yui-later","loader-base","loader-rollup","loader-yui3"]});

YUI(YUI3_config).add('ezflyout', function (Y) {

    Y.namespace('eZ');

    var L = Y.Lang;

    var defaultConfig = {
        element: '',
        close: '.close',
        scrollTrigger: 0,
        trackInitialScroll: true,
        hideTransition: {

        },
        showTransition: {

        }
    };

    /**
     * Constructor of Y.eZ.FlyOut object
     *
     * @param conf configuration object containing the following elements:
     *      - element String (required), a selector to the element that will be shown/hidden
     *      - close String (default ".close"), a selector relative the element pointing to nodes on which a click will hide the element
     *      - scrollTrigger (default 0) int|string|Node if it's an integer, the number of pixel to scroll to show the element;
     *          if it's a string, a selector to a Node, its y position will be used as the limit;
     *          if it's a Node, its y position will be used as the limit
     *      - trackInitialScroll bool (default true), if true, the Y.eZ.FlyOut will check the initial scroll to show the element
     *      - hideTransition configuration object for the transition to hide the element
     *      - showTransition (required) configuration object for the transition to show the element
     * 
     * see http://yuilibrary.com/yui/docs/transition/ for hideTransition and showTransition configuration object.
     * In addition, Y.eZ.FlyOut also allows to put function instead of plain values in the transition properties.
     * The transtion's start and end callbacks are also usable.
     */
    function eZFlyOut(conf) {
        this.conf = Y.merge(defaultConfig, conf);
        this.element = Y.one(this.conf.element);
        this.hidden = true;
        this.scrollSubscription = false;

        this._initEvents();
    }

    /**
     * Checks wether the Y.eZ.FlyOut is hidden or not
     */
    eZFlyOut.prototype.isHidden = function () {
        return this.hidden;
    }

    /**
     * Shows the Y.eZ.FlyOut using the show transition configuration object.
     * It triggers the "show" event.
     */
    eZFlyOut.prototype.show = function () {
        if ( this.isHidden() ) {
            this.element.transition(
                this._transitionConf(this.conf.showTransition)
            );
            this.hidden = false;
            this.fire('show');
        }
    }

    /**
     * Hides the Y.eZ.FlyOut using the hide transition configuration object.
     * It triggers the "hide" event.
     */
    eZFlyOut.prototype.hide = function () {
        if ( !this.isHidden() ) {
            this.element.transition(
                this._transitionConf(this.conf.hideTransition)
            );
            this.hidden = true;
            this.fire('hide');
        }
    }

    /**
     * Closes the Y.eZ.FlyOut. This method is supposed to be called when
     * the user clicks on a "close" element. It hides the element and
     * completely disables the Y.eZ.FlyOut instance;
     * It triggers the "close" event.
     */
    eZFlyOut.prototype.close = function () {
        this.scrollSubscription.detach();
        this.hide();
        this.fire('close');
    }

    /**
     * Initializes the events needed by Y.eZ.FlyOut:
     *   - scroll event to detect the scroll beyond the configured limit
     *   - click event on a "close" element
     * @private
     */
    eZFlyOut.prototype._initEvents = function () {
        var that = this,
            handleScroll = function () {
            var limit = false;
            if ( L.isNumber(that.conf.scrollTrigger) ) {
                limit = that.conf.scrollTrigger;
            } else {
                if ( L.isString(that.conf.scrollTrigger) ) {
                    limit = Y.one(that.conf.scrollTrigger);
                }
                if ( !L.isObject(limit) ) {
                    return;
                }
                limit = limit.getY();
            }
            if ( that.element.get('docScrollY') >= limit ) {
                that.show();
            } else {
                that.hide();
            }
        };

        this.scrollSubscription = Y.on('scroll', handleScroll);

        this.element.delegate('click', function () {
            that.close();
        }, this.conf.close);

        this.fire('ready');
        if ( this.conf.trackInitialScroll ) {
            handleScroll();
        }
    }

    /**
     * Creates a transition config object by cloning the conf parameter and
     * executing the methods it contains.
     *
     * @param conf configuration object
     * @private
     * @return object
     */
    eZFlyOut.prototype._transitionConf = function(conf) {
        var res = Y.clone(conf, false);
        Y.Object.each(res, function(v, k) {
            if ( L.isFunction(v) ) {
                res[k] = v.call(this);
            } else if ( k !== 'on' && L.isObject(v) ) {
                res[k] = this._transitionConf(v);
            }
        }, this);
        return res;
    }

    Y.augment(eZFlyOut, Y.EventTarget, true, null, {emitFacade: true});

    Y.eZ.FlyOut = eZFlyOut;

}, '1.0.0', {
    requires: [
        'event', 'node-screen', 'transition', 'node-event-delegate'
    ]
});

YUI(YUI3_config).add('ezgallery', function (Y) {

    Y.namespace('eZ');

    var L = Y.Lang;

    var defaultConfig = {
        container: '.gallery-viewer',
        title: 'h2 a',
        counter: '.counter span',
        image: 'figure img',
        caption: 'figcaption',
        figure: 'figure',
        transitionDuration: 0.8,
        autoScrollOnSelect: true,
        autoFixSizes: true,
        initFunc: function () { },
        updateFunc: function (elem) { },
        navigator: Y.eZ.GalleryNavigator.DEFAULT_CONFIG
    }

    /**
     * Constructor of the Y.eZ.Gallery components
     *
     * @param conf
     */
    function eZG(conf) {
        this.conf = Y.merge(defaultConfig, conf);
        this.navigator = new Y.eZ.GalleryNavigator(conf.navigator);
        this._init();

        this.hasStarted = false;
    }

    /**
     * Initialises the Y.eZ.Gallery
     *  - call the init function from the configuration
     *  - set the event handler from Y.eZ.GalleryNavigator
     *  - set the event handler on window resize
     */
    eZG.prototype._init = function () {
        var that = this;

        this.container = Y.one(this.conf.container);
        this._fixSizes();
        this.conf.initFunc.call(this);

        this.navigator.on('select', function (item) {
            that.hasStarted = true;
            if ( that.conf.autoScrollOnSelect ) {
                that.container.scrollIntoView(true);
            }
            // if index == previous we are after a resize
            // so we don't need a transition
            that.update(item, (item.index != item.previous));
        });

        Y.on('windowresize', function () {
            if ( that.hasStarted && that.conf.autoScrollOnSelect ) {
                that.container.scrollIntoView(true);
            }
            that.navigator.select();
        });
    }
 
    /**
     * Updates the visible image
     *
     * @param item object send by Y.eZ.GalleryNavigator when a selection is done
     * @param animate bool, whether an animation is required or not
     */
    eZG.prototype.update = function (item, animate) {
        var that = this;

        if ( animate ) {
            this.container.setStyle('opacity', 0);
            this.conf.updateFunc.call(that, item);
            this._fixSizes();
            this.container.transition({
                duration: this.conf.transitionDuration,
                opacity: 1
            });
        } else {
            this.conf.updateFunc.call(this, item);
            this._fixSizes();
        }
    }

    /**
     * fix the size of the figure and img element so that the gallery fits
     * on the browser window and the figcaption is visible if there's any
     *
     * @private
     */
    eZG.prototype._fixSizes = function () {
        if ( !this.conf.autoFixSizes ) {
            return;
        }
        var c = this.container,
            fig = c.one(this.conf.figure),
            nav = this.navigator.getContainer();
            caption = c.one(this.conf.caption);
            img = c.one(this.conf.image),
            offsetFig = 0, figH = 0, offsetImg = 0,
            imgRatio = parseInt(img.getAttribute('width')) / parseInt(img.getAttribute('height'));

        // compute the figure height so that the bottom of the navigator is aligned
        // with the bottom of the viewport.
        fig.setStyle('height', 'auto');
        offsetFig = nav.getY() + nav.get('offsetHeight') - this.container.getY() - nav.get('winHeight');
        figH = fig.get('offsetHeight') - offsetFig
        fig.setStyle('height', figH + 'px');

        img.setStyles({height: 'auto', width: 'auto'});
        offsetImg = img.get('offsetHeight') + caption.get('offsetHeight') - figH;
        if ( offsetImg > 0 ) {
            var imgH = img.get('offsetHeight') - offsetImg,
                imgW = imgH * imgRatio;
            if ( imgH > parseInt(img.getAttribute('height')) ) {
                // don't upscale
                imgH = parseInt(img.getAttribute('height'));
                imgW = imgH * imgRatio;
            }
            img.setStyles({height: imgH + 'px', width: imgW + 'px'});
        }
    }

    Y.eZ.Gallery = eZG;

}, '1.0.0', {
    requires: [
        'ezgallerynavigator', 'transition', 'event-resize', 'anim', 'node-base'
    ]
});

YUI(YUI3_config).add('ezgallerynavigator', function (Y) {

    Y.namespace('eZ');

    var L = Y.Lang;

    var defaultConfig = {
        gallery: '',
        next: '.next',
        prev: '.prev',
        cursor: '.cursor',
        container: '.images',
        images: 'figure',
        transitionDuration: 0.5,
        easing: 'cubic-bezier'
    };

    function width(el) {
        return parseInt(el.getStyle('width'));
    }

    function left(el) {
        return parseInt(el.getStyle('left'));
    }

    /**
     * Constructor of the Y.eZ.GalleryNavigator component
     *
     * @param conf
     */
    function eZGN(conf) {
        var that = this;

        this.conf = Y.merge(defaultConfig, conf);

        if ( L.isString(this.conf.gallery) ) {
            this.gallery = Y.one(this.conf.gallery);
        } else if ( L.isObject(this.conf.gallery) ) {
            this.gallery = this.conf.gallery;
        }

        this.container = this.gallery.one(this.conf.container);
        this.nextLink = this.gallery.one(this.conf.next);
        this.prevLink = this.gallery.one(this.conf.prev);

        this.images = this.container.all(this.conf.images);
        this.index = 0;
        this.total = this.images.size();

        this.cursor = this.gallery.one(this.conf.cursor);
        this.cursor.setStyles({
            left: this._computeCursorX(this.getSelectedImage()) + 'px',
            display: 'inline-block'
         });

        this._init();
    }

    eZGN.DEFAULT_CONFIG = defaultConfig;

   
    eZGN.prototype._init = function () {
        var that = this;

        this.nextLink.on('click', function (e) {
            e.preventDefault();
            that.next();
        });

        this.prevLink.on('click', function (e) {
            e.preventDefault();
            that.previous();
        });

        this.images.each(function(img, k) {
            img.on('click', function (e) {
                e.preventDefault();
                that.select(k);
            });
        });
    }

    eZGN.NAME = 'gallerynavigator';

    /**
     * Returns the selected figure
     *
     * @return Y.Node
     */
    eZGN.prototype.getSelectedImage = function () {
        return this.images.item(this.index);
    }

    /**
     * Returns a list of figures in the navigator
     *
     * @return Y.NodeList
     */
    eZGN.prototype.getImages = function () {
        return this.images;
    }

    /**
     * Returns the main container of the navigator
     *
     * @return Y.Node
     */
    eZGN.prototype.getContainer = function () {
        return this.container;
    }

    /**
     * Selects an image based on its position. When this method is called,
     * it fires the 'select' event.
     *
     * @param i integer
     */
    eZGN.prototype.select = function (i) {
        var p = this.index;

        if ( !L.isUndefined(i) ) {
            this.index = i;
        }

        var s = this.getSelectedImage();
        this.fire('select', {
            index: this.index,
            previous: p,
            total: this.total,
            imageNode: s,
        });
        this._handleNavigationLink();
        this._animate();
    }

    /**
     * Moves to the next image if possible
     */
    eZGN.prototype.next = function () {
        if ( this.index == (this.total -1) ) {
            return;
        }
        this.select(this.index + 1);
    }

    /**
     * Moves to the previous image if possible
     */
    eZGN.prototype.previous = function () {
        if ( this.index == 0 ) {
            return;
        }
        this.select(this.index - 1);
    }

    /**
     * Checks whether the selected image is outside of the navigator
     * on the right
     *
     * @private
     */
    eZGN.prototype._isSelectedImageOutsideRight = function () {
        var s = this.getSelectedImage(),
            lRight = this.gallery.getX() + parseInt(this.gallery.getStyle('width'));
       if ( ((s.getX() + parseInt(s.getStyle('width'))) > lRight) ) {
           return true;
       }
       return false;
    }

    /**
     * Checks whether the selected image is outside of the navigator
     * on the left
     *
     * @private
     */
    eZGN.prototype._isSelectedImageOutsideLeft = function () {
        var s = this.getSelectedImage(),
            lLeft = this.gallery.getX();
       if ( s.getX() < lLeft ) {
          return true;
       }
       return false;
    }

    /**
     * Computes the left position of the cusor so that it is centered
     * on the s figure.
     *
     * @param s Y.Node corresponding to the selected figure
     * @private
     */
    eZGN.prototype._computeCursorX = function (s) {
        var offset = this.gallery.getX(),
            selectedWidth = width(s),
            cursorWidth = width(this.cursor);
        return s.getX() - offset + selectedWidth/2 - cursorWidth/2;
    }
 
    /**
     * Animates the cursor and/or the container of images
     *
     * @private
     */
    eZGN.prototype._animate = function () {
        var trConf = {
                duration: this.conf.transitionDuration,
                easing: this.conf.easing
            }, sel = this.getSelectedImage(),
            cursorX = this._computeCursorX(sel), containerX, containerXOrig;

        if ( this._isSelectedImageOutsideRight() ) {
            // Image is outside in the right
            // Moving images so that selected images becomes the first visible one
            containerXOrig = left(this.container);
            containerX = this.container.getX() - sel.getX();
            cursorX += containerX - containerXOrig;
            trConf['left'] = containerX + 'px';
            this._doTransition(this.container, trConf);
        } else if ( this._isSelectedImageOutsideLeft() ) {
            // Image is outside in the left
            // Looking for the image in the left so that the selected image is the last visible one
            containerXOrig = left(this.container);
            var selectedBorderLeft = sel.getX() + width(sel), sizeBetween,
                widthGallery = width(this.gallery);
            for(var i = this.index; i >= 0; i--) {
                sizeBetween = selectedBorderLeft - this.images.item(i).getX();
                if ( sizeBetween > widthGallery ) {
                    i++;
                    // this.images.item(i) should be the first visible
                    break;
                }
            }
            if ( i < 0 )
                i = 0;
            containerX = this.container.getX() - this.images.item(i).getX();
            cursorX += containerX - containerXOrig;
            trConf['left'] = containerX + 'px';
            this._doTransition(this.container, trConf);
        }
        trConf['left'] = cursorX + 'px';
        this._doTransition(this.cursor, trConf);
    }

    /**
     * Workaround an IE9 bug where transtion does not work as expected. So,
     * in IE9, we fallback to Y.Anim instead of a native transition.
     */
    eZGN.prototype._doTransition = function(node, conf) {
        if ( Y.UA.ie ) {
            var anim = new Y.Anim({
                node: node,
                duration: conf.duration,
                to: {
                    left: conf.left
                 }
            });
            anim.run();

        } else {
            node.transition(conf);
        }

    }

    /**
     * Shows and Hides previous/next links when needed
     */
    eZGN.prototype._handleNavigationLink = function () {
        var d = this.conf.transitionDuration,
            showC = {
                opacity:1,
                duration: d
            },
            hideC = {
                opacity:0,
                duration: d
            };

        if ( this.index == 0 ) {
            this.prevLink.transition(hideC);
        } else if ( this.index >= 1 ) {
            this.prevLink.transition(showC);
        }

        if ( this.index == (this.total -1) ) {
            this.nextLink.transition(hideC);
        } else if ( this.index <= (this.total - 2) ) {
            this.nextLink.transition(showC);
        }
    }


    Y.augment(eZGN, Y.EventTarget, true, null, {emitFacade: true});
    Y.eZ.GalleryNavigator = eZGN;

}, '1.0.0', {
    requires: [
        'event-custom', 'transition', 'node-base', 'node-screen', 'anim'
    ]
});

YUI(YUI3_config).add('ezsimplegallery', function (Y) {

    Y.namespace('eZ');

    var L = Y.Lang;

    var defaultConfig = {
        gallery: '',
        next: '.next',
        prev: '.prev',
        indicators: '.indicator li',
        selectedIndactorClass: 'selected',
        container: '.images',
        images: 'figure',
        transitionDuration: 0.8,
        easing: 'cubic-bezier'
    };

    /**
     * Constructor of Y.eZ.SimpleGallery component
     *
     * @param conf configuration object containing:
     *      - gallery (required): the node or a selector to the node containing the gallery
     *      - next (default .next): selector to the element that allows to see the next image
     *      - prev (default .prev): selector to the element that allows to see the previous image
     *      - indicators (default .indicators li): selector to elements that will be used as an indicator of the position in the gallery
     *      - selectedIndactorClass (default selected): class to set on the indicator corresponding to the selected image
     *      - container (default .images): selector to the element containing the images, its left CSS value will be changed
     *      - images (default figure): selector to element representing an image
     *      - transitionDuration (default 0.8): number of second the transition should last between two images
     *      - easing: the easing to use for the transition
     */
    function eZSG(conf) {
        this.conf = Y.merge(defaultConfig, conf);

        if ( L.isString(this.conf.gallery) ) {
            this.gallery = Y.one(this.conf.gallery);
        } else if ( L.isObject(this.conf.gallery) ) {
            this.gallery = this.conf.gallery;
        }


        this.container = this.gallery.one(this.conf.container);
        this.next = this.gallery.one(this.conf.next);
        this.prev = this.gallery.one(this.conf.prev);
        this.indicators = this.gallery.all(this.conf.indicators);

        this.index = 0;
        this.total = this.gallery.all(this.conf.images).size();

        this._init();
    }

    /**
     * Initialises the component:
     *  - init click events on prev/next links and on the indicators
     *  - init windowresize event to adapt the position of the currently seen images
     */
    eZSG.prototype._init = function () {
        var that = this;

        this.next.on('click', function (e) {
            e.preventDefault();
            that.showNext();
        });
        this.prev.on('click', function (e) {
            e.preventDefault();
            that.showPrev();
        });
        Y.on('windowresize', function () {
            // realign the gallery when the window is resized
            that.scrollTo(that.index);
        });

        this.indicators.each(function(ind, k) {
            ind.on('click', function (e) {
                if ( !this.hasClass(that.conf.selectedIndactorClass) ) {
                    that.scrollTo(k);
                }
            });
        });
    }

    /**
     * Scrolls to the next images if there's one
     */
    eZSG.prototype.showNext = function () {
        if ( this.index == (this.total - 1) ) {
            return;
        }
        this.scrollTo(this.index + 1);
    }

    /**
     * Scrolls to the previous images if there's one
     */
    eZSG.prototype.showPrev = function () {
        if ( this.index == 0 ) {
            return;
        }
        this.scrollTo(this.index - 1);
    }

    /**
     * Scrolls to a given image by its index
     */
    eZSG.prototype.scrollTo = function (newIndex) {
        var f = 1, s = this.conf.selectedIndactorClass,
            c = this.container, o = this.index * this._getOffset() * -1,
            hasIndicator = (this.indicators.size() > 0);

        f =  this.index - newIndex;

        if ( f != 0 ) {
            if ( hasIndicator )
                this.indicators.item(this.index).removeClass(s);
            this.index = newIndex;
            if ( hasIndicator )
                this.indicators.item(this.index).addClass(s);
        }

        var target = o + (f * this._getOffset());
        if ( Y.UA.ie ) {
            // IE seems to have some issue with this transition ?!?
            // so we fall back on Anim instead...
            var anim = new Y.Anim({
                node: c,
                duration: this.conf.transitionDuration,
                to: {
                    left: target + 'px'
                }
           });
           anim.run();
        } else {
            c.transition({
                left: {
                    value: target + 'px',
                    duration: this.conf.transitionDuration,
                    easing: this.conf.easing
                }
            });
        }
        this._handleNavigationLink();
    }

    /**
     * Calculates the offset between two images
     */
    eZSG.prototype._getOffset = function () {
        return this.gallery.get('clientWidth');
    }

    /**
     * Shows and Hides previous/next links when needed
     */
    eZSG.prototype._handleNavigationLink = function () {
        var d = this.conf.transitionDuration,
            showC = {
                opacity:1,
                duration: d
            },
            hideC = {
                opacity:0,
                duration: d
            }

        if ( this.index == 0 ) {
            this.prev.transition(hideC);
        } else if ( this.index >= 1 ) {
            this.prev.transition(showC);
        }

        if ( this.index == (this.total -1) ) {
            this.next.transition(hideC);
        } else if ( this.index <= (this.total - 2) ) {
            this.next.transition(showC);
        }
    }


    Y.eZ.SimpleGallery = eZSG;


}, '1.0.0', {
    requires: [
        'node-base', 'node-screen', 'transition', 'anim', 'event-resize'
    ]
});

YUI(YUI3_config).use('event-base', 'node-base', 'event-outside', function (Y) {
    Y.on('domready', function () {
        Y.all('.transition-showed').each(function () {
            this.on('clickoutside', function (e) {
                if ( this.get('id') === location.hash.replace('#', '') ) {
                    location.hash = '';
                }
            });
        });
    });
});

/* HEIGHT RESIZE - 20060522 */

function initHeightResize() /* _Measurement_element_ID_, _Target_element_ID_ , _Padding-bottom_adjustment_value_(em)_ , _Height_adjustment_value_(px)_ , _IE_height_adjustment_value_(px)_ */
{
    forceHeightResize( [ '-', 'columns', 0, 25, 25, 'heightresize-sidemenu', 'sidemenu', 0, 20, 20, 'heightresize-extrainfo', 'extrainfo', 0, 20, 20, 'heightresize-main', 'main', 0, 20, 20 ] ); 
}

function forceHeightResize( elements )
{
    var element, i, maxSize = 0;

    if ( !document.getElementById )
    {    
        return;
    }

    for ( i = 0; i < elements.length; i += 5 ) /* Find the tallest height */
    {
        element = document.getElementById( elements[ i ] );

        if ( element )
        {
            if ( element.offsetHeight > maxSize )
            {    
                maxSize = element.offsetHeight;
            }
        }
    }

    for ( i = 0; i < elements.length; i += 5 ) /* Resize all heights */
    {
        element = document.getElementById( elements[ i + 1 ] );

        if ( element )
        {
            if ( window.getComputedStyle ) /* If not IE */
            {    
                element.style.paddingBottom = elements[ i + 2 ] + 'em'; /* Padding-bottom adjustment (em) */
                element.style.height = ( maxSize + elements[ i + 3 ] ) + 'px'; /* Height adjustment (px) */
            }
            else /* IE */
            {
                if( /MSIE 7/.test( navigator.appVersion ) ) /* Only apply for IE 7 */
                {
                    element.style.paddingBottom = elements[ i + 2 ] + 'em'; /* Padding-bottom adjustment (em) */
                }
                element.style.height = ( maxSize + elements[ i + 4 ] ) + 'px'; /* Height adjustment (px) */
            }

        }
    }
}

window.onload = window.onresize = initHeightResize;

YUI(YUI3_config).use('event', function (Y) {
    Y.on('domready', function () {
        var h = Y.one('html'),
            ua = Y.UA;

        if ( h.hasClass('ie') ) {
            // conditional comments did the job
            return;
        }
        // Y.UA is based on the user agent string,
        // this is bad... but should be used only to fix "small" CSS issues
        if ( ua.ie ) {
            h.addClass('ie').addClass('ie-gt9');
        } else if ( ua.webkit ) {
            h.addClass('webkit').addClass('vers_' + (ua.webkit + '').replace('.', '_'));
        } else if ( ua.gecko ) {
            h.addClass('gecko').addClass('vers_' + (ua.gecko + '').replace('.', '_'));
        }
    });
});

/* Insert tags supplied as arguments back into main document */

function insertMedia()
{
    for( var k = 0, l = arguments.length; k < l; k++ )
    {
        document.write( arguments[k] );
    }
}

YUI(YUI3_config).use('event', function (Y) {
    Y.on('domready', function () {
        Y.all('*[data-action=toggleclass]').each(function(elem) {
            var cl = elem.getAttribute('data-class'),
                targets = Y.all(elem.getAttribute('data-target'));
            elem.on('click', function (e) {
                e.preventDefault();
                targets.toggleClass(cl);
            });
        });
    });
});

/*!
Video.js - HTML5 Video Player
Version 3.2.0

LGPL v3 LICENSE INFO
This file is part of Video.js. Copyright 2011 Zencoder, Inc.

Video.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Video.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with Video.js.  If not, see <http://www.gnu.org/licenses/>.
*/

// Self-executing function to prevent global vars and help with minification
;(function(window, undefined){
  var document = window.document;// HTML5 Shiv. Must be in <head> to support older browsers.
document.createElement("video");document.createElement("audio");

var VideoJS = function(id, addOptions, ready){
  var tag; // Element of ID

  // Allow for element or ID to be passed in
  // String ID
  if (typeof id == "string") {

    // Adjust for jQuery ID syntax
    if (id.indexOf("#") === 0) {
      id = id.slice(1);
    }

    // If a player instance has already been created for this ID return it.
    if (_V_.players[id]) {
      return _V_.players[id];

    // Otherwise get element for ID
    } else {
      tag = _V_.el(id)
    }

  // ID is a media element
  } else {
    tag = id;
  }

  // Check for a useable element
  if (!tag || !tag.nodeName) { // re: nodeName, could be a box div also
    throw new TypeError("The element or ID supplied is not valid. (VideoJS)"); // Returns
  }

  // Element may have a player attr referring to an already created player instance.
  // If not, set up a new player and return the instance.
  return tag.player || new _V_.Player(tag, addOptions, ready);
},

// Shortcut
_V_ = VideoJS,

// CDN Version. Used to target right flash swf.
CDN_VERSION = "3.2";

VideoJS.players = {};

VideoJS.options = {

  // Default order of fallback technology
  techOrder: ["html5","flash"],
  // techOrder: ["flash","html5"],

  html5: {},
  flash: { swf: "http://vjs.zencdn.net/c/video-js.swf" },

  // Default of web browser is 300x150. Should rely on source width/height.
  width: "auto",
  height: "auto",
  
  // defaultVolume: 0.85,
  defaultVolume: 0.00, // The freakin seaguls are driving me crazy!

  // Included control sets
  components: {
    "posterImage": {},
    "textTrackDisplay": {},
    "loadingSpinner": {},
    "bigPlayButton": {},
    "controlBar": {}
  }

  // components: [
  //   "poster",
  //   "loadingSpinner",
  //   "bigPlayButton",
  //   { name: "controlBar", options: {
  //     components: [
  //       "playToggle",
  //       "fullscreenToggle",
  //       "currentTimeDisplay",
  //       "timeDivider",
  //       "durationDisplay",
  //       "remainingTimeDisplay",
  //       { name: "progressControl", options: {
  //         components: [
  //           { name: "seekBar", options: {
  //             components: [
  //               "loadProgressBar",
  //               "playProgressBar",
  //               "seekHandle"
  //             ]}
  //           }
  //         ]}
  //       },
  //       { name: "volumeControl", options: {
  //         components: [
  //           { name: "volumeBar", options: {
  //             components: [
  //               "volumeLevel",
  //               "volumeHandle"
  //             ]}
  //           }
  //         ]}
  //       },
  //       "muteToggle"
  //     ]
  //   }},
  //   "subtitlesDisplay"/*, "replay"*/
  // ]
};

// Set CDN Version of swf
if (CDN_VERSION != "GENERATED_CDN_VSN") {
  _V_.options.flash.swf = "http://vjs.zencdn.net/"+CDN_VERSION+"/video-js.swf"
}_V_.merge = function(obj1, obj2, safe){
  // Make sure second object exists
  if (!obj2) { obj2 = {}; };

  for (var attrname in obj2){
    if (obj2.hasOwnProperty(attrname) && (!safe || !obj1.hasOwnProperty(attrname))) { obj1[attrname]=obj2[attrname]; }
  }
  return obj1;
};
_V_.extend = function(obj){ this.merge(this, obj, true); };

_V_.extend({
  tech: {}, // Holder for playback technology settings
  controlSets: {}, // Holder for control set definitions

  // Device Checks
  isIE: function(){ return !+"\v1"; },
  isFF: function(){ return !!_V_.ua.match("Firefox") },
  isIPad: function(){ return navigator.userAgent.match(/iPad/i) !== null; },
  isIPhone: function(){ return navigator.userAgent.match(/iPhone/i) !== null; },
  isIOS: function(){ return VideoJS.isIPhone() || VideoJS.isIPad(); },
  iOSVersion: function() {
    var match = navigator.userAgent.match(/OS (\d+)_/i);
    if (match && match[1]) { return match[1]; }
  },
  isAndroid: function(){ return navigator.userAgent.match(/Android.*AppleWebKit/i) !== null; },
  androidVersion: function() {
    var match = navigator.userAgent.match(/Android (\d+)\./i);
    if (match && match[1]) { return match[1]; }
  },

  testVid: document.createElement("video"),
  ua: navigator.userAgent,
  support: {},

  each: function(arr, fn){
    if (!arr || arr.length === 0) { return; }
    for (var i=0,j=arr.length; i<j; i++) {
      fn.call(this, arr[i], i);
    }
  },

  eachProp: function(obj, fn){
    if (!obj) { return; }
    for (var name in obj) {
      if (obj.hasOwnProperty(name)) {
        fn.call(this, name, obj[name]);
      }
    }
  },

  el: function(id){ return document.getElementById(id); },
  createElement: function(tagName, attributes){
    var el = document.createElement(tagName),
        attrname;
    for (attrname in attributes){
      if (attributes.hasOwnProperty(attrname)) {
        if (attrname.indexOf("-") !== -1) {
          el.setAttribute(attrname, attributes[attrname]);
        } else {
          el[attrname] = attributes[attrname];
        }
      }
    }
    return el;
  },

  insertFirst: function(node, parent){
    if (parent.firstChild) {
      parent.insertBefore(node, parent.firstChild);
    } else {
      parent.appendChild(node);
    }
  },

  addClass: function(element, classToAdd){
    if ((" "+element.className+" ").indexOf(" "+classToAdd+" ") == -1) {
      element.className = element.className === "" ? classToAdd : element.className + " " + classToAdd;
    }
  },

  removeClass: function(element, classToRemove){
    if (element.className.indexOf(classToRemove) == -1) { return; }
    var classNames = element.className.split(" ");
    classNames.splice(classNames.indexOf(classToRemove),1);
    element.className = classNames.join(" ");
  },
  
  remove: function(item, array){
    if (!array) return;
    var i = array.indexOf(item);
    if (i != -1) { 
      return array.splice(i, 1)
    };
  },

  // Attempt to block the ability to select text while dragging controls
  blockTextSelection: function(){
    document.body.focus();
    document.onselectstart = function () { return false; };
  },
  // Turn off text selection blocking
  unblockTextSelection: function(){ document.onselectstart = function () { return true; }; },

  // Return seconds as H:MM:SS or M:SS
  // Supplying a guide (in seconds) will include enough leading zeros to cover the length of the guide
  formatTime: function(seconds, guide) {
    guide = guide || seconds; // Default to using seconds as guide
    var s = Math.floor(seconds % 60),
        m = Math.floor(seconds / 60 % 60),
        h = Math.floor(seconds / 3600),
        gm = Math.floor(guide / 60 % 60),
        gh = Math.floor(guide / 3600);

    // Check if we need to show hours
    h = (h > 0 || gh > 0) ? h + ":" : "";

    // If hours are showing, we may need to add a leading zero.
    // Always show at least one digit of minutes.
    m = (((h || gm >= 10) && m < 10) ? "0" + m : m) + ":";

    // Check if leading zero is need for seconds
    s = (s < 10) ? "0" + s : s;

    return h + m + s;
  },

  uc: function(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  // Return the relative horizonal position of an event as a value from 0-1
  getRelativePosition: function(x, relativeElement){
    return Math.max(0, Math.min(1, (x - _V_.findPosX(relativeElement)) / relativeElement.offsetWidth));
  },
  
  getComputedStyleValue: function(element, style){
    return window.getComputedStyle(element, null).getPropertyValue(style);
  },

  trim: function(string){ return string.toString().replace(/^\s+/, "").replace(/\s+$/, ""); },
  round: function(num, dec) {
    if (!dec) { dec = 0; }
    return Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
  },

  isEmpty: function(object) {
    for (var prop in object) {
      return false;
    }
    return true;
  },

  // Mimic HTML5 TimeRange Spec.
  createTimeRange: function(start, end){
    return {
      length: 1,
      start: function() { return start; },
      end: function() { return end; }
    };
  },

  /* Element Data Store. Allows for binding data to an element without putting it directly on the element.
     Ex. Event listneres are stored here.
     (also from jsninja.com)
  ================================================================================ */
  cache: {}, // Where the data is stored
  guid: 1, // Unique ID for the element
  expando: "vdata" + (new Date).getTime(), // Unique attribute to store element's guid in

  // Returns the cache object where data for the element is stored
  getData: function(elem){
    var id = elem[_V_.expando];
    if (!id) {
      id = elem[_V_.expando] = _V_.guid++;
      _V_.cache[id] = {};
    }
    return _V_.cache[id];
  },
  // Delete data for the element from the cache and the guid attr from element
  removeData: function(elem){
    var id = elem[_V_.expando];
    if (!id) { return; }
    // Remove all stored data
    delete _V_.cache[id];
    // Remove the expando property from the DOM node
    try {
      delete elem[_V_.expando];
    } catch(e) {
      if (elem.removeAttribute) {
        elem.removeAttribute(_V_.expando);
      } else {
        // IE doesn't appear to support removeAttribute on the document element
        elem[_V_.expando] = null;
      }
    }
  },

  /* Proxy (a.k.a Bind or Context). A simple method for changing the context of a function
     It also stores a unique id on the function so it can be easily removed from events
  ================================================================================ */
  proxy: function(context, fn, uid) {
    // Make sure the function has a unique ID
    if (!fn.guid) { fn.guid = _V_.guid++; }

    // Create the new function that changes the context
    var ret = function() {
      return fn.apply(context, arguments);
    }

    // Allow for the ability to individualize this function
    // Needed in the case where multiple objects might share the same prototype
    // IF both items add an event listener with the same function, then you try to remove just one
    // it will remove both because they both have the same guid.
    // when using this, you need to use the proxy method when you remove the listener as well.
    ret.guid = (uid) ? uid + "_" + fn.guid : fn.guid;

    return ret;
  },

  get: function(url, onSuccess, onError){
    // if (netscape.security.PrivilegeManager.enablePrivilege) {
    //   netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
    // }

    var local = (url.indexOf("file:") == 0 || (window.location.href.indexOf("file:") == 0 && url.indexOf("http:") == -1));

    if (typeof XMLHttpRequest == "undefined") {
      XMLHttpRequest = function () {
        try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e) {}
        try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch (f) {}
        try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (g) {}
        throw new Error("This browser does not support XMLHttpRequest.");
      };
    }

    var request = new XMLHttpRequest();

    try {
      request.open("GET", url);
    } catch(e) {
      _V_.log("VideoJS XMLHttpRequest (open)", e);
      // onError(e);
      return false;
    }

    request.onreadystatechange = _V_.proxy(this, function() {
      if (request.readyState == 4) {
        if (request.status == 200 || local && request.status == 0) {
          onSuccess(request.responseText);
        } else {
          if (onError) {
            onError();
          }
        }
      }
    });

    try {
      request.send();
    } catch(e) {
      _V_.log("VideoJS XMLHttpRequest (send)", e);
      if (onError) {
        onError(e);
      }
    }
  },

  /* Local Storage
  ================================================================================ */
  setLocalStorage: function(key, value){
    // IE was throwing errors referencing the var anywhere without this
    var localStorage = window.localStorage || false;
    if (!localStorage) { return; }
    try {
      localStorage[key] = value;
    } catch(e) {
      if (e.code == 22 || e.code == 1014) { // Webkit == 22 / Firefox == 1014
        _V_.log("LocalStorage Full (VideoJS)", e);
      } else {
        _V_.log("LocalStorage Error (VideoJS)", e);
      }
    }
  },

  // Get abosolute version of relative URL. Used to tell flash correct URL.
  // http://stackoverflow.com/questions/470832/getting-an-absolute-url-from-a-relative-one-ie6-issue
  getAbsoluteURL: function(url){

    // Check if absolute URL
    if (!url.match(/^https?:\/\//)) {
      // Convert to absolute URL. Flash hosted off-site needs an absolute URL.
      url = _V_.createElement('div', {
        innerHTML: '<a href="'+url+'">x</a>'
      }).firstChild.href;
    }

    return url;
  }

});

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
_V_.log = function(){
  _V_.log.history = _V_.log.history || [];// store logs to an array for reference
  _V_.log.history.push(arguments);
  if(window.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? _V_.log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

// Offset Left
// getBoundingClientRect technique from John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
if ("getBoundingClientRect" in document.documentElement) {
  _V_.findPosX = function(el) {
    var box;

    try {
      box = el.getBoundingClientRect();
    } catch(e) {}

    if (!box) { return 0; }

    var docEl = document.documentElement,
        body = document.body,
        clientLeft = docEl.clientLeft || body.clientLeft || 0,
        scrollLeft = window.pageXOffset || body.scrollLeft,
        left = box.left + scrollLeft - clientLeft;

    return left;
  };
} else {
  _V_.findPosX = function(el) {
    var curleft = el.offsetLeft;
    // _V_.log(obj.className, obj.offsetLeft)
    while(el = obj.offsetParent) {
      if (el.className.indexOf("video-js") == -1) {
        // _V_.log(el.offsetParent, "OFFSETLEFT", el.offsetLeft)
        // _V_.log("-webkit-full-screen", el.webkitMatchesSelector("-webkit-full-screen"));
        // _V_.log("-webkit-full-screen", el.querySelectorAll(".video-js:-webkit-full-screen"));
      } else {
      }
      curleft += el.offsetLeft;
    }
    return curleft;
  };
}// Using John Resig's Class implementation http://ejohn.org/blog/simple-javascript-inheritance/
// (function(){var initializing=false, fnTest=/xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/; _V_.Class = function(){}; _V_.Class.extend = function(prop) { var _super = this.prototype; initializing = true; var prototype = new this(); initializing = false; for (var name in prop) { prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? (function(name, fn){ return function() { var tmp = this._super; this._super = _super[name]; var ret = fn.apply(this, arguments); this._super = tmp; return ret; }; })(name, prop[name]) : prop[name]; } function Class() { if ( !initializing && this.init ) this.init.apply(this, arguments); } Class.prototype = prototype; Class.constructor = Class; Class.extend = arguments.callee; return Class;};})();
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  _V_.Class = function(){};
  _V_.Class.extend = function(prop) {
    var _super = this.prototype;
    initializing = true;
    var prototype = new this();
    initializing = false;
    for (var name in prop) {
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
            this._super = _super[name];
            var ret = fn.apply(this, arguments);
            this._super = tmp;
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
    function Class() {
      if ( !initializing && this.init ) {
        return this.init.apply(this, arguments);

      // Attempting to recreate accessing function form of class.
      } else if (!initializing) {
        return arguments.callee.prototype.init()
      }
    }
    Class.prototype = prototype;
    Class.constructor = Class;
    Class.extend = arguments.callee;
    return Class;
  };
})();

/* Player Component- Base class for all UI objects
================================================================================ */
_V_.Component = _V_.Class.extend({

  init: function(player, options){
    this.player = player;

    // Allow for overridding default component options
    options = this.options = _V_.merge(this.options || {}, options);

    // Create element if one wasn't provided in options
    if (options.el) {
      this.el = options.el;
    } else {
      this.el = this.createElement();
    }

    // Add any components in options
    this.initComponents();
  },

  destroy: function(){},

  createElement: function(type, attrs){
    return _V_.createElement(type || "div", attrs);
  },

  buildCSSClass: function(){
    // Child classes can include a function that does:
    // return "CLASS NAME" + this._super();
    return "";
  },

  initComponents: function(){
    var options = this.options;
    if (options && options.components) {
      // Loop through components and add them to the player
      this.eachProp(options.components, function(name, opts){

        // Allow waiting to add components until a specific event is called
        var tempAdd = this.proxy(function(){
          // Set property name on player. Could cause conflicts with other prop names, but it's worth making refs easy.
          this[name] = this.addComponent(name, opts);
        });

        if (opts.loadEvent) {
          this.one(opts.loadEvent, tempAdd)
        } else {
          tempAdd();
        }
      });
    }
  },

  // Add child components to this component.
  // Will generate a new child component and then append child component's element to this component's element.
  // Takes either the name of the UI component class, or an object that contains a name, UI Class, and options.
  addComponent: function(name, options){
    var component, componentClass;

    // If string, create new component with options
    if (typeof name == "string") {

      // Make sure options is at least an empty object to protect against errors
      options = options || {};

      // Assume name of set is a lowercased name of the UI Class (PlayButton, etc.)
      componentClass = options.componentClass || _V_.uc(name);

      // Create a new object & element for this controls set
      // If there's no .player, this is a player
      component = new _V_[componentClass](this.player || this, options);

    } else {
      component = name;
    }

    // Add the UI object's element to the container div (box)
    this.el.appendChild(component.el);

    // Return so it can stored on parent object if desired.
    return component;
  },

  removeComponent: function(component){
    this.el.removeChild(component.el);
  },

  /* Display
  ================================================================================ */
  show: function(){
    this.el.style.display = "block";
  },

  hide: function(){
    this.el.style.display = "none";
  },
  
  fadeIn: function(){
    this.removeClass("vjs-fade-out");
    this.addClass("vjs-fade-in");
  },

  fadeOut: function(){
    this.removeClass("vjs-fade-in");
    this.addClass("vjs-fade-out");
  },

  lockShowing: function(){
    var style = this.el.style;
    style.display = "block";
    style.opacity = 1;
    style.visiblity = "visible";
  },

  unlockShowing: function(){
    var style = this.el.style;
    style.display = "";
    style.opacity = "";
    style.visiblity = "";
  },

  addClass: function(classToAdd){
    _V_.addClass(this.el, classToAdd);
  },

  removeClass: function(classToRemove){
    _V_.removeClass(this.el, classToRemove);
  },

  /* Events
  ================================================================================ */
  addEvent: function(type, fn, uid){
    return _V_.addEvent(this.el, type, _V_.proxy(this, fn));
  },
  removeEvent: function(type, fn){
    return _V_.removeEvent(this.el, type, fn);
  },
  triggerEvent: function(type, e){
    return _V_.triggerEvent(this.el, type, e);
  },
  one: function(type, fn) {
    _V_.one(this.el, type, _V_.proxy(this, fn));
  },

  /* Ready - Trigger functions when component is ready
  ================================================================================ */
  ready: function(fn){
    if (!fn) return this;

    if (this.isReady) {
      fn.call(this);
    } else {
      if (this.readyQueue === undefined) {
        this.readyQueue = [];
      }
      this.readyQueue.push(fn);
    }

    return this;
  },

  triggerReady: function(){
    this.isReady = true;
    if (this.readyQueue && this.readyQueue.length > 0) {
      // Call all functions in ready queue
      this.each(this.readyQueue, function(fn){
        fn.call(this);
      });

      // Reset Ready Queue
      this.readyQueue = [];

      // Allow for using event listeners also, in case you want to do something everytime a source is ready.
      this.triggerEvent("ready");
    }
  },

  /* Utility
  ================================================================================ */
  each: function(arr, fn){ _V_.each.call(this, arr, fn); },

  eachProp: function(obj, fn){ _V_.eachProp.call(this, obj, fn); },

  extend: function(obj){ _V_.merge(this, obj) },

  // More easily attach 'this' to functions
  proxy: function(fn, uid){  return _V_.proxy(this, fn, uid); }

});/* Control - Base class for all control elements
================================================================================ */
_V_.Control = _V_.Component.extend({

  buildCSSClass: function(){
    return "vjs-control " + this._super();
  }

});

/* Control Bar
================================================================================ */
_V_.ControlBar = _V_.Component.extend({

  options: {
    loadEvent: "play",
    components: {
      "playToggle": {},
      "fullscreenToggle": {},
      "currentTimeDisplay": {},
      "timeDivider": {},
      "durationDisplay": {},
      "remainingTimeDisplay": {},
      "progressControl": {},
      "volumeControl": {},
      "muteToggle": {}
    }
  },

  init: function(player, options){
    this._super(player, options);

    player.addEvent("play", this.proxy(function(){
      this.fadeIn();
      this.player.addEvent("mouseover", this.proxy(this.fadeIn));
      this.player.addEvent("mouseout", this.proxy(this.fadeOut));
    }));

  },

  createElement: function(){
    return _V_.createElement("div", {
      className: "vjs-controls"
    });
  },

  fadeIn: function(){
    this._super();
    this.player.triggerEvent("controlsvisible");
  },

  fadeOut: function(){
    this._super();
    this.player.triggerEvent("controlshidden");
  },

  lockShowing: function(){
    this.el.style.opacity = "1";
  }

});

/* Button - Base class for all buttons
================================================================================ */
_V_.Button = _V_.Control.extend({

  init: function(player, options){
    this._super(player, options);

    this.addEvent("click", this.onClick);
    this.addEvent("focus", this.onFocus);
    this.addEvent("blur", this.onBlur);
  },

  createElement: function(type, attrs){
    // Add standard Aria and Tabindex info
    attrs = _V_.merge({
      className: this.buildCSSClass(),
      innerHTML: '<div><span class="vjs-control-text">' + (this.buttonText || "Need Text") + '</span></div>',
      role: "button",
      tabIndex: 0
    }, attrs);

    return this._super(type, attrs);
  },

  // Click - Override with specific functionality for button
  onClick: function(){},

  // Focus - Add keyboard functionality to element
  onFocus: function(){
    _V_.addEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
  },

  // KeyPress (document level) - Trigger click when keys are pressed
  onKeyPress: function(event){
    // Check for space bar (32) or enter (13) keys
    if (event.which == 32 || event.which == 13) {
      event.preventDefault();
      this.onClick();
    }
  },

  // Blur - Remove keyboard triggers
  onBlur: function(){
    _V_.removeEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
  }

});

/* Play Button
================================================================================ */
_V_.PlayButton = _V_.Button.extend({

  buttonText: "Play",

  buildCSSClass: function(){
    return "vjs-play-button " + this._super();
  },

  onClick: function(){
    this.player.play();
  }

});

/* Pause Button
================================================================================ */
_V_.PauseButton = _V_.Button.extend({

  buttonText: "Pause",

  buildCSSClass: function(){
    return "vjs-pause-button " + this._super();
  },

  onClick: function(){
    this.player.pause();
  }

});

/* Play Toggle - Play or Pause Media
================================================================================ */
_V_.PlayToggle = _V_.Button.extend({

  buttonText: "Play",

  init: function(player, options){
    this._super(player, options);

    player.addEvent("play", _V_.proxy(this, this.onPlay));
    player.addEvent("pause", _V_.proxy(this, this.onPause));
  },

  buildCSSClass: function(){
    return "vjs-play-control " + this._super();
  },

  // OnClick - Toggle between play and pause
  onClick: function(){
    if (this.player.paused()) {
      this.player.play();
    } else {
      this.player.pause();
    }
  },

  // OnPlay - Add the vjs-playing class to the element so it can change appearance
  onPlay: function(){
    _V_.removeClass(this.el, "vjs-paused");
    _V_.addClass(this.el, "vjs-playing");
  },

  // OnPause - Add the vjs-paused class to the element so it can change appearance
  onPause: function(){
    _V_.removeClass(this.el, "vjs-playing");
    _V_.addClass(this.el, "vjs-paused");
  }

});


/* Fullscreen Toggle Behaviors
================================================================================ */
_V_.FullscreenToggle = _V_.Button.extend({

  buttonText: "Fullscreen",

  buildCSSClass: function(){
    return "vjs-fullscreen-control " + this._super();
  },

  onClick: function(){
    if (!this.player.isFullScreen) {
      this.player.requestFullScreen();
    } else {
      this.player.cancelFullScreen();
    }
  }

});

/* Big Play Button
================================================================================ */
_V_.BigPlayButton = _V_.Button.extend({
  init: function(player, options){
    this._super(player, options);

    player.addEvent("play", _V_.proxy(this, this.hide));
    player.addEvent("ended", _V_.proxy(this, this.show));
  },

  createElement: function(){
    return this._super("div", {
      className: "vjs-big-play-button",
      innerHTML: "<span></span>"
    });
  },

  onClick: function(){
    // Go back to the beginning if big play button is showing at the end.
    // Have to check for current time otherwise it might throw a 'not ready' error.
    if(this.player.currentTime()) {
      this.player.currentTime(0);
    }
    this.player.play();
  }
});

/* Loading Spinner
================================================================================ */
_V_.LoadingSpinner = _V_.Component.extend({
  init: function(player, options){
    this._super(player, options);

    player.addEvent("canplay", _V_.proxy(this, this.hide));
    player.addEvent("canplaythrough", _V_.proxy(this, this.hide));
    player.addEvent("playing", _V_.proxy(this, this.hide));

    player.addEvent("seeking", _V_.proxy(this, this.show));
    player.addEvent("error", _V_.proxy(this, this.show));

    // Not showing spinner on stalled any more. Browsers may stall and then not trigger any events that would remove the spinner.
    // Checked in Chrome 16 and Safari 5.1.2. http://help.videojs.com/discussions/problems/883-why-is-the-download-progress-showing
    // player.addEvent("stalled", _V_.proxy(this, this.show));

    player.addEvent("waiting", _V_.proxy(this, this.show));
  },

  createElement: function(){

    var classNameSpinner, innerHtmlSpinner;

    if ( typeof this.player.el.style.WebkitBorderRadius == "string"
         || typeof this.player.el.style.MozBorderRadius == "string"
         || typeof this.player.el.style.KhtmlBorderRadius == "string"
         || typeof this.player.el.style.borderRadius == "string")
      {
        classNameSpinner = "vjs-loading-spinner";
        innerHtmlSpinner = "<div class='ball1'></div><div class='ball2'></div><div class='ball3'></div><div class='ball4'></div><div class='ball5'></div><div class='ball6'></div><div class='ball7'></div><div class='ball8'></div>";
      } else {
        classNameSpinner = "vjs-loading-spinner-fallback";
        innerHtmlSpinner = "";
      }

    return this._super("div", {
      className: classNameSpinner,
      innerHTML: innerHtmlSpinner
    });
  }
});

/* Time
================================================================================ */
_V_.CurrentTimeDisplay = _V_.Component.extend({

  init: function(player, options){
    this._super(player, options);

    player.addEvent("timeupdate", _V_.proxy(this, this.updateContent));
  },

  createElement: function(){
    var el = this._super("div", {
      className: "vjs-current-time vjs-time-controls vjs-control"
    });

    this.content = _V_.createElement("div", {
      className: "vjs-current-time-display",
      innerHTML: '0:00'
    });

    el.appendChild(_V_.createElement("div").appendChild(this.content));
    return el;
  },

  updateContent: function(){
    // Allows for smooth scrubbing, when player can't keep up.
    var time = (this.player.scrubbing) ? this.player.values.currentTime : this.player.currentTime();
    this.content.innerHTML = _V_.formatTime(time, this.player.duration());
  }

});

_V_.DurationDisplay = _V_.Component.extend({

  init: function(player, options){
    this._super(player, options);

    player.addEvent("timeupdate", _V_.proxy(this, this.updateContent));
  },

  createElement: function(){
    var el = this._super("div", {
      className: "vjs-duration vjs-time-controls vjs-control"
    });

    this.content = _V_.createElement("div", {
      className: "vjs-duration-display",
      innerHTML: '0:00'
    });

    el.appendChild(_V_.createElement("div").appendChild(this.content));
    return el;
  },

  updateContent: function(){
    if (this.player.duration()) { this.content.innerHTML = _V_.formatTime(this.player.duration()); }
  }

});

// Time Separator (Not used in main skin, but still available, and could be used as a 'spare element')
_V_.TimeDivider = _V_.Component.extend({

  createElement: function(){
    return this._super("div", {
      className: "vjs-time-divider",
      innerHTML: '<div><span>/</span></div>'
    });
  }

});

_V_.RemainingTimeDisplay = _V_.Component.extend({

  init: function(player, options){
    this._super(player, options);

    player.addEvent("timeupdate", _V_.proxy(this, this.updateContent));
  },

  createElement: function(){
    var el = this._super("div", {
      className: "vjs-remaining-time vjs-time-controls vjs-control"
    });

    this.content = _V_.createElement("div", {
      className: "vjs-remaining-time-display",
      innerHTML: '-0:00'
    });

    el.appendChild(_V_.createElement("div").appendChild(this.content));
    return el;
  },

  updateContent: function(){
    if (this.player.duration()) { this.content.innerHTML = "-"+_V_.formatTime(this.player.remainingTime()); }

    // Allows for smooth scrubbing, when player can't keep up.
    // var time = (this.player.scrubbing) ? this.player.values.currentTime : this.player.currentTime();
    // this.content.innerHTML = _V_.formatTime(time, this.player.duration());
  }

});

/* Slider - Parent for seek bar and volume slider
================================================================================ */
_V_.Slider = _V_.Component.extend({

  init: function(player, options){
    this._super(player, options);

    player.addEvent(this.playerEvent, _V_.proxy(this, this.update));

    this.addEvent("mousedown", this.onMouseDown);
    this.addEvent("focus", this.onFocus);
    this.addEvent("blur", this.onBlur);

    this.player.addEvent("controlsvisible", this.proxy(this.update));

    // This is actually to fix the volume handle position. http://twitter.com/#!/gerritvanaaken/status/159046254519787520
    // this.player.one("timeupdate", this.proxy(this.update));

    this.update();
  },

  createElement: function(type, attrs) {
    attrs = _V_.merge({
      role: "slider",
      "aria-valuenow": 0,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      tabIndex: 0
    }, attrs);

    return this._super(type, attrs);
  },

  onMouseDown: function(event){
    event.preventDefault();
    _V_.blockTextSelection();

    _V_.addEvent(document, "mousemove", _V_.proxy(this, this.onMouseMove));
    _V_.addEvent(document, "mouseup", _V_.proxy(this, this.onMouseUp));

    this.onMouseMove(event);
  },

  onMouseUp: function(event) {
    _V_.unblockTextSelection();
    _V_.removeEvent(document, "mousemove", this.onMouseMove, false);
    _V_.removeEvent(document, "mouseup", this.onMouseUp, false);

    this.update();
  },

  update: function(){
    // If scrubbing, we could use a cached value to make the handle keep up with the user's mouse.
    // On HTML5 browsers scrubbing is really smooth, but some flash players are slow, so we might want to utilize this later.
    // var progress =  (this.player.scrubbing) ? this.player.values.currentTime / this.player.duration() : this.player.currentTime() / this.player.duration();

    var barProgress,
        progress = this.getPercent();
        handle = this.handle,
        bar = this.bar;

    // Protect against no duration and other division issues
    if (isNaN(progress)) { progress = 0; }

    barProgress = progress;

    // If there is a handle, we need to account for the handle in our calculation for progress bar
    // so that it doesn't fall short of or extend past the handle.
    if (handle) {

      var box = this.el,
          boxWidth = box.offsetWidth,

          handleWidth = handle.el.offsetWidth,

          // The width of the handle in percent of the containing box
          // In IE, widths may not be ready yet causing NaN
          handlePercent = (handleWidth) ? handleWidth / boxWidth : 0,

          // Get the adjusted size of the box, considering that the handle's center never touches the left or right side.
          // There is a margin of half the handle's width on both sides.
          boxAdjustedPercent = 1 - handlePercent;

          // Adjust the progress that we'll use to set widths to the new adjusted box width
          adjustedProgress = progress * boxAdjustedPercent,

          // The bar does reach the left side, so we need to account for this in the bar's width
          barProgress = adjustedProgress + (handlePercent / 2);

      // Move the handle from the left based on the adjected progress
      handle.el.style.left = _V_.round(adjustedProgress * 100, 2) + "%";
    }

    // Set the new bar width
    bar.el.style.width = _V_.round(barProgress * 100, 2) + "%";
  },

  calculateDistance: function(event){
    var box = this.el,
        boxX = _V_.findPosX(box),
        boxW = box.offsetWidth,
        handle = this.handle;

    if (handle) {
      var handleW = handle.el.offsetWidth;

      // Adjusted X and Width, so handle doesn't go outside the bar
      boxX = boxX + (handleW / 2);
      boxW = boxW - handleW;
    }

    // Percent that the click is through the adjusted area
    return Math.max(0, Math.min(1, (event.pageX - boxX) / boxW));
  },

  onFocus: function(event){
    _V_.addEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
  },

  onKeyPress: function(event){
    if (event.which == 37) { // Left Arrow
      event.preventDefault();
      this.stepBack();
    } else if (event.which == 39) { // Right Arrow
      event.preventDefault();
      this.stepForward();
    }
  },

  onBlur: function(event){
    _V_.removeEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
  }
});


/* Progress
================================================================================ */

// Progress Control: Seek, Load Progress, and Play Progress
_V_.ProgressControl = _V_.Component.extend({

  options: {
    components: {
      "seekBar": {}
    }
  },

  createElement: function(){
    return this._super("div", {
      className: "vjs-progress-control vjs-control"
    });
  }

});

// Seek Bar and holder for the progress bars
_V_.SeekBar = _V_.Slider.extend({

  options: {
    components: {
      "loadProgressBar": {},

      // Set property names to bar and handle to match with the parent Slider class is looking for
      "bar": { componentClass: "PlayProgressBar" },
      "handle": { componentClass: "SeekHandle" }
    }
  },

  playerEvent: "timeupdate",

  init: function(player, options){
    this._super(player, options);
  },

  createElement: function(){
    return this._super("div", {
      className: "vjs-progress-holder"
    });
  },

  getPercent: function(){
    return this.player.currentTime() / this.player.duration();
  },

  onMouseDown: function(event){
    this._super(event);

    this.player.scrubbing = true;

    this.videoWasPlaying = !this.player.paused();
    this.player.pause();
  },

  onMouseMove: function(event){
    var newTime = this.calculateDistance(event) * this.player.duration();

    // Don't let video end while scrubbing.
    if (newTime == this.player.duration()) { newTime = newTime - 0.1; }

    // Set new time (tell player to seek to new time)
    this.player.currentTime(newTime);
  },

  onMouseUp: function(event){
    this._super(event);

    this.player.scrubbing = false;
    if (this.videoWasPlaying) {
      this.player.play();
    }
  },

  stepForward: function(){
    this.player.currentTime(this.player.currentTime() + 1);
  },

  stepBack: function(){
    this.player.currentTime(this.player.currentTime() - 1);
  }

});

// Load Progress Bar
_V_.LoadProgressBar = _V_.Component.extend({

  init: function(player, options){
    this._super(player, options);
    player.addEvent("progress", _V_.proxy(this, this.update));
  },

  createElement: function(){
    return this._super("div", {
      className: "vjs-load-progress",
      innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
    });
  },

  update: function(){
    if (this.el.style) { this.el.style.width = _V_.round(this.player.bufferedPercent() * 100, 2) + "%"; }
  }

});

// Play Progress Bar
_V_.PlayProgressBar = _V_.Component.extend({

  createElement: function(){
    return this._super("div", {
      className: "vjs-play-progress",
      innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
    });
  }

});

// Seek Handle
// SeekBar Behavior includes play progress bar, and seek handle
// Needed so it can determine seek position based on handle position/size
_V_.SeekHandle = _V_.Component.extend({

  createElement: function(){
    return this._super("div", {
      className: "vjs-seek-handle",
      innerHTML: '<span class="vjs-control-text">00:00</span>'
    });
  }

});

/* Volume Scrubber
================================================================================ */
// Progress Control: Seek, Load Progress, and Play Progress
_V_.VolumeControl = _V_.Component.extend({

  options: {
    components: {
      "volumeBar": {}
    }
  },

  createElement: function(){
    return this._super("div", {
      className: "vjs-volume-control vjs-control"
    });
  }

});

_V_.VolumeBar = _V_.Slider.extend({

  options: {
    components: {
      "bar": { componentClass: "VolumeLevel" },
      "handle": { componentClass: "VolumeHandle" }
    }
  },

  playerEvent: "volumechange",

  createElement: function(){
    return this._super("div", {
      className: "vjs-volume-bar"
    });
  },

  onMouseMove: function(event) {
    this.player.volume(this.calculateDistance(event));
  },

  getPercent: function(){
   return this.player.volume();
  },

  stepForward: function(){
    this.player.volume(this.player.volume() + 0.1);
  },

  stepBack: function(){
    this.player.volume(this.player.volume() - 0.1);
  }
});

_V_.VolumeLevel = _V_.Component.extend({

  createElement: function(){
    return this._super("div", {
      className: "vjs-volume-level",
      innerHTML: '<span class="vjs-control-text"></span>'
    });
  }

});

_V_.VolumeHandle = _V_.Component.extend({

  createElement: function(){
    return this._super("div", {
      className: "vjs-volume-handle",
      innerHTML: '<span class="vjs-control-text"></span>'
      // tabindex: 0,
      // role: "slider", "aria-valuenow": 0, "aria-valuemin": 0, "aria-valuemax": 100
    });
  }

});

_V_.MuteToggle = _V_.Button.extend({

  init: function(player, options){
    this._super(player, options);

    player.addEvent("volumechange", _V_.proxy(this, this.update));
  },

  createElement: function(){
    return this._super("div", {
      className: "vjs-mute-control vjs-control",
      innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
    });
  },

  onClick: function(event){
    this.player.muted( this.player.muted() ? false : true );
  },

  update: function(event){
    var vol = this.player.volume(),
        level = 3;

    if (vol == 0 || this.player.muted()) {
      level = 0;
    } else if (vol < 0.33) {
      level = 1;
    } else if (vol < 0.67) {
      level = 2;
    }

    /* TODO improve muted icon classes */
    _V_.each.call(this, [0,1,2,3], function(i){
      _V_.removeClass(this.el, "vjs-vol-"+i);
    });
    _V_.addClass(this.el, "vjs-vol-"+level);
  }

});


/* Poster Image
================================================================================ */
_V_.PosterImage = _V_.Button.extend({
  init: function(player, options){
    this._super(player, options);

    if (!this.player.options.poster) {
      this.hide();
    }

    player.addEvent("play", _V_.proxy(this, this.hide));
  },

  createElement: function(){
    return _V_.createElement("img", {
      className: "vjs-poster",
      src: this.player.options.poster,

      // Don't want poster to be tabbable.
      tabIndex: -1
    });
  },

  onClick: function(){
    this.player.play();
  }
});

/* Menu
================================================================================ */
// The base for text track and settings menu buttons.
_V_.Menu = _V_.Component.extend({

  init: function(player, options){
    this._super(player, options);
  },

  addItem: function(component){
    this.addComponent(component);
    component.addEvent("click", this.proxy(function(){
      this.unlockShowing();
    }));
  },

  createElement: function(){
    return this._super("ul", {
      className: "vjs-menu"
    });
  }

});

_V_.MenuItem = _V_.Button.extend({

  init: function(player, options){
    this._super(player, options);

    if (options.selected) {
      this.addClass("vjs-selected");
    }
  },

  createElement: function(type, attrs){
    return this._super("li", _V_.merge({
      className: "vjs-menu-item",
      innerHTML: this.options.label
    }, attrs));
  },

  onClick: function(){
    this.selected(true);
  },

  selected: function(selected){
    if (selected) {
      this.addClass("vjs-selected");
    } else {
      this.removeClass("vjs-selected")
    }
  }

});// ECMA-262 is the standard for javascript.
// The following methods are impelemented EXACTLY as described in the standard (according to Mozilla Docs), and do not override the default method if one exists.
// This may conflict with other libraries that modify the array prototype, but those libs should update to use the standard.

// [].indexOf
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
        "use strict";
        if (this === void 0 || this === null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n !== n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    }
}

// NOT NEEDED YET
// [].lastIndexOf
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
// if (!Array.prototype.lastIndexOf)
// {
//   Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/)
//   {
//     "use strict";
// 
//     if (this === void 0 || this === null)
//       throw new TypeError();
// 
//     var t = Object(this);
//     var len = t.length >>> 0;
//     if (len === 0)
//       return -1;
// 
//     var n = len;
//     if (arguments.length > 1)
//     {
//       n = Number(arguments[1]);
//       if (n !== n)
//         n = 0;
//       else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0))
//         n = (n > 0 || -1) * Math.floor(Math.abs(n));
//     }
// 
//     var k = n >= 0
//           ? Math.min(n, len - 1)
//           : len - Math.abs(n);
// 
//     for (; k >= 0; k--)
//     {
//       if (k in t && t[k] === searchElement)
//         return k;
//     }
//     return -1;
//   };
// }


// NOT NEEDED YET
// Array forEach per ECMA standard https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/foreach
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.com/#x15.4.4.18
// if ( !Array.prototype.forEach ) {
// 
//   Array.prototype.forEach = function( callback, thisArg ) {
// 
//     var T, k;
// 
//     if ( this == null ) {
//       throw new TypeError( " this is null or not defined" );
//     }
// 
//     // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
//     var O = Object(this);
// 
//     // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
//     // 3. Let len be ToUint32(lenValue).
//     var len = O.length >>> 0;
// 
//     // 4. If IsCallable(callback) is false, throw a TypeError exception.
//     // See: http://es5.github.com/#x9.11
//     if ( {}.toString.call(callback) != "[object Function]" ) {
//       throw new TypeError( callback + " is not a function" );
//     }
// 
//     // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
//     if ( thisArg ) {
//       T = thisArg;
//     }
// 
//     // 6. Let k be 0
//     k = 0;
// 
//     // 7. Repeat, while k < len
//     while( k < len ) {
// 
//       var kValue;
// 
//       // a. Let Pk be ToString(k).
//       //   This is implicit for LHS operands of the in operator
//       // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
//       //   This step can be combined with c
//       // c. If kPresent is true, then
//       if ( k in O ) {
// 
//         // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
//         kValue = O[ Pk ];
// 
//         // ii. Call the Call internal method of callback with T as the this value and
//         // argument list containing kValue, k, and O.
//         callback.call( T, kValue, k, O );
//       }
//       // d. Increase k by 1.
//       k++;
//     }
//     // 8. return undefined
//   };
// }


// NOT NEEDED YET
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/map
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.com/#x15.4.4.19
// if (!Array.prototype.map) {
//   Array.prototype.map = function(callback, thisArg) {
// 
//     var T, A, k;
// 
//     if (this == null) {
//       throw new TypeError(" this is null or not defined");
//     }
// 
//     // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
//     var O = Object(this);
// 
//     // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
//     // 3. Let len be ToUint32(lenValue).
//     var len = O.length >>> 0;
// 
//     // 4. If IsCallable(callback) is false, throw a TypeError exception.
//     // See: http://es5.github.com/#x9.11
//     if ({}.toString.call(callback) != "[object Function]") {
//       throw new TypeError(callback + " is not a function");
//     }
// 
//     // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
//     if (thisArg) {
//       T = thisArg;
//     }
// 
//     // 6. Let A be a new array created as if by the expression new Array(len) where Array is
//     // the standard built-in constructor with that name and len is the value of len.
//     A = new Array(len);
// 
//     // 7. Let k be 0
//     k = 0;
// 
//     // 8. Repeat, while k < len
//     while(k < len) {
// 
//       var kValue, mappedValue;
// 
//       // a. Let Pk be ToString(k).
//       //   This is implicit for LHS operands of the in operator
//       // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
//       //   This step can be combined with c
//       // c. If kPresent is true, then
//       if (k in O) {
// 
//         // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
//         kValue = O[ k ];
// 
//         // ii. Let mappedValue be the result of calling the Call internal method of callback
//         // with T as the this value and argument list containing kValue, k, and O.
//         mappedValue = callback.call(T, kValue, k, O);
// 
//         // iii. Call the DefineOwnProperty internal method of A with arguments
//         // Pk, Property Descriptor {Value: mappedValue, Writable: true, Enumerable: true, Configurable: true},
//         // and false.
// 
//         // In browsers that support Object.defineProperty, use the following:
//         // Object.defineProperty(A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });
// 
//         // For best browser support, use the following:
//         A[ k ] = mappedValue;
//       }
//       // d. Increase k by 1.
//       k++;
//     }
// 
//     // 9. return A
//     return A;
//   };      
// }
// Event System (J.Resig - Secrets of a JS Ninja http://jsninja.com/ [Go read it, really])
// (Book version isn't completely usable, so fixed some things and borrowed from jQuery where it's working)
// 
// This should work very similarly to jQuery's events, however it's based off the book version which isn't as
// robust as jquery's, so there's probably some differences.
// 
// When you add an event listener using _V_.addEvent, 
//   it stores the handler function in seperate cache object, 
//   and adds a generic handler to the element's event,
//   along with a unique id (guid) to the element.

_V_.extend({

  // Add an event listener to element
  // It stores the handler function in a separate cache object
  // and adds a generic handler to the element's event,
  // along with a unique id (guid) to the element.
  addEvent: function(elem, type, fn){
    var data = _V_.getData(elem), handlers;

    // We only need to generate one handler per element
    if (data && !data.handler) {
      // Our new meta-handler that fixes the event object and the context
      data.handler = function(event){
        event = _V_.fixEvent(event);
        var handlers = _V_.getData(elem).events[event.type];
        // Go through and call all the real bound handlers
        if (handlers) {
          
          // Copy handlers so if handlers are added/removed during the process it doesn't throw everything off.
          var handlersCopy = [];
          _V_.each(handlers, function(handler, i){
            handlersCopy[i] = handler;
          })
          
          for (var i = 0, l = handlersCopy.length; i < l; i++) {
            handlersCopy[i].call(elem, event);
          }
        }
      };
    }

    // We need a place to store all our event data
    if (!data.events) { data.events = {}; }

    // And a place to store the handlers for this event type
    handlers = data.events[type];

    if (!handlers) {
      handlers = data.events[ type ] = [];

      // Attach our meta-handler to the element, since one doesn't exist
      if (document.addEventListener) {
        elem.addEventListener(type, data.handler, false);
      } else if (document.attachEvent) {
        elem.attachEvent("on" + type, data.handler);
      }
    }

    if (!fn.guid) { fn.guid = _V_.guid++; }

    handlers.push(fn);
  },

  removeEvent: function(elem, type, fn) {
    var data = _V_.getData(elem), handlers;
    // If no events exist, nothing to unbind
    if (!data.events) { return; }

    // Are we removing all bound events?
    if (!type) {
      for (type in data.events) {
        _V_.cleanUpEvents(elem, type);
      }
      return;
    }

    // And a place to store the handlers for this event type
    handlers = data.events[type];

    // If no handlers exist, nothing to unbind
    if (!handlers) { return; }

    // See if we're only removing a single handler
    if (fn && fn.guid) {
      for (var i = 0; i < handlers.length; i++) {
        // We found a match (don't stop here, there could be a couple bound)
        if (handlers[i].guid === fn.guid) {
          // Remove the handler from the array of handlers
          handlers.splice(i--, 1);
        }
      }
    }

    _V_.cleanUpEvents(elem, type);
  },

  cleanUpEvents: function(elem, type) {
    var data = _V_.getData(elem);
    // Remove the events of a particular type if there are none left

    if (data.events[type].length === 0) {
      delete data.events[type];

      // Remove the meta-handler from the element
      if (document.removeEventListener) {
        elem.removeEventListener(type, data.handler, false);
      } else if (document.detachEvent) {
        elem.detachEvent("on" + type, data.handler);
      }
    }

    // Remove the events object if there are no types left
    if (_V_.isEmpty(data.events)) {
      delete data.events;
      delete data.handler;
    }

    // Finally remove the expando if there is no data left
    if (_V_.isEmpty(data)) {
      _V_.removeData(elem);
    }
  },

  fixEvent: function(event) {
    if (event[_V_.expando]) { return event; }
    // store a copy of the original event object
    // and "clone" to set read-only properties
    var originalEvent = event;
    event = new _V_.Event(originalEvent);

    for ( var i = _V_.Event.props.length, prop; i; ) {
      prop = _V_.Event.props[ --i ];
      event[prop] = originalEvent[prop];
    }

    // Fix target property, if necessary
    if (!event.target) { event.target = event.srcElement || document; }

    // check if target is a textnode (safari)
    if (event.target.nodeType === 3) { event.target = event.target.parentNode; }

    // Add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;
    }

    // Calculate pageX/Y if missing and clientX/Y available
    if ( event.pageX == null && event.clientX != null ) {
      var eventDocument = event.target.ownerDocument || document,
        doc = eventDocument.documentElement,
        body = eventDocument.body;

      event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY + (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc && doc.clientTop  || body && body.clientTop  || 0);
    }

    // Add which for key events
    if (event.which == null && (event.charCode != null || event.keyCode != null)) {
      event.which = event.charCode != null ? event.charCode : event.keyCode;
    }

    // Add metaKey to non-Mac browsers (use ctrl for PC's and Meta for Macs)
    if ( !event.metaKey && event.ctrlKey ) {
      event.metaKey = event.ctrlKey;
    }

    // Add which for click: 1 === left; 2 === middle; 3 === right
    // Note: button is not normalized, so don't use it
    if ( !event.which && event.button !== undefined ) {
      event.which = (event.button & 1 ? 1 : ( event.button & 2 ? 3 : ( event.button & 4 ? 2 : 0 ) ));
    }

    return event;
  },

  triggerEvent: function(elem, event) {
    var data = _V_.getData(elem),
        parent = elem.parentNode || elem.ownerDocument,
        type = event.type || event,
        handler;

    if (data) { handler = data.handler }

    // Added in attion to book. Book code was broke.
    event = typeof event === "object" ?
      event[_V_.expando] ? 
        event :
        new _V_.Event(type, event) :
      new _V_.Event(type);

    event.type = type;
    if (handler) {
      handler.call(elem, event);
    }

    // Clean up the event in case it is being reused
    event.result = undefined;
    event.target = elem;

    // Bubble the event up the tree to the document,
    // Unless it's been explicitly stopped
    // if (parent && !event.isPropagationStopped()) {
    //   _V_.triggerEvent(parent, event);
    // 
    // // We're at the top document so trigger the default action
    // } else if (!parent && !event.isDefaultPrevented()) {
    //   // log(type);
    //   var targetData = _V_.getData(event.target);
    //   // log(targetData);
    //   var targetHandler = targetData.handler;
    //   // log("2");
    //   if (event.target[event.type]) {
    //     // Temporarily disable the bound handler,
    //     // don't want to execute it twice
    //     if (targetHandler) {
    //       targetData.handler = function(){};
    //     }
    // 
    //     // Trigger the native event (click, focus, blur)
    //     event.target[event.type]();
    // 
    //     // Restore the handler
    //     if (targetHandler) {
    //       targetData.handler = targetHandler;
    //     }
    //   }
    // }
  },
  
  one: function(elem, type, fn) {
    _V_.addEvent(elem, type, function(){
      _V_.removeEvent(elem, type, arguments.callee)
      fn.apply(this, arguments);
    });
  }
});

// Custom Event object for standardizing event objects between browsers.
_V_.Event = function(src, props){
  // Event object
  if (src && src.type) {
    this.originalEvent = src;
    this.type = src.type;

    // Events bubbling up the document may have been marked as prevented
    // by a handler lower down the tree; reflect the correct value.
    this.isDefaultPrevented = (src.defaultPrevented || src.returnValue === false ||
      src.getPreventDefault && src.getPreventDefault()) ? returnTrue : returnFalse;

  // Event type
  } else {
    this.type = src;
  }

  // Put explicitly provided properties onto the event object
  if (props) { _V_.merge(this, props); }

  this.timeStamp = (new Date).getTime();

  // Mark it as fixed
  this[_V_.expando] = true;
};

_V_.Event.prototype = {
  preventDefault: function() {
    this.isDefaultPrevented = returnTrue;

    var e = this.originalEvent;
    if (!e) { return; }

    // if preventDefault exists run it on the original event
    if (e.preventDefault) { 
      e.preventDefault();
    // otherwise set the returnValue property of the original event to false (IE)
    } else {
      e.returnValue = false;
    }
  },
  stopPropagation: function() {
    this.isPropagationStopped = returnTrue;

    var e = this.originalEvent;
    if (!e) { return; }
    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) { e.stopPropagation(); }
    // otherwise set the cancelBubble property of the original event to true (IE)
    e.cancelBubble = true;
  },
  stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = returnTrue;
    this.stopPropagation();
  },
  isDefaultPrevented: returnFalse,
  isPropagationStopped: returnFalse,
  isImmediatePropagationStopped: returnFalse
};
_V_.Event.props = "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");

function returnTrue(){ return true; }
function returnFalse(){ return false; }

// Javascript JSON implementation
// (Parse Method Only)
// https://github.com/douglascrockford/JSON-js/blob/master/json2.js

var JSON;
if (!JSON) { JSON = {}; }

(function(){
  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

  if (typeof JSON.parse !== 'function') {
      JSON.parse = function (text, reviver) {
          var j;

          function walk(holder, key) {
              var k, v, value = holder[key];
              if (value && typeof value === 'object') {
                  for (k in value) {
                      if (Object.prototype.hasOwnProperty.call(value, k)) {
                          v = walk(value, k);
                          if (v !== undefined) {
                              value[k] = v;
                          } else {
                              delete value[k];
                          }
                      }
                  }
              }
              return reviver.call(holder, key, value);
          }
          text = String(text);
          cx.lastIndex = 0;
          if (cx.test(text)) {
              text = text.replace(cx, function (a) {
                  return '\\u' +
                      ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
              });
          }

          if (/^[\],:{}\s]*$/
                  .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                      .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                      .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

              j = eval('(' + text + ')');

              return typeof reviver === 'function' ?
                  walk({'': j}, '') : j;
          }

          throw new SyntaxError('JSON.parse');
      };
  }
}());
/* UI Component- Base class for all UI objects
================================================================================ */
_V_.Player = _V_.Component.extend({

  init: function(tag, addOptions, ready){

    this.tag = tag; // Store the original tag used to set options

    var el = this.el = _V_.createElement("div"), // Div to contain video and controls
        options = this.options = {},
        width = options.width = tag.getAttribute('width'),
        height = options.height = tag.getAttribute('height'),

        // Browsers default to 300x150 if there's no width/height or video size data.
        initWidth = width || 300,
        initHeight = height || 150;

    // Make player findable on elements
    tag.player = el.player = this;

    // Add callback to ready queue
    this.ready(ready);

    // Wrap video tag in div (el/box) container
    tag.parentNode.insertBefore(el, tag);
    el.appendChild(tag); // Breaks iPhone, fixed in HTML5 setup.

    // Give video tag properties to box
    el.id = this.id = tag.id; // ID will now reference box, not the video tag
    el.className = tag.className;
    // Update tag id/class for use as HTML5 playback tech
    tag.id += "_html5_api";
    tag.className = "vjs-tech";

    // Make player easily findable by ID
    _V_.players[el.id] = this;

    // Make box use width/height of tag, or default 300x150
    el.setAttribute("width", initWidth);
    el.setAttribute("height", initHeight);
    // Enforce with CSS since width/height attrs don't work on divs
    el.style.width = initWidth+"px";
    el.style.height = initHeight+"px";
    // Remove width/height attrs from tag so CSS can make it 100% width/height
    tag.removeAttribute("width");
    tag.removeAttribute("height");

    // Set Options
    _V_.merge(options, _V_.options); // Copy Global Defaults
    _V_.merge(options, this.getVideoTagSettings()); // Override with Video Tag Options
    _V_.merge(options, addOptions); // Override/extend with options from setup call

    // Store controls setting, and then remove immediately so native controls don't flash.
    tag.removeAttribute("controls");

    // Poster will be handled by a manual <img>
    tag.removeAttribute("poster");

    // Empty video tag sources and tracks so the built in player doesn't use them also.
    if (tag.hasChildNodes()) {
      for (var i=0,j=tag.childNodes;i<j.length;i++) {
        if (j[i].nodeName == "SOURCE" || j[i].nodeName == "TRACK") {
          tag.removeChild(j[i]);
        }
      }
    }

    // Cache for video property values.
    this.values = {};

    this.addClass("vjs-paused");

    this.addEvent("ended", this.onEnded);
    this.addEvent("play", this.onPlay);
    this.addEvent("pause", this.onPause);
    this.addEvent("progress", this.onProgress);
    this.addEvent("error", this.onError);

    // When the API is ready, loop through the components and add to the player.
    if (options.controls) {
      this.ready(function(){
        this.initComponents();
      });
    }

    // Tracks defined in tracks.js
    this.textTracks = [];
    if (options.tracks && options.tracks.length > 0) {
      this.addTextTracks(options.tracks);
    }

    // If there are no sources when the player is initialized,
    // load the first supported playback technology.
    if (!options.sources || options.sources.length == 0) {
      for (var i=0,j=options.techOrder; i<j.length; i++) {
        var techName = j[i],
            tech = _V_[techName];

        // Check if the browser supports this technology
        if (tech.isSupported()) {
          this.loadTech(techName);
          break;
        }
      }
    } else {
      // Loop through playback technologies (HTML5, Flash) and check for support. Then load the best source.
      // A few assumptions here:
      //   All playback technologies respect preload false.
      this.src(options.sources);
    }
  },

  // Cache for video property values.
  values: {},

  destroy: function(){
    // Ensure that tracking progress and time progress will stop and plater deleted
    this.stopTrackingProgress();
    this.stopTrackingCurrentTime();
    _V_.players[this.id] = null;
    delete _V_.players[this.id];
    this.tech.destroy();
    this.el.parentNode.removeChild(this.el);
  },

  createElement: function(type, options){},

  getVideoTagSettings: function(){
    var options = {
      sources: [],
      tracks: []
    };

    options.src = this.tag.getAttribute("src");
    options.controls = this.tag.getAttribute("controls") !== null;
    options.poster = this.tag.getAttribute("poster");
    options.preload = this.tag.getAttribute("preload");
    options.autoplay = this.tag.getAttribute("autoplay") !== null; // hasAttribute not IE <8 compatible
    options.loop = this.tag.getAttribute("loop") !== null;
    options.muted = this.tag.getAttribute("muted") !== null;

    if (this.tag.hasChildNodes()) {
      for (var c,i=0,j=this.tag.childNodes;i<j.length;i++) {
        c = j[i];
        if (c.nodeName == "SOURCE") {
          options.sources.push({
            src: c.getAttribute('src'),
            type: c.getAttribute('type'),
            media: c.getAttribute('media'),
            title: c.getAttribute('title')
          });
        }
        if (c.nodeName == "TRACK") {
          options.tracks.push({
            src: c.getAttribute("src"),
            kind: c.getAttribute("kind"),
            srclang: c.getAttribute("srclang"),
            label: c.getAttribute("label"),
            'default': c.getAttribute("default") !== null,
            title: c.getAttribute("title")
          });
        }
      }
    }
    return options;
  },

  /* PLayback Technology (tech)
  ================================================================================ */
  // Load/Create an instance of playback technlogy including element and API methods
  // And append playback element in player div.
  loadTech: function(techName, source){

    // Pause and remove current playback technology
    if (this.tech) {
      this.unloadTech();

    // If the first time loading, HTML5 tag will exist but won't be initialized
    // So we need to remove it if we're not loading HTML5
    } else if (techName != "html5" && this.tag) {
      this.el.removeChild(this.tag);
      this.tag = false;
    }

    this.techName = techName;

    // Turn off API access because we're loading a new tech that might load asynchronously
    this.isReady = false;

    var techReady = function(){
      this.player.triggerReady();

      // Manually track progress in cases where the browser/flash player doesn't report it.
      if (!this.support.progressEvent) {
        this.player.manualProgressOn();
      }

      // Manually track timeudpates in cases where the browser/flash player doesn't report it.
      if (!this.support.timeupdateEvent) {
        this.player.manualTimeUpdatesOn();
      }
    }

    // Grab tech-specific options from player options and add source and parent element to use.
    var techOptions = _V_.merge({ source: source, parentEl: this.el }, this.options[techName])

    if (source) {
      if (source.src == this.values.src && this.values.currentTime > 0) {
        techOptions.startTime = this.values.currentTime;
      }

      this.values.src = source.src;
    }

    // Initialize tech instance
    this.tech = new _V_[techName](this, techOptions);
    this.tech.ready(techReady);
  },

  unloadTech: function(){
    this.tech.destroy();

    // Turn off any manual progress or timeupdate tracking
    if (this.manualProgress) { this.manualProgressOff(); }

    if (this.manualTimeUpdates) { this.manualTimeUpdatesOff(); }

    this.tech = false;
  },

  // There's many issues around changing the size of a Flash (or other plugin) object.
  // First is a plugin reload issue in Firefox that has been around for 11 years: https://bugzilla.mozilla.org/show_bug.cgi?id=90268
  // Then with the new fullscreen API, Mozilla and webkit browsers will reload the flash object after going to fullscreen.
  // To get around this, we're unloading the tech, caching source and currentTime values, and reloading the tech once the plugin is resized.
  // reloadTech: function(betweenFn){
  //   _V_.log("unloadingTech")
  //   this.unloadTech();
  //   _V_.log("unloadedTech")
  //   if (betweenFn) { betweenFn.call(); }
  //   _V_.log("LoadingTech")
  //   this.loadTech(this.techName, { src: this.values.src })
  //   _V_.log("loadedTech")
  // },

  /* Fallbacks for unsupported event types
  ================================================================================ */
  // Manually trigger progress events based on changes to the buffered amount
  // Many flash players and older HTML5 browsers don't send progress or progress-like events
  manualProgressOn: function(){
    this.manualProgress = true;

    // Trigger progress watching when a source begins loading
    this.trackProgress();

    // Watch for a native progress event call on the tech element
    // In HTML5, some older versions don't support the progress event
    // So we're assuming they don't, and turning off manual progress if they do.
    this.tech.addEvent("progress", function(){

      // Remove this listener from the element
      this.removeEvent("progress", arguments.callee);

      // Update known progress support for this playback technology
      this.support.progressEvent = true;

      // Turn off manual progress tracking
      this.player.manualProgressOff();
    });
  },

  manualProgressOff: function(){
    this.manualProgress = false;
    this.stopTrackingProgress();
  },

  trackProgress: function(){
    this.progressInterval = setInterval(_V_.proxy(this, function(){
      // Don't trigger unless buffered amount is greater than last time
      // log(this.values.bufferEnd, this.buffered().end(0), this.duration())
      /* TODO: update for multiple buffered regions */
      if (this.values.bufferEnd < this.buffered().end(0)) {
        this.triggerEvent("progress");
      } else if (this.bufferedPercent() == 1) {
        this.stopTrackingProgress();
        this.triggerEvent("progress"); // Last update
      }
    }), 500);
  },
  stopTrackingProgress: function(){ clearInterval(this.progressInterval); },

  /* Time Tracking -------------------------------------------------------------- */
  manualTimeUpdatesOn: function(){
    this.manualTimeUpdates = true;

    this.addEvent("play", this.trackCurrentTime);
    this.addEvent("pause", this.stopTrackingCurrentTime);
    // timeupdate is also called by .currentTime whenever current time is set

    // Watch for native timeupdate event
    this.tech.addEvent("timeupdate", function(){

      // Remove this listener from the element
      this.removeEvent("timeupdate", arguments.callee);

      // Update known progress support for this playback technology
      this.support.timeupdateEvent = true;

      // Turn off manual progress tracking
      this.player.manualTimeUpdatesOff();
    });
  },

  manualTimeUpdatesOff: function(){
    this.manualTimeUpdates = false;
    this.stopTrackingCurrentTime();
    this.removeEvent("play", this.trackCurrentTime);
    this.removeEvent("pause", this.stopTrackingCurrentTime);
  },

  trackCurrentTime: function(){
    if (this.currentTimeInterval) { this.stopTrackingCurrentTime(); }
    this.currentTimeInterval = setInterval(_V_.proxy(this, function(){
      this.triggerEvent("timeupdate");
    }), 250); // 42 = 24 fps // 250 is what Webkit uses // FF uses 15
  },

  // Turn off play progress tracking (when paused or dragging)
  stopTrackingCurrentTime: function(){ clearInterval(this.currentTimeInterval); },

  /* Player event handlers (how the player reacts to certain events)
  ================================================================================ */
  onEnded: function(){
    if (this.options.loop) {
      this.currentTime(0);
      this.play();
    } else {
      this.pause();
      this.currentTime(0);
      this.pause();
    }
  },

  onPlay: function(){
    _V_.removeClass(this.el, "vjs-paused");
    _V_.addClass(this.el, "vjs-playing");
  },

  onPause: function(){
    _V_.removeClass(this.el, "vjs-playing");
    _V_.addClass(this.el, "vjs-paused");
  },

  onProgress: function(){
    // Add custom event for when source is finished downloading.
    if (this.bufferedPercent() == 1) {
      this.triggerEvent("loadedalldata");
    }
  },

  onError: function(e) {
    _V_.log("Video Error", e);
  },

/* Player API
================================================================================ */

  // Pass values to the playback tech
  techCall: function(method, arg){

    // If it's not ready yet, call method when it is
    if (!this.tech.isReady) {
      this.tech.ready(function(){
        this[method](arg);
      });

    // Otherwise call method now
    } else {
      try {
        this.tech[method](arg);
      } catch(e) {
        _V_.log(e);
      }
    }
  },

  // Get calls can't wait for the tech, and sometimes don't need to.
  techGet: function(method){

    // Make sure tech is ready
    if (this.tech.isReady) {

      // Flash likes to die and reload when you hide or reposition it.
      // In these cases the object methods go away and we get errors.
      // When that happens we'll catch the errors and inform tech that it's not ready any more.
      try {
        return this.tech[method]();
      } catch(e) {

        // When building additional tech libs, an expected method may not be defined yet
        if (this.tech[method] === undefined) {
          _V_.log("Video.js: " + method + " method not defined for "+this.techName+" playback technology.", e);

        } else {

          // When a method isn't available on the object it throws a TypeError
          if (e.name == "TypeError") {
            _V_.log("Video.js: " + method + " unavailable on "+this.techName+" playback technology element.", e);
            this.tech.isReady = false;

          } else {
            _V_.log(e);
          }
        }
      }
    }

    return;
  },

  // Method for calling methods on the current playback technology
  // techCall: function(method, arg){
  // 
  //   // if (this.isReady) {
  //   //   
  //   // } else {
  //   //   _V_.log("The playback technology API is not ready yet. Use player.ready(myFunction)."+" ["+method+"]", arguments.callee.caller.arguments.callee.caller.arguments.callee.caller)
  //   //   return false;
  //   //   // throw new Error("The playback technology API is not ready yet. Use player.ready(myFunction)."+" ["+method+"]");
  //   // }
  // },

  // http://dev.w3.org/html5/spec/video.html#dom-media-play
  play: function(){
    this.techCall("play");
    return this;
  },

  // http://dev.w3.org/html5/spec/video.html#dom-media-pause
  pause: function(){
    this.techCall("pause");
    return this;
  },
  
  // http://dev.w3.org/html5/spec/video.html#dom-media-paused
  // The initial state of paused should be true (in Safari it's actually false)
  paused: function(){
    return (this.techGet("paused") === false) ? false : true;
  },

  // http://dev.w3.org/html5/spec/video.html#dom-media-currenttime
  currentTime: function(seconds){
    if (seconds !== undefined) {

      // Cache the last set value for smoother scrubbing.
      this.values.lastSetCurrentTime = seconds;

      this.techCall("setCurrentTime", seconds);

      // Improve the accuracy of manual timeupdates
      if (this.manualTimeUpdates) { this.triggerEvent("timeupdate"); }

      return this;
    }

    // Cache last currentTime and return
    // Default to 0 seconds
    return this.values.currentTime = (this.techGet("currentTime") || 0);
  },

  // http://dev.w3.org/html5/spec/video.html#dom-media-duration
  // Duration should return NaN if not available. ParseFloat will turn false-ish values to NaN.
  duration: function(){
    return parseFloat(this.techGet("duration"));
  },

  // Calculates how much time is left. Not in spec, but useful.
  remainingTime: function(){
    return this.duration() - this.currentTime();
  },

  // http://dev.w3.org/html5/spec/video.html#dom-media-buffered
  // Buffered returns a timerange object. Kind of like an array of portions of the video that have been downloaded.
  // So far no browsers return more than one range (portion)
  buffered: function(){
    var buffered = this.techGet("buffered"),
        start = 0,
        end = this.values.bufferEnd = this.values.bufferEnd || 0, // Default end to 0 and store in values
        timeRange;

    if (buffered && buffered.length > 0 && buffered.end(0) !== end) {
      end = buffered.end(0);
      // Storing values allows them be overridden by setBufferedFromProgress
      this.values.bufferEnd = end;
    }

    return _V_.createTimeRange(start, end);
  },

  // Calculates amount of buffer is full. Not in spec but useful.
  bufferedPercent: function(){
    return (this.duration()) ? this.buffered().end(0) / this.duration() : 0;
  },

  // http://dev.w3.org/html5/spec/video.html#dom-media-volume
  volume: function(percentAsDecimal){
    var vol;

    if (percentAsDecimal !== undefined) {
      vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal))); // Force value to between 0 and 1
      this.values.volume = vol;
      this.techCall("setVolume", vol);
      _V_.setLocalStorage("volume", vol);
      return this;
    }

    // Default to 1 when returning current volume.
    vol = parseFloat(this.techGet("volume"));
    return (isNaN(vol)) ? 1 : vol;
  },

  // http://dev.w3.org/html5/spec/video.html#attr-media-muted
  muted: function(muted){
    if (muted !== undefined) {
      this.techCall("setMuted", muted);
      return this;
    }
    return this.techGet("muted") || false; // Default to false
  },

  // http://dev.w3.org/html5/spec/dimension-attributes.html#attr-dim-height
  // Video tag width/height only work in pixels. No percents.
  // We could potentially allow percents but won't for now until we can do testing around it.
  width: function(width, skipListeners){
    if (width !== undefined) {
      this.el.width = width;
      this.el.style.width = width+"px";

      // skipListeners allows us to avoid triggering the resize event when setting both width and height
      if (!skipListeners) { this.triggerEvent("resize"); }
      return this;
    }
    return parseInt(this.el.getAttribute("width"));
  },
  height: function(height){
    if (height !== undefined) {
      this.el.height = height;
      this.el.style.height = height+"px";
      this.triggerEvent("resize");
      return this;
    }
    return parseInt(this.el.getAttribute("height"));
  },
  // Set both width and height at the same time.
  size: function(width, height){
    // Skip resize listeners on width for optimization
    return this.width(width, true).height(height);
  },

  // Check if current tech can support native fullscreen (e.g. with built in controls lik iOS, so not our flash swf)
  supportsFullScreen: function(){ return this.techGet("supportsFullScreen") || false; },

  // Turn on fullscreen (or window) mode
  requestFullScreen: function(){
    var requestFullScreen = _V_.support.requestFullScreen;

    this.isFullScreen = true;

    // Check for browser element fullscreen support
    if (requestFullScreen) {

      // Trigger fullscreenchange event after change
      _V_.addEvent(document, requestFullScreen.eventName, this.proxy(function(){
        this.isFullScreen = document[requestFullScreen.isFullScreen];

        // If cancelling fullscreen, remove event listener.
        if (this.isFullScreen == false) {
          _V_.removeEvent(document, requestFullScreen.eventName, arguments.callee);
        }

        this.triggerEvent("fullscreenchange");
      }));

      // Flash and other plugins get reloaded when you take their parent to fullscreen.
      // To fix that we'll remove the tech, and reload it after the resize has finished.
      if (this.tech.support.fullscreenResize === false && this.options.flash.iFrameMode != true) {

        this.pause();
        this.unloadTech();

        _V_.addEvent(document, requestFullScreen.eventName, this.proxy(function(){
          _V_.removeEvent(document, requestFullScreen.eventName, arguments.callee);
          this.loadTech(this.techName, { src: this.values.src });
        }));

        this.el[requestFullScreen.requestFn]();

      } else {
        this.el[requestFullScreen.requestFn]();
      }

    } else if (this.tech.supportsFullScreen()) {
      this.triggerEvent("fullscreenchange");
      this.techCall("enterFullScreen");

    } else {
      this.triggerEvent("fullscreenchange");
      this.enterFullWindow();
    }

     return this;
   },

   cancelFullScreen: function(){
    var requestFullScreen = _V_.support.requestFullScreen;

    this.isFullScreen = false;

    // Check for browser element fullscreen support
    if (requestFullScreen) {

     // Flash and other plugins get reloaded when you take their parent to fullscreen.
     // To fix that we'll remove the tech, and reload it after the resize has finished.
     if (this.tech.support.fullscreenResize === false && this.options.flash.iFrameMode != true) {

       this.pause();
       this.unloadTech();

       _V_.addEvent(document, requestFullScreen.eventName, this.proxy(function(){
         _V_.removeEvent(document, requestFullScreen.eventName, arguments.callee);
         this.loadTech(this.techName, { src: this.values.src })
       }));

       document[requestFullScreen.cancelFn]();

     } else {
       document[requestFullScreen.cancelFn]();
     }

    } else if (this.tech.supportsFullScreen()) {
     this.techCall("exitFullScreen");
     this.triggerEvent("fullscreenchange");

    } else {
     this.exitFullWindow();
     this.triggerEvent("fullscreenchange");
    }

    return this;
  },

  // When fullscreen isn't supported we can stretch the video container to as wide as the browser will let us.
  enterFullWindow: function(){
    this.isFullWindow = true;

    // Storing original doc overflow value to return to when fullscreen is off
    this.docOrigOverflow = document.documentElement.style.overflow;

    // Add listener for esc key to exit fullscreen
    _V_.addEvent(document, "keydown", _V_.proxy(this, this.fullWindowOnEscKey));

    // Hide any scroll bars
    document.documentElement.style.overflow = 'hidden';

    // Apply fullscreen styles
    _V_.addClass(document.body, "vjs-full-window");
    _V_.addClass(this.el, "vjs-fullscreen");

    this.triggerEvent("enterFullWindow");
  },
  fullWindowOnEscKey: function(event){
    if (event.keyCode == 27) {
      if (this.isFullScreen == true) {
        this.cancelFullScreen();
      } else {
        this.exitFullWindow();
      }
    }
  },

  exitFullWindow: function(){
    this.isFullWindow = false;
    _V_.removeEvent(document, "keydown", this.fullWindowOnEscKey);

    // Unhide scroll bars.
    document.documentElement.style.overflow = this.docOrigOverflow;

    // Remove fullscreen styles
    _V_.removeClass(document.body, "vjs-full-window");
    _V_.removeClass(this.el, "vjs-fullscreen");

    // Resize the box, controller, and poster to original sizes
    // this.positionAll();
    this.triggerEvent("exitFullWindow");
  },

  selectSource: function(sources){

    // Loop through each playback technology in the options order
    for (var i=0,j=this.options.techOrder;i<j.length;i++) {
      var techName = j[i],
          tech = _V_[techName];
          // tech = _V_.tech[techName];

      // Check if the browser supports this technology
      if (tech.isSupported()) {

        // Loop through each source object
        for (var a=0,b=sources;a<b.length;a++) {
          var source = b[a];

          // Check if source can be played with this technology
          if (tech.canPlaySource.call(this, source)) {

            return { source: source, tech: techName };

          }
        }
      }
    }

    return false;
  },

  // src is a pretty powerful function
  // If you pass it an array of source objects, it will find the best source to play and use that object.src
  //   If the new source requires a new playback technology, it will switch to that.
  // If you pass it an object, it will set the source to object.src
  // If you pass it anything else (url string) it will set the video source to that
  src: function(source){
    // Case: Array of source objects to choose from and pick the best to play
    if (source instanceof Array) {

      var sourceTech = this.selectSource(source),
          source,
          techName;

      if (sourceTech) {
          source = sourceTech.source;
          techName = sourceTech.tech;

        // If this technology is already loaded, set source
        if (techName == this.techName) {
          this.src(source); // Passing the source object

        // Otherwise load this technology with chosen source
        } else {
          this.loadTech(techName, source);
        }
      } else {
        _V_.log("No compatible source and playback technology were found.")
      }

    // Case: Source object { src: "", type: "" ... }
    } else if (source instanceof Object) {

      if (_V_[this.techName].canPlaySource(source)) {
        this.src(source.src);
      } else {
        // Send through tech loop to check for a compatible technology.
        this.src([source]);
      }

    // Case: URL String (http://myvideo...)
    } else {
      // Cache for getting last set source
      this.values.src = source;

      if (!this.isReady) {
        this.ready(function(){
          this.src(source);
        });
      } else {
        this.techCall("src", source);
        if (this.options.preload == "auto") {
          this.load();
        }
        if (this.options.autoplay) {
          this.play();
        }
      }
    }
    return this;
  },

  // Begin loading the src data
  // http://dev.w3.org/html5/spec/video.html#dom-media-load
  load: function(){
    this.techCall("load");
    return this;
  },

  // http://dev.w3.org/html5/spec/video.html#dom-media-currentsrc
  currentSrc: function(){
    return this.techGet("currentSrc") || this.values.src || "";
  },

  // Attributes/Options
  preload: function(value){
    if (value !== undefined) {
      this.techCall("setPreload", value);
      this.options.preload = value;
      return this;
    }
    return this.techGet("preload");
  },
  autoplay: function(value){
    if (value !== undefined) {
      this.techCall("setAutoplay", value);
      this.options.autoplay = value;
      return this;
    }
    return this.techGet("autoplay", value);
  },
  loop: function(value){
    if (value !== undefined) {
      this.techCall("setLoop", value);
      this.options.loop = value;
      return this;
    }
    return this.techGet("loop");
  },

  controls: function(){ return this.options.controls; },
  poster: function(){ return this.techGet("poster"); },
  error: function(){ return this.techGet("error"); },
  ended: function(){ return this.techGet("ended"); }

  // Methods to add support for
  // networkState: function(){ return this.techCall("networkState"); },
  // readyState: function(){ return this.techCall("readyState"); },
  // seeking: function(){ return this.techCall("seeking"); },
  // initialTime: function(){ return this.techCall("initialTime"); },
  // startOffsetTime: function(){ return this.techCall("startOffsetTime"); },
  // played: function(){ return this.techCall("played"); },
  // seekable: function(){ return this.techCall("seekable"); },
  // videoTracks: function(){ return this.techCall("videoTracks"); },
  // audioTracks: function(){ return this.techCall("audioTracks"); },
  // videoWidth: function(){ return this.techCall("videoWidth"); },
  // videoHeight: function(){ return this.techCall("videoHeight"); },
  // defaultPlaybackRate: function(){ return this.techCall("defaultPlaybackRate"); },
  // playbackRate: function(){ return this.techCall("playbackRate"); },
  // mediaGroup: function(){ return this.techCall("mediaGroup"); },
  // controller: function(){ return this.techCall("controller"); },
  // defaultMuted: function(){ return this.techCall("defaultMuted"); }
});

// RequestFullscreen API
(function(){
  var requestFn,
      cancelFn,
      eventName,
      isFullScreen,
      playerProto = _V_.Player.prototype;

  // Current W3C Spec
  // http://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html#api
  // Mozilla Draft: https://wiki.mozilla.org/Gecko:FullScreenAPI#fullscreenchange_event
  if (document.cancelFullscreen !== undefined) {
    requestFn = "requestFullscreen";
    cancelFn = "exitFullscreen";
    eventName = "fullscreenchange";
    isFullScreen = "fullScreen";

  // Webkit (Chrome/Safari) and Mozilla (Firefox) have working implementaitons
  // that use prefixes and vary slightly from the new W3C spec. Specifically, using 'exit' instead of 'cancel',
  // and lowercasing the 'S' in Fullscreen.
  // Other browsers don't have any hints of which version they might follow yet, so not going to try to predict by loopeing through all prefixes.
  } else {

    _V_.each(["moz", "webkit"], function(prefix){

      // https://github.com/zencoder/video-js/pull/128
      if ((prefix != "moz" || document.mozFullScreenEnabled) && document[prefix + "CancelFullScreen"] !== undefined) {
        requestFn = prefix + "RequestFullScreen";
        cancelFn = prefix + "CancelFullScreen";
        eventName = prefix + "fullscreenchange";

        if (prefix == "webkit") {
          isFullScreen = prefix + "IsFullScreen";
        } else {
          isFullScreen = prefix + "FullScreen";
        }
      }

    });

  }

  if (requestFn) {
    _V_.support.requestFullScreen = {
      requestFn: requestFn,
      cancelFn: cancelFn,
      eventName: eventName,
      isFullScreen: isFullScreen
    };
  }

})();/* Playback Technology - Base class for playback technologies
================================================================================ */
_V_.PlaybackTech = _V_.Component.extend({
  init: function(player, options){
    // this._super(player, options);

    // Make playback element clickable
    // _V_.addEvent(this.el, "click", _V_.proxy(this, _V_.PlayToggle.prototype.onClick));

    // this.addEvent("click", this.proxy(this.onClick));

    // player.triggerEvent("techready");
  },
  // destroy: function(){},
  // createElement: function(){},
  onClick: function(){
    if (this.player.options.controls) {
      _V_.PlayToggle.prototype.onClick.call(this);
    }
  }
});

// Create placeholder methods for each that warn when a method isn't supported by the current playback technology
_V_.apiMethods = "play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,mediaGroup,controller,controls,defaultMuted".split(",");
_V_.each(_V_.apiMethods, function(methodName){
  _V_.PlaybackTech.prototype[methodName] = function(){
    throw new Error("The '"+methodName+"' method is not available on the playback technology's API");
  }
});

/* HTML5 Playback Technology - Wrapper for HTML5 Media API
================================================================================ */
_V_.html5 = _V_.PlaybackTech.extend({

  init: function(player, options, ready){
    this.player = player;
    this.el = this.createElement();
    this.ready(ready);

    this.addEvent("click", this.proxy(this.onClick));

    var source = options.source;

    // If the element source is already set, we may have missed the loadstart event, and want to trigger it.
    // We don't want to set the source again and interrupt playback.
    if (source && this.el.currentSrc == source.src) {
      player.triggerEvent("loadstart");

    // Otherwise set the source if one was provided.
    } else if (source) {
      this.el.src = source.src;
    }

    // Chrome and Safari both have issues with autoplay.
    // In Safari (5.1.1), when we move the video element into the container div, autoplay doesn't work.
    // In Chrome (15), if you have autoplay + a poster + no controls, the video gets hidden (but audio plays)
    // This fixes both issues. Need to wait for API, so it updates displays correctly
    player.ready(function(){
      if (this.options.autoplay && this.paused()) {
        this.tag.poster = null; // Chrome Fix. Fixed in Chrome v16.
        this.play();
      }
    });

    this.setupTriggers();

    this.triggerReady();
  },

  destroy: function(){
    this.player.tag = false;
    this.removeTriggers();
    this.el.parentNode.removeChild(this.el);
  },

  createElement: function(){
    var html5 = _V_.html5,
        player = this.player,

        // If possible, reuse original tag for HTML5 playback technology element
        el = player.tag,
        newEl;

    // Check if this browser supports moving the element into the box.
    // On the iPhone video will break if you move the element,
    // So we have to create a brand new element.
    if (!el || this.support.movingElementInDOM === false) {

      // If the original tag is still there, remove it.
      if (el) {
        player.el.removeChild(el);
      }

      newEl = _V_.createElement("video", {
        id: el.id || player.el.id + "_html5_api",
        className: el.className || "vjs-tech"
      });

      el = newEl;
      _V_.insertFirst(el, player.el);
    }

    // Update tag settings, in case they were overridden
    _V_.each(["autoplay","preload","loop","muted"], function(attr){ // ,"poster"
      if (player.options[attr] !== null) {
        el[attr] = player.options[attr];
      }
    }, this);

    return el;
  },

  // Make video events trigger player events
  // May seem verbose here, but makes other APIs possible.
  setupTriggers: function(){
    _V_.each.call(this, _V_.html5.events, function(type){
      _V_.addEvent(this.el, type, _V_.proxy(this.player, this.eventHandler));
    });
  },
  removeTriggers: function(){
    _V_.each.call(this, _V_.html5.events, function(type){
      _V_.removeEvent(this.el, type, _V_.proxy(this.player, this.eventHandler));
    });
  },
  eventHandler: function(e){
    e.stopPropagation();
    this.triggerEvent(e);
  },

  play: function(){ this.el.play(); },
  pause: function(){ this.el.pause(); },
  paused: function(){ return this.el.paused; },

  currentTime: function(){ return this.el.currentTime; },
  setCurrentTime: function(seconds){
    try {
      this.el.currentTime = seconds;
      } catch(e) {
        _V_.log(e, "Video isn't ready. (VideoJS)");
      // this.warning(VideoJS.warnings.videoNotReady);
    }
  },

  duration: function(){ return this.el.duration || 0; },
  buffered: function(){ return this.el.buffered; },

  volume: function(){ return this.el.volume; },
  setVolume: function(percentAsDecimal){ this.el.volume = percentAsDecimal; },
  muted: function(){ return this.el.muted; },
  setMuted: function(muted){ this.el.muted = muted },

  width: function(){ return this.el.offsetWidth; },
  height: function(){ return this.el.offsetHeight; },

  supportsFullScreen: function(){
    if (typeof this.el.webkitEnterFullScreen == 'function') {

      // Seems to be broken in Chromium/Chrome && Safari in Leopard
      if (!navigator.userAgent.match("Chrome") && !navigator.userAgent.match("Mac OS X 10.5")) {
        return true;
      }
    }
    return false;
  },

  enterFullScreen: function(){
      try {
        this.el.webkitEnterFullScreen();
      } catch (e) {
        if (e.code == 11) {
          // this.warning(VideoJS.warnings.videoNotReady);
          _V_.log("VideoJS: Video not ready.")
        }
      }
  },
  src: function(src){ this.el.src = src; },
  load: function(){ this.el.load(); },
  currentSrc: function(){ return this.el.currentSrc; },

  preload: function(){ return this.el.preload; },
  setPreload: function(val){ this.el.preload = val; },
  autoplay: function(){ return this.el.autoplay; },
  setAutoplay: function(val){ this.el.autoplay = val; },
  loop: function(){ return this.el.loop; },
  setLoop: function(val){ this.el.loop = val; },

  error: function(){ return this.el.error; },
  // networkState: function(){ return this.el.networkState; },
  // readyState: function(){ return this.el.readyState; },
  seeking: function(){ return this.el.seeking; },
  // initialTime: function(){ return this.el.initialTime; },
  // startOffsetTime: function(){ return this.el.startOffsetTime; },
  // played: function(){ return this.el.played; },
  // seekable: function(){ return this.el.seekable; },
  ended: function(){ return this.el.ended; },
  // videoTracks: function(){ return this.el.videoTracks; },
  // audioTracks: function(){ return this.el.audioTracks; },
  // videoWidth: function(){ return this.el.videoWidth; },
  // videoHeight: function(){ return this.el.videoHeight; },
  // textTracks: function(){ return this.el.textTracks; },
  // defaultPlaybackRate: function(){ return this.el.defaultPlaybackRate; },
  // playbackRate: function(){ return this.el.playbackRate; },
  // mediaGroup: function(){ return this.el.mediaGroup; },
  // controller: function(){ return this.el.controller; },
  controls: function(){ return this.player.options.controls; },
  defaultMuted: function(){ return this.el.defaultMuted; }
});

/* HTML5 Support Testing -------------------------------------------------------- */

_V_.html5.isSupported = function(){
  return !!document.createElement("video").canPlayType;
};

_V_.html5.canPlaySource = function(srcObj){
  return !!document.createElement("video").canPlayType(srcObj.type);
  // TODO: Check Type
  // If no Type, check ext
  // Check Media Type
};

// List of all HTML5 events (various uses).
_V_.html5.events = "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(",");

/* HTML5 Device Fixes ---------------------------------------------------------- */

_V_.html5.prototype.support = {

  // Support for tech specific full screen. (webkitEnterFullScreen, not requestFullscreen)
  // http://developer.apple.com/library/safari/#documentation/AudioVideo/Reference/HTMLVideoElementClassReference/HTMLVideoElement/HTMLVideoElement.html
  // Seems to be broken in Chromium/Chrome && Safari in Leopard
  fullscreen: (typeof _V_.testVid.webkitEnterFullScreen !== undefined) ? (!_V_.ua.match("Chrome") && !_V_.ua.match("Mac OS X 10.5") ? true : false) : false,

  // In iOS, if you move a video element in the DOM, it breaks video playback.
  movingElementInDOM: !_V_.isIOS()

};

// Android
if (_V_.isAndroid()) {

  // Override Android 2.2 and less canPlayType method which is broken
  if (_V_.androidVersion() < 3) {
    document.createElement("video").constructor.prototype.canPlayType = function(type){
      return (type && type.toLowerCase().indexOf("video/mp4") != -1) ? "maybe" : "";
    };
  }
}


/* VideoJS-SWF - Custom Flash Player with HTML5-ish API - https://github.com/zencoder/video-js-swf
================================================================================ */
_V_.flash = _V_.PlaybackTech.extend({

  init: function(player, options){
    this.player = player;

    var source = options.source,

        // Which element to embed in
        parentEl = options.parentEl,

        // Create a temporary element to be replaced by swf object
        placeHolder = this.el = _V_.createElement("div", { id: parentEl.id + "_temp_flash" }),

        // Generate ID for swf object
        objId = player.el.id+"_flash_api",

        // Store player options in local var for optimization
        playerOptions = player.options,

        // Merge default flashvars with ones passed in to init
        flashVars = _V_.merge({

          // SWF Callback Functions
          readyFunction: "_V_.flash.onReady",
          eventProxyFunction: "_V_.flash.onEvent",
          errorEventProxyFunction: "_V_.flash.onError",

          // Player Settings
          autoplay: playerOptions.autoplay,
          preload: playerOptions.preload,
          loop: playerOptions.loop,
          muted: playerOptions.muted

        }, options.flashVars),

        // Merge default parames with ones passed in
        params = _V_.merge({
          wmode: "opaque", // Opaque is needed to overlay controls, but can affect playback performance
          bgcolor: "#000000" // Using bgcolor prevents a white flash when the object is loading
        }, options.params),

        // Merge default attributes with ones passed in
        attributes = _V_.merge({
          id: objId,
          name: objId, // Both ID and Name needed or swf to identifty itself
          'class': 'vjs-tech'
        }, options.attributes)
    ;

    // If source was supplied pass as a flash var.
    if (source) {
      flashVars.src = encodeURIComponent(_V_.getAbsoluteURL(source.src));
    }

    // Add placeholder to player div
    _V_.insertFirst(placeHolder, parentEl);

    // Having issues with Flash reloading on certain page actions (hide/resize/fullscreen) in certain browsers
    // This allows resetting the playhead when we catch the reload
    if (options.startTime) {
      this.ready(function(){
        this.load();
        this.play();
        this.currentTime(options.startTime);
      });
    }

    // Flash iFrame Mode
    // In web browsers there are multiple instances where changing the parent element or visibility of a plugin causes the plugin to reload.
    // - Firefox just about always. https://bugzilla.mozilla.org/show_bug.cgi?id=90268 (might be fixed by version 13)
    // - Webkit when hiding the plugin
    // - Webkit and Firefox when using requestFullScreen on a parent element
    // Loading the flash plugin into a dynamically generated iFrame gets around most of these issues.
    // Issues that remain include hiding the element and requestFullScreen in Firefox specifically

    // There's on particularly annoying issue with this method which is that Firefox throws a security error on an offsite Flash object loaded into a dynamically created iFrame.
    // Even though the iframe was inserted into a page on the web, Firefox + Flash considers it a local app trying to access an internet file.
    // I tried mulitple ways of setting the iframe src attribute but couldn't find a src that worked well. Tried a real/fake source, in/out of domain.
    // Also tried a method from stackoverflow that caused a security error in all browsers. http://stackoverflow.com/questions/2486901/how-to-set-document-domain-for-a-dynamically-generated-iframe
    // In the end the solution I found to work was setting the iframe window.location.href right before doing a document.write of the Flash object.
    // The only downside of this it seems to trigger another http request to the original page (no matter what's put in the href). Not sure why that is.

    // NOTE (2012-01-29): Cannot get Firefox to load the remote hosted SWF into a dynamically created iFrame
    // Firefox 9 throws a security error, unleess you call location.href right before doc.write.
    //    Not sure why that even works, but it causes the browser to look like it's continuously trying to load the page.
    // Firefox 3.6 keeps calling the iframe onload function anytime I write to it, causing an endless loop.

    if (options.iFrameMode == true && !_V_.isFF) {

      // Create iFrame with vjs-tech class so it's 100% width/height
      var iFrm = _V_.createElement("iframe", {
        id: objId + "_iframe",
        name: objId + "_iframe",
        className: "vjs-tech",
        scrolling: "no",
        marginWidth: 0,
        marginHeight: 0,
        frameBorder: 0
      });

      // Update ready function names in flash vars for iframe window
      flashVars.readyFunction = "ready";
      flashVars.eventProxyFunction = "events";
      flashVars.errorEventProxyFunction = "errors";

      // Tried multiple methods to get this to work in all browsers

      // Tried embedding the flash object in the page first, and then adding a place holder to the iframe, then replacing the placeholder with the page object.
      // The goal here was to try to load the swf URL in the parent page first and hope that got around the firefox security error
      // var newObj = _V_.flash.embed(options.swf, placeHolder, flashVars, params, attributes);
      // (in onload)
      //  var temp = _V_.createElement("a", { id:"asdf", innerHTML: "asdf" } );
      //  iDoc.body.appendChild(temp);

      // Tried embedding the flash object through javascript in the iframe source.
      // This works in webkit but still triggers the firefox security error
      // iFrm.src = "javascript: document.write('"+_V_.flash.getEmbedCode(options.swf, flashVars, params, attributes)+"');";

      // Tried an actual local iframe just to make sure that works, but it kills the easiness of the CDN version if you require the user to host an iframe
      // We should add an option to host the iframe locally though, because it could help a lot of issues.
      // iFrm.src = "iframe.html";

      // Wait until iFrame has loaded to write into it.
      _V_.addEvent(iFrm, "load", _V_.proxy(this, function(){

        var iDoc, objTag, swfLoc,
            iWin = iFrm.contentWindow,
            varString = "";


        // The one working method I found was to use the iframe's document.write() to create the swf object
        // This got around the security issue in all browsers except firefox.
        // I did find a hack where if I call the iframe's window.location.href="", it would get around the security error
        // However, the main page would look like it was loading indefinitely (URL bar loading spinner would never stop)
        // Plus Firefox 3.6 didn't work no matter what I tried.
        // if (_V_.ua.match("Firefox")) {
        //   iWin.location.href = "";
        // }

        // Get the iFrame's document depending on what the browser supports
        iDoc = iFrm.contentDocument ? iFrm.contentDocument : iFrm.contentWindow.document;

        // Tried ensuring both document domains were the same, but they already were, so that wasn't the issue.
        // Even tried adding /. that was mentioned in a browser security writeup
        // document.domain = document.domain+"/.";
        // iDoc.domain = document.domain+"/.";

        // Tried adding the object to the iframe doc's innerHTML. Security error in all browsers.
        // iDoc.body.innerHTML = swfObjectHTML;

        // Tried appending the object to the iframe doc's body. Security error in all browsers.
        // iDoc.body.appendChild(swfObject);

        // Using document.write actually got around the security error that browsers were throwing.
        // Again, it's a dynamically generated (same domain) iframe, loading an external Flash swf.
        // Not sure why that's a security issue, but apparently it is.
        iDoc.write(_V_.flash.getEmbedCode(options.swf, flashVars, params, attributes));

        // Setting variables on the window needs to come after the doc write because otherwise they can get reset in some browsers
        // So far no issues with swf ready event being called before it's set on the window.
        iWin.player = this.player;

        // Create swf ready function for iFrame window
        iWin.ready = _V_.proxy(this.player, function(currSwf){
          var el = iDoc.getElementById(currSwf),
              player = this,
              tech = player.tech;

          // Update reference to playback technology element
          tech.el = el;

          // Now that the element is ready, make a click on the swf play the video
          _V_.addEvent(el, "click", tech.proxy(tech.onClick));

          // Make sure swf is actually ready. Sometimes the API isn't actually yet.
          _V_.flash.checkReady(tech);
        });

        // Create event listener for all swf events
        iWin.events = _V_.proxy(this.player, function(swfID, eventName, other){
          var player = this;
          if (player && player.techName == "flash") {
            player.triggerEvent(eventName);
          }
        });

        // Create error listener for all swf errors
        iWin.errors = _V_.proxy(this.player, function(swfID, eventName){
          _V_.log("Flash Error", eventName);
        });

      }));

      // Replace placeholder with iFrame (it will load now)
      placeHolder.parentNode.replaceChild(iFrm, placeHolder);

    // If not using iFrame mode, embed as normal object
    } else {
      _V_.flash.embed(options.swf, placeHolder, flashVars, params, attributes);
    }
  },

  destroy: function(){
    this.el.parentNode.removeChild(this.el);
  },

  // setupTriggers: function(){}, // Using global onEvent func to distribute events

  play: function(){ this.el.vjs_play(); },
  pause: function(){ this.el.vjs_pause(); },
  src: function(src){
    // Make sure source URL is abosolute.
    src = _V_.getAbsoluteURL(src);

    this.el.vjs_src(src);

    // Currently the SWF doesn't autoplay if you load a source later.
    // e.g. Load player w/ no source, wait 2s, set src.
    if (this.player.autoplay()) {
      var tech = this;
      setTimeout(function(){ tech.play(); }, 0);
    }
  },
  load: function(){ this.el.vjs_load(); },
  poster: function(){ this.el.vjs_getProperty("poster"); },

  buffered: function(){
    return _V_.createTimeRange(0, this.el.vjs_getProperty("buffered"));
  },

  supportsFullScreen: function(){
    return false; // Flash does not allow fullscreen through javascript
  },
  enterFullScreen: function(){
    return false;
  }
});

// Create setters and getters for attributes
(function(){

  var api = _V_.flash.prototype,
      readWrite = "preload,currentTime,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","),
      readOnly = "error,currentSrc,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(","),
      callOnly = "load,play,pause".split(",");
      // Overridden: buffered

      createSetter = function(attr){
        var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
        api["set"+attrUpper] = function(val){ return this.el.vjs_setProperty(attr, val); };
      },

      createGetter = function(attr){
        api[attr] = function(){ return this.el.vjs_getProperty(attr); };
      }
  ;

  // Create getter and setters for all read/write attributes
  _V_.each(readWrite, function(attr){
    createGetter(attr);
    createSetter(attr);
  });

  // Create getters for read-only attributes
  _V_.each(readOnly, function(attr){
    createGetter(attr);
  });

})();

/* Flash Support Testing -------------------------------------------------------- */

_V_.flash.isSupported = function(){
  return _V_.flash.version()[0] >= 10;
  // return swfobject.hasFlashPlayerVersion("10");
};

_V_.flash.canPlaySource = function(srcObj){
  if (srcObj.type in _V_.flash.prototype.support.formats) { return "maybe"; }
};

_V_.flash.prototype.support = {
  formats: {
    "video/flv": "FLV",
    "video/x-flv": "FLV",
    "video/mp4": "MP4",
    "video/m4v": "MP4"
  },

  // Optional events that we can manually mimic with timers
  progressEvent: false,
  timeupdateEvent: false,

  // Resizing plugins using request fullscreen reloads the plugin
  fullscreenResize: false,

  // Resizing plugins in Firefox always reloads the plugin (e.g. full window mode)
  parentResize: !(_V_.ua.match("Firefox"))
};

_V_.flash.onReady = function(currSwf){

  var el = _V_.el(currSwf);

  // Get player from box
  // On firefox reloads, el might already have a player
  var player = el.player || el.parentNode.player,
      tech = player.tech;

  // Reference player on tech element
  el.player = player;

  // Update reference to playback technology element
  tech.el = el;

  // Now that the element is ready, make a click on the swf play the video
  tech.addEvent("click", tech.onClick);

  _V_.flash.checkReady(tech);
};

// The SWF isn't alwasy ready when it says it is. Sometimes the API functions still need to be added to the object.
// If it's not ready, we set a timeout to check again shortly.
_V_.flash.checkReady = function(tech){

  // Check if API property exists
  if (tech.el.vjs_getProperty) {

    // If so, tell tech it's ready
    tech.triggerReady();

  // Otherwise wait longer.
  } else {

    setTimeout(function(){
      _V_.flash.checkReady(tech);
    }, 50);

  }
};

// Trigger events from the swf on the player
_V_.flash.onEvent = function(swfID, eventName){
  var player = _V_.el(swfID).player;
  player.triggerEvent(eventName);
};

// Log errors from the swf
_V_.flash.onError = function(swfID, err){
  var player = _V_.el(swfID).player;
  player.triggerEvent("error");
  _V_.log("Flash Error", err, swfID);
};

// Flash Version Check
_V_.flash.version = function(){
  var version = '0,0,0'

  // IE
  try {
    version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];

  // other browsers
  } catch(e) {
    try {
      if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
        version = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
      }
    } catch(e) {}
  }
  return version.split(",");
}

// Flash embedding method. Only used in non-iframe mode
_V_.flash.embed = function(swf, placeHolder, flashVars, params, attributes){
  var code = _V_.flash.getEmbedCode(swf, flashVars, params, attributes),

      // Get element by embedding code and retrieving created element
      obj = _V_.createElement("div", { innerHTML: code }).childNodes[0],

      par = placeHolder.parentNode
  ;

  placeHolder.parentNode.replaceChild(obj, placeHolder);

  // IE6 seems to have an issue where it won't initialize the swf object after injecting it.
  // This is a dumb temporary fix
  if (_V_.isIE()) {
    var newObj = par.childNodes[0];
    setTimeout(function(){
      newObj.style.display = "block";
    }, 1000);
  }

  return obj;

};

_V_.flash.getEmbedCode = function(swf, flashVars, params, attributes){

  var objTag = '<object type="application/x-shockwave-flash"',
      flashVarsString = '',
      paramsString = ''
      attrsString = '';

  // Convert flash vars to string
  if (flashVars) {
    _V_.eachProp(flashVars, function(key, val){
      flashVarsString += (key + "=" + val + "&amp;");
    });
  }

  // Add swf, flashVars, and other default params
  params = _V_.merge({
    movie: swf,
    flashvars: flashVarsString,
    allowScriptAccess: "always", // Required to talk to swf
    allowNetworking: "all" // All should be default, but having security issues.
  }, params);

  // Create param tags string
  _V_.eachProp(params, function(key, val){
    paramsString += '<param name="'+key+'" value="'+val+'" />';
  });

  attributes = _V_.merge({
    // Add swf to attributes (need both for IE and Others to work)
    data: swf,

    // Default to 100% width/height
    width: "100%",
    height: "100%"

  }, attributes);

  // Create Attributes string
  _V_.eachProp(attributes, function(key, val){
    attrsString += (key + '="' + val + '" ');
  });

  return objTag + attrsString + '>' + paramsString + '</object>';
}
// TEXT TRACKS
// Text tracks are tracks of timed text events.
//    Captions - text displayed over the video for the hearing impared
//    Subtitles - text displayed over the video for those who don't understand langauge in the video
//    Chapters - text displayed in a menu allowing the user to jump to particular points (chapters) in the video
//    Descriptions (not supported yet) - audio descriptions that are read back to the user by a screen reading device

// Player Track Functions - Functions add to the player object for easier access to tracks
_V_.merge(_V_.Player.prototype, {

  // Add an array of text tracks. captions, subtitles, chapters, descriptions
  // Track objects will be stored in the player.textTracks array
  addTextTracks: function(trackObjects){
    var tracks = this.textTracks = (this.textTracks) ? this.textTracks : [],
        i = 0, j = trackObjects.length, track, Kind;

    for (;i<j;i++) {
      // HTML5 Spec says default to subtitles.
      // Uppercase (uc) first letter to match class names
      Kind = _V_.uc(trackObjects[i].kind || "subtitles");

      // Create correct texttrack class. CaptionsTrack, etc.
      track = new _V_[Kind + "Track"](this, trackObjects[i]);

      tracks.push(track);

      // If track.default is set, start showing immediately
      // TODO: Add a process to deterime the best track to show for the specific kind
      // Incase there are mulitple defaulted tracks of the same kind
      // Or the user has a set preference of a specific language that should override the default
      if (track['default']) {
        this.ready(_V_.proxy(track, track.show));
      }
    }

    // Return the track so it can be appended to the display component
    return this;
  },

  // Show a text track
  // disableSameKind: disable all other tracks of the same kind. Value should be a track kind (captions, etc.)
  showTextTrack: function(id, disableSameKind){
    var tracks = this.textTracks,
        i = 0,
        j = tracks.length,
        track, showTrack, kind;

    // Find Track with same ID
    for (;i<j;i++) {
      track = tracks[i];
      if (track.id === id) {
        track.show();
        showTrack = track;

      // Disable tracks of the same kind
      } else if (disableSameKind && track.kind == disableSameKind && track.mode > 0) {
        track.disable();
      }
    }

    // Get track kind from shown track or disableSameKind
    kind = (showTrack) ? showTrack.kind : ((disableSameKind) ? disableSameKind : false);

    // Trigger trackchange event, captionstrackchange, subtitlestrackchange, etc.
    if (kind) {
      this.triggerEvent(kind+"trackchange");
    }

    return this;
  }

});

// Track Class
// Contains track methods for loading, showing, parsing cues of tracks
_V_.Track = _V_.Component.extend({

  init: function(player, options){
    this._super(player, options);

    // Apply track info to track object
    // Options will often be a track element
    _V_.merge(this, {
      // Build ID if one doesn't exist
      id: options.id || ("vjs_" + options.kind + "_" + options.language + "_" + _V_.guid++),

      src: options.src,

      // If default is used, subtitles/captions to start showing
      "default": options["default"], // 'default' is reserved-ish
      title: options.title,

      // Language - two letter string to represent track language, e.g. "en" for English
      // readonly attribute DOMString language;
      language: options.srclang,

      // Track label e.g. "English"
      // readonly attribute DOMString label;
      label: options.label,

      // All cues of the track. Cues have a startTime, endTime, text, and other properties.
      // readonly attribute TextTrackCueList cues;
      cues: [],

      // ActiveCues is all cues that are currently showing
      // readonly attribute TextTrackCueList activeCues;
      activeCues: [],

      // ReadyState describes if the text file has been loaded
      // const unsigned short NONE = 0;
      // const unsigned short LOADING = 1;
      // const unsigned short LOADED = 2;
      // const unsigned short ERROR = 3;
      // readonly attribute unsigned short readyState;
      readyState: 0,

      // Mode describes if the track is showing, hidden, or disabled
      // const unsigned short OFF = 0;
      // const unsigned short HIDDEN = 1; (still triggering cuechange events, but not visible)
      // const unsigned short SHOWING = 2;
      // attribute unsigned short mode;
      mode: 0
    });
  },

  // Create basic div to hold cue text
  createElement: function(){
    return this._super("div", {
      className: "vjs-" + this.kind + " vjs-text-track"
    });
  },

  // Show: Mode Showing (2)
  // Indicates that the text track is active. If no attempt has yet been made to obtain the track's cues, the user agent will perform such an attempt momentarily.
  // The user agent is maintaining a list of which cues are active, and events are being fired accordingly.
  // In addition, for text tracks whose kind is subtitles or captions, the cues are being displayed over the video as appropriate;
  // for text tracks whose kind is descriptions, the user agent is making the cues available to the user in a non-visual fashion;
  // and for text tracks whose kind is chapters, the user agent is making available to the user a mechanism by which the user can navigate to any point in the media resource by selecting a cue.
  // The showing by default state is used in conjunction with the default attribute on track elements to indicate that the text track was enabled due to that attribute.
  // This allows the user agent to override the state if a later track is discovered that is more appropriate per the user's preferences.
  show: function(){
    this.activate();

    this.mode = 2;

    // Show element.
    this._super();
  },

  // Hide: Mode Hidden (1)
  // Indicates that the text track is active, but that the user agent is not actively displaying the cues.
  // If no attempt has yet been made to obtain the track's cues, the user agent will perform such an attempt momentarily.
  // The user agent is maintaining a list of which cues are active, and events are being fired accordingly.
  hide: function(){
    // When hidden, cues are still triggered. Disable to stop triggering.
    this.activate();

    this.mode = 1;

    // Hide element.
    this._super();
  },

  // Disable: Mode Off/Disable (0)
  // Indicates that the text track is not active. Other than for the purposes of exposing the track in the DOM, the user agent is ignoring the text track.
  // No cues are active, no events are fired, and the user agent will not attempt to obtain the track's cues.
  disable: function(){
    // If showing, hide.
    if (this.mode == 2) { this.hide(); }

    // Stop triggering cues
    this.deactivate();

    // Switch Mode to Off
    this.mode = 0;
  },

  // Turn on cue tracking. Tracks that are showing OR hidden are active.
  activate: function(){
    // Load text file if it hasn't been yet.
    if (this.readyState == 0) { this.load(); }

    // Only activate if not already active.
    if (this.mode == 0) {
      // Update current cue on timeupdate
      // Using unique ID for proxy function so other tracks don't remove listener
      this.player.addEvent("timeupdate", this.proxy(this.update, this.id));

      // Reset cue time on media end
      this.player.addEvent("ended", this.proxy(this.reset, this.id));

      // Add to display
      if (this.kind == "captions" || this.kind == "subtitles") {
        this.player.textTrackDisplay.addComponent(this);
      }
    }
  },

  // Turn off cue tracking.
  deactivate: function(){
    // Using unique ID for proxy function so other tracks don't remove listener
    this.player.removeEvent("timeupdate", this.proxy(this.update, this.id));
    this.player.removeEvent("ended", this.proxy(this.reset, this.id));
    this.reset(); // Reset

    // Remove from display
    this.player.textTrackDisplay.removeComponent(this);
  },

  // A readiness state
  // One of the following:
  //
  // Not loaded
  // Indicates that the text track is known to exist (e.g. it has been declared with a track element), but its cues have not been obtained.
  //
  // Loading
  // Indicates that the text track is loading and there have been no fatal errors encountered so far. Further cues might still be added to the track.
  //
  // Loaded
  // Indicates that the text track has been loaded with no fatal errors. No new cues will be added to the track except if the text track corresponds to a MutableTextTrack object.
  //
  // Failed to load
  // Indicates that the text track was enabled, but when the user agent attempted to obtain it, this failed in some way (e.g. URL could not be resolved, network error, unknown text track format). Some or all of the cues are likely missing and will not be obtained.
  load: function(){

    // Only load if not loaded yet.
    if (this.readyState == 0) {
      this.readyState = 1;
      _V_.get(this.src, this.proxy(this.parseCues), this.proxy(this.onError));
    }

  },

  onError: function(err){
    this.error = err;
    this.readyState = 3;
    this.triggerEvent("error");
  },

  // Parse the WebVTT text format for cue times.
  // TODO: Separate parser into own class so alternative timed text formats can be used. (TTML, DFXP)
  parseCues: function(srcContent) {
    var cue, time, text,
        lines = srcContent.split("\n"),
        line = "", id;

    for (var i=1, j=lines.length; i<j; i++) {
      // Line 0 should be 'WEBVTT', so skipping i=0

      line = _V_.trim(lines[i]); // Trim whitespace and linebreaks

      if (line) { // Loop until a line with content

        // First line could be an optional cue ID
        // Check if line has the time separator
        if (line.indexOf("-->") == -1) {
          id = line;
          // Advance to next line for timing.
          line = _V_.trim(lines[++i]);
        } else {
          id = this.cues.length;
        }

        // First line - Number
        cue = {
          id: id, // Cue Number
          index: this.cues.length // Position in Array
        };

        // Timing line
        time = line.split(" --> ");
        cue.startTime = this.parseCueTime(time[0]);
        cue.endTime = this.parseCueTime(time[1]);

        // Additional lines - Cue Text
        text = [];

        // Loop until a blank line or end of lines
        // Assumeing trim("") returns false for blank lines
        while (lines[++i] && (line = _V_.trim(lines[i]))) {
          text.push(line);
        }

        cue.text = text.join('<br/>');

        // Add this cue
        this.cues.push(cue);
      }
    }

    this.readyState = 2;
    this.triggerEvent("loaded");
  },

  parseCueTime: function(timeText) {
    var parts = timeText.split(':'),
        time = 0,
        hours, minutes, other, seconds, ms, flags;

    // Check if optional hours place is included
    // 00:00:00.000 vs. 00:00.000
    if (parts.length == 3) {
      hours = parts[0];
      minutes = parts[1];
      other = parts[2];
    } else {
      hours = 0;
      minutes = parts[0];
      other = parts[1];
    }

    // Break other (seconds, milliseconds, and flags) by spaces
    // TODO: Make additional cue layout settings work with flags
    other = other.split(/\s+/)
    // Remove seconds. Seconds is the first part before any spaces.
    seconds = other.splice(0,1)[0];
    // Could use either . or , for decimal
    seconds = seconds.split(/\.|,/);
    // Get milliseconds
    ms = parseFloat(seconds[1]);
    seconds = seconds[0];

    // hours => seconds
    time += parseFloat(hours) * 3600;
    // minutes => seconds
    time += parseFloat(minutes) * 60;
    // Add seconds
    time += parseFloat(seconds);
    // Add milliseconds
    if (ms) { time += ms/1000; }

    return time;
  },

  // Update active cues whenever timeupdate events are triggered on the player.
  update: function(){
    if (this.cues.length > 0) {

      // Get curent player time
      var time = this.player.currentTime();

      // Check if the new time is outside the time box created by the the last update.
      if (this.prevChange === undefined || time < this.prevChange || this.nextChange <= time) {
        var cues = this.cues,

            // Create a new time box for this state.
            newNextChange = this.player.duration(), // Start at beginning of the timeline
            newPrevChange = 0, // Start at end

            reverse = false, // Set the direction of the loop through the cues. Optimized the cue check.
            newCues = [], // Store new active cues.

            // Store where in the loop the current active cues are, to provide a smart starting point for the next loop.
            firstActiveIndex, lastActiveIndex,

            html = "", // Create cue text HTML to add to the display
            cue, i, j; // Loop vars

        // Check if time is going forwards or backwards (scrubbing/rewinding)
        // If we know the direction we can optimize the starting position and direction of the loop through the cues array.
        if (time >= this.nextChange || this.nextChange === undefined) { // NextChange should happen
          // Forwards, so start at the index of the first active cue and loop forward
          i = (this.firstActiveIndex !== undefined) ? this.firstActiveIndex : 0;
        } else {
          // Backwards, so start at the index of the last active cue and loop backward
          reverse = true;
          i = (this.lastActiveIndex !== undefined) ? this.lastActiveIndex : cues.length - 1;
        }

        while (true) { // Loop until broken
          cue = cues[i];

          // Cue ended at this point
          if (cue.endTime <= time) {
            newPrevChange = Math.max(newPrevChange, cue.endTime);

            if (cue.active) {
              cue.active = false;
            }

            // No earlier cues should have an active start time.
            // Nevermind. Assume first cue could have a duration the same as the video.
            // In that case we need to loop all the way back to the beginning.
            // if (reverse && cue.startTime) { break; }

          // Cue hasn't started
          } else if (time < cue.startTime) {
            newNextChange = Math.min(newNextChange, cue.startTime);

            if (cue.active) {
              cue.active = false;
            }

            // No later cues should have an active start time.
            if (!reverse) { break; }

          // Cue is current
          } else {

            if (reverse) {
              // Add cue to front of array to keep in time order
              newCues.splice(0,0,cue);

              // If in reverse, the first current cue is our lastActiveCue
              if (lastActiveIndex === undefined) { lastActiveIndex = i; }
              firstActiveIndex = i;
            } else {
              // Add cue to end of array
              newCues.push(cue);

              // If forward, the first current cue is our firstActiveIndex
              if (firstActiveIndex === undefined) { firstActiveIndex = i; }
              lastActiveIndex = i;
            }

            newNextChange = Math.min(newNextChange, cue.endTime);
            newPrevChange = Math.max(newPrevChange, cue.startTime);

            cue.active = true;
          }

          if (reverse) {
            // Reverse down the array of cues, break if at first
            if (i === 0) { break; } else { i--; }
          } else {
            // Walk up the array fo cues, break if at last
            if (i === cues.length - 1) { break; } else { i++; }
          }

        }

        this.activeCues = newCues;
        this.nextChange = newNextChange;
        this.prevChange = newPrevChange;
        this.firstActiveIndex = firstActiveIndex;
        this.lastActiveIndex = lastActiveIndex;

        this.updateDisplay();

        this.triggerEvent("cuechange");
      }
    }
  },

  // Add cue HTML to display
  updateDisplay: function(){
    var cues = this.activeCues,
        html = "",
        i=0,j=cues.length;

    for (;i<j;i++) {
      html += "<span class='vjs-tt-cue'>"+cues[i].text+"</span>";
    }

    this.el.innerHTML = html;
  },

  // Set all loop helper values back
  reset: function(){
    this.nextChange = 0;
    this.prevChange = this.player.duration();
    this.firstActiveIndex = 0;
    this.lastActiveIndex = 0;
  }

});

// Create specific track types
_V_.CaptionsTrack = _V_.Track.extend({
  kind: "captions"
});

_V_.SubtitlesTrack = _V_.Track.extend({
  kind: "subtitles"
});

_V_.ChaptersTrack = _V_.Track.extend({
  kind: "chapters"
});


/* Text Track Display
================================================================================ */
// Global container for both subtitle and captions text. Simple div container.
_V_.TextTrackDisplay = _V_.Component.extend({

  createElement: function(){
    return this._super("div", {
      className: "vjs-text-track-display"
    });
  }

});

/* Text Track Menu Items
================================================================================ */
_V_.TextTrackMenuItem = _V_.MenuItem.extend({

  init: function(player, options){
    var track = this.track = options.track;

    // Modify options for parent MenuItem class's init.
    options.label = track.label;
    options.selected = track["default"];
    this._super(player, options);

    this.player.addEvent(track.kind + "trackchange", _V_.proxy(this, this.update));
  },

  onClick: function(){
    this._super();
    this.player.showTextTrack(this.track.id, this.track.kind);
  },

  update: function(){
    if (this.track.mode == 2) {
      this.selected(true);
    } else {
      this.selected(false);
    }
  }

});

_V_.OffTextTrackMenuItem = _V_.TextTrackMenuItem.extend({

  init: function(player, options){
    // Create pseudo track info
    // Requires options.kind
    options.track = { kind: options.kind, player: player, label: "Off" }
    this._super(player, options);
  },

  onClick: function(){
    this._super();
    this.player.showTextTrack(this.track.id, this.track.kind);
  },

  update: function(){
    var tracks = this.player.textTracks,
        i=0, j=tracks.length, track,
        off = true;

    for (;i<j;i++) {
      track = tracks[i];
      if (track.kind == this.track.kind && track.mode == 2) {
        off = false;
      }
    }

    if (off) {
      this.selected(true);
    } else {
      this.selected(false);
    }
  }

});

/* Captions Button
================================================================================ */
_V_.TextTrackButton = _V_.Button.extend({

  init: function(player, options){
    this._super(player, options);

    this.menu = this.createMenu();

    if (this.items.length === 0) {
      this.hide();
    }
  },

  createMenu: function(){
    var menu = new _V_.Menu(this.player);

    // Add a title list item to the top
    menu.el.appendChild(_V_.createElement("li", {
      className: "vjs-menu-title",
      innerHTML: _V_.uc(this.kind)
    }));

    // Add an OFF menu item to turn all tracks off
    menu.addItem(new _V_.OffTextTrackMenuItem(this.player, { kind: this.kind }))

    this.items = this.createItems();

    // Add menu items to the menu
    this.each(this.items, function(item){
      menu.addItem(item);
    });

    // Add list to element
    this.addComponent(menu);

    return menu;
  },

  // Create a menu item for each text track
  createItems: function(){
    var items = [];
    this.each(this.player.textTracks, function(track){
      if (track.kind === this.kind) {
        items.push(new _V_.TextTrackMenuItem(this.player, {
          track: track
        }));
      }
    });
    return items;
  },

  buildCSSClass: function(){
    return this.className + " vjs-menu-button " + this._super();
  },

  // Focus - Add keyboard functionality to element
  onFocus: function(){
    // Show the menu, and keep showing when the menu items are in focus
    this.menu.lockShowing();
    // this.menu.el.style.display = "block";

    // When tabbing through, the menu should hide when focus goes from the last menu item to the next tabbed element.
    _V_.one(this.menu.el.childNodes[this.menu.el.childNodes.length - 1], "blur", this.proxy(function(){
      this.menu.unlockShowing();
    }));
  },
  // Can't turn off list display that we turned on with focus, because list would go away.
  onBlur: function(){},

  onClick: function(){
    // When you click the button it adds focus, which will show the menu indefinitely.
    // So we'll remove focus when the mouse leaves the button.
    // Focus is needed for tab navigation.
    this.one("mouseout", this.proxy(function(){
      this.menu.unlockShowing();
      this.el.blur();
    }));
  }

});

_V_.CaptionsButton = _V_.TextTrackButton.extend({
  kind: "captions",
  buttonText: "Captions",
  className: "vjs-captions-button"
});

_V_.SubtitlesButton = _V_.TextTrackButton.extend({
  kind: "subtitles",
  buttonText: "Subtitles",
  className: "vjs-subtitles-button"
});

// Chapters act much differently than other text tracks
// Cues are navigation vs. other tracks of alternative languages
_V_.ChaptersButton = _V_.TextTrackButton.extend({
  kind: "chapters",
  buttonText: "Chapters",
  className: "vjs-chapters-button",

  // Create a menu item for each text track
  createItems: function(chaptersTrack){
    var items = [];

    this.each(this.player.textTracks, function(track){
      if (track.kind === this.kind) {
        items.push(new _V_.TextTrackMenuItem(this.player, {
          track: track
        }));
      }
    });

    return items;
  },

  createMenu: function(){
    var tracks = this.player.textTracks,
        i = 0,
        j = tracks.length,
        track, chaptersTrack,
        items = this.items = [];

    for (;i<j;i++) {
      track = tracks[i];
      if (track.kind == this.kind && track["default"]) {
        if (track.readyState < 2) {
          this.chaptersTrack = track;
          track.addEvent("loaded", this.proxy(this.createMenu));
          return;
        } else {
          chaptersTrack = track;
          break;
        }
      }
    }

    var menu = this.menu = new _V_.Menu(this.player);

    menu.el.appendChild(_V_.createElement("li", {
      className: "vjs-menu-title",
      innerHTML: _V_.uc(this.kind)
    }));

    if (chaptersTrack) {
      var cues = chaptersTrack.cues,
          i = 0, j = cues.length, cue, mi;

      for (;i<j;i++) {
        cue = cues[i];

        mi = new _V_.ChaptersTrackMenuItem(this.player, {
          track: chaptersTrack,
          cue: cue
        });

        items.push(mi);

        menu.addComponent(mi);
      }
    }

    // Add list to element
    this.addComponent(menu);

    if (this.items.length > 0) {
      this.show();
    }

    return menu;
  }

});

_V_.ChaptersTrackMenuItem = _V_.MenuItem.extend({

  init: function(player, options){
    var track = this.track = options.track,
        cue = this.cue = options.cue,
        currentTime = player.currentTime();

    // Modify options for parent MenuItem class's init.
    options.label = cue.text;
    options.selected = (cue.startTime <= currentTime && currentTime < cue.endTime);
    this._super(player, options);

    track.addEvent("cuechange", _V_.proxy(this, this.update));
  },

  onClick: function(){
    this._super();
    this.player.currentTime(this.cue.startTime);
    this.update(this.cue.startTime);
  },

  update: function(time){
    var cue = this.cue,
        currentTime = this.player.currentTime();

    // _V_.log(currentTime, cue.startTime);
    if (cue.startTime <= currentTime && currentTime < cue.endTime) {
      this.selected(true);
    } else {
      this.selected(false);
    }
  }

});

// Add Buttons to controlBar
_V_.merge(_V_.ControlBar.prototype.options.components, {
  "subtitlesButton": {},
  "captionsButton": {},
  "chaptersButton": {}
});

// _V_.Cue = _V_.Component.extend({
//   init: function(player, options){
//     this._super(player, options);
//   }
// });// Automatically set up any tags that have a data-setup attribute
_V_.autoSetup = function(){
  var options, vid, player,
      vids = document.getElementsByTagName("video");

  // Check if any media elements exist
  if (vids && vids.length > 0) {

    for (var i=0,j=vids.length; i<j; i++) {
      vid = vids[i];

      // Check if element exists, has getAttribute func.
      // IE seems to consider typeof el.getAttribute == "object" instead of "function" like expected, at least when loading the player immediately.
      if (vid && vid.getAttribute) {

        // Make sure this player hasn't already been set up.
        if (vid.player === undefined) {
          options = vid.getAttribute("data-setup");

          // Check if data-setup attr exists. 
          // We only auto-setup if they've added the data-setup attr.
          if (options !== null) {

            // Parse options JSON
            // If empty string, make it a parsable json object.
            options = JSON.parse(options || "{}");

            // Create new video.js instance.
            player = _V_(vid, options);
          }
        }

      // If getAttribute isn't defined, we need to wait for the DOM.
      } else {
        _V_.autoSetupTimeout(1);
        break;
      }
    }

  // No videos were found, so keep looping unless page is finisehd loading.
  } else if (!_V_.windowLoaded) {
    _V_.autoSetupTimeout(1);
  }
};

// Pause to let the DOM keep processing
_V_.autoSetupTimeout = function(wait){
  setTimeout(_V_.autoSetup, wait);
};

_V_.addEvent(window, "load", function(){
  _V_.windowLoaded = true;
});

// Run Auto-load players
_V_.autoSetup();
// Expose to global
window.VideoJS = window._V_ = VideoJS;

// End self-executing function
})(window);

/*
hinclude.js -- HTML Includes (version 0.9.5)

Copyright (c) 2005-2012 Mark Nottingham <mnot@mnot.net>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

------------------------------------------------------------------------------

See http://mnot.github.com/hinclude/ for documentation.
*/

/*jslint indent: 2, browser: true, vars: true, nomen: true */
/*global alert, ActiveXObject */

var hinclude;

(function () {

  "use strict";

  hinclude = {
    classprefix: "include_",

    set_content_async: function (element, req) {
      if (req.readyState === 4) {
        if (req.status === 200 || req.status === 304) {
          element.innerHTML = req.responseText;
        }
        element.className = hinclude.classprefix + req.status;
      }
    },

    buffer: [],
    set_content_buffered: function (element, req) {
      if (req.readyState === 4) {
        hinclude.buffer.push([element, req]);
        hinclude.outstanding -= 1;
        if (hinclude.outstanding === 0) {
          hinclude.show_buffered_content();
        }
      }
    },

    show_buffered_content: function () {
      while (hinclude.buffer.length > 0) {
        var include = hinclude.buffer.pop();
        if (include[1].status === 200 || include[1].status === 304) {
          include[0].innerHTML = include[1].responseText;
        }
        include[0].className = hinclude.classprefix + include[1].status;
      }
    },

    outstanding: 0,
    includes: [],
    run: function () {
      var i = 0;
      var mode = this.get_meta("include_mode", "buffered");
      var callback = function (element, req) {};
      this.includes = document.getElementsByTagName("hx:include");
      if (this.includes.length === 0) { // remove ns for IE
        this.includes = document.getElementsByTagName("include");
      }
      if (mode === "async") {
        callback = this.set_content_async;
      } else if (mode === "buffered") {
        callback = this.set_content_buffered;
        var timeout = this.get_meta("include_timeout", 2.5) * 1000;
        setTimeout(hinclude.show_buffered_content, timeout);
      }
      for (i; i < this.includes.length; i += 1) {
        this.include(this.includes[i], this.includes[i].getAttribute("src"), callback);
      }
    },

    include: function (element, url, incl_cb) {
      var scheme = url.substring(0, url.indexOf(":"));
      if (scheme.toLowerCase() === "data") { // just text/plain for now
        var data = decodeURIComponent(url.substring(url.indexOf(",") + 1, url.length));
        element.innerHTML = data;
      } else {
        var req = false;
        if (window.XMLHttpRequest) {
          try {
            req = new XMLHttpRequest();
          } catch (e1) {
            req = false;
          }
        } else if (window.ActiveXObject) {
          try {
            req = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (e2) {
            req = false;
          }
        }
        if (req) {
          this.outstanding += 1;
          req.onreadystatechange = function () {
            incl_cb(element, req);
          };
          try {
            req.open("GET", url, true);
            req.send("");
          } catch (e3) {
            this.outstanding -= 1;
            alert("Include error: " + url + " (" + e3 + ")");
          }
        }
      }
    },

    refresh: function (element_id) {
      var i = 0;
      var mode = this.get_meta("include_mode", "buffered");
      var callback = function (element, req) {};
      callback = this.set_content_buffered;
      for (i; i < this.includes.length; i += 1) {
        if (this.includes[i].getAttribute("id") === element_id) {
          this.include(this.includes[i], this.includes[i].getAttribute("src"), callback);
        }
      }
    },

    get_meta: function (name, value_default) {
      var m = 0;
      var metas = document.getElementsByTagName("meta");
      for (m; m < metas.length; m += 1) {
        var meta_name = metas[m].getAttribute("name");
        if (meta_name === name) {
          return metas[m].getAttribute("content");
        }
      }
      return value_default;
    },

    /*
     * (c)2006 Dean Edwards/Matthias Miller/John Resig
     * Special thanks to Dan Webb's domready.js Prototype extension
     * and Simon Willison's addLoadEvent
     *
     * For more info, see:
     * http://dean.edwards.name/weblog/2006/06/again/
     *
     * Thrown together by Jesse Skinner (http://www.thefutureoftheweb.com/)
     */
    addDOMLoadEvent: function (func) {
      if (!window.__load_events) {
        var init = function () {
          var i = 0;
          // quit if this function has already been called
          if (hinclude.addDOMLoadEvent.done) {return; }
          hinclude.addDOMLoadEvent.done = true;
          if (window.__load_timer) {
            clearInterval(window.__load_timer);
            window.__load_timer = null;
          }
          for (i; i < window.__load_events.length; i += 1) {
            window.__load_events[i]();
          }
          window.__load_events = null;
          // clean up the __ie_onload event
          /*@cc_on
          document.getElementById("__ie_onload").onreadystatechange = "";
          @*/
        };
        // for Mozilla/Opera9
        if (document.addEventListener) {
          document.addEventListener("DOMContentLoaded", init, false);
        }
        // for Internet Explorer
        /*@cc_on
        document.write(
          "<scr"
            + "ipt id=__ie_onload defer src=javascript:void(0)><\/scr"
            + "ipt>"
        );
        var script = document.getElementById("__ie_onload");
        script.onreadystatechange = function () {
          if (this.readyState === "complete") {
            init(); // call the onload handler
          }
        };
        @*/
        // for Safari
        if (/WebKit/i.test(navigator.userAgent)) { // sniff
          window.__load_timer = setInterval(function () {
            if (/loaded|complete/.test(document.readyState)) {
              init();
            }
          }, 10);
        }
        // for other browsers
        window.onload = init;
        window.__load_events = [];
      }
      window.__load_events.push(func);
    }
  };

  hinclude.addDOMLoadEvent(function () {hinclude.run(); });
}());
/*
 * Copyright (C) eZ Systems AS. All rights reserved.
 * For full copyright and license information view LICENSE file distributed with this source code.
 */

(function (global, doc) {
    var eZ = global.eZ = global.eZ || {};

    /**
     * Contains logic needed to display privacy banner.
     *
     * @class
     * @param {Object} config
     */
    eZ.PrivacyCookieBanner = function (config) {
        this.cookieName = config.cookieName || 'EzPrivacyCookieStatus';
        this.bannerElement = document.getElementById(config.bannerId || 'privacy-cookie-banner');
        this.acceptElement = document.getElementById(config.acceptId || 'privacy-cookie-banner__privacy-accept');
        this.closeElement = document.getElementById(config.closeId || 'privacy-cookie-banner__privacy-close');
        this.days = config.days || 365;
    };

    /**
     * Hide privacy banner.
     */
    eZ.PrivacyCookieBanner.prototype.hideBanner = function () {
        this.bannerElement.className = this.bannerElement.className.replace(/\b privacy-cookie-banner--slide-up\b/, '');
        this.bannerElement.className = this.bannerElement.className + ' privacy-cookie-banner--slide-down';
    };

    /**
     * Show privacy banner.
     */
    eZ.PrivacyCookieBanner.prototype.showBanner = function () {
        this.bannerElement.className = this.bannerElement.className.replace(/\b privacy-cookie-banner--slide-down\b/, '');
        this.bannerElement.className = this.bannerElement.className + ' privacy-cookie-banner--slide-up';
    };

    /**
     * Get cookie value by name.
     *
     * @param {string} name
     * @returns {string}
     */
    eZ.PrivacyCookieBanner.prototype.getCookie = function (name) {
        var cookieName = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ')
                c = c.substring(1);
            if (c.indexOf(cookieName) === 0)
                return c.substring(cookieName.length, c.length);
        }
        return '';
    };

    /**
     * Set cookie value.
     *
     * @param {string} name
     * @param {string} value
     * @param {int} days
     */
    eZ.PrivacyCookieBanner.prototype.setCookie = function (name, value, days) {
        var d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = 'expires=' + d.toUTCString();
        document.cookie = name + '=' + value + '; ' + expires;
    };

    /**
     * Accept privacy policy (set cookie status) and hide banner.
     */
    eZ.PrivacyCookieBanner.prototype.accept = function () {
        this.setCookie(this.cookieName, '1', this.days);
        this.hideBanner();
    };

    /**
     * Display privacy banner depending on cookie status.
     */
    eZ.PrivacyCookieBanner.prototype.show = function () {
        if (this.getCookie(this.cookieName) !== '1') {
            this.acceptElement.addEventListener('click', function () {
                this.accept();
            }.bind(this), false);
            this.closeElement.addEventListener('click', function () {
                this.hideBanner();
            }.bind(this), false);
            this.showBanner();
        }
    };

})(window, document);
