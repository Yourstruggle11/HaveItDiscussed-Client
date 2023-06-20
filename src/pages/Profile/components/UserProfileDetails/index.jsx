import React from 'react'

function UserProfileDetails({ userInfo }) {
    return (
        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
            <div className="relative">
                <img
                    alt="ProfilePic"
                    src={
                        userInfo?.profilePic ||
                        process.env.REACT_APP_DUMMY_PROFILE_IMAGE
                    }
                    className="shadow-xl rounded-full h-[150px] align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
            </div>
        </div>
    )
}

export default UserProfileDetails
