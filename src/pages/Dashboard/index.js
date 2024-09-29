import DashboardBox from "../../pages/Dashboard/components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { IoIosTimer } from "react-icons/io";

const Dashboard = () => {
  const ITEM_HEIGHT = 48;

  const DashboardBox = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <>
      <div className="right-content w-100">
          <div className="row dashboardBoxWrapperRow">
            <div className="col-md-8">
              <div className="dashboardBoxWrapper d-flex">
                <DashboardBox color={["#1da256","#48d483"]} icon={<FaUserCircle/>} grow={true}/>
                <DashboardBox color={["#c012e2","#eb64fe"]} icon={<FaUserCircle/>}/>
                <DashboardBox color={["#2c78e5","#60aff5"]} icon={<FaUserCircle/>}/>
                <DashboardBox color={["#e1950e","#f3cd29"]} icon={<FaUserCircle/>}/>
              </div>
            </div>
            <div className="col-md-4 pl-0">
              <div className="box graphBox">
                <div className="d-flex w-100 align-items-center justify-content-between bottomEle ">
            <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                <Button className="ml-auto toggleIcon" onClick={handleClick}>
                    <BsThreeDotsVertical />
                </Button>
            <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
        }}
      >
          <MenuItem  onClick={handleClose}>
            <IoIosTimer/>&nbsp;Last Day
          </MenuItem>
          <MenuItem  onClick={handleClose}>
            <IoIosTimer/>&nbsp;Last Week
          </MenuItem>
          <MenuItem  onClick={handleClose}>
            <IoIosTimer/>&nbsp;Last Month
          </MenuItem>
          <MenuItem  onClick={handleClose}>
            <IoIosTimer/>&nbsp;Last Year
          </MenuItem>
          
           
      
      </Menu>
        </div>
              </div>
            </div>
          </div> 
      </div>
    </>
  );
}

export default Dashboard;
