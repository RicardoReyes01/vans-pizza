import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";


export default function Menu(){
    return(
        <>
            <div className='menu-top'>
                <motion.div 
                    className="menu-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                    duration: 0.5,
                    delay: 0.2, // adjust this for each card individually
                  }}
                >
                    <h1 className='card-title'>Appetizers</h1>
                    <ul>
                        <li>
                            <div className="item-name-price">
                                <div className="item-title">
                                    <span>CHEESY BREAD</span>
                                    <FontAwesomeIcon icon={faFireFlameCurved} className='menu-icon'/>
                                </div>
                                <span>$5.99</span>
                            </div>
                            <p className="item-description">Freshly baked bread brushed with garlic butter, topped with a generous layer of melted mozzarella cheese. Perfect for sharing or starting your meal off right.</p>
                        </li>
                        <li>
                            <div className="item-name-price">
                                <span>BUFFALO WINGS</span>
                                <span>$1.25 EACH</span>
                            </div>
                            <p className="item-description">Juicy chicken wings baked until crispy, then tossed in our signature spicy buffalo sauce. Served with a side of ranch dressing for the perfect balance of heat and cool.</p>
                        </li>
                    </ul>
                </motion.div>
                <motion.div 
                    className="menu-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.5,
                        delay: 0.4, // adjust this for each card individually
                    }}
                >
                    <h1 className='card-title'>Salads</h1>
                    <ul>
                        <li>
                            <div className="item-name-price">
                                <span>GREEK SALAD</span>
                                <span>$7.50</span>
                            </div>
                            <p className="item-description">Crisp lettuce with tomatoes, cucumbers, olives, onions, and feta cheese, tossed in a light vinaigrette.</p>
                            </li>
                        <li>
                            <div className="item-name-price">
                                <span>CAESAR SALAD</span>
                                <span>$7.50</span>
                            </div>
                            <p className="item-description">Fresh romaine lettuce with creamy Caesar dressing, croutons, and Parmesan cheese.</p>
                            </li>
                        <li>
                            <div className="item-name-price">
                                <span>HOUSE SALAD</span>
                                <span>$6.50</span>
                            </div>
                            <p className="item-description">A simple mix of greens, tomatoes, cucumbers, and carrots served with your choice of dressing.</p>
                            </li>
                    </ul>
                </motion.div>
                <motion.div 
                    className="menu-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.5,
                        delay: 0.4,
                    }}
                >
                    <h1 className='card-title'>Sandwiches</h1>
                    <ul>
                        <li><div className="item-name-price">
                                <span>ITALIANO</span>
                                <span>$8.25</span>
                            </div>
                            <p className="item-description">Crisp lettuce with tomatoes, cucumbers, olives, onions, and feta cheese, tossed in a light vinaigrette.</p></li>
                        <li><div className="item-name-price">
                                <span>MEATBALL SUB</span>
                                <span>$8.25</span>
                            </div>
                            <p className="item-description">Crisp lettuce with tomatoes, cucumbers, olives, onions, and feta cheese, tossed in a light vinaigrette.</p></li>
                    </ul>
                </motion.div>
                <motion.div 
                    className="menu-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                    }}
                >
                    <h1 className='card-title'>Pasta</h1>
                    <ul>
                        <li>
                            <div className="item-name-price">
                                <span>SPAGHETTI</span>
                                <span>$7.25</span>
                            </div>
                            <p className="item-description">Crisp lettuce with tomatoes, cucumbers, olives, onions, and feta cheese, tossed in a light vinaigrette.</p>
                            </li>
                    </ul>
                </motion.div>
            </div>
            <div className='menu-bottom'>
                <div className="menu-card2">
                    <h1 className='card-title'>Pizzas</h1>
                    <ul>
                        <li>
                            <div className="item-name-price">
                                <span>THE DON</span>
                                <span>$17</span>
                            </div>
                            <p className="item-description">Marinara based pizza with mozzarella, italian sausage, pepperoni, bell pepper, meatballs, onion, mushrooms, and black olives</p>
                        </li>
                        <li>
                            <div className="item-name-price">
                                <span>THE BUGSY</span>
                                <span>$17</span>
                            </div>
                            <p className="item-description">An alfredo based pizza, topped with grilled chicken, bacon, mushrooms, and spinach.</p>
                        </li>
                        <li>
                            <div className="item-name-price">
                                <div className="item-title">
                                    <span>LA RUEDA</span>
                                    <FontAwesomeIcon icon={faFireFlameCurved} className='menu-icon'/>
                                </div>
                                <span>$21</span>
                            </div>
                            <p className="item-description">Chimichurri based pizza with beef fajitas, fresh jalapenos, oaxaca cheese, avocado slices, and lime wedges.</p>
                        </li>
                        <li>
                            <div className="item-name-price">
                                <span>EL SICARIO</span>
                                <span>$18</span>
                            </div>
                            <p className="item-description">An alfredo-buffalo sauce based pizza, topped with mozzarella cheese, buffalo chicken, blue cheese crumbles, drizzled with ranch and buffalo sauce</p>
                        </li>
                        <li>
                            <div className="item-name-price">
                                <span>THE MARGHERITA</span>
                                <span>$15</span>
                            </div>
                            <p className="item-description">Marinara based pizza with fresh mozzarella and basil</p>
                        </li>
                        <li>
                            <div className="item-name-price">
                                <div className="item-title">
                                    <span>LA COSA NOSTRA</span>
                                    <FontAwesomeIcon icon={faFireFlameCurved} className='menu-icon'/>
                                </div>                                <span>$7.25</span>
                            </div>
                            <p className="item-description">Marinara based pizza with mozzarella, pepperoni, meatballs, roasted tomatoes, mushrooms, and ricotta cheese</p>
                        </li>
                        <li>
                            <div className="item-name-price">
                                <span>THE GODFATHER</span>
                                <span>$19</span>
                            </div>
                            <p className="item-description">OUR 6 MEAT- MEAT LOVERS PIZZA! Topped with pepperoni, meatballs, italian sausage, canadian bacon, beef crumbles, and crispy bacon</p>
                        </li>
                    </ul>
                </div>
                <div className="menu-card3">
                    <h1 className='card-title'>Build Your Own Pizza</h1> 
                    <div className='card2-container'>
                        <div className='za-size'>
                            <ul>
                                <li>
                                    <div className="item-name-price">
                                        <span>LARGE BUILD YOUR OWN</span>
                                        <span>$11.99+toppings</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="item-name-price">
                                        <span>MEDIUM BUILD YOUR OWN</span>
                                        <span>$10.99+toppings</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='specialty-item'>
                        <ul>
                            <li>
                                <div className="item-name-price">
                                <span>CALZONES</span>
                                <span>$10+toppings</span>
                                </div>
                            </li>
                            <li>
                                <div className="item-name-price">
                                <span>LOW CARB BOWL</span>
                                <span>$8+toppings</span>
                                </div>
                            </li>
                            <li>
                                <div className="item-name-price">
                                <span>PIZZA DRIZZLES</span>
                                <span>$1.50 each</span>                         
                                </div>
                                <p className="item-description">Hot Honey, BBQ, Buffalo, Black Truffle, Ranch</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className='toppings'>
                        <div>
                            <ul>
                                <li>
                                    <div className="item-name-price">
                                        <span>SAUCES</span>
                                    </div>
                                    <p className="item-description">Marinara, Alfredo, Chimichurri Base(+2)</p>
                                </li>
                                <li>
                                    <div className="item-name-price">
                                        <span>VEGGIES</span>
                                    </div>
                                    <p className="item-description">Artichokes - Medium 1.85 / Large 2.10</p>
                                    <p className="item-description">Avocados - Medium 1.85 / Large 2.10</p>
                                    <p className="item-description">Basil - Medium 1.35 / Large 1.60</p>
                                    <p className="item-description">Bell Pepper - Medium 1.35 / Large 1.60</p>
                                    <p className="item-description">Black Olives - Medium 1.35 / Large 1.60</p>
                                    <p className="item-description">Jalapenos - Medium 1.35 / Large 1.60</p>
                                    <p className="item-description">Lime Wedges - Medium 1.35 / Large 1.60</p>
                                    <p className="item-description">Mushrooms - Medium 1.35 / Large 1.60</p>
                                    <p className="item-description">Red Onions - Medium 1.35 / Large 1.60</p>
                                    <p className="item-description">Pineapple - Medium 1.35 / Large 1.60</p>
                                    <p className="item-description">Roasted Tomatoes - Medium 1.35 / Large 1.60</p>
                                    <p className="item-description">Spinach - Medium 1.35 / Large 1.60</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <div className="item-name-price">
                                        <span>CHEESES</span>
                                    </div>
                                    <p className="item-description">Extra Mozarella - Medium 1.35 / Large 1.60</p>
                                    <p className="item-description">Oaxaca - Medium 1.85 / Large 2.10</p>
                                    <p className="item-description">Ricotta - Medium 1.85 / Large 2.10</p>
                                    <p className="item-description">Blue Cheese Crumbles - Medium 1.85 / Large 2.10</p>
                                    <p className="item-description">Feta Cheese - Medium 1.35 / Large 1.60</p>                            
                                </li>
                                <li>
                                    <div className="item-name-price">
                                        <span>MEATS</span>
                                    </div>
                                    <p className="item-description">Bacon - Medium 1.85 / Large 2.10</p>
                                    <p className="item-description">Beef - Medium 1.85 / Large 2.10</p>
                                    <p className="item-description">Beef Fajita - Medium 4.35 / Large 4.60</p>
                                    <p className="item-description">Chicken - Medium 1.85 / Large 2.10</p>
                                    <p className="item-description">Canadian Bacon(Ham) - Medium 1.35 / Large 1.60</p>
                                    <p className="item-description">Italian Sausage - Medium 1.35 / Large 1.60</p>
                                    <p className="item-description">Meatballs - Medium 1.85 / Large 2.10</p>
                                    <p className="item-description">Pepperoni - Medium 1.35 / Large 1.60</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}