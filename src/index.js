

// Import This First
import Yarl from 'yarl';

// Then Load Modules.
import modules from './modules';

// Gather your default state
const defaultState = Yarl.extractDefaultState(modules);

// Then Invoke Yarl's Entrypoint
window.Context = Yarl.entrypoint(defaultState);

// Finally, Invoke Render
Yarl.render();
