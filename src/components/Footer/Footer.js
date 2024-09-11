import React from "react";
import styles from "./footer.module.css"; // Importa os estilos

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Receitas da Sonia. Todos os direitos reservados.</p>
      <ul className={styles.footerLinks}>
        <li>
          <a href="#">Política de Privacidade</a>
        </li>
        <li>
          <a href="#">Termos de Serviço</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
