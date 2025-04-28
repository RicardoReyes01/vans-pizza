import './Menu.css'

export default function Menu(){
    return(
        <>
            <div className='menu-top'>
                <div className="menu-card">
                    <h1 className='card-title'>Appetizers</h1>
                    <ul>
                        <li>
                            <div className="item-name-price">
                                <span>CHEESY BREAD</span>
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
                </div>
                <div className="menu-card">
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
                </div>
                <div className="menu-card">
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
                </div>
                <div className="menu-card">
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
                </div>
            </div>
            <div className='menu-bottom'>
                <div className="menu-card2">
                    <h1 className='card-title'>Pizza</h1>
                </div>
                <div className="menu-card2">
                    <h1 className='card-title'>Build Your Own Pizza</h1>   
                </div>
            </div>
        </>
    )
}