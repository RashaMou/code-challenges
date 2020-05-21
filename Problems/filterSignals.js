// determine the ranges we need to look at
// we can do this by finding the highest of subarrs[0] and the lowest of subarrs[1]
// loop over frequencies array and check which ones are between the ranges we identified

function countSignals(frequencies, filterRanges) {
  let minCommonFrequency = filterRanges[0][1];
  let maxCommonFrequency = 0;
  for (let i = 0; i < filterRanges.length; i++) {
    if (filterRanges[i][0] > maxCommonFrequency) {
      maxCommonFrequency = filterRanges[i][0];
    }
    if (filterRanges[i][1] < minCommonFrequency) {
      minCommonFrequency = filterRanges[i][1];
    }
  }
  let count = 0;
  frequencies.forEach((frequency) => {
    if (frequency >= maxCommonFrequency && frequency <= minCommonFrequency) {
      count++;
    }
  });
  return count;
}

countSignals(
  [8, 15, 14, 16, 21],
  [
    [10, 17],
    [13, 15],
    [13, 17],
  ]
);
