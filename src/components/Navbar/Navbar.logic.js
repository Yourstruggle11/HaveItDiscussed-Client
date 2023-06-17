import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ProfileIcon from '../CustomIcon/ProfileIcon';
import LogoutIcon from '../CustomIcon/LogoutIcon';
import { logoutUser } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';

export const NavbarLogic = () => {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getFirstName = (name = '') => name?.trim().split(' ')[0]

    const handleProfileMenuOpen = () => {
        setProfileMenuOpen(!profileMenuOpen)
    }

    const profileItems = [
        {
            title: 'Profile',
            icon: <ProfileIcon />,
            handleClick: () => navigate('/profile')
        },
        {
            title: 'Logout',
            icon: <LogoutIcon />,
            handleClick: () => dispatch(logoutUser())
        }
    ]
    return {
        profileMenuOpen,
        getFirstName,
        handleProfileMenuOpen,
        profileItems
    }
}
