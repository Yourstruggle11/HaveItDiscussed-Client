import { combineReducers } from 'redux';
import { getAllQuestionsReducer, getSingleQuestionsReducer } from './questionReducer';
import { userSigninReducer } from './userReducer';

const rootReducer = combineReducers({
  userSignin: userSigninReducer,
  getAllQuestions:getAllQuestionsReducer,
  getSingleQuestions:getSingleQuestionsReducer
});

export default rootReducer;
