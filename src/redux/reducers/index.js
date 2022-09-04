import { combineReducers } from 'redux';
;
import { userSigninReducer } from './userReducer';

const rootReducer = combineReducers({
  userSignin: userSigninReducer,
});

export default rootReducer;
