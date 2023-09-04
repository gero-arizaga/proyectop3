import React, { Component } from "react";

class Populares extends Component{
    constructor(props){
        super(props);
        this.state = {valor: ''};
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
                .then(resopnse => Response.json)
                .then( data => this.setState(
                    {datos: data.image_url}
                ))
                .catch( error => console.log(error))
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}
export default Populares