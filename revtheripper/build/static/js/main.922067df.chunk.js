(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),c=a.n(i),o=(a(77),a(59)),l=a(60),s=a(70),u=a(61),m=a(71),p=a(39),g=a(6),h=a.n(g),d=a(64),E=a.n(d),f=a(65),v=a.n(f),b=a(66),w=a.n(b),y=a(29),S=a.n(y),k=a(67),B=a.n(k),N=a(68),F=a.n(N),C=a(69),j=a.n(C),x=a(22),O=a.n(x),T=a(9),_=a.n(T),q=a(10),A=a.n(q);var J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{variant:"h6",gutterBottom:!0},"Choose video"),r.a.createElement(A.a,{container:!0,spacing:24},r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement("input",{accept:"image/*",style:{display:"none"},id:"button-file",multiple:!0,type:"file"}),r.a.createElement("label",{htmlFor:"button-file"},r.a.createElement(O.a,{variant:"contained",component:"span"},"Upload")))))},R=a(63),G=a.n(R);var I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{variant:"h6",gutterBottom:!0}),r.a.createElement(A.a,{container:!0,spacing:24},r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(G.a,null))))};var M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{variant:"h6",gutterBottom:!0},"Finished!"),r.a.createElement(A.a,{container:!0,spacing:24},r.a.createElement(A.a,{item:!0,xs:12})))},W=["Choose video file","Transcribe","Finish"];var D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={activeStep:0},a.handleNext=function(){a.setState(function(e){return{activeStep:e.activeStep+1}})},a.handleBack=function(){a.setState(function(e){return{activeStep:e.activeStep-1}})},a.handleReset=function(){a.setState({activeStep:0})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){fetch("https://api.rev.ai/revspeech/v1beta/jobs",{method:"POST",body:JSON.stringify({media_url:"https://support.rev.com/hc/en-us/article_attachments/200043975/FTC_Sample_1_-_Single.mp3",metadata:"This is a sample submit jobs option"}),headers:{"Content-Type":"multipart/form-data",Authorization:"01cGemVQHqb9wpf1Hq1KP_UDFGbp4MkET0e7uGBqtJ49BoENA-1QWQ4eGggqwI88MPgqoNdbCI-q5iDN5CJ2AiM-o4yI0","Access-Control-Allow-Origin":"*"}}).then(function(e){return e.json()}).then(function(e){return console.log("Success:",JSON.stringify(e))}).catch(function(e){return console.error("Error:",e)})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.activeStep;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null),r.a.createElement(v.a,{position:"absolute",color:"default",className:e.appBar},r.a.createElement(w.a,null,r.a.createElement(_.a,{variant:"h6",color:"inherit",noWrap:!0},"Rev The Ripper"))),r.a.createElement("main",{className:e.layout},r.a.createElement(S.a,{className:e.paper},r.a.createElement(_.a,{component:"h1",variant:"h4",align:"center"},"Create Transcribed Blog"),r.a.createElement(B.a,{activeStep:t,className:e.stepper},W.map(function(e){return r.a.createElement(F.a,{key:e},r.a.createElement(j.a,null,e))})),r.a.createElement(r.a.Fragment,null,t===W.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,function(e){switch(e){case 0:return r.a.createElement(J,null);case 1:return r.a.createElement(I,null);case 2:return r.a.createElement(M,null);default:throw new Error("Unknown step")}}(t),r.a.createElement("div",{className:e.buttons},0!==t&&r.a.createElement(O.a,{onClick:this.handleBack,className:e.button},"Back"),r.a.createElement(O.a,{variant:"contained",color:"primary",onClick:this.handleNext,className:e.button},t===W.length-1?"Finish":"Next")))))))}}]),t}(r.a.Component),L=h()(function(e){return{appBar:{position:"relative"},layout:Object(p.a)({width:"auto",marginLeft:2*e.spacing.unit,marginRight:2*e.spacing.unit},e.breakpoints.up(600+2*e.spacing.unit*2),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(p.a)({marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit,padding:2*e.spacing.unit},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:6*e.spacing.unit,marginBottom:6*e.spacing.unit,padding:3*e.spacing.unit}),stepper:{padding:"".concat(3*e.spacing.unit,"px 0 ").concat(5*e.spacing.unit,"px")},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:3*e.spacing.unit,marginLeft:e.spacing.unit}}})(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,a){e.exports=a(182)},77:function(e,t,a){}},[[72,2,1]]]);
//# sourceMappingURL=main.922067df.chunk.js.map