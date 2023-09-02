import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./layouts/Home/Home";
import Footer from "./components/Footer/Footer";
import Shop from "./layouts/Shop/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./layouts/SingleProduct/SingleProduct";
import ProductComparision from "./layouts/ProductComparision/ProductComparision";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<SingleProduct />} />
          <Route path="/compare" element={<ProductComparision />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
