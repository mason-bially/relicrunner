
'use babel'

import {compose} from 'redux';

import {Reducable, Documentable, Tagable, Testable} from '@offbyonestudios/yarl';

function setRelicsFilter(filter) {
  return {
    type: this.type,
    filter
  }
}

export default compose(
  Reducable((state, action) => {
    return {
      ...state,
      wfRelics: {
        ...state.wfRelics,
        filter: action.filter
      }
    }
  }),
  Documentable({
    text: `
    # Action setRelicsFilter
    Sets the search filter for the primary display of relics.
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
(setRelicsFilter);
