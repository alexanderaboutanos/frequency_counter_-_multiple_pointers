/** @format */

// SORTED ARRAY
function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if ((arr[right] + arr[left]) / 2 === avg) return true;
    if ((arr[right] + arr[left]) / 2 > avg) right--;
    else left++;
  }
  return false;
}

module.exports = averagePair;
