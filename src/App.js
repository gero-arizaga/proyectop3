import React from "react";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Favoritos from "./screens/Favoritos/Favoritos";
import TarjetaPelicula from "./components/TarjetaPelicula/TarjetaPelicula";
import DetallePelicula from "./screens/DetallePelicula/DetallePelicula"
import Populares from "./screens/Populares/Populares";
import Cartelera from "./screens/Cartelera/Cartelera";
import NotFound from "./components/NotFound/NotFound";
import Resultados from "./screens/Resultados/Resultados";

function App() {

  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/favoritos" component={Favoritos}/>
        <Route path="/tarjetaPelicula" component={TarjetaPelicula}/>
        <Route path="/detallePelicula/:id" component={DetallePelicula}/>
        <Route path='/populares' component={Populares}/>
        <Route path='/cartelera' component={Cartelera}/>
        <Route path='/resultados/:query' component={Resultados}/>
        <Route component={NotFound}/>  
      </Switch>

      <Footer/>
    </React.Fragment>
  );
}

export default App;
