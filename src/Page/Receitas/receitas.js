import React from "react";
import Receitas from "../../components/Receitas/Receitas";
import Footer from "../../components/Footer/Footer";
import styles from "./receitas.module.css";

function ReceitasPage() {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.page}>
        <Receitas />
      </main>
    </div>
  );
}

export default ReceitasPage;
