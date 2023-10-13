import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./signup.css";
const SignUp = () => {
  const [login, setLogin] = useState({ username: "", password: "", email: "" });

  const handleChange = (ev) => {
    const { name, value } = ev && ev.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        "https://strapi-store-server.onrender.com/api/auth/local/register",
        {
          ...login,
        }
      )
      .then((res) => console.log(res));

    console.log(login);
    setLogin({ username: "", password: "", email: "" });
  }

  return (
    <div className="login-form">
      <h2 className="login-head">Register</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Username:</label>
        <input
          className="form-input"
          name="username"
          type="text"
          value={login.username}
          onChange={handleChange}
        />
        <label className="form-label">Email:</label>
        <input
          className="form-input"
          name="email"
          type="email"
          value={login.email}
          onChange={handleChange}
        />
        <label className="form-label">Password:</label>
        <input
          className="form-input"
          name="password"
          type="password"
          value={login.password}
          onChange={handleChange}
        />

        <button className="form-button login" type="submit">
          Register
        </button>

        <span className="span">
          Not a member yet? <NavLink to="/login">Login</NavLink>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
