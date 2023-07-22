import React from 'react'
import Editor from '../../components/Editor.js'

import 'react-quill/dist/quill.snow.css'
import './style.css'
import { PostQuestionLogic } from './PostQuestion.logic'
import Loader from '../../components/Loader'
import { ButtonDefinations } from '../../components/ButtonDefinations/index.jsx'

export default function PostQuestion() {
    const {
        removeTag,
        body,
        setBody,
        addTag,
        keywords,
        keywordInput,
        setKeywordInput,
        title,
        setTitle,
        handleSubmit,
        loading
    } = PostQuestionLogic()
    if (loading) {
        return <Loader />
    }
    return (
        <>
            <div className="w-full min-h-[50rem] py-10 bg-notificationBackground dark:bg-notificationBackgroundDark bg-cover bg-no-repeat bg-center">
                <div className="w-11/12 bg-white min-h-[15rem] mx-auto p-5 shadow-lg rounded-lg mb-10 dark:bg-black">
                    <div className="flex justify-center">
                        <div className="mb-3 w-full">
                            <input
                                type="text"
                                className="
                            dark:bg-[#1e1e1e]
                            dark:placeholder:text-white
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            dark:text-white
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 dark:focus:text-white focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                                id="exampleFormControlInput1"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="What's you want to discuss?"
                            />
                        </div>
                    </div>

                    <div className="post-question-text-editor">
                        <Editor
                            isComment={false}
                            theme="snow"
                            body={body}
                            setBody={setBody}
                            placeholder="Write Your Comment Here..."
                        />
                    </div>

                    <div className="flex justify-center mt-10">
                        <div className="mb-3 w-full">
                            <input
                                onKeyPress={addTag}
                                onChange={(e) => setKeywordInput(e.target.value)}
                                value={keywordInput}
                                className="
                          dark:bg-[#1e1e1e]
                          dark:placeholder:text-white
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            dark:text-white
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 dark:focus:text-white focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                                id="exampleFormControlInput1"
                                placeholder="Add some related keywords..."
                            />
                            <p
                                className="text-yellow-900 text-xs italic                            
                            dark:text-white"
                            >
                                To remove any keyword, click on them!.
                            </p>
                        </div>
                    </div>

                    <div>
                        {keywords.map((keyword, index) => {
                            return (
                                <span
                                    onClick={() => removeTag(keyword)}
                                    key={index}
                                    className="text-xs cursor-pointer font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-600 bg-slate-200 last:mr-0 mr-1"
                                >
                                    {keyword}
                                </span>
                            )
                        })}
                    </div>

                    <div className="w-4/5 h-5 my-10">
                        <span onClick={handleSubmit}>
                            <ButtonDefinations.SubmitButton>
                                Start Discussion
                            </ButtonDefinations.SubmitButton>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
