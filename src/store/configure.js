import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from 'ducks';
console.log(reducers);
const isDev = process.env.NODE_ENV === 'development';

const devTools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;
const middlewares = [
    promiseMiddleware(),
];

/**
 * Redux Configure
 * @param {object} preloadedState - App's initial State
 */
const configure = preloadedState => createStore(
  reducers,
  preloadedState, // 초기 state 설정하려면 이 곳에서
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default configure;