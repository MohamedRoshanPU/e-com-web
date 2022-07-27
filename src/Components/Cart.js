import React from "react";
import close from "./close.svg";
import "./Cart.css";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/ContextApi";

function Cart() {

  const {isCart,cart,plusCart,minusCart,closeCart} = useContext(GlobalContext)

  return (
    <div className="Cart">
      <div className={isCart ? "cart-container-active" : "cart-container"}>
        <img className="close" src={close} alt="" onClick={closeCart} />
        <div className="cart-contents">
          <div className="cart-heading">
            <h2>My Cart</h2>
          </div>
          { cart.length === 0 ? (<>
          <h5>Cart is Empty</h5></>) : cart.map((product) => {
            return (
              <div className="cart-products">
                <div className="image">
                  <img src={product.image} alt="" />
                </div>
                <div className="product-name-price">
                  <h4>{product.title.slice(0, 9)}...</h4>
                  <p>$ {product.price * product.qty}</p>
                </div>
                <div className="add-buttons">
                  <button
                    onClick={() => {
                      minusCart(product)
                    }}
                  >
                    -
                  </button>
                  <p>{product.qty}</p>
                  <button
                    onClick={() => {
                      plusCart(product)
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
