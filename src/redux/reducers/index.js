import { combineReducers } from 'redux'
import {
    getAllCommentsForSingleQusestionReducer,
    likeDislikeCommentReducer,
    postNewCommentReducer
} from './commentReducer'
import { darkModeReducer } from './darkModeReducer'
import {
    createNewQuestionReducer,
    getAllQuestionsReducer,
    getSingleQuestionsReducer,
    getTopAndRecentQuestionsReducer,
    likeDislikeQuestionReducer
} from './questionReducer'
import { userSigninReducer } from './userReducer'
import {
    getUserProfileDetailsReducer,
    updateUserProfileReducer
} from './userActivityReducer'
import {
    acceptFriendRequestReducer,
    addFriendReducer,
    cancelFriendRequestReducer,
    removeFriendReducer
} from './friendsReducer'
import {
    getAllNotificationsReducer,
    getLastTenUnreadNotificationReducer,
    markNotificationAsReadReducer
} from './notificationsReducer'

const rootReducer = combineReducers({
    userSignin: userSigninReducer,
    getAllQuestions: getAllQuestionsReducer,
    getSingleQuestions: getSingleQuestionsReducer,
    likeDislikeQuestion: likeDislikeQuestionReducer,
    getAllCommentsForSingleQusestion: getAllCommentsForSingleQusestionReducer,
    likeDislikeComment: likeDislikeCommentReducer,
    postNewComment: postNewCommentReducer,
    createNewQuestion: createNewQuestionReducer,
    darkMode: darkModeReducer,
    getUserProfileDetails: getUserProfileDetailsReducer,
    updateUserProfile: updateUserProfileReducer,
    addFriend: addFriendReducer,
    cancelFriendRequest: cancelFriendRequestReducer,
    acceptFriendRequest: acceptFriendRequestReducer,
    removeFriend: removeFriendReducer,
    getAllNotifications: getAllNotificationsReducer,
    getLastTenUnreadNotification: getLastTenUnreadNotificationReducer,
    markNotificationAsRead: markNotificationAsReadReducer,
    getTopAndRecentQuestions: getTopAndRecentQuestionsReducer
})

export default rootReducer
