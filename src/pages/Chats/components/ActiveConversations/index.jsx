import React from 'react'
import Header from './components/Header'
import UserInfo from './components/UserInfo'
import ActiveConversationList from './components/ActiveConversationList'
import Sidebar from './components/Sidebar'

export const ActiveConversations = () => {
    const users = [
        { id: 1, name: 'Henry Boyd', profilePicture: 'H', unreadMessageCount: 2 },
        { id: 2, name: 'Marta Curtis', profilePicture: 'M', unreadMessageCount: 0 },
        { id: 3, name: 'John Doe', profilePicture: 'J', unreadMessageCount: 5 },
        { id: 4, name: 'Jane Smith', profilePicture: 'J', unreadMessageCount: 1 },
        { id: 5, name: 'Alex Johnson', profilePicture: 'A', unreadMessageCount: 0 },
        { id: 6, name: 'Emily Wilson', profilePicture: 'E', unreadMessageCount: 3 },
        { id: 7, name: 'Michael Brown', profilePicture: 'M', unreadMessageCount: 0 },
        { id: 8, name: 'Olivia Davis', profilePicture: 'O', unreadMessageCount: 0 },
        { id: 9, name: 'William Lee', profilePicture: 'W', unreadMessageCount: 0 },
        {
            id: 10,
            name: 'Sophia Anderson',
            profilePicture: 'S',
            unreadMessageCount: 1
        }
    ]

    return (
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 dark:bg-MB dark:text-white">
            <Sidebar />
            {/* <Header />
            <UserInfo />
            <ActiveConversationList users={users} /> */}
        </div>
    )
}
