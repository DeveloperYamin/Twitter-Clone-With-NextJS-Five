(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7704)}])},7704:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var r=n(5893),o=n(7357),i=n(3299),s=n(9008),l=n(2804),a=n(2387),c=n(6874),u=n(5861),d=n(3946),x=n(6257),f=n(7294),p=n(6228),h=n(4051),m=n.n(h),g=n(19),j=n(774),v=n(5537),b=n(1374),y=n(6637),w=n(4788),Z=n(9574),C=n(9584),k=n(9661),S=n(3321),I=n(7598),A=n(6001);n(8330);function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t,n,r,o,i,s){try{var l=e[i](s),a=l.value}catch(c){return void n(c)}l.done?t(a):Promise.resolve(a).then(r,o)}function R(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function s(e){E(i,r,o,s,l,"next",e)}function l(e){E(i,r,o,s,l,"throw",e)}s(void 0)}))}}function T(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W=function(){var e=(0,i.useSession)().data,t=(0,f.useState)(""),n=t[0],s=t[1],l=(0,f.useState)(!1),a=l[0],c=l[1],u=(0,f.useState)(null),x=u[0],h=u[1],_=(0,f.useRef)(null),E=(0,f.useState)(!1),W=E[0],O=E[1],z=function(){var t=R(m().mark((function t(){var r,o,i,l,u,d;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=3;break}return t.abrupt("return");case 3:return c(!0),t.next=6,(0,g.ET)((0,g.hJ)(p.db,"posts"),{id:null===e||void 0===e||null===(r=e.user)||void 0===r?void 0:r.uid,username:null===e||void 0===e||null===(o=e.user)||void 0===o?void 0:o.name,userImg:null===e||void 0===e||null===(i=e.user)||void 0===i?void 0:i.image,tag:null===e||void 0===e||null===(l=e.user)||void 0===l?void 0:l.tag,text:n,timestamp:(0,g.Bt)()});case 6:if(u=t.sent,d=(0,j.iH)(p.t,"posts/".concat(u.id,"/image")),!x){t.next=11;break}return t.next=11,(0,j.sf)(d,x,"data_url").then(R(m().mark((function e(){var t;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.Jt)(d);case 2:return t=e.sent,e.next=5,(0,g.r7)((0,g.JU)(p.db,"posts",u.id),{image:t});case 5:case"end":return e.stop()}}),e)}))));case 11:c(!1),s(""),h(null),O(!1);case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,r.jsxs)(o.Z,{sx:{borderBottom:"1px solid #e0e0e0",display:"flex",flex:1,p:"12px",opacity:a?.5:1},children:[(0,r.jsx)(k.Z,{onClick:function(){return(0,i.signOut)({callbackUrl:"/"})},src:e.user.image,alt:"",fontSize:"large",mt:"auto",sx:{"&:hover":{opacity:.8,cursor:"pointer"}}}),(0,r.jsxs)(o.Z,{sx:{borderTop:"1px solid #e0e0e0",borderBottom:"1px solid #e0e0e0",width:"100%",ml:{xs:"6px",sm:"10px"},overflow:"hidden"},children:[(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(I.Z,{minRows:2,"aria-label":"maximum height",value:n,onChange:function(e){return s(e.target.value)},placeholder:"What's happening?",style:{backgroundColor:"transparent",outline:"none",fontSize:"18px",fontWeight:"500",minHeight:"60px",overflow:"hidden",border:"none",paddingLeft:"6px",width:"100%",minWidth:"200px"}}),x&&(0,r.jsxs)(o.Z,{position:"relative",children:[(0,r.jsx)(d.Z,{onClick:function(){return h(null)},sx:{position:"absolute",top:"4px",left:"4px"},children:(0,r.jsx)(v.Z,{sx:{color:"white"}})}),(0,r.jsx)("img",{src:x,alt:"selected file",style:{borderRadius:"16px",maxHeight:"320px",objectFit:"contain"}})]})]}),!a&&(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",pt:"10px",mb:"4px"},children:[(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(d.Z,{onClick:function(){return _.current.click()},sx:{mr:"6px"},children:[(0,r.jsx)(b.Z,{color:"mainIconColor"}),(0,r.jsx)("input",{type:"file",ref:_,hidden:!0,onChange:function(e){var t=new FileReader;e.target.files[0]&&t.readAsDataURL(e.target.files[0]),t.onload=function(e){h(e.target.result)}}})]}),(0,r.jsx)(d.Z,{onClick:function(){return O(!W)},sx:{mr:"6px"},children:(0,r.jsx)(y.Z,{color:"mainIconColor"})}),(0,r.jsx)(d.Z,{sx:{mr:"6px"},children:(0,r.jsx)(w.Z,{color:"white",sx:{color:"#1d9bf0"}})}),(0,r.jsx)(d.Z,{sx:{mr:"6px"},children:(0,r.jsx)(Z.Z,{color:"mainIconColor"})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(C.Z,{color:"mainIconColor"})}),W&&(0,r.jsx)(A.cW,{onSelect:function(e){var t,r=e.unified.split("-"),o=[];r.forEach((function(e){return o.push("0x"+e)}));var i=(t=String).fromCodePoint.apply(t,T(o));s(n+i)},style:{position:"absolute",marginTop:"465px",marginLeft:-40,maxWidth:"320px",borderRadius:"20px",zIndex:"999"},theme:"dark"})]}),(0,r.jsx)(S.Z,{disabled:!n&&!x,onClick:z,sx:{backgroundColor:"#1A8CD8",color:"white",borderRadius:"80px",textTransform:"lowercase",letterSpacing:"0.8px",fontSize:"18px",fontWeight:"bold","&:hover":{backgroundColor:"#1A8CD8",color:"white"},"&:disabled":{backgroundColor:"#8ECDF8",color:"white"}},variant:"contained",children:"Tweet"})]})]})]})},O=n(5502);var z=function(){var e=(0,f.useState)([]),t=e[0],n=e[1];return(0,f.useEffect)((function(){(0,x.cf)((0,x.IO)((0,x.hJ)(p.db,"posts"),(0,x.Xo)("timestamp","desc")),(function(e){n(e.docs)}))}),[p.db]),(0,r.jsxs)(o.Z,{sx:{maxWidth:"800px",marginLeft:{xl:"370px",sm:"80px",xs:"0px"},flexGrow:1},borderLeft:"1px solid #e0e0e0",borderRight:"1px solid #e0e0e0",component:"section",children:[(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:{sm:"space-between"},position:"sticky",top:0,zIndex:50,borderBottom:"0.5px solid #e0e0e0",py:"8px",px:"12px",backgroundColor:"white"},children:[(0,r.jsx)(u.Z,{sx:{fontSize:{xs:"18px",sm:"20px"}},variant:"subtitle1",component:"h1",fontWeight:"500",children:"Home"}),(0,r.jsx)(d.Z,{sx:{marginLeft:"auto"},children:(0,r.jsx)(c.Z,{color:"black"})})]}),(0,r.jsx)(W,{}),(0,r.jsx)(o.Z,{sx:{pb:"288px"},children:t.map((function(e){return(0,r.jsx)(O.Z,{id:e.id,post:e.data()},e.id)}))})]})},F=n(669),L=n(5675);var N=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Login"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1,my:"80px",mt:"40px"},component:"section",children:[(0,r.jsx)(L.default,{className:"",src:"https://help.twitter.com/content/dam/help-twitter/brand/logo.png",width:250,height:250,objectFit:"cover"}),(0,r.jsx)(o.Z,{sx:{mt:"20px"},children:(0,r.jsx)(S.Z,{onClick:function(){return(0,i.signIn)("google",{callbackUrl:"/"})},variant:"outlined",size:"large",startIcon:(0,r.jsx)(F.Z,{}),children:"Sign In With Google"})})]})]})},U=n(3433),D=n(744),H=n(6511),P=n(5617);function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],s=!0,l=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(a){l=!0,o=a}finally{try{s||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(){var e=J((0,l.FV)(a.e),2),t=e[0];e[1];return(0,i.useSession)().data?(0,r.jsxs)(o.Z,{component:"section",children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Twitter Clone"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)(o.Z,{display:"flex",minHeight:"100vh",maxWidth:"1500px",mx:"auto",component:"main",children:[(0,r.jsx)(D.Z,{}),(0,r.jsx)(z,{}),(0,r.jsx)(H.Z,{trendingResults:P.y,followResults:P.F}),t&&(0,r.jsx)(U.Z,{})]})]}):(0,r.jsx)(N,{})}}},function(e){e.O(0,[16,885,229,309,838,183,774,888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);