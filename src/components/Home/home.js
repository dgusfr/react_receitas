import React from "react";

function Home() {
  return (
    <main>
      <section>
        <h2>Receitas em Destaque</h2>
        <div className="featured-recipes">
          <div className="recipe-card">
            <h3>Bolo de Chocolate</h3>
            <p>Delicioso bolo de chocolate fácil de fazer.</p>
          </div>
          <div className="recipe-card">
            <h3>Salada de Frutas</h3>
            <p>Receita refrescante de salada de frutas variadas.</p>
          </div>
          <div className="recipe-card">
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
