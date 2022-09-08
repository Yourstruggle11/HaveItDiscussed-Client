import { combineReducers } from 'redux';
import { getAllCommentsForSingleQusestionReducer } from './commentReducer';
import { getAllQuestionsReducer, getSingleQuestionsReducer, likeDislikeQuestionReducer } from './questionReducer';
import { userSigninReducer } from './userReducer';

const rootReducer = combineReducers({
  userSignin: userSigninReducer,
  getAllQuestions:getAllQuestionsReducer,
  getSingleQuestions:getSingleQuestionsReducer,
  likeDislikeQuestion:likeDislikeQuestionReducer,
  getAllCommentsForSingleQusestion:getAllCommentsForSingleQusestionReducer
});

export default rootReducer;
