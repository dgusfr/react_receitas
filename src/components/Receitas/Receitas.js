import React from "react";
import receitasData from "../../data/receitas.json";
import styles from "./receitas.module.css";

function Receitas() {
  return (
    <div className={styles.receitasContainer}>
      {receitasData.map((receita) => (
        <div key={receita.id} className={styles.recipe}>
          <img
            src={receita.imagem}
            className={styles.recipeHeroImg}
            alt={receita.titulo}
          />
          <h5>{receita.titulo}</h5>
          <p>
            Preparo: {receita.preparoTempo} | Cozimento:{" "}
            {receita.cozimentoTempo}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Receitas;
