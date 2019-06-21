'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      const index = i;
      const arr = this;

      if (callback(item, index, arr)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomSome;
