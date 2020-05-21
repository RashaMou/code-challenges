// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function (nums, target) {
  // loop over the array to check which element is equal to target - element we are currently on
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] == target - nums[i]) {
        return [i, j];
      }
    }
  }
};

const twoSumsSecondPass = (nums, target) => {
  // create object where key is index and value is the element
  const numObj = {};
  nums.forEach((num, index) => {
    numObj[index] = num;
  });
  // check if any of the values in the object == target - element
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numObj.hasOwnProperty(complement) && numObj.complement != i) {
      return true;
    }
  }
};

// console.log(twoSum([3, 2, 4], 6));
console.log(twoSumsSecondPass([3, 2, 4, 5, 8], 12));

const twoSumThirdPass = (nums, target) => {
  // sort the array
  // start one pointer to the far right and one at the far left, sum them up and if its greater than target sum move down the right pointer and if less than target sum move up the left pointer
};
