import {
    GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_REQUEST,
    GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_SUCCESS,
    GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_FAILED,
  } from '../constants/commentConstants'



  ///    GET ALL COMMENTS FOR A SINGLE QUESTION    ///
export const getAllCommentsForSingleQusestionReducer = (
    state = {
      loading: false,
      data: null,
      isAuthenticated: false,
      error: null
    },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_REQUEST:
        return {
            ...state,
          loading: true
        }
      case GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_SUCCESS:
        return {
            ...state,
          loading: false,
          isAuthenticated: true,
          data: action.payload
        }
      case GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_FAILED:
        return {
            ...state,
          loading: false,
          data: null,
          error: action.payload
        }
      default:
        return state
    }
  }