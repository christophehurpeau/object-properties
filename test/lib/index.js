'use strict';

var _proclaim = require('proclaim');

var _lib = require('../../lib/');

/* jshint maxlen: 200 */
/* global test */

test('defineProperty should work', () => {
    let o = {};
    let res = (0, _lib.defineProperty)(o, 'a', 1);
    (0, _proclaim.strictEqual)(res, o);
    (0, _proclaim.strictEqual)(res.a, 1);
});

test('defineConstant should work', () => {
    let o = {};
    let res = (0, _lib.defineConstant)(o, 'a', 1);
    (0, _proclaim.strictEqual)(res, o);
    (0, _proclaim.strictEqual)(res.a, 1);

    (0, _proclaim.throws)(() => (0, _lib.defineConstant)(o, 'a', 2), 'Cannot redefine property: a');
});

test('defineGetter should work', () => {
    let o = {};
    let res = (0, _lib.defineGetter)(o, 'a', () => 1);
    (0, _proclaim.strictEqual)(res, o);
    (0, _proclaim.strictEqual)(res.a, 1);
});

test('defineSetter should work', () => {
    let o = {};
    let value;
    let res = (0, _lib.defineSetter)(o, 'a', v => value = v * 2);
    (0, _proclaim.strictEqual)(res, o);
    res.a = 2;
    (0, _proclaim.strictEqual)(value, 4);
});

test('defineLazyProperty should work', () => {
    let o = {};
    let getterCalledTimes = 0;
    let res = (0, _lib.defineLazyProperty)(o, 'a', /**
                                                    * @function
                                                   */function () {
        (0, _proclaim.strictEqual)(this, o);
        return ++getterCalledTimes;
    });
    (0, _proclaim.strictEqual)(res, o);
    (0, _proclaim.strictEqual)(res.a, 1);
    (0, _proclaim.strictEqual)(res.a, 1);
    (0, _proclaim.strictEqual)(res.a, 1);
    (0, _proclaim.strictEqual)(getterCalledTimes, 1);
    res.a = 2;
    (0, _proclaim.strictEqual)(res.a, 2);
    (0, _proclaim.strictEqual)(getterCalledTimes, 1);
});

test('defineLazyConstant should work', () => {
    let o = {};
    let getterCalledTimes = 0;
    let res = (0, _lib.defineLazyConstant)(o, 'a', /**
                                                    * @function
                                                   */function () {
        (0, _proclaim.strictEqual)(this, o);
        return ++getterCalledTimes;
    });
    (0, _proclaim.strictEqual)(res, o);
    (0, _proclaim.strictEqual)(res.a, 1);
    (0, _proclaim.strictEqual)(res.a, 1);
    (0, _proclaim.strictEqual)(res.a, 1);
    (0, _proclaim.strictEqual)(getterCalledTimes, 1);
    (0, _proclaim.throws)(() => (0, _lib.defineConstant)(o, 'a', 2), 'Cannot redefine property: a');
});

test('defineProperties should work', () => {
    let o = {};
    let res = (0, _lib.defineProperties)(o, {
        a: 1,
        b: 2
    });
    (0, _proclaim.strictEqual)(res, o);
    (0, _proclaim.strictEqual)(res.a, 1);
    (0, _proclaim.strictEqual)(res.b, 2);

    res.a = 0;
    (0, _proclaim.strictEqual)(res.a, 0);
});

test('definePrototypeProperty should work', () => {
    let O = class O {};

    let res = (0, _lib.definePrototypeProperty)(O, 'a', 1);
    (0, _proclaim.strictEqual)(res, O);
    let o = new O();
    (0, _proclaim.strictEqual)(o.a, 1);
    O.prototype.a = 2;
    (0, _proclaim.strictEqual)(o.a, 2);
});

test('definePrototypeConstant should work', () => {
    let O = class O {};

    let res = (0, _lib.definePrototypeConstant)(O, 'a', 1);
    (0, _proclaim.strictEqual)(res, O);
    let o = new O();
    (0, _proclaim.strictEqual)(o.a, 1);
    (0, _proclaim.throws)(() => (0, _lib.definePrototypeConstant)(O, 'a', 2), 'Cannot redefine property: a');
});

test('definePrototypeGetter should work', () => {
    let O = class O {};

    let res = (0, _lib.definePrototypeGetter)(O, 'a', () => 1);
    (0, _proclaim.strictEqual)(res, O);
    let o = new O();
    (0, _proclaim.strictEqual)(o.a, 1);
});

test('definePrototypeSetter should work', () => {
    let O = class O {};

    let value;
    let res = (0, _lib.definePrototypeSetter)(O, 'a', v => value = v * 2);
    (0, _proclaim.strictEqual)(res, O);
    let o = new O();
    o.a = 2;
    (0, _proclaim.strictEqual)(value, 4);
});

test('definePrototypeLazyProperty should work', () => {
    let O = class O {};

    let getterCalledTimes = 0;
    let res = (0, _lib.definePrototypeLazyProperty)(O, 'a', () => ++getterCalledTimes);
    (0, _proclaim.strictEqual)(res, O);
    let o = new O();
    (0, _proclaim.strictEqual)(o.a, 1);
    (0, _proclaim.strictEqual)(o.a, 1);
    (0, _proclaim.strictEqual)(o.a, 1);
    (0, _proclaim.strictEqual)(getterCalledTimes, 1);
    o.a = 2;
    (0, _proclaim.strictEqual)(o.a, 2);
    (0, _proclaim.strictEqual)(getterCalledTimes, 1);

    delete o.a;
    (0, _proclaim.strictEqual)(o.a, 2);
    (0, _proclaim.strictEqual)(o.a, 2);
    (0, _proclaim.strictEqual)(getterCalledTimes, 2);

    let o2 = new O();
    (0, _proclaim.strictEqual)(o2.a, 3);
    (0, _proclaim.strictEqual)(o2.a, 3);
    (0, _proclaim.strictEqual)(getterCalledTimes, 3);
});

test('definePrototypeLazyConstant should work', () => {
    let O = class O {};

    let getterCalledTimes = 0;
    let res = (0, _lib.definePrototypeLazyConstant)(O, 'a', () => ++getterCalledTimes);
    (0, _proclaim.strictEqual)(res, O);
    let o = new O();
    (0, _proclaim.strictEqual)(o.a, 1);
    (0, _proclaim.strictEqual)(o.a, 1);
    (0, _proclaim.strictEqual)(o.a, 1);
    (0, _proclaim.strictEqual)(getterCalledTimes, 1);

    (0, _proclaim.throws)(() => (0, _lib.defineConstant)(o, 'a', 2), 'Cannot redefine property: a');

    let o2 = new O();
    (0, _proclaim.strictEqual)(o2.a, 2);
    (0, _proclaim.strictEqual)(o2.a, 2);
    (0, _proclaim.strictEqual)(getterCalledTimes, 2);
});

test('defineProperties should work when properties are empty', () => {
    let o = {};
    let res = (0, _lib.defineProperties)(o);
    (0, _proclaim.strictEqual)(res, o);
});

test('defineConstants should work', () => {
    let o = {};
    let res = (0, _lib.defineConstants)(o, {
        a: 1,
        b: 2
    });

    (0, _proclaim.strictEqual)(res, o);
    (0, _proclaim.strictEqual)(res.a, 1);
    (0, _proclaim.strictEqual)(res.b, 2);

    (0, _proclaim.throws)(() => (0, _lib.defineConstant)(o, 'a', 2), 'Cannot redefine property: a');
});
//# sourceMappingURL=index.js.map