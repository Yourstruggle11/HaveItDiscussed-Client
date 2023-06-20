import { useDispatch, useSelector } from 'react-redux'
import { cancelFriendRequest } from '../../../../../../redux/actions/friendsAction'
import { useParams } from 'react-router-dom'

export const PendingActions = () => {
    const { userName, userNo } = useParams()
    const { data } = useSelector((state) => state.getUserProfileDetails)
    const dispatch = useDispatch()
    return (
        <div className="flex items-center justify-end">
            <div className="cursor-pointer bg-blue-500 active:bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none mr-2 ease-linear transition-all duration-150">
                Pending
            </div>
            <button
                onClick={() =>
                    dispatch(cancelFriendRequest(data?.data?._id, userName, userNo))
                }
                className="bg-red-500 active:bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
            >
                Cancel Request
            </button>
        </div>
    )
}
