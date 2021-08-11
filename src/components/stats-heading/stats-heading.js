import React from 'react';
import './stats-heading.css'

function StatsHeading() {
    return (
        <div className="headers flex justify-around pt-8 pl-10">
      <div className="stats">Latest Customers stats</div>
      <div className="statss">This Month
      <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
      </div>

     


      </div>
    )
}

export default StatsHeading;