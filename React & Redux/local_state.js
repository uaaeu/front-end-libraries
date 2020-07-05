// Manage State Locally
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
      messages: this.state.messages,
    });
  }
  submitMessage() {
    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input],
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          onChange={this.handleChange.bind(this)}
          value={this.state.input}
        />
        <button onClick={this.submitMessage.bind(this)}>Add Messages</button>
        <ul>
          {this.state.messages.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </div>
    );
  }
}
