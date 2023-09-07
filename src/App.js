import React from "react";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Favoritos from "./components/Favoritos/Favoritos";
import TarjetaPelicula from "./components/TarjetaPelicula/TarjetaPelicula";
import DetailPelicula from "./components/DetailPelicula/DetailPelicula"

function App() {

  return (
    <React.Fragment>
      <Header/>
      
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/favoritos" component={Favoritos}/>
        <Route path="/tarjetaPelicula" component={TarjetaPelicula}/>
        <Route path="/detallePelicula/:id" component={DetailPelicula}/>
        {/* <Route path="" component={404NotFound}/>  */}
      </Switch>

      <Footer/>
    </React.Fragment>
  );
}

export default App;
