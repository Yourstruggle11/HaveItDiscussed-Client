import React from 'react'
import EditableField from '../../../../components/EditableField'

function AboutSection({ bio, isEditing, handleInputChange }) {
    return (
        <div className="mt-10 py-10 border-t border-[#94a3b85c] text-center">
            <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                    <EditableField
                        isEditing={isEditing}
                        onChange={handleInputChange}
                        name="bio"
                        value={bio}
                        isTextArea
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutSection
