/*
A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5] , then the array would become [3,4,5,1,2]

Given an array of n integers and a number, d, perform d left rotations on the array. Then print the updated array as a single line of space-separated integers.
*/

/* 
We want to find the new index of each number and re-arrange them accordingly
To do that, we loop over the array, and set newIndex = currentIndex - n
If newIndex is negative, then make newIndex = len + newIndex
We can either move elements in place using splice, or create a new array
*/

function leftRotation(arr, n) {
  let newArr = [];
  arr.forEach((element, index) => {
    let newIndex = index - n;
    if (newIndex < 0) {
      newIndex = arr.length + newIndex;
    }
    newArr[newIndex] = element;
  });
  return newArr.join(" ");
}

console.log(leftRotation([1, 2, 3, 4, 5], 2));
