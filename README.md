# object-properties [![NPM version][npm-image]][npm-url]

Shortcuts to Object.defineProperty and Object.defineProperties

[![Build Status][build-status-image]][build-status-url] [![Coverage][coverage-image]][coverage-url]

## Examples

```js
import { defineGetter } from 'object-properties'; // or var defineGetter = require('object-properties').defineGetter;

let object = {};

defineGetter(object, 'test', () => 'test');
```

## Available methods

- [defineProperty(target, property, value, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-defineProperty)
- [defineConstant(target, property, value, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-defineConstant)
- [defineGetter(target, property, getter, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-defineGetter)
- [defineSetter(target, property, setter, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-defineSetter)
- [defineLazyProperty(target, property, callback, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-defineLazyProperty)
- [defineLazyConstant(target, property, callback, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-defineLazyConstant)
- [defineProperties(target, properties, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-defineProperties)
- [defineConstants(target, properties, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-defineConstants)

## License

[ISC](https://github.com/christophehurpeau/object-properties/blob/master/LICENSE)


[npm-image]: https://img.shields.io/npm/v/object-properties.svg?style=flat-square
[npm-url]: https://npmjs.org/package/object-properties
[build-status-image]: https://img.shields.io/circleci/project/christophehurpeau/object-properties/master.svg?style=flat-square
[build-status-url]: https://circleci.com/gh/christophehurpeau/object-properties
[coverage-image]: https://img.shields.io/coveralls/christophehurpeau/object-properties/master.svg?style=flat-square
[coverage-url]: http://christophehurpeau.github.io/object-properties/coverage/lcov-report/
