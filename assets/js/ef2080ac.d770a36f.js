/*! For license information please see ef2080ac.d770a36f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[570065],{235738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(824246),s=n(511151);const a={id:"v1.8.0",title:"v1.8.0",description:"Backstage Release v1.8.0"},o=void 0,i={id:"releases/v1.8.0",title:"v1.8.0",description:"Backstage Release v1.8.0",source:"@site/../docs/releases/v1.8.0.md",sourceDirName:"releases",slug:"/releases/v1.8.0",permalink:"/docs/releases/v1.8.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.8.0.md",tags:[],version:"current",frontMatter:{id:"v1.8.0",title:"v1.8.0",description:"Backstage Release v1.8.0"},sidebar:"releases",previous:{title:"v1.9.0",permalink:"/docs/releases/v1.9.0"},next:{title:"v1.7.0",permalink:"/docs/releases/v1.7.0"}},c={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Node 16 and 18",id:"node-16-and-18",level:3},{value:"Events",id:"events",level:3},{value:"Gitea",id:"gitea",level:3},{value:"Azure Sites",id:"azure-sites",level:3},{value:"Scaffolder Metrics",id:"scaffolder-metrics",level:3},{value:"<code>@backstage/backend-common</code>",id:"backstagebackend-common",level:3},{value:"Recharts",id:"recharts",level:3},{value:"<code>GitHub</code> to <code>Github</code>",id:"github-to-github",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["These are the release notes for the v1.8.0 release of ",(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,r.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(t.h3,{id:"node-16-and-18",children:"Node 16 and 18"}),"\n",(0,r.jsxs)(t.p,{children:["The project was updated to support and build against Node versions 16 and 18, after 18 had been elevated to ",(0,r.jsx)(t.a,{href:"https://github.com/nodejs/release#release-schedule",children:"active LTS"}),". This means that support for Node 14 has been dropped in accordance with ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy#nodejs-releases",children:"our versioning policy"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["We would like to call out one particular change in Node 18 that may affect adopters. The way that it binds interfaces internally when listening for incoming connections has changed such that it may prefer e.g. an IPv6 interface that you did not intend to use. This might make it seem like the backend is unreachable from the outside in some circumstances. Because of this, you may want to change your configuration to say something along the lines of ",(0,r.jsx)(t.code,{children:"listen: ':7007'"})," under the ",(0,r.jsx)(t.code,{children:"backend"})," section to ensure that it listens on all interfaces."]}),"\n",(0,r.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,r.jsxs)(t.p,{children:["An early version of the ",(0,r.jsx)(t.code,{children:"events"})," plugin ecosystem has been added. This allows events such as webhooks and similar to be received and propagated by a Backstage backend, and plugins can then react to those events. One early use case for this plugin is to start powering catalog updates."]}),"\n",(0,r.jsx)(t.p,{children:"This is early days, so bear in mind that interfaces and implementations may still be subject to change. But do check it out, and let us know what you think!"}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/pjungermann",children:"@pjungermann"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/13931",children:"#13931"})]}),"\n",(0,r.jsx)(t.h3,{id:"gitea",children:"Gitea"}),"\n",(0,r.jsxs)(t.p,{children:["There is now support for ",(0,r.jsx)(t.a,{href:"https://gitea.io",children:"Gitea"})," as a general SCM integration. Please check out ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/integrations/gitea/locations",children:"the docs"})," for how to get started."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/atoko",children:"@atoko"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/14056",children:"#14056"})]}),"\n",(0,r.jsx)(t.h3,{id:"azure-sites",children:"Azure Sites"}),"\n",(0,r.jsxs)(t.p,{children:["There's a new Azure Sites (Apps & Functions) plugin. It lets you view the current status of the site, and quickly jump to the site's Overview or Log Stream pages. Please check out ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/azure-sites",children:"the plugin README"})," for more information."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/wesley-pattison",children:"@wesley-pattison"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/13634",children:"#13634"})]}),"\n",(0,r.jsx)(t.h3,{id:"scaffolder-metrics",children:"Scaffolder Metrics"}),"\n",(0,r.jsx)(t.p,{children:"The scaffolder backend now emits default Prometheus metrics that track job execution."}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/spencerrichardhenry",children:"@spencerrichardhenry"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/13815",children:"#13815"})]}),"\n",(0,r.jsx)(t.h3,{id:"backstagebackend-common",children:(0,r.jsx)(t.code,{children:"@backstage/backend-common"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"UrlReader"})," interface has been updated to require that ",(0,r.jsx)(t.code,{children:"readUrl"})," is implemented. The ",(0,r.jsx)(t.code,{children:"readUrl"})," method has previously been optional to implement, but a warning used to be logged when calling its predecessor ",(0,r.jsx)(t.code,{children:"read"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"read"})," method is now deprecated and will be removed in a future release, and if you made custom URL readers you will have to implement a ",(0,r.jsx)(t.code,{children:"readUrl"})," method on them."]}),"\n",(0,r.jsx)(t.h3,{id:"recharts",children:"Recharts"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"recharts"})," library that powers the graphing functionality in some plugins was upgraded across the repository to version 2. Please let us know if you run into any new issues with graphing in plugins such as Bitrise, CICD statistics, code coverage, cost insights, GIT release manager, or XCmetrics."]}),"\n",(0,r.jsxs)(t.h3,{id:"github-to-github",children:[(0,r.jsx)(t.code,{children:"GitHub"})," to ",(0,r.jsx)(t.code,{children:"Github"})]}),"\n",(0,r.jsxs)(t.p,{children:["We are pursuing an effort to standardize the naming of exported GitHub related symbols. After an upgrade of Backstage, you may therefore see errors related to not finding components and types whose names start with \u201cGitHub\u201d. As an example, if you are using ",(0,r.jsx)(t.code,{children:"GitHubIssuesPage"})," from the GitHub Issues plugin, you now need to import and use it as ",(0,r.jsx)(t.code,{children:"GithubIssuesPage"})," instead."]}),"\n",(0,r.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,r.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,r.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,r.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,r.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,r.jsxs)(t.li,{children:["Backstage's ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.8.0-changelog.md",children:"Changelog"})}),"\n",(0,r.jsxs)(t.li,{children:["Backstage ",(0,r.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,r.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Sign up for our ",(0,r.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:u,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var k=v.prototype=new b;k.constructor=v,g(k,y.prototype),k.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var s,a={},o=null,i=null;if(null!=t)for(s in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)x.call(t,s)&&!_.hasOwnProperty(s)&&(a[s]=t[s]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(s in c=e.defaultProps)void 0===a[s]&&(a[s]=c[s]);return{$$typeof:n,type:e,key:o,ref:i,props:a,_owner:w.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,s,a,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return o=o(c=e),e=""===a?"."+E(c,0):a,j(o)?(s="",null!=e&&(s=e.replace(C,"$&/")+"/"),T(o,t,s,"",(function(e){return e}))):null!=o&&(R(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,s+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+e)),t.push(o)),1;if(c=0,a=""===a?".":a+":",j(e))for(var u=0;u<e.length;u++){var l=a+E(i=e[u],u);c+=T(i,t,s,l,o)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)c+=T(i=i.value,t,s,l=a+E(i,u++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,t,n){if(null==e)return e;var r=[],s=0;return T(e,r,"","",(function(e){return t.call(n,e,s++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},B={transition:null},I={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:B,ReactCurrentOwner:w};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=s,t.Profiler=o,t.PureComponent=v,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=g({},e.props),a=e.key,o=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)x.call(t,u)&&!_.hasOwnProperty(u)&&(s[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)s.children=r;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];s.children=c}return{$$typeof:n,type:e.type,key:a,ref:o,props:s,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=B.transition;B.transition={};try{e()}finally{B.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(667294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);