'use strict';
var es2015 = require('babel-preset-es2015');
var IS_WEBPACK1 = !process.env.WEBPACK_VERSION || /^1\./.test(process.env.WEBPACK_VERSION);

var modules = !IS_WEBPACK1 ? false : 'commonjs';
module.exports = es2015.buildPreset(null, {loose: true, modules: modules});
