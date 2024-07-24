import { Route, Routes } from "react-router-dom";
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


function PublicRoute() {
    return ( 
        <Routes>
            <Route path="/" element={<Main />} />
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
            
        </Routes>
     );
}

export default PublicRoute;