
'use babel'
import {compose} from 'redux';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Remarkable from 'remarkable';
import {Routable, Documentable, Tagable, Testable, Typable} from 'yarl';

import Split from 'grommet/components/Split';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Sidebar from 'grommet/components/Sidebar';
import Title from 'grommet/components/Title';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Search from 'grommet/components/Search';
import CarretPrevious from 'grommet/components/icons/base/CaretPrevious';

@Documentable({
  text:
  `
  This Component Lets users view Documentation. It's the one you are using right now
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
  platform: 'any',
})
@Typable("Nothing")
@Routable("viewDocs", {
    displayName: "Documentation",
    icon: "books",
    shortDescription: "Read the Docs of this project"
  })
@connect((state, ownProps) => {
  return {
    docs: state.app.docs
  };
})
export default class viewDocs extends Component {
  static propTypes = {
    routeProps: PropTypes.object
  }

  getRawMarkup(text) {
    let md = new Remarkable();
    return { __html: md.render(text.replace('    ', '')) };
  }

  render() {
    const {filter, index} = this.props.docs;
    const menuItems = Object.keys(Context.Documents).filter((e, i) => {
      return (filter === "" || e.includes(filter));
    }).map((e, i) => {
      return (
        <Anchor onClick={(f) =>{$d($a("setDocsIndex")(e)); stahp(f);}}
          key={i} href='#' className={(e == index) ? 'active' : ''}>
          {e}
        </Anchor>
      )
    });

    const active = (Context.Documents[index] !== undefined) ?
      Context.Documents[index] :
      {text: 'Find a Doc', args: {}, propTypes: {}};
    return (
      <App centered={false}>
        <Split flex={"right"}>
          <Sidebar colorIndex='neutral-1'>
            <Header pad='medium'
              justify='between'>
              <Search placeHolder='Search' inline={true}
                onDOMChange={(e)=>{$d($a("setDocsFilter")(e.target.value))}} />
              <Anchor href="#">
                <CarretPrevious onClick={(e)=>{$d($a("backNav")(e.target.value))}} />
              </Anchor>
            </Header>
            <Box flex='grow' justify='start'>
              <Menu primary={true}>
                {menuItems}
              </Menu>
            </Box>

          </Sidebar>

          <Box colorIndex='neutral-2' justify='center' align='center' pad='medium'>
            <Article>
              <Header pad='medium'
                justify='between'>
                <Title>
                  {(index !== "") ? index: "Yarl Docs"}
                </Title>
              </Header>
              <Section>
              <div style={{width:"100%", height: "100%"}}
                dangerouslySetInnerHTML={this.getRawMarkup(active.text)} />
              </Section>
            </Article>
          </Box>
        </Split>
      </App>
    );
  }
}
