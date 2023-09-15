import React, { Component } from 'react';
import './Detail.css'

class DetailPelicula extends Component {
   constructor(props){
        super(props)
        this.state = {
            peliTraida: this.props,
            textoBoton: " ❤ Agregar a Favoritos",
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
    return(
        console.log("llegue2"),
        console.log("props", this.props),
        <React.Fragment>
            <h1>{this.state.peliTraida.peliculaTraida.title}</h1>
            <section className="seccion_detallepeli">
                <img className="imagenpeli" src={"https://image.tmdb.org/t/p/w300/" + this.state.peliTraida.peliculaTraida.poster_path} alt={this.state.peliTraida.title}/>  
                <div className='items3'>
                <section className="items1">
                    <p>Fecha de estreno:{this.state.peliTraida.peliculaTraida.release_date}</p>
                    <p>Rating: {this.state.peliTraida.peliculaTraida.vote_average}</p>
                </section>
                <p>Sinopsis: {this.state.peliTraida.peliculaTraida.overview}</p>
                <div className="items1">
                    <p>Duracion:{this.state.peliTraida.peliculaTraida.runtime} mins</p>
                    <p>Generos:{this.state.peliTraida.peliculaTraida.genres.map(function(generos){
                        return(
                            <li className='generos'>{generos.name}</li>
                        )}) }
                    </p> 
                    <button className="botonfav" onClick={()=>this.agergarYSacarDeFavs(this.state.peliTraida.peliculaTraida.id)} type='button'>{this.state.textoBoton}</button>
                </div>
                    </div>
                
            </section>
        </React.Fragment>
    )
}}
export default DetailPelicula;