import { useEffect, useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleQuestions } from "../../redux/actions/questionAction"

export const QuestionLogic = () => {
    const [body, setBody] = useState('')

    const dispatch = useDispatch()
    const {questionSlug} = useParams()
    const {data} = useSelector(state => state.getSingleQuestions)

    useEffect(() => {
        dispatch(getSingleQuestions(questionSlug))
    }, [dispatch])
    

    return{
        body,
        setBody,
        data
    }
}