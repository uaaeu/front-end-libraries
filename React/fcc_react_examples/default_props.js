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
