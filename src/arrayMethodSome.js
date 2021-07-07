'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    const rezultarray = [];

    for (let i = 0; i < this.length; i++) {
      rezultarray.push(callback(this[i], i, this));
    }

    return rezultarray.includes(true);
  };
}

module.exports = applyCustomSome;
