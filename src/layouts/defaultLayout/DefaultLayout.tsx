
import { Routes } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import PublicRoute from "../../route/route";

const DefaultLayout = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
         {PublicRoute}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
