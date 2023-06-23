import React from 'react'
import CommentCard from '../../components/CommentCard/index.jsx'
import Editor from '../../components/Editor.js'
import QuestionArea from '../../components/QuestionArea/index.jsx'
import { QuestionLogic } from './Question.logic'
import { ButtonDefinations } from '../../components/ButtonDefinations/index.jsx'
import { convertTime } from '../../utils/helper.js'

export default function Question() {
    const { body, setBody, data, allCommentsData, postComment } = QuestionLogic()
    return (
        <>
            <div className="w-full min-h-[50rem] py-10 bg-[#f9fafb] dark:bg-MB pt-[2rem]">
                <QuestionArea
                    Question={data && data.question.questionTitle}
                    Likes={data && data.question.likeCount}
                    PostedBy={data && data.question.postedBy.name}
                    Date={convertTime(data && data.question.createdAt)}
                    Desc={data && data.question.questionBody}
                    isComment={false}
                    authorImg={data && data.question.postedBy.profilePic}
                    liked={data && data.isLiked}
                    userName={data && data.question.postedBy.userName}
                    userNo={data && data.question.postedBy.userNo}
                />
                <Editor
                    isComment={true}
                    body={body}
                    setBody={setBody}
                    placeholder="Write Your Comment Here..."
                />
                <div className="w-4/5 h-5 m-auto my-10">
                    <span
                        onClick={postComment}
                    >
                        
                        <ButtonDefinations.SubmitButton >Post Comment</ButtonDefinations.SubmitButton>
                    </span>
                </div>
                {allCommentsData &&
                    allCommentsData.body.map((comment, index) => {
                        return (
                            <CommentCard
                                key={index}
                                Comment={comment.comment}
                                Likes={comment.likeCount}
                                PostedBy={comment.commentedBy.name}
                                Date={convertTime(comment.createdAt)}
                                authorImg={comment.commentedBy.profilePic}
                                liked={comment.likedBy}
                                commentId={comment._id}
                                userName={comment.commentedBy.userName}
                                userNo={comment.commentedBy.userNo}
                            />
                        )
                    })}
            </div>
        </>
    )
}
