'use strict';

const applyCustomSome = require('./arrayMethodSome');

const source = [0, 10, 20, 30];
applyCustomSome();

test('`some2` is added to [].__proto__', () => {
  expect([].some2)
    .toBeInstanceOf(Function);
});

test(`some2 doesn't call default some`, () => {
  expect([].some2.toString().includes('.some('))
    .toBe(false);
});

test('for (item) => item > 10', () => {
  expect(source.some2(x => x > 10))
    .toBe(true);
});

test('for (item) => item > 100', () => {
  expect(source.some2(x => x > 100))
    .toBe(false);
});

test('false is returned for []', () => {
  expect([].some2(x => true))
    .toBe(false);
});

test('for (item, index) => index > 0', () => {
  expect(source.some2((x, i) => i > 0))
    .toBe(true);
});

test('(item, index, arr) => arr === source)', () => {
  expect(source.some2((x, i, arr) => arr === source))
    .toBe(true);
});

test('Source array is not changed', () => {
  expect(source)
    .toEqual([0, 10, 20, 30]);
});
