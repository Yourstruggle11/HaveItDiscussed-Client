import React from 'react'

export default function Login() {
  return (
    <>
        <div className="bg-blue-400 h-screen w-screen">
    <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0 h-[500px]">
            <div className="flex flex-col w-full md:w-1/2 p-4">
                <div className="flex flex-col flex-1 justify-center mb-8">
                    <h1 className="text-2xl text-center font-thin">Welcome To HaveItDiscussed</h1>
                    <div className="w-full mt-4">
                        <div className="form-horizontal w-3/4 mx-auto" method="POST" action="#">
                            {/* <div className="flex flex-col mt-4">
                                <input id="email" type="text" className="flex-grow h-8 px-2 border rounded border-grey-400" name="email" value="" placeholder="Email" />
                            </div>
                            <div className="flex flex-col mt-4">
                                <input id="password" type="password" className="flex-grow h-8 px-2 rounded border border-grey-400" name="password" required placeholder="Password" />
                            </div> */}
                            {/* <div className="flex items-center mt-4">
                                <input type="checkbox" name="remember" id="remember" className="mr-2" /> <label for="remember" className="text-sm text-grey-dark">Remember Me</label>
                            </div> */}
                            <div className="flex flex-col mt-8">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                    Login With Google
                                </button>
                            </div>
                        </div>
                        {/* <div className="text-center mt-4">
                            <a className="no-underline hover:underline text-blue-dark text-xs" href="{{ route('password.request') }}">
                                Forgot Your Password?
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="hidden md:block md:w-1/2 rounded-r-lg" 
            
            // style="background: url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80'); background-size: cover; background-position: center center;"
            >
                <img className='h-full w-full' src="https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80" alt="image" />
                
            </div>
        </div>
    </div>
</div>
    </>
  )
}
