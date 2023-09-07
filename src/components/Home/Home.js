import React, { Component } from "react";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";
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
    render(){
        console.log(this.state);
        return(    
            <section>              
              <div className="body-home">
                    {/* { this.state.datos === []?
                    <h3>Cargando...</h3>:
                    <h3>{this.state.datos}</h3>} */}
                
                 { 
                   this.state.populares.map(function(unaPeli){
                    return <TarjetaPelicula key={ unaPeli.id } datosPeli={ unaPeli }/>
                   })
                } 
                </div>
                <div className="body-home">
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
export default Home;