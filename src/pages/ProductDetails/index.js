import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import React, { useRef } from "react";
import Slider from "react-slick";
import UserAvatarImg from "../../Components/UserAvatarImg";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

import { MdBrandingWatermark } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { FaTags } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { IoMdResize } from "react-icons/io";
import { MdRateReview } from "react-icons/md";
import { MdUnpublished } from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { MdOutlineReply } from "react-icons/md";



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

const ProductDetails = () => {

    const productSliderBig = useRef();
    const productSliderSml = useRef();

    var productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  }; 
  var productsmlSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false
  }; 

  const goToSlide=(index)=>{
     productSliderBig.current.slickGoTo(index);
     productSliderSml.current.slickGoTo(index);
  }

  return (
    <>
      <div className='right-content w-100'>
        <div className='card shadow border-0 w-100 flex-row p-4 justify-content-between align-items-center res-col'>
            <h5 className='mb-0'>Product View</h5>
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
            label="Product View"
            
            />

            </Breadcrumbs>
        </div>

        <div className='card productDetailsSection'>
        <div className='row'>
                <div className='col-md-5'>
                    <div className='sliderWrapper pt-3 pb-3' >
                        <h6 className='mb-4'>Product Gallery</h6>
                        <Slider {...productSliderOptions}
                        ref={productSliderBig}
                        className=' sliderBig mb-2'>
                        <div className='item'>
                           <img src='https://mironcoder-hotash.netlify.app/images/product/single/01.webp' alt='' 
                           className='w-100'/> 
                        </div>
                        <div className='item'>
                           <img src='https://mironcoder-hotash.netlify.app/images/product/single/05.webp' alt='' 
                           className='w-100'/> 
                        </div>
                        <div className='item'>
                           <img src='https://mironcoder-hotash.netlify.app/images/product/single/02.webp' alt='' 
                           className='w-100'/> 
                        </div>
                        <div className='item'>
                           <img src='https://mironcoder-hotash.netlify.app/images/product/single/03.webp' alt='' 
                           className='w-100'/> 
                        </div>
                        </Slider>
                    <Slider {...productsmlSliderOptions}
                    ref={productSliderSml}
                    className='sliderSml'>
                        <div className='item' onClick={()=>goToSlide(0)}>
                           <img src='https://mironcoder-hotash.netlify.app/images/product/single/01.webp' alt='' 
                           className='w-100'/> 
                        </div>
                        <div className='item' onClick={()=>goToSlide(1)}>
                           <img src='https://mironcoder-hotash.netlify.app/images/product/single/05.webp' alt='' 
                           className='w-100'/> 
                        </div>
                        <div className='item' onClick={()=>goToSlide(2)}>
                           <img src='https://mironcoder-hotash.netlify.app/images/product/single/02.webp' alt='' 
                           className='w-100'/> 
                        </div>
                        <div className='item' onClick={()=>goToSlide(3)}>
                           <img src='https://mironcoder-hotash.netlify.app/images/product/single/03.webp' alt='' 
                           className='w-100'/> 
                        </div>
                        <div className='item' onClick={()=>goToSlide(4)}>
                           <img src='https://mironcoder-hotash.netlify.app/images/product/single/01.webp' alt='' 
                           className='w-100'/> 
                        </div>
                        <div className='item' onClick={()=>goToSlide(5)}>
                           <img src='https://mironcoder-hotash.netlify.app/images/product/single/05.webp' alt='' 
                           className='w-100'/> 
                        </div>
                        <div className='item' onClick={()=>goToSlide(6)}>
                           <img src='https://mironcoder-hotash.netlify.app/images/product/single/02.webp' alt='' 
                           className='w-100'/> 
                        </div>
                        <div className='item' onClick={()=>goToSlide(7)}>
                           <img src='https://mironcoder-hotash.netlify.app/images/product/single/03.webp' alt='' 
                           className='w-100'/> 
                        </div>
                    </Slider>
                    </div>
                </div>
                <div className='col-md-6'>
                   <div className=' pt-3 pb-3 pl-4 pr-4'>
                     <h6 className='mb-4 '>Product Details</h6>

                     <h4>Formal suits for men wedding slim fit 3 piece dress business party jacket</h4>

                     <div className='productInfo mt-3'>
                        <div className='row mb-2'>
                            <div className='col-sm-4 d-flex'>
                                <span className='name mr-2'>
                                    <span className='icon'>
                                        <MdBrandingWatermark/>
                                    </span>Brand
                                </span>
                            </div>
                            <div className='col-sm-7'>
                                 <span>:</span><span>Ectsedf</span>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-4 d-flex'>
                                <span className='name mr-2'>
                                    <span className='icon'>
                                        <TbCategoryFilled/>
                                    </span>Category
                                </span>
                            </div>
                            <div className='col-sm-7'>
                                 <span>:</span><span>Men</span>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-4 d-flex'>
                                <span className='name mr-2'>
                                    <span className='icon'>
                                        <FaTags/>
                                    </span>Tags
                                </span>
                            </div>
                            <div className='col-sm-8'>
                                 <span className='dotTwo'>:</span><span>
                                    <ul className='list list-inline tags sml'>
                                        <li className='list-inline-item'>
                                            <span>SUITE</span>
                                        </li>
                                        <li className='list-inline-item'>
                                            <span>PARTY</span>
                                        </li>
                                        <li className='list-inline-item'>
                                            <span>DRESS</span>
                                        </li>
                                        <li className='list-inline-item'>
                                            <span>SMART</span>
                                        </li>
                                        <li className='list-inline-item'>
                                            <span>MEN</span>
                                        </li>
                                    </ul>
                                 </span>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-4 d-flex'>
                                <span className='name mr-2'>
                                    <span className='icon'>
                                        <IoIosColorPalette/>
                                    </span>Color
                                </span>
                            </div>
                            <div className='col-sm-8'>
                                 <span className='dotTwo'>:</span><span>
                                    <ul className='list list-inline tags sml'>
                                        <li className='list-inline-item'>
                                            <span>RED</span>
                                        </li>
                                        <li className='list-inline-item'>
                                            <span>BLUE</span>
                                        </li>
                                        <li className='list-inline-item'>
                                            <span>WHITE</span>
                                        </li>
                                        
                                    </ul>
                                 </span>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-4 d-flex'>
                                <span className='name mr-2'>
                                    <span className='icon'>
                                        <IoMdResize/>
                                    </span>Size
                                </span>
                            </div>
                             <div className='col-sm-8'>
                                 <span className='dotTwo'>:</span><span>
                                    <ul className='list list-inline tags sml'>
                                        <li className='list-inline-item'>
                                            <span>SM</span>
                                        </li>
                                        <li className='list-inline-item'>
                                            <span>MD</span>
                                        </li>
                                        <li className='list-inline-item'>
                                            <span>LG</span>
                                        </li>
                                        <li className='list-inline-item'>
                                            <span>XL</span>
                                        </li>
                                        <li className='list-inline-item'>
                                            <span>XXL</span>
                                        </li>
                                        
                                    </ul>
                                 </span>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-4 d-flex'>
                                <span className='name mr-2'>
                                    <span className='icon'>
                                        <MdAttachMoney/>
                                    </span>Price
                                </span>
                            </div>
                            <div className='col-sm-7'>
                                 <span>:</span>
                                 <span>(03) Review</span>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-4 d-flex'>
                                <span className='name mr-2'>
                                    <span className='icon'>
                                        <BsCartFill/>
                                    </span>Stock
                                </span>
                            </div>
                            <div className='col-sm-7'>
                                 <span>:</span>
                                 <span>(03) Review</span>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-4 d-flex'>
                                <span className='name mr-2'>
                                    <span className='icon'>
                                        <MdRateReview/>
                                    </span>Review
                                </span>
                            </div>
                            <div className='col-sm-7'>
                                 <span>:</span>
                                 <span>(03) Review</span>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-4 d-flex'>
                                <span className='name mr-2'>
                                    <span className='icon'>
                                        <MdUnpublished/>
                                    </span>Published
                                </span>
                            </div>
                            <div className='col-sm-7'>
                                 <span>:</span>
                                 <span>02 Feb 2020</span>
                            </div>
                        </div>
                        


                     </div>
                   </div>
                </div>
            
        </div>

        <div className='p-4'>

        <h6 className='mt-4 mb-3'>Product Description</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit repellendus expedita esse cupiditate quos doloremque rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam debitis amet natus doloremque laudantium? Repudiandae, consequuntur, officiis quidem quo deleniti, autem non laudantium sequi error molestiae ducimus accusamus facere velit consectetur vero dolore natus nihil temporibus aspernatur quia consequatur? Consequuntur voluptate deserunt repellat tenetur debitis molestiae doloribus dicta. In rem illum dolorem atque ratione voluptates asperiores maxime doloremque laudantium magni neque ad quae quos quidem, quaerat rerum ducimus blanditiis reiciendis</p>
        
        <br/>
        <h6 className='mt-4 mb-4'>Rating Analytics</h6>
            <div className='ratingSection'>
                <div className='ratingGrow d-flex align-items-center'>
                    <span className='col1'>
                        5 Star
                    </span>
                    <div className='col-2'>
                        <div className="progress">
                            <div className="progress-bar" style={{width:'40%'}}> </div>
                        </div>
                    </div>
                    <span className='col3'>
                        (122)
                    </span>
                </div>
                <div className='ratingGrow d-flex align-items-center'>
                    <span className='col1'>
                        4 Star
                    </span>
                    <div className='col-2'>
                        <div className="progress">
                            <div className="progress-bar" style={{width:'96%'}}> </div>
                        </div>
                    </div>
                    <span className='col3'>
                        (2000)
                    </span>
                </div>
                <div className='ratingGrow d-flex align-items-center'>
                    <span className='col1'>
                        3 Star
                    </span>
                    <div className='col-2'>
                        <div className="progress">
                            <div className="progress-bar" style={{width:'60%'}}> </div>
                        </div>
                    </div>
                    <span className='col3'>
                        (200)
                    </span>
                </div>
                <div className='ratingGrow d-flex align-items-center'>
                    <span className='col1'>
                        2 Star
                    </span>
                    <div className='col-2'>
                        <div className="progress">
                            <div className="progress-bar" style={{width:'15%'}}> </div>
                        </div>
                    </div>
                    <span className='col3'>
                        (3)
                    </span>
                </div>
                <div className='ratingGrow d-flex align-items-center'>
                    <span className='col1'>
                        1 Star
                    </span>
                    <div className='col-2'>
                        <div className="progress">
                            <div className="progress-bar" style={{width:'5%'}}> </div>
                        </div>
                    </div>
                    <span className='col3'>
                        (1)
                    </span>
                </div>
            </div>

        <br/>
        <h6 className='mt-4 mb-4'>Customer Reviews</h6>
        <div className='reviewSection '>
            <div className='reviewRow'>
                <div className='row'>
                    <div className='col-sm-7 d-flex'>
                        <div className='d-flex flex-column'>
                            <div className='userInfo d-flex align-items-center mb-3'>
                            <UserAvatarImg/>
                            {/* <UserAvatarImg img="" lg={true}/> */}
                            <div className='info pl-3'>
                            <h6>Chandika Jayaweera</h6>
                            <span className='info-review'>25 minutes ago!</span>
                           </div>
                        </div>
                           <Rating name='read-only' value={4.5} precision={0.5} readOnly/>
                        </div>
                    </div>

                    <div className='col-md-5 d-flex align-items-center justify-content-end'>
                        <div className='ml-auto'>
                            <Button className='btn-blue btn-lg btn-big ml-auto'><MdOutlineReply/>&nbsp;&nbsp;Reply</Button>
                        </div>
                    </div>
                    <p className='mt-3 info-data'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.
                    </p>
                </div>
            </div>

            <div className='reviewRow reply'>
                <div className='row'>
                    <div className='col-sm-7 d-flex'>
                        <div className='d-flex flex-column'>
                            <div className='userInfo d-flex align-items-center mb-3'>
                            <UserAvatarImg/>
                            {/* <UserAvatarImg img="" lg={true}/> */}
                            <div className='info pl-3'>
                            <h6>Chandika Jayaweera</h6>
                            <span className='info-review'>25 minutes ago!</span>
                           </div>
                        </div>
                           <Rating name='read-only' value={4.5} precision={0.5} readOnly/>
                        </div>
                    </div>

                    <div className='col-md-5 d-flex align-items-center justify-content-end'>
                        <div className='ml-auto'>
                            <Button className='btn-blue btn-lg btn-big ml-auto'><MdOutlineReply/>&nbsp;&nbsp;Reply</Button>
                        </div>
                    </div>
                    <p className='mt-3 info-data'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.
                    </p>
                </div>
            </div>

            <div className='reviewRow reply'>
                <div className='row'>
                    <div className='col-sm-7 d-flex'>
                        <div className='d-flex flex-column'>
                            <div className='userInfo d-flex align-items-center mb-3'>
                            <UserAvatarImg/>
                            {/* <UserAvatarImg img="" lg={true}/> */}
                            <div className='info pl-3'>
                            <h6>Chandika Jayaweera</h6>
                            <span className='info-review'>25 minutes ago!</span>
                           </div>
                        </div>
                           <Rating name='read-only' value={4.5} precision={0.5} readOnly/>
                        </div>
                    </div>

                    <div className='col-md-5 d-flex align-items-center justify-content-end'>
                        <div className='ml-auto'>
                            <Button className='btn-blue btn-lg btn-big ml-auto'><MdOutlineReply/>&nbsp;&nbsp;Reply</Button>
                        </div>
                    </div>
                    <p className='mt-3 info-data'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.
                    </p>
                </div>
            </div>

            <div className='reviewRow'>
                <div className='row'>
                    <div className='col-sm-7 d-flex'>
                        <div className='d-flex flex-column'>
                            <div className='userInfo d-flex align-items-center mb-3'>
                            <UserAvatarImg/>
                            {/* <UserAvatarImg img="" lg={true}/> */}
                            <div className='info pl-3'>
                            <h6>Chandika Jayaweera</h6>
                            <span className='info-review'>25 minutes ago!</span>
                           </div>
                        </div>
                           <Rating name='read-only' value={4.5} precision={0.5} readOnly/>
                        </div>
                    </div>

                    <div className='col-md-5 d-flex align-items-center justify-content-end'>
                        <div className='ml-auto'>
                            <Button className='btn-blue btn-lg btn-big ml-auto'><MdOutlineReply/>&nbsp;&nbsp;Reply</Button>
                        </div>
                    </div>
                    <p className='mt-3 info-data'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.
                    </p>
                </div>
            </div>


        </div>
       
       <br/>
       <h6 className='mt-4 mb-4'> Review Reply Form</h6>
       <form className='reviewForm'>
            <textarea placeholder='write here'>

            </textarea>
            <Button className='btn-blue btn-big btn-lg w-100 mt-2'>drop your replies</Button>
       </form>
        </div>
      </div>
      </div>
    </>
  );
}

export default ProductDetails;
