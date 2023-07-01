import React, { useEffect, useState } from 'react'
import logo from '../../../../assets/logo.png'
import { Skeleton } from './components/Skeleton'

export const ShowMemes = () => {
    const [memes, setMemes] = useState([])
    const [loading, setLoading] = useState(true)

    const MEME_COUNT = 4

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_SHOW_MEMES_API)
                const data = await response.json()

                if (data.title && data.url) {
                    const memeData = {
                        title: data.title,
                        url: data.url,
                        hashtags: data.twitter_hashtags || [],
                        index: data.index
                    }

                    setMemes((prevMemes) => [...prevMemes, memeData])
                    setLoading(false)
                }
            } catch (error) {
                console.error(error)
            }
        }

        for (let i = 0; i < MEME_COUNT; i++) {
            fetchData()
        }
        return () => {
            setMemes([])
        }
    }, [])

    if (loading) {
        return (
            <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </>
        )
    }
    return (
        <>
            {memes?.map((meme, index) => (
                <div
                    key={index}
                    className="mr-2 mb-4 max-w-xs w-full md:w-64 container bg-white dark:bg-gray-800 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                >
                    <div className="h-38">
                        <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 dark:text-white cursor-pointer hover:text-gray-900 transition duration-100">
                            {loading ? (
                                <span className="animate-pulse bg-gray-300 dark:bg-gray-700 h-7 w-2/3 mb-4"></span>
                            ) : (
                                meme.title
                            )}
                        </h1>
                        {loading ? (
                            <p className="ml-4 mt-1 mb-2 text-gray-700 dark:text-white">
                                <span className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-1/2 block mb-1"></span>
                                <span className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-1/4 block"></span>
                            </p>
                        ) : (
                            meme.hashtags.length > 0 && (
                                <p className="ml-4 mt-1 mb-2 text-gray-700 dark:text-white hover:underline cursor-pointer">
                                    {meme.hashtags
                                        .slice(0, 2)
                                        .map((hashtag, idx) => (
                                            <span key={idx}>{hashtag} </span>
                                        ))}
                                </p>
                            )
                        )}
                    </div>
                    {loading ? (
                        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-48"></div>
                    ) : (
                        <img
                            className="w-full h-48 object-cover cursor-pointer"
                            src={meme.url}
                            alt={meme.title}
                        />
                    )}
                    <div className="flex p-4 justify-between">
                        <div className="flex items-center space-x-2">
                            {loading ? (
                                <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-10 w-10 rounded-full"></div>
                            ) : (
                                <img
                                    className="w-10 rounded-full"
                                    src={logo}
                                    alt="logo"
                                />
                            )}
                        </div>
                        <div>
                            {loading ? (
                                <span className="animate-pulse bg-gray-300 dark:bg-gray-700 h-7 w-16 block"></span>
                            ) : (
                                <a
                                    href={meme.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 font-semibold hover:underline"
                                >
                                    View Image
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
