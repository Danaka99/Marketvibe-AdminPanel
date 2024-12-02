import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

import { Button } from '@mui/material';
import { FaCloudUploadAlt } from "react-icons/fa";
import 'react-lazy-load-image-component/src/effects/blur.css';
import React, { useContext, useEffect, useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { FaRegImages } from 'react-icons/fa';
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

const AddCategory = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [formFields,setFormFields]=useState({
        name:'',
        images:[],
        color:''
    });

    const [previews,setPreviews] = useState([]);
    const [files, setFiles]= useState([]);
    const [imagefiles,setImageFiles] = useState();

    const [isSelectedFiles, setIsSelectedFiles]=useState(false);

    const fd= new FormData();

    const history = useNavigate();
    const context=useContext(MyContext);

    // useEffect(() => {
    // window.scrollTo(0,0);
    // context.setProgress(20);

    // fetchDataFromApi('/api/category').then((res) => {
    //     setCatData(res);
    //     context.setProgress(100);
    // })
    
    // },[]);

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

    const changeInput = (e) =>{
    setFormFields(()=>(
        {
            ...formFields,
            [e.target.name]:e.target.value
        }
    ))
    }

    const addCategory = (e)=>{
        e.preventDefault();

        fd.append('name',formFields.name);
        fd.append('color',formFields.color);

        if(formFields.name!==""  && formFields.color!=="" && isSelectedFiles!==false){
            setIsLoading(true);


            postData('/api/category/create',formFields).then(res=>{
                setIsLoading(false);
                history('/category')
            })
        }

        else{
            context.setAlertBox({
                open:true,
                error:true,
                msg:"please fill all the details"
            });
            return false;
        }
    }

    const onChangefile = async(e, apiEndPoint)=>{
    try{
        const imgArr = [];
        const files = e.target.files;
        //const fd = new formData();

        for(var i =0;i<files.length;i++){

            if(files[i] && (files[i].type==='image/jpeg'||files[i].type ==='image/jpg' ||files[i].type ==='image/png')){
                setImageFiles(e.target.files)

                const file=files[i];
                imgArr.push(file);
                fd.append(`images`,file);

                setFiles(imgArr);
                context.setAlertBox({
                    open:true,
                    error:false,
                    msg:"images Uploaded!"
                });
                setIsSelectedFiles(true);

                console.log(imgArr);
                postData(apiEndPoint,fd).then((res)=>{
                    context.setAlertBox({
                        open:true,
                        error:false,
                        msg:"image uploaded!"
                    })
                });
            
        }else{
            context.setAlertBox({
                open:true,
                error:true,
                msg:"please select a valid JPG or PNG image file."
            })
         }
        }
            
        
    }catch(error){
        console.log(error)
    }
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
                            <h6>Color</h6>
                            <input type='text' name='color' onChange={changeInput}/>  
                        </div>
                
                         <div className='form-group'>
                            <div className='imagesUploadSec'>
                                 <h6 class="mb-4">Media and Published</h6>

                                <div className='imgUploadBox d-flex align-items-center'>
                                    {
                                        previews?.length !==0 && previews?.map((img,index)=>{
                                            return(
                                                <div className='uploadBox' key={index}>
                                                    <img src={img} className='w-100' alt='img'/>
                                                </div>
                                                
                                            )
                                        })
                                    }
                                    
                                    <div className='uploadBox'>
                                        <input type='file' multiple onChange={(e)=> onChangefile(e, '/api/category/upload')} name='images'/>
                                        <div className='info'>
                                            <FaRegImages/>
                                            <h5>image upload</h5>
                                        </div>
                                    </div>
                                </div>

                                <br/>
                                <Button type='submit' onClick={addCategory} className='btn-blue btn-lg btn-big w-100'><FaCloudUploadAlt/>&nbsp;&nbsp;
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

export default AddCategory;
