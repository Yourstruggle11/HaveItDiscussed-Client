import React from 'react'

export const NoResultsFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <text
                    x="50%"
                    y="60%"
                    fontSize="20"
                    textAnchor="middle"
                    fill="currentColor"
                >
                    ):
                </text>
            </svg>
            <p className="text-gray-600 text-lg mt-4 font-bold">No results found</p>
        </div>
    )
}
