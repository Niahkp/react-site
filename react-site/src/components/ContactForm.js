import React from "react";
import "../css/Reserve.css";

const ContactForm = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "57d4592a-5a3e-459f-8b15-a78ea9a8719d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        } else {
            console.log("Submission failed", res);
        }
    };

    return (
        <section className="info-section">
            <h2>Contact Restaurant</h2>
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" name="name" required placeholder="first and last" />
                </p>
                <p>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" required />
                </p>
                <p>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required placeholder="Your message" />
                </p>
                <p>
                    <button type="submit">Submit Form</button>
                </p>
            </form>
        </section>
    );
};

export default ContactForm;