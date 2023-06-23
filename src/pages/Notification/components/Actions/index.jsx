import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonDefinations } from '../../../../components/ButtonDefinations'

export default function Actions({ type, actionURL }) {
    const generateActionText = (type) => {
        switch (type) {
            case 1:
                return 'Discover it now!'
            case 2:
                return 'Engage in conversation!'
            case 3:
                return 'Respond promptly!'
            case 4:
                return 'Sounds incredible!'
            case 5:
                return 'Seems fantastic!'
            case 6:
                return 'Explore it further!'
            default:
                return 'View'
        }
    }
    return (
        <Link
            to={actionURL}
            className="hidden md:block relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-blue-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
        >

                <ButtonDefinations.ActionButton>{generateActionText(type)}</ButtonDefinations.ActionButton>
        </Link>
        // </Link>
    )
}
