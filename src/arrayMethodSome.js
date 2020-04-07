'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    if (this.length === 0) {
      return false;
    }

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomSome;
