import React from 'react';
import './topbar.css';
import {MdOutlineLanguage} from 'react-icons/md';
import{AiFillSetting} from 'react-icons/ai';
import {IoIosNotifications} from 'react-icons/io'
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
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='topAvatar' alt="Avatar" />
                </div>
            </div>
        </div>
    )
}

export default TopBar