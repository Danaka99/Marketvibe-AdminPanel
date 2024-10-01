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

const Login = () => {

    const [inputIndex,setInputIndex] = useState(null);
    const [isShowPassword,setIsShowPassword] = useState(false);
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
     <section className="loginSection">
        <div className="loginBox">
            {/* <div className='logo text-center'>
                <img src={marketvibe} alt='' width="60px"/>
                <h5 className='font-weight-bold'>Login to MarketV</h5>
            </div> */}

            <div className='wrapper mt-4 card border'>
                <form>
                    <div className='logo text-center mb-3'>
                        <img src={marketvibe} alt='' width="100px" className='mb-2'/>
                        <h5 className='font-weight-bold'>Login to <b>Market-V</b></h5>
                    </div>
                    <div className= {`form-group mb-4 position-relative ${inputIndex===0 && 'focus'}`}>
                        <span className='icon'><IoMdMail/></span>
                        <input type='text' className='form-control' placeholder='&nbsp;enter your email'
                        onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)} autoFocus />
                    </div>
                    <div className= {`form-group mb-4 position-relative ${inputIndex===1 && 'focus'}`}>
                        <span className='icon'><RiLockPasswordFill/></span>
                        <input type={`${isShowPassword===true ? 'text' : 'password'}`} className='form-control' placeholder='&nbsp;enter your password'
                        onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)} />

                        <span className='toggleShowPassword' onClick={()=>setIsShowPassword(!isShowPassword)}>
                            {
                                isShowPassword===true ? <IoEyeOff/> : <IoEye/> 
                            }
                            
                        </span>
                    </div>

                    <div className='form-group'>
                        <Button className='btn-blue btn-lg w-100 btn-big'>Sign In</Button>
                    </div>

                    <div className='form-group text-center mb-0'>
                        <Link to={'/forgot-password'} className="link"> FORGOT PASSWORD</Link>
                        <div className='d-flex align-items-center justify-content-center or mt-3 mb-3'>
                            <span className='line'></span>
                            <span className='txt'>or</span>
                            <span className='line'></span>
                        </div>
                        <Button variant='outlined'  className='w-100 btn-lg btn-big loginWithGoogle'>
                            <FcGoogle className='googleBtn' alt=''/>&nbsp; Sign In with Google
                        </Button>
                    </div>
                    
                </form>
            </div>

            <div className='wrapper mt-4 card border footer p-3'>
                <span className='text-center'>
                    Don't have an account?
                    <Link to={'/signUp'} className='link color ml-2'>&nbsp; Register</Link>
                </span>
            </div>

        </div>
     </section>
    </>
   
  );
}

export default Login;
