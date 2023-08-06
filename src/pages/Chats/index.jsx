import React from 'react'
import { ActiveConversations } from './components/ActiveConversations'
import { CurrentChat } from './components/CurrentChat'

export const Chats = () => {
    return (
        <div className="flex h-[calc(100vh-80px)] antialiased text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
                <ActiveConversations />
                <CurrentChat />
            </div>
        </div>
    )
}
