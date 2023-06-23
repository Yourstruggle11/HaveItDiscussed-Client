import { Link } from 'react-router-dom'
import EmptyNotification from '../../../../pages/Notification/components/EmptyNotification'

export const NotificationPopover = ({ notifications, markAsRead }) => {
    const NotificationList = ({ notifications, markAsRead }) => {
        return (
            <div className="py-1">
                {notifications.map((notification) => (
                    <NotificationItem
                        key={notification._id}
                        notification={notification}
                        markAsRead={markAsRead}
                    />
                ))}
            </div>
        )
    }

    const NotificationItem = ({ notification, markAsRead }) => {
        return (
            <div className="px-4 py-2 text-sm flex items-center justify-between text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">
                <span>{notification.message}</span>
                {true && (
                    <button
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500"
                        onClick={() => markAsRead(false, notification._id)}
                    >
                        Mark as Read
                    </button>
                )}
            </div>
        )
    }
    return (
        <div className="absolute right-0 mt-2 w-[450px] rounded-md shadow-lg bg-white dark:bg-MB ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 dark:divide-gray-600">
            <div className="px-4 py-3">
                <p className="text-sm leading-5 text-gray-900 dark:text-gray-100">
                    Recent Notifications
                </p>
                <button
                    onClick={() => markAsRead(true, null)}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500"
                >
                    Mark all notifications as Read
                </button>
            </div>
            {notifications.length > 0 ? (
                <NotificationList
                    notifications={notifications}
                    markAsRead={markAsRead}
                />
            ) : (
                <EmptyNotification />
            )}
            <div className="py-1">
                <Link
                    to="/notifications"
                    className="block px-4 py-2 text-sm font-medium text-blue-600 hover:bg-gray-100 dark:text-blue-400 dark:hover:bg-gray-700"
                >
                    View All
                </Link>
            </div>
        </div>
    )
}
