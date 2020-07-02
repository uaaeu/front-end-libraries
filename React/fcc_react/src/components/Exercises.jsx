import React, { Component } from "react";

// Component with Composition
// Stateless Functional Component
const FooterComp = (props) => {
  return (
    <div>
      <h4>Because you awaken...</h4>
      <p>...from the biggest dream ever! <hr /> {props.date} </p>
    </div>
  );
};

// Render Nested Components
const BodyComp = () => {
  return (
    <div>
      <p>From orange sunshine to dark color revel</p>
      <ul>
        <li>Psilocyssss</li>
        <li>Ergotaminesd25</li>
        <li>Mimosa Hou Houst</li>
      </ul>
      <h3>Night night dear everything...</h3>
      <hr /> {/* Self-Closing JSX Tags */}
    </div>
  );
};

// React Component
export class Exercises extends Component {
  render() {
    return (
      // Define an HTML Class in JSX
      <div className="HeaderComp">
        <h1>Morning Sunshine</h1>
        <BodyComp />
        <FooterComp date="November 16 1938"/>
      </div>
    );
  }
}

export default Exercises;
