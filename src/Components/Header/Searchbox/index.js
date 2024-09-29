import { IoSearchSharp } from "react-icons/io5";



const Searchbox = () => {
  return (
    <div className="searchBox position-relative d-flex align-items-center">
      <IoSearchSharp/>&nbsp;
      <input type="text" placeholder="Search hear..."/>
    </div>
  );
}

export default Searchbox;
