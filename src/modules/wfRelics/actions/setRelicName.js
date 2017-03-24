
'use babel'

import {compose} from 'redux';

import {Reducable, Documentable, Tagable, Testable} from 'yarl';

function setRelicName(relic) {
  return {
    type: this.type,
    relic
  }
}

export default compose(
  Reducable((state, action) => {
    return {
      ...state,
      wfRelics: {
        ...state.wfRelics,
        relic: action.relic
      }
    }
  }),
  Documentable({
    text: `
    # Action setRelicName
    Set the name of the primary relic we are inspecting.
    `,
    args: {

    }
  }),
  Tagable({
    platform: 'any',
    async: false,
  }),
  Testable({
  }))
(setRelicName);
