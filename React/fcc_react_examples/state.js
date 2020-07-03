class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Create a Stateful Component
    this.state = {
      name: "Name",
      surname: "Surname",
    };
  }
  render() {
    // Create a variable to render a state
    const surname = this.state.surname;
    return (
      <div>
        {/* Return state with this.state */}
        <h1>{this.state.name}</h1>
        {/* Return state with the variable that created */}
        <h1>{surname}</h1>
      </div>
    );
  }
}
