// Optimize Re-Renders with shouldComponentUpdate
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  // shouldComponentUpdate method to return value if conditions is met
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should I update?");
    if (nextProps.value % 2 == 0) {
      return true;
    }
  }
  componentDidUpdate() {
    console.log("Component re-rendered.");
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
