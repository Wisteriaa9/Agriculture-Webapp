import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
   
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const CPCSidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/MFE_About",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/MFE_Id",
            name:"Adc Id",
            icon:<FaTh/>
        },
       
        {
            path:"/MFE_Cost",
            name:"Cost Price",
            icon:<FaRegChartBar/>
        },
    
        {
            path:"/MFE_Capacity",
            name:"Capacity",
            icon:<FaShoppingBag/>
        },
        {
            path:"/MFE_List",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="flex h-screen">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">MFE</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default CPCSidebar;