'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      let someElement = this[i];
      if (callback(someElement, i, this)) {
        return true;
      };
    }
    return false;
  };
}

module.exports = applyCustomSome;
