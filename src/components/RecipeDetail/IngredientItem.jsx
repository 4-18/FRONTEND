import React from 'react';
import '../RecipeDetail/style.scss';

const IngredientItem = ({ ingredient }) => {
  return (
    <div className="ingredient-item">
      <div className="ingredient-name">{ingredient.name}</div>
      <div className="ingredient-price">{ingredient.price}원</div>
    </div>
  );
};

export default IngredientItem;