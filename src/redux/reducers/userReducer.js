import {
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_FAILED,
    USER_LOGOUT
} from '../constants/userConstants'

///    SIGNIN REDUCER    ///
export const userSigninReducer = (
    state = {
        loading: false,
        userInfo: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                userInfo: action.payload
            }
        case USER_SIGNIN_FAILED:
            return {
                ...state,
                loading: false,
                userInfo: null,
                error: action.payload
            }

        case USER_LOGOUT:
            return {
                userInfo: null
            }

        default:
            return state
    }
}
