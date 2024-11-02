import Header from '../components/Header'
import Footer from '../components/Footer';
import '../css/Review.css';
const Review = () => {
    return (
        
        <><>
            <h1>Customer Reviews</h1><hr /><main id="main-content">
                <div className="flex-container">
                    <section className="review-section">
                        <div className="review-container">
                            <div className="review">
                                <h3>Owen Lancaster</h3>
                                <span>&star; &star; &star; &star;</span><br />
                                <img src="images/profile1.jpeg" alt="Owen's Profile" />
                                <p>"This restaurant exceeded all of our expectations! The food was absolutely delicious—every dish was a perfect balance of flavors."</p>
                            </div>
                            <div className="review">
                                <h3>Jack Hargrave</h3>
                                <span>&star; &star; &star; &star;</span><br />
                                <img src="images/profile2.jpeg" alt="Jack's Profile" />
                                <p>"The atmosphere here is cozy and relaxed, making it feel like a home away from home. The food was outstanding!"</p>
                            </div>
                            <div className="review">
                                <h3>Aaron Thorne</h3>
                                <span>&star; &star; &star; &star;</span><br />
                                <img src="images/profile3.jpeg" alt="Aaron's Profile" />
                                <p>"A wonderful dining experience from start to finish! The food was fresh, flavorful, and beautifully presented."</p>
                            </div>
                            <div className="review">
                                <h3>Emma Sterling</h3>
                                <span>&star; &star; &star; &star;</span><br />
                                <img src="images/profile4.jpeg" alt="Emma's Profile" />
                                <p>"Absolutely fantastic! The menu had so many unique options, and everything we ordered was delicious."</p>
                            </div>
                            <div className="review">
                                <h3>Ivy Callahan</h3>
                                <span>&star; &star; &star; &star;</span><br />
                                <img src="images/profile5.jpeg" alt="Ivy's Profile" />
                                <p>"Simply the best restaurant in town! Every dish was expertly crafted and bursting with fresh ingredients."</p>
                            </div>
                            <div className="review">
                                <h3>Feyre Archeron</h3>
                                <span>&star; &star; &star; &star;</span><br />
                                <img src="images/profile7.jpeg" alt="Feyre's Profile" />
                                <p>"Absolutely amazing! The Burger Palace is hands-down the best burger joint in town. The bacon cheeseburger was perfectly juicy, and the homemade fries were out of this world."</p>
                            </div>
                            <div className="review">
                                <h3>Violet Sorrengail</h3>
                                <span>&star; &star; &star; &star; &star;</span><br />
                                <img src="images/profile6.jpeg" alt="Violet's Profile" />
                                <p>"I can't stop raving about the salads here! Who knew a burger place could make such a delicious and fresh Cobb salad? Everything tastes fresh, and you can tell they use high-quality ingredients. If you're looking for great food, The Burger Palace is the place to go."</p>
                            </div>
                            <div className="review">
                                <h3>Bryce Quinlan</h3>
                                <span>&star; &star; &star;</span><br />
                                <img src="images/profile8.jpeg" alt="Bryce's Profile" />
                                <p>"Tried their classic cheeseburger. The flavors were good, but the patty was slightly overcooked. The sides were tasty, especially the fries. Overall, it's a solid spot for a casual meal, though I’ve had better burgers elsewhere."</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </><Footer /></>
    );
};

export default Review;