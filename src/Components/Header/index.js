import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assests/logo.jpg";
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from "react-icons/md";
import Searchbox from "./Searchbox";
import { MdOutlineMenu } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import chandi from "../../assests/chandi.jpg"
import { TbWorld } from "react-icons/tb";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';



const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenNotificationDrop, setIsOpenNotificationDrop] = useState(false);

  const openMyAcc = Boolean(anchorEl);
  const openNotification = isOpenNotificationDrop;

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  const handleOpennotificationsDrop = () => {
    setIsOpenNotificationDrop(true);
  };
  
  const handleClosenotificationsDrop = () => {
    setIsOpenNotificationDrop(false);
  };
  

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row w-100">
            {/* Logo Wrapper */}
            <div className="col-sm-2 d-flex align-items-center part-1">
              <Link to={'/'} className="d-flex align-items-center logo">
                <img src={logo} alt="logo" className="logo-img" />
                <span className="ml-2"></span>
              </Link>
            </div>
            {/* Button Wrapper */}
            <div className="col-sm-3 d-flex align-items-center part-2 pl-4">
              <Button className="rounded-circle mr-3">
                <MdOutlineMenuOpen />
              </Button>&nbsp;&nbsp;
              <Searchbox/>
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end part-3 ">
              <Button className="rounded-circle mr-3">
                <TbWorld />
              </Button>&nbsp;&nbsp;&nbsp;&nbsp;
              <Button className="rounded-circle mr-3">
                <MdLightMode />
              </Button>&nbsp;&nbsp;&nbsp;&nbsp;
              <Button className="rounded-circle mr-3">
                <FaCartShopping />
              </Button>&nbsp;&nbsp;&nbsp;&nbsp;
              
              <Button className="rounded-circle mr-3">
                <MdEmail />
              </Button>&nbsp;&nbsp;&nbsp;&nbsp;
              
              <div className='dropdownWrapper position-relative'>
                <Button className="rounded-circle mr-3"
              onClick={handleOpennotificationsDrop}>
                <FaBell />
              </Button>&nbsp;&nbsp;&nbsp;&nbsp;
              <Menu
                className='notification'
                id="notification"
                open={openNotification}
                onClose={handleClosenotificationsDrop}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClosenotificationsDrop}>
                  <ListItemIcon>
                    <PersonAdd />
                  </ListItemIcon>
                  My Notification
                </MenuItem>
                <MenuItem onClick={handleClosenotificationsDrop}>
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  Reset Password
                </MenuItem>
                <MenuItem onClick={handleClosenotificationsDrop}>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
              </div>


              <div className="myAccWrapper">
                <Button className="myAcc d-flex align-items-center"
                onClick={handleOpenMyAccDrop}>
                <div className="userImg">
                    <span className="rounded-circle">
                        <img src={chandi} alt="chandi"/>
                    </span>
                </div>

                <div className="userInfo">
                    <h4>Chandika Jayaweera</h4>
                    <p className="mb-0">@Chandi2003</p>
                </div>
              </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyAcc}
                  onClose={handleCloseMyAccDrop}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <PersonAdd />
                    </ListItemIcon>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <Settings />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <Logout />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
              
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
