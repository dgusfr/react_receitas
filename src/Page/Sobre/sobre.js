import React from "react";
import { Link } from "react-router-dom";
import styles from "./sobre.module.css";

function Sobre() {
  return (
    <main className={styles.page}>
      <section className={styles.aboutPage}>
        <article>
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            quibusdam nulla, beatae officia excepturi temporibus, saepe
            laboriosam odit libero impedit atque adipisci nemo consequuntur cum
            earum laudantium? Voluptas, cupiditate. Atque.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ab.
            Exercitationem harum, debitis est soluta consequuntur dolores
            explicabo corporis architecto facilis magni aut nemo at alias, quos
            eius consequatur ducimus.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ab.
            Exercitationem harum, debitis est soluta consequuntur dolores
            explicabo corporis architecto facilis magni aut nemo at alias, quos
            eius consequatur ducimus.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ab.
            Exercitationem harum, debitis est soluta consequuntur dolores
            explicabo corporis architecto facilis magni aut nemo at alias, quos
            eius consequatur ducimus.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ab.
            Exercitationem harum, debitis est soluta consequuntur dolores
            explicabo corporis architecto facilis magni aut nemo at alias, quos
            eius consequatur ducimus.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ab.
            Exercitationem harum, debitis est soluta consequuntur dolores
            explicabo corporis architecto facilis magni aut nemo at alias, quos
            eius consequatur ducimus.
          </p>
        </article>
        <img
          src={require("../../assets/about.jpeg")}
          alt="Pessoa Colocando Sal na Tigela"
          className={`${styles.img} ${styles.aboutImg}`}
        />
      </section>
      <section className={styles.featuredRecipes}>
        <h5 className={styles.featuredTitle}>Veja mais Maravilhas!</h5>
        <div className={styles.recipesList}>
          <Link to="/receita/1" className={styles.recipe}>
            <img
              src={require("../../assets/recipes/recipe-1.jpeg")}
              className={styles.recipeImg}
              alt="Carne Asada"
            />
            <h5>Carne Asada</h5>
            <p>Preparo: 15min | Cozimento: 5min</p>
          </Link>
          <Link to="/receita/2" className={styles.recipe}>
            <img
              src={require("../../assets/recipes/recipe-2.jpeg")}
              className={styles.recipeImg}
              alt="Costelas Gregas"
            />
            <h5>Costelas Gregas</h5>
            <p>Preparo: 15min | Cozimento: 5min</p>
          </Link>
          <Link to="/receita/3" className={styles.recipe}>
            <img
              src={require("../../assets/recipes/recipe-3.jpeg")}
              className={styles.recipeImg}
              alt="Sopa de Legumes"
            />
            <h5>Sopa de Legumes</h5>
            <p>Preparo: 15min | Cozimento: 5min</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Sobre;
