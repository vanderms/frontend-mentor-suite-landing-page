(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9081)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);o=!0);}catch(l){i=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var s,o=(s=r(7294))&&s.__esModule?s:{default:s},i=r(6273),l=r(387),c=r(7190);var u={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),s=o.default.useMemo((function(){var t=a(i.resolveHref(n,e.href,!0),2),r=t[0],s=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):s||r}}),[n,e.href,e.as]),d=s.href,h=s.as,m=e.children,p=e.replace,g=e.shallow,j=e.scroll,v=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var x=(t=o.default.Children.only(m))&&"object"===typeof t&&t.ref,y=a(c.useIntersection({rootMargin:"200px"}),2),w=y[0],b=y[1],N=o.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);o.default.useEffect((function(){var e=b&&r&&i.isLocalURL(d),t="undefined"!==typeof v?v:n&&n.locale,a=u[d+"%"+h+(t?"%"+t:"")];e&&!a&&f(n,d,h,{locale:t})}),[h,d,b,v,r,n]);var M={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,s,o,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==o&&n.indexOf("#")>=0&&(o=!1),t[a?"replace":"push"](r,n,{shallow:s,locale:l,scroll:o}))}(e,n,d,h,p,g,j,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof v?v:n&&n.locale,A=n&&n.isLocaleDomain&&i.getDomainLocale(h,k,n&&n.locales,n&&n.domainLocales);M.href=A||i.addBasePath(i.addLocale(h,k,n&&n.defaultLocale))}return o.default.cloneElement(t,M)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);o=!0);}catch(l){i=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,c=s.useRef(),u=a(s.useState(!1),2),f=u[0],d=u[1],h=a(s.useState(t?t.current:null),2),m=h[0],p=h[1],g=s.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,s=n.observer,o=n.elements;return o.set(e,t),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),l.delete(a))}}(e,(function(e){return e&&d(e)}),{root:m,rootMargin:r}))}),[n,m,r,f]);return s.useEffect((function(){if(!i&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),s.useEffect((function(){t&&p(t.current)}),[t]),[g,f]};var s=r(7294),o=r(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},9081:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(5893),a=r(9008);function s(e){return"/frontend-mentor-suite-landing-page"+e}function o(){return(0,n.jsx)("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0Z",fill:"#172339"})})}function i(){return(0,n.jsx)("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058ZM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0Zm0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27Zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z",fill:"#172339"})})}function l(){return(0,n.jsx)("svg",{width:"20",height:"17",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M20 2.172a8.192 8.192 0 0 1-2.357.646 4.11 4.11 0 0 0 1.805-2.27 8.22 8.22 0 0 1-2.606.996A4.096 4.096 0 0 0 13.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 0 1 1.392 1a4.109 4.109 0 0 0 1.27 5.478 4.086 4.086 0 0 1-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 0 1-1.853.07 4.106 4.106 0 0 0 3.833 2.849A8.25 8.25 0 0 1 0 14.658a11.616 11.616 0 0 0 6.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0 0 20 2.172Z",fill:"#172339"})})}function c(){return(0,n.jsx)("footer",{className:"footer-root",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("img",{src:s("/assets/logo.svg"),alt:"logo",className:"logo"}),(0,n.jsx)("div",{className:"copyright",children:"Copyright - Suite"}),(0,n.jsxs)("ul",{className:"social-links",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://pt-br.facebook.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"facebook",children:(0,n.jsx)(o,{})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://twitter.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"twitter",children:(0,n.jsx)(l,{})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"instagram",children:(0,n.jsx)(i,{})})})]})]})})}function u(){return(0,n.jsx)("svg",{width:"289",height:"39",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M1 37.676c92.173-48 187.84-48 287 0",stroke:"#172339",strokeWidth:"2",fill:"none"})})}var f=r(1664);function d(e){return(0,n.jsxs)("div",{className:"indicator",children:[(0,n.jsx)("div",{className:"quantity",children:e.quantity}),(0,n.jsx)("div",{className:"name",children:e.name})]})}function h(){return(0,n.jsxs)("section",{className:"section-cover-root",children:[(0,n.jsxs)("div",{className:"header-and-cta",children:[(0,n.jsx)("div",{className:"pattern-wrapper",children:(0,n.jsx)(u,{})}),(0,n.jsxs)("header",{children:[(0,n.jsxs)("h1",{className:"title",children:["A ",(0,n.jsx)("strong",{children:"super solution"})," for your"," ",(0,n.jsx)("strong",{children:"business."})]}),(0,n.jsx)("p",{className:"description",children:"Our marketing and sales automations help you scale your outreach to get more leads for your company."})]}),(0,n.jsx)(f.default,{href:"/",children:(0,n.jsx)("a",{className:"cta",children:"Request Beta Access"})})]}),(0,n.jsx)("div",{className:"bg-image"}),(0,n.jsxs)("ul",{className:"indicator-list",children:[(0,n.jsx)("li",{children:(0,n.jsx)(d,{quantity:"2K+",name:"COMPANIES"})}),(0,n.jsx)("li",{children:(0,n.jsx)(d,{quantity:"8",name:"LANGUAGES"})}),(0,n.jsx)("li",{children:(0,n.jsx)(d,{quantity:"1.2M",name:"LEADS"})})]})]})}function m(){return(0,n.jsxs)("div",{className:"section-header-root",children:[(0,n.jsx)("img",{src:s("/assets/logo.svg"),alt:"logo",className:"logo"}),(0,n.jsx)(f.default,{href:"/",children:(0,n.jsx)("a",{className:"cta",children:"Request Beta Access"})})]})}function p(){return(0,n.jsx)("svg",{width:"66",height:"54",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M64.25.153C59.995 27.67 38.646 45.003.2 52.153",stroke:"#FAF8F6",strokeWidth:"2",fill:"none"})})}function g(){return(0,n.jsxs)("section",{className:"section-testimonial-root",children:[(0,n.jsxs)("div",{className:"image",children:[(0,n.jsx)("img",{className:"desktop",src:s("/assets/image-jeremy-large.png"),alt:"Jeremy Robinson"}),(0,n.jsx)("img",{className:"mobile",src:s("/assets/image-jeremy-small.png"),alt:"Jeremy Robinson"})]}),(0,n.jsx)("div",{className:"pattern-wrapper",children:(0,n.jsx)(p,{})}),(0,n.jsxs)("div",{className:"text",children:[(0,n.jsxs)("h2",{className:"title",children:["It just ",(0,n.jsx)("strong",{children:"works."})]}),(0,n.jsx)("p",{className:"quote",children:"\u201cI really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.\u201d"}),(0,n.jsxs)("div",{className:"author",children:[(0,n.jsx)("div",{className:"name",children:"JEREMY ROBINSON"}),(0,n.jsx)("div",{className:"role",children:"CMO, FYLO"})]})]})]})}var j=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"Frontend Mentor | Suite Landing Page"}),(0,n.jsx)("meta",{property:"og:site_name",content:"Frontend Mentor | Suite Landing Page "}),(0,n.jsx)("meta",{property:"og:title",content:"Suite Landing Page"}),(0,n.jsx)("meta",{property:"og:description",content:"My solution to the challenge Suite Landing Page, by Frontend Mentor"}),(0,n.jsx)("meta",{property:"og:image",content:"https://vanderms.github.io/"+s("/preview.jpg")}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image:type",content:"image/jpeg"}),(0,n.jsx)("meta",{property:"og:url",content:"https://vanderms.github.io/"+s("/")})]}),(0,n.jsxs)("main",{children:[(0,n.jsx)(m,{}),(0,n.jsx)(h,{}),(0,n.jsx)(g,{})]}),(0,n.jsx)(c,{})]})}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);