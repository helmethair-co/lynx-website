(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{149:function(e,t,n){"use strict";n.r(t);n(75),n(50),n(165),n(49);var a=n(7),r=n.n(a),i=n(0),l=n.n(i),o=n(160),c=n.n(o),s=n(161),u=n.n(s),m=n(158),d={twitter:"https://twitter.com/felfeleapp",gitter:"https://gitter.im/felfele/purple-lounge",email:"hello@felfele.org"},f={"legal name":"Felfele SA",address:"Pärnu mnt 141 (Delta Plaza 13.k), 11314 Tallinn, Estonia"};n.d(t,"query",function(){return h});var p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=u()(this,"props.data.site.siteMetadata.title"),t=u()(this,"props.data.site.siteMetadata.description");return l.a.createElement(m.a,null,l.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:"Contact | "+e}),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}},l.a.createElement("div",null,l.a.createElement("h2",null,"Contact"),l.a.createElement("br",null),Object.keys(d).map(function(e){if(d[e])return l.a.createElement("p",null,l.a.createElement("b",null,e,": "),l.a.createElement("a",{href:d[e],target:"_new"},d[e]))}),l.a.createElement("p",null,l.a.createElement("b",null,"slack: "),l.a.createElement("a",{href:"https://join.slack.com/t/felfele/shared_invite/enQtNTM1MjUwNTI1NzI5LTY5Yjg0YmVjN2MyN2MzMzc0Y2RkMGRiYzE0N2U0ZjgwNmYxMTQ3YjUwMDg1MGFiZTZlMWViZjU2MWJjY2Y0OTY"},"invitation"))),l.a.createElement("div",null,l.a.createElement("h2",null,"Business Info"),l.a.createElement("br",null),Object.keys(f).map(function(e){if(f[e])return l.a.createElement("p",null,l.a.createElement("b",null,e,": "),l.a.createElement("r",null,f[e]))}))))},t}(l.a.Component),h=(t.default=p,"3540649657")},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(150),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var s=n(152),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(34);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},152:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},153:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var a=n(162),r=n.n(a),i=n(163),l=n.n(i);l.a.headerFontFamily=["Roboto"],l.a.bodyFontFamily=["Roboto"],l.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",color:"#6200EA"}}};var o=new r.a(l.a);var c=o.rhythm,s=o.scale},154:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(48),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},155:function(e,t,n){e.exports=n.p+"static/icon-white-transparent-4514e607f8952b6b93e1b8cec2903b23.png"},156:function(e,t,n){},158:function(e,t,n){"use strict";n(33);var a=n(7),r=n.n(a),i=n(0),l=n.n(i),o=n(153),c=n(151),s=(n(159),n(155)),u=n.n(s),m=(n(164),n(156),function(e){function t(t){var n;return(n=e.call(this,t)||this).openReactMobileMenu=function(){n.setState(function(e){return{menuIsOpen:!e.menuIsOpen}})},n.state={menuIsOpen:!1},n}return r()(t,e),t.prototype.render=function(){var e,t={color:"white",textDecoration:"none",fontSize:"2.75rem"};return l.a.createElement("button",{style:{margin:0,padding:0,height:"42px",outline:"none",display:"flex",paddingRight:20},onClick:this.openReactMobileMenu,className:"hamburger hamburger--spin "+(this.state.menuIsOpen&&"is-active"),type:"button"},l.a.createElement("span",{className:"hamburger-box"},l.a.createElement("span",((e={style:{color:"white"},className:"hamburger-inner"}).style={zIndex:99999},e))),this.state.menuIsOpen&&l.a.createElement("div",{style:{position:"fixed",width:"100%",height:"100%",top:0,left:0,backgroundSize:"cover",backgroundColor:"black",opacity:.9},className:"open"},l.a.createElement("div",null,l.a.createElement("ul",{style:{color:"white",listStyle:"none",margin:"5rem",fontWeight:100,fontSize:"3rem",lineHeight:"4rem"}},l.a.createElement("li",null,l.a.createElement("a",{style:t,href:"/"},"Mission")),l.a.createElement("li",null,l.a.createElement("a",{style:t,href:"/team"},"Team")),l.a.createElement("li",null,l.a.createElement("a",{style:t,href:"/donate"},"Donate")),l.a.createElement("li",null,l.a.createElement("a",{style:t,href:"/contact"},"Contact")),l.a.createElement("li",null,l.a.createElement("a",{style:t,href:"/blog"},"Blog"))))))},t}(l.a.Component)),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateWindowDimensions=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.state={width:0},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.render=function(){return l.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"#6200EA",height:80}},l.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",maxWidth:"56rem"}},l.a.createElement(c.Link,{to:"/",style:{color:"#FFFFFF",flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("img",{src:u.a,style:{width:70,height:70,marginBottom:0}}),l.a.createElement("div",{style:{fontFamily:"Roboto",fontSize:this.state.width>650?24:20,fontWeight:500,whiteSpace:"nowrap"}},"Felfele Foundation")),this.state.width>650?l.a.createElement("div",{style:{maxWidth:400,display:"flex",flexDirection:"row",justifyContent:"space-between",paddingRight:10}},l.a.createElement(f,{to:"/"},"Mission"),l.a.createElement(f,{to:"/team"},"Team"),l.a.createElement(f,{to:"/donate"},"Donate"),l.a.createElement(f,{to:"/contact"},"Contact"),l.a.createElement(f,{to:"/blog"},"Blog")):l.a.createElement(m,null)))},t}(i.Component),f=function(e){return l.a.createElement(c.Link,Object.assign({},e,{style:{color:"#FFFFFF",paddingRight:10}}))},p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",{style:h.rootContainer},l.a.createElement("div",{style:h.sectionsContainer},l.a.createElement("div",{style:h.section},l.a.createElement("div",{style:h.sectionTitle},"Developers"),l.a.createElement("a",{href:"https://github.com/felfele",target:"_new"},"Github"),l.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md",target:"_new"},"Guidelines"),l.a.createElement("a",{href:"https://gitter.im/felfele/purple-lounge",target:"_new"},"Gitter")),l.a.createElement("div",{style:h.section},l.a.createElement("div",{style:h.sectionTitle},"Contribute"),l.a.createElement(c.Link,{to:"/donate"},"Donate"),l.a.createElement(c.Link,{to:"/volunteer"},"Volunteer"),l.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CODE_OF_CONDUCT.md",target:"_new"},"Code of Conduct")),l.a.createElement("div",{style:h.section},l.a.createElement("div",{style:h.sectionTitle},"Help"),l.a.createElement("a",{href:"mailto:support@felfele.com"},"Support"),l.a.createElement("a",{href:"https://github.com/felfele/felfele/issues/new?assignees=&labels=bug%2C+todo&template=bug_report.md&title=",target:"_new"},"File a Bug")),l.a.createElement("div",{style:h.section},l.a.createElement("div",{style:h.sectionTitle},"Legal"),l.a.createElement(c.Link,{to:"/contact"},"Contact"),l.a.createElement("a",{href:"https://ariregister.rik.ee/index?lang=eng"},"Public Records"),l.a.createElement(c.Link,{to:"/privacy"},"Privacy Policy"))))},t}(i.Component),h={rootContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:10,textTransform:"uppercase",letterSpacing:2,color:"gray",paddingTop:100},sectionsContainer:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%",paddingBottom:50},section:{display:"flex",flexDirection:"column"},sectionTitle:{paddingBottom:5,fontWeight:600}},g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.props.style,n={marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(32),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)},a=Object.assign({},n,t);return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{style:a},l.a.createElement("br",null),e,l.a.createElement(p,null)))},t}(l.a.Component);t.a=g},165:function(e,t,n){var a=n(25),r=n(35);n(166)("keys",function(){return function(e){return r(a(e))}})},166:function(e,t,n){var a=n(6),r=n(17),i=n(16);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],l={};l[e]=t(n),a(a.S+a.F*i(function(){n(1)}),"Object",l)}}}]);
//# sourceMappingURL=component---src-pages-contact-js-53e56ff8db4634fabc40.js.map