import React from "react";
import Product from "./Product";

export default class ProductList extends React.Component {
  render() {
    let productNodes = this.props.products.map((product) => (
      <Product
        key={product.id}
        id={product.id}
        Name={product.Name}
        Quantity={product.Quantity}
        Price={product.Price}
      ></Product>
    ));
    return (
      <>
        <table>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>product Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{productNodes}</tbody>
        </table>
      </>
    );
  }
}
