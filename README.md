[![Build Status](https://travis-ci.org/dazld/mini-config.svg?branch=master)](https://travis-ci.org/dazld/mini-config)

# Mini configuration provider

Minimal wrapper around a `Map` that tries to protect you from referencing undefined variables, or from redefining keys at runtime.

Rationale is that sometimes, you just want something very straightforward to setup config variables and pass them around, without the overhead of a large scale module, although sometimes that's needed. A warning if some broken code is overwriting config, or if you are mistyping / referencing a non-existent key is also handy.

## Installation

`$ npm install --save mini-config`

## API

```js

// project-config.js or whatever

const makeConfig = require('mini-config');
const config = makeConfig(); // module exports a single function, that returns a new guarded cache per invocation

config.set('foo','bar');
config.set('baz', false);

try {
    config.set('foo','bla'); // throws, as this key has already been set
    config.get('bla'); // also throws as this key does not exist.
} catch(e) {
    console.log(e);
}


export default config;


```

The backing cache is an ES6 `Map`, so be sure to polyfill if using in older environments.
