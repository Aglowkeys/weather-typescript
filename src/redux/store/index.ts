import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

export type RootState = ReturnType<typeof reducer>;

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
