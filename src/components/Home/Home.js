import React, { Component } from "react";
import {Link} from 'react-router-dom';
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";
import VerTodas from "../VerTodas/VerTodas";
import './Home.css'

class Home extends Component{
    constructor(){
        super()
        this.state = {
            populares: [],
            cartelera: []
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
    verTodas(){

    }
    render(){
        console.log(this.state);
        return(    
            <section>
                <h2>Peliculas Populares  
                     <Link to='/verTodas'>
                     <button>
                        Ver Todas
                    </button>
                    </Link>
                </h2>  
                            
                <div className="body-home">               
                { 
                   this.state.populares.slice(0,5).map(function(unaPeli){
                    return <TarjetaPelicula key={ unaPeli.id } datosPeli={ unaPeli }/>
                   })
                } 
                </div>
                <h2>Peliculas en Cartelera <button><Link to='/verTodas'>Ver Todas</Link></button></h2>
                <div className="body-home">
                { 
                   this.state.cartelera.slice(0,5).map(function(unaPeli){
                    return <TarjetaPelicula key={ unaPeli.id } datosPeli={ unaPeli }/>
                   })
                } 
                </div>
            </section>
        )
    }
}
export default Home;