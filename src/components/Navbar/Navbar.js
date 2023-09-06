import React from 'react';
import {Link} from 'react-router-dom';
import Buscador from '../Buscador/Buscador'
function Navbar(){

    return (
        <nav>
            <ul className="main-nav">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/favoritos"> Favoritos </Link></li>
                <li><Link to="/todas"> Todas </Link></li>
            </ul>
            <ul><Buscador/></ul>
            <ul className="user">
                <li>Nombre usuario <img src="/img/user.jpg" alt=""/></li>
            </ul>
        </nav>
    )
}

export default Navbar