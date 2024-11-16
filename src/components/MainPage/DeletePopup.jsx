import React from 'react';

const DeletePopup = ({ onClose, onConfirm }) => {
    return (
        <div className="delete-popup-overlay">
            <div className="delete-popup">
                <button className="close-button" onClick={onClose}>×</button>
                <p>레시피를 삭제하시겠습니까?</p>
                <div className="buttons">
                    <button className="confirm-button" onClick={onConfirm}>예</button>
                    <button className="cancel-button" onClick={onClose}>아니요</button>
                </div>
            </div>
        </div>
    );
};

export default DeletePopup;