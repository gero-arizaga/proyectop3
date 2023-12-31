import React, { Component } from "react";
import TarjetaPelicula from "../../components/TarjetaPelicula/TarjetaPelicula";

class Favoritos extends Component{
    constructor(){
        super()
        this.state = {
            favoritos : []
        }
    }
    
    componentDidMount(){
        let listaFavs = []
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null){
            let pelisFavoritos = JSON.parse(recuperoStorage);
            listaFavs = pelisFavoritos;
            let pelisLista = [];
            
            listaFavs.forEach((id)=>{
                return(
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=45a63508e52c71549188d480ab5f1a32&language=en-US&page=1`)
                    .then(response => response.json())
                    .then( listaFavs => {
                        pelisLista.push(listaFavs);
                        this.setState({favoritos : pelisLista})
                        })
                    .catch(e => console.log(e))
                    )
                })
            }
        }
    render(){
        return(
            <React.Fragment>
                {this.state.favoritos.length > 0 ?
                <section>
                <h2>Favoritos</h2>
                <div className="pelisPop">
                    {this.state.favoritos.map(
                    (pelisFavoritos, idx) => <TarjetaPelicula key={ pelisFavoritos + idx } datosPeli={ pelisFavoritos }/>

                    )}
                </div>
                </section>:
                <h2>Cargando <img src="/img/loading.gif" height='20px' alt=''/></h2>}
            </React.Fragment>
        )
    }
}

export default Favoritos;