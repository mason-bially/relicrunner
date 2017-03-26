
'use babel'
import {compose} from 'redux';

import {Reducable, Documentable, Tagable, Testable} from '@offbyonestudios/yarl';

function setDocsIndex(index) {
  return {
    type: this.type,
    index: index
  }
}

export default compose(
  Reducable((state, action) => {
    return {
      ...state,
      docs: {
        ...state.docs,
        index: action.index
      }
    }
  }),
  Documentable({
    text: `
    # Action setDocsIndex
    TODO Document the Action name
    `,
    args: {

    }
  }),
  Tagable({
    platform: 'any',
    async: false,
  }),
  Testable({
    'Is a Tautology': () => {
        return true;
    },
  }))
(setDocsIndex);
