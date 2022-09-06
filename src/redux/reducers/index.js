import { combineReducers } from 'redux';
import { getAllQuestionsReducer } from './questionReducer';
import { userSigninReducer } from './userReducer';

const rootReducer = combineReducers({
  userSignin: userSigninReducer,
  getAllQuestions:getAllQuestionsReducer
});

export default rootReducer;
