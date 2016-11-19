'use strict';
var babelPresetEs2015 = require('babel-preset-es2015');
var IS_WEBPACK2 = /^2\./.test(process.env.WEBPACK_VERSION);

module.exports = IS_WEBPACK2 === false
  ? babelPresetEs2015
  : babelPresetEs2015.buildPreset(null, {loose: true});
