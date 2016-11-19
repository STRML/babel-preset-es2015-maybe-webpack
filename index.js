'use strict';
var es2015 = require('babel-preset-es2015');
var IS_WEBPACK2 = /^2\./.test(process.env.WEBPACK_VERSION);

module.exports = IS_WEBPACK2
  ? es2015.buildPreset(null, {modules: false})
  // Can save a few cycles by not calling buildPreset at all.
  : es2015;
