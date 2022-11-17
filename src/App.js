import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Service from "./components/pages/Services";
import Facebook from "./components/pages/Facebook";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="contact" element={<Contact/>} exact />
          <Route path="services" element={<Service/>} exact />
          <Route path="facebook" element={<Facebook/>} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
