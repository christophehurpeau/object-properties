/* jshint maxlen: 200 */
/* global test */

'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check').default;

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

test('defineLazyProperty should work', function () {
    let o = {};
    let getterCalledTimes = 0;
    let res = (0, _lib.defineLazyProperty)(o, 'a', /** @function */function () {
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

test('defineLazyConstant should work', function () {
    let o = {};
    let getterCalledTimes = 0;
    let res = (0, _lib.defineLazyConstant)(o, 'a', /** @function */function () {
        (0, _proclaim.strictEqual)(this, o);
        return ++getterCalledTimes;
    });
    (0, _proclaim.strictEqual)(res, o);
    (0, _proclaim.strictEqual)(res.a, 1);
    (0, _proclaim.strictEqual)(res.a, 1);
    (0, _proclaim.strictEqual)(res.a, 1);
    (0, _proclaim.strictEqual)(getterCalledTimes, 1);
    (0, _proclaim.throws)(function () {
        return (0, _lib.defineConstant)(o, 'a', 2);
    }, 'Cannot redefine property: a');
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

    res.a = 0;
    (0, _proclaim.strictEqual)(res.a, 0);
});

test('definePrototypeProperty should work', function () {
    /** @class O */
    let O = function O() {
        _classCallCheck(this, O);
    };

    let res = (0, _lib.definePrototypeProperty)(O, 'a', 1);
    (0, _proclaim.strictEqual)(res, O);
    let o = new O();
    (0, _proclaim.strictEqual)(o.a, 1);
    O.prototype.a = 2;
    (0, _proclaim.strictEqual)(o.a, 2);
});

test('definePrototypeConstant should work', function () {
    /** @class O */
    let O = function O() {
        _classCallCheck(this, O);
    };

    let res = (0, _lib.definePrototypeConstant)(O, 'a', 1);
    (0, _proclaim.strictEqual)(res, O);
    let o = new O();
    (0, _proclaim.strictEqual)(o.a, 1);
    (0, _proclaim.throws)(function () {
        return (0, _lib.definePrototypeConstant)(O, 'a', 2);
    }, 'Cannot redefine property: a');
});

test('definePrototypeGetter should work', function () {
    /** @class O */
    let O = function O() {
        _classCallCheck(this, O);
    };

    let res = (0, _lib.definePrototypeGetter)(O, 'a', function () {
        return 1;
    });
    (0, _proclaim.strictEqual)(res, O);
    let o = new O();
    (0, _proclaim.strictEqual)(o.a, 1);
});

test('definePrototypeSetter should work', function () {
    /** @class O */
    let O = function O() {
        _classCallCheck(this, O);
    };

    let value;
    let res = (0, _lib.definePrototypeSetter)(O, 'a', function (v) {
        return value = v * 2;
    });
    (0, _proclaim.strictEqual)(res, O);
    let o = new O();
    o.a = 2;
    (0, _proclaim.strictEqual)(value, 4);
});

test('definePrototypeLazyProperty should work', function () {
    /** @class O */
    let O = function O() {
        _classCallCheck(this, O);
    };

    let getterCalledTimes = 0;
    let res = (0, _lib.definePrototypeLazyProperty)(O, 'a', /** @function */function () {
        return ++getterCalledTimes;
    });
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

test('definePrototypeLazyConstant should work', function () {
    /** @class O */
    let O = function O() {
        _classCallCheck(this, O);
    };

    let getterCalledTimes = 0;
    let res = (0, _lib.definePrototypeLazyConstant)(O, 'a', /** @function */function () {
        return ++getterCalledTimes;
    });
    (0, _proclaim.strictEqual)(res, O);
    let o = new O();
    (0, _proclaim.strictEqual)(o.a, 1);
    (0, _proclaim.strictEqual)(o.a, 1);
    (0, _proclaim.strictEqual)(o.a, 1);
    (0, _proclaim.strictEqual)(getterCalledTimes, 1);

    (0, _proclaim.throws)(function () {
        return (0, _lib.defineConstant)(o, 'a', 2);
    }, 'Cannot redefine property: a');

    let o2 = new O();
    (0, _proclaim.strictEqual)(o2.a, 2);
    (0, _proclaim.strictEqual)(o2.a, 2);
    (0, _proclaim.strictEqual)(getterCalledTimes, 2);
});

test('defineProperties should work when properties are empty', function () {
    let o = {};
    let res = (0, _lib.defineProperties)(o);
    (0, _proclaim.strictEqual)(res, o);
});

test('defineConstants should work', function () {
    let o = {};
    let res = (0, _lib.defineConstants)(o, {
        a: 1,
        b: 2
    });

    (0, _proclaim.strictEqual)(res, o);
    (0, _proclaim.strictEqual)(res.a, 1);
    (0, _proclaim.strictEqual)(res.b, 2);

    (0, _proclaim.throws)(function () {
        return (0, _lib.defineConstant)(o, 'a', 2);
    }, 'Cannot redefine property: a');
});
//# sourceMappingURL=index.js.map