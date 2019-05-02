(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(148),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(151),c=n.n(s);n.d(t,"PageRenderer",function(){return c.a});var f=n(34);n.d(t,"parsePath",function(){return f.a});var d=a.a.createContext({}),p=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return s});var r=n(157),a=n.n(r),i=n(158),o=n.n(i);o.a.headerFontFamily=["Merriweather"],o.a.bodyFontFamily=["Merriweather"],o.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",color:"#6200EA"}}};var l=new a.a(o.a);var u=l.rhythm,s=l.scale},151:function(e,t,n){var r;e.exports=(r=n(153))&&r.default||r},152:function(e,t,n){"use strict";n(33);var r=n(7),a=n.n(r),i=n(0),o=n.n(i),l=n(150),u=n(149),s=n(154),c=n.n(s),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateWindowDimensions=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.state={width:0},n}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.render=function(){return o.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#6200EA",height:80}},o.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginLeft:""+Object(l.a)(1.5),marginRight:""+Object(l.a)(1.5),maxWidth:"56rem"}},o.a.createElement(u.Link,{to:"/",style:{color:"#FFFFFF",flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("img",{src:c.a,style:{width:70,height:70,marginBottom:0}}),o.a.createElement("div",{style:{fontFamily:"Merriweather",fontSize:24,fontWeight:500,whiteSpace:"nowrap"}},"Felfele Foundation")),o.a.createElement("div",{style:{maxWidth:400,display:"flex",flexDirection:"row",justifyContent:"space-between"}},o.a.createElement(d,{to:"/"},"Mission"),o.a.createElement(d,{to:"/team"},"Team"),o.a.createElement(d,{to:"/donate"},"Donate"),o.a.createElement(d,{to:"/contact"},"Contact"),o.a.createElement(d,{to:"/blog"},"Blog"))))},t}(i.Component),d=function(e){return o.a.createElement(u.Link,Object.assign({},e,{style:{color:"#FFFFFF",paddingRight:10}}))},p=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:m.rootContainer},o.a.createElement("div",{style:m.sectionsContainer},o.a.createElement("div",{style:m.section},o.a.createElement("div",{style:m.sectionTitle},"Developers"),o.a.createElement("a",{href:"https://github.com/felfele",target:"_new"},"Github"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md",target:"_new"},"Guidelines"),o.a.createElement("a",{href:"https://gitter.im/felfele/purple-lounge",target:"_new"},"Gitter")),o.a.createElement("div",{style:m.section},o.a.createElement("div",{style:m.sectionTitle},"Contribute"),o.a.createElement(u.Link,{to:"/donate"},"Donate"),o.a.createElement(u.Link,{to:"/volunteer"},"Volunteer"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CODE_OF_CONDUCT.md",target:"_new"},"Code of Conduct")),o.a.createElement("div",{style:m.section},o.a.createElement("div",{style:m.sectionTitle},"Help"),o.a.createElement("a",{href:"mailto:support@felfele.com"},"Support"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/issues/new?assignees=&labels=bug%2C+todo&template=bug_report.md&title=",target:"_new"},"File a Bug")),o.a.createElement("div",{style:m.section},o.a.createElement("div",{style:m.sectionTitle},"Legal"),o.a.createElement(u.Link,{to:"/contact"},"Contact"),o.a.createElement("a",{href:"https://ariregister.rik.ee/index?lang=eng"},"Public Records"),o.a.createElement(u.Link,{to:"/privacy"},"Privacy Policy"))))},t}(i.Component),m={rootContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:10,textTransform:"uppercase",letterSpacing:2,color:"gray",paddingTop:100},sectionsContainer:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%",paddingBottom:50},section:{display:"flex",flexDirection:"column"},sectionTitle:{paddingBottom:5,fontWeight:600}},y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.props.style,n={marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(32),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)},r=Object.assign({},n,t);return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement("div",{style:r},o.a.createElement("br",null),e,o.a.createElement(p,null)))},t}(o.a.Component);t.a=y},153:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(48),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,n){e.exports=n.p+"static/icon-white-transparent-4514e607f8952b6b93e1b8cec2903b23.png"},164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getColumnProps=t.Col=t.getRowProps=t.Row=t.Grid=void 0;var r=n(231);Object.defineProperty(t,"getRowProps",{enumerable:!0,get:function(){return r.getRowProps}});var a=n(234);Object.defineProperty(t,"getColumnProps",{enumerable:!0,get:function(){return a.getColumnProps}});var i=u(n(235)),o=u(r),l=u(a);function u(e){return e&&e.__esModule?e:{default:e}}t.Grid=i.default,t.Row=o.default,t.Col=l.default},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return i.default&&i.default[e]?i.default[e]:e};var r,a=n(232),i=(r=a)&&r.__esModule?r:{default:r}},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r={};Object.keys(t).filter(function(t){return"children"===t||!e[t]}).forEach(function(e){return r[e]=t[e]});var a=n.filter(function(e){return e}).join(" ");return Object.assign({},r,{className:a})}},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ViewportSizeType=t.ColumnSizeType=void 0;var r,a=n(4),i=(r=a)&&r.__esModule?r:{default:r};t.ColumnSizeType=i.default.oneOfType([i.default.number,i.default.bool]),t.ViewportSizeType=i.default.oneOf(["xs","sm","md","lg","xl"])},231:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRowProps=f,t.default=d;var r=u(n(170)),a=u(n(0)),i=u(n(4)),o=u(n(171)),l=n(176);function u(e){return e&&e.__esModule?e:{default:e}}var s=["start","center","end","top","middle","bottom","around","between"],c={reverse:i.default.bool,start:l.ViewportSizeType,center:l.ViewportSizeType,end:l.ViewportSizeType,top:l.ViewportSizeType,middle:l.ViewportSizeType,bottom:l.ViewportSizeType,around:l.ViewportSizeType,between:l.ViewportSizeType,className:i.default.string,tagName:i.default.string,children:i.default.node};function f(e){return(0,o.default)(c,e,function(e){for(var t=[e.className,(0,r.default)("row")],n=0;n<s.length;++n){var a=s[n],i=e[a];i&&t.push((0,r.default)(a+"-"+i))}return e.reverse&&t.push((0,r.default)("reverse")),t}(e))}function d(e){return a.default.createElement(e.tagName||"div",f(e))}d.propTypes=c},232:function(e,t,n){},234:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getColumnProps=d,t.default=p;var r=u(n(0)),a=u(n(4)),i=u(n(171)),o=u(n(170)),l=n(176);function u(e){return e&&e.__esModule?e:{default:e}}var s={xs:l.ColumnSizeType,sm:l.ColumnSizeType,md:l.ColumnSizeType,lg:l.ColumnSizeType,xl:l.ColumnSizeType,xsOffset:a.default.number,smOffset:a.default.number,mdOffset:a.default.number,lgOffset:a.default.number,xlOffset:a.default.number,first:l.ViewportSizeType,last:l.ViewportSizeType,className:a.default.string,tagName:a.default.string,children:a.default.node},c={xs:"col-xs",sm:"col-sm",md:"col-md",lg:"col-lg",xl:"col-xl",xsOffset:"col-xs-offset",smOffset:"col-sm-offset",mdOffset:"col-md-offset",lgOffset:"col-lg-offset",xlOffset:"col-xl-offset"};function f(e){var t=[];return e.className&&t.push(e.className),e.first&&t.push((0,o.default)("first-"+e.first)),e.last&&t.push((0,o.default)("last-"+e.last)),Object.keys(e).filter(function(e){return c[e]}).map(function(t){return(0,o.default)("number"==typeof(n=e[t])&&isFinite(n)&&Math.floor(n)===n?c[t]+"-"+e[t]:c[t]);var n}).concat(t)}function d(e){return(0,i.default)(s,e,f(e))}function p(e){var t=e.tagName,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["tagName"]);return r.default.createElement(t||"div",d(n))}p.propTypes=s},235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r=l(n(0)),a=l(n(4)),i=l(n(171)),o=l(n(170));function l(e){return e&&e.__esModule?e:{default:e}}var u={fluid:a.default.bool,className:a.default.string,tagName:a.default.string,children:a.default.node};function s(e){var t=(0,o.default)(e.fluid?"container-fluid":"container"),n=[e.className,t];return r.default.createElement(e.tagName||"div",(0,i.default)(u,e,n))}s.propTypes=u}}]);
//# sourceMappingURL=2-17edb0a2610ebc795ccc.js.map