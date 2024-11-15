import React, { useState } from 'react';
import './style.scss';

const ActionButtons = ({ onCombo }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };

  return (
    <div className="action-buttons">
      <button onClick={onCombo} className="combo-button">
        꿀조합 만들러가기 <span>→</span>
      </button>
      <button onClick={handleLikeClick} className="like-button">
        <span className="like-icon">{isLiked ? '♥' : '♡'}</span>
        <span className="like-count">{likeCount}</span>
      </button>
    </div>
  );
};

export default ActionButtons;