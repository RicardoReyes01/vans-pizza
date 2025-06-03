import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import { motion } from "framer-motion";

export default function Home() {
    const [fade, setFade] = useState(true);

    const quotes = [
      "We had the La Rueda Pizza, and it was excellent! Good, friendly service. Wait time for pizza was normal. Clean and well kept restaurant",
      "Great food and excellent service. Ordered La Cosa Nostra and Cheese pizza, best pizza ever!! I highly recommend this place.👍",
      "We are from out of town and are so glad we landed at this delicious pizza place!",
      "From Wisconsin, the pizza and atmosphere , and staff was very pleasant. I would recommend this place. 👌👌",
      "Ordered our food to go. Prepared very quickly. Picking it up you can just tell this place slaps.",
      "We went here for a few drinks and to watch the football game. The staff are very friendly, and the food was excellent.!"
    ];
  
    const ratings = [5, 4, 5, 4, 5, 5]; // Ratings for each quote
  
    const [currentQuote, setCurrentQuote] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFade(false);


        setTimeout(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
      setFade(true); // start fade-in
    }, 500); // wait 0.5 seconds before changing quote
    }, 5000); // 6 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    const stars = (rating) => {
      let output = "";
      for (let i = 0; i < 5; i++) {
        output += i < rating ? "⭐" : "☆";
      }
      return output;
    };
  
    return (
      <>
        <div className='home-header'>
          <div className="za">
            <p className={`quote-text ${fade ? 'fade-in' : 'fade-out'}`}>&ldquo;{quotes[currentQuote]}&rdquo;</p>            
            <p className={`star-rating ${fade ? 'fade-in' : 'fade-out'}`}>{stars(ratings[currentQuote])}</p>
          </div>
          <div className='main-imgs'>
                <motion.img 
                  src="/public/content/building2.png" 
                  className='building'
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{
                    duration: 1,
                    delay: 0.5, // adjust this for each card individually
                  }}
                />
                <img src="content/award.png" className='award'/>
            </div>
          </div>
          
            <div className='home-body'>
                <motion.div 
                  className="card"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2, // adjust this for each card individually
                  }}
                >
                    <img className="card-pics"src='content/za-2.jpg'/>
                    <h1 className='card-title'>Menu</h1>
                    <p className='card-p'>Check out our menu items</p>
                    <button className="card-button">
                      <Link to='/menu'>View</Link>
                    </button>        
                </motion.div>
                <motion.div 
                  className="card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{
                    duration: 0.5,
                    delay: 0.4, // adjust this for each card individually
                  }}
                >
                    <img className="card-pics"src='content/group.jpg'/>
                    <h1 className='card-title'>About</h1>
                    <p className='card-p'>Learn more about our community</p>
                    <button className="card-button">
                    <Link to='/about'>Learn</Link>
                    </button>
                </motion.div>
                <motion.div 
                  className="card"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{opacity: 100, x: 0}}
                  transition={{
                    duration: 0.5,
                    delay: 0.6, // adjust this for each card individually
                  }}
                >
                    <img className="card-pics"src='content/bowl.jpg'/>
                    <h1 className='card-title'>Contact</h1>
                    <p className='card-p'>Get in touch with us for orders and events</p>
                    <button className="card-button">
                    <Link to='contact'>Contact</Link>
                    </button>
                </motion.div>
            </div>
        </>
    );
}