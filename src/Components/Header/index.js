import React, { useState, useContext} from 'react';
import { Link } from "react-router-dom";
import logo from "../../assests/MarketV-white.png";
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from "react-icons/md";
import Searchbox from "./Searchbox";
import { MdOutlineMenu } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
 import { MdDarkMode } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import chandi from "../../assests/chandi.jpg";
import rash from "../../assests/IMG_9849.jpg";
import { TbWorld } from "react-icons/tb";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import { MyContext } from "../../App";



const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenNotificationDrop, setIsOpenNotificationDrop] = useState(false);

  const context= useContext(MyContext)

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
            <div className="col-sm-3 d-flex align-items-center part-2">
              <Button className="rounded-circle mr-3" onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
                {
                  context.isToggleSidebar===false?   <MdOutlineMenuOpen /> :  <MdOutlineMenu/>
                }
              </Button>&nbsp;&nbsp;
              <Searchbox/>
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end part-3 ">
              <Button className="rounded-circle mr-3">
                <TbWorld />
              </Button>&nbsp;&nbsp;&nbsp;&nbsp;
              <Button className="rounded-circle mr-3" onClick={() => context.setThemeMode(!context.themeMode)}>
                {
                  context.themeMode ? <MdDarkMode /> : <MdLightMode />
                }
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
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
                className='notification dropdown-list'
                id="notification"
                open={openNotification}
                onClose={handleClosenotificationsDrop}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                slotProps={{
                            paper: {
                            elevation: 0,
                            sx: {
                                maxHeight: 405, // Set the max height to allow scrolling
                                overflowY: 'hidden', // Enable vertical scrolling
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                                },
                                '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                                },
                            },
                            },
                        }}
        
              >
                <div className='head pl-3 pb-0'>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;Order (12)</h4>
                </div>
                <Divider className='mb-3' />
                <div className='scroll'>
                <MenuItem onClick={handleClosenotificationsDrop}>
                  <div className='d-flex'>
                    <div>
                        <div className='userImg'>
                        <span className='rounded-circle'>
                            <img src={chandi} alt="chandi"/>
                        </span>
                  </div>
                    </div>
                  <div className='dropdownInfo'>
                    <h4>
                        <span>
                            <b>Chandika </b>
                            added to his favourite list
                            <b> Leather belt steven madden</b> 
                        </span>
                    </h4>
                    <p className='text-sky mb-0'>few seconds ago</p>
                  </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleClosenotificationsDrop}>
                  <div className='d-flex'>
                    <div>
                        <div className='userImg'>
                        <span className='rounded-circle'>
                            <img src={chandi} alt="chandi"/>
                        </span>
                  </div>
                    </div>
                  <div className='dropdownInfo'>
                    <h4>
                        <span>
                            <b>Chandika </b>
                            added to his favourite list
                            <b> Leather belt steven madden</b> 
                        </span>
                    </h4>
                    <p className='text-sky mb-0'>few seconds ago</p>
                  </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleClosenotificationsDrop}>
                  <div className='d-flex'>
                    <div>
                        <div className='userImg'>
                        <span className='rounded-circle'>
                            <img src={rash} alt="chandi"/>
                        </span>
                  </div>
                    </div>
                  <div className='dropdownInfo'>
                    <h4>
                        <span>
                            <b>Rash</b>
                            added to his favourite list
                            <b> Cotton blouse</b> 
                        </span>
                    </h4>
                    <p className='text-sky mb-0'>few seconds ago</p>
                  </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleClosenotificationsDrop}>
                  <div className='d-flex'>
                    <div>
                        <div className='userImg'>
                        <span className='rounded-circle'>
                            <img src={chandi} alt="chandi"/>
                        </span>
                  </div>
                    </div>
                  <div className='dropdownInfo'>
                    <h4>
                        <span>
                            <b>Chandika </b>
                            added to his favourite list
                            <b> Leather belt steven madden</b> 
                        </span>
                    </h4>
                    <p className='text-sky mb-0'>few seconds ago</p>
                  </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleClosenotificationsDrop}>
                  <div className='d-flex'>
                    <div>
                        <div className='userImg'>
                        <span className='rounded-circle'>
                            <img src={rash} alt="chandi"/>
                        </span>
                  </div>
                    </div>
                  <div className='dropdownInfo'>
                    <h4>
                        <span>
                            <b>Rash</b>
                            added to his favourite list
                            <b> Cotton blouse</b> 
                        </span>
                    </h4>
                    <p className='text-sky mb-0'>few seconds ago</p>
                  </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleClosenotificationsDrop}>
                  <div className='d-flex'>
                    <div>
                        <div className='userImg'>
                        <span className='rounded-circle'>
                            <img src={chandi} alt="chandi"/>
                        </span>
                        {/* <div>
                          <userAvatarImg img={''}/>
                        </div> */}
                  </div>
                    </div>
                  <div className='dropdownInfo'>
                    <h4>
                        <span>
                            <b>Chandika </b>
                            added to his favourite list
                            <b> Leather belt steven madden</b> 
                        </span>
                    </h4>
                    <p className='text-sky mb-0'>few seconds ago</p>
                  </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleClosenotificationsDrop}>
                  <div className='d-flex'>
                    <div>
                        <div className='userImg'>
                        <span className='rounded-circle'>
                            <img src={rash} alt="chandi"/>
                        </span>
                  </div>
                    </div>
                  <div className='dropdownInfo'>
                    <h4>
                        <span>
                            <b>Rash</b>
                            added to his favourite list
                            <b> Cotton blouse</b> 
                        </span>
                    </h4>
                    <p className='text-sky mb-0'>few seconds ago</p>
                  </div>
                  </div>
                </MenuItem>
                
                </div>
                <div className='pl-3 pr-3 w-100 pt-2 pb-1'>
                    <Button className='btn-blue w-100'>View all notifications</Button>
                </div>
              </Menu>
              </div>
              
              {
                context.isLogin!== true? 
                <Link to={'/login'}><Button className='btn-blue btn-lg btn-round'>Sign In</Button></Link>
                :
                
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

              }

              
              
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
