import React, { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../../firebase/firebase'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const { api } = useContext(FirebaseContext)

  const { userInfo } = useSelector((state) => state.userSignin)
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/question')
    }
  }, [userInfo,navigate])
  

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
  return (
    <>
          <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // className={classes.socialToastContainer}
      />
        <div className="bg-blue-400 h-screen w-screen overflow-hidden">
    <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0 h-[500px]">
            <div className="flex flex-col w-full md:w-1/2 p-4">
                <div className="flex flex-col flex-1 justify-center mb-8">
                    <h1 className="text-2xl text-center font-thin">Welcome To HaveItDiscussed</h1>
                    <div className="w-full mt-4">
                        <div className="form-horizontal w-3/4 mx-auto" method="POST" action="#">
                            <div className="flex flex-col mt-8">
                                {!isLoading ? <button onClick={googleAuth}
                                type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                    Login With Google
                                </button>
                                :
                                <button
                                type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                    Loading...
                                </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block md:w-1/2 rounded-r-lg" 
            
            >
                <img className='h-full w-full' src="https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80" alt="sidePhoto" />
                
            </div>
        </div>
    </div>
</div>
    </>
  )
}
