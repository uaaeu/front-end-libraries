// Using Props with Stateless Functional Components
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}
// Create stateless component that returns name props
const Camper = (props) => <p>{props.name}</p>;

// Define required type for name prop
Camper.propTypes = { name: PropTypes.string.isRequired };
// Set default for name prop
Camper.defaultProps = { name: "CamperBot" };
