"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[48],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,m=c["".concat(u,".").concat(d)]||c[d]||g[d]||a;return n?i.createElement(m,l(l({ref:t},p),{},{components:n})):i.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={title:"Unit Testing",description:"No! Half of the taste is in the smell! You're sucking up all the taste units!"},l=void 0,o={unversionedId:"frontend/phase09-unit-testing",id:"frontend/phase09-unit-testing",title:"Unit Testing",description:"No! Half of the taste is in the smell! You're sucking up all the taste units!",source:"@site/docs/frontend/phase09-unit-testing.md",sourceDirName:"frontend",slug:"/frontend/phase09-unit-testing",permalink:"/docs/frontend/phase09-unit-testing",draft:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/frontend/phase09-unit-testing.md",tags:[],version:"current",frontMatter:{title:"Unit Testing",description:"No! Half of the taste is in the smell! You're sucking up all the taste units!"},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/frontend/phase08-authentication"},next:{title:"\u0645\u0647\u0646\u062f\u0633\u06cc \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631",permalink:"/docs/software-engineering"}},u={},s=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc",id:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc",level:2},{value:"\u0631\u0627\u0647\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u062a\u0633\u062a\u200c\u06a9\u0631\u062f\u0646 \u0633\u0627\u0645\u0627\u0646\u0647",id:"\u0631\u0627\u0647\u0647\u0627\u06cc-\u0645\u062e\u062a\u0644\u0641-\u062a\u0633\u062a\u06a9\u0631\u062f\u0646-\u0633\u0627\u0645\u0627\u0646\u0647",level:3},{value:"Manual Testing",id:"manual-testing",level:4},{value:"End-to-End Testing",id:"end-to-end-testing",level:4},{value:"Integration Testing",id:"integration-testing",level:4},{value:"Unit Testing",id:"unit-testing",level:4},{value:"Unit Testing in Angular",id:"unit-testing-in-angular",level:3},{value:"Mocking",id:"mocking",level:3},{value:"\u067e\u0631\u0648\u0698\u0647",id:"\u067e\u0631\u0648\u0698\u0647",level:2}],p={toc:s};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,r.kt)("p",null,"\u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627\u06cc \u0628\u0632\u0631\u06af \u0627\u0632 \u0642\u0633\u0645\u062a\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641\u06cc \u062a\u0634\u06a9\u06cc\u0644 \u0634\u062f\u0647\u200c\u0627\u0646\u062f \u06a9\u0647 \u06af\u0627\u0647\u06cc \u0627\u0648\u0642\u0627\u062a \u0628\u0647 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u0648\u0627\u0628\u0633\u062a\u0647\u200c\u0627\u0646\u062f\n\u0648 \u0628\u0631 \u062d\u0633\u0628 \u0646\u06cc\u0627\u0632 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0628\u062e\u0648\u0627\u0647\u06cc\u062f \u06cc\u06a9\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u0628\u062e\u0634\u200c\u0647\u0627 \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u062f\u061b\n\u0686\u06af\u0648\u0646\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0635\u062d\u062a \u06a9\u0627\u0631\u06a9\u0631\u062f \u0642\u0633\u0645\u062a\u200c\u0647\u0627\u06cc \u0648\u0627\u0628\u0633\u062a\u0647 \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u062d\u0627\u0635\u0644 \u06a9\u0646\u06cc\u062f\u061f\n\u0628\u0631\u0627\u06cc \u067e\u0627\u0633\u062e \u0628\u0647 \u0627\u06cc\u0646 \u0633\u0648\u0627\u0644\u060c \u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0628\u0647 \u0628\u0631\u0631\u0633\u06cc \u0631\u0627\u0647\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u062a\u0633\u062a\u200c\u06a9\u0631\u062f\u0646 \u0633\u0627\u0645\u0627\u0646\u0647 \u0645\u06cc\u200c\u067e\u0631\u062f\u0627\u0632\u06cc\u0645."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0686\u0647 \u0631\u0627\u0647\u200c\u0647\u0627\u06cc\u06cc \u0628\u0631\u0627\u06cc \u062a\u0633\u062a\u200c\u06a9\u0631\u062f\u0646 \u0633\u0627\u0645\u0627\u0646\u0647 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f\u061f"),(0,r.kt)("li",{parentName:"ul"},"\u0645\u0632\u0627\u06cc\u0627 \u0648 \u0645\u0639\u0627\u06cc\u0628 \u0627\u06cc\u0646 \u0631\u0648\u0634\u200c\u0647\u0627 \u0646\u0633\u0628\u062a \u0628\u0647 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u0686\u06cc\u0633\u062a\u061f"),(0,r.kt)("li",{parentName:"ul"},"\u062f\u0631 Angular \u0686\u06af\u0648\u0646\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u062a\u0633\u062a \u0646\u0648\u0634\u062a\u061f"),(0,r.kt)("li",{parentName:"ul"},"\u0686\u06af\u0648\u0646\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0641\u0647\u0645\u06cc\u062f \u0686\u0646\u062f \u062f\u0631\u0635\u062f \u0627\u0632 \u06a9\u062f\u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f \u062a\u0633\u062a \u0634\u062f\u0647\u200c\u0627\u0646\u062f\u061f")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc"},"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc"),(0,r.kt)("h3",{id:"\u0631\u0627\u0647\u0647\u0627\u06cc-\u0645\u062e\u062a\u0644\u0641-\u062a\u0633\u062a\u06a9\u0631\u062f\u0646-\u0633\u0627\u0645\u0627\u0646\u0647"},"\u0631\u0627\u0647\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u062a\u0633\u062a\u200c\u06a9\u0631\u062f\u0646 \u0633\u0627\u0645\u0627\u0646\u0647"),(0,r.kt)("h4",{id:"manual-testing"},"Manual Testing"),(0,r.kt)("p",null,"\u06cc\u06a9\u06cc \u0627\u0632 \u0631\u0627\u0647\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0627\u062d\u062a\u0645\u0627\u0644\u0627\u064b \u062a\u0627 \u06a9\u0646\u0648\u0646 \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0631\u062f\u06cc\u062f\u060c \u062a\u0633\u062a\u200c\u06a9\u0631\u062f\u0646 \u062f\u0633\u062a\u06cc \u0633\u0627\u0645\u0627\u0646\u0647 \u0627\u0633\u062a.\n\u0647\u0631\u0686\u0646\u062f \u06a9\u0647 \u0627\u06cc\u0646 \u0631\u0648\u0634 \u0628\u0633\u06cc\u0627\u0631 \u0633\u0627\u062f\u0647 \u0648 \u0642\u0627\u0628\u0644\u200c\u0641\u0647\u0645 \u0627\u0633\u062a \u0627\u0645\u0627 \u0645\u0639\u0627\u06cc\u0628\u06cc \u062f\u0627\u0631\u062f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0628\u0633\u06cc\u0627\u0631 \u0648\u0642\u062a\u200c\u06af\u06cc\u0631 \u0627\u0633\u062a."),(0,r.kt)("li",{parentName:"ul"},"\u067e\u0633 \u0627\u0632 \u0645\u062f\u062a\u06cc \u0628\u0647 \u06a9\u0627\u0631\u06cc \u062a\u06a9\u0631\u0627\u0631\u06cc \u0648 \u062e\u0633\u062a\u0647\u200c\u06a9\u0646\u0646\u062f\u0647 \u062a\u0628\u062f\u06cc\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,r.kt)("li",{parentName:"ul"},"\u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0627\u0646\u0633\u0627\u0646 \u0627\u0634\u062a\u0628\u0627\u0647 \u06a9\u0646\u062f \u0648 \u0645\u062a\u0648\u062c\u0647 \u0639\u0645\u0644\u06a9\u0631\u062f \u0627\u0634\u062a\u0628\u0627\u0647 \u0633\u0627\u0645\u0627\u0646\u0647 \u0646\u0634\u0648\u062f."),(0,r.kt)("li",{parentName:"ul"},"\u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0627\u0646\u0633\u0627\u0646 \u0641\u0631\u0627\u0645\u0648\u0634 \u06a9\u0646\u062f \u0648 \u0628\u062e\u0634\u06cc \u0627\u0632 \u0633\u0627\u0645\u0627\u0646\u0647 \u0631\u0627 \u062a\u0633\u062a \u0646\u06a9\u0646\u062f.")),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u062d\u0644 \u0645\u0634\u06a9\u0644\u0627\u062a \u0628\u0627\u0644\u0627\u060c \u0627\u0632 \u0631\u0648\u0634\u200c\u0647\u0627\u06cc \u062a\u0633\u062a \u062e\u0648\u062f\u06a9\u0627\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 \u06a9\u0647 \u062f\u0631 \u0627\u062f\u0627\u0645\u0647 \u0628\u0647 \u062a\u0648\u0636\u06cc\u062d \u0622\u0646\u200c\u0647\u0627 \u0645\u06cc\u200c\u067e\u0631\u062f\u0627\u0632\u06cc\u0645."),(0,r.kt)("h4",{id:"end-to-end-testing"},"End-to-End Testing"),(0,r.kt)("p",null,"\u062f\u0631 \u0631\u0648\u0634 e2e \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0627\u06cc \u0645\u06cc\u200c\u0646\u0648\u06cc\u0633\u06cc\u0645 \u06a9\u0647 \u062a\u0645\u0627\u0645 \u0639\u0645\u0644\u06cc\u0627\u062a\u06cc \u06a9\u0647 \u062a\u0648\u0633\u0637 \u06a9\u0627\u0631\u0628\u0631 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f \u0631\u0627 \u0628\u0647 \u062a\u0631\u062a\u06cc\u0628 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u062f.\n\u0627\u06cc\u0646 \u0628\u0631\u0646\u0627\u0645\u0647 \u062e\u0648\u062f \u0631\u0627 \u062c\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u062c\u0627 \u0645\u06cc\u200c\u0632\u0646\u062f \u0648 \u06a9\u0648\u0686\u06a9\u200c\u062a\u0631\u06cc\u0646 \u0627\u0639\u0645\u0627\u0644 \u0627\u0646\u0633\u0627\u0646 \u0631\u0627 \u0646\u06cc\u0632 \u0637\u0628\u0642 \u06cc\u06a9 \u0627\u0644\u06af\u0648\u0631\u06cc\u062a\u0645\u060c \u062e\u0637 \u0628\u0647 \u062e\u0637 \u0627\u062c\u0631\u0627 \u0645\u06cc\u200c\u06a9\u0646\u062f.\n\u0627\u06cc\u0646 \u0631\u0648\u0634 \u0646\u0632\u062f\u06cc\u06a9\u200c\u062a\u0631\u06cc\u0646 \u0631\u0648\u0634 \u0628\u0647 \u062a\u0633\u062a \u062f\u0633\u062a\u06cc \u0627\u0633\u062a \u0627\u0645\u0627 \u0645\u062a\u0627\u0633\u0641\u0627\u0646\u0647 \u0627\u062d\u062a\u06cc\u0627\u062c \u0628\u0647 \u0645\u0646\u0627\u0628\u0639 \u0632\u06cc\u0627\u062f\u06cc \u0627\u0632 \u062c\u0645\u0644\u0647 \u0632\u0645\u0627\u0646 \u062f\u0627\u0631\u062f."),(0,r.kt)("h4",{id:"integration-testing"},"Integration Testing"),(0,r.kt)("p",null,"\u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0628\u0631\u0646\u0627\u0645\u06c0 \u0634\u0645\u0627 \u0628\u0627 \u0686\u0646\u062f \u0628\u0631\u0646\u0627\u0645\u06c0 \u062f\u06cc\u06af\u0631 \u062f\u0631 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627\u0634\u062f.\n\u0628\u0647\u200c\u0639\u0646\u0648\u0627\u0646 \u0645\u062b\u0627\u0644 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0634\u0645\u0627 \u0642\u0633\u0645\u062a \u0641\u0631\u0627\u0646\u062a\u200c\u0627\u0646\u062f \u06cc\u06a9 \u067e\u0631\u0648\u0698\u0647 \u0631\u0627 \u062a\u0648\u0633\u0639\u0647 \u062f\u0647\u06cc\u062f \u0648 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0646\u0648\u06cc\u0633 \u062f\u06cc\u06af\u0631\u06cc \u0642\u0633\u0645\u062a \u0628\u06a9\u200c\u0627\u0646\u062f \u0622\u0646 \u0631\u0627 \u0646\u0648\u0634\u062a\u0647 \u0628\u0627\u0634\u062f.\n\u0628\u0631\u0627\u06cc \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u0627\u0632 \u06cc\u06a9\u067e\u0627\u0631\u0686\u06af\u06cc \u0642\u0633\u0645\u062a\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0648 \u062a\u0639\u0627\u0645\u0644 \u0645\u0646\u0627\u0633\u0628 \u0622\u0646\u200c\u0647\u0627 \u0628\u0627 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u0627\u0632 Integration Testing \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645."),(0,r.kt)("h4",{id:"unit-testing"},"Unit Testing"),(0,r.kt)("p",null,"\u0647\u0645\u0627\u0646\u200c\u0637\u0648\u0631 \u06a9\u0647 \u0627\u0632 \u0627\u0633\u0645 \u0622\u0646 \u0645\u0634\u062e\u0635 \u0627\u0633\u062a\u060c \u062f\u0631 Unit Testing \u0628\u0647 \u062a\u0633\u062a\u200c\u06a9\u0631\u062f\u0646 \u06a9\u0648\u0686\u06a9\u200c\u062a\u0631\u06cc\u0646 \u0627\u062c\u0632\u0627\u0621 \u06cc\u06a9 \u0628\u0631\u0646\u0627\u0645\u0647 \u06cc\u0639\u0646\u06cc \u062a\u0648\u0627\u0628\u0639\u060c \u06a9\u0644\u0627\u0633\u200c\u0647\u0627 \u0648 \u0645\u062a\u063a\u06cc\u0631\u0647\u0627 \u0645\u06cc\u200c\u067e\u0631\u062f\u0627\u0632\u06cc\u0645.\n\u062f\u0631 \u0627\u06cc\u0646 \u0631\u0648\u0634 \u0645\u0639\u0645\u0648\u0644\u0627\u064b \u0628\u0647 \u0638\u0627\u0647\u0631 \u0633\u0627\u06cc\u062a \u06cc\u0627 \u062a\u062c\u0631\u0628\u06c0 \u06a9\u0627\u0631\u0628\u0631 \u062a\u0648\u062c\u0647 \u0646\u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 \u0648 \u0635\u0631\u0641\u0627\u064b \u06a9\u0627\u0631\u06a9\u0631\u062f \u0635\u062d\u06cc\u062d Unit\u0647\u0627 \u0631\u0627 \u0645\u0648\u0631\u062f \u0628\u0631\u0631\u0633\u06cc \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u062f\u0647\u06cc\u0645.\n\u062f\u0631 \u0627\u062f\u0627\u0645\u0647 \u0628\u0647 \u0646\u062d\u0648\u06c0 \u0646\u0648\u0634\u062a\u0646 Unit Test \u062f\u0631 Angular \u0645\u06cc\u200c\u067e\u0631\u062f\u0627\u0632\u06cc\u0645."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unit-testing-in-angular"},"Unit Testing in Angular"),(0,r.kt)("p",null,"\u062e\u0648\u0634\u0628\u062e\u062a\u0627\u0646\u0647 Angular \u0628\u0647\u200c\u0635\u0648\u0631\u062a \u067e\u06cc\u0634\u200c\u0641\u0631\u0636 \u0627\u0632 Unit Testing \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f.\n\u062f\u0631 Angular \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc Karma \u0648 Jasmine \u0628\u0647 \u0646\u0648\u0634\u062a\u0646 \u062a\u0633\u062a \u0628\u067e\u0631\u062f\u0627\u0632\u06cc\u062f.\n\u0627\u06cc\u0646 \u062a\u0633\u062a\u200c\u0647\u0627 \u0628\u0631\u0627\u06cc \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u0627\u0632 \u0639\u0645\u0644\u06a9\u0631\u062f \u0635\u062d\u06cc\u062d \u062a\u0645\u0627\u0645 \u0642\u0633\u0645\u062a\u200c\u0647\u0627\u06cc \u0633\u0627\u0645\u0627\u0646\u0647\u060c\n\u0627\u0639\u0645 \u0627\u0632 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u060c \u0633\u0631\u0648\u06cc\u0633\u200c\u0647\u0627\u060c \u062a\u0648\u0627\u0628\u0639 \u0648 ... \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u0645\u0648\u0631\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0642\u0631\u0627\u0631 \u0628\u06af\u06cc\u0631\u0646\u062f."),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646\u060c \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0627\u0646\u062c\u0627\u0645 \u06a9\u0627\u0631 \u062e\u0627\u0635\u06cc \u0646\u06cc\u0633\u062a\u061b\n\u0635\u0631\u0641\u0627\u064b \u06a9\u0627\u0641\u06cc \u0627\u0633\u062a \u0628\u0627 \u0627\u062c\u0631\u0627\u06cc \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u062f\u0631 Terminal\u060c \u062a\u0633\u062a\u200c\u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f \u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ng test\n")),(0,r.kt)("p",null,"\u0628\u0627 \u0627\u062c\u0631\u0627\u06cc \u062f\u0633\u062a\u0648\u0631 \u0628\u0627\u0644\u0627 \u06cc\u06a9 \u0645\u0631\u0648\u0631\u06af\u0631 \u0628\u0627\u0632 \u062e\u0648\u0627\u0647\u062f \u0634\u062f \u06a9\u0647 \u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u062a\u0633\u062a\u200c\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0634\u0645\u0627 \u0646\u0634\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f\u061b\n\u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f \u06a9\u062f\u0627\u0645\u200c\u06cc\u06a9 \u0627\u0632 \u0622\u0646\u200c\u0647\u0627 \u0645\u0648\u0641\u0642 \u0648 \u06a9\u062f\u0627\u0645\u200c\u06cc\u06a9 \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062f\u0647\u200c\u0627\u0646\u062f."),(0,r.kt)("p",null,"\u0627\u0632 \u0622\u0646\u062c\u0627\u06cc\u06cc \u06a9\u0647 \u0633\u0627\u06cc\u062a Angular \u0628\u0647\u200c\u0637\u0648\u0631 \u06a9\u0627\u0645\u0644 \u062f\u0631 \u0645\u0648\u0631\u062f \u062a\u0633\u062a\u200c\u0646\u0648\u06cc\u0633\u06cc \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u0627\u0633\u062a\u060c\n\u0634\u0645\u0627 \u0631\u0627 \u0628\u0647 \u0645\u0637\u0627\u0644\u0639\u06c0 \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0645\u0631\u0628\u0648\u0637\u0647 \u062f\u0639\u0648\u062a \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645\n\u0648 \u0627\u0632 \u0622\u0648\u0631\u062f\u0646 \u0645\u0637\u0627\u0644\u0628 \u062a\u06a9\u0631\u0627\u0631\u06cc \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0633\u062a\u0646\u062f \u0645\u06cc\u200c\u067e\u0631\u0647\u06cc\u0632\u06cc\u0645."),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://angular.io/guide/testing"},"Angular - Intro to Testing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://angular.io/guide/testing-code-coverage"},"Angular - Code Coverage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://angular.io/guide/testing-services"},"Angular - Testing services")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://angular.io/guide/testing-components-basics"},"Angular - Basics of Testing Components")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://angular.io/guide/testing-components-scenarios"},"Angular - Component Testing Scenarios"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mocking"},"Mocking"),(0,r.kt)("p",null,"\u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u0628\u0647 \u062a\u0633\u062a\u200c\u06a9\u0631\u062f\u0646 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u0633\u0627\u0645\u0627\u0646\u0647 \u0645\u06cc\u200c\u067e\u0631\u062f\u0627\u0632\u06cc\u0645\u060c\n\u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0628\u0627 \u0642\u0633\u0645\u062a\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u062f\u0631 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627\u0634\u062f \u0648 \u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u062a\u0633\u062a\u200c\u0647\u0627\u060c\n\u06a9\u062f\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631\u06cc \u0627\u062d\u062a\u06cc\u0627\u062c \u0628\u0647 \u0627\u062c\u0631\u0627\u0634\u062f\u0646 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u0646\u062f \u06a9\u0647 \u0645\u0645\u06a9\u0646 \u0628\u0627\u0634\u062f \u062f\u0631 \u0639\u0645\u0644\u06a9\u0631\u062f \u0642\u0633\u0645\u062a \u0641\u0639\u0644\u06cc \u062e\u0644\u0644 \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u0646\u062f.\n\u0628\u0647\u200c\u0639\u0646\u0648\u0627\u0646 \u0645\u062b\u0627\u0644 \u0641\u0631\u0636 \u06a9\u0646\u06cc\u062f \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0633\u0631\u0648\u06cc\u0633\u06cc \u0631\u0627 \u062a\u0633\u062a \u06a9\u0646\u06cc\u0645 \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u0646\u062c\u0627\u0645 \u0639\u0645\u0644\u06cc\u0627\u062a\u06cc \u0627\u062d\u062a\u06cc\u0627\u062c \u0628\u0647 \u0641\u0631\u0633\u062a\u0627\u062f\u0646 Request \u0628\u0647 \u0633\u0631\u0648\u0631 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f\u061b\n\u0642\u0637\u0639\u0627\u064b \u0645\u0646\u0637\u0642\u06cc \u0646\u06cc\u0633\u062a \u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u062a\u0633\u062a\u200c\u0647\u0627 \u0646\u06cc\u0627\u0632 \u0628\u0627\u0634\u062f \u0686\u0646\u062f\u0635\u062f \u0645\u06cc\u0644\u06cc\u200c\u062b\u0627\u0646\u06cc\u0647 \u0645\u0646\u062a\u0638\u0631 \u062f\u0631\u06cc\u0627\u0641\u062a \u067e\u0627\u0633\u062e \u0627\u0632 \u0633\u0631\u0648\u0631 \u0628\u0627\u0634\u06cc\u0645\u061b\n\u0627\u0632 \u0637\u0631\u0641\u06cc \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0628\u0647 \u0647\u0631 \u0639\u0644\u062a\u06cc \u0633\u0631\u0648\u0631 \u062f\u0686\u0627\u0631 \u0645\u0634\u06a9\u0644 \u0634\u062f\u0647 \u0628\u0627\u0634\u062f \u0648 \u0646\u062a\u0648\u0627\u0646\u062f \u067e\u0627\u0633\u062e \u062f\u0631\u0633\u062a\u06cc \u0628\u0647 \u0645\u0627 \u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\n\u0648 \u062a\u0633\u062a\u200c\u0647\u0627 Fail \u0634\u0648\u0646\u062f.\n\u062f\u0631 \u0686\u0646\u06cc\u0646 \u0645\u0648\u0627\u0642\u0639\u06cc \u0627\u0632 Mocking \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645\u061b\n\u0628\u0647\u200c\u0637\u0648\u0631\u06cc \u06a9\u0647 \u06cc\u06a9 \u06a9\u0644\u0627\u0633 \u06cc\u0627 \u0634\u06cc\u0621 \u063a\u06cc\u0631\u0648\u0627\u0642\u0639\u06cc \u0645\u06cc\u200c\u0633\u0627\u0632\u06cc\u0645 \u0648 \u0622\u0646 \u0631\u0627 \u062c\u0627\u06cc \u06a9\u0644\u0627\u0633 \u06cc\u0627 \u0634\u06cc\u0621 \u0627\u0635\u0644\u06cc \u062c\u0627 \u0645\u06cc\u200c\u0632\u0646\u06cc\u0645."),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://armno.medium.com/til-mocking-localstorage-and-sessionstorage-in-angular-unit-tests-a765abdc9d87"},"Medium - TIL: Mocking localStorage and sessionStorage in Angular Unit Tests"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u067e\u0631\u0648\u0698\u0647"},"\u067e\u0631\u0648\u0698\u0647"),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u062a\u0645\u0627\u0645 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627 \u0648 \u0633\u0631\u0648\u06cc\u0633\u200c\u0647\u0627\u06cc \u067e\u0631\u0648\u0698\u06c0 \u062e\u0648\u062f Unit Test \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f\n\u0648 \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06cc\u062f \u062d\u062f\u0627\u0642\u0644 80\u062f\u0631\u0635\u062f \u06a9\u062f\u0647\u0627 \u062a\u0633\u062a \u0634\u062f\u0647 \u0628\u0627\u0634\u0646\u062f."),(0,r.kt)("p",null,"\u0627\u0632 \u0647\u0631 \u062f\u0648 \u0639\u0636\u0648\u0650 \u06cc\u06a9\u06cc \u0627\u0632 \u062a\u06cc\u0645\u200c\u0647\u0627 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u06a9\u0646\u06cc\u062f \u062a\u0627 \u06a9\u062f \u0634\u0645\u0627 \u0631\u0627 \u062c\u062f\u0627\u06af\u0627\u0646\u0647 Review \u06a9\u0646\u0646\u062f\u061b\n\u0628\u0639\u062f \u0627\u0632 \u0627\u06cc\u0646\u06a9\u0647 Approve \u06a9\u0631\u062f\u0646\u062f\u060c \u0628\u0647 \u0645\u0646\u062a\u0648\u0631 \u0639\u0627\u062f\u06cc \u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u062f\n\u0648 \u067e\u0633 \u0627\u0632 Approve \u0627\u0648\u060c \u0628\u0647 \u0645\u0646\u062a\u0648\u0631 \u0633\u0646\u06cc\u0648\u0631 \u0628\u06af\u0648\u06cc\u06cc\u062f \u062a\u0627 \u06a9\u062f \u0634\u0645\u0627 \u0631\u0627 \u0628\u0628\u06cc\u0646\u062f."),(0,r.kt)("p",null,"\u0647\u0645\u0686\u0646\u06cc\u0646 \u0644\u0627\u0632\u0645 \u0627\u0633\u062a \u0634\u0645\u0627 \u0647\u0645 \u062d\u062f\u0627\u0642\u0644 \u06a9\u062f \u06cc\u06a9 \u062a\u06cc\u0645 \u062f\u06cc\u06af\u0631 \u0631\u0627 Review \u06a9\u0646\u06cc\u062f.\n\u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f \u062a\u0645\u0627\u0645 \u0645\u0648\u0627\u0631\u062f\u06cc \u06a9\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u06cc\u0627\u062f \u06af\u0631\u0641\u062a\u06cc\u062f \u0631\u0627 \u0647\u0646\u06af\u0627\u0645 Review \u0645\u0648\u0631\u062f \u0628\u0631\u0631\u0633\u06cc \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u062f."))}g.isMDXComponent=!0}}]);