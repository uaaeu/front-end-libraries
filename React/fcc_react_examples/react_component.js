// React Component from Scratch
// Create Class that extends React.Component
class MyComponent extends React.Component {
  // Constructor that use props as parameter
  constructor(props) {
    // Super for Parent(React.Component)
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

// Render component to DOM
ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));
