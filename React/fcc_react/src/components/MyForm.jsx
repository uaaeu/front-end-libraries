import React from "react";

export class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "add a note...",
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
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.submit}</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type="submit">Submit!</button>
        </form>
      </div>
    );
  }
}
export default MyForm;