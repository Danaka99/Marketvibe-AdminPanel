import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoCloseSharp } from 'react-icons/io5'; 
import 'react-lazy-load-image-component/src/effects/blur.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import React, { useRef } from 'react';
import { FaRegImages } from 'react-icons/fa';


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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps:{
        style:{
            maxHeight:ITEM_HEIGHT*4.5 + ITEM_PADDING_TOP,
            width:250,
        },
    },
};

const ProductUpload = () => {

    const fileInputRef = useRef(null);
    
    const handleClick = () => {
    fileInputRef.current.click();
    };

    const [categoryVal, setcategoryVal] = useState('');
    const [subCatVal, setSubCatVal] = useState('');
    const [ratingValue, setRatingValue] = useState(1); 
    const [productRams, setProductRAMS] = useState([]);

    // const [formFields,setFormFields]= useState({
    //     name:'',
    //     images:[],
    //     color:''
    // })


    const handleChangeCategory = (event) => {
        setcategoryVal(event.target.value);
    };

    const handleChangeSubCategory = (event) => {
        setSubCatVal(event.target.value);
    };

    // const onChangeFile = (e)=>{
    //     const arr= [];
    //     // for (let i=0;i<e.target.files.length;i++){
    //     // arr.push(e.target.files[i].name);
    //     // }
    //     arr.push(e.target.value);
    //     // 
        
    //     setFormFields(()=>({
    //         ...formFields,
    //         [e.target.name]:arr,
    //     }));
    // }

    // const onChangeInput = (e)=>{
    //     setFormFields(()=>({
    //         ...formFields,
    //         [e.target.name]: e.target.value,
    //     }))
    // }

    // const submitForm = async (e)=>{
    //     e.preventDefault();

    //     const formData = new formData();
    //     formData.append(`name`,formFields.name)
    //     formData.append(`color`,formFields.color)
    //     formData.append(`images`,formFields.images)

    //     try{
    //         await axios.post("http://localhost:4000/api/category/create" , formFields).then
    //         ((response)=>{
    //             console.log(response)
    //         })
    //     } catch(err){
        //  console.log(err)
        // }
       // console.log(formFields)
    // }


     const handleChangeProductRams = (event) => {
        // setProductRams(event.target.value);
        // setFormFields(()=>({
        // ...formFields,
        // productRam: event.target.value
        // }))

    const{
        target:{value},
    }= event;
    setProductRAMS(
        // on autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
    );
    //formFields.productRam = value;
    };

  return (
    <>
      <div className='right-content w-100'>
        <div className='card shadow border-0 w-100 flex-row p-4 justify-content-between align-items-center'>
            <h5 className='mb-0'>Product Upload</h5>
            <Breadcrumbs aria-label='breadcrumb' className='ml-auto breadcrumbs_'>
            <StyledBreadcrumb
            component="a"
            href="#"
            label="Dashboard"
            icon={<HomeIcon fontSize='small'/>}
            />

            <StyledBreadcrumb
            label="Products"
            component="a"
            href="/Products"
            />

            <StyledBreadcrumb
            label="Product Upload"
            
            />

            </Breadcrumbs>
        </div>

        <form className='form'>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='card p-4'>
                        <h5 className='mb-4'>Basic Information</h5>
                        <div className='form-group'>
                            <h6>Title</h6>
                            <input type='text' name='name'/>  
                        </div>
                        <div className='form-group'>
                            <h6>Description</h6>
                            <textarea rows={10} cols={20}/>  
                        </div>

                        <div className='row'>
                            <div className='col'>
                             <div className='form-group'>
                              <h6>Category</h6>
                                <Select
                                value={categoryVal}
                                onChange={handleChangeCategory}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className='w-100'
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem className="text-capitalize" value="Men">Men</MenuItem>
                                <MenuItem className="text-capitalize" value="Women">Women</MenuItem>
                                <MenuItem className="text-capitalize" value="Kids">Kids</MenuItem>
                                </Select>
                             </div>
                            </div>

                            <div className='col'>
                             <div className='form-group'>
                              <h6>Brand</h6>
                                <Select
                                value={categoryVal}
                                onChange={handleChangeCategory}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className='w-100'
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

                        <div className='row'>
                        <div className='col'>
                            <div className='form-group'>
                            <h6>Regular Price</h6>
                                <input type='text'/>  
                            </div>
                        </div>

                        <div className='col'>
                            <div className='form-group'>
                                <h6>Discount Price</h6>
                                <input type='text'/>  
                            </div>
                        </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <div className='form-group'>
                                <h6>Rating</h6>
                                    <Rating
                                        name="simple-controlled"
                                        value={ratingValue}
                                        onChange={(event, newValue) => {
                                        setRatingValue(newValue);
                                        }}
                                    /> 
                                </div>
                            </div>

                            <div className='col'>
                                <div className='form-group'>
                                    <h6>Product Stock </h6>
                                    <input type='text'/>  
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <div className='form-group'>
                                <h6>Shopping Fee </h6>
                                <input type='text'/>  
                                </div>
                            </div>

                            <div className='col'>
                                <div className='form-group'>
                                    <h6>Text Rate </h6>
                                    <input type='text'/>  
                                </div>
                            </div>
                        </div>
                        
                        <div className='row'>
                            <div className='col'>
                             <div className='form-group'>
                              <h6> Sub Category</h6>
                                <Select
                                value={subCatVal}
                                onChange={handleChangeSubCategory}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className='w-100'
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem className="text-capitalize" value="Men">Men</MenuItem>
                                <MenuItem className="text-capitalize" value="Women">Women</MenuItem>
                                <MenuItem className="text-capitalize" value="Kids">Kids</MenuItem>
                                </Select>
                             </div>
                            </div>

                            <div className='col'>
                             <div className='form-group'>
                              <h6>Product RAMS</h6>
                                <Select
                                multiple
                                value={productRams}
                                onChange={handleChangeProductRams}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className='w-100'
                                MenuProps={MenuProps}
                                >

                                <MenuItem value="4GB">4GB</MenuItem>
                                <MenuItem value="8GB">8GB</MenuItem>
                                <MenuItem value="10GB">10GB</MenuItem>
                                <MenuItem value="12GB">12GB</MenuItem>
                                </Select>
                             </div>
                            </div>
                        </div>


                        <div className='form-group'>
                            <h6>Tags</h6>
                            <textarea rows={10} cols={20}/>  
                        </div>
                    </div>
                    <div className='card p-4 mt-0'>
                            <div className='imagesUploadSec'>
                                <h5 class="mb-4">Media and Published</h5><br/>

                                <div className='imgUploadBox d-flex align-items-center'>
                                    <div className='uploadBox'>
                                    <span className='remove'>
                                            <IoCloseSharp/>
                                    </span>
                                        <div className='box'>
                                            <LazyLoadImage
                                            alt={"image"}
                                            effect="blur"
                                            className="w-100"
                                            src={`https://mironcoder-hotash.netlify.app/images/product/single/01.webp`}/>
                                        </div>
                                    </div>
                                    <div className='uploadBox'>
                                    <div className='info w-100' onClick={handleClick}>
                                    <input
                                        type='file'
                                        hidden
                                        multiple
                                        name="images"
                                        ref={fileInputRef}
                                        />
                                        <FaRegImages className='IconUpload align-items-center justify-content-center w-100' />
                                        <h5 className='ImgUpload'>Image Upload</h5>
                        </div>
                    </div>
                </div>
                <br/>
                
                <Button type='submit' className='btn-blue btn-lg btn-big w-100'><FaCloudUploadAlt/>&nbsp;&nbsp;
                PUBLISH AND VIEW</Button>
                
                      </div>
                    </div>
                </div>
            </div>
        </form>
      </div>
    </>
  );
}

export default ProductUpload;
