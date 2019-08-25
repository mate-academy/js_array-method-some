'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    let resultSome = false;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        resultSome = true;
      }
    }

    return resultSome;
  };
}

module.exports = applyCustomSome;
