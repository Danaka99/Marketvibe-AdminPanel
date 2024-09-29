import DashboardBox from "../../pages/Dashboard/components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import { IoIosTimer } from "react-icons/io";
import Button from "@mui/material/Button";
import { HiDotsHorizontal } from "react-icons/hi";
import {Chart} from "react-google-charts";

import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const data = [
  ["Year", "Total Sells"],
  ["2014", 6],
  ["2015", 5],
  ["2016", 4],
  ["2017",3 ],

];

export const options = {
  'backgroundColor':'transparent',
  'chartArea':{'width':'100%', 'height':'98%'},
  // title: "My Daily Activities",
};

const Dashboard = () => {
  const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [showBy, setShowBy] = useState('');
    const [CategoryBy, setCategoryBy] = useState('');


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
                    <HiDotsHorizontal />
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

                <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
                <p>$3,789,90 in last month</p>

                <Chart
                  chartType="PieChart"
                  data={data}
                  width={"100%"}
                  height={"170px"}
                  options={options}
                />
              </div>
            </div>
          </div> 

          <div className="card shadow border-0 p-3 mt-4">
            <h3 className="hd">Best Selling Products</h3>

            <div className="row cardFilters mt-3">
              <div className="col-md-3">
                <h4>Show By</h4>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    className="w-100"
                    value={showBy}
                    onChange={(e)=>setShowBy(e.target.value)}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
              <div className="col-md-3">
                <h4>Category By</h4>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    className="w-100"
                    value={CategoryBy}
                    onChange={(e)=>setCategoryBy(e.target.value)}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
              <div className="col-md-3">
                <h4>Show By</h4>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    className="w-100"
                    value={showBy}
                    onChange={(e)=>setShowBy(e.target.value)}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
              <div className="col-md-3">
                <h4>Show By</h4>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    className="w-100"
                    value={showBy}
                    onChange={(e)=>setShowBy(e.target.value)}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
            </div>

          </div>
          
      </div>

      
    </>
  );
}

export default Dashboard;
