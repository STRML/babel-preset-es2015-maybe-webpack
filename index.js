'use strict';
var makeOptions = require('./makeOptions');
var modify = require('modify-babel-preset');

// Enables with `true` to install plugins without loose mode.
// Call makeOptions({loose: true}) to enable loose mode. (see ./loose.js)
module.exports = modify('es2015', makeOptions(true));
module.exports.makeOptions = makeOptions;
