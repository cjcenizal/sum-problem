
module.exports = function isSumPossible(
  summableNumbers,
  sumTarget,
  addendsTarget,
  isDiagnostic
) {
  function containsAddendsForSum(
    numbers,
    index,
    differenceFromTargetSum,
    addendsCount
  ) {

    if (isDiagnostic) {
      console.log('\n');
      console.log('index', index)
      console.log('addendsCount', addendsCount)
      console.log('differenceFromTargetSum', differenceFromTargetSum)
    }

    // Inner terminating condition. Once we have involved the maximum
    // number of addeds, return whether whether their difference from the
    // sumTarget is 0 (i.e. they add up to the sumTarget).
    if (addendsCount === 0) {
      return differenceFromTargetSum === 0;
    }

    // Each recursion, test each subsequent number to see if we've found a match.
    for (var i = index; i < numbers.length; i++) {
      var newDifference = differenceFromTargetSum - numbers[i];
      // Terminating condition. If true, we've found a matching sum.
      if (containsAddendsForSum(numbers, i + 1, newDifference, addendsCount - 1)) {
        return true;
      }
    }

    return false;
  }

  const sortedSummableNumbers = summableNumbers;

  return containsAddendsForSum(sortedSummableNumbers, 0, sumTarget, addendsTarget);
}
