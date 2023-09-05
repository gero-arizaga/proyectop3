import React, { Component } from "react";
import Footer from "../Footer/Footer"
import Header from "../Header/Header";
import Buscador from "../Buscador/Buscador";
import Peliculas from "../Peliculas/Peliculas";




class Home extends Component{
    constructor(){
        super()
        this.state = {}
    }


    componentDidMount(){
        //PELÍCULAS
        fetch(``)
            .then(response => response.json())
            .then(data => this.setState(
                {datos: data.image_url}
            ))
            .catch(error => console.log(error));


        //SERIES
        fetch(``)
            .then(response => response.json())
            .then(data => this.setState(
                {datos: data.image_url}
            ))
            .catch(error => console.log(error));
    }
    render(){
        return(    
            <section>              
              <React.Fragment>
                <Buscador/>
                <h1>My App in React</h1>
              </React.Fragment>
                
            </section>
        )
    }
}
export default Home;