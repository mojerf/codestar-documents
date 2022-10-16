"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[8210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={title:"TDD",description:""},l=void 0,o={unversionedId:"software-engineering/phase05-tdd",id:"software-engineering/phase05-tdd",title:"TDD",description:"",source:"@site/docs/software-engineering/phase05-tdd.md",sourceDirName:"software-engineering",slug:"/software-engineering/phase05-tdd",permalink:"/docs/software-engineering/phase05-tdd",draft:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/software-engineering/phase05-tdd.md",tags:[],version:"current",frontMatter:{title:"TDD",description:""},sidebar:"tutorialSidebar",previous:{title:"Unit Test",permalink:"/docs/software-engineering/phase04-unit-test"},next:{title:"CI/CD",permalink:"/docs/software-engineering/phase06-cicd"}},s={},d=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0645\u0628\u0627\u0646\u06cc TDD",id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-\u0645\u0628\u0627\u0646\u06cc-tdd",level:2},{value:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u0635\u0648\u0644 SOLID \u0648 \u062a\u0627\u062b\u06cc\u0631 \u0622\u0646 \u0628\u0631 TDD",id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u06cc\u0634\u062a\u0631-\u0628\u0627-\u0627\u0635\u0648\u0644-solid-\u0648-\u062a\u0627\u062b\u06cc\u0631-\u0622\u0646-\u0628\u0631-tdd",level:2},{value:"\u0628\u0627\u0632\u0646\u0648\u06cc\u0633\u06cc \u067e\u0631\u0648\u0698\u0647\u0654 \u0633\u0631\u0686 \u0628\u0627 \u0632\u0628\u0627\u0646 #C \u0648 \u0628\u0627 \u0631\u0648\u06cc\u06a9\u0631\u062f TDD",id:"\u0628\u0627\u0632\u0646\u0648\u06cc\u0633\u06cc-\u067e\u0631\u0648\u0698\u0647\u0654-\u0633\u0631\u0686-\u0628\u0627-\u0632\u0628\u0627\u0646-c-\u0648-\u0628\u0627-\u0631\u0648\u06cc\u06a9\u0631\u062f-tdd",level:2},{value:"\u0633\u0627\u062e\u062a\u0646 solution",id:"\u0633\u0627\u062e\u062a\u0646-solution",level:3},{value:"\u0633\u0627\u062e\u062a\u0646 \u06cc\u06a9 \u067e\u0631\u0648\u0698\u0647\u0654 Class Library",id:"\u0633\u0627\u062e\u062a\u0646-\u06cc\u06a9-\u067e\u0631\u0648\u0698\u0647\u0654-class-library",level:3},{value:"\u0633\u0627\u062e\u062a\u0646 \u067e\u0631\u0648\u0698\u0647 \u062a\u0633\u062a",id:"\u0633\u0627\u062e\u062a\u0646-\u067e\u0631\u0648\u0698\u0647-\u062a\u0633\u062a",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0628\u0627 \u0645\u0641\u0627\u0647\u06cc\u0645 Test-driven development\n\u0622\u0634\u0646\u0627 \u0645\u06cc\u200c\u0634\u0648\u06cc\u062f \u0648 \u067e\u0631\u0648\u0698\u0647 \u062c\u0633\u062a\u062c\u0648 \u0631\u0627 \u0628\u0627 \u0627\u06cc\u0646 \u0627\u0644\u06af\u0648 \u0628\u0627\u0632\u0646\u0648\u06cc\u0633\u06cc \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f."),(0,a.kt)("h2",{id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-\u0645\u0628\u0627\u0646\u06cc-tdd"},"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0645\u0628\u0627\u0646\u06cc TDD"),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u062f\u0631\u06a9 \u0645\u0641\u0647\u0648\u0645 TDD\n\u0648 \u0645\u0631\u0627\u062d\u0644 \u0622\u0646 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/javascript-scene/testing-software-what-is-tdd-459b2145405c"},"Testing Software: What is TDD?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/@stevenpcurtis.sc/test-driven-development-tdd-the-advantages-and-disadvantages-5347899ead90"},"Test Driven Development (TDD): The Advantages and Disadvantages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/hackernoon/introduction-to-test-driven-development-tdd-61a13bc92d92"},"Introduction to Test Driven Development (TDD)"))),(0,a.kt)("h2",{id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u06cc\u0634\u062a\u0631-\u0628\u0627-\u0627\u0635\u0648\u0644-solid-\u0648-\u062a\u0627\u062b\u06cc\u0631-\u0622\u0646-\u0628\u0631-tdd"},"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u0635\u0648\u0644 SOLID \u0648 \u062a\u0627\u062b\u06cc\u0631 \u0622\u0646 \u0628\u0631 TDD"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647\u060c \u0641\u06a9\u0631 \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0647\u0631 \u06cc\u06a9 \u0627\u0632 \u0627\u0635\u0648\u0644 SOLID\u060c\n\u0686\u06af\u0648\u0646\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0628\u0631 \u0633\u0627\u062f\u0647\u200c\u062a\u0631 \u0634\u062f\u0646 \u0631\u0648\u0646\u062f TDD\n\u062a\u0627\u062b\u06cc\u0631 \u0628\u06af\u0630\u0627\u0631\u062f. \u0628\u0627 \u0647\u0645\u200c\u062a\u06cc\u0645\u06cc \u062e\u0648\u062f \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0648\u0631\u062f \u0628\u062d\u062b \u06a9\u0646\u06cc\u062f."),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u062f\u0627\u0645\u0647 \u0628\u0631\u0627\u06cc \u062f\u0631\u06a9 \u0627\u06cc\u0646 \u0645\u0648\u0636\u0648\u0639 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/ibm-garage/solid-design-principles-makes-test-driven-development-faster-and-easier-35c9eec22ff1"},"SOLID design principles make test-driven development (TDD) faster and easier")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://softwareengineering.stackexchange.com/a/111868"},"Does test-driven development force me to follow SOLID?"))),(0,a.kt)("h2",{id:"\u0628\u0627\u0632\u0646\u0648\u06cc\u0633\u06cc-\u067e\u0631\u0648\u0698\u0647\u0654-\u0633\u0631\u0686-\u0628\u0627-\u0632\u0628\u0627\u0646-c-\u0648-\u0628\u0627-\u0631\u0648\u06cc\u06a9\u0631\u062f-tdd"},"\u0628\u0627\u0632\u0646\u0648\u06cc\u0633\u06cc \u067e\u0631\u0648\u0698\u0647\u0654 \u0633\u0631\u0686 \u0628\u0627 \u0632\u0628\u0627\u0646 #C \u0648 \u0628\u0627 \u0631\u0648\u06cc\u06a9\u0631\u062f TDD"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647\u060c \u067e\u0631\u0648\u0698\u0647\u0654 \u0633\u0631\u0686 \u062e\u0648\u062f \u0631\u0627 \u06a9\u0647 \u0642\u0628\u0644\u0627\u064b \u062c\u0627\u0648\u0627 \u0646\u0648\u0634\u062a\u0647\u200c\u0627\u06cc\u062f \u0631\u0627 \u0628\u0639\u0646\u0648\u0627\u0646 \u06cc\u06a9 library\n\u0633\u0631\u0686 \u0628\u0647 \u0632\u0628\u0627\u0646 #C\n\u0628\u0627\u0632\u0646\u0648\u06cc\u0633\u06cc \u06a9\u0646\u06cc\u062f. \u062f\u0631 \u0628\u0627\u0632\u0646\u0648\u06cc\u0633\u06cc \u062e\u0648\u062f \u0628\u0647 \u0637\u0648\u0631 \u06a9\u0627\u0645\u0644 \u0631\u0648\u06cc\u06a9\u0631\u062f TDD\n\u0631\u0627 \u0628\u0647 \u06a9\u0627\u0631 \u0628\u0628\u0631\u06cc\u062f \u0648 \u0622\u0645\u0648\u062e\u062a\u0647\u200c\u0647\u0627\u06cc \u062e\u0648\u062f \u0627\u0632 \u0645\u0631\u062d\u0644\u0647\u0654 \u0642\u0628\u0644 \u0631\u0627 \u0627\u0639\u0645\u0627\u0644 \u06a9\u0646\u06cc\u062f."),(0,a.kt)("p",null,"\u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u0631\u0627\u062d\u0644 \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0633\u0627\u062e\u062a\u0646 \u067e\u0631\u0648\u0698\u0647\u0654 \u062e\u0648\u062f \u062f\u0646\u0628\u0627\u0644 \u06a9\u0646\u06cc\u062f."),(0,a.kt)("h3",{id:"\u0633\u0627\u062e\u062a\u0646-solution"},"\u0633\u0627\u062e\u062a\u0646 solution"),(0,a.kt)("p",null,"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u062f\u0631 \u062a\u0631\u0645\u06cc\u0646\u0627\u0644 \u06cc\u06a9 solution\n\u0628\u0633\u0627\u0632\u06cc\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"dotnet new sln -o SampleLibrary\ncd .\\SampleLibrary\\\n")),(0,a.kt)("h3",{id:"\u0633\u0627\u062e\u062a\u0646-\u06cc\u06a9-\u067e\u0631\u0648\u0698\u0647\u0654-class-library"},"\u0633\u0627\u062e\u062a\u0646 \u06cc\u06a9 \u067e\u0631\u0648\u0698\u0647\u0654 Class Library"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u06cc\u06a9 \u067e\u0631\u0648\u0698\u0647\u0654 Net Class Library.\n\u0628\u0633\u0627\u0632\u06cc\u062f. \u0633\u067e\u0633 \u0622\u0646 \u0631\u0627 \u0628\u0647 solution\n\u062e\u0648\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"dotnet new classlib -o .\\SampleLibrary\ndotnet sln add .\\SampleLibrary\\\n")),(0,a.kt)("admonition",{title:"\u200c",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u06a9\u062f \u0634\u0645\u0627\u060c \u062f\u0631 \u0627\u06cc\u0646 \u067e\u0631\u0648\u0698\u0647 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f.")),(0,a.kt)("h3",{id:"\u0633\u0627\u062e\u062a\u0646-\u067e\u0631\u0648\u0698\u0647-\u062a\u0633\u062a"},"\u0633\u0627\u062e\u062a\u0646 \u067e\u0631\u0648\u0698\u0647 \u062a\u0633\u062a"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u06cc\u06a9 \u067e\u0631\u0648\u0698\u0647 \u062a\u0633\u062a \u0628\u0627 \u0641\u0631\u06cc\u0645\u200c\u0648\u0631\u06a9 xUnit\n\u0628\u0633\u0627\u0632\u06cc\u062f\u060c \u0622\u0646 \u0631\u0627 \u0628\u0647 solution\n\u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u0647\u0645\u0686\u0646\u06cc\u0646 \u06cc\u06a9 \u0631\u0641\u0631\u0646\u0633 \u0628\u0647 \u067e\u0631\u0648\u0698\u0647\u0654 Class Library\u0627\u06cc\n\u06a9\u0647 \u0642\u0628\u0644\u0627\u064b \u0633\u0627\u062e\u062a\u0647\u200c\u0627\u06cc\u062f \u0628\u062f\u0647\u06cc\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"dotnet new xunit -o .\\SampleLibrary.Test\ndotnet sln add .\\SampleLibrary.Test\\\ndotnet add .\\SampleLibrary.Test\\ reference .\\SampleLibrary\\\n")),(0,a.kt)("p",null,"\u062a\u0628\u0631\u06cc\u06a9! \u0634\u0645\u0627 \u0633\u0627\u062e\u062a\u0627\u0631 \u067e\u0631\u0648\u0698\u0647\u0654 \u062e\u0648\u062f \u0631\u0627 \u0622\u0645\u0627\u062f\u0647 \u06a9\u0631\u062f\u06cc\u062f. \u062d\u0627\u0644 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0634\u0631\u0648\u0639 \u0628\u0647 \u06a9\u062f \u0632\u062f\u0646 \u06a9\u0646\u06cc\u062f."),(0,a.kt)("p",null,"\u0628\u0627 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0637\u0631\u06cc\u0642 \u067e\u0631\u0648\u0698\u0647\u0654 \u062a\u0633\u062a\u060c \u062a\u0633\u062a\u200c\u0647\u0627\u06cc \u062e\u0648\u062f \u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"dotnet test\n")))}c.isMDXComponent=!0}}]);