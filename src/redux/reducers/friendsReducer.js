import { toast } from 'react-toastify'
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

///    ADD FRIEND    ///
export const addFriendReducer = (
    state = {
        loading: false,
        data: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case ADD_FRIEND_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_FRIEND_SUCCESS:
             // show toast message saying your details have been added successfully
             toast.success(action.payload?.message)
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                data: action.payload
            }
        case ADD_FRIEND_FAILED:
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

///    CANCEL FRIEND REQUEST    ///
export const cancelFriendRequestReducer = (
    state = {
        loading: false,
        data: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case CANCEL_FRIEND_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CANCEL_FRIEND_SUCCESS:
             // show toast message saying your details have been added successfully
             toast.success(action.payload?.message)
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                data: action.payload
            }
        case CANCEL_FRIEND_FAILED:
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


///    CANCEL FRIEND REQUEST    ///
export const acceptFriendRequestReducer = (
    state = {
        loading: false,
        data: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case ACCEPT_FRIEND_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACCEPT_FRIEND_SUCCESS:
             // show toast message saying your details have been added successfully
             toast.success(action.payload?.message)
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                data: action.payload
            }
        case ACCEPT_FRIEND_FAILED:
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
///    REMOVE A FRIEND FROM FRIENDS LIST   ///
export const removeFriendReducer = (
    state = {
        loading: false,
        data: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case REMOVE_FRIEND_REQUEST:
            return {
                ...state,
                loading: true
            }
        case REMOVE_FRIEND_SUCCESS:
             // show toast message saying your details have been added successfully
             toast.success(action.payload?.message)
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                data: action.payload
            }
        case REMOVE_FRIEND_FAILED:
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