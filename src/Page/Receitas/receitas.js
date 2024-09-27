import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./receitas.module.css";
import receitasData from "../../data/receitas.json";

function Receita() {
  const { id } = useParams();
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
            src={require(`../../assets/${receita.imagem.split("/").pop()}`)}
            className={`${styles.img} ${styles.recipeHeroImg}`}
            alt={receita.titulo}
          />
          <article className={styles.recipeInfo}>
            <h2>{receita.titulo}</h2>
            {/* restante do conteúdo */}
          </article>
        </section>
      </div>
    </main>
  );
}

export default Receita;
