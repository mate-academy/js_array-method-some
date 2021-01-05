'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    // write code here
    const length = this.length;
    for (let i = 0; i < length; i++) {
      if (callback(this[i], i, this) === true) {
        return true;
      }
    };
    return false;
  };
}

module.exports = applyCustomSome;
