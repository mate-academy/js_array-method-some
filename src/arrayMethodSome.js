'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    for (let idex = 0; idex < this.length; idex++) {
      if (callback(this[idex], idex, this) === true) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomSome;
