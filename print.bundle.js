webpackJsonp([2],{0:function(e,t,n){e.exports=n(16)},10:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(1),f=a(o),i=n(5),d=a(i),s=function(e){function t(e){l(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return u(t,e),c(t,[{key:"formatDate",value:function(e){return(0,d["default"])(e).format("MMMM YYYY")}},{key:"render",value:function(){var e=this,t=this.props.jobs;return f["default"].createElement("div",{className:"experience"},t.map(function(n,a){var l="Present"===n.endDate?n.endDate:e.formatDate(n.endDate),r=e.formatDate(n.startDate);return f["default"].createElement("div",{key:a},a===t.length-1?f["default"].createElement("br",null):null,f["default"].createElement("h2",{className:a===t.length-1?"page_break_before":""},n.companyName," ",f["default"].createElement("span",{className:"job__country"},"- ",n.country)),f["default"].createElement("div",null,f["default"].createElement("span",{className:"job__title"},n.title," (",r," - ",l,")")),f["default"].createElement("ul",null,n.responsibilities.map(function(e,t){return f["default"].createElement("li",{key:t},e)})))}))}}]),t}(f["default"].Component);t["default"]=s},15:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(1),f=a(o),i=n(10),d=a(i),s=n(2),m=function(e){function t(e){l(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return u(t,e),c(t,[{key:"render",value:function(){return f["default"].createElement("div",{id:"page-wrap"},f["default"].createElement("div",{id:"contact-info",className:"vcard"},f["default"].createElement("h1",{className:"fn"},f["default"].createElement("a",{href:"/",className:"contact__name"},"Alexander Chan")),f["default"].createElement("p",null,f["default"].createElement("a",{href:"mailto:achan@convergentis.com"},"alex@alexchan.info"))),f["default"].createElement("div",{className:"intro"},f["default"].createElement("p",null,s.INTRO)),f["default"].createElement("div",{className:"clear"}),f["default"].createElement("dl",{className:"dl-horizontal"},f["default"].createElement("dd",{className:"clear"}),f["default"].createElement("dt",null,"Experience"),f["default"].createElement("dd",null,f["default"].createElement(d["default"],{jobs:s.JOBS})),f["default"].createElement("dd",{className:"clear"}),f["default"].createElement("dt",null,"Education"),f["default"].createElement("dd",null,f["default"].createElement("h2",null,"Queen's University ",f["default"].createElement("span",{className:"job__country"},"- Canada")),f["default"].createElement("p",null,f["default"].createElement("strong",null,"Bachelor of Science - Electrical Engineering - 2001")," ","- Graduated with First Class Honours",f["default"].createElement("br",null)," ")),f["default"].createElement("dd",{className:"clear"}),f["default"].createElement("dt",null,"Skills"),f["default"].createElement("dd",null,s.SKILLS.map(function(e){return f["default"].createElement("div",{key:e.name},f["default"].createElement("h2",null,e.name),f["default"].createElement("p",null,e.list))}),f["default"].createElement("div",null,f["default"].createElement("a",{href:"https://github.com/alexanderchan"},f["default"].createElement("i",{className:"fa fa-github fa-lg","aria-hidden":"true"})," ","github.com/alexanderchan")))),f["default"].createElement("div",{className:"clear"}))}}]),t}(f["default"].Component);t["default"]=m},16:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var l=n(1),r=a(l),u=n(3),c=a(u);n(18);var o=n(15),f=a(o);c["default"].render(r["default"].createElement(f["default"],null),document.querySelector("#print-app"))},18:function(e,t){}});