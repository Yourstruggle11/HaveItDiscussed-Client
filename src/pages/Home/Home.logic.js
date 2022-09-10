import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAllQuestions } from '../../redux/actions/questionAction'

export const HomeLogic = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    // get path name
    const location = useLocation()

    // get query
    const query = new URLSearchParams(location.search)
    const Page = query.get('page')
    const SearchTerm = query.get('search')

    const { data, loading } = useSelector((state) => state.getAllQuestions)

    const navigate = useNavigate()

    const limit = parseInt(5)

    const pageRerender = (page) => {
        setPage(page)
        navigate(`${location.pathname}?page=${page}`)
    }

    useEffect(() => {
        dispatch(getAllQuestions(Page || page, limit, SearchTerm || 'false'))
    }, [dispatch, Page, limit, SearchTerm, page])
    return {
        data,
        pageRerender,
        page,
        setPage,
        limit,
        loading
    }
}