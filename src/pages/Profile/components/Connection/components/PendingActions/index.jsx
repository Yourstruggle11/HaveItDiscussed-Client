export const PendingActions = () => {
    return (
        <div className="flex items-center justify-end">
            <button
                className="bg-blue-500 active:bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none mr-2 ease-linear transition-all duration-150"
                type="button"
            >
                Pending
            </button>
            <button
                className="bg-red-500 active:bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
            >
                Cancel Request
            </button>
        </div>
    )
}
