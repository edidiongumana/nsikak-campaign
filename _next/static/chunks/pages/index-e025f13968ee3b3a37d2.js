_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"3L07":function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var a=n("AeFk"),r=n("sKyC"),i=n("4jWa"),c=n("CRla"),o=n("U6LL"),s=n("epLR"),l=n("pr4h"),d={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},b=Object(o.a)("span",{baseStyle:d});l.a&&(b.displayName="VisuallyHidden");var h=Object(o.a)("input",{baseStyle:d});l.a&&(h.displayName="VisuallyHiddenInput");var j=n("q1tI");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=Object(a.b)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),p=Object(r.a)(((e,t)=>{var n=Object(i.b)("Spinner",e),a=Object(c.b)(e),{label:r="Loading...",thickness:l="2px",speed:d="0.45s",color:h,emptyColor:p="transparent",className:f}=a,x=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(a,["label","thickness","speed","color","emptyColor","className"]),g=Object(s.b)("chakra-spinner",f),O=m({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:l,borderBottomColor:p,borderLeftColor:p,color:h,animation:u+" "+d+" linear infinite"},n);return j.createElement(o.a.div,m({ref:t,__css:O,className:g},x),r&&j.createElement(b,null,r))}));l.a&&(p.displayName="Spinner");var f=n("qd8s"),x=n.n(f),g=n("JX03");function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var[v,y]=Object(g.a)({strict:!1,name:"ButtonGroupContext"}),w=Object(r.a)(((e,t)=>{var{size:n,colorScheme:a,variant:r,className:i,spacing:c="0.5rem",isAttached:l,isDisabled:d}=e,b=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),h=Object(s.b)("chakra-button__group",i),m=j.useMemo((()=>({size:n,colorScheme:a,variant:r,isDisabled:d})),[n,a,r,d]),u={display:"inline-flex"};return u=O({},u,l?{"> *:first-of-type:not(:last-of-type)":{borderRightRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderLeftRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginLeft:c}}),j.createElement(v,{value:m},j.createElement(o.a.div,O({ref:t,role:"group",__css:u,className:h},b)))}));function k(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}l.a&&(w.displayName="ButtonGroup");var S=Object(r.a)(((e,t)=>{var n,a=y(),r=Object(i.b)("Button",N({},a,e)),l=Object(c.b)(e),{isDisabled:d=(null==a?void 0:a.isDisabled),isLoading:b,isActive:h,isFullWidth:m,children:u,leftIcon:p,rightIcon:f,loadingText:g,iconSpacing:O="0.5rem",type:v="button",spinner:w,className:S,as:I}=l,_=k(l,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","className","as"]),W=x()({},null!=(n=null==r?void 0:r._focus)?n:{},{zIndex:1}),z=N({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",transition:"all 250ms",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:m?"100%":"auto"},r,!!a&&{_focus:W});return j.createElement(o.a.button,N({disabled:d||b,ref:t,as:I,type:I?void 0:v,"data-active":Object(s.c)(h),"data-loading":Object(s.c)(b),__css:z,className:Object(s.b)("chakra-button",S)},_),p&&!b&&j.createElement(E,{marginEnd:O},p),b&&j.createElement(C,{__css:{fontSize:"1em",lineHeight:"normal"},spacing:O,label:g},w),b?g||j.createElement(o.a.span,{opacity:0},u):u,f&&!b&&j.createElement(E,{marginStart:O},f))}));l.a&&(S.displayName="Button");var E=e=>{var{children:t,className:n}=e,a=k(e,["children","className"]),r=j.isValidElement(t)?j.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,i=Object(s.b)("chakra-button__icon",n);return j.createElement(o.a.span,N({},a,{className:i}),r)};l.a&&(E.displayName="ButtonIcon");var C=e=>{var{label:t,spacing:n,children:a=j.createElement(p,{color:"currentColor",width:"1em",height:"1em"}),className:r,__css:i}=e,c=k(e,["label","spacing","children","className","__css"]),l=Object(s.b)("chakra-button__spinner",r),d=N({display:"flex",alignItems:"center",position:t?"relative":"absolute",marginEnd:t?n:0},i);return j.createElement(o.a.div,N({className:l},c,{__css:d}),a)};l.a&&(C.displayName="ButtonSpinner")},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("q1tI"),r=n.n(a),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=r.a.createContext&&r.a.createContext(i),o=function(){return(o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function l(e){return e&&e.map((function(e,t){return r.a.createElement(e.tag,o({key:t},e.attr),l(e.child))}))}function d(e){return function(t){return r.a.createElement(b,o({attr:o({},e.attr)},t),l(e.child))}}function b(e){var t=function(t){var n,a=e.attr,i=e.size,c=e.title,l=s(e,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,l,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&r.a.createElement("title",null,c),e.children)};return void 0!==c?r.a.createElement(c.Consumer,null,(function(e){return t(e)})):t(i)}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var a=n("nKUr"),r=n("g4pe"),i=n.n(r);function c(e){var t=e.children;return Object(a.jsx)("section",{className:"stacking-slide",children:t})}var o=n("xvhg"),s=n("pAN+"),l=n("v/A3"),d=n("tofy"),b=n("vG+z"),h=n("v7Hm"),j=n("MAJE"),m=n("YFqc"),u=n.n(m),p=n("rGDf");function f(){var e=Object(s.a)("(min-width: 914px)"),t=(Object(o.a)(e,1)[0],Object(s.a)("(max-width: 600px)")),n=Object(o.a)(t,1)[0],r=Object(l.a)({base:"column",md:"row"});return Object(a.jsxs)(d.a,{mt:3,boxShadow:"lg",borderRadius:"0 0 20px 20px",px:"2rem",height:{base:"fit-content",md:"400px"},flexDir:r,children:[Object(a.jsx)(b.a,{display:{base:"initial",md:"none"},"data-aos":"fade-in",objectFit:"contain",height:n?"400px":"100%",src:"/images/meetme.png",alt:"Nsikak Umoren"}),Object(a.jsxs)(h.a,{margin:"auto",mb:2,height:"100%",width:{base:"100%",md:"50%"},position:"relative",zIndex:"3",children:[Object(a.jsxs)(p.a,{className:"caption","data-aos":"fade-right","data-aos-easing":"ease-in-sine",as:"h2",sx:{fontFamily:"Quicksand",display:"flex"},children:[Object(a.jsx)(j.a,{children:" Meet"}),Object(a.jsxs)(j.a,{mr:2,ml:2,color:"green.500",children:["Nsikak"," "]}),Object(a.jsx)(j.a,{color:"red.500",children:" Umoren"})]}),Object(a.jsx)(h.a,{children:Object(a.jsx)(j.a,{mb:2,className:"afont",color:"gray",children:'Around the globe, there is an expanding passion for youth to be involved politics. Some political groups are transforming to react to the growing number of youths that wish to affect the political system. Political ideologies appealing to young people that were as soon as considered "fringe" ideas are coming to be mainstream, much more youngsters are connecting themselves with non-popular political events.'})}),Object(a.jsx)(u.a,{href:"/about",children:Object(a.jsx)(h.a,{mt:4,as:"a",cursor:"pointer",children:Object(a.jsx)(j.a,{_hover:{textDecoration:"underline"},fontSize:"18px",fontWeight:"bold",className:"qfont",children:"Read More"})})})]}),Object(a.jsx)(h.a,{display:{base:"none",md:"flex"},id:"about-image-box",height:"100%",width:"50%",padding:"20px 0 0 0",justifyContent:"center",alignItems:"center",backgroundImage:"url(/images/hor.jpg)",bgSize:"contain",bgPosition:"center",bgBlendMode:"overlay",bgColor:"blackAlpha.500",children:Object(a.jsx)(b.a,{objectFit:"contain",height:"100%",src:"/images/meetme.png",alt:"Nsikak Umoren"})})]})}var x=n("cpVT"),g=[{title:"Community Care.",content:"The impact of a community centered agenda will be felt by every citizen"},{title:"Inclusive Governance.",content:"As a sailor cannot abandon his crew, Nsiskak's agenda takes every citizen into account"},{title:"Create a Constituency we love.",content:"The outcome of your collective contribution will shape the constituency into one we desired"}],O=["/icons/care.svg","/icons/place.svg","/icons/teamwork.svg"],v=function(e){var t=e.isLargerThan600,n=e.isLargerThan914,r=e.title,i=e.content,c=e.image,o=e.delay;return Object(a.jsxs)(d.a,{id:"campaign-feature-card",p:1,justifyContent:"center",alignItems:"center",my:5,"data-aos":"flip-down","data-aos-delay":o,children:[Object(a.jsx)(h.a,{minWidth:"90px",maxW:"90px",height:"90px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",backgroundColor:"#f9f9f9",boxShadow:"-5px -5px 15px #ef272724, 5px 5px 15px #6cd46a38",mb:t?"20px":0,children:Object(a.jsx)(b.a,{src:c,width:"60%"})}),Object(a.jsxs)(h.a,{ml:n?"25px":t?0:"25px",width:t?"100%":"70%",children:[Object(a.jsx)(j.a,{id:"campaign-feature-card-title",color:"blue.500",fontWeight:"bold",className:"qfont",fontSize:"20px",children:r}),Object(a.jsx)(j.a,{className:"qfont",fontSize:"15px",children:i})]})]})};function y(){var e,t,n=Object(s.a)("(min-width: 914px)"),r=Object(o.a)(n,1)[0],i=Object(s.a)("(min-width: 601px"),l=Object(o.a)(i,1)[0];return Object(a.jsxs)(c,{children:[Object(a.jsxs)(d.a,{justifyContent:"center",height:"100px",alignItems:"center",bg:"#4844440a",mb:2,py:2,children:[Object(a.jsx)(j.a,(e={color:"white",px:1,width:"fit-content"},Object(x.a)(e,"color","green.500"),Object(x.a)(e,"fontSize","26px"),Object(x.a)(e,"className","afont"),Object(x.a)(e,"fontWeight","bold"),Object(x.a)(e,"children","Nsikak"),e)),Object(a.jsx)(j.a,{color:"#7a7a7a",px:1,width:"fit-content",fontSize:"26px",className:"afont",fontWeight:"bold",children:"Abasi"}),Object(a.jsx)(j.a,(t={color:"white",px:1,width:"fit-content"},Object(x.a)(t,"color","red.500"),Object(x.a)(t,"fontSize","26px"),Object(x.a)(t,"className","afont"),Object(x.a)(t,"fontWeight","bold"),Object(x.a)(t,"children","2023"),t))]}),Object(a.jsx)(d.a,{id:"campaign-feature-container",alignItems:"center",padding:"2rem",children:g.map((function(e,t){return Object(a.jsx)(v,{isLargerThan600:l,isLargerThan914:r,title:e.title,content:e.content,image:O[t],delay:0==t?"0":1==t?"300":500},t)}))})]})}function w(){var e=Object(s.a)("(min-width: 914px)"),t=Object(o.a)(e,1)[0],n=Object(s.a)("(max-width: 600px)");Object(o.a)(n,1)[0];return Object(a.jsx)(c,{children:Object(a.jsxs)(d.a,{padding:"2rem 2rem 0rem 2rem",height:"90%",alignItems:"",justifyContent:"space-between",flexDir:{base:"column",md:"row"},children:[Object(a.jsxs)(h.a,{children:[Object(a.jsx)(h.a,{mb:2,children:Object(a.jsx)(j.a,{color:"white",px:1,width:"fit-content",bgColor:"blue.500",fontSize:t?"50px":"33px",className:"afont",fontWeight:"bold",children:"Together, We Can"})}),Object(a.jsx)(h.a,{children:Object(a.jsx)(j.a,{color:"white",px:1,width:"fit-content",bgColor:"blue.500",fontSize:t?"50px":"28px",className:"afont",fontWeight:"bold",children:"Build it."})}),Object(a.jsx)(h.a,{mt:3,width:{base:"100%",md:"300px"},children:Object(a.jsxs)(j.a,{color:"grey",px:1,fontSize:"15px",className:"qfont",fontWeight:"500",children:["Let US give citizens equal opportunity through impactful Leadership, inclusive governance, community building, and youth empowerment. ",Object(a.jsx)("br",{}),Object(a.jsx)("i",{children:" ~ Nsikak Umoren."})]})})]}),Object(a.jsx)(h.a,{margin:"auto",boxSize:{base:"100%",md:"55%"},children:Object(a.jsx)(b.a,{objectFit:"cover",src:"/images/header-image.png",alt:"Nsikak Umoren"})})]})})}var k=[{title:"Education",body:"Education builds a nation, therefore its imperative to improve this sector",icon:"/icons/edu.svg",ref:"education"},{title:"Poverty Alleviation",body:"Youth empowerment and encouragement to imbibe entrepreneural skills will be emphasized",icon:"/icons/rich.svg",ref:"povertyAlleviation"},{title:"Electricity",body:"Many business run on Electricity, solving the problem of power failures will increase profit",icon:"/icons/lightning.svg",ref:"electricity"},{title:"Women Participation",body:"Women will be offerred a platform to air their personal views on policies directly affecting them",icon:"/icons/woman.svg",ref:"womenParticipation"},{title:"Communal Health",body:"Cheap and affordable healthcare services will be invested in and made available to every member of the constituency",icon:"/icons/healthcare.svg",ref:"communalHealth"},{title:"Youth Involvement",body:"It is the goal of this government to bring politics closer to the youths, our futures leaders",icon:"/icons/youth.svg",ref:"youthInvolvement"}];function N(e){var t=e.title,n=e.body,r=e.icon,i=e.anim,c=e.reference,l=Object(s.a)("(min-width: 914px)"),d=(Object(o.a)(l,1)[0],Object(s.a)("(min-width: 601px")),m=Object(o.a)(d,1)[0];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(u.a,{href:"/manifesto#"+c,children:Object(a.jsxs)(h.a,{as:"a",cursor:"pointer","data-aos":i,"data-aos-easing":"ease-in-sine",className:"project-cards",display:"flex",flexDir:"column",justifyContent:"center",alignItems:"center",p:"4rem",textAlign:"center",boxShadow:"lg",height:"370px",children:[Object(a.jsx)(h.a,{minWidth:"100px",maxW:"100px",height:"100px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",mb:m?"20px":0,children:Object(a.jsx)(b.a,{src:r,width:"100%"})}),Object(a.jsx)(j.a,{className:"qfont project-card-title",fontSize:"1.5rem",fontWeight:"light",children:t}),Object(a.jsx)(j.a,{className:"afont",fontSize:"1rem",fontWeight:"light",children:n})]})})})}function S(){var e=Object(s.a)("(min-width: 914px)"),t=(Object(o.a)(e,1)[0],Object(s.a)("(max-width: 600px)")),n=(Object(o.a)(t,1)[0],Object(l.a)({base:"column",md:"row"}));return Object(a.jsxs)(d.a,{flexDir:"column",boxShadow:"lg",borderRadius:"0 0 20px 20px",pt:"2rem",height:"fit-content",ml:0,id:"projects-section",children:[Object(a.jsxs)(p.a,{py:2,px:"1.6rem",className:"caption","data-aos":"fade-right","data-aos-easing":"ease-in-sine",as:"h2",sx:{fontFamily:"Quicksand",display:"flex"},children:[Object(a.jsx)(j.a,{mr:2,ml:2,color:"green.500",children:"Nsikak's"}),Object(a.jsx)(j.a,{children:" Agenda"})]}),Object(a.jsxs)(d.a,{alignItems:"center",width:"100%",flexDir:n,justifyContent:"space-between",children:[Object(a.jsx)(N,{anim:"zoom-in-right",title:k[0].title,body:k[0].body,icon:k[0].icon,reference:k[0].ref}),Object(a.jsx)(N,{anim:"zoom-in-left",title:k[1].title,body:k[1].body,icon:k[1].icon,reference:k[1].ref})]}),Object(a.jsxs)(d.a,{alignItems:"center",width:"100%",flexDir:n,justifyContent:"space-between",children:[Object(a.jsx)(N,{anim:"zoom-in-right",title:k[2].title,body:k[2].body,icon:k[2].icon,reference:k[2].ref}),Object(a.jsx)(N,{anim:"zoom-in-left",title:k[3].title,body:k[3].body,icon:k[3].icon,reference:k[3].ref})]}),Object(a.jsxs)(d.a,{alignItems:"center",width:"100%",flexDir:n,justifyContent:"space-between",children:[Object(a.jsx)(N,{anim:"zoom-in-right",title:k[4].title,body:k[4].body,icon:k[4].icon,reference:k[4].ref}),Object(a.jsx)(N,{anim:"zoom-in-left",title:k[5].title,body:k[5].body,icon:k[5].icon,reference:k[5].ref})]})]})}var E=n("wZsY"),C=n("3L07"),I=n("ma3e");function _(){var e,t,n=Object(s.a)("(min-width: 914px)"),r=(Object(o.a)(n,1)[0],Object(s.a)("(min-width: 601px")),i=(Object(o.a)(r,1)[0],Object(s.a)("(max-width: 600px)"));Object(o.a)(i,1)[0];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(h.a,{p:"2rem",children:[Object(a.jsxs)(d.a,{justifyContent:"space-between",alignItems:"center",py:6,children:[Object(a.jsx)(E.a,{children:Object(a.jsxs)(p.a,{className:"caption","data-aos":"fade-right","data-aos-easing":"ease-in-sine",as:"h2",sx:{fontFamily:"Quicksand",display:"flex"},children:[Object(a.jsx)(j.a,{mr:2,color:"green.500",children:"Campaign"}),Object(a.jsx)(j.a,{children:" Events"})]})}),Object(a.jsx)(u.a,{href:"/events",children:Object(a.jsx)(C.a,{className:"qfont",size:"xs",children:"All Events"})})]}),Object(a.jsxs)(d.a,{justifyContent:"space-between",children:[Object(a.jsxs)(E.a,{height:"fit-content",width:{base:"100%",md:"45%"},children:[Object(a.jsxs)(d.a,(e={mb:"auto",height:"200px",boxShadow:"md"},Object(x.a)(e,"mb",5),Object(x.a)(e,"display",{base:"flex",md:"none"}),Object(x.a)(e,"children",[Object(a.jsx)(h.a,{overflow:"hidden",width:"50%",boxShadow:"md",children:Object(a.jsx)(b.a,{src:"/images/ytmeeting.jpg",width:"100%",height:"100%",objectFit:"cover"})}),Object(a.jsxs)(h.a,{width:"50%",p:"3",className:"qfont",children:[Object(a.jsxs)(d.a,{alignItems:"center",children:[Object(a.jsx)(h.a,{as:"span",color:"green.600",children:Object(a.jsx)(I.f,{})}),Object(a.jsx)(j.a,{px:1,as:"small",color:"green.500",children:"Passed"})]}),Object(a.jsx)(j.a,{fontSize:"25px",lineHeight:"23px",className:"afont",py:2,children:"First Obot Akara Youth Summit"}),Object(a.jsxs)(d.a,{alignItems:"center",children:[Object(a.jsx)(h.a,{as:"span",color:"red.600",children:Object(a.jsx)(I.c,{})}),Object(a.jsxs)(j.a,{px:1,as:"small",fontWeight:"bold",children:["12",Object(a.jsx)("sup",{children:"th"})," March"]})]})]})]),e)),Object(a.jsxs)(d.a,(t={mb:"auto",height:"200px",boxShadow:"md"},Object(x.a)(t,"mb",5),Object(x.a)(t,"children",[Object(a.jsx)(h.a,{overflow:"hidden",width:"50%",boxShadow:"md",children:Object(a.jsx)(b.a,{src:"/images/youth.jpg",width:"100%",height:"100%",objectFit:"cover"})}),Object(a.jsxs)(h.a,{width:"50%",p:"3",className:"qfont",children:[Object(a.jsxs)(d.a,{alignItems:"center",children:[Object(a.jsx)(h.a,{as:"span",color:"green.600",children:Object(a.jsx)(I.f,{})}),Object(a.jsx)(j.a,{px:1,as:"small",color:"green.500",children:"Upcoming"})]}),Object(a.jsxs)(j.a,{fontSize:"25px",lineHeight:"23px",className:"afont",py:2,children:["Meeting with the Youths in Ikot Ekpene"," "]}),Object(a.jsxs)(d.a,{alignItems:"center",children:[Object(a.jsx)(h.a,{as:"span",color:"red.600",children:Object(a.jsx)(I.c,{})}),Object(a.jsxs)(j.a,{px:1,as:"small",fontWeight:"bold",children:["18",Object(a.jsx)("sup",{children:"th"})," March"]})]})]})]),t)),Object(a.jsxs)(d.a,{mb:"auto",height:"200px",boxShadow:"md",children:[Object(a.jsx)(h.a,{overflow:"hidden",width:"50%",boxShadow:"md",children:Object(a.jsx)(b.a,{src:"/images/evt1.jpg",width:"100%",height:"100%",objectFit:"cover"})}),Object(a.jsxs)(h.a,{width:"50%",p:"3",className:"qfont",children:[Object(a.jsxs)(d.a,{alignItems:"center",children:[Object(a.jsx)(h.a,{as:"span",color:"green.600",children:Object(a.jsx)(I.f,{})}),Object(a.jsx)(j.a,{px:1,as:"small",color:"green.500",children:"Upcoming"})]}),Object(a.jsxs)(j.a,{fontSize:"25px",lineHeight:"23px",className:"afont",py:2,children:["Meeting with elders in Essien Udim"," "]}),Object(a.jsxs)(d.a,{alignItems:"center",children:[Object(a.jsx)(h.a,{as:"span",color:"red.600",children:Object(a.jsx)(I.c,{})}),Object(a.jsxs)(j.a,{px:1,as:"small",fontWeight:"bold",children:["7",Object(a.jsx)("sup",{children:"th"})," April"]})]})]})]})]}),Object(a.jsx)(E.a,{bg:"url('/images/women-meet.jpg')",bgColor:"rgba(0,0,0,0.7)",bgBlendMode:"darken",bgSize:"cover",bgRepeat:"no-repeat",bgPosition:"center",width:"52%",height:"420px",display:{base:"none",md:"flex"},flexDir:"column",justifyContent:"flex-end",children:Object(a.jsxs)(h.a,{width:"80%",p:"3",className:"qfont",children:[Object(a.jsxs)(d.a,{alignItems:"center",children:[Object(a.jsx)(h.a,{as:"span",color:"green.600",children:Object(a.jsx)(I.f,{})}),Object(a.jsx)(j.a,{px:1,as:"small",color:"green.500",children:"Upcoming"})]}),Object(a.jsxs)(j.a,{fontSize:"25px",lineHeight:"23px",className:"afont",py:2,color:"white",children:["Meeting with Obot Akara Women"," "]}),Object(a.jsxs)(d.a,{alignItems:"center",children:[Object(a.jsx)(h.a,{as:"span",color:"red.600",children:Object(a.jsx)(I.c,{})}),Object(a.jsxs)(j.a,{px:1,as:"small",color:"red.500",fontWeight:"bold",children:["21",Object(a.jsx)("sup",{children:"st"})," April"]})]})]})})]})]})})}function W(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w,{}),Object(a.jsx)(y,{}),Object(a.jsx)(f,{}),Object(a.jsx)(S,{}),Object(a.jsx)(_,{})]})}function z(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(i.a,{children:[Object(a.jsx)("title",{children:"Welcome to Nsikak Umoren Campaign site! "}),Object(a.jsx)("meta",{name:"description",content:"Nsikak Umoren believes in popular participation. Get all details about him and information on how to participate directly on this site."}),Object(a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(a.jsx)("main",{children:Object(a.jsx)(W,{})})]})}},cpVT:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},tofy:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("sKyC"),r=n("U6LL"),i=n("pr4h"),c=n("q1tI");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=Object(a.a)(((e,t)=>{var{direction:n,align:a,justify:i,wrap:s,basis:l,grow:d,shrink:b}=e,h=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["direction","align","justify","wrap","basis","grow","shrink"]),j={display:"flex",flexDirection:n,alignItems:a,justifyContent:i,flexWrap:s,flexBasis:l,flexGrow:d,flexShrink:b};return c.createElement(r.a.div,o({ref:t,__css:j},h))}));i.a&&(s.displayName="Flex")},"v/A3":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("5+Am"),r=n("ypkU"),i=n("pr4h"),c=n("BXwj"),o=n("x9W9");var s=n("q1tI"),l=n.n(s);function d(e){return Object.entries(e).filter((e=>{var[t]=e;return Object(r.b)(t)})).sort(((e,t)=>Number.parseInt(e[1],10)>Number.parseInt(t[1],10)?1:-1)).map(((e,t,n)=>{var[a,r]=e,i=n[t+1],c=i?i[1]:void 0;return{minWidth:r,maxWidth:c,breakpoint:a,query:function(e,t){if(!(parseInt(e,10)>=0)&&!t)return"";var n="(min-width: "+h(e)+")";if(!t)return n;n&&(n+=" and ");return n+="(max-width: "+h(function(e){return((e,t)=>{if("number"===typeof e)return""+(e+t);return e.replace(b,(e=>""+(parseFloat(e)+t)))})(e,e.endsWith("px")?-1:-.01)}(t))+")"}(r,c)}}))}var b=/([0-9]+\.?[0-9]*)/;function h(e){return Object(i.f)(e)?e+"px":e}function j(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e){var t=function(e){var{breakpoints:t}=Object(a.d)(),n=l.a.useMemo((()=>d(m({base:"0px"},t))),[t]),[r,i]=l.a.useState((()=>{if(e){var t=n.find((t=>{var{breakpoint:n}=t;return n===e}));if(t)return j(t,["query"])}})),c=null==r?void 0:r.breakpoint,o=l.a.useCallback(((e,t)=>{e.matches&&c!==t.breakpoint&&i(t)}),[c]);return l.a.useEffect((()=>{var e=new Set;return n.forEach((t=>{var{query:n}=t,a=j(t,["query"]),r=window.matchMedia(n);o(r,a);var i=()=>{o(r,a)};return r.addListener(i),e.add({mediaQuery:r,handleChange:i}),()=>{r.removeListener(i)}})),()=>{e.forEach((e=>{var{mediaQuery:t,handleChange:n}=e;t.removeListener(n)})),e.clear()}}),[n,t,o]),c}(),n=Object(a.d)();if(t){var s=Object.keys(n.breakpoints).filter(r.b);return function(e,t,n){void 0===n&&(n=o.b);var a=Object.keys(e).indexOf(t);if(-1!==a)return e[t];for(var r=n.indexOf(t);r>=0;){if(null!=e[n[r]]){a=r;break}r-=1}return-1!==a?e[n[a]]:void 0}(Object(i.b)(e)?Object(c.b)(Object.entries(Object(o.a)(e,s)).map((e=>{var[t,n]=e;return[t,n]}))):e,t,s)}}},"vG+z":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("sKyC"),r=n("U6LL"),i=n("BXwj"),c=n("pr4h"),o=n("q1tI"),s=n("zlS4");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var b=o.forwardRef(((e,t)=>{var{htmlWidth:n,htmlHeight:a,alt:r}=e,i=d(e,["htmlWidth","htmlHeight","alt"]);return o.createElement("img",l({width:n,height:a,ref:t,alt:r},i))})),h=Object(a.a)(((e,t)=>{var{fallbackSrc:n,fallback:a,src:c,align:h,fit:j,loading:m,ignoreFallback:u,crossOrigin:p}=e,f=d(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),x=null!=m||u,g=function(e){var{src:t,srcSet:n,onLoad:a,onError:r,crossOrigin:i,sizes:c,ignoreFallback:l}=e,[d,b]=Object(o.useState)("pending");Object(o.useEffect)((()=>{b(t?"loading":"pending")}),[t]);var h=Object(o.useRef)(),j=Object(o.useCallback)((()=>{if(t){m();var e=new Image;e.src=t,i&&(e.crossOrigin=i),n&&(e.srcset=n),c&&(e.sizes=c),e.onload=e=>{m(),b("loaded"),null==a||a(e)},e.onerror=e=>{m(),b("failed"),null==r||r(e)},h.current=e}}),[t,i,n,c,a,r]),m=()=>{h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return Object(s.a)((()=>{if(!l)return"loading"===d&&j(),()=>{m()}}),[d,j,l]),l?"loaded":d}(l({},e,{ignoreFallback:x})),O=l({ref:t,objectFit:j,objectPosition:h},x?f:Object(i.h)(f,["onError","onLoad"]));return"loaded"!==g?a||o.createElement(r.a.img,l({as:b,className:"chakra-image__placeholder",src:n},O)):o.createElement(r.a.img,l({as:b,src:c,crossOrigin:p,loading:m,className:"chakra-image"},O))}));c.a&&(h.displayName="Image")},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},wZsY:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n("U6LL"),r=n("sKyC"),i=n("JX03"),c=n("epLR"),o=n("pr4h"),s=n("q1tI"),l=n("x9W9"),d="& > *:not(style) ~ *:not(style)";function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var h=e=>s.createElement(a.a.div,b({className:"chakra-stack__item"},e,{__css:b({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)})),j=Object(r.a)(((e,t)=>{var{isInline:n,direction:r,align:o,justify:j,spacing:m="0.5rem",wrap:u,children:p,divider:f,className:x,shouldWrapChildren:g}=e,O=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),v=n?"row":null!=r?r:"column",y=s.useMemo((()=>function(e){var{spacing:t,direction:n}=e,a={column:{marginTop:t,marginStart:0},row:{marginStart:t,marginTop:0},"column-reverse":{marginBottom:t,marginEnd:0},"row-reverse":{marginEnd:t,marginBottom:0}};return{flexDirection:n,[d]:Object(l.d)(n,(e=>a[e]))}}({direction:v,spacing:m})),[v,m]),w=s.useMemo((()=>function(e){var{spacing:t,direction:n}=e,a={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Object(l.d)(n,(e=>a[e]))}}({spacing:m,direction:v})),[m,v]),k=!!f,N=!g&&!k,S=Object(i.b)(p),E=N?S:S.map(((e,t)=>{var n=t+1===S.length,a=g?s.createElement(h,{key:t},e):e;if(!k)return a;var r=n?null:s.cloneElement(f,{__css:w});return s.createElement(s.Fragment,{key:t},a,r)})),C=Object(c.b)("chakra-stack",x);return s.createElement(a.a.div,b({ref:t,display:"flex",alignItems:o,justifyContent:j,flexDirection:y.flexDirection,flexWrap:u,className:C,__css:k?{}:{[d]:y[d]}},O),E)}));o.a&&(j.displayName="Stack");var m=Object(r.a)(((e,t)=>s.createElement(j,b({align:"center"},e,{direction:"row",ref:t}))));o.a&&(m.displayName="HStack");var u=Object(r.a)(((e,t)=>s.createElement(j,b({align:"center"},e,{direction:"column",ref:t}))));o.a&&(u.displayName="VStack")},zlS4:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI"),r=n("epLR").e?a.useLayoutEffect:a.useEffect}},[["vlRD",1,2,5,0,3,4]]]);