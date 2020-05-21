// Karl has an array of integers. He wants to reduce the array until all remaining elements are equal. Determine the minimum number of elements to delete to reach his goal.
// For example, if his array is [1, 2, 2, 3] , we see that he can delete the 2 elements 1 and 3 leaving [2, 2] . He could also delete both 2s and either the 1 or the 3, but that would take 3 deletions. The minimum number of deletions is 2.

function equalizeArray(arr) {
  // create object to hold array elements and their number of occurences
  let map = {},
  maxCount = 0,
  // loop over array
  for (let i = 0; i < arr.length; i++) {
    // if the element is not present in the object, then add it, and if it is, then increment its value
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] += 1;
    }
    // next step is to find out which elements we want to keep. Since we're trying to find the minimum number of elements to remove, then we need to find the element that occurs most frequently.
    // to find the element that occurs the most, compare each one to maxCount, and set maxCount accordingly
    if (map[arr[i]] > maxCount) {
      maxCount = map[arr[i]];
    }
  }
  // if each element only occurs once, then we'll need to remove all but one element
  if (maxCount === 1) return arr.length - 1;
  return arr.length - maxCount;
}
