
const isSumPossible = require('./index');

describe('isSumPossible', () => {
  describe('diagnostic test case', () => {
    it('returns true', () => {
      const summableNumbers = [18, 55, 2, 28, 31, 38, 1, 40, 21, 60, 62];
      const sumTarget = 199;
      const addendsTarget = 5;
      expect(isSumPossible(summableNumbers, sumTarget, addendsTarget))
        .toBe(true);
    });

    it('when we need many addends and the numbers are out of order', () => {
      const summableNumbers = [1, 4, 6, 7, 8, 2, 3];
      const sumTarget = 6;
      const addendsTarget = 3;
      expect(isSumPossible(summableNumbers, sumTarget, addendsTarget, true))
        .toBe(true);
    });
  });

  describe('returns true', () => {
    it('when there is only one summable number and it is the target sum', () => {
      const summableNumbers = [1];
      const sumTarget = 1;
      const addendsTarget = 1;
      expect(isSumPossible(summableNumbers, sumTarget, addendsTarget))
        .toBe(true);
    });

    it('when the target sum is one number among many', () => {
      const summableNumbers = [1, 2, 3];
      const sumTarget = 3;
      const addendsTarget = 1;
      expect(isSumPossible(summableNumbers, sumTarget, addendsTarget))
        .toBe(true);
    });

    it('when we need many addends', () => {
      const summableNumbers = [1, 2, 3, 4, 5];
      const sumTarget = 9;
      const addendsTarget = 3;
      expect(isSumPossible(summableNumbers, sumTarget, addendsTarget))
        .toBe(true);
    });

    it('when we need many addends and the numbers are out of order', () => {
      const summableNumbers = [80, 230, 25, 4, 96, 1, 25, 500];
      const sumTarget = 551;
      const addendsTarget = 4;
      expect(isSumPossible(summableNumbers, sumTarget, addendsTarget, true))
        .toBe(true);
    });
  });

  describe('returns false', () => {
    it('when there is only one summable number and it\'s not our target sum', () => {
      const summableNumbers = [2];
      const sumTarget = 1;
      const addendsTarget = 1;
      expect(isSumPossible(summableNumbers, sumTarget, addendsTarget))
        .toBe(false);
    });

    it('when there is only one summable number and we need many addends', () => {
      const summableNumbers = [1];
      const sumTarget = 1;
      const addendsTarget = 2;
      expect(isSumPossible(summableNumbers, sumTarget, addendsTarget))
        .toBe(false);
    });

    it('when there are many numbers but they don\'t add up to the target sum', () => {
      const summableNumbers = [5, 2, 4];
      const sumTarget = 3;
      const addendsTarget = 1;
      expect(isSumPossible(summableNumbers, sumTarget, addendsTarget))
        .toBe(false);
    });
  });
});
