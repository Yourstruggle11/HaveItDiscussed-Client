import React, { useState } from 'react'
import EmojiIcon from '../../../../../../../../components/CustomIcon/EmojiIcon'
import CrossIcon from '../../../../../../../../components/CustomIcon/CrossIcon'

const emojis = [
    '😀',
    '😃',
    '😄',
    '😁',
    '😆',
    '😅',
    '🤣',
    '😂',
    '🙂',
    '😉',
    '😊',
    '😇',
    '😍',
    '😘',
    '😗',
    '😚',
    '😙',
    '😋',
    '😛',
    '😜',
    '😎',
    '🤓',
    '😏',
    '😒',
    '😞',
    '😔',
    '😟',
    '😕',
    '🙁',
    '☹️',
    '😣',
    '😖',
    '😫',
    '😩',
    '🥺',
    '😢',
    '😭',
    '😤',
    '😠',
    '😡',
    '🤬',
    '🤯',
    '😳',
    '🥵',
    '🥶',
    '😱',
    '😨',
    '😰',
    '😥',
    '😓',
    '🤗',
    '🤔',
    '🤭',
    '🤫',
    '🤥',
    '😶',
    '😐',
    '😑',
    '😬',
    '🙄',
    '😯',
    '😦',
    '😧',
    '😮',
    '😲',
    '🥱',
    '😴',
    '🤤',
    '😪',
    '😵',
    '🤐',
    '🥴',
    '🤢',
    '🤮',
    '🤑',
    '🤒',
    '🤕',
    '🤎',
    '🤍',
    '🧡',
    '💛',
    '💚',
    '💙',
    '💜',
    '🖤',
    '💔',
    '❤️',
    '💕',
    '💞',
    '💓',
    '💗',
    '💖',
    '💘',
    '💝'
]

const EmojiPicker = ({ onSelectEmoji }) => {
    const [showPicker, setShowPicker] = useState(false)

    const handleEmojiSelect = (emoji) => {
        // Callback function to handle selected emoji
        onSelectEmoji(emoji)
        setShowPicker(false) // Close the emoji picker after selecting an emoji
    }

    return (
        <div>
            {showPicker ? (
                <div className="fixed w-40 bottom-4 right-4 bg-white p-2 shadow-lg rounded-lg">
                    {emojis.map((emoji, index) => (
                        <span
                            className="cursor-pointer"
                            key={index}
                            onClick={() => handleEmojiSelect(emoji)}
                        >
                            {emoji}
                        </span>
                    ))}
                </div>
            ) : null}
            <button
                onClick={() => setShowPicker(!showPicker)}
                className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
            >
                {!showPicker ? <EmojiIcon /> : <CrossIcon />}
            </button>
        </div>
    )
}

export default EmojiPicker
