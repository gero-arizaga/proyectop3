import React, { Component } from 'react';
import DetailPelicula from "../../components/DetailPelicula/DetailPelicula";


class DetallePelicula extends Component {
    constructor(props){
        super(props);
        this.state = {
            pelicula:"" ,
            idPeli: this.props.match.params.id
        }
    };

    componentDidMount() {
        
        let url = `https://api.themoviedb.org/3/movie/${this.state.idPeli}?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1` 
        fetch(url)
        .then(response => response.json())
        .then( data => this.setState({
            pelicula: data.results,
        }))
        .catch(e => console.log(e))
    }

    render() {
        return(
            console.log(this.state.pelicula),
            console.log(this.state.idPeli),

            <DetailPelicula peliculaTraida={this.state.pelicula}/>
            
        //    <div>
        //         {
        //             <DetailPelicula titulo={this.state.peliculas.title} portada={this.state.peliculas.poster_path}/>
        //             :
        //             <h3>Cargando...</h3>
                    
        //         }
        //     </div>
      )  }
    }
export default DetallePelicula;