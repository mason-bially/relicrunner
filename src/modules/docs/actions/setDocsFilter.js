
'use babel'
import {compose} from 'redux';

import {Reducable, Documentable, Tagable, Testable} from '@offbyonestudios/yarl';

function setDocsFilter(filter) {
  return {
    type: this.type,
    filter
  }
}

export default compose(
  Reducable((state, action) => {
    return {
      ...state,
      docs: {
        ...state.docs,
        filter: action.filter
      }
    }
  }),
  Documentable({
    text:
    `
    # Action setDocsFilter
    TODO Document the Action name
    * Do Thing
    * Another Thing
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
