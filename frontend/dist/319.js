"use strict";(self.webpackChunkslack_clone_front=self.webpackChunkslack_clone_front||[]).push([[319],{56319:function(e,t,n){n.r(t);var a=n(38678),l=n(73046),r=n(83564),c=n(9669),o=n.n(c),u=n(67294),i=n(16550),s=n(8100);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);c=!0);}catch(e){o=!0,l=e}finally{try{c||null==n.return||n.return()}finally{if(o)throw l}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(){var e=(0,s.ZP)("/api/users",r.Z).data,t=m((0,u.useState)(!1),2),n=t[0],c=t[1],d=m((0,u.useState)(!1),2),p=d[0],f=d[1],v=m((0,u.useState)(!1),2),E=v[0],h=v[1],y=m((0,a.Z)(""),2),b=y[0],k=y[1],g=m((0,a.Z)(""),2),w=g[0],_=g[1],I=m((0,a.Z)(""),3),C=I[0],S=I[2],j=m((0,a.Z)(""),3),A=j[0],Z=j[2],x=(0,u.useCallback)((function(e){S(e.target.value),h(A!==e.target.value)}),[A,S]),O=(0,u.useCallback)((function(e){Z(e.target.value),h(C!==e.target.value)}),[C,Z]),z=(0,u.useCallback)((function(e){e.preventDefault(),w&&w.trim()&&(E||(c(!1),f(!1),o().post("/api/users",{email:b,nickname:w,password:C}).then((function(){f(!0)})).catch((function(e){var t,n,a;console.log(null===(t=e.response)||void 0===t?void 0:t.data),c(403===(null===(n=e.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.code))}))))}),[b,w,C,E]);return e?u.createElement(i.l_,{to:"/workspace/slack"}):u.createElement("div",{id:"container"},u.createElement(l.h4,null,"Slack"),u.createElement(l.l0,{onSubmit:z},u.createElement(l.__,{id:"email-label"},u.createElement("span",null,"이메일 주소"),u.createElement("div",null,u.createElement(l.II,{type:"email",id:"email",name:"email",value:b,onChange:k}))),u.createElement(l.__,{id:"nickname-label"},u.createElement("span",null,"닉네임"),u.createElement("div",null,u.createElement(l.II,{type:"text",id:"nickname",name:"nickname",value:w,onChange:_}))),u.createElement(l.__,{id:"password-label"},u.createElement("span",null,"비밀번호"),u.createElement("div",null,u.createElement(l.II,{type:"password",id:"password",name:"password",value:C,onChange:x}))),u.createElement(l.__,{id:"password-check-label"},u.createElement("span",null,"비밀번호 확인"),u.createElement("div",null,u.createElement(l.II,{type:"password",id:"password-check",name:"password-check",value:A,onChange:O})),E&&u.createElement(l.jj,null,"비밀번호가 일치하지 않습니다."),!w&&u.createElement(l.jj,null,"닉네임을 입력해주세요."),n&&u.createElement(l.jj,null,"이미 가입된 이메일입니다."),p&&u.createElement(l.fB,null,"회원가입되었습니다! 로그인해주세요.")),u.createElement(l.zx,{type:"submit"},"회원가입")),u.createElement(l.Ji,null,"이미 회원이신가요? ",u.createElement("a",{href:"/login"},"로그인 하러가기")))}}}]);