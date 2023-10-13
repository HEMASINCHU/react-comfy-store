import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import LoginForm from "./components/login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
