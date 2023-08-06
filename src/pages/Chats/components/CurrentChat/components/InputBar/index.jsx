import React from 'react'
import EmojiPicker from './components/EmojiPicker'
import { useRef } from 'react'
import SendIcon from '../../../../../../components/CustomIcon/SendIcon'

const InputBar = () => {
    const inputRef = useRef(null)
    const renderEmoji = (emeoji) => {
        const inputElement = inputRef.current
        if (!inputElement) return

        inputElement.focus()
        document.execCommand('insertText', false, emeoji)
    }
    return (
        <div className="flex flex-row items-center h-16 rounded-xl bg-white dark:bg-MB w-full px-4">
            <div>
                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* ... */}
                    </svg>
                </button>
            </div>
            <div className="flex-grow ml-4">
                <div className="relative w-full">
                    <input
                        ref={inputRef}
                        type="text"
                        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10 dark:bg-MB dark:text-white"
                    />
                    <EmojiPicker onSelectEmoji={renderEmoji} />
                </div>
            </div>
            <div className="ml-4">
                <button className="flex items-center justify-center bg-[#1e40afc6] hover:bg-[#1e40afdb] rounded-xl text-white px-4 py-1 flex-shrink-0">
                    <span>Send</span>
                    <span className="ml-2">
                        <SendIcon />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default InputBar
