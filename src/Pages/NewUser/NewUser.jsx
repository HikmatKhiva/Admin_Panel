import React from 'react'
import './newUser.css'
const NewUser = () => {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>UserName</label>
                    <input type="text" placeholder='UserName' />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='Full Name' />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder='Email' />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder='Password' />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder='Phone Number' />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder='Address' />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <label htmlFor="female">Female</label>
                        <input type="radio" name='gender' id='female' value='female' />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name='gender' id='male' value='male' />
                        <label htmlFor="other">Others</label>
                        <input type="radio" name='gender' id='other' value='other' />
                    </div>
                </div>
                <div className="newUserItem">
                    <label htmlFor="active">Active</label>
                    <select name="active" className='newUserSelect' id="active">
                        <option value="yes">Yes</option>
                        <option value="np">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser