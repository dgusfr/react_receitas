import React from "react";
import styles from "./categorias.module.css"; // Importando os estilos

function Categorias() {
  return (
    <main>
      <h2>Categorias de Receitas</h2>
      <div className={styles.categoriaList}>
        <button className={styles.categoriaItem}>Café da Manhã</button>
        <button className={styles.categoriaItem}>Almoço</button>
        <button className={styles.categoriaItem}>Jantar</button>
        <button className={styles.categoriaItem}>Sobremesas</button>
        <button className={styles.categoriaItem}>Lanches</button>
      </div>
    </main>
  );
}

export default Categorias;
