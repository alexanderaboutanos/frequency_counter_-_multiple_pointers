/** @format */

// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
  let obj = {};
  let valIDX = 0;
  for (let key of keys) {
    if (!vals[valIDX]) {
      obj[key] = null;
    } else {
      obj[key] = vals[valIDX];
      valIDX++;
    }
  }
  return obj;
}

module.exports = twoArrayObject;
