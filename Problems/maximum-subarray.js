// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

/////////// BRUTE FORCE ///////////

const maxSubArrayBrute = function (nums) {
  // set max sum to be first element in the array
  let maxSum = nums[0];
  // loop over the array
  for (let i = 0; i < nums.length; i++) {
    // fix the array element we are working with as a temp variable. The inner loop will start at the element right after temp
    let temp = nums[i];
    // if temp > maxSum, then set maxSum to temp
    maxSum = Math.max(temp, maxSum);
    // inner loop. start at the i+1 element. So if we're at index 0, start at index 1.
    for (let j = i + 1; j < nums.length; j++) {
      // increment temp by nums[j]: temp = temp + nums[j]. Temp here will always contain the latest cumulative sum of the inner loop.
      temp += nums[j];
      // if temp > maxSum, then set maxSum to temp
      maxSum = Math.max(temp, maxSum);
    }
  }
  return maxSum;
};

// console.log(maxSubArrayBrute([-2, 12, -3, 4, -1, 2, 1, -5, 4]));

///////// KADANE'S ALGORITHM //////////////
/* for each element, find the maximum subarray sum that ends at that element
 * for example, for an array of [1, -3, 2, 1, -1 ]:
 * the only subarray for arr[0] = [1], so the maxSubarraySum for arr[0] is 1
 * the possible subarrays for for arr[1] are either [1, -3] or [-3]. The maxSubarraySum is therefore -2
 * the possible subarrays for for arr[2] are either [1, -3, 2], [-3, 2], or [-2]. The maxSubarraySum is therefore 0, etc.
 * In order to do it in O(n), we should only compare the single element subarray to the previous maxSubarraySum, so that needs to be stored in a variable and updated accordingly
 */

const maxSubArrayKadane = function (nums) {
  let maxGlobal = nums[0];
  // maxCurrentSum is the max subarray sum of the current array that ends at a particular index
  let maxCurrent = nums[0];
  // iterate from element at index 1 to element at last index
  for (i = 1; i < nums.length; i++) {
    // we compare the current element, nums[i], to nums[i] plus the maxCurrent and set that to be maxCurrent
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    // console.log("nums[i]", nums[i]);
    // console.log("maxCurrent", maxCurrent);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
};

console.log(maxSubArrayKadane([-2, 1]));
