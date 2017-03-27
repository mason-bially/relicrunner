
'use babel'
import {compose} from 'redux';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import libs from '../libs';

import {Routable, Documentable, Tagable, Testable, Typable} from '@offbyonestudios/yarl';

@Documentable({
  text:
  `
  #
  `,
  propTypes: {
    foo: `AThing`
  }
})
@Testable({
  'This Is Always True': () => {
      return true;
  },
})
@Tagable({
  platform: 'any',
})
@Typable("Nothing")
@Routable(false, {})
@connect((state) => {
  return {
    wfItems: state.app.wfItems
  };
})
export default class Item extends Component {
  static propTypes = {
    routeProps: PropTypes.object,
    wfItems: PropTypes.object,
  }


  render() {
    return (
      <div>
        Item
      </div>
    );
  }
}
