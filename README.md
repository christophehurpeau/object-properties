<h3 align="center">
  object-properties
</h3>

<p align="center">
  Shortcuts to Object.defineProperty and Object.defineProperties
</p>

<p align="center">
  <a href="https://npmjs.org/package/object-properties"><img src="https://img.shields.io/npm/v/object-properties.svg?style=flat-square"></a>
</p>

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
- [definePrototypeProperty(Class, property, value, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-definePrototypeProperty)
- [definePrototypeConstant(Class, property, value, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-definePrototypeConstant)
- [definePrototypeGetter(Class, property, value, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-definePrototypeGetter)
- [definePrototypeSetter(Class, property, value, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-definePrototypeSetter)
- [definePrototypeLazyProperty(Class, property, value, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-definePrototypeLazyProperty)
- [definePrototypeLazyConstant(Class, property, value, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-definePrototypeLazyConstant)
- [defineProperties(target, properties, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-defineProperties)
- [defineConstants(target, properties, options)](http://christophehurpeau.github.io/object-properties/docs/function/index.html#static-function-defineConstants)

## License

[ISC](https://github.com/christophehurpeau/object-properties/blob/master/LICENSE)
