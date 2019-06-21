'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    for (let index = 0; index < this.length; index++) {
      if (callback(this[index], index, this)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomSome;
