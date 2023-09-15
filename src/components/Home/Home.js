import React, { Component } from "react";
import {Link} from 'react-router-dom';
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";
import './Home.css'

class Home extends Component{
    constructor(){
        super()
        this.state = {
            populares: [],
            cartelera: [],
            todas: []
        }  
    }
    componentDidMount(){
        //PELÍCULAS POPULARES
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=45a63508e52c71549188d480ab5f1a32&language=en-US&page=1')
        .then(response => response.json())
        .then( data => this.setState({
            populares: data.results
        }))
        .catch(e => console.log(e))
    
        // PELICULAS EN CARTELERA
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=45a63508e52c71549188d480ab5f1a32&language=en-US&page=1')
            .then(response => response.json())
             .then(data => this.setState({
                cartelera: data.results
            }))
             .catch(error => console.log(error));
    }
    
    render(){
        console.log(this.state);
        return(    
            <React.Fragment>
                {this.state.populares.length > 0 ?
                <section>
                <Link to={'populares'}><h3>PELICULAS POPULARES </h3> </Link>     

                <div className="body-home">               
                    { 
                   this.state.populares.slice(0,5).map(function(unaPeli){
                    return <TarjetaPelicula key={ unaPeli.id } datosPeli={ unaPeli }/>})
                    } 

                </div>
                <Link to='/cartelera'><h3>PELICULAS EN CARTELERA</h3></Link>
                
                <div className="body-home">
                    { 
                    this.state.cartelera.slice(0,5).map(function(unaPeli){
                        return <TarjetaPelicula key={ unaPeli.id } datosPeli={ unaPeli }/>})
                    } 
                </div>
            </section> :
            <h2>Cargando <img src="/img/loading.gif" height='20px' alt=''/></h2>}
        </React.Fragment>  
        )
    }
}
export default Home;