
'use babel'
import {compose} from 'redux';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {Routable, Documentable, Tagable, Testable, Typable} from '@offbyonestudios/yarl';

import Card from 'grommet/components/Card';
import Image from 'grommet/components/Image';

import libs from '../libs'

@connect((state) => {
  return {
    //thismodule: state.app.thismodule
  };
})
@Documentable({
  text:
  `
  This Component Shows there are no routes mounted
  `,
  propTypes: {
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
export default class Relic extends Component {
  static propTypes = {
    routeProps: PropTypes.object,
    relic: React.PropTypes.string.isRequired
  }

  relicImage() {
    return (
      <Image fit='contain' size='small'
        src={libs.relicToImage(this.props.relic)}
      />)
  }

  render() {
    return (
      <Card contentPad='none' headingStrong={false} size='small'
        thumbnail={this.relicImage()}
        label={libs.relicToName(this.props.relic)} >
      </Card>
    );
  }
}
