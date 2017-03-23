
'use babel'
import {compose} from 'redux';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {Routable, Documentable, Tagable, Testable, Typable} from 'yarl';

import constants from '../libs/constants';

@connect((state) => {
  return {
    docs: state.app.docs
  };
})
@Documentable({
  text:
  `
  This Component Lets users view Documentation
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
@Routable("viewDocs")
export default class viewDocs extends Component {
  static propTypes = {
    routeProps: PropTypes.object
  }


  render() {
    console.log(this.props);
    const {filter, index} = this.props.docs;
    const menuItems = Object.keys(Context.Documents).filter((e, i) => {
      return (filter === "" || e.includes(filter));
    }).map((e, i) => {
      return (
        <li key={i} className="collection-item" onClick={()=>{$d($a("setDocsIndex")(e))}}>
          {e}
        </li>
      )
    });

    const active = (Context.Documents[index] !== undefined) ?
      Context.Documents[index] :
      {text: 'Find a Doc', args: {}, propTypes: {}};
    return (
      <div style={constants.styles.viewDoc}>
        <div style={constants.styles.docMenuContainer}>
        <ul className="collection">
          {menuItems}
        </ul>
        </div>
        <div style={constants.styles.docBodyContainer}>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Text</span>
              {active.text}
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
