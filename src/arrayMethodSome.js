'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    // write code here
    return this.find(callback) !== undefined;
  };
}

module.exports = applyCustomSome;
