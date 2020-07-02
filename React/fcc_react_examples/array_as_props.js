const List = (props) => {
  // return given array as props with join method
  return <p>{props.tasks.join(", ")}</p>;
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        {/* attach an array to tasks props */}
        <List tasks={["learn code", "walk yourself"]} />
        <h2>Tomorrow</h2>
        <List tasks={["wrok-in", "work code", "walk code"]} />
      </div>
    );
  }
}
