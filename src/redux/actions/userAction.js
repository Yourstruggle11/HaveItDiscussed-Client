import axios from 'axios'
import {
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_FAILED,
    USER_LOGOUT
} from '../constants/userConstants'

// SignIn social auth user
export const signInSocialUser = (idToken, API) => async (dispatch) => {
    try {
        dispatch({
            type: USER_SIGNIN_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            idToken: idToken
        }

        const { data } = await axios.post(
            `${API}/public/users/auth/social`,
            body,
            config
        )
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        })

        // save auth details to sessionStorage
        sessionStorage.setItem('userInfo', JSON.stringify(data))
        //   sessionStorage.setItem('token', data.token)
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// user logout
export const logoutUser = () => (dispatch) => {
    if (localStorage.getItem('userInfo')) {
        localStorage.removeItem('userInfo')
    } else if (sessionStorage.getItem('userInfo')) {
        sessionStorage.removeItem('userInfo')
    }
    dispatch({
        type: USER_LOGOUT
    })
}
