import React from "react";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Favoritos from "./components/Favoritos/Favoritos";

function App() {
  <React.Fragment>
  <Header/>
  <Switch>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/favoritos" component={Favoritos}/>
    <Route path="/todas" component={Todas}/>
    {/* <Route path="" component={404NotFound}/>  */}
  </Switch>
  <Footer/>
  </React.Fragment>

  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
}

export default App;
