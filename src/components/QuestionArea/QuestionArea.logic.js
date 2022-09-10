import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import {
    getSingleQuestions,
    likeDislikeQuestion
} from '../../redux/actions/questionAction'

export const QuestionAreaLogic = () => {
    const dispatch = useDispatch()
    const { questionSlug } = useParams()
    const { data: likeDislike } = useSelector((state) => state.likeDislikeQuestion)
    const { userInfo } = useSelector((state) => state.userSignin)

    useEffect(() => {
        if (likeDislike) {
            toast(likeDislike.message, {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
            dispatch(getSingleQuestions(questionSlug))
        }
    }, [likeDislike, questionSlug, dispatch])

    const likeDislikeToggle = () => {
        if (userInfo) {
            dispatch(likeDislikeQuestion(questionSlug))
        } else {
            toast('Please Login to like or dislike', {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
        }
    }

    return {
        likeDislikeToggle,
        userInfo
    }
}
