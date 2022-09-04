import React, { useContext } from 'react'
import { FirebaseContext } from '../../firebase/firebase'

export default function Login() {
    const { api } = useContext(FirebaseContext)

          /* -----------------Google Authentication------------- */
  const googleAuth = async () => {
    // setIsLoading(true)
    const errMsg = await api.googleSignIn()
    if (errMsg) {
      alert(errMsg)
    } else {
        alert("login success")
    //   notify()
    }
    // setIsLoading(false)
}
  return (
    <>
        <div className="bg-blue-400 h-screen w-screen overflow-hidden">
    <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0 h-[500px]">
            <div className="flex flex-col w-full md:w-1/2 p-4">
                <div className="flex flex-col flex-1 justify-center mb-8">
                    <h1 className="text-2xl text-center font-thin">Welcome To HaveItDiscussed</h1>
                    <div className="w-full mt-4">
                        <div className="form-horizontal w-3/4 mx-auto" method="POST" action="#">
                            <div className="flex flex-col mt-8">
                                <button onClick={googleAuth}
                                type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                    Login With Google
                                </button>
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
