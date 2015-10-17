/* jshint maxlen: 200 */
/* global test */

'use strict';

var _proclaim = require('proclaim');

var _lib = require('../../lib/');

test('defineProperty should work', function () {
    let o = {};
    let res = (0, _lib.defineProperty)(o, 'a', 1);
    (0, _proclaim.strictEqual)(res, o);
    (0, _proclaim.strictEqual)(res.a, 1);
});

test('defineConstant should work', function () {
    let o = {};
    let res = (0, _lib.defineConstant)(o, 'a', 1);
    (0, _proclaim.strictEqual)(res, o);
    (0, _proclaim.strictEqual)(res.a, 1);

    (0, _proclaim.throws)(function () {
        return (0, _lib.defineConstant)(o, 'a', 2);
    }, 'Cannot redefine property: a');
});

test('defineGetter should work', function () {
    let o = {};
    let res = (0, _lib.defineGetter)(o, 'a', function () {
        return 1;
    });
    (0, _proclaim.strictEqual)(res, o);
    (0, _proclaim.strictEqual)(res.a, 1);
});

test('defineSetter should work', function () {
    let o = {};
    let value;
    let res = (0, _lib.defineSetter)(o, 'a', function (v) {
        return value = v * 2;
    });
    (0, _proclaim.strictEqual)(res, o);
    res.a = 2;
    (0, _proclaim.strictEqual)(value, 4);
});

test('defineProperties should work', function () {
    let o = {};
    let res = (0, _lib.defineProperties)(o, {
        a: 1,
        b: 2
    });
    (0, _proclaim.strictEqual)(res, o);
    (0, _proclaim.strictEqual)(res.a, 1);
    (0, _proclaim.strictEqual)(res.b, 2);
});

test('defineProperties should work when properties are empty', function () {
    let o = {};
    let res = (0, _lib.defineProperties)(o);
    (0, _proclaim.strictEqual)(res, o);
});
//# sourceMappingURL=index.js.map