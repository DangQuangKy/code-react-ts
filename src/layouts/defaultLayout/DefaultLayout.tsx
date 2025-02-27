
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="App">
      <Header />
      <main>
         <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
