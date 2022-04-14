import React from 'react';
import './user.css';
import { MdPermIdentity, MdPhoneAndroid, MdLocationSearching,MdPublish } from 'react-icons/md';
import { AiOutlineCalendar, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const User = () => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className='UserTitle'>Edit User</h1>
                <Link to='/newUser'>
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://icon-library.com/images/person-image-icon/person-image-icon-19.jpg" className='userShowImg' alt="" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Backer</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <MdPermIdentity className='userShowIcon' />
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <AiOutlineCalendar className='userShowIcon' />
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <MdPhoneAndroid className='userShowIcon' />
                            <span className="userShowInfoTitle">+99****</span>
                        </div>
                        <div className="userShowInfo">
                            <AiOutlineMail className='userShowIcon' />
                            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <MdLocationSearching className='userShowIcon' />
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>UserName</label>
                                <input type="text" placeholder='annaback' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder='Anna Becker' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder='annabeck99@gmail.com' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder='+99****' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder='New York | USA' className='userUpdateInput' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className='userUpdateImg' src="https://icon-library.com/images/person-image-icon/person-image-icon-19.jpg" alt="" />
                                <label htmlFor='file'>
                                    <MdPublish className='userUpdateIcon'/>
                                    <input type="file" style={{display:"none"}} id='file'/>
                                </label>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User