'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    for (const [index] of this.entries()) {
      if (callback(this[index], index, this)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomSome;
