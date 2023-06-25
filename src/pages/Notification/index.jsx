import React, { useEffect } from 'react'
import EmptyNotigication from './components/EmptyNotification'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNotifications } from '../../redux/actions/notificationsAction'
import { convertTime } from '../../utils/helper'
import Actions from './components/Actions'

export default function Notification() {
    const { data: allNotifications } = useSelector(
        (state) => state.getAllNotifications
    )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllNotifications())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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
                        {allNotifications?.data?.length > 0 ? (
                            <div className="space-y-4">
                                {allNotifications?.data?.map((notification) => (
                                    <div
                                        key={notification._id}
                                        className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4"
                                    >
                                        <img
                                            src={notification?.sender?.profilePic}
                                            alt="Profile Pic"
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div className="flex-grow">
                                            <p className="text-sm text-gray-600">
                                                {notification?.message}
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                {convertTime(
                                                    notification?.createdAt
                                                )}
                                            </p>
                                        </div>
                                        <Actions
                                            type={notification?.type}
                                            actionURL={notification?.actionURL}
                                        />
                                        {/* // TODO: Not sure yet if we need this */}
                                        {/* <button
                                            onClick={() =>
                                                markAsRead(notification.id)
                                            }
                                            className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300 rounded px-3 py-1 border border-gray-400"
                                        >
                                            Mark as Read
                                        </button> */}
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
