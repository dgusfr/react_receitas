import React from "react";
import receitasData from "../../data/receitas.json";
import styles from "./receitas.module.css";

function Receitas() {
  return (
    <div className={styles.recipesList}>
      {receitasData.map((receita) => (
        <div key={receita.id} className={styles.recipe}>
          <img
            src={require(`../../${receita.imagem}`)}
            alt={receita.titulo}
            className={styles.recipeImg}
          />
          <h5>{receita.titulo}</h5>
          <p>Preparo: 15min | Cozimento: 5min</p>
        </div>
      ))}
    </div>
  );
}

export default Receitas;
