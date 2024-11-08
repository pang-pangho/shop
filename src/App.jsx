import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<DetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
