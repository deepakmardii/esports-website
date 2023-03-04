import About from "./components/About";
import Contact from "./components/Contact";
import ContentCreators from "./components/ContentCreators";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Players from "./components/Players";
import Sponsors from "./components/Sponsors";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contentcreators" element={<ContentCreators />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/players" element={<Players />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
