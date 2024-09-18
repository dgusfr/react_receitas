import React from "react";
import { Link } from "react-router-dom";
import styles from "./receita.module.css";

function Receita() {
  return (
    <main className="page">
      <div className={styles.recipePage}>
        <section className={styles.recipeHero}>
          <img
            src={require("../../assets/recipes/recipe-4.jpeg")}
            className={`${styles.img} ${styles.recipeHeroImg}`}
            alt="Panquecas de Banana"
          />
          <article className={styles.recipeInfo}>
            <h2>Panquecas de Banana</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              ducimus, molestias vitae doloribus dignissimos sunt reprehenderit
              hic natus possimus exercitationem! Cumque, saepe eos. Voluptatibus
              facilis soluta eligendi repellendus consequatur voluptatem?
            </p>
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
              Tags:
              <Link to="/tag/carne">carne</Link>
              <Link to="/tag/cafe-da-manha">café da manhã</Link>
              <Link to="/tag/panquecas">panquecas</Link>
              <Link to="/tag/comida">comida</Link>
            </p>
          </article>
        </section>

        <section className={styles.recipeContent}>
          <article>
            <h4>instruções</h4>
            <div className={styles.singleInstruction}>
              <header>
                <p>passo 1</p>
                <div></div>
              </header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                repellat, eum aliquid esse quam eos blanditiis accusamus.
              </p>
            </div>

            <div className={styles.singleInstruction}>
              <header>
                <p>passo 2</p>
                <div></div>
              </header>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti tempora dolore sapiente unde eum molestias nobis.
              </p>
            </div>

            <div className={styles.singleInstruction}>
              <header>
                <p>passo 3</p>
                <div></div>
              </header>
              <p>
                Polaroid iPhone bitters chambray. Cornhole swag kombucha
                live-edge.
              </p>
            </div>
          </article>

          <article className={styles.secondColumn}>
            <div>
              <h4>ingredientes</h4>
              <p className={styles.singleIngredient}>
                1 1/2 xícaras de mistura seca para panquecas
              </p>
              <p className={styles.singleIngredient}>
                1/2 xícara de farinha de linhaça
              </p>
              <p className={styles.singleIngredient}>
                1 xícara de leite desnatado
              </p>
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
