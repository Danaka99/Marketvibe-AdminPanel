import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { SiPagekit } from "react-icons/si";
import { Link } from "react-router-dom";
import React, { useState} from 'react';
import { IoLogOutSharp } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa6";
import { MdHelp } from "react-icons/md";

const Sidebar = () => {

    const [activeTab,setActiveTab] = useState(0);
    const [isToggleSubmenu,setIsToggleSubmenu] = useState(false);

   

    const isOpenSubmenu=(index)=>{
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);
    }

  return (
    <div className="sidebar">
      <ul>
        <li>
            <Link to="/">
            <Button className={`w-100 mb-1 ${activeTab===0 ? 'active' :''}`} onClick={()=>isOpenSubmenu(0)}>
                <span className='icon'><MdDashboard/></span>
                Dashboard
            </Button>
            </Link>
        </li>
        <li>
            <Button className={`w-100 mb-1 ${activeTab===1 && isToggleSubmenu===true ? 'active' :''}`} onClick={()=>isOpenSubmenu(1)}>
                <span className='icon'><FaUserCircle/></span>
                User
                 <span className='arrow'><FaAngleRight/></span>
            </Button>
                <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu===true ? 'colapse': 'colapsed'}`}>
                <ul className='submenu'>
                <li><Link to="/seller">Seller Account</Link></li>
                <li><Link to="#">Seller Information</Link></li>
                <li><Link to="#">Seller Authentication</Link></li>
                <li><Link to="/managedaccount">Manage Account</Link></li>
                <li><Link to="#">Seller Center</Link></li>
                <li><Link to="#">Managed Payment</Link></li>
            </ul>
            </div>
            
        </li>
        <li>
            <Button className={`w-100 mb-1 ${activeTab===2 && isToggleSubmenu===true ? 'active' :''}`} onClick={()=>isOpenSubmenu(2)}>
                <span className='icon'><AiFillProduct/></span>
                Product
                <span className='arrow'><FaAngleRight/></span>
            </Button>
            <div className={`submenuWrapper ${activeTab===2 && isToggleSubmenu===true ? 'colapse': 'colapsed'}`}>
                <ul className='submenu'>
                <li><Link to="/products">Product Listing</Link></li>
                <li><Link to="/product/details">Product View</Link></li>
                <li><Link to="product/upload">Product Upload</Link></li>
                <li><Link to="product/upload">Market Analyst</Link></li>
            </ul>
            </div>
        </li>
        <li>
            <Button className={`w-100 mb-1 ${activeTab===3 ? 'active' :''}`} onClick={()=>isOpenSubmenu(3)}>
                <span className='icon'><FaFileInvoice/></span>
                Invoices
                <span className='arrow'><FaAngleRight/></span>
            </Button>
        </li>
        <li>
            <Button className={`w-100 mb-1 ${activeTab===4 ? 'active' :''}`} onClick={()=>isOpenSubmenu(4)}>
                <span className='icon'><FaShoppingCart/></span>
                Orders
            </Button>
        </li>
        <li>
            <Button className={`w-100 mb-1 ${activeTab===5 ? 'active' :''}`} onClick={()=>isOpenSubmenu(5)}>
                <span className='icon'><IoMdMail/></span>
                Messages
            </Button>
        </li>
        <li>
            <Button className={`w-100  mb-1 ${activeTab===6 ? 'active' :''}`} onClick={()=>isOpenSubmenu(6)}>
                <span className='icon'><FaBell/></span>
                Notification
            </Button>
        </li>
        <li>
            <Button className={`w-100 mb-1 ${activeTab===7 ? 'active' :''}`} onClick={()=>isOpenSubmenu(7)}>
                <span className='icon'><IoIosSettings/></span>
                Setting
            </Button>
        </li>
        <li>
            <Button className={`w-100 mb-1 ${activeTab===8 ? 'active' :''}`} onClick={()=>isOpenSubmenu(8)}>
                <span className='icon'><SiPagekit/></span>
                Blank Page
            </Button>
        </li>
         <li>
            <Button className={`w-100 mb-1 ${activeTab===9 ? 'active' :''}`} onClick={()=>isOpenSubmenu(9)}>
                <span className='icon'><FaBusinessTime/></span>
                Add On
            </Button>
        </li>
         <li>
             <Button className={`w-100 mb-1 ${activeTab===10 && isToggleSubmenu===true ? 'active' :''}`} onClick={()=>isOpenSubmenu(10)}>
                <span className='icon'><MdHelp/></span>
                Help Center
                <span className='arrow'><FaAngleRight/></span>
            </Button>
            <div className={`submenuWrapper ${activeTab===10 && isToggleSubmenu===true ? 'colapse': 'colapsed'}`}>
                <ul className='submenu'>
                <li><Link to="#"></Link></li>
                <li><Link to="#"></Link></li>
                <li><Link to="#"></Link></li>
                <li><Link to="#"></Link></li>
            </ul>
            </div>
        </li>
      </ul>
      <br/>
      <div className="logoutWrapper">
        <div className='logoutBox'>
            <Button variant='contained'><IoLogOutSharp/> Logout</Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
