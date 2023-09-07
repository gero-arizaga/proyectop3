import React, { Component } from "react";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";

class VerTodas extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }


render(){
    return(
        <section>
            {/* <h1>{this.props.data.map(function(unaPeli){
                    return <TarjetaPelicula key={ unaPeli.id } datosPeli={ unaPeli }/>
                   })
                }</h1> */}
        </section>
    )
    }
}
export default VerTodas