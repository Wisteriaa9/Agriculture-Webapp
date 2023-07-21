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


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Acdc_About",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/Acdc_Id",
            name:"Adc Id",
            icon:<FaTh/>
        },
       
        {
            path:"/Acdc_Cost",
            name:"Cost Price",
            icon:<FaRegChartBar/>
        },
    
        {
            path:"/Acdc_Capacity",
            name:"Capacity",
            icon:<FaShoppingBag/>
        },
        {
            path:"/Acdc_List",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="flex h-screen">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">ACDC</h1>
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

export default Sidebar;