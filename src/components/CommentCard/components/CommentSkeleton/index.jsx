import React from 'react'

export const CommentSkeleton = () => {
    return (
        <div className="flex justify-center md:justify-start px-0 md:px-24 relative top-1/3">
            <div className="w-full relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg dark:bg-[#1e1e1e] dark:text-white bg-white shadow-lg">
                <div className="relative flex gap-4">
                    <div className="animate-pulse h-20 w-20 rounded-lg -top-8 -mb-4 bg-gray-300"></div>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                            <div className="animate-pulse h-8 w-3/4 mb-1 bg-gray-300"></div>
                        </div>
                        <div className="animate-pulse h-4 w-1/2 mb-2 bg-gray-300"></div>
                    </div>
                </div>
                <p className="mt-4 animate-pulse h-10 w-full bg-gray-300 dark:text-white"></p>
                <div className="flex items-center mt-2">
                    <div>
                        <div className="animate-pulse h-6 w-6 rounded-full bg-gray-300"></div>
                    </div>
                    <p className="animate-pulse h-4 w-10 ml-1 bg-gray-300 dark:text-white"></p>
                </div>
            </div>
        </div>
    )
}
