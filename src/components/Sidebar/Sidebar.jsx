import React from 'react'
import './sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        {/* Line Style Here Icon  sidebarIcon */}
                        Home
                    </li>
                    <li className="sidebarListItem">
                        {/* Time Line Here Icon  sidebarIcon*/}
                        Analytics
                    </li>
                    <li className="sidebarListItem ">
                        {/* Trending Up Here Icon sidebarIcon */}
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        {/* Line Style Here Icon  sidebarIcon */}
                        User
                    </li>
                    <li className="sidebarListItem">
                        {/* Time Line Here Icon  sidebarIcon*/}
                        Products
                    </li>
                    <li className="sidebarListItem ">
                        {/* Trending Up Here Icon sidebarIcon */}
                        Transactions
                    </li>
                    <li className="sidebarListItem ">
                        {/* Trending Up Here Icon sidebarIcon */}
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        {/* Line Style Here Icon  sidebarIcon */}
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        {/* Time Line Here Icon  sidebarIcon*/}
                        Feedback
                    </li>
                    <li className="sidebarListItem ">
                        {/* Trending Up Here Icon sidebarIcon */}
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        {/* Line Style Here Icon  sidebarIcon */}
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        {/* Time Line Here Icon  sidebarIcon*/}
                        Analytics
                    </li>
                    <li className="sidebarListItem ">
                        {/* Trending Up Here Icon sidebarIcon */}
                        Reports
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar