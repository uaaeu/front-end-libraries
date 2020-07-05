const reducer = (state = 5) => {
  return state;
};

// Redux methods are available from a Redux object
// Create a Redux Store
const store = Redux.createStore(reducer);

// Get State from the Redux Store
const currentState = store.getState();
