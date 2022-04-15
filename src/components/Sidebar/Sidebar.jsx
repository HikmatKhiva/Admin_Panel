import React from 'react'
import './sidebar.css'
import { AiFillHome } from 'react-icons/ai';
import { IoIosAnalytics } from 'react-icons/io';
import { BiTrendingUp } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import { FaProductHunt } from 'react-icons/fa';
import { GrTransaction, GrMail } from 'react-icons/gr';
import { GoReport } from 'react-icons/go';
import { VscFeedback, VscReport } from 'react-icons/vsc';
import { FiMessageSquare } from 'react-icons/fi';
import { MdManageAccounts } from 'react-icons/md';
import { IoMdAnalytics } from 'react-icons/io';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link to='/' className='active'>
                                {/* Line Style Here Icon  sidebarIcon */}
                                <AiFillHome className='sidebarIcon' />
                                Home
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            {/* Time Line Here Icon  sidebarIcon*/}
                            <IoIosAnalytics className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem ">
                            <BiTrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <Link to='/users'>
                                <BiUser className='sidebarIcon' />
                                User
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to='/products'>
                                <FaProductHunt className='sidebarIcon' />
                                Products
                            </Link>
                        </li>
                        <li className="sidebarListItem ">
                            <GrTransaction className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className="sidebarListItem ">
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
                            <GrMail className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <VscFeedback className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className="sidebarListItem ">
                            <FiMessageSquare className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            {/* Line Style Here Icon  sidebarIcon */}
                            <MdManageAccounts className='sidebarIcon' />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <IoMdAnalytics className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem ">
                            <VscReport className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar