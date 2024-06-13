import MainSite from "./Components/MainSite/MainSite";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Sources from "./Components/Sources/Sources";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Calculator from "./Components/Calculator/Calculator";
import Pal from "./Components/Pal/Pal";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/protein" element={<Sources macro="protein" />} />
          <Route path="/fat" element={<Sources macro="fat" />} />
          <Route
            path="/carbohydrates"
            element={<Sources macro="carbohydrates" />}
          />
          <Route path="/product/:name" element={<ProductDetail />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/pal" element={<Pal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<MainSite />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
