/* jshint maxlen: 200 */
/* global test */

import { strictEqual, throws } from 'proclaim';
import {
    defineProperty,
    defineConstant,
    defineGetter,
    defineSetter,
    defineLazyProperty,
    defineLazyConstant,
    defineProperties,
    defineConstants,
} from '../../lib/';

test('defineProperty should work', () => {
    let o = {};
    let res = defineProperty(o, 'a', 1);
    strictEqual(res, o);
    strictEqual(res.a, 1);
});

test('defineConstant should work', () => {
    let o = {};
    let res = defineConstant(o, 'a', 1);
    strictEqual(res, o);
    strictEqual(res.a, 1);

    throws(() => defineConstant(o, 'a', 2), 'Cannot redefine property: a');
});

test('defineGetter should work', () => {
    let o = {};
    let res = defineGetter(o, 'a', () => 1);
    strictEqual(res, o);
    strictEqual(res.a, 1);
});

test('defineSetter should work', () => {
    let o = {};
    let value;
    let res = defineSetter(o, 'a', (v) => value = v * 2);
    strictEqual(res, o);
    res.a = 2;
    strictEqual(value, 4);
});

test('defineLazyProperty should work', () => {
    let o = {};
    let getterCalledTimes = 0;
    let res = defineLazyProperty(o, 'a', () => ++getterCalledTimes);
    strictEqual(res, o);
    strictEqual(res.a, 1);
    strictEqual(res.a, 1);
    strictEqual(res.a, 1);
    strictEqual(getterCalledTimes, 1);
    res.a = 2;
    strictEqual(res.a, 2);
    strictEqual(getterCalledTimes, 1);
});

test('defineLazyConstant should work', () => {
    let o = {};
    let getterCalledTimes = 0;
    let res = defineLazyConstant(o, 'a', () => ++getterCalledTimes);
    strictEqual(res, o);
    strictEqual(res.a, 1);
    strictEqual(res.a, 1);
    strictEqual(res.a, 1);
    strictEqual(getterCalledTimes, 1);
    throws(() => defineConstant(o, 'a', 2), 'Cannot redefine property: a');
});

test('defineProperties should work', () => {
    let o = {};
    let res = defineProperties(o, {
        a: 1,
        b: 2,
    });
    strictEqual(res, o);
    strictEqual(res.a, 1);
    strictEqual(res.b, 2);

    res.a = 0;
    strictEqual(res.a, 0);
});

test('defineProperties should work when properties are empty', () => {
    let o = {};
    let res = defineProperties(o);
    strictEqual(res, o);
});

test('defineConstants should work', () => {
    let o = {};
    let res = defineConstants(o, {
        a: 1,
        b: 2,
    });

    strictEqual(res, o);
    strictEqual(res.a, 1);
    strictEqual(res.b, 2);

    throws(() => defineConstant(o, 'a', 2), 'Cannot redefine property: a');
});
