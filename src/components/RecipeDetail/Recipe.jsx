import React from 'react';

const Recipe = ({ steps }) => {
  return (
    <div className="recipe">
      <div className="recipe-header">
        <h3>🍳 레시피</h3>
      </div>
      <div className="recipe-steps">
        {steps.map((step, index) => (
          <div key={index} className="recipe-step">
            {index + 1}. {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;