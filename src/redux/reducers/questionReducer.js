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

///    GET ALL QUESTIONS    ///
export const getAllQuestionsReducer = (
    state = {
        loading: false,
        data: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case GET_ALL_QUESTIONS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_QUESTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                data: action.payload
            }
        case GET_ALL_QUESTIONS_FAILED:
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

///    GET SINGLE QUESTIONS    ///
export const getSingleQuestionsReducer = (
    state = {
        loading: false,
        data: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case GET_SINGLE_QUESTIONS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_SINGLE_QUESTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                data: action.payload
            }
        case GET_SINGLE_QUESTIONS_FAILED:
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

///    LIKE OR DISLIKE A QUESTION    ///
export const likeDislikeQuestionReducer = (
    state = {
        loading: false,
        data: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case LIKE_DISLIKE_QUESTION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LIKE_DISLIKE_QUESTION_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                data: action.payload
            }
        case LIKE_DISLIKE_QUESTION_FAILED:
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
///    POST A NEW QUESTION    ///
export const createNewQuestionReducer = (
    state = {
        loading: false,
        data: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case CREATE_QUESTION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_QUESTION_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                data: action.payload
            }
        case CREATE_QUESTION_FAILED:
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

///    GET TOP AND RECENT QUESTIONS    ///
export const getTopAndRecentQuestionsReducer = (
    state = {
        loading: false,
        recentDiscussions: null,
        topDiscussions: null,
        isAuthenticated: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case GET_TOP_AND_RECENT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_TOP_AND_RECENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                recentDiscussions: action.payload?.recentQuestions,
                topDiscussions: action.payload?.topQuestions
            }
        case GET_TOP_AND_RECENT_FAILED:
            return {
                ...state,
                loading: false,
                recentDiscussions: null,
                topDiscussions: null,
                error: action.payload
            }
        default:
            return state
    }
}
