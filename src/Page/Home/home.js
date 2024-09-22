import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import receitasData from "../../data/receitas.json";

function Home() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    setReceitas(receitasData.slice(0, 4)); // Carrega as 4 primeiras receitas
  }, []);

  return (
    <main className="page">
      <div className={styles.banner}>
        <div className={styles.info}>
          <h1>As melhores receitas</h1>
          <p>
            Aprenda a construir os melhores pratos com receitas criadas por
            profissionais do mundo inteiro.
          </p>
        </div>
        <img
          src={require("../../assets/chef.png")}
          alt="Chef"
          className={styles.bannerImg}
        />
      </div>

      <div className={styles.maisAcessadas}>
        <h1>Mais acessadas</h1>
      </div>

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

        <div className={styles.recipesList}>
          {receitas.map((receita) => (
            <Link
              to={`/receita/${receita.id}`}
              key={receita.id}
              className={styles.recipe}
            >
              <img
                src={require(`../../${receita.imagem}`)}
                alt={receita.titulo}
                className={styles.recipeImg}
              />
              <h5>{receita.titulo}</h5>
              <p>Preparo: 15min | Cozimento: 5min</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
