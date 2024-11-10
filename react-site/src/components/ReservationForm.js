import React from 'react';
import '../css/Reserve.css';

const ReservationForm = () => {

return(

<section className ="info-section">
<h2>Reservation Form</h2>
<p>Please fill out the reservation form below to reserve a table at The Burger Palace.</p>
<form id="form-reservation">
    <p>
        <label for="name">Name:</label>
        <input
            type="text"
            id="name"
            name="name"
            required
            minlength="3"
            placeholder="Enter your full name"
        />
    </p>
    <p>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required placeholder="Enter your email" />
    </p>
    <p>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number" />
    </p>
    <p>
        <label for="date">Reservation Date:</label>
        <input type="date" id="date" name="date" required />
    </p>
    <p>
        <label for="time">Reservation Time:</label>
        <input type="time" id="time" name="time" required />
    </p>
    <p>
        <label for="guests">Number of Guests:</label>
        <input type="number" id="guests" name="guests" required min="1" max="20" />
    </p>
    <p>
        <input type="checkbox" required name="terms" id="terms" />
        <label for="terms" class="inline">I agree to the terms and conditions.</label>
    </p>
    <p>
        <button type="submit">Submit Reservation</button>
    </p>
</form>
</section>
    );
};
export default ReservationForm;
