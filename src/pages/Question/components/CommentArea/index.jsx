import React from 'react'
import { ButtonDefinations } from '../../../../components/ButtonDefinations'

export const CommentArea = ({ children, postComment }) => {
    return (
        <div className="w-full lg:w-4/5 flex mx-auto items-center justify-center shadow-lg my-16 ">
            <form className="w-full bg-white dark:bg-[#1e1e1e]  rounded-lg px-2 pt-2 ">
                <div className="flex flex-wrap ">
                    <p className="dark:text-white text-gray-800 text-lg">
                        Add a new comment
                    </p>
                    <div className="w-full md:w-full">{children}</div>
                </div>
                <div className="w-4/5 h-5 m-auto my-10 flex items-center justify-end">
                    <span onClick={postComment}>
                        <ButtonDefinations.SubmitButton>
                            Post Comment
                        </ButtonDefinations.SubmitButton>
                    </span>
                </div>
            </form>
        </div>
    )
}
