import { useState } from "react";
import Recipe from "./Recipe";
import "./RecipeManager.css";

export default function RecipeManager() {
  const [recipes, setRecipes] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cuisine: "",
    difficulty: "Easy",
    cookTime: "",
    servings: "",
    allergens: "",
    ingredients: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes((prev) => [...prev, formData]);
    setFormData({
      name: "",
      description: "",
      cuisine: "",
      difficulty: "Easy",
      cookTime: "",
      servings: "",
      allergens: "",
      ingredients: "",
    });
  };

  const handleDelete = (indexToDelete) => {
    setRecipes((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="recipe-container">
      <h2>Recipe Manager</h2>
      <form className="recipe-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine"
          value={formData.cuisine}
          onChange={handleChange}
          required
        />
        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <input
          type="number"
          name="cookTime"
          placeholder="Cook Time (minutes)"
          value={formData.cookTime}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="servings"
          placeholder="Servings"
          value={formData.servings}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="allergens"
          placeholder="Allergens"
          value={formData.allergens}
          onChange={handleChange}
          required
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
        <button className="submit-btn" type="submit">
          Add Recipe
        </button>
      </form>

      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            recipe={recipe}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}
