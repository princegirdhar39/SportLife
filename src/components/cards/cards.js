import React from 'react'
import './cards.css';
import logo from '../../images/Screen Shot 2021-08-09 at 6.06.59 PM.png';
import { RightOutlined } from '@ant-design/icons';


function Cards() {

    const USERS = [
        {
        name: "David",
        type: "The executive",
        status: "Discoverd",
        match: '93%',
        logo: logo
        

    },
    {
        name: "David",
        type: "The executive",
        status: "Discoverd",
        match: '93%',
        logo: logo


    },
    {
        name: "David",
        type: "The executive",
        status: "Discoverd",
        match: '93%',
        logo: logo

    },
    {
        name: "David",
        type: "The executive",
        status: "Discoverd",
        match: '93%',
        logo: logo

    },
    {
        name: "David",
        type: "The executive",
        status: "Discoverd",
        match: '93%',
        logo: logo

    },
    {
        name: "David",
        type: "The executive",
        status: "Discoverd",
        match: '93%',
        logo: logo

    },
    {
        name: "David",
        type: "The executive",
        status: "Discoverd",
        match: '93%',
        logo: logo
    },
    {
        name: "David",
        type: "The executive",
        status: "Discoverd",
        match: '93%',
        logo: logo
    },
  


]



    return (  
        <>
        <div className="leads-container">


            
                     {USERS.map((user)=> {
                         return(


                         
                         <div className="card bg-white h-44 w-60 rounded shadow-md ">
                         
                 <div className="pic_name_type   ">
                 <div className="avatar">
                 <img src="https://threewill.com/wp-content/uploads/austin-ryan-full-resolution-office-365.jpg" />
                 </div>
                 <div className="name_type">
                     <p className="p1 font-bold">{user.name}</p>
                     <p className="pt-2 font-thin text-sm">Type</p>
                         <p className="p2  ">{user.type}</p>
 
                    
 
                 </div>
                
 
 
             </div>
             <div className="status_match">
                         <div className="status ">
                             <p className="font-thin">Status</p>
                         <p>{user.status}</p>
                            
                             
                             </div> 
                             <div className="match">
                             <p className="font-thin text-sm ">Match</p>
                         <p>{user.match}</p>
                                
                                 
 
                             </div>
 
                     </div>
                     </div>
                      
                

                      
                         )
                     })}

                   
                      </div>
                        <div className="view-all text-blue ">View all <RightOutlined style={{fontSize: "14px",padding:"5px",color:"blue"}}  /></div>
                        
                        </>

          
               
           
    )
}

export default Cards;
