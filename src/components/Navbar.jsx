import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import './Navbar.css'
import { useState, useEffect } from 'react';

export default function Navbar(){
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <nav className="nav-bar">
            <motion.img 
                animate={{rotate: 360}}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className={`logo ${isMobile ? 'clickable' : ''}`}
                src="/public/content/vans-logo.jpg"
                onClick={() => {
                    if (isMobile) setMenuOpen(prev => !prev);
                }}
            />
            <ul className={`${isMobile ? 'mobile-nav' : ''} ${menuOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li> 
                <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li> 
                <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li> 
                <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li> 
            </ul>
        </nav>
    );
}
