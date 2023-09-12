import React, {Component} from 'react';
import './TarjetaPelicula.css';
import {Link} from 'react-router-dom';

class TarjetaPelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            textoBoton: "Agregar a favoritos",
        }
    }

    componentDidMount(){
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null){
            let favoritos = JSON.parse(recuperoStorage);
    
            if(favoritos.includes(this.props.datosPeli.id)){
                this.setState({
                    textoBoton: "Quitar de favoritos"
                })
            }

        }
    }
    agergarYSacarDeFavs(id){
        let favoritos = [];
        favoritos.push(id);

        let favoritosToString = JSON.stringify(favoritos);        
        localStorage.setItem('favoritos', favoritosToString);

        this.setState({
            textoBoton: "Quitar de favoritos",
        })

    }

    render(){
        return (
            <article className='character-card'>
                <Link to={`/detallePelicula/${this.props.datosPeli.id}`}>
                    { <img src={"https://image.tmdb.org/t/p/w300/" + this.props.datosPeli.poster_path} alt={this.props.datosPeli.original_title} /> } 
                    <h2>{this.props.datosPeli.title}</h2> 
                    <p >{this.props.datosPeli.overview}</p> 
                </Link>
                <button onClick={()=>this.agergarYSacarDeFavs(this.props.datosPeli.id)} type='button'>{this.state.textoBoton}</button> 
            </article>
        )
    }

}

export default TarjetaPelicula;