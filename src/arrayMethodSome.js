'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const index = i;

      if (callback(item, index, arr)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomSome;
