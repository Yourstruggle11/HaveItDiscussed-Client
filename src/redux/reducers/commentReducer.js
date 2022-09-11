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

///    GET ALL COMMENTS FOR A SINGLE QUESTION    ///
export const getAllCommentsForSingleQusestionReducer = (
    state = {
        loading: false,
        data: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                data: action.payload
            }
        case GET_ALL_COMMENT_FOR_A_SINGLE_QUESTION_FAILED:
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

///    LIKE OR DISLIKE A COMMENT    ///
export const likeDislikeCommentReducer = (
    state = {
        loading: false,
        data: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case LIKE_DISLIKE_COMMENT_REQUEST:
            return {
                ...state,
                data: null,
                loading: true
            }
        case LIKE_DISLIKE_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                data: action.payload
            }
        case LIKE_DISLIKE_COMMENT_FAILED:
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

///    POST A NEW COMMENT   ///
export const postNewCommentReducer = (
    state = {
        loading: false,
        data: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case POST_COMMENT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                data: action.payload
            }
        case POST_COMMENT_FAILED:
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
