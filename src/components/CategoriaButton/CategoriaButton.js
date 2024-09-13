import React from "react";
import styles from "./CategoriaButton.module.css"; // Importa os estilos

function CategoriaButton({ categoria }) {
  return <button className={styles.categoriaItem}>{categoria}</button>;
}

export default CategoriaButton;
