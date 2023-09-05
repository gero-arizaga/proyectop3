import React, { Component } from "react";
import Buscador from "../Buscador/Buscador";
import Peliculas from "../Peliculas/Peliculas";


class Home extends Component{
    constructor(){
        super()
        this.state = {
            datos:''
        };
    }


    componentDidMount(){
        //PELÍCULAS
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1` 
        fetch({url})
            .then(response => response.json())
            .then(data => this.setState(
                {datos: data}
            ))
            .catch(error => console.log(error));

        //
        // fetch(``)
        //     .then(response => response.json())
        //     .then(data => this.setState(
        //         {datos: data}
        //     ))
        //     .catch(error => console.log(error));
    }
    render(){
        return(    
            <section>              
              <React.Fragment>
                <Buscador/>
                <h1>My App in React</h1>
              </React.Fragment> 
              <div>
                    { this.state.datos === ''?
                    <h3>Cargando...</h3>:
                    <h3>{this.state.datos}</h3>}
                </div>
            </section>
        )
    }
}
export default Home;