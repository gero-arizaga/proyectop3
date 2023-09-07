import React, { Component } from 'react';
import DetailPelicula from "../../components/DetailPelicula/DetailPelicula";


class DetallePelicula extends Component {
    constructor(props){
        super(props);
        this.state = {
            peliculas: false,
        }
    };

    componentDidMount() {
        //PELÍCULAS
        let url = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1` 
        fetch({url})
        .then(response => response.json())
        .then( data => this.setState({
            peliculas: data.results,
        }))
        .catch(e => console.log(e))
    }

    render() {
        return(
           <div>
                {
                    this.state.pelicula ?
                    <DetailPelicula titulo={this.state.pelicula.title} portada={this.state.pelicula.poster_path}/>
                    :
                    <h3>Cargando...</h3>
                    
                }
            </div>)
        }
    }
export default DetallePelicula;