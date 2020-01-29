'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      const isTestPassed = callback(this[i], i, this);

      if (isTestPassed) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomSome;
