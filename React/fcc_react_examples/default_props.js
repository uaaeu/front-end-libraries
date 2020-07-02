// Default Props
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  );
};
// Make default props of ShoppingCart to items: 0
ShoppingCart.defaultProps = { items: 0 };

//Override Default Props
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

// declare defaultProps of Items props quantity 
Items.defaultProps = {
  quantity: 0,
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // default props overrided
    return <Items quantity={10} />;
  }
}
