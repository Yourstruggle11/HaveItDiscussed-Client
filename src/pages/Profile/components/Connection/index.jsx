import React from 'react'
import { FriendActions } from './components/FriendActions'
import { PendingActions } from './components/PendingActions'
import { FriendRequestActions } from './components/FriendRequestActions'

function Connection({ isFriend, isPending, isFriendRequestReceived }) {
    return (
        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
            <div className="py-6 px-3 mt-32 sm:mt-0">
                {isFriend && <FriendActions />}
                {!isFriend && isPending && <PendingActions />}
                {!isFriend && !isPending && !isFriendRequestReceived && (
                    <button
                        className="bg-blue-500 active:bg-blue-600 hover:bg-blue-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                    >
                        Connect
                    </button>
                )}
                {isFriendRequestReceived && <FriendRequestActions />}
            </div>
        </div>
    )
}

export default Connection
