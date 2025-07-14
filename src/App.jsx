import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./component/navbar";
import Category from "./pages/category";
import Login from "./pages/Login";
import Register from "./pages/register.jsx";
import ProductDetails from "./pages/product-details.jsx";
function App() {
  const hideNavbarRoutes = ["/login", "/register"];

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
