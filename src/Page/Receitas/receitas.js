import React from "react";
import Receitas from "../../components/Receitas/Receitas";
import styles from "./receitas.module.css";

function ReceitasPage() {
  return (
    <main className={styles.page}>
      <Receitas />
    </main>
  );
}

export default ReceitasPage;
