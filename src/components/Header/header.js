import React from 'react';
import './header.css';
import {AppstoreFilled, BellTwoTone, MessageTwoTone, DropboxCircleFilled, BellOutlined, MessageOutlined} from "@ant-design/icons";
import { BeakerIcon } from '@heroicons/react/solid'


export const Header = () => {
    return (
        <div className= "header">
           <div className="heading-logo p-8 pb-6 text-2xl">
               Dashboard
           </div>
           <div className="input">
               <input type="text" placeholder="Search" />
           </div>
           <div className="iconss">
           <BellOutlined style={{fontSize:"40px",color:"#c3cfef"}}/>
           <MessageOutlined style={{fontSize:"40px",color:"#c3cfef"}} />
           <div className="name-drop">
           John Doe
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>

           </div>
           

<img src="https://threewill.com/wp-content/uploads/austin-ryan-full-resolution-office-365.jpg" />

           

           </div>
        </div>

    )

}