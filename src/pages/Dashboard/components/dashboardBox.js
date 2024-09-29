import Button from "@mui/material/Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { IoIosTimer } from "react-icons/io";


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
    
      <Button 
        className="dashboardBox" 
        style={{
          backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
        }}> 

        {
            props.grow === true ?

            <span className="chart"><TrendingUpIcon/></span>
            :
            <span className="chart"><TrendingDownIcon/></span>
        }
        <div className="d-flex w-100  justify-content-between">
                <div className="col1">
                    <h4 className="text-white mb-0">Total Users</h4>
                    <span className="text-white">277</span>
                </div>
                <div className="ml-auto">
                    {
                        props.icon ?
                        <span span className="icon">
                            {props.icon ? props.icon : ''}
                        </span>

                        :

                        ''
                    }
                </div>
        </div>

        <div className="d-flex w-100 align-items-center justify-content-between bottomEle ">
            <h6 className="text-white mb-0 mt-0">Last Month</h6>
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


     </Button>
    
  );
}

export default DashboardBox;
