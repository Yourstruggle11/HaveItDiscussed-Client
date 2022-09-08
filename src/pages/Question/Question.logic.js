import { useEffect, useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import { useParams } from "react-router-dom"
import { getAllCommentsForSingleQusestion } from "../../redux/actions/commentAction"
import { getSingleQuestions } from "../../redux/actions/questionAction"

export const QuestionLogic = () => {
    const [body, setBody] = useState('')

    const dispatch = useDispatch()
    const {questionSlug} = useParams()
    const {data} = useSelector(state => state.getSingleQuestions)
    const {data:allCommentsData} = useSelector(state => state.getAllCommentsForSingleQusestion)

    useEffect(() => {
        dispatch(getSingleQuestions(questionSlug))
    }, [dispatch])

    useEffect(() => {
        if(data){
        dispatch(getAllCommentsForSingleQusestion(data && data.question._id))
        }
    }, [dispatch,data])
    

    return{
        body,
        setBody,
        data,
        allCommentsData
    }
}