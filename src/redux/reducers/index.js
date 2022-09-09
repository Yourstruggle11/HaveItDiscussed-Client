import { combineReducers } from 'redux';
import { getAllCommentsForSingleQusestionReducer, likeDislikeCommentReducer, postNewCommentReducer } from './commentReducer';
import { createNewQuestionReducer, getAllQuestionsReducer, getSingleQuestionsReducer, likeDislikeQuestionReducer } from './questionReducer';
import { userSigninReducer } from './userReducer';

const rootReducer = combineReducers({
  userSignin: userSigninReducer,
  getAllQuestions:getAllQuestionsReducer,
  getSingleQuestions:getSingleQuestionsReducer,
  likeDislikeQuestion:likeDislikeQuestionReducer,
  getAllCommentsForSingleQusestion:getAllCommentsForSingleQusestionReducer,
  likeDislikeComment:likeDislikeCommentReducer,
  postNewComment:postNewCommentReducer,
  createNewQuestion:createNewQuestionReducer
});

export default rootReducer;
