import React, { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import '../css/Lunch.css';
import axios from "axios";

const LunchPage = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3002/api/lunch_menu");
      setMenuItems(response.data);
    })();

  
  }, [])

  return (
    <div>

      <main>
        <h1>Lunch Menu</h1>
        <hr />
        <div className="menu-grid">
          {menuItems.map((item) => (
            <MenuItem key={item._id} item={item}  />
          ))}
        </div>
      </main>
    </div>
  );
};

export default LunchPage;