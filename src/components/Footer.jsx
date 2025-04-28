import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-icons">
                <a href="https://www.facebook.com/vansbrickoven/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com/vansbrickovenpizza/?hl=en" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>               
                </a>
            </div>
            <div className="footer-content">
                <p>&copy; 2025 Van's Brick Oven Pizza. All rights reserved.</p>
            </div>
        </footer>
    )
}