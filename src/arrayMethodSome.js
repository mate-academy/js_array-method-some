'use strict';

/**
 * Implement method Some
 */
function applyCustomSome() {
  [].__proto__.some2 = function(callback) {
    const items = this;

    for (let i = 0; i < items.length; i++) {
      if (callback(items[i], i, items)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomSome;
