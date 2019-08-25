'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    let result = false;
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i], i, this)) {
        result = true;
      }
    }

    return result;
  };
}

module.exports = applyCustomSome;
