
'use babel'
import {compose} from 'redux';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {Routable, Documentable, Tagable, Testable, Typable} from '@offbyonestudios/yarl';

import libs from '../libs'

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

import RelicItem from './RelicItem';

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
@connect((state) => {
  return {
    wfRelics: state.app.wfRelics
  };
})
export default class RelicDetails extends Component {
  static propTypes = {
    routeProps: PropTypes.object,
    relic: React.PropTypes.string
  }


  render() {
    if (this.props.relic == undefined || this.props.relic == '')
      return (
        <Box>
          <Heading>No Relic Selected</Heading>
        </Box>
      );

    const relicData = libs.getRelicData(this.props.relic);
    const items = relicData['drops'].map((e, i) => {
      const itemName = (e != 'forma') ? 'prime.' + e : e;
      return (
        <AccordionPanel key={i} pad='none'
          heading={<Heading tag='h6'>{libs.items.itemToName(itemName)}</Heading>}>
          <RelicItem item={itemName} relic={this.props.relic} />
        </AccordionPanel>
      );
    });

    return (
      <Box>
        <Heading tag='h1'>{libs.relicToName(this.props.relic)}</Heading>
        <Heading tag='h3'>Contents</Heading>
        <Accordion animate={false} openMulti={false} size='xsmall'>
          {items}
        </Accordion>
      </Box>
    );
  }
}
