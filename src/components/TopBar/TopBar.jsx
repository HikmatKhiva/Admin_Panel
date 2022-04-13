import React from 'react';
import './topbar.css';
import {MdOutlineLanguage} from 'react-icons/md';
import{AiFillSetting} from 'react-icons/ai';
import {IoIosNotifications} from 'react-icons/io'
import Avatar from '../../assets/avatar.png'
const TopBar = () => {

    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>Admin Dashboard</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        {/* Notifications */}
                        <IoIosNotifications className='topbarIcons'/>
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        {/* Language*/}
                        <MdOutlineLanguage className='topbarIcons'/>
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        {/* Settings */}
                        <AiFillSetting className='topbarIcons'/>
                        <span className='topIconBadge'>2</span>
                    </div>
                    <img src={Avatar} className='topAvatar' alt="Avatar" />
                </div>
            </div>
        </div>
    )
}

export default TopBar