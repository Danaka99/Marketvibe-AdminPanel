import { useContext, useEffect, useState } from 'react';
import marketvibe from '../../assests/Market3.png'
import { MyContext } from '../../App';
import background from '../../assests/background.avif';
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaUserCheck } from "react-icons/fa6";
import { LuShieldCheck } from "react-icons/lu";
import { SiFacebook } from "react-icons/si";
// import { FaWhatsapp } from "react-icons/fa6";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IoHome } from "react-icons/io5";

const Signup = () => {

    const [inputIndex,setInputIndex] = useState(null);
    const [isShowPassword,setIsShowPassword] = useState(false);
    const [isShowConfirmPassword,setIsShowConfirmPassword] = useState(false);
    const context = useContext(MyContext);

    useEffect(()=>{
        context.setIsHideSidebarAndHeader(true);
    });

    const focusInput=(index)=>{
        setInputIndex(index);
    }

  return (
    <>
     <img src={background} alt='' className='loginPattern'/>
     <section className="signUpSection">
        <div className='row'>

            <div className='col-md-8 d-flex align-items-center flex-column part1 justify-content-center'>
                <h1>MARKET-V <span className='intro-marketvibe'>ECOMMERCE DASHBOARD</span> & ADMIN PANEL</h1>
                <p>Market Vibe is a dynamic e-commerce platform where buyers and sellers connect to trade a wide range of products, from electronics to fashion. Whether you're looking for great deals or showcasing unique items, Market Vibe provides a seamless, user-friendly experience for all your shopping and selling needs.</p>
                <div className='w-100 mt-4'>
                    <Link to={'/'}><Button className='btn-log btn-lg btn-big'><IoHome/>&nbsp;Go To Home</Button></Link>
                </div>


            </div>



            <div className='col-md-4'>
                 <div className="loginBox">
                    <div className='logo text-center mb-2'>
                        <img src={marketvibe} alt='' width="80px" className='mb-1'/>
                        <h5 className='font-weight-bold'>Register a new account</h5>
                    </div>

            <div className='wrapper mt-4 card border'>
                <form>
                   
                    <div className= {`form-group mb-3 position-relative ${inputIndex===0 && 'focus'}`}>
                        <span className='icon'><FaUserCheck/></span>
                        <input type='text' className='form-control' placeholder='&nbsp;enter your name'
                        onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)} />
                    </div>
                    <div className= {`form-group mb-3 position-relative ${inputIndex===1 && 'focus'}`}>
                        <span className='icon'><IoMdMail/></span>
                        <input type='text' className='form-control' placeholder='&nbsp;enter your email'
                        onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)} />
                    </div>
                    <div className= {`form-group mb-3 position-relative ${inputIndex===2 && 'focus'}`}>
                        <span className='icon'><RiLockPasswordFill/></span>
                        <input type={`${isShowPassword===true ? 'text' : 'password'}`} className='form-control' placeholder='&nbsp;enter your password'
                        onFocus={()=>focusInput(2)} onBlur={()=>setInputIndex(null)} />

                        <span className='toggleShowPassword' onClick={()=>setIsShowPassword(!isShowPassword)}>
                            {
                                isShowPassword===true ? <IoEyeOff/> : <IoEye/> 
                            }
                            
                        </span>
                    </div>
                    <div className= {`form-group mb-3 position-relative ${inputIndex===3 && 'focus'}`}>
                        <span className='icon'><LuShieldCheck/></span>
                        <input type={`${isShowConfirmPassword===true ? 'text' : 'password'}`} className='form-control' placeholder='&nbsp;confirm your password'
                        onFocus={()=>focusInput(3)} onBlur={()=>setInputIndex(null)} />

                        <span className='toggleShowPassword' onClick={()=>setIsShowConfirmPassword(!isShowConfirmPassword)}>
                            {
                                isShowConfirmPassword===true ? <IoEyeOff/> : <IoEye/> 
                            }
                            
                        </span>
                    </div>

                   <FormControlLabel className='mb-3' control={<Checkbox />} label="I agree to the all Terms & Condiotions" />

                    <div className='form-group'>
                        <Button className='btn-blue btn-lg w-100 btn-big'>Sign Up</Button>
                    </div>

                    <div className='form-group text-center mb-0'>
                     
                        <div className='d-flex align-items-center justify-content-center or mt-3 mb-3'>
                            <span className='line'></span>
                            <span className='txt'>or</span>
                            <span className='line'></span>
                        </div>
                        <Button variant='outlined'  className='w-100 btn-lg btn-big loginWithGoogle'>
                            <FcGoogle className='googleBtn' alt=''/>&nbsp; Sign In with Google
                        </Button>
                    </div>
                    <div className='form-group text-center mb-0 mt-3'>
                     
                        <Button variant='outlined'  className='w-100 btn-lg btn-big loginWithGoogle'>
                            <SiFacebook className='FbBtn' alt=''/>&nbsp; Sign In with Facebook
                        </Button>
                    </div>
                      {/* <div className='form-group text-center mb-0 mt-3'>
                     
                        <Button variant='outlined'  className='w-100 btn-lg btn-big loginWithGoogle'>
                            <FaWhatsapp className='whatsapp' alt=''/>&nbsp; Sign In via Whatsapp
                        </Button>
                    </div> */}
                    
                </form>
                <span className='text-center mt-3 d-block'>
                    Already have an account?
                    <Link to={'/login'} className='link color ml-2'>&nbsp; Sign In</Link>
                </span>
            </div>
        </div>
            </div>

        </div>
       
     </section>
    </>
  );
}

export default Signup;
