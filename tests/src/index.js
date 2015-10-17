/* jshint maxlen: 200 */
/* global test */

import { strictEqual, throws } from 'proclaim';
import { defineProperty, defineConstant, defineGetter, defineSetter, defineProperties } from '../../lib/';

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

test('defineProperties should work', () => {
    let o = {};
    let res = defineProperties(o, {
        a: 1,
        b: 2,
    });
    strictEqual(res, o);
    strictEqual(res.a, 1);
    strictEqual(res.b, 2);
});

test('defineProperties should work when properties are empty', () => {
    let o = {};
    let res = defineProperties(o);
    strictEqual(res, o);
});
