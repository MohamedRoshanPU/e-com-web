import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../GlobalContext/ContextApi";
import "./Products.css";
import {Link} from 'react-router-dom'

function Products() {
  const {
    getProductData,
    filterProducts,
    addToCart,
    data,
    filterData,
    setFilterData,
  } = useContext(GlobalContext);

  useEffect(() => {
    getProductData();
    setFilterData(data);
  }, []);

  return (
    <div className="Products">
      <div className="product-container">
        <div className="product-contents">
          <div className="heading">
            <h3>New Arrivals</h3>
            <div className="radio-button">
              <button
                className="btn-radio"
                onClick={() => {
                  setFilterData(data);
                }}
              >
                All Products
              </button>
              <button
                className="btn-radio"
                onClick={() => {
                  filterProducts("men's clothing");
                }}
              >
                For Men
              </button>
              <button
                className="btn-radio"
                onClick={() => {
                  filterProducts("women's clothing");
                }}
              >
                For Women
              </button>
              <button
                className="btn-radio"
                onClick={() => {
                  filterProducts("electronics", "jewelery");
                }}
              >
                Other Products
              </button>
            </div>
          </div>
          {
            <div className="product-cards">
              {filterData.map((products) => {
                return (
                  <div className="card" key={products.id}>
                    <div className="img">
                      <img src={products.image} alt="product img" />
                    </div>
                    <div className="product-details">
                      <h4>{products.title.slice(0, 12)}...</h4>
                      <p>
                        Price:<span>$ {products.price}</span>
                      </p>
                      <button
                        className="shop"
                        onClick={() => addToCart(products)}
                      >
                        Add to Cart
                      </button>
                      <Link to = {`/products/${products.id}`}><button className="buy">Buy Now</button></Link>
                    </div>
                  </div>
                );
              })}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Products;
