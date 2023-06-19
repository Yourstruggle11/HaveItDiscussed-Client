import React from 'react'

function UserStats({friendCount, likeCount, commentCount}) {
    return (
        <div className="w-full lg:w-4/12 px-4 lg:order-1">
            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {friendCount}
                    </span>
                    <span className="text-sm text-[#94a3b8cb]">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {likeCount}
                    </span>
                    <span className="text-sm text-[#94a3b8cb]">Likes</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {commentCount}
                    </span>
                    <span className="text-sm text-[#94a3b8cb]">Comments</span>
                </div>
            </div>
        </div>
    )
}

export default UserStats
