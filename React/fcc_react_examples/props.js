const CurrentDate = (props) => {
    return (
      <div>
        { /* passed a prop to stateless component */ }
        <p>The current date is: {props.date}</p>
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* js Date() function added to date prop */ }
          <CurrentDate date={Date()}/>
        </div>
      );
    }
  };
  