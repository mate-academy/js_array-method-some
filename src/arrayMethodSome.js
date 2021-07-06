'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr) === true) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomSome;
