import axios from 'axios'
import {
    GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_REQUEST,
    GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_SUCCESS,
    GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_FAILED,
} from '../constants/commentConstants'
// import { ConfigFunction } from '../../utils/config'

const API = process.env.REACT_APP_NODE_API

// Get all comments for a single question
export const getAllCommentsForSingleQusestion = (questinId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_REQUEST
      })
      const config = {
        'Content-Type': 'application/json'
      }
  
      const { data } = await axios.get(
        `${API}/public/comments/${questinId}`,
        config
      )
      dispatch({
        type: GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }