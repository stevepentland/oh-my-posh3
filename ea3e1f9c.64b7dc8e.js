(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(110)),o={id:"python",title:"Python",sidebar_label:"Python"},l={unversionedId:"python",id:"python",isDocsHomePage:!1,title:"Python",description:"What",source:"@site/docs/segment-python.md",slug:"/python",permalink:"/docs/python",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/segment-python.md",version:"current",sidebar_label:"Python",sidebar:"docs",previous:{title:"Path",permalink:"/docs/path"},next:{title:"Root",permalink:"/docs/root"}},p=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]}],c={toc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what"},"What"),Object(a.b)("p",null,"Display the currently active python version and virtualenv.\nSupports conda, virtualenv and pyenv."),Object(a.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "python",\n  "style": "powerline",\n  "powerline_symbol": "\\uE0B0",\n  "foreground": "#100e23",\n  "background": "#906cff",\n  "properties": {\n    "prefix": " \\uE235 "\n  }\n}\n')),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"display_virtual_env: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - show the name of the virtualenv or not - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"true")),Object(a.b)("li",{parentName:"ul"},"display_default_env: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - show the name of the virtualenv when it's default (",Object(a.b)("inlineCode",{parentName:"li"},"system"),", ",Object(a.b)("inlineCode",{parentName:"li"},"base"),")\nor not - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"true")),Object(a.b)("li",{parentName:"ul"},"display_version: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - display the python version - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"true")),Object(a.b)("li",{parentName:"ul"},"display_error: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - show the error context when failing to retrieve the version information - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"true")),Object(a.b)("li",{parentName:"ul"},"missing_command_text: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - text to display when the command is missing - defaults to empty"),Object(a.b)("li",{parentName:"ul"},"display_mode: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - determines when the segment is displayed",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"always"),": the segment is always displayed"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"files"),": the segment is only displayed when ",Object(a.b)("inlineCode",{parentName:"li"},"*.py"),", ",Object(a.b)("inlineCode",{parentName:"li"},"*.ipynb"),", ",Object(a.b)("inlineCode",{parentName:"li"},"pyproject.toml"),", ",Object(a.b)("inlineCode",{parentName:"li"},"venv.bak"),", ",Object(a.b)("inlineCode",{parentName:"li"},"venv"),", or ",Object(a.b)("inlineCode",{parentName:"li"},".venv"),"\nfiles are present (default)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"environment"),": the segment is only displayed when a virtual env is present"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"context"),": the segment is only displayed when either ",Object(a.b)("inlineCode",{parentName:"li"},"environment")," or ",Object(a.b)("inlineCode",{parentName:"li"},"files")," is active")))))}b.isMDXComponent=!0},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||a;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);