
// Load any external stuff you need.
// import 'grommet/scss/vanilla/index';
// Import This First Before importing your modules or other Yarl content.
import Yarl from 'yarl';

// Then Load Modules.
import modules from './modules';

// Gather your default state
const defaultState = Yarl.extractDefaultState(modules);

// Then Invoke Yarl's Entrypoint
window.Context = Yarl.entrypoint(defaultState);


// These shorthand methods help with dispatching actions from the command line
window.$d = (actionType) => {
  return window.Context.Store.dispatch(actionType);
}
window.$a = (actionName) => {
  return window.Context.Actions[actionName];
}

window.stahp = (e) => {
  e.preventDefault();
  return false;
}
// Finally, Invoke Render
Yarl.render();
