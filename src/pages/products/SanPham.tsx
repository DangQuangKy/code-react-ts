import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SanPham.scss";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Product } from "../../types/product.type";
import Notification from "../../components/notification/notification";
import { addProduct } from "../../redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";

function SanPham() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [isRotated, setIsRotated] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Sử dụng useNavigate

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setSortedProducts(data);
      })           
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    document.title = "Trang Sản phẩm";
  }, []);

  const handleClick = () => {
    setIsRotated(!isRotated);
    setIsListVisible(!isListVisible);
  };

  const handleProductClick = (id: string) => {
    navigate(`/SanPham/${id}`);} // Điều hướng đến trang sản phẩm
  //   window.location.href = `Sanpham/${id}`
  // };
  // const handleProductClick = (id: number) => {
  //     window.location.href = `/SanPham/${id}`;
  //   }

  const sortByPriceAscending = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
    setIsListVisible(false);
  };

  const sortByName = () => {
    const sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
    setSortedProducts(sorted);
    setIsListVisible(false);
  };

  const sortByPriceDescending = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setSortedProducts(sorted);
    setIsListVisible(false);
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addProduct(product));
    setNotificationMessage(`Đã thêm ${product.name} vào giỏ hàng!`);
    setShowNotification(true);
  };

  return (
    <div className="sanpham">
      <div className="wrapper">
        <img
          src="https://cdn1332.cdn-template-4s.com/media/category/bg-1.jpg"
          alt="wrapper"
        />
      </div>
      <div className="product">
        <div className="product-nav">
          <div className="title">
            <a href="/">Trang chủ</a> &nbsp;
            <FontAwesomeIcon icon={faAngleRight} />
            &nbsp;
            <a href="/SanPham" className="active">
              Sản phẩm
            </a>
          </div>
          <div className="section">
            <div className="section-1">
              <span>Hiển thị:</span>
              <a href="/">12</a>
              <span>/</span>
              <a href="/">24</a>
              <span>/</span>
              <a href="/">36</a>
            </div>
            <div className="section-2">
              <span onClick={handleClick} className="click">
                Sắp xếp: &nbsp;&nbsp;
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`arrow ${isRotated ? "rotated" : ""}`}
                />
                {isListVisible && (
                  <ul className="list">
                    <li>
                      <p onClick={sortByName}>Sắp xếp theo tên</p>
                    </li>
                    <li>
                      <p onClick={sortByPriceAscending}>Giá từ thấp đến cao</p>
                    </li>
                    <li>
                      <p onClick={sortByPriceDescending}>Giá từ cao đến thấp</p>
                    </li>
                  </ul>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="main-product">
          <div className="main-left">
            <ul>
              <li><a href="/SanPham">Shirts</a></li>
              <li><a href="/SanPham">Bottoms</a></li>
              <li><a href="/SanPham">Outerwear</a></li>
              <li><a href="/SanPham">Knits</a></li>
              <li><a href="/SanPham">Accessories</a></li>
              <li><a href="/SanPham">Footwear</a></li>
            </ul>
          </div>
          <div className="main-right">
            <ul>
              {sortedProducts.map((product) => (
                <li key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    onClick={() => handleProductClick(product.id)}
                  />
                  <h4>{product.name}</h4>
                  <p>
                    Giá sản phẩm:{" "}
                    {product.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                  <div className="btn-next">
                    <div
                      className="btn btn1"
                      onClick={() => handleAddToCart(product)}
                    >
                      Thêm giỏ hàng
                    </div>
                    <div
                      className="btn btn2"
                      onClick={() => handleProductClick(product.id)}
                    >
                      Xem chi tiết
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Notification
        message={notificationMessage}
        show={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </div>
  );
}

export default SanPham;
