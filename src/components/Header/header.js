import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css"; // Importa os estilos

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/categorias" className={styles.navLink}>
              Categorias
            </Link>
          </li>
          <li>
            <Link to="/login" className={styles.navLink}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
