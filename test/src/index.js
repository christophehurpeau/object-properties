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
    definePrototypeProperty,
    definePrototypeConstant,
    definePrototypeGetter,
    definePrototypeSetter,
    definePrototypeLazyProperty,
    definePrototypeLazyConstant,
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
    let res = defineLazyProperty(o, 'a', function () {
        strictEqual(this, o);
        return ++getterCalledTimes;
    });
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
    let res = defineLazyConstant(o, 'a', function () {
        strictEqual(this, o);
        return ++getterCalledTimes;
    });
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

test('definePrototypeProperty should work', () => {
    class O {}
    let res = definePrototypeProperty(O, 'a', 1);
    strictEqual(res, O);
    let o = new O();
    strictEqual(o.a, 1);
    O.prototype.a = 2;
    strictEqual(o.a, 2);
});

test('definePrototypeConstant should work', () => {
    class O {}
    let res = definePrototypeConstant(O, 'a', 1);
    strictEqual(res, O);
    let o = new O();
    strictEqual(o.a, 1);
    throws(() => definePrototypeConstant(O, 'a', 2), 'Cannot redefine property: a');
});

test('definePrototypeGetter should work', () => {
    class O {}
    let res = definePrototypeGetter(O, 'a', () => 1);
    strictEqual(res, O);
    let o = new O();
    strictEqual(o.a, 1);
});

test('definePrototypeSetter should work', () => {
    class O {}
    let value;
    let res = definePrototypeSetter(O, 'a', (v) => value = v * 2);
    strictEqual(res, O);
    let o = new O();
    o.a = 2;
    strictEqual(value, 4);
});

test('definePrototypeLazyProperty should work', () => {
    class O {}
    let getterCalledTimes = 0;
    let res = definePrototypeLazyProperty(O, 'a', () => ++getterCalledTimes);
    strictEqual(res, O);
    let o = new O();
    strictEqual(o.a, 1);
    strictEqual(o.a, 1);
    strictEqual(o.a, 1);
    strictEqual(getterCalledTimes, 1);
    o.a = 2;
    strictEqual(o.a, 2);
    strictEqual(getterCalledTimes, 1);

    delete o.a;
    strictEqual(o.a, 2);
    strictEqual(o.a, 2);
    strictEqual(getterCalledTimes, 2);

    let o2 = new O();
    strictEqual(o2.a, 3);
    strictEqual(o2.a, 3);
    strictEqual(getterCalledTimes, 3);
});

test('definePrototypeLazyConstant should work', () => {
    class O {}
    let getterCalledTimes = 0;
    let res = definePrototypeLazyConstant(O, 'a', () => ++getterCalledTimes);
    strictEqual(res, O);
    let o = new O();
    strictEqual(o.a, 1);
    strictEqual(o.a, 1);
    strictEqual(o.a, 1);
    strictEqual(getterCalledTimes, 1);

    throws(() => defineConstant(o, 'a', 2), 'Cannot redefine property: a');

    let o2 = new O();
    strictEqual(o2.a, 2);
    strictEqual(o2.a, 2);
    strictEqual(getterCalledTimes, 2);
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
