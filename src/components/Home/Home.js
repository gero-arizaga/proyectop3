import React, { Component } from "react";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";
import './Home.css'

class Home extends Component{
    constructor(){
        super()
        this.state = {
<<<<<<< HEAD
            populares: [],
            cartelera: []
=======
            peliculas:[],
>>>>>>> d94cd757648975ad55b366e5ae2f0e4c67e50d02
        }
    }


    componentDidMount(){
<<<<<<< HEAD
        //PELÍCULAS POPULARES
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=45a63508e52c71549188d480ab5f1a32&language=en-US&page=1')
        .then(response => response.json())
        .then( data => this.setState({
            populares: data.results
=======
        //PELÍCULAS
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1' 
        fetch(url)
        .then(response => response.json())
        .then( data => this.setState({
            peliculas: data.results,
>>>>>>> d94cd757648975ad55b366e5ae2f0e4c67e50d02
        }))
        .catch(e => console.log(e))
    

<<<<<<< HEAD
        // PELICULAS EN CARTELERA
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=45a63508e52c71549188d480ab5f1a32&language=en-US&page=1')
            .then(response => response.json())
             .then(data => this.setState({
                cartelera: data.results
            }))
             .catch(error => console.log(error));
=======
        //
        // fetch(``)
        //     .then(response => response.json())
        //     .then(data => this.setState(
        //         {series: data}
        //     ))
        //     .catch(error => console.log(error));
>>>>>>> d94cd757648975ad55b366e5ae2f0e4c67e50d02
    }
    render(){
        console.log(this.state);
        return(    
            <section className="body-home">              
              <div>
                    {/* { this.state.datos === []?
                    <h3>Cargando...</h3>:
                    <h3>{this.state.datos}</h3>} */}
                </div>
                 { 
                   this.state.populares.map(function(unaPeli){
                    return <TarjetaPelicula key={ unaPeli.id } datosPeli={ unaPeli }/>
                   })
                } 
            </section>
        )
    }
}
export default Home;