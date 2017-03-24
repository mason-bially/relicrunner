import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';

import jquery from 'jquery';
import _ from 'underscore';


injectTapEventPlugin();

import Configure from './configure';
import Modules from './modules';
// import Tmp from './modules/tmp';
window.Context = Configure();

window.Context.Namespaces = (function () {
  const res = new Set([].concat(window.Context.Actions.map(((e) => {return e.namespace;})))
    .concat(window.Context.Components.map(((e) => {return e.namespace;})))
    .concat(window.Context.Containers.map(((e) => {return e.namespace;})))
    .concat(window.Context.Libs.map(((e) => {return e.namespace;}))));
  return [ ...res ].filter((e) => {return !([ '', 'types', 'queries', 'mutations' ].includes(e));});
}()).sort();

import devtools from './devtools';
window._ = _;
window.$ = jquery;
window._devtools = devtools;

window.$x = window.Context.Store.dispatch;

window.Babel = Babel;
const Layout = window.$c('.engine', '@layout');

function render() {
  ReactDOM.render((
  <AppContainer>
    <Provider store={window.Context.Store}>
      <Layout />
    </Provider>
  </AppContainer>
), document.getElementById('react-root'));
}
render();

if (module.hot) {
  module.hot.accept('./modules', render);
}
