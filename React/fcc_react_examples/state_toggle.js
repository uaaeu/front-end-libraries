class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    // Create toggleVisibility and bind this to action 
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  // Create toggleVisibility function and use state to toggle visibility element and change it
  toggleVisibility() {
    this.setState((state) => ({
      visibility: !state.visibility
    }));
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
