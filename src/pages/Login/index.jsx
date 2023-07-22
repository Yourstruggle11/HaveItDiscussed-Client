import React from 'react'
import { LoginLogic } from './Login.logic'

export default function Login() {
    const { isLoading, googleAuth } = LoginLogic()

    return (
        <>
            <div className="bg-notificationBackground dark:bg-notificationBackgroundDark bg-cover bg-no-repeat bg-center h-screen w-full overflow-hidden">
                <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
                    <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white dark:bg-[#1e1e1e] dark:text-white sm:mx-0 h-[500px]">
                        <div className="flex flex-col w-full md:w-1/2 p-4">
                            <div className="flex flex-col flex-1 justify-center mb-8">
                                <h1 className="text-2xl text-center font-thin">
                                    Welcome To HaveItDiscussed
                                </h1>
                                <div className="w-full mt-4">
                                    <div
                                        className="form-horizontal w-3/4 mx-auto"
                                        method="POST"
                                        action="#"
                                    >
                                        <div className="flex flex-col mt-8">
                                            {!isLoading ? (
                                                <button
                                                    onClick={googleAuth}
                                                    type="submit"
                                                    className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                                                >
                                                    Login With Google
                                                </button>
                                            ) : (
                                                <button
                                                    type="submit"
                                                    className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                                                >
                                                    Loading...
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block md:w-1/2 rounded-r-lg">
                            <img
                                className="h-full w-full"
                                src="https://source.unsplash.com/random/900%C3%97700/?discussion,software"
                                alt="sidePhoto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
