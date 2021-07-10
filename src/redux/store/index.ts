import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const root = combineReducers({
	city: reducer,
});

const store = createStore(root, applyMiddleware(thunk));

export default store;
