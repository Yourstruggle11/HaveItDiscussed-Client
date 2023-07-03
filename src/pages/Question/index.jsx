import React from 'react'
import CommentCard from '../../components/CommentCard/index.jsx'
import Editor from '../../components/Editor.js'
import QuestionArea from '../../components/QuestionArea/index.jsx'
import { QuestionLogic } from './Question.logic'
import { convertTime } from '../../utils/helper.js'
import { CommentArea } from './components/CommentArea/index.jsx'
import { RightSection } from './components/RightSection/index.jsx'
import { CommentSkeleton } from '../../components/CommentCard/components/CommentSkeleton/index.jsx'

export default function Question() {
    const { body, setBody, data, allCommentsData, postComment } = QuestionLogic()
    return (
        <div className="w-full py-10 bg-notificationBackground dark:bg-notificationBackgroundDark bg-cover bg-no-repeat bg-center min-h-screen pt-[2rem]">
            <div className="flex">
                <div className="w-full lg:w-2/3 lg:p-8 h-full">
                    <QuestionArea
                        Question={data?.question.questionTitle}
                        Likes={data?.question.likeCount}
                        PostedBy={data?.question.postedBy.name}
                        Date={convertTime(data?.question.createdAt)}
                        Desc={data?.question.questionBody}
                        isComment={false}
                        authorImg={data?.question.postedBy.profilePic}
                        liked={data?.isLiked}
                        userName={data?.question.postedBy.userName}
                        userNo={data?.question.postedBy.userNo}
                    />
                    {/* HOC component for comment area */}
                    <CommentArea postComment={postComment}>
                        <Editor
                            isComment={true}
                            body={body}
                            setBody={setBody}
                            placeholder="Write Your Comment Here..."
                        />
                    </CommentArea>
                    {!data && <CommentSkeleton />}
                    {allCommentsData?.body?.map((comment) => {
                        return (
                            <CommentCard
                                key={comment._id}
                                Comment={comment.comment}
                                Likes={comment.likeCount}
                                PostedBy={comment?.commentedBy?.name}
                                Date={convertTime(comment.createdAt)}
                                authorImg={comment.commentedBy?.profilePic}
                                liked={comment.likedBy}
                                commentId={comment._id}
                                userName={comment.commentedBy?.userName}
                                userNo={comment.commentedBy?.userNo}
                            />
                        )
                    })}
                </div>

                <RightSection />
            </div>
        </div>
    )
}
