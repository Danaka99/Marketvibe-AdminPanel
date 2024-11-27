import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

import Button from "@mui/material/Button";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { useContext, useEffect, useState } from 'react';
import { fetchDataFromApi } from '../../../../utils/api';
import { MyContext } from '../../../../App';
import Rating from '@mui/material/Rating';



//breadcrumb code
const StyledBreadcrumb = styled(Chip)(({theme})=>{
    const backgroundColor= 
    theme.palette.mode=== "light"
    ? theme.palette.grey[100]
    : theme.palette.grey[800];

    return{
        backgroundColor,
        height: theme.spacing(3),
        color : theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus' :{
            backgroundColor:emphasize(backgroundColor, 0.06),
        },
        '&: active':{
            boxShadow:theme.shadows[1],
            backgroundColor:emphasize(backgroundColor, 0.12),
        },

    };
});

const Products = () => {

  const [productList,setProductList ] = useState([]);
  const context = useContext(MyContext);

  useEffect(()=>{
    window.scrollTo(0,0);

    fetchDataFromApi("/api/products").then((res)=>{
      console.log(res);
      setProductList(res)
    })
  },[]);

  return (
    <>
      <div className='right-content w-100'>
        <div className='card shadow border-0 w-100 flex-row p-4 justify-content-between align-items-center'>
            <h5 className='mb-0'>Product View</h5>
            <Breadcrumbs aria-label='breadcrumb' className='ml-auto breadcrumbs_'>
            <StyledBreadcrumb
            component="a"
            href="/Dashboard"
            label="Dashboard"
            icon={<HomeIcon fontSize='small'/>}
            />

            <StyledBreadcrumb
            label="Products"
            component="a"
            href="#"
            />

            </Breadcrumbs>
        </div>
        <div className="card shadow border-0 p-3 mt-4">
            <h3 className="hd">Best Selling Products</h3>

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
                  productList?.length!==0 && productList?.map((item,index)=>{
                    return(
                      <tr>
                    <td>#{index+1}</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src={`${context.baseUrl}/uploads/${item.images[0]}`} alt="" className="w-100"/>
                          </div>
                        </div>
                        <div className="info">
                          <h6>{item.name}</h6>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </td>
                    <td>{item.category.name}</td>
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
                        <Button className="error" color="error"><MdDelete/></Button>
                      </div>
                    </td>

                  </tr>
                    )
                  })
                }
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

export default Products;
