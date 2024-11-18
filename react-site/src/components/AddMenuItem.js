import React, { useState } from "react";

const AddMenuItem = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values)=>({...values,[name]:value}));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Submitting...");

    const formData = new FormData(event.target);
    console.log(...formData);
    
    //const response = await fetch("http://localhost:3000/api/house_plans"),{
    const response = await fetch("https://render-site-viib.onrender.com/api/house_plans", {
        method: "POST",
        body: formData
      });

    if(response.status == 200){
       const newItem = await response.json();
        setResult("New item successfully added!");
        //props.showNewItem(await response.json());
        props.showNewItem(newItem);
        event.target.reset();
        props.closeDialog();
      } else{
        setResult("Error adding item.");
      }

  };

  return (
    <div id="add-dialog" className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={props.closeDialog}>
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
            <section className="columns">
              <p id="img-prev-section">
                <img id="img-prev" alt="" src={inputs.img != null ? URL.createObjectURL(inputs.img) : ""}/>
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input type="file" id="img" name="img" accept="image/*" onChange={handleImageChange}/>
              </p>
            </section>

          <button type="submit">Submit</button>
          <p>{result}</p>
        </form>
      </div>
    </div>
  );
};

export default AddMenuItem;