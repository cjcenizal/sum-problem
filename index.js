
module.exports = function isSumPossible(summableNumbers, sumTarget, addendsTarget) {
  function containsAddendsForSum(numbers, index, differenceFromTargetSum, addendsCount) {
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

  // This is key. Sorting the numbers in increasing order allows to create
  // combinations in this increasing order. This creates a distinct cut-off
  // point, beyond which its impossible for a combination of addends to add up
  // to the sumTarget. This allows us to use a for loop at the core of the
  // recursive function because we can proceed sequentially through the
  // summableNumbers.
  var sortedSummableNumbers = summableNumbers.slice(0).sort();
  return containsAddendsForSum(sortedSummableNumbers, 0, sumTarget, addendsTarget);
}
