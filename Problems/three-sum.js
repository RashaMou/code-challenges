// given an array, find out if three numbers add up to a given number x

function threeNumberSum(arr, target) {
  // sort the array
  arr.sort((a, b) => {
    return a - b;
  });

  const triplets = [];

  // loop over the array and use each element as the first integer of our triplet array
  for (let index = 0; index < arr.length - 2; index++) {
    // set two pointers, one at the beginning of the array (left) and one at the end (right)

    let left = index + 1;
    // console.log("left", left);
    let right = arr.length - 1;
    // console.log("right", right);

    // while left is less than right, we do our calculations. if left === right
    while (arr[left] < arr[right]) {
      let fixed = arr[index];
      const sum = fixed + arr[left] + arr[right];
      // console.log(
      //   `fixed: ${fixed}; arr[left]: ${arr[left]}; arr[right]: ${arr[right]}; SUM: ${sum}`
      // );
      // check if left + right + index === target. If so, add them as an array to triplets array
      if (sum === target) {
        // add them to an array and sort it
        triplets.push([fixed, arr[left], arr[right]]);
      }
      // if sum is bigger, move right index down by one
      else if (sum > target) {
        right--;
      }
      // if sum is less, move left index up by one
      else if (sum < target) {
        left++;
      }
    }
  }
  return triplets;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8 - 1, 6, -5], 0));
