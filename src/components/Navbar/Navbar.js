import React from 'react';
import {Link} from 'react-router-dom';
import Buscador from '../Buscador/Buscador'
function Navbar(){

    return (
        <nav>
            <ul className="main-nav">
                <li><Link className='enlaces' to="/"> HOME </Link></li>
                <li><Link className='enlaces' to="/favoritos"> FAVORITOS </Link></li>
                <li><Link className='enlaces' to='/populares'>POPULARES</Link></li>
                <li><Link className='enlaces' to='/cartelera'>CARTELERA</Link></li>
            </ul>
            <ul><Buscador/></ul>
            <ul className="user">
                <li> <Link to='/'><img src="/img/MAGOBA.png" alt=""/></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar