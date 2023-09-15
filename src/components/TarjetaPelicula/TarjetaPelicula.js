import React, {Component} from 'react';
import './TarjetaPelicula.css';
import {Link} from 'react-router-dom';

class TarjetaPelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            view: false, 
            textoBoton: " ❤ Agregar a Favoritos"
        }
    }
    visibilidad = () => {
        this.setState({ view: !this.state.view });
     };
 

    componentDidMount(){
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null){
            let favoritos = JSON.parse(recuperoStorage);
    
            if(favoritos.includes(this.props.datosPeli.id)){
                this.setState({
                    textoBoton: "Quitar de favoritos"})
            }
        }
    }
    agergarYSacarDeFavs(id){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem ("favoritos");

        if (recuperoStorage !== null) {  
            favoritos = JSON.parse(recuperoStorage);
        }

        if (favoritos.includes (id)){ 
            favoritos = favoritos.filter (unId => unId !== id )
            this.setState ({
                textoBoton: " ❤ Agregar a Favoritos"
            })

        } else {
            favoritos.push (id);
            this.setState ({
                textoBoton: "Quitar de favoritos",
            })
        }
        let favoritostoString= JSON.stringify(favoritos);
        localStorage.setItem ("favoritos", favoritostoString);
    }


    render(){
        return (
            <article className='pelicula-card'>
                <Link to={`/detallePelicula/${this.props.datosPeli.id}`}>
                    {<img src={"https://image.tmdb.org/t/p/w300/" + this.props.datosPeli.poster_path} alt={this.props.datosPeli.original_title}/>} 
                    <h2>{this.props.datosPeli.title}</h2>
                </Link>

                <button className="botonFav" onClick={this.visibilidad} type="button" >Ver más</button>
                    {this.state.view && (
                    <p>{this.props.datosPeli.overview}</p>
                    )} 

                <button className="botonFav" onClick={()=>this.agergarYSacarDeFavs(this.props.datosPeli.id)} type='button'>{this.state.textoBoton}</button> 
            </article>
        )
    }

}

export default TarjetaPelicula;