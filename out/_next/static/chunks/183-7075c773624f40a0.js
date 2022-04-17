"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{2387:function(e,n,t){t.d(n,{e:function(){return o},Z:function(){return i}});var r=t(2804),o=(0,r.cn)({key:"modalState",default:!1}),i=(0,r.cn)({key:"postIdState",default:""})},5502:function(e,n,t){var r=t(4051),o=t.n(r),i=t(5893),s=t(19),l=t(9301),a=t(6696),c=t(9717),d=t(9185),u=t(8043),x=t(2516),p=t(5440),f=t(7357),h=t(9661),m=t(5861),v=t(3946),g=t(3299),j=t(5675),y=t(1163),b=t(7294),Z=t(4803),w=t.n(Z),I=t(2804),S=t(2387),k=t(6228);function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function W(e,n,t,r,o,i,s){try{var l=e[i](s),a=l.value}catch(c){return void t(c)}l.done?n(a):Promise.resolve(a).then(r,o)}function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],s=!0,l=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);s=!0);}catch(a){l=!0,o=a}finally{try{s||null==t.return||t.return()}finally{if(l)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return C(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.Z=function(e){var n,t,r=e.id,Z=e.post,C=e.postPage,E=(0,g.useSession)().data,R=A((0,I.FV)(S.e),2),T=(R[0],R[1]),z=A((0,I.FV)(S.Z),2),P=(z[0],z[1]),F=(0,b.useState)(["eoir","ajoe",4]),U=(F[0],F[1]),D=(0,b.useState)([1,1,1]),N=D[0],J=D[1],B=(0,b.useState)(!1),L=B[0],O=B[1],V=(0,y.useRouter)();(0,b.useEffect)((function(){return(0,s.cf)((0,s.IO)((0,s.hJ)(k.db,"posts",r,"comments"),(0,s.Xo)("timestamp","desc")),(function(e){return U(e.docs)}))}),[k.db,r]),(0,b.useEffect)((function(){return(0,s.cf)((0,s.hJ)(k.db,"posts",r,"likes"),(function(e){return J(e.docs)}))}),[k.db,r]),(0,b.useEffect)((function(){return O(-1!==N.findIndex((function(e){var n;return e.id===(null===E||void 0===E||null===(n=E.user)||void 0===n?void 0:n.uid)})))}),[N]);var M=function(){var e,n=(e=o().mark((function e(){var n,t,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!L){e.next=6;break}return e.next=4,(0,s.oe)((0,s.JU)(k.db,"posts",r,"likes",null===E||void 0===E||null===(n=E.user)||void 0===n?void 0:n.uid));case 4:e.next=9;break;case 6:return e.next=9,(0,s.pl)((0,s.JU)(k.db,"posts",r,"likes",null===E||void 0===E||null===(t=E.user)||void 0===t?void 0:t.uid),{username:null===E||void 0===E||null===(i=E.user)||void 0===i?void 0:i.name});case 9:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function s(e){W(i,r,o,s,l,"next",e)}function l(e){W(i,r,o,s,l,"throw",e)}s(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,i.jsxs)(f.Z,{sx:{p:"12px",display:"flex",borderBottom:"1px solid #e0e0e0"},onClick:function(){return V.push("/".concat(r))},component:"section",children:[!C&&(0,i.jsx)(h.Z,{src:null===Z||void 0===Z?void 0:Z.userImg,alt:"",sx:{mr:"16px",mt:"12px"}}),(0,i.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"column",my:"8px",width:"100%"},children:[(0,i.jsxs)(f.Z,{component:"header",sx:[{display:"flex"},!C&&{justifyContent:"space-between"}],children:[C&&(0,i.jsx)(h.Z,{src:null===Z||void 0===Z?void 0:Z.userImg,alt:"Profile Pic",sx:{mr:"16px",mt:"12px"}}),(0,i.jsxs)(f.Z,{children:[(0,i.jsxs)(f.Z,{sx:{display:"inline-block"},children:[(0,i.jsx)(m.Z,{sx:[!C&&{display:"inline-block"}],variant:"subtitle2",component:"h4",children:null===Z||void 0===Z?void 0:Z.username}),(0,i.jsxs)(m.Z,{sx:[!C&&{ml:"6px"}],variant:"body2",component:"span",children:["@",null===Z||void 0===Z?void 0:Z.tag]})]})," ","\xb7"," ",(0,i.jsx)(m.Z,{variant:"body2",component:"span",children:(0,i.jsx)(w(),{fromNow:!0,children:null===Z||void 0===Z||null===(n=Z.timestamp)||void 0===n?void 0:n.toDate()})}),!C&&(0,i.jsx)(m.Z,{sx:{mt:"2px"},variant:"body2",component:"p",children:null===Z||void 0===Z?void 0:Z.text})]}),(0,i.jsx)(f.Z,{sx:{display:"flex",ml:"auto",flexShrink:0,alignItems:"center",justifyContent:"center",mb:"10px"},children:(0,i.jsx)(v.Z,{children:(0,i.jsx)(l.Z,{})})})]}),C&&(0,i.jsx)(m.Z,{sx:{my:"4px"},variant:"body2",component:"p",children:null===Z||void 0===Z?void 0:Z.text}),(null===Z||void 0===Z?void 0:Z.image)&&(0,i.jsx)(j.default,{src:Z.image,height:500,width:500,layout:"responsive",objectFit:"cover",alt:"",style:{borderRadius:"30px"}}),(0,i.jsxs)(f.Z,{component:"footer",sx:[{display:"flex",justifyContent:"space-between",width:"83%",mt:"6px"},!C&&{mx:"auto"}],children:[(0,i.jsx)(f.Z,{sx:{display:"flex",alignItems:"center",mx:"auto"},children:(0,i.jsx)(v.Z,{onClick:function(e){e.stopPropagation(),P(r),T(!0)},color:"mainIconColor",children:(0,i.jsx)(a.Z,{})})}),(null===E||void 0===E||null===(t=E.user)||void 0===t?void 0:t.uid)===(null===Z||void 0===Z?void 0:Z.id)?(0,i.jsx)(f.Z,{onClick:function(e){e.stopPropagation(),(0,s.oe)((0,s.JU)(k.db,"posts",r)),V.push("/")},sx:{display:"flex",alignItems:"center",mx:"4px"},children:(0,i.jsx)(v.Z,{color:"error",children:(0,i.jsx)(c.Z,{})})}):(0,i.jsx)(f.Z,{sx:{display:"flex",alignItems:"center",mx:"4px"},children:(0,i.jsx)(v.Z,{color:"secondary",children:(0,i.jsx)(d.Z,{})})}),(0,i.jsx)(f.Z,{onClick:function(e){e.stopPropagation(),M()},sx:{display:"flex",alignItems:"center",mx:"auto"},children:L?(0,i.jsx)(v.Z,{color:"likeIconColor",children:(0,i.jsx)(u.Z,{})}):(0,i.jsx)(v.Z,{color:"likeIconColor",children:(0,i.jsx)(x.Z,{})})}),(0,i.jsx)(v.Z,{color:"mainIconColor",children:(0,i.jsx)(p.Z,{})})]})]})]})}},3433:function(e,n,t){t.d(n,{Z:function(){return R}});var r=t(4051),o=t.n(r),i=t(5893),s=t(19),l=t(2463),a=t(9185),c=t(5843),d=t(4310),u=t(6191),x=t(9688),p=t(7357),f=t(3946),h=t(9661),m=t(5861),v=t(7598),g=t(3321),j=t(3299),y=t(1163),b=t(7294),Z=t(4803),w=t.n(Z),I=t(2804),S=t(2387),k=t(6228);function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function W(e,n,t,r,o,i,s){try{var l=e[i](s),a=l.value}catch(c){return void t(c)}l.done?n(a):Promise.resolve(a).then(r,o)}function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],s=!0,l=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);s=!0);}catch(a){l=!0,o=a}finally{try{s||null==t.return||t.return()}finally{if(l)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return C(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:500,bgcolor:"background.paper",border:"2px solid gray",outline:"none",boxShadow:24,p:1,borderRadius:3};function R(){var e,n=(0,j.useSession)().data,t=A((0,I.FV)(S.e),2),r=t[0],Z=t[1],C=A((0,I.FV)(S.Z),2),R=C[0],T=(C[1],(0,b.useState)()),z=T[0],P=T[1],F=b.useRef(),U=(0,y.useRouter)();(0,b.useEffect)((function(){return(0,s.cf)((0,s.JU)(k.db,"posts",R),(function(e){P(e.data())}))}),[k.db]);var D=function(){var e,t=(e=o().mark((function e(t){var r,i,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(F.current.value),e.next=5,(0,s.ET)((0,s.hJ)(k.db,"posts",R,"comments"),{comment:F.current.value,username:null===n||void 0===n||null===(r=n.user)||void 0===r?void 0:r.name,tag:null===n||void 0===n||null===(i=n.user)||void 0===i?void 0:i.tag,userImg:null===n||void 0===n||null===(l=n.user)||void 0===l?void 0:l.image,timestamp:(0,s.Bt)()});case 5:Z(!1),F.current.value="",U.push("/".concat(R));case 8:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function s(e){W(i,r,o,s,l,"next",e)}function l(e){W(i,r,o,s,l,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(x.Z,{open:function(){return r},onClose:function(){return Z(!r)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,i.jsxs)(p.Z,{component:"main",sx:E,children:[(0,i.jsx)(f.Z,{onClick:function(){return Z(!1)},sx:{mb:"4px"},children:(0,i.jsx)(u.Z,{})}),(0,i.jsx)(p.Z,{component:"header",sx:{display:"flex",px:{xs:2,sm:3},pt:"18px",pb:"10px",borderTop:"2px solid #eee",borderBottom:"1px solid #e0e0e0"},children:(0,i.jsxs)(p.Z,{sx:{display:"flex",columnGap:"12px",position:"relative"},children:[(0,i.jsx)(h.Z,{src:null===z||void 0===z?void 0:z.userImg,alt:""}),(0,i.jsxs)(p.Z,{children:[(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(m.Z,{fontWeight:"700",variant:"subtitle2",component:"span",children:null===z||void 0===z?void 0:z.username})," || ",(0,i.jsxs)(m.Z,{variant:"subtitle2",fontStyle:"italic",fontSize:"small",fontWeight:"bold",component:"span",children:["@",null===z||void 0===z?void 0:z.tag]})," || ",(0,i.jsx)(m.Z,{variant:"body1",fontSize:"small",component:"span",children:(0,i.jsx)(w(),{fromNow:!0,children:null===z||void 0===z||null===(e=z.timestamp)||void 0===e?void 0:e.toDate()})})]}),(0,i.jsx)(m.Z,{variant:"body2",component:"p",children:null===z||void 0===z?void 0:z.text})]})]})}),(0,i.jsxs)(p.Z,{component:"footer",sx:{display:"flex",flexDirection:"column",mx:3,mt:2,width:"92%"},children:[(0,i.jsxs)(p.Z,{sx:{display:"flex"},children:[(0,i.jsx)(h.Z,{src:n.user.image,alt:""}),(0,i.jsx)(v.Z,{minRows:2,ref:F,placeholder:"Tweet your reply",style:{backgroundColor:"transparent",outline:"none",fontSize:"16px",fontWeight:"500",minHeight:"60px",overflow:"hidden",border:"none",paddingLeft:"12px",width:"100%"}})]}),(0,i.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",pt:1},children:[(0,i.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(f.Z,{children:(0,i.jsx)(l.Z,{})}),(0,i.jsx)(f.Z,{children:(0,i.jsx)(a.Z,{})}),(0,i.jsx)(f.Z,{children:(0,i.jsx)(c.Z,{})}),(0,i.jsx)(f.Z,{children:(0,i.jsx)(d.Z,{})})]}),(0,i.jsx)(g.Z,{sx:{borderRadius:"20px"},onClick:D,children:"Reply"})]})]})]})})})}},744:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(5893),o=t(4232),i=t(6389),s=t(9825),l=t(1040),a=t(4550),c=t(1985),d=t(5553),u=t(5334),x=t(9301),p=t(7357),f=t(3946),h=t(3321),m=t(9661),v=t(5861);var g=function(e){var n=e.Icon,t=e.title,o=e.active;return(0,r.jsxs)(p.Z,{sx:{display:"flex",justifyContent:{xs:"center",xl:"flex-start"},alignItems:"center",transition:"all 0.4s ease-in-out",py:{xs:"8px",xl:"12px"},px:{xs:"12px",xl:"16px"},cursor:"pointer","&:hover":{backgroundColor:"#E7E7E8",boxShadow:"0 1px 2px 0 rgb(0 0 0 / 0.05)"}},borderRadius:8,children:[(0,r.jsx)(n,{color:"mainIconColor",sx:{fontSize:{xl:30,sm:40}},fontWeight:"500"}),(0,r.jsx)(v.Z,{variant:"subtitle1",fontWeight:o?"500":"400",ml:2,sx:{display:{xs:"none",xl:"inline-flex"}},component:"span",children:t})]})},j=t(3299);var y=function(){var e,n,t,y=(0,j.useSession)().data;return(0,r.jsxs)(p.Z,{sx:{display:{xs:"none",sm:"flex"},alignItems:{xs:"center",xl:"flex-start"},justifyContent:"center",width:{xs:"80px",xl:"340px"},height:"100%",flexDirection:"column",position:"fixed",padding:"8px"},component:"section",children:[(0,r.jsx)(f.Z,{component:"div",color:"twitterColor",sx:{marginLeft:{xl:"102px"}},children:(0,r.jsx)(o.Z,{fontSize:"large"})}),(0,r.jsxs)(p.Z,{sx:{marginLeft:{xl:"96px"},marginTop:"16px",marginBottom:"10px"},children:[(0,r.jsx)(g,{Icon:i.Z,title:"Home",active:!0}),(0,r.jsx)(g,{Icon:s.Z,title:"Explore"}),(0,r.jsx)(g,{Icon:l.Z,title:"Notifications"}),(0,r.jsx)(g,{Icon:a.Z,title:"Messages"}),(0,r.jsx)(g,{Icon:c.Z,title:"Bookmarks"}),(0,r.jsx)(g,{Icon:d.Z,title:"Lists"}),(0,r.jsx)(g,{Icon:u.Z,title:"Profile"}),(0,r.jsx)(g,{Icon:x.Z,title:"More"})]}),(0,r.jsx)(h.Z,{sx:{display:{xs:"none",xl:"inline"},marginLeft:{xl:"96px"},width:"224px",height:"52px",borderRadius:"50px"},variant:"contained",ml:"auto",my:1.5,children:"Tweet"}),(0,r.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:{xl:"auto"},transition:"all 0.4s ease-in-out",p:{xl:"12px 24px"},cursor:"pointer","&:hover":{backgroundColor:"#E7E7E8",boxShadow:"0 1px 2px 0 rgb(0 0 0 / 0.05)"}},component:"footer",mt:"auto",borderRadius:10,onClick:function(){return(0,j.signOut)({callbackUrl:"/"})},children:[(0,r.jsx)(m.Z,{src:null===y||void 0===y||null===(e=y.user)||void 0===e?void 0:e.image,alt:""}),(0,r.jsxs)(p.Z,{ml:2,sx:{display:{xs:"none",xl:"inline"}},children:[(0,r.jsx)(v.Z,{variant:"subtitle1",fontWeight:"800",component:"h4",children:null===y||void 0===y||null===(n=y.user)||void 0===n?void 0:n.name}),(0,r.jsxs)(v.Z,{variant:"body2",color:"gray",fontWeight:"bold",component:"p",children:["@",null===y||void 0===y||null===(t=y.user)||void 0===t?void 0:t.tag]})]}),(0,r.jsx)(x.Z,{sx:{display:{xs:"none",xl:"inline",color:"gray"},marginLeft:"12px"}})]})]})}},6511:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(5893),o=t(6506),i=t(7357),s=t(8938),l=t(7109),a=t(3946),c=t(5861),d=t(3321),u=t(5675),x=(t(7294),t(3031));var p=function(e){var n=e.result;return(0,r.jsxs)(i.Z,{px:2,py:1,sx:{cursor:"pointer",overflow:"hidden",display:"flex",alignItems:"center",transition:"all 0.2s ease-out","&:hover":{backgroundColor:"#eee",opacity:.9}},children:[(0,r.jsxs)(i.Z,{sx:{my:"2px"},children:[(0,r.jsx)(c.Z,{variant:"subtitle2",fontWeight:"bold",component:"p",children:n.heading}),(0,r.jsx)(c.Z,{sx:{maxWidth:"250px"},fontSize:"small",fontWeight:"600",variant:"body1",component:"h6",children:n.description}),(0,r.jsxs)(c.Z,{sx:{maxWidth:"250px"},variant:"body2",fontWeight:"500",fontStyle:"italic",fontSize:"small",component:"p",children:["Trending with"," ",n.tags.map((function(e,n){return(0,r.jsx)("span",{className:"tag",children:e},n)}))]})]}),n.img?(0,r.jsx)(u.default,{src:n.img,width:70,height:70,objectFit:"cover",style:{borderRadius:"16px"}}):(0,r.jsx)(a.Z,{children:(0,r.jsx)(x.Z,{})})]})};var f=function(e){var n=e.trendingResults,t=e.followResults;return(0,r.jsxs)(i.Z,{component:"section",sx:{display:{xs:"none",lg:"inline"},ml:"32px",width:{xl:"400px"},py:"4px",my:"20px"},children:[(0,r.jsx)(i.Z,{sx:{position:"sticky",backgroundColor:"white",top:0,py:"6px",zIndex:50,width:{lg:"91%",xl:"75%"}},children:(0,r.jsx)(s.Z,{size:"small",placeholder:"Search twitter",sx:{display:"flex",alignItems:"center",width:"100%"},InputProps:{startAdornment:(0,r.jsx)(l.Z,{position:"start",children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(o.Z,{})})})}})}),(0,r.jsxs)(i.Z,{sx:{my:"12px",pt:"8px",borderRadius:"12px",width:{lg:"91%",xl:"75%"},border:"1px solid #e0e0ee"},children:[(0,r.jsx)(c.Z,{variant:"subtitle1",fontSize:"large",fontWeight:"bold",px:2,component:"h4",children:"What's happening"}),n.map((function(e,n){return(0,r.jsx)(p,{result:e},n)})),(0,r.jsx)(d.Z,{fullWidth:!0,children:"Show more"})]}),(0,r.jsxs)(i.Z,{sx:{my:"12px",pt:"8px",borderRadius:"12px",width:{lg:"91%",xl:"75%"},border:"1px solid #e0e0ee"},children:[(0,r.jsx)(c.Z,{variant:"subtitle2",fontSize:"large",fontWeight:"bold",px:2,component:"h4",children:"Who to follow"}),t.map((function(e,n){return(0,r.jsxs)(i.Z,{px:2,py:1,sx:{cursor:"pointer",overflow:"hidden",display:"flex",alignItems:"center",transition:"all 0.2s ease-out","&:hover":{backgroundColor:"#eee",opacity:.9}},children:[(0,r.jsx)(u.default,{src:e.userImg,width:50,height:50,objectFit:"cover",style:{borderRadius:"100%"}}),(0,r.jsxs)(i.Z,{sx:{ml:"16px",lineHeight:"20px"},children:[(0,r.jsx)(c.Z,{variant:"subtitle2",fontWeight:"bold",component:"h4",children:e.username}),(0,r.jsx)(c.Z,{variant:"body2",fontWeight:"bold",fontStyle:"italic",fontSize:"small",component:"h5",children:e.tag})]}),(0,r.jsx)(d.Z,{variant:"text",size:"small",sx:{ml:"auto"},children:"Follow"})]},n)})),(0,r.jsx)(d.Z,{fullWidth:!0,children:"Show more"})]})]})}},5617:function(e,n,t){t.d(n,{y:function(){return r},F:function(){return o}});var r=[{heading:"T20 World Cup 2021 \xb7 LIVE",description:"NZvAUS: New Zealand and Australia clash in the T20 World Cup final",img:"https://rb.gy/d9yjtu",tags:["#T20WorldCupFinal, ","Kane Williamson"]},{heading:"Trending in United Arab Emirates",description:"#earthquake",img:"https://rb.gy/jvuy4v",tags:["#DubaiAirshow, ","#gessdubai"]},{heading:"Trending in Digital Creators",description:"tubbo and quackity",img:"",tags:["QUACKITY AND TUBBO,"]}],o=[{userImg:"https://www.spacex.com/static/images/share.jpg",username:"SpaceX",tag:"@SpaceX"},{userImg:"https://rb.gy/aluxgh",username:"Elon Musk",tag:"@elonmusk"},{userImg:"https://rb.gy/zyvazm",username:"Tesla",tag:"@Tesla"}]},6228:function(e,n,t){t.d(n,{db:function(){return s},t:function(){return l}});var r=t(5503),o=t(6257),i=t(3404),s=((0,r.C6)().length?(0,r.Mq)():(0,r.ZF)({apiKey:"AIzaSyCJNV80QZFdiGlbbZ9JUxPDcmeiW0s1800",authDomain:"twitter-clone-nextjs-challenge.firebaseapp.com",projectId:"twitter-clone-nextjs-challenge",storageBucket:"twitter-clone-nextjs-challenge.appspot.com",messagingSenderId:"864346289111",appId:"1:864346289111:web:5381059bfaf221f5aa9192",measurementId:"G-C8PV8P43N9"}),(0,o.ad)()),l=(0,i.cF)()}}]);