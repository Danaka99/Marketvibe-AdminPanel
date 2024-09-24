import { Link } from "react-router-dom";
import logo from "../../assests/logo.jpg";
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from "react-icons/md";

const Header = () => {
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row w-100">
            {/* Logo Wrapper */}
            <div className="col-sm-4 d-flex align-items-center part-1">
              <Link to={'/'} className="d-flex align-items-center logo">
                <img src={logo} alt="logo" className="logo-img" />
                <span className="ml-2"></span>
              </Link>
            </div>
            {/* Button Wrapper */}
            <div className="col-sm-4 d-flex align-items-center part-2 pl-4">
              <Button className="rounded-circle">
                <MdOutlineMenuOpen />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
