import'../css/Cater.css';
import Footer from '../components/Footer';
import BundleOption from '../components/Bundle';
import SmallBundleOption from '../components/SmallBundle';
import PartySizeOption from '../components/PartySize';

const Cater = () => {
    const backgroundImage = "url('images/new-cater.avif')";
    return (


        <main className="cater-page">
            <section className="top-section" style={{ backgroundImage: backgroundImage }}>
                <h1>Our Catering Services</h1>
            </section>
            <div className="catering-options-container">
                <BundleOption />
                <SmallBundleOption />
                <PartySizeOption /> 
            </div>
        </main>

    );
};

export default Cater;