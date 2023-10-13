import { NavLink } from "react-router-dom";
import { BsCart2, BsMoon } from "react-icons/bs";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar-container">
          <NavLink to="/">C</NavLink>
          <div>
            <ul className="navbar-link">
              <li>
                <NavLink aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/products" aria-disabled="true">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" aria-disabled="true">
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkout" aria-disabled="true">
                  Checkout
                </NavLink>
              </li>
              <li>
                <NavLink to="/orders" aria-disabled="true">
                  Orders
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-rightside">
            <BsMoon />
            <BsCart2 />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
