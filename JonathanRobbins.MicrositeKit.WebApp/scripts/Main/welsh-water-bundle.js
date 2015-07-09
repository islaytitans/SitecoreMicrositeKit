///#source 1 1 /scripts/Library/vendor/jquery/jquery-1.11.2.min.js
/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.2",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

///#source 1 1 /scripts/Library/vendor/jquery/jquery-migrate-1.2.1.min.js
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
///#source 1 1 /WelshWater/Scripts/jquery.cookies.js
/*!
* jQuery Cookie Plugin v1.3
* https://github.com/carhartl/jquery-cookie
*
* Copyright 2011, Klaus Hartl
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://www.opensource.org/licenses/mit-license.php
* http://www.opensource.org/licenses/GPL-2.0
*/
(function ($, document, undefined) {

    var pluses = /\+/g;

    function raw(s) {
        return s;
    }

    function decoded(s) {
        return decodeURIComponent(s.replace(pluses, ' '));
    }

    var config = $.cookie = function (key, value, options) {

        // write
        if (value !== undefined) {
            options = $.extend({}, config.defaults, options);

            if (value === null) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = config.json ? JSON.stringify(value) : String(value);

            return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path ? '; path=' + options.path : '',
				options.domain ? '; domain=' + options.domain : '',
				options.secure ? '; secure' : ''
			].join(''));
        }

        // read
        var decode = config.raw ? raw : decoded;
        var cookies = document.cookie.split('; ');
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            if (decode(parts.shift()) === key) {
                var cookie = decode(parts.join('='));
                return config.json ? JSON.parse(cookie) : cookie;
            }
        }

        return null;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) !== null) {
            $.cookie(key, null, options);
            return true;
        }
        return false;
    };

})(jQuery, document);

///#source 1 1 /WelshWater/Scripts/Utilities/Accessibility.js
function isTouchDevice()
{
    return !!('ontouchstart' in window);
};
///#source 1 1 /WelshWater/Scripts/SiteComponents/MegaNav.js
function CloseMegaNav() {
    if (isTouchDevice()) {
        setTimeout(function () {
            $('li.main-link.displayMenu').removeClass('displayMenu');
        }, 1);
    }
    else {
        $('.sub-menu').each(function () {
            $(this).addClass('hide-mega-nav');
        });
    }
}

function ShowMegaNavOnContainerTouch() {
    $('li.main-link').each(function () {
        $(this).click(function () {
            $('li.main-link').each(function () {
                $(this).removeClass('displayMenu');
            });
            $(this).addClass('displayMenu');
        });
    });
}

function ShowMegaNavOnLinkTouch() {
    $('a.top-level-link').each(function () {
        var location = $(this).attr('href');

        $(this).click(function (e) {
            //prevent link from firing on first click
            if (!$(this).parents('li').hasClass('displayMenu')) {
                e.preventDefault();
            }

            $('li.main-link').each(function () {
                $(this).removeClass('displayMenu');
            });

            $(this).parents('li').addClass('displayMenu');
        });
    });
}

function EnableNavForTouchDevices() {
    $('li.main-link').each(function () {
        $(this).removeClass('pointerDevice');
    });
}

function AddMouseoverHandler() {
    //Allows Nav to show after close button has been clicked
    $('li.main-link').each(function () {
        // commented code as this function is causing js errors 
        // and doesn't seem to form any kind of function with the latest code
        //$(this).mouseenter(function () {
        //    var subMenu = $(this).next('.sub-menu');
        //    subMenu.removeClass('hide-mega-nav');
        //});
    });
}

function MakeNavTabAccessible() {
    var me = $(".main-link-list");

    $("a", me).focus(function () {
        //allows tabbing to show menu if user has clicked close button
        var subMenu = $(this).parents("li").find('.sub-menu');
        subMenu.removeClass('hide-mega-nav');

        $(this).parents("li").addClass("focus");

    }).blur(function () {
        $(this).parents("li").removeClass("focus");
    });
}

$(document).ready(function () {
    if (isTouchDevice()) {
        EnableNavForTouchDevices();

        ShowMegaNavOnContainerTouch();

        ShowMegaNavOnLinkTouch();
    }
    else {
        AddMouseoverHandler();

        MakeNavTabAccessible();
    }
});
///#source 1 1 /WelshWater/Scripts/SiteComponents/CallsToAction.js
$(document).ready(function ()
{
	if (isTouchDevice())
	{
		DisableHoverStatesForTouchDevices();
		$('.stage').addClass('touch');
	}
});

function DisableHoverStatesForTouchDevices()
{
	$(".call-to-action").each(function ()
	{
		var callToAction = $(this);

		callToAction.removeClass("pointerDevice");
	});
}

///#source 1 1 /WelshWater/Scripts/jquery.watermark.min.js
/*
	Watermark v3.1.3 (March 22, 2011) plugin for jQuery
	http://jquery-watermark.googlecode.com/
	Copyright (c) 2009-2011 Todd Northrop
	http://www.speednet.biz/
	Dual licensed under the MIT or GPL Version 2 licenses.
*/
(function(a,h,y){var w="function",v="password",j="maxLength",n="type",b="",c=true,u="placeholder",i=false,t="watermark",g=t,f="watermarkClass",q="watermarkFocus",l="watermarkSubmit",o="watermarkMaxLength",e="watermarkPassword",d="watermarkText",k=/\r/g,s="input:data("+g+"),textarea:data("+g+")",m="input:text,input:password,input[type=search],input:not([type]),textarea",p=["Page_ClientValidate"],r=i,x=u in document.createElement("input");a.watermark=a.watermark||{version:"3.1.3",runOnce:c,options:{className:t,useNative:c,hideBeforeUnload:c},hide:function(b){a(b).filter(s).each(function(){a.watermark._hide(a(this))})},_hide:function(a,r){var p=a[0],q=(p.value||b).replace(k,b),l=a.data(d)||b,m=a.data(o)||0,i=a.data(f);if(l.length&&q==l){p.value=b;if(a.data(e))if((a.attr(n)||b)==="text"){var g=a.data(e)||[],c=a.parent()||[];if(g.length&&c.length){c[0].removeChild(a[0]);c[0].appendChild(g[0]);a=g}}if(m){a.attr(j,m);a.removeData(o)}if(r){a.attr("autocomplete","off");h.setTimeout(function(){a.select()},1)}}i&&a.removeClass(i)},show:function(b){a(b).filter(s).each(function(){a.watermark._show(a(this))})},_show:function(g){var p=g[0],u=(p.value||b).replace(k,b),h=g.data(d)||b,s=g.attr(n)||b,t=g.data(f);if((u.length==0||u==h)&&!g.data(q)){r=c;if(g.data(e))if(s===v){var m=g.data(e)||[],l=g.parent()||[];if(m.length&&l.length){l[0].removeChild(g[0]);l[0].appendChild(m[0]);g=m;g.attr(j,h.length);p=g[0]}}if(s==="text"||s==="search"){var i=g.attr(j)||0;if(i>0&&h.length>i){g.data(o,i);g.attr(j,h.length)}}t&&g.addClass(t);p.value=h}else a.watermark._hide(g)},hideAll:function(){if(r){a.watermark.hide(m);r=i}},showAll:function(){a.watermark.show(m)}};a.fn.watermark=a.fn.watermark||function(p,o){var t="string";if(!this.length)return this;var s=i,r=typeof p===t;if(r)p=p.replace(k,b);if(typeof o==="object"){s=typeof o.className===t;o=a.extend({},a.watermark.options,o)}else if(typeof o===t){s=c;o=a.extend({},a.watermark.options,{className:o})}else o=a.watermark.options;if(typeof o.useNative!==w)o.useNative=o.useNative?function(){return c}:function(){return i};return this.each(function(){var B="dragleave",A="dragenter",z=this,i=a(z);if(!i.is(m))return;if(i.data(g)){if(r||s){a.watermark._hide(i);r&&i.data(d,p);s&&i.data(f,o.className)}}else{if(x&&o.useNative.call(z,i)&&(i.attr("tagName")||b)!=="TEXTAREA"){r&&i.attr(u,p);return}i.data(d,r?p:b);i.data(f,o.className);i.data(g,1);if((i.attr(n)||b)===v){var C=i.wrap("<span>").parent(),t=a(C.html().replace(/type=["']?password["']?/i,'type="text"'));t.data(d,i.data(d));t.data(f,i.data(f));t.data(g,1);t.attr(j,p.length);t.focus(function(){a.watermark._hide(t,c)}).bind(A,function(){a.watermark._hide(t)}).bind("dragend",function(){h.setTimeout(function(){t.blur()},1)});i.blur(function(){a.watermark._show(i)}).bind(B,function(){a.watermark._show(i)});t.data(e,i);i.data(e,t)}else i.focus(function(){i.data(q,1);a.watermark._hide(i,c)}).blur(function(){i.data(q,0);a.watermark._show(i)}).bind(A,function(){a.watermark._hide(i)}).bind(B,function(){a.watermark._show(i)}).bind("dragend",function(){h.setTimeout(function(){a.watermark._show(i)},1)}).bind("drop",function(e){var c=i[0],a=e.originalEvent.dataTransfer.getData("Text");if((c.value||b).replace(k,b).replace(a,b)===i.data(d))c.value=a;i.focus()});if(z.form){var w=z.form,y=a(w);if(!y.data(l)){y.submit(a.watermark.hideAll);if(w.submit){y.data(l,w.submit);w.submit=function(c,b){return function(){var d=b.data(l);a.watermark.hideAll();if(d.apply)d.apply(c,Array.prototype.slice.call(arguments));else d()}}(w,y)}else{y.data(l,1);w.submit=function(b){return function(){a.watermark.hideAll();delete b.submit;b.submit()}}(w)}}}}a.watermark._show(i)})};if(a.watermark.runOnce){a.watermark.runOnce=i;a.extend(a.expr[":"],{data:function(c,d,b){return!!a.data(c,b[3])}});(function(c){a.fn.val=function(){var e=this;if(!e.length)return arguments.length?e:y;if(!arguments.length)if(e.data(g)){var f=(e[0].value||b).replace(k,b);return f===(e.data(d)||b)?b:f}else return c.apply(e,arguments);else{c.apply(e,arguments);a.watermark.show(e);return e}}})(a.fn.val);p.length&&a(function(){for(var b,c,d=p.length-1;d>=0;d--){b=p[d];c=h[b];if(typeof c===w)h[b]=function(b){return function(){a.watermark.hideAll();return b.apply(null,Array.prototype.slice.call(arguments))}}(c)}});a(h).bind("beforeunload",function(){a.watermark.options.hideBeforeUnload&&a.watermark.hideAll()})}})(jQuery,window);
///#source 1 1 /scripts/Library/Fusion/jquery-fusion-show-hide.js
// ===========================================
// Fusionworkshop - show hide plugin
// created date: 26/11/2014
// last update date: 26/11/2014
// author: Matthew Neil
// ===========================================
(function ($, window, document, undefined) {
    $.fn.showHide = function (options) {
        var settings = $.extend({
            panel: 'ul',
            closedClass: 'closed',
            clickOption: 'a',
            animateTimer: 500,
        }, options);
    		return $(settings.clickOption, this).on('click', function () {            
            $(this, settings.clickOption).parent().find(settings.panel).slideToggle(settings.animateTimer);
            $(this, settings.clickOption).toggleClass(settings.closedClass);
        });
    };
})(jQuery, window, document);
///#source 1 1 /scripts/Library/Fusion/jquery-fusion-open-close.js
// ===========================================
// Fusionworkshop - open close plugin
// created date: 26/11/2014
// last update date: 26/11/2014
// author: Matthew Neil
// ===========================================
(function ($, window, document, undefined) {
    $.fn.openClose = function (options) {
        var settings = $.extend({
            panel: 'div',
            openClass: 'open',            
        }, options);
        return $(this).on('click', function () {
            $(this).toggleClass(settings.openClass);
            $(settings.panel).toggleClass(settings.openClass);
        });
    };
})(jQuery, window, document);
///#source 1 1 /scripts/Library/Fusion/jquery-fusion-tabs.js
(function ($, window, document, undefined) {

    $.fn.tabs = function (options) {

        var defaults = {
            updateFormAction: true,
            openFirst: true,
            title: 'h3',
            panel: 'div',
            activeClass: 'selected',
            hashPrefix: 'tpf',
            queryStrName: 'tab',
            shownClass: 'js-open',
            hiddenClass: 'js-closed',
            idPrefix: 'cid',
            containerClass: '',
            links: []
        };

        var options = $.extend(defaults, options);

        this.each(function () {

            var $tabs = $(this);
            $tabs.addClass(options.containerClass);

            $(options.title, this).each(function (index) {

                var $panel = "";

                if ($(this).hasClass('title')) {
                    $panel = $(this).next(options.panel);
                } else {
                    var $parent = $(this).parent();
                    if ($parent.hasClass('scfForm')) {
                        $panel = $parent;
                        $panel.addClass("panel");
                    }
                }

                var elementId = $panel.attr('id');
                // if not then create a dynamic ID
                if (!elementId) {
                    elementId = options.idPrefix + index;
                    $panel.attr('id', elementId);
                }
                var imgSrc = $('.cat-icon', this).attr('src');

                //create array based on ID and text
                var linkDetails = [elementId, $(this).text(), imgSrc];
                options.links.push(linkDetails);
                //$(this).remove();

                $panel.addClass(options.hiddenClass);

            });

            if ($(options.title, this).length == 0) {
                return;
            }

            $($tabs).prepend(createAnchorList(options.links));

            $(">ul>li>a", $tabs).click(function (e) {
                changeHashFromLink($(this), $tabs);
                e.preventDefault();
            });


            $(window).on('hashchange', function () {
                loadTab($tabs);
            });

            if (options.openFirst) {
                openInitialTab($tabs);
            }


        });

        function changeHashFromLink($tablink) {
            var linkHash = $tablink.attr("href");

            /* Need to add unique modifier to the hash so that it doesn't correspond to any ID on the page and therefore prevents default hash behavior where the page scrolls to that ID  */
            var targetHash = linkHash.replace("#", "#" + options.hashPrefix);

            window.location.hash = targetHash;
        }
        function loadTab($tabs) {

            var hash = window.location.hash;
            /* Need to remove unique modifier to the hash  */
            hash = hash.replace(options.hashPrefix, "");
            //ensure all tabs are not selected
            $(">ul>li", $tabs).removeClass("selected");

            var $tablink = $('a[href^="' + hash + '"]', $tabs);
            $tablink.parent().addClass(options.activeClass);

            //hide any current shown panel
            $("." + options.shownClass, $tabs).addClass(options.hiddenClass).removeClass(options.shownClass);

            var $tab = $(hash);

            $tab.removeClass(options.hiddenClass).addClass(options.shownClass);

            if (options.updateFormAction) {
                var formAction = $('form').attr("action");
                var hashIndex = formAction.indexOf("#" + options.hashPrefix);
                if (hashIndex > 0) {
                    formAction = formAction.substr(0, hashIndex);
                }
                formAction += window.location.hash;
                $('form').attr("action", formAction);
            }
        }

        function openInitialTab($tabsContainer) {

            /* Using the Hash so that tabs are Bookmarkable */
            var initialHash = window.location.hash;
            var $activeTab = "";

            if (initialHash.indexOf(options.hashPrefix) > 0) {

                loadTab($tabsContainer);
                ///* Strip out the unique modifier */
                //initialHash = initialHash.replace(options.hashPrefix, "");
                //$activeTab = $('a[href^="' + initialHash + '"]', $tabsContainer);



            } else {

                /* if tab index is being passed through  as traditional query string e.g. ?tab=1 */
                var tabIndexQueryString = parseInt(getParameterByName(options.queryStrName));
                if (tabIndexQueryString > 0) {
                    $activeTab = $('ul>li a', $tabsContainer).eq(tabIndexQueryString - 1);
                }

                /* else if tab index is being passed through as workaround query string ?tab1 (Sitecore issue where querystring = is encoded)  */
                tabIndexQueryString = getUrlVars();

                var indexOfTabQs = tabIndexQueryString.indexOf(options.queryStrName);

                if (indexOfTabQs >= 0) {

                    var indexOfTabInt = indexOfTabQs + options.queryStrName.length;

                    tabIndexQueryString = tabIndexQueryString.substr(indexOfTabInt, indexOfTabInt + 1);
                    var tabIndex = parseInt(tabIndexQueryString);
                    if (tabIndex > 0) {
                        var formAction = $('form').attr("action");
                        formAction = formAction.replace(options.queryStrName + tabIndex, "");
                        $('form').attr("action", formAction);
                        $activeTab = $('ul>li a', $tabsContainer).eq(tabIndex - 1);
                        if (typeof window.history.replaceState != "undefined") {
                            window.history.replaceState({}, '', formAction);
                        }

                    }

                }
                if (!$activeTab.length > 0) {

                    /* if no tab then default to the first */
                    $activeTab = $('ul>li:first a', $tabsContainer);
                }

                $activeTab.trigger('click');
            }

        }
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        function getUrlVars() {

            var urlVars = window.location.href.slice(window.location.href.indexOf('?') + 1);

            return urlVars;
        }
        function createAnchorList(links) {

            // Create the list element:            
            var list = document.createElement('ul');
            for (var i = 0; i < links.length; i++) {

                var linkItem = links[i];

                // Create the list item:
                var liItem = document.createElement('li');
                var aItem = document.createElement('a');
                if (linkItem[2] != undefined) {
                    var imgItem = document.createElement('img');
                    imgItem.src = linkItem[2];
                    aItem.appendChild(imgItem);

                }
                // Set its contents:
                aItem.appendChild(document.createTextNode(linkItem[1]));
                aItem.href = "#" + linkItem[0];
                liItem.appendChild(aItem);

                // Add it to the list:
                list.appendChild(liItem);
            }

            // Finally, return the constructed list:
            return list;
        }

    }

})(jQuery, window, document);
///#source 1 1 /scripts/Library/Fusion/jquery-fusion-accordion.js
; (function ($, window, document, undefined) {

    $.fn.accordion = function (options) {

        var defaults = {
            updateFormAction: true,
            openFirst: true,
            title: 'h3',
            panel: 'div',
            activeClass: 'selected',
            hashPrefix: 'accordion',
            shownClass: 'shown',
            hiddenClass: 'js-closed',
            idPrefix: 'CID',
            links: []

        };

        var options = $.extend(defaults, options);

        this.each(function () {

            var $container = $(this);

            $(options.title).each(function (index) {

                var $panel = $(this).next(options.panel);
                var elementId = $panel.attr('id');
                // if not then create a dynamic ID
                if (!elementId) {
                    elementId = options.idPrefix + index;
                    $panel.attr('id', elementId);
                }
                
                $(this).wrapInner("<a href='#" + elementId + "'></div>");
                $panel.addClass(options.hiddenClass);
            });

           // $($tabs).prepend(createAnchorList(options.links));

            $("h3 > a", this).click(function () {

                $(" h3 ", $container).removeClass("selected");

                $("." + options.shownClass, $container).addClass(options.hiddenClass).removeClass(options.shownClass);

                $(this).parent().addClass(options.activeClass);

                var $tab = $(this).attr("href");
                ///* Need to add unique modifier to the hash so that it doesn't correspond to any ID on the page and therefore prevents default hash behavior where the page scrolls to that ID  */
                window.location.hash = $tab + "tab";

                if (options.updateFormAction) {
                    $('form').attr("action", $('form').attr("action") + $tab + options.hashPrefix);
                }

                $($tab, $container).removeClass(options.hiddenClass).addClass(options.shownClass);

                return false;
            });

            
            if (options.openFirst) {

                /* Using the Hash so that tabs are Bookmarkable */
                var initialHash = window.location.hash;
                
                var $activeTab;
                if (initialHash) {
                    /* Strip out the unique modifier */
                    initialHash = initialHash.replace(options.hashPrefix, "");
                    $activeTab = $('a[href^="' + initialHash + '"]', $container);
                } else {
                    /* if no tab then default to the first */
                    $activeTab = $('h3:first a', $container);
                }
                $activeTab.trigger("click");

            }
            


        });

        function createAnchorList(links) {

            // Create the list element:
            var list = document.createElement('ul');

            for (var i = 0; i < links.length; i++) {

                var linkItem = links[i];

                // Create the list item:
                var liItem = document.createElement('li');
                var aItem = document.createElement('a');

                // Set its contents:
                aItem.appendChild(document.createTextNode(linkItem[1]));
                aItem.href = "#" + linkItem[0];
                liItem.appendChild(aItem);

                // Add it to the list:
                list.appendChild(liItem);
            }

            // Finally, return the constructed list:
            return list;
        };

    }

})(jQuery, window, document);
///#source 1 1 /scripts/Library/Plugins/owl-carousel.js
/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
; (function ($, window, document, undefined) {

	var drag, state, e;

	/**
	 * Template for status information about drag and touch events.
	 * @private
	 */
	drag = {
		start: 0,
		startX: 0,
		startY: 0,
		current: 0,
		currentX: 0,
		currentY: 0,
		offsetX: 0,
		offsetY: 0,
		distance: null,
		startTime: 0,
		endTime: 0,
		updatedX: 0,
		targetEl: null
	};

	/**
	 * Template for some status informations.
	 * @private
	 */
	state = {
		isTouch: false,
		isScrolling: false,
		isSwiping: false,
		direction: false,
		inMotion: false
	};

	/**
	 * Event functions references.
	 * @private
	 */
	e = {
		_onDragStart: null,
		_onDragMove: null,
		_onDragEnd: null,
		_transitionEnd: null,
		_resizer: null,
		_responsiveCall: null,
		_goToLoop: null,
		_checkVisibile: null
	};

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Caches informations about drag and touch events.
		 */
		this.drag = $.extend({}, drag);

		/**
		 * Caches some status informations.
		 * @protected
		 */
		this.state = $.extend({}, state);

		/**
		 * @protected
		 * @todo Must be documented
		 */
		this.e = $.extend({}, e);

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		$.each(Owl.Plugins, $.proxy(function (key, plugin) {
			this._plugins[key[0].toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Pipe, $.proxy(function (priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		responsiveClass: false,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		// Classes and Names
		themeClass: 'owl-theme',
		baseClass: 'owl-carousel',
		itemClass: 'owl-item',
		centerClass: 'center',
		activeClass: 'active'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * Update pipe.
	 */
	Owl.Pipe = [{
		filter: ['width', 'items', 'settings'],
		run: function (cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: ['items', 'settings'],
		run: function () {
			var cached = this._clones,
				clones = this.$stage.children('.cloned');

			if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
				this.$stage.children('.cloned').remove();
				this._clones = [];
			}
		}
	}, {
		filter: ['items', 'settings'],
		run: function () {
			var i, n,
				clones = this._clones,
				items = this._items,
				delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;

			for (i = 0, n = Math.abs(delta / 2) ; i < n; i++) {
				if (delta > 0) {
					this.$stage.children().eq(items.length + clones.length - 1).remove();
					clones.pop();
					this.$stage.children().eq(0).remove();
					clones.pop();
				} else {
					clones.push(clones.length / 2);
					this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
					clones.push(items.length - 1 - (clones.length - 1) / 2);
					this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
				}
			}
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function () {
			var rtl = (this.settings.rtl ? 1 : -1),
				width = (this.width() / this.settings.items).toFixed(3),
				coordinate = 0, merge, i, n;

			this._coordinates = [];
			for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
				merge = this._mergers[this.relative(i)];
				merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
				coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;

				this._coordinates.push(coordinate);
			}
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function () {
			var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
				'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
				'padding-left': this.settings.stagePadding || '',
				'padding-right': this.settings.stagePadding || ''
			};

			this.$stage.css(css);

			css = { 'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin };
			css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;

			if (!this.settings.autoWidth && $.grep(this._mergers, function (v) { return v > 1 }).length > 0) {
				for (i = 0, n = this._coordinates.length; i < n; i++) {
					css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
					this.$stage.children().eq(i).css(css);
				}
			} else {
				this.$stage.children().css(css);
			}
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function (cache) {
			cache.current && this.reset(this.$stage.children().index(cache.current));
		}
	}, {
		filter: ['position'],
		run: function () {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: ['width', 'position', 'items', 'settings'],
		run: function () {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);

			if (this.settings.center) {
				this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
				this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
			}
		}
	}];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function () {
		this.trigger('initialize');

		this.$element
			.addClass(this.settings.baseClass)
			.addClass(this.settings.themeClass)
			.toggleClass('owl-rtl', this.settings.rtl);

		// check support
		this.browserSupport();

		if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
				return false;
			}
		}

		this.$element.addClass('owl-loading');

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>')
			.wrap('<div class="owl-stage-outer">');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// set view width
		this._width = this.$element.width();

		// update view
		this.refresh();

		this.$element.removeClass('owl-loading').addClass('owl-loaded');

		// attach generic events
		this.eventsCall();

		// attach generic events
		this.internalEvents();

		// attach custom control events
		this.addTriggerableEvents();

		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function () {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function (breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class', function (i, c) {
					return c.replace(/\b owl-responsive-\S+/g, '');
				}).addClass('owl-responsive-' + match);
			}
		}

		if (this.settings === null || this._breakpoint !== match) {
			this.trigger('change', { property: { name: 'settings', value: settings } });
			this._breakpoint = match;
			this.settings = settings;
			this.invalidate('settings');
			this.trigger('changed', { property: { name: 'settings', value: this.settings } });
		}
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function () {
		// Toggle Center class
		this.$element.toggleClass('owl-center', this.settings.center);

		// if items number is less than in body
		if (this.settings.loop && this._items.length < this.settings.items) {
			this.settings.loop = false;
		}

		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function (item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.settings.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function () {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function (p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function (dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function () {
		if (this._items.length === 0) {
			return false;
		}

		var start = new Date().getTime();

		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		// hide and show methods helps here to set a proper widths,
		// this prevents scrollbar to be calculated in stage width
		this.$stage.addClass('owl-refresh');

		this.update();

		this.$stage.removeClass('owl-refresh');

		this.state.orientation = window.orientation;

		this.watchVisibility();

		this.trigger('refreshed');
	};

	/**
	 * Save internal event references and add event based functions.
	 * @protected
	 */
	Owl.prototype.eventsCall = function () {
		// Save events references
		this.e._onDragStart = $.proxy(function (e) {
			this.onDragStart(e);
		}, this);
		this.e._onDragMove = $.proxy(function (e) {
			this.onDragMove(e);
		}, this);
		this.e._onDragEnd = $.proxy(function (e) {
			this.onDragEnd(e);
		}, this);
		this.e._onResize = $.proxy(function (e) {
			this.onResize(e);
		}, this);
		this.e._transitionEnd = $.proxy(function (e) {
			this.transitionEnd(e);
		}, this);
		this.e._preventClick = $.proxy(function (e) {
			this.preventClick(e);
		}, this);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function () {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function () {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (this.trigger('resize').isDefaultPrevented()) {
			return false;
		}

		this._width = this.$element.width();

		this.invalidate('width');

		this.refresh();

		this.trigger('resized');
	};

	/**
	 * Checks for touch/mouse drag event type and add run event handlers.
	 * @protected
	 */
	Owl.prototype.eventsRouter = function (event) {
		var type = event.type;

		if (type === "mousedown" || type === "touchstart") {
			this.onDragStart(event);
		} else if (type === "mousemove" || type === "touchmove") {
			this.onDragMove(event);
		} else if (type === "mouseup" || type === "touchend") {
			this.onDragEnd(event);
		} else if (type === "touchcancel") {
			this.onDragEnd(event);
		}
	};

	/**
	 * Checks for touch/mouse drag options and add necessery event handlers.
	 * @protected
	 */
	Owl.prototype.internalEvents = function () {
		var isTouch = isTouchSupport(),
			isTouchIE = isTouchSupportIE();

		if (this.settings.mouseDrag) {
			this.$stage.on('mousedown', $.proxy(function (event) { this.eventsRouter(event) }, this));
			this.$stage.on('dragstart', function () { return false });
			this.$stage.get(0).onselectstart = function () { return false };
		} else {
			this.$element.addClass('owl-text-select-on');
		}

		if (this.settings.touchDrag && !isTouchIE) {
			this.$stage.on('touchstart touchcancel', $.proxy(function (event) { this.eventsRouter(event) }, this));
		}

		// catch transitionEnd event
		if (this.transitionEndVendor) {
			this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
		}

		// responsive
		if (this.settings.responsive !== false) {
			this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
		}
	};

	/**
	 * Handles touchstart/mousedown event.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function (event) {
		var ev, isTouchEvent, pageX, pageY, animatedPos;

		ev = event.originalEvent || event || window.event;

		// prevent right click
		if (ev.which === 3 || this.state.isTouch) {
			return false;
		}

		if (ev.type === 'mousedown') {
			this.$stage.addClass('owl-grab');
		}

		this.trigger('drag');
		this.drag.startTime = new Date().getTime();
		this.speed(0);
		this.state.isTouch = true;
		this.state.isScrolling = false;
		this.state.isSwiping = false;
		this.drag.distance = 0;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// get stage position left
		this.drag.offsetX = this.$stage.position().left;
		this.drag.offsetY = this.$stage.position().top;

		if (this.settings.rtl) {
			this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
				+ this.settings.margin;
		}

		// catch position // ie to fix
		if (this.state.inMotion && this.support3d) {
			animatedPos = this.getTransformProperty();
			this.drag.offsetX = animatedPos;
			this.animate(animatedPos);
			this.state.inMotion = true;
		} else if (this.state.inMotion && !this.support3d) {
			this.state.inMotion = false;
			return false;
		}

		this.drag.startX = pageX - this.drag.offsetX;
		this.drag.startY = pageY - this.drag.offsetY;

		this.drag.start = pageX - this.drag.startX;
		this.drag.targetEl = ev.target || ev.srcElement;
		this.drag.updatedX = this.drag.start;

		// to do/check
		// prevent links and images dragging;
		if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
			this.drag.targetEl.draggable = false;
		}

		$(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function (event) { this.eventsRouter(event) }, this));
	};

	/**
	 * Handles the touchmove/mousemove events.
	 * @todo Simplify
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function (event) {
		var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;

		if (!this.state.isTouch) {
			return;
		}

		if (this.state.isScrolling) {
			return;
		}

		ev = event.originalEvent || event || window.event;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// Drag Direction
		this.drag.currentX = pageX - this.drag.startX;
		this.drag.currentY = pageY - this.drag.startY;
		this.drag.distance = this.drag.currentX - this.drag.offsetX;

		// Check move direction
		if (this.drag.distance < 0) {
			this.state.direction = this.settings.rtl ? 'right' : 'left';
		} else if (this.drag.distance > 0) {
			this.state.direction = this.settings.rtl ? 'left' : 'right';
		}
		// Loop
		if (this.settings.loop) {
			if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
				this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			} else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
				this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			}
		} else {
			// pull
			minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
			this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
		}

		// Lock browser if swiping horizontal

		if ((this.drag.distance > 8 || this.drag.distance < -8)) {
			if (ev.preventDefault !== undefined) {
				ev.preventDefault();
			} else {
				ev.returnValue = false;
			}
			this.state.isSwiping = true;
		}

		this.drag.updatedX = this.drag.currentX;

		// Lock Owl if scrolling
		if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
			this.state.isScrolling = true;
			this.drag.updatedX = this.drag.start;
		}

		this.animate(this.drag.updatedX);
	};

	/**
	 * Handles the touchend/mouseup events.
	 * @protected
	 */
	Owl.prototype.onDragEnd = function (event) {
		var compareTimes, distanceAbs, closest;

		if (!this.state.isTouch) {
			return;
		}

		if (event.type === 'mouseup') {
			this.$stage.removeClass('owl-grab');
		}

		this.trigger('dragged');

		// prevent links and images dragging;
		this.drag.targetEl.removeAttribute("draggable");

		// remove drag event listeners

		this.state.isTouch = false;
		this.state.isScrolling = false;
		this.state.isSwiping = false;

		// to check
		if (this.drag.distance === 0 && this.state.inMotion !== true) {
			this.state.inMotion = false;
			return false;
		}

		// prevent clicks while scrolling

		this.drag.endTime = new Date().getTime();
		compareTimes = this.drag.endTime - this.drag.startTime;
		distanceAbs = Math.abs(this.drag.distance);

		// to test
		if (distanceAbs > 3 || compareTimes > 300) {
			this.removeClick(this.drag.targetEl);
		}

		closest = this.closest(this.drag.updatedX);

		this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
		this.current(closest);
		this.invalidate('position');
		this.update();

		// if pullDrag is off then fire transitionEnd event manually when stick
		// to border
		if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
			this.transitionEnd();
		}

		this.drag.distance = 0;

		$(document).off('.owl.dragEvents');
	};

	/**
	 * Attaches `preventClick` to disable link while swipping.
	 * @protected
	 * @param {HTMLElement} [target] - The target of the `click` event.
	 */
	Owl.prototype.removeClick = function (target) {
		this.drag.targetEl = target;
		$(target).on('click.preventClick', this.e._preventClick);
		// to make sure click is removed:
		window.setTimeout(function () {
			$(target).off('click.preventClick');
		}, 300);
	};

	/**
	 * Suppresses click event.
	 * @protected
	 * @param {Event} ev - The event arguments.
	 */
	Owl.prototype.preventClick = function (ev) {
		if (ev.preventDefault) {
			ev.preventDefault();
		} else {
			ev.returnValue = false;
		}
		if (ev.stopPropagation) {
			ev.stopPropagation();
		}
		$(ev.target).off('click.preventClick');
	};

	/**
	 * Catches stage position while animate (only CSS3).
	 * @protected
	 * @returns
	 */
	Owl.prototype.getTransformProperty = function () {
		var transform, matrix3d;

		transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
		// var transform = this.$stage.css(this.vendorName + 'transform')
		transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
		matrix3d = transform.length === 16;

		return matrix3d !== true ? transform[4] : transform[12];
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function (coordinate) {
		var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function (index, value) {
				if (coordinate > value - pull && coordinate < value + pull) {
					position = index;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = this.state.direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function (coordinate) {
		this.trigger('translate');
		this.state.inMotion = this.speed() > 0;

		if (this.support3d) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (this.state.isTouch) {
			this.$stage.css({
				left: coordinate + 'px'
			});
		} else {
			this.$stage.animate({
				left: coordinate
			}, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function () {
				if (this.state.inMotion) {
					this.transitionEnd();
				}
			}, this));
		}
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function (position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} part - The part to invalidate.
	 */
	Owl.prototype.invalidate = function (part) {
		this._invalidated[part] = true;
	}

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function (position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress(['translate', 'translated']);

		this.animate(this.coordinates(position));

		this.release(['translate', 'translated']);
	};

	/**
	 * Normalizes an absolute or a relative position for an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function (position, relative) {
		var n = (relative ? this._items.length : this._items.length + this._clones.length);

		if (!$.isNumeric(position) || n < 1) {
			return undefined;
		}

		if (this._clones.length) {
			position = ((position % n) + n) % n;
		} else {
			position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
		}

		return position;
	};

	/**
	 * Converts an absolute position for an item into a relative position.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function (position) {
		position = this.normalize(position);
		position = position - this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function (relative) {
		var maximum, width, i = 0, coordinate,
			settings = this.settings;

		if (relative) {
			return this._items.length - 1;
		}

		if (!settings.loop && settings.center) {
			maximum = this._items.length - 1;
		} else if (!settings.loop && !settings.center) {
			maximum = this._items.length - settings.items;
		} else if (settings.loop || settings.center) {
			maximum = this._items.length + settings.items;
		} else if (settings.autoWidth || settings.merge) {
			revert = settings.rtl ? 1 : -1;
			width = this.$stage.width() - this.$element.width();
			while (coordinate = this.coordinates(i)) {
				if (coordinate * revert >= width) {
					break;
				}
				maximum = ++i;
			}
		} else {
			throw 'Can not detect maximum absolute position.'
		}

		return maximum;
	};

	/**
	 * Gets the minimum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function (relative) {
		if (relative) {
			return 0;
		}

		return this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function (position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function (position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function (position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function (index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function (v, i) { return map(i) });
		}

		return $.map(this._clones, function (v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function (speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function (position) {
		var coordinate = null;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function (coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
		} else {
			coordinate = this._coordinates[position - 1] || 0;
		}

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function (from, to, factor) {
		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function (position, speed) {
		if (this.settings.loop) {
			var distance = position - this.relative(this.current()),
				revert = this.current(),
				before = this.current(),
				after = this.current() + distance,
				direction = before - after < 0 ? true : false,
				items = this._clones.length + this._items.length;

			if (after < this.settings.items && direction === false) {
				revert = before + this._items.length;
				this.reset(revert);
			} else if (after >= items - this.settings.items && direction === true) {
				revert = before - this._items.length;
				this.reset(revert);
			}
			window.clearTimeout(this.e._goToLoop);
			this.e._goToLoop = window.setTimeout($.proxy(function () {
				this.speed(this.duration(this.current(), revert + distance, speed));
				this.current(revert + distance);
				this.update();
			}, this), 30);
		} else {
			this.speed(this.duration(this.current(), position, speed));
			this.current(position);
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function (speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function (speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.transitionEnd = function (event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.state.inMotion = false;
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function () {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function (content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function () {
			return this.nodeType === 1;
		}).each($.proxy(function (index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function (content, position) {
		position = position === undefined ? this._items.length : this.normalize(position, true);

		this.trigger('add', { content: content, position: position });

		if (this._items.length === 0 || position === this._items.length) {
			this.$stage.append(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function (position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Adds triggerable events.
	 * @protected
	 */
	Owl.prototype.addTriggerableEvents = function () {
		var handler = $.proxy(function (callback, event) {
			return $.proxy(function (e) {
				if (e.relatedTarget !== this) {
					this.suppress([event]);
					callback.apply(this, [].slice.call(arguments, 1));
					this.release([event]);
				}
			}, this);
		}, this);

		$.each({
			'next': this.next,
			'prev': this.prev,
			'to': this.to,
			'destroy': this.destroy,
			'refresh': this.refresh,
			'replace': this.replace,
			'add': this.add,
			'remove': this.remove
		}, $.proxy(function (event, callback) {
			this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
		}, this));

	};

	/**
	 * Watches the visibility of the carousel element.
	 * @protected
	 */
	Owl.prototype.watchVisibility = function () {

		// test on zepto
		if (!isElVisible(this.$element.get(0))) {
			this.$element.addClass('owl-hidden');
			window.clearInterval(this.e._checkVisibile);
			this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
		}

		function isElVisible(el) {
			return el.offsetWidth > 0 && el.offsetHeight > 0;
		}

		function checkVisible() {
			if (isElVisible(this.$element.get(0))) {
				this.$element.removeClass('owl-hidden');
				this.refresh();
				window.clearInterval(this.e._checkVisibile);
			}
		}
	};

	/**
	 * Preloads images with auto width.
	 * @protected
	 * @todo Still to test
	 */
	Owl.prototype.preloadAutoWidthImages = function (imgs) {
		var loaded, that, $el, img;

		loaded = 0;
		that = this;
		imgs.each(function (i, el) {
			$el = $(el);
			img = new Image();

			img.onload = function () {
				loaded++;
				$el.attr('src', img.src);
				$el.css('opacity', 1);
				if (loaded >= imgs.length) {
					that.state.imagesLoaded = true;
					that.initialize();
				}
			};

			img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
		});
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function () {

		if (this.$element.hasClass(this.settings.themeClass)) {
			this.$element.removeClass(this.settings.themeClass);
		}

		if (this.settings.responsive !== false) {
			$(window).off('resize.owl.carousel');
		}

		if (this.transitionEndVendor) {
			this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		if (this.settings.mouseDrag || this.settings.touchDrag) {
			this.$stage.off('mousedown touchstart touchcancel');
			$(document).off('.owl.dragEvents');
			this.$stage.get(0).onselectstart = function () { };
			this.$stage.off('dragstart', function () { return false });
		}

		// remove event handlers in the ".owl.carousel" namespace
		this.$element.off('.owl');

		this.$stage.children('.cloned').remove();
		this.e = null;
		this.$element.removeData('owlCarousel');

		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.unwrap();
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function (a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function (element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function (element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers an public event.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=.owl.carousel] - The event namespace.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function (name, data, namespace) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep(['on', name, namespace], function (v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[name, 'owl', namespace || 'carousel'].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function (name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].apply(this, event);
			}
		}

		return event;
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function (events) {
		$.each(events, $.proxy(function (index, event) {
			this._supress[event] = true;
		}, this));
	}

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function (events) {
		$.each(events, $.proxy(function (index, event) {
			delete this._supress[event];
		}, this));
	}

	/**
	 * Checks the availability of some browser features.
	 * @protected
	 */
	Owl.prototype.browserSupport = function () {
		this.support3d = isPerspective();

		if (this.support3d) {
			this.transformVendor = isTransform();

			// take transitionend event name by detecting transition
			var endVendors = ['transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd'];
			this.transitionEndVendor = endVendors[isTransition()];

			// take vendor name from transform name
			this.vendorName = this.transformVendor.replace(/Transform/i, '');
			this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
		}

		this.state.orientation = window.orientation;
	};

	/**
	 * Get touch/drag coordinats.
	 * @private
	 * @param {event} - mousedown/touchstart event
	 * @returns {object} - Contains X and Y of current mouse/touch position
	 */

	function getTouches(event) {
		if (event.touches !== undefined) {
			return {
				x: event.touches[0].pageX,
				y: event.touches[0].pageY
			};
		}

		if (event.touches === undefined) {
			if (event.pageX !== undefined) {
				return {
					x: event.pageX,
					y: event.pageY
				};
			}

			if (event.pageX === undefined) {
				return {
					x: event.clientX,
					y: event.clientY
				};
			}
		}
	}

	/**
	 * Checks for CSS support.
	 * @private
	 * @param {Array} array - The CSS properties to check for.
	 * @returns {Array} - Contains the supported CSS property name and its index or `false`.
	 */
	function isStyleSupported(array) {
		var p, s, fake = document.createElement('div'), list = array;
		for (p in list) {
			s = list[p];
			if (typeof fake.style[s] !== 'undefined') {
				fake = null;
				return [s, p];
			}
		}
		return [false];
	}

	/**
	 * Checks for CSS transition support.
	 * @private
	 * @todo Realy bad design
	 * @returns {Number}
	 */
	function isTransition() {
		return isStyleSupported(['transition', 'WebkitTransition', 'MozTransition', 'OTransition'])[1];
	}

	/**
	 * Checks for CSS transform support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isTransform() {
		return isStyleSupported(['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'])[0];
	}

	/**
	 * Checks for CSS perspective support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isPerspective() {
		return isStyleSupported(['perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective'])[0];
	}

	/**
	 * Checks wether touch is supported or not.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupport() {
		return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
	}

	/**
	 * Checks wether touch is supported or not for IE.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupportIE() {
		return window.navigator.msPointerEnabled;
	}

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @public
	 */
	$.fn.owlCarousel = function (options) {
		return this.each(function () {
			if (!$(this).data('owlCarousel')) {
				$(this).data('owlCarousel', new Owl(this, options));
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function (carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel': $.proxy(function (e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = ((e.property && e.property.value) || this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function (i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position++)), load);
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	}

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function (position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function (index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function () {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function () {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function () {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function () {
				if (this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (this._core.settings.autoHeight && e.property.name == 'position') {
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function (e) {
				if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass)
					=== this._core.$stage.children().eq(this._core.current())) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function () {
		this._core.$stage.parent()
			.height(this._core.$stage.children().eq(this._core.current()).height())
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function () {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * Whether this is in fullscreen or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._fullscreen = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'resize.owl.carousel': $.proxy(function (e) {
				if (this._core.settings.video && !this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refresh.owl.carousel changed.owl.carousel': $.proxy(function (e) {
				if (this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function (e) {
				var $element = $(e.content).find('.owl-video');
				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function (e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function (target, item) {

		var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
			id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
			width = target.attr('data-width') || this._core.settings.videoWidth,
			height = target.attr('data-height') || this._core.settings.videoHeight,
			url = target.attr('href');

		if (url) {
			id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function (target, video) {

		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function (path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function (data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function () {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} ev - The event arguments.
	 */
	Video.prototype.play = function (ev) {
		this._core.trigger('play', null, 'video');

		if (this._playing) {
			this.stop();
		}

		var target = $(ev.target || ev.srcElement),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html, wrap;

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
				+ video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
				+ '" height="' + height
				+ '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		}

		item.addClass('owl-video-playing');
		this._playing = item;

		wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
			+ html + '</div>');
		target.after(wrap);
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function () {

		// if Vimeo Fullscreen mode
		var element = document.fullscreenElement || document.mozFullScreenElement
			|| document.webkitFullscreenElement;

		if (element && $(element).parent().hasClass('owl-video-frame')) {
			this._core.speed(0);
			this._fullscreen = true;
		}

		if (element && this._fullscreen && this._playing) {
			return false;
		}

		// comming back from fullscreen
		if (this._fullscreen) {
			this._fullscreen = false;
			return false;
		}

		// check full screen mode and window orientation
		if (this._playing) {
			if (this._core.state.orientation !== window.orientation) {
				this._core.state.orientation = window.orientation;
				return false;
			}
		}

		return true;
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function () {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function (scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function (e) {
				if (e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {
				this.swapping = e.type == 'translated';
			}, this),
			'translate.owl.carousel': $.proxy(function (e) {
				if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function () {

		if (this.core.settings.items !== 1 || !this.core.support3d) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.css({ 'left': left + 'px' })
				.addClass('animated owl-animated-out')
				.addClass(outgoing)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}

		if (incoming) {
			next.addClass('animated owl-animated-in')
				.addClass(incoming)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}
	};

	Animate.prototype.clear = function (e) {
		$(e.target).css({ 'left': '' })
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.transitionEnd();
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function () {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function (scope) {
		this.core = scope;
		this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);

		this.handlers = {
			'translated.owl.carousel refreshed.owl.carousel': $.proxy(function () {
				this.autoplay();
			}, this),
			'play.owl.autoplay': $.proxy(function (e, t, s) {
				this.play(t, s);
			}, this),
			'stop.owl.autoplay': $.proxy(function () {
				this.stop();
			}, this),
			'mouseover.owl.autoplay': $.proxy(function () {
				if (this.core.settings.autoplayHoverPause) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function () {
				if (this.core.settings.autoplayHoverPause) {
					this.autoplay();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * @protected
	 * @todo Must be documented.
	 */
	Autoplay.prototype.autoplay = function () {
		if (this.core.settings.autoplay && !this.core.state.videoPlay) {
			window.clearInterval(this.interval);

			this.interval = window.setInterval($.proxy(function () {
				this.play();
			}, this), this.core.settings.autoplayTimeout);
		} else {
			window.clearInterval(this.interval);
		}
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - ...
	 * @param {Number} [speed] - ...
	 * @returns {Boolean|undefined} - ...
	 * @todo Must be documented.
	 */
	Autoplay.prototype.play = function (timeout, speed) {
		// if tab is inactive - doesnt work in <IE10
		if (document.hidden === true) {
			return;
		}

		if (this.core.state.isTouch || this.core.state.isScrolling
			|| this.core.state.isSwiping || this.core.state.inMotion) {
			return;
		}

		if (this.core.settings.autoplay === false) {
			window.clearInterval(this.interval);
			return;
		}

		this.core.next(this.core.settings.autoplaySpeed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function () {
		window.clearInterval(this.interval);
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function () {
		window.clearInterval(this.interval);
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function () {
		var handler, property;

		window.clearInterval(this.interval);

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function (e) {
				if (this._core.settings.dotsData) {
					this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'add.owl.carousel': $.proxy(function (e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'remove.owl.carousel prepared.owl.carousel': $.proxy(function (e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'change.owl.carousel': $.proxy(function (e) {
				if (e.property.name == 'position') {
					if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
						var current = this._core.current(),
							maximum = this._core.maximum(),
							minimum = this._core.minimum();
						e.data = e.property.value > maximum
							? current >= maximum ? minimum : maximum
							: e.property.value < minimum ? maximum : e.property.value;
					}
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function () {
				if (!this._initialized) {
					this.initialize();
					this._initialized = true;
				}
				this._core.trigger('refresh', null, 'navigation');
				this.update();
				this.draw();
				this._core.trigger('refreshed', null, 'navigation');
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navRewind: true,
		navText: ['prev', 'next'],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: ['owl-prev', 'owl-next'],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotData: false,
		dotsSpeed: false,
		dotsContainer: false,
		controlsClass: 'owl-controls'
	}

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function () {
		var $container, override,
			options = this._core.settings;

		// create the indicator template
		if (!options.dotsData) {
			this._templates = [$('<div>')
				.addClass(options.dotClass)
				.append($('<span>'))
				.prop('outerHTML')];
		}

		// create controls container if needed
		if (!options.navContainer || !options.dotsContainer) {
			this._controls.$container = $('<div>')
				.addClass(options.controlsClass)
				.appendTo(this.$element);
		}

		// create DOM structure for absolute navigation
		this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer)
			: $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);

		this._controls.$indicators.on('click', 'div', $.proxy(function (e) {
			var index = $(e.target).parent().is(this._controls.$indicators)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, options.dotsSpeed);
		}, this));

		// create DOM structure for relative navigation
		$container = options.navContainer ? $(options.navContainer)
			: $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);

		this._controls.$next = $('<' + options.navElement + '>');
		this._controls.$previous = this._controls.$next.clone();

		this._controls.$previous
			.addClass(options.navClass[0])
			.html(options.navText[0])
			.hide()
			.prependTo($container)
			.on('click', $.proxy(function (e) {
				this.prev(options.navSpeed);
			}, this));
		this._controls.$next
			.addClass(options.navClass[1])
			.html(options.navText[1])
			.hide()
			.appendTo($container)
			.on('click', $.proxy(function (e) {
				this.next(options.navSpeed);
			}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	}

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function () {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function () {
		var i, j, k,
			options = this._core.settings,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			size = options.center || options.autoWidth || options.dotData
				? 1 : options.dotsEach || options.items;

		if (options.slideBy !== 'page') {
			options.slideBy = Math.min(options.slideBy, options.items);
		}

		if (options.dots || options.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: i - lower,
						end: i - lower + size - 1
					});
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	}

	/**
	 * Draws the user interface.
	 * @todo The option `dotData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function () {
		var difference, i, html = '',
			options = this._core.settings,
			$items = this._core.$stage.children(),
			index = this._core.relative(this._core.current());

		if (options.nav && !options.loop && !options.navRewind) {
			this._controls.$previous.toggleClass('disabled', index <= 0);
			this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
		}

		this._controls.$previous.toggle(options.nav);
		this._controls.$next.toggle(options.nav);

		if (options.dots) {
			difference = this._pages.length - this._controls.$indicators.children().length;

			if (options.dotData && difference !== 0) {
				for (i = 0; i < this._controls.$indicators.children().length; i++) {
					html += this._templates[this._core.relative(i)];
				}
				this._controls.$indicators.html(html);
			} else if (difference > 0) {
				html = new Array(difference + 1).join(this._templates[0]);
				this._controls.$indicators.append(html);
			} else if (difference < 0) {
				this._controls.$indicators.children().slice(difference).remove();
			}

			this._controls.$indicators.find('.active').removeClass('active');
			this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}

		this._controls.$indicators.toggle(options.dots);
	}

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function (event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotData
				? 1 : settings.dotsEach || settings.items)
		};
	}

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function () {
		var index = this._core.relative(this._core.current());
		return $.grep(this._pages, function (o) {
			return o.start <= index && o.end >= index;
		}).pop();
	}

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function (successor) {
		var position, length,
			options = this._core.settings;

		if (options.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += options.slideBy : position -= options.slideBy;
		}
		return position;
	}

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function (speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	}

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function (speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	}

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function (position, speed, standard) {
		var length;

		if (!standard) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash table for the hashes.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function () {
				if (this._core.settings.startPosition == 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function (e) {
				var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
				this._hashes[hash] = e.content;
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function () {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;

			if (!hash) {
				return false;
			}

			this._core.to(position, false, true);
		}, this));
	}

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function () {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

///#source 1 1 /scripts/Library/Plugins/synthetix.js
var ww = ww || {};

function live_chat_callback() {
	ww.synthetix.loadLiveChat();
}

(function ($) {
	ww.synthetix = {
		init: function () {
			// if there an FAQ widget on the page
			if ($('#synthetix_faqtAgent').length > 0 || $('#synthetix_liveChat_availability').length > 0) {
				// no conflict
				jq = jQuery.noConflict();
				// add js files
				var scripts = [
					"https://synthetix-ec1.com/clients/welshwater/integrated/faq/fa_engine.js",
					"https://synthetix-ec1.com/clients/welshwater/integrated/faq/liveChat_client.js",
					"https://synthetix-ec1.com/clients/welshwater/integrated/faq/liveChat_custom_functions.js",
					"https://synthetix.info/answers/FAQTAGENT-WELSHWATER-MASTER/lc_quality2.js",
					"https://synthetix.info/answers/FAQTAGENT-WELSHWATER_ENG-LIVE/kb_feedback.js"
				];
				$.each(scripts, function (i) {
					var script = document.createElement('script');
					script.type = 'text/javascript';
					script.src = this;
					$("head").append(script);
				});

				// add css files
				var cssFiles = [
					"https://synthetix-ec1.com/clients/welshwater/integrated/faq/css/faqtAgent.css",
					"https://synthetix-ec1.com/clients/welshwater/integrated/faq/css/liveChat.css"
				];
				$.each(cssFiles, function () {
					$('head').append('<link rel="stylesheet" href="' + this + '" type="text/css" />');
				});
			}
		},
		loadLiveChat: function () {
			check_if_chat_agents_are_online();
		}
	};
})(jQuery);


///#source 1 1 /scripts/WelshWater/Components/cookie.js
var ww = ww || {};

(function ($) {
	ww.cookie = {
		value: function (name) {
			var regEx = new RegExp(name + "=([^;]+)");
			cookie = regEx.exec(document.cookie);
			cookieInfo = (cookie != null) ? unescape(cookie[1]) : null;
			value = (cookie != null) ? cookieInfo.toString().replace(name + '=', '') : '';
			// if it has a value and is not expired
			if (value.length > 0 && document.cookie.indexOf(name) !== -1) {
				return value;
			} else {
				return false;
			}
		},
		update: function (name, value, days) {
			// this is done to clear any exsisting cookie values otherwise it just appends
			updateRunner(name, "", -1);
			// do the update
			updateRunner(name, value, days);
			function updateRunner(name, value, days) {
				if (days) {
					var date = new Date();
					date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
					var expires = "; expires=" + date.toGMTString();
				}
				else var expires = "";
				document.cookie = name + "=" + value + expires + "; path=/";
			}
		}
	};
})(jQuery);
///#source 1 1 /scripts/WelshWater/Components/confirm-device.js
var ww = ww || {};
// Confirm device type via client side JS
// Useful for mobile only JS etc
(function ($) {
    ww.confirmDevice = {
        mobileDevice: "undefined",
        init: function () {
            if ($('body').hasClass("tablet") || $('body').hasClass("mobile")) {
                this.mobileDevice = true;
            } else {
                this.mobileDevice = false;
            }
        }
    }
})(jQuery);
///#source 1 1 /scripts/WelshWater/Components/viewport.js
var ww = ww || {};

(function ($) {
	ww.viewport = {
		reset: function () {
			// only run on mobile
			if ($('body').hasClass("mobile")) {
				var width = $('.wrapper').outerWidth(true);
				var getMetaContent = $('meta[name=viewport]').attr('content');
				// if being targetted through SC
				var getMetaID = $('meta[name=viewport]').attr('id');
				$('meta[name=viewport]').remove();
				$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />');
				$('meta[name=viewport]').remove();
				if ($('body').hasClass('tablet')) {
					$('head').append('<meta name="viewport" content="width=' + width + ', initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />');
				} else {
					if (getMetaID !== null || getMetaID !== undefined && getMetaContent !== null || getMetaContent !== undefined) {
						$('head').append('<meta id="' + getMetaID + '" name="viewport" content="' + getMetaContent + '">');
					} else if (getMetaID !== null || getMetaID !== undefined) {
						$('head').append('<meta name="viewport" content="' + getMetaContent + '">');
					} else {
						$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />');
					}
				}
			}
		},
		changed: function (callback) {	
			// only run on mobile
			if ($('body').hasClass("mobile")) {
				if (document.addEventListener) {
					window.addEventListener("orientationchange", function () {
						ww.viewport.reset();
					}, false);
				} else if (document.attachEvent) {
					window.attachEvent("orientationchange", function () {
						ww.viewport.reset();
					}, false);
				}
			}
		}
	};
})(jQuery);
///#source 1 1 /scripts/WelshWater/Components/load-google-map-api.js
var ww = ww || {};

(function ($) {
	ww.loadGoogleScript = {
		init: function (callback) {
			// TODO: Add API key
			// Make sure that Google Maps API is loaded.
			if (typeof google !== 'object' || typeof google.maps !== 'object') {
				// callback of gmapDependant once api has loaded
				if (callback.length > 0) {
					var script_src = 'http://maps.google.com/maps/api/js?v=3.4&sensor=false&callback=' + callback;
				} else {
					var script_src = 'http://maps.google.com/maps/api/js?v=3.4&sensor';
				}
				jQuery.getScript(script_src);
			}
		}
	};
})(jQuery);
///#source 1 1 /scripts/WelshWater/Components/valid-postcode.js
var ww = ww || {};

(function ($) {
	ww.validPostcode = {
		// TODO: confirm these are all the postcodes within welsh water
		init: function (postcode) {
			postcode = postcode.replace(/\s/g, "");
			var regex = /^(LL|SY|LD|HR|NP|CF|SA|CH)[0-9]{1,2} ?([0-9][A-Z]{2})?$/i;
			return regex.test(postcode);
		}
	};
})(jQuery);
///#source 1 1 /scripts/WelshWater/Components/get-coordinates.js
var ww = ww || {};

(function ($) {
	ww.getCoordinate = {

		lat: 'undefined',

		long: 'undefined',

		accuracy: 'undefined',

		aquired: 'undefined',

		init: function () {
			if (navigator.geolocation) {
				var geolocation = navigator.geolocation.watchPosition(this.geoSuccess, this.geoError, this.geoOptions);

				window.setTimeout(function () {
					window.navigator.geolocation.clearWatch(geolocation)
				}, 5000);
			} else {
				ww.getCoordinate.aquired = false;
				console.log('Geolocation not supported')
			}
		},

		geoOptions: function () {
			return options = {
				// TODO: check if high accuracy is required
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 250
			}
		},

		geoSuccess: function (pos) {
			var crd = pos.coords;
			var lat = crd.latitude,
					long = crd.longitude,
					acra = crd.accuracy;

			ww.getCoordinate.lat = lat;
			ww.getCoordinate.long = long;
			ww.getCoordinate.accuracy = acra;

			ww.getCoordinate.aquired = true;
		},

		geoError: function (err) {
			ww.getCoordinate.aquired = false;
			console.log('ERROR(' + err.code + '): ' + err.message);
		}
	};
})(jQuery);

///#source 1 1 /scripts/WelshWater/Components/wffm-geo-address.js
var ww = ww || {};

(function ($) {

		// FIXME: Breaks JS if lat / long inst defined

    ww.wffmGeoAddress = {
			 
    		html5Lat: '',
    		html5Lon: '',

        init: function () {
            this.bindEvents();
        },

        bindEvents: function () {
            //Get userlocation
            navigator.geolocation.getCurrentPosition(function (loc) {
                ww.wffmGeoAddress.html5Lat = loc.coords.latitude;
                ww.wffmGeoAddress.html5Lon = loc.coords.longitude;

                var url = "/api/LocationServices/GetAddressFromGeo?longitude=" + this.html5Lon + "&latitude=" + this.html5Lat;

                jQuery.ajax({
                    type: 'POST',
                    url: url,
                    dataType: "json",
                    success: function (address) {

                        $("input[value='$street']").val(address.Street);
                        $("input[value='$town']").val(address.Town);
                        $("input[value='$postcode']").val(address.Postcode);

                        console.log(address);
                    },
                    error: function (request, status, error) {
                        console.log(error);
                    }
                });

            });


            //post to service
            //get back JSON object of address
            //Select control values and replace
        }
    };
})(jQuery);
///#source 1 1 /scripts/WelshWater/Components/emergency-work.js
var ww = ww || {};

(function ($) {
    ww.emergencyWork = {
        count: 0,
        emergencies: 0,
        timeout: 1000,

        init: function () {
            if (document.getElementById('hfEmergencies')) {
                this.emergencies = jQuery.parseJSON(document.getElementById('hfEmergencies').value);
                this.timeout = parseInt(document.getElementById('hfTimeOut').value, 10);
                if (this.emergencies !== null) {
                    this.autoRotateInit();
                    this.bindEvents();
                } else {
                    $('.emergencies .prev, .emergencies .next').remove();
                }
            }
        },
        autoRotateInit: function () {
            setInterval(function () {
                ww.emergencyWork.autoRotate();
            }, this.timeout);
        },
        autoRotate: function () {
            this.nextSlide();
        },
        prevSlide: function () {
            this.count -= 1;
            if (this.count < 0) {
                this.count = this.emergencies.length - 1;
            }
            this.loadNextSlide();
        },
        nextSlide: function () {
            this.count += 1;
            if (this.count >= this.emergencies.length) {
                this.count = 0;
            }
            this.loadNextSlide();
        },
        loadNextSlide: function () {
            var link = $('#EmergencyTitleLink');
            $(link).text(this.emergencies[this.count].Title);
            $(link).attr('href', this.emergencies[this.count].Url);
            $(link).attr('title', this.emergencies[this.count].Title);
        },
        bindEvents: function () {
            $('.next').on('click', function (e) {
                e.preventDefault();
                ww.emergencyWork.nextSlide();
            });
            $('.prev').on('click', function (e) {
                e.preventDefault();
                ww.emergencyWork.prevSlide();
            });
        }
    };
})(jQuery);
///#source 1 1 /scripts/WelshWater/Components/mobile-menu.js
var ww = ww || {};

(function ($) {
	ww.mobileMenu = {
		init: function () {
			this.bindEvents();
		},
		bindEvents: function () {

			var $body = $('body');

			$('.menu-icon').on('click', function () {
				$(this).toggleClass('open-marker');
				$body.toggleClass('menu-open');
				$('.level-1, .level-2').removeClass('open');
				//if ($body.hasClass('menu-open')) {
				//    $body.css('overflow-x', 'hidden'); 
				//} else {
				//    setTimeout(function () {
				//        $body.css('overflow-x', 'auto');
				//    }, 400);
				//}
			});

			$('.next-menu-options').on('click', function () {
				$(this).parent().parent().toggleClass('open');
				$(this).next('.level-2').toggleClass('open');
			});


			$('.level-2').each(function () {
				$(this).prepend('<li><a href="#!" class="go-back">back</a></li>');
			});

			$('.go-back').on('click', function () {
				$(this).closest('.level-1').removeClass('open');
				$('.level-2').removeClass('open');
			});
		}
	};
})(jQuery);
///#source 1 1 /scripts/WelshWater/Components/menu-utilities.js
var ww = ww || {};

(function ($) {
    ww.menuUtilities = {
        openClass: 'open',
        bodyClass: '.stage',
        searchSelClass: '',
        langSelClass: '',        

        init: function () {            
            this.bindEvents();
        },

        bindEvents: function () {
        	if ($('.search_area').length === 0) {
        		$('.icon-search').on('click', function () {
        			ww.menuUtilities.searchOpenClose(this);
        		});
        		$('.lang-selector').on('click', function () {
        			ww.menuUtilities.LangOpenClose(this);
        		});
        	} else {

        		$('.icon-search').on('click', function () {
        			if ($('.search_area input[type=text]').val().length > 0) {
        				if (getParameterByName('q') !== $('.search_area input[type=text]').val()) {
        					$('.search_area input[type=submit]').trigger('click');
        				}
        			} else {
        				$('.search_area input[type=text]').first().focus().trigger('touchstart'); //trigger touchstart
        				$('input').on('touchstart', function () {
        					$(this).focus();
        				});
        			}
        		});

        		function getParameterByName(name) {
        			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
									results = regex.exec(location.search);
        			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        		}
        	}
        },
        removeClassName: function(){
            $('.icon-search, .search-dropdown, .lang-selector, .lang-dropdown, .stage, .lang-selector-btn').removeClass(ww.menuUtilities.openClass);
        },
        
        searchOpenClose: function (trigger) {
            var $trigger = $(trigger);
            $trigger.toggleClass(ww.menuUtilities.openClass);


            $('.stage, .search-dropdown').toggleClass(ww.menuUtilities.openClass);

            if ($('.lang-selector, .lang-dropdown').hasClass(ww.menuUtilities.openClass)) {
                ww.menuUtilities.removeClassName();
                $trigger.toggleClass(ww.menuUtilities.openClass);
                setTimeout (function(){                    
                        $('.search-dropdown').toggleClass(ww.menuUtilities.openClass);
                        $(ww.menuUtilities.bodyClass).toggleClass(ww.menuUtilities.openClass);
                }, 500);
                
            }
        },

        LangOpenClose: function (trigger) {
            var $trigger = $(trigger);
            $trigger.toggleClass(ww.menuUtilities.openClass);
            $('.lang-selector-btn').toggleClass(ww.menuUtilities.openClass);

            if ($('.icon-search, .search-dropdown').hasClass(ww.menuUtilities.openClass)) {
                ww.menuUtilities.removeClassName();
                $trigger.toggleClass(ww.menuUtilities.openClass);
                setTimeout(function () {                                    
                    $('.lang-dropdown, .lang-selector-btn').toggleClass(ww.menuUtilities.openClass);
                    $(ww.menuUtilities.bodyClass).toggleClass(ww.menuUtilities.openClass);               
                }, 500);
            }
        }

    };
})(jQuery);
///#source 1 1 /scripts/WelshWater/Components/mobile-sub-menu.js
var ww = ww || {};

(function ($) {
	ww.mobileSubMenu = {
		init: function () {
			if (ww.confirmDevice.mobileDevice) {
				this.bindEvents();
				var currentPage = $('.sub-menu').find('.current').first().find('a').text();
				$('.sub-menu').find('.current').first().remove();
				$('.sub-menu-section h3').empty().html(currentPage);
			}
		},
		bindEvents: function () {
			$('.sub-menu-section').click(function () {
				$(this, '.menu-bar').toggleClass('open');
				$('.tier_one').slideToggle();
			});
		}
	};
})(jQuery);

///#source 1 1 /scripts/WelshWater/Components/back-to-top.js
var ww = ww || {};

(function ($) {
    ww.backToTop = {
        init: function () {
            this.bindEvents();
        },
        bindEvents: function () {            
            $('.back-to-top a').on('click', function () {
                $('html, body').animate({ scrollTop: 0 }, 400);
                return false;                
            });            
        }
    };
})(jQuery);  
///#source 1 1 /scripts/WelshWater/Components/live-chat.js
var ww = ww || {};

(function ($, feedbackPanel) {
    ww.liveChat = {

        // These are used to handle the set timeout pausing and restarting functionality
        startTime: undefined,
        duration: undefined,

	    init: function () {
			var $liveChat = $('.live-chat');
			this.bindEvents();

            // Set the delay in displaying the promo panel 
			ww.liveChat.duration = $('#hfLiveChatTimer').val() * 1000;
            // Set the panel to be timed
			$liveChat.addClass('timed');
            // start the timer
			this.liveChatPromoTimer(ww.liveChat.duration);

			$('.stage').after($('.live-chat-form'));

		},

	    liveChatPromoTimer: function (duration) {
            // store the strt time so we can compare it to the pause time 
		    ww.liveChat.startTime = new Date().getTime();

            // Start the timer to delay the showing of the promo
		    ww.liveChat.timer = window.setTimeout(function () {
		        $('.live-chat').removeClass('timed');
		        ww.liveChat.showLiveChatPromo()
		    }, duration)
	    },

	    hideLiveChatPromo: function () {

	        var liveChatPromo = $('.live-chat');

	        if (liveChatPromo.hasClass('timed')) {
	            liveChatPromo.addClass('paused');
	            var now = new Date().getTime();
	            var diff = now - ww.liveChat.startTime;
	            ww.liveChat.duration = ww.liveChat.duration - diff;
	            window.clearTimeout(ww.liveChat.timer);
	        }

	        liveChatPromo.removeClass('open');
	        liveChatPromo.addClass('hide');

	    },

		showLiveChatPromo: function () {
            
		    var liveChatPromo = $('.live-chat');

            // If the panel has already been dismissed don't do anything
		    if (liveChatPromo.hasClass('closed')) {
                return
		    }

            // If the timer is running and it has been paused restart it and show after the duration reamining
		    if (liveChatPromo.hasClass('timed') && liveChatPromo.hasClass('paused')) {
		        liveChatPromo.removeClass('paused');
                // restart the timer with the updated duration
		        ww.liveChat.liveChatPromoTimer(ww.liveChat.duration)
		        return;
		    }
		    
            // If the timer isn't paused show the promo panel
		    liveChatPromo.removeClass('hide');
		    liveChatPromo.addClass('open');

		    // hide/show live chat on focus of inputs
		    if ($('body').hasClass('mobile, tablet')) {
		        $(document).on('focus', 'input, textarea, select', function (e) {
		            liveChatPromo.addClass('closed'); 
		        });
		        $(document).on('focusout', 'input, textarea, select', function (e) {
		            liveChatPromo.addClass('open'); 
		        });
		    }
		
		},
		
		closeLiveChatPromo: function () {
            // This will close the promo panel until navigation or page refresh
		    var height = $('.live-chat').show().outerHeight() + 20;
		    var liveChatPromo = $('.live-chat');
		    liveChatPromo.removeClass('open');
		    liveChatPromo.addClass('closed');
		   
		},

		closeLiveChat: function () {
		    $('.live-chat').addClass('closed');
		    $('body').removeClass('live-chat-open');
		    setTimeout(function () {
		        $('body').removeClass('live-chat-open-animation')
		    }, 400);
		},

		openLiveChat: function() {
		    $("html, body").animate({ scrollTop: 0 }, 200);
		    $('body').removeClass('menu-open').addClass('live-chat-open').addClass('live-chat-open-animation');
		},

		bindEvents: function () {
			// live chat bottom banner close
		    $('.live-chat .close').on('click', function (e) {
		        e.preventDefault();
		        e.stopPropagation();
				ww.liveChat.closeLiveChatPromo($(this).parent('.live-chat'));
			});

			// live chat off canvas open
			$('.live-chat').on('click', function (e) {
				e.preventDefault();
				ww.liveChat.closeLiveChatPromo($(this));
				ww.liveChat.openLiveChat();
				ww.viewport.reset();
				ww.feedbackPanel.hideTab();
			});

			// close off canvas
			$('.live-chat-form').on('click', '.close-icon', function (e) {
			    e.preventDefault();
			    ww.viewport.reset();
			    ww.liveChat.closeLiveChat()
			    ww.feedbackPanel.showTab();
			});

		}  
	};
})(jQuery);
///#source 1 1 /scripts/WelshWater/Components/search-pagination.js
var ww = ww || {};

(function ($) {
	ww.searchPagination = {
		init: function () {
			var el = $('.search-pagination');

			if (el.length > 0) {
				var elOffset = el.offset().top;

			$(window).on('scroll', function () {
				var scrollTop = $(window).scrollTop(),
						distance = (elOffset - scrollTop);
				
				if (distance <= 0) {
					el.addClass('fixed');
				} else {
					el.removeClass('fixed');
				}
			});
		}
		}
	};
})(jQuery);
///#source 1 1 /scripts/WelshWater/Components/forms.js
var ww = ww || {};

(function ($) {
	ww.forms = {

		// global varibles		
		fieldset: $('fieldset'),
		$formSection: undefined,
		formSectionWidth: undefined,
		$formSectionWrapper: undefined,
		totalAmount: 0,
		transitionTime: 200,
		offsetFromTop: 10,
		step: 'Step',
		of: 'of',
		btnPrevText: 'Previous step',
		btnNextText: 'Next step',
		btnSubmitText: 'Submit',
		fieldsetValidationWarning: '0',
		fieldsetAtTop: false,

         
		// init custom form
		init: function () {
			// direct debit form only
			if ($('#form_6DDAF0659B034AEBB57184D27DC804A3').length > 0) {
				this.paymentOptions();
			}

			// only run if on mobile			
			if (ww.confirmDevice.mobileDevice && $('.scfForm').length > 0) {
				this.dictionaryItems();
			}
		},


		// ------------------------------
		// Payment options for direct debit
		// ------------------------------
		paymentOptions: function () {
			var amountOfInputs = $('.scfPaymentOptions').find('input').length;
			$('.scfPaymentOptions').find('input').each(function (i) {
				var monthlyPaymentOptions = $(this).closest('.scfSectionContent').find('.paymentDatesContainer').last().parent();
				$(this).on('change', function () {
					if(i + 1 === amountOfInputs) {
						if ($(this).is(':checked')) {
							monthlyPaymentOptions.addClass('show-payment-option');
						} else {
							monthlyPaymentOptions.removeClass('show-payment-option');
						}
					} else {
						monthlyPaymentOptions.removeClass('show-payment-option');
					}
				});
			});
		},

		// ------------------------------
		// Dictionary items
		// ------------------------------
		dictionaryItems: function () {
			$.ajax({
				dataType: "json",
				url: "/api/Forms/GetLabels",
				success: function (results) {
					ww.forms.step = results.Step;
					ww.forms.of = results.Of;
					ww.forms.btnPrevText = results.PreviousStep;
					ww.forms.btnNextText = results.NextStep;
					ww.forms.btnSubmitText = results.ButtonText;
					ww.forms.fieldsetValidationWarning = results.CompleteRequiredFields;
				}
			});
			// Init field sets | Bind required fields | Add/Remove Next/Prev buttons
			this.initFormFieldSets(ww.forms.fieldset);
			// Init form animation and controls
			this.initFormControler();
			// Init form input hints
			this.initFormInputHints();
			// Events binding
			this.eventBinding(ww.forms.fieldset);
			// on blur of inputs, select and textarea
			this.viewportResetOnBlur();
			// resize on radio button change
			this.resetHightOnRadioChange();
		},

		// Add dictionary item values
		addDictionaryItems: function (fieldset, count) {
			// update the amount of fieldsets
			ww.forms.totalAmount = ww.forms.fieldset.length;
			// add new legend
			fieldset.find('legend').append(' - ' + ww.forms.step + ' ' + count + ' ' + ww.forms.of + ' ' + ww.forms.totalAmount);
			// add nav buttons
			fieldset.append('<div class="btn-prev">' + ww.forms.btnPrevText + '</div>');
			fieldset.append('<div class="btn-next">' + ww.forms.btnNextText + '</div>');
			// each fieldset has a wrapping div - we need to add a class to this to target
			fieldset.parent().addClass('form-section');
			ww.forms.$formSection = $('.form-section');
		},


		// ------------------------------
		// Functionality
		// ------------------------------
		// Init form fieldsets
		initFormControler: function () {
			if (ww.forms.fieldset.length) {
				// update the form width
				ww.forms.formSectionWidth = ww.forms.$formSection.outerWidth();
				// set width
				ww.forms.$formSection.css('width', ww.forms.formSectionWidth);
				// set the wrapper div to the width of all the
				ww.forms.$formSection.parent().addClass('form-section-wrapper');
				ww.forms.$formSectionWrapper = $('.form-section-wrapper');
				ww.forms.$formSectionWrapper.css('width', ww.forms.formSectionWidth * ww.forms.totalAmount);
				// add active class to first on load
				ww.forms.$formSection.first().addClass('active');
				// set height
				ww.forms.setFormHeight();
				// Bind tab index vals to form fields
				ww.forms.tabIndexing();
				// Add index values to form fields
				ww.forms.indexFormFields();
				// Disable all fieldset input elements
				ww.forms.disableFieldsetInputs(ww.forms.$formSection);
				// Enable fieldset elements on the active field set
				ww.forms.toggleFieldsetInputs($(".form-section.active"), true);

				// Adjust field sets when window is resized
				$(window).on('resize', function () {
					// form section outter width
					ww.forms.formSectionWidth = $('.scfForm').width();
					// set width
					ww.forms.$formSection.css('width', ww.forms.formSectionWidth);
					// Update width of any hidden "hint" fields
					//$(".helpOverlay").css('width', ww.forms.formSectionWidth);
					// set the wrapper div to the width of all the
					ww.forms.$formSectionWrapper.css('width', ww.forms.formSectionWidth * ww.forms.totalAmount);

					// check which form-section is active
					var amountPrev = $('.form-section.active').prevAll().length,
							newPosition = amountPrev * ww.forms.formSectionWidth * -1;
					ww.forms.$formSectionWrapper.css('left', newPosition);
					console.log(newPosition);

					// set the wrapper div to the height of the active fieldset
					ww.forms.setFormHeight();

				});

				ww.forms.tabIndexing();
				ww.forms.indexFormFields();

				// Disable Next / Submit btn
				// --
				ww.forms.fieldset.each(function () {
					var $fieldset = $(this);

					// if there are required fields dispable the btn
					if ($fieldset.find('input.required, select.required, textarea.required').length) {
						$fieldset.find('.btn-next, .btn-prev, .btn-submit').addClass('disabled');
					}

					// find each input which is required
					$fieldset.find('input.required, select.required, textarea.required').each(function () {
						ww.forms.checkIfValid($(this), $fieldset);
						// on exit of each input required
						$(this).on("blur click", function () {
							ww.forms.checkIfValid($(this), $fieldset);
						});
						$(this).keydown(function () {
							ww.forms.checkIfValid($(this), $fieldset);
						});
					});

				});
			}
		},

		// NEXT / PREV Section
		formSectionTransition: function (goto) {
			// if next or prev
			var formSectionHeight,
          currentField;
			if (goto === 'next') {
				// store the current active field set
				currentField = ww.forms.$formSection.parent().find(".form-section.active");
				// remove active class from all form sections 
				ww.forms.$formSection.removeClass('active');
				// add plus form width to the right aka next
				ww.forms.$formSectionWrapper.css('left', '-=' + ww.forms.formSectionWidth);
				//ww.forms.$formSectionWrapper.animate({
				//	left: '-=' + ww.forms.formSectionWidth
				//}, 300);
				// set active class on next form section
				currentField.next().addClass('active');
				// Disable all inputs on the page
				ww.forms.disableFieldsetInputs(ww.forms.$formSection);
				// Enable the target fieldsets input fields
				ww.forms.toggleFieldsetInputs($(".form-section.active"), true);
				// Target first input element
				$('.form-section.active').find('input, textarea, select').first().focus();
				// set the wrapper to the height of the next fieldset
				formSectionHeight = currentField.next().outerHeight();
			} else if (goto === 'prev') {
				// store the current active field set
				currentField = ww.forms.$formSection.parent().find(".form-section.active");
				// Disable the current fieldsets input elements
				ww.forms.disableFieldsetInputs(currentField, false);
				// remove active class from all form sections 
				ww.forms.$formSection.removeClass('active');
				// add plus form width to the left aka prev
				ww.forms.$formSectionWrapper.css('left', '+=' + ww.forms.formSectionWidth);
				//ww.forms.$formSectionWrapper.animate({
				//	left: '+=' + ww.forms.formSectionWidth
				//}, 300);
				// set active class on prev form section
				currentField.prev().addClass('active');
				// Enable input elements on the previous field set
				ww.forms.toggleFieldsetInputs($(".form-section.active"), true);
				// set the wrapper to the height of the prev fieldset
				formSectionHeight = currentField.prev().outerHeight();
			}
			// set height
			ww.forms.$formSectionWrapper.css('height', formSectionHeight);
		},

		// Configure buttons for each fieldset
		configureMobileFormButtons: function (fieldset) {
			// Remove the unrequired prev/next btn
			fieldset.first().find('.btn-prev').remove();
			fieldset.last().find('.btn-next').remove();
			// For the last fieldset add submit btn
			fieldset.last().append($('.scfForm .scfSubmitButtonBorder .scfSubmitButton'));
			$('.scfForm .scfSubmitButton ').addClass('btn-submit');
		},

		// on next/prev section if not at top go to top
		gotoFormSection: function (goto) {
			// remove lightbox help
			$('.cboxElement').removeClass('cboxElement');
			if (!ww.forms.fieldsetAtTop) {
				setTimeout(function () {
					ww.forms.formSectionTransition(goto);
				}, ww.forms.transitionTime);
			} else {
				ww.forms.formSectionTransition(goto);
			}
		},

		// Bind progress messages to each form field set
		initProgressHints: function (el) {
			// Store the progress message and add it to each field set
			$(el).each(function () {
				$(this).prepend("<span class='progress-message'>" + ww.forms.fieldsetValidationWarning + "</div>");
			});
		},

		// Binds events to any help "?" symbols on form labels
		initFormInputHints: function () {
			// remove lightbox help
			$('.cboxElement').removeClass('cboxElement');

			$(".info-overlay").on("click", function (e) {
				// store the hint text
				var targetedHint = $(this).next(".overlay-block");
				// Store the content within the hint field
				var hintContent = targetedHint.find(".helpOverlay");
				// Update the width of the help field to match the form
				hintContent.css('width', '100%');
				// Show hint
				hintContent.children().show(function () {
					hintContent.css('height', 'auto');
				});
				hintContent.addClass("active");
				ww.forms.setFormHeight();
				e.preventDefault();
			});

			// Hint Close
			// --
			// Closes the selected hint
			$(".close-overlay").on("click", function () {
				$(this).parent().removeClass("active").css('height', '0');
				$(this).parent().css('width', '0');
				ww.forms.setFormHeight();
			});
		},

		initFormFieldSets: function (el) {
			if (el.length) {
				// Add "*" symbols and bind validation classes for required fields
				ww.forms.initRequiredFields();

				// Loop through each fieldset
				el.each(function (i) {
					// Update each fieldsets labels with dictionary items
					ww.forms.addDictionaryItems($(this), i + 1);
				});

				// Configure buttons for each fieldset
				ww.forms.configureMobileFormButtons(el);
			}
		},

		// Automated scroll to validation messages
		validationMessageScroll: function () {
			// if there is a validation message then scroll to it on load
			if ($('.scfValidationSummary').length) {
				$('html, body').animate({
					scrollTop: $('.scfValidationSummary').offset().top - ww.forms.offsetFromTop
				}, ww.forms.transitionTime);
			}
			// if there is a submit summary then scroll to it on submission
			var $submitSummary = $('.scfSubmitSummary');
			// trim whitespace
			$submitSummary.html($.trim($submitSummary.html()));
			if ($submitSummary.length) {
				if ($submitSummary.is(':empty')) {
					$(this).remove();
				} else {
					$('html, body').animate({
						scrollTop: $submitSummary.offset().top - ww.forms.offsetFromTop
					}, ww.forms.transitionTime);
				}
			}
		},

		// reset viewport zoom on blur
		viewportResetOnBlur: function () {
			$('input, select, textarea').on('focusout', function () {
				setTimeout(function () {
					if (!$('input, select, textarea').is(":focus")) {
						ww.viewport.reset();
					}
				}, 25);
			});
		},

		// resize on radio button change
		resetHightOnRadioChange: function () {
			$('input, select, textarea').on('change, focus, click', function () {
				ww.forms.setFormHeight();
			});
		},


		// ------------------------------
		// Event binding 
		// ------------------------------
		eventBinding: function (el) {
			// on click of next slide next
			$('.btn-next').on('click', function (e) {
				if ($(this).hasClass("disabled")) {
					ww.forms.animateScroll(el);
					// Fire validation function here
					$(this).siblings(".progress-message").show();
					ww.forms.setFormHeight();
				} else {
					$(this).siblings(".progress-message").hide();
					ww.forms.setFormHeight();
					ww.forms.animateScroll(el);
					ww.forms.gotoFormSection('next');
					e.preventDefault();
				}
			});

			// on click of next slide prev
			$('.btn-prev').on('click', function () {
				ww.forms.gotoFormSection('prev');
				ww.forms.animateScroll(el);
			});

			// on click of custom submit button
			// TODO
			$('.btn-submit').on('click', function (e) {
				if ($(this).hasClass("disabled")) {
					e.preventDefault();
					$(".progress-message").show(300, function () {
						ww.forms.setFormHeight();
					});
					return false;
				} else {
					ww.forms.toggleFieldsetInputs($('.scfForm'), true);
				}
			});

			// Enter button
			// --
			// TODO: only allow enter once all required fields are complete, same with next/submit button
			// form section - find active 
			// if btn is disabled then do nothing else....
			// find input, textarea, select
			// run follow
			ww.forms.$formSection.find('input, textarea, select').on("keydown", function (e) {
				// if not on the last fieldset
				if (e.keyCode === 13) {
					e.preventDefault();
					//debugger
					if ($(this).closest(".form-section.active").is(':last-child')) {
						ww.forms.toggleFieldsetInputs($(".form-section"), true);
						$('input[type=submit]').trigger('click');
					} else {
						e.preventDefault();
						var nextBtn = $(this).closest(".form-section.active").find(".btn-next");
						nextBtn.trigger('click');
					}
				}
			});
		},


		// ------------------------------
		// TOOLS 
		// ------------------------------
		// check if truely visible
		isTruleVisible: function (el) {
			return !($(el).is(':hidden') || $(el).parents(':hidden').length);
		},

		// make it tabable
		tabIndexing: function () {
			var tabindex = 1;
			$('input, textarea, select').each(function () {
				if (this.type !== "hidden") {
					var $input = $(this);
					$input.attr("tabindex", tabindex);
					tabindex++;
				}
			});
		},

		// animate scroll
		animateScroll: function (el) {
			if (el.offset().top - $(window).scrollTop() - ww.forms.offsetFromTop < 0) {
				ww.forms.fieldsetAtTop = false;
				$('html, body').animate({
					scrollTop: $('.form-section.active').offset().top - ww.forms.offsetFromTop
				}, ww.forms.transitionTime, function () {
					// animation complete
					ww.forms.fieldsetAtTop = true;
				});
			} else {
				ww.forms.fieldsetAtTop = true;
			}
		},

		// Index each input field within each fieldset
		indexFormFields: function () {
			// For each fieldset...
			ww.forms.$formSection.each(function () {
				// Zero the index
				var inputIndex = 0;
				// Located every input within the fieldset
				$(this).find('input, textarea, select').each(function (i) {
					// Check if element is actually visible
					if (ww.forms.isTruleVisible(this)) {
						// Add an index value
						$(this).addClass('input-' + i);
						// Increase our index
						inputIndex++;
					}
				});
			});
		},

		// check if el is valid
		checkIfValid: function (el, fieldset) {
			// check if is has a value after removing whitespace
			var empty = $.trim(el.val()).length === 0;

			// if it is empty
			if (empty) {
				el.addClass('invalid');
			} else {
				el.removeClass('invalid');
			}

			// call checker function to check all inputs
			ww.forms.checkAllAreCompleted(fieldset);
			ww.forms.setFormHeight();
		},

		// see if any have the class invalid
		checkAllAreCompleted: function (fieldset) {
			var areInvalid = fieldset.find('input.required, select.required, textarea.required').hasClass('invalid');

			// there are invalid inputs
			if (areInvalid) {
				// disable btns
				fieldset.find('.btn-next, .btn-prev, .btn-submit').addClass('disabled');
			} else {
				// if there are no validation messages
				if (fieldset.find('.scfValidator:visible').length === 0) {
					fieldset.find('.btn-next, .btn-prev, .btn-submit').removeClass('disabled');
				} else {
					fieldset.find('.btn-next, .btn-prev, .btn-submit').addClass('disabled');
				}
			}
		},

		// Enable/Disable target fieldset input elements
		toggleFieldsetInputs: function ($targetFieldset, toggle) {
			if (toggle === true) {
				$targetFieldset.find('input, textarea, select, a').prop('disabled', false);
			} else if (toggle === false) {
				$targetFieldset.find('input, textarea, select, a').prop('disabled', true);
			}
		},

		// Disable all fieldset inputs
		disableFieldsetInputs: function (fieldset) {
			fieldset.find('input, textarea, select, a').prop('disabled', true);
		},

		// Set Form Height
		// -- 
		// Measure height and update fieldset wrapper
		setFormHeight: function () {
			var $formWrapper = $('.form-section-wrapper');
			var $activeForm = $('.form-section.active');
			// set the wrapper div to the height of the active fieldset
			var formSectionHeight = $activeForm.outerHeight();
			// set height
			$formWrapper.css('height', formSectionHeight);
		},

		// Add "*" symbols and bind validation classes
		initRequiredFields: function () {
			// Add * for any required fields
			$('.scfRequired, .scfValidatorRequired').each(function () {
				$(this).parent().find('label').append('<span class="required">*</span>');
				// add class to the requre inputs to target later
				$(this).parent().find('input, select, textarea').each(function () {
					if (ww.forms.isTruleVisible($(this))) {
						$(this).addClass('required').addClass('invalid');
					}
				});
			});
		}
	};
})(jQuery);
///#source 1 1 /scripts/WelshWater/Components/in-your-area.js
var ww = ww || {};

(function ($) {
	ww.inYourArea = {
		containerClass: '.resp-tab-accord',
		clickTrigger: '.title',
		contentClass: '.content-wrap',
		openClass: 'js-open',
		closedClass: 'js-closed',
		hiddenContent: '.hidden-content',
		bodyClass: $('body').attr('class'),
		idPrefix: 'cid',
		tabLoadCompleted: 'undefined',
		setIntervalTime: 500,
		postcodeSection: '.postcode-lookup',
		postcodeSectionError: '.postcode-lookup .error',
		autoPostcodeAdded: 'undefined',
		noMap: '.GetWaterQuality',
		postcodeLat: 'undefined',
		postcodeLng: 'undefined',
		searchZoomLevel: 'undefined',
		maxRecordsAllowed: 'undefined',
		dictionaryItemsLoaded: 'undefined',
		invalidPostcodeDictionary: '',
		googleLoadErrorDictionary: '',
		latestUpdatesDictionary: '',
		moreInfoDictionary: '',
		loadingDictionary: '',
		noRecordsDictionary: '',
		startDictionary: '',
		endDictionary: '',
		closeDictionary: '',
		currentSearch: '',
		currentFilter: undefined,
		ganalyticsCallback: 'undefined',
		prePopulatedLocation: ww.cookie.value('UserAddress'),
		prePopulatedInput: true,
		emergencyOpen: false,
		exsistingBounds: undefined,

		init: function () {
			
			// add class to page header to style just for IYA
			$('.page_hd').addClass('IYA');

			// hide extra content
			// convert to array
			var nomap = ww.inYourArea.noMap.replace(/\s/g, '').split(',');
			// look through array and hide
			$.each(nomap, function () {
				var content = this + '-content';
				$(content).each(function () {
					if ($(this).length > 0) {
						$(this).hide();
					}
				});
			});

			
			// user prepopulated location 
			if (this.prePopulatedLocation !== false && $.trim($(this.postcodeSection).find('input.postcode').val()).length === 0) {
				// if its used TC cookie setter it may have multiple locations, get the last
				var locationArray = this.prePopulatedLocation.split('&'),
						location = locationArray[locationArray.length - 1];

				ww.inYourArea.prePopulatedInput = false;

				// update the cookie with user location to correctly match
								ww.cookie.update('UserAddress', location, 28);
				// update input
				$(this.postcodeSection).find('input.postcode').val(location);
			}

			// get dictionary items
			this.dictionaryItems();
			// move promo panel if on mobile
			this.promoPanelMoveOnMobile();

		},
		
		// This section will not work unless gmap API has been loaded successfully
		gmapDependant: function () {
						// if there is already content in the postcode entry then run the update as it accounts for towns too
			if ($(this.postcodeSection).find('input.postcode').val().length > 0) {
								this.updateFromSearch();
			} else {
				this.postcodeLookup();
			}
			this.createMap();
			this.searchButtonSubmit();
		},

		dictionaryItems: function () {
			$.ajax({
				cache: false,
				url: '/api/InYourArea/GetLabels',
				dataType: "json",
				success: function (data) {
					ww.inYourArea.latestUpdatesDictionary = data.LatestUpdates;
					ww.inYourArea.moreInfoDictionary = data.MoreInfomation;
					ww.inYourArea.closeDictionary = data.Close;
					ww.inYourArea.startDictionary = data.Start;
					ww.inYourArea.endDictionary = data.End;
					ww.inYourArea.noRecordsDictionary = data.NoRecords;
					ww.inYourArea.googleLoadErrorDictionary = data.GoogleMapsError;
					ww.inYourArea.loadingDictionary = data.Loading;
					ww.inYourArea.invalidPostcodeDictionary = data.InvalidPostcode;
					// load next section of code now all dictionary items are lookedup
					ww.inYourArea.createTabs();
				}
			});
		},

		getEmergencyID: function (variable) {
			var query = window.location.search.substring(1);
			var vars = query.split("&");
			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split("=");
				if (pair[0] == variable) {
					return pair[1];
				}
			}
			return (false);
		},

		// TODO:	loading symbol while google maps is loading

		convertForString: function (str) {
			var text = str.replace(/\w\S*/g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			});
			return 'Get' + text.replace(/ /g, '').replace(/-/g, '');
		},

		createTabs: function () {
			$.ajax({
				cache: false,
				url: '/api/InYourArea/GetTabs',
				dataType: "json",
				success: function (data) {
					var tabs = [];
					var content = [];
					$.each(data, function (i) {
						// create tabs html avr

						var hashVal = data[i].Name.replace(' ', '');
						var displayName = ww.inYourArea.convertForString(data[i].DisplayName);

						var tmpTabsHtml = '<li id="tab-btn-' + data[i].Id + '">';
						tmpTabsHtml += '<a class="' + displayName + '" href="#' + hashVal + '" data-link="' + data[i].Url + '">' + data[i].DisplayName;
						tmpTabsHtml += '<img src=' + encodeURI(data[i].IconUrl) + ' alt=' + data[i].DisplayName + '/>';
						tmpTabsHtml += '</a></li>';

						var tmpContentHtml = '<div class="content ' + displayName + '" id="' + hashVal + '">';
						tmpContentHtml += '<h2 class="title" data-hash="#' + hashVal + '">';
						tmpContentHtml += '<img src=' + encodeURI(data[i].IconUrl) + ' alt=' + data[i].DisplayName + '/>';
						tmpContentHtml += data[i].DisplayName + '</h2>';
						tmpContentHtml += '<div class="content-inner">';
						tmpContentHtml += '<div class="map" id="map" />';
						tmpContentHtml += '<div class="more-info">';
						tmpContentHtml += '<div class="loading-overlay">' + ww.inYourArea.loadingDictionary + '</div>'
						tmpContentHtml += '<h3>' + ww.inYourArea.latestUpdatesDictionary + '</h3>';
						tmpContentHtml += '<div class="latest-news">';
						tmpContentHtml += '<span class="loading">' + ww.inYourArea.loadingDictionary + '</span>';
						tmpContentHtml += '</div></div></div></div>';

						// push item array to page
						tabs.push(tmpTabsHtml);
						content.push(tmpContentHtml);
					});

					// add html to the page
					// tabs
					$('<ul />', {
						html: tabs.join('')
					}).addClass('tab-btns').prependTo(ww.inYourArea.containerClass);
					// content
					$(content.join('')).appendTo(ww.inYourArea.containerClass);
					$(ww.inYourArea.containerClass).find('.content').wrapAll('<div class="tab-content-wrap"/>');
					// remove map and sidebar from noMap tabs
					// convert to array
					var nomap = ww.inYourArea.noMap.replace(/\s/g, '').split(',');
					// look through array
					$.each(nomap, function () {
						var el = 'div' + this;
						$(ww.inYourArea.containerClass).find(el).find('.map, .more-info').remove();
						// if there is content to be added then move it
						ww.inYourArea.moveNoMapTabContent(el);
					});
					// tab load completed - run tab navigation setup
					ww.inYourArea.navigateTabs();
					// load google maps
					ww.loadGoogleScript.init('ww.inYourArea.gmapDependant');
					// load building and navigation of water qautiy section
					ww.inYourArea.waterQualityTabs();
				},
				error: function () {
					$(ww.inYourArea.containerClass).find('.load-error').remove();
					$(ww.inYourArea.containerClass).append('<h2 class="load-error">' + ww.inYourArea.googleLoadErrorDictionary + '</h2>');
				}
			});
		},

		navigateTabs: function () {
			$(ww.inYourArea.containerClass).each(function () {
				// var
				var $tabAccord = $(this),
						active = 'js-active';

				// make the first tab active by default
				$tabAccord.find('ul.tab-btns li:first-child').addClass(active);
				$tabAccord.find('.content').first().addClass(active);

				// check the URL to see if it contain hash
				if (window.location.hash) {
					// vars
					var tabToOpen = window.location.hash,
							tabsLength = $tabAccord.find('ul.tab-btns li').length - 1,
							href,
							tabExsists;


					// get each tab
					$tabAccord.find('ul.tab-btns li').each(function (i) {
						// get the href of the tab
						href = $(this).find('a').attr('href');
						// if it the same as the hash
						if (tabToOpen === href) {
							// say yes it does exsist
							tabExsists = true;
						}


						// once each has completed and if the has exsists
						if (i === tabsLength && tabExsists === true) {
							if ($tabAccord.find('ul:first-of-type li a[href="' + tabToOpen + '"]').attr('class') === 'GetWaterQuality') {
								var wqHash = $('.tab-btns a.GetWaterQuality').data('link');
								window.location.href = wqHash;
							} else {
								// remove the active class of all btns
								$tabAccord.find('ul:first-of-type li').removeClass(active);
								// add class to correct btn
								$tabAccord.find('ul:first-of-type li a[href="' + tabToOpen + '"]').parent().addClass(active);
								// remove active class of all content
								$tabAccord.find('.content').removeClass(active);
								// add active class to correct content
								$tabAccord.find('.content' + tabToOpen).addClass(active);
							}
						}
					});
				}

				// click to navigate
				$tabAccord.find('ul.tab-btns li a').on('click', function (e) {
					// prevent default
					e.preventDefault();
					// get the target href
					var tabToOpen = $(this).attr('href');
					// remove the active class of all btns
					$tabAccord.find('ul.tab-btns li').removeClass(active);
					// add class to correct btn
					if ($(this).attr('class') === 'GetWaterQuality') {
						var wqHash = $('.tab-btns a.GetWaterQuality').data('link');
						window.location.href = wqHash;
					} else {
						$(this).parent().addClass(active);
						// remove active class of all content
						$tabAccord.find('.content').removeClass(active);
						// add active class to correct content
						$tabAccord.find('.content' + tabToOpen).addClass(active);
						// adjust height of wrapper to the content
						if (!$('body').hasClass('mobile')) {
							var height = $('.tab-content-wrap .content.js-active').outerHeight(true);
							$('.tab-content-wrap').height(height);
						}
					}
					// update the hash
					if (history.pushState) {
						history.pushState(null, null, tabToOpen);
					}
					else {
						location.hash = tabToOpen;
					}
				});
				// click to navigate mobile
				$tabAccord.find('.title').each(function () {
					$(this).on('click', function (e) {
						e.preventDefault();
						
						if ($(this).parent().attr('class').replace('content ', '').replace(' js-active', '') === 'GetWaterQuality') {
							var wqHash = $('.tab-btns a.GetWaterQuality').data('link');
							window.location.href = wqHash;
						} else {
							var $this = $(this),
									tabToOpen = $this.data('hash');
							if (!$this.next('.content-inner').hasClass(active)) {
								$('.title.' + active).removeClass(active);
								$this.addClass(active);
								$('.content-inner.' + active).removeClass(active).slideUp();
								$this.next('.content-inner').addClass(active).slideDown(function () {
									$('html, body').animate({
										scrollTop: $this.offset().top - 5
									}, 300);
								});
							} else {
								$this.removeClass(active);
								$this.next('.content-inner').removeClass(active).slideUp();
							}
						}
						// update the hash
						if (history.pushState) {
							history.pushState(null, null, tabToOpen);
						}
						else {
							location.hash = tabToOpen;
						}
					});
				});
				if ($.trim($tabAccord.find('.title').first().parent().find('.latest-news').text().replace(ww.inYourArea.loadingDictionary, '')).length > 0) {
					$tabAccord.find('.title').first().addClass(active).next('.content-inner').addClass(active).slideDown();
				}
			});
		},

		waterQualityTabs: function () {
			var active = 'js-wq-active',
					$wq = $('.waterQualityLeftColumn'),
					$tabPanels = $('.waterQualityLeftColumn > div'),
					scaleColum = [];
			
			$tabPanels.first().addClass(active);

			var tabBtns = [],
					amountOfTabs = $('.waterQualityLeftColumn > div').length;

			$tabPanels.each(function (i) {
				if ($.trim($(this).text()).length === 0) {
					$(this).remove();
				} else {
					var rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
					var title = $.trim($(this).find('.wq-tab-title').text());
					$(this).addClass('js-wq-tab-' + i);

					var tabBtnHTML = '<li><a href="#js-wq-tab-' + i + '">' + title + '</a></li>'

					tabBtns.push(tabBtnHTML);
				}

				if (i + 1 === amountOfTabs) {
					$('<ul />', {
						html: tabBtns.join('')
					}).addClass('wq-tab-btns').prependTo('.GetWaterQuality-content');

					$('.wq-tab-btns a').each(function () {
						$(this).on('click', function () {
							var tabToOpen = $(this).attr('href').replace('#', '');
							// remove openned tab
							$('.wq-tab-btns li').removeClass(active);
							$tabPanels.removeClass(active);
							// open correct tab
							$(this).parent().addClass(active);
							$wq.find('.' + tabToOpen).addClass(active);
							// adjust height of wrapper to the content
							if (!$('body').hasClass('mobile')) {
								var height = $('.tab-content-wrap .content.js-active').outerHeight(true);
								$('.tab-content-wrap').height(height);
							}
						});
					});

					$('.wq-tab-btns a').first().trigger('click');

					if ($('body').hasClass('mobile')) {
						$('.wq-tab-title').each(function () {
							$(this).on('click', function () {
								var $this = $(this);
								if (!$this.next('.mobile-accordion').hasClass('js-wq-active')) {
									$('.wq-tab-title').removeClass('js-wq-active');
									$('.mobile-accordion').removeClass('js-wq-active').slideUp();;
									$this.addClass('js-wq-active');
									$this.next('.mobile-accordion').addClass('js-wq-active').slideDown(function () {
										$('html, body').animate({
											scrollTop: $this.offset().top - 5
										}, 300);
									});
								} else {
									$this.next('.mobile-accordion').removeClass('js-wq-active').slideUp();
									$this.removeClass('js-wq-active');
								}
							});
						});

						$('.wq-tab-title').first().trigger('click');
					}
				}
			});

			var scaleRows = $('.waterHardnessScalesLeftColumn div').length;
			// hack to get the table markup correct from TC code
			$('.waterHardnessScalesLeftColumn div').each(function (i) {
				scaleColum.push($.trim($(this).text()));
				if (i + 1 === scaleRows) {
					$('<th class="scale">' + scaleColum[0] + '</th>').prependTo('.waterHardnessScalesTable thead tr');
					$('.waterHardnessScalesTable tbody tr').each(function (i) {
						$('<td class="scale">' + scaleColum[i + 1] + '</td>').prependTo($(this));
					});
				}
			});
		},

		moveNoMapTabContent: function (el) {
			var content = el + '-content';
			$(content).each(function () {
				if ($(this).length > 0) {
					$(this).prependTo($(el).find('.content-inner'));
					$(el).find('.content-inner').addClass('content-avalible');
					$(this).show();
				}
			});

			this.waterQualityTableHack();
		},

		waterQualityTableHack: function() {
			if ($('.waterHardnessScalesContainer').length > 0 && $('body').hasClass('mobile')) {
				$('.waterHardnessScalesContainer').clone().insertAfter('.waterHardnessScalesContainer');
				$('.waterHardnessScalesContainer').first().find('tr').each(function () {
					$(this).find('th, td').slice(2, 5).remove();
				});
				$('.waterHardnessScalesContainer').last().find('tr').each(function () {
					$(this).find('th, td').slice(0, 3).remove();
				});
			}
		},

		categoriesFilter: function ($this) {
			var $categories = $this.find('.categories-list');
			var $sidebar = $this.find('.sidebar-list');
			var filters = [];

			$categories.find('li input[type=checkbox]').each(function () {
				$(this).change(function () {
					$categories.addClass('loading');
					$categories.parent().find('.more-info').addClass('loading');
					filters = [];
					$categories.find('li input[type=checkbox]:checked').each(function () {
						filters.push($(this).val());
					});
					ww.inYourArea.updateFromSearch(filters, true);
					ww.inYourArea.currentFilter = filters;
				});
			});
		},

		postcodeLookup: function () {
			// show postcode error text
			$(ww.inYourArea.postcodeSectionError).empty();
			$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);

			// keep checking for geolocation
			var checkForGeolocation;
			checkForGeolocation = setInterval(checkForAutoPostcode, ww.inYourArea.setIntervalTime);

			// Bind GA tracking class
			$(ww.inYourArea.postcodeSection).addClass("js-ga-track");

			// check if geolocation has been aquired or declined
			function checkForAutoPostcode() {
				// has been aquired
				if (ww.getCoordinate.aquired === true) {
					// stop checking
					clearInterval(checkForGeolocation);
					// remove postcode error
					$(ww.inYourArea.postcodeSectionError).empty();

					// convert lat long into postcode and if there is already a value in the text input then use that value (the true)
					ww.inYourArea.latLongToValidPostcode(ww.getCoordinate.lat, ww.getCoordinate.long, true,
						// once postcode has been returned
						function (postcode) {
							// if there is a postcode returned
							if (postcode.length > 0) {
								// add it to the input
																$(ww.inYourArea.postcodeSection).find('input.postcode').val(postcode);
								// say there has been a postcode added
								ww.inYourArea.updateFromSearch();
							} else {
								// 
								$(ww.inYourArea.postcodeSectionError).empty();
								$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);
							}
						}
					);
				} else if (ww.getCoordinate.aquired === false) {
					console.log('cords failed');
					clearInterval(checkForGeolocation);
					$(ww.inYourArea.postcodeSectionError).empty();
					$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);
					
					$(ww.inYourArea.containerClass).find('.latest-news .loading').remove();
				}
			}

			// validate postcode while typing
			$(ww.inYourArea.postcodeSection).find('input.postcode').on('input', function () {
				if (ww.validPostcode.init($(this).val())) {
					$(ww.inYourArea.postcodeSectionError).empty();
				} else {
					$(ww.inYourArea.postcodeSectionError).empty();
					$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);
				}
			});
		},

		createMap: function () {
			// now the markup is avalible continue
			$.ajax({
				cache: false,
				url: '/api/InYourArea/GetMapSettings',
				dataType: "json",
				success: function (data) {

					// setting vars
					var initLat = data.InitialLatitude,
							initLong = data.InitialLongitude,
							initZoom = parseInt(data.InitialZoomLevel);
					ww.inYourArea.searchZoomLevel = parseInt(data.SearchZoomLevel);
					ww.inYourArea.maxRecordsAllowed = parseInt(data.MaxArticles);
					// varible for gmap
					gmap = $('.map');

					// check if there is a gmap on the page beofr firing the full function
					if (gmap.length > 0) {

						// for each of the gmaps
						gmap.each(function (i) {
							// add index ID attr
							var gmapID = 'map-' + i;
							$(this).attr('id', gmapID);
							ww.inYourArea.initializeMap(gmapID, initLat, initLong, initZoom);
							$(ww.inYourArea.postcodeSectionError).empty();
							$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);
						});

					}
				},
				error: function () {
					$(ww.inYourArea.containerClass).find('.load-error').remove();
					$(ww.inYourArea.containerClass).append('<h2 class="load-error">' + ww.inYourArea.googleLoadErrorDictionary + '</h2>');
				}
			});
		},

		initializeMap: function (gmapID, lat, lng, zoom) {
			var whichLat,
      		whichLng,
      		whichZoom,
        	postcodeLookUp;
			if (ww.inYourArea.postcodeLat !== 'undefined' && ww.inYourArea.postcodeLng !== 'undefined') {
				whichLat = ww.inYourArea.postcodeLat;
				whichLng = ww.inYourArea.postcodeLng;
				whichZoom = ww.inYourArea.searchZoomLevel;
				postcodeLookUp = true;
			} else {
				whichLat = lat;
				whichLng = lng;
				whichZoom = zoom;
				postcodeLookUp = false;
			}

			var map,
					myLatLng = new google.maps.LatLng(whichLat, whichLng);

			mapOptions = {
				zoom: whichZoom,
				center: myLatLng
			};

			map = new google.maps.Map(document.getElementById(gmapID), // target index
					mapOptions);

			if (postcodeLookUp === true) {
				ww.inYourArea.addMarkMap(map, myLatLng);
			}

			// add class so we know its been init
			$('#' + gmapID).addClass('mapInit');

		},

		addMarkMap: function (map, myLatLng) {
			marker = new google.maps.Marker({
				map: map,
				draggable: false,
				position: myLatLng
			});
		},

		placePinsOnMap: function (gmapID, data, ifBeingFilter) {
			var bounds = new google.maps.LatLngBounds();
			var map = new google.maps.Map(document.getElementById(gmapID));
			if (ifBeingFilter !== true) {
				var mapAnimation = google.maps.Animation.DROP;
			}
			var infowindow = new google.maps.InfoWindow();
			var markers = [];

			$.each(data, function (i) {
				var latlng = new google.maps.LatLng(this.lat, this.lng),
						pinTitle = this.title,
						pin = this.icon,
						popup = true;

				bounds.extend(latlng);
					

				if (this.index === 'home') {
					popup = false;
				}

				marker = new google.maps.Marker({
					id: this.index,
					position: latlng,
					map: map,
					icon: pin,
					animation: mapAnimation,
					title: pinTitle,
					filter: this.filter,
					clickable: popup
				});


				var shortText;
				if (this.shortText !== undefined) {
					shortText = this.shortText;
				}
				var windowContent = '<div class="map-popup">';
				windowContent += '<h2><a class="more-info-window ' + this.index + '" data-lat="' + this.lat + '" data-lng="' + this.lng + '" href="#">' + this.title + '</a></h2>';
				if (this.showDates === true) {
					if (this.startDate !== null) {
						windowContent += '<p class="date-time"><span>' + ww.inYourArea.startDictionary + ': </span>' + this.startTime + ' ' + this.startDate + '</p>';
					}
					if (this.endDate !== null) {
						windowContent += '<p class="date-time"><span>' + ww.inYourArea.endDictionary + ': </span>' + this.endTime + ' ' + this.endDate + '</p>';
					}
				}
				windowContent += shortText;
				windowContent += '<a class="more-info-window ' + this.index + '" data-lat="' + this.lat + '" data-lng="' + this.lng + '" href="#">' + ww.inYourArea.moreInfoDictionary + '</a>';
				windowContent += '</div>';

				// close info window if clicked on map
				google.maps.event.addListener(map, 'click', function () {
					infowindow.close();
				});

				// open info window on marker click
				google.maps.event.addListener(marker, 'click', (function (marker, i) {
					return function () {
						infowindow.close();
						infowindow = new google.maps.InfoWindow({
							content: windowContent,
							maxWidth: 250
						});
						infowindow.open(map, marker);
						map.panTo(latlng);
						$('.map').on('click', 'a.more-info-window', function (e) {
							e.preventDefault();

							// get the target and current map center
							var infoPanel = $(this).attr('class').replace('more-info-window ', ''),
									currCenter = map.getCenter(),
									lat = $(this).data('lat'),
									lng = $(this).data('lng'),
									latlng = new google.maps.LatLng(lat, lng),
									latlngSidebar = new google.maps.LatLng(lat, lng + 0.36);

							// check if its already in the right place if not move it
							if (currCenter !== latlng) {
								map.panTo(latlng);
							}

							// open correct more info content
							// TODO: if already open then animate close and open
							$('.more-info-wrapper .' + infoPanel).parent().addClass('open').find('.open').removeClass('open');
							$('.more-info-wrapper .' + infoPanel).addClass('open');
							
							// make map smaller to fit area
							if (!$('.js-active').find('.map').hasClass('open')) {
								var currCenter = map.getCenter();
								$('.js-active').find('.map').addClass('open');
								setTimeout(function () {
									// recenter map
									map.panTo(currCenter);
								}, 400);
							}
						});
						
						// on close of map 
						$('.js-active .close').on('click', function () {
							var currCenter = map.getCenter();
							$('.js-active .map').removeClass('open');
							google.maps.event.trigger(map, 'resize');
							map.panTo(currCenter);
						});
					};
				})(marker, i));

				markers.push(marker);

			});
			// Adjust map boundaries to fit pins in view 
			map.fitBounds(bounds);
			
			// if not mobile
			if (!$('body').hasClass('mobile')) {
				// allow selection of pins from sidebar
				$('.sidebar-list a').on('click', function (e) {
					e.preventDefault();
					var target = $(this).attr('class');
					$.each(markers, function () {
						if(this.id === target) {
							google.maps.event.trigger(this, 'click');
						}
					});
				});
			}
		},
		
		updateFromSearch: function (filter, ifBeingFilter) {
			
			$('input').blur();

			// vars
			var postcodeInput = $(ww.inYourArea.postcodeSection).find('input.postcode'),
					enteredSearch = postcodeInput.val();

			// check its not the same as the current enteredSearch
			if (ww.inYourArea.currentSearch !== enteredSearch || ww.inYourArea.currentFilter !== filter) {
				// take the entered location and turn it into the a lat long
				ww.inYourArea.locationToLatLong(enteredSearch,
					function (lat, lng) {
						// take that lat long and turn it into a postcode to check if its valid
						ww.inYourArea.latLongToValidPostcode(lat, lng, false,
							// once postcode has been returned
							function (postcode) {
								// if there is a postcode returned
								if (postcode.length > 0) {
									// load content
									ww.inYourArea.loadContent(lat, lng, filter, ifBeingFilter);
									// update welsh water
									var apiURL = '/api/locationservices/storeuserspostcode/' + encodeURIComponent(enteredSearch);
									$.ajax({
										cache: false,
										url: apiURL,
										dataType: "json",
										error: function () {
											console.log('Water quality update was not successful - UNABLE TO LOAD JSON');
										}
									});
									// as its successful update current search
									ww.inYourArea.currentSearch = enteredSearch;
									// and update the cookie with user location to match
																		if (ww.inYourArea.prePopulatedInput === false) {
																				ww.cookie.update('UserAddress', ww.inYourArea.currentSearch, 28);
									}

									// Add search to the H1
									$('.page_hd h1').find('span').remove();
									$('.page_hd h1').append('<span> : ' + ww.inYourArea.currentSearch + '</span>');
								} else {
									// show error message
									$(ww.inYourArea.postcodeSectionError).empty();
									$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);
								}
							}
						);
					}
				);
			}
		},

		searchButtonSubmit: function () {
			// on click of submit btn
			$(ww.inYourArea.postcodeSection).find('input[type=submit]').on('click', function (e) {
				e.preventDefault();
				ww.inYourArea.prePopulatedInput = false;
				ww.inYourArea.updateFromSearch();
			});
			// on enter key press
			$(ww.inYourArea.postcodeSection).find('input').on('keydown', function (e) {
				if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
					e.preventDefault();
					ww.inYourArea.prePopulatedInput = false;
					ww.inYourArea.updateFromSearch();
				}
			});
		},

		locationToLatLong: function (enteredSearch, callback) {
			// vars
			var geocoder = new google.maps.Geocoder(),
					lat,
					lng;
			geocoder.geocode({ 'address': enteredSearch + ', Wales' }, function (results, status) {
				if (status === google.maps.GeocoderStatus.OK) {

					var searchAddressComponents = results[0].address_components,
							country,
							postcode,
							length = searchAddressComponents.length,
							i = 0;

					$.each(searchAddressComponents, function () {
						// add one to index
						i += 1;
						if ($.inArray('country', this.types) > -1) {
							// take full postcode (sometime short depending on how good the GPS is 
							country = this.short_name;
						}
						// once each is completed - index is equal to length
						if (i === length) {
							// its in GB
							if (country === 'GB') {
								// then get the lat long
								lat = results[0].geometry.location.lat();
								lng = results[0].geometry.location.lng();

								// load content and update map
								callback(lat, lng);

							} else {
								console.log('Geocode was not successful for the following reason: OUTSIDE GB & NOT WITHIN WELSH WATER COVERAGE');
								// show an error
								$(ww.inYourArea.postcodeSectionError).empty();
								$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);
								// remove the loading
								$(ww.inYourArea.containerClass).find('.latest-news .loading').remove();
							}
						}
					});

				} else {
					console.log('Geocode was not successful for the following reason: ' + status);
					// if a valid postcode but it doesn't exsist it will return zero results so display error message
					if (status === 'ZERO_RESULTS') {
						$(ww.inYourArea.postcodeSectionError).empty();
						$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);
					}
				}
			});
		},

		latLongToValidPostcode: function (lat, lng, usePreEntered, callback) {
			// vars
			var geocoder = new google.maps.Geocoder(),
					latlng = new google.maps.LatLng(lat, lng),
					output;

			// start gmap geocoder - input the lat/long then run the results
			geocoder.geocode({ 'latLng': latlng }, function (results, status) {

				// if successful
				if (status === google.maps.GeocoderStatus.OK) {

					// vars
					var searchAddressComponents = results[0].address_components,
							postcode,
							country,
							length = searchAddressComponents.length,
							i = 0;
					// loop through the array
					$.each(searchAddressComponents, function () {
						// add one to index
						i += 1;
						// look for postcode
						if ($.inArray('postal_code', this.types) > -1) {
							// take full postcode (sometime short depending on how good the GPS is)
							postcode = this.long_name;
						}
						// look for country
						if ($.inArray('country', this.types) > -1) {
							// take the country
							country = this.short_name;
						}
						// if function is asked to use pre entered text
						if (usePreEntered === true) {
							// check if there is already text entered for some reason like history
							if ($(ww.inYourArea.postcodeSection).find('input.postcode').val().length > 0) {
								// if there is take that value and continue with it rather than the geolocation looked up one
								postcode = $(ww.inYourArea.postcodeSection).find('input.postcode').val();
							}
						}
						// once each is completed - index is equal to length
						if (i === length) {
							// if there is a postcode and its in GB
							if (ww.validPostcode.init(postcode) && country === 'GB') {
								// then return postcode
								callback(postcode);
							} else {
								console.log('Geocode was not successful for the following reason: POSTCODE NOT WITHIN WELSH WATER COVERAGE');
							}
						}
					});
				} else {
					console.log("Google Maps had some trouble finding" + results + status);
				}
			});
		},

		loadContent: function (lat, lng, filter, ifBeingFilter) {
			$(ww.inYourArea.containerClass).find('.content').each(function (i) {
				var $this = $(this),
						allClasses = $(this).attr('class'),
						allClassesArray = allClasses.split(" "),
						section = allClassesArray[1],
						api = '/api/InYourArea/' + section + '/' + lat + '/' + lng,
						gmap = $this.find('.map').attr('id'),
						containers = $('.content').length;
				
				if ($(this).find('.map').length > 0) {

					$.ajax({
						cache: false,
						url: api,
						dataType: "json",
						success: function (data) {

							var sidebar = [],
									sidebarF = [],
									sidebarNF = [],
									moreInfo = [],
									moreInfoF = [],
									moreInfoNF = [],
									pins = [],
									pinsF = [],
									pinsNF = [],
									subtype = [],
									records = data.Updates.length,
									maxRecords = ww.inYourArea.maxRecordsAllowed,
									$latest = $this.find('.latest-news');

							// remove anything if it is alreay there
							$latest.find('.sidebar-list').remove();
							$this.find('.content-inner').removeClass('content-avalible');
							$this.find('.more-info-wrapper').remove();
							// add loading
							$latest.find('.loading').remove();
							$latest.append('<span class="loading">' + ww.inYourArea.loadingDictionary + '</span>');

							if (records === 0) {
								$latest.find('.loading').remove();
								$latest.find('.no-records').remove();
								$latest.append('<span class="no-records">' + ww.inYourArea.noRecordsDictionary + '</span>');
							} else {
								// there are records - load them
								$.each(data.Updates, function (i) {
									// show loading message
									$latest.find('.no-records').remove();
									$latest.find('.loading').remove();
									$latest.append('<span class="loading">' + ww.inYourArea.loadingDictionary + '</span>');

									// count each time
									i += 1;
									// as google maps indexs from 1 lets do the same
									var index = String(this.Id.replace('{','').replace('}',''));

									// create sidebar html
									if (this.SubType !== null) {
										var tmpSidbarHtml =		'<li class="' + this.SubType + '">';
									} else {
										var tmpSidbarHtml =		'<li>';
									}
									tmpSidbarHtml +=	'<a class="' + index + '" href="#">' + this.Title;
									if (this.ShowDates === true) {
										if (this.StartTime !== null) {
											tmpSidbarHtml += '<span>' + this.StartTime + ' (' + this.StartDate + ')</span>';
										}
									}
									tmpSidbarHtml +=	'</a></li>';

									// create more info
									var tmpMoreInfoHtml =		'<div class="more-info-content ' + index + '">';
									tmpMoreInfoHtml +=	'<h3>' + this.Title + '</h3>';
									if (this.ShowDates === true) {
										tmpMoreInfoHtml += '<p class="date-time">';
										if (this.StartTime !== null) {
											tmpMoreInfoHtml += '<span>' + ww.inYourArea.startDictionary + ': ' + this.StartDate + ' ' + this.StartTime + '</span>';
										}
										if (this.EndTime !== null) {
											tmpMoreInfoHtml += '<span>' + ww.inYourArea.endDictionary + ': ' + this.EndDate + ' ' + this.EndTime + '</span>';
										}
										tmpMoreInfoHtml +=	'</p>';
									}
									tmpMoreInfoHtml += this.MoreInfomation;
									tmpMoreInfoHtml +=	'</div>';

									// create pins
									var tmpPinsInfo = {
										'index': index,
										'title': this.Title,
										'type': this.Type,
										'filter': this.SubType,
										'shortText': this.ShortText,
										'lat': this.Location.Latitude,
										'lng': this.Location.Longitude,
										'icon': this.MapIconUrl,
										'showDates': this.ShowDates,
										'startDate': this.StartDate,
										'startTime': this.StartTime,
										'endDate': this.EndDate,
										'endTime': this.EndTime
									};
									// create subtypes
									var tmpSubtype = '<li>';
									// TODO: Update icon image
									tmpSubtype += '<label for="category-' + this.SubType + '"><img src="' + this.MapIconUrl + '" alt="' + this.SubType + '"/></label>';
									tmpSubtype += '<input id="category-' +this.SubType + '" type="checkbox" checked="checked" value="' + this.SubType + '"/>';
									tmpSubtype += '<label for="category-' + this.SubType + '">' + this.SubType + '</label>';
									tmpSubtype +=	'</li>';

									// push into correct array - featured / non featured and if this is a filter or full search
									if (ifBeingFilter !== true) {
										if (this.PinUpdate) {
											sidebarF.push(tmpSidbarHtml);
											pinsF.push(tmpPinsInfo);
											moreInfoF.push(tmpMoreInfoHtml);
										} else {
											sidebarNF.push(tmpSidbarHtml);
											pinsNF.push(tmpPinsInfo);
											moreInfoNF.push(tmpMoreInfoHtml);
										}
										if (this.SubType !== null) {
											subtype.push(tmpSubtype);
										}
									} else if ($.inArray(this.SubType, filter) > -1 || this.SubType === null) {
										if (this.PinUpdate) {
											sidebarF.push(tmpSidbarHtml);
											pinsF.push(tmpPinsInfo);
											moreInfoF.push(tmpMoreInfoHtml);
										} else {
											sidebarNF.push(tmpSidbarHtml);
											pinsNF.push(tmpPinsInfo);
											moreInfoNF.push(tmpMoreInfoHtml);
										}
									}


									// add html to the page when all records are collected otherwise it will add random markup/half completed lists
									if (i === records) {
										// home pin - this needs to be added to the pins array
										var home = [{
											'index': 'home',
											'title': null,
											'type': null,
											'subtype': null,
											'shortText': null,
											'lat': lat,
											'lng': lng,
											'icon': null,
											'startDate': null,
											'startTime': null,
											'endDate': null,
											'endTime': null
										}];

										// merge the two arrays - featured & non featured into one
										sidebar = $.merge(sidebarF, sidebarNF).slice(0, maxRecords);
										moreInfo = $.merge(moreInfoF, moreInfoNF).slice(0, maxRecords);
										// dealing with home pin
										var mergePins = $.merge(pinsF, pinsNF);
										pins = $.merge(home, mergePins).slice(0, maxRecords + 1);

										// remove loading
										$latest.find('.loading').remove();
										
										// if no records
										if (sidebar.length === 0) {
											$latest.find('.loading').remove();
											$latest.find('.no-records').remove();
											$latest.append('<span class="no-records">' + ww.inYourArea.noRecordsDictionary + '</span>');
										}

										// add list of records
										$('<ul />', {
											html: sidebar.join('')
										}).addClass('sidebar-list').prependTo($this.find('.latest-news'));

										// add more info
										$('<div />', {
											html: moreInfo.join('')
										}).addClass('more-info-wrapper').appendTo($this.find('.content-inner'));

										// add close button
										$this.find('.more-info-wrapper').append('<div class="close"><div class="close-icon">' + ww.inYourArea.closeDictionary + '</div></div>');

										// add filters if there are any
										if (ifBeingFilter !== true) {
											// renove duplicates
											subtype = $.unique(subtype);
											var uniqueSubtype = [];
											$.each(subtype, function (i, el) {
												if ($.inArray(el, uniqueSubtype) === -1) uniqueSubtype.push(el);
											});
											// check there are subtypes
											if (uniqueSubtype.length > 0) {
												// remove any exsisting filters
												$this.find('.categories-list').remove();
												// if there is, create a selection
												$('<ul />', {
													html: uniqueSubtype.join('')
												}).addClass('categories-list').prepend('<div class="loading-overlay">' + ww.inYourArea.loadingDictionary + '</div>').prependTo($this.find('.content-inner'));
												// run filter function
												ww.inYourArea.categoriesFilter($this);
											}
										}

										// adjust height of wrapper to the content
										if (!$('body').hasClass('mobile')) {
											var height = $('.tab-content-wrap .content.js-active').outerHeight(true);
											$('.tab-content-wrap').height(height);
										}
										
										// add the pins
										ww.inYourArea.placePinsOnMap(gmap, pins, ifBeingFilter);

										// run function completed checker
										callback(gmap, pins, ifBeingFilter);
										
									}

									// close info panel - needs to be here as it didn't exsist before, otherwise you would need to listen to every click on the area and this would reduce preformance
									$this.find('.close').on('click', function () {
										$(this).parent().removeClass('open');
										setTimeout(function () {
											$this.find('.more-info-content.open').removeClass('open');
										}, 400);
									});
								});
							}
						},
						error: function (error) {
							if (error.status === 404) {
								console.log('API NOT FOUND');
							} else {
								$(ww.inYourArea.containerClass).find('.load-error').remove().remove();
								$(ww.inYourArea.containerClass).append('<h2 class="load-error">' + ww.inYourArea.googleLoadErrorDictionary + '</h2>');
							}

							ww.inYourArea.ganalyticsCallback = false;
	
						}
					});
				}
				function callback() {
					// check if each has completed
					if (i + 1 === containers) {
						ww.inYourArea.ganalyticsCallback = true;

						// mobile more info nav
						ww.inYourArea.mobileMoreInfoNavigation();
						// show/hide mobile accordion section if there is content
						//$(ww.inYourArea.containerClass).each(function () {
						//	$(this).find('.title').each(function () {
						//		var $this = $(this);
						//		if ($.trim($this.parent().find('.latest-news').html()).length > 0) {
						//			$(this).addClass('content-available');
						//		} else {
						//			$(this).removeClass('content-available');
						//									//		}
						//	});
						//});

						$(ww.inYourArea.containerClass).find('.title').addClass('content-available');
						$(ww.inYourArea.containerClass).find('.more-info').removeClass('loading');
						$(ww.inYourArea.containerClass).find('.categories-list').removeClass('loading');

						// move content if on mobile
						ww.inYourArea.mobileMoreInfoPositionChange();

						// open emergency if required
						setTimeout(function () {
							var emergID = ww.inYourArea.getEmergencyID('id');
							if ($('body').hasClass('mobile')) {
								// close any open accordions
								var active = 'js-active';
								if (window.location.hash === null || window.location.hash === undefined) {
									$('.title.' + active).removeClass(active);
									$('.content-inner.' + active).removeClass(active).slideUp();
									// open first accordion
									$('.tab-content-wrap .content').first().find('h2').first().trigger('click');
								}
							}
							if (emergID !== false && ww.inYourArea.emergencyOpen === false) {
								$('a.' + emergID).trigger('click');
								ww.inYourArea.emergencyOpen = true;
							}
						}, 850);

						// open hash if first load
						$(ww.inYourArea.containerClass).each(function () {
							// var
							var $tabAccord = $(this),
									active = 'js-active',
									tabToOpen = window.location.hash,
									tabsLength = $tabAccord.find('ul.tab-btns li').length - 1,
									href,
									tabExsists;
							
							// check the URL to see if it contain hash
							if (window.location.hash) {
								// get each tab
								$tabAccord.find('ul.tab-btns li').each(function (i) {
									// get the href of the tab
									href = $(this).find('a').attr('href');
									// if it the same as the hash
									if (tabToOpen === href && $tabAccord.find('.content' + tabToOpen).find('.title').hasClass('content-available')) {
										// say yes it does exsist
										tabExsists = true;
									}
									// once each has completed and if the has exsists
									if (i === tabsLength && tabExsists === true && ifBeingFilter !== true) {
										// mobile on load
										$('.title.' + active).removeClass(active);
										$('.content-inner.' + active).removeClass(active).slideUp();

										// open correct accordion
										$tabAccord.find('.content' + tabToOpen).find('.title').first().trigger('click');
									}
								});
							} else if (i === tabsLength) {
								$tabAccord.find('.content').first().find('.title').first().trigger('click');
							}
						});
					}
				}
			});
		},

		mobileMoreInfoPositionChange: function () {
			if ($('body').hasClass('mobile')) {
				// get how many containers there are
				var containers = $('.content').length;
				// for each
				$('.content').each(function (i) {
					// var
					var $this = $(this);
					// find the links
					$(this).find('.latest-news a').each(function () {
						// get the target more info
						var ID = $(this).attr('class');
						// move the more info
						$this.find('.more-info-wrapper .' + ID).insertAfter($(this));
					});
					// once each is completed
					if (i + 1 === containers) {
						// remove the more info wrapper
						$this.find('.more-info-wrapper').remove();
					}
				});
			}
		},

		mobileMoreInfoNavigation: function () {
			if ($('body').hasClass('mobile')) {
				// find the links
				$('.tab-content-wrap').children().each(function () {
					$(this).find('.latest-news li').each(function () {
						// click event
						$(this).find('a').first().on('click', function (e) {
							e.preventDefault();
							var $this = $(this);
							var active = 'js-active';
							if (!$this.next('.more-info-content').hasClass(active)) {
								$('.latest-news a.' + active).removeClass(active);
								$this.addClass(active);
								$('.more-info-content.' + active).removeClass(active).slideUp();
								$this.next('.more-info-content').addClass(active).slideDown(function () {
									$('html, body').animate({
										scrollTop: $this.offset().top - 5
									}, 300);
								});
							} else {
								$this.removeClass(active);
								$this.next('.more-info-content').removeClass(active).slideUp();
							}
						});
					});
				});
			}
		},

		promoPanelMoveOnMobile: function () {
			if ($('body').hasClass('mobile')) {
				$('.postcode-lookup__promo-panel').detach().insertAfter($(this.containerClass));
			}
		}
	};
})(jQuery);
///#source 1 1 /scripts/WelshWater/Components/auto-populate-form-address.js
var ww = ww || {};

(function ($) {
	ww.autoPopulateFormAddress = {		

		populated: 'underfined',

		address1: $('.auto-address-line-1'),
		address2: $('.auto-address-line-2'),
		address3: $('.auto-address-line-3'),
		postcode: $("label:contains('Postcode')").parent().find('input'),

		init: function () {
			if (this.address1.length > 0) {
				var checkForGeolocation;
				checkForGeolocation = setInterval(
					// check if geolocation has been aquired or declined
					function checkForAutoPostcode() {
						// has been aquired
						if (ww.getCoordinate.aquired === true) {
							clearInterval(checkForGeolocation);
							
							ww.loadGoogleScript.init('ww.autoPopulateFormAddress.populateAddress')

						// failed stop check and don't d anything
						} else if (ww.getCoordinate.aquired === false) {
							clearInterval(checkForGeolocation);
						}
					},
				500);
			}
		},

		getAddress: function (callback) {
			
			// vars
			var lat = ww.getCoordinate.lat,
					lng = ww.getCoordinate.long,
					geocoder = new google.maps.Geocoder(),
					latlng = new google.maps.LatLng(lat, lng),
					address = [];

			// start gmap geocoder - input the lat/long then run the results
			geocoder.geocode({ 'latLng': latlng }, function (results, status) {

				// if successful
				if (status === google.maps.GeocoderStatus.OK) {

					// vars
					var searchAddressComponents = results[0].address_components,
							houseNo,
							street,
							town,
							countryShort,
							country,
							postcode,
							length = searchAddressComponents.length,
							i = 0;


					// loop through the array
					$.each(searchAddressComponents, function () {
						// add one to index
						i += 1;
						// look for street number
						if ($.inArray('street_number', this.types) > -1) {
							houseNo = this.long_name;
						}
						// look for street name
						if ($.inArray('route', this.types) > -1) {
							street = this.long_name;
						}
						// look for postal town
						if ($.inArray('postal_town', this.types) > -1) {
							town = this.long_name;
						}
						// look for postal town
						if ($.inArray('country', this.types) > -1) {
							country = this.long_name;
						}
						// look for postal town
						if ($.inArray('postal_code', this.types) > -1) {
							postcode = this.long_name;
						}
						// look for postal town
						if ($.inArray('country', this.types) > -1) {
							countryShort = this.short_name;
						}
						// once each is completed - index is equal to length
						if (i === length) {
							// if there is a postcode and its in GB
							if (ww.validPostcode.init(postcode) && countryShort === 'GB') {
								address = [houseNo, street, town, country, postcode]
								// then return postcode
								callback(address);
							} else {
								console.log('Geocode was not successful for the following reason: POSTCODE NOT WITHIN WELSH WATER COVERAGE');
							}
						}
					});
				} else {
					console.log("Google Maps had some trouble finding" + results + ' - ' + status);
				}
			});
		},

		populateAddress: function () {
			ww.autoPopulateFormAddress.getAddress(function (address) {				
				var line1;
				// amount of information populated based on accuracy
				if (address[0].length > 0 && ww.getCoordinate.accuracy < 100) {
					line1 = address[0] + ' ' + address[1];
				} else if (ww.getCoordinate.accuracy < 300) {
					line1 = address[1];
				}
				
				// updae values
				ww.autoPopulateFormAddress.address1.val(line1);
				ww.autoPopulateFormAddress.address2.val(address[2]);
				ww.autoPopulateFormAddress.address3.val(address[3]);
				ww.autoPopulateFormAddress.postcode.val(address[4]);

				$('input.required, select.required, textarea.required').each(function () {
					checkIfValid($(this));
				});

				function checkIfValid($this) {
					// check if is has a value after removing whitespace
					var notempty = $.trim($this.val()).length > 0
					// if it is empty
					if (notempty) {
						$this.removeClass('invalid');
					}
				}

			});
		}
	}
})(jQuery);
///#source 1 1 /scripts/welshWater/Components/iPad-viewport-changed-reset.js
var ww = ww || {};

(function ($) {
	ww.ipadViewportChangedReset = {
		init: function () {
			$(window).load(function () {
				ww.viewport.reset();
			});
		}
	};
})(jQuery);

///#source 1 1 /scripts/WelshWater/Components/ga-tracking-events.js
var ww = ww || {};

// GA Tracking used throughout WW website

/* Contents
    === Init ===
      = Bind Module Specific Events =
        - Feedback panel widget
        - In Your Area Widget
        - Homepage Promo Panel
        - Featured Article Panel
        - Mega Nav Promo Panel
        - News Listings
        - Whats On Listings
        - Social Links
        - Device Switcher
        - Language Selector
        - Mobile Carousel
        - Alert Banners/Messages
        - Live Chat
        - Developer Services
        - External Link & Document Download Tracking
        - In Your Area
      = Bind Global Functions =
        - Push Event
*/

(function ($) {
    ww.gaTrackingEvents = {


        init: function () {
            this.bindEvents();
        },


        bindEvents: function () {

            // Class added to tracked elements/modules
            var gaHandle = ".js-ga-track",
                ga = this;

            // Bind Module Specific Tracking Events
            feedbackPanel();
            inYourAreaWidget();
            homePromoPanels();
            featuredArticles();
            megaNavPromoPanel();
            newsListings();
            whatsOnListings();
            socialLinks();
            deviceSwitcher();
            languageSelector();
            mobileCarousel();
            alertBanners();
            liveChat();
            developerServices();
            inYourArea();
            externalLinksAndFiles();

            function feedbackPanel() {
                var module = $('.feedback-pnl');

                module.find('input:submit').on("click", function (e) {
                    var url = window.location.href;
                    var formID = module.find('#hfFormID').val();
                    var formName = module.find('#hfFormName').val();
                    ga.pushEvent("Feedback form submission", formName, formID, url);
                });

                module.find('.noFeedbackBtn').on("click", function (e) {
                    var url = window.location.href;
                    var formID = module.find('#hfFormID').val();
                    var formName = module.find('#hfFormName').val();
                    ga.pushEvent("Feedback form closed forever", formName, formID, url);
                });
            }

            function inYourAreaWidget() {

                // Store module
                var module = $('.emergencies' + gaHandle);

                // Push event on return key hit
                module.find('input').on("keydown", function (e) {
                    if (e.keyCode === 13) {
                        var searchVal = $(this).val();
                        ga.pushEvent("In your area panel", "Incident or location", searchVal);
                    }
                });
                // Push event on click of "find" button
                module.find('.submit').on("click", function (e) {
                    var searchVal = $(this).siblings(":text").val();
                    ga.pushEvent("In your area panel", "Incident or location", searchVal);
                });
                // Push event on click of ticker/scrolling banner item
                module.find(".ticker-content a").on("click", function (e) {
                    var eventType = $(this).parent(".ticker-content").siblings("h5").text(),
                        eventString = $(this).text(),
                        emergencyMessage = (eventType + ": " + eventString);
                    ga.pushEvent("In your area panel", "Incident or location", emergencyMessage);
                });
            }


            function homePromoPanels() {

                // Store module
                var module = $('.call-to-action.pointerDevice' + gaHandle);

                // Push event on click of promo panel
                module.on("click", function (e) {
                    var panelName = $(this).find(".CTA-text").text().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Promo panel", panelName, pathname)
                });
            }


            function featuredArticles() {

                // Store module
                var module = $('.feature.article' + gaHandle);

                // Push event on click of featured article
                module.find("a").on("click", function (e) {
                    var articleTitle = $(this).closest(".feature.article").find("h2 a").text().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Featured article panel", articleTitle, pathname);
                });
            }

            function megaNavPromoPanel() {

                // Store module
                var module = $('.mega-nav-feature-wrapper' + gaHandle);

                // Push event on click of a mega nav promo panel
                module.find("a").on("click", function (e) {
                    var promoPanelName = $(this).siblings(".mega-nav-feature-heading").text().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Mega nav promo panel", promoPanelName, pathname);
                });
            }

            function newsListings() {

                // Store module
                var module = $('.whats_on_column' + gaHandle);

                module.find("a").on("click", function (e) {
                    var newsTitle = $(this).siblings(".headline").text().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Homepage whats on listings", newsTitle, pathname);
                });
            }

            function whatsOnListings() {

                // Store module
                var module = $('.news_column' + gaHandle);

                module.find("a").on("click", function (e) {
                    var whatsOnTitle = $(this).find(".headline").text().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Homepage news listings", whatsOnTitle, pathname);
                });
            }

            function socialLinks() {

                // Store module
                var module = $('.network-channels' + gaHandle);

                module.find("a").on("click", function (e) {
                    var socialNetwork = $(this).find("span").text().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Social link panel", pathname, socialNetwork);
                });
            }

            function deviceSwitcher() {

                // Store module
                var module = $('.device-switcher' + gaHandle);

                module.find("a").on("click", function (e) {
                    var layoutChosen = $(this).text().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Device layout change", layoutChosen, pathname);
                });
            }

            function languageSelector() {

                // Store module
                var module = $('.lang-selector' + gaHandle);

                module.find("input").on("click", function (e) {
                    var languageChosen = $(this).val().trim(),
                        pathname = document.URL;
                    ga.pushEvent("Language change", languageChosen, pathname);
                });
            }

            function mobileCarousel() {
                if (ww.confirmDevice.mobileDevice) {

                    // Store module
                    var module = $('.item' + gaHandle);

                    module.find("a").on("click", function (e) {
                        var carouselItem = $(this).find("h4").text().trim();
                        ga.pushEvent("Carousel", "Click", carouselItem);
                    });
                }
            }

            function alertBanners() {

                // Store module
                var module = $('.icon-cross' + gaHandle);

                module.on("click", function (e) {

                    // Store the banners class
                    var bannerID = $(this).parent().attr("class")

                    // Find out which banner type we are targeting
                    if (bannerID === "info-msg") {
                        var message = $(this).parent(".info-msg").find("h2").text().trim();
                        ga.pushEvent("Alert panel", "Clicked", message);
                    } else if (bannerID === "incident-msg") {
                        var message = $(this).parent(".incident-msg").find("h2").text().trim();
                        ga.pushEvent("Alert panel", "Clicked", message);
                    }
                });
            }

            function liveChat() {

                // Store module
                var module = $('.live-chat' + gaHandle);

                // Push event on click of the live chat widget opening
                module.on("click", function (e) {
                    var pageURL = document.URL;
                    ga.pushEvent("Promo panel", pageURL, "Live chat panel opened");

                    // Time how long the live chat form is open for
                    // Start a timer
                    var counter = 0;
                    // Increase count every second until closed
                    var myInterval = setInterval(function () {
                        ++counter;
                    }, 1000);

                    // On close of the form
                    $(".close-icon").on("click", function (e) {
                        // Stop the timer
                        clearInterval(myInterval);
                        var closeMessage = "Live chat closed after " + myInterval + " seconds";
                        // Push close event and the total usage time
                        ga.pushEvent("Promo panel", pageURL, closeMessage);
                    });
                    // On reload or when user leaves the current page
                    $(window).unload(function (e) {
                        // Stop the timer
                        clearInterval(myInterval);
                        var closeMessage = "Live chat closed after " + myInterval + " seconds";
                        // Push close event and the total usage time
                        ga.pushEvent("Promo panel", pageURL, closeMessage);
                    });

                });
            }

            // This is used solely to track mobile activity on developer services pages
            function developerServices() {
                // First check if the device is mobile using the global func
                if (ww.confirmDevice.mobileDevice) {
                    // Check URL contains relevant form
                    var url = window.location.href;
                    var pageURL = document.URL;
                    var pageTitle = document.title;
                    if (url.search("Connection-to-a-Water-Main") >= 0) {
                        ga.pushEvent("Dev services accessed via mobile", pageURL, pageTitle);
                    }
                }
            }

            function inYourArea() {

                // keep checking for geolocation
                var checkForInYourAreaMarkup;
                checkForInYourAreaMarkup = setInterval(function () {
                    if (ww.inYourArea.ganalyticsCallback) {
                        clearInterval(checkForInYourAreaMarkup);

                        // Push event on click of any tabs
                        $(".tab-btns").find("a").on("click", function (e) {
                            var tabLabel = $(this).text().trim();
                            ga.pushEvent("In your area", "Tab clicked", tabLabel);
                        });

                        // Push event on "more info" links
                        $('.map').on('click', 'a.more-info-window', function (e) {
                            setTimeout(function () {
                                var moreInfoContent = $(".more-info-content.open").find("h3").text().trim();
                                ga.pushEvent("In your area", "More information clicked", moreInfoContent);
                            }, 500);
                        });

                        // Push event on post code lookup (return key)
                        var postCodeField = $('.postcode-lookup' + gaHandle);
                        postCodeField.find("input:text").on("keydown", function (e) {
                            if (e.keyCode === 13) {
                                var postCodeValue = $(this).val();
                                ga.pushEvent("In your area", "Post code entry", postCodeValue);
                            }
                        });

                        // Push event on post code lookup (submit button click)
                        postCodeField.find("input:submit").on("click", function (e) {
                            var postCodeValue = $(this).siblings("input:text").val();
                            ga.pushEvent("In your area", "Post code entry", postCodeValue);
                        });

                    } else if (ww.inYourArea.ganalyticsCallback === false) {
                        clearInterval(checkForInYourAreaMarkup);
                    } else {
                        setTimeout(function () {
                            clearInterval(checkForInYourAreaMarkup);
                        }, 5000);
                    }
                }, 500);
            }

            function externalLinksAndFiles() {

                // State which file types to check for
                var filetypes = /\.(zip|exe|pdf|doc*|xls*|ppt*|mp3)$/i,
                    baseHref = '';

                // If undefined - set baseHref
                if ($('base').attr('href') != undefined) {
                    baseHref = $('base').attr('href');
                }

                // Check if each link is an external address or a download file
                $('a').each(function () {

                    // Store href attribute
                    var href = $(this).attr('href');

                    // Check if hfref matches the domain
                    if (href && (href.match(/^https?\:/i)) && (!href.match(document.domain))) {
                        // Bind push event to track external link
                        $(this).click(function () {
                            // Remove the :http//
                            var extLink = href.replace(/^https?\:\/\//i, '');
                            // Push event to GA
                            ga.pushEvent("Resource", "Outbound link", extLink);
                        });
                    }

                        // If href matches selected filetypes
                    else if (href && href.match(filetypes)) {
                        // Bind click event to the link
                        $(this).click(function () {

                            // State extensions
                            var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined,
                                exten2 = extension[0].toUpperCase();

                            // If word doc
                            if (exten2 == "DOC") {
                                useLabel = DOC;
                                // If PDF
                            } else if (exten2 == "PDF") {
                                useLabel = PDF;
                                // If MP3
                            } else if (exten2 == "MP3") {
                                useLabel = MP3;
                                // If doc download
                            } else {
                                useLabel = "Document_Download";
                            }

                            // State file path to match url
                            var filePath = href;
                            // Push event to GA
                            ga.pushEvent("Resource", useLabel, filePath);
                        });
                    }
                });
            }
        },

        // Global push function - with language
        pushEvent: function (category, action, label) {
            // Set Language
            var Language,
                chosenLanguage = $(".language-selector").find(":submit").val();

            // The current language is the OPPOSITE of the chosenLanguage var
            if (chosenLanguage === "Cymraeg") {
                language = "English";
            } else {
                language = "Welsh";
            }

            // Push event for site language chosen
            _gaq.push(['_setCustomVar', 1, 'Language', Language, 1]);
            // Push event tracking data
            _gaq.push(['_trackEvent', category, action, label]);
        },
    };
})(jQuery);
///#source 1 1 /scripts/WelshWater/Components/water-quality.js
var ww = ww || {};

(function ($) {
	ww.waterQuality = {
		init: function () {
			// add class to page header to style just for IYA
			$('.page_hd').addClass('IYA');

			// move pannel if on mobile
			if ($('body').hasClass('mobile')) {
				$('.postcode-lookup__promo-panel').detach().insertAfter($('.wq-IYA'));
			}

			// water quaklity table hack
			ww.inYourArea.waterQualityTableHack();

			// water quality navigation
			ww.inYourArea.waterQualityTabs();

			// move accordion tabs if needed
			this.moveAccordionTabs();
		},

		moveAccordionTabs: function () {
			var otherAccordionTitles;
			$('.wq-IYA').append('<div class="tab-btns-mobile-copy"></div>');
			$('.tab-btns-mobile a').each(function (i) {
				if ($(this).find('h2').attr('class') === 'js-active title') {
					otherAccordionTitles = i;
				}
				if (i > otherAccordionTitles) {
					$(this).appendTo('.tab-btns-mobile-copy');
				}
			});
		}
	};
})(jQuery);
///#source 1 1 /scripts/WelshWater/Components/feedback-panel.js
var ww = ww || {};

ww.feedbackPanel = (function ($, liveChat) {

    var exports = {};
    var panel;
    var openBtn;
    var closeBtn;
    var optOutBtn;
    var body;


    /**
     * Private parts
     */

    function _optOut() {
        exports.hidePanel();
        exports.hideTab();
    }

    function _bindEvents() {
        openBtn.on('click', function (e) {
            exports.showPanel();
        })
        closeBtn.on('click', function (e) {
            exports.hidePanel();
        });
        optOutBtn.on('click', function (e) {
            _optOut();
        });
    }

    function _bindEls() {
        panel = $('.feedback-pnl');
        openBtn = $('.feedback-pnl-open');
        closeBtn = $('.feedback-pnl-close');
        optOutBtn = $('.btn-optout');
        body = $('body');
    }


    /**
     * Public parts
     */

    exports.twerk = function(time) {
        var time = time || 500;
        var el = $('.feedback-pnl-tab');

        el.addClass('twerk');
        setTimeout(function () {
            el.removeClass('twerk');
        }, time)
    }

    exports.showPanel = function () {
        body.addClass('feedback-open');
        panel.addClass('open');
        if ($('.live-chat').hasClass('open')) {
            liveChat.hideLiveChatPromo();
        }
    }

    exports.hidePanel = function () {
        body.removeClass('feedback-open');
        panel.removeClass('open');
        if ($('.live-chat').hasClass('hide')) {
            liveChat.showLiveChatPromo();
        }
    }

    exports.hideTab = function () {
        $('.feedback-pnl-tab').addClass('closed');
    }

    exports.showTab = function () {
        $('.feedback-pnl-tab').removeClass('closed');
    }

    exports.init = function () {
        // Check if the panel should be shown, if not get out of here!
        if (!$('#hfShowForm').val('True')) {
            return;
        }
        _bindEls();
        _bindEvents();
        // Has the user seen an animation this session? Y show them a twerk. N get out of here!
        if ($('#hfAnimateTab').val('True')) {
            this.twerk();
        }
    }


    return exports;

})(jQuery, ww.liveChat);
///#source 1 1 /scripts/WelshWater/app.js
//====================================
// Welsh water
//====================================

// load google maps api - TODO: needs to be investigated how to do this in the same function as the rest of the google maps code
var ww = ww || {};

(function ($) {
	ww.init = function () {
		this.confirmDevice.init();
		this.getCoordinate.init();
		this.emergencyWork.init();
		$('.incident-msg').showHide();
		$('.info-msg').showHide();
		this.mobileMenu.init();
		this.menuUtilities.init();
		this.mobileSubMenu.init();
		$('.social-media').openClose({
			panel: '.network-channels',
		});
		this.backToTop.init();
		this.liveChat.init();
		this.searchPagination.init();
		//this.wffmGeoAddress.init();
		this.forms.init();
		if ($('#in-your-area').length > 0) {
			this.inYourArea.init();
		}
		if ($('.wq-IYA').length > 0) {
			this.waterQuality.init();
		}
		//this.autoPopulateFormAddress.init();
		this.synthetix.init();
		this.feedbackPanel.init();
		this.gaTrackingEvents.init();
		$('.carousel').owlCarousel({
			center: true,
			loop: true,
			margin: 20,
			responsive: {
				0: {
					items: 1,
					stagePadding: 100
				},
				330: {
					stagePadding: 190
				},
				370: {
					items: 1,
					stagePadding: 100
				},
				450: {
					items: 1,
					stagePadding: 160
				},
				550: {
					items: 1,
					stagePadding: 190
				},
				570: {
					items: 1,
					stagePadding: 245
				},
				736: {
					items: 3
				}
			}
		});
	};

	$(document).ready(function () {
		ww.init();
	});

})(jQuery);
// ====================================================================================
// Console Log
// Ensures using console.log doesn't cause errors in browsers that do not support it
// ====================================================================================
if (typeof console === "undefined") {
	window.console = {
		log: function () { }
	};
}
