import React, { Component } from "react";

class Filtro extends Component{
    constructor(props){
        super(props);
        this.state = {
           textoIngresado: '',
           peliculas: this.props.peliculas
        };
    }
    evitarSubmit(event){
        event.preventDefault();
    }
    
    render(){
        console.log(this.state.peliculas);
        return(
            <React.Fragment>
                <form className="buscadorNav" onSubmit={(e)=>this.evitarSubmit(e)}>
                    <input type="text" placeholder="Buscar una pelicula" value={this.props.textoIngresado} onChange={(e) => this.props.filtrarPeliculas(e)}/>
                </form>
            </React.Fragment>
        )
    }
    }
export default Filtro;