'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    let i = 0;
    while (i < this.length) {
      if (callback(this[i], i, this)) {
        return true;
      }
      i++;
    }

    return false;
  };
}

module.exports = applyCustomSome;
