import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useContext, useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from "react-icons/fa";
//import { IoCloseSharp } from 'react-icons/io5'; 
import 'react-lazy-load-image-component/src/effects/blur.css';
import Rating from '@mui/material/Rating';
import React from 'react';
import { fetchDataFromApi, postData } from '../../utils/api';
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
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



const ProductUpload = () => {

    const [categoryVal, setcategoryVal] = useState('');
    const [isFeaturedValue,setIsFeaturedValue] = useState('');
    const [ratingValue, setRatingValue] = useState(1); 
    const [catData, setCatData] = useState([]); 
    const [isLoading, setIsLoading] = useState(false);
    const [files, setFiles]= useState([]);

    const [imagefiles,setImageFiles] = useState();
    const [previews,setPreviews] = useState();

    // const [count, setCount] = useState(0);
    const[productImagesArr, setproductImageArr]= useState([]); 

    const [formFields,setFormFields]= useState({
        name:'',
        description:'',
        brand:'',
        price:null,
        oldPrice:null,
        Category:'',
        CountInStock:null,
        rating:0,
        isFeatured:null,
    })

    const productImages= useRef();
    const context = useContext(MyContext);
    const fd= new FormData();

    useEffect(() => {
    window.scrollTo(0,0);
    context.setProgress(20);

    fetchDataFromApi('/api/category').then((res) => {
        setCatData(res);
        context.setProgress(100);
    })
    
    },[]);

    useEffect(()=>{
        if(!imagefiles) return;
        let tmp = [];
        for (let i=0; i<imagefiles.length; i++){
            tmp.push(URL.createObjectURL(imagefiles[i]));
        }
        const objectUrls = tmp;
        setPreviews(objectUrls);

        //free memory
        for(let i=0; i<objectUrls.length;i++){
            return()=>{
                URL.revokeObjectURL(objectUrls[i])
            }
        }
    },[imagefiles])

    const handleChangeCategory = (event) => {
        setcategoryVal(event.target.value);
        setFormFields(()=>({
        ...formFields,
        category:event.target.value
    }))
    };

    const handleChangeisFeaturedValue = (event) => {
        setIsFeaturedValue(event.target.value);
        setFormFields(()=>({
        ...formFields,
        isFeatured:event.target.value
    }))
    };

    
    // const addProductImages=()=>{

    //    const arr=[];
    //    const imgGrid = document.querySelector('#imgGrid');

    //    const imgData = `<div class="img">
    //                     <img src="${productImages.current.value}" alt="image
    //                     class="w-100 fit-image" 
    //                     style="max-width: 100%; max-height: 100%; object-fit: contain;"/>
    //                     </div>`;
    //     arr[parseInt(count)]=productImages.current.value;
    //     setCount(count+1);
        
    //     setFormFields(()=>({
    //     ...formFields,
    //     images:arr
    // }))


    //     imgGrid.insertAdjacentHTML('beforeend' , imgData);
    //     productImages.current.value="";                
    // }

  const addProductImages = () =>{
     setproductImageArr(prevArray => [...prevArray,productImages.current.value]);
     productImages.current.value="";
  }
  

  const inputChange=(e)=>{
    setFormFields(()=>({
        ...formFields,
        [e.target.name]:e.target.value
    }))
  }

  const onChangefile = async(e, apiEndPoint)=>{
    try{
        const imgArr = [];
        const files = e.target.files;
        setImageFiles(e.target.files)
        //const fd = new formData();
        for(var i =0;i<files.length;i++){
            const file=files[i];
            imgArr.push(file);
            fd.append(`images`,file);
        }
        setFiles(imgArr);

        postData(apiEndPoint,fd).then((res)=>{
            console.log(res)
        });
    }catch(error){
        console.log(error)
    }
  }

  const addProduct=(e)=>{
    e.preventDefault();

    fd.append('name',formFields.name);
    fd.append('description',formFields.description);
    fd.append('brand',formFields.brand);
    fd.append('price',formFields.price);
    fd.append('oldPrice',formFields.oldPrice);
    fd.append('category',formFields.category);
    fd.append('CountInStock',formFields.CountInStock);
    fd.append('rating',formFields.rating);
    fd.append('isFeatured',formFields.isFeatured);


    if(formFields.name===""){
        context.setAlertBox({
            open:true,
            msg:'Please add product name',
            error:true
        });
        return false;
    }

    if(formFields.description===""){
        context.setAlertBox({
            open:true,
            msg:'Please add product description',
            error:true
        });
        return false;
    }

    if(formFields.brand===""){
        context.setAlertBox({
            open:true,
            msg:'Please add product brand',
            error:true
        });
        return false;
    }

    if(formFields.price===null){
        context.setAlertBox({
            open:true,
            msg:'Please add product price',
            error:true
        });
        return false;
    }

    if(formFields.oldPrice===null){
        context.setAlertBox({
            open:true,
            msg:'Please add product oldPrice',
            error:true
        });
        return false;
    }

    if(formFields.category===""){
        context.setAlertBox({
            open:true,
            msg:'Please select a category',
            error:true
        });
        return false;
    }

    if(formFields.CountInStock===null){
        context.setAlertBox({
            open:true,
            msg:'Please add product count in stock',
            error:true
        });
        return false;
    }

    if(formFields.rating===0){
        context.setAlertBox({
            open:true,
            msg:'Please select product rating',
            error:true
        });
        return false;
    }

    if(formFields.isFeatured===null){
        context.setAlertBox({
            open:true,
            msg:'Please select the product is a featured or not',
            error:true
        });
        return false;
    }

    // if(formFields.images.length===0){
    //     context.setAlertBox({
    //         open:true,
    //         msg:'Please add product images',
    //         error:true
    //     });
    //     return false;
    // }
    setIsLoading(true);
    
    postData('/api/products/create',formFields).then((res)=>{
        context.setAlertBox({
            open:true,
            msg:'the product is created!',
            error:false
        });
        setIsLoading(true);

        setFormFields({
        name:'',
        description:'',
        brand:'',
        price:0,
        oldPrice:0,
        Category:'',
        CountInStock:0,
        rating:0,
        isFeatured:false,
        images:[]
        })
        
    })
  }

//   const addProduct=(e)=>{
//     e.preventDefault(formFields);
//     console.log(formFields);
//   }

  return (
    <>
      <div className='right-content w-100'>
        <div className='card shadow border-0 w-100 flex-row p-4 justify-content-between align-items-center res-col'>
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

        <form className='form' onSubmit={addProduct}>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='card p-4'>
                        <h5 className='mb-4'>Basic Information</h5>
                        <div className='form-group'>
                            <h6>Product Name</h6>
                            <input type='text' name='name' value={formFields.name} onChange={inputChange}/>  
                        </div>
                        <div className='form-group'>
                            <h6>Description</h6>
                            <textarea rows={10} cols={20} name='description' value={formFields.description} onChange={inputChange}/>  
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
                                    <em value={null}>None</em>
                                </MenuItem>
                                {
                                    catData?.categoryList?.length !== 0 && catData?.categoryList?.map((cat,index)=>{
                                        return(
                                             <MenuItem value={cat.id} key={index}>{cat.name}</MenuItem>
                                        )
                                    })
                                }
                                </Select>
                             </div>
                            </div>

                            <div className='col'>
                             <div className='form-group'>
                              <h6>Brand</h6>
                                <input type='text' name='brand' value={formFields.brand} onChange={inputChange}/>  
                             </div>
                            </div>
                        </div>

                        <div className='row'>
                        <div className='col'>
                            <div className='form-group'>
                            <h6>New Price</h6>
                                <input type='text' name='price' value={formFields.price} onChange={inputChange}/>  
                            </div>
                        </div>

                        <div className='col'>
                            <div className='form-group'>
                                <h6>Old Price</h6>
                                <input type='text' name='oldPrice' value={formFields.oldPrice} onChange={inputChange}/>  
                            </div>
                        </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <div className='col'>
                                <div className='form-group'>
                                    <h6>Is Featured </h6>
                                <Select
                                value={isFeaturedValue}
                                onChange={handleChangeisFeaturedValue}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className='w-100'
                                >
                                <MenuItem value="">
                                    <em value={null}>None</em>
                                </MenuItem>
                                <MenuItem value={true}>True</MenuItem>
                                <MenuItem value={false}>False</MenuItem>
                                </Select>
                                </div>
                            </div>
                            </div>

                            <div className='col'>
                                <div className='form-group'>
                                    <h6>Product Stock </h6>
                                    <input type='text' name='CountInStock' value={formFields.countInStock} onChange={inputChange}/>  
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
                                         setFormFields(()=>({
                                        ...formFields,
                                        rating:newValue
                                         }))
                                        }}
                                    /> 
                                </div>
                            </div>
                        </div>

                        {/* <div className='row'>
                            <div className='col'>
                                <div className='form-group'>
                                    <h6>Product Images</h6>
                                    <div className='position-relative inputBtn'>
                                        <input type='text'  required ref={productImages} name='images' onChange={inputChange}/>
                                        <Button type='button' className='btn-blue'  
                                        onClick={addProductImages}>Add</Button>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                    {/* <div className='card p-4 mt-0'>
                            <div className='imagesUploadSec'>
                                <h5 class="mb-4">Media and Published</h5><br/>

                                {/* <div className='imgUploadBox d-flex align-items-center'>
                                    <div className='uploadBox'>
                                    <span className='remove'>
                                            <IoCloseSharp/>
                                    </span>
                                            <div className='box'>
                                            <div className='imgGrid d-flex' id='imgGrid'>
                                            
                                            </div>
                                        </div>
                                    </div>  
                                </div> */}

                                {/* <div className='stickyBox'>
                                    <div className='imgGrid d-flex' id='imgGrid'>
                                    </div>
                                </div> */}
                                {/* <div className='stickyBox'>
                                    {
                                        productImagesArr?.length !==0 && 
                                        <h4>Product Images</h4>
                                    }
                                    <div className='imgGrid d-flex' id='imgGrid'>
                                        {
                                        productImagesArr?.map((image, index) => (
                                            <div className='img' key={index}>
                                            <img src={image} alt="images" className='w-100' />
                                            </div>
                                        ))
                                        }
                                    </div>
                            </div>
                                
                <br/>
                
                <Button type='submit' onClick={addProduct} className='btn-blue btn-lg btn-big w-100'><FaCloudUploadAlt/>&nbsp;&nbsp;
                {isLoading === true ? <CircularProgress color="inherit" className='loader'/> : 'PUBLISH AND VIEW'}</Button>
                
                      </div> */}
                    {/* </div>  */}
                </div>

                <div className='col-sm-12 card p-4 mt-0'>
                    <div className='imagesUploadSec'>
                        <h5 class="mb-4">Media and Published</h5>

                        <div className='imgUploadBox d-flex align-items-center'>
                            {
                                previews?.length !==0 && previews?.map((img,index)=>{
                                    return(
                                         <div className='uploadBox' key={index}>
                                            <img src={img} className='w-100' alt=''/>
                                        </div>
                                        
                                    );
                                })
                            }
                            

                            {/* <div className='uploadBox'>
                                <img src='https://mironcoder-hotash.netlify.app/images/product/single/01.webp' className='w-100' alt=''/>
                            </div>
                            <div className='uploadBox'>
                                <img src='https://mironcoder-hotash.netlify.app/images/product/single/01.webp' className='w-100' alt=''/>
                            </div>
                            <div className='uploadBox'>
                                <img src='https://mironcoder-hotash.netlify.app/images/product/single/01.webp' className='w-100' alt=''/>
                            </div> */}
                            <div className='uploadBox'>
                                <input type='file' multiple onChange={(e)=> onChangefile(e, 'api/products/upload')} name='images'/>
                                <div className='info'>
                                    <FaRegImages/>
                                    <h5>image upload</h5>
                                </div>
                            </div>
                        </div>

                        <br/>
                         <Button type='submit' onClick={addProduct} className='btn-blue btn-lg btn-big w-100'><FaCloudUploadAlt/>&nbsp;&nbsp;
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
