"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
/**
 * @function
 * @param target
 * @param property
 * @param value
 * @param options
*/ /**
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
function defineProperty(target, property, value, options) {
    Object.defineProperty(target, property, {
        value: value,
        writable: (options && options.writable) !== false,
        configurable: (options && options.configurable) !== false,
        enumerable: options && options.enumerable
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
/**
 * @function
 * @param target
 * @param property
 * @param value
 * @param options
*/function defineConstant(target, property, value, options) {
    Object.defineProperty(target, property, {
        value: value,
        writable: false,
        configurable: false,
        enumerable: options && options.enumerable
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
/**
 * @function
 * @param target
 * @param property
 * @param getter
 * @param options
*/function defineGetter(target, property, getter, options) {
    Object.defineProperty(target, property, {
        get: getter,
        configurable: (options && options.configurable) !== false,
        enumerable: options && options.enumerable
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
/**
 * @function
 * @param target
 * @param property
 * @param setter
 * @param options
*/function defineSetter(target, property, setter, options) {
    Object.defineProperty(target, property, {
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
/**
 * @function
 * @param target
 * @param property
 * @param callback
 * @param options
*/function defineLazyProperty(target, property, callback, options) {
    defineGetter(target, property, /**
                                    * @function
                                   */function () {
        const value = callback.call(this);
        defineProperty(this, property, value, options);
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
/**
 * @function
 * @param target
 * @param property
 * @param callback
 * @param options
*/function defineLazyConstant(target, property, callback, options) {
    defineGetter(target, property, /**
                                    * @function
                                   */function () {
        const value = callback.call(this);
        defineConstant(this, property, value, options);
        return value;
    }, {
        configurable: true,
        enumerable: options && options.enumerable
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
/**
 * @function
 * @param Class
 * @param property
 * @param value
 * @param options
*/function definePrototypeProperty(Class, property, value, options) {
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
/**
 * @function
 * @param Class
 * @param property
 * @param value
 * @param options
*/function definePrototypeConstant(Class, property, value, options) {
    defineConstant(Class.prototype, property, value, options);
    return Class;
}

/**
 *
 * @param {Function} Class
 * @param {Function} getter getter function
 * @param {Object} [options]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} Class
 */
/**
 * @function
 * @param Class
 * @param property
 * @param getter
 * @param options
*/function definePrototypeGetter(Class, property, getter, options) {
    defineGetter(Class.prototype, property, getter, options);
    return Class;
}

/**
 *
 * @param {Function} Class
 * @param {Function} setter setter function
 * @param {Object} [options]
 * @param {boolean} [options.configurable=true]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} Class
 */
/**
 * @function
 * @param Class
 * @param property
 * @param setter
 * @param options
*/function definePrototypeSetter(Class, property, setter, options) {
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
/**
 * @function
 * @param Class
 * @param property
 * @param callback
 * @param options
*/function definePrototypeLazyProperty(Class, property, callback, options) {
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
/**
 * @function
 * @param Class
 * @param property
 * @param callback
 * @param options
*/function definePrototypeLazyConstant(Class, property, callback, options) {
    defineLazyConstant(Class.prototype, property, callback, options);
    return Class;
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
/**
 * @function
 * @param target
 * @param properties
 * @param options
*/function defineProperties(target, properties, options) {
    if (!properties) {
        return target;
    }

    options = {
        writable: (options && options.writable) !== false,
        configurable: (options && options.configurable) !== false,
        enumerable: !!(options && options.enumerable)
    };
    Object.keys(properties).forEach(key => {
        Object.defineProperty(target, key, {
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
/**
 * @function
 * @param target
 * @param properties
 * @param options
*/function defineConstants(target, properties, options) {
    return defineProperties(target, properties, {
        writable: false,
        configurable: false,
        enumerable: options && options.enumerable
    });
}
//# sourceMappingURL=index.js.map