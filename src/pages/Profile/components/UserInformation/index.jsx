import React from 'react'
import LocationIcon from '../../../../components/CustomIcon/LocationIcon'
import PositionIcon from '../../../../components/CustomIcon/PositionIcon'
import EducationIcon from '../../../../components/CustomIcon/EducationIcon'

function UserInformation({ name, location, jobTitle, university }) {
    return (
        <div className="text-center mt-12 ">
            <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                {name}
            </h3>
            <div className="flex items-center justify-center first-letter:text-sm leading-normal mt-0 mb-2 text-[#94a3b8a3] font-bold uppercase">
                <LocationIcon className="mr-4 text-lg" />
                <p className="ml-4">{location}</p>
            </div>
            <div className="mb-2 text-blueGray-600 mt-10 flex items-center justify-center text-[#94a3b8a3]">
                <PositionIcon className="mr-4 text-lg" />
                <p className="ml-4">{jobTitle}</p>
            </div>
            <div className="mb-2 text-blueGray-600 flex items-center justify-center text-[#94a3b8a3]">
                <EducationIcon className="mr-4 text-lg" />
                <p className="ml-4">{university}</p>
            </div>
        </div>
    )
}

export default UserInformation
