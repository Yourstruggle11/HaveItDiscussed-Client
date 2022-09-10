import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { likeDislikeComment } from '../../redux/actions/commentAction'

export const CommentCardLogic = (commentId) => {
    const { userInfo } = useSelector((state) => state.userSignin)
    const dispatch = useDispatch()

    const likeDislikeToggle = () => {
        if (userInfo) {
            dispatch(likeDislikeComment(commentId))
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
        userInfo,
        likeDislikeToggle
    }
}
