'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    let count = 0;
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        count++;
      }
    }
    return count > 0;
  };
}

module.exports = applyCustomSome;
