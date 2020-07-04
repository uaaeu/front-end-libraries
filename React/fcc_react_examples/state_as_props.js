// Pass State as Props to Child Components
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CamperBot",
    };
  }
  render() {
    return (
      <div>
        {/* Render Navbar component as child and add name prop as state.name */}
        <Navbar name={this.state.name} />
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* name prop added which is created in parent render */}
        <h1>Hello, my name is: {this.props.name} </h1>
      </div>
    );
  }
}
