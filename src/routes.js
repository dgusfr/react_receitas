import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/home";
import Receitas from "./Page/Receitas/receitas";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receitas" element={<Receitas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
