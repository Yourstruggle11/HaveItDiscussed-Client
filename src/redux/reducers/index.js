import { combineReducers } from 'redux';
import { getAllQuestionsReducer, getSingleQuestionsReducer, likeDislikeQuestionReducer } from './questionReducer';
import { userSigninReducer } from './userReducer';

const rootReducer = combineReducers({
  userSignin: userSigninReducer,
  getAllQuestions:getAllQuestionsReducer,
  getSingleQuestions:getSingleQuestionsReducer,
  likeDislikeQuestion:likeDislikeQuestionReducer
});

export default rootReducer;
