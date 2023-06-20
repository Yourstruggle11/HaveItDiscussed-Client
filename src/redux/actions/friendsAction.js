import axios from 'axios'
import {
    ADD_FRIEND_REQUEST,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILED
} from '../constants/friendsConstants'
import { ConfigFunction } from '../../utils/config'
import { useParams } from 'react-router-dom'
import { getUserProfileDetails } from './userActivityAction'

const API = process.env.REACT_APP_NODE_API

// Add friend
export const addFriend = (recipientId,userName, userNo) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_FRIEND_REQUEST
        })
        const {
            userSignin: { userInfo }
        } = getState()
        const config = ConfigFunction(userInfo)

        const { data } = await axios.post(
            `${API}/private/friends/add-friend`,
            { recipientId },
            config
        )
        if(data?.success){
            dispatch(getUserProfileDetails(userName, userNo)) 
        }
        dispatch({
            type: ADD_FRIEND_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_FRIEND_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
