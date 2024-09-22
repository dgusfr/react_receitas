import React from "react";
import Recita from "../../Components/Receitas/Receitas";
import receitasData from "../../data/receitas.json";
import styles from "./receitas.module.css";

function Receitas() {
  return (
    <section className={styles.recipesContainer}>
      <div className={styles.recipesList}>
        {receitasData.map((receita) => (
          <Recita key={receita.id} receita={receita} />
        ))}
      </div>
    </section>
  );
}

export default Receitas;
