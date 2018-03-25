/* eslint-disable max-lines */

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
} from './';

test('defineProperty should work', () => {
  const o = {};
  const res = defineProperty(o, 'a', 1);
  expect(res).toBe(o);
  expect(res.a).toBe(1);
});

test('defineConstant should work', () => {
  const o = {};
  const res = defineConstant(o, 'a', 1);
  expect(res).toBe(o);
  expect(res.a).toBe(1);

  expect(() => defineConstant(o, 'a', 2)).toThrow('Cannot redefine property: a');
});

test('defineGetter should work', () => {
  const o = {};
  const res = defineGetter(o, 'a', () => 1);
  expect(res).toBe(o);
  expect(res.a).toBe(1);
});

test('defineSetter should work', () => {
  const o = {};
  let value;
  const res = defineSetter(o, 'a', v => {
    value = v * 2;
  });
  expect(res).toBe(o);
  res.a = 2;
  expect(value).toBe(4);
});

test('defineLazyProperty should work', () => {
  const o = {};
  let getterCalledTimes = 0;
  const res = defineLazyProperty(o, 'a', function() {
    expect(this).toBe(o);
    return ++getterCalledTimes;
  });
  expect(res).toBe(o);
  expect(res.a).toBe(1);
  expect(res.a).toBe(1);
  expect(res.a).toBe(1);
  expect(getterCalledTimes).toBe(1);
  res.a = 2;
  expect(res.a).toBe(2);
  expect(getterCalledTimes).toBe(1);
});

test('defineLazyConstant should work', () => {
  const o = {};
  let getterCalledTimes = 0;
  const res = defineLazyConstant(o, 'a', function() {
    expect(this).toBe(o);
    return ++getterCalledTimes;
  });
  expect(res).toBe(o);
  expect(res.a).toBe(1);
  expect(res.a).toBe(1);
  expect(res.a).toBe(1);
  expect(getterCalledTimes).toBe(1);
  expect(() => defineConstant(o, 'a', 2)).toThrow('Cannot redefine property: a');
});

test('defineProperties should work', () => {
  const o = {};
  const res = defineProperties(o, {
    a: 1,
    b: 2,
  });
  expect(res).toBe(o);
  expect(res.a).toBe(1);
  expect(res.b).toBe(2);

  res.a = 0;
  expect(res.a).toBe(0);
});

test('definePrototypeProperty should work', () => {
  class O {}
  const res = definePrototypeProperty(O, 'a', 1);
  expect(res).toBe(O);
  const o = new O();
  expect(o.a).toBe(1);
  O.prototype.a = 2;
  expect(o.a).toBe(2);
});

test('definePrototypeConstant should work', () => {
  class O {}
  const res = definePrototypeConstant(O, 'a', 1);
  expect(res).toBe(O);
  const o = new O();
  expect(o.a).toBe(1);
  expect(() => definePrototypeConstant(O, 'a', 2)).toThrow('Cannot redefine property: a');
});

test('definePrototypeGetter should work', () => {
  class O {}
  const res = definePrototypeGetter(O, 'a', () => 1);
  expect(res).toBe(O);
  const o = new O();
  expect(o.a).toBe(1);
});

test('definePrototypeSetter should work', () => {
  class O {}
  let value;
  const res = definePrototypeSetter(O, 'a', v => (value = v * 2));
  expect(res).toBe(O);
  const o = new O();
  o.a = 2;
  expect(value).toBe(4);
});

test('definePrototypeLazyProperty should work', () => {
  class O {}
  let getterCalledTimes = 0;
  const res = definePrototypeLazyProperty(O, 'a', () => ++getterCalledTimes);
  expect(res).toBe(O);
  const o = new O();
  expect(o.a).toBe(1);
  expect(o.a).toBe(1);
  expect(o.a).toBe(1);
  expect(getterCalledTimes).toBe(1);
  o.a = 2;
  expect(o.a).toBe(2);
  expect(getterCalledTimes).toBe(1);

  delete o.a;
  expect(o.a).toBe(2);
  expect(o.a).toBe(2);
  expect(getterCalledTimes).toBe(2);

  const o2 = new O();
  expect(o2.a).toBe(3);
  expect(o2.a).toBe(3);
  expect(getterCalledTimes).toBe(3);
});

test('definePrototypeLazyConstant should work', () => {
  class O {}
  let getterCalledTimes = 0;
  const res = definePrototypeLazyConstant(O, 'a', () => ++getterCalledTimes);
  expect(res).toBe(O);
  const o = new O();
  expect(o.a).toBe(1);
  expect(o.a).toBe(1);
  expect(o.a).toBe(1);
  expect(getterCalledTimes).toBe(1);

  expect(() => defineConstant(o, 'a', 2)).toThrow('Cannot redefine property: a');

  const o2 = new O();
  expect(o2.a).toBe(2);
  expect(o2.a).toBe(2);
  expect(getterCalledTimes).toBe(2);
});

test('defineProperties should work when properties are empty', () => {
  const o = {};
  const res = defineProperties(o);
  expect(res).toBe(o);
});

test('defineConstants should work', () => {
  const o = {};
  const res = defineConstants(o, {
    a: 1,
    b: 2,
  });

  expect(res).toBe(o);
  expect(res.a).toBe(1);
  expect(res.b).toBe(2);

  expect(() => defineConstant(o, 'a', 2)).toThrow('Cannot redefine property: a');
});
