(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var o=n(2),a=n(6),r=(n(0),n(99)),i={id:"configure",title:"Configuration",sidebar_label:"\u2699\ufe0f Configuration"},l={unversionedId:"configure",id:"configure",isDocsHomePage:!1,title:"Configuration",description:"Oh my Posh renders your prompt based on the definition of blocks (like Lego) which contain or more segments.",source:"@site/docs/configuration.md",slug:"/configure",permalink:"/docs/configure",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/configuration.md",version:"current",sidebar_label:"\u2699\ufe0f Configuration",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Themes",permalink:"/docs/themes"}},b=[{value:"General Settings",id:"general-settings",children:[{value:"Console Title Style",id:"console-title-style",children:[]},{value:"Console Title Template",id:"console-title-template",children:[]}]},{value:"Block",id:"block",children:[{value:"Type",id:"type",children:[]},{value:"Alignment",id:"alignment",children:[]},{value:"Vertical offset",id:"vertical-offset",children:[]},{value:"Horizontal offset",id:"horizontal-offset",children:[]},{value:"Segments",id:"segments",children:[]}]},{value:"Segment",id:"segment",children:[{value:"Type",id:"type-1",children:[]},{value:"Style",id:"style",children:[]},{value:"Powerline symbol",id:"powerline-symbol",children:[]},{value:"Invert Powerline",id:"invert-powerline",children:[]},{value:"Leading diamond",id:"leading-diamond",children:[]},{value:"Trailing diamond",id:"trailing-diamond",children:[]},{value:"Foreground",id:"foreground",children:[]},{value:"Background",id:"background",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Hyperlinks",id:"hyperlinks",children:[]}]},{value:"Full Sample",id:"full-sample",children:[]}],c={rightToc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Oh my Posh renders your prompt based on the definition of ",Object(r.b)("em",{parentName:"p"},"blocks")," (like Lego) which contain or more ",Object(r.b)("em",{parentName:"p"},"segments"),".\nA really simple configuration could look like this."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "final_space": true,\n  "blocks": [\n    {\n      "type": "prompt",\n      "alignment": "left",\n      "segments": [\n        {\n          "type": "path",\n          "style": "powerline",\n          "powerline_symbol": "\\uE0B0",\n          "foreground": "#ffffff",\n          "background": "#61AFEF",\n          "properties": {\n            "prefix": " \\uE5FF ",\n            "style": "folder"\n          }\n        }\n      ]\n    }\n  ]\n}\n')),Object(r.b)("p",null,"With this configuration, a single powerline segment is rendered that shows the name of the folder you're currently in.\nTo set this configuration in combination with a Oh my Posh ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest"}),"executable"),", use the ",Object(r.b)("inlineCode",{parentName:"p"},"--config")," flag to\nset a path to a json file containing the above code. The ",Object(r.b)("inlineCode",{parentName:"p"},"--shell universal")," flag is used to print the prompt without\nescape characters to see the prompt as it would be shown inside a prompt function for your shell."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The command below will not persist the configuration for your shell but print the prompt in your terminal.\nIf you want to use your own configuration permanently, adjust the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/installation#4-replace-your-existing-prompt"}),"prompt configuration")," to use your custom\ntheme."))),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"oh-my-posh --config sample.json --shell universal\n")),Object(r.b)("p",null,"If all goes according to plan, you should see the prompt being printed out on the line below. In case you see a lot of\nboxes with question marks, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/installation#1-setup-your-terminal"}),"set up your terminal")," to use a supported font before continuing."),Object(r.b)("h2",{id:"general-settings"},"General Settings"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"final_space: ",Object(r.b)("inlineCode",{parentName:"li"},"boolean")," - when true adds a space at the end of the prompt"),Object(r.b)("li",{parentName:"ul"},"console_title: ",Object(r.b)("inlineCode",{parentName:"li"},"boolean")," - when true sets the current location as the console title"),Object(r.b)("li",{parentName:"ul"},"console_title_style: ",Object(r.b)("inlineCode",{parentName:"li"},"string")," - the title to set in the console - defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"folder")),Object(r.b)("li",{parentName:"ul"},"console_title_template: ",Object(r.b)("inlineCode",{parentName:"li"},"string")," - the template to use when ",Object(r.b)("inlineCode",{parentName:"li"},'"console_title_style" = "template"')," - defaults\nto ",Object(r.b)("inlineCode",{parentName:"li"},"{{ .Shell }} in {{ .Folder }}"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'"I Like The Way You Speak Words" - Gary Goodspeed')),Object(r.b)("h3",{id:"console-title-style"},"Console Title Style"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"folder"),": show the current folder name"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"path"),": show the current path"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"template"),": show a custom template")),Object(r.b)("h3",{id:"console-title-template"},"Console Title Template"),Object(r.b)("p",null,"You can create a more custom console title with the use of ",Object(r.b)("inlineCode",{parentName:"p"},'"console_title_style" = "template"'),".\nWhen this is set, a ",Object(r.b)("inlineCode",{parentName:"p"},"console_title_template")," is also expected, otherwise the title will remain empty.\nUnder the hood this uses go's ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://golang.org/pkg/text/template/"}),"text/template")," feature and offers a few standard\nproperties to work with."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".Root"),": ",Object(r.b)("inlineCode",{parentName:"li"},"boolean")," - is the current user root/admin or not"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".Path"),": ",Object(r.b)("inlineCode",{parentName:"li"},"string")," - the current working directory"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".Folder"),": ",Object(r.b)("inlineCode",{parentName:"li"},"string")," - the current working folder"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".Shell"),": ",Object(r.b)("inlineCode",{parentName:"li"},"string")," - the current shell name"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".Env.VarName"),": ",Object(r.b)("inlineCode",{parentName:"li"},"string")," - Any environment variable where ",Object(r.b)("inlineCode",{parentName:"li"},"VarName")," is the environment variable name")),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," can be used for conditional display purposes, a ",Object(r.b)("inlineCode",{parentName:"p"},"string")," can be displayed."),Object(r.b)("p",null,"The following examples illustrate possible contents for ",Object(r.b)("inlineCode",{parentName:"p"},"console_title_template"),", provided\nthe current working directory is ",Object(r.b)("inlineCode",{parentName:"p"},"/usr/home/omp")," and the shell is ",Object(r.b)("inlineCode",{parentName:"p"},"zsh"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n    "console_title_template": "{{.Folder}}{{if .Root}} :: root{{end}} :: {{.Shell}}",\n    // outputs:\n    // when root == false: omp :: zsh\n    // when root == true: omp :: root :: zsh\n    "console_title_template": "{{.Folder}}", // outputs: omp\n    "console_title_template": "{{.Shell}} in {{.Path}}", // outputs: zsh in /usr/home/omp\n    "console_title_template": "{{Env..USERDOMAIN}} {{.Shell}} in {{.Path}}", // outputs: MyCompany zsh in /usr/home/omp\n}\n')),Object(r.b)("h2",{id:"block"},"Block"),Object(r.b)("p",null,"Let's take a closer look at what defines a block."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"type: ",Object(r.b)("inlineCode",{parentName:"li"},"prompt")," | ",Object(r.b)("inlineCode",{parentName:"li"},"rprompt")," | ",Object(r.b)("inlineCode",{parentName:"li"},"newline")),Object(r.b)("li",{parentName:"ul"},"alignment: ",Object(r.b)("inlineCode",{parentName:"li"},"left")," | ",Object(r.b)("inlineCode",{parentName:"li"},"right")),Object(r.b)("li",{parentName:"ul"},"vertical_offset: ",Object(r.b)("inlineCode",{parentName:"li"},"int")),Object(r.b)("li",{parentName:"ul"},"horizontal_offset: ",Object(r.b)("inlineCode",{parentName:"li"},"int")),Object(r.b)("li",{parentName:"ul"},"segments: ",Object(r.b)("inlineCode",{parentName:"li"},"array")," of one or more ",Object(r.b)("inlineCode",{parentName:"li"},"segments"))),Object(r.b)("h3",{id:"type"},"Type"),Object(r.b)("p",null,"Tells the engine what to do with the block. There are three options:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"prompt")," renders one or more segments"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"rprompt")," renders one or more segments aligned to the right of the cursor. Only one ",Object(r.b)("inlineCode",{parentName:"li"},"rprompt")," block is permitted.\nSupported on ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://scriptingosx.com/2019/07/moving-to-zsh-06-customizing-the-zsh-prompt/"}),"ZSH")," and Powershell."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"newline")," inserts a new line to start the next block on a new line. ",Object(r.b)("inlineCode",{parentName:"li"},"newline")," blocks require no additional\nconfiguration other than the ",Object(r.b)("inlineCode",{parentName:"li"},"type"),".")),Object(r.b)("h3",{id:"alignment"},"Alignment"),Object(r.b)("p",null,"Tell the engine if the block should be left or right aligned."),Object(r.b)("h3",{id:"vertical-offset"},"Vertical offset"),Object(r.b)("p",null,"Move the block up or down x lines. For example ",Object(r.b)("inlineCode",{parentName:"p"},"vertical_offset: 1")," moves the prompt down one line, ",Object(r.b)("inlineCode",{parentName:"p"},"vertical_offset: -1"),"\nmoves it up one line."),Object(r.b)("h3",{id:"horizontal-offset"},"Horizontal offset"),Object(r.b)("p",null,"Moves the segment to the left or the right to have it exactly where you want it to be. Works like ",Object(r.b)("inlineCode",{parentName:"p"},"vertical_offset"),"\nbut on a horizontal level where a negative number moves the block left and a positive number right."),Object(r.b)("h3",{id:"segments"},"Segments"),Object(r.b)("p",null,"Array of one or more segments."),Object(r.b)("h2",{id:"segment"},"Segment"),Object(r.b)("p",null,"A segments is a part of the prompt with a certain context. There are different types available out of the box, if you're\nlooking for what's included, feel free to skip this part and browse through the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/battery"}),"segments"),". Keep reading to\nunderstand how to configure a segment."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"type: ",Object(r.b)("inlineCode",{parentName:"li"},"string")," any of the included ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/battery"}),"segments")),Object(r.b)("li",{parentName:"ul"},"style: ",Object(r.b)("inlineCode",{parentName:"li"},"powerline")," | ",Object(r.b)("inlineCode",{parentName:"li"},"plain")," | ",Object(r.b)("inlineCode",{parentName:"li"},"diamond")),Object(r.b)("li",{parentName:"ul"},"powerline_symbol: ",Object(r.b)("inlineCode",{parentName:"li"},"string")),Object(r.b)("li",{parentName:"ul"},"invert_powerline: ",Object(r.b)("inlineCode",{parentName:"li"},"boolean")),Object(r.b)("li",{parentName:"ul"},"leading_diamond: ",Object(r.b)("inlineCode",{parentName:"li"},"string")),Object(r.b)("li",{parentName:"ul"},"trailing_diamond: ",Object(r.b)("inlineCode",{parentName:"li"},"string")),Object(r.b)("li",{parentName:"ul"},"foreground: ",Object(r.b)("inlineCode",{parentName:"li"},"string")," ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#colors"}),"color")),Object(r.b)("li",{parentName:"ul"},"background: ",Object(r.b)("inlineCode",{parentName:"li"},"string")," ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#colors"}),"color")),Object(r.b)("li",{parentName:"ul"},"properties: ",Object(r.b)("inlineCode",{parentName:"li"},"array")," of ",Object(r.b)("inlineCode",{parentName:"li"},"Property"),": ",Object(r.b)("inlineCode",{parentName:"li"},"string"))),Object(r.b)("h3",{id:"type-1"},"Type"),Object(r.b)("p",null,"Takes the ",Object(r.b)("inlineCode",{parentName:"p"},"string")," value referencing which segment logic it needs to run (see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/battery"}),"segments")," for possible values)."),Object(r.b)("h3",{id:"style"},"Style"),Object(r.b)("p",null,"Oh Hi! You made it to a really interesting part, great! Style defines how a prompt is rendered. Looking at most prompt\nthemes out there, we identified 3 types. All of these require a different configuration and depending on the look\nyou want to achieve you might need to understand/use them all."),Object(r.b)("h4",{id:"powerline"},"Powerline"),Object(r.b)("p",null,"What started it all for us. Makes use of a single symbol (",Object(r.b)("inlineCode",{parentName:"p"},"powerline_symbol"),") to separate the segments. It takes the\nbackground color of the previous segment (or transparent if none) and the foreground of the current one (or transparent\nif we're at the last segment). Expects segments to have a colored background, else there little use for this one."),Object(r.b)("h4",{id:"plain"},"Plain"),Object(r.b)("p",null,"Simple. Colored text on a transparent background. Make sure to set ",Object(r.b)("inlineCode",{parentName:"p"},"foreground")," for maximum enjoyment."),Object(r.b)("h4",{id:"diamond"},"Diamond"),Object(r.b)("p",null,"While Powerline works great with as single symbol, sometimes you want a segment to have a different start and end symbol.\nJust like a diamond: ",Object(r.b)("inlineCode",{parentName:"p"},"< my segment text >"),". The difference between this and plain is that the diamond symbols take the\nsegment background as their foreground color."),Object(r.b)("h3",{id:"powerline-symbol"},"Powerline symbol"),Object(r.b)("p",null,"Text character to use when ",Object(r.b)("inlineCode",{parentName:"p"},'"style": "powerline"'),"."),Object(r.b)("h3",{id:"invert-powerline"},"Invert Powerline"),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"true")," this swaps the foreground and background colors. Can be useful when the character you want does not exist\nin the perfectly mirrored variant for example."),Object(r.b)("h3",{id:"leading-diamond"},"Leading diamond"),Object(r.b)("p",null,"Text character to use at the start of the segment. Will take the background color of the segment as\nits foreground color."),Object(r.b)("h3",{id:"trailing-diamond"},"Trailing diamond"),Object(r.b)("p",null,"Text character to use at the end of the segment. Will take the background color of the segment as its foreground color."),Object(r.b)("h3",{id:"foreground"},"Foreground"),Object(r.b)("p",null,"Hex ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#colors"}),"color")," to use as the segment text foreground color. Also supports transparency using the ",Object(r.b)("inlineCode",{parentName:"p"},"transparent")," keyword."),Object(r.b)("h3",{id:"background"},"Background"),Object(r.b)("p",null,"Hex ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#colors"}),"color")," to use as the segment text background color. Also supports transparency using the ",Object(r.b)("inlineCode",{parentName:"p"},"transparent")," keyword."),Object(r.b)("h3",{id:"properties"},"Properties"),Object(r.b)("p",null,"An array of ",Object(r.b)("strong",{parentName:"p"},"Properties")," with a value. This is used inside of the segment logic to tweak what the output of the segment\nwill be. Segments have the ability to define their own Properties, but there are some general ones being used by the\nengine which allow you to customize the output even more."),Object(r.b)("h4",{id:"general-purpose-properties"},"General purpose properties"),Object(r.b)("p",null,"You can use these on any segment, the engine is responsible for adding them correctly."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"prefix: ",Object(r.b)("inlineCode",{parentName:"li"},"string")),Object(r.b)("li",{parentName:"ul"},"postfix: ",Object(r.b)("inlineCode",{parentName:"li"},"string")),Object(r.b)("li",{parentName:"ul"},"ignore_folders: ",Object(r.b)("inlineCode",{parentName:"li"},"[]string"))),Object(r.b)("h5",{id:"prefix"},"Prefix"),Object(r.b)("p",null,"The string content will be put in front of the segment's output text. Useful for symbols, text or other customizations."),Object(r.b)("h5",{id:"postfix"},"Postfix"),Object(r.b)("p",null,"The string content will be put after the segment's output text. Useful for symbols, text or other customizations."),Object(r.b)("h5",{id:"ignore-folders"},"Ignore Folders"),Object(r.b)("p",null,"Sometimes you want might want to not have a segment rendered at a certain location. If so, adding the path to the\nsegment's configuration will not render it when in that location. The engine will simply skip it."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"ignore_folders": [\n  "/super/secret/project"\n]\n')),Object(r.b)("p",null,"You can also specify a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.regular-expressions.info/tutorial.html"}),"regular expression")," to create wildcards to exclude certain folders.\nIn the sample below, folders inside the ",Object(r.b)("inlineCode",{parentName:"p"},"/Users/posh/Projects")," path will not show the segment."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"ignore_folders": [\n  "/Users/posh/Projects/.*"\n]\n')),Object(r.b)("p",null,"Want to only show the segment inside certain folders? Use the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.regular-expressions.info/lookaround.html"}),"negative lookahead")," to only match folders\nin a certain path. Everything else will be ignored. In the sample below, only folders inside the\n",Object(r.b)("inlineCode",{parentName:"p"},"/Users/posh/Projects/")," path will show the segment."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"ignore_folders": [\n  "(?!/Users/posh/Projects/).*"\n]\n')),Object(r.b)("h4",{id:"colors"},"Colors"),Object(r.b)("p",null,"You have the ability to override the foreground and/or background color for text in any property that accepts it.\nThe syntax is custom but should be rather straighforward:\n",Object(r.b)("inlineCode",{parentName:"p"},"<#ffffff,#000000>this is white with black background</> <#FF479C>but this is pink</>"),". Anything between the color start\n",Object(r.b)("inlineCode",{parentName:"p"},"<#FF479C>")," and end ",Object(r.b)("inlineCode",{parentName:"p"},"</>")," will be colored accordingly."),Object(r.b)("p",null,"For example, if you want ",Object(r.b)("inlineCode",{parentName:"p"},"prefix")," to print a colored bracket which isn't the same as the segment's ",Object(r.b)("inlineCode",{parentName:"p"},"foreground"),", you can\ndo so like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"prefix": "<#CB4B16>\u250f[</>",\n')),Object(r.b)("p",null,"If you also wanted to change the background color in the previous command, you would do so like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"prefix": "<#CB4B16,#FFFFFF>\u250f[</>",\n')),Object(r.b)("p",null,"To change ",Object(r.b)("em",{parentName:"p"},"only")," the background color, just omit the first color from the above string:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"prefix": "<,#FFFFFF>\u250f[</>",\n')),Object(r.b)("p",null,"Oh my Posh mainly supports three different color types being"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Typical ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex colors")," (for example ",Object(r.b)("inlineCode",{parentName:"p"},"#CB4B16"),").")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"transparent")," keyword which can be used to create either a transparent foreground override\nor transparent background color using the segment's foreground property.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"16 ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"ANSI color names"),"."),Object(r.b)("p",{parentName:"li"},"These include 8 basic ANSI colors and ",Object(r.b)("inlineCode",{parentName:"p"},"default"),":"),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"black")," ",Object(r.b)("inlineCode",{parentName:"p"},"red")," ",Object(r.b)("inlineCode",{parentName:"p"},"green")," ",Object(r.b)("inlineCode",{parentName:"p"},"yellow")," ",Object(r.b)("inlineCode",{parentName:"p"},"blue")," ",Object(r.b)("inlineCode",{parentName:"p"},"magenta")," ",Object(r.b)("inlineCode",{parentName:"p"},"cyan")," ",Object(r.b)("inlineCode",{parentName:"p"},"white")," ",Object(r.b)("inlineCode",{parentName:"p"},"default")),Object(r.b)("p",{parentName:"li"},"as well as 8 extended ANSI colors:"),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"darkGray")," ",Object(r.b)("inlineCode",{parentName:"p"},"lightRed")," ",Object(r.b)("inlineCode",{parentName:"p"},"lightGreen")," ",Object(r.b)("inlineCode",{parentName:"p"},"lightYellow")," ",Object(r.b)("inlineCode",{parentName:"p"},"lightBlue")," ",Object(r.b)("inlineCode",{parentName:"p"},"lightMagenta")," ",Object(r.b)("inlineCode",{parentName:"p"},"lightCyan")," ",Object(r.b)("inlineCode",{parentName:"p"},"lightWhite")))),Object(r.b)("h3",{id:"hyperlinks"},"Hyperlinks"),Object(r.b)("p",null,"The engine has the ability to render hyperlinks. Your terminal has to support it and the option\nhas to be enabled at the segment level. Hyperlink generation is disabled by default."),Object(r.b)("h4",{id:"supported-segments"},"Supported segments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/path"}),"Path"))),Object(r.b)("h4",{id:"supported-terminals"},"Supported terminals"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda"}),"Terminal list"))),Object(r.b)("h2",{id:"full-sample"},"Full Sample"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "final_space": true,\n  "blocks": [\n    {\n      "type": "prompt",\n      "alignment": "right",\n      "vertical_offset": -1,\n      "segments": [\n        {\n          "type": "time",\n          "style": "plain",\n          "foreground": "#007ACC",\n          "properties": {\n            "time_format": "15:04:05"\n          }\n        }\n      ]\n    },\n    {\n      "type": "newline"\n    },\n    {\n      "type": "prompt",\n      "alignment": "left",\n      "segments": [\n        {\n          "type": "session",\n          "style": "diamond",\n          "foreground": "#ffffff",\n          "background": "#ffb300",\n          "leading_diamond": "\\uE0B6",\n          "trailing_diamond": "\\uE0B0",\n          "properties": {\n            "postfix": " "\n          }\n        },\n        {\n          "type": "path",\n          "style": "powerline",\n          "powerline_symbol": "\\uE0B0",\n          "foreground": "#ffffff",\n          "background": "#61AFEF",\n          "properties": {\n            "prefix": " \\uE5FF ",\n            "style": "folder",\n            "ignore_folders": [\n              "/super/secret/project"\n            ],\n            "enable_hyperlink": false\n          }\n        },\n        {\n          "type": "git",\n          "style": "powerline",\n          "powerline_symbol": "\\uE0B0",\n          "foreground": "#193549",\n          "background": "#ffeb3b"\n        },\n        {\n          "type": "exit",\n          "style": "diamond",\n          "foreground": "#ffffff",\n          "background": "#00897b",\n          "leading_diamond": "",\n          "trailing_diamond": "\\uE0B4",\n          "properties": {\n            "display_exit_code": false,\n            "always_enabled": true,\n            "error_color": "#e91e63",\n            "color_background": true,\n            "prefix": "<#193549>\\uE0B0 \\uE23A</>"\n          }\n        }\n      ]\n    }\n  ]\n}\n')))}s.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return n?a.a.createElement(u,l(l({ref:t},c),{},{components:n})):a.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);