import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

export function configureStore(initialState) {
  console.log('connS');
  const store = createStore(rootReducer, initialState);
  console.log( store + ' conS');
  return store;
}
