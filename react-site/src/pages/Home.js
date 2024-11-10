import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Home.css';
import BurgerFeature from '../components/BurgerFeature';
import FryFeature from '../components/FryFeature';
import SaladFeature from '../components/SaladFeature';

const Home = () => {
    const backgroundImage = "url('images/bg.jpeg')";
    return(
        <><>
             <section className="main-section" style={{ backgroundImage: backgroundImage }}>
                <div className="content">
                    <h1>The Burger Palace</h1>
                    <p>Welcome to the Burger Palace! Where Where we aim to please all! Whether you're looking for a nice juicy burger, a well-rounded salad, or delicious homemade desserts, we've got something for everyone to enjoy!</p>
                </div>
            </section> 

            <div className='menu-grid'>
                <BurgerFeature />
                <FryFeature />
                <SaladFeature />
            </div>

        </><Footer /></>
    );
};

export default Home;