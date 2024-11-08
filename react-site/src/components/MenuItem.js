import React from 'react';

const MenuItem = ({ item, onClick }) => {
  return (
    <div className="menu-item" onClick={onClick}>
      <img src={item.img_name} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
};

export default MenuItem;