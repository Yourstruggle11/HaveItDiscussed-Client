import React from 'react'
import { useSelector } from 'react-redux'
export default function CommentCard({Question,Comment, Likes, PostedBy, Date,authorImg,liked}) {
    const {userInfo} = useSelector((state)=>state.userSignin)
  return (
    <>
                <div className='w-4/5 bg-white min-h-[15rem] mx-auto p-5 shadow-lg rounded-lg mb-10'>
                <div className='min-h-[10rem]' >
                    <h1 className='font-bold text-3xl mb-5'>{Question}</h1>


                    <h1 className='font-bold text-2xl mb-5'>{Comment}</h1>

                </div>

                <div className='w-full h-[3rem] flex itmes-center justify-between flex-col sm:flex-row'>
                    <div className='h-full min-w-[15rem] bg-white flex items-center	 justify-center'>
                        <img
                            className="w-10 h-10 rounded-full mr-5"
                            src={authorImg}
                            alt="Author Image"
                        />
                        <h1 className='mr-5'>{PostedBy}</h1>
                        <div>
                            {
                                     liked.includes(userInfo && userInfo.id) ?
                                <svg
                                // onClick={likeDislikeToggle}
                                xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                                :
                                <svg
                                // onClick={likeDislikeToggle}
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            }

{/* 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                            </svg> */}
                            </div>

                            <h1 className='ml-5 font-bold text-2xl mb-5'>{Likes}</h1>
                        </div>
                    <div className='h-full min-w-[15rem] bg-white flex items-center	 justify-center'>
                        {Date}
                    </div>
                </div>
            </div>
    </>
  )
}
