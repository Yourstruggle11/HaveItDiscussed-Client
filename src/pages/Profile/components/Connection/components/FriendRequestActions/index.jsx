import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
    acceptFriendRequest,
    cancelFriendRequest
} from '../../../../../../redux/actions/friendsAction'
import { ButtonDefinations } from '../../../../../../components/ButtonDefinations'

export const FriendRequestActions = () => {
    const { userName, userNo } = useParams()
    const { data } = useSelector((state) => state.getUserProfileDetails)
    const dispatch = useDispatch()
    return (
        <div className="flex items-center justify-end">
            <ButtonDefinations.SuccessButton
                onClick={() =>
                    dispatch(acceptFriendRequest(data?.data?._id, userName, userNo))
                }
                className="bg-green-500 active:bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none mr-2 ease-linear transition-all duration-150"
                type="button"
            >
                Accept Request
            </ButtonDefinations.SuccessButton>
            <ButtonDefinations.DengerButton
                onClick={() =>
                    dispatch(cancelFriendRequest(data?.data?._id, userName, userNo))
                }
            >
                Reject Request
            </ButtonDefinations.DengerButton>
        </div>
    )
}
