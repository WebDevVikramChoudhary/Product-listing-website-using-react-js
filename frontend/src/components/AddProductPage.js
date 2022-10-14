import React from "react";
import { withRouter } from "react-router-dom";
import ProductActions from "../actions/ProductActions";
import ProductForm from "./ProductForm";
import { Link } from "react-router-dom";
import "./Styles.css";

class AddProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.saveProduct = this.saveProduct.bind(this);
  }
  saveProduct(product) {
    ProductActions.addProduct(product).then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <>
        <Link className="link" to="/About">
          About
        </Link>
        <Link className="link" to="/">
          Products
        </Link>
        <ProductForm onSave={this.saveProduct} />
      </>
    );
  }
}
export default withRouter(AddProductPage);
