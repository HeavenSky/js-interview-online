(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"4/jj":function(t,e,n){"use strict";var a=n("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.routes=void 0;var r=a(n("ArOo")),u=a(n("R2yv")),i=n("Zyja"),o=[{path:"/exam1",title:"\u5982\u4f55\u5224\u65ad\u4e00\u4e2a\u53d8\u91cf\u662f\u5426\u5b57\u7b26\u4e32",content:(0,r.default)(function(){return n.e(11).then(n.t.bind(null,"W7eL",7))}),contentValidator:function(t){return/function\s*isString\(value\)\s*{[\s\S]*}/.test(t)},contentIntegrityValidator:function(t){var e=(0,i.removeComments)(t);return/^function\s*isString\(value\)\s*{[\s\S]*}$/.test(e)},testCase:(0,u.default)(function(){return n.e(1).then(n.t.bind(null,"Oc/v",7))})},{path:"/exam2",title:"\u5b8c\u6210\u4e00\u4e2a\u7b80\u5355\u7684\u4f7f\u67ef\u91cc\u5316(currying)\u51fd\u6570",content:(0,r.default)(function(){return n.e(13).then(n.t.bind(null,"+Nqb",7))}),contentValidator:function(t){return/function\s*currying\(func\)\s*{[\s\S]*}/.test(t)},contentIntegrityValidator:function(t){var e=(0,i.removeComments)(t);return/^function\s*currying\(func\)\s*{[\s\S]*}$/.test(e)},testCase:(0,u.default)(function(){return n.e(3).then(n.t.bind(null,"JbA1",7))})},{path:"/exam3",title:"\u5b8c\u6210\u4e00\u4e2aduplicate(\u91cd\u590d)\u51fd\u6570",content:(0,r.default)(function(){return n.e(14).then(n.t.bind(null,"jzRn",7))}),contentValidator:function(t){return/function\s*duplicate\(array\)\s*{[\s\S]*}/.test(t)},contentIntegrityValidator:function(t){var e=(0,i.removeComments)(t);return/^function\s*duplicate\(array\)\s*{[\s\S]*}$/.test(e)},testCase:(0,u.default)(function(){return n.e(4).then(n.t.bind(null,"1QHO",7))})},{path:"/exam4",title:"\u5b8c\u6210\u4e00\u4e2amap(\u53d8\u578b)\u51fd\u6570",content:(0,r.default)(function(){return n.e(15).then(n.t.bind(null,"6GZD",7))}),contentValidator:function(t){return/function\s*map\(arr,\s*func,\s*ctx\)\s*{[\s\S]*}/.test(t)},contentIntegrityValidator:function(t){var e=(0,i.removeComments)(t);return/^function\s*map\(arr,\s*func,\s*ctx\)\s*{[\s\S]*}$/.test(e)},testCase:(0,u.default)(function(){return n.e(5).then(n.t.bind(null,"cQ88",7))})},{path:"/exam5",title:"\u5b8c\u6210\u4e00\u4e2avalue(\u53d6\u503c)\u51fd\u6570",content:(0,r.default)(function(){return n.e(16).then(n.t.bind(null,"f5pO",7))}),contentValidator:function(t){return/function\s*value\(anything\)\s*{[\s\S]*}/.test(t)},contentIntegrityValidator:function(t){var e=(0,i.removeComments)(t);return/^function\s*value\(anything\)\s*{[\s\S]*}$/.test(e)},testCase:(0,u.default)(function(){return n.e(6).then(n.t.bind(null,"+aMu",7))})},{path:"/exam6",title:"\u5b8c\u6210\u4e00\u4e2acamelcase(\u9a7c\u5cf0\u5316)\u51fd\u6570",content:(0,r.default)(function(){return n.e(17).then(n.t.bind(null,"P2H9",7))}),contentValidator:function(t){return/function\s*camelcase\(str\)\s*{[\s\S]*}/.test(t)},contentIntegrityValidator:function(t){var e=(0,i.removeComments)(t);return/^function\s*camelcase\(str\)\s*{[\s\S]*}$/.test(e)},testCase:(0,u.default)(function(){return n.e(7).then(n.t.bind(null,"XiN7",7))})},{path:"/exam7",title:"\u5b8c\u6210\u4e00\u4e2athunkify(\u5f62\u5f0f\u8f6c\u6362)\u51fd\u6570",content:(0,r.default)(function(){return n.e(18).then(n.t.bind(null,"1H4B",7))}),contentValidator:function(t){return/function\s*thunkify\(func\)\s*{[\s\S]*}/.test(t)},contentIntegrityValidator:function(t){var e=(0,i.removeComments)(t);return/^function\s*thunkify\(func\)\s*{[\s\S]*}$/.test(e)},testCase:(0,u.default)(function(){return n.e(8).then(n.t.bind(null,"rR19",7))})},{path:"/exam8",title:"\u5b8c\u6210\u4e00\u4e2atimes(\u591a\u6b21\u751f\u6210)\u51fd\u6570",content:(0,r.default)(function(){return n.e(19).then(n.t.bind(null,"S+nk",7))}),contentValidator:function(t){return/function\s*times\(n,\s*func\)\s*{[\s\S]*}/.test(t)},contentIntegrityValidator:function(t){var e=(0,i.removeComments)(t);return/^function\s*times\(n,\s*func\)\s*{[\s\S]*}$/.test(e)},testCase:(0,u.default)(function(){return n.e(9).then(n.t.bind(null,"PMAl",7))})},{path:"/exam9",title:"\u5b8c\u6210\u4e00\u4e2aDI(\u4f9d\u8d56\u6ce8\u5165)\u7c7b",content:(0,r.default)(function(){return n.e(20).then(n.t.bind(null,"P0II",7))}),inputFuncName:"DI",contentValidator:function(t){return/class\s*DI\s*{[\s\S]*register\(name,\s*instance\)\s*{[\s\S]*}[\s\S]*run\(arr\)\s*{[\s\S]*}[\s\S]*}/.test(t)},contentIntegrityValidator:function(t){var e=(0,i.removeComments)(t);return/^class\s*DI\s*{[\s\S]*register\(name,\s*instance\)\s*{[\s\S]*}[\s\S]*run\(arr\)\s*{[\s\S]*}[\s\S]*}$/.test(e)},testCase:(0,u.default)(function(){return n.e(10).then(n.t.bind(null,"mA18",7))})},{path:"/exam10",title:"\u5b8c\u6210\u4e00\u4e2adifference(\u627e\u4e0d\u540c)\u51fd\u6570",content:(0,r.default)(function(){return n.e(12).then(n.t.bind(null,"jdP8",7))}),contentValidator:function(t){return/function\s*difference\(src,\s*target\)\s*{[\s\S]*}/.test(t)},contentIntegrityValidator:function(t){var e=(0,i.removeComments)(t);return/^function\s*difference\(src,\s*target\)\s*{[\s\S]*}$/.test(e)},testCase:(0,u.default)(function(){return n.e(2).then(n.t.bind(null,"i5jc",7))})}];e.routes=o},"6S3V":function(t,e,n){"use strict";var a=n("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("+L6B");var r=a(n("2/Rp"));n("2qtc");var u=a(n("kLXV"));n("miYZ");var i=a(n("tsqr")),o=a(n("2Taf")),s=a(n("vZ4D")),c=a(n("l4Ni")),l=a(n("ujKo")),f=a(n("MhPg")),d=a(n("q1tI")),m=(a(n("17x9")),a(n("dPBl"))),h=n("MuoO"),v=n("4/jj"),g=n("Zyja"),p=a(n("i+bE")),y=a(n("a0/Y")),C=function(t){function e(t){var n;return(0,o.default)(this,e),n=(0,c.default)(this,(0,l.default)(e).call(this,t)),n._onCodeChange=function(t,e){n.setState({code:t});var a=e.contentValidator(t);if(!a)return i.default.warn("\u4e0d\u53ef\u4ee5\u7be1\u6539\u9898\u76ee\u54e6");try{new Function("return ".concat((0,g.removeComments)(t)))();var r=e.contentIntegrityValidator(t);r||i.default.warn("\u4e0d\u53ef\u4ee5\u521b\u5efa\u989d\u5916\u7684\u4ee3\u7801\u54e6")}catch(t){t&&t.name&&"SyntaxError"===t.name?i.default.warn("\u4ee3\u7801\u6709\u8bed\u6cd5\u9519\u8bef\u54e6!"):i.default.warn("\u4f60\u7684\u4ee3\u7801\u91cc\u6709\u4ec0\u4e48\u9519\u8bef\u54e6!")}},n.state={visible:!1,code:""},n}return(0,f.default)(e,t),(0,s.default)(e,[{key:"componentDidMount",value:function(){this.hello=u.default.info({title:"\u662f\u65f6\u5019\u8868\u6f14\u771f\u6b63\u7684\u6280\u672f\u4e86",content:d.default.createElement(d.default.Fragment,null,d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("img",{src:y.default,alt:"",style:{width:"265px"}})),okText:"\u597d"})}},{key:"componentWillUnmount",value:function(){this.hello.destroy()}},{key:"render",value:function(){var t=this,e=this.props,n=e.locationPathname,a=e.screenHeight,u=v.routes.find(function(t){return t.path===n});if(!u)return d.default.createElement(m.default,{to:{pathname:"/exam1"}});var i=u.content,o=u.testCase,s=a-64-10;return d.default.createElement("div",{className:p.default.content,style:{height:"".concat(s,"px")},ref:this.container},d.default.createElement(r.default,{shape:"circle",icon:"eye",className:p.default.verifyBtn,onClick:function(){return t.setState({visible:!0})}}),d.default.createElement(i,{value:this.state.code,onChange:function(e){return t._onCodeChange(e,u)}}),d.default.createElement(o,{visible:this.state.visible,onClose:function(){return t.setState({visible:!1})},code:this.state.code,inputFuncName:u.inputFuncName,height:s}))}}]),e}(d.default.Component),S=(0,h.connect)(function(t){var e=t.app;return{locationPathname:e.locationPathname,locationQuery:e.locationQuery,screenHeight:e.screenHeight}})(C);e.default=S},ArOo:function(t,e,n){"use strict";var a=n("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("2Taf")),u=a(n("vZ4D")),i=a(n("l4Ni")),o=a(n("ujKo")),s=a(n("MhPg")),c=a(n("q1tI")),l=(a(n("17x9")),a(n("xKz9")));n("Bhyg");var f=a(n("lc5D")),d=n("Zyja");function m(t){return(0,l.default)({loader:function(){return t().then(v).then(function(t){var e=function(e){function n(e){var a;(0,r.default)(this,n),a=(0,i.default)(this,(0,o.default)(n).call(this,e)),a.onChange=function(e){var n=a.props.onChange;n(e),sessionStorage.setItem(t,e)};var u=sessionStorage.getItem(t)||t;a.state={code:u};var s=e.onChange;return s(u),a}return(0,s.default)(n,e),(0,u.default)(n,[{key:"render",value:function(){var t=this.state.code;return c.default.createElement(f.default,{width:"100%",height:"100%",mode:"javascript",theme:"tomorrow",fontSize:14,onChange:this.onChange,debounceChangePeriod:800,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:t,setOptions:{showLineNumbers:!0,tabSize:2},editorProps:{$blockScrolling:1/0}})}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.value===e.code?null:{code:t.value}}}]),n}(c.default.Component);return e})}})}n("uzal"),n("4u+9");var h=m;function v(t){return(0,d.decodeBase64)(t.default.slice(23))}e.default=h},R2yv:function(t,e,n){"use strict";var a=n("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("T2oS");var r=a(n("W9HT"));n("Pwec");var u=a(n("CtXQ")),i=a(n("2Taf")),o=a(n("vZ4D")),s=a(n("l4Ni")),c=a(n("ujKo")),l=a(n("rlhR")),f=a(n("MhPg")),d=a(n("q1tI")),m=(a(n("17x9")),a(n("xKz9"))),h=a(n("TSYQ")),v=a(n("7rlJ"));n("Bhyg");var g=a(n("lc5D"));n("uzal"),n("4u+9");var p=n("Zyja"),y=a(n("lHbt"));function C(t){return(0,m.default)({loader:function(){return t().then(b).then(function(t){var e=function(e){function n(e){var a;return(0,i.default)(this,n),a=(0,s.default)(this,(0,c.default)(n).call(this,e)),a.changeCaseStatus=function(t,e){a.setState({cases:a.state.cases.map(function(n){return t===n.testcase?{testcase:t,status:e}:n})})},a.exec=function(t){var e=(0,l.default)(a),n=a.props.inputFuncName,r=a.state.cases,u=n||t.toString().match(/function\s*([a-zA-Z_][a-zA-Z_0-1]*).*/)[1];function i(n,a){var r=/done\(/.test(n),i=null;i=r?new Function("assert",u,"done",n):new Function("assert",u,n);var o={testcase:n,status:"executing"};if(e.changeCaseStatus(n,"executing"),!r){try{i(v.default,t),o.status="execSuccess"}catch(t){o.status="execFailed"}return a(o)}var s=setTimeout(function(){return o.status="execFailed",a(o)},5e3);try{i(v.default,t,function(t){return clearTimeout(s),t?(o.status="execFailed",a(o)):(o.status="execSuccess",a(o))})}catch(t){return clearTimeout(s),o.status="execFailed",a(o)}}var o=0;i(r[o].testcase,function t(n){e.changeCaseStatus(n.testcase,n.status),setTimeout(function(){o++;var e=r[o];e&&i(e.testcase,t)},100)})},a.state={cases:t.map(function(t){return{testcase:t,status:"notExecuted"}})},a}return(0,f.default)(n,e),(0,o.default)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.visible,a=e.onClose,i=e.code,o=e.height;if(!n)return null;var s=(0,p.removeComments)(i),c=function(){};try{c=new Function("return ".concat(s))()}catch(t){}return d.default.createElement("div",{className:y.default.container,style:{height:"".concat(o,"px")}},d.default.createElement(u.default,{type:"close",theme:"outlined",className:y.default.closeBtn,onClick:a}),d.default.createElement(u.default,{type:"right",theme:"outlined",className:y.default.runBtn,onClick:function(){return t.exec(c)}}),d.default.createElement("div",{className:y.default.innerContainer,style:{height:"".concat(o-40,"px")}},this.state.cases.map(function(t){var e=t.testcase,n=t.status,a=21*e.split("\n").length;return d.default.createElement("div",{className:(0,h.default)(y.default.caseContainer,y.default[n]),key:e,style:{height:"".concat(a+20,"px")}},d.default.createElement(r.default,{spinning:"executing"===n,className:y.default.spinning}),d.default.createElement(g.default,{style:{backgroundColor:"#edeced"},width:"100%",height:"".concat(a,"px"),mode:"javascript",theme:"tomorrow",showGutter:!1,fontSize:14,readOnly:!0,value:e,editorProps:{$blockScrolling:1/0}}))})))}}]),n}(d.default.Component);return e})}})}var S=C;function b(t){return t.default}e.default=S},Zyja:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.decodeBase64=r,e.removeComments=u,e.removeNewLine=i;var a=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;function r(t){return decodeURIComponent(atob(t).split("").map(function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""))}function u(t){return t.replace(a,"").replace(/^\s+|\s+$/g,"")}function i(t){return t.replace(/^\s+|\s+$/g,"")}},"a0/Y":function(t,e,n){t.exports=n.p+"static/fight.fb0434d6.gif"},"i+bE":function(t,e,n){t.exports={content:"content___3dwyH",verifyBtn:"verifyBtn___2oot-"}},lHbt:function(t,e,n){t.exports={container:"container___LetEF",innerContainer:"innerContainer___2w7ew",closeBtn:"closeBtn___309eR",runBtn:"runBtn___2e6vj",caseContainer:"caseContainer___2Ay4T",execFailed:"execFailed___rxIml",execSuccess:"execSuccess___27RGk",spinning:"spinning___110cC"}}}]);