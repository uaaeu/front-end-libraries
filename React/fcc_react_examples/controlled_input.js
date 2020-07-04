class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  // Create handleChange method with 'event' parameter
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  render() {
    return (
      <div>
        {/* Create an input with state.input value and onChange method to call handleChange method */}
        <input
          value={this.state.input}
          onChange={this.handleChange.bind(this)}
        />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}
