/**
Sometimes it is necessary to filter a signal by frequency, e.g. to reduce noise outside of the expected frequency range. Filters can be stacked, allowing only the frequencies within the range allowed by all filters to get through. For example, three filters with ranges of (10, 17), (13, 15) and (13, 17) will only allow signals between 13 and 15 through. The only range that all filters overlap is (13, 15). Given n signals frequencies and a series of m filters that let through frequencies in the range x to y, inclusive, determine the number of signals that will get through the filters. 

For example given n = 5 signals with frequencies = [8 15 14 16 21] and m = 3 filtersRanges = [[10 17], [13, 15], [13, 17]], the 2 frequencies that will pass through all filters are 15 and 14.
 
* Function Description
Complete the countSignals function in the editor below. The function must return an integer that denotes the number of signals that pass through all filters.
countSignals has the following parameter(s):
frequencies: an integer array, the frequencies of the signals sent through the filters 
filterRanges: a 2D integer array, the lower and upper frequency bounds for each filters

*/

// determine the ranges we need to look at
// we can do this by finding the highest of lower bounds and the lowest of higher bounds
// loop over frequencies array and check which ones are between the ranges we identified
// Time complexity: O(n)
// Space complexity: O(1)

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
