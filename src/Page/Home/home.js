import React from "react";
import styles from "./home.module.css"; // Importa os estilos

function Home() {
  return (
    <main>
      <section>
        <h2>Receitas em Destaque</h2>
        <div className={styles.featuredRecipes}>
          <div className={styles.recipeCard}>
            <h3>Bolo de Chocolate</h3>
            <p>Delicioso bolo de chocolate fácil de fazer.</p>
          </div>
          <div className={styles.recipeCard}>
            <h3>Salada de Frutas</h3>
            <p>Receita refrescante de salada de frutas variadas.</p>
          </div>
          <div className={styles.recipeCard}>
            <h3>Macarrão Carbonara</h3>
            <p>Clássica receita italiana para seu jantar.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Encontre sua Receita</h2>
        <input type="text" placeholder="Pesquise receitas..." />
      </section>
    </main>
  );
}

export default Home;
