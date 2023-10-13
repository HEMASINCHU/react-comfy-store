import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <NavLink to="/login">SignIn / Guest</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Header;
