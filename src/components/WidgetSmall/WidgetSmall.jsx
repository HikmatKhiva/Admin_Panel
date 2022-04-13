import React from 'react'
import './widgetsmall.css'
import { MdVisibility } from 'react-icons/md'
import Avatar from '../../assets/avatar.png'

const WidgetSmall = () => {
    return (
        <div className='widgetSmall'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetListItem">
                    <img src={Avatar} alt="" className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        {/* Here Icon Visibility */}
                        <MdVisibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetListItem">
                    <img src={Avatar} alt="" className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        {/* Here Icon Visibility widgetSmIcon */}
                        <MdVisibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetListItem">
                    <img src={Avatar} alt="" className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        {/* Here Icon Visibility widgetSmIcon */}
                        <MdVisibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetListItem">
                    <img src={Avatar} alt="" className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        {/* Here Icon Visibility widgetSmIcon */}
                        <MdVisibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetListItem">
                    <img src={Avatar} alt="" className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        {/* Here Icon Visibility  widgetSmIcon */}
                        <MdVisibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSmall