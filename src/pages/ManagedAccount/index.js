// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import { emphasize, styled } from '@mui/material/styles';
// import Chip from '@mui/material/Chip';
// import HomeIcon from '@mui/icons-material/Home';


// import Button from '@mui/material/Button';
// import { useState } from "react";
// import React, { useRef } from 'react';


// import { FaCloudUploadAlt } from "react-icons/fa";
// import { IoCloseSharp } from 'react-icons/io5'; 
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { FaRegImages } from 'react-icons/fa';
// import { MdOutlineEmail } from "react-icons/md";

// import html2pdf from 'html2pdf.js';


// const StyledBreadcrumb = styled(Chip)(({theme})=>{
    
//     const backgroundColor= 
//     theme.palette.mode=== "light"
//     ? theme.palette.grey[100]
//     : theme.palette.grey[800];

//     return{
//         backgroundColor,
//         height: theme.spacing(3),
//         color : theme.palette.text.primary,
//         fontWeight: theme.typography.fontWeightRegular,
//         '&:hover, &:focus' :{
//             backgroundColor:emphasize(backgroundColor, 0.06),
//         },
//         '&: active':{
//             boxShadow:theme.shadows[1],
//             backgroundColor:emphasize(backgroundColor, 0.12),
//         },

//     };
// });


// const ManagedAccount = () => {

//     function formatDoc(cmd, value = null) {
//     console.log('Command:', cmd, 'Value:', value); // Debugging line
//     try {
//         if (value) {
//             document.execCommand(cmd, false, value);
//         } else {
//             document.execCommand(cmd);
//         }
//     } catch (e) {
//         console.error('Error executing command:', e);
//     }
// }

    
//   const [activeTabs, setActiveTabs]= useState(0);

//   const fileInputRef = useRef(null);
    
//     const handleClick = () => {
//     fileInputRef.current.click();
//     };

//   return (
//     <>
//        <div className='right-content w-100'>
//         <div className='card shadow border-0 w-100 flex-row p-4 justify-content-between align-items-center res-col'>
//             <h5 className='mb-0'>Managed Account</h5>
//             <Breadcrumbs aria-label='breadcrumb' className='ml-auto breadcrumbs_'>
//             <StyledBreadcrumb
//             component="a"
//             href="/dashboard"
//             label="Dashboard"
//             icon={<HomeIcon fontSize='small'/>}
//             />

//             <StyledBreadcrumb
//             label="Managed Account"
//             component="a"
//             href="/managedaccount"
//             />

//             </Breadcrumbs>
//         </div>
//         <div className='card shadow border-0 w-100 flex-row p-4 justify-content-between align-items-center res-col'>
//         <div className="card mt-5 p-5 detailsPageTabs">
//           <div className="customTabs">
//             <ul className="list-inline-item mb-5">
//                 <li className="list-inline-item" >
//                   <Button className={` ${activeTabs === 0 && 'active'}`} onClick={() => { setActiveTabs(0)}}>
//                     My Details
//                   </Button>
//                 </li>
//                 <li className="list-inline-item" >
//                   <Button className={` ${activeTabs === 1 && 'active'}`} onClick={() => { setActiveTabs(1)}}>
//                     Profile
//                   </Button>
//                 </li>
//                 <li className="list-inline-item" >
//                   <Button className={` ${activeTabs === 2 && 'active'}`} onClick={() => 
//                     { setActiveTabs(2)
//                     }}>
//                     Password
//                   </Button>
//                 </li>
//                 <li className="list-inline-item" >
//                   <Button className={` ${activeTabs === 3 && 'active'}`} onClick={() => 
//                     { setActiveTabs(3)
//                     }}>
//                     Billings
//                   </Button>
//                 </li>
//             </ul>

//             <br/>

//             {
//               activeTabs === 0 &&
//             <div className="col-md-20">
//               <form className='form'>
//                     <div className='row'>
//                                 <h5 className='mb-1'>Personal Info</h5>
//                                 <h6 className='mb-5'>Update your photo and personal details here</h6>
//                                 <div className='row'>
//                                      <h6>Name</h6>
//                                 <div className='col'>
//                                     <div className='form-group'>
//                                         <input type='text' placeholder='First Name'/>  
//                                     </div>
//                                 </div>

//                                 <div className='col'>
//                                     <div className='form-group'>
//                                         <input type='text' placeholder='Last Name'/>  
//                                     </div>
//                                 </div>
                             
                                    
//                                 </div>
//                                 <div className='form-group'>
                                    
//                                         <h6>Email</h6>
//                                         <div className="input-icon-wrapper mb-4">
//                                             <MdOutlineEmail className="input-icon" />
//                                             <input
//                                                 type="text"
//                                                 name="name"
//                                                 placeholder="hirushayomal99@gmail.com"
//                                                 className="input-field"
//                                             />
//                                         </div>

//                                     <h6>Description</h6>
//                                     <div class="container">
//                 <div class="toolbar">
//                     <div class="head">
//                         <input type="text" placeholder="Filename" value="untitled" id="filename" />
//                         <select onchange="fileHandle(this.value); this.selectedIndex=0">
//                             <option value="" selected="" hidden="" disabled="">File</option>
//                             <option value="new">New file</option>
//                             <option value="txt">Save as txt</option>
//                             <option value="pdf">Save as pdf</option>
//                         </select>
//                         <select onchange="formatDoc('formatBlock', this.value); this.selectedIndex=0;">
//                             <option value="" selected="" hidden="" disabled="">Format</option>
//                             <option value="h1">Heading 1</option>
//                             <option value="h2">Heading 2</option>
//                             <option value="h3">Heading 3</option>
//                             <option value="h4">Heading 4</option>
//                             <option value="h5">Heading 5</option>
//                             <option value="h6">Heading 6</option>
//                             <option value="p">Paragraph</option>
//                         </select>
//                         <select onchange="formatDoc('fontSize', this.value); this.selectedIndex=0;">
//                             <option value="" selected="" hidden="" disabled="">Font size</option>
//                             <option value="1">Extra small</option>
//                             <option value="2">Small</option>
//                             <option value="3">Regular</option>
//                             <option value="4">Medium</option>
//                             <option value="5">Large</option>
//                             <option value="6">Extra Large</option>
//                             <option value="7">Big</option>
//                         </select>
//                         <div class="color">
//                             <span>Color</span>
//                             <input type="color" oninput="formatDoc('foreColor', this.value); this.value='#000000';"/>
//                         </div>
//                         <div class="color">
//                             <span>Background</span>
//                             <input type="color" oninput="formatDoc('hiliteColor', this.value); this.value='#000000';"/>
//                         </div>
//                     </div>
//                     <div class="btn-toolbar">
//                         <button onclick="formatdoc('undo')"><i class='bx bx-undo' ></i></button>
//                         <button onclick="formatDoc('redo')"><i class='bx bx-redo' ></i></button>
//                         <button onclick="formatDoc('bold')"><i class='bx bx-bold'></i></button>
//                         <button onclick="formatDoc('underline')"><i class='bx bx-underline' ></i></button>
//                         <button onclick="formatDoc('italic')"><i class='bx bx-italic' ></i></button>
//                         <button onclick="formatDoc('strikeThrough')"><i class='bx bx-strikethrough' ></i></button>
//                         <button onclick="formatDoc('justifyLeft')"><i class='bx bx-align-left' ></i></button>
//                         <button onclick="formatDoc('justifyCenter')"><i class='bx bx-align-middle' ></i></button>
//                         <button onclick="formatDoc('justifyRight')"><i class='bx bx-align-right' ></i></button>
//                         <button onclick="formatDoc('justifyFull')"><i class='bx bx-align-justify' ></i></button>
//                         <button onclick="formatDoc('insertOrderedList')"><i class='bx bx-list-ol' ></i></button>
//                         <button onclick="formatDoc('insertUnorderedList')"><i class='bx bx-list-ul' ></i></button>
//                         <button onclick="addLink()"><i class='bx bx-link' ></i></button>
//                         <button onclick="formatDoc('unlink')"><i class='bx bx-unlink' ></i></button>
//                         <button id="show-code" data-active="false">&lt;/&gt;</button>
//                     </div>
//                     </div>
//                     <div id="content" contenteditable="true" spellcheck="false">
//                         Type Here ...
//                     </div>
// 	            </div>
//                                     {/* <textarea rows={10} cols={20}/>   */}
                                   
//                                 </div>
                                
                                


//                             </div>
//                             <div className='form-group'>
//                             <h6 class="mb-4">Profile Picture</h6>
//                             <div className='card p-4 mt-0'>
//                                     <div className='imagesUploadSec'>
                                        

//                                         <div className='imgUploadBox d-flex align-items-center'>
//                                             <div className='uploadBox'>
//                                             <span className='remove'>
//                                                     <IoCloseSharp/>
//                                             </span>
//                                                 <div className='box'>
//                                                     <LazyLoadImage
//                                                     alt={"image"}
//                                                     effect="blur"
//                                                     className="w-100"
//                                                     src={`https://mironcoder-hotash.netlify.app/images/product/single/01.webp`}/>
//                                                     <input
//                                                         type='file'
//                                                         hidden
//                                                         multiple
//                                                         name="images"
//                                                         ref={fileInputRef}
//                                                         />
                                                
//                                                 </div>
//                                             </div>
//                                     </div>
                                            
//                         </div>
//                         <br/>
                        
                        
//                     </div>
//                      <Button type='submit' className='btn-blue btn-lg btn-big w-100'><FaCloudUploadAlt/>&nbsp;&nbsp;
//                         PUBLISH AND VIEW</Button>
//                 </div>
//         </form>
//          </div>
//             }

//             {
//               activeTabs === 1 &&

//             <div className="col-md-20">
//             </div>
//             }

//             {
//               activeTabs === 2 &&

//               <div className="tabContent">
//                 <div className="row">
//                   <div className="col-md-12">
                    
//                   </div>
//                 </div>
//               </div>
//             } 
//           </div>
//         </div>
//         </div>
        
//     </div>
//     </>
//   );
// }

// export default ManagedAccount;
