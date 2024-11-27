import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './responsive.css'
// import './ChatBox.css'
// import './Description.css'
import Dashboard from './pages/Dashboard';
import Header from './Components/Header';
import Sidebar from './Components/Header/Sidebar';
import React,{ createContext, useEffect, useState} from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Dashboard/components/Products';
import Category from './pages/Dashboard/Category';
import ProductUpload from './pages/ProductUpload';
import SellerAcount from './pages/SellerAccount';
import ManagedAccount from './pages/ManagedAccount';
import CategoryAdd from './pages/CategoryAdd';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LoadingBar from 'react-top-loading-bar'

const MyContext = createContext();

function App() {

  const [isToggleSidebar,setIsToggleSidebar] = useState(false);
  const [isLogin,setIsLogin] = useState(false);
  const [isHideSidebarAndHeader,setIsHideSidebarAndHeader] = useState(false);
  const [windowWidth,setWindowWidth] = useState(window.innerWidth);
  const [themeMode,setThemeMode] = useState(true);
  const [isOpenNav,setIsOpenNav] = useState(false);
  const [baseUrl,setBaseUrl]=useState(" http://localhost:4001/");

  const [progress, setProgress] = useState(0);

  const [alertBox,setAlertBox] = useState({
    msg:'',
    error:false,
    open:false
  })
  
  useEffect(()=>{
    if(themeMode===true){
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode', 'light');
    }else{
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode', 'dark');
    }
  },[themeMode])


  useEffect(()=>{
      const handleResize = () =>{
      setWindowWidth(window.innerWidth);
  };
    window.addEventListener('resize',handleResize);
  return()=>{
    window.removeEventListener('resize',handleResize)
  };
  });

  const openNav=()=>{
    setIsOpenNav(true);
  }

   const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
   ) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertBox({
      open:false
    });
  };

  const values={
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    themeMode,
    setThemeMode,
    windowWidth,
    openNav,
    isOpenNav,
    setIsOpenNav,
    alertBox,
    setAlertBox,
    setProgress,
    baseUrl,
    setBaseUrl
  }

  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>

      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        className='topLoadingBar'
      />
       <Snackbar open={alertBox.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertBox.error===false ? "success":'error'}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {alertBox.msg}
        </Alert>
      </Snackbar>
       {
        isHideSidebarAndHeader!==true && <Header/>
       }
    
    <div className='main d-flex'>
      {isHideSidebarAndHeader!==true && (
           <>
       <div className={`sideBarOverLay d-none ${isOpenNav===true && 'show'}`} onClick={()=>setIsOpenNav(false)}>  </div>
        <div className={`sidebarWrapper ${isToggleSidebar ? 'toggle' : ''} ${isOpenNav===true ? 'open' : ''}
        `}> 
        <Sidebar /> 
        </div>
       </>
      )}
      
      <div className={`content ${isHideSidebarAndHeader===true && 'full'} ${isToggleSidebar===true ? 'toggle' : ''}` }>
      <Routes>
        <Route path='/' exact={true} element={<Dashboard />} />
        <Route path='/dashboard' exact={true} element={<Dashboard />} />
        <Route path='/login' exact={true} element={<Login />} />
        <Route path='/signUp' exact={true} element={<Signup />} />
        <Route path='/products' exact={true} element={<Products />} />
        <Route path='/product/details' exact={true} element={<ProductDetails />} />
        <Route path='/product/upload' exact={true} element={<ProductUpload />} />
        <Route path='/seller' exact={true} element={<SellerAcount />} />
        <Route path='/managedaccount' exact={true} element={<ManagedAccount />} />
        <Route path='/category/add' exact={true} element={<CategoryAdd />} />
        <Route path='/category' exact={true} element={<Category/>} />
      </Routes>
      </div>
    </div>
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };
