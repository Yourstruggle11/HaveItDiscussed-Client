export const FriendRequestActions = () => {
    return (
        <div className="flex items-center justify-end">
            <button
                className="bg-green-500 active:bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none mr-2 ease-linear transition-all duration-150"
                type="button"
            >
                Confirm Request
            </button>
            <button
                className="bg-red-500 active:bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
            >
                Reject Request
            </button>
        </div>
    )
}
