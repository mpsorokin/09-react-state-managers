import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'
import postsReducer from './reducers';

const reduxThunkStore = createStore(postsReducer, applyMiddleware(thunk));

export default reduxThunkStore;