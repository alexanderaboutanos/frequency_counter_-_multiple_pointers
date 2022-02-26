/** @format */

// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  const num1FREQ = freqCounter(num1);
  const num2FREQ = freqCounter(num2);

  for (let key of Object.keys(num1FREQ)) {
    if (!num2FREQ[key]) return false;
    if (num1FREQ[key] !== num2FREQ[key]) return false;
  }
  return true;
}

function freqCounter(num) {
  str = num.toString();
  let obj = {};
  for (let letter of str) {
    obj[letter] = obj[letter] + 1 || 1;
  }
  return obj;
}

module.exports = sameFrequency;
