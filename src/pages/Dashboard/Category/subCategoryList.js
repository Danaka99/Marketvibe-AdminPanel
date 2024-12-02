import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import Button from "@mui/material/Button";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import React, { useState, useEffect, useContext } from "react";
import { deleteData, editData, fetchDataFromApi } from '../../../utils/api';
import { Checkbox } from '@mui/material';
import { Link } from "react-router-dom";
import { MyContext } from '../../../App';


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

const SubCategoryList = () => {

  const [subCatData, setSubCatData] = useState([]); 

  const context=useContext(MyContext);

  
  useEffect(() => {
    window.scrollTo(0, 0);
    context.setProgress(20);
    fetchDataFromApi('/api/subCat').then((res) => {
      setSubCatData(res);
      console.log(res);
      context.setProgress(100);
    });
  }, []);


  // const editCategory=(id)=>{
  //   setFormFields({
  //       name:'',
  //       images:'',
  //       color:''
  //     });
  //   setOpen(true);
  //   setEditId(id);

  //    fetchDataFromApi(`/api/subCat/${id}`).then((res)=>{
  //     setFormFields({
  //       name:res.name,
  //       images:res.images,
  //       color:res.color
  //     });
  //     console.log(res);
  //   })

  // }

  const deleteCat=(id)=>{
    deleteData(`/api/subCat/${id}`).then(res=>{
      fetchDataFromApi('/api/subCat').then((res)=>{
      setSubCatData(res);
    })
  })
 }

 const handleChange = (event,value)=>{
  context.setProgress(40);
  fetchDataFromApi(`/api/subCat?page=${value}`).then((res)=>{
    setSubCatData (res);
    context.setProgress(100);
  })
 };


  return (
    <>
      <div className='right-content w-100'>
        <div className='card shadow border-0 w-100 flex-row p-4 justify-content-between align-items-center'>
            <h5 className='mb-0'>Sub Category List</h5>

            <div className='ml-auto d-flex align-items-center'>
            <Breadcrumbs aria-label='breadcrumb' className='ml-auto breadcrumbs_'>
            <StyledBreadcrumb
            component="a"
            href="/Dashboard"
            label="Dashboard"
            icon={<HomeIcon fontSize='small'/>}
            />

            <StyledBreadcrumb
            label=" Sub Category"
            component="a"
            href="#"
            />

            </Breadcrumbs>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/subCategory/add"><Button className='btn-blue ml-3 pl-3 pr-5'> Add Sub Category</Button></Link>
            </div>
        </div>
        <div className="card shadow border-0 p-3 mt-4">
            

            <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead className="thead-dark">
                  <tr>
                    <th>U_ID</th>
                    <th>CATEGORY</th>
                    <th>SUB CATEGORY</th>
                    {/* <th style={{width:'100px'}}>SUB CATEGORY</th> */}
                    <th style={{width:'300px'}}>CATEGORY IMAGE</th>
                    <th>ACTIONS</th>
                  </tr>
              </thead>
              <tbody>
                {
                  subCatData?.subCategoryList?.length !==0 && subCatData?.subCategoryList?.map((item,index)=>{
                    return(
                         <tr>
                          <td><Checkbox className='AddCatCheckBox'/>#{index+1}</td>
                          <td>{item.category.name}</td>
                          <td>
                            {item.subCat}
                          </td>
                          <td>
                            <div className="d-flex align-items-center productBox">
                              <div className="imgWrapper">
                                <div className="img">
                                  <img src={`${context.baseUrl}/uploads/${item.category.images[0]}`} alt="img" className="w-100"/>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="actions d-flex align-items-center">
                              <Link to={`/subCategory/edit/${item.id}`}>
                              <Button className="success" color="success"><FaPencilAlt/></Button>
                              </Link>
                              <Button className="error" color="error" onClick={()=>deleteCat(item.id)}><MdDelete/></Button>
                            </div>
                          </td>

                        </tr>
                    )
                  })
                }
                  
              </tbody>
            </table>
             {
              subCatData?.totalPages > 1 &&
              <div className="d-flex tableFooter">
               <Pagination count={subCatData?.totalPages} color="primary" className="pagination"
              showFirstButton showLastButton onChange={handleChange}/>
             </div>
             }
          </div>

          </div>
      </div>
      
    </>
  );
}

export default SubCategoryList;
