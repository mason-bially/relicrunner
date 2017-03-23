
'use babel'
import {compose} from 'redux';

import {Reducable, Documentable, Tagable, Testable} from 'Yarl';

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
      app: {
        ...state.apps,
        docs: {
          ...state.apps.docs,
          index: action.index
        }
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
