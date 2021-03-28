/* eslint-disable max-lines */

/**
 * @param {Object} target
 * @param {string} property name of the property
 * @param {*} value value
 * @param {Object} [options]
 * @param {boolean} [options.writable=true]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 */
function defineProperty(target, property, value, options) {
  Object.defineProperty(target, property, {
    value,
    writable: (options === null || options === void 0 ? void 0 : options.writable) !== false,
    configurable: (options === null || options === void 0 ? void 0 : options.configurable) !== false,
    enumerable: options === null || options === void 0 ? void 0 : options.enumerable
  });
  return target;
}
/**
 *
 * @param {Object} target
 * @param {string} property name of the property
 * @param {*} value value
 * @param {Object} [options]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */

function defineConstant(target, property, value, options) {
  Object.defineProperty(target, property, {
    value,
    writable: false,
    configurable: false,
    enumerable: options === null || options === void 0 ? void 0 : options.enumerable
  });
  return target;
}

/**
 *
 * @param {Object} target
 * @param {string} property name of the property
 * @param {Function} getter getter function
 * @param {Object} [options]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
function defineGetter(target, property, getter, options) {
  Object.defineProperty(target, property, {
    get: getter,
    configurable: (options === null || options === void 0 ? void 0 : options.configurable) !== false,
    enumerable: options === null || options === void 0 ? void 0 : options.enumerable
  });
  return target;
}

/**
 *
 * @param {Object} target
 * @param {string} property name of the property
 * @param {Function} setter setter function
 * @param {Object} [options]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
function defineSetter(target, property, setter, options) {
  Object.defineProperty(target, property, {
    set: setter,
    configurable: (options === null || options === void 0 ? void 0 : options.configurable) !== false,
    enumerable: options === null || options === void 0 ? void 0 : options.enumerable
  });
  return target;
}

/**
 * Create a getter that transforms then to a property
 *
 * @param {Object} target
 * @param {string} property name of the property
 * @param {Function} callback function called when the property is accessed the first time
 * @param {Object} [options]
 * @param {boolean} [options.writable=true]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
function defineLazyProperty(target, property, callback, options) {
  defineGetter(target, property, function () {
    const value = callback.call(this);
    defineProperty(this, property, value, options);
    return value;
  }, {
    configurable: true,
    enumerable: options === null || options === void 0 ? void 0 : options.enumerable
  });
  return target;
}
/**
 * Create a getter that transforms then to a property
 *
 * @param {Object} target
 * @param {string} property name of the property
 * @param {Function} callback function called when the property is accessed the first time
 * @param {Object} [options]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */

function defineLazyConstant(target, property, callback, options) {
  defineGetter(target, property, function () {
    const value = callback.call(this);
    defineConstant(this, property, value, options);
    return value;
  }, {
    configurable: true,
    enumerable: options === null || options === void 0 ? void 0 : options.enumerable
  });
  return target;
}
/**
 *
 * @param {Function} Class
 * @param {string} property name of the property
 * @param {*} value value
 * @param {Object} [options]
 * @param {boolean} [options.writable=true]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} Class
 */

function definePrototypeProperty(Class, property, value, options) {
  defineProperty(Class.prototype, property, value, options);
  return Class;
}
/**
 *
 * @param {Function} Class
 * @param {string} property name of the property
 * @param {*} value value
 * @param {Object} [options]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} Class
 */

function definePrototypeConstant(Class, property, value, options) {
  defineConstant(Class.prototype, property, value, options);
  return Class;
}
/**
 *
 * @param {Function} Class
 * @param {string} property name of the property
 * @param {Function} getter getter function
 * @param {Object} [options]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} Class
 */

function definePrototypeGetter(Class, property, getter, options) {
  defineGetter(Class.prototype, property, getter, options);
  return Class;
}
/**
 *
 * @param {Function} Class
 * @param {string} property name of the property
 * @param {Function} setter setter function
 * @param {Object} [options]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} Class
 */

function definePrototypeSetter(Class, property, setter, options) {
  defineSetter(Class.prototype, property, setter, options);
  return Class;
}
/**
 * Create a getter that transforms then to a property
 *
 * @param {Function} Class
 * @param {string} property name of the property
 * @param {Function} callback function called when the property is accessed the first time
 * @param {Object} [options]
 * @param {boolean} [options.writable=true]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} Class
 */

function definePrototypeLazyProperty(Class, property, callback, options) {
  defineLazyProperty(Class.prototype, property, callback, options);
  return Class;
}
/**
 * Create a getter that transforms then to a property
 *
 * @param {Function} Class
 * @param {string} property name of the property
 * @param {Function} callback function called when the property is accessed the first time
 * @param {Object} [options]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} Class
 */

function definePrototypeLazyConstant(Class, property, callback, options) {
  defineLazyConstant(Class.prototype, property, callback, options);
  return Class;
}
/**
 * Shortcut for Object.defineProperties
 *
 * @param {Object} target
 * @param {Object} [properties]
 * @param {Object} [options]
 * @param {boolean} [options.writable=true]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */

function defineProperties(target, properties, options) {
  if (!properties) {
    return target;
  }

  const optionsObject = {
    writable: (options === null || options === void 0 ? void 0 : options.writable) !== false,
    configurable: (options === null || options === void 0 ? void 0 : options.configurable) !== false,
    enumerable: !!(options !== null && options !== void 0 && options.enumerable)
  };
  Object.keys(properties).forEach(key => {
    Object.defineProperty(target, key, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      value: properties[key],
      writable: optionsObject.writable,
      configurable: optionsObject.configurable,
      enumerable: optionsObject.enumerable
    });
  });
  return target;
}
/**
 * Shortcut for Object.defineProperties
 *
 * @param {Object} target
 * @param {Object} [properties]
 * @param {Object} [options]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */

function defineConstants(target, properties, options) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return defineProperties(target, properties, {
    writable: false,
    configurable: false,
    enumerable: options === null || options === void 0 ? void 0 : options.enumerable
  });
}

export { defineConstant, defineConstants, defineGetter, defineLazyConstant, defineLazyProperty, defineProperties, defineProperty, definePrototypeConstant, definePrototypeGetter, definePrototypeLazyConstant, definePrototypeLazyProperty, definePrototypeProperty, definePrototypeSetter, defineSetter };
//# sourceMappingURL=index-node12-dev.mjs.map
