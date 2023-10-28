import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products?page=${page}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [page]);

 const handlePreviousClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNextClick = () => {
    if (data.length > 0) {
      setPage(page + 1);
    }
  };


  const isPreviousDisabled = page === 1;
  const isNextDisabled = data.length === 0;

  return (
    <div style={{ margin: "4rem" }}>
      <div className="views">
        <button onClick={handlePreviousClick} disabled={isPreviousDisabled}>
          Grid
        </button>
        <button onClick={handleNextClick} disabled={isNextDisabled}>
          Flex
        </button>
      </div>
      <hr />
      <div className="products">
        {data?.length > 0 &&
          data.map((product) => (
            <div key={product.id}>
              <NavLink to={"/product/" + product.id}>
                <img
                  style={{
                    width: "15rem",
                    height: "15rem",
                    borderRadius: "10px",
                  }}
                  src={product["attributes"]["image"]}
                  alt="lamp"
                />
                <h1>{product["attributes"]["title"]}</h1>
                <span>{product["attributes"]["price"]}</span>
              </NavLink>
            </div>
          ))}
      </div>
      <div className="pagination-button">
        <button className=" btn prev" onClick={handlePreviousClick} disabled={isPreviousDisabled}>
          Previous
        </button>
        <button className="btn next" onClick={handleNextClick} disabled={isNextDisabled}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
