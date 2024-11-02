import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Home.css'

const Home = () => {
    return(
        <><>

            <section className="main-section">
                <div className="content">
                    <h2>The Burger Palace</h2>
                    <p>Welcome to the Burger Palace! Where Where we aim to please all! Whether you're looking for a nice juicy burger, a well-rounded salad, or delicious homemade desserts, we've got something for everyone to enjoy!</p>
                </div>
            </section>

            <h1>Featured Items</h1>
            <div className="menu-grid">
                <div className="menu-item">
                    <img src="images/burger.jpeg" alt="Bacon Cheeseburger" />
                    <h2>Bacon Cheeseburger</h2>
                </div>
                <div className="menu-item">
                    <img src="images/fries.jpeg" alt="French Fries" />
                    <h2>French Fries</h2>
                </div>
                <div className="menu-item">
                    <img src="images/salad.jpeg" alt="Salad" />
                    <h2>Salad</h2>
                </div>
            </div>

        </><Footer /></>
    );
};

export default Home;