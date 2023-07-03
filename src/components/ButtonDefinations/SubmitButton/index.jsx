import React from 'react'

export const SubmitButton = ({ children }) => {
    return (
        <>
        <a href="#_" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white dark:bg-gray-800 bg-blue-500 rounded-lg group">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out dark:bg-blue-500 bg-gray-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span className="relative">{children}</span>
</a>
        </>
    )
}
