import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from "react-icons/fa";
import 'react-lazy-load-image-component/src/effects/blur.css';
import React, { useContext, useEffect, useState } from 'react';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { postData } from '../../../utils/api';
import { MyContext } from '../../../App';


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

const AddSubCat = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [formFields,setFormFields]=useState({
        category:'',
        subCat:''
    });
    const [categoryVal, setcategoryVal] = useState('');
    
    const fd= new FormData();
    const history = useNavigate();

    const context=useContext(MyContext);

    const handleChangeCategory = (event) => {
        setcategoryVal(event.target.value);
        setFormFields(()=>({
        ...formFields,
        category:event.target.value
    }))
    };

    const inputChange=(e)=>{
    setFormFields(()=>({
        ...formFields,
        [e.target.name]:e.target.value
    }))
  }

    const addSubCat = (e)=>{
        e.preventDefault();
        const fd= new FormData();
        fd.append("category",formFields.category);
        fd.append("subCat",formFields.subCat);

        if(formFields.category === ""){
            context.setAlertBox({
                    open:true,
                    error:true,
                    msg:"Please select a category"
            });
            return false;
        }
        if(formFields.subCat === ""){
            context.setAlertBox({
                    open:true,
                    error:true,
                    msg:"Please enter subcategory"
            });
            return false;
        }

        postData('/api/subCat/create',formFields).then(res=>{
            setIsLoading(false);
            history('/subCategory');
        });
    }

 return(
    <>
      <div className='right-content w-100'>
        <div className='card shadow border-0 w-100 flex-row p-4 justify-content-between align-items-center res-col'>
            <h5 className='mb-0'>Add Sub Category</h5>
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
            label="Add Sub Category"
            
            />

            </Breadcrumbs>
        </div>

        <form className='form' onSubmit={addSubCat}>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='card p-4'>
                        <div className='form-group'>
                            <h6>Category</h6>
                                <Select
                                value={categoryVal}
                                onChange={handleChangeCategory}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className='w-100'
                                name='category'
                                >
                                <MenuItem value="">
                                    <em value={null}>None</em>
                                </MenuItem>
                                {
                                    context.catData?.categoryList?.length !== 0 && context.catData?.categoryList?.map((cat,index)=>{
                                        return(
                                             <MenuItem value={cat.id} key={index}>{cat.name}</MenuItem>
                                        )
                                    })
                                }
                                </Select>
                                
                        </div>
                        
                        <div className='form-group'>
                            <h6> Sub Category</h6>
                            <input type='text' name='subCat' value={formFields.subCat} onChange={inputChange}/>
                        </div>
                
                         <div className='form-group'>
                            <div className='imagesUploadSec'>
                                <Button type='submit' onClick={addSubCat} className='btn-blue btn-lg btn-big w-100'><FaCloudUploadAlt/>&nbsp;&nbsp;
                                {isLoading === true ? <CircularProgress color="inherit" className='loader'/> : 'PUBLISH AND VIEW'}</Button>
                            </div>
                </div>

                    </div>
                    {/* <div className='card p-4 mt-0'>
                    </div> */}
                </div>
                
            </div>
        </form>
      </div>
    </>
  );
}

export default AddSubCat;
