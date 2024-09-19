import React from "react";
import { Link } from "react-router-dom";
import styles from "./error.module.css";

function ErrorPage() {
  return (
    <main className={`page ${styles.errorPage}`}>
      <section>
        <h1>404</h1>
        <h3>Página não encontrada</h3>
        <Link to="/" className="btn">
          Voltar ao Início
        </Link>
      </section>
    </main>
  );
}

export default ErrorPage;
