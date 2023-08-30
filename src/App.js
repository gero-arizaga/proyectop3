import React from "react";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  <Switch>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/rick" component={Rick}/>
    <Route path="" component={404NotFound}/>
  </Switch>
  

  return (
    <React.Fragment>
      <Navbar />
      <h1>My App in React</h1>
      <main>       
        <p>??</p>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
