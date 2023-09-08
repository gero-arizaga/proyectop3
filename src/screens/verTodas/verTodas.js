import React, { Component } from 'react';
import DetailPelicula from "../../components/DetailPelicula/DetailPelicula";

class VerTodas extends Component{
    constructor(props){
        super(props);
        this.state = {
            peliculas:"" ,
            idPeli: this.props.match.params.id
        }
    };

    componentDidMount() { 
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1` 
        fetch(url)
        .then(response => response.json())
        .then( data => this.setState({
            pelicula: data,
        }))
        .catch(e => console.log(e))
    }

}

export default VerTodas