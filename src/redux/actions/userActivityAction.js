import axios from 'axios'
import {
    GET_USER_PROFILE_DETAILS_REQUEST,
    GET_USER_PROFILE_DETAILS_SUCCESS,
    GET_USER_PROFILE_DETAILS_FAILED,
    USER_PROFILE_UPDATE_REQUEST,
    USER_PROFILE_UPDATE_SUCCESS,
    USER_PROFILE_UPDATE_FAILED
} from '../constants/userActivityConstants'
import { ConfigFunction } from '../../utils/config'

const API = process.env.REACT_APP_NODE_API

// Get user profile details by username and userNo
export const getUserProfileDetails =
    (userName, userNo) => async (dispatch, getState) => {
        try {
            dispatch({
                type: GET_USER_PROFILE_DETAILS_REQUEST
            })

            const {
                userSignin: { userInfo }
            } = getState()

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const { data } = await axios.get(
                `${API}/public/user-activities/${userNo}/${userName}?viewerId=${userInfo?.id}`,
                config
            )
            dispatch({
                type: GET_USER_PROFILE_DETAILS_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: GET_USER_PROFILE_DETAILS_FAILED,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
            })
        }
    }

// Update user profile
export const updateUserProfile = (userProfileBody) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_PROFILE_UPDATE_REQUEST
        })
        const {
            userSignin: { userInfo }
        } = getState()
        const config = ConfigFunction(userInfo)

        const { data } = await axios.put(
            `${API}/private/user-activities/update-profile`,
            userProfileBody,
            config
        )
        dispatch({
            type: USER_PROFILE_UPDATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_PROFILE_UPDATE_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
