import React from 'react'
import MessageIcon from '../../../../../../components/CustomIcon/MessageIcon'

const Header = () => {
    return (
        <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="cursor-pointer flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                <MessageIcon />
            </div>
            <div className="cursor-pointer ml-2 font-bold text-2xl">Start New Chat</div>
        </div>
    )
}

export default Header
