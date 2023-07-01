import React from 'react'

export const Skeleton = () => {
    return (
        <div
            className="mr-2 mb-4 max-w-xs w-full md:w-64 container bg-white dark:bg-gray-800 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        >
            <div className="h-38">
                <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 dark:text-white cursor-pointer hover:text-gray-900 transition duration-100">
                    <span className="animate-pulse bg-gray-300 dark:bg-gray-700 h-7 w-2/3 mb-4"></span>
                </h1>
                <p className="ml-4 mt-1 mb-2 text-gray-700 dark:text-white">
                    <span className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-1/2 block mb-1"></span>
                    <span className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-1/4 block"></span>
                </p>
            </div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-48"></div>
            <div className="flex p-4 justify-between">
                <div className="flex items-center space-x-2">
                    <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-10 w-10 rounded-full"></div>
                </div>
                <div>
                    <span className="animate-pulse bg-gray-300 dark:bg-gray-700 h-7 w-16 block"></span>
                </div>
            </div>
        </div>
    )
}
