/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import assert from "node:assert";
import { test } from "node:test";
import {
  defineConstant,
  defineConstants,
  defineGetter,
  defineLazyConstant,
  defineLazyProperty,
  defineProperties,
  defineProperty,
  definePrototypeConstant,
  definePrototypeGetter,
  definePrototypeLazyConstant,
  definePrototypeLazyProperty,
  definePrototypeProperty,
  definePrototypeSetter,
  defineSetter,
} from "./index.ts";

test("defineProperty should work", () => {
  const o: any = {};
  const res = defineProperty(o, "a", 1);
  assert.strictEqual(res, o);
  assert.strictEqual(res.a, 1);
});

test("defineConstant should work", () => {
  const o: any = {};
  const res = defineConstant(o, "a", 1);
  assert.strictEqual(res, o);
  assert.strictEqual(res.a, 1);

  assert.throws(
    () => defineConstant(o, "a", 2),
    Error,
    "Cannot redefine property: a",
  );
});

test("defineGetter should work", () => {
  const o: any = {};
  const res = defineGetter(o, "a", () => 1);
  assert.strictEqual(res, o);
  assert.strictEqual(res.a, 1);
});

test("defineSetter should work", () => {
  const o: any = {};
  let value;
  const res = defineSetter(o, "a", (v) => {
    value = v * 2;
    return value;
  });
  assert.strictEqual(res, o);
  res.a = 2;
  assert.strictEqual(value, 4);
});

test("defineLazyProperty should work", () => {
  const o: any = {};
  let getterCalledTimes = 0;
  const res = defineLazyProperty(o, "a", function (this: any) {
    assert.strictEqual(this, o);
    return ++getterCalledTimes;
  });
  assert.strictEqual(res, o);
  assert.strictEqual(res.a, 1);
  assert.strictEqual(res.a, 1);
  assert.strictEqual(res.a, 1);
  assert.strictEqual(getterCalledTimes, 1);
  res.a = 2;
  assert.strictEqual(res.a, 2);
  assert.strictEqual(getterCalledTimes, 1);
});

test("defineLazyConstant should work", () => {
  const o: any = {};
  let getterCalledTimes = 0;
  const res = defineLazyConstant(o, "a", function (this: any) {
    assert.strictEqual(this, o);
    return ++getterCalledTimes;
  });
  assert.strictEqual(res, o);
  assert.strictEqual(res.a, 1);
  assert.strictEqual(res.a, 1);
  assert.strictEqual(res.a, 1);
  assert.strictEqual(getterCalledTimes, 1);
  assert.throws(
    () => defineConstant(o, "a", 2),
    Error,
    "Cannot redefine property: a",
  );
});

test("defineProperties should work", () => {
  const o: any = {};
  const res = defineProperties(o, {
    a: 1,
    b: 2,
  });
  assert.strictEqual(res, o);
  assert.strictEqual(res.a, 1);
  assert.strictEqual(res.b, 2);

  res.a = 0;
  assert.strictEqual(res.a, 0);
});

test("definePrototypeProperty should work", () => {
  class O {}
  const Res = definePrototypeProperty(O, "a", 1);
  assert.strictEqual(Res, O);
  const o: any = new Res();
  assert.strictEqual(o.a, 1);
  (Res.prototype as any).a = 2;
  assert.strictEqual(o.a, 2);
});

test("definePrototypeConstant should work", () => {
  class O {}
  const Res = definePrototypeConstant(O, "a", 1);
  assert.strictEqual(Res, O);
  const o: any = new Res();
  assert.strictEqual(o.a, 1);
  assert.throws(
    () => definePrototypeConstant(O, "a", 2),
    Error,
    "Cannot redefine property: a",
  );
});

test("definePrototypeGetter should work", () => {
  class O {}
  const Res = definePrototypeGetter(O, "a", () => 1);
  assert.strictEqual(Res, O);
  const o: any = new Res();
  assert.strictEqual(o.a, 1);
});

test("definePrototypeSetter should work", () => {
  class O {}
  let value;
  const Res = definePrototypeSetter(O, "a", (v: number) => {
    value = v * 2;
    return value;
  });
  assert.strictEqual(Res, O);
  const o: any = new Res();
  o.a = 2;
  assert.strictEqual(value, 4);
});

test("definePrototypeLazyProperty should work", () => {
  class O {}
  let getterCalledTimes = 0;
  const Res = definePrototypeLazyProperty(O, "a", () => ++getterCalledTimes);
  assert.strictEqual(Res, O);
  const o: any = new Res();
  assert.strictEqual(o.a, 1);
  assert.strictEqual(o.a, 1);
  assert.strictEqual(o.a, 1);
  assert.strictEqual(getterCalledTimes, 1);
  o.a = 2;
  assert.strictEqual(o.a, 2);
  assert.strictEqual(getterCalledTimes, 1);

  delete o.a;
  assert.strictEqual(o.a, 2);
  assert.strictEqual(o.a, 2);
  assert.strictEqual(getterCalledTimes, 2);

  const o2: any = new Res();
  assert.strictEqual(o2.a, 3);
  assert.strictEqual(o2.a, 3);
  assert.strictEqual(getterCalledTimes, 3);
});

test("definePrototypeLazyConstant should work", () => {
  class O {}
  let getterCalledTimes = 0;
  const Res = definePrototypeLazyConstant(O, "a", () => ++getterCalledTimes);
  assert.strictEqual(Res, O);
  const o: any = new Res();
  assert.strictEqual(o.a, 1);
  assert.strictEqual(o.a, 1);
  assert.strictEqual(o.a, 1);
  assert.strictEqual(getterCalledTimes, 1);

  assert.throws(
    () => defineConstant(o, "a", 2),
    Error,
    "Cannot redefine property: a",
  );

  const o2: any = new Res();
  assert.strictEqual(o2.a, 2);
  assert.strictEqual(o2.a, 2);
  assert.strictEqual(getterCalledTimes, 2);
});

test("defineProperties should work when properties are empty", () => {
  const o = {};
  const res = defineProperties(o);
  assert.strictEqual(res, o);
});

test("defineConstants should work", () => {
  const o = {};
  const res = defineConstants(o, {
    a: 1,
    b: 2,
  });

  assert.strictEqual(res, o);
  assert.strictEqual(res.a, 1);
  assert.strictEqual(res.b, 2);

  assert.throws(
    () => defineConstant(o, "a", 2),
    Error,
    "Cannot redefine property: a",
  );
});

test("defineProperty should handle options", () => {
  const o: any = {};
  defineProperty(o, "a", 1, {
    writable: false,
    configurable: false,
    enumerable: true,
  });
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(o, "a"), {
    value: 1,
    writable: false,
    configurable: false,
    enumerable: true,
  });

  defineProperty(o, "b", 2, {});
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(o, "b"), {
    value: 2,
    writable: true,
    configurable: true,
    enumerable: false,
  });
});

test("defineConstant should handle options", () => {
  const o = {};
  defineConstant(o, "a", 1, { enumerable: true });
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(o, "a"), {
    value: 1,
    writable: false,
    configurable: false,
    enumerable: true,
  });
  assert.deepStrictEqual(Object.keys(o), ["a"]);
});

test("defineGetter should handle options", () => {
  const o: any = {};
  const getter = (): number => 1;
  defineGetter(o, "a", getter, { configurable: false, enumerable: true });
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(o, "a"), {
    get: getter,
    set: undefined,
    configurable: false,
    enumerable: true,
  });
  assert.strictEqual(o.a, 1);
});

test("defineSetter should handle options", () => {
  const o: any = {};
  const setter = (): void => undefined;
  defineSetter(o, "a", setter, { configurable: false, enumerable: true });
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(o, "a"), {
    get: undefined,
    set: setter,
    configurable: false,
    enumerable: true,
  });
});

test("defineLazyProperty should handle options", () => {
  const o: any = {};
  defineLazyProperty(o, "a", () => 1, {
    writable: false,
    configurable: false,
    enumerable: true,
  });
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(o, "a"), {
    get: Object.getOwnPropertyDescriptor(o, "a")?.get,
    set: undefined,
    configurable: true,
    enumerable: true,
  });

  assert.strictEqual(o.a, 1);
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(o, "a"), {
    value: 1,
    writable: false,
    configurable: false,
    enumerable: true,
  });
});

test("defineLazyConstant should handle options", () => {
  const o: any = {};
  defineLazyConstant(o, "a", () => 1, { enumerable: true });
  assert.strictEqual(o.a, 1);
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(o, "a"), {
    value: 1,
    writable: false,
    configurable: false,
    enumerable: true,
  });
});

test("defineProperties should handle options", () => {
  const o = {};
  defineProperties(
    o,
    { a: 1, b: 2 },
    { writable: false, configurable: false, enumerable: true },
  );
  assert.deepStrictEqual(Object.keys(o), ["a", "b"]);
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(o, "a"), {
    value: 1,
    writable: false,
    configurable: false,
    enumerable: true,
  });
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(o, "b"), {
    value: 2,
    writable: false,
    configurable: false,
    enumerable: true,
  });

  const o2: any = {};
  defineProperties(o2, { a: 1 }, {});
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(o2, "a"), {
    value: 1,
    writable: true,
    configurable: true,
    enumerable: false,
  });
});

test("defineConstants should handle options", () => {
  const o: any = {};
  defineConstants(o, { a: 1 }, { enumerable: true });
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(o, "a"), {
    value: 1,
    writable: false,
    configurable: false,
    enumerable: true,
  });
});

test("definePrototypeProperty should handle options", () => {
  class O {}
  definePrototypeProperty(O, "a", 1, {
    writable: false,
    configurable: false,
    enumerable: true,
  });
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(O.prototype, "a"), {
    value: 1,
    writable: false,
    configurable: false,
    enumerable: true,
  });
});

test("definePrototypeConstant should handle options", () => {
  class O {}
  definePrototypeConstant(O, "a", 1, { enumerable: true });
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(O.prototype, "a"), {
    value: 1,
    writable: false,
    configurable: false,
    enumerable: true,
  });
});

test("definePrototypeGetter should handle options", () => {
  class O {}
  const getter = (): number => 1;
  definePrototypeGetter(O, "a", getter, {
    configurable: false,
    enumerable: true,
  });
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(O.prototype, "a"), {
    get: getter,
    set: undefined,
    configurable: false,
    enumerable: true,
  });
});

test("definePrototypeSetter should handle options", () => {
  class O {}
  const setter = (): void => undefined;
  definePrototypeSetter(O, "a", setter, {
    configurable: false,
    enumerable: true,
  });
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(O.prototype, "a"), {
    get: undefined,
    set: setter,
    configurable: false,
    enumerable: true,
  });
});

test("definePrototypeLazyProperty should handle options", () => {
  class O {}
  definePrototypeLazyProperty(O, "a", () => 1, {
    writable: false,
    configurable: false,
    enumerable: true,
  });
  const o: any = new O();
  assert.strictEqual(Object.getOwnPropertyDescriptor(o, "a"), undefined);
  assert.strictEqual(o.a, 1);
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(o, "a"), {
    value: 1,
    writable: false,
    configurable: false,
    enumerable: true,
  });
});

test("definePrototypeLazyConstant should handle options", () => {
  class O {}
  definePrototypeLazyConstant(O, "a", () => 1, { enumerable: true });
  const o: any = new O();
  assert.strictEqual(o.a, 1);
  assert.deepStrictEqual(Object.getOwnPropertyDescriptor(o, "a"), {
    value: 1,
    writable: false,
    configurable: false,
    enumerable: true,
  });
});
