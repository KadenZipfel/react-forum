import {combineReducers} from 'redux';
import errors from './errors';
import currentUser from './currentUser';
import posts from './posts';
import post from './post';

const rootReducer = combineReducers({
  errors,
  currentUser,
  posts,
  post
});

export default rootReducer