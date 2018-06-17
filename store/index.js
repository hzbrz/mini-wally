import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import reducers from '../reducers';

const store = createStore(
  {},
  {},
  compose(applyMiddleware(thunk))
);

export default store;
