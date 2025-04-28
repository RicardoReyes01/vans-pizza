import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from "framer-motion";
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className="nav-bar">
            <motion.img 
                animate={{rotate: 360}}
                transition={{ duration: 5, repeat: Infinity, ease: "linear", }}
                className="logo" 
                src="/src/content/vans-logo.webp" />
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