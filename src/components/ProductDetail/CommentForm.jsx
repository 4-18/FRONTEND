import React, { useState } from 'react';
import './style.scss';

const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      nickname: 'currentUser',
      content: comment,
      date: new Date().toISOString().split('T')[0],
    };
    onSubmit(newComment);
    setComment('');
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글을 남겨보세요"
        className="comment-input"
      />
      <button type="submit" className="submit-button">
      <div class="circle-arrow">⬆️</div>
      </button>
    </form>
  );
};

export default CommentForm;