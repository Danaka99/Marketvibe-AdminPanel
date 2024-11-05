import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

import { Button } from '@mui/material';
import { FaCloudUploadAlt } from "react-icons/fa";
import 'react-lazy-load-image-component/src/effects/blur.css';
import React, { useState } from 'react';
import { postData } from '../../utils/api';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

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

const ProductUpload = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [formFields,setFormFields]=useState({
        name:'',
        images:[],
        color:''
    });

    const history = useNavigate();

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

    const addCategory = (e)=>{
        e.preventDefault();
        setIsLoading(true);


        postData('/api/category/create',formFields).then(res=>{
            setIsLoading(false);
            history('/category')
        })
      
    }
    

 return(
    <>
      <div className='right-content w-100'>
        <div className='card shadow border-0 w-100 flex-row p-4 justify-content-between align-items-center res-col'>
            <h5 className='mb-0'>Add Category</h5>
            <Breadcrumbs aria-label='breadcrumb' className='ml-auto breadcrumbs_'>
            <StyledBreadcrumb
            component="a"
            href="#"
            label="Dashboard"
            icon={<HomeIcon fontSize='small'/>}
            />

            <StyledBreadcrumb
            label="Category"
            component="a"
            href="#"
            />

            <StyledBreadcrumb
            label="Add Category"
            
            />

            </Breadcrumbs>
        </div>

        <form className='form' onSubmit={addCategory}>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='card p-4'>
                        <div className='form-group'>
                            <h6>Category Name</h6>
                            <input type='text' name='name' onChange={changeInput}/>  
                        </div>
                        <div className='form-group'>
                            <h6>Image Url</h6>
                            <input type='text' name='images' onChange={addImgUrl}/>  
                        </div>
                        <div className='form-group'>
                            <h6>Color</h6>
                            <input type='text' name='color' onChange={changeInput}/>  
                        </div>

                    </div>
                    <div className='card p-4 mt-0'>
                <br/>

                    <Button type='submit' className='btn-blue btn-lg btn-big w-100'><FaCloudUploadAlt/>&nbsp;&nbsp;
                    {isLoading === true ? <CircularProgress color="inherit" className='loader'/> : 'PUBLISH AND VIEW'}</Button>
                
                    </div>
                </div>
            </div>
        </form>
      </div>
    </>
  );
}

export default ProductUpload;
