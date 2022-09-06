import { useState } from "react"
// import {useSelector,useDispatch} from "react-redux"
// import { getAllQuestions } from "../../redux/actions/questionAction"

export const QuestionLogic = () => {
    const [body, setBody] = useState('')

    // const dispatch = useDispatch()
    // const {data} = useSelector(state => state.getAllQuestions)

    // useEffect(() => {
    //     dispatch(getAllQuestions())
    // }, [dispatch,getAllQuestions])
    

    return{
        body,
        setBody,
    }
}