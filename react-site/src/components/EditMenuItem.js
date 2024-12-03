import React, { useState } from "react";

const EditMenuItem = (props) => {
  const [inputs, setInputs] = useState({
    _id: props._id,
    name: props.name,
    description: props.description,
    price: props.price,
    prev_img: props.img_name,
  });
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleImageChange = (event) => {
    const { name, files } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: files[0] }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Waiting for server response...");

    const formData = new FormData(event.target);
    console.log(...formData);
      const response = await fetch(`https://render-site-viib.onrender.com/api/house_plans/${props._id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.status === 200) {
        setResult("Menu item successfully updated!");
        event.target.reset();
        props.updatedItem = (await response.json());
        props.closeDialog();
      } else {
        setResult("Error updating menu item.");
      }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="edit-menu-item-form" onSubmit={onSubmit}>
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

            <section className="columns">
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  src={
                    inputs.img
                      ? URL.createObjectURL(inputs.img)
                      : inputs.prev_img
                      ? `https://render-site-viib.onrender.com/${inputs.prev_img}`
                      : ""
                  }
                  alt=""
                />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </p>
            </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMenuItem;