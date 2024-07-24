import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import PublicRoute from "./route/route";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <PublicRoute />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
