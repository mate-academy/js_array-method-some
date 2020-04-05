'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    const arr = this;
    let counter = 0;

    for (const item of arr) {
      if (callback(item, counter, arr)) {
        return true;
      }
      counter++;
    }

    return false;
  };
}

module.exports = applyCustomSome;
