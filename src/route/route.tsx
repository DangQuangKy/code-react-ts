import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../layouts/main/Main";
import SanPham from "../pages/products/SanPham";
import GioiThieu from "../pages/gioiThieu/GioiThieu";
import TinTuc from "../pages/tinTuc/TinTuc";
import LienHe from "../pages/lienHe/LienHe";
import ProductDetail from "../pages/productDetail/ProductDetail";
import Cart from "../pages/cart/Cart";
import CheckOut from "../pages/checkOut/CheckOut";
import ConfirmProduct from "../pages/confirmProduct/ConfirmProduct";
import OrderSuccess from "../pages/success/Success";
import Tables from "../layouts/Admin/LayOut/Tables/Tables";
import Calendar from "../layouts/Admin/LayOut/Calendar/Calendar";
import Dashboard from "../layouts/Admin/LayOut/Dashboard/Dashboard";
import Profile from "../layouts/Admin/LayOut/Profile/Profile";
import DefaultLayout from "../layouts/defaultLayout/DefaultLayout";
import AdminPage from "../layouts/defaultLayout/AdminLayout";

function PublicRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Admin" element={<AdminPage />}>
          <Route path="" element={<Dashboard />} />
          <Route path="tables" element={<Tables />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<DefaultLayout />} >
        <Route path="" element={<Main />} />
        <Route path="/SanPham">
          <Route path="" element={<SanPham />} />
          <Route path="/SanPham/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/GioiThieu" element={<GioiThieu />} />
        <Route path="/TinTuc" element={<TinTuc />} />
        <Route path="/LienHe" element={<LienHe />} />
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/CheckOut" element={<CheckOut />}></Route>
        <Route path="/ConfirmProduct" element={<ConfirmProduct />}></Route>
        <Route path="/Success" element={<OrderSuccess />}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRoute;
