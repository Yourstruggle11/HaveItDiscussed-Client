import React from 'react'

export default function QuestionCard({Likes, TagArray, Question, Desc, PostedBy, Date,authorImage}) {
  return (
    <>
              <div className="shadow-md cursor-pointer min-w-[5rem] md:min-w-[50rem] border-1 border border-gray-400  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal mb-5">
            <div className="mb-8">
              <span className="text-sm text-gray-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
               </svg>
               <h1 className="mx-2 font-extrabold">{Likes}</h1>

               {TagArray.map((tag, index) => {
                return (
                    <span key={index} className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-600 bg-slate-200 uppercase last:mr-0 mr-1">
                    {tag}
                    </span>
                )
                 })}
              </span>
              <div className="text-gray-900 font-bold text-xl mb-2">
                {Question}
              </div>
              <p className="text-gray-700 text-base">
                {Desc.substring(0, 50)+"..."}
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={authorImage}
                alt="Avatar"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">{PostedBy}</p>
                <p className="text-gray-600">{Date}</p>
              </div>
            </div>
          </div>
    </>
  )
}
