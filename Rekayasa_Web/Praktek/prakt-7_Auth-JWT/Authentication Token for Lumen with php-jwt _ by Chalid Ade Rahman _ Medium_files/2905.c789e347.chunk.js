(self.webpackChunklite=self.webpackChunklite||[]).push([[2905],{35930:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t(67294);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var o=i.createElement("path",{d:"M15.16 8c0 .65-.46 1.14-.86 1.57-.23.25-.47.5-.56.72-.1.22-.09.55-.1.88 0 .6-.01 1.3-.48 1.78-.48.48-1.16.5-1.75.5-.32 0-.65.01-.86.1-.2.07-.46.33-.7.57-.42.41-.9.88-1.54.88s-1.12-.47-1.54-.88a2.87 2.87 0 0 0-.7-.58c-.22-.09-.54-.08-.87-.09-.59 0-1.27-.02-1.74-.5s-.48-1.17-.49-1.78c0-.33-.01-.67-.1-.88-.07-.2-.32-.47-.55-.71-.4-.44-.87-.93-.87-1.58s.46-1.14.87-1.58c.23-.24.47-.5.56-.71.09-.22.08-.55.09-.88 0-.6.02-1.3.49-1.78s1.15-.5 1.74-.5c.33 0 .66-.01.86-.1.2-.08.47-.33.7-.57.43-.41.91-.88 1.55-.88.63 0 1.12.47 1.54.88.24.24.49.48.7.58.22.09.54.08.86.09.6 0 1.27.02 1.75.5.47.48.48 1.17.49 1.78 0 .33 0 .67.09.88.08.2.33.47.56.71.4.44.86.93.86 1.58z",fill:"#437AFF"}),l=i.createElement("path",{d:"M7.33 10.5c.2 0 .38.08.52.22.13.14.21.33.21.53 0 .07.03.13.07.18a.24.24 0 0 0 .35 0 .25.25 0 0 0 .07-.18c0-.2.08-.39.22-.53a.73.73 0 0 1 .52-.22h1.96c.13 0 .25-.05.34-.15a.5.5 0 0 0 .15-.35V6a.5.5 0 0 0-.15-.35.48.48 0 0 0-.34-.15H9.78c-.33 0-.64.13-.87.37-.23.23-.36.55-.36.88v2.5c0 .07-.02.13-.07.18a.24.24 0 0 1-.35 0 .25.25 0 0 1-.07-.18v-2.5c0-.33-.13-.65-.36-.88a1.21 1.21 0 0 0-.86-.37H5.37a.48.48 0 0 0-.35.15.5.5 0 0 0-.14.35v4c0 .13.05.26.14.35.1.1.22.15.35.15h1.96z",fill:"#fff"});const a=function(e){return i.createElement("svg",r({width:17,height:16,viewBox:"0 0 16 16",fill:"none"},e),o,l)}},65968:(e,n,t)=>{"use strict";t.d(n,{_:()=>B,G:()=>C});var i=t(6479),r=t.n(i),o=t(67294),l=t(18733),a=t(77355),s=t(26244),u=t(18634),d=t(87691),c=t(14646),m=t(31889),f=t(98096),g=t(14804),v=t(35930),p=t(3207),w=t(64718),k=t(93310),S=t(20113),E=t(92661),h=t(43487),y=t(45932),U={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"BookVerificationTooltipQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"authoredBooks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"}}]}}]}}]}}]}}]},b={width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},x=function(){var e=(0,c.I)(),n=(0,y.P)();return o.createElement(a.x,{alignItems:"center",display:"flex",flexDirection:"column",width:"240px",padding:"24px",textAlign:"center",backgroundColor:"BACKGROUND"},o.createElement(a.x,{paddingBottom:"12px"},o.createElement(S.X6,{scale:"XS"},"Verified Book Author")),o.createElement("div",{className:e([function(){return n},b])},o.createElement(a.x,{width:"80%",height:"12px",marginBottom:"12px",backgroundColor:"BASE_NORMAL"}),o.createElement(a.x,{width:"80%",height:"12px",backgroundColor:"BASE_NORMAL"})))},F=function(e){var n,t=e.userId,i=(0,w.a)(U,{variables:{userId:t}}),r=i.data,l=i.loading,s=(0,h.v9)((function(e){return e.config.productName})),u=(0,E.H2)();if(l||"User"!==(null==r||null===(n=r.userResult)||void 0===n?void 0:n.__typename))return o.createElement(x,null);var c=r.userResult,m=c.name,f=c.authoredBooks,g=c.username,v=f?f.length:0;return o.createElement(a.x,{alignItems:"center",display:"flex",flexDirection:"column",width:"240px",padding:"24px",textAlign:"center"},o.createElement(S.X6,{scale:"XS"},"Verified Book Author"),o.createElement(a.x,{padding:"8px 0"},o.createElement(d.F,{scale:"M"},m," has ",v," verified ",v>1?"books":"book"," on ",s,".")),o.createElement(k.r,{href:u("ShowUserBooks",{username:g}),linkStyle:"OBVIOUS",target:"_blank"},o.createElement(d.F,{scale:"M",color:"ACCENT"},"See books")))},I=function(e){var n;switch(e.badgeSize){case"S":n=16;break;case"M":n=20;break;case"L":n=24}return o.createElement(v.Z,{height:n,width:n})},B=function(e){var n=e.size,t=e.mobileSize,i=e.withText,r=(0,c.I)(),s=(0,m.F)(),v=(0,l.Uo)().baseTheme,w=(0,p.q3)(s,v);return o.createElement(f.f,{theme:w},o.createElement(a.x,{display:"flex"},o.createElement(a.x,{display:"flex",marginTop:i?"1px":void 0},t?o.createElement(o.Fragment,null,o.createElement(u.y,{xs:!0,displayValue:"flex"},o.createElement(I,{badgeSize:t})),o.createElement(u.y,{sm:!0,md:!0,lg:!0,xl:!0,displayValue:"flex"},o.createElement(I,{badgeSize:n}))):o.createElement(I,{badgeSize:n})),i&&o.createElement(a.x,{marginLeft:"5px"},o.createElement(d.F,{scale:"M"},o.createElement("span",{className:r({color:g.mk,fontWeight:500})},"Book Author")))))},C=function(e){var n=e.userId,t=e.marginBottom,i=e.marginLeft,l=e.marginRight,u=e.marginTop,d=e.alignSelf,c=r()(e,["userId","marginBottom","marginLeft","marginRight","marginTop","alignSelf"]),m=(0,o.useCallback)((function(){return o.createElement(F,{userId:n})}),[n]);return o.createElement(a.x,{marginTop:u,marginLeft:i,marginBottom:t,marginRight:l,display:"flex",alignSelf:d},o.createElement(s.$,{targetDistance:15,mouseLeaveDelay:100,popoverRenderFn:m,display:"flex"},o.createElement(B,c)))}},71230:(e,n,t)=>{"use strict";t.d(n,{f:()=>s});var i=t(67294),r=t(18733),o=t(31889),l=t(98096),a=t(3207),s=function(e){var n=e.children,t=(0,o.F)(),s=(0,r.Uo)().baseTheme,u=(0,a.q3)(t,s);return i.createElement(l.f,{theme:u},n)}},75880:(e,n,t)=>{"use strict";t.d(n,{I0:()=>c,Pd:()=>m,Yi:()=>f});var i=t(28655),r=t.n(i),o=t(82492),l=t.n(o),a=t(64718),s=t(92471);function u(){var e=r()(["\n  query UserViewerEdge($userId: ID!) {\n    user(id: $userId) {\n      ... on User {\n        id\n        viewerEdge {\n          ...User_viewerEdge\n        }\n      }\n    }\n  }\n  ","\n"]);return u=function(){return e},e}function d(){var e=r()(["\n  fragment User_viewerEdge on UserViewerEdge {\n    id\n    createdAt\n    hasCompletedProfile\n    isAllowEdsEnabled\n    isBlocking\n    isFollowing\n    isMuting\n    isFacebookFollowing\n    isMediumFollowing\n    isSuperFollowing\n    isTwitterFollowing\n    isUser\n    lastPostCreatedAt\n    readPostsCount\n  }\n"]);return d=function(){return e},e}function c(e,n,t){var i=e.readQuery({query:v,variables:{userId:n}}),r=l()({},i,{user:{viewerEdge:t}});e.writeQuery({query:v,variables:{userId:n||""},data:r})}var m=function(e){var n,t,i=(0,a.a)(v,{variables:{userId:null!==(n=null==e?void 0:e.id)&&void 0!==n?n:""},ssr:!1,skip:!(null!=e&&e.id)}),r=i.loading,o=i.error,l=i.data;return r?{loading:r}:o?{error:o}:{viewerEdge:null==l||null===(t=l.user)||void 0===t?void 0:t.viewerEdge}},f=function(e,n){var t=n.userId,i=n.viewerId;return e.identify({__typename:"UserViewerEdge",id:"userId:".concat(t,"-viewerId:").concat(i)})},g=(0,s.Ps)(d()),v=(0,s.Ps)(u(),g)},32317:(e,n,t)=>{"use strict";t.d(n,{Bv:()=>T,S$:()=>M,sj:()=>z});var i=t(28655),r=t.n(i),o=t(92471),l=t(67294),a=t(71230),s=t(98863),u=t(6443),d=t(63038),c=t.n(d),m=t(21919),f=t(69507),g=t(25550),v=t(75880),p=t(77355),w=t(93310),k=t(47230),S=t(18627),E=t(66411),h=t(50563);function y(){var e=r()(["\n  fragment UserFollowButtonSignedIn_user on User {\n    id\n    name\n  }\n"]);return y=function(){return e},e}var U=function(e){var n,t=e.user,i=e.buttonSize,r=void 0===i?"REGULAR":i,o=e.buttonStyleFn,a=void 0===o?function(e){return e?"OBVIOUS":"STRONG"}:o,s=e.isLinkStyle,u=void 0!==s&&s,d=e.width,y=e.onClick,U=e.preventParentClick,b=(0,g.r)().viewerId,x=(0,v.Pd)(t),F=x.viewerEdge,I=x.loading,B=t.id,C=null!==(n=t.name)&&void 0!==n?n:"",_=(0,m.D)(f.L,{variables:{targetUserId:B},optimisticResponse:{followUser:{__typename:"User",id:B,name:C,viewerEdge:{__typename:"UserViewerEdge",id:"userId:".concat(B,"-viewerId:").concat(b),isFollowing:!0}}},update:function(e){e.modify({id:"User:".concat(b),fields:{missionControl:(0,h.im)("followedAuthors",!0),followingUserConnection:(0,h.cn)(B),socialStats:(0,h.w6)("followingCount",1)}}),e.modify({id:"User:".concat(B),fields:{socialStats:(0,h.w6)("followerCount",1)}})}}),N=c()(_,1)[0],O=(0,m.D)(f.g,{variables:{targetUserId:B},optimisticResponse:{unfollowUser:{__typename:"User",id:B,name:C,viewerEdge:{__typename:"UserViewerEdge",id:"userId:".concat(B,"-viewerId:").concat(b),isFollowing:!1}}},update:function(e){e.modify({id:"User:".concat(b),fields:{missionControl:(0,h.im)("followedAuthors",!1),socialStats:(0,h.w6)("followingCount",-1)}}),e.modify({id:"User:".concat(B),fields:{socialStats:(0,h.w6)("followerCount",-1)}})}}),A=c()(O,1)[0],R=(0,S.Av)(),P=(0,E.Qi)(),V=!(null==F||!F.isFollowing),L=a(!!V),D=l.useCallback((function(e){return U&&e.preventDefault(),y&&y(),R.event("user.followed",{targetUserId:B,followSource:P}),N()}),[B,P,N,U]),T=l.useCallback((function(e){return U&&e.preventDefault(),R.event("user.unfollowed",{targetUserId:B,followSource:P}),A()}),[B,P,A,U]);return u?l.createElement(p.x,null,l.createElement(w.r,{onClick:V?T:D,linkStyle:V?"SUBTLE":"OBVIOUS",loading:I},V?"Following":"Follow")):l.createElement(k.z,{onClick:V?T:D,buttonStyle:L,size:r,loading:I,width:d},V?"Following":"Follow")},b=(0,o.Ps)(y()),x=t(5977),F=t(77520),I=t(26350),B=t(98007),C=t(92661),_=t(43487),N=t(50458);function O(){var e=r()(["\n  fragment UserFollowButtonSignedOut_post on Post {\n    ...SusiClickable_post\n  }\n  ","\n"]);return O=function(){return e},e}function A(){var e=r()(["\n  fragment UserFollowButtonSignedOut_user on User {\n    id\n    ...SusiClickable_user\n  }\n  ","\n"]);return A=function(){return e},e}var R=function(e){var n,t=e.buttonSize,i=void 0===t?"REGULAR":t,r=e.user,o=e.post,a=e.isLinkStyle,s=void 0!==a&&a,u=e.susiEntry,d=e.width,c=(0,_.v9)((function(e){return e.config.authDomain})),m=(0,x.TH)(),f=(0,C.$B)(m.pathname),g=null==f||null===(n=f.route)||void 0===n?void 0:n.name;return l.createElement(E.cW,{source:{userId:r.id},extendSource:!0},l.createElement(I.R,{buttonSize:i,buttonStyle:"STRONG",buttonWidth:d,linkStyle:"OBVIOUS",isButton:!s,operation:"register",post:o,user:r,actionUrl:o?(0,N.L4)(c,r.id,o.id):(0,N.CU)(c,r.id),susiEntry:u,pageSource:(0,F.x)(g,"register")},"Follow"))},P=(0,o.Ps)(A(),B.Vm),V=(0,o.Ps)(O(),B.qU);function L(){var e=r()(["\n  fragment UserFollowButton_post on Post {\n    collection {\n      id\n    }\n    ...UserFollowButtonSignedOut_post\n  }\n  ","\n"]);return L=function(){return e},e}function D(){var e=r()(["\n  fragment UserFollowButton_user on User {\n    ...UserFollowButtonSignedIn_user\n    ...UserFollowButtonSignedOut_user\n  }\n  ","\n  ","\n"]);return D=function(){return e},e}var T=function(e){var n=e.user,t=e.post,i=e.buttonSize,r=void 0===i?"REGULAR":i,o=e.buttonStyleFn,d=void 0===o?function(e){return e?"OBVIOUS":"STRONG"}:o,c=e.isLinkStyle,m=void 0!==c&&c,f=e.susiEntry,g=e.width,v=e.onClick,p=e.preventParentClick,w=(0,u.H)().value,k=(0,s.f)().isWorkingPreview;return w&&w.id===n.id&&!k?null:l.createElement(a.f,null,w?l.createElement(U,{user:n,buttonSize:r,buttonStyleFn:d,isLinkStyle:m,width:g,onClick:v,preventParentClick:p}):l.createElement(R,{post:t,user:n,buttonSize:r,isLinkStyle:m,susiEntry:f,width:g}))},z=(0,o.Ps)(D(),b,P),M=(0,o.Ps)(L(),V)}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/2905.c789e347.chunk.js.map