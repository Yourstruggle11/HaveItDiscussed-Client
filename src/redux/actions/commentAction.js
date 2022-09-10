import axios from 'axios'
import { ConfigFunction } from '../../utils/config'
import {
    GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_REQUEST,
    GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_SUCCESS,
    GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_FAILED,
    LIKE_DISLIKE_COMMENT_REQUEST,
    LIKE_DISLIKE_COMMENT_SUCCESS,
    LIKE_DISLIKE_COMMENT_FAILED,
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAILED
} from '../constants/commentConstants'
// import { ConfigFunction } from '../../utils/config'

const API = process.env.REACT_APP_NODE_API

// Get all comments for a single question
export const getAllCommentsForSingleQusestion = (questinId) => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }

        const { data } = await axios.get(
            `${API}/public/comments/${questinId}`,
            config
        )
        dispatch({
            type: GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// Like or dislike comment
export const likeDislikeComment = (commentSlug) => async (dispatch, getState) => {
    try {
        dispatch({
            type: LIKE_DISLIKE_COMMENT_REQUEST
        })
        const {
            userSignin: { userInfo }
        } = getState()

        const config = ConfigFunction(userInfo)

        const { data } = await axios.put(
            `${API}/private/comments/like-dislike/${commentSlug}`,
            {},
            config
        )
        dispatch({
            type: LIKE_DISLIKE_COMMENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LIKE_DISLIKE_COMMENT_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// Post a new comment
export const postNewComment =
    (comment, questionId) => async (dispatch, getState) => {
        try {
            dispatch({
                type: POST_COMMENT_REQUEST
            })
            const {
                userSignin: { userInfo }
            } = getState()

            const config = ConfigFunction(userInfo)

            const { data } = await axios.post(
                `${API}/private/comments/${questionId}/create`,
                { comment },
                config
            )
            dispatch({
                type: POST_COMMENT_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: POST_COMMENT_FAILED,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
            })
        }
    }
