import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);
  return (
    <div style={{ margin: "4rem" }}>
      <div className="views">
        <button onClick="listView()">List</button>
        <button onClick="gridView()">Grid</button>
      </div>
      <hr />
      <div className="products">
        {data?.length > 0 &&
          data.map((product) => (
            <div key={product.id}>
              <Link to={"/product/" + product.id}>
                <img
                  style={{
                    width: "15rem",
                    height: "15rem",
                    borderRadius: "10px",
                  }}
                  src={product["attributes"]["image"]}
                  alt="lamp"
                />
                <p>{product["attributes"]["title"]}</p>
                <span>{product["attributes"]["price"]}</span>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Products;
