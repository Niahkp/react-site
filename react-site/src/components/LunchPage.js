import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "../components/MenuItem";
import AddMenuItem from "./AddMenuItem"; 
import "../css/Lunch.css";

const LunchPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  useEffect(() => {
    (async () => {
      // const response = await axios.get("http://localhost:3000/api/house_plans");
      const response = await axios.get("https://render-site-viib.onrender.com/api/house_plans");

      setMenuItems(response.data);
    })();
  }, []);

  const openAddDialog = () => {
    setShowAddDialog(true);
  };

  const closeAddDialog = () => {
    setShowAddDialog(false);
  };

  const updateMenuItems = (newItem) => {
    setMenuItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="lunch-page">
      <h1>Lunch Menu</h1>
      <button id="add-menu-item" onClick={openAddDialog}>Add Menu Item</button>
      {showAddDialog && (
        <AddMenuItem
          closeDialog={closeAddDialog}
          showNewItem={updateMenuItems}
        />
      )}
      <hr />
      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LunchPage;
