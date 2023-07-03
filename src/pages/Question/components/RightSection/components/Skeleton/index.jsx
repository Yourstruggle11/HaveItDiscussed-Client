import React from 'react'

export const Skeleton = () => {
    return (
        <div className="w-1/3 p-8 hidden lg:block">
            {/* Recent discussions skeleton */}
            <div className="bg-gray-300 dark:bg-[#1e1e1e] p-8 shadow rounded mb-8">
                <p className="animate-pulse h-8 w-3/4 mb-4 dark:bg-gray-600 bg-gray-200"></p>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <div className="animate-pulse h-8 w-8 rounded-full mr-3 dark:bg-gray-600 bg-gray-200"></div>
                        <div className="space-y-2">
                            <div className="animate-pulse h-4 w-20 mb-1 dark:bg-gray-600 bg-gray-200"></div>
                            <div className="animate-pulse h-4 w-32 dark:bg-gray-600 bg-gray-200"></div>
                        </div>
                    </div>
                    <div className="animate-pulse h-4 w-16 mb-2 dark:bg-gray-600 bg-gray-200"></div>
                    <div className="animate-pulse h-4 w-40 mb-1 dark:bg-gray-600 bg-gray-200"></div>
                    <div className="animate-pulse h-4 w-28 dark:bg-gray-600 bg-gray-200"></div>
                </div>
            </div>

            {/* Top discussions skeleton */}
            <div className="bg-gray-300 dark:bg-[#1e1e1e] p-8 shadow rounded">
                <p className="animate-pulse h-8 w-3/4 mb-4 dark:bg-gray-600 bg-gray-200"></p>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <div className="animate-pulse h-8 w-8 rounded-full mr-3 dark:bg-gray-600 bg-gray-200"></div>
                        <div className="space-y-2">
                            <div className="animate-pulse h-4 w-20 mb-1 dark:bg-gray-600 bg-gray-200"></div>
                            <div className="animate-pulse h-4 w-32 dark:bg-gray-600 bg-gray-200"></div>
                        </div>
                    </div>
                    <div className="animate-pulse h-4 w-16 mb-2 dark:bg-gray-600 bg-gray-200"></div>
                    <div className="animate-pulse h-4 w-40 mb-1 dark:bg-gray-600 bg-gray-200"></div>
                    <div className="animate-pulse h-4 w-28 dark:bg-gray-600 bg-gray-200"></div>
                </div>
            </div>
        </div>
    )
}
