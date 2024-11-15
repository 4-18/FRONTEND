import React from 'react';
import './style.scss';

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <div className="comment-header">
            <p className="nickname">
              {comment.nickname}
              {comment.isUser && <span className="actions"> 수정 / 삭제</span>}
            </p>
          </div>
          <p className="content">{comment.content}</p>
          <p className="date">{comment.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
