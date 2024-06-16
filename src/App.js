
// import Layout from "./components/layouts/Layout";
import { Route, Routes, Router } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Menu from "./pages/Menu";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import './index.css'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
