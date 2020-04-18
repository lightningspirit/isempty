import isempty from '.';

describe('isempty()', () => {
  test.each([
    [null, true],
    ['', true],
    [undefined, true],
    [0, false],
    [Infinity, false],
    [NaN, false],
    ['string', false],
    [1, false],
    [{}, true],
    [[], true],
    [false, false],
    [true, false],
    [new Map(), true],
    [new Array(), true],
    [new Error(), false],
    [new Object(), true],
    [new Function(), false],
    [new Set(), true],
  ])('isempty(%p)', (value, expected) => {
    expect(isempty(value)).toBe(expected);
  });
});
