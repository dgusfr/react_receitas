import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./receita.module.css";
import receitasData from "../../data/receitas.json"; // Importa o JSON

function Receita() {
  const { id } = useParams(); // Pega o ID da URL
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    const foundReceita = receitasData.find((item) => item.id === parseInt(id));
    setReceita(foundReceita);
  }, [id]);

  if (!receita) {
    return <h1>Receita não encontrada</h1>;
  }

  return (
    <main className="page">
      <div className={styles.recipePage}>
        <section className={styles.recipeHero}>
          <img
            src={require(`../../${receita.imagem}`)}
            className={`${styles.img} ${styles.recipeHeroImg}`}
            alt={receita.titulo}
          />
          <article className={styles.recipeInfo}>
            <h2>{receita.titulo}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className={styles.recipeIcons}>
              <article>
                <i className="fas fa-clock"></i>
                <h5>tempo de preparo</h5>
                <p>30 min.</p>
              </article>
              <article>
                <i className="far fa-clock"></i>
                <h5>tempo de cozimento</h5>
                <p>15 min.</p>
              </article>
              <article>
                <i className="fas fa-user-friends"></i>
                <h5>porções</h5>
                <p>6 porções</p>
              </article>
            </div>
            <p className={styles.recipeTags}>
              Tags : <a href="/#">carne</a>
              <a href="/#">café da manhã</a>
              <a href="/#">panquecas</a>
              <a href="/#">comida</a>
            </p>
          </article>
        </section>
        <section className={styles.recipeContent}>
          <article>
            <h4>instruções</h4>
            {receita.preparo.map((step, index) => (
              <div key={index} className={styles.singleInstruction}>
                <header>
                  <p>passo {index + 1}</p>
                  <div></div>
                </header>
                <p>{step}</p>
              </div>
            ))}
          </article>
          <article className={styles.secondColumn}>
            <div>
              <h4>ingredientes</h4>
              {receita.ingredientes.map((ingrediente, index) => (
                <p key={index} className={styles.singleIngredient}>
                  {ingrediente}
                </p>
              ))}
            </div>
            <div>
              <h4>ferramentas</h4>
              <p className={styles.singleTool}>Batedor de Mão</p>
              <p className={styles.singleTool}>
                Panela Grande Pesada Com Tampa
              </p>
              <p className={styles.singleTool}>Colheres de Medida</p>
              <p className={styles.singleTool}>Copos de Medida</p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

export default Receita;
