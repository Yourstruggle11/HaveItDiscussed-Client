import React from 'react'
import Editor from '../../components/Editor.js'
import QuestionArea from '../../components/QuestionArea/index.jsx'
import {QuestionLogic} from "./Question.logic"

export default function Question() {
  const {
    body,
    setBody,
    data
  } = QuestionLogic()
  return (
    <>
        <div className='w-full min-h-[50rem] py-10 bg-[#f9fafb] pt-[2rem]'>
            <QuestionArea
                Question={data && data.question.questionTitle}
                Likes={data && data.question.likeCount}
                PostedBy={data && data.question.postedBy.name}
                Date={new Date(data && data.question.createdAt).toLocaleString()}
                Desc={data && data.question.questionBody}
                isComment={false}
                authorImg={data && data.question.postedBy.profilePic}
            />
            <Editor
             body={body}
             setBody={setBody}
             placeholder="Write Your Comment Here..."
               />
            <div className='w-4/5 h-5 m-auto my-10'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Post Comment
                </button>
            </div>


            <QuestionArea
                // Question={"This is a dummy question"}
                Likes={15}
                PostedBy={"Souvik Sen"}
                Date={"12-05-2020"}
                Desc={`For the #SystemDesignWeekend, we have an interesting problem - Design Amazon Web Services.
                I would love to know how you would solve this question.`}
                isComment={true}
                authorImage={"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
            />
        </div>
    </>
  )
}
