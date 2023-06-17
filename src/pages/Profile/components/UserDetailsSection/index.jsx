import React from 'react'
import { useSelector } from 'react-redux'
import AboutSection from '../AboutSection'
import UserProfileDetails from '../UserProfileDetails'
import UserStats from '../UserStats'
import Connection from '../Connection'
import UserInformation from '../UserInformation'

function UserDetailsSection() {
    const { userInfo } = useSelector((state) => state.userSignin)

    return (
        <section className="relative py-16 bg-[#94a3b85c] dark:bg-MB dark:text-white">
            <div className="container mx-auto px-36">
                <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-[#1e1e1e] w-full mb-6 shadow-xl rounded-lg -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <UserProfileDetails userInfo={userInfo} />
                            <Connection />
                            <UserStats />
                        </div>
                        <UserInformation name={userInfo?.name} location={'Kolkata, India'} jobTitle={'SDE - 1'} university={'University of Calcutta'} />
                        <AboutSection />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserDetailsSection
