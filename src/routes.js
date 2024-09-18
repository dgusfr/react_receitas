import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/home";
import Sobre from "./Page/Sobre/sobre";
import Categorias from "./Page/Categorias/categorias";
import Receitas from "./Page/Receitas/receitas";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sobre from "./Page/Sobre/sobre";

function RoutesConfig() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Sobre />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/receitas" element={<Receitas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default RoutesConfig;
