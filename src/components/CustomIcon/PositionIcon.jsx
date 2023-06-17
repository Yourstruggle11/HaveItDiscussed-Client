import React from 'react'

function PositionIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 feather feather-briefcase"
        >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
            <line x1="16" y1="13" x2="16" y2="17"></line>
            <line x1="8" y1="13" x2="8" y2="17"></line>
            <line x1="3" y1="9" x2="21" y2="9"></line>
        </svg>
    )
}

export default PositionIcon
