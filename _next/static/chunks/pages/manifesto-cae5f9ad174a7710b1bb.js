_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{a9sR:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manifesto",function(){return n("zJSe")}])},tofy:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("sKyC"),a=n("U6LL"),o=n("pr4h"),r=n("q1tI");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var c=Object(i.a)(((e,t)=>{var{direction:n,align:i,justify:o,wrap:c,basis:l,grow:h,shrink:d}=e,m=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["direction","align","justify","wrap","basis","grow","shrink"]),b={display:"flex",flexDirection:n,alignItems:i,justifyContent:o,flexWrap:c,flexBasis:l,flexGrow:h,flexShrink:d};return r.createElement(a.a.div,s({ref:t,__css:b},m))}));o.a&&(c.displayName="Flex")},"vG+z":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n("sKyC"),a=n("U6LL"),o=n("BXwj"),r=n("pr4h"),s=n("q1tI"),c=n("zlS4");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}var d=s.forwardRef(((e,t)=>{var{htmlWidth:n,htmlHeight:i,alt:a}=e,o=h(e,["htmlWidth","htmlHeight","alt"]);return s.createElement("img",l({width:n,height:i,ref:t,alt:a},o))})),m=Object(i.a)(((e,t)=>{var{fallbackSrc:n,fallback:i,src:r,align:m,fit:b,loading:u,ignoreFallback:f,crossOrigin:j}=e,p=h(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),g=null!=u||f,x=function(e){var{src:t,srcSet:n,onLoad:i,onError:a,crossOrigin:o,sizes:r,ignoreFallback:l}=e,[h,d]=Object(s.useState)("pending");Object(s.useEffect)((()=>{d(t?"loading":"pending")}),[t]);var m=Object(s.useRef)(),b=Object(s.useCallback)((()=>{if(t){u();var e=new Image;e.src=t,o&&(e.crossOrigin=o),n&&(e.srcset=n),r&&(e.sizes=r),e.onload=e=>{u(),d("loaded"),null==i||i(e)},e.onerror=e=>{u(),d("failed"),null==a||a(e)},m.current=e}}),[t,o,n,r,i,a]),u=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return Object(c.a)((()=>{if(!l)return"loading"===h&&b(),()=>{u()}}),[h,b,l]),l?"loaded":h}(l({},e,{ignoreFallback:g})),y=l({ref:t,objectFit:b,objectPosition:m},g?p:Object(o.h)(p,["onError","onLoad"]));return"loaded"!==x?i||s.createElement(a.a.img,l({as:d,className:"chakra-image__placeholder",src:n},y)):s.createElement(a.a.img,l({as:d,src:r,crossOrigin:j,loading:u,className:"chakra-image"},y))}));r.a&&(m.displayName="Image")},wZsY:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n("U6LL"),a=n("sKyC"),o=n("JX03"),r=n("epLR"),s=n("pr4h"),c=n("q1tI"),l=n("x9W9"),h="& > *:not(style) ~ *:not(style)";function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var m=e=>c.createElement(i.a.div,d({className:"chakra-stack__item"},e,{__css:d({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)})),b=Object(a.a)(((e,t)=>{var{isInline:n,direction:a,align:s,justify:b,spacing:u="0.5rem",wrap:f,children:j,divider:p,className:g,shouldWrapChildren:x}=e,y=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),w=n?"row":null!=a?a:"column",v=c.useMemo((()=>function(e){var{spacing:t,direction:n}=e,i={column:{marginTop:t,marginStart:0},row:{marginStart:t,marginTop:0},"column-reverse":{marginBottom:t,marginEnd:0},"row-reverse":{marginEnd:t,marginBottom:0}};return{flexDirection:n,[h]:Object(l.d)(n,(e=>i[e]))}}({direction:w,spacing:u})),[w,u]),O=c.useMemo((()=>function(e){var{spacing:t,direction:n}=e,i={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Object(l.d)(n,(e=>i[e]))}}({spacing:u,direction:w})),[u,w]),k=!!p,N=!x&&!k,S=Object(o.b)(j),z=N?S:S.map(((e,t)=>{var n=t+1===S.length,i=x?c.createElement(m,{key:t},e):e;if(!k)return i;var a=n?null:c.cloneElement(p,{__css:O});return c.createElement(c.Fragment,{key:t},i,a)})),E=Object(r.b)("chakra-stack",g);return c.createElement(i.a.div,d({ref:t,display:"flex",alignItems:s,justifyContent:b,flexDirection:v.flexDirection,flexWrap:f,className:E,__css:k?{}:{[h]:v[h]}},y),z)}));s.a&&(b.displayName="Stack");var u=Object(a.a)(((e,t)=>c.createElement(b,d({align:"center"},e,{direction:"row",ref:t}))));s.a&&(u.displayName="HStack");var f=Object(a.a)(((e,t)=>c.createElement(b,d({align:"center"},e,{direction:"column",ref:t}))));s.a&&(f.displayName="VStack")},zJSe:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var i=n("nKUr"),a=n("xvhg"),o=(n("YFqc"),n("g4pe")),r=n.n(o),s=n("v7Hm"),c=n("rGDf"),l=n("wZsY"),h=n("pAN+"),d=n("tofy"),m=n("vG+z"),b=n("MAJE");function u(){var e=Object(h.a)("(min-width: 914px)"),t=(Object(a.a)(e,1)[0],Object(h.a)("(min-width: 601px")),n=(Object(a.a)(t,1)[0],Object(h.a)("(max-width: 600px)")),o=Object(a.a)(n,1)[0];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(r.a,{children:[Object(i.jsx)("title",{children:"Manifesto | NsikaUmorenk Umoren Campaign"}),Object(i.jsx)("meta",{name:"description",content:"Nsikak Umoren's manifesto for 2023 is all encompassing, incorporating every citizen in his plan for good governance."}),Object(i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(i.jsxs)(s.a,{padding:"2rem",children:[Object(i.jsxs)(c.a,{id:"about-page-header",py:2,pb:4,as:"h2",sx:{fontFamily:"Quicksand",fontSize:o?"30px":"48px",display:"flex",flexWrap:"wrap"},textAlign:{base:"center",md:"left"},children:[Object(i.jsx)(b.a,{mr:2,ml:2,color:"green.500",children:"Nsikak's"}),Object(i.jsx)(b.a,{children:" Manifesto"})]}),Object(i.jsxs)(l.a,{children:[Object(i.jsxs)(d.a,{justifyContent:"space-between",flexDir:{base:"column",md:"row"},mb:5,height:"fit-content",id:"education",children:[Object(i.jsx)(s.a,{width:{base:"100%",md:"40%"},mb:3,children:Object(i.jsx)(m.a,{mx:"auto",src:"/images/ed.jpg",width:"100%",height:"100%",maxH:"450px",objectFit:"cover",objectPosition:"top"})}),Object(i.jsxs)(s.a,{pl:{base:"0",md:"1.5rem"},width:{base:"100%",md:"60%"},children:[Object(i.jsx)(b.a,{fontSize:"30px",fontWeight:"semi-bold",className:"afont",children:"Education"}),Object(i.jsx)(b.a,{fontSize:"18px",className:"qfont about-page-content",children:"Education builds a nation, therefore, it\u2019s imperative to improve this sector. It would be insincerity to say the educational system in the state is okay. The curriculum is outdated and the infrastructures is nothing to write home about especially in government owned schools and institutions. Then there are thousands of children not in school even when education has been made free in Akwa-Ibom state."}),Object(i.jsx)("br",{}),Object(i.jsx)(b.a,{fontSize:"18px",className:"qfont about-page-content",children:"The children are the leaders of tomorrow, if they are not trained well and right, will there be hope for the country? Possible solutions that can savage the educational sector that my government will work towards is to make sure funds are available and some basic needs like books, uniforms, etc, will be made available to support the children to go to school."})]})]}),Object(i.jsxs)(d.a,{mb:5,justifyContent:"space-between",flexDir:{base:"column",md:"row-reverse"},height:"fit-content",id:"povertyAlleviation",children:[Object(i.jsx)(s.a,{width:{base:"100%",md:"40%"},mb:3,children:Object(i.jsx)(m.a,{mx:"auto",src:"/images/pa.jpg",width:"100%",height:"100%",maxHeight:"450px",objectFit:"cover",objectPosition:"top"})}),Object(i.jsxs)(s.a,{pr:{base:"0",md:"1.5rem"},width:{base:"100%",md:"60%"},children:[Object(i.jsx)(b.a,{fontSize:"30px",fontWeight:"semi-bold",className:"qfont",children:"Poverty Alleviation"}),Object(i.jsx)(b.a,{fontSize:"18px",className:"qfont",children:"One of the major reasons poverty is in the land is unemployment. Unemployment in the nation is very high. According to the National Bureau of Statistics as at 2020, data shows that about 21.7 million Nigerians are unemployed of which 13.9 million are youth. An increase in youth unemployment in any nation will mean an increase in poverty which leads to insecurity and crime."}),Object(i.jsx)("br",{}),Object(i.jsx)(b.a,{fontSize:"18px",className:"qfont ",children:"To curb this there has to be creation of more jobs. But looking critically at the issue of unemployment, you\u2019ll find out that a lot of the unemployed citizens, especially the youth don\u2019t have the necessary skills and education to hold a job. To solve this, while jobs are being created, people should be trained on some technical skills, vocational skills and the entrepreneurial skills. This way they are employable."})]})]}),Object(i.jsxs)(d.a,{justifyContent:"space-between",flexDir:{base:"column",md:"row"},mb:5,height:"fit-content",id:"electricity",children:[Object(i.jsx)(s.a,{width:{base:"100%",md:"40%"},mb:3,children:Object(i.jsx)(m.a,{mx:"auto",src:"/images/e.jpg",width:"100%",height:"100%",maxH:"450px",objectFit:"cover",objectPosition:"top"})}),Object(i.jsxs)(s.a,{pl:{base:"0",md:"1.5rem"},width:{base:"100%",md:"60%"},children:[Object(i.jsx)(b.a,{fontSize:"30px",fontWeight:"semi-bold",className:"afont",children:"Electricity"}),Object(i.jsx)(b.a,{fontSize:"18px",className:"qfont about-page-content",children:"Electricity is one of the basic needs a government should provide for its citizens but some communities can\u2019t boast of steady light. While some areas have forgotten how it feels to have light in the community. It\u2019s worst for business owners who now have to find alternatives to have light and run their businesses."}),Object(i.jsx)("br",{}),Object(i.jsx)(b.a,{fontSize:"18px",className:"qfont about-page-content",children:"My administration will tackle this and solve this problem. Once solved business owners get to have more profit and the community get to enjoy steady light."})]})]}),Object(i.jsxs)(d.a,{justifyContent:"space-between",flexDir:{base:"column",md:"row-reverse"},mb:5,height:"fit-content",id:"womenParticipation",children:[Object(i.jsx)(s.a,{width:{base:"100%",md:"40%"},mb:3,children:Object(i.jsx)(m.a,{mx:"auto",src:"/images/wp.jpg",width:"100%",height:"100%",maxH:"450px",objectFit:"cover",objectPosition:"top"})}),Object(i.jsxs)(s.a,{pr:{base:"0",md:"1.5rem"},width:{base:"100%",md:"60%"},children:[Object(i.jsx)(b.a,{fontSize:"30px",fontWeight:"semi-bold",className:"afont",children:"Women Participation"}),Object(i.jsx)(b.a,{fontSize:"18px",className:"qfont about-page-content",children:"The role of women in community development cannot be overlooked. Starting from the homes, they play a great impact by being training the children who are the future of the community."}),Object(i.jsx)("br",{}),Object(i.jsx)(b.a,{fontSize:"18px",className:"qfont about-page-content",children:"Women will be offered a platform to air their personal views on policies affecting them. o enjoy steady light."})]})]}),Object(i.jsxs)(d.a,{justifyContent:"space-between",flexDir:{base:"column",md:"row"},mb:5,height:"fit-content",id:"communalHealth",children:[Object(i.jsx)(s.a,{width:{base:"100%",md:"40%"},mb:3,children:Object(i.jsx)(m.a,{mx:"auto",src:"/images/ch.jpg",width:"100%",height:"100%",maxH:"450px",objectFit:"cover",objectPosition:"top"})}),Object(i.jsxs)(s.a,{pl:{base:"0",md:"1.5rem"},width:{base:"100%",md:"60%"},children:[Object(i.jsx)(b.a,{fontSize:"30px",fontWeight:"semi-bold",className:"afont",children:"Communal Health"}),Object(i.jsx)(b.a,{fontSize:"18px",className:"qfont about-page-content",children:"Everyone in the community is entitled to good healthcare. This we will do by identifying top public health concern, craft out a workable plan and make sure the community have access to medical services, even in emergency situation."}),Object(i.jsx)("br",{}),Object(i.jsx)(b.a,{fontSize:"18px",className:"qfont about-page-content",children:"My administration will tackle this and solve this problem, no one should lose their life due to bad healthcare services."})]})]}),Object(i.jsxs)(d.a,{justifyContent:"space-between",flexDir:{base:"column",md:"row-reverse"},mb:5,height:"fit-content",id:"youthInvolvement",children:[Object(i.jsx)(s.a,{width:{base:"100%",md:"40%"},mb:3,children:Object(i.jsx)(m.a,{mx:"auto",src:"/images/yt.jpg",width:"100%",height:"100%",maxH:"450px",objectFit:"cover",objectPosition:"top"})}),Object(i.jsxs)(s.a,{pr:{base:"0",md:"1.5rem"},width:{base:"100%",md:"60%"},children:[Object(i.jsx)(b.a,{fontSize:"30px",fontWeight:"semi-bold",className:"afont",children:"Youth Involvement"}),Object(i.jsx)(b.a,{fontSize:"18px",className:"qfont about-page-content",children:"The youth are the future leaders of tomorrow. The youth are considered the engine room and life of the any community and it is important they are carried along in everything we will be doing which will provide them the opportunity to contribute to the community development."}),Object(i.jsx)("br",{}),Object(i.jsx)(b.a,{fontSize:"18px",className:"qfont about-page-content",children:" Other opportunities like skill acquisition, personal development and taking leadership positions in the community will also be made available to them. It is the goal of this government to bring politics closer to the youths, our future leaders."})]})]})]})]})]})}},zlS4:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("q1tI"),a=n("epLR").e?i.useLayoutEffect:i.useEffect}},[["a9sR",1,2,0,3,4]]]);