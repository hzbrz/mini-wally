import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import reducers from '../redux/reducers';

const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(thunk))
);

export default store;
