'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const nextState = { ...state };
  const arr = [];

  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(nextState, extraData);
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          delete nextState[key];
        }
        break;

      case 'clear':
        for (const key in nextState) {
          delete nextState[key];
        }
        break;
    }

    arr.push({ ...nextState });
  }

  return arr;
}

module.exports = transformStateWithClones;
