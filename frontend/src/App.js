import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllProductPage from "./components/AllProductPage";
import AddProductPage from "./components/AddProductPage";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/About" component={About}></Route>
          <Route exact path="/" component={AllProductPage} />
          <Route path="/addProduct" component={AddProductPage} />
          <Route path="/Product/:Name" component={ProductDetails} />
          <Switch></Switch>
        </div>
      </Router>
    );
  }
}
