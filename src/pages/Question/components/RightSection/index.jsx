import React from 'react'
import { convertTime } from '../../../../utils/helper'

export const RightSection = () => {
    // Mock data for recent discussions
    const profilePicUrl = 'https://haveitdiscussed.netlify.app/favicon.png'

    const recentDiscussions = [
        {
            id: 1,
            title: 'Recent Discussion 1',
            author: 'John Doe',
            profilePic: profilePicUrl,
            comments: 5,
            date: '2023-06-28 09:30'
        },
        {
            id: 2,
            title: 'Recent Discussion 2',
            author: 'Jane Smith',
            profilePic: profilePicUrl,
            comments: 3,
            date: '2023-06-29 14:45'
        },
        {
            id: 3,
            title: 'Recent Discussion 3',
            author: 'Bob Johnson',
            profilePic: profilePicUrl,
            comments: 1,
            date: '2023-06-30 17:15'
        }
    ]

    // Mock data for top discussions
    const topDiscussions = [
        {
            id: 1,
            title: 'Top Discussion 1',
            author: 'Alice Brown',
            profilePic: profilePicUrl,
            comments: 10,
            date: '2023-06-27 11:20'
        },
        {
            id: 2,
            title: 'Top Discussion 2',
            author: 'Charlie Davis',
            profilePic: profilePicUrl,
            comments: 8,
            date: '2023-06-29 09:10'
        },
        {
            id: 3,
            title: 'Top Discussion 3',
            author: 'Eve Wilson',
            profilePic: profilePicUrl,
            comments: 6,
            date: '2023-06-30 16:40'
        }
    ]
    return (
        <div className="w-1/3 p-8 hidden lg:block">

            {/* //TODO: Might need to use the below search bar in the future I know it might go against YAGNI but I think it would be a good idea to have it in the future */}
            {/* Search bar */}
            {/* <input
                type="text"
                placeholder="Search"
                className="w-full mb-8 px-4 py-2 border border-gray-300 rounded dark:bg-[#1e1e1e] dark:text-white"
            /> */}

            {/* Recent discussions section */}
            <div className="bg-white dark:bg-[#1e1e1e] p-8 shadow rounded mb-8">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">
                    Recent Discussions
                </h3>
                <div>
                    {recentDiscussions.map((discussion) => (
                        <div key={discussion.id} className="mb-4">
                            <div className="flex items-center">
                                <img
                                    src={discussion.profilePic}
                                    alt={discussion.author}
                                    className="w-8 h-8 rounded-full mr-3"
                                />
                                <p className="text-gray-500 text-sm font-semibold">
                                    {discussion.author}
                                </p>
                            </div>
                            <p className="text-blue-500 hover:underline cursor-pointer">
                                {discussion.title}
                            </p>
                            <p className="text-gray-500 text-sm">
                                {convertTime(discussion.date)} |{' '}
                                {discussion.comments} Comment
                                {discussion.comments !== 1 && 's'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top discussions section */}
            <div className="bg-white dark:bg-[#1e1e1e] p-8 shadow rounded">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">
                    Top Discussions
                </h3>
                <div>
                    {topDiscussions.map((discussion) => (
                        <div key={discussion.id} className="mb-4">
                            <div className="flex items-center">
                                <img
                                    src={discussion.profilePic}
                                    alt={discussion.author}
                                    className="w-8 h-8 rounded-full mr-3"
                                />
                                <p className="text-gray-500 text-sm font-semibold">
                                    {discussion.author}
                                </p>
                            </div>
                            <p className="text-blue-500 hover:underline cursor-pointer">
                                {discussion.title}
                            </p>
                            <p className="text-gray-500 text-sm">
                                {convertTime(discussion.date)} |{' '}
                                {discussion.comments} Comment
                                {discussion.comments !== 1 && 's'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
