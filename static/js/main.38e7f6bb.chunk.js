(this.webpackJsonpcovidualizer=this.webpackJsonpcovidualizer||[]).push([[0],{143:function(e,t,a){e.exports={container:"Chart_container__3tAJa",bottom:"Chart_bottom__t49Ib"}},144:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__1uzIL"}},147:function(e,t,a){e.exports=a.p+"static/media/covidualizer.5006a434.png"},158:function(e,t,a){e.exports=a(307)},307:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),s=a(13),i=a.n(s),u=a(16),l=a(135),d=a(136),m=a(149),p=a(148),f=a(137),h=a(340),v=a(341),b=a(342),g=a(70),E=a.n(g),C=a(71),y=a.n(C),x=a(107),O=a(72),j=a.n(O),w=a(73),k=a.n(w),S=a(141),D=a(142),N=Object(x.a)((function(e){var t=e.breakpoints;return{root:Object(f.a)({},t.up("md"),{justifyContent:"center"})}})),_=Object(x.a)((function(){return{root:{maxWidth:343,maxHeight:350,borderRadius:20,margin:50},content:{padding:24}}})),I=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate,s=N(),i=Object(S.useN03TextInfoContentStyles)(),u=Object(D.useLightTopShadowStyles)(),l=_();return console.log(a),a?r.a.createElement("div",{className:i.container},r.a.createElement(h.a,{classes:s,container:!0,spacing:4},r.a.createElement(h.a,{item:!0,component:v.a,xs:12,md:3,className:y()(l.root,u.root)},r.a.createElement(j.a,{image:"https://img.favpng.com/1/12/3/computer-icons-png-favpng-7SbJJ8GfuwRk8C3kFBUqYbbte.jpg",extra:new Date(o).toDateString()}),r.a.createElement(b.a,{className:l.content},r.a.createElement(k.a,{classes:i,overline:"CONFIRMED CASES",heading:r.a.createElement(E.a,{start:0,end:a.value,duration:2.5,separator:","}),body:"Number of confirmed active cases of COVID-19."}))),r.a.createElement(h.a,{item:!0,component:v.a,xs:12,md:3,className:y()(l.root,u.root)},r.a.createElement(j.a,{image:"https://www.vippng.com/png/detail/452-4525287_health-benefits-clipart-health-icon-green-png.png",extra:new Date(o).toDateString()}),r.a.createElement(b.a,{className:l.content},r.a.createElement(k.a,{classes:i,overline:"RECOVERIES",heading:r.a.createElement(E.a,{start:0,end:n.value,duration:2.5,separator:","}),body:"Number of confirmed recoveries from COVID-19."}))),r.a.createElement(h.a,{item:!0,component:v.a,xs:12,md:3,className:y()(l.root,u.root)},r.a.createElement(j.a,{image:"https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/death1-circle-red-512.png",extra:new Date(o).toDateString()}),r.a.createElement(b.a,{className:l.content},r.a.createElement(k.a,{classes:i,overline:"DEATHS",heading:r.a.createElement(E.a,{start:0,end:c.value,duration:2.5,separator:","}),body:"Number of confirmed confirmed deaths from COVID-19."}))))):"Loading..."},A=a(69),R=a(74),L=a.n(R),J="https://covid19.mathdro.id/api",U=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,o,s,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=J,t&&(a="".concat(J,"/countries/").concat(t)),e.prev=2,e.next=5,L.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,u=r.lastUpdate,l={confirmed:c,recovered:o,deaths:s,lastUpdate:u},e.abrupt("return",l);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("".concat(J,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("".concat(J,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(91),F=a(143),P=a.n(F),T=function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,s=e.country,l=Object(n.useState)([]),d=Object(A.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.length?r.a.createElement(B.Line,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Confirmed",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;console.log(a,o,c);var h=a?r.a.createElement(B.Bar,{data:{labels:["Confirmed","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"".concat(s," Statistics:")}}}):null;return r.a.createElement("div",{className:P.a.container},s?h:f)},H=a(346),M=a(345),Y=a(344),q=a(144),G=a.n(q),W=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(A.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,z();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),console.log(o),r.a.createElement(H.a,{className:G.a.formControl},r.a.createElement(M.a,{onChange:function(e,a){t(a)},options:o,renderInput:function(e){return r.a.createElement(Y.a,Object.assign({},e,{label:"Select a Country",variant:"outlined"}))}}))},X=a(92),Z=a.n(X),K=a(147),Q=a.n(K),$=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:Z.a.container},r.a.createElement("img",{className:Z.a.image,src:Q.a,alt:"COVIDUALIZER"}),r.a.createElement(I,{data:t}),r.a.createElement(W,{handleCountryChange:this.handleCountryChange}),r.a.createElement(T,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement($,null),document.getElementById("root"))},92:function(e,t,a){e.exports={container:"App_container__uXFbj",image:"App_image__YPejL"}}},[[158,1,2]]]);
//# sourceMappingURL=main.38e7f6bb.chunk.js.map