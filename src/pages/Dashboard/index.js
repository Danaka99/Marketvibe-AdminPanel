import DashboardBox from "../../pages/Dashboard/components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useContext, useEffect, useState } from 'react';
import { IoIosTimer } from "react-icons/io";
import Button from "@mui/material/Button";
import { HiDotsHorizontal } from "react-icons/hi";
import {Chart} from "react-google-charts";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';


import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MyContext } from "../../App";


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
  const ITEM_HEIGHT = 40;

    const context= useContext(MyContext);

    useEffect(()=>{
      context.setIsHideSidebarAndHeader(false);

      window.scrollTo(0,0);
    });

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [showBy, setShowBy] = useState('');
    const [CategoryBy, setCategoryBy] = useState('');
    const [brandBy, setBrandBy] = useState('');
    
   

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
            <h6 className="text-white mb-0 mt-0 btn-Dash-Title">Total Sales</h6>
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
              <div className="col-md-3 colSize">
                <h4>Show By</h4>
                <FormControl size="small" className="w-100" >
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    className="w-100"
                    displayEmpty
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
                </FormControl>
              </div>
              <div className="col-md-3 colSize">
                <h4>Category By</h4>
                 <FormControl size="small" className="w-100">
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    className="w-100"
                    displayEmpty
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
                </FormControl>
              </div>
              <div className="col-md-3 colSize">
                <h4>Brand By</h4>
                <FormControl size="small" className="w-100">
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    className="w-100"
                    displayEmpty
                    value={brandBy}
                    onChange={(e)=>setBrandBy(e.target.value)}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl>
              </div>
              <div className="col-md-3 colSize">
                <h4>Show By</h4>
                <FormControl size="small" className="w-100">
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    className="w-100"
                    displayEmpty
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
                </FormControl>
              </div>
            </div>
            
            <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead className="thead-dark">
                  <tr>
                    <th>U_ID</th>
                    <th style={{width:'300px'}}>PRODUCT</th>
                    <th>CATEGORY</th>
                    <th>BRAND</th>
                    <th>PRICE</th>
                    <th>STOCK</th>
                    <th>RATING</th>
                    <th>ORDER</th>
                    <th>SALES</th>
                    <th>ACTIONS</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" className="w-100"/>
                          </div>
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for Female...</h6>
                          <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                        </div>
                      </div>
                    </td>
                    <td>women</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'60px'}}>
                        <del className="old">$21.00</del>
                        <span className="new text-danger">$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>4.9(16)</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                        <Button className="secondary" color="secondary"><FaEye/></Button>
                        <Button className="success" color="success"><FaPencilAlt/></Button>
                        <Button className="error" color="error"><MdDelete/></Button>
                      </div>
                    </td>

                  </tr>
                   <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" className="w-100"/>
                          </div>
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for Female...</h6>
                          <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                        </div>
                      </div>
                    </td>
                    <td>women</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'150p'}}>
                        <del className="old">$21.00</del>
                        <span className="new text-danger">$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>4.9(16)</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                        <Button className="secondary" color="secondary"><FaEye/></Button>
                        <Button className="success" color="success"><FaPencilAlt/></Button>
                        <Button className="error" color="error"><MdDelete/></Button>
                      </div>
                    </td>

                  </tr>
                   <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" className="w-100"/>
                          </div>
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for Female...</h6>
                          <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                        </div>
                      </div>
                    </td>
                    <td>women</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'150p'}}>
                        <del className="old">$21.00</del>
                        <span className="new text-danger">$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>4.9(16)</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                        <Button className="secondary" color="secondary"><FaEye/></Button>
                        <Button className="success" color="success"><FaPencilAlt/></Button>
                        <Button className="error" color="error"><MdDelete/></Button>
                      </div>
                    </td>

                  </tr>
                   <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" className="w-100"/>
                          </div>
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for Female...</h6>
                          <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                        </div>
                      </div>
                    </td>
                    <td>women</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'150p'}}>
                        <del className="old">$21.00</del>
                        <span className="new text-danger">$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>4.9(16)</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                        <Button className="secondary" color="secondary"><FaEye/></Button>
                        <Button className="success" color="success"><FaPencilAlt/></Button>
                        <Button className="error" color="error"><MdDelete/></Button>
                      </div>
                    </td>

                  </tr>
                   <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" className="w-100"/>
                          </div>
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for Female...</h6>
                          <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                        </div>
                      </div>
                    </td>
                    <td>women</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'150p'}}>
                        <del className="old">$21.00</del>
                        <span className="new text-danger">$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>4.9(16)</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                        <Button className="secondary" color="secondary"><FaEye/></Button>
                        <Button className="success" color="success"><FaPencilAlt/></Button>
                        <Button className="error" color="error"><MdDelete/></Button>
                      </div>
                    </td>

                  </tr>
                   <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" className="w-100"/>
                          </div>
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for Female...</h6>
                          <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                        </div>
                      </div>
                    </td>
                    <td>women</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'150p'}}>
                        <del className="old">$21.00</del>
                        <span className="new text-danger">$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>4.9(16)</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                        <Button className="secondary" color="secondary"><FaEye/></Button>
                        <Button className="success" color="success"><FaPencilAlt/></Button>
                        <Button className="error" color="error"><MdDelete/></Button>
                      </div>
                    </td>

                  </tr>
                   <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" className="w-100"/>
                          </div>
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for Female...</h6>
                          <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                        </div>
                      </div>
                    </td>
                    <td>women</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'150p'}}>
                        <del className="old">$21.00</del>
                        <span className="new text-danger">$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>4.9(16)</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                        <Button className="secondary" color="secondary"><FaEye/></Button>
                        <Button className="success" color="success"><FaPencilAlt/></Button>
                        <Button className="error" color="error"><MdDelete/></Button>
                      </div>
                    </td>

                  </tr>
                   <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" className="w-100"/>
                          </div>
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for Female...</h6>
                          <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                        </div>
                      </div>
                    </td>
                    <td>women</td>
                    <td>richman</td>
                    <td>
                      <div style={{width:'150p'}}>
                        <del className="old">$21.00</del>
                        <span className="new text-danger">$21.00</span>
                      </div>
                    </td>
                    <td>30</td>
                    <td>4.9(16)</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                        <Button className="secondary" color="secondary"><FaEye/></Button>
                        <Button className="success" color="success"><FaPencilAlt/></Button>
                        <Button className="error" color="error"><MdDelete/></Button>
                      </div>
                    </td>

                  </tr>
              </tbody>
            </table>
             <div className="d-flex tableFooter">
              <p>showing <b>12</b> of <b>60</b> results</p>
              <Pagination count={100} color="primary" className="pagination"
              showFirstButton showLastButton/>
             </div>
          </div>

          </div>

          
          
      </div>

      
    </>
  );
}

export default Dashboard;
