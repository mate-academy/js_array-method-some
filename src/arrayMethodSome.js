'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    let resultSome = false;
    let i = 0;
    while (i < this.length && !resultSome) {
      if (callback(this[i], i, this)) {
        resultSome = true;
      }
      i++;
    }

    return resultSome;
  };
}

module.exports = applyCustomSome;
