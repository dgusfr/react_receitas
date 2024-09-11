import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import correto
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Page/Home/home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
