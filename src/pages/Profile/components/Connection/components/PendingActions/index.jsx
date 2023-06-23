import { useDispatch, useSelector } from 'react-redux'
import { cancelFriendRequest } from '../../../../../../redux/actions/friendsAction'
import { useParams } from 'react-router-dom'
import { ButtonDefinations } from '../../../../../../components/ButtonDefinations'

export const PendingActions = () => {
    const { userName, userNo } = useParams()
    const { data } = useSelector((state) => state.getUserProfileDetails)
    const dispatch = useDispatch()
    return (
        <div className="flex items-center justify-end">
            <ButtonDefinations.PrimaryButton>
                Pending
            </ButtonDefinations.PrimaryButton>
            <ButtonDefinations.DengerButton
                onClick={() =>
                    dispatch(cancelFriendRequest(data?.data?._id, userName, userNo))
                }
            >
                Cancel Request
            </ButtonDefinations.DengerButton>
        </div>
    )
}
