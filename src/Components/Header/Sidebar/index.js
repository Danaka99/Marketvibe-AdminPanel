import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState} from 'react';
import { IoLogOutSharp } from "react-icons/io5";

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
                <span className='icon'><AiFillProduct/></span>
                Product
                <span className='arrow'><FaAngleRight/></span>
            </Button>
            <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu===true ? 'colapse': 'colapsed'}`}>
                <ul className='submenu'>
                <li><Link to="/products">Product Listing</Link></li>
                <li><Link to="/product/details">Product View</Link></li>
                <li><Link to="product/upload">Product Upload</Link></li>
            </ul>
            </div>
        </li>

        <li>
            <Button className={`w-100 mb-1 ${activeTab===2 && isToggleSubmenu===true ? 'active' :''}`} onClick={()=>isOpenSubmenu(2)}>
                <span className='icon'><AiFillProduct/></span>
                Category
                <span className='arrow'><FaAngleRight/></span>
            </Button>
            <div className={`submenuWrapper ${activeTab===2 && isToggleSubmenu===true ? 'colapse': 'colapsed'}`}>
                <ul className='submenu'>
                <li><Link to="/category">Category List</Link></li>
                <li><Link to="/category/add">Add a Category</Link></li>
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
