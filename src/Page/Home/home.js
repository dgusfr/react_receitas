import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

import chefImage from "../../assets/chef.png";
import recipe1Image from "../../assets/recipes/recipe-1.jpeg";
import recipe2Image from "../../assets/recipes/recipe-2.jpeg";
import recipe3Image from "../../assets/recipes/recipe-3.jpeg";
import recipe4Image from "../../assets/recipes/recipe-4.jpeg";

function Home() {
  return (
    <main className="page">
      {/* Banner */}
      <div className={styles.banner}>
        <div className={styles.info}>
          <h1>As melhores receitas</h1>
          <p>
            Aprenda a construir os melhores pratos com receitas criadas por
            profissionais do mundo inteiro.
          </p>
        </div>
        <img src={chefImage} alt="Chef" className={styles.bannerImg} />
      </div>

      {/* Mais Acessadas */}
      <div className={styles.maisAcessadas}>
        <h1>Mais acessadas</h1>
      </div>

      {/* Tags de Receitas */}
      <section className={styles.recipesContainer}>
        <div className={styles.tagsContainer}>
          <h4>receitas</h4>
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
              src={recipe1Image}
              alt="Carne Assada"
              className={styles.recipeImg}
            />
            <h5>Carne Assada</h5>
            <p>Preparo: 15min | Cozimento: 5min</p>
          </Link>
          <Link to="/receita/2" className={styles.recipe}>
            <img
              src={recipe2Image}
              alt="Costela"
              className={styles.recipeImg}
            />
            <h5>Costela</h5>
            <p>Preparo: 15min | Cozimento: 5min</p>
          </Link>
          <Link to="/receita/3" className={styles.recipe}>
            <img
              src={recipe3Image}
              alt="Sopa de Vegetais"
              className={styles.recipeImg}
            />
            <h5>Sopa de Vegetais</h5>
            <p>Preparo: 15min | Cozimento: 5min</p>
          </Link>
          <Link to="/receita/4" className={styles.recipe}>
            <img
              src={recipe4Image}
              alt="Panqueca de Banana"
              className={styles.recipeImg}
            />
            <h5>Panqueca de Banana</h5>
            <p>Preparo: 15min | Cozimento: 5min</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
