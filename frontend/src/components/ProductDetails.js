import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

const ProductDetails = (props) => {
  return (
    <>
      <Link className="link" to="/About">
        About
      </Link>
      <Link className="link" to="/">
        Products
      </Link>
      <h1>Product Name</h1>
      <p>
        <strong>Name: </strong>
        {props.match.params.Name}
      </p>
      <br />
      <Link to="/">
        <strong>Back</strong>
      </Link>
    </>
  );
};

export default ProductDetails;
