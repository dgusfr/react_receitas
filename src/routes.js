import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/home";
import Sobre from "./Page/Sobre/sobre";
import Categorias from "./Page/Categorias/categorias";
import Receitas from "./Page/Receitas/receitas";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";

function RoutesConfig() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/receitas" element={<Receitas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default RoutesConfig;
