import React from 'react'
import { useSelector } from 'react-redux'
import AboutSection from '../AboutSection'
import UserProfileDetails from '../UserProfileDetails'
import UserStats from '../UserStats'
import Connection from '../Connection'
import UserInformation from '../UserInformation'
import { useState } from 'react'

function UserDetailsSection() {
    const { userInfo } = useSelector((state) => state.userSignin)
    const [isEditing, setIsEditing] = useState(false)

    const [userProfileData, setUserProfileData] = useState({
        name: userInfo?.name || "",
        location: userInfo?.location || 'Kolkata, India',
        position: userInfo?.position || 'SDE - 1',  
        university: userInfo?.university || 'University of Calcutta',
        bio: userInfo?.bio || `                        
        An artist of considerable range, Jenna the name taken by
    Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
    and records all of his own music, giving it a warm, intimate
    feel with a solid groove structure. An artist of considerable
    range.`,
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserProfileData((prev) => ({ ...prev, [name]: value }));
      };

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
                        <UserInformation
                            name={userInfo?.name}
                            jobTitle={'SDE - 1'}
                            university={'University of Calcutta'}
                            isEditing={isEditing}
                            setIsEditing={setIsEditing}
                            handleInputChange={handleInputChange}
                            userProfileData={userProfileData}
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
