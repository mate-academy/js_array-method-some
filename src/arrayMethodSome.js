'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      const isSatisfied = callback(this[i], i, this);
      if (isSatisfied) {
        return isSatisfied;
      }
    }
    return false;
  };
}

module.exports = applyCustomSome;
