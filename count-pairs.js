/** @format */

// add whatever parameters you deem necessary
function countPairs(farr, target) {
  arr = farr.sort(sortNumber);

  let numPairs = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] == target) numPairs++, left++, right--;
    else if (arr[left] + arr[right] > target) right--;
    else if (arr[left] + arr[right] < target) left++;
  }
  return numPairs;
}

function sortNumber(a, b) {
  return a - b;
}

module.exports = countPairs;
