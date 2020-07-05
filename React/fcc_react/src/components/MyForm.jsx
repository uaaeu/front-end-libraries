import React from "react";

export class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.input,
      input: ''
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.submit}</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} placeholder="enter a note..." />
          <button type="submit">Add Note</button>
        </form>
      </div>
    );
  }
}
export default MyForm;