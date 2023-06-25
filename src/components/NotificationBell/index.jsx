import React, { useEffect, useRef, useState } from 'react'
import BellIcon from '../../components/CustomIcon/BellIcon'
import { NotificationPopover } from './components/NotificationPopover'
import { useDispatch, useSelector } from 'react-redux'
import { getLastTenUnreadNotification, markNotificationAsRead } from '../../redux/actions/notificationsAction'

const NotificationBell = () => {
    const { data } = useSelector((state) => state.getLastTenUnreadNotification)
    const dispatch = useDispatch()


    const markAsRead = (markAll,notificationId) => {
      dispatch(markNotificationAsRead(markAll,notificationId))
    }

    const [isOpen, setIsOpen] = useState(false)
    const popoverRef = useRef(null)

    useEffect(() => {
        dispatch(getLastTenUnreadNotification())
        const handleOutsideClick = (event) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="relative">
            {/* Your other content */}
            <div className="absolute top-1/2 right-1">
                <div className="relative" ref={popoverRef}>
                    <button
                        className="relative z-10 block"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="relative">
                            <BellIcon className="h-6 w-6" />
                            {data?.data.length > 0 && (
                                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                                    {data?.data.length}
                                </span>
                            )}
                        </div>
                    </button>
                    {isOpen && (
                        <NotificationPopover
                            notifications={data?.data}
                            markAsRead={markAsRead}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default NotificationBell
