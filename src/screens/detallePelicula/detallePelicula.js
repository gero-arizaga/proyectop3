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
            pelicula: data,
        }))
        .catch(e => console.log(e))
    }

    render() {
        return(
            <div>
                {this.state.pelicula !== '' ?
                (<DetailPelicula peliculaTraida={this.state.pelicula}/>): 
                <h2>Cargando <img src="/img/loading.gif" height='20px' alt=''/></h2>}
            </div>
      )  }
    }
export default DetallePelicula;