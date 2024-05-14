import MainSite from "./Components/MainSite/MainSite";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Sources from "./Components/Sources/Sources";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Sources />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
