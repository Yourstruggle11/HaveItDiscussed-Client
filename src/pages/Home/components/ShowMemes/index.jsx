import React, { useEffect, useState } from 'react'
import logo from '../../../../assets/logo.png'

export const ShowMemes = () => {
    const [memes, setMemes] = useState([])

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
    return (
        <>
            {memes?.map((meme, index) => (
                <div
                    key={index}
                    className="mr-2 mb-4 max-w-xs w-full md:w-64 container bg-white dark:bg-gray-800 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                >
                    <div className="h-38">
                        <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 dark:text-white cursor-pointer hover:text-gray-900 transition duration-100">
                            {meme.title}
                        </h1>
                        {meme.hashtags.length > 0 && (
                            <p className="ml-4 mt-1 mb-2 text-gray-700 dark:text-white hover:underline cursor-pointer">
                                {meme.hashtags.slice(0, 2).map((hashtag, idx) => (
                                    <span key={idx}>{hashtag} </span>
                                ))}
                            </p>
                        )}
                    </div>
                    <img
                        className="w-full h-48 object-cover cursor-pointer"
                        src={meme.url}
                        alt={meme.title}
                    />
                    <div className="flex p-4 justify-between">
                        <div className="flex items-center space-x-2">
                            <img
                                className="w-10 rounded-full"
                                src={logo}
                                alt="logo"
                            />
                        </div>
                        <div>
                            <a
                                href={meme.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 font-semibold hover:underline"
                            >
                                View Image
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
