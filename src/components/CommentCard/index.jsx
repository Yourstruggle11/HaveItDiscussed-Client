import React from 'react'
import InnerHTML from 'dangerously-set-html-content'
import { CommentCardLogic } from './CommentCard.logic'
import { Link } from 'react-router-dom'
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
    const { userInfo, likeDislikeToggle } = CommentCardLogic(commentId)
    return (
        <>
            <div className="w-4/5 bg-white min-h-[15rem] mx-auto p-5 shadow-lg rounded-lg mb-10 dark:bg-[#1e1e1e] dark:text-white">
                <div className="min-h-[10rem]">
                    <h1 className="font-bold text-3xl mb-5">{Question}</h1>

                    <h1 className="font-bold text-2xl mb-5">
                        <InnerHTML html={Comment} />
                    </h1>
                </div>

                <div className="w-full h-[3rem] flex itmes-center justify-between flex-col sm:flex-row">
                    <div className="h-full min-w-[15rem] bg-white flex items-center	 justify-center dark:bg-[#1e1e1e] dark:text-white">
                        <Link to={`/users/${userNo}/${userName}`}>
                            <img
                                className="w-10 h-10 rounded-full mr-5"
                                src={authorImg}
                                alt="Author Pic"
                            />
                        </Link>
                        <h1 className="mr-5">{PostedBy}</h1>
                        <div>
                            {liked.includes(userInfo && userInfo.id) ? (
                                <svg
                                    onClick={likeDislikeToggle}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="red"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="none"
                                    className="w-6 h-6 cursor-pointer"
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
                                    className="w-6 h-6 cursor-pointer"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                            )}
                        </div>

                        <h1 className="ml-5 font-bold text-2xl mb-5">{Likes}</h1>
                    </div>
                    <div className="h-full min-w-[15rem] bg-white flex items-center	 justify-center dark:bg-[#1e1e1e] dark:text-white">
                        {Date}
                    </div>
                </div>
            </div>
        </>
    )
}
