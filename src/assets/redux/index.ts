import { combineReducers, createStore } from 'redux';
import { loginReducer } from './reducer-list';

const rootReducer = combineReducers({
  login: loginReducer,
});

export const store = createStore(rootReducer);
