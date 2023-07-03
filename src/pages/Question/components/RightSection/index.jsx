import React, { useEffect } from 'react'
import { convertTime } from '../../../../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { getTopAndRecentQuestions } from '../../../../redux/actions/questionAction'
import { Link } from 'react-router-dom'
import { Skeleton } from './components/Skeleton'

export const RightSection = () => {
    const dispatch = useDispatch()
    const { recentDiscussions, topDiscussions } = useSelector(
        (state) => state.getTopAndRecentQuestions
    )

    useEffect(() => {
        dispatch(getTopAndRecentQuestions())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    if (!recentDiscussions || !topDiscussions) {
        return <Skeleton />
    }

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
                    {recentDiscussions?.map((discussion) => (
                        <div key={discussion._id} className="mb-4">
                            <div className="flex items-center">
                                <img
                                    src={discussion?.postedBy?.profilePic}
                                    alt={discussion?.postedBy?.name}
                                    className="w-8 h-8 rounded-full mr-3"
                                />
                                <p className="text-gray-500 text-sm font-semibold">
                                    {discussion?.postedBy?.name}
                                </p>
                            </div>
                            <Link to={`/question/${discussion?.questionSlug}`}>
                                <p className="text-blue-500 hover:underline cursor-pointer">
                                    {discussion?.questionTitle}
                                </p>
                            </Link>
                            <p className="text-gray-500 text-sm">
                                {convertTime(discussion.createdAt)} |{' '}
                                {discussion?.commentCount} Comment
                                {discussion?.commentCount > 1 && 's'}
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
                    {topDiscussions?.map((discussion) => (
                        <div key={discussion._id} className="mb-4">
                            <div className="flex items-center">
                                <img
                                    src={discussion?.postedBy?.profilePic}
                                    alt={discussion?.postedBy?.name}
                                    className="w-8 h-8 rounded-full mr-3"
                                />
                                <p className="text-gray-500 text-sm font-semibold">
                                    {discussion?.postedBy?.name}
                                </p>
                            </div>
                            <Link to={`/question/${discussion?.questionSlug}`}>
                                <p className="text-blue-500 hover:underline cursor-pointer">
                                    {discussion?.questionTitle}
                                </p>
                            </Link>
                            <p className="text-gray-500 text-sm">
                                {convertTime(discussion.createdAt)} |{' '}
                                {discussion?.commentCount} Comment
                                {discussion?.commentCount > 1 && 's'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
