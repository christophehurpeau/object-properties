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
 * Defines a property on an object with optional configuration
 *
 * @example
 * const obj = {};
 * defineProperty(obj, 'name', 'John');
 * console.log(obj.name); // 'John'
 *
 * // With options
 * defineProperty(obj, 'age', 25, { writable: false });
 * obj.age = 30; // Will not change the value
 * console.log(obj.age); // 25
 *
 * @param {Object} target
 * @param {string} property name of the property
 * @param {*} value value
 * @param {Object} [options]
 * @param {boolean} [options.writable=true]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
export function defineProperty<T, P extends string, V>(
  target: T,
  property: P,
  value: V,
  options?: DefinePropertyOptions,
): any | (Record<P, V> & T) {
  Object.defineProperty(target, property, {
    value,
    writable: options?.writable !== false,
    configurable: options?.configurable !== false,
    enumerable: options?.enumerable,
  });
  return target;
}

/**
 * Defines a non-writable and non-configurable property
 *
 * @example
 * const obj = {};
 * defineConstant(obj, 'PI', 3.14);
 * obj.PI = 3.15; // Will not change the value
 * console.log(obj.PI); // 3.14
 *
 * // With enumerable option
 * defineConstant(obj, 'E', 2.718, { enumerable: true });
 * console.log(Object.keys(obj)); // ['E']
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
): any | (Readonly<Record<P, V>> & T) {
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
 * Defines a getter property
 *
 * @example
 * const person = { firstName: 'John', lastName: 'Doe' };
 * defineGetter(person, 'fullName', function() {
 *   return `${this.firstName} ${this.lastName}`;
 * });
 * console.log(person.fullName); // 'John Doe'
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
): any | (Readonly<Record<P, V>> & T) {
  Object.defineProperty(target, property, {
    get: getter,
    configurable: options?.configurable !== false,
    enumerable: options?.enumerable,
  });
  return target;
}

export type Setter<T, V> = (value: T) => V;

/**
 * Defines a setter property
 *
 * @example
 * const person = { };
 * defineSetter(person, 'age', function(value) {
 *   if (value < 0) throw new Error('Age cannot be negative');
 *   this._age = value;
 * });
 * person.age = 25; // Sets _age to 25
 * person.age = -1; // Throws error
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
): any | (Partial<Record<P, V>> & T) {
  Object.defineProperty(target, property, {
    set: setter,
    configurable: options?.configurable !== false,
    enumerable: options?.enumerable,
  });
  return target;
}

export type LazyCallback<V> = () => V;

/**
 * Defines a property that is initialized only when first accessed
 *
 * @example
 * const obj = {};
 * defineLazyProperty(obj, 'expensiveData', function() {
 *   return someExpensiveComputation();
 * });
 * // expensiveData is not computed until accessed
 * console.log(obj.expensiveData); // Computes and returns the value
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
): any | (Record<P, V> & T) {
  defineGetter(
    target,
    property,
    function (this: any): V {
      const value = callback.call(this);
      defineProperty(this, property, value, options);
      return value;
    },
    { configurable: true, enumerable: options?.enumerable },
  );
  return target;
}

/**
 * Defines a constant property that is initialized only when first accessed
 *
 * @example
 * const obj = {};
 * defineLazyConstant(obj, 'config', function() {
 *   return loadConfigurationFile();
 * });
 * // config is loaded only when first accessed
 * console.log(obj.config); // Loads and returns the config
 * obj.config = {}; // Will not change the value
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
): any | (Readonly<Record<P, V>> & T) {
  defineGetter(
    target,
    property,
    function (this: any): V {
      const value = callback.call(this);
      defineConstant(this, property, value, options);
      return value;
    },
    { configurable: true, enumerable: options?.enumerable },
  );
  return target;
}

/**
 * Defines a property on a class prototype
 *
 * @example
 * class Person {}
 * definePrototypeProperty(Person, 'species', 'human');
 * const person = new Person();
 * console.log(person.species); // 'human'
 *
 * @param {Function} Class
 * @param {string} property name of the property
 * @param {*} value value
 * @param {Object} [options]
 * @param {boolean} [options.writable=true]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
export function definePrototypeProperty<
  T extends { prototype: unknown },
  P extends string,
  V,
>(
  Class: T,
  property: P,
  value: V,
  options?: DefinePropertyOptions,
): any | (Record<P, V> & T) {
  defineProperty(Class.prototype, property, value, options);
  return Class;
}

/**
 * Defines a constant property on a class prototype
 *
 * @example
 * class ValidationRule {
 *   constructor(value) {
 *     this.value = value;
 *   }
 *
 *   validate() {
 *     return this.value <= this.MAX_LENGTH && this.value >= this.MIN_LENGTH;
 *   }
 * }
 * definePrototypeConstant(ValidationRule, 'MIN_LENGTH', 3);
 * definePrototypeConstant(ValidationRule, 'MAX_LENGTH', 50);
 *
 * const rule = new ValidationRule('hello');
 * console.log(rule.MIN_LENGTH); // 3
 * rule.MIN_LENGTH = 1; // Will not change the value
 *
 * @param {Function} Class
 * @param {string} property name of the property
 * @param {*} value value
 * @param {Object} [options]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
export function definePrototypeConstant<
  T extends { prototype: unknown },
  P extends string,
  V,
>(
  Class: T,
  property: P,
  value: V,
  options?: EnumerableOptions,
): any | (Readonly<Record<P, V>> & T) {
  defineConstant(Class.prototype, property, value, options);
  return Class;
}

/**
 * Defines a getter on a class prototype
 *
 * @example
 * class Rectangle {
 *   constructor(width, height) {
 *     this.width = width;
 *     this.height = height;
 *   }
 * }
 * definePrototypeGetter(Rectangle, 'area', function() {
 *   return this.width * this.height;
 * });
 * const rect = new Rectangle(5, 3);
 * console.log(rect.area); // 15
 *
 * @param {Function} Class
 * @param {string} property name of the property
 * @param {Function} getter getter function
 * @param {Object} [options]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
export function definePrototypeGetter<
  T extends { prototype: unknown },
  P extends string,
  V,
>(
  Class: T,
  property: P,
  getter: Getter<V>,
  options?: ConfigurableEnumerableOptions,
): any | (Record<P, V> & T) {
  defineGetter(Class.prototype, property, getter, options);
  return Class;
}

/**
 * Defines a setter on a class prototype
 *
 * @example
 * class Circle {
 *   constructor() {
 *     this._radius = 0;
 *   }
 * }
 * definePrototypeSetter(Circle, 'radius', function(value) {
 *   if (value < 0) throw new Error('Radius cannot be negative');
 *   this._radius = value;
 * });
 * const circle = new Circle();
 * circle.radius = 5; // Sets _radius to 5
 *
 * @param {Function} Class
 * @param {string} property name of the property
 * @param {Function} setter setter function
 * @param {Object} [options]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
export function definePrototypeSetter<
  T extends { prototype: unknown },
  P extends string,
  V,
>(
  Class: T,
  property: P,
  setter: Setter<any, V>,
  options?: ConfigurableEnumerableOptions,
): any | (Partial<Record<P, V>> & T) {
  defineSetter(Class.prototype, property, setter, options);
  return Class;
}

/**
 * Defines a lazy property on a class prototype
 *
 * @example
 * class User {
 *   constructor(id) {
 *     this.id = id;
 *   }
 * }
 * definePrototypeLazyProperty(User, 'details', function() {
 *   return fetchUserDetails(this.id);
 * });
 * const user = new User(1);
 * // details are fetched only when accessed
 * console.log(user.details); // Fetches and returns user details
 *
 * @param {Function} Class
 * @param {string} property name of the property
 * @param {Function} callback function called when the property is accessed the first time
 * @param {Object} [options]
 * @param {boolean} [options.writable=true]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
export function definePrototypeLazyProperty<
  T extends { prototype: unknown },
  P extends string,
  V,
>(
  Class: T,
  property: P,
  callback: LazyCallback<V>,
  options?: DefinePropertyOptions,
): any | (Record<P, V> & T) {
  defineLazyProperty(Class.prototype, property, callback, options);
  return Class;
}

/**
 * Defines a lazy constant on a class prototype
 *
 * @example
 * class Database {
 *   constructor(url) {
 *     this.url = url;
 *   }
 * }
 * definePrototypeLazyConstant(Database, 'connection', function() {
 *   return createDatabaseConnection(this.url);
 * });
 * const db = new Database('mongodb://localhost');
 * // Connection is established only when first accessed
 * console.log(db.connection);
 *
 * @param {Function} Class
 * @param {string} property name of the property
 * @param {Function} callback function called when the property is accessed the first time
 * @param {Object} [options]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
export function definePrototypeLazyConstant<
  T extends { prototype: unknown },
  P extends string,
  V,
>(
  Class: T,
  property: P,
  callback: LazyCallback<V>,
  options?: EnumerableOptions,
): any | (Readonly<Record<P, V>> & T) {
  defineLazyConstant(Class.prototype, property, callback, options);
  return Class;
}

/**
 * Defines multiple properties on an object at once
 *
 * @example
 * const person = {};
 * defineProperties(person, {
 *   name: 'John',
 *   age: 30,
 *   city: 'New York'
 * });
 * console.log(person.name); // 'John'
 * console.log(person.age); // 30
 *
 * // With options
 * defineProperties(person, {
 *   country: 'USA',
 *   zipCode: '10001'
 * }, { enumerable: true });
 *
 * @param {Object} target
 * @param {Object} [properties]
 * @param {Object} [options]
 * @param {boolean} [options.writable=true]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
export function defineProperties<T, P extends Record<string, any>>(
  target: T,
  properties?: P,
  options?: DefinePropertyOptions,
): T | any | (P & T) {
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
      value: properties[key],
      writable: optionsObject.writable,
      configurable: optionsObject.configurable,
      enumerable: optionsObject.enumerable,
    });
  });
  return target;
}

/**
 * Defines multiple constant properties on an object at once
 *
 * @example
 * const config = {};
 * defineConstants(config, {
 *   API_URL: 'https://api.example.com',
 *   MAX_RETRIES: 3,
 *   TIMEOUT: 5000
 * });
 *
 * config.API_URL = 'new-url'; // Will not change the value
 * console.log(config.API_URL); // 'https://api.example.com'
 *
 * @param {Object} target
 * @param {Object} [properties]
 * @param {Object} [options]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
export function defineConstants<T, P extends Record<string, any>>(
  target: T,
  properties?: P,
  options?: EnumerableOptions,
): Readonly<P> & T {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return defineProperties(target, properties, {
    writable: false,
    configurable: false,
    enumerable: options?.enumerable,
  });
}
