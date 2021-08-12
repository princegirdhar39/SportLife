import React from 'react'
import './graph-container.css';
import graphimage from '../../images/Screen Shot 2021-08-12 at 6.20.24 AM.png'

const GraphContainer = () => {
    return (
        <div className = "graphcontainer rounded">
            <div className="total-customers p-8">
                <p className="font-black text-5xl">3,256</p>
                <p className="pt-2 font-thin text-sm">Total customers</p>
            </div>
            <div className="image">

            <img src={graphimage} />
            </div>
            <div className="percent flex ">
                <p>58%</p>
                <p>42%</p>
                
            </div>
           
            
        </div>
    )
}

export default GraphContainer;
