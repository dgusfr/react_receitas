import React, { useEffect, useState } from "react";
import Receita from "../../Components/Receita/Receita";
import styles from "./receitas.module.css";
import receitasData from "../../data/receitas.json";

function Receitas() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    setReceitas(receitasData);
  }, []);

  return (
    <div className={styles.receitasContainer}>
      {receitas.map((receita) => (
        <Receita
          key={receita.id}
          ttl={receita.titulo}
          img={receita.imagem}
          ing={receita.ingredientes}
          prep={receita.preparo}
        />
      ))}
    </div>
  );
}

export default Receitas;
