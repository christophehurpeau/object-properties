object-properties [![NPM version][npm-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Coverage][coverage-image]][coverage-url]
============================

Shortcuts to manage object properties

## Examples

```js
import op from 'object-properties'; // or var op = require('object-properties');

let object = {};

op.defineGetter(object, 'test', () => 'test');
```

## API

See the generated API [here](http://christophehurpeau.github.io/object-properties/docs/).


[npm-image]: https://img.shields.io/npm/v/object-properties.svg?style=flat-square
[npm-url]: https://npmjs.org/package/object-properties
[build-status-image]: https://img.shields.io/circleci/project/christophehurpeau/object-properties/master.svg?style=flat-square
[build-status-url]: https://circleci.com/gh/christophehurpeau/object-properties
[coverage-image]: https://img.shields.io/coveralls/christophehurpeau/object-properties/master.svg?style=flat-square
[coverage-url]: http://christophehurpeau.github.io/object-properties/coverage/lcov-report/
