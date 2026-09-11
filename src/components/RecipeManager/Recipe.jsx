export default function Recipe({ recipe, onDelete }) {
  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <p>
        <strong>Description:</strong> {recipe.description}
      </p>
      <p>
        <strong>Cuisine:</strong> {recipe.cuisine} |{" "}
        <strong>Difficulty:</strong> {recipe.difficulty}
      </p>
      <p>
        <strong>Cook Time:</strong> {recipe.cookTime} mins |{" "}
        <strong>Servings:</strong> {recipe.servings}
      </p>
      <p>
        <strong>Allergens:</strong> {recipe.allergens}
      </p>
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients}
      </p>
      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
