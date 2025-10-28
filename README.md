<h1 align="center">
  object-properties
</h1>

<p align="center">
  Shortcuts to Object.defineProperty and Object.defineProperties
</p>

<p align="center">
  <a href="https://npmjs.org/package/object-properties"><img src="https://img.shields.io/npm/v/object-properties.svg?style=flat-square" alt="npm version"></a>
  <a href="https://npmjs.org/package/object-properties"><img src="https://img.shields.io/npm/dw/object-properties.svg?style=flat-square" alt="npm downloads"></a>
  <a href="https://npmjs.org/package/object-properties"><img src="https://img.shields.io/node/v/object-properties.svg?style=flat-square" alt="node version"></a>
  <a href="https://npmjs.org/package/object-properties"><img src="https://img.shields.io/npm/types/object-properties.svg?style=flat-square" alt="types"></a>
  <a href="https://codecov.io/gh/christophehurpeau/object-properties"><img src="https://img.shields.io/codecov/c/github/christophehurpeau/object-properties/main.svg?style=flat-square"></a>
  <a href="https://christophehurpeau.github.io/object-properties/"><img src="https://img.shields.io/website.svg?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Fchristophehurpeau.github.io%2Fobject-properties%2F?style=flat-square"></a>
</p>

## Examples

```js
import { defineGetter } from "object-properties"; // or var defineGetter = require('object-properties').defineGetter;

let object = {};

defineGetter(object, "test", () => "test");
```

## Available methods

- [defineProperty(target, property, value, options)](https://christophehurpeau.github.io/object-properties/functions/defineProperty.html)
- [defineConstant(target, property, value, options)](https://christophehurpeau.github.io/object-properties/functions/defineConstant.html)
- [defineGetter(target, property, getter, options)](https://christophehurpeau.github.io/object-properties/functions/defineGetter.html)
- [defineSetter(target, property, setter, options)](https://christophehurpeau.github.io/object-properties/functions/defineSetter.html)
- [defineLazyProperty(target, property, callback, options)](https://christophehurpeau.github.io/object-properties/functions/defineLazyProperty.html)
- [defineLazyConstant(target, property, callback, options)](https://christophehurpeau.github.io/object-properties/functions/defineLazyConstant.html)
- [definePrototypeProperty(Class, property, value, options)](https://christophehurpeau.github.io/object-properties/functions/definePrototypeProperty.html)
- [definePrototypeConstant(Class, property, value, options)](https://christophehurpeau.github.io/object-properties/functions/definePrototypeConstant.html)
- [definePrototypeGetter(Class, property, value, options)](https://christophehurpeau.github.io/object-properties/functions/definePrototypeGetter.html)
- [definePrototypeSetter(Class, property, value, options)](https://christophehurpeau.github.io/object-properties/functions/definePrototypeSetter.html)
- [definePrototypeLazyProperty(Class, property, value, options)](https://christophehurpeau.github.io/object-properties/functions/definePrototypeLazyProperty.html)
- [definePrototypeLazyConstant(Class, property, value, options)](https://christophehurpeau.github.io/object-properties/functions/definePrototypeLazyConstant.html)
- [defineProperties(target, properties, options)](https://christophehurpeau.github.io/object-properties/functions/defineProperties.html)
- [defineConstants(target, properties, options)](https://christophehurpeau.github.io/object-properties/functions/defineConstant.html)

## License

[ISC](https://github.com/christophehurpeau/object-properties/blob/master/LICENSE)
