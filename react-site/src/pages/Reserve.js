import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import ReservationForm from '../components/ReservationForm';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

import '../css/Reserve.css';

const Reserve = () => {
    return (
        <div>
        <Header />
        <main id="main-content">
            <h1>Make a Reservaton</h1>
            <hr />
            <div className="flex-container">
                <ReservationForm />
                <ContactForm />
                <Map />
            </div>
        </main>
    </div>
        
    );
};

export default Reserve;