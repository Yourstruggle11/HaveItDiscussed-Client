import {
    GET_ALL_QUESTIONS_REQUEST,
    GET_ALL_QUESTIONS_SUCCESS,
    GET_ALL_QUESTIONS_FAILED,
    GET_SINGLE_QUESTIONS_REQUEST,
    GET_SINGLE_QUESTIONS_SUCCESS,
    GET_SINGLE_QUESTIONS_FAILED,
  } from '../constants/questionConstants'



  ///    GET ALL QUESTIONS    ///
export const getAllQuestionsReducer = (
    state = {
      loading: false,
      data: null,
      isAuthenticated: false,
      error: null
    },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_QUESTIONS_REQUEST:
        return {
            ...state,
          loading: true
        }
      case GET_ALL_QUESTIONS_SUCCESS:
        return {
            ...state,
          loading: false,
          isAuthenticated: true,
          data: action.payload
        }
      case GET_ALL_QUESTIONS_FAILED:
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



  ///    GET SINGLE QUESTIONS    ///
export const getSingleQuestionsReducer = (
    state = {
      loading: false,
      data: null,
      isAuthenticated: false,
      error: null
    },
    action
  ) => {
    switch (action.type) {
      case GET_SINGLE_QUESTIONS_REQUEST:
        return {
            ...state,
          loading: true
        }
      case GET_SINGLE_QUESTIONS_SUCCESS:
        return {
            ...state,
          loading: false,
          isAuthenticated: true,
          data: action.payload
        }
      case GET_SINGLE_QUESTIONS_FAILED:
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