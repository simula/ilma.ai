(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2981)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,o=n(2648).Z,l=n(1598).Z,i=n(7273).Z,a=l(n(7294)),s=o(n(3121)),c=n(2675),u=n(139),f=n(8730);n(7238);var d=o(n(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,n,o,l,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&i(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,s=!1;o.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let v=a.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:o,widthInt:l,qualityInt:s,className:c,imgStyle:u,blurStyle:f,isLazy:d,fill:p,placeholder:h,loading:g,srcString:v,config:x,unoptimized:y,loader:w,onLoadRef:b,onLoadingCompleteRef:j,setBlurComplete:_,setShowAltText:E,onLoad:C,onError:S}=e,N=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=d?"lazy":g,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},N,n,{width:l,height:o,decoding:"async","data-nimg":p?"fill":"1",className:c,loading:g,style:r({},u,f),ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,v,h,b,j,_,y))},[v,h,b,j,_,S,y,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,h,b,j,_,y)},onError:e=>{E(!0),"blur"===h&&_(!0),S&&S(e)}})))}),x=a.forwardRef((e,t)=>{let n,o;var l,{src:m,sizes:x,unoptimized:y=!1,priority:w=!1,loading:b,className:j,quality:_,width:E,height:C,fill:S,style:N,onLoad:k,onLoadingComplete:O,placeholder:M="empty",blurDataURL:P,layout:z,objectFit:R,objectPosition:I,lazyBoundary:L,lazyRoot:T}=e,A=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=a.useContext(f.ImageConfigContext),B=a.useMemo(()=>{let e=p||D||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[D]),U=A,F=U.loader||d.default;delete U.loader;let W="__next_img_default"in F;if(W){if("custom"===B.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let Z=F;F=e=>{let{config:t}=e,n=i(e,["config"]);return Z(n)}}if(z){"fill"===z&&(S=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];q&&(N=r({},N,q));let G={responsive:"100vw",fill:"100vw"}[z];G&&!x&&(x=G)}let H="",K=g(E),V=g(C);if("object"==typeof(l=m)&&(h(l)||void 0!==l.src)){let J=h(m)?m.default:m;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(n=J.blurWidth,o=J.blurHeight,P=P||J.blurDataURL,H=J.src,!S){if(K||V){if(K&&!V){let X=K/J.width;V=Math.round(J.height*X)}else if(!K&&V){let $=V/J.height;K=Math.round(J.width*$)}}else K=J.width,V=J.height}}let Q=!w&&("lazy"===b||void 0===b);((m="string"==typeof m?m:H).startsWith("data:")||m.startsWith("blob:"))&&(y=!0,Q=!1),B.unoptimized&&(y=!0),W&&m.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(y=!0);let[Y,ee]=a.useState(!1),[et,en]=a.useState(!1),er=g(_),eo=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:I}:{},et?{}:{color:"transparent"},N),el="blur"===M&&P&&!Y?{backgroundSize:eo.objectFit||"cover",backgroundPosition:eo.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:K,heightInt:V,blurWidth:n,blurHeight:o,blurDataURL:P}),'")')}:{},ei=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:l,sizes:i,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let l=/(^|\s)(1?\d?\d)vw/g,i=[];for(let a;a=l.exec(n);a)i.push(parseInt(a[2]));if(i.length){let s=.01*Math.min(...i);return{widths:o.filter(e=>e>=r[0]*s),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let c=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:c,kind:"x"}}(t,o,i),u=s.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:s.map((e,r)=>"".concat(a({config:t,src:n,quality:l,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:a({config:t,src:n,quality:l,width:s[u]})}}({config:B,src:m,unoptimized:y,width:K,quality:er,sizes:x,loader:F}),ea=m,es={imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:U.crossOrigin},ec=a.useRef(k);a.useEffect(()=>{ec.current=k},[k]);let eu=a.useRef(O);a.useEffect(()=>{eu.current=O},[O]);let ef=r({isLazy:Q,imgAttributes:ei,heightInt:V,widthInt:K,qualityInt:er,className:j,imgStyle:eo,blurStyle:el,loading:b,config:B,fill:S,unoptimized:y,placeholder:M,loader:F,srcString:ea,onLoadRef:ec,onLoadingCompleteRef:eu,setBlurComplete:ee,setShowAltText:en},U);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,Object.assign({},ef,{ref:t})),w?a.default.createElement(s.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src},es))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),i=n(1003),a=n(7795),s=n(4465),c=n(2692),u=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function g(e,t,n,r){if(i.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let n,r;let{href:a,as:h,children:v,prefetch:x,passHref:y,replace:w,shallow:b,scroll:j,locale:_,onClick:E,onMouseEnter:C,onTouchStart:S,legacyBehavior:N=!1}=e,k=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,N&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let O=!1!==x,M=l.default.useContext(c.RouterContext),P=l.default.useContext(u.AppRouterContext),z=null!=M?M:P,R=!M,{href:I,as:L}=l.default.useMemo(()=>{if(!M){let e=m(a);return{href:e,as:h?m(h):e}}let[t,n]=i.resolveHref(M,a,!0);return{href:t,as:h?i.resolveHref(M,h):n||t}},[M,a,h]),T=l.default.useRef(I),A=l.default.useRef(L);N&&(r=l.default.Children.only(n));let D=N?r&&"object"==typeof r&&r.ref:t,[B,U,F]=f.useIntersection({rootMargin:"200px"}),W=l.default.useCallback(e=>{(A.current!==L||T.current!==I)&&(F(),A.current=L,T.current=I),B(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[L,D,I,F,B]);l.default.useEffect(()=>{z&&U&&O&&g(z,I,L,{locale:_})},[L,I,U,_,O,null==M?void 0:M.locale,z]);let Z={ref:W,onClick(e){N||"function"!=typeof E||E(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,n,r,o,a,s,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:s}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};u?l.default.startTransition(h):h()}(e,z,I,L,w,b,j,_,R,O)},onMouseEnter(e){N||"function"!=typeof C||C(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),z&&(O||!R)&&g(z,I,L,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){N||"function"!=typeof S||S(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),z&&(O||!R)&&g(z,I,L,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!N||y||"a"===r.type&&!("href"in r.props)){let q=void 0!==_?_:null==M?void 0:M.locale,G=(null==M?void 0:M.isLocaleDomain)&&d.getDomainLocale(L,q,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);Z.href=G||p.addBasePath(s.addLocale(L,q,null==M?void 0:M.defaultLocale))}return N?l.default.cloneElement(r,Z):l.default.createElement("a",Object.assign({},k,Z),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!l,[u,f]=r.useState(!1),[d,p]=r.useState(null);r.useEffect(()=>{if(l){if(!c&&!u&&d&&d.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),i.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),i.delete(r);let t=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let r=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(r)}},[d,c,n,t,u]);let h=r.useCallback(()=>{f(!1)},[]);return[p,u,h]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:l}=e,i=r||t,a=o||n,s=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},2981:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893);n(4222);var o=n(9008),l=n.n(o),i=n(1664),a=n.n(i),s=n(5675),c=n.n(s);function u(e,t){let{children:n}=e;return(0,r.jsxs)("div",{className:"flex h-screen w-screen flex-col items-center",children:[(0,r.jsx)("header",{className:"flex w-full flex-none justify-center bg-gradient-to-b from-[#ff8100] to-[#ffdc00]",children:(0,r.jsx)("div",{className:"flex w-[800px] flex-row justify-around",children:(0,r.jsxs)("nav",{className:"flex w-full flex-col items-center justify-center p-4 sm:flex-row sm:justify-between",children:[(0,r.jsx)("div",{className:"hover:text-[#007acc]",children:(0,r.jsx)(a(),{href:"/",children:(0,r.jsx)("h1",{className:"text-3xl font-bold",children:"Ilma"})})}),(0,r.jsxs)("ul",{className:"mt-2 flex sm:mt-0",children:[(0,r.jsx)("li",{className:"mx-3 hover:text-[#007acc]",children:(0,r.jsx)(a(),{href:"/team",children:"Team"})}),(0,r.jsx)("li",{className:"mx-3 hover:text-[#007acc]",children:(0,r.jsx)(a(),{href:"/research",children:"Research"})}),(0,r.jsx)("li",{className:"mx-3 hover:text-[#007acc]",children:(0,r.jsx)(a(),{href:"/news",children:"News"})})]})]})})}),(0,r.jsx)("main",{className:"m-5 max-w-[800px] flex-1 text-lg",children:n}),(0,r.jsxs)("footer",{className:"flex w-full flex-col items-center bg-gradient-to-b from-[#ff8100] to-[#ffdc00] py-4",children:[(0,r.jsxs)("div",{className:"flex w-[300px] items-center justify-around",children:[(0,r.jsx)(a(),{href:"https://www.oslomet.no/",children:(0,r.jsx)(c(),{width:100,height:70,className:"w-[100px]",src:"/images/logo.png",alt:"Oslo-met logo"})}),(0,r.jsx)(a(),{href:"https://www.simulamet.no/",children:(0,r.jsx)(c(),{width:100,height:25,className:"w-[100px]",src:"/images/simula-logo.png",alt:"simula-logo"})})]}),(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:"Copyright \xa9 2023"})})]})]})}var f=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(u,{...n,children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"Ilma"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]}),(0,r.jsx)(t,{...n})]})})}},4222:function(){},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);