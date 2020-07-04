import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // Bind increment, decrement and reset buttons
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  // Create increment, decrement and reset methods
  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  decrement() {
    this.setState((state) => ({
      // Create if statement to escape from negatives
      count: state.count > 0 ? state.count - 1 : state.count,
    }));
  }
  reset() {
    this.setState((state) => ({
      count: 0,
    }));
  }
  render() {
    return (
      <div>
        <h3>Experienced Travels: {this.state.count}</h3>
        <button className="inc" onClick={this.increment}>
          +
        </button>
        <button className="dec" onClick={this.decrement}>
          -
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
