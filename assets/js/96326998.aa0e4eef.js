/*! For license information please see 96326998.aa0e4eef.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[775518],{813212:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(824246),s=r(511151);const a={id:"v1.1.0",title:"v1.1.0",description:"Backstage Release v1.1.0"},o=void 0,i={id:"releases/v1.1.0",title:"v1.1.0",description:"Backstage Release v1.1.0",source:"@site/../docs/releases/v1.1.0.md",sourceDirName:"releases",slug:"/releases/v1.1.0",permalink:"/docs/releases/v1.1.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.1.0.md",tags:[],version:"current",frontMatter:{id:"v1.1.0",title:"v1.1.0",description:"Backstage Release v1.1.0"},sidebar:"releases",previous:{title:"v1.2.0",permalink:"/docs/releases/v1.2.0"},next:{title:"v1.0.0",permalink:"/docs/releases/v1.0.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"Auth",id:"auth",level:3},{value:"CLI",id:"cli",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Permissions",id:"permissions",level:3},{value:"Stack Overflow",id:"stack-overflow",level:3},{value:"Misc",id:"misc",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["These are the release notes for the v1.1.0 release of ",(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,n.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(t.h3,{id:"auth",children:"Auth"}),"\n",(0,n.jsxs)(t.p,{children:["The auth ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/auth-backend",children:"backend"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/auth-node",children:"node package"})," received a few ",(0,n.jsx)(t.strong,{children:"BREAKING"})," changes."]}),"\n",(0,n.jsxs)(t.p,{children:["You are now required to always return a ",(0,n.jsx)(t.code,{children:"token"})," from the result of a sign-in resolver, and all default sign-in resolvers have been removed. This means that you will have to make a conscious choice to use one of a few predefined resolver functions to be able to use a given auth provider for signing in, or to write your own. Don\u2019t worry, it\u2019s actually rather straightforward to do, and ends up clarifying responsibilities for safe authentication and catalog ownership."]}),"\n",(0,n.jsx)(t.p,{children:"There are also a number of deprecations among the exported auth backend types, which you may want to adapt to."}),"\n",(0,n.jsxs)(t.p,{children:["For more information, see the relevant ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/auth/identity-resolver",children:"documentation section"})," about sign-in resolvers, and the ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/auth-backend/CHANGELOG.md#0130",children:"backend"}),"/",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/auth-node/CHANGELOG.md#020",children:"node"})," changelogs."]}),"\n",(0,n.jsx)(t.h3,{id:"cli",children:"CLI"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/cli",children:"CLI"})," has bumped the ",(0,n.jsx)(t.code,{children:"jest"})," version from ",(0,n.jsx)(t.code,{children:"^26.0.1"})," to ",(0,n.jsx)(t.code,{children:"^27.5.1"}),". You can find the complete list of breaking changes ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/jest/releases/tag/v27.0.0",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["We strongly recommend having completed the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/tutorials/package-role-migration",children:"package role migration"})," before upgrading to this version, as the package roles are used to automatically determine the testing environment for each package."]}),"\n",(0,n.jsxs)(t.p,{children:["Note that one of the breaking changes of Jest 27 is that the ",(0,n.jsx)(t.code,{children:"jsdom"})," environment no longer includes ",(0,n.jsx)(t.code,{children:"setImmediate"})," and ",(0,n.jsx)(t.code,{children:"clearImmediate"}),", which means you might need to update some of your frontend packages. Another notable change is that ",(0,n.jsx)(t.code,{children:"jest.useFakeTimers"})," now defaults to the ",(0,n.jsx)(t.code,{children:"'modern'"})," implementation, which also mocks microtasks."]}),"\n",(0,n.jsx)(t.h3,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/kubernetes-backend",children:"Kubernetes backend"})," has a ",(0,n.jsx)(t.strong,{children:"BREAKING"})," change, in that cluster suppliers now need to cache their results to allow frequent calls to their methods. This was done to pave the way for custom suppliers that dynamically fetch results from the real authority, instead of hard coding them in config. Thanks ",(0,n.jsx)(t.a,{href:"https://github.com/heyLu",children:"@heyLu"}),"! (",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/10428",children:"#10428"}),")"]}),"\n",(0,n.jsx)(t.h3,{id:"permissions",children:"Permissions"}),"\n",(0,n.jsxs)(t.p,{children:["The permission related packages received a number of ",(0,n.jsx)(t.strong,{children:"BREAKING"})," changes. Among other things, the names of types were settled to be made more crisp and clear. This will mostly apply to those who write custom permissions. This all goes to the ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/permission-common/CHANGELOG.md#060",children:"common"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/permission-node/CHANGELOG.md#060",children:"node"}),", and ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/permission-react/CHANGELOG.md#040",children:"react"})," packages, whose changelogs are linked here."]}),"\n",(0,n.jsx)(t.h3,{id:"stack-overflow",children:"Stack Overflow"}),"\n",(0,n.jsxs)(t.p,{children:["There\u2019s a new Stack Overflow ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/stack-overflow",children:"frontend"})," plugin with a corresponding [backend](",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/stack-overflow-backend",children:"https://github.com/backstage/backstage/tree/master/plugins/stack-overflow-backend"}),"]!"]}),"\n",(0,n.jsx)(t.h3,{id:"misc",children:"Misc"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/cicd-statistics",children:"CI/CD Statistics plugin"})," now has GitLab support, through the new ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/cicd-statistics-module-gitlab",children:"GitLab module"}),". Thanks ",(0,n.jsx)(t.a,{href:"https://github.com/djamaile",children:"@djamaile"}),"! (",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/10140",children:"#10140"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The catalog ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-backend-module-aws",children:"AWS module"})," added a new ",(0,n.jsx)(t.code,{children:"AwsS3EntityProvider"})," as a replacement for the ",(0,n.jsx)(t.code,{children:"AwsS3DiscoveryProcessor"}),". Thanks ",(0,n.jsx)(t.a,{href:"https://github.com/pjungermann",children:"@pjungermann"}),"! (",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/10480",children:"#10480"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The permissions-related exports from the catalog backend have some ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/catalog-backend/CHANGELOG.md#110",children:"breaking changes"}),". These are all in alpha still, so this only applies to you if you are developing catalog permissions and import from ",(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend/alpha"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage's ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.1.0-changelog.md",children:"Changelog"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage ",(0,n.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,n.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sign up for our ",(0,n.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},371426:(e,t,r)=>{var n=r(827378),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:u,props:a,_owner:i.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||p}function k(){}function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=b.prototype;var v=y.prototype=new k;v.constructor=y,g(v,b.prototype),v.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var s,a={},o=null,i=null;if(null!=t)for(s in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)x.call(t,s)&&!_.hasOwnProperty(s)&&(a[s]=t[s]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(s in c=e.defaultProps)void 0===a[s]&&(a[s]=c[s]);return{$$typeof:r,type:e,key:o,ref:i,props:a,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,s,a,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return o=o(c=e),e=""===a?"."+R(c,0):a,j(o)?(s="",null!=e&&(s=e.replace(C,"$&/")+"/"),T(o,t,s,"",(function(e){return e}))):null!=o&&(E(o)&&(o=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,s+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+e)),t.push(o)),1;if(c=0,a=""===a?".":a+":",j(e))for(var l=0;l<e.length;l++){var u=a+R(i=e[l],l);c+=T(i,t,s,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=T(i=i.value,t,s,u=a+R(i,l++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function O(e,t,r){if(null==e)return e;var n=[],s=0;return T(e,n,"","",(function(e){return t.call(r,e,s++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},L={transition:null},P={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:L,ReactCurrentOwner:w};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=s,t.Profiler=o,t.PureComponent=y,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=g({},e.props),a=e.key,o=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)x.call(t,l)&&!_.hasOwnProperty(l)&&(s[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)s.children=n;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}return{$$typeof:r,type:e.type,key:a,ref:o,props:s,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,r){return A.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,r){return A.current.useReducer(e,t,r)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return A.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return A.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var n=r(667294);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);