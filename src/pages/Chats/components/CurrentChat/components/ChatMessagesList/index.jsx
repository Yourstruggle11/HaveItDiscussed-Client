import React from 'react'
import { ChatMessage } from './components/ChatMessage'

export const ChatMessagesList = () => {
    // Chat messages data here
    const chatMessages = [
        {
            id: 1,
            sentByCurrentUser: true,
            content: 'Hey How are you today?',
            seen: false
        },
        {
            id: 2,
            sentByCurrentUser: false,
            content:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa commodi illum saepe numquam maxime asperiores voluptate sit, minima perspiciatis.',
            seen: false
        },
        {
            id: 3,
            sentByCurrentUser: true,
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in.',
            seen: false
        },
        {
            id: 4,
            sentByCurrentUser: false,
            content: "I'm ok what about you?",
            seen: true
        },
        {
            id: 5,
            sentByCurrentUser: false,
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing. ?',
            seen: true
        },
        {
            id: 6,
            sentByCurrentUser: true,
            content: 'Lorem ipsum dolor sit amet !',
            seen: false
        },
        {
            id: 7,
            sentByCurrentUser: false,
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing. ?',
            seen: true
        },
        {
            id: 8,
            sentByCurrentUser: true,
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in.',
            seen: true
        },
        {
            id: 9,
            sentByCurrentUser: false,
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in.',
            seen: false
        },
        {
            id: 10,
            sentByCurrentUser: false,
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in.',
            seen: false
        }
        // Additional chat messages...
    ]

    return (
        <div className="flex flex-col h-full overflow-x-auto mb-4">
            <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                    {/* Render chat messages */}
                    {chatMessages.map((message, index) => (
                        <ChatMessage
                            key={index}
                            sentByCurrentUser={message.sentByCurrentUser}
                            content={message.content}
                            seen={message.seen}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
