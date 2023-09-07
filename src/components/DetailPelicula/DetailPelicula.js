import React, { Component } from 'react';
import DetallePelicula from "../../screens/DetallePelicula/DetallePelicula"

function DetailPelicula(props) {
    return(
        <React.Fragment>
            <section className="seccion_detallepeli1">
                <h1>{props.titulo}</h1>
                <article className="articulo">
                    <img className="imagenpeli" src={props.portada} alt={props.titulo}/>
                </article>
            </section>
            <section className="seccion_detallepeli2">
                <article>
                    <p className="texto">Fecha de estreno:{release_date}</p>
                    <p className="texto">Rating: {vote_average}</p>
                    <p className="texto">Sinopsis: {overview}</p>
                    <p className="texto">Duracion:{}</p>
                    {/* <p className="texto">Gender:{}</p> */}
                </article>
            </section>
        </React.Fragment>
    )
}
export default DetailPelicula;