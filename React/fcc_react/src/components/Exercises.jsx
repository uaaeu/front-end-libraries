import React, { Component } from "react";
import Counter from './Counter'

// Component with Composition
// Stateless Functional Component
const FooterComp = (props) => {
  return (
    <div>
      <h4>Because you awaken...</h4>
      <p>...from the biggest dreamen! <hr /> {props.date} </p>
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
  // Constructor created for states
  constructor(props) {
    super(props);
    // Created a state named bicycleDay
    this.state = {
      bicycleDay: 'Bicycle Day'
    }
    // Created a handleClick to bind click
    this.handleClick = this.handleClick.bind(this);
  }
  // A handleClick function to set state of bicycleDay
  handleClick() {
    this.setState({
      bicycleDay: 'April 19, 1943'
    })
  }
  render() {
    return (
      // Define an HTML Class in JSX
      <div className="HeaderComp">
        <h1>Morning Glory</h1>
        <BodyComp />
        <FooterComp date="November 16, 1938"/>
        {/* Create a button with onClick handler to change button name while clicked */}
        <p>made</p>
        <button onClick={this.handleClick}>{this.state.bicycleDay}</button>
        <Counter />
      </div>
    );
  }
}

export default Exercises;
