import '../css/Dinner.css'
const Dinner = () => {
    return (

        <main>
        <h1>Dinner Menu</h1>
        <hr />
        <div className="menu-grid">
        
        
          <div className="menu-item">
            <img src="images/burger.jpeg" alt="Bacon Cheeseburger" />
            <h2>Bacon Cheeseburger</h2>
            <p>Delicious burger topped with bacon, lettuce, cheese, tomato, ketchup, mustard, and mayo.</p>
          </div>
          <div className="menu-item">
            <img src="images/mushburger.jpeg" alt="Mushroom Cheeseburger" />
            <h2>Mushroom Cheeseburger</h2>
            <p>Delicious burger topped with mushrooms, lettuce, cheese, tomato, ketchup, mustard, and mayo.</p>
          </div>
          <div className="menu-item">
            <img src="images/chilliburg.jpeg" alt="Chilli Cheeseburger" />
            <h2>Chilli Cheeseburger</h2>
            <p>Delicious burger topped with homemade chilli, lettuce, cheese, tomato, ketchup, mustard, and mayo.</p>
          </div>
          <div className="menu-item">
            <img src="images/ogburg.jpeg" alt="Original Cheeseburger" />
            <h2>Original Cheeseburger</h2>
            <p>Original cheeseburger topped with lettuce, cheese, tomato, ketchup, mustard, and mayo.</p>
          </div>

          
          <div className="menu-item">
            <img src="images/hushpup.jpeg" alt="Hush Puppies" />
            <h2>Hush Puppies</h2>
            <p>Deliciously fried hush puppies with your choice of dipping sauce.</p>
          </div>
          <div className="menu-item">
            <img src="images/fries.jpeg" alt="French Fries" />
            <h2>French Fries</h2>
            <p>Classic french fries served with your choice of dipping sauce.</p>
          </div>
          <div className="menu-item">
            <img src="images/onionring.jpeg" alt="Onion Rings" />
            <h2>Onion Rings</h2>
            <p>Fried onion rings served with your choice of dipping sauce.</p>
          </div>
          <div className="menu-item">
            <img src="images/coleslaw.jpeg" alt="Coleslaw" />
            <h2>Coleslaw</h2>
            <p>Fresh homemade coleslaw.</p>
          </div>

          
          <div className="menu-item">
            <img src="images/red-velvet copy.jpg" alt="Red Velvet Cake" />
            <h2>Red Velvet Cake</h2>
            <p>Homemade delicious, moist red velvet cake with cream cheese icing.</p>
          </div>
          <div className="menu-item">
            <img src="images/shake.jpg" alt="Milkshake" />
            <h2>Milkshake</h2>
            <p>Milkshake with your choice of flavor.</p>
          </div>
          <div className="menu-item">
            <img src="images/cobbler.jpeg" alt="Peach Cobbler" />
            <h2>Peach Cobbler</h2>
            <p>Homemade southern peach cobbler, with fresh peaches.</p>
          </div>
          <div className="menu-item">
            <img src="images/cheesecke.jpeg" alt="Cheesecake" />
            <h2>Cheesecake</h2>
            <p>Delightful fresh cheesecake.</p>
          </div>

          {/* Beverages */}
          <div className="menu-item">
            <img src="images/h20.jpeg" alt="Water" />
            <h2>Water</h2>
          </div>
          <div className="menu-item">
            <img src="images/pepsi.jpeg" alt="Pepsi" />
            <h2>Pepsi</h2>
          </div>
          <div className="menu-item">
            <img src="images/lemonade.jpeg" alt="Lemonade" />
            <h2>Lemonade</h2>
          </div>
          <div className="menu-item">
            <img src="images/sprite.jpeg" alt="Sprite" />
            <h2>Sprite</h2>
          </div>
          <div className="menu-item">
            <img src="images/fruitpunch.jpeg" alt="Fruit Punch" />
            <h2>Fruit Punch</h2>
          </div>
          <div className="menu-item">
            <img src="images/tea.jpeg" alt="Sweet Tea" />
            <h2>Sweet Tea</h2>
          </div>
        </div>
      </main>
    );
};

export default Dinner;