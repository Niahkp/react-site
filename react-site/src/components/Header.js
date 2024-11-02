import "../css/Header.css";
import{Link} from "react-router-dom"

const Header = () =>{
    return(
        <header>
            <nav>
                <div className="logo">
                    <img src="images/logo.jpeg" alt="RestFodd Logo" />
                    <h1>The Burger Palace<br></br></h1>
                </div>
                <ul className="nav-links">
                    <Link to= "/">Home</Link>
                    <Link to = "/about">About</Link>
                    <Link to= "/cater">Catering Services</Link>
                    <Link to= "/lunch">Lunch Menu</Link>
                    <Link to= "/dinner">Dinner Menu</Link>
                    <Link to= "/review">Reviews</Link>
                    <Link to= "/reserve">Reservation Form</Link>
                </ul>
                <div className="menu-toggle" id="mobile-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;