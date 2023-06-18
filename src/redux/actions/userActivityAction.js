import axios from 'axios'
import {
    GET_USER_PROFILE_DETAILS_REQUEST,
    GET_USER_PROFILE_DETAILS_SUCCESS,
    GET_USER_PROFILE_DETAILS_FAILED,
} from '../constants/userActivityConstants'
import { ConfigFunction } from '../../utils/config'

const API = process.env.REACT_APP_NODE_API

// Get user profile details by username and userNo
export const getUserProfileDetails = (userName,userNo) => async (dispatch) => {
    try {
      dispatch({
        type: GET_USER_PROFILE_DETAILS_REQUEST,
      });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.get(
        `${API}/public/user-activities/${userNo}/${userName}`,
        config
      );
      dispatch({
        type: GET_USER_PROFILE_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_USER_PROFILE_DETAILS_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };