import React, { Component } from 'react';
import DetallePelicula from "../../screens/DetallePelicula/DetallePelicula"

class DetailPelicula extends Component {
   constructor(props){
        super(props)
        this.state = {
            peliTraida: this.props,
            textoBoton: "Agregar a favoritos",
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
    return(
        console.log("llegue2"),
        console.log("props", this.props),
        <React.Fragment>
            <section className="seccion_detallepeli1">
                <h1>{this.state.peliTraida.peliculaTraida.title}</h1>
                <article className="articulo">
                      <img className="imagenpeli" src={"https://image.tmdb.org/t/p/w300/" + this.state.peliTraida.peliculaTraida.poster_path} alt={this.state.peliTraida.title}/>  
                </article>
            </section>
            <section className="seccion_detallepeli2">
                <article>
                    <p className="texto">Fecha de estreno:{this.state.peliTraida.peliculaTraida.release_date}</p>
                    <p className="texto">Rating: {this.state.peliTraida.peliculaTraida.vote_average}</p>
                    <p className="texto">Sinopsis: {this.state.peliTraida.peliculaTraida.overview}</p>
                    <p className="texto">Duracion:{this.state.peliTraida.peliculaTraida.runtime}mins</p>
                    <p className="texto">Genres:{this.state.peliTraida.peliculaTraida.genres.map(function(generos){
                        return(
                            <li>{generos.name}</li>
                        )}) }
                    </p> 
                    <button onClick={()=>this.agergarYSacarDeFavs(this.props.state.peliTraida.peliculaTraida.id)} type='button'>{this.state.textoBoton}</button>
                </article>
            </section>
        </React.Fragment>
    )
}}
export default DetailPelicula;