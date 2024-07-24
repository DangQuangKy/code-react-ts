import { Button } from "@mui/material";
import "./Main.scss";
import Slide from "./Slide/Slide";


function Main() {
  return (
    <div className="main">
      <div className="wrapper">
        <Slide />
      </div>
      <div className="banner-top">
        <div className="banner-top-left">
          <img
            src="https://cdn1332.cdn-template-4s.com/media/banner/banner-1.webp"
            alt="banner1"
          />
          <div className="left-title">
            <h1>The Original Organic</h1>
            <div className="text">Rodale Institute has been the leading global advocate for organic and regenerative agriculture for 70+ years. Much of their hands-on research takes place on a 333-acre farm in rural Pennsylvania, so we asked them to test out some of our newest Boss Duck gear right there in the field. Check out our latest Dispatch to see how it held up:
            </div>
            <Button variant="contained">Mua ngay</Button>
          </div>
        </div>
        <div className="banner-top-right">
          <img
            src="https://cdn1332.cdn-template-4s.com/media/banner/banner-2.webp"
            alt="banner1"
          />
           <div className="left-title">
            <h1>A Legend Rides Again</h1>
            <div className="text">Rodale Institute has been the leading global advocate for organic and regenerative agriculture for 70+ years. Much of their hands-on research takes place on a 333-acre farm in rural Pennsylvania, so we asked them to test out some of our newest Boss Duck gear right there in the field. Check out our latest Dispatch to see how it held up:
            </div>
            <Button variant="contained">Mua ngay</Button>
          </div>
        </div>
      </div>
      <div className="banner-bottom">
        <img src="https://cdn1332.cdn-template-4s.com/media/banner/banner-5.webp" alt="banner-bottom" />
        <div className="bottom-title">
          <h1>Our Responsibility Journey</h1>
          <div className="title-text">
          The clothing industry takes a stunning toll on the environment. That doesn’t sit right with us, so we’re leading the charge towards top-to-bottom, seed-to-sew Responsibility. Join us in Protecting Wild, Forever.
          </div>
          <Button variant="contained">Xem thêm</Button>
        </div>
      </div>
      <div className="sale">
        <div className="sale-top">
          <div className="sale-top-1">
            <a href="/SanPham">
              <h3>Shirts</h3>
              <div className="sale-img">
                <img src="/images/cate-1-removebg-preview.png" alt="sale-img" />
              </div>
            </a>
          </div>
          <div className="sale-top-2">
          <a href="/SanPham">
              <h3>Bottoms</h3>
              <div className="sale-img">
                <img src="/images/cate-2-removebg-preview.png" alt="sale-img" />
              </div>
            </a>
          </div>
          <div className="sale-top-3">
          <a href="/SanPham">
              <h3>Outerwear</h3>
              <div className="sale-img">
                <img src="/images/cate-3-removebg-preview.png" alt="sale-img" />
              </div>
            </a>
          </div>
        </div>
        <div className="sale-bottom">
          <div className="sale-top-1">
            <a href="/SanPham">
              <h3>Knist</h3>
              <div className="sale-img">
                <img src="/images/cate-4-removebg-preview.png" alt="sale-img" />
              </div>
            </a>
          </div>
          <div className="sale-top-2">
          <a href="/SanPham">
              <h3>Accessories</h3>
              <div className="sale-img">
                <img src="/images/cate-5-removebg-preview.png" alt="sale-img" />
              </div>
            </a>
          </div>
          <div className="sale-top-3">
          <a href="/SanPham">
              <h3>Footwear</h3>
              <div className="sale-img">
                <img src="/images/cate-6-removebg-preview.png" alt="sale-img" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
