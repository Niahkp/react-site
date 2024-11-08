import React, { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import Modal from '../components/Modal';
import '../css/Lunch.css';

const LunchPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('pages/menu.json');
        const data = await response.json();
        setMenuItems(data.menuItems);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };
    fetchMenuItems();
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>

      <main>
        <h1>Lunch Menu</h1>
        <hr />
        <div className="menu-grid">
          {menuItems.map((item) => (
            <MenuItem key={item._id} item={item} onClick={() => openModal(item)} />
          ))}
        </div>
      </main>

      {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}
    </div>
  );
};

export default LunchPage;