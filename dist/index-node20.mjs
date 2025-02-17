function defineProperty(target, property, value, options) {
  Object.defineProperty(target, property, {
    value,
    writable: options?.writable !== false,
    configurable: options?.configurable !== false,
    enumerable: options?.enumerable
  });
  return target;
}
function defineConstant(target, property, value, options) {
  Object.defineProperty(target, property, {
    value,
    writable: false,
    configurable: false,
    enumerable: options?.enumerable
  });
  return target;
}
function defineGetter(target, property, getter, options) {
  Object.defineProperty(target, property, {
    get: getter,
    configurable: options?.configurable !== false,
    enumerable: options?.enumerable
  });
  return target;
}
function defineSetter(target, property, setter, options) {
  Object.defineProperty(target, property, {
    set: setter,
    configurable: options?.configurable !== false,
    enumerable: options?.enumerable
  });
  return target;
}
function defineLazyProperty(target, property, callback, options) {
  defineGetter(
    target,
    property,
    function() {
      const value = callback.call(this);
      defineProperty(this, property, value, options);
      return value;
    },
    { configurable: true, enumerable: options?.enumerable }
  );
  return target;
}
function defineLazyConstant(target, property, callback, options) {
  defineGetter(
    target,
    property,
    function() {
      const value = callback.call(this);
      defineConstant(this, property, value, options);
      return value;
    },
    { configurable: true, enumerable: options?.enumerable }
  );
  return target;
}
function definePrototypeProperty(Class, property, value, options) {
  defineProperty(Class.prototype, property, value, options);
  return Class;
}
function definePrototypeConstant(Class, property, value, options) {
  defineConstant(Class.prototype, property, value, options);
  return Class;
}
function definePrototypeGetter(Class, property, getter, options) {
  defineGetter(Class.prototype, property, getter, options);
  return Class;
}
function definePrototypeSetter(Class, property, setter, options) {
  defineSetter(Class.prototype, property, setter, options);
  return Class;
}
function definePrototypeLazyProperty(Class, property, callback, options) {
  defineLazyProperty(Class.prototype, property, callback, options);
  return Class;
}
function definePrototypeLazyConstant(Class, property, callback, options) {
  defineLazyConstant(Class.prototype, property, callback, options);
  return Class;
}
function defineProperties(target, properties, options) {
  if (!properties) {
    return target;
  }
  const optionsObject = {
    writable: options?.writable !== false,
    configurable: options?.configurable !== false,
    enumerable: !!options?.enumerable
  };
  Object.keys(properties).forEach((key) => {
    Object.defineProperty(target, key, {
      value: properties[key],
      writable: optionsObject.writable,
      configurable: optionsObject.configurable,
      enumerable: optionsObject.enumerable
    });
  });
  return target;
}
function defineConstants(target, properties, options) {
  return defineProperties(target, properties, {
    writable: false,
    configurable: false,
    enumerable: options?.enumerable
  });
}

export { defineConstant, defineConstants, defineGetter, defineLazyConstant, defineLazyProperty, defineProperties, defineProperty, definePrototypeConstant, definePrototypeGetter, definePrototypeLazyConstant, definePrototypeLazyProperty, definePrototypeProperty, definePrototypeSetter, defineSetter };
//# sourceMappingURL=index-node20.mjs.map
