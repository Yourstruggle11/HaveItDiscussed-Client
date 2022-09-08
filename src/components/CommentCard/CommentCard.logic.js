import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { getAllCommentsForSingleQusestion, likeDislikeComment } from '../../redux/actions/commentAction'

export const CommentCardLogic = (commentId) => {


    const {userInfo} = useSelector((state)=>state.userSignin)
    const {data:likeDislike} = useSelector((state)=>state.likeDislikeComment)
    const {data:singleQuestionData} = useSelector(state => state.getSingleQuestions)
    const dispatch = useDispatch()


    useEffect(() => {
        if(likeDislike){
            toast(likeDislike.message, {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
              })
              dispatch(getAllCommentsForSingleQusestion(singleQuestionData && singleQuestionData.question._id))
        }
    }, [likeDislike])


    const likeDislikeToggle = () =>{
        if(userInfo){
            dispatch(likeDislikeComment(commentId))
        }
        else{
            toast   ("Please Login to like or dislike", {
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
        likeDislikeToggle,
    }
}