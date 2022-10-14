import React from "react";

import { Link } from "react-router-dom";
import "../App.css";
import "./Styles.css";

class About extends React.Component {
  render() {
    return (
      <section>
        <Link className="link" to="/About">
          About
        </Link>
        <Link className="link" to="/">
          Products
        </Link>

        <h1>About: this application provides information about the Products</h1>
      </section>
    );
  }
}
export default About;
