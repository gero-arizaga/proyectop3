import React, { Component } from "react";
import TarjetaPelicula from "../../components/TarjetaPelicula/TarjetaPelicula";

class Resultados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: []
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}&include_adult=false&api_key=45a63508e52c71549188d480ab5f1a32&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => this.setState({
                peliculas: data.results

            }))
            .catch(e => console.log(e))
    }

    render() {
        return (
            <section>
                <h2>Resultados de busqueda</h2>
                <div className="pelisPop">
                    {this.state.peliculas.length > 0 ? (
                        this.state.peliculas.slice(0,24).map((pelicula)=> {
                            return(
                                <TarjetaPelicula key={ pelicula.id } datosPeli={ pelicula }/>
                            )
                        })
                    ):(
                        <p>Cargando</p>
                    )}
                </div>
            </section>
        )
    }
}
export default Resultados;