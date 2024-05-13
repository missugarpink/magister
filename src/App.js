import MainSite from "./Components/MainSite/MainSite";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <MainSite />
      </div>
      <Footer />
    </div>
  );
}

export default App;
