import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader'
import Pagination from '../../components/Pagination'
import QuestionCard from '../../components/QuestionCard'
import { HomeLogic } from './Home.logic'
import { convertTime } from '../../utils/helper'
import { NoResultsFound } from './components/NoResultsFound'

export default function Home() {
    const { pageRerender, data, page, limit, loading } = HomeLogic()
    if (loading) {
        return <Loader />
    }
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-notificationBackground dark:bg-notificationBackgroundDark bg-cover bg-no-repeat bg-center min-h-screent">
                {/* <div className="overflow-hidden pt-10"> */}
                    <div className="max-w-sm w-full pt-10 md:pt-0 lg:max-w-full lg:flex min-h-screen items-center flex-col justify-around">
                        {data && data.questions.length > 0 ? (
                            data.questions.map((item, index) => {
                                return (
                                    <Link
                                        to={`/question/${item.questionSlug}`}
                                        key={index}
                                    >
                                        <QuestionCard
                                            Likes={item.likeCount}
                                            TagArray={item.keywords}
                                            Question={item.questionTitle}
                                            Desc="Lorem ipsum dolor sit amet, consectetur adipisicing ad ads ds fsd fd gdf gdf s sc sz  z x"
                                            PostedBy={
                                                item.postedBy && item.postedBy.name
                                            }
                                            authorImage={
                                                item.postedBy &&
                                                item.postedBy.profilePic
                                            }
                                            Date={convertTime(item.createdAt)}
                                        />
                                    </Link>
                                )
                            })
                        ) : (
                            <NoResultsFound />
                        )}

                        {data && data.questions.length > 0 ? (
                            <Pagination
                                totalBlogs={data && data.totalQuestions}
                                onPageClick={pageRerender}
                                currentPage={page}
                                limit={limit}
                            />
                        ) : (
                            ''
                        )}
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}
