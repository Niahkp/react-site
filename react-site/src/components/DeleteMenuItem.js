import React, { useState } from "react";

//do we know if delete or efit works locally and or globally on here???
const DeleteMenuItem = ({ item, closeDialog, onDelete }) => {
    const [result, setResult] = useState("");
  
    const deleteMenuItem = async (id) => {
        const response = await fetch(`https://render-site-viib.onrender.com/${item._id}`, {
          method: "DELETE",
        });
  
        if (response.status === 200) {
          setResult("Menu item successfully deleted!");
          onDelete(id); 
          closeDialog();
        } else {
          setResult("Error deleting menu item.");
        }
    }; 
  
    return (
      <div id="delete-dialog" className="w3-modal">
        <div className="w3-modal-content">
          <div className="w3-container">
            <span
              id="dialog-close"
              className="w3-button w3-display-topright"
              onClick={closeDialog}
            >
              &times;
            </span>
            <div id="delete-content">
              <h3>Are you sure you want to delete {item.name}?</h3>
              <section>
                <button onClick={closeDialog}>No</button>
                <button onClick={deleteMenuItem}>Yes</button>
              </section>
              <span>{result}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DeleteMenuItem;
