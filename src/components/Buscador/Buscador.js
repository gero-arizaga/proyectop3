import React, { Component } from "react";

class Buscador extends Component{
    constructor(props){
        super(props);
        this.state = {valor: ''};
    }
    evitarSubmit(event){
        event.preventDefault();
    }
    controlarCambios(event){
        this.setState({valor: event.target.value})
    }

    render(){
        return(
        <form onSubmit={(event)=>this.evitarSubmit(event)}>
            <label>Buscador</label>
            <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor}/>
            <input type="submit" value="Submit"/>
        </form>
        )
    }
    }
export default Buscador;