(function(){/*
 MIT License (c) copyright B Cavalier & J Hann */
var h=!0,k=!1,l=this.window||global;function m(){}function q(a,b){return 0==r.call(a).indexOf("[object "+b)}function s(a){return a&&"/"==a.charAt(a.length-1)?a.substr(0,a.length-1):a}function u(a,b){var c,e,d,f;c=1;e=a;b&&(e=e.replace(v,function(a,b,d,e){d&&c++;f=h;return e||""}));if(f){d=b.split("/");if(c>d)throw Error("attempt to access module beyond root of package: "+a);d.splice(d.length-c,c);return d.concat(e||[]).join("/")}return e}
function w(a){var b=a.indexOf("!");return{I:a.substr(b+1),j:0<=b&&a.substr(0,b)}}function y(){}function z(a,b){y.prototype=a||A;var c=new y;y.prototype=A;for(var e in b)c[e]=b[e];return c}
function B(){function a(a,b,d){e.push([a,b,d])}function b(a,b){for(var d,c=0;d=e[c++];)(d=d[a])&&d(b)}var c,e,d;c=this;e=[];d=function(c,g){a=c?function(a){a&&a(g)}:function(a,b){b&&b(g)};d=m;b(c?0:1,g);b=m;e=C};this.Z=function(b,d,e){a(b,d,e)};this.g=function(a){c.da=a;d(h,a)};this.e=function(a){c.ca=a;d(k,a)};this.p=function(a){b(2,a)}}function E(a,b,c,e){a instanceof B?a.Z(b,c,e):b(a)}function F(a,b,c){var e;return function(){0<=--a&&b&&(e=b.apply(C,arguments));0==a&&c&&c(e);return e}}
function G(){function a(b,d,c,g){var i;i=H.f(I,C,[].concat(b));this.then=b=function(a,b){E(i,function(b){a&&a.apply(C,b)},function(a){if(b)b(a);else throw a;});return this};this.next=function(b,d,e){return new a(b,d,e,i)};d&&b(d,c);E(g,function(){H.i(i)})}var b=[].slice.call(arguments),c;q(b[0],"Object")&&(c=b.shift(),I=H.a(c,I),H.t(c));return new a(b[0],b[1],b[2])}
function J(a){var b=H.h(a.id,I);if(b==C)if(K!==C)K={A:"Multiple anonymous defines in url"};else if(!(b=H.U()))K=a;if(b!=C){var c=L[b];b in L||(c=H.k(b,I).a,c=L[b]=H.v(c,b));if(!(c instanceof B))throw Error("duplicate define: "+b);c.$=k;H.w(c,a)}}
var I,M,N,O=l.document,P=O&&(O.head||O.getElementsByTagName("head")[0]),Q=P&&P.getElementsByTagName("base")[0]||null,R={},S={},T={},U="addEventListener"in l?{}:{loaded:1,complete:1},A={},r=A.toString,C,L={},V=k,K,W=/\?/,X=/^\/|^[^:]+:\/\//,v=/(\.)(\.?)(?:$|\/([^\.\/]+.*)?)/g,Y=/\/\*[\s\S]*?\*\/|(?:[^\\])\/\/.*?[\n\r]/g,Z=/require\s*\(\s*["']([^"']+)["']\s*\)|(?:[^\\]?)(["'])/g,$,H;
H={K:function(a,b){return H.h(u(a,b))},h:function(a,b){return b.c&&a in b.c&&b.c[a].X||a},n:function(a,b){a&&(b.G&&0>a.indexOf("/"))&&(a=s(b.G)+"/"+a);return a},f:function(a,b,c,e){function d(b){return H.h(u(b,g.id),a)}function f(b,c,f){var j,x;j=c&&function(a){c.apply(C,a)};if(q(b,"String")){b=d(b);f=L[b];x=f instanceof B&&f.b;if(!(b in L))throw Error("Module not resolved: "+b);if(j)throw Error("require(id, callback) not allowed");return x||f}E(H.i(H.f(a,g.id,b,e)),j,f)}var g;g=new B;g.id=b||"";
g.V=e;g.z=c;g.a=a;g.q=f;f.toUrl=function(b){return H.k(d(b),a).url};g.K=d;return g},v:function(a,b,c){var e,d,f;e=H.f(a,b,C,c);d=e.g;f=F(1,function(a){e.m=a;try{return H.N(e)}catch(b){e.e(b)}});e.g=function(a){E(c||V,function(){d(L[e.id]=f(a))})};e.B=function(a){E(c||V,function(){e.b&&(f(a),e.p(S))})};return e},L:function(a,b,c,e){return H.f(a,c,C,e)},T:function(a){return a.q},C:function(a){return a.b||(a.b={})},S:function(a){var b=a.o;b||(b=a.o={id:a.id,uri:H.D(a),exports:H.C(a),config:function(){return a.a}},
b.b=b.exports);return b},D:function(a){return a.url||(a.url=H.u(a.q.toUrl(a.id)),a.a)},a:function(a){var b,c,e,d,f,g;b=!a;a&&(H.a=H.F);a||(a={});e=a.apiName||"curl";d=a.apiContext||l;f=a.defineName||"define";g=a.defineContext||l;c=a.overwriteApi;!b&&M&&(l.curl=M,M=k);if(!b&&!c&&d[e]&&d[e]!=G)throw Error(e+" already exists");d[e]=G;if(!b||!l.define){if(!b&&!c&&f in g&&g[f]!=N)throw Error(f+" already exists");g[f]=N=function(){var a=H.R(arguments);J(a)};N.amd={plugins:h,jQuery:h,curl:"0.7.1"}}return H.F(a)},
F:function(a,b){function c(a,b){var e,c,g,t,i;for(i in a){g=a[i];g.name=g.id||g.name||i;t=d;c=w(s(g.name||i));e=c.I;if(c=H.n(c.j,d))t=f[c],t||(t=f[c]=z(d),t.c=z(d.c),t.d=[]),delete a[i];if(b){c=g;var D=void 0;c.path=s(c.path||c.location||"");D=s(c.main)||"main";"."!=D.charAt(0)&&(D="./"+D);c.X=u(D,c.name+"/");c.a=c.config;c.a&&(c.a=z(d,c.a))}else c={path:s(g)};c.J=e.split("/").length;e?(t.c[e]=c,t.d.push(e)):t.s=H.H(g,d)}}function e(a){var b=a.c;a.Y=RegExp("^("+a.d.sort(function(a,c){return b[c].J-
b[a].J}).join("|").replace(/\/|\./g,"\\$&")+")(?=\\/|$)");delete a.d}var d,f,g;b||(b={});d=z(b,a);d.s=d.baseUrl||"";d.G=d.pluginPath||"curl/plugin";d.M=RegExp(d.dontAddFileExt||W);d.c=z(b.c);f=a.plugins||{};d.plugins=z(b.plugins);for(g in f)d.plugins[H.n(g,d)]=f[g];f=d.plugins;d.d=[];c(a.paths,k);c(a.packages,h);for(g in f){f[g]=z(d,f[g]);var i=f[g].d;i&&(f[g].d=i.concat(d.d),e(f[g]))}e(d);return d},t:function(a){var b;(b=a&&a.preloads)&&0<b.length&&E(V,function(){V=H.i(H.f(I,C,b,h))})},k:function(a,
b){var c,e,d,f;c=b.c;d=X.test(a)?a:a.replace(b.Y,function(a){e=c[a]||{};f=e.a;return e.path||""});return{a:f||I,url:H.H(d,b)}},H:function(a,b){var c=b.s;return c&&!X.test(a)?s(c)+"/"+a:a},u:function(a,b){return a+((b||I).M.test(a)?"":".js")},W:function(a,b,c){var e=O.createElement("script");e.onload=e.onreadystatechange=function(c){c=c||l.event;if("load"==c.type||U[e.readyState])delete T[a.id],e.onload=e.onreadystatechange=e.onerror="",b()};e.onerror=function(){c(Error("Syntax or http error: "+a.url))};
e.type=a.aa||"text/javascript";e.charset="utf-8";e.async=!a.ba;e.src=a.url;T[a.id]=e;P.insertBefore(e,Q);return e},O:function(a){var b=[],c;("string"==typeof a?a:a.toSource?a.toSource():a.toString()).replace(Y,"").replace(Z,function(a,d,f){f?c=c==f?C:c:c||b.push(d);return""});return b},R:function(a){var b,c,e,d,f,g;f=a.length;e=a[f-1];d=q(e,"Function")?e.length:-1;2==f?q(a[0],"Array")?c=a[0]:b=a[0]:3==f&&(b=a[0],c=a[1]);!c&&0<d&&(g=h,c=["require","exports","module"].slice(0,d).concat(H.O(e)));return{id:b,
m:c||[],r:0<=d?e:function(){return e},l:g}},N:function(a){var b;b=a.r.apply(a.l?a.b:C,a.m);b===C&&a.b&&(b=a.o?a.b=a.o.b:a.b);return b},w:function(a,b){a.r=b.r;a.l=b.l;a.z=b.m;H.i(a)},i:function(a){function b(a,b,c){g[b]=a;c&&p(a,b)}function c(b,c){var d,e,f,g;d=F(1,function(a){e(a);j(a,c)});e=F(1,function(a){p(a,c)});f=H.P(b,a);(g=f instanceof B&&f.b)&&e(g);E(f,d,a.e,a.b&&function(a){f.b&&(a==R?e(f.b):a==S&&d(f.b))})}function e(){a.g(g)}var d,f,g,i,n,p,j;g=[];f=a.z;i=f.length;0==f.length&&e();p=F(i,
b,function(){a.B&&a.B(g)});j=F(i,b,e);for(d=0;d<i;d++)n=f[d],n in $?(j($[n](a),d,h),a.b&&a.p(R)):n?c(n,d):j(C,d,h);return a},Q:function(a){H.D(a);H.W(a,function(){var b=K;K=C;a.$!==k&&(!b||b.A?a.e(Error(b&&b.A||"define() missing or duplicated: "+a.url)):H.w(a,b))},a.e);return a},P:function(a,b){var c,e,d,f,g,i,n,p,j,x;c=b.K;e=b.V;j=b.a||I;d=w(a);i=d.I;f=d.j?H.h(H.n(u(d.j,b.id),j),j):c(i);n=H.k(f,j);if(d.j)g=f;else if(g=n.a.moduleLoader)i=f,f=g,n=H.k(g,j);d=L[f];f in L||(d=L[f]=H.v(n.a,f,e),d.url=
H.u(n.url,d.a),H.Q(d));f==g&&(p=new B,x=j.plugins[g]||j,E(d,function(a){var b,d,f;f=a.dynamic;i="normalize"in a?a.normalize(i,c,x)||"":c(i);d=g+"!"+i;b=L[d];if(!(d in L)){b=H.L(x,d,i,e);f||(L[d]=b);var j=function(a){b.g(a);f||(L[d]=a)};j.resolve=j;j.reject=j.error=b.e;a.load(i,b.q,j,x)}p!=b&&E(b,p.g,p.e,p.p)},p.e));return p||d},U:function(){var a;if(!q(l.opera,"Opera"))for(var b in T)if("interactive"==T[b].readyState){a=b;break}return a}};$={require:H.T,exports:H.C,module:H.S};G.version="0.7.1";
I=l.curl;"function"==typeof I?(M=I,I=k):l.curl=C;I=H.a(I);H.t(I);L.curl=G;L["curl/_privileged"]={core:H,cache:L,config:function(){return I},_define:J,_curl:G,Promise:B};
}).call(this);
