(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),a=(n(0),n(99)),o={id:"julia",title:"Julia",sidebar_label:"Julia"},l={unversionedId:"julia",id:"julia",isDocsHomePage:!1,title:"Julia",description:"What",source:"@site/docs/segment-julia.md",slug:"/julia",permalink:"/docs/julia",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/segment-julia.md",version:"current",sidebar_label:"Julia",sidebar:"docs",previous:{title:"Golang",permalink:"/docs/golang"},next:{title:"Kubectl Context",permalink:"/docs/kubectl"}},c=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]}],u={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what"},"What"),Object(a.b)("p",null,"Display the currently active julia version when a folder contains julia files."),Object(a.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "julia",\n  "style": "powerline",\n  "powerline_symbol": "\\uE0B0",\n  "foreground": "#ffffff",\n  "background": "#4063D8",\n  "properties": {\n    "prefix": " \\uE624 "\n  }\n}\n')),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"display_version: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - display the julia version - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"true")),Object(a.b)("li",{parentName:"ul"},"missing_command_text: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - text to display when the command is missing - defaults to empty"),Object(a.b)("li",{parentName:"ul"},"display_mode: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - determines when the segment is displayed",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"always"),": The segment is always displayed"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"files"),": The segment is only displayed when ",Object(a.b)("inlineCode",{parentName:"li"},"*.jl")," files are present (default)")))))}p.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||a;return n?i.a.createElement(m,l(l({ref:t},u),{},{components:n})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);