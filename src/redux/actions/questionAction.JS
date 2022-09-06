import axios from 'axios'
import {
    GET_ALL_QUESTIONS_REQUEST,
    GET_ALL_QUESTIONS_SUCCESS,
    GET_ALL_QUESTIONS_FAILED,
} from '../constants/questionConstant'

const API = process.env.REACT_APP_NODE_API
// Get all questions
export const getAllQuestions = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_QUESTIONS_REQUEST
      })
      const config = {
        'Content-Type': 'application/json'
      }
  
      const { data } = await axios.get(
        `${API}/public/discussion/get-all-questions`,
        body,
        config
      )
      dispatch({
        type: GET_ALL_QUESTIONS_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: GET_ALL_QUESTIONS_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }