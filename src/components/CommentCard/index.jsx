import React from 'react'
import InnerHTML from 'dangerously-set-html-content'
import { CommentCardLogic } from './CommentCard.logic'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
export default function CommentCard({
    Question,
    Comment,
    Likes,
    PostedBy,
    Date,
    authorImg,
    liked,
    commentId,
    userName,
    userNo
}) {
    const navigate = useNavigate()
    const { userInfo, likeDislikeToggle } = CommentCardLogic(commentId)

    const handleRedirect = () => {
        navigate(`/users/${userNo}/${userName}`)
    }
    return (
        <div className="flex justify-center md:justify-start px-0 md:px-24 relative top-1/3">
            <div className="w-full relative grid grid-cols-1 gap-4 p-4 mb-8  border rounded-lg dark:bg-[#1e1e1e] dark:text-white bg-white shadow-lg">
                <div className="relative flex gap-4">
                    <img
                        onClick={handleRedirect}
                        src={authorImg || logo}
                        className="cursor-pointer relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                        alt=""
                        loading="lazy"
                    />
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                                {PostedBy}
                            </p>
                        </div>
                        <p className="text-gray-400 text-sm">{Date}</p>
                    </div>
                </div>
                <p className="-mt-4 text-gray-500 dark:bg-[#1e1e1e] dark:text-white">
                    {<InnerHTML html={Comment} />}
                </p>
                <div className="flex items-center mt-2">
                    <div>
                        {liked.includes(userInfo && userInfo.id) ? (
                            <svg
                                onClick={likeDislikeToggle}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="red"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="none"
                                className="w-6 h-6 cursor-pointer mr-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        ) : (
                            <svg
                                onClick={likeDislikeToggle}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 cursor-pointer mr-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        )}
                    </div>
                    <p className="text-gray-500 text-sm dark:bg-[#1e1e1e] dark:text-white">
                        {Likes}
                    </p>
                </div>
            </div>
        </div>
    )
}
