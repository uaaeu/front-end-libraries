// Inline Styles
class Colorful extends React.Component {
  render() {
    return <div style={{ color: "red", fontSize: "72px" }}>Big Red</div>;
  }
}

// Add styles with a variable that defined first
const styles = { color: "purple", fontSize: 40, border: "2px solid purple" };
class Colorful extends React.Component {
  render() {
    return <div style={styles}>Style Me!</div>;
  }
}

// Change Inline CSS Conditionally Based on Component State
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    let inputStyle = {
      border: "1px solid black",
    };
    // Change Inline CSS Conditionally Based on Component State
    if (this.state.input.length > 15) {
      inputStyle.border = "3px solid red";
    }
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
