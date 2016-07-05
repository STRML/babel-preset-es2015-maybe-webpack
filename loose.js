'use strict';

var modify = require('modify-babel-preset');
var LOOSE = {loose: true};
var makeOptions = require('./index').makeOptions;

module.exports = modify('es2015', makeOptions(LOOSE));
