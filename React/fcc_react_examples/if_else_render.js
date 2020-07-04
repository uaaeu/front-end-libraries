class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display,
    });
  }
  render() {
    // if statement to check state boolean
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }
}

// or we can use && instead of if/else
return (
  <div>
    <button onClick={this.toggleDisplay}>Toggle Display</button>
    {this.state.display && <h1>Displayed!</h1>}
  </div>
);
