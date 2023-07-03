import axios from 'axios'
import {
    GET_ALL_QUESTIONS_REQUEST,
    GET_ALL_QUESTIONS_SUCCESS,
    GET_ALL_QUESTIONS_FAILED,
    GET_SINGLE_QUESTIONS_REQUEST,
    GET_SINGLE_QUESTIONS_SUCCESS,
    GET_SINGLE_QUESTIONS_FAILED,
    LIKE_DISLIKE_QUESTION_REQUEST,
    LIKE_DISLIKE_QUESTION_SUCCESS,
    LIKE_DISLIKE_QUESTION_FAILED,
    CREATE_QUESTION_REQUEST,
    CREATE_QUESTION_SUCCESS,
    CREATE_QUESTION_FAILED,
    GET_TOP_AND_RECENT_REQUEST,
    GET_TOP_AND_RECENT_SUCCESS,
    GET_TOP_AND_RECENT_FAILED
} from '../constants/questionConstants'
import { ConfigFunction } from '../../utils/config'

const API = process.env.REACT_APP_NODE_API

// Get all questions
export const getAllQuestions =
    (page = 1, limit = 10, search = 'false') =>
    async (dispatch) => {
        try {
            dispatch({
                type: GET_ALL_QUESTIONS_REQUEST
            })
            const config = {
                'Content-Type': 'application/json'
            }

            const { data } = await axios.get(
                `${API}/public/discussion/get-all-questions?page=${page}&limit=${limit}&search=${search}`,
                config
            )
            dispatch({
                type: GET_ALL_QUESTIONS_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: GET_ALL_QUESTIONS_FAILED,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
            })
        }
    }

// Get single question
export const getSingleQuestions = (questionSlug) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_SINGLE_QUESTIONS_REQUEST
        })
        const {
            userSignin: { userInfo }
        } = getState()

        const config = {
            'Content-Type': 'application/json'
        }

        const { data } = await axios.get(
            `${API}/public/discussion/get-single-question/${questionSlug}?id=${
                userInfo && userInfo.id
            }`,
            config
        )
        dispatch({
            type: GET_SINGLE_QUESTIONS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_SINGLE_QUESTIONS_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// Like or dislike question
export const likeDislikeQuestion = (questionSlug) => async (dispatch, getState) => {
    try {
        dispatch({
            type: LIKE_DISLIKE_QUESTION_REQUEST
        })
        const {
            userSignin: { userInfo }
        } = getState()

        const config = ConfigFunction(userInfo)

        const { data } = await axios.put(
            `${API}/private/discussion/like-dislike/${questionSlug}`,
            {},
            config
        )
        dispatch({
            type: LIKE_DISLIKE_QUESTION_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LIKE_DISLIKE_QUESTION_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// create new question
export const createNewQuestion =
    (questionTitle, questionBody, keywords) => async (dispatch, getState) => {
        try {
            dispatch({
                type: CREATE_QUESTION_REQUEST
            })
            const {
                userSignin: { userInfo }
            } = getState()

            const config = ConfigFunction(userInfo)

            const body = {
                questionTitle,
                questionBody,
                keywords
            }

            const { data } = await axios.post(
                `${API}/private/discussion/new`,
                body,
                config
            )
            dispatch({
                type: CREATE_QUESTION_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: CREATE_QUESTION_FAILED,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
            })
        }
    }

// Get top and recent questions
export const getTopAndRecentQuestions = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_TOP_AND_RECENT_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }

        const { data } = await axios.get(
            `${API}/public/discussion/questions/top-recent`,
            config
        )
        dispatch({
            type: GET_TOP_AND_RECENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_TOP_AND_RECENT_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
