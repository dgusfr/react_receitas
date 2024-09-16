import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navHeader}>
        <Link to="/" className={styles.navLogo}>
          <img src={require("../../assets/logo.png")} alt="Receitas da Sonia" />
        </Link>
        <button className={styles.navBtn} onClick={toggleMenu}>
          <i className="fas fa-align-justify"></i>
        </button>
      </div>
      <div className={`${styles.navLinks} ${isOpen ? styles.showLinks : ""}`}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/about" className={styles.navLink}>
          Sobre
        </Link>
        <Link to="/categorias" className={styles.navLink}>
          Categorias
        </Link>
        {/* Adicionando o link para a página Receitas */}
        <Link to="/receitas" className={styles.navLink}>
          Receitas
        </Link>
        <Link
          to="/contact"
          className={`${styles.navLink} ${styles.contactLink}`}
        >
          Contato
        </Link>
      </div>
    </nav>
  );
}

export default Header;
