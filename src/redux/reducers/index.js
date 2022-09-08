import { combineReducers } from 'redux';
import { getAllCommentsForSingleQusestionReducer, likeDislikeCommentReducer } from './commentReducer';
import { getAllQuestionsReducer, getSingleQuestionsReducer, likeDislikeQuestionReducer } from './questionReducer';
import { userSigninReducer } from './userReducer';

const rootReducer = combineReducers({
  userSignin: userSigninReducer,
  getAllQuestions:getAllQuestionsReducer,
  getSingleQuestions:getSingleQuestionsReducer,
  likeDislikeQuestion:likeDislikeQuestionReducer,
  getAllCommentsForSingleQusestion:getAllCommentsForSingleQusestionReducer,
  likeDislikeComment:likeDislikeCommentReducer
});

export default rootReducer;
