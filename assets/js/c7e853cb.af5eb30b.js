"use strict";(self.webpackChunknest_commander_monorepo=self.webpackChunknest_commander_monorepo||[]).push([[15],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?a.createElement(h,s(s({ref:t},m),{},{components:n})):a.createElement(h,s({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4285:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>m,default:()=>p});var a=n(5900),o=n(4750),r=(n(9496),n(9613)),s=["components"],i={title:"CommandTestFactory",sidebar_label:"TestFactory"},l=void 0,c={unversionedId:"testing/factory",id:"testing/factory",title:"CommandTestFactory",description:"To get started with the CommandTestFactory you need to make use of the createTestingCommand, similar to TestingModule's createTestingModule. This command can take in general module metadata, including providers, but generally it's pretty easy to just take in the related module and use overrideProvider for mocking whatever providers are necessary to mock.",source:"@site/docs/testing/factory.md",sourceDirName:"testing",slug:"/testing/factory",permalink:"/nest-commander/docs/testing/factory",editUrl:"https://github.com/jmcdo29/nest-commander/edit/main/apps/docs/docs/testing/factory.md",tags:[],version:"current",frontMatter:{title:"CommandTestFactory",sidebar_label:"TestFactory"},sidebar:"docs",previous:{title:"Installation",permalink:"/nest-commander/docs/testing/installation"},next:{title:"Installation",permalink:"/nest-commander/docs/schematics/installation"}},m=[{value:"Mocking Commands",id:"mocking-commands",children:[],level:2},{value:"Mocking User Input",id:"mocking-user-input",children:[],level:2}],d={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To get started with the ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandTestFactory")," you need to make use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"createTestingCommand"),", similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"TestingModule"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"createTestingModule"),". This command can take in general module metadata, including providers, but generally it's pretty easy to just take in the related module and use ",(0,r.kt)("inlineCode",{parentName:"p"},"overrideProvider")," for mocking whatever providers are necessary to mock."),(0,r.kt)("h2",{id:"mocking-commands"},"Mocking Commands"),(0,r.kt)("p",null,"Normally when running a CLI you'd do something like ",(0,r.kt)("inlineCode",{parentName:"p"},"<cli-name> <command-name> <argument> [options]"),", right, something like ",(0,r.kt)("inlineCode",{parentName:"p"},"crun run 'echo Hello World!'"),", but that's harder to do in a testing environment. With our ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandTestFactory")," instead, we can do something like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/task.command.spec.ts"',title:'"test/task.command.spec.ts"'},"describe('Task Command', () => {\n  let commandInstance: TestingModule;\n\n  beforeAll(async () => {\n    commandInstance = await CommandTestFactory.createTestingCommand({\n      imports: [AppModule]\n    }).compile();\n  });\n\n  it('should call the \"run\" method', async () => {\n    const spawnSpy = jest.spyOn(childProcess, 'spawn');\n    await CommandTestFactory.run(commandInstance, [\n      'run',\n      'echo Hello World!'\n    ]);\n    expect(spawnSpy).toBeCalledWith([\n      'echo Hello World!',\n      { shell: os.userInfo().shell }\n    ]);\n  });\n});\n")),(0,r.kt)("p",null,"Aside from the Jest spies that we're using, you'll notice that we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandTestFactory")," to set up a ",(0,r.kt)("inlineCode",{parentName:"p"},"TestingModule")," and use it to run a test command. We pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command here to match our ",(0,r.kt)("inlineCode",{parentName:"p"},"@Command()")," we already created, but because ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," is the default command, it can be omitted. Then we pass in our arguments as the next array value, and any flags would be array values after it. All of this gets passed on to the commander instance and is processed as usual."),(0,r.kt)("h2",{id:"mocking-user-input"},"Mocking User Input"),(0,r.kt)("p",null,"Now this is great and all, but we also need to be able to mock user inputs, as we allow the ",(0,r.kt)("inlineCode",{parentName:"p"},"InquirerService")," to take in responses to questions. For this, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandTestFactory.setAnswers()"),". We can pass an array of answers to the ",(0,r.kt)("inlineCode",{parentName:"p"},"setAnswers")," method to mock the input gained from the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/task.command.spec.ts"',title:'"test/task.command.spec.ts"'},"describe('Task Command', () => {\n  let commandInstance: TestingModule;\n\n  beforeAll(async () => {\n    commandInstance = await CommandTestFactory.createTestingCommand({\n      imports: [AppModule]\n    }).compile();\n  });\n\n  it('should call the \"run\" method', async () => {\n    CommandTestFactory.setAnswers(['echo Hello World!']);\n    const spawnSpy = jest.spyOn(childProcess, 'spawn');\n    await CommandTestFactory.run(commandInstance, ['run']);\n    expect(spawnSpy).toBeCalledWith([\n      'echo Hello World!',\n      { shell: os.userInfo().shell }\n    ]);\n  });\n});\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The answers passed in will be what are passed back from the ",(0,r.kt)("inlineCode",{parentName:"p"},"InquirerService"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"ask")," method, so make sure to have already transformed the input as the ",(0,r.kt)("inlineCode",{parentName:"p"},"InquirerService")," would."))))}p.isMDXComponent=!0}}]);