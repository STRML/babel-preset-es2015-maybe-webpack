'use strict';
var modify = require('modify-babel-preset');

var IS_WEBPACK2 = /^2\./.test(process.env.WEBPACK_VERSION);

var makeOptions = function(enable) {
  return {
    'transform-es2015-template-literals': enable,
    'transform-es2015-classes': enable,
    'transform-es2015-computed-properties': enable,
    'transform-es2015-for-of': enable,
    'transform-es2015-spread': enable,
    'transform-es2015-destructuring': enable,
    // If we're running Webpack2, don't include this.
    'transform-es2015-modules-commonjs': IS_WEBPACK2 ? false : enable
  };
}

// Enables with `true` to install plugins without loose mode.
// Call makeOptions({loose: true}) to enable loose mode. (see ./loose.js)
module.exports = modify('es2015', makeOptions(true));
module.exports.makeOptions = makeOptions;
