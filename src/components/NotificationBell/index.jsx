import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.png';
import BellIcon from '../../components/CustomIcon/BellIcon';
import { NotificationPopover } from './components/NotificationPopover';

const NotificationBell = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            message: 'New message received.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic: logo
        },
        {
            id: 2,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?nature,software,love,'
        },
        {
            id: 3,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?nature,software,,romantic'
        },
        {
            id: 4,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?nature,,love,romantic'
        },
        {
            id: 5,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic: 'https://source.unsplash.com/random/900%C3%97700/?nature,sex'
        },
        {
            id: 6,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?nature,romance'
        },
        {
            id: 7,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?,software,love,romantic'
        },
        {
            id: 8,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?nature,,love,romantic'
        },
        {
            id: 9,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?nature,software,romantic'
        },
        {
            id: 10,
            message: 'You have a friend request.',
            time: '6/19/2023, 3:47:50 AM',
            profilePic:
                'https://source.unsplash.com/random/900%C3%97700/?nature,software,love,'
        }
    ])

  const markAsRead = id => {
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => notification.id !== id)
    );
  };

  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

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
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                  {notifications.length}
                </span>
              )}
            </div>
          </button>
          {isOpen && (
            <NotificationPopover
              notifications={notifications}
              markAsRead={markAsRead}
            />
          )}
        </div>
      </div>
    </div>
  );
};




export default NotificationBell;







