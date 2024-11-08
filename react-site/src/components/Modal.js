import React from 'react';

const Modal = ({ item, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{item.name}</h2>
        <img src={item.img_name} alt={item.name} />
        <p>{item.description}</p>
        <p><strong>Price:</strong> {item.price}</p>
        {item.options.length > 0 && (
          <p><strong>Options:</strong> {item.options.join(', ')}</p>
        )}
      </div>
    </div>
  );
};

export default Modal;