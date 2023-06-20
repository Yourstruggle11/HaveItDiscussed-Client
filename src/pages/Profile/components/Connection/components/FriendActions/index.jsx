import { useParams } from 'react-router-dom'
import { removeFriend as unFriend } from '../../../../../../redux/actions/friendsAction'
import { useDispatch, useSelector } from 'react-redux'

export const FriendActions = () => {
    const { userName, userNo } = useParams()
    const { data } = useSelector((state) => state.getUserProfileDetails)
    const dispatch = useDispatch()

    return (
        <div className="flex items-center justify-end">
            <button
                className="bg-blue-500 active:bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none mr-2 ease-linear transition-all duration-150"
                type="button"
            >
                Chat
            </button>
            <button
                onClick={() => dispatch(unFriend(data?.data?._id, userName, userNo))}
                className="bg-red-500 active:bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
            >
                Unfriend
            </button>
        </div>
    )
}
