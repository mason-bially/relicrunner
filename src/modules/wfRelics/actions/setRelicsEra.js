
'use babel'

import {compose} from 'redux';

import {Reducable, Documentable, Tagable, Testable} from '@offbyonestudios/yarl';

function setRelicsEra(era) {
  return {
    type: this.type,
    era
  }
}

export default compose(
  Reducable((state, action) => {
    return {
      ...state,
      wfRelics: {
        ...state.wfRelics,
        era: action.era
      }
    }
  }),
  Documentable({
    text: `
    # Action setRelicsEra
    Sets the era for the primary display of relics.
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
(setRelicsEra);
