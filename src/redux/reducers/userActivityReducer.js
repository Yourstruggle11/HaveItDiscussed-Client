import { toast } from "react-toastify";
import {
    GET_USER_PROFILE_DETAILS_REQUEST,
    GET_USER_PROFILE_DETAILS_SUCCESS,
    GET_USER_PROFILE_DETAILS_FAILED,
} from "../constants/userActivityConstants";



///    GET USER PROFILE DETAILS BY USER NAME AND USER NO  ///
export const getUserProfileDetailsReducer = (
    state = {
      loading: false,
      data: null,
      error: null,
    },
    action
  ) => {
    switch (action.type) {
      case GET_USER_PROFILE_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_USER_PROFILE_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case GET_USER_PROFILE_DETAILS_FAILED:
        toast.error(action.payload, {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return {
          ...state,
          loading: false,
          data: null,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };