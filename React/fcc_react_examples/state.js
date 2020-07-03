class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Create a Stateful Component
    this.state = {
      name: "Name",
    };
  }
  render() {
    return (
      <div>
      {/* Return state with this.state */}
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
