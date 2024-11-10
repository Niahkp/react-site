import'../css/Cater.css';
import Footer from '../components/Footer';
import BundleOption from '../components/Bundle';
import SmallBundleOption from '../components/SmallBundle';
import PartySizeOption from '../components/PartySize';

const Cater = () => {
    const backgroundImage = "url('images/new-cater.avif')";
    return (

        // <><main id="main-content">
        //     <div className="flex-container">
        //         <section className="col1of2">
        //             <h1>Our Catering Services</h1>
        //             <hr />
        //             <div className="flex-container">
        //                 <section className="col1of3">
        //                     <h2>The Bundle</h2>
        //                     <img src="images/bundle.jpeg" alt="The Bundle" />
        //                     <p>$45.50</p>
        //                     <p>The Bundle comes with your choice of 7 main entrees, 6 sides, and 2 desserts with your choice of a gallon drink.</p>
        //                 </section>
        //                 <section className="col1of3">
        //                     <h2>Small Bundle</h2>
        //                     <img src="images/smallbundle.jpeg" alt="Small Bundle" />
        //                     <p>$30.00</p>
        //                     <p>The Small Bundle comes with your choice of 5 main entrees, 3 sides, and 1 dessert with your choice of a gallon drink.</p>
        //                 </section>
        //                 <section className="col1of3">
        //                     <h2>Party Size</h2>
        //                     <img src="images/party.jpeg" alt="Party Size" />
        //                     <p>$60.50</p>
        //                     <p>The party size comes with your choice of 10 main entrees, 8 sides, and 3 desserts with your choice of 2 gallon drinks.</p>
        //                 </section>
        //             </div>
        //         </section>
        //     </div>
        // </main>
        //<Footer /></>

        // <div>
        //     {/* <main className="cater-page"> */}
        //         {/* <section className="top-section">
        //             <div className="content">
        //                 <h1>Our Catering Services</h1>
        //             </div>
        //         </section>
        //         <div className="catering-options-container">
        //             <BundleOption />
        //             <SmallBundleOption />
        //             <PartySizeOption />
        //         </div>
        //     {/* </main> */}
        //     {/* <Footer /> */} 

        //     <BundleOption />
        //     <SmallBundleOption />
        //     <PartySizeOption /> 
        //     <Footer />
        // </div>

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