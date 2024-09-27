import React from "react";
import CategoriaButton from "../../components/CategoriaButton/CategoriaButton";
import styles from "./categorias.module.css";

function Categorias() {
  const categorias = [
    "Café da Manhã",
    "Almoço",
    "Jantar",
    "Sobremesas",
    "Lanches",
  ];

  return (
    <main>
      <h2>Categorias de Receitas</h2>
      <div className={styles.categoriaList}>
        {categorias.map((categoria) => (
          <CategoriaButton key={categoria} categoria={categoria} />
        ))}
      </div>
    </main>
  );
}

export default Categorias;
