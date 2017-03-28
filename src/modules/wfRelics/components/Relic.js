
'use babel'
import {compose} from 'redux';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {Routable, Documentable, Tagable, Testable, Typable} from '@offbyonestudios/yarl';

import Title from 'grommet/components/Title';
import Card from 'grommet/components/Card';
import Image from 'grommet/components/Image';

import libs from '../libs'

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
@connect((state) => {
  return {
    wfRelics: state.app.wfRelics
  };
})
export default class Relic extends Component {
  static propTypes = {
    routeProps: PropTypes.object,
    relic: React.PropTypes.string.isRequired,
    view: React.PropTypes.string,
  }

  relicImage() {
    return (
      <Image fit='contain' size='small'
        src={libs.relicToImage(this.props.relic)}
      />)
  }

  render() {
    switch(this.props.view)
    {
      case 'title':
        return (
          <Title>
            {libs.relicToName(this.props.relic)}
          </Title>
        );
      default:
      case 'card':
        return (
          <Card contentPad='none' headingStrong={false}
            thumbnail={this.relicImage()}
            label={libs.relicToName(this.props.relic)} >
          </Card>
        );
    }
  }
}
