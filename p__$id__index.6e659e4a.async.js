(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"6S3V":function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("+L6B");var o=a(n("2/Rp"));n("2qtc");var i=a(n("kLXV"));n("miYZ");var l=a(n("tsqr")),r=a(n("lwsE")),u=a(n("W8MJ")),c=a(n("a1gu")),f=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("q1tI")),h=(a(n("17x9")),a(n("dPBl"))),m=n("MuoO"),v=n("4/jj"),p=n("Zyja"),y=a(n("i+bE")),b=a(n("a0/Y")),g=function(e){function t(e){var n;return(0,r.default)(this,t),n=(0,c.default)(this,(0,f.default)(t).call(this,e)),n._onCodeChange=function(e,t){n.setState({code:e});var a=t.contentValidator(e);if(!a)return l.default.warn("\u4e0d\u53ef\u4ee5\u7be1\u6539\u9898\u76ee\u54e6");try{new Function("return ".concat((0,p.removeComments)(e)))();var o=t.contentIntegrityValidator(e);o||l.default.warn("\u4e0d\u53ef\u4ee5\u521b\u5efa\u989d\u5916\u7684\u4ee3\u7801\u54e6")}catch(e){e&&e.name&&"SyntaxError"===e.name?l.default.warn("\u4ee3\u7801\u6709\u8bed\u6cd5\u9519\u8bef\u54e6!"):l.default.warn("\u4f60\u7684\u4ee3\u7801\u91cc\u6709\u4ec0\u4e48\u9519\u8bef\u54e6!")}},n.state={visible:!1,code:""},n}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.hello=i.default.info({title:"\u662f\u65f6\u5019\u8868\u6f14\u771f\u6b63\u7684\u6280\u672f\u4e86",content:d.default.createElement(d.default.Fragment,null,d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("img",{src:b.default,alt:"",style:{width:"265px"}})),okText:"\u597d"})}},{key:"componentWillUnmount",value:function(){this.hello.destroy()}},{key:"render",value:function(){var e=this,t=this.props,n=t.locationPathname,a=t.screenHeight,i=v.routes.find(function(e){return e.path===n});if(!i)return d.default.createElement(h.default,{to:{pathname:"/exam1"}});var l=i.content,r=i.testCase,u=a-64-10;return d.default.createElement("div",{className:y.default.content,style:{height:"".concat(u,"px")},ref:this.container},d.default.createElement(o.default,{shape:"circle",icon:"eye",className:y.default.verifyBtn,onClick:function(){return e.setState({visible:!0})}}),d.default.createElement(l,{value:this.state.code,onChange:function(t){return e._onCodeChange(t,i)}}),d.default.createElement(r,{visible:this.state.visible,onClose:function(){return e.setState({visible:!1})},code:this.state.code,inputFuncName:i.inputFuncName,height:u}))}}]),t}(d.default.Component),w=(0,m.connect)(function(e){var t=e.app;return{locationPathname:t.locationPathname,locationQuery:t.locationQuery,screenHeight:t.screenHeight}})(g);t.default=w},"a0/Y":function(e,t,n){e.exports=n.p+"static/fight.fb0434d6.gif"},"i+bE":function(e,t,n){e.exports={content:"content___3dwyH",verifyBtn:"verifyBtn___2oot-"}}}]);