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
export function defineProperty(target, property, value, options) {
    Object.defineProperty(target, property, {
        value: value,
        writable: (options && options.writable) !== false,
        configurable: (options && options.configurable) !== false,
        enumerable: !!(options && options.enumerable),
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
export function defineConstant(target, property, value, options) {
    Object.defineProperty(target, property, {
        value: value,
        writable: false,
        configurable: false,
        enumerable: !!(options && options.enumerable),
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
export function defineGetter(target, property, getter, options) {
    Object.defineProperty(target, property, {
        get: getter,
        configurable: (options && options.configurable) !== false,
        enumerable: !!(options && options.enumerable),
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
export function defineSetter(target, property, setter, options) {
    Object.defineProperty(target, property, {
        set: setter,
        configurable: (options && options.configurable) !== false,
        enumerable: !!(options && options.enumerable),
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
export function defineProperties(target, properties, options) {
    if (!properties) {
        return target;
    }

    options = {
        writable: (options && options.writable) !== false,
        configurable: (options && options.configurable) !== false,
        enumerable: !!(options && options.enumerable),
    };
    Object.keys(properties).forEach((key) => {
        Object.defineProperty(target, key, {
            value: properties[key],
            writable: options.writable,
            configurable: options.configurable,
            enumerable: options.enumerable,
        });
    });
    return target;
}
