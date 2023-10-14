import { NavLink } from "react-router-dom";
import React from "react";
import FeatureProduct from "./featureproducts/FeatureProduct";
import "./home.css";
const Home = () => {
  return (
    <React.Fragment>
      <div className="home-comp">
        <div className="home-section">
          <h1 style={{ fontSize: "4rem" }}>
            We are changing the way people shop
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "2rem" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <button
            style={{
              padding: "10px",
              textTransform: "uppercase",
              backgroundColor: "blue",
              border: "none",
              borderRadius: "10px",
            }}
          >
            <NavLink>our products</NavLink>
          </button>
        </div>
        <img
          className="home-pic"
          style={{ width: "300px", height: "350px", borderRadius: "10px" }}
          src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp"
          alt="avatar"
        />
      </div>
      <FeatureProduct />
    </React.Fragment>
  );
};
export default Home;
