import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <NavLink to="/login">SignIn / Guest</NavLink>
        <NavLink to="/signup">Register</NavLink>
      </div>
      <Navbar />
      <Home />

      <Outlet />
    </>
  );
};
export default Header;
