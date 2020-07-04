// Use the Lifecycle Method
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
