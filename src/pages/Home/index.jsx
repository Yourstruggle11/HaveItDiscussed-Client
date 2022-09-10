import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader'
import Pagination from '../../components/Pagination'
import QuestionCard from '../../components/QuestionCard'
import { HomeLogic } from './Home.logic'

export default function Home() {
    const { pageRerender, data, page, limit,loading } = HomeLogic()
    if(loading){
       return <Loader />
        
    }
    return (
        <>
            <div className="relative bg-[#f9fafb] dark:bg-MB overflow-hidden pt-10 h-full">
                <div className="max-w-sm w-full lg:max-w-full lg:flex items-center flex-col justify-center bg-[#f9fafb] dark:bg-MB">
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
                                            item.postedBy && item.postedBy.profilePic
                                        }
                                        Date={new Date(
                                            item.createdAt
                                        ).toLocaleString()}
                                    />
                                </Link>
                            )
                        })
                    ) : (
                        <div className="w-full h-screen overflow-hidden">
                            <h2 className="text-center mt-[5rem] mx-3 text-3xl font-semibold decoration-blue-700 text-blue-700">
                                No Results Found
                            </h2>
                        </div>
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
                </div>
            </div>
        </>
    )
}
