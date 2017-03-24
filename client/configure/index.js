import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
//import createLogger from 'redux-logger';
//import promiseMiddleware from 'redux-promise';

window.Context = {
  Actions: [],
  Components: [],
  Libs: [],
  Reducers: {},
  StoreInfo: []
}

export function Actions(obj, meta) {
  Context.Actions.push({
    meta,
    obj
  });
}

export function Components(obj, meta) {
  Context.Components.push( {
    meta,
    obj
  });
}

export function Libs(obj, meta) {
  Context.Libs.push( {
    meta,
    obj
  });
}

export function Reducers(obj, meta) {
  Context.Reducers[meta["name"]] = obj;
  Context.StoreInfo.push(meta);
}

export default function() {
    let reducer = combineReducers(Context.Reducers);
    
    const middlewares = [
      //createLogger(),
      //promiseMiddleware
    ];
    Context.Store = createStore(
      reducer, {},
      composeWithDevTools(autoRehydrate(applyMiddleware(...middlewares)))
    );

    //persistStore(Context.Store);
}
