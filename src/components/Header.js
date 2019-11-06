import React from 'react';
import style from './header.css';
import cart from '../assets/shopping-cart.svg'
import user from '../assets/user.svg'

function Header() {
    return (
        <header className="navFather">
            
            <div className="navChild-A">
                <h2 href="#">Shop Online</h2>
            </div>

            <nav className="navChild-B">
                {/* <a href="#" className="child-A">Login</a>
                <a href="#" className="child-B">Cart</a> */}

                <img className="child-A" src={cart}></img>
                <img className="child-B" src={user}></img>
            </nav>
            
        </header>
    )
}

export default Header;