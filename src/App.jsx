import { Route, Routes } from "react-router";
import BottomHeader from "./components/header/BottomHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./page/home/Home";
import ProductDetails from "./page/productDetails/ProductDetails";
import Cart from "./page/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./components/ScrollTop";
import CategoryPage from "./page/categoryPage/CategoryPage";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#dfdfdf",
            color: "#fff",
            fontSize: "14px",
            padding: "10px 15px",
            borderRadius: "8px",
            marginTop: "6px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          },
        }}
      />
      <ScrollTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;