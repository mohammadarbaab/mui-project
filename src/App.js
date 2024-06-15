import { Home } from "@mui/icons-material";
import Layout from "./components/layouts/Layout";
import { Route,Routes,Router } from "react-router-dom";
import Contact from './pages/Contact'
import About from "./pages/About";
import Menu from './pages/Menu';

// import {Typography} from '@mui/material
function App() {
  return (
    <div>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
