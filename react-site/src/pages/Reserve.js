import React from 'react';
 import Header from '../components/Header';
 import ReservationForm from '../components/ReservationForm';
 import ContactForm from '../components/ContactForm';
 import Map from '../components/Map';
 import '../css/Reserve.css';

const Reserve = () => {
    return (
      <div>
        <ContactForm  />
        <ReservationForm />
        <Map />
      </div>
    );
  };
export default Reserve;

