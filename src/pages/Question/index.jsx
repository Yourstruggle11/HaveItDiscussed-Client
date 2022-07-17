import React from 'react'
import Editor from '../../components/Editor.js'
import QuestionArea from '../../components/QuestionArea/index.jsx'

export default function Question() {
    const [body, setBody] = React.useState('')
  return (
    <>
        <div className='w-full min-h-[50rem] py-10 bg-[#f9fafb] pt-[2rem]'>
            <QuestionArea
                Question={"This is a dummy question"}
                Likes={15}
                PostedBy={"Souvik Sen"}
                Date={"12-05-2020"}
                Desc={`For the #SystemDesignWeekend, we have an interesting problem - Design Amazon Web Services.
                I would love to know how you would solve this question.`}
                isComment={false}
            />
            <Editor body={body} setBody={setBody}  />
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
            />
        </div>
    </>
  )
}
