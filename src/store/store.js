import { compose, createStore, applyMiddleware } from 'redux';

import { rootReducer } from './root-reducer';

const middlewares = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
