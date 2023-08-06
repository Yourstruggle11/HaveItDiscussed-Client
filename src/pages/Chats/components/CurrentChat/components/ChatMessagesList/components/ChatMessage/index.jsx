import React from 'react'

export const ChatMessage = ({ sentByCurrentUser, content, seen }) => {
    return (
        <div
            className={`${
                sentByCurrentUser
                    ? 'col-start-6 col-end-13 flex items-center justify-start flex-row-reverse'
                    : 'col-start-1 col-end-8'
            } p-3 rounded-lg`}
        >
            <div className="flex flex-row items-center">
                {!sentByCurrentUser && (
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1e40afc6] flex-shrink-0 dark:text-white">
                        A
                    </div>
                )}
                <div
                    className={`relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl ${
                        sentByCurrentUser ? 'bg-indigo-100' : ''
                    }`}
                >
                    {content}
                    {sentByCurrentUser && seen && (
                        <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                            Seen
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
