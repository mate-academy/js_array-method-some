'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    // write code here

    if (typeof callback !== 'function') {
      return this;
    } else {
      for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
          return true;
        }
      }

      return false;
    }
  };
}

module.exports = applyCustomSome;
