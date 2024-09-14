import React from "react";
import { useParams } from "react-router-dom";
import styles from "./receita.module.css";
import receitasData from "../../data/receitas.json";

function Receita() {
  const { id } = useParams();
  const receita = receitasData.find((rec) => rec.id === parseInt(id));

  if (!receita) {
    return <h2>Receita não encontrada!</h2>;
  }

  return (
    <div className={styles.receitaContainer}>
      <h2 className={styles.receitaTitulo}>{receita.titulo}</h2>
      <img
        src={receita.imagem}
        alt={receita.titulo}
        className={styles.receitaImagem}
      />
      <h3>Ingredientes</h3>
      <ul>
        {receita.ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
      <h3>Modo de Preparo</h3>
      <ol>
        {receita.preparo.map((passo, index) => (
          <li key={index}>{passo}</li>
        ))}
      </ol>
    </div>
  );
}

export default Receita;
