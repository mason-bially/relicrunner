
'use babel'

import {compose} from 'redux';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {Routable, Documentable, Tagable, Testable, Typable} from '@offbyonestudios/yarl';

import Split from 'grommet/components/Split';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import App from 'grommet/components/App';
import Columns from 'grommet/components/Columns';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Sidebar from 'grommet/components/Sidebar';
import Title from 'grommet/components/Title';
import Footer from 'grommet/components/Footer';
import Image from 'grommet/components/Image';
import Button from 'grommet/components/Button';
import Search from 'grommet/components/Search';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Select from 'grommet/components/Select';

import CarretPrevious from 'grommet/components/icons/base/CaretPrevious';

import FilterControl from 'grommet-addons/components/FilterControl';

import Relic from './Relic'
import RelicDetails from './RelicDetails'

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
@Routable("RelicBrowser", {
  displayName: "Browse: Relics",
  icon: "relic",
  shortDescription: "Browse warframe relics!"
})
@connect((state) => {
  return {
    wfRelics: state.app.wfRelics
  };
})
export default class RelicBrowser extends Component {
  static propTypes = {
    routeProps: PropTypes.object,
    wfRelics: PropTypes.object,
  }

  static eraList = ['lith', 'meso', 'neo', 'axi']
  static eraIndex = {'lith': 0, 'meso': 1, 'neo': 2, 'axi': 3}
  static searchTypes = [
    {"value": { vaulted: false, special: false }, "label": "Aquireable"},
    {"value": { vaulted: null, special: null }, "label": "All"},
    {"value": { vaulted: true, special: false }, "label": "Vaulted"},
    {"value": { vaulted: false, special: true }, "label": "Special"},
  ]

  constructor(props)
  {
    super(props);
    this.state = {
      filterShown: false
    };
  }

  render() {
    const era = this.props.wfRelics.era;
    const react_eras = RelicBrowser.eraList.map((e, i) => {
      return (<Tab key={i} title={e.toUpperCase()} />);
    });

    const relics = Object.keys(libs.constants.relics[era]);

    const filter = this.props.wfRelics.filter;

    const filtered_relics = relics.filter((e) => {
      const name = `${era}.${e}`;
      const relic_data = libs.getRelicData(name);
      if (filter.vaulted != null && filter.vaulted != relic_data.vaulted) return false;
      if (filter.special != null && filter.special != relic_data.special) return false;

      if (filter.text != '')
      {
        const terms = filter.text.toLowerCase().split(' ');
        const search_strs = [name].concat(relic_data.drops.map(e => libs.items.itemToName(e).toLowerCase()));
        if (!search_strs.map((s) => {
          return terms.every((t) => { return s.includes(t); });
        }).some(t => t)) return false;
      }
      return true;
    });

    const react_relics = filtered_relics.map((e, i) => {
      const name = `${era}.${e}`;
      return (
        <Tile key={i}
          onClick={() => $d($a("setRelicName")(name))} >
          <Relic relic={name} />
        </Tile>
      );
    });

    return (
      <App>
        <Header>
          <Search inline={true} fill={true} size='medium' dropAlign={{"left": "left"}}
            placeHolder='Search'
            onDOMChange={(e) => { $d($a("setRelicsFilter")({text: e.target.value})); }}
          />
          <FilterControl
            onClick={() => { this.setState({filterShown: !this.state.filterShown}) }}
            unfilteredTotal={relics.length}
            filteredTotal={filtered_relics.length} />
          <Tabs activeIndex={RelicBrowser.eraIndex[era]}
            onActive={(e) => { $d($a("setRelicsEra")(RelicBrowser.eraList[e])); }}>
            {react_eras}
          </Tabs>
        </Header>
        <Article>
          {this.state.filterShown &&
            <Section>
              <Box>
                <Select
                  inline={true}
                  value={RelicBrowser.searchTypes.find(
                    (v) => { return v.value.special == filter.special && v.value.vaulted == filter.vaulted }
                  )}
                  options={RelicBrowser.searchTypes}
                  onChange={(v) => { $d($a("setRelicsFilter")(v.option.value)); }}
                />
              </Box>
            </Section>}
          <Section>
            <Split flex="left">
              <Box colorIndex='neutral-1' justify='center' align='center' pad='medium'>
                <Tiles size="small">
                  {react_relics}
                </Tiles>
              </Box>
              <Box colorIndex='neutral-2' justify='center' align='center' pad='medium'>
                <RelicDetails relic={this.props.wfRelics.relic} />
              </Box>
            </Split>
          </Section>
        </Article>
        <Footer> </Footer>
      </App>
    );
  }
}
