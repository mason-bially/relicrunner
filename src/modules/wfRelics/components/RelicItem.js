
'use babel'
import {compose} from 'redux';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import libs from '../libs'

import {Routable, Documentable, Tagable, Testable, Typable} from '@offbyonestudios/yarl';

import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

import ItemImage from '../../wfItems/components/ItemImage';

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
export default class RelicItem extends Component {
  static propTypes = {
    routeProps: PropTypes.object,
    item: PropTypes.string.isRequired,
    relic: PropTypes.string
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
        src={libs.items.itemToImage(this.props.item)}
      />)
  }

  render() {
    const item_data = libs.items.getItemData(this.props.item);

    return (
      <Box colorIndex='neutral-1'>
        <Split>
          <Sidebar><ItemImage item={this.props.item} /></Sidebar>
          <List>
            {item_data.is_part &&
              <ListItem justify='between'>
                <span>Required</span>
                <span className='secondary'>{item_data.part.count}</span>
              </ListItem>}
          </List>
        </Split>
      </Box>
    );
  }
}
