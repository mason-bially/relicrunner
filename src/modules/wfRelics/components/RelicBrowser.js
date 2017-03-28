
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
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
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

  static eraList = ['', 'lith', 'meso', 'neo', 'axi']
  static eraIndex = {'': 0, 'lith': 1, 'meso': 2, 'neo': 3, 'axi': 4}
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

  getRelics()
  {
    const era = this.props.wfRelics.era;
    if (era == '') {
      return Object.keys(libs.constants.relics)
        .map(era => Object.keys(libs.constants.relics[era]).map(k => `${era}.${k}`))
        .reduce((acc, val) => acc.concat(val), []);
    }
    else {
      return Object.keys(libs.constants.relics[era])
        .map(k => `${era}.${k}`);
    }
  }

  _onTabClick(e)
  {
    const clicked_on_current = RelicBrowser.eraIndex[this.props.wfRelics.era] == e;

    $d($a("setRelicsEra")((clicked_on_current) ? '' : RelicBrowser.eraList[e]));
  }

  render() {
    const react_eras = RelicBrowser.eraList.map((e, i) => {
      return (<Tab key={i} title={e.toUpperCase()} />);
    });

    const relics = this.getRelics();

    const filter = this.props.wfRelics.filter;
    const filtered_relics = relics.filter((relic) => {
      const relic_data = libs.getRelicData(relic);
      if (filter.vaulted != null && filter.vaulted != relic_data.vaulted) return false;
      if (filter.special != null && filter.special != relic_data.special) return false;

      if (filter.text != '')
      {
        const terms = filter.text.toLowerCase().split(' ');
        const search_strs = [relic].concat(relic_data.drops.map(e => libs.items.itemToName(e).toLowerCase()));
        if (!search_strs.map((s) => {
          return terms.every((t) => { return s.includes(t); });
        }).some(t => t)) return false;
      }
      return true;
    });

    const react_relics = filtered_relics.map((relic, i) => {
      return (
        <ListItem key={i}
          onClick={() => $d($a("setRelicName")(relic))} >
          <Relic relic={relic} view='title' />
        </ListItem>
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
          <Tabs activeIndex={RelicBrowser.eraIndex[this.props.wfRelics.era]}
            onActive={e => this._onTabClick(e)} >
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
            <Split flex='right'>
              <Sidebar colorIndex='neutral-1' justify='start' size='small'>
                <List>
                  {react_relics}
                </List>
              </Sidebar>
              <Box colorIndex='neutral-2' justify='start' pad='small'>
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
