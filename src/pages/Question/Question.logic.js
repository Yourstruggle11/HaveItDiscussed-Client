import { useEffect, useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { getAllCommentsForSingleQusestion, postNewComment } from "../../redux/actions/commentAction"
import { getSingleQuestions } from "../../redux/actions/questionAction"

export const QuestionLogic = () => {
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const {questionSlug} = useParams()
    const {data} = useSelector(state => state.getSingleQuestions)
    const {data:allCommentsData} = useSelector(state => state.getAllCommentsForSingleQusestion)
    const {data:postNewCommentData} = useSelector(state => state.postNewComment)
    const {userInfo} = useSelector(state => state.userSignin)

    useEffect(() => {
        dispatch(getSingleQuestions(questionSlug))
    }, [dispatch,questionSlug])

    useEffect(() => {
        if(data){
        dispatch(getAllCommentsForSingleQusestion(data && data.question._id))
        }
    }, [dispatch,data])


    useEffect(() => {
        if(postNewCommentData){
            toast("Your comment posted successfully❤️", {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
              })
        dispatch(getAllCommentsForSingleQusestion(data && data.question._id))
        }
    }, [postNewCommentData,data,dispatch])

    const postComment = () =>{
        if(userInfo){
        if(body){
            dispatch(postNewComment(body,data && data.question._id))
        }
        else{
            toast("Please Write somthing!", {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
              })
        }
    }
    else{
        toast("Please Login to post comment!", {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
    }
    }
    

    return{
        body,
        setBody,
        data,
        allCommentsData,
        postComment
    }
}