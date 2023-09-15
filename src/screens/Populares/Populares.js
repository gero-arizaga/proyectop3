import React, { Component } from 'react';
import TarjetaPelicula from "../../components/TarjetaPelicula/TarjetaPelicula";
import './Populares.css'

class Populares extends Component{
    constructor(props){
        super(props);
        this.state = {
            populares:[],
            pagina:1,
        }
    };

    componentDidMount() { 
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1` 
        fetch(url)
        .then(response => response.json())
        .then( data => this.setState({
            populares: data.results,
        }))
        .catch(e => console.log(e))
    }
    traerMas(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1"+ this.state.pagina)
        .then( res => res.json())
            .then(data=> this.setState({
                populares: this.state.populares.concat(data.results),
                pagina: this.state.pagina + 1
            }))
            .catch(e => console.log(e))
    }

    render(){
        return(
            <section >
            <h3>POPULARES</h3> 
            <div className="pelisPop">
                { 
                    this.state.populares ?
                    (this.state.populares.map(function(unaPeli){
                    return <TarjetaPelicula key={ unaPeli.id } datosPeli={ unaPeli }/>
                    }))
                    
                    : (<h2>Cargando...</h2>)
                }
                <button className='botonMas' onClick={() => this.traerMas(this.state.populares)}>Traer Más</button>
            </div>
            

            </section> 
        )
    }
}
export default Populares