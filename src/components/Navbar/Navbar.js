import React from 'react';
import {Link} from 'react-router-dom';
function Navbar(){

    return (
        <nav>
            <ul className="main-nav">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/about"> About Us </Link></li>
                <li><Link to="/rick"> Rick y Morty </Link></li>
            </ul>
            <ul className="user">
                <li>Nombre usuario <img src="/img/user.jpg" alt=""/></li>
            </ul>
        </nav>
    )
}

export default Navbar