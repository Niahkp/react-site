const MenuItem = ({ item, onEdit, onDelete }) => {
  const handleEditClick = (e) => {
    e.stopPropagation();
    onEdit();
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(item);
  };

  return (
    <div className="menu-item">
      <img src={item.img_name} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};
export default MenuItem;