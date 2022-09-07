import { useEffect } from "react"
import {useSelector,useDispatch} from "react-redux"
import { getAllQuestions } from "../../redux/actions/questionAction"

export const HomeLogic = () => {

    const dispatch = useDispatch()
    const {data} = useSelector(state => state.getAllQuestions)

    useEffect(() => {
        dispatch(getAllQuestions())
    }, [dispatch])
    

    return{
        data,
    }
}