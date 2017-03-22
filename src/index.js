

// Import This First
import Yarl from 'yarl';
console.log(yarl);

// Then Load Modules.
import modules from './modules';

// Gather your default state
let defaultState = Object.keys(modules).reduce((st, e)=> {
    if (modules[e].defaultState) {
      st[e] = modules[e].defaultState
    }
    return st;
}, {})

// Then Invoke Yarl's Entrypoint
window.Context = Yarl.entrypoint(defaultState);

// Finally, Invoke Render
Yarl.render();
