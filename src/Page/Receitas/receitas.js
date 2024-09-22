import React, { useEffect, useState } from "react";
import styles from "./receitas.module.css";
import receitasData from "../../data/receitas.json"; // Importa o JSON

function Receitas() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    setReceitas(receitasData); // Carrega todas as receitas do JSON
  }, []);

  return (
    <main className="page">
      <section className={styles.recipesContainer}>
        <div className={styles.tagsContainer}>
          <h4>Receitas</h4>
          <div className={styles.tagsList}>
            <a href="#carne">Carne (1)</a>
            <a href="#cafe-da-manha">Café da Manhã (2)</a>
            <a href="#cenouras">Cenouras (3)</a>
            <a href="#comida">Comida (4)</a>
          </div>
        </div>

        <div className={styles.recipesList}>
          {receitas.map((receita) => (
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
      </section>
    </main>
  );
}

export default Receitas;
