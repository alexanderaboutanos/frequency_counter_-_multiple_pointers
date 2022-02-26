/** @format */

// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let idx_1 = 0;
  let idx_2 = 0;

  while (idx_1 < str1.length) {
    if (str2[idx_2] == str1[idx_1]) idx_1++, idx_2++;
    else if (str2[idx_2] != str1[idx_1]) idx_2++;
    if (idx_2 > str2.length) return false;
  }
  return true;
}

module.exports = isSubsequence;
