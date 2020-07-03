// Set State with this.setState
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State",
    };
    // bind handleClick
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Set the name state
    this.setState({
      name: "React Rocks!",
    });
  }
  render() {
    return (
      <div>
        {/* create button with onClick() handler that runs handleClick */}
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
