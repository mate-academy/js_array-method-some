'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      const value = this[i];
      if (callback(value, i, this)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomSome;
