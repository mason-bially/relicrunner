
'use babel'
import {compose} from 'redux';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import libs from '../libs';

import {Routable, Documentable, Tagable, Testable, Typable} from '@offbyonestudios/yarl';

import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

@Documentable({
  text:
  `
  #
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
    wfItems: state.app.wfItems
  };
})
export default class ItemImage extends Component {
  static propTypes = {
    routeProps: PropTypes.object,
    wfItems: PropTypes.object,
    item: PropTypes.string.isRequired,
  }


  render() {
    const item_parts = this.props.item.split('.');
    const is_bp = item_parts[item_parts.length - 1] == 'bp';

    const img_src = libs.itemToImage(this.props.item);
    const is_default = img_src.includes("default");

    return (
      <Box size='small'>
        {is_bp && <Image src='avt/items/bp_bg.png' style={{position: 'absolute', top: '2%', left: 0}} />}
        {!is_default && <Image src={img_src} style={{position: 'absolute', top: 0, left: 0}} />}
      </Box>
    );
  }
}
