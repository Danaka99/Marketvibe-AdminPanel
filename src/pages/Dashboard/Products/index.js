import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

import Button from "@mui/material/Button";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';

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
                        <Link to="/product/details">
                         <Button className="secondary" color="secondary">
                            <FaEye/>
                         </Button>
                        </Link>
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
    </>
  );
}

export default Products;
