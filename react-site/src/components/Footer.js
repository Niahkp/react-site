import "../css/Footer.css";

const Footer = () =>{
    return(
        <footer>
            <section className="contact">
                <div className="location">
                    <h2>Hours of Operation</h2>
                    <h3>Mon - Fri: 9:00 am - 5:00 pm<br/>Sat - Sun: 11:00 am - 5:00 pm</h3>
                </div>
                <div className="location">
                    <h2>Contact Information</h2>
                    <h3>Burgerpalace@gmail.com<br/>(803) 555-3333</h3>
                </div>
            </section>
        </footer>
    );
};

export default Footer;