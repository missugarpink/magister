import MainSite from "./Components/MainSite/MainSite";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Sources from "./Components/Sources/Sources";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/protein" element={<Sources macro="protein" />} />
          <Route path="/fat" element={<Sources macro="fat" />} />
          <Route
            path="/carbohydrates"
            element={<Sources macro="carbohydrates" />}
          />
          <Route path="/product/:name" element={<ProductDetail />} />
          <Route path="/" element={<MainSite />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
