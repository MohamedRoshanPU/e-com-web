import { createContext, useState } from "react";

export const GlobalContext = createContext();

const ContextApi = ({ children }) => {
  const [data, setData] = useState([]);
  const [isCart, setIsCart] = useState(false);
  const [filterData, setFilterData] = useState(data);
  const [cart, setCart] = useState([]);
  console.log(cart);

  const plusCart = (product) => {
    setCart(
      cart.map((item) =>
        product.id === item.id
          ? { ...item, qty: item.qty + (item.qty < 10 ? 1 : 0) }
          : item
      )
    );
  };

  const minusCart = (product) => {
    setCart(
      cart.map((item) =>
        product.id === item.id ? { ...item, qty: item.qty - 1 } : item
      )
    );

    if (product.qty === 1) {
      setCart(cart.filter((item) => product.id !== item.id));
    }
  };

  const addToCart = (product) => {
    if (cart.id === product.id) {
      alert("Product already added");
    } else {
      Object.assign(product, { qty: 1 });
      setCart([...cart, product]);
    }
  };

  const getProductData = async () => {
    try {
      await fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (error) {
      return error;
    }
  };

  const filterProducts = (cat) => {
    const newArray = data.filter((items) => items.category === cat);
    setFilterData(newArray);
  };

  const toggleCart = () => {
    setIsCart(true);
  };

  const closeCart = () => {
    setIsCart(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        data,
        isCart,
        filterData,
        cart,
        plusCart,
        minusCart,
        addToCart,
        getProductData,
        filterProducts,
        toggleCart,
        closeCart,
        setFilterData,
        setCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextApi;
