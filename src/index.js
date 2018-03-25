/* eslint-disable max-lines, flowtype/no-weak-types */

type DefinePropertyOptions = {|
  configurable?: boolean,
  enumerable?: boolean,
  writable?: boolean,
|};

type EnumerableOptions = {|
  enumerable?: boolean,
|};

type ConfigurableEnumerableOptions = {|
  configurable?: boolean,
  enumerable?: boolean,
|};

/**
 * @param {Object} target
 * @param {string} property name of the property
 * @param {*} value value
 * @param {Object} [options]
 * @param {boolean} [options.writable=true]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 */
export function defineProperty(
  target: Object,
  property: string,
  value: any,
  options: ?DefinePropertyOptions,
): Object {
  Object.defineProperty(target, property, {
    value,
    writable: (options && options.writable) !== false,
    configurable: (options && options.configurable) !== false,
    enumerable: options && options.enumerable,
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
export function defineConstant(
  target: Object,
  property: string,
  value: any,
  options: ?EnumerableOptions,
): Object {
  Object.defineProperty(target, property, {
    value,
    writable: false,
    configurable: false,
    enumerable: options && options.enumerable,
  });
  return target;
}

type Getter = () => any;

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
export function defineGetter(
  target: Object,
  property: string,
  getter: Getter,
  options: ?ConfigurableEnumerableOptions,
): Object {
  Object.defineProperty(target, property, {
    get: getter,
    configurable: (options && options.configurable) !== false,
    enumerable: options && options.enumerable,
  });
  return target;
}

type Setter = (value: any) => any;

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
export function defineSetter(
  target: Object,
  property: string,
  setter: Setter,
  options: ?ConfigurableEnumerableOptions,
): Object {
  Object.defineProperty(target, property, {
    set: setter,
    configurable: (options && options.configurable) !== false,
    enumerable: options && options.enumerable,
  });
  return target;
}

type LazyCallback = () => any;

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
export function defineLazyProperty(
  target: Object,
  property: string,
  callback: LazyCallback,
  options: ?DefinePropertyOptions,
): Object {
  defineGetter(
    target,
    property,
    function(): any {
      const value = callback.call(this);
      defineProperty(this, property, value, options);
      return value;
    },
    {
      configurable: true,
      enumerable: options && options.enumerable,
    },
  );
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
export function defineLazyConstant(
  target: Object,
  property: string,
  callback: LazyCallback,
  options: ?EnumerableOptions,
): Object {
  defineGetter(
    target,
    property,
    function(): any {
      const value = callback.call(this);
      defineConstant(this, property, value, options);
      return value;
    },
    {
      configurable: true,
      enumerable: options && options.enumerable,
    },
  );
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
export function definePrototypeProperty(
  Class: Function,
  property: string,
  value: any,
  options: ?DefinePropertyOptions,
): Function {
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
export function definePrototypeConstant(
  Class: Function,
  property: string,
  value: any,
  options: ?EnumerableOptions,
): Function {
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
export function definePrototypeGetter(
  Class: Function,
  property: string,
  getter: Getter,
  options: ?ConfigurableEnumerableOptions,
): Function {
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
export function definePrototypeSetter(
  Class: Function,
  property: string,
  setter: Setter,
  options: ?ConfigurableEnumerableOptions,
): Function {
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
export function definePrototypeLazyProperty(
  Class: Function,
  property: string,
  callback: LazyCallback,
  options: ?DefinePropertyOptions,
): Function {
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
export function definePrototypeLazyConstant(
  Class: Function,
  property: string,
  callback: LazyCallback,
  options: ?EnumerableOptions,
): Function {
  defineLazyConstant(Class.prototype, property, callback, options);
  return Class;
}

type Properties = { [property: string]: any };

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
export function defineProperties(
  target: Object,
  properties: ?Properties,
  options: ?DefinePropertyOptions,
): Object {
  if (!properties) {
    return target;
  }

  const optionsObject: DefinePropertyOptions = {
    writable: (options && options.writable) !== false,
    configurable: (options && options.configurable) !== false,
    enumerable: !!(options && options.enumerable),
  };

  Object.keys(properties).forEach((key: string) => {
    Object.defineProperty(target, key, {
      value: properties[key],
      writable: optionsObject.writable,
      configurable: optionsObject.configurable,
      enumerable: optionsObject.enumerable,
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
export function defineConstants(
  target: Object,
  properties: ?Properties,
  options: ?EnumerableOptions,
): Object {
  return defineProperties(target, properties, {
    writable: false,
    configurable: false,
    enumerable: options && options.enumerable,
  });
}
