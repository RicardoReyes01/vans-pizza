import './About.css'
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from 'react';

const images = [
    'public/content/collage.png',
    'public/content/collage2.png',
  ];

export default function About(){

    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3000); // 3 seconds
  
      return () => clearInterval(interval); // cleanup
    }, []);


    return(
        <>
            <div className='about'>
                <motion.div 
                    className='info'
                    initial={{ opacity: 0, x: -50,y: 50 }}
                    whileInView={{opacity: 1, x:0, y: 0}}
                    transition={{
                        duration: 0.5,
                        delay: 0.2, // adjust this for each card individually
                    }}
                >
                    <img src='public/content/nobg.png' className='about-logo' />
                    <h1>A Slice of Who We Are...</h1>
                    <p>At the heart of our kitchen is a love for good food and great company. What started as a family tradition has grown into a community favorite, where every slice is crafted with care, from scratch, using the freshest ingredients. 
                       We’re proud to bring people together around the table with flavors that feel like home. 
                       This isn’t just pizza—it’s a slice of who we are, shared with everyone who walks through our doors.
                       </p>
                </motion.div>
                <motion.div
                    className="slider-container"
                    initial={{ opacity: 0, x: 50,y: -50 }}
                    whileInView={{opacity: 1, x:0, y: 0}}
                    transition={{
                        duration: 0.5,
                        delay: 0.2, // adjust this for each card individually
                    }}
                >
                    {images.map((src, index) => (
                        <img
                        key={index}
                        src={src}
                        alt={`slide-${index}`}
                        className={`slider-img ${index === current ? 'active' : ''}`}
                        />
                    ))}
                </motion.div>
            </div>
        </>
    )
}