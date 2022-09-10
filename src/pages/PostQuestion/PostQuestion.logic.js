import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { createNewQuestion } from '../../redux/actions/questionAction'

export const PostQuestionLogic = () => {
    const { data,loading } = useSelector((state) => state.createNewQuestion)
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [keywords, setKeywords] = useState([])
    const [keywordInput, setKeywordInput] = useState('')

    useEffect(() => {
        if (data) {
            setTitle('')
            setBody('')
            setKeywords([])
            toast(
                'Congo 🎊, Your question posted successfully, someone will start the discussion soon',
                {
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                }
            )
        }
    }, [data])

    const addTag = (e) => {
        if (e.key === 'Enter' && e.target.value !== '') {
            setKeywords([...keywords, keywordInput])
            setKeywordInput('')
        }
    }

    const removeTag = (e) => {
        setKeywords(keywords.filter((tag) => tag !== e))
    }

    const handleSubmit = () => {
        if (title && body) {
            if (keywords.length > 0) {
                dispatch(createNewQuestion(title, body, keywords))
            } else {
                toast.error('Please add atleast one keyword')
            }
        } else {
            toast.error('Please fill all the fields!')
        }
    }

    return {
        removeTag,
        body,
        setBody,
        addTag,
        keywords,
        keywordInput,
        handleSubmit,
        title,
        setTitle,
        setKeywordInput,
        loading
    }
}
