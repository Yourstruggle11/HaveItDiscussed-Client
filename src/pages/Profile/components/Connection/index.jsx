import React from 'react'
import { FriendActions } from './components/FriendActions'
import { PendingActions } from './components/PendingActions'
import { FriendRequestActions } from './components/FriendRequestActions'
import { addFriend as sendFriendRequest } from '../../../../redux/actions/friendsAction'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ButtonDefinations } from '../../../../components/ButtonDefinations'

function Connection({ isFriend, isPending, isFriendRequestReceived, recipientId }) {
    const { userName, userNo } = useParams()
    const dispatch = useDispatch()
    return (
        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
            <div className="py-6 px-3 mt-32 sm:mt-0 flex item-center justify-center">
                {isFriend && <FriendActions />}
                {!isFriend && isPending && <PendingActions />}
                {!isFriend && !isPending && !isFriendRequestReceived && (
                    <ButtonDefinations.PrimaryButton
                        onClick={() =>
                            dispatch(
                                sendFriendRequest(recipientId, userName, userNo)
                            )
                        }
                    >
                        Connect
                    </ButtonDefinations.PrimaryButton>
                )}
                {isFriendRequestReceived && <FriendRequestActions />}
            </div>
        </div>
    )
}

export default Connection
