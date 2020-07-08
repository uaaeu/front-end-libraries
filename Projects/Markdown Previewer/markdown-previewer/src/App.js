import React, { Component } from "react";
import "./App.css";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";

let marked = require("marked");
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }
  updateMarkdown = (e) => {
    this.setState({
      markdown: e.target.value,
    });
  };
  render() {
    let { markdown } = this.state;
    console.log(this.state.markdown);
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlsTextarea">
            <FormLabel>Markdown Input</FormLabel>
            <FormControl
              componentclass="textarea"
              placeholder="Enter Markdown"
              value={markdown}
              onChange={this.updateMarkdown}
            ></FormControl>
          </FormGroup>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div dangerouslySetInnerHTML = {{__html: marked(markdown)}}></div>
        </div>
      </div>
    );
  }
}

export default App;
