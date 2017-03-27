
'use babel'
import {compose} from 'redux';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {Routable, Documentable, Tagable, Testable, Typable} from '@offbyonestudios/yarl';

import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';

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
export default class RelicItem extends Component {
  static propTypes = {
    routeProps: PropTypes.object,
    item: React.PropTypes.string.isRequired,
    relic: React.PropTypes.string
  }

  constructor(props)
  {
    super(props);

    this.rarity = 0;
  }

  componentDidMount()
  {
    if (this.props.relic != undefined)
    {
      const relicData = libs.getRelicData(this.props.relic);
      let index = relicData['drops'].indexOf(this.props.item);
      if (index == 5) this.rarity = 3;
      else if (index >= 3) this.rarity = 2;
      else if (index >= 0) this.rarity = 1;
    }
  }

  itemImage() {
    return (
      <Image fit='contain' size='small'
        src={libs.itemToImage(this.props.item)}
      />)
  }

  render() {
    return (
      <Card contentPad='none' headingStrong={false} size='small'
        thumbnail={this.itemImage()}
        label={libs.itemToName(this.props.relic)} >
      </Card>
    );
  }
}
