import React from 'react'
import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import WidgetLg from '../../components/WidgetLg/WidgetLg'
import WidgetSmall from '../../components/WidgetSmall/WidgetSmall'
import './home.css'
import {userData} from '../../Data'
const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home