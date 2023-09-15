import React, { Component } from 'react';
import TarjetaPelicula from "../../components/TarjetaPelicula/TarjetaPelicula";
import Filtro from '../../components/Filtro/Filtro';
import './Cartelera.css'

class Cartelera extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartelera:[],
            pagina:1,
            textoIngresado: '',
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
    filtrarPeliculas(e){
        this.setState({textoIngresado: e.target.value})
    }

    traerMas(){
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1"+ this.state.pagina)
        .then( res => res.json())
            .then(data=> this.setState({
                cartelera: this.state.cartelera.concat(data.results),
                pagina: this.state.pagina + 1
            }))
            .catch(e => console.log(e))
    }


    render(){
        return(
             <React.Fragment>
                {this.state.cartelera.length > 0 ?
                <section>
                <div className='tituloYfiltro'>
                    <h3>CARTELERA</h3> 
                    <Filtro textoIngresado={this.state.textoIngresado} filtrarPeliculas={(e) => this.filtrarPeliculas(e) }/>
                </div>
                <div className="pelisCartelera">
                    {this.state.cartelera.map((unaPeli) => {
                        if (unaPeli.title.toLowerCase().includes(this.state.textoIngresado.toLowerCase())){
                            return <TarjetaPelicula key={ unaPeli.id } datosPeli={ unaPeli }/>
                        }
                    })}
                <button className='botonMas' onClick={() => this.traerMas(this.state.populares)}>Traer Más</button>
                </div>
                </section>:
                <h2>Cargando <img src="/img/loading.gif" height='20px' alt=''/></h2>
                }
            </React.Fragment>
        )
    }
}
export default Cartelera