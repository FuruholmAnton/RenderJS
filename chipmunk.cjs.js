"use strict";function render(e,r){var n=void 0;if("string"==typeof e){var t=e.slice(0,1);"."==t||"#"==t?e=document.querySelector(e):n=e}return n||(n=e.innerHTML),n.replace(/\{\{([\s\S]*?)\}\}/g,function(e){var n=r;return e.slice(2,e.length-2).trim().split(".").forEach(function(e){e&&(n=n[e])}),n||""})}module.exports=render;
