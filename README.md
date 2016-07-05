# babel-preset-es2015-maybe-webpack

Using Webpack2 with Babel is difficult. Webpack2 understands ES6 `import/export` natively, so you don't want
to use the full `es2015` preset. You want to have all of your babel options in your `.babelrc`, but there
is no good way to override a single preset in `babel-loader` while keeping the rest of your `.babelrc` intact,
including `env`s.

This preset is for you if you've already tried to parse your `.babelrc` yourself (hint, use `json5`).

## How it Works

Add the following to the top of your webpack config:

```js
process.env.WEBPACK_VERSION = require('webpack/package.json').version;
```

If this preset detects that Webpack 2 is being used, it will exclude `transform-es2015-modules-commonjs`.

## Install

Install both this preset, and the core 'babel-preset-es2015' that it modifies:

```sh
$ npm install --save-dev babel-preset-es2015-maybe-webpack babel-preset-es2015
```

## Usage

**Hint: You can get loose mode by using `es2015-maybe-webpack/loose`.**

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["es2015-maybe-webpack"]
}
```

### Via CLI

```sh
$ babel script.js --presets es2015-maybe-loose
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["es2015-maybe-loose"]
})
```

[babel-preset-es2015]: https://www.npmjs.com/package/babel-preset-es2015
[loose mode]: http://www.2ality.com/2015/12/babel6-loose-mode.html
[modify-babel-preset]: https://github.com/developit/modify-babel-preset
