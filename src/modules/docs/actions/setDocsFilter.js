
'use babel'
import {compose} from 'redux';

import {Reducable, Documentable, Tagable, Testable} from 'Yarl';

function setDocsFilter(query) {
  return {
    type: this.type,
    query
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
          filter: action.query
        }
      }
    }
  }),
  Documentable({
    text: `
    # Action setDocsFilter
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
(setDocsFilter);
