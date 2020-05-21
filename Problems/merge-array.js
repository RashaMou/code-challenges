// Given two sorted arrays, merge them into one and sort the array.

// compare element from array a to element in array b, and whichever is less, add to third array and move index

// use index cursors to compare two arrays

const mergeSortArrays = (arrA, arrB) => {
  // edge cases
  if (arrA.length === null || arrB.length === 0) {
    return arrB;
  }
  if (arrA.length === 0 || arrB.length === null) {
    return arrA;
  }

  // get lengths of both arrays
  const lenA = arrA.length;
  const lenB = arrB.length;
  const outputArr = [];
  const indexA = 0;
  const indexB = 0;
  const outputIndex = 0;
  // loop through both arrays simultaneously
  while (indexA < lenA && indexB < lenB) {
    // compare the elements of corresponding indexes, and add smaller to output array
    if (arrA[indexA] < arrB[indexB]) {
      outputArr.push(arrA[indexA]);
    }
    // increment index of same array
  }
};
