import React, { Component } from 'react';
import DetallePelicula from "../../screens/detallePelicula/detallePelicula"

class DetailPelicula extends Component {
   constructor(props){
        super(props)
        this.state = {
            peliTraida: this.props,
        } 
   }
   render(){
    return(
        console.log("llegue2"),
        console.log(this.state.peliTraida),
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
                    {/* <p className="texto">Gender:{}</p> */}
                </article>
            </section>
        </React.Fragment>
    )
}}
export default DetailPelicula;