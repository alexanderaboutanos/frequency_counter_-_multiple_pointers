/** @format */

// add whatever parameters you deem necessary
function constructNote(message, letters) {
  let messageFQ = freqCounter(message);
  let lettersFQ = freqCounter(letters);

  for (let key of Object.keys(messageFQ)) {
    if (!lettersFQ[key]) return false;
    if (messageFQ[key] > lettersFQ[key]) return false;
  }
  return true;
}

function freqCounter(str) {
  let obj = {};
  for (let letter of str) {
    obj[letter] = obj[letter] + 1 || 1;
  }
  return obj;
}

module.exports = constructNote;
