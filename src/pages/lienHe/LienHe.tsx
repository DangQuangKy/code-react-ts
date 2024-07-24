import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LienHe.scss";
import {
  faAngleRight,
  faBuilding,
  faEnvelope,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
function LienHe() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    document.title = "Trang liên hệ"
  },[])
  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="lien-he">
      <nav className="nav-lien-he">
        <a href="/">Trang chủ</a> &nbsp;
        <FontAwesomeIcon icon={faAngleRight} />
        &nbsp;
        <a href="/LienHe" className="active">
          Liên hệ
        </a>
      </nav>
      <div className="container">
        <div className="lien-he-container">
          <img
            src="https://cdn1332.cdn-template-4s.com/media/logo/logo-1970.png"
            alt="wrapper"
          />
          <div className="lien-he-title">
            <p>
              Xu hướng thời trang bị ảnh hưởng bởi một số yếu tố bao gồm điện
              ảnh, người nổi tiếng, khí hậu, sáng tạo khám phá, chính trị, kinh
              tế, xã hội.
            </p>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              &nbsp; Tầng 4, Tòa nhà số 97 - 99 Láng Hạ, Đống Đa, Hà Nội (Tòa
              nhà Petrowaco){" "}
            </div>
            <div>
              <FontAwesomeIcon icon={faHeadphones} />
              &nbsp; 0901191616
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp; contact@sm4s.vn
            </div>
          </div>
          <div className="lien-he-mail">
            <h2>LIÊN HỆ</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Họ Tên"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Số Điện Thoại"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group full-width">
                <input
                  type="text"
                  name="title"
                  placeholder="Tiêu Đề"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group full-width">
                <input
                  type="text"
                  name="content"
                  placeholder="Nội Dung"
                  value={formData.content}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Gửi tin nhắn</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LienHe;
