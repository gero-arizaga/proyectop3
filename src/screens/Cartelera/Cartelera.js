import React, { Component } from 'react';
import TarjetaPelicula from "../../components/TarjetaPelicula/TarjetaPelicula";
import './Cartelera.css'

class Cartelera extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartelera:[] ,
        }
    };

    componentDidMount() { 
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1` 
        fetch(url)
        .then(response => response.json())
        .then( data => this.setState({
            cartelera: data.results,
        }))
        .catch(e => console.log(e))
    }



render(){
    return(
        <section >
       <h2>CARTELERA</h2> 
       <div className="pelisCartelera">
        { 
            this.state.cartelera.map(function(unaPeli){
             return <TarjetaPelicula key={ unaPeli.id } datosPeli={ unaPeli }/>
            })
         }
         </div>
         </section>
    )
}
}
export default Cartelera