import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import blog from './reducers/blog';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
	blog: blog,
});

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk)),
);

export default store;
