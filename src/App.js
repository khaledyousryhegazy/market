import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProductsProvider from "./context/ProductsContext";

import Vegetables from "./components/Products/Vegetables";
import Sidebar from "./components/Sidebar/Sidebar";
import Fruits from "./components/Products/Fruits";
import Beverages from "./components/Products/Beverages";
import Dairy from "./components/Products/Dairy";
import Desserts from "./components/Products/Desserts";
import Meat from "./components/Products/Meat";
import Snacks from "./components/Products/Snacks";
import Cheese from "./components/Products/Cheese";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import WishList from "./Pages/Wishlist/WishList";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />

          <Route
            path="/shop"
            element={
              <>
                <Outlet />
              </>
            }
          >
            <Route path="/shop/vegetables" element={<Vegetables />} />
            <Route path="/shop/fruits" element={<Fruits />} />
            <Route path="/shop/beverages" element={<Beverages />} />
            <Route path="/shop/dairy" element={<Dairy />} />
            <Route path="/shop/desserts" element={<Desserts />} />
            <Route path="/shop/meat" element={<Meat />} />
            <Route path="/shop/snacks" element={<Snacks />} />
            <Route path="/shop/cheese" element={<Cheese />} />
          </Route>
        </Routes>

        <Footer />
      </ProductsProvider>
    </div>
  );
}

export default App;
