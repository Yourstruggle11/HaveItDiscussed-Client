import React from 'react'

export const Skeleton = () => {
    return (
        <div className="w-4/5 bg-white dark:bg-[#1e1e1e] dark:text-white min-h-[15rem] mx-auto p-5 shadow-lg rounded-lg mb-10">
            <div className="min-h-[10rem]">
                <div className="animate-pulse h-12 w-2/3 bg-gray-300 mb-5"></div>
                <div className="animate-pulse h-8 w-full bg-gray-300 mb-5"></div>
            </div>

            <div className="w-full h-12 flex items-center justify-between flex-col sm:flex-row">
                <div className="flex items-center">
                    <div className="animate-pulse h-10 w-10 rounded-full mr-5 bg-gray-300"></div>
                    <div className="animate-pulse h-8 w-24 mr-5 bg-gray-300"></div>
                    <div className="animate-pulse h-6 w-6 mr-1 bg-gray-300"></div>
                    <div className="animate-pulse h-8 w-16 mb-5 bg-gray-300"></div>
                </div>

                <div className="flex items-center">
                    <div className="animate-pulse h-8 w-16 bg-gray-300"></div>
                </div>
            </div>
        </div>
    )
}
