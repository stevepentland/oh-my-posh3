(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(113)),i={id:"exit",title:"Exit code",sidebar_label:"Exit code"},l={unversionedId:"exit",id:"exit",isDocsHomePage:!1,title:"Exit code",description:"What",source:"@site/docs/segment-exit.md",slug:"/exit",permalink:"/docs/exit",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/segment-exit.md",version:"current",sidebar_label:"Exit code",sidebar:"docs",previous:{title:"Execution Time",permalink:"/docs/executiontime"},next:{title:"Git",permalink:"/docs/git"}},c=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]}],u={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what"},"What"),Object(o.b)("p",null,"Displays the last exit code or that the last command failed based on the configuration."),Object(o.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "exit",\n  "style": "diamond",\n  "foreground": "#ffffff",\n  "background": "#00897b",\n  "leading_diamond": "",\n  "trailing_diamond": "\\uE0B4",\n  "properties": {\n    "display_exit_code": false,\n    "always_enabled": true,\n    "error_color": "#e91e63",\n    "color_background": true,\n    "prefix": "<#193549>\\uE0B0</> \\uE23A"\n  }\n}\n')),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"display_exit_code: ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," - show or hide the exit code - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"always_enabled: ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," - always show the status - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"false")),Object(o.b)("li",{parentName:"ul"},"color_background: ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," - color the background or foreground when an error occurs - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"false")),Object(o.b)("li",{parentName:"ul"},"error_color: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," ",Object(o.b)("a",{parentName:"li",href:"/docs/configure#colors"},"color")," - color to use when an error occured"),Object(o.b)("li",{parentName:"ul"},"always_numeric: ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," - always display exit code as a number - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"false")),Object(o.b)("li",{parentName:"ul"},"success_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - displays when there's no error and ",Object(o.b)("inlineCode",{parentName:"li"},'"always_enabled": true')," - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},'""')),Object(o.b)("li",{parentName:"ul"},"error_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - displays when there's an error - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},'""'))))}d.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(n),p=r,m=s["".concat(i,".").concat(p)]||s[p]||b[p]||o;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);