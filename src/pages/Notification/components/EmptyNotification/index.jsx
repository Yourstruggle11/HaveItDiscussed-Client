import React from 'react'

export default function EmptyNotigication() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <svg
                className="mt-4 h-12 w-12 text-gray-400 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
            </svg>
            <p className="text-lg text-gray-600">No new notifications.</p>
        </div>
    )
}
