
'use babel'
import {compose} from 'redux';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {Routable, Documentable, Tagable, Testable, Typable} from '@offbyonestudios/yarl';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';

@Documentable({
  text:
  `
  This Component Shows there are no routes mounted
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
  platform: 'web',
})
@Typable("Nothing")
@Routable("emptyRoute", {
    displayName: "Empty Route",
    icon: "ship",
    shortDescription: "It's the thing you are looking at right meow"
  }
)
@connect((state) => {
  return {
    //thismodule: state.app.thismodule
  };
})
export default class emptyRoute extends Component {
  static propTypes = {
    routeProps: PropTypes.object
  }


  render() {
    let items = Object.keys(Context.Routes).map((e, i) => {
      return (
        <Tile key={i} onClick={() => {$d($a("setNav")(e))}}>
          <Card thumbnail={<i className={Context.Routes[e].icon} aria-hidden="true" />}
            label={e}
            colorIndex='neutral-1'
            heading={Context.Routes[e].displayName}
            description={Context.Routes[e].shortDescription}
          />
        </Tile>
      );
    });

    return (
      <Tiles fill>
        {items}
      </Tiles>
    );
  }
}
