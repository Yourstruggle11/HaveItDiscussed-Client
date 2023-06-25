import { toast } from 'react-toastify'
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

///    GET ALL NOTIFICATIONS   ///
export const getAllNotificationsReducer = (
    state = {
        loading: false,
        data: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case GET_ALL_NOTIFICATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_NOTIFICATION_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                data: action.payload
            }
        case GET_ALL_NOTIFICATION_FAILED:
            toast.error(action.payload, {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
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

///   GET LAST TEN UNREAD NOTIFICATIONS   ///
export const getLastTenUnreadNotificationReducer = (
    state = {
        loading: false,
        data: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case GET_LAST_TEN_NOTIFICATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_LAST_TEN_NOTIFICATION_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                data: action.payload
            }
        case GET_LAST_TEN_NOTIFICATION_FAILED:
            toast.error(action.payload, {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
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

///   MARK SINGEL OR ALL NOTIFICATION/S AS READ   ///
export const markNotificationAsReadReducer = (
    state = {
        loading: false,
        data: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case MARK_NOTIFICATION_AS_READ_REQUEST:
            return {
                ...state,
                loading: true
            }
        case MARK_NOTIFICATION_AS_READ_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                data: action.payload
            }
        case MARK_NOTIFICATION_AS_READ_FAILED:
            toast.error(action.payload, {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
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