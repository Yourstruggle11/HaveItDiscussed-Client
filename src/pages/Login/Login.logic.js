import { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../../firebase/firebase'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

export const LoginLogic = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { api } = useContext(FirebaseContext)

    // get query
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const redirect = query.get('redirect')

    const { userInfo } = useSelector((state) => state.userSignin)
    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [userInfo, navigate, redirect])

    const notify = () =>
        toast('You will be logged in few seconds', {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })

    /* -----------------Google Authentication------------- */
    const googleAuth = async () => {
        setIsLoading(true)
        const errMsg = await api.googleSignIn()
        if (errMsg) {
            alert(errMsg)
        } else {
            notify()
        }
        setIsLoading(false)
    }

    return {
        isLoading,
        googleAuth
    }
}
