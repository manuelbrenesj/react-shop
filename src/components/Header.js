import React from 'react';
import style from './header.css';

function Header() {
    return (
        <header className="navFather">
            
            <div className="navChild-A">
                <h2 href="#">Tienda</h2>
            </div>

            <nav className="navChild-B">
                <a href="#" className="child-A">Login</a>
                <a href="#" className="child-B">Cart</a>
            </nav>
            
        </header>
    )
}

export default Header;