import React from 'react'
import LocationIcon from '../../../../components/CustomIcon/LocationIcon'
import PositionIcon from '../../../../components/CustomIcon/PositionIcon'
import EducationIcon from '../../../../components/CustomIcon/EducationIcon'
import EditableField from '../../../../components/EditableField'

function UserInformation({
    isCurrentUser,
    isEditing,
    setIsEditing,
    handleInputChange,
    userProfileData,
    handleSave
}) {

    return (
        <div className="text-center mt-12">
            <div className="flex lg:flex-row flex-col items-center justify-center">
                <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    {userProfileData?.name}
                </h3>
                {isCurrentUser &&
                    (isEditing ? (
                        <button
                            className="ml-2 mb-2 px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            onClick={() => {
                                setIsEditing(false)
                                handleSave()
                            }}
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            className="ml-2 mb-2 px-4 py-2 text-base font-medium text-blue-600 bg-transparent rounded-md hover:bg-blue-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit Profile
                        </button>
                    ))}
            </div>

            <div className="flex items-center justify-center first-letter:text-sm leading-normal mt-0 mb-2 text-[#94a3b8a3] font-bold uppercase">
                <LocationIcon className="mr-4 text-lg" />
                <EditableField
                    isEditing={isEditing}
                    value={userProfileData?.location}
                    onChange={handleInputChange}
                    name="location"
                />
            </div>
            <div className="mb-2 text-blueGray-600 mt-10 flex items-center justify-center text-[#94a3b8a3]">
                <PositionIcon className="mr-4 text-lg" />
                <EditableField
                    isEditing={isEditing}
                    value={userProfileData?.position}
                    onChange={handleInputChange}
                    name="position"
                />
            </div>
            <div className="mb-2 text-blueGray-600 flex items-center justify-center text-[#94a3b8a3]">
                <EducationIcon className="mr-4 text-lg" />
                <EditableField
                    isEditing={isEditing}
                    value={userProfileData?.university}
                    onChange={handleInputChange}
                    name="university"
                />
            </div>
        </div>
    )
}

export default UserInformation
