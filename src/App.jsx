import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navigation/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Home />
      <Footer />
    </div>
  );
};

export default App;
