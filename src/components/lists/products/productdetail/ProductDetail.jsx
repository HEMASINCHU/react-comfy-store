import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../cart/CartContext";
import "./productDetail.css";
const productObj = {
  options: [1, 2, 3, 4, 5],
};

const ProductDetail = () => {
  const [productDetails, setProductDetails] = useState();
  const [option] = useState(productObj.options);
  const { dispatch } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProductDetails(res.data));
  }, [id]);

  const addToCart = () => {
    if (productDetails) {
      const { title, image, company, price, description } =
        productDetails.attributes;
      const productToAdd = {
        title,
        image,
        company,
        price,
        description,
        qty: 1,
      };
      dispatch({ type: "ADD_ITEM_CART", value: productToAdd });
    }
  };

  return (
    <>
      {productDetails && (
        <section className="productDetail-container">
          <img
            src={productDetails.attributes.image}
            alt="lamp"
            className="productDetail-img"
          />
          <div className="product-container">
            <h2 style={{ fontSize: "30px", textTransform: "capitalize" }}>
              {productDetails.attributes.title}
            </h2>
            <h4 style={{ fontSize: "25px", color: "grey" }}>
              {productDetails.attributes.company}
            </h4>
            <span style={{ fontSize: "20px" }}>
              {productDetails.attributes.price}
            </span>
            <p>{productDetails.attributes.description}</p>
            <div>
              <label>
                <strong>colors</strong>
              </label>
              <br />
              {productDetails.attributes.colors.map((color) => (
                <input
                  className="color"
                  type="color"
                  key={color}
                  value={color}
                />
              ))}
            </div>
            <div>
              <label
                style={{ textTransform: "capitalize", fontWeight: "700px" }}
              >
                Amount
              </label>{" "}
              <br />
              <select id="company">
                {option.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button onClick={addToCart}>ADD TO BAG</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
