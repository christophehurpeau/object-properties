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
export declare function defineProperty<T, P extends string, V>(target: T, property: P, value: V, options?: DefinePropertyOptions): any | (Record<P, V> & T);
/**
 *
 * @param {Object} target
 * @param {string} property name of the property
 * @param {*} value value
 * @param {Object} [options]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
export declare function defineConstant<T, P extends string, V>(target: T, property: P, value: V, options?: EnumerableOptions): any | (Readonly<Record<P, V>> & T);
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
export declare function defineGetter<T, P extends string, V>(target: T, property: P, getter: Getter<V>, options?: ConfigurableEnumerableOptions): any | (Readonly<Record<P, V>> & T);
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
export declare function defineSetter<T, P extends string, V>(target: T, property: P, setter: Setter<any, V>, options?: ConfigurableEnumerableOptions): any | (Partial<Record<P, V>> & T);
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
export declare function defineLazyProperty<T, P extends string, V>(target: T, property: P, callback: LazyCallback<V>, options?: DefinePropertyOptions): any | (Record<P, V> & T);
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
export declare function defineLazyConstant<T, P extends string, V>(target: T, property: P, callback: LazyCallback<V>, options?: EnumerableOptions): any | (Readonly<Record<P, V>> & T);
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
export declare function definePrototypeProperty<T extends {
    prototype: unknown;
}, P extends string, V>(Class: T, property: P, value: V, options?: DefinePropertyOptions): any | (Record<P, V> & T);
/**
 *
 * @param {Function} Class
 * @param {string} property name of the property
 * @param {*} value value
 * @param {Object} [options]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} Class
 */
export declare function definePrototypeConstant<T extends {
    prototype: unknown;
}, P extends string, V>(Class: T, property: P, value: V, options?: EnumerableOptions): any | (Readonly<Record<P, V>> & T);
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
export declare function definePrototypeGetter<T extends {
    prototype: unknown;
}, P extends string, V>(Class: T, property: P, getter: Getter<V>, options?: ConfigurableEnumerableOptions): any | (Record<P, V> & T);
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
export declare function definePrototypeSetter<T extends {
    prototype: unknown;
}, P extends string, V>(Class: T, property: P, setter: Setter<any, V>, options?: ConfigurableEnumerableOptions): any | (Partial<Record<P, V>> & T);
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
export declare function definePrototypeLazyProperty<T extends {
    prototype: unknown;
}, P extends string, V>(Class: T, property: P, callback: LazyCallback<V>, options?: DefinePropertyOptions): any | (Record<P, V> & T);
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
export declare function definePrototypeLazyConstant<T extends {
    prototype: unknown;
}, P extends string, V>(Class: T, property: P, callback: LazyCallback<V>, options?: EnumerableOptions): any | (Readonly<Record<P, V>> & T);
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
export declare function defineProperties<T, P extends Record<string, any>>(target: T, properties?: P, options?: DefinePropertyOptions): T | any | (P & T);
/**
 * Shortcut for Object.defineProperties
 *
 * @param {Object} target
 * @param {Object} [properties]
 * @param {Object} [options]
 * @param {boolean} [options.enumerable=false]
 * @return {Object} target
 */
export declare function defineConstants<T, P extends Record<string, any>>(target: T, properties?: P, options?: EnumerableOptions): Readonly<P> & T;
//# sourceMappingURL=index.d.ts.map