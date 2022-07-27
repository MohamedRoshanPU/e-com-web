import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/ContextApi";
import "./Product.css";
import star from "./star.svg";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  console.log(product);
  const { toggleCart, cart, setCart } = useContext(GlobalContext);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    try {
      await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    } catch (error) {
      return error;
    }
  };

  const addCart = (product) => {
    Object.assign(product, { qty: 1 });
    setCart([...cart, product]);
  };

  const AddToCart = () => {
    return (
      <button
        onClick={() => {
          addCart(product);
          toggleCart();
        }}
        className="shop-2"
      >
        Add to cart
      </button>
    );
  };

  return (
    <div className="Product">
      <div className="single-product-container">
        <div className="single-product-contents">
          <div className="left">
            <div className="single-product-image">
              <img src={product.image} alt={product.title} />
            </div>
          </div>
          <div className="right">
            <div className="single-product-details">
              <p className="category">{product.category}</p>
              <h2 className="product-name">{product.title}</h2>
              <p className="description">{product.description}</p>
              <p className="rating">
                Rating {product.rating && product.rating.rate}
                <span className="star">
                  <img src={star}></img>
                </span>
              </p>
              <p className="price">
                ${product.price}
                <span>${product.price * 1.5}</span>
              </p>
              <AddToCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
