import { NavLink } from "react-router-dom";
import "./featureproduct.css";
const FeatureProduct = () => {
  return (
    <>
      <h3 id="productheading">Featured Products</h3>
      <hr />
      <div className="products">
        <div>
          <NavLink href="#" className="product-container">
            <img
              src={
                "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="lamp"
              loading="lazy"
              width="200px"
              height="200px"
            />
            <h1>Avant-Grade-Lamp</h1>
            <span>$179.99</span>
          </NavLink>
        </div>
        <div>
          <NavLink href="#" className="product-container">
            <img
              src={
                "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt="table"
              loading="lazy"
              width="200px"
              height="200px"
            />
            <h1>Coffee Table</h1>
            <span>$179.99</span>
          </NavLink>
        </div>
        <div>
          <NavLink href="#" className="product-container">
            <img
              src={
                "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="bed"
              loading="lazy"
              width="200px"
              height="200px"
            />
            <h1>Comfy Bed</h1>
            <span>$129.99</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
