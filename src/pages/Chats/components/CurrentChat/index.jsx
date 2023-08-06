import React from 'react'
import InputBar from './components/InputBar'
import { ChatMessagesList } from './components/ChatMessagesList'

export const CurrentChat = () => {
    return (
        <div className="flex flex-col flex-auto h-full p-6  dark:bg-MB" >
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4 dark:bg-gray-800">
                <ChatMessagesList />
                <InputBar />
            </div>
        </div>
    )
}
