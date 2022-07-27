import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import ContextApi from "./GlobalContext/ContextApi";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Product from "./Components/Product";


function App() {
  return (
    <div className="App">
      <ContextApi>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="men" element={<Products />} />
            <Route path="women" element={<Products />} />
            <Route path="products/:id" element = {<Product/>}/>
          </Routes>
        </Router>
        <Cart />
      </ContextApi>
    </div>
  );
}

export default App;
