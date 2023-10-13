import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import LoginForm from "./components/login/Login";
import SignUp from "./components/signup/Signup";

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
