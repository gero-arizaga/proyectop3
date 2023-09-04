import React from "react";
import Footer from "../Footer/Footer"
import Header from "../Header/Header";
import Buscador from "../Buscador/Buscador";
import Peliculas from "../Peliculas/Peliculas";


function Home() {

  return (
    <React.Fragment>
      <Buscador/>
      <h1>My App in React</h1>
    </React.Fragment>
  );
}

export default Home;
