import React, { Component } from "react";

// React Component
export class Exercises extends Component {
  render() {
    // Stateless Functional Component
    const MyComponent = () => {
      return <div>Because you awaken...</div>;
    };
    return (
      <div className="myDiv">
        {/* Define an HTML Class in JSX */}
        <h1>Morning Sunshine</h1>
        <p>From orange sunshine to dark color revel</p>
        <ul>
          <li>Psilocybin</li>
          <li>Ergotamine</li>
          <li>Mimosa Hostilis</li>
        </ul>
        <h3>Night night dear everything...</h3>
        <hr /> {/* Self-Closing JSX Tags */}
        <MyComponent />
      </div>
    );
  }
}

export default Exercises;
