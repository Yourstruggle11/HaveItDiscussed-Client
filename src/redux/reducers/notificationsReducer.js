import { toast } from 'react-toastify'
import {
    GET_ALL_NOTIFICATION_REQUEST,
    GET_ALL_NOTIFICATION_SUCCESS,
    GET_ALL_NOTIFICATION_FAILED
} from '../constants/notificationsConstants'

///    GER ALL NOTIFICATIONS   ///
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