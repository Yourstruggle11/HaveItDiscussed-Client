import React from 'react'
import Loader from '../../components/Loader'
import Pagination from '../../components/Pagination'
import QuestionCard from '../../components/QuestionCard'
import { HomeLogic } from './Home.logic'
import { convertTime } from '../../utils/helper'
import { NoResultsFound } from './components/NoResultsFound'
import { ShowMemes } from './components/ShowMemes'

export default function Home() {
    const { pageRerender, data, page, limit, loading } = HomeLogic()
    if (loading) {
        return <Loader />
    }
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-notificationBackground dark:bg-notificationBackgroundDark bg-cover bg-no-repeat bg-center min-h-screent">
                <div className="w-full pt-10 md:pt-0 lg:max-w-full lg:flex min-h-screen items-center flex-col justify-around">
                    <div className="w-full h-full  flex items-start lg:justify-between justify-center">
                        <div className="w-full sm:w-3/5 md:w-3/5 h-full">
                            {data && data.questions.length > 0 ? (
                                data.questions.map((item, index) => {
                                    return (
                                        <div key={item._id}>
                                            <QuestionCard
                                                Likes={item.likeCount}
                                                TagArray={item.keywords}
                                                Question={item.questionTitle}
                                                Slug={item?.questionSlug}
                                                PostedBy={
                                                    item.postedBy &&
                                                    item.postedBy.name
                                                }
                                                authorImage={
                                                    item.postedBy &&
                                                    item.postedBy.profilePic
                                                }
                                                Date={convertTime(item.createdAt)}
                                            />
                                        </div>
                                    )
                                })
                            ) : (
                                <NoResultsFound />
                            )}
                        </div>
                        <div className="lg:w-2/5 hidden mt-4 px-8 h-full  flex-wrap lg:flex items-start justfy-between">
                            <ShowMemes />
                        </div>
                    </div>

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
                </div>
            </div>
        </>
    )
}
