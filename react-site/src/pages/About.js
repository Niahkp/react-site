import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/About.css'

const About = () => {
    return(
        <><>
            <section className="top-section">
                <img src="images/new-cater.jpg" alt="About Us" />
                <div className="content">
                </div>
            </section>
            <hr />
            <section className="about-us">
                <h1>About Us</h1>
                <p>At The Burger Palace, we believe that great food and welcoming vibes bring people together. Located in the heart of Lancaster, South Carolina, we are passionate about creating a dining experience that always leaves you satisfied. Our team of hardworking cooks create each dish with care and precision. It is our goal to offer you a sensational meal that leaves you wanting more.</p>
            </section>
            <section className="ingredients">
                <div className="left">
                    <img src="images/ingred-high.webp" alt="Baking process" />
                </div>
                <div className="right">
                    <h2>Natural Ingredients</h2>
                    <ul>
                        <li><strong>Vegetables</strong><br />Lettuce, potatoes, bell peppers, onions, garlic, spinach</li>
                        <li><strong>Herbs</strong><br />Basil, cilantro, paprika, pepper, cinnamon, thyme, oregano</li>
                        <li><strong>Oils</strong><br />Olive oil, coconut oil, avocado oil, butter</li>
                        <li><strong>Sweeteners</strong><br />Honey, maple syrup, coconut sugar</li>
                    </ul>
                </div>
            </section>
        </><Footer /></>
    );
};

export default About;