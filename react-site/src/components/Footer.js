import "../css/Footer.css";

const Footer = () =>{
    return(
        <footer>
            <section className="contact">
                <div className="location">
                    <h3>Hours of Operation</h3>
                    <p>Mon - Fri: 9:00 am - 5:00 pm<br/>Sat - Sun: 11:00 am - 5:00 pm</p>
                </div>
                <div className="location">
                    <h3>Contact Information</h3>
                    <p>Burgerpalace@gmail.com<br/>(803) 555-3333</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;