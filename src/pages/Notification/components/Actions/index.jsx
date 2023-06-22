import React from 'react'
import { Link } from 'react-router-dom'

export default function Actions({type, actionURL}) {
    const generateActionText = (type) => {
        switch (type) {
            case 1:
                return 'Go and find out!'
            case 2:
                return 'Yeah, go chat!'
            case 3:
                return 'GO and Reply now'
            case 4:
                return 'Sounds amazing!'
            case 5:
                return 'Sounds amazing!'
            case 6:
                return 'Go and check it out!'
            default:
                return 'View'
        }
    }
    return (
        <Link to={actionURL} className='hidden md:block'>
            <button className="text-xs text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 rounded px-3 py-1">
                {generateActionText(type)}
            </button>
        </Link>
    )
}
