import React, { Component } from 'react';
import detallePelicula from "../detallePelicula.js"

function Detailpelicula(props) {
    return(
        <React.Fragment>
            <section className="seccion_detallepeli1">
                <h1>{titulo}</h1>
                <article className="articulo">
                    <img className="imagenpeli" src={portada} alt={titulo}/>
                </article>
            </section>
            <section className="seccion_detallepeli2">
                <article>
                    <p className="texto">Fecha de estreno:{fecha_de_estreno}</p>
                    <p className="texto">Rating: {rating}</p>
                    <p className="texto">Sinopsis: {sinopsis}</p>
                    <p className="texto">Duracion:{}</p>
                    {/* <p className="texto">Gender:{}</p> */}
                </article>
            </section>
        </React.Fragment>
    )
}