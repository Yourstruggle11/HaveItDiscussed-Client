import React from 'react'
import { Link } from 'react-router-dom'

const QuestionCard = ({
    Likes,
    TagArray,
    Question,
    Slug,
    PostedBy,
    Date,
    authorImage
}) => {
    return (
        <div
            className="max-w-[36rem] md:w-[36rem] mx-auto mt-4 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
            style={{ cursor: 'auto' }}
        >
            <div className="flex items-center justify-between">
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                    {Date}
                </span>
                <div className="flex items-center">
                    {TagArray && TagArray.length > 0 && (
                        <span className="mr-4 inline-flex items-center rounded-md dark:bg-gray-50 bg-MB px-2 py-1 text-xs font-medium dark:text-gray-600 text-white ring-1 ring-inset dark:ring-gray-500/10">
                            {TagArray[0]}
                        </span>
                    )}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600 dark:text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                    <span className="mx-2 font-extrabold dark:text-white">
                        {Likes}
                    </span>
                </div>
            </div>
            <div className="mt-2">
                <Link
                    to={`/question/${Slug}`}
                    className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
                >
                    {Question}
                </Link>
            </div>
            <div className="flex items-center justify-between mt-4">
                <Link
                    to={`/question/${Slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    Read more ⟶
                </Link>
                <div className="flex items-center">
                    <div className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
                        {PostedBy}
                    </div>
                    <img
                        src={authorImage}
                        alt="Author face"
                        className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                    />
                </div>
            </div>
        </div>
    )
}

export default QuestionCard
