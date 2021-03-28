/* eslint-disable max-lines */
export interface DefinePropertyOptions {
  configurable?: boolean;
  enumerable?: boolean;
  writable?: boolean;
}

export interface EnumerableOptions {
  enumerable?: boolean;
}

export interface ConfigurableEnumerableOptions {
  configurable?: boolean;
  enumerable?: boolean;
}

/**
 * @param {Object} target
 * @param {string} property name of the property
 * @param {*} value value
 * @param {Object} [options]
 * @param {boolean} [options.writable=true]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 */
export function defineProperty<T, P extends string, V>(
  target: T,
  property: P,
  value: V,
  options?: DefinePropertyOptions,
): (T & { [K in P]: V }) | any {
  Object.defineProperty(target, property, {
    value,
    writable: options?.writable !== false,
    configurable: options?.configurable !== false,
    enumerable: options?.enumerable,
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
export function defineConstant<T, P extends string, V>(
  target: T,
  property: P,
  value: V,
  options?: EnumerableOptions,
): (T & { readonly [K in P]: V }) | any {
  Object.defineProperty(target, property, {
    value,
    writable: false,
    configurable: false,
    enumerable: options?.enumerable,
  });
  return target;
}

export type Getter<V> = () => V;

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
export function defineGetter<T, P extends string, V>(
  target: T,
  property: P,
  getter: Getter<V>,
  options?: ConfigurableEnumerableOptions,
): (T & { readonly [K in P]: V }) | any {
  Object.defineProperty(target, property, {
    get: getter,
    configurable: options?.configurable !== false,
    enumerable: options?.enumerable,
  });
  return target;
}

export type Setter<T, V> = (value: T) => V;

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
export function defineSetter<T, P extends string, V>(
  target: T,
  property: P,
  setter: Setter<any, V>,
  options?: ConfigurableEnumerableOptions,
): (T & { [K in P]?: V }) | any {
  Object.defineProperty(target, property, {
    set: setter,
    configurable: options?.configurable !== false,
    enumerable: options?.enumerable,
  });
  return target;
}

export type LazyCallback<V> = () => V;

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
export function defineLazyProperty<T, P extends string, V>(
  target: T,
  property: P,
  callback: LazyCallback<V>,
  options?: DefinePropertyOptions,
): (T & { [K in P]: V }) | any {
  defineGetter(
    target,
    property,
    function (this: any): V {
      const value = callback.call(this);
      defineProperty(this, property, value, options);
      return value;
    },
    {
      configurable: true,
      enumerable: options?.enumerable,
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
export function defineLazyConstant<T, P extends string, V>(
  target: T,
  property: P,
  callback: LazyCallback<V>,
  options?: EnumerableOptions,
): (T & { readonly [K in P]: V }) | any {
  defineGetter(
    target,
    property,
    function (this: any): V {
      const value = callback.call(this);
      defineConstant(this, property, value, options);
      return value;
    },
    {
      configurable: true,
      enumerable: options?.enumerable,
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
export function definePrototypeProperty<
  T extends { prototype: unknown },
  P extends string,
  V
>(
  Class: T,
  property: P,
  value: V,
  options?: DefinePropertyOptions,
): (T & { [K in P]: V }) | any {
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
export function definePrototypeConstant<
  T extends { prototype: unknown },
  P extends string,
  V
>(
  Class: T,
  property: P,
  value: V,
  options?: EnumerableOptions,
): (T & { readonly [K in P]: V }) | any {
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
export function definePrototypeGetter<
  T extends { prototype: unknown },
  P extends string,
  V
>(
  Class: T,
  property: P,
  getter: Getter<V>,
  options?: ConfigurableEnumerableOptions,
): (T & { [K in P]: V }) | any {
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
export function definePrototypeSetter<
  T extends { prototype: unknown },
  P extends string,
  V
>(
  Class: T,
  property: P,
  setter: Setter<any, V>,
  options?: ConfigurableEnumerableOptions,
): (T & { [K in P]?: V }) | any {
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
export function definePrototypeLazyProperty<
  T extends { prototype: unknown },
  P extends string,
  V
>(
  Class: T,
  property: P,
  callback: LazyCallback<V>,
  options?: DefinePropertyOptions,
): (T & { [K in P]: V }) | any {
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
export function definePrototypeLazyConstant<
  T extends { prototype: unknown },
  P extends string,
  V
>(
  Class: T,
  property: P,
  callback: LazyCallback<V>,
  options?: EnumerableOptions,
): (T & { readonly [K in P]: V }) | any {
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
export function defineProperties<T, P extends { [prop: string]: any }>(
  target: T,
  properties?: P,
  options?: DefinePropertyOptions,
): T | (T & P) | any {
  if (!properties) {
    return target;
  }

  const optionsObject: DefinePropertyOptions = {
    writable: options?.writable !== false,
    configurable: options?.configurable !== false,
    enumerable: !!options?.enumerable,
  };

  Object.keys(properties).forEach((key: string) => {
    Object.defineProperty(target, key, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
export function defineConstants<T, P>(
  target: T,
  properties?: P,
  options?: EnumerableOptions,
): T & Readonly<P> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return defineProperties(target, properties, {
    writable: false,
    configurable: false,
    enumerable: options?.enumerable,
  });
}
