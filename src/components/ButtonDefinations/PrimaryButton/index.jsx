import React from 'react'

export const PrimaryButton = ({ children, onClick }) => {
    return (
        <>
            <div
                onClick={onClick && onClick}
                className="cursor-pointer mr-2 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded hover:bg-blue-600 dark:bg-white rounded dark:hover:bg-white group"
            >
                <span className="w-48 h-48 rounded rotate-[-40deg] dark:bg-blue-600 bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left dark:text-black text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                    {children}
                </span>
            </div>
        </>
    )
}
