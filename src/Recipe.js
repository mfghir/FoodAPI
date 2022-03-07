import style from "./recipe.module.css"

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <section className={style.recipe}>
      <h1>{title}</h1>
      <ol>
      <h3>Ingredient :</h3>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories : <span>{calories}</span></p>
      <figure><img src={image} alt="food" /></figure>
    </section>
  );
};

export default Recipe;
