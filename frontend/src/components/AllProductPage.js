import React from "react";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductStore from "../stores/ProductStore";
import InitializeActions from "../actions/InitializeActions";
import "./Styles.css";

export default class AllProductPage extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = {
      products: ProductStore.getAllProducts()
    };
  }

  componentDidMount() {
    ProductStore.addChangeListener(this._onChange);
    InitializeActions.initProducts();
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({ products: ProductStore.getAllProducts() });
  }

  render() {
    return (
      <div>
        <Link className="link" to="/About">
          About
        </Link>
        <Link className="link" to="/">
          Products
        </Link>
        <h1>Products</h1>
        <ProductList products={this.state.products} />
        <br />
        <Link to="/addProduct">Add Product</Link>
      </div>
    );
  }
}
