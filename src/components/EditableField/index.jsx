import React from 'react'

function EditableField({ isEditing, value, name, onChange, isTextArea = false }) {
    const RenderComponent = isTextArea ? 'textarea' : 'input'
    if (isEditing) {
        return (
            <RenderComponent
                type="text"
                className={`ml-4 bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 text-base leading-6 text-gray-700 placeholder-gray-400 ${
                    isTextArea ? 'w-full h-36 resize-none px-0 py-0' : 'px-3 py-2'
                }`}
                value={value}
                onChange={onChange}
                name={name}
            />
        )
    }

    return <p className="ml-4 text-[#94a3b8a1]">{value}</p>
}

export default EditableField
