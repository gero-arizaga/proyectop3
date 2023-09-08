import React, { Component } from 'react';
import DetallePelicula from "../../screens/DetallePelicula/DetallePelicula"

class DetailPelicula extends Component {
   constructor(props){
        super(props)
        this.state = {
            peliTraida: this.props.pelicula,
        } 
   }
   render(){
    return(
        console.log(this.state.peliTraida),
        <React.Fragment>
            <section className="seccion_detallepeli1">
                <h1>{this.state.peliTraida.title}</h1>
                <article className="articulo">
                    <img className="imagenpeli" src={this.state.peliTraida.poster_path} alt={this.state.peliTraida.title}/>
                </article>
            </section>
            <section className="seccion_detallepeli2">
                <article>
                    <p className="texto">Fecha de estreno:{this.state.peliTraida.release_date}</p>
                    <p className="texto">Rating: {this.state.peliTraida.vote_average}</p>
                    <p className="texto">Sinopsis: {this.state.peliTraida.overview}</p>
                    <p className="texto">Duracion:{this.state.peliTraida.runtime}mins</p>
                    {/* <p className="texto">Gender:{}</p> */}
                </article>
            </section>
        </React.Fragment>
    )
}}
export default DetailPelicula;