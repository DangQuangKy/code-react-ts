import { Button } from "@mui/material";
import "./Main.scss";
import Slide from "./Slide/Slide";
import { useEffect, useState } from "react";

interface wrapper {
  id: number,
  title: string,
  image: string,
  content: string
}
function Main() {
  const getData = async () => {
    fetch('http://localhost:8000/wrappers')
      .then(res => res.json())
      .then(data => setWrappers(data))
      //   setTimeout(() => {
      //     // setLoading(false)

      //   }, 1000);
      // })
  }
//   try {
//     const res = await fetch('http://localhost:8000/data');
//     const data = await res.json();
//     console.log(data); // Kiểm tra dữ liệu trả về
//     if (Array.isArray(data.wrappers)) {
//       setWrappers(data.wrappers);
//     } else {
//       console.error('Dữ liệu không phải là mảng:', data.wrappers);
//     }
//   } catch (error) {
//     console.error('Lỗi khi lấy dữ liệu:', error);
//   }
// };
//   try {
//     const res = await fetch('http://localhost:8000/home');
//     const data = await res.json();
//     if (Array.isArray(data)) {
//       setWrappers(data);
//     } else {
//       console.error('Dữ liệu không phải là mảng:', data);
//     }
//   } catch (error) {
//     console.error('Lỗi khi lấy dữ liệu:', error);
//   }
// }
  // const [loading, setLoading] = useState(true)
  // const [message, setMessage] = useState<string>('')
  const [ wrappers , setWrappers ] = useState<wrapper[]>([])
  useEffect(() => {
    getData()
  }, [])

  // if (loading) {
  //   return <h1>Loading...</h1>
  // }
  

  return (
    <div className="main">
      <div className="wrapper">
        <Slide />
      </div>
      <div className="banner-top">
        {wrappers.map((wrapper) => (
          <div className="banner-top-left" key={wrapper.id}>
            <img src={wrapper.image} alt="banner1" />
            <div className="left-title">
              <h1>{wrapper.title}</h1>
              <div className="text">{wrapper.content}</div>
              <Button variant="contained">Mua ngay</Button>
            </div>
            {/* <div className="banner-top-right">
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
        </div> */}
          </div>
          
        ))}

      </div>
      <div className="banner-bottom">
        {/* {loading 
        ?
        <p>Loading...</p>
        :
        <p>{ message }</p>
      }
       */}

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
