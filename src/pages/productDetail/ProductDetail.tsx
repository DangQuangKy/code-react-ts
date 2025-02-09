import {
  faAngleRight,
  faBox,
  faMinus,
  faPenRuler,
  faPlus,
  faRulerCombined,
  faShirt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetail.scss";
import { useDispatch } from "react-redux";
import { Product } from "../../types/product.type";
import Notification from "../../components/notification/notification";
import { addProduct } from "../../redux/slice/cartSlice";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [count, setCount] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    document.title = "Trang Sản phẩm";
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addProduct(product));
    setNotificationMessage(`Đã thêm ${product.name} vào giỏ hàng!`);
    setShowNotification(true);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const totalPrice = product.price * count;
  const overviewLines = product.overview ? product.overview.split("\n") : [];

  return (
    <div>
      <nav className="nav-product">
        <Link to="/">Trang chủ</Link> &nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faAngleRight} />
        <Link to="/SanPham">Sản phẩm</Link> &nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faAngleRight} />
        <Link to={`/SanPham/${product.id}`} className="active">
          {product.name}
        </Link>
      </nav>
      <div className="productdetail">
        <div className="pro-img">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="pro-title">
          <h2>{product.name}</h2>
          <div className="star">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p className="font-size">
            {totalPrice.toLocaleString("vi-VN")} <span>VND</span>
          </p>
          <p>Mã sản phẩm: {product.description}</p>
          <div className="pro-buy">
            <div className="pro-quantity">
              <span
                className="btn-quantity btn-quantity-sub"
                onClick={decrement}
              >
                <FontAwesomeIcon icon={faMinus} />
              </span>
              <input type="text" value={count} readOnly />
              <span
                className="btn-quantity btn-quantity-add"
                onClick={increment}
              >
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </div>
            <div className="btn-buy">
              <Link onClick={() => handleAddToCart(product)} to={""}>
                Thêm giỏ hàng
              </Link>
              <Notification
                message={notificationMessage}
                show={showNotification}
                onClose={() => setShowNotification(false)}
              />
            </div>
          </div>
          <div className="list-suite">
            <div className="suite-1">
              <FontAwesomeIcon icon={faRulerCombined} />
              <span>Garment Specifications</span>
            </div>
            <div className="suite-2">
              <FontAwesomeIcon icon={faPenRuler} />
              <span>Need a hand? Find your size</span>
            </div>
            <div className="suite-3">
              <FontAwesomeIcon icon={faShirt} />
              <span>Repair Or Replace Guarantee</span>
            </div>
            <div className="suite-4">
              <FontAwesomeIcon icon={faBox} />
              <span>Free Shipping & Free Returns</span>
            </div>
          </div>
        </div>
      </div>
      <div className="infor-product">
        <div className="infor-title">Thông tin sản phẩm</div>
        <div className="infor-detail">
          <div className="overview">
            <h4>Tổng quan:</h4>
            {overviewLines.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </div>
          <div className="material">
            <h4>Chất liệu:</h4>
            <li>{product.material}</li>
          </div>
          <div className="instruct">
            <h4>Hướng dẫn giặt:</h4>
            <li>{product.instruct}</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
