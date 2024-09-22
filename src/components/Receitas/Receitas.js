import React from "react";
import Receita from "../../Page/Receita/receita"; // Importação corrigida
import receitasData from "../../data/receitas.json"; // Caminho do JSON corrigido
import styles from "./receitas.module.css"; // Importação do CSS corrigida

function Receitas() {
  return (
    <section className={styles.recipesContainer}>
      <div className={styles.tagsContainer}>
        <h4>Receitas</h4>
        <div className={styles.tagsList}>
          {receitasData.map((receita) => (
            <a href={`/receita/${receita.id}`} key={receita.id}>
              {receita.titulo}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.recipesList}>
        {receitasData.map((receita) => (
          <Receita key={receita.id} receita={receita} />
        ))}
      </div>
    </section>
  );
}

export default Receitas;
