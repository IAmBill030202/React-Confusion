//import components
import React, { Component } from "react";
import "./css/App.css";
//import redux
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
//import react router
import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";
class App extends Component {
  render() {
    const store = ConfigureStore();
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
