(this["webpackJsonpreact-finalproject"]=this["webpackJsonpreact-finalproject"]||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=(a(99),a(8)),i=a(31),u=a(78),s=a(15),m=a(6),d=Object(i.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{token:"",isLoggedIn:!1,firstName:"",lastName:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_SESSION":return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:!0,token:t.value.token,firstName:t.value.firstName,lastName:t.value.lastName});case"END_SESSION":return{token:"",isLoggedIn:!1,firstName:"",lastName:""};default:return e}},books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOKS":return t.value;case"ADD_BOOK":return[].concat(Object(s.a)(e),[{book:t.value.book,id:t.value.id}]);default:return e}},logs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_LOGS":return t.value;case"ADD_LOG":case"CHANGE_LOG":default:return e}},selectedLog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,log:{procedures:[],book_entry_number:null,book_name:"",id:null,last_updated:"",quick_info:"",results:"",rxn_sketch:{fileType:"",fileData:""},user_id:null,yield:""}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHING_SELECTED_LOG":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0});case"SUCCESS_FETCH_SELECTED_LOG":return Object(m.a)(Object(m.a)({},e),{},{log:t.value,isLoading:!1});default:return e}}}),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,p=Object(i.e)(d,f(Object(i.a)(u.a))),h=a(17),b=a(2),E=a(19),v=a(11),g=a(13),O=a(142),k=a(145),y=a(147),j=a(168),S=a(33),N=a(165),C=a(153),w=a(55),x=a.n(w),_=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),I=function(e){var t=_();return r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement(y.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(j.a,{className:t.avatar},r.a.createElement(x.a,null)),r.a.createElement(S.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,noValidate:!0,onSubmit:e.handleSubmit},r.a.createElement(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:e.userLoginInfo.email,onChange:e.handleTextChange,autoComplete:"email",autoFocus:!0}),r.a.createElement(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",value:e.userLoginInfo.password,onChange:e.handleTextChange,id:"password",autoComplete:"current-password"}),r.a.createElement(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign In"),r.a.createElement(h.b,{to:"/signup",variant:"body2"},"Don't have an account? Sign Up"))))},T=function(e){var t=e.location,a=Object(l.b)(),c=Object(E.g)(),o=Object(l.c)((function(e){return e.user})),i=Object(n.useState)({email:"",password:""}),u=Object(g.a)(i,2),s=u[0],d=u[1],f=(t.state||{from:{pathname:"/"}}).from;return Object(n.useEffect)((function(){var e=localStorage.getItem("user");if(e){var t={type:"CREATE_SESSION",value:JSON.parse(e)};a(t)}}),[]),r.a.createElement(r.a.Fragment,null,o.isLoggedIn?r.a.createElement(E.a,{to:f}):r.a.createElement(I,{handleSubmit:function(e){e.preventDefault(),a(function(e){return function(t){fetch("".concat("https://chem-logger.herokuapp.com","/api/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){var a={type:"CREATE_SESSION",value:e};localStorage.setItem("user",JSON.stringify(e)),t(a)})).catch((function(e){console.log("issues",e)}))}}(s))},userLoginInfo:s,handleTextChange:function(e){d(Object(m.a)(Object(m.a)({},s),{},Object(v.a)({},e.target.name,e.target.value)))},handleSignUpNavigation:function(){c.push("/signup")}}))},D=a(154),L=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),F=function(){var e=L(),t=Object(l.b)(),a=Object(E.g)(),n=r.a.useState({email:"",firstName:"",lastName:"",password:""}),c=Object(g.a)(n,2),o=c[0],i=c[1],u=function(e){i(Object(m.a)(Object(m.a)({},o),{},Object(v.a)({},e.target.name,e.target.value)))};return r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement(y.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(j.a,{className:e.avatar},r.a.createElement(x.a,null)),r.a.createElement(S.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:function(e){var n;e.preventDefault(),t((n=o,function(e){fetch("".concat("https://chem-logger.herokuapp.com","/api/user/create"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){alert("User Created!")})).catch((function(e){console.log("issues: ",e)}))})),a.push("/login")}},r.a.createElement(D.a,{container:!0,spacing:2},r.a.createElement(D.a,{item:!0,xs:12,sm:6},r.a.createElement(N.a,{autoComplete:"fname",name:"firstName",variant:"outlined",value:o.firstName,onChange:u,required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(D.a,{item:!0,xs:12,sm:6},r.a.createElement(N.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",value:o.lastName,onChange:u,autoComplete:"lname"})),r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(N.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:o.email,onChange:u,autoComplete:"email"})),r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(N.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",value:o.password,onChange:u,id:"password",autoComplete:"current-password"}))),r.a.createElement(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(D.a,{container:!0,justify:"flex-end"},r.a.createElement(D.a,{item:!0},r.a.createElement(h.b,{to:"/login",variant:"body2"},"Already have an account? Sign in"))))))},M=a(167),q=a(113),A=a(159),P=a(160),W=a(112),R=a(161),U=a(67),J=a(65),B=a(84),G=a.n(B),H=a(158),X=a(86),V=Object(X.a)({typography:{h6:{fontFamily:"'Raleway', sans-serif"}}}),K=a(155),Y=a(150),Q=a(111),z=a(156),$=a(151),Z=a(157),ee=function(e){return r.a.createElement(K.a,{open:e.open,anchorEl:e.anchorEl,role:void 0,transition:!0,disablePortal:!0},(function(t){var a=t.TransitionProps,n=t.placement;return r.a.createElement(Y.a,Object.assign({},a,{style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),r.a.createElement(Q.a,null,r.a.createElement(z.a,{onClickAway:e.handleClose},r.a.createElement($.a,{autoFocusItem:e.open,id:"menu-list-grow"},e.menuItemContent.map((function(t,a){return r.a.createElement("div",null,e.anchorEl&&t.linkTo?r.a.createElement(h.b,{to:t.linkTo+e.extraLinkAttribute,onClick:t.handleClick,className:"link"},r.a.createElement(Z.a,null,t.text)):r.a.createElement(Z.a,{onClick:t.handleClick},t.text))}))))))}))},te=function(e){return function(t){fetch("".concat("https://chem-logger.herokuapp.com","/api/books"),{headers:{token:e}}).then((function(e){return e.json()})).then((function(e){t({type:"FETCH_BOOKS",value:e})})).catch((function(e){console.log(e)}))}},ae=Object(O.a)((function(){return{root:{"& .MuiPaper-root":{backgroundColor:"#eaeaee",boxShadow:"7px 7px 7px 0px #0d1137"}},labelField:{width:"175px",display:"flex",alignItems:"center",justifyContent:"center",margin:"10px"},label:{display:"inline-block",fontSize:"22px"},icon:{margin:"0 10px",cursor:"pointer"}}})),ne=function(e){var t=ae(),a=Object(n.useRef)(),c=Object(l.b)(),o=Object(l.c)((function(e){return e.books})),i=r.a.useState(null),u=Object(g.a)(i,2),s=u[0],d=u[1],f=r.a.useState(null),p=Object(g.a)(f,2),b=p[0],E=p[1],v=Boolean(s),O=Boolean(b),k=r.a.useState({bookName:"",displayInput:!1}),y=Object(g.a)(k,2),j=y[0],N=y[1],C=r.a.useState([]),w=Object(g.a)(C,2),x=w[0],_=w[1];!function(e,t){var a=function(a){e.current&&!e.current.contains(a.target)&&t(a)};Object(n.useEffect)((function(){return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}}))}(a,(function(e){j.displayInput&&(""===j.bookName||" "===j.bookName?N({bookName:"",displayInput:!1}):D(e))}));var I=function(e){E(e.currentTarget)},T=function(){E(null)},D=function(t){t.preventDefault();var a={bookName:j.bookName};c(function(e,t){return function(a){fetch("".concat("https://chem-logger.herokuapp.com","/api/books/create"),{method:"POST",headers:{"Content-Type":"application/json",token:t},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){a({type:"ADD_BOOK",value:e})})).catch((function(e){console.log(e)}))}}(a,e.userToken))},L=function(t){c(function(e,t){return function(a){fetch("".concat("https://chem-logger.herokuapp.com","/api/books/delete/").concat(e),{method:"DELETE",headers:{token:t}}).then((function(e){return e.json()})).then((function(e){"Book has logs"===e.message&&alert("You can't delete a book that contains logs!"),a(te(t))})).catch((function(e){console.log("err:",e)}))}}(t,e.userToken)),T()};return Object(n.useEffect)((function(){!function(){var e=o.sort((function(e,t){return t.id-e.id}));_(e)}(),N({bookName:"",displayInput:!1})}),[o]),r.a.createElement(M.a,{className:t.root,variant:"permanent",anchor:"left"},r.a.createElement(H.a,{theme:V},r.a.createElement(h.b,{to:"/",className:"link"},r.a.createElement(q.a,null,r.a.createElement(J.a,{icon:U.a,className:"left-nav-icon"}),r.a.createElement(A.a,{primary:"Home"}))),r.a.createElement(q.a,{onClick:function(e){d(e.currentTarget)}},r.a.createElement(J.a,{icon:U.b,className:"left-nav-icon"}),r.a.createElement(A.a,{primary:e.user.firstName&&e.user.lastName?e.user.firstName+" "+e.user.lastName:e.user.email,style:{cursor:"pointer"}})),r.a.createElement(ee,{open:v,handleClose:function(){d(null)},anchorEl:s,menuItemContent:[{text:"Sign Out",linkTo:"",handleClick:function(){return localStorage.removeItem("user"),void c({type:"END_SESSION"})}}],extraLinkAttribute:""})),r.a.createElement(P.a,null),r.a.createElement("div",{className:t.labelField},r.a.createElement(S.a,{className:t.label},"Books"),r.a.createElement(G.a,{className:t.icon,onClick:function(){N(Object(m.a)(Object(m.a)({},j),{},{displayInput:!j.displayInput}))}})),j.displayInput&&r.a.createElement("form",{ref:a,onSubmit:D},r.a.createElement("input",{autoFocus:"autofocus",className:"left-nav-input",onChange:function(e){N(Object(m.a)(Object(m.a)({},j),{},{bookName:e.target.value}))}})),r.a.createElement(W.a,null,x.map((function(e){return r.a.createElement(q.a,{button:!0,key:e.id,onClick:I,bookid:e.id},r.a.createElement(R.a,null),r.a.createElement(A.a,{primary:e.book}))}))),r.a.createElement(ee,{open:O,handleClose:T,anchorEl:b,menuItemContent:[{text:"New Entry",linkTo:"/new-entry/",handleClick:function(){return T()}},{text:"View All",linkTo:"/view-all/",handleClick:function(){return T()}},{text:"Delete Book",handleClick:function(){return L(b.getAttribute("bookid"))}}],extraLinkAttribute:b?b.getAttribute("bookid"):""}))},re=function(e){return function(t){fetch("".concat("https://chem-logger.herokuapp.com","/api/logs"),{headers:{token:e}}).then((function(e){return e.json()})).then((function(e){var a={type:"FETCH_LOGS",value:e.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{rxn_sketch:JSON.parse(e.rxn_sketch)})}))};t(a)})).catch((function(e){console.log(e)}))}},ce=a(162),oe=a(163),le=a(164),ie=Object(O.a)((function(){return{card:{boxShadow:"2px 2px 7px 0px #0d1137"}}})),ue=function(e){var t=ie();return Object(n.useEffect)((function(){if(e.rxnSketch.fileData){var t=new ChemDoodle.ViewerCanvas("myCanvas-".concat(e.index),"200","100");if("rxn"===e.rxnSketch.fileType){var a=ChemDoodle.readRXN(e.rxnSketch.fileData);t.loadContent(a.molecules,a.shapes)}if("mol"===e.rxnSketch.fileType){var n=ChemDoodle.readMOL(e.rxnSketch.fileData);t.loadMolecule(n)}}}),[e]),r.a.createElement(ce.a,{className:t.card},r.a.createElement(oe.a,{title:e.bookName+" - Entry "+e.bookEntryNumber,titleTypographyProps:{variant:"h6"},subheader:function(){var t=parseInt(e.lastUpdated);return new Date(t).toDateString()}()}),r.a.createElement("div",{className:"entry-card-canvas-div"},e.rxnSketch.fileData?r.a.createElement("canvas",{id:"myCanvas-".concat(e.index)}):r.a.createElement("div",{className:"entry-card-no-canvas"},r.a.createElement(S.a,null,"No Reaction Scheme"))),r.a.createElement(le.a,null,r.a.createElement(S.a,{variant:"body2",color:"textSecondary",component:"p"},e.quickInfo)))},se=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.logs})),a=Object(l.c)((function(e){return e.user})),c=a.token,o=r.a.useState([]),i=Object(g.a)(o,2),u=i[0],s=i[1];return Object(n.useEffect)((function(){e(re(c)),e(te(c))}),[]),Object(n.useEffect)((function(){!function(){var e,a=[];e=t.sort((function(e,t){return t.last_updated-e.last_updated}));for(var n=0;n<10;n++)e[n]?a.push(e[n]):s(a);s(a)}()}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{userToken:c,user:a}),r.a.createElement("div",{id:"home-container"},r.a.createElement("h1",{className:"headline-text"},a.firstName?"Welcome ".concat(a.firstName,"!"):"Welcome!"),r.a.createElement("div",{id:"home-recent-logs"},r.a.createElement("h3",null,"Recent Logs:"),r.a.createElement("div",null,0===u.length?"No Entries":r.a.createElement("div",{className:"entry-card-container-div"},u.map((function(e,t){return r.a.createElement("div",{className:"entry-card-div"},r.a.createElement(h.b,{to:"/view-entry/".concat(e.id),className:"link"},r.a.createElement(ue,{key:t,index:t,bookName:e.book,rxnSketch:e.rxn_sketch,quickInfo:e.quick_info,lastUpdated:e.last_updated,bookEntryNumber:e.book_entry_number})))})))))))},me=a(149),de=a(169),fe=a(148),pe=a(152),he=a(85),be=a.n(he);function Ee(e){var t=e.inputRef,a=Object(b.a)(e,["inputRef"]);return r.a.createElement(be.a,Object.assign({},a,{ref:function(e){return t(e?e.inputElement:null)},mask:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/],placeholderChar:"\u2000",keepCharPositions:!0,showMask:!0}))}var ve=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"add-procedure-date-container"},r.a.createElement(me.a,null,r.a.createElement(de.a,{htmlFor:"formatted-text-mask-input"},"Date"),r.a.createElement(fe.a,{onChange:function(t){e.handleProcedureChange(t,e.index)},name:"date",id:"formatted-text-mask-input",inputComponent:Ee}),r.a.createElement(pe.a,null,"mm/dd/yy"))),r.a.createElement("div",{id:"add-procedure-entry-container"},r.a.createElement(N.a,{id:"outlined-multiline-static",label:"Procedure",name:"entry",value:e.procedures.entry,onChange:function(t){e.handleProcedureChange(t,e.index)},multiline:!0,variant:"outlined",rows:4,fullWidth:!0})))},ge=Object(O.a)({formField:{backgroundColor:"white",display:"flex",flexDirection:"column",height:"100%",padding:"20px",marginLeft:"220px",alignItems:"center"},button:{width:"30%",margin:"10px"}}),Oe=function(e){var t=ge(),a=Object(l.c)((function(e){return e.user})),c=a.token,o=Object(l.c)((function(e){return e.logs})),i=Object(l.b)(),u=Object(E.g)(),d=r.a.useState(null),f=Object(g.a)(d,2),p=f[0],h=f[1],b=r.a.useState({bookId:e.match.params.id,bookEntryNumber:1,rxnSketch:{fileData:null,fileType:null},quickInfo:"",results:"",yield:"",lastUpdated:"",logId:0}),O=Object(g.a)(b,2),k=O[0],y=O[1],j=r.a.useState([{date:"",entry:""}]),S=Object(g.a)(j,2),w=S[0],x=S[1];Object(n.useEffect)((function(){i(te(c)),i(re(c));var e=new ChemDoodle.SketcherCanvas("canvas-id","850","350",{useServices:!1,oneMolecule:!1,isMobile:!1});h(e)}),[]),Object(n.useEffect)((function(){_()}),[o]);var _=function(){for(var t=[],a=0;a<o.length;a++)o[a].book_id==e.match.params.id&&t.push(o[a]);if(0!==t.length){t.sort((function(e,t){return t.book_entry_number-e.book_entry_number}));var n=Object(m.a)({},k),r=t[0].book_entry_number+1;n.bookEntryNumber=r,y(n)}},I=function(e){y(Object(m.a)(Object(m.a)({},k),{},Object(v.a)({},e.target.name,e.target.value)))},T=function(e,t){var a=w.slice(),n=e.target.name;a[t][n]=e.target.value,x(a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{userToken:c,user:a}),r.a.createElement("form",{className:t.formField,onSubmit:function(e){e.preventDefault(),function(){var e=k,t=Date.now();e.lastUpdated=t,y({newEntryObject:e})}(),function(){var e=k,t=p.molecules,a=p.shapes;if(a.length){var n=ChemDoodle.writeRXN(t,a);e.rxnSketch.fileData=n,e.rxnSketch.fileType="rxn",y({newEntryObject:e})}else if(t.length){var r=p.getMolecule(),c=ChemDoodle.writeMOL(r);e.rxnSketch.fileData=c,e.rxnSketch.fileType="mol",y({newEntryObject:e})}}();var t=Object(m.a)(Object(m.a)({},k),{},{procedures:w});i(function(e,t){return function(a){fetch("".concat("https://chem-logger.herokuapp.com","/api/logs/create"),{method:"POST",headers:{"Content-Type":"application/json",token:t},body:JSON.stringify(e)}).then((function(e){})).then((function(e){})).catch((function(e){console.log("issues",e)}))}}(t,c)),alert("Entry added!"),u.push("/")}},r.a.createElement("div",null,r.a.createElement(N.a,{label:"Quick Info (<10 words)",name:"quickInfo",value:k.quickInfo,onChange:I,fullWidth:!0}),r.a.createElement("div",{id:"container-canvas"},r.a.createElement("canvas",{id:"canvas-id"})),r.a.createElement("label",{className:"body-text"},"Procedure:"),r.a.createElement("br",null),w.map((function(e,t){return r.a.createElement(ve,{key:t,index:t,handleProcedureChange:T,procedures:w})}))),r.a.createElement(C.a,{variant:"contained",onClick:function(){x([].concat(Object(s.a)(w),[{date:"",entry:""}]))},className:t.button},"Add a new Day"),r.a.createElement("div",{className:"new-entry-text-container"},r.a.createElement(N.a,{id:"standard-basic",label:"Results",name:"results",value:k.results,onChange:I,fullWidth:!0})),r.a.createElement("div",{className:"new-entry-text-container"},r.a.createElement(N.a,{id:"standard-basic",label:"Yield (%)",name:"yield",value:k.yield,onChange:I,fullWidth:!0})),r.a.createElement(C.a,{type:"submit",variant:"contained",className:t.button},"Save"),r.a.createElement("div",{id:"new-entry-number-container"},r.a.createElement("h3",null,"Entry ",k.bookEntryNumber))))},ke=function(e){var t=Object(E.g)(),a=Object(l.b)(),c=e.match.params.id,o=Object(l.c)((function(e){return e.user})),i=o.token,u=r.a.useState(null),d=Object(g.a)(u,2),f=d[0],p=d[1],h=Object(l.c)((function(e){return e.selectedLog.log})),b=(Object(l.c)((function(e){return e.selectedLog.isLoading})),r.a.useState(Object(m.a)({},h))),O=Object(g.a)(b,2),k=O[0],y=O[1],j=r.a.useState({changesMade:!1,quickInfoShowInput:!1,procedureShowInput:!1,resultsShowInput:!1,yieldShowInput:!1,procedures:[]}),S=Object(g.a)(j,2),N=S[0],w=S[1];Object(n.useEffect)((function(){a(function(e,t){return function(a){a({type:"FETCHING_SELECTED_LOG"}),fetch("".concat("https://chem-logger.herokuapp.com","/api/logs/").concat(e),{headers:{token:t}}).then((function(e){return e.json()})).then((function(e){var t={type:"SUCCESS_FETCH_SELECTED_LOG",value:Object(m.a)(Object(m.a)({},e),{},{rxn_sketch:JSON.parse(e.rxn_sketch)})};a(t)})).catch((function(e){console.log("issues: ",e)}))}}(c,i)),a(te(i))}),[]),Object(n.useEffect)((function(){var e,t,a;if(w(Object(m.a)(Object(m.a)({},N),{},{procedures:null===h||void 0===h||null===(e=h.procedures)||void 0===e?void 0:e.map((function(){return{dateShowInput:!1,entryShowInput:!1}}))})),y(Object(m.a)({},h)),f){if("rxn"===(null===h||void 0===h||null===(t=h.rxn_sketch)||void 0===t?void 0:t.fileType)){var n=ChemDoodle.readRXN(h.rxn_sketch.fileData);f.loadContent(n.molecules,n.shapes)}if("mol"===(null===h||void 0===h||null===(a=h.rxn_sketch)||void 0===a?void 0:a.fileType)){var r=ChemDoodle.readMOL(h.rxn_sketch.fileData);f.loadMolecule(r)}}else{var c=new ChemDoodle.SketcherCanvas("canvas-id","600","350",{useServices:!1,oneMolecule:!1,isMobile:!1});p(c)}}),[h]);var x=function(e){y(Object(m.a)(Object(m.a)({},k),{},Object(v.a)({},e.target.name,e.target.value)))},_=function(e,t){y(Object(m.a)(Object(m.a)({},k),{},{procedures:[].concat(Object(s.a)(k.procedures.slice(0,t)),[Object(m.a)(Object(m.a)({},k.procedures[t]),{},Object(v.a)({},e.target.name,e.target.value))],Object(s.a)(k.procedures.slice(t+1)))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{userToken:i,user:o}),r.a.createElement("div",{id:"view-entry-paper"},r.a.createElement("div",{id:"view-entry-pattern"},r.a.createElement("div",{id:"view-entry-content"},r.a.createElement("h1",null,h.book,": Entry ",h.book_entry_number," "),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){var e=k,t=Date.now();e.last_updated=t.toString(),y(e)}(),function(){var e=k,t=f.molecules,a=f.shapes;if(a.length){var n=ChemDoodle.writeRXN(t,a);e.rxn_sketch.fileData=n,e.rxn_sketch.fileType="rxn",y(e)}else if(t.length){var r=f.getMolecule(),c=ChemDoodle.writeMOL(r);e.rxn_sketch.fileData=c,e.rxn_sketch.fileType="mol",y(e)}}();var n=Object(m.a)({},k);a(function(e,t,a){return function(n){fetch("".concat("https://chem-logger.herokuapp.com","/api/logs/update/").concat(e),{method:"PUT",headers:{"Content-Type":"application/json",token:a},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){alert("Log Updated!")})).catch((function(e){console.log("issues: ",e)}))}}(c,n,i)),t.push("/")}},r.a.createElement("div",{onClick:function(){w(Object(m.a)(Object(m.a)({},N),{},{quickInfoShowInput:!0,changesMade:!0}))}},r.a.createElement("h2",{className:"view-entry-text"},"Quick Info: "),N.quickInfoShowInput?r.a.createElement("input",{value:k.quick_info,name:"quick_info",onChange:function(e){return x(e)}}):r.a.createElement("h2",{className:"view-entry-text"},h.quick_info," ")),r.a.createElement("canvas",{id:"canvas-id",onMouseDown:function(){return function(){var e=Object(m.a)(Object(m.a)({},N),{},{changesMade:!0});w(e)}()}}),r.a.createElement("br",null),r.a.createElement("h2",{className:"view-entry-text"},"Procedure: "),k.procedures.map((function(e,t){return r.a.createElement("div",{className:"view-entry-procedure-div"},N.procedures[t]&&N.procedures[t].dateShowInput?r.a.createElement("input",{value:e.date,name:"date",onChange:function(e){return _(e,t)}}):r.a.createElement("h2",{className:"view-entry-procedure-date",onClick:function(){w(Object(m.a)(Object(m.a)({},N),{},{changesMade:!0,procedures:[].concat(Object(s.a)(N.procedures.slice(0,t)),[Object(m.a)(Object(m.a)({},N.procedures[t]),{},{dateShowInput:!0})],Object(s.a)(N.procedures.slice(t+1)))}))}},e.date),N.procedures[t]&&N.procedures[t].entryShowInput?r.a.createElement("input",{value:e.entry,name:"entry",onChange:function(e){return _(e,t)}}):r.a.createElement("h2",{className:"view-entry-procedure-entry",onClick:function(){w(Object(m.a)(Object(m.a)({},N),{},{changesMade:!0,procedures:[].concat(Object(s.a)(N.procedures.slice(0,t)),[Object(m.a)(Object(m.a)({},N.procedures[t]),{},{entryShowInput:!0})],Object(s.a)(N.procedures.slice(t+1)))}))}},e.entry))})),r.a.createElement("div",{onClick:function(){w(Object(m.a)(Object(m.a)({},N),{},{resultsShowInput:!0,changesMade:!0}))}},r.a.createElement("h2",{className:"view-entry-text"},"Results: "),N.resultsShowInput?r.a.createElement("input",{value:k.results,name:"results",onChange:function(e){return x(e)}}):r.a.createElement("h2",{className:"view-entry-text"},h.results)),r.a.createElement("div",{onClick:function(){w(Object(m.a)(Object(m.a)({},N),{},{yieldShowInput:!0,changesMade:!0}))}},r.a.createElement("h2",{className:"view-entry-text"},"Yield: "),N.yieldShowInput?r.a.createElement("input",{value:k.yield,name:"yield",onChange:function(e){return x(e)}}):r.a.createElement("h2",{className:"view-entry-text"},h.yield)),N.changesMade&&r.a.createElement("div",{id:"view-entry-div-buttons"},r.a.createElement(C.a,{color:"primary",variant:"contained",type:"submit"},"Save Changes"),r.a.createElement(C.a,{color:"secondary",variant:"contained",onClick:function(){window.confirm("Are you sure you want to discard changes?")&&t.push("/")}},"Discard Changes")))))))},ye=function(e){var t=Object(l.b)(),a=Object(l.c)((function(e){return e.user})),c=a.token,o=Object(l.c)((function(e){return e.logs})),i=r.a.useState([]),u=Object(g.a)(i,2),s=u[0],m=u[1],d=Object(l.c)((function(t){return function(t){return t.books.length?t.books.find((function(t){return t.id==e.match.params.id})):null}(t)})),f=function(){for(var t=[],a=0;a<o.length;a++)o[a].book_id==e.match.params.id&&t.push(o[a]);m(t)};return Object(n.useEffect)((function(){f()}),[d]),Object(n.useEffect)((function(){f()}),[o]),Object(n.useEffect)((function(){t(te(c)),t(re(c))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{user:a,userToken:c}),r.a.createElement("div",{className:"view-all-bk-entries"},r.a.createElement("h1",null,d&&d.book),r.a.createElement("div",null,0===s.length?"No Entries Yet!":r.a.createElement("div",{className:"entry-card-container-div"},s.map((function(e,t){return r.a.createElement("div",{className:"entry-card-div"},r.a.createElement(h.b,{to:"/view-entry/".concat(e.id),className:"link"},r.a.createElement(ue,{key:t,index:t,bookName:e.book,rxnSketch:e.rxn_sketch,quickInfo:e.quick_info,lastUpdated:e.last_updated,bookEntryNumber:e.book_entry_number})))}))))))},je=function(e){var t=e.component,a=e.location,n=Object(b.a)(e,["component","location"]),c=Object(l.b)(),o=Object(l.c)((function(e){return e.user}));if(!o){var i=localStorage.getItem("user");if(i)c({type:"CREATE_SESSION",value:JSON.parse(i)})}return r.a.createElement(E.b,Object.assign({},n,{render:function(e){return o.isLoggedIn?r.a.createElement(t,e):r.a.createElement(E.a,{to:{pathname:"/login",state:{from:a}}})}}))},Se=function(){return r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/login",component:T}),r.a.createElement(E.b,{path:"/signup",component:F}),r.a.createElement(je,{exact:!0,path:"/",component:se}),r.a.createElement(je,{path:"/new-entry/:id",component:Oe}),r.a.createElement(je,{path:"/view-entry/:id",component:ke}),r.a.createElement(je,{path:"/view-all/:id",component:ye}))};var Ne=function(){return r.a.createElement(l.a,{store:p},r.a.createElement(h.a,null,r.a.createElement(Se,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(109)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.ca11a83f.chunk.js.map