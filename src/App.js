import React from "react";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Favoritos from "./components/Favoritos/Favoritos";
import TarjetaPelicula from "./components/TarjetaPelicula/TarjetaPelicula";
import VerTodas from "./components/VerTodas/VerTodas";
import NotFound from "./components/NotFound/NotFound";

function App() {

  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/favoritos" component={Favoritos}/>
        <Route path="/tarjetaPelicula" component={TarjetaPelicula}/>
        <Route path='/verTodas' component={VerTodas}/>
        <Route component={NotFound}/>  
      </Switch>

      <Footer/>
    </React.Fragment>
  );
}

export default App;
