import React from 'react'
import { useSelector } from 'react-redux'
import { NavbarLogic } from '../Navbar.logic'

const ProfileMenuPopUpWithMenuItems = () => {
    const { userInfo } = useSelector((state) => state.userSignin)

    const { profileMenuOpen, getFirstName, handleProfileMenuOpen, profileItems } =
        NavbarLogic()

    return (
        <div id="profile-menu" onClick={handleProfileMenuOpen}>
            <div className="flex justify-center items-center space-x-3 cursor-pointer">
                <div className="dark:text-white text-gray-900 text-lg cursor-pointer">
                    Hi {getFirstName(userInfo?.name)}!
                </div>
                <div className="w-9 h-9 rounded-full overflow-hidden">
                    <img
                        src={
                            userInfo?.profilePic ||
                            process.env.NEXT_PUBLIC_CLIENT_BACKUP_DP
                        }
                        alt="user profile pic"
                        className="w-full h-full object-cover"
                        width={50}
                        height={50}
                    />
                </div>
            </div>
            {profileMenuOpen && (
                <div className="absolute w-60 px-5 py-5 dark:bg-MB bg-[#fff] rounded-lg shadow dark:border-transparent mt-5">
                    <h1 className="text-lg font-thin dark:text-white">
                        {userInfo?.name}
                    </h1>
                    <p className="break-words text-xs font-thin text-black dark:text-[gray]">
                        {userInfo?.email}
                    </p>
                    <div className="mt-3 h-[0.1rem] w-full bg-[gray]" />
                    <div className="mt-5  space-y-3 dark:text-white">
                        {profileItems.map((item, index) => (
                            <div
                                key={index}
                                className="text-[gray] font-medium cursor-pointer"
                                onClick={item.handleClick}
                            >
                                <span className="flex items-center">
                                    <div className="mr-3">{item.icon}</div>
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfileMenuPopUpWithMenuItems
