import React from 'react'
import CommentCard from '../../components/CommentCard/index.jsx'
import Editor from '../../components/Editor.js'
import QuestionArea from '../../components/QuestionArea/index.jsx'
import {QuestionLogic} from "./Question.logic"

export default function Question() {
  const {
    body,
    setBody,
    data,
    allCommentsData,
    postComment
  } = QuestionLogic()
  return (
    <>
        <div className='w-full min-h-[50rem] py-10 bg-[#f9fafb] dark:bg-MB pt-[2rem]'>
            <QuestionArea
                Question={data && data.question.questionTitle}
                Likes={data && data.question.likeCount}
                PostedBy={data && data.question.postedBy.name}
                Date={new Date(data && data.question.createdAt).toLocaleString()}
                Desc={data && data.question.questionBody}
                isComment={false}
                authorImg={data && data.question.postedBy.profilePic}
                liked={data && data.isLiked}
            />
            <Editor
             body={body}
             setBody={setBody}
             placeholder="Write Your Comment Here..."
               />
            <div className='w-4/5 h-5 m-auto my-10'>
                <button
                onClick={postComment}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Post Comment
                </button>
            </div>
            {
                allCommentsData && allCommentsData.body.map((comment,index) => {
                    return (
                        <CommentCard
                            key={index}
                            Comment={comment.comment}
                            Likes={comment.likeCount}
                            PostedBy={comment.commentedBy.name}
                            Date={new Date(comment.createdAt).toLocaleString()}
                            authorImg={comment.commentedBy.profilePic}
                            liked={comment.likedBy}
                            commentId={comment._id}
                        />
                    )
                })
            }
        </div>
    </>
  )
}
