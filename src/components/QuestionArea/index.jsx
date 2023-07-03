import React from 'react'
import { Link } from 'react-router-dom'
import { QuestionAreaLogic } from './QuestionArea.logic'
import InnerHTML from 'dangerously-set-html-content'
import { Skeleton } from './components/Skeleton'

export default function QuestionArea({
    Question,
    Desc,
    TagArray,
    Likes,
    PostedBy,
    Date,
    isComment,
    authorImg,
    liked,
    userName,
    userNo
}) {
    const { likeDislikeToggle, userInfo } = QuestionAreaLogic()


    if(!Question){
        return <Skeleton />
    }

    return (
        <div
            className={
                isComment
                    ? 'w-4/5 bg-white dark:bg-[#1e1e1e] dark:text-white min-h-[15rem] mx-auto p-5 shadow-lg rounded-lg mb-10'
                    : 'w-full lg:w-4/5 bg-white dark:bg-[#1e1e1e] dark:text-white min-h-[15rem] mx-auto p-5 pb-8 shadow-lg rounded-lg'
            }
        >
            <div className="min-h-[10rem]">
                <h1 className="font-bold text-3xl mb-5">{Question}</h1>
                {isComment ? (
                    <h1 className="font-bold text-2xl mb-5">{Desc}</h1>
                ) : (
                    <p className="whitespace-pre-wrap break-words">
                        <InnerHTML html={Desc} />
                    </p>
                )}
            </div>

            <div className="w-full h-[3rem] flex items-center justify-between flex-col sm:flex-row">
                <div className="flex items-center">
                    <Link to={`/users/${userNo}/${userName}`}>
                        <img
                            className="w-10 h-10 rounded-full mr-5"
                            src={authorImg}
                            alt="Author"
                        />
                    </Link>
                    <h1 className="mr-5">{PostedBy}</h1>
                    <div>
                        {userInfo && liked ? (
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

                <div className="flex items-center">
                    <div>{Date}</div>
                </div>
            </div>
        </div>
    )
}
