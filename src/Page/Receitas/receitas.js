import React from "react";
import { Link } from "react-router-dom";
import styles from "./receitas.module.css";

function Receitas() {
  return (
    <main className="page">
      <section className={styles.recipesContainer}>
        {/* Tag Container */}
        <div className={styles.tagsContainer}>
          <h4>Receitas</h4>
          <div className={styles.tagsList}>
            <Link to="/categorias/carne">Carne (1)</Link>
            <Link to="/categorias/cafe-da-manha">Café da Manhã (2)</Link>
            <Link to="/categorias/cenouras">Cenouras (3)</Link>
            <Link to="/categorias/comida">Comida (4)</Link>
          </div>
        </div>

        {/* Lista de Receitas */}
        <div className={styles.recipesList}>
          <Link to="/receita/1" className={styles.recipe}>
            <img
              src={require("../../assets/recipes/recipe-1.jpeg")}
              className={`${styles.img} ${styles.recipeImg}`}
              alt="Carne Asada"
            />
            <h5>Carne Asada</h5>
            <p>Preparo: 15min | Cozimento: 5min</p>
          </Link>
          <Link to="/receita/2" className={styles.recipe}>
            <img
              src={require("../../assets/recipes/recipe-2.jpeg")}
              className={`${styles.img} ${styles.recipeImg}`}
              alt="Costelas Gregas"
            />
            <h5>Costelas Gregas</h5>
            <p>Preparo: 15min | Cozimento: 5min</p>
          </Link>
          <Link to="/receita/3" className={styles.recipe}>
            <img
              src={require("../../assets/recipes/recipe-3.jpeg")}
              className={`${styles.img} ${styles.recipeImg}`}
              alt="Sopa de Legumes"
            />
            <h5>Sopa de Legumes</h5>
            <p>Preparo: 15min | Cozimento: 5min</p>
          </Link>
          <Link to="/receita/4" className={styles.recipe}>
            <img
              src={require("../../assets/recipes/recipe-4.jpeg")}
              className={`${styles.img} ${styles.recipeImg}`}
              alt="Panquecas de Banana"
            />
            <h5>Panquecas de Banana</h5>
            <p>Preparo: 15min | Cozimento: 5min</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Receitas;
