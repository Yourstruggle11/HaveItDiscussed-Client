import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import EmptyNotigication from './components/EmptyNotification'

export default function Notification() {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            message: 'New message received.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic: logo
        },
        {
            id: 2,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?nature,software,love,'
        },
        {
            id: 3,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?nature,software,,romantic'
        },
        {
            id: 4,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?nature,,love,romantic'
        },
        {
            id: 5,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic: 'https://source.unsplash.com/random/900%C3%97700/?nature,sex'
        },
        {
            id: 6,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?nature,romance'
        },
        {
            id: 7,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?,software,love,romantic'
        },
        {
            id: 8,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?nature,,love,romantic'
        },
        {
            id: 9,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?nature,software,romantic'
        },
        {
            id: 10,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?nature,software,love,'
        },
        {
            id: 11,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?nature,software,love,romantic'
        }
    ])
    const markAsRead = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((notification) => notification.id !== id)
        )
    }
    return (
        <section className="bg-notificationBackground dark:bg-notificationBackgroundDark relative py-16 bg-cover bg-no-repeat bg-center min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-36 h-full">
                <div
                    className="flex flex-col min-h-full break-words bg-white dark:bg-[#1e1e1e] w-full mb-6 shadow-xl rounded-lg"
                    style={{ marginTop: '72px' }}
                >
                    <div className="px-6 py-6 overflow-y-auto">
                        <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">
                            Notifications
                        </h1>
                        {notifications.length > 0 ? (
                            <div className="space-y-4">
                                {notifications.map((notification) => (
                                    <div
                                        key={notification.id}
                                        className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4"
                                    >
                                        <img
                                            src={notification.profilePic}
                                            alt="Profile Pic"
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div className="flex-grow">
                                            <p className="text-sm text-gray-600">
                                                {notification.message}
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                {notification.time}
                                            </p>
                                        </div>
                                        <button className="text-xs text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 rounded px-3 py-1">
                                            Take Action
                                        </button>
                                        <button
                                            onClick={() =>
                                                markAsRead(notification.id)
                                            }
                                            className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300 rounded px-3 py-1 border border-gray-400"
                                        >
                                            Mark as Read
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <EmptyNotigication />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
