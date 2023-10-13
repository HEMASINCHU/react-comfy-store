import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import LoginForm from "./components/login/Login";
import SignUp from "./components/signup/Signup";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
