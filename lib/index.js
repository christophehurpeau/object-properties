/**
 * Shortcut for Object.defineProperty
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
"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property").default;

var _Object$keys = require("babel-runtime/core-js/object/keys").default;

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineProperty = defineProperty;
exports.defineConstant = defineConstant;
exports.defineGetter = defineGetter;
exports.defineSetter = defineSetter;
exports.defineLazyProperty = defineLazyProperty;
exports.defineLazyConstant = defineLazyConstant;
exports.defineProperties = defineProperties;
exports.defineConstants = defineConstants;
/** @function 
* @param target 
* @param property 
* @param value 
* @param options */
function defineProperty(target, property, value, options) {
    _Object$defineProperty(target, property, {
        value: value,
        writable: (options && options.writable) !== false,
        configurable: (options && options.configurable) !== false,
        enumerable: options && options.enumerable
    });
    return target;
}

/**
 * Shortcut for Object.defineProperty
 *
 * @param {Object} target
 * @param {string} property name of the property
 * @param {*} value value
 * @param {Object} [options]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
/** @function 
* @param target 
* @param property 
* @param value 
* @param options */
function defineConstant(target, property, value, options) {
    _Object$defineProperty(target, property, {
        value: value,
        writable: false,
        configurable: false,
        enumerable: options && options.enumerable
    });
    return target;
}

/**
 * Shortcut for Object.defineProperty
 *
 * @param {Object} target
 * @param {string} property name of the property
 * @param {Function} getter getter function
 * @param {Object} [options]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
/** @function 
* @param target 
* @param property 
* @param getter 
* @param options */
function defineGetter(target, property, getter, options) {
    _Object$defineProperty(target, property, {
        get: getter,
        configurable: (options && options.configurable) !== false,
        enumerable: options && options.enumerable
    });
    return target;
}

/**
 * Shortcut for Object.defineProperty
 *
 * @param {Object} target
 * @param {string} property name of the property
 * @param {Function} setter setter function
 * @param {Object} [options]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
/** @function 
* @param target 
* @param property 
* @param setter 
* @param options */
function defineSetter(target, property, setter, options) {
    _Object$defineProperty(target, property, {
        set: setter,
        configurable: (options && options.configurable) !== false,
        enumerable: options && options.enumerable
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
/** @function 
* @param target 
* @param property 
* @param callback 
* @param options */
function defineLazyProperty(target, property, callback, options) {
    var _this = this;

    defineGetter(target, property, function () {
        const value = callback.call(_this);
        defineProperty(target, property, value, options);
        return value;
    }, {
        configurable: true,
        enumerable: options && options.enumerable
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
/** @function 
* @param target 
* @param property 
* @param callback 
* @param options */
function defineLazyConstant(target, property, callback, options) {
    var _this2 = this;

    defineGetter(target, property, function () {
        const value = callback.call(_this2);
        defineConstant(target, property, value, options);
        return value;
    }, {
        configurable: true,
        enumerable: options && options.enumerable
    });
    return target;
}

/**
 * Shortcut for Object.defineProperties
 *
 * @param {Object} target
 * @param {Object} properties
 * @param {Object} [options]
 * @param {boolean} [options.writable=true]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
/** @function 
* @param target 
* @param properties 
* @param options */
function defineProperties(target, properties, options) {
    if (!properties) {
        return target;
    }

    options = {
        writable: (options && options.writable) !== false,
        configurable: (options && options.configurable) !== false,
        enumerable: !!(options && options.enumerable)
    };
    _Object$keys(properties).forEach(function (key) {
        _Object$defineProperty(target, key, {
            value: properties[key],
            writable: options.writable,
            configurable: options.configurable,
            enumerable: options.enumerable
        });
    });
    return target;
}

/**
 * Shortcut for Object.defineProperties
 *
 * @param {Object} target
 * @param {Object} properties
 * @param {Object} [options]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
/** @function 
* @param target 
* @param properties 
* @param options */
function defineConstants(target, properties, options) {
    return defineProperties(target, properties, {
        writable: false,
        configurable: false,
        enumerable: options && options.enumerable
    });
}
//# sourceMappingURL=index.js.map