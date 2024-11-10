import Header from '../components/Header'
import Footer from '../components/Footer';
import '../css/Review.css';
import { OwenReview, JackReview, AaronReview, EmmaReview, IvyReview, FeyreReview, VioletReview, BryceReview } from "../components/ReviewPage";

const Review = () => {
    return (
        
        <><>
       <h1>Customer Reviews</h1>
        <hr />
        <main id="main-content">
            <div className="flex-container">
                <section className="review-section">
                    <div className="review-container">
                        <OwenReview />
                        <JackReview />
                        <AaronReview />
                        <EmmaReview />
                        <IvyReview />
                        <FeyreReview />
                        <VioletReview />
                        <BryceReview />
                    
                    </div>
                </section>
            </div>
        </main>

        </><Footer /></>
    );
};

export default Review;