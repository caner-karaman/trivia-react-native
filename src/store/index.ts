import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from './promise-middleware';
import root from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(root,  composeWithDevTools(
  applyMiddleware(promiseMiddleware),
));

export default store;
