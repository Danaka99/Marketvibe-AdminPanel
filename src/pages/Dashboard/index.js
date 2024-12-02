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
import Rating from '@mui/material/Rating';
import { deleteData,fetchDataFromApi } from "../../utils/api";
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

    const context = useContext(MyContext);

    // useEffect(()=>{
    //   context.setIsHideSidebarAndHeader(false);

    //   window.scrollTo(0,0);
    // });

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

   const [productList,setProductList ] = useState([]);
   

  useEffect(()=>{
    window.scrollTo(0,0);
    context.setProgress(40);
    fetchDataFromApi("/api/products").then((res)=>{
      setProductList(res)
      context.setProgress(100);
    })
  },[]);

  const deleteProduct=(id)=>{
    context.setProgress(40);
    deleteData(`/api/products/${id}`).then((res)=>{
      context.setProgress(100);
      context.setAlertBox({
        open:true,
        error:true,
        msg:'Product Deleted!'
      });
      fetchDataFromApi("/api/products").then((res)=>{
        setProductList(res);
    })
    })
  }

  const handleChange = (event,value)=>{
  context.setProgress(40);
  fetchDataFromApi(`/api/products?page=${value}`).then((res)=>{
    setProductList(res);
    context.setProgress(100);
  })
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
            <div className="col-md-4 pl-0 topPart2">
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

                <h3 className="text-white font-weight-bold"><span className="DashBoardheading">$3,787,681.00</span></h3>
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
                    {/* <th>ORDER</th>
                    <th>SALES</th> */}
                    <th>ACTIONS</th>
                  </tr>
              </thead>
              <tbody>
                {
                  productList?.products?.length!==0 && productList?.products?.map((item,index)=>{
                    return(
                      <tr>
                    <td>#{index+1}</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src={`${context.baseUrl}/uploads/${item.images[0]}`} alt="pic" className="w-100"/>
                          </div>
                        </div>
                        <div className="info">
                          <h6>{item.name}</h6>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </td>
                    <td>{item.category ? item.category.name : "N/A"}</td>
                    <td>{item.brand}</td>
                    <td>
                      <div style={{width:'60px'}}>
                        <del className="old">Rs {item.oldPrice}</del>
                        <span className="new text-danger">Rs {item.price}</span>
                      </div>
                    </td>
                    <td>{item.CountInStock}</td>
                    <td>
                      <Rating name='Read-only' defaultValue={item.rating} precision={0.5} size="small" readOnly/>
                    </td>
                    <td>
                      <div className="actions d-flex align-items-center">
                        <Button className="secondary" color="secondary"><FaEye/></Button>
                        <Button className="success" color="success"><FaPencilAlt/></Button>
                        <Button className="error" color="error" onClick={()=>deleteProduct(item._id)}><MdDelete/></Button>
                      </div>
                    </td>

                  </tr>
                    )
                  })
                }
              </tbody>
            </table>
             <div className="d-flex tableFooter">
              {/* <p>showing <b>12</b> of <b>60</b> results</p> */}
              <Pagination count={productList?.totalPages} color="primary" className="pagination"
              showFirstButton showLastButton onChange={handleChange}/>
             </div>
          </div>

          </div>

          
          
      </div>

      
    </>
  );
}

export default Dashboard;
