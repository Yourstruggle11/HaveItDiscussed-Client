import axios from 'axios'
import {
    GET_ALL_NOTIFICATION_REQUEST,
    GET_ALL_NOTIFICATION_SUCCESS,
    GET_ALL_NOTIFICATION_FAILED,
    GET_LAST_TEN_NOTIFICATION_REQUEST,
    GET_LAST_TEN_NOTIFICATION_SUCCESS,
    GET_LAST_TEN_NOTIFICATION_FAILED
} from '../constants/notificationsConstants'
import { ConfigFunction } from '../../utils/config'

const API = process.env.REACT_APP_NODE_API

// Get all notifications
export const getAllNotifications = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_ALL_NOTIFICATION_REQUEST
        })
        const {
            userSignin: { userInfo }
        } = getState()
        const config = ConfigFunction(userInfo)

        const { data } = await axios.get(
            `${API}/private/notifications/get-all`,
            config
        )
        dispatch({
            type: GET_ALL_NOTIFICATION_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_NOTIFICATION_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// Get last 10 notifications (unread)
export const getLastTenUnreadNotification = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_LAST_TEN_NOTIFICATION_REQUEST
        })
        const {
            userSignin: { userInfo }
        } = getState()
        const config = ConfigFunction(userInfo)

        const { data } = await axios.get(
            `${API}/private/notifications/recent-notifications`,
            config
        )
        dispatch({
            type: GET_LAST_TEN_NOTIFICATION_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_LAST_TEN_NOTIFICATION_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
