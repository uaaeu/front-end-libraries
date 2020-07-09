import React from "react";
import "./App.css";

let marked = require("marked");

const placeholder = `[comment]: <> (Enter your codes here to use the editor.)

# Markdown Previewer!

## This is a sub-heading...
### And some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// and this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org/uaaeu), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Header | Another Header?
----------- | ------------ | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://i.ibb.co/HnnSJ5g/uaaeu-react.png)
`;

// ReactDOM.render(<App/>, document.getElementById('app'))

class App extends React.Component {
  state = {
    text: placeholder,
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });

    return (
      <div>
        <h2 className="text-center mt-4 heading">Convert Your Markdown</h2>
        <p className="text-center mt-2 info">
          Use the editor below to input markdown and get a preview of what it
          would be displayed as.
        </p>
        <div className="row m-4">
          <div className="col-6">
            <h6 className="text-center heading">Editor</h6>
            <textarea
              className="form-control editor"
              id="editor"
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-6">
            <h6 className="text-center heading">Preview</h6>
            <div
              className="preview"
              dangerouslySetInnerHTML={{ __html: markdown }}
              id="preview"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;