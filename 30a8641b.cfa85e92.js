(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(98)),l={id:"executiontime",title:"Execution Time",sidebar_label:"Execution Time"},b={unversionedId:"executiontime",id:"executiontime",isDocsHomePage:!1,title:"Execution Time",description:"What",source:"@site/docs/segment-executiontime.md",slug:"/executiontime",permalink:"/docs/executiontime",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/segment-executiontime.md",version:"current",sidebar_label:"Execution Time",sidebar:"docs",previous:{title:"Environment Variable",permalink:"/docs/environment"},next:{title:"Exit code",permalink:"/docs/exit"}},c=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Style",id:"style",children:[]}],o={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what"},"What"),Object(i.b)("p",null,"Displays the execution time of the previously executed command."),Object(i.b)("p",null,"To use this, use the PowerShell module, or confirm that you are passing an ",Object(i.b)("inlineCode",{parentName:"p"},"execution-time")," argument contianing the elapsed milliseconds to the oh-my-posh executable. The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/installation"}),"installation guide")," shows how to include this argument for PowerShell and Zsh."),Object(i.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "executiontime",\n  "style": "powerline",\n  "powerline_symbol": "\\uE0B0",\n  "foreground": "#ffffff",\n  "background": "#8800dd",\n  "properties": {\n    "threshold": 500,\n    "style": "austin",\n    "prefix": " <#fefefe>\\ufbab</> "\n  }\n}\n')),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"threshold: ",Object(i.b)("inlineCode",{parentName:"li"},"number")," - minimum duration (milliseconds) required to enable this segment - defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"500")),Object(i.b)("li",{parentName:"ul"},"style: ",Object(i.b)("inlineCode",{parentName:"li"},"enum")," - one of the available format options - defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"austin"))),Object(i.b)("h2",{id:"style"},"Style"),Object(i.b)("p",null,"Style specifies the format in which the time will be displayed. The table below shows some example times in each option."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"format"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"0.001s"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"2.1s"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"3m2.1s"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"4h3m2.1s"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"austin"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"1ms")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"2.1s")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"3m 2.1s")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"4h 3m 2.1s"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"roundrock"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"1ms")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"2s 100ms")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"3m 2s 100ms")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"4h 3m 2s 100ms"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"dallas"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"0.001")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"2.1")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"3:2.1")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"4:3:2.1"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"galveston"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"00:00:00")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"00:00:02")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"00:03:02")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"04:03:02"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"houston"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"00:00:00.001")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"00:00:02.1")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"00:03:02.1")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"04:03:02.1"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"amarillo"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"0.001s")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"2.1s")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"182.1s")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"14,582.1s"))))))}d.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,O=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return n?r.a.createElement(O,b(b({ref:t},o),{},{components:n})):r.a.createElement(O,b({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);