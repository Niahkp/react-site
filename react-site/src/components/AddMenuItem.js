import React, { useState } from "react";

const AddMenuItem = ({ closeDialog, showNewItem }) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Submitting...");

    try {
      const response = await fetch("https://render-site-viib.onrender.com/api/menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      if (response.ok) {
        const newItem = await response.json();
        setResult("Menu item successfully added!");
        showNewItem(newItem);
        event.target.reset();
        closeDialog();
      } else {
        setResult("Error adding menu item.");
      }
    } catch (error) {
      setResult("Error connecting to the server.");
    }
  };

  return (
    <div id="add-dialog" className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={closeDialog}>
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <h2>Add Menu Item</h2>
          <p>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={inputs.description || ""}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={inputs.price || ""}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="img">Upload Image:</label>
            <input
              type="file"
              id="img"
              name="img"
              value={inputs.img || ""}
              onChange={handleChange}
              required
            />
          </p>

          <button type="submit">Submit</button>
          <p>{result}</p>
        </form>
      </div>
    </div>
  );
};

export default AddMenuItem;
