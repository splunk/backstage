/*! For license information please see 207952c9.86717171.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[351909],{674947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>s});var n=r(824246),o=r(511151);const u={id:"plugin-catalog-backend-module-github.githubmultiorgentityprovideroptions.usertransformer",title:"GithubMultiOrgEntityProviderOptions.userTransformer",description:"API reference for GithubMultiOrgEntityProviderOptions.userTransformer"},i=void 0,c={id:"reference/plugin-catalog-backend-module-github.githubmultiorgentityprovideroptions.usertransformer",title:"GithubMultiOrgEntityProviderOptions.userTransformer",description:"API reference for GithubMultiOrgEntityProviderOptions.userTransformer",source:"@site/../docs/reference/plugin-catalog-backend-module-github.githubmultiorgentityprovideroptions.usertransformer.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-github.githubmultiorgentityprovideroptions.usertransformer",permalink:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgentityprovideroptions.usertransformer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-github.githubmultiorgentityprovideroptions.usertransformer.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-github.githubmultiorgentityprovideroptions.usertransformer",title:"GithubMultiOrgEntityProviderOptions.userTransformer",description:"API reference for GithubMultiOrgEntityProviderOptions.userTransformer"}},a={},s=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-github"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgentityprovideroptions",children:(0,n.jsx)(t.code,{children:"GithubMultiOrgEntityProviderOptions"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgentityprovideroptions.usertransformer",children:(0,n.jsx)(t.code,{children:"userTransformer"})})]}),"\n",(0,n.jsx)(t.p,{children:"Optionally include a user transformer for transforming from GitHub users to User Entities"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"userTransformer?: UserTransformer;\n"})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,u={},s=null,l=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:l,props:u,_owner:c.current}}t.Fragment=u,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function g(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var _=v.prototype=new g;_.constructor=v,m(_,b.prototype),_.isPureReactComponent=!0;var k=Array.isArray,E=Object.prototype.hasOwnProperty,S={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var o,u={},i=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)E.call(t,o)&&!O.hasOwnProperty(o)&&(u[o]=t[o]);var a=arguments.length-2;if(1===a)u.children=n;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];u.children=s}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:r,type:e,key:i,ref:c,props:u,_owner:S.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,u,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case n:a=!0}}if(a)return i=i(a=e),e=""===u?"."+P(a,0):u,k(i)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),R(i,t,o,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(w,"$&/")+"/")+e)),t.push(i)),1;if(a=0,u=""===u?".":u+":",k(e))for(var s=0;s<e.length;s++){var l=u+P(c=e[s],s);a+=R(c,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(c=e.next()).done;)a+=R(c=c.value,t,o,l=u+P(c,s++),i);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function C(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},M={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=i,t.PureComponent=v,t.StrictMode=u,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),u=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=S.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)E.call(t,s)&&!O.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==a?a[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){a=Array(s);for(var l=0;l<s;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:r,type:e.type,key:u,ref:i,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>i});var n=r(667294);const o={},u=n.createContext(o);function i(e){const t=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(u.Provider,{value:t},e.children)}}}]);