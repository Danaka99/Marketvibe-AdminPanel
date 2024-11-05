import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Button from "@mui/material/Button";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import { deleteData, editData, fetchDataFromApi } from '../../../utils/api';
import { Checkbox } from '@mui/material';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

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

const Category = () => {

  const [catData, setCatData] = useState([]); 
  const [open, setOpen] = React.useState(false);

  
  const [editId, setEditId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formFields,setFormFields]=useState({
        name:'',
        images:[],
        color:''
    });

  
  useEffect(()=>{
    window.scrollTo(0,0);

    fetchDataFromApi('/api/category').then((res)=>{
      setCatData(res);
      console.log(res);
    })
  },[]);


  const handleClose = () => {
    setOpen(false);
  };

    const changeInput = (e) =>{
    setFormFields(()=>(
        {
            ...formFields,
            [e.target.name]:e.target.value
        }
    ))
    }

    const addImgUrl = (e)=>{
        const arr =[];
        arr.push(e.target.value); 

        setFormFields(()=>(
        {
            ...formFields,
            [e.target.name]:arr
        }
    ))
    }

  const editCategory=(id)=>{
    setFormFields({
        name:'',
        images:'',
        color:''
      });
    setOpen(true);
    setEditId(id);

     fetchDataFromApi(`/api/category/${id}`).then((res)=>{
      setFormFields({
        name:res.name,
        images:res.images,
        color:res.color
      });
      console.log(res);
    })

  }

  const categoryEditFun=(e)=>{
    e.preventDefault();
    setIsLoading(true);

    editData(`/api/category/${editId}` , formFields).then((res)=>{
      
      fetchDataFromApi('/api/category').then((res)=>{
      setCatData(res);
      setOpen(false);
      setIsLoading(false);
    })
    })
  }

  const deleteCat=(id)=>{
    deleteData(`/api/category/${id}`).then(res=>{
      fetchDataFromApi('/api/category').then((res)=>{
      setCatData(res);
    })
  })
 }


  return (
    <>
      <div className='right-content w-100'>
        <div className='card shadow border-0 w-100 flex-row p-4 justify-content-between align-items-center'>
            <h5 className='mb-0'>Category List</h5>
            <Breadcrumbs aria-label='breadcrumb' className='ml-auto breadcrumbs_'>
            <StyledBreadcrumb
            component="a"
            href="/Dashboard"
            label="Dashboard"
            icon={<HomeIcon fontSize='small'/>}
            />

            <StyledBreadcrumb
            label="Category"
            component="a"
            href="#"
            />

            </Breadcrumbs>
        </div>
        <div className="card shadow border-0 p-3 mt-4">
            

            <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead className="thead-dark">
                  <tr>
                    <th>U_ID</th>
                    <th style={{width:'100px'}}>CATEGORY</th>
                    <th>IMAGE</th>
                    <th>COLOR</th> 
                    <th>ACTIONS</th>
                  </tr>
              </thead>
              <tbody>
                {
                  catData.length!==0 && catData?.map((item,index)=>{
                    return(
                         <tr>
                          <td><Checkbox/>#{index+1}</td>
                          <td>
                            <div className="d-flex align-items-center productBox">
                              <div className="imgWrapper">
                                <div className="img">
                                  <img src={item.images[0]} alt="" className="w-100"/>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{item.name}</td>
                          <td>
                            {/* <span className='dot'style={{background:item.color}}></span> */}
                            {item.color}
                          </td>
                          
                          <td>
                            <div className="actions d-flex align-items-center">
                              <Button className="success" color="success" onClick={()=>editCategory(item.id)}><FaPencilAlt/></Button>
                              <Button className="error" color="error" onClick={()=>deleteCat(item.id)}><MdDelete/></Button>
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
      <Dialog
        className='editModal'
        open={open}
        onClose={handleClose}
      >
        <form>
        <DialogTitle>Edit Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Category Name"
            type="text"
            fullWidth
            value={formFields.name}
            onChange={changeInput}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="images"
            name="images"
            label="Category Image"
            type="text"
            fullWidth
            value={formFields.images}
            onChange={addImgUrl}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="color"
            name="color"
            label="Category Color"
            type="text"
            fullWidth
            value={formFields.color}
            onChange={changeInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='outlined'>Cancel</Button>
          <Button type="button" onClick={categoryEditFun} variant='contained'>
           {isLoading === true ? <CircularProgress color="inherit" className='loader'/> : 'Submit'}
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default Category;
