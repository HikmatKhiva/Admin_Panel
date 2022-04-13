import React from 'react'
import './sidebar.css'
import { AiFillHome } from 'react-icons/ai';
import { IoIosAnalytics } from 'react-icons/io';
import {BiTrendingUp} from 'react-icons/bi';
import {BiUser} from 'react-icons/bi';
import {FaProductHunt} from 'react-icons/fa';
import {GrTransaction,GrMail} from 'react-icons/gr';
import {GoReport} from 'react-icons/go';
import {VscFeedback,VscReport} from 'react-icons/vsc';
import {FiMessageSquare} from 'react-icons/fi';
import {MdManageAccounts} from 'react-icons/md';
import {IoMdAnalytics} from 'react-icons/io'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            {/* Line Style Here Icon  sidebarIcon */}
                            <AiFillHome className='sidebarIcon' />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            {/* Time Line Here Icon  sidebarIcon*/}
                            <IoIosAnalytics className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem ">
                            {/* Trending Up Here Icon sidebarIcon */}
                            <BiTrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            {/* Line Style Here Icon  sidebarIcon */}
                            <BiUser className='sidebarIcon' />
                            User
                        </li>
                        <li className="sidebarListItem">
                            {/* Time Line Here Icon  sidebarIcon*/}
                            <FaProductHunt className='sidebarIcon' />
                            Products
                        </li>
                        <li className="sidebarListItem ">
                            {/* Trending Up Here Icon sidebarIcon */}
                            <GrTransaction className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className="sidebarListItem ">
                            {/* Trending Up Here Icon sidebarIcon */}
                            <GoReport className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            {/* Line Style Here Icon  sidebarIcon */}
                            <GrMail className='sidebarIcon'/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            {/* Time Line Here Icon  sidebarIcon*/}
                            <VscFeedback className='sidebarIcon'/>
                            Feedback
                        </li>
                        <li className="sidebarListItem ">
                            {/* Trending Up Here Icon sidebarIcon */}
                            <FiMessageSquare className='sidebarIcon'/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            {/* Line Style Here Icon  sidebarIcon */}
                            <MdManageAccounts className='sidebarIcon'/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            {/* Time Line Here Icon  sidebarIcon*/}
                            <IoMdAnalytics className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem ">
                            {/* Trending Up Here Icon sidebarIcon */}
                            <VscReport className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar