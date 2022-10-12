import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponents";
import DishDetail from "./DiskDetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  onDishSelect(dishID) {
    this.setState({ selectedDish: dishID });
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <Header />
        <Route path="/home" component={HomePage} />
        <Route
          exact
          path="/menu"
          component={() => <Menu dishes={this.state.dishes} />}
        />
        <Redirect to="/home" />
        <Footer />
      </div>
    );
  }
}
export default MainComponent;
