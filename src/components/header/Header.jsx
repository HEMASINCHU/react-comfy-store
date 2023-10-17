import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  }, []);
  function handleLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <>
      <div className="header-container">
        <NavLink to="/login">SignIn / Guest</NavLink>
        <NavLink to="/signup">Register</NavLink>
        <div>
          {user && (
            <>
              <h3 style={{ color: "grey" }}>
                {user.user.username}
                <button onClick={handleLogout}>Logout</button>
              </h3>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Header;
