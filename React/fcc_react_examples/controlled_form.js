class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    // Binding methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
// handleChange method to change input
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  // handleSubmit method to set state of submit
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.input,
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Create an input area with value of input and onChange method to call handleChange */}
          <input value={this.state.input} onChange={this.handleChange} />
          {/* A submit button to change input */}
          <button type="submit">Submit!</button>
        </form>
        {/* A headline with text that user write to input */}
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
