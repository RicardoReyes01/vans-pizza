import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className="nav-bar">
            <img className="logo" src="/src/content/vans-logo.webp" />
        <ul>
           <li>
                <Link to="/">Home</Link>
            </li> 
           <li>
                <Link to="/menu">Menu</Link>
            </li> 
           <li>
                <Link to="/about">About</Link>
            </li> 
           <li>
                <Link to="/contact">Contact</Link>
            </li> 
        </ul>
        </nav>

    );
}