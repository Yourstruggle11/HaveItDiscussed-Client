import axios from 'axios'
import {
    GET_ALL_NOTIFICATION_REQUEST,
    GET_ALL_NOTIFICATION_SUCCESS,
    GET_ALL_NOTIFICATION_FAILED,
    GET_LAST_TEN_NOTIFICATION_REQUEST,
    GET_LAST_TEN_NOTIFICATION_SUCCESS,
    GET_LAST_TEN_NOTIFICATION_FAILED,
    MARK_NOTIFICATION_AS_READ_REQUEST,
    MARK_NOTIFICATION_AS_READ_SUCCESS,
    MARK_NOTIFICATION_AS_READ_FAILED
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

// mark single or multiple notifications as read
export const markNotificationAsRead =
    (markAll, notificationId) => async (dispatch, getState) => {
        try {
            dispatch({
                type: MARK_NOTIFICATION_AS_READ_REQUEST
            })
            const {
                userSignin: { userInfo }
            } = getState()
            const config = ConfigFunction(userInfo)

            const body = {
                markAll,
                notificationId
            }

            const { data } = await axios.put(
                `${API}/private/notifications/mark-as-read`,
                body,
                config
            )
            if (data?.success) {
                dispatch(getLastTenUnreadNotification())
            }
            dispatch({
                type: MARK_NOTIFICATION_AS_READ_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: MARK_NOTIFICATION_AS_READ_FAILED,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
            })
        }
    }
