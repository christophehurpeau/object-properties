'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var t = _interopDefault(require('flow-runtime'));

/* eslint-disable max-lines, flowtype/no-weak-types */

var DefinePropertyOptions = t.type("DefinePropertyOptions", t.exactObject(t.property("configurable", t.boolean(), true), t.property("enumerable", t.boolean(), true), t.property("writable", t.boolean(), true)));
var EnumerableOptions = t.type("EnumerableOptions", t.exactObject(t.property("enumerable", t.boolean(), true)));
var ConfigurableEnumerableOptions = t.type("ConfigurableEnumerableOptions", t.exactObject(t.property("configurable", t.boolean(), true), t.property("enumerable", t.boolean(), true)));

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
  var T = t.typeParameter("T", t.object());

  var _targetType = t.flowInto(T);

  var _propertyType = t.string();

  var _valueType = t.any();

  var _optionsType = t.nullable(DefinePropertyOptions);

  var _returnType = t.return(T);

  t.param("target", _targetType).assert(target);
  t.param("property", _propertyType).assert(property);
  t.param("value", _valueType).assert(value);
  t.param("options", _optionsType).assert(options);

  Object.defineProperty(target, property, {
    value: value,
    writable: (options && options.writable) !== false,
    configurable: (options && options.configurable) !== false,
    enumerable: options && options.enumerable
  });
  return _returnType.assert(target);
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
  var T = t.typeParameter("T", t.object());

  var _targetType2 = t.flowInto(T);

  var _propertyType2 = t.string();

  var _valueType2 = t.any();

  var _optionsType2 = t.nullable(EnumerableOptions);

  var _returnType2 = t.return(T);

  t.param("target", _targetType2).assert(target);
  t.param("property", _propertyType2).assert(property);
  t.param("value", _valueType2).assert(value);
  t.param("options", _optionsType2).assert(options);

  Object.defineProperty(target, property, {
    value: value,
    writable: false,
    configurable: false,
    enumerable: options && options.enumerable
  });
  return _returnType2.assert(target);
}

var Getter = t.type("Getter", t.function(t.return(t.any())));

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
  var T = t.typeParameter("T", t.object());

  var _targetType3 = t.flowInto(T);

  var _propertyType3 = t.string();

  var _optionsType3 = t.nullable(ConfigurableEnumerableOptions);

  var _returnType3 = t.return(T);

  t.param("target", _targetType3).assert(target);
  t.param("property", _propertyType3).assert(property);
  t.param("getter", Getter).assert(getter);
  t.param("options", _optionsType3).assert(options);

  Object.defineProperty(target, property, {
    get: getter,
    configurable: (options && options.configurable) !== false,
    enumerable: options && options.enumerable
  });
  return _returnType3.assert(target);
}

var Setter = t.type("Setter", t.function(t.return(t.any())));

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
  var T = t.typeParameter("T", t.object());

  var _targetType4 = t.flowInto(T);

  var _propertyType4 = t.string();

  var _optionsType4 = t.nullable(ConfigurableEnumerableOptions);

  var _returnType4 = t.return(T);

  t.param("target", _targetType4).assert(target);
  t.param("property", _propertyType4).assert(property);
  t.param("setter", Setter).assert(setter);
  t.param("options", _optionsType4).assert(options);

  Object.defineProperty(target, property, {
    set: setter,
    configurable: (options && options.configurable) !== false,
    enumerable: options && options.enumerable
  });
  return _returnType4.assert(target);
}

var LazyCallback = t.type("LazyCallback", t.function(t.return(t.any())));

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
  var T = t.typeParameter("T", t.object());

  var _targetType5 = t.flowInto(T);

  var _propertyType5 = t.string();

  var _optionsType5 = t.nullable(DefinePropertyOptions);

  var _returnType5 = t.return(T);

  t.param("target", _targetType5).assert(target);
  t.param("property", _propertyType5).assert(property);
  t.param("callback", LazyCallback).assert(callback);
  t.param("options", _optionsType5).assert(options);

  defineGetter(target, property, function () {
    var _returnType6 = t.return(t.any());

    var value = callback.call(this);
    defineProperty(this, property, value, options);
    return _returnType6.assert(value);
  }, {
    configurable: true,
    enumerable: options && options.enumerable
  });
  return _returnType5.assert(target);
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
  var T = t.typeParameter("T", t.object());

  var _targetType6 = t.flowInto(T);

  var _propertyType6 = t.string();

  var _optionsType6 = t.nullable(EnumerableOptions);

  var _returnType7 = t.return(T);

  t.param("target", _targetType6).assert(target);
  t.param("property", _propertyType6).assert(property);
  t.param("callback", LazyCallback).assert(callback);
  t.param("options", _optionsType6).assert(options);

  defineGetter(target, property, function () {
    var _returnType8 = t.return(t.any());

    var value = callback.call(this);
    defineConstant(this, property, value, options);
    return _returnType8.assert(value);
  }, {
    configurable: true,
    enumerable: options && options.enumerable
  });
  return _returnType7.assert(target);
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
  var _ClassType = t.function();

  var _propertyType7 = t.string();

  var _valueType3 = t.any();

  var _optionsType7 = t.nullable(DefinePropertyOptions);

  var _returnType9 = t.return(t.function());

  t.param("Class", _ClassType).assert(Class);
  t.param("property", _propertyType7).assert(property);
  t.param("value", _valueType3).assert(value);
  t.param("options", _optionsType7).assert(options);

  defineProperty(Class.prototype, property, value, options);
  return _returnType9.assert(Class);
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
  var T = t.typeParameter("T");

  var _ClassType2 = t.flowInto(T);

  var _propertyType8 = t.string();

  var _valueType4 = t.any();

  var _optionsType8 = t.nullable(EnumerableOptions);

  var _returnType10 = t.return(T);

  t.param("Class", _ClassType2).assert(Class);
  t.param("property", _propertyType8).assert(property);
  t.param("value", _valueType4).assert(value);
  t.param("options", _optionsType8).assert(options);

  defineConstant(Class.prototype, property, value, options);
  return _returnType10.assert(Class);
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
  var T = t.typeParameter("T");

  var _ClassType3 = t.flowInto(T);

  var _propertyType9 = t.string();

  var _optionsType9 = t.nullable(ConfigurableEnumerableOptions);

  var _returnType11 = t.return(T);

  t.param("Class", _ClassType3).assert(Class);
  t.param("property", _propertyType9).assert(property);
  t.param("getter", Getter).assert(getter);
  t.param("options", _optionsType9).assert(options);

  defineGetter(Class.prototype, property, getter, options);
  return _returnType11.assert(Class);
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
  var T = t.typeParameter("T");

  var _ClassType4 = t.flowInto(T);

  var _propertyType10 = t.string();

  var _optionsType10 = t.nullable(ConfigurableEnumerableOptions);

  var _returnType12 = t.return(T);

  t.param("Class", _ClassType4).assert(Class);
  t.param("property", _propertyType10).assert(property);
  t.param("setter", Setter).assert(setter);
  t.param("options", _optionsType10).assert(options);

  defineSetter(Class.prototype, property, setter, options);
  return _returnType12.assert(Class);
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
  var T = t.typeParameter("T");

  var _ClassType5 = t.flowInto(T);

  var _propertyType11 = t.string();

  var _optionsType11 = t.nullable(DefinePropertyOptions);

  var _returnType13 = t.return(T);

  t.param("Class", _ClassType5).assert(Class);
  t.param("property", _propertyType11).assert(property);
  t.param("callback", LazyCallback).assert(callback);
  t.param("options", _optionsType11).assert(options);

  defineLazyProperty(Class.prototype, property, callback, options);
  return _returnType13.assert(Class);
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
  var T = t.typeParameter("T");

  var _ClassType6 = t.flowInto(T);

  var _propertyType12 = t.string();

  var _optionsType12 = t.nullable(EnumerableOptions);

  var _returnType14 = t.return(T);

  t.param("Class", _ClassType6).assert(Class);
  t.param("property", _propertyType12).assert(property);
  t.param("callback", LazyCallback).assert(callback);
  t.param("options", _optionsType12).assert(options);

  defineLazyConstant(Class.prototype, property, callback, options);
  return _returnType14.assert(Class);
}

var Properties = t.type("Properties", t.object(t.indexer("property", t.string(), t.any())));

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
  var T = t.typeParameter("T", t.object());

  var _targetType7 = t.flowInto(T);

  var _propertiesType = t.nullable(Properties);

  var _optionsType13 = t.nullable(DefinePropertyOptions);

  var _returnType15 = t.return(T);

  t.param("target", _targetType7).assert(target);
  t.param("properties", _propertiesType).assert(properties);
  t.param("options", _optionsType13).assert(options);

  if (!properties) {
    return _returnType15.assert(target);
  }

  var optionsObject = DefinePropertyOptions.assert({
    writable: (options && options.writable) !== false,
    configurable: (options && options.configurable) !== false,
    enumerable: !!(options && options.enumerable)
  });

  Object.keys(properties).forEach(function (key) {
    var _keyType = t.string();

    t.param("key", _keyType).assert(key);

    Object.defineProperty(target, key, {
      value: properties[key],
      writable: optionsObject.writable,
      configurable: optionsObject.configurable,
      enumerable: optionsObject.enumerable
    });
  });
  return _returnType15.assert(target);
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
  var T = t.typeParameter("T", t.object());

  var _targetType8 = t.flowInto(T);

  var _propertiesType2 = t.nullable(Properties);

  var _optionsType14 = t.nullable(EnumerableOptions);

  var _returnType16 = t.return(T);

  t.param("target", _targetType8).assert(target);
  t.param("properties", _propertiesType2).assert(properties);
  t.param("options", _optionsType14).assert(options);

  return _returnType16.assert(defineProperties(target, properties, {
    writable: false,
    configurable: false,
    enumerable: options && options.enumerable
  }));
}

exports.defineProperty = defineProperty;
exports.defineConstant = defineConstant;
exports.defineGetter = defineGetter;
exports.defineSetter = defineSetter;
exports.defineLazyProperty = defineLazyProperty;
exports.defineLazyConstant = defineLazyConstant;
exports.definePrototypeProperty = definePrototypeProperty;
exports.definePrototypeConstant = definePrototypeConstant;
exports.definePrototypeGetter = definePrototypeGetter;
exports.definePrototypeSetter = definePrototypeSetter;
exports.definePrototypeLazyProperty = definePrototypeLazyProperty;
exports.definePrototypeLazyConstant = definePrototypeLazyConstant;
exports.defineProperties = defineProperties;
exports.defineConstants = defineConstants;
//# sourceMappingURL=index-browser-dev.cjs.js.map
