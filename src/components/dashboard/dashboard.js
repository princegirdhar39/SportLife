import React from 'react';
import './dashboard.css';
import logo from'../../images/Screen Shot 2021-08-09 at 6.06.59 PM.png';
import Icon, { SettingFilled, InboxOutlined, PropertySafetyFilled, MessageFilled, HomeFilled} from "@ant-design/icons"
import {AppstoreFilled} from "@ant-design/icons";
import imgIcon from '../../images/Screen Shot 2021-08-09 at 7.38.24 PM.png';

const icons = [
    <AppstoreFilled style={{color:'rgb(18 64 191)'}}/>,
    <PropertySafetyFilled />,
    <InboxOutlined />,
    <HomeFilled />,
    <MessageFilled />,

    <SettingFilled />,
    
    
    
  ];


const TABS = ["Dashboard","Bookings","Customers","Property","Inbox","Settings"];
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



export const Dashboard = () => {
    return (


        <div className = "dashboard flex flex-col items-shrink ">
            {/* <AppstoreOutlined /> */}

            <div className="logo p-10">
            <img alt="logo" src={logo} />
            </div>
        {TABS.map((tab,i) => {
            return(

                <div className="tabs pt-6 pb-3 pl-24">
                    <div className="icons">

                    {icons[i]}

                    </div>
                    <div key={tab}  className={`tab ${tab ==="Dashboard" ? "active" : "" }`}>
                   

                    
                    
                    {tab}
                    </div>
       

                </div>
            )
        })}
        
        </div>
        
    )
}