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

// import SellerAcount from './pages/SellerAccount';
// import ManagedAccount from './pages/ManagedAccount';


import Products from "./pages/Products";
import Category from "./pages/Category/categoryList";
import ProductUpload from "./pages/Products/addProduct";
import EditProduct from "./pages/Products/editProduct";
import CategoryAdd from "./pages/Category/addCategory";
import EditCategory from "./pages/Category/editCategory";
import SubCatAdd from "./pages/Products/addSubCat";
import SubCatList from "./pages/Category/subCategoryList";
import AddProductRAMS from "./pages/Products/addProductRAMS";
import ProductWeight from "./pages/Products/addProductWeight";
import ProductSize from "./pages/Products/addProductSize";

import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LoadingBar from 'react-top-loading-bar'
import { fetchDataFromApi } from './utils/api';
import axios from "axios";

const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHideSidebarAndHeader, setisHideSidebarAndHeader] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [catData, setCatData] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    userId: "",
  });

  const [isOpenNav, setIsOpenNav] = useState(false);

  const [baseUrl, setBaseUrl] = useState("http://localhost:8000");

  const [progress, setProgress] = useState(0);
  const [alertBox, setAlertBox] = useState({
    msg: "",
    error: false,
    open: false,
  });

  const [selectedLocation, setSelectedLocation] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);


//   useEffect(() => {
//     const handleContextmenu = e => {
//         e.preventDefault()
//     }
//     document.addEventListener('contextmenu', handleContextmenu)
//     return function cleanup() {
//         document.removeEventListener('contextmenu', handleContextmenu)
//     }
// }, [ ])

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== "" && token !== undefined && token !== null) {
      setIsLogin(true);

      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    } else {
      setIsLogin(false);
    }
  }, [isLogin, localStorage.getItem("user")]);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const countryListArr = [];
  
  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      
      if (res !== null) {
        //console.log(res.data.data);
        res.data.data.map((item, index) => {
          countryListArr.push({
            value:item?.iso2,
            label:item?.country,
          });
          //console.log(item.country)
        });


       
        setCountryList(countryListArr);

        //console.log(res.data.data[0].country)
      }

    });
  };


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertBox({
      open: false,
    });
  };

  useEffect(() => {
    setProgress(20);
    fetchCategory();
  }, []);

  const fetchCategory = () => {
    fetchDataFromApi("/api/category").then((res) => {
      setCatData(res);
      setProgress(100);
    });
  };

  const openNav = () => {
    setIsOpenNav(true);
  };

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setisHideSidebarAndHeader,
    theme,
    setTheme,
    alertBox,
    setAlertBox,
    setProgress,
    baseUrl,
    catData,
    fetchCategory,
    setUser,
    user,
    countryList,
    selectedCountry,
    setselectedCountry,
    windowWidth,
    openNav,
    setIsOpenNav
  };
  
  
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          className="topLoadingBar"
        />

        <Snackbar
          open={alertBox.open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            autoHideDuration={6000}
            severity={alertBox.error === false ? "success" : "error"}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {alertBox.msg}
          </Alert>
        </Snackbar>

        {isHideSidebarAndHeader !== true && <Header />}
        <div className="main d-flex">
          {isHideSidebarAndHeader !== true && (
            <>
              <div
                className={`sidebarOverlay d-none ${
                  isOpenNav === true && "show"
                }`}
                onClick={() => setIsOpenNav(false)}
              ></div>
              <div
                className={`sidebarWrapper ${
                  isToggleSidebar === true ? "toggle" : ""
                } ${isOpenNav === true ? "open" : ""}`}
              >
                <Sidebar />
              </div>
            </>
          )}

          <div
            className={`content ${isHideSidebarAndHeader === true && "full"} ${
              isToggleSidebar === true ? "toggle" : ""
            }`}
          >
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              <Route path="/login" exact={true} element={<Login />} />
              <Route path="/signUp" exact={true} element={<Signup />} />
              <Route path="/products" exact={true} element={<Products />} />
              <Route
                path="/product/details/:id"
                exact={true}
                element={<ProductDetails />}
              />
              <Route
                path="/product/upload"
                exact={true}
                element={<ProductUpload />}
              />
              <Route
                path="/product/edit/:id"
                exact={true}
                element={<EditProduct />}
              />
              <Route path="/category" exact={true} element={<Category />} />
              <Route
                path="/category/add"
                exact={true}
                element={<CategoryAdd />}
              />
              <Route
                path="/category/edit/:id"
                exact={true}
                element={<EditCategory />}
              />
              <Route
                path="/subCategory/"
                exact={true}
                element={<SubCatList />}
              />
              <Route
                path="/subCategory/add"
                exact={true}
                element={<SubCatAdd />}
              />
              <Route
                path="/productRAMS/add"
                exact={true}
                element={<AddProductRAMS />}
              />
              <Route
                path="/productWEIGHT/add"
                exact={true}
                element={<ProductWeight />}
              />
              <Route
                path="/productSIZE/add"
                exact={true}
                element={<ProductSize />}
              />
          
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
