import React from 'react'

export default function QuestionArea({Question,Desc, TagArray, Likes, PostedBy, Date, isComment}) {
  return (
    <>
                <div className={isComment ? 'w-4/5 bg-white min-h-[15rem] mx-auto p-5 shadow-lg rounded-lg mb-10' : 'w-4/5 bg-white min-h-[15rem] mx-auto p-5'}>
                <div className='min-h-[10rem]' >
                    <h1 className='font-bold text-3xl mb-5'>{Question}</h1>


                    {isComment ? 
                    <h1 className='font-bold text-2xl mb-5'>{Desc}</h1>
                    : 
                    <p>{Desc}</p>
                    }

                </div>

                <div className='w-full h-[3rem] flex itmes-center justify-between flex-col sm:flex-row'>
                    <div className='h-full min-w-[15rem] bg-white flex items-center	 justify-center'>
                        <img
                            className="w-10 h-10 rounded-full mr-5"
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="Rounded avatar"
                        />
                        <h1 className='mr-5'>{PostedBy}</h1>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                            </svg>
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
