import React, { useRef } from 'react';
import IngredientItem from './IngredientItem';
import './style.scss';

const IngredientsList = ({ ingredients }) => {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  return (
    <div className="ingredients-list">
      <div className="scrollable-box-wrapper">
        <button onClick={scrollLeft} className="scroll-button left-button">&#8249;</button>
        <div className="scrollable-box" ref={scrollContainerRef} style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory' }}>
          {ingredients.map((ingredient, index) => (
            <IngredientItem key={index} ingredient={ingredient} />
          ))}
        </div>
        <button onClick={scrollRight} className="scroll-button right-button">&#8250;</button>
      </div>
    </div>
  );
};

export default IngredientsList;