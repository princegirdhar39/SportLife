import React from 'react';
import { Dashboard } from '../../components/dashboard/dashboard';
import './app-left.css';

// const TABS = ["Dashboard","Bookings","Customers","Property","Inbox","Settings"];

export const AppLeft = () => {
    return(
        <div className ="appleft">

            <Dashboard />

        </div>

    )
}