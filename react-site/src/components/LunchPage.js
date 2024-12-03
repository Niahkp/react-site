
import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "../components/MenuItem";
import AddMenuItem from "./AddMenuItem";
import EditMenuItem from "./EditMenuItem";
import DeleteMenuItem from "./DeleteMenuItem";
import "../css/Lunch.css";

const LunchPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        // await axios.delete(`https://render-site-viib.onrender.com/api/house_plans/${id}`);
        const response = await axios.get("https://render-site-viib.onrender.com/api/house_plans");
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    })();
  }, []);


  const openAddDialog = () => setShowAddDialog(true);
  const closeAddDialog = () => setShowAddDialog(false);
  const updateMenuItems = (newItem) => setMenuItems((prevItems) => [...prevItems, newItem]);

  const openEditDialog = (item) => setShowEditDialog(item);
  const closeEditDialog = () => setShowEditDialog(null);
  const handleEdit = (updatedItem) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) => (item._id === updatedItem._id ? updatedItem : item))
    );
    setMessage("Item successfully updated!");
    closeEditDialog();
  };

  const openDeleteDialog = (item) => setShowDeleteDialog(item);
  const closeDeleteDialog = () => setShowDeleteDialog(null);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://render-site-viib.onrender.com/api/house_plans/${id}`);
      setMenuItems((prevItems) => prevItems.filter((item) => item._id !== id));
      setMessage("Item successfully deleted!");
      closeDeleteDialog();
    } catch (error) {
      setMessage("Error deleting item.");
    }
  };

  return (
    <div className="lunch-page">
      <h1>Lunch Menu</h1>

      <button id="add-menu-item" onClick={openAddDialog}>
        Add Menu Item
      </button>
      {showAddDialog && (
        <AddMenuItem
          closeDialog={closeAddDialog}
          showNewItem={updateMenuItems}
        />
      )}

      {showEditDialog && (
        <EditMenuItem
          closeDialog={closeEditDialog}
          item={showEditDialog}
          onUpdate={handleEdit}
        />
      )}

      {showDeleteDialog && (
        <DeleteMenuItem
          closeDialog={closeDeleteDialog}
          item={showDeleteDialog}
          onDelete={() => handleDelete(showDeleteDialog._id)}
        />
      )}

      {message && <p className="message">{message}</p>}

      <hr />

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuItem
            key={item._id}
            item={item}
            onEdit={() => openEditDialog(item)}
            onDelete={() => openDeleteDialog(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default LunchPage;