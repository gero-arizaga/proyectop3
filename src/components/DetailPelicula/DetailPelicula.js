import React, { Component } from 'react';
import DetallePelicula from "../../screens/DetallePelicula/DetallePelicula"
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
            <div className="seccion_detallepeli">
                <section><h1>{this.state.peliTraida.peliculaTraida.title}</h1>
                
                      <img className="imagenpeli" src={"https://image.tmdb.org/t/p/w300/" + this.state.peliTraida.peliculaTraida.poster_path} alt={this.state.peliTraida.title}/>  
                </section>
                <section className="items">
                    <p className="texto">Fecha de estreno:{this.state.peliTraida.peliculaTraida.release_date}</p>
                    <p className="texto">Rating: {this.state.peliTraida.peliculaTraida.vote_average}</p>
                    <p className="texto">Sinopsis: {this.state.peliTraida.peliculaTraida.overview}</p>
                    <p className="texto">Duracion:{this.state.peliTraida.peliculaTraida.runtime}mins</p>
                    <p className="texto">Genres:{this.state.peliTraida.peliculaTraida.genres.map(function(generos){
                        return(
                            <p>{generos.name}</p>
                        )}) }
                    </p> 
                    <button className="botonfav" onClick={()=>this.agergarYSacarDeFavs(this.state.peliTraida.peliculaTraida.id)} type='button'>{this.state.textoBoton}</button>
                </section>
                    
                
            </div>
        </React.Fragment>
    )
}}
export default DetailPelicula;