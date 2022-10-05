import { Navbar, NavbarBrand } from "reactstrap";
import React, { Component } from "react";
// import "./css/App.css";
import Menu from "./MenuComponents";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
          <Menu />
        </Navbar>
      </div>
    );
  }
}

export default App;
