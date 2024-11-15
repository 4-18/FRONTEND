import React from 'react';
import './style.scss';

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <p className="nickname">{comment.nickname}</p>
          <p className="content">{comment.content}</p>
          <p className="date">{comment.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;