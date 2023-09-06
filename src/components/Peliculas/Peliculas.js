import React, {Component} from 'react';
import './CharacterCard.css'

class Peliculas extends Component{
    // constructor(props){
    //     super(props)
    //     this.state={
           
    //     }
    // }
    // componentDidMount(){
    //     fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
    //             .then(resopnse => Response.json)
    //             .then( data => this.setState(
    //                 {datos: data.image_url}
    //             ))
    //             .catch( error => console.log(error))
    //         }

    render(){
        // console.log(this.props);
        return(
             <article className='character-card'>
                <img src={this.props.datosPersonaje.image} alt="" />
                <h2>{this.props.datosPersonaje.name}</h2> {/* Nombre */}
                <p>{this.props.datosPersonaje.status}</p> {/* Estado */}
                <p>{this.props.datosPersonaje.species}</p> {/* Especie */}
                <p className='more'>Ver más</p> 
                <section className='extra'>
                    <p>Origen: {this.props.datosPersonaje.origin.name}</p> 
                </section>
                <p className='delete' onClick={()=>this.props.borrar(this.props.datosPersonaje.id)}>Borrar</p>
            </article>

        )
    }

}

export default Peliculas