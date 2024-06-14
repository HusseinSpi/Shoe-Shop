import "./Navbar.css";
import { Outlet, useNavigate } from "react-router-dom";
// import SearchBar from "./SearchBar";
import Icons from "./Icons";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <div className="icon" onClick={() => navigate("/")}>
          <FaHome />
        </div>
        {/* <SearchBar data={data} /> */}
        <Icons />
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
