import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AboutSection from '../AboutSection'
import UserProfileDetails from '../UserProfileDetails'
import UserStats from '../UserStats'
import Connection from '../Connection'
import UserInformation from '../UserInformation'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    getUserProfileDetails,
    updateUserProfile
} from '../../../../redux/actions/userActivityAction'
import Loader from '../../../../components/Loader'

function UserDetailsSection() {
    const { data, loading } = useSelector((state) => state.getUserProfileDetails)
    const { userInfo } = useSelector((state) => state.userSignin)
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useDispatch()
    // get params userName and userNo useing useParams
    const { userName, userNo } = useParams()

    // check if the current user is the same as the user whose profile is being viewed
    const isCurrentUser = userInfo?.userNo === parseInt(userNo)

    const defaultUserProfileData = {
        name: '',
        location: isCurrentUser
            ? 'Please add your location, eg: Kolkata'
            : 'Opps looks like this user has not added his/her location yet',
        position: isCurrentUser
            ? 'Please add your position, eg: Student'
            : 'Opps looks like this user has not added his/her position yet',
        university: isCurrentUser
            ? 'Please add your university, eg: IIT Kharagpur'
            : 'Opps looks like this user has not added his/her university yet',
        bio: isCurrentUser
            ? 'Please add your bio, eg: I am a student at IIT Kharagpur'
            : 'Opps looks like this user has not added his/her bio yet'
    }

    useEffect(() => {
        dispatch(getUserProfileDetails(userName, userNo))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userName, userNo])

    const [userProfileData, setUserProfileData] = useState(defaultUserProfileData)

    useEffect(() => {
        if (data) {
            setUserProfileData((prevData) => ({
                ...prevData,
                name: data?.data?.name || defaultUserProfileData.name,
                location: data?.data?.location || defaultUserProfileData.location,
                position: data?.data?.position || defaultUserProfileData.position,
                university:
                    data?.data?.university || defaultUserProfileData.university,
                bio: data?.data?.bio || defaultUserProfileData.bio
            }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, userName, userNo])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserProfileData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSave = () => {
        dispatch(
            updateUserProfile({
                location: userProfileData.location,
                position: userProfileData.position,
                university: userProfileData.university,
                bio: userProfileData.bio
            })
        )
    }

    if (loading) {
        return <Loader />
    }

    return (
        <section className="relative py-16 bg-[#94a3b85c] dark:bg-MB dark:text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-36">
                <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-[#1e1e1e] w-full mb-6 shadow-xl rounded-lg -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <UserProfileDetails userInfo={data?.data} />
                            {!isCurrentUser && userInfo ? (
                                <Connection
                                    isFriend={data?.data?.isFriend}
                                    isPending={data?.data?.isPending}
                                    isFriendRequestReceived={
                                        data?.data?.isFriendRequestReceived
                                    }
                                    recipientId={data?.data?._id}
                                />
                            ) : (
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center mb-24"></div>
                            )}
                            <UserStats
                                friendCount={data?.data?.friendList?.length}
                                likeCount={data?.totalLikes}
                                commentCount={data?.totalComments}
                            />
                        </div>
                        <UserInformation
                            isCurrentUser={isCurrentUser}
                            isEditing={isEditing}
                            setIsEditing={setIsEditing}
                            handleInputChange={handleInputChange}
                            userProfileData={userProfileData}
                            handleSave={handleSave}
                        />
                        <AboutSection
                            bio={userProfileData.bio}
                            handleInputChange={handleInputChange}
                            isEditing={isEditing}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserDetailsSection
