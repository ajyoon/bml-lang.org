(()=>{function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequirec4c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequirec4c6=i),i.register("gj6Et",(function(e,t){!function(e,t,n){function r(e){var t=this,n=function(){var e=4022871197,t=function(t){t=t.toString();for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)};return t}();t.next=function(){var e=2091639*t.s0+2.3283064365386963e-10*t.c;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=0|e)},t.c=1,t.s0=n(" "),t.s1=n(" "),t.s2=n(" "),t.s0-=n(e),t.s0<0&&(t.s0+=1),t.s1-=n(e),t.s1<0&&(t.s1+=1),t.s2-=n(e),t.s2<0&&(t.s2+=1),n=null}function i(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function s(e,t){var n=new r(e),s=t&&t.state,o=n.next;return o.int32=function(){return 4294967296*n.next()|0},o.double=function(){return o()+11102230246251565e-32*(2097152*o()|0)},o.quick=o,s&&("object"==typeof s&&i(s,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=s:n&&n.amd?n((function(){return s})):this.alea=s}(0,e,"function"==typeof define&&define)})),i.register("4gDjz",(function(e,t){!function(e,t,n){function r(e){var t=this,n="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function s(e,t){var n=new r(e),s=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152}while(0===e);return e},o.int32=n.next,o.quick=o,s&&("object"==typeof s&&i(s,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=s:n&&n.amd?n((function(){return s})):this.xor128=s}(0,e,"function"==typeof define&&define)})),i.register("HLBv4",(function(e,t){!function(e,t,n){function r(e){var t=this,n="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^e^e<<1)|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function s(e,t){var n=new r(e),s=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152}while(0===e);return e},o.int32=n.next,o.quick=o,s&&("object"==typeof s&&i(s,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=s:n&&n.amd?n((function(){return s})):this.xorwow=s}(0,e,"function"==typeof define&&define)})),i.register("ktaoY",(function(e,t){!function(e,t,n){function r(e){var t=this;t.next=function(){var e,n,r=t.x,i=t.i;return e=r[i],n=(e^=e>>>7)^e<<24,n^=(e=r[i+1&7])^e>>>10,n^=(e=r[i+3&7])^e>>>3,n^=(e=r[i+4&7])^e<<7,e=r[i+7&7],n^=(e^=e<<13)^e<<9,r[i]=n,t.i=i+1&7,n},function(e,t){var n,r=[];if(t===(0|t))r[0]=t;else for(t=""+t,n=0;n<t.length;++n)r[7&n]=r[7&n]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}(t,e)}function i(e,t){return t.x=e.x.slice(),t.i=e.i,t}function s(e,t){null==e&&(e=+new Date);var n=new r(e),s=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152}while(0===e);return e},o.int32=n.next,o.quick=o,s&&(s.x&&i(s,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=s:n&&n.amd?n((function(){return s})):this.xorshift7=s}(0,e,"function"==typeof define&&define)})),i.register("gBs5C",(function(e,t){!function(e,t,n){function r(e){var t=this;t.next=function(){var e,n,r=t.w,i=t.X,s=t.i;return t.w=r=r+1640531527|0,n=i[s+34&127],e=i[s=s+1&127],n^=n<<13,e^=e<<17,n^=n>>>15,e^=e>>>12,n=i[s]=n^e,t.i=s,n+(r^r>>>16)|0},function(e,t){var n,r,i,s,o,c=[],l=128;for(t===(0|t)?(r=t,t=null):(t+="\0",r=0,l=Math.max(l,t.length)),i=0,s=-32;s<l;++s)t&&(r^=t.charCodeAt((s+32)%t.length)),0===s&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,s>=0&&(o=o+1640531527|0,i=0==(n=c[127&s]^=r+o)?i+1:0);for(i>=128&&(c[127&(t&&t.length||0)]=-1),i=127,s=512;s>0;--s)r=c[i+34&127],n=c[i=i+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,c[i]=r^n;e.w=o,e.X=c,e.i=i}(t,e)}function i(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function s(e,t){null==e&&(e=+new Date);var n=new r(e),s=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152}while(0===e);return e},o.int32=n.next,o.quick=o,s&&(s.X&&i(s,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=s:n&&n.amd?n((function(){return s})):this.xor4096=s}(0,e,"function"==typeof define&&define)})),i.register("ktLSh",(function(e,t){!function(e,t,n){function r(e){var t=this,n="";t.next=function(){var e=t.b,n=t.c,r=t.d,i=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^i,i=i-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^i,t.a=i-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):n+=e;for(var r=0;r<n.length+20;r++)t.b^=0|n.charCodeAt(r),t.next()}function i(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function s(e,t){var n=new r(e),s=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152}while(0===e);return e},o.int32=n.next,o.quick=o,s&&("object"==typeof s&&i(s,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=s:n&&n.amd?n((function(){return s})):this.tychei=s}(0,e,"function"==typeof define&&define)})),i.register("foUwZ",(function(e,t){}));
/* @license BML - BSD 3 Clause License - Source at github.com/ajyoon/bml - Docs at bml-lang.org */var s,o=i("gj6Et"),c=i("4gDjz"),l=i("HLBv4"),u=i("ktaoY"),a=i("gBs5C"),f=i("ktLSh"),h={};!function(e,t){var n,r=(0,eval)("this"),s=256,o="random",c=t.pow(s,6),l=t.pow(2,52),u=2*l,a=255;function f(i,a,f){var h=[],g=E(p((a=1==a?{entropy:!0}:a||{}).entropy?[i,w(e)]:null==i?function(){try{var t;return n&&(t=n.randomBytes)?t=t(s):(t=new Uint8Array(s),(r.crypto||r.msCrypto).getRandomValues(t)),w(t)}catch(t){var i=r.navigator,o=i&&i.plugins;return[+new Date,r,o,r.screen,w(e)]}}():i,3),h),C=new d(h),O=function(){for(var e=C.g(6),t=c,n=0;e<l;)e=(e+n)*s,t*=s,n=C.g(1);for(;e>=u;)e/=2,t/=2,n>>>=1;return(e+n)/t};return O.int32=function(){return 0|C.g(4)},O.quick=function(){return C.g(4)/4294967296},O.double=O,E(w(C.S),e),(a.pass||f||function(e,n,r,i){return i&&(i.S&&x(i,C),e.state=function(){return x(C,{})}),r?(t[o]=e,n):e})(O,g,"global"in a?a.global:this==t,a.state)}function d(e){var t,n=e.length,r=this,i=0,o=r.i=r.j=0,c=r.S=[];for(n||(e=[n++]);i<s;)c[i]=i++;for(i=0;i<s;i++)c[i]=c[o=a&o+e[i%n]+(t=c[i])],c[o]=t;(r.g=function(e){for(var t,n=0,i=r.i,o=r.j,c=r.S;e--;)t=c[i=a&i+1],n=n*s+c[a&(c[i]=c[o=a&o+t])+(c[o]=t)];return r.i=i,r.j=o,n})(s)}function x(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function p(e,t){var n,r=[],i=typeof e;if(t&&"object"==i)for(n in e)try{r.push(p(e[n],t-1))}catch(e){}return r.length?r:"string"==i?e:e+"\0"}function E(e,t){for(var n,r=e+"",i=0;i<r.length;)t[a&i]=a&(n^=19*t[a&i])+r.charCodeAt(i++);return w(t)}function w(e){return String.fromCharCode.apply(0,e)}if(t["seed"+o]=f,E(t.random(),e),h){h=f;try{n=i("foUwZ")}catch(e){}}else"function"==typeof define&&define.amd&&define((function(){return f}))}([],Math),h.alea=o,h.xor128=c,h.xorwow=l,h.xorshift7=u,h.xor4096=a,h.tychei=f;let d=e(s=h)();function x(e){let t=[],n=0,r=0;for(let i=0;i<e.length;i++){let s=e[i];t.push(s.clone()),null===s.weight?r++:n+=s.weight}let i=(100-n)/r;for(let e=0;e<t.length;e++)null===t[e].weight&&(t[e].weight=i);return t}function p(e,t){return d()*(t-e)+e}function E(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(d()*(t-e))+e}function w(e){let t=0;for(let n of e)t+=n.weight??0;let n=0,r=p(0,t);for(let t=0;t<e.length;t++){let i=e[t];if(n+=i.weight??0,n>=r)return{choice:i.choice,choiceIndex:t}}console.warn("Unable to pick weighted choice for weights: "+e);let i=E(0,e.length);return{choice:e[i].choice,choiceIndex:i}}const g=/^\s*$/,C=/\s+$/;const O=/(\w)(\s+)([.,:;!?]+)/g;const _=/([.!?]\s+|^\s*)(\p{Ll})/gu;function b(e,t,n){return t+n.toUpperCase()}const N=/\\(\r?\n|\r)[ \t]*/g;const T={whitespaceCleanup:!0,punctuationCleanup:!0,capitalizationCleanup:!0},y={randomSeed:null,allowEval:!0};function k(e,t){return Object.assign({},e,t)}class S{constructor(e,t){this.choice=e,this.weight=t}toString(){return`WeightedChoice{choice: ${String(this.choice)}, weight: ${this.weight}}`}clone(){return new S(this.choice,this.weight)}}const v={WeightedChoice:S,weightedChoose:w,randomInt:E,randomFloat:p};function A(e,t){let n=function(e,t){if(t>e.length)throw new Error("charIndex > string.length");let n=1,r=-1,i=!1;for(let s=0;s<=t;s++)i?(n++,r=0,i=!1):r++,"\n"===e[s]&&(i=!0);return{line:n,column:r}}(e,t);return"line: "+n.line+", column: "+n.column}function R(e){return e instanceof String||"string"==typeof e}class L extends Error{constructor(e){super(e+" This is a bug. Please report at https://github.com/ajyoon/bml/issues"),this.name="IllegalStateError",Object.setPrototypeOf(this,L.prototype)}}class m extends Error{constructor(e,t){super("Syntax error found while parsing bml javascript at "+A(e,t)),this.name="JavascriptSyntaxError",Object.setPrototypeOf(this,m.prototype)}}class B extends Error{constructor(e,t,n){super((e||"Syntax error found while parsing bml")+" at "+A(t,n)),this.name="BMLSyntaxError",Object.setPrototypeOf(this,B.prototype)}}class M extends Error{constructor(e,t,n,r){super(`Duplicated reference index ${t} for reference ${e} at ${A(n,r)}`),this.name="BMLDuplicatedRefIndexError",Object.setPrototypeOf(this,M.prototype)}}class I extends Error{constructor(e,t,n){super(`Duplicated reference ${e} at ${A(t,n)}`),this.name="BMLDuplicatedRefError",Object.setPrototypeOf(this,I.prototype)}}class P extends Error{constructor(e,t){super(`Eval binding of settings field '${e}' of '${t}' is invalid`),this.name="EvalBoundSettingsError",Object.setPrototypeOf(this,P.prototype)}}class U extends Error{constructor(e){super(`Eval binding ${e} was bound multiple times.`),this.name="EvalBindingError",Object.setPrototypeOf(this,U.prototype)}}class K extends Error{constructor(){super("This document includes eval blocks and cannot be rendered with allowEval=false."),this.name="EvalDisabledError",Object.setPrototypeOf(this,K.prototype)}}function j(e,t,n){const r=e[t];if(null!=r&&typeof r!==n)throw new P("setting."+t,r)}function $(e){let t=e.settings;t&&(j(t,"whitespaceCleanup","boolean"),j(t,"punctuationCleanup","boolean"),j(t,"capitalizationCleanup","boolean"))}const W="\n  const bml = this;\n\n  const __new_bindings = {};\n\n  function bind(obj) {\n    for (let key in obj) {\n      __new_bindings[key] = obj[key];\n    }\n\n  }\n\n  ***USER DEFS BINDING SLOT***\n\n\n  function insert(str) {\n    __context.output += str;\n  }\n\n  ////////// start user code\n\n  ***USER CODE SLOT***\n\n  ////////// end user code\n\n  ***SAVE USER MUTATIONS SLOT***\n\n  return __new_bindings;\n";class D{constructor(e){this.contents=e}toString(){return`EvalBlock('${this.contents}')`}generateBindingCode(e){let t=[];e.settings&&t.push("let settings = __context.bindings.settings;");for(let n in e)t.push(`let ${n} = __context.bindings.${n}`);return t.join("\n")}generateSaveUserMutationsCode(e){let t=[];e.settings&&t.push("__context.bindings.settings = settings;");for(let n in e)t.push(`__context.bindings.${n} = ${n};`);return t.join("\n")}toFunc(e){let t=W.replace("***USER CODE SLOT***",this.contents);t=t.replace("***USER DEFS BINDING SLOT***",this.generateBindingCode(e)),t=t.replace("***SAVE USER MUTATIONS SLOT***",this.generateSaveUserMutationsCode(e));let n=Object.assign({},v);return new Function("__context",t).bind(n)}execute(e){let t=this.toFunc(e.bindings)(e);$(t);for(let[n,r]of Object.entries(t)){if(e.bindings.hasOwnProperty(n))throw new U(n);e.bindings[n]=r}}}let z;var F;(F=z||(z={})).WHITESPACE="WHITESPACE",F.NEW_LINE="NEW_LINE",F.VISUAL_NEW_LINE="VISUAL_NEW_LINE",F.COMMENT="COMMENT",F.OPEN_BLOCK_COMMENT="OPEN_BLOCK_COMMENT",F.CLOSE_BLOCK_COMMENT="CLOSE_BLOCK_COMMENT",F.SLASH="SLASH",F.SINGLE_QUOTE="SINGLE_QUOTE",F.DOUBLE_QUOTE="DOUBLE_QUOTE",F.BACKTICK="BACKTICK",F.OPEN_PAREN="OPEN_PAREN",F.CLOSE_PAREN="CLOSE_PAREN",F.OPEN_BRACE="OPEN_BRACE",F.CLOSE_BRACE="CLOSE_BRACE",F.OPEN_BRACKET="OPEN_BRACKET",F.CLOSE_BRACKET="CLOSE_BRACKET",F.COMMA="COMMA",F.COLON="COLON",F.AT="AT",F.ARROW="ARROW",F.NUMBER="NUMBER",F.TEXT="TEXT";class q{constructor(e,t,n){this.weights=x(e),this.identifier=t,this.isSilent=n}call(){let e=w(this.weights);return{replacement:e.choice,choiceIndex:e.choiceIndex}}toString(){return`ChoiceFork{weights: ${this.weights}, identifier: ${this.identifier}, isSilent: ${this.isSilent}}`}}class H{constructor(e,t,n){this.id=e,this.referenceMap=t,n.length?this.fallbackChoiceFork=new q(n,null,!1):this.fallbackChoiceFork=null}}function Q(e){if(e.next()?.tokenType!==z.OPEN_BRACKET)throw new L("parseEval started with non-OPEN_BRACKET");let t,n="code",r=e.index,i=1;for(;null!==(t=e.next());)switch(n){case"block comment":t.tokenType===z.CLOSE_BLOCK_COMMENT&&(n="code");break;case"inline comment":t.tokenType===z.NEW_LINE&&(n="code");break;case"template literal":t.tokenType===z.BACKTICK&&(n="code");break;case"single-quote string":if(t.tokenType===z.SINGLE_QUOTE)n="code";else if(t.tokenType===z.NEW_LINE)throw new m(e.str,e.index);break;case"double-quote string":if(t.tokenType===z.DOUBLE_QUOTE)n="code";else if(t.tokenType===z.NEW_LINE)throw new m(e.str,e.index);break;case"regexp literal":t.tokenType===z.SLASH&&(n="code");break;case"code":switch(t.tokenType){case z.OPEN_BRACKET:i++;break;case z.CLOSE_BRACKET:if(i--,i<1){let t=e.str.slice(r,e.index-1);return new D(t)}break;case z.COMMENT:n="inline comment";break;case z.OPEN_BLOCK_COMMENT:n="block comment";break;case z.BACKTICK:n="template literal";break;case z.SINGLE_QUOTE:n="single-quote string";break;case z.DOUBLE_QUOTE:n="double-quote string";break;case z.SLASH:n="regexp literal"}break;default:throw new Error(`Invalid state: ${n}`)}throw new m("could not find end of javascript code block",r)}function X(e){let t,n=e.index,r=new Map,i=[],s=/([@#]?)(\w+):?/y,o=null,c=!1,l=!1,u=!0,a=!1,f=!1,h=!1,d=!0,x=!1,p=!0,E=[],w=null;for(;null!==(t=e.peek());){switch(t.tokenType){case z.WHITESPACE:case z.NEW_LINE:break;case z.NUMBER:if(f)f=!1,h=!0,x=!0,E.push(Number(t.str));else{if(!a)throw new B("Unexpected number in fork",e.str,t.index);a=!1,x=!0,p=!0,i[i.length-1].weight=Number(t.str)}break;case z.ARROW:if(!h)throw new B("Unexpected arrow in fork",e.str,t.index);h=!1,d=!0,x=!1;break;case z.OPEN_PAREN:case z.OPEN_BRACKET:case z.OPEN_BRACE:if(!d)throw new B("Unexpected replacement in fork",e.str,t.index);if(f=!1,t.tokenType===z.OPEN_PAREN?(e.next(),w=V(e,!1)):t.tokenType===z.OPEN_BRACKET?w=Q(e):(e.next(),w=[X(e)]),E.length){for(let n of E){if(r.has(n))throw new M(o,n,e.str,t.index);r.set(n,w)}d=!1,x=!0,p=!0,E=[],w=null}else i.push(new S(w,null)),d=!1,x=!0,a=!0,p=!0;continue;case z.COMMA:if(!x)throw new B("Unexpected comma in fork",e.str,t.index);x=!1,f=!0,h||(d=!0);break;case z.CLOSE_BRACE:if(p)return e.next(),c?new H(o,r,i):new q(i,o,l);throw new B("Unexpected close brace in fork",e.str,t.index);case z.TEXT:case z.AT:if(u){s.lastIndex=e.index;let n=s.exec(e.str);if(!n)throw new B(`Unexpected token ${t}`,e.str,t.index);let r=n[1];o=n[2],"@"==r?(c=!0,f=!0):"#"==r&&(l=!0),e.overrideIndex(e.index+n[0].length),u=!1;continue}throw new B(`Unexpected token ${t}`,e.str,t.index);default:throw new B(`Unexpected token ${t}`,e.str,t.index)}e.next()}throw new B("Could not find end of fork.",e.str,n)}function G(e){let t,n=e.index-1;if(e.next()?.tokenType!==z.OPEN_BRACKET)throw new L("parseLiteralBlock started with non-OPEN_BRACKET");let r="";for(;null!==(t=e.next());){if(t.tokenType===z.CLOSE_BRACKET&&e.peek()?.tokenType==z.CLOSE_BRACKET)return e.next(),r;r+=t.str}throw new B("Could not find end of literal block",e.str,n)}function V(e,t){let n,r=e.index,i=1,s=[];function o(e){if(!s.length)return void s.push(e);let t=s[s.length-1];R(t)?s[s.length-1]=t.concat(e):s.push(e)}for(;null!==(n=e.next());)switch(n.tokenType){case z.OPEN_PAREN:i++;break;case z.CLOSE_PAREN:if(i--,i<1)return s;break;case z.OPEN_BRACKET:e.peek()?.tokenType==z.OPEN_BRACKET?o(G(e)):o(n.str);break;case z.OPEN_BRACE:let t=X(e);s=s.concat(t);break;default:o(n.str)}if(!t)throw new B("Reached end of document while parsing string.",e.str,r);return s}class Y{constructor(e,t,n,r){this.tokenType=e,this.index=t,this.endIndex=n,this.str=r}toString(){return`Token{tokenType: ${this.tokenType}, index: ${this.index}, endIndex: ${this.endIndex}, string: '${this.str}'}`}}const Z=/\s/;class J{_cachedNext=null;_newLineRe=/\r?\n/y;_whitespaceRe=/[^\S\r\n]+/y;_numberRe=/(\d+(\.\d+)?)|(\.\d+)/y;constructor(e){this.str=e,this.index=0}overrideIndex(e){this._cachedNext=null,this.index=e}_determineNextRaw(){if(this.index>=this.str.length)return null;let e,t,n=this.index,r=null;this._newLineRe.lastIndex=this.index,this._whitespaceRe.lastIndex=this.index,this._numberRe.lastIndex=this.index;let i=this._newLineRe.exec(this.str),s=this._whitespaceRe.exec(this.str),o=this._numberRe.exec(this.str);if(null!==i)e=z.NEW_LINE,t=i[0];else if(null!==s)e=z.WHITESPACE,t=s[0];else if(null!==o)e=z.NUMBER,t=o[0];else if("//"===this.str.slice(this.index,this.index+2))e=z.COMMENT,t="//";else if("/*"===this.str.slice(this.index,this.index+2))e=z.OPEN_BLOCK_COMMENT,t="/*";else if("*/"===this.str.slice(this.index,this.index+2))e=z.CLOSE_BLOCK_COMMENT,t="*/";else if("/"===this.str[this.index])e=z.SLASH,t="/";else if("'"===this.str[this.index])e=z.SINGLE_QUOTE,t="'";else if('"'===this.str[this.index])e=z.DOUBLE_QUOTE,t='"';else if("`"===this.str[this.index])e=z.BACKTICK,t="`";else if("("===this.str[this.index])e=z.OPEN_PAREN,t="(";else if(")"===this.str[this.index])e=z.CLOSE_PAREN,t=")";else if("{"===this.str[this.index])e=z.OPEN_BRACE,t="{";else if("}"===this.str[this.index])e=z.CLOSE_BRACE,t="}";else if(","===this.str[this.index])e=z.COMMA,t=",";else if(":"===this.str[this.index])e=z.COLON,t=":";else if("@"===this.str[this.index])e=z.AT,t="@";else if("["===this.str[this.index])e=z.OPEN_BRACKET,t="[";else if("]"===this.str[this.index])e=z.CLOSE_BRACKET,t="]";else if("->"===this.str.slice(this.index,this.index+2))e=z.ARROW,t="->";else if(e=z.TEXT,"\\"===this.str[this.index]){let e=this.str[this.index+1];"\\/[{])".includes(e)?(r=this.index+2,t=e):"n"===e?(r=this.index+2,t="\n"):"t"===e?(r=this.index+2,t="\t"):"r"===e?(r=this.index+2,t="\r"):t="\\"}else t=this.str[this.index];return null===r&&(r=n+t.length),new Y(e,n,r,t)}_determineNextReal(){let e,t=!1,n=!1,r=this.index;for(;null!==(e=this._determineNextRaw());){if(t){if(e.tokenType===z.NEW_LINE)return t=!1,new Y(z.NEW_LINE,e.index,e.endIndex,e.str)}else if(n){if(e.tokenType===z.CLOSE_BLOCK_COMMENT){let t=e.index+1;return new Y(z.WHITESPACE,t,t+1," ")}}else if(e.tokenType===z.COMMENT){let n=e.index>=this.str.length||Z.test(this.str[e.endIndex]);if(!(0===e.index||Z.test(this.str[e.index-1]))&&!n)return new Y(z.TEXT,e.index,e.endIndex,e.str);t=!0}else{if(e.tokenType!==z.OPEN_BLOCK_COMMENT)return this.index=r,e;n=!0}this.index=e.endIndex}return this.index=r,null}next(){let e;return null!==this._cachedNext?(e=this._cachedNext,this._cachedNext=null):e=this._determineNextReal(),this.index=null!==e?e.endIndex:this.str.length,e}peek(){if(null!==this._cachedNext)return this._cachedNext;let e=this._determineNextReal();return this._cachedNext=e,e}nextSatisfying(e){let t;for(;null!==(t=this.next());)if(e(t))return t;return null}nextNonWhitespace(){return this.nextSatisfying((e=>e.tokenType!==z.WHITESPACE&&e.tokenType!==z.NEW_LINE))}}class ee{constructor(e){this.settings=e,this.choiceResultMap=new Map,this.evalContext={bindings:{},output:""}}resolveReference(e){let t=this.choiceResultMap.get(e.id);if(t){if(!e.referenceMap.size&&!e.fallbackChoiceFork)return[t.renderedOutput];let n=e.referenceMap.get(t.choiceIndex);if(void 0!==n)return n}return e.fallbackChoiceFork?e.fallbackChoiceFork.call().replacement:(console.warn(`No matching reference or fallback found for ${e.id}`),[""])}renderChoice(e){if(e instanceof Array)return this.renderAst(e);{if(!this.settings.allowEval)throw new K;e.execute(this.evalContext);let t=this.evalContext.output;return this.evalContext.output="",t}}renderAst(e){let t="";for(let n=0;n<e.length;n++){let r=e[n];if(R(r))t+=r;else if(r instanceof q){let{replacement:i,choiceIndex:s}=r.call(),o=this.renderChoice(i);if(r.isSilent){if(t.length&&"\n"==t[t.length-1]){let t=n<e.length-1?e[n+1]:null;R(t)&&(t.startsWith("\n")?e[n+1]=t.slice(1):t.startsWith("\r\n")&&(e[n+1]=t.slice(2)))}}else t+=o;r.identifier&&this.choiceResultMap.set(r.identifier,{choiceIndex:s,renderedOutput:o})}else{let e=this.resolveReference(r);t+=this.renderChoice(e)}}return t}postprocess(e){let t=k(T,this.evalContext.bindings.settings),n=e;return n=function(e){return e.replace(N," ")}(n),t.punctuationCleanup&&(n=function(e){return e.replace(O,"$1$3$2")}(n)),t.capitalizationCleanup&&(n=function(e){return e.replace(_,b)}(n)),t.whitespaceCleanup&&(n=function(e){let t="",n=!0,r=!1;for(let i of e.split("\n")){let e=g.test(i);if(n){if(e)continue;n=!1}if(e){if(r)continue;i=""}else{i=i.replace(C,"");let e="",t=!0,n=!1;for(let r of i){let i=" "===r;!t&&n&&i||(i||(t=!1),e+=r,n=i)}i=e}r=e,t+=i+"\n"}return t.endsWith("\n\n")&&(t=t.substring(0,t.length-1)),t}(n)),n}renderAndPostProcess(t){var n;this.settings.randomSeed&&(n=this.settings.randomSeed,d=e(s)(n));let r=this.renderAst(t);return this.postprocess(r)}}class te{}class ne extends te{referencedBy=[];constructor(e=null,t=[]){super(),this.id=e,this.branches=t}countOutcomes(){let e=BigInt(0);for(let t of this.branches)e+=ie(t);for(let t of this.referencedBy)e+=t.countOutcomesAddedToReferredNode();return e}}class re extends te{constructor(e,t){super(),this.forkNodeReferredTo=e,this.referenceMap=t}countOutcomesAddedToReferredNode(){let e=BigInt(0);for(let[t,n]of this.referenceMap.entries())e+=ie(n)-BigInt(1);return e}}function ie(e){let t=BigInt(1);for(let n of e)n instanceof ne&&(t*=n.countOutcomes());return t}function se(e,t){let n=new ne(e.identifier,[]);n.id&&t.set(n.id,[n,e]);for(let r of e.weights){let e=r.choice;if(e instanceof D)n.branches.push([]);else{let r=ce(e,t);n.branches.push(r)}}return n}function oe(e,t){let n=t.get(e.id)[0],r=new re(n,new Map);n.referencedBy.push(r);for(let[n,i]of e.referenceMap.entries()){let e;if(i instanceof D)e=[];else{e=ce(i,t)}r.referenceMap.set(n,e)}if(e.fallbackChoiceFork){let n=se(e.fallbackChoiceFork,t),i=t.get(e.id)[1];for(let e=0;e<i.weights.length;e++)r.referenceMap.has(e)||r.referenceMap.set(e,[n])}return r}function ce(e,t){let n=[];for(let r of e)r instanceof q?n.push(se(r,t)):r instanceof H&&n.push(oe(r,t));return n}window.bml=function(e,t){t=k(y,t);let n=V(new J(e),!0);return new ee(t).renderAndPostProcess(n)},window.bml.analyze=function(e){return{possibleOutcomes:ie(ce(V(new J(e),!0),new Map))}}})();
//# sourceMappingURL=bml.bundle.js.map
