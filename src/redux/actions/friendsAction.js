import axios from 'axios'
import {
    ADD_FRIEND_REQUEST,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILED,
    CANCEL_FRIEND_REQUEST,
    CANCEL_FRIEND_SUCCESS,
    CANCEL_FRIEND_FAILED,
    ACCEPT_FRIEND_REQUEST,
    ACCEPT_FRIEND_SUCCESS,
    ACCEPT_FRIEND_FAILED,
    REMOVE_FRIEND_REQUEST,
    REMOVE_FRIEND_SUCCESS,
    REMOVE_FRIEND_FAILED
} from '../constants/friendsConstants'
import { ConfigFunction } from '../../utils/config'
import { getUserProfileDetails } from './userActivityAction'

const API = process.env.REACT_APP_NODE_API

// Add friend
export const addFriend =
    (recipientId, userName, userNo) => async (dispatch, getState) => {
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
            if (data?.success) {
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

// Cancel friend request
export const cancelFriendRequest =
    (recipientId, userName, userNo) => async (dispatch, getState) => {
        try {
            dispatch({
                type: CANCEL_FRIEND_REQUEST
            })
            const {
                userSignin: { userInfo }
            } = getState()
            const config = ConfigFunction(userInfo)

            const { data } = await axios.post(
                `${API}/private/friends/cancel-request`,
                { recipientId },
                config
            )
            if (data?.success) {
                dispatch(getUserProfileDetails(userName, userNo))
            }
            dispatch({
                type: CANCEL_FRIEND_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: CANCEL_FRIEND_FAILED,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
            })
        }
    }

// Accept friend request
export const acceptFriendRequest =
    (senderId, userName, userNo) => async (dispatch, getState) => {
        try {
            dispatch({
                type: ACCEPT_FRIEND_REQUEST
            })
            const {
                userSignin: { userInfo }
            } = getState()
            const config = ConfigFunction(userInfo)

            const { data } = await axios.post(
                `${API}/private/friends/accept-friend-request`,
                { senderId },
                config
            )
            if (data?.success) {
                dispatch(getUserProfileDetails(userName, userNo))
            }
            dispatch({
                type: ACCEPT_FRIEND_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: ACCEPT_FRIEND_FAILED,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
            })
        }
    }

// Remove a friend from friend list
export const removeFriend =
    (friendId, userName, userNo) => async (dispatch, getState) => {
        try {
            dispatch({
                type: REMOVE_FRIEND_REQUEST
            })
            const {
                userSignin: { userInfo }
            } = getState()
            const config = ConfigFunction(userInfo)

            const { data } = await axios.post(
                `${API}/private/friends/remove-friend`,
                { friendId },
                config
            )
            if (data?.success) {
                dispatch(getUserProfileDetails(userName, userNo))
            }
            dispatch({
                type: REMOVE_FRIEND_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: REMOVE_FRIEND_FAILED,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
            })
        }
    }
