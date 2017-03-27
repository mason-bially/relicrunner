
'use babel'
import {compose} from 'redux';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {Routable, Documentable, Tagable, Testable, Typable} from '@offbyonestudios/yarl';

import libs from '../libs'

import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

import RelicItem from './RelicItem';

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
    relic: `AThing`
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
export default class RelicDetails extends Component {
  static propTypes = {
    routeProps: PropTypes.object,
    relic: React.PropTypes.string
  }


  render() {
    if (this.props.relic == undefined || this.props.relic == '')
      return (
        <Box>
          <Title>No Relic Selected</Title>
        </Box>
      );

    const relicData = libs.getRelicData(this.props.relic);
    const items = relicData['drops'].map((e, i) => {
      const itemName = (e != 'forma') ? 'prime.' + e : e;
      return (
        <AccordionPanel key={i} heading={libs.itemToName(itemName)}>
          <RelicItem item={itemName} relic={this.props.relic} />
        </AccordionPanel>
      );
    });

    return (
      <Box>
        <Title>{libs.relicToName(this.props.relic)}</Title>
        <Accordion animate={false} openMulti={true}>
          {items}
        </Accordion>
      </Box>
    );
  }
}
