import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import LoginForm from "./components/login/Login";
import SignUp from "./components/signup/Signup";
import About from "./components/lists/about/About";
import Home from "./components/home/Home";
import FormSelect from "./components/lists/products/FormSelect";
import ProductDetails from "./components/lists/products/productdetail/ProductDetail";
import Order from "./components/lists/order/Order";
import Cart from "./components/lists/products/cart/Cart";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<FormSelect />}></Route>
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="order" element={<Order />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
