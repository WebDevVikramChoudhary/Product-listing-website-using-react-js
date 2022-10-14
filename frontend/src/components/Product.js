import React from "react";
import { Link, Prompt } from "react-router-dom";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    loggedIn: true
  };
  handleclick = () => {
    this.setState({ loggedIn: false });
  };

  render() {
    const path = `/product/${this.props.Name}`;
    return (
      <tr>
        {/* <td>{this.props.id}</td> */}
        <td>
          <Link onClick={this.handleclick.bind(this)} to={path}>
            {this.props.Name}
          </Link>
        </td>
        <Prompt
          when={this.state.loggedIn}
          message={(location) => {
            return location.pathname.startsWith("/product")
              ? "Are you sure you want to view the Product?"
              : true;
          }}
        />
        <td>{this.props.Price}</td>
        <td>{this.props.Quantity}</td>
      </tr>
    );
  }
}
