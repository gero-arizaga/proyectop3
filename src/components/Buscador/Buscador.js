import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Buscador extends Component{
    constructor(props){
        super(props);
        this.state = {
            valor: '',
            peliculas: []
        };
    }
    evitarSubmit(event){
        event.preventDefault();
    }
    controlarCambios(event){
        this.setState({valor: event.target.value})
    }

    
    render(){
        console.log(this.state.peliculas);
        return(
        <form onSubmit={(event)=>this.evitarSubmit(event)}>
            <input type="text" placeholder="Buscar" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor}/>
            <Link to={`/resultados/${this.state.valor}`}><button type="submit" value="Submit">Buscar</button></Link>
            
        </form>
        )
    }
    }
export default Buscador;