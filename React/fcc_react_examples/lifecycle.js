// Use the Lifecycle Method componenetWillMount
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  // componenetWillMount method to catch components at certain points in time.
  componentWillMount() {
    console.log("test");
  }
  render() {
    return <div />;
  }
}

// Use the Lifecycle Method componenetDidMount
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null,
    };
  }
  // componenetDidMount method is called after a component is mounted to the DOM.
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273,
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
