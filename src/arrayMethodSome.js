'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    let result;

    for (let i = 0; i < this.length; i++) {
      result = callback(this[i], i, this);
    }

    return result || false;
  };
}

module.exports = applyCustomSome;
